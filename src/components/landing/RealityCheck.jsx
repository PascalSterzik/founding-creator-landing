'use client';

import FadeIn from '@/components/motion/FadeIn';
import Image from 'next/image';

export default function RealityCheck() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Image */}
          <FadeIn>
            <div
              className="rounded-2xl overflow-hidden order-2 md:order-1"
              style={{
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.12)',
              }}
            >
              <Image
                src="/images/creator-ghosted-dms.jpg"
                alt="Smartphone mit unbeantworteten Nachrichten auf dunklem Holztisch"
                width={800}
                height={900}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '1/1.1' }}
              />
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
                  Du stehst morgens auf und checkst dein Handy. Keine neuen Brand-Anfragen. Also
                  öffnest du Instagram, scrollst durch Marken-Accounts, schreibst eine DM.
                  Freundlich, professionell, mit Media Kit im Anhang. Dann die nächste.
                </p>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                  }}
                >
                  Drei Stunden später hast du acht Marken angeschrieben.{' '}
                  <strong>Content erstellt hast du keinen.</strong> Und von den letzten zwölf
                  Anfragen letzte Woche? Zwei haben geantwortet.{' '}
                  <strong>Keine davon mit einem Angebot.</strong>
                </p>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                  }}
                >
                  Du bist gleichzeitig kreativer Vertriebler und Projektmanager.
                  Und Creator? Das kommt irgendwo dazwischen.
                </p>
              </div>

              {/* Highlight Box */}
              <div
                style={{
                  backgroundColor: 'var(--cocoa)',
                  borderRadius: '16px',
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
                <div>
                  <div
                    style={{
                      color: 'var(--accent)',
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

                <div>
                  <div
                    style={{
                      color: 'var(--accent)',
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
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
