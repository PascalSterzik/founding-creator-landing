'use client';

import FadeIn from '@/components/motion/FadeIn';
import Image from 'next/image';

export default function PainDeepDive() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text (order-2 on mobile so image appears first) */}
          <FadeIn className="order-2 md:order-1">
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
                  Die Zahlen klingen gut: Marken investieren so viel wie nie in Influencer-Marketing.
                  Budgets steigen jedes Quartal. Neue Produkte suchen Creator-Partnerschaften.
                </p>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                  }}
                >
                  Aber wer profitiert davon? Meistens dieselben großen Accounts. Dieselben
                  Management-Agenturen. Dieselben Netzwerke, in die du keinen Zugang hast.{' '}
                  <strong>Die Deals existieren, sie kommen nur nicht bei dir an.</strong>
                </p>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                  }}
                >
                  Oder sie kommen, aber als{' '}
                  <strong>Lowball-Angebote mit unklaren Briefings</strong> und Bezahlung nach 90 Tagen.
                  Du postest regelmäßig, baust deine Community auf, lieferst guten Content. Und
                  trotzdem: <strong>entweder keine Deals oder die falschen.</strong>
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  'Du weißt nicht, welche Marken gerade Creator suchen',
                  'Du hast kein System für planbare Kooperationen',
                  'Du verbringst mehr Zeit mit Akquise als mit Content',
                  'Deals scheitern an Kommunikationschaos und fehlenden Briefings',
                  'Selbst wenn ein Deal kommt, sind Budget und Konditionen oft unfair',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: 'var(--accent)' }}
                    />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Right: Image (order-1 on mobile so it appears first) */}
          <FadeIn delay={0.2} className="order-1 md:order-2">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.12)',
              }}
            >
              <Image
                src="/images/creator-frustration-scroll.jpg"
                alt="Creator frustriert am Smartphone im dunklen Zimmer"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
