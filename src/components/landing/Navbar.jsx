'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Show CTA after 15 seconds OR when scrolling past PainDeepDive section
    const timer = setTimeout(() => setShowCTA(true), 15000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      // Show CTA once user scrolls past ~800px (roughly PainDeepDive area)
      if (window.scrollY > 800) setShowCTA(true);
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
            className="flex items-center justify-between w-full max-w-5xl mt-4 px-4 sm:px-8 py-3"
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

            {/* Center: Urgency Indicator (hidden on mobile) */}
            <div className="hidden sm:flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#10b981' }}
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '13px',
                  fontWeight: '500',
                }}
              >
                Nur noch 100 Bonusplätze
              </span>
            </div>

            {/* CTA Button (right) - fades in after scroll/time delay */}
            <AnimatePresence>
              {showCTA && (
                <motion.button
                  onClick={scrollToForm}
                  className="relative px-5 sm:px-6 py-2.5 rounded-full text-white font-semibold text-sm overflow-hidden cursor-pointer flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
