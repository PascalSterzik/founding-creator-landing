'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        backdropFilter: 'blur(12px)',
        backgroundColor: isScrolled ? 'rgba(253, 250, 249, 0.95)' : 'rgba(253, 250, 249, 0.7)',
        borderBottom: isScrolled ? '1px solid var(--border)' : 'transparent',
      }}
      transition={{ backgroundColor: { duration: 0.3 } }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span style={{ color: 'var(--cocoa)', fontWeight: '700', fontSize: '18px' }}>
          Creator
        </span>
        <span
          style={{
            color: 'var(--accent)',
            fontStyle: 'italic',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >
          Bridge
        </span>
      </div>

      {/* Center: Urgency Indicator (hidden on mobile) */}
      <div className="hidden md:flex items-center gap-2">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: 'var(--bg-ivory)' }}>
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#10b981' }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: '500' }}>
            Nur noch 100 Bonusplätze
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <motion.button
        className="relative px-6 py-2.5 rounded-full text-white font-semibold text-sm overflow-hidden"
        style={{
          background: `linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)`,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
            width: '100%',
          }}
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="relative">Jetzt bewerben</span>
      </motion.button>
    </motion.nav>
  );
}
