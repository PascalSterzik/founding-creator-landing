'use client';

import { useState, useEffect } from 'react';
import { useSlotCount } from '@/lib/slotTracker';

const TOTAL_SLOTS = 50;

/**
 * NAVBAR — ZERO FRAMER MOTION
 *
 * Previous attempts to fix the mobile header shift used Framer Motion
 * with various workarounds. All failed because Framer Motion applies
 * CSS transforms that cause rendering issues on mobile when the browser
 * address bar collapses/expands during scroll.
 *
 * This version uses ONLY:
 * - position: fixed (outer wrapper, no transforms ever)
 * - CSS @keyframes for entrance animation
 * - CSS transitions for state changes (scroll, CTA reveal)
 * - Zero transform properties anywhere
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const [mounted, setMounted] = useState(false);

  const remaining = useSlotCount();
  const filledPercent = (remaining / TOTAL_SLOTS) * 100;

  useEffect(() => {
    // Trigger entrance animation after mount
    requestAnimationFrame(() => setMounted(true));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Show CTA when user scrolls to the solution section
    const target = document.getElementById('solution-bridge');
    let observer;
    if (target) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShowCTA(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(target);
    }

    // Fallback: show CTA after 30 seconds regardless
    const timer = setTimeout(() => setShowCTA(true), 30000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer) observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const scrollToForm = (e) => {
    e.preventDefault();
    const form = document.getElementById('bewerbung');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        padding: '16px 16px 0',
        /* NO transform, NO will-change, NO backdrop-filter on this element */
      }}
    >
      <nav
        className="navbar-pill"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          width: '100%',
          maxWidth: showCTA ? '64rem' : '30rem',
          borderRadius: '100px',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          backgroundColor: isScrolled
            ? 'rgba(253, 250, 249, 0.92)'
            : 'rgba(253, 250, 249, 0.75)',
          border: isScrolled
            ? '1px solid rgba(75, 50, 45, 0.1)'
            : '1px solid rgba(75, 50, 45, 0.06)',
          boxShadow: isScrolled
            ? '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.04)'
            : '0 4px 16px rgba(0, 0, 0, 0.06)',
          gap: '8px',
          opacity: mounted ? 1 : 0,
          /* CSS transitions for all state changes, NO transforms */
          transition: [
            'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            'max-width 2.5s cubic-bezier(0.16, 1, 0.3, 1)',
            'background-color 0.3s ease',
            'border 0.3s ease',
            'box-shadow 0.3s ease',
          ].join(', '),
        }}
      >
        {/* Logo (left) */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          <img
            src="/influbook-logo.png"
            alt="Influbook"
            style={{
              height: '28px',
              width: 'auto',
              display: 'block',
            }}
          />
        </a>

        {/* Desktop: Urgency Indicator (center) */}
        <div
          className="hidden sm:flex"
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              color: 'var(--text-secondary)',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.2px',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ color: 'var(--accent)', fontWeight: '700' }}>{remaining}</span>
            <span style={{ color: 'var(--text-muted)' }}> von </span>
            <span>{TOTAL_SLOTS}</span>
            {' '}Bonusplätze
          </span>
          <div
            style={{
              width: '120px',
              height: '3px',
              borderRadius: '9999px',
              overflow: 'hidden',
              backgroundColor: 'rgba(201, 140, 131, 0.12)',
            }}
          >
            <div
              className="navbar-progress-fill"
              style={{
                height: '100%',
                borderRadius: '9999px',
                background: 'linear-gradient(90deg, var(--accent), #d4a099)',
                '--target-width': `${filledPercent}%`,
              }}
            />
          </div>
        </div>

        {/* Mobile: progress bar OR CTA button */}
        <div className="sm:hidden" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          {!showCTA ? (
            /* Before CTA: show progress bar on mobile */
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
              <span
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.2px',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{ color: 'var(--accent)', fontWeight: '700' }}>{remaining}</span>
                <span style={{ color: 'var(--text-muted)' }}> von </span>
                <span>{TOTAL_SLOTS}</span>
                {' '}Bonusplätze
              </span>
              <div
                style={{
                  width: '120px',
                  height: '3px',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(201, 140, 131, 0.12)',
                }}
              >
                <div
                  className="navbar-progress-fill"
                  style={{
                    height: '100%',
                    borderRadius: '9999px',
                    background: 'linear-gradient(90deg, var(--accent), #d4a099)',
                    '--target-width': `${filledPercent}%`,
                  }}
                />
              </div>
            </div>
          ) : (
            /* After CTA: button with compact progress bar */
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button
                onClick={scrollToForm}
                className="navbar-cta-btn"
                style={{
                  position: 'relative',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  background: 'linear-gradient(180deg, #d4a099 0%, var(--accent) 40%, #b5736a 100%)',
                  boxShadow: '0 4px 12px rgba(201, 140, 131, 0.35), 0 2px 4px rgba(201, 140, 131, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 -1px 2px rgba(0, 0, 0, 0.15)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)',
                  overflow: 'hidden',
                }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>Jetzt bewerben</span>
              </button>
              {/* Compact progress bar under button */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '9px', fontWeight: '600', whiteSpace: 'nowrap' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: '700' }}>{remaining}</span>
                  <span> / {TOTAL_SLOTS}</span> Bonusplätze
                </span>
                <div style={{ width: '80px', height: '2px', borderRadius: '9999px', overflow: 'hidden', marginTop: '2px', backgroundColor: 'rgba(201, 140, 131, 0.12)' }}>
                  <div style={{ height: '100%', borderRadius: '9999px', width: `${filledPercent}%`, background: 'linear-gradient(90deg, var(--accent), #d4a099)' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop: CTA Button (right side) */}
        <div
          className="hidden sm:flex"
          style={{
            flexShrink: 0,
            width: showCTA ? '160px' : '0px',
            marginLeft: showCTA ? '12px' : '0px',
            opacity: showCTA ? 1 : 0,
            overflow: 'visible',
            transition: [
              'width 2.5s cubic-bezier(0.16, 1, 0.3, 1)',
              'margin-left 2.5s cubic-bezier(0.16, 1, 0.3, 1)',
              'opacity 0.8s ease-out 0.4s',
            ].join(', '),
          }}
        >
          <button
            onClick={scrollToForm}
            className="navbar-cta-btn"
            style={{
              position: 'relative',
              padding: '10px 20px',
              borderRadius: '9999px',
              color: 'white',
              fontWeight: '600',
              fontSize: '14px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              width: '160px',
              background: 'linear-gradient(180deg, #d4a099 0%, var(--accent) 40%, #b5736a 100%)',
              boxShadow: '0 4px 12px rgba(201, 140, 131, 0.35), 0 2px 4px rgba(201, 140, 131, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 -1px 2px rgba(0, 0, 0, 0.15)',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)',
              overflow: 'hidden',
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>Jetzt bewerben</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
