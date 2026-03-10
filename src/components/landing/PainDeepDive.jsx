'use client';

import FadeIn from '@/components/motion/FadeIn';
import { motion } from 'framer-motion';
import { TrendingDown, Ghost, MessageSquareOff, Clock, EyeOff } from 'lucide-react';

export default function PainDeepDive() {
  const painPoints = [
    { icon: EyeOff, text: 'Der Algorithmus sagt dir nicht, wer deine idealen Brands sind' },
    { icon: Ghost, text: 'Brands sehen Millionen Creator, aber du bist unsichtbar' },
    { icon: TrendingDown, text: 'Deine beste Arbeit erreicht die richtigen Menschen nicht' },
    { icon: MessageSquareOff, text: 'Selbst wenn Brands dich finden: Verhandlungen sind chaotisch' },
    { icon: Clock, text: 'Die meisten Deals gehen an bekannte Gesichter, nicht an die beste Arbeit' },
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: Text */}
          <FadeIn>
            <div>
              <p
                style={{
                  color: 'var(--accent)',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.75rem',
                }}
              >
                Das eigentliche Problem
              </p>

              <h2
                style={{
                  color: 'var(--text)',
                  fontSize: 'clamp(1.875rem, 5vw, 2.75rem)',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  marginBottom: '1.5rem',
                }}
              >
                Die Creator Economy wächst. Aber nicht für{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                  alle.
                </span>
              </h2>

              <div className="space-y-5 mb-8">
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                  }}
                >
                  Die Zahlen sind beeindruckend: Der Creator-Markt wächst explosiv, Milliarden
                  fließen in Kooperationen. Aber die Realität für einzelne Creator ist düster.
                </p>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                  }}
                >
                  Es ist ein <strong>Visibility-Problem</strong>. Du kannst talentiert sein,
                  dein Content kann viral gehen, aber wenn die richtige Brand dich nicht sieht,
                  passiert nichts.
                </p>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                  }}
                >
                  Und das ist erst der Anfang. Selbst wenn eine Brand dich findet, beginnt das
                  echte Chaos: unorganisierte Verhandlungen, fehlende Infrastruktur,
                  Miscommunications, die Deals platzen lassen.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Visual pain point cards */}
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300"
                    style={{
                      backgroundColor: 'rgba(201, 140, 131, 0.06)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: 'rgba(201, 140, 131, 0.12)',
                      }}
                    >
                      <Icon size={20} style={{ color: 'var(--accent)' }} />
                    </div>
                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        fontWeight: '500',
                      }}
                    >
                      {point.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
