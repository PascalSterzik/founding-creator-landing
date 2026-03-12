'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Crown, Check } from 'lucide-react';

const TOTAL_SLOTS = 50;
const CURRENT_COUNT = 0; // Update as creators join

const perks = [
  'Persönlicher Ansprechpartner',
  'Erste Wahl bei Premium-Brands',
  'Mitgestaltung der Plattform',
  'Lifetime Founding-Creator-Badge',
  'Priorität bei Brand-Matching',
  'Exklusive Creator-Community',
  'Early Access auf neue Features',
  'Priorisierter Support',
];

export default function DankePage() {
  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
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

  const creatorNumber = CURRENT_COUNT + 1;

  return (
    <div
      className="min-h-screen px-4 py-12 md:py-16"
      style={{
        background: `
          radial-gradient(ellipse 800px 600px at 30% 20%, rgba(201, 140, 131, 0.12) 0%, transparent 70%),
          radial-gradient(ellipse 600px 400px at 70% 80%, rgba(230, 201, 168, 0.08) 0%, transparent 80%),
          linear-gradient(135deg, var(--bg) 0%, var(--bg-ivory) 100%)
        `,
      }}
    >
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Success Header */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(201, 140, 131, 0.12)' }}
          >
            <CheckCircle size={32} style={{ color: 'var(--accent)' }} strokeWidth={1.5} />
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold mb-3"
            style={{ color: 'var(--cocoa)' }}
          >
            Deine Bewerbung ist{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>eingegangen</span>
          </h1>

          {/* Founding Creator Number */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mt-4"
            style={{
              backgroundColor: 'rgba(197, 164, 127, 0.12)',
              border: '1px solid rgba(197, 164, 127, 0.25)',
            }}
          >
            <Crown size={16} style={{ color: 'var(--gold-dark)' }} />
            <span
              className="text-sm font-bold"
              style={{ color: 'var(--gold-dark)' }}
            >
              Founding Creator #{creatorNumber} von {TOTAL_SLOTS}
            </span>
          </div>
        </motion.div>

        {/* Step Tracker */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-10">
          {[
            { label: 'Bewerbung', done: true },
            { label: 'Call buchen', active: true },
            { label: 'Founding Creator', done: false },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: step.done
                      ? 'var(--accent)'
                      : step.active
                      ? 'var(--accent)'
                      : 'rgba(75, 50, 45, 0.08)',
                    color: step.done || step.active ? 'white' : 'var(--text-muted)',
                  }}
                >
                  {step.done ? (
                    <CheckCircle size={14} />
                  ) : (
                    i + 1
                  )}
                </div>
                <span
                  className="text-xs font-semibold hidden sm:inline"
                  style={{
                    color: step.done || step.active ? 'var(--text)' : 'var(--text-muted)',
                  }}
                >
                  {step.label}
                </span>
              </div>
              {i < 2 && (
                <div
                  className="w-8 sm:w-12 h-px"
                  style={{ backgroundColor: 'rgba(75, 50, 45, 0.12)' }}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Calendly Embed Section */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-[var(--radius-lg)] overflow-hidden mb-10"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)',
            border: '1px solid var(--border)',
          }}
        >
          <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4">
            <h2
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{ color: 'var(--text)' }}
            >
              Nächster Schritt:{' '}
              <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Call buchen</span>
            </h2>
            <p
              className="text-base"
              style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}
            >
              30 Minuten, ganz entspannt. Wir lernen dich kennen, besprechen deine Ziele und klären, wie{' '}
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: '700' }}>Creator</span>
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--accent)', fontStyle: 'italic', fontWeight: '600' }}>Bridge</span>
              {' '}dir konkret helfen kann.
            </p>
          </div>

          {/* Calendly Inline Widget */}
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/mengacarlo8/founding-creator-meeting"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>

        {/* Founding Creator Benefits - Single Tier */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-2"
            style={{ color: 'var(--text)' }}
          >
            Deine exklusiven{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Founding-Vorteile</span>
          </h2>
          <p
            className="text-center text-base mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Als einer der ersten {TOTAL_SLOTS} Founding Creator erhältst du:
          </p>

          <div
            className="bg-white rounded-[var(--radius-md)] p-6 sm:p-8 relative overflow-hidden"
            style={{
              border: '2px solid rgba(197, 164, 127, 0.4)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(197, 164, 127, 0.12)' }}
              >
                <Crown size={20} style={{ color: 'var(--gold-dark)' }} />
              </div>
              <div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>
                  Founding Creator
                </h3>
                <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                  Limitiert auf {TOTAL_SLOTS} Plätze
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {perks.map((perk, j) => (
                <div key={j} className="flex items-start gap-2.5">
                  <Check
                    size={14}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--gold-dark)' }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}
                  >
                    {perk}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
