'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Calendar, ArrowRight } from 'lucide-react';

export default function DankePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{
        background: `
          radial-gradient(ellipse 800px 600px at 30% 20%, rgba(201, 140, 131, 0.12) 0%, transparent 70%),
          radial-gradient(ellipse 600px 400px at 70% 80%, rgba(230, 201, 168, 0.08) 0%, transparent 80%),
          linear-gradient(135deg, var(--bg) 0%, var(--bg-ivory) 100%)
        `,
      }}
    >
      <motion.div
        className="max-w-2xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Success Icon */}
        <motion.div variants={itemVariants} className="mb-8">
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full"
            style={{ backgroundColor: 'rgba(201, 140, 131, 0.12)' }}
          >
            <CheckCircle size={40} style={{ color: 'var(--accent)' }} strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: 'var(--cocoa)' }}
        >
          Deine Bewerbung ist{' '}
          <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>eingegangen</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg mb-12 max-w-lg mx-auto"
          style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}
        >
          Vielen Dank! Wir schauen uns deine Infos an. Im nächsten Schritt vereinbaren wir einen kurzen Call, um alles Weitere zu besprechen.
        </motion.p>

        {/* CTA Card: Book Call */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl p-8 md:p-10 mb-8 text-left"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)',
            border: '1px solid var(--border)',
          }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'rgba(201, 140, 131, 0.1)' }}
            >
              <Calendar size={22} style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>
                Nächster Schritt: 30-Minuten-Call buchen
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
                In diesem Gespräch lernen wir dich kennen, besprechen deine Ziele und klären, wie <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: '700' }}>Creator</span><span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--accent)', fontStyle: 'italic', fontWeight: '600' }}>Bridge</span> dir konkret helfen kann.
              </p>
            </div>
          </div>

          {/* What to expect */}
          <div className="space-y-3 mb-8">
            {[
              'Persönliches Kennenlernen (kein Sales-Pitch)',
              'Deine Nische und passende Brand-Matches besprechen',
              'Exklusive Founding-Creator-Vorteile sichern',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: 'rgba(201, 140, 131, 0.15)' }}
                >
                  <CheckCircle size={12} style={{ color: 'var(--accent)' }} />
                </div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Calendly CTA Button */}
          <motion.a
            href="https://calendly.com/creatorbridge/founding-creator-call"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center w-full px-8 py-4 rounded-full text-white font-bold text-base overflow-hidden cursor-pointer no-underline whitespace-nowrap"
            style={{
              background: 'linear-gradient(180deg, #d4a099 0%, var(--accent) 40%, #b5736a 100%)',
              boxShadow: '0 8px 24px rgba(201, 140, 131, 0.35), 0 3px 6px rgba(201, 140, 131, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 -2px 3px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              letterSpacing: '0.5px',
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 12px 36px rgba(201, 140, 131, 0.45), 0 4px 8px rgba(201, 140, 131, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.35), inset 0 -2px 3px rgba(0, 0, 0, 0.15)',
            }}
            whileTap={{
              scale: 0.98,
              boxShadow: '0 2px 8px rgba(201, 140, 131, 0.3), inset 0 2px 6px rgba(0, 0, 0, 0.15), inset 0 -1px 1px rgba(255, 255, 255, 0.1)',
            }}
          >
            <span className="absolute inset-x-0 top-0 h-[45%] rounded-t-full pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, transparent 100%)' }} />
            <motion.div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)' }} animate={{ x: ['100%', '-100%'] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }} />
            <span className="relative flex items-center gap-2" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)' }}>
              Jetzt Call buchen
              <ArrowRight size={18} />
            </span>
          </motion.a>
        </motion.div>

        {/* Back to homepage link */}
        <motion.div variants={itemVariants}>
          <a
            href="/"
            className="text-sm no-underline transition-colors"
            style={{ color: 'var(--text-muted)' }}
          >
            Zurück zur Startseite
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
