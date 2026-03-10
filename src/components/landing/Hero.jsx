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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div
      className="relative min-h-screen pt-24 pb-12 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 800px 600px at 20% 50%, rgba(201, 140, 131, 0.15) 0%, transparent 70%),
          radial-gradient(ellipse 900px 700px at 80% 0%, rgba(230, 201, 168, 0.1) 0%, transparent 80%),
          linear-gradient(135deg, var(--bg) 0%, var(--bg-ivory) 100%)
        `,
      }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: `linear-gradient(135deg, var(--accent) 0%, var(--gold) 100%)`,
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background: `linear-gradient(135deg, var(--gold) 0%, var(--accent) 100%)`,
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  backgroundColor: 'var(--bg-ivory)',
                  border: '1px solid var(--border)',
                }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--accent)' }}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '13px',
                    fontWeight: '600',
                  }}
                >
                  Founding Creator Bewerbungen offen
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ color: 'var(--cocoa)' }}
              >
                Brand Deals sollten nicht vom{' '}
                <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
                  Zufall
                </span>{' '}
                abhängen
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              style={{
                color: 'var(--text-secondary)',
                fontSize: '18px',
                lineHeight: '1.6',
              }}
            >
              Verbinde dich mit Brands, die zu deinem Publikum passen. Verdiene Geld mit Inhalten, die du ohnehin erstellst. CreatorBridge macht Monetarisierung einfach.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                className="relative px-8 py-4 rounded-full text-white font-bold text-lg overflow-hidden w-full sm:w-auto"
                style={{
                  background: `linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)`,
                  boxShadow: '0 10px 40px rgba(201, 140, 131, 0.3)',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 15px 50px rgba(201, 140, 131, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  }}
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <span className="relative">Jetzt bewerben</span>
              </motion.button>
            </motion.div>

            {/* Micro text */}
            <motion.p
              variants={itemVariants}
              style={{
                color: 'var(--text-muted)',
                fontSize: '13px',
              }}
            >
              ✓ Nur die ersten 100 Creator erhalten exklusive Boni
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 pt-6 border-t"
              style={{ borderColor: 'var(--border)' }}
            >
              {[
                { label: 'Creator', value: '500+' },
                { label: 'Brand Deals', value: '1,200+' },
                { label: 'Avg Earning', value: '€1,850' },
              ].map((stat, idx) => (
                <div key={idx} className="flex-1">
                  <div
                    style={{
                      color: 'var(--cocoa)',
                      fontSize: '24px',
                      fontWeight: '700',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '13px',
                      marginTop: '4px',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Phone mockup */}
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <PhoneMockup width={320} showFloatingCards={true}>
              <PhoneAppUI />
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
