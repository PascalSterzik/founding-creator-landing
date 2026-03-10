'use client';

import FadeIn from '@/components/motion/FadeIn';
import Image from 'next/image';

export default function DreamDeepDive() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Label */}
        <FadeIn>
          <p className="text-sm font-semibold tracking-wide text-[var(--accent)] mb-4 uppercase">
            Das Ziel
          </p>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text)] mb-12 max-w-3xl">
            Creator sein, ohne dich{' '}
            <span className="italic text-[var(--accent)]">selbst</span> zu verlieren
          </h2>
        </FadeIn>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <FadeIn delay={0.2}>
            <div
              className="rounded-2xl overflow-hidden order-2 lg:order-1"
              style={{
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.12)',
              }}
            >
              <Image
                src="/images/creator-in-flow.jpg"
                alt="Creator im Flow beim Editieren mit Kopfhörern"
                width={800}
                height={800}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '1/1' }}
              />
            </div>
          </FadeIn>

          {/* Right: Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <FadeIn delay={0.3}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Du hast angefangen, Content zu erstellen, weil du etwas zu sagen hattest. Weil du
                kreativ bist. Weil du Menschen erreichen wolltest.{' '}
                <span className="font-bold text-[var(--text)]">Akquise war nie der Plan.</span>
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Die besten Creator der Welt haben eines gemeinsam:{' '}
                <span className="font-bold text-[var(--text)]">
                  Jemand anderes kümmert sich ums Geschäftliche.
                </span>{' '}
                Agenturen, Manager, Netzwerke. Aber was, wenn du noch nicht groß genug bist für
                eine Agentur?
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Genau hier fehlt ein Stück im Puzzle. Nicht noch ein Kurs. Nicht noch ein Tipp.
                Sondern{' '}
                <span className="font-bold text-[var(--text)]">
                  ein System, das die Arbeit für dich macht.
                </span>{' '}
                Das dich sichtbar macht. Das dir die richtigen Brands bringt. Das Verhandlungen
                fair gestaltet.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-2xl font-bold text-[var(--text)] mt-8">
                Nicht irgendwann. <span className="italic text-[var(--accent)]">Jetzt.</span>
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
