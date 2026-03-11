'use client';

import FadeIn from '@/components/motion/FadeIn';
import Image from 'next/image';

export default function DreamVision() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text Content (order-2 on mobile so image appears first) */}
          <div className="space-y-6 order-2 lg:order-1">
            <FadeIn>
              <p className="text-sm font-semibold tracking-wide text-[var(--accent)] mb-1 uppercase">
                Die Vision
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text)] mb-6 max-w-lg">
                Was wäre, wenn es{' '}
                <span className="italic text-[var(--accent)]">anders</span> laufen könnte?
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Stell dir vor, du wachst morgens auf und öffnest dein Handy. Keine DMs, die du
                beantworten musst. Stattdessen:{' '}
                <span className="font-bold text-[var(--text)]">
                  eine Benachrichtigung, dass eine Brand sich für dein Profil interessiert.
                </span>{' '}
                Ein konkretes Angebot. Budget, Timeline, alles klar.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                <span className="font-bold text-[var(--text)]">
                  Du entscheidest, ob es passt. Nicht umgekehrt.
                </span>
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Den Rest des Tages verbringst du mit dem, wofür du das alles angefangen hast:{' '}
                <span className="font-bold text-[var(--text)]">Content erstellen.</span>{' '}
                Ideen entwickeln. Deine Community aufbauen.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="bg-[var(--bg-ivory)] border border-[var(--border)] rounded-2xl p-6">
                <p className="text-lg font-bold text-[var(--text)]">
                  Du bist nicht mehr der, der hinterherläuft. Du bist ein Professional, mit dem
                  Brands zusammenarbeiten wollen.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Dein Einkommen ist planbar. Deine Kooperationen sind fair, transparent und machen
                Spaß. Und du hast endlich wieder{' '}
                <span className="font-bold text-[var(--text)]">
                  Zeit für das, was dich als Creator ausmacht.
                </span>
              </p>
            </FadeIn>
          </div>

          {/* Right: Image (order-1 on mobile so it appears first) */}
          <FadeIn delay={0.2}>
            <div
              className="rounded-2xl overflow-hidden order-1 lg:order-2"
              style={{
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.12)',
              }}
            >
              <Image
                src="/images/creator-freedom.jpg"
                alt="Junge Frau sitzt draußen in der Sonne, glücklich am Handy, weißes Kleid, Kaffee"
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
