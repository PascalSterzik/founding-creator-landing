'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSlotCount } from '@/lib/slotTracker';

const TOTAL_SLOTS = 50;

// IMPORTANT: ProgressBar is defined OUTSIDE of Navbar so React sees the same
// component type across re-renders. If defined inside, every Navbar re-render
// creates a new function → React unmounts/remounts the DOM → CSS animation restarts.
const ProgressBar = ({ remaining, filledPercent, className = '' }) => (
  <div className={`flex flex-col items-center gap-1 flex-shrink-0 ${className}`}>
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
      className="rounded-full overflow-hidden"
      style={{
        width: '140px',
        height: '3px',
        backgroundColor: 'rgba(201, 140, 131, 0.12)',
      }}
    >
      {/* CSS @keyframes animation: plays once on mount, holds final state via
          animation-fill-mode: both. Never restarts because the DOM element
          persists across parent re-renders (component defined outside). */}
      <div
        className="h-full rounded-full navbar-progress-fill"
        style={{
          background: 'linear-gradient(90deg, var(--accent), #d4a099)',
          '--target-width': `${filledPercent}%`,
        }}
      />
    </div>
  </div>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  const remaining = useSlotCount();
  const filledPercent = ((remaining / TOTAL_SLOTS) * 100);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Show CTA when user scrolls to the CreatorBridge solution section
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
    const timer = setTimeout(() => {
      setShowCTA(true);
    }, 30000);

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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Nav pill */}
          <motion.nav
            className="flex flex-wrap items-center justify-between mt-4 px-4 sm:px-8 py-3 w-full"
            initial={{ maxWidth: '30rem' }}
            animate={{
              maxWidth: showCTA ? '64rem' : '30rem',
            }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
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
              transition: 'background-color 0.3s ease, border 0.3s ease, box-shadow 0.3s ease',
              gap: '8px',
            }}
          >
            {/* Logo (left) */}
            <motion.a
              href="#"
              className="flex items-center gap-1 cursor-pointer flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: 'var(--cocoa)',
                  fontWeight: '700',
                  fontSize: '20px',
                }}
              >
                Creator
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: 'var(--accent)',
                  fontStyle: 'italic',
                  fontWeight: '600',
                  fontSize: '20px',
                }}
              >
                Bridge
              </span>
            </motion.a>

            {/* Desktop: Urgency Indicator (always visible, center) */}
            <ProgressBar remaining={remaining} filledPercent={filledPercent} className="hidden sm:flex" />

            {/* Mobile: progress bar before CTA, then button + tiny bar after CTA */}
            <div className="sm:hidden flex flex-col items-end">
              {!showCTA ? (
                /* Before CTA: show progress bar on mobile */
                <ProgressBar remaining={remaining} filledPercent={filledPercent} />
              ) : (
                /* After CTA: button with compact progress bar directly underneath */
                <div className="flex flex-col items-center">
                  <motion.button
                    onClick={scrollToForm}
                    className="relative px-5 py-2.5 rounded-full text-white font-semibold text-sm overflow-hidden cursor-pointer whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ opacity: { duration: 0.5, ease: 'easeOut' } }}
                    style={{
                      background: 'linear-gradient(180deg, #d4a099 0%, var(--accent) 40%, #b5736a 100%)',
                      boxShadow: '0 4px 12px rgba(201, 140, 131, 0.35), 0 2px 4px rgba(201, 140, 131, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 -1px 2px rgba(0, 0, 0, 0.15)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 8px 20px rgba(201, 140, 131, 0.45), 0 3px 6px rgba(201, 140, 131, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.35), inset 0 -1px 2px rgba(0, 0, 0, 0.15)',
                    }}
                    whileTap={{
                      scale: 0.96,
                      boxShadow: '0 1px 4px rgba(201, 140, 131, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.15), inset 0 -1px 1px rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-[45%] rounded-t-full pointer-events-none"
                      style={{
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%)',
                      }}
                    />
                    <span className="relative" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)' }}>Jetzt bewerben</span>
                  </motion.button>
                  {/* Compact progress bar directly under button */}
                  <motion.div
                    className="flex flex-col items-center mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <span style={{ color: 'var(--text-muted)', fontSize: '9px', fontWeight: '600', whiteSpace: 'nowrap' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: '700' }}>{remaining}</span>
                      <span> / {TOTAL_SLOTS}</span> Bonusplätze
                    </span>
                    <div className="rounded-full overflow-hidden mt-0.5" style={{ width: '100px', height: '2px', backgroundColor: 'rgba(201, 140, 131, 0.12)' }}>
                      <div className="h-full rounded-full" style={{ width: `${filledPercent}%`, background: 'linear-gradient(90deg, var(--accent), #d4a099)' }} />
                    </div>
                  </motion.div>
                </div>
              )}
            </div>

            {/* Desktop: CTA Button (right side, appears with simple opacity fade) */}
            <motion.div
              className="hidden sm:flex flex-shrink-0"
              initial={{ width: 0, marginLeft: 0, opacity: 0 }}
              animate={{
                width: showCTA ? 160 : 0,
                marginLeft: showCTA ? 12 : 0,
                opacity: showCTA ? 1 : 0,
              }}
              transition={{
                width: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
                marginLeft: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.8, ease: 'easeOut', delay: 0.4 },
              }}
              style={{ overflow: 'visible' }}
            >
              <motion.button
                onClick={scrollToForm}
                className="relative px-5 py-2.5 rounded-full text-white font-semibold text-sm overflow-hidden cursor-pointer whitespace-nowrap"
                style={{
                  background: 'linear-gradient(180deg, #d4a099 0%, var(--accent) 40%, #b5736a 100%)',
                  boxShadow: '0 4px 12px rgba(201, 140, 131, 0.35), 0 2px 4px rgba(201, 140, 131, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 -1px 2px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  width: '160px',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 20px rgba(201, 140, 131, 0.45), 0 3px 6px rgba(201, 140, 131, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.35), inset 0 -1px 2px rgba(0, 0, 0, 0.15)',
                }}
                whileTap={{
                  scale: 0.96,
                  boxShadow: '0 1px 4px rgba(201, 140, 131, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.15), inset 0 -1px 1px rgba(255, 255, 255, 0.1)',
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-[45%] rounded-t-full pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%)',
                  }}
                />
                <span className="relative" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)' }}>Jetzt bewerben</span>
              </motion.button>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
