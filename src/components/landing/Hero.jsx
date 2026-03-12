'use client';

import { motion } from 'framer-motion';
import FadeIn from '../motion/FadeIn';
import PhoneMockup from './PhoneMockup';
import PhoneAppUI from './PhoneAppUI';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <div
      className="relative min-h-screen pt-32 md:pt-40 pb-8 md:pb-12 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 800px 600px at 20% 50%, rgba(201, 140, 131, 0.15) 0%, transparent 70%),
          radial-gradient(ellipse 900px 700px at 80% 0%, rgba(230, 201, 168, 0.1) 0%, transparent 80%),
          linear-gradient(135deg, var(--bg) 0%, var(--bg-ivory) 100%)
        `,
      }}
    >
      {/* Premium animated background blobs */}
      <motion.div
        className="absolute top-10 left-5 w-80 h-80 rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{
          background: `linear-gradient(135deg, var(--accent) 0%, var(--gold) 100%)`,
        }}
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute -bottom-10 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: `linear-gradient(135deg, var(--gold) 0%, var(--accent) 100%)`,
        }}
        animate={{
          y: [0, -60, 0],
          x: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/3 -right-32 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background: `linear-gradient(90deg, var(--accent) 0%, rgba(230, 201, 168, 0.6) 100%)`,
        }}
        animate={{
          y: [0, 40, 0],
          x: [0, -50, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content: always first on mobile, left column on desktop */}
          <motion.div
            className="space-y-8 order-1 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Premium headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                style={{ color: 'var(--cocoa)' }}
              >
                Brand Deals sollten nicht vom{' '}
                <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: '900' }}>
                  Zufall
                </span>{' '}
                abhängen
              </h1>
            </motion.div>

            {/* Premium subtitle */}
            <motion.p
              variants={itemVariants}
              style={{
                color: 'var(--text-secondary)',
                fontSize: '18px',
                lineHeight: '1.7',
                letterSpacing: '0.3px',
              }}
              className="max-w-xl"
            >
              Verbinde dich mit Brands, die zu deinem Publikum passen. Verdiene Geld mit Inhalten, die du ohnehin erstellst. <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: '700' }}>Creator</span><span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--accent)', fontStyle: 'italic', fontWeight: '600' }}>Bridge</span> macht Monetarisierung einfach.
            </motion.p>

            {/* Desktop-only CTA Button (stays in left column) - 4s delay */}
            <motion.div
              className="pt-2 hidden lg:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
            >
              <motion.a
                href="#bewerbung"
                className="relative inline-flex items-center justify-center px-10 py-4 rounded-full text-white font-bold text-lg overflow-hidden cursor-pointer no-underline whitespace-nowrap"
                style={{
                  background: 'linear-gradient(180deg, #d4a099 0%, var(--accent) 40%, #b5736a 100%)',
                  boxShadow: '0 8px 24px rgba(201, 140, 131, 0.35), 0 3px 6px rgba(201, 140, 131, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 -2px 3px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  letterSpacing: '0.5px',
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: '0 12px 36px rgba(201, 140, 131, 0.45), 0 4px 8px rgba(201, 140, 131, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.35), inset 0 -2px 3px rgba(0, 0, 0, 0.15)',
                }}
                whileTap={{
                  scale: 0.97,
                  boxShadow: '0 2px 8px rgba(201, 140, 131, 0.3), inset 0 2px 6px rgba(0, 0, 0, 0.15), inset 0 -1px 1px rgba(255, 255, 255, 0.1)',
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-[45%] rounded-t-full pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, transparent 100%)',
                  }}
                />
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)' }}
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                />
                <span className="relative" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)' }}>Jetzt als Founding Creator bewerben</span>
              </motion.a>
            </motion.div>

            {/* Desktop-only micro text - appears with CTA */}
            <motion.p
              className="hidden lg:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.5 }}
              style={{
                color: 'var(--text-muted)',
                fontSize: '13px',
                letterSpacing: '0.3px',
              }}
            >
              ✓ Nur 50 Plätze verfügbar, 12 bereits vergeben
            </motion.p>
          </motion.div>

          {/* Phone mockup: second on mobile, right column on desktop */}
          <motion.div
            className="flex items-center justify-center lg:justify-end order-2 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <PhoneMockup width={320} interactive>
              <PhoneAppUI />
            </PhoneMockup>
          </motion.div>

          {/* Mobile-only CTA Button: third on mobile, hidden on desktop */}
          <motion.div
            className="order-3 lg:hidden text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <motion.a
              href="#bewerbung"
              className="relative inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-base overflow-hidden w-full cursor-pointer no-underline whitespace-nowrap"
              style={{
                background: 'linear-gradient(180deg, #d4a099 0%, var(--accent) 40%, #b5736a 100%)',
                boxShadow: '0 8px 24px rgba(201, 140, 131, 0.35), 0 3px 6px rgba(201, 140, 131, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 -2px 3px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                letterSpacing: '0.5px',
              }}
              whileTap={{
                scale: 0.97,
                boxShadow: '0 2px 8px rgba(201, 140, 131, 0.3), inset 0 2px 6px rgba(0, 0, 0, 0.15), inset 0 -1px 1px rgba(255, 255, 255, 0.1)',
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-[45%] rounded-t-full pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, transparent 100%)',
                }}
              />
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)' }}
                animate={{ x: ['100%', '-100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
              />
              <span className="relative" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)' }}>Jetzt als Founding Creator bewerben</span>
            </motion.a>
            <p
              className="mt-4"
              style={{
                color: 'var(--text-muted)',
                fontSize: '13px',
                letterSpacing: '0.3px',
              }}
            >
              ✓ Nur 50 Plätze verfügbar, 12 bereits vergeben
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
