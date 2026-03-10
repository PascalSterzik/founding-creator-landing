'use client';

import FadeIn from '@/components/motion/FadeIn';

export default function RealityCheck() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: Image Placeholder */}
          <FadeIn>
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
              className="w-full order-2 md:order-1"
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
                  Der Kreislauf
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

          {/* Right: Text */}
          <FadeIn delay={0.2}>
            <div className="order-1 md:order-2">
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
                Der Kreislauf
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
                Du gibst alles. Und bekommst{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                  nichts.
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
                  Der Kreislauf ist brutal. Du produzierst großartigen Content – dein bester
                  Einsatz. Aber danach?{' '}
                  <strong>Du arbeitest wie ein Unternehmer für Peanuts.</strong>
                </p>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                  }}
                >
                  Du spendierst Stunden damit, Brands anzuschreiben – echte Unternehmen mit
                  Budgets, die das 100x übersteigen, was sie dir zahlen würden. Deine Nachrichten
                  werden ignoriert. Du hoffst auf Glück.
                </p>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                  }}
                >
                  Selbst wenn eine Brand antwortet, folgender Albtraum: keine Struktur, keine
                  Klarheit über die Anforderungen, Miscommunications, die Deals platzen lassen.
                  Und dann fängst du wieder von vorne an.
                </p>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                  }}
                >
                  Die Konsequenz: Du verdienst weniger, als du könntest. Du burnest aus. Und dein
                  Content leidet, weil du {'"'}Busywork{'"'} machst statt zu schaffen.
                </p>
              </div>

              {/* Highlight Box */}
              <div
                style={{
                  backgroundColor: 'var(--cocoa)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  marginBottom: '2rem',
                }}
              >
                <p
                  style={{
                    color: '#FFFFFF',
                    fontSize: '1.05rem',
                    lineHeight: '1.7',
                    fontWeight: '500',
                  }}
                >
                  Die meisten Creator scheitern nicht am Content. Sie scheitern daran, dass
                  niemand sieht, wie gut sie eigentlich sind.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-6">
                <FadeIn delay={0.3}>
                  <div>
                    <div
                      style={{
                        color: 'var(--accent)',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2rem',
                        fontWeight: '700',
                        lineHeight: '1.2',
                        marginBottom: '0.5rem',
                      }}
                    >
                      70%
                    </div>
                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                      }}
                    >
                      der Creator verbringen mehr Zeit mit Akquise als mit Content
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div>
                    <div
                      style={{
                        color: 'var(--accent)',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2rem',
                        fontWeight: '700',
                        lineHeight: '1.2',
                        marginBottom: '0.5rem',
                      }}
                    >
                      &lt;5%
                    </div>
                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                      }}
                    >
                      der kalten DMs an Marken führen zu einer Antwort
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
