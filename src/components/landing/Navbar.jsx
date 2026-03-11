'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TOTAL_SLOTS = 100;
const REMAINING_SLOTS = 100; // Update this as slots fill up

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  const filledPercent = ((REMAINING_SLOTS / TOTAL_SLOTS) * 100);

  useEffect(() => {
    setIsVisible(true);

    // Show CTA after 20 seconds OR when scrolling past 2000px
    const timer = setTimeout(() => setShowCTA(true), 20000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (window.scrollY > 2000) setShowCTA(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
          {/* Wide pill-shaped container */}
          <motion.nav
            className="flex items-center w-full max-w-5xl mt-4 px-4 sm:px-8 py-3"
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
              justifyContent: showCTA ? 'space-between' : 'space-between',
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

            {/* Center: Urgency Indicator with progress bar (hidden on mobile) */}
            {/* When no CTA: centered via flex-1 spacers. When CTA: stays in middle */}
            {!showCTA && <div className="hidden sm:block flex-1" />}
            <div className={`hidden sm:flex flex-col items-center gap-1 ${showCTA ? '' : ''}`}>
              <span
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.2px',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{ color: 'var(--accent)', fontWeight: '700' }}>{REMAINING_SLOTS}</span>
                <span style={{ color: 'var(--text-muted)' }}> von </span>
                <span>{TOTAL_SLOTS}</span>
                {' '}Bonusplätze
              </span>
              {/* Progress bar - matches text width */}
              <div
                className="rounded-full overflow-hidden"
                style={{
                  width: '140px',
                  height: '3px',
                  backgroundColor: 'rgba(201, 140, 131, 0.12)',
                }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, var(--accent), #d4a099)',
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${filledPercent}%` }}
                  transition={{
                    duration: 3,
                    ease: [0.16, 1, 0.3, 1], // fast start, slow end
                    delay: 0.8,
                  }}
                />
              </div>
            </div>
            {!showCTA && <div className="hidden sm:block flex-1" />}

            {/* CTA Button (right) - ultra-slow fade at 2000px */}
            <AnimatePresence>
              {showCTA && (
                <motion.button
                  onClick={scrollToForm}
                  className="relative px-5 sm:px-6 py-2.5 rounded-full text-white font-semibold text-sm overflow-hidden cursor-pointer flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
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
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                    }}
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <span className="relative" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)' }}>Jetzt bewerben</span>
                </motion.button>
              )}
            </AnimatePresence>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
