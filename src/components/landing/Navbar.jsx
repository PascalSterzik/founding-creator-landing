'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            backgroundColor: isScrolled ? 'rgba(253, 250, 249, 0.95)' : 'rgba(253, 250, 249, 0.7)',
            borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
            transition: 'background-color 0.3s ease, border-bottom 0.3s ease',
          }}
        >
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-1.5 cursor-pointer"
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
          <div className="hidden md:flex items-center gap-2">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                backgroundColor: 'rgba(230, 201, 168, 0.15)',
                border: '1px solid rgba(230, 201, 168, 0.25)',
              }}
            >
              <motion.div
                className="w-2 h-2 rounded-full"
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
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToForm}
            className="relative px-6 py-2.5 rounded-full text-white font-semibold text-sm overflow-hidden cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)',
              boxShadow: '0 4px 16px rgba(201, 140, 131, 0.3)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 8px 24px rgba(201, 140, 131, 0.45)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
              }}
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            />
            <span className="relative">Jetzt bewerben</span>
          </motion.button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
