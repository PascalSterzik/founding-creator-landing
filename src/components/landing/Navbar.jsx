'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useSlotCount } from '@/lib/slotTracker';

const TOTAL_SLOTS = 50;

/**
 * NAVBAR — ATTEMPT 4: BULLETPROOF MOBILE FIX
 *
 * Root cause analysis after 3 failed attempts:
 * 1. backdrop-filter on children of fixed elements causes jitter on iOS Safari
 *    during address bar collapse/expand (known WebKit compositor bug)
 * 2. React state changes (setIsScrolled) during scroll trigger re-renders,
 *    which cause layout recalculations during the address bar transition
 *
 * This version:
 * - NO backdrop-filter anywhere (replaced with solid semi-transparent bg)
 * - NO React state for scroll detection (uses ref + direct DOM classList)
 * - NO Framer Motion (CSS only)
 * - NO transforms of any kind
 * - Scroll handler uses requestAnimationFrame for smooth performance
 */
export default function Navbar() {
  const [showCTA, setShowCTA] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navRef = useRef(null);
  const rafRef = useRef(null);
  const lastScrolled = useRef(false);

  const remaining = useSlotCount();
  const filledPercent = (remaining / TOTAL_SLOTS) * 100;

  // Scroll detection via direct DOM manipulation — NO setState, NO re-renders
  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== lastScrolled.current) {
        lastScrolled.current = scrolled;
        if (navRef.current) {
          if (scrolled) {
            navRef.current.classList.add('navbar-scrolled');
          } else {
            navRef.current.classList.remove('navbar-scrolled');
          }
        }
      }
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Show CTA when user reaches solution section
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

    const timer = setTimeout(() => setShowCTA(true), 30000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (observer) observer.disconnect();
      clearTimeout(timer);
    };
  }, [handleScroll]);

  const scrollToForm = (e) => {
    e.preventDefault();
    const form = document.getElementById('bewerbung');
    if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="navbar-fixed-wrapper">
      <nav
        ref={navRef}
        className={`navbar-pill ${showCTA ? 'navbar-expanded' : ''}`}
        style={{ opacity: mounted ? 1 : 0 }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="navbar-logo-link"
        >
          <img
            src="/influbook-logo.png"
            alt="Influbook"
            className="navbar-logo-img"
          />
        </a>

        {/* Desktop: Urgency Indicator (center) */}
        <div className="navbar-progress hidden sm:flex">
          <span className="navbar-progress-label">
            <span className="navbar-progress-count">{remaining}</span>
            <span className="navbar-progress-separator"> von </span>
            <span>{TOTAL_SLOTS}</span>
            {' '}Bonusplätze
          </span>
          <div className="navbar-progress-track">
            <div
              className="navbar-progress-fill"
              style={{ '--target-width': `${filledPercent}%` }}
            />
          </div>
        </div>

        {/* Mobile: progress bar OR CTA button */}
        <div className="sm:hidden navbar-mobile-right">
          {!showCTA ? (
            <div className="navbar-progress">
              <span className="navbar-progress-label">
                <span className="navbar-progress-count">{remaining}</span>
                <span className="navbar-progress-separator"> von </span>
                <span>{TOTAL_SLOTS}</span>
                {' '}Bonusplätze
              </span>
              <div className="navbar-progress-track">
                <div
                  className="navbar-progress-fill"
                  style={{ '--target-width': `${filledPercent}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="navbar-mobile-cta-group">
              <button onClick={scrollToForm} className="navbar-cta-btn">
                Jetzt bewerben
              </button>
              <div className="navbar-micro-progress">
                <span className="navbar-micro-label">
                  <span className="navbar-progress-count">{remaining}</span>
                  <span> / {TOTAL_SLOTS}</span> Bonusplätze
                </span>
                <div className="navbar-micro-track">
                  <div
                    className="navbar-micro-bar"
                    style={{ width: `${filledPercent}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop: CTA Button (right) */}
        <div className={`navbar-desktop-cta hidden sm:flex ${showCTA ? 'navbar-desktop-cta-visible' : ''}`}>
          <button onClick={scrollToForm} className="navbar-cta-btn navbar-cta-btn-desktop">
            Jetzt bewerben
          </button>
        </div>
      </nav>
    </div>
  );
}
