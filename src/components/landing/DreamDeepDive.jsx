'use client';

import FadeIn from '@/components/motion/FadeIn';
import Image from 'next/image';

export default function DreamDeepDive() {
  return (
    <section id="dream-deep-dive" className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* 2-Column Layout: Image left, Heading+Text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <FadeIn>
            <div
              className="rounded-2xl overflow-hidden order-2 lg:order-1"
              style={{
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.12)',
              }}
            >
              <Image
                src="/images/creator-filming-content.png"
                alt="Creator filmt Content mit Ring Light, professionelles Setup"
                width={1216}
                height={832}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '3/2' }}
              />
            </div>
          </FadeIn>

          {/* Right: Heading + Text */}
          <FadeIn delay={0.1} className="order-1 lg:order-2">
            <div className="space-y-6">
              <p className="text-sm font-semibold tracking-wide text-[var(--accent)] mb-1 uppercase">
                Das Ziel
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text)] mb-6 max-w-lg">
                Creator sein, ohne dich{' '}
                <span className="italic text-[var(--accent)]">selbst</span> zu verlieren
              </h2>

              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Du hast angefangen, Content zu erstellen, weil du etwas zu sagen hattest. Weil du
                kreativ bist. Weil du Menschen erreichen wolltest.{' '}
                <span className="font-bold text-[var(--text)]">Akquise war nie der Plan.</span>
              </p>

              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Die besten Creator der Welt haben eines gemeinsam:{' '}
                <span className="font-bold text-[var(--text)]">
                  Jemand anderes kümmert sich ums Geschäftliche.
                </span>{' '}
                Agenturen, Manager, Netzwerke. Aber was, wenn du noch nicht groß genug bist für
                eine Agentur?
              </p>

              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Genau hier fehlt ein Stück im Puzzle. Nicht noch ein Kurs. Nicht noch ein Tipp.
                Sondern{' '}
                <span className="font-bold text-[var(--text)]">
                  ein System, das die Arbeit für dich macht.
                </span>{' '}
                Das dich sichtbar macht. Das dir die richtigen Brands bringt. Das Verhandlungen
                fair gestaltet.
              </p>

              <p className="text-2xl font-bold text-[var(--text)] mt-4">
                Nicht irgendwann. <span className="italic text-[var(--accent)]">Jetzt.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
