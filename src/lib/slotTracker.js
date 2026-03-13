'use client';

import { useState, useEffect, useCallback } from 'react';

const SUPABASE_URL = 'https://brvebfxaexxjghvwyidy.supabase.co';
const EDGE_FUNCTION_URL = `${SUPABASE_URL}/functions/v1/slot-count`;

const FALLBACK_REMAINING = 55;
const TOTAL_SLOTS = 55;

// Shared state across all hook instances
let cachedRemaining = null;
let listeners = new Set();

function notify() {
  listeners.forEach((fn) => fn(cachedRemaining));
}

/**
 * Hook that returns the current remaining slot count.
 * Fetches from Supabase edge function on mount, shares state across components.
 */
export function useSlotCount() {
  const [remaining, setRemaining] = useState(cachedRemaining ?? FALLBACK_REMAINING);

  useEffect(() => {
    // Subscribe to shared state updates
    const listener = (val) => setRemaining(val);
    listeners.add(listener);

    // Fetch if not yet cached
    if (cachedRemaining === null) {
      fetch(EDGE_FUNCTION_URL)
        .then((res) => res.json())
        .then((data) => {
          if (typeof data.remaining === 'number') {
            cachedRemaining = data.remaining;
            notify();
          }
        })
        .catch(() => {
          // Keep fallback
        });
    }

    return () => {
      listeners.delete(listener);
    };
  }, []);

  return remaining;
}

/**
 * Decrement slot count after form submission.
 * Calls POST to edge function and updates all listeners.
 */
export async function decrementSlot() {
  try {
    const res = await fetch(EDGE_FUNCTION_URL, { method: 'POST' });
    const data = await res.json();
    if (typeof data.remaining === 'number') {
      cachedRemaining = data.remaining;
      notify();
      return data.remaining;
    }
  } catch {
    // Optimistic local decrement
    if (cachedRemaining !== null && cachedRemaining > 0) {
      cachedRemaining -= 1;
      notify();
    }
  }
  return cachedRemaining ?? FALLBACK_REMAINING;
}
