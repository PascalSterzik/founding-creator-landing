'use client';

import FadeIn from '@/components/motion/FadeIn';

export default function PainDeepDive() {
  const painPoints = [
    'Die Algorithm sagt dir nicht, wer deine idealenBrands sind',
    'Brands sehen Millionen Creator – wie findest du sie?',
    'Deine beste Arbeit ist unsichtbar für die richtigen Menschen',
    'Selbst wenn Brands dich finden: Verhandlungen sind chaotisch',
    'Die meisten Deals gehen an bekannte Gesichter – nicht an die beste Arbeit',
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
                  fontFamily: 'var(--font-heading)',
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
                  dein Content kann viral gehen – aber wenn die richtige Brand dich nicht sieht,
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

              <div className="space-y-3">
                <p
                  style={{
                    color: 'var(--text)',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    marginBottom: '0.75rem',
                  }}
                >
                  Die größten Probleme:
                </p>
                <ul className="space-y-2">
                  {painPoints.map((point, index) => (
                    <li
                      key={index}
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        paddingLeft: '1.5rem',
                      }}
                      className="relative"
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: 'var(--accent)',
                          fontWeight: '700',
                        }}
                      >
                        •
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Right: Image Placeholder */}
          <FadeIn delay={0.2}>
            <div
              style={{
                backgroundColor: '#E8E0DB',
                borderRadius: 'var(--radius-lg)',
                aspectRatio: '1 / 1.1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed var(--border)',
              }}
              className="w-full"
            >
              <div
                style={{
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                }}
              >
                <p
                  style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                  }}
                >
                  Creator Frustration
                </p>
                <p
                  style={{
                    fontSize: '0.875rem',
                    marginTop: '0.5rem',
                  }}
                >
                  [Image Placeholder]
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
