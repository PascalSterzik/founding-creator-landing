'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';

export default function DreamVision() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Label */}
        <FadeIn>
          <p className="text-sm font-semibold tracking-wide text-[var(--accent)] mb-4">
            DIE VISION
          </p>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text)] mb-12 max-w-2xl">
            Was wäre, wenn es{' '}
            <span className="italic text-[var(--accent)]">anders</span> laufen könnte?
          </h2>
        </FadeIn>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text Content */}
          <div className="space-y-6">
            {/* Paragraph 1 */}
            <FadeIn delay={0.2}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Stell dir vor, du wachst morgens auf... eine Benachrichtigung,{' '}
                <span className="font-bold text-[var(--text)]">
                  dass eine Brand sich für dein Profil interessiert
                </span>
                . Das Matching ist perfekt. Die Zahlen passen. Die Values stimmen überein.
              </p>
            </FadeIn>

            {/* Paragraph 2 */}
            <FadeIn delay={0.3}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                <span className="font-bold text-[var(--text)]">
                  Du entscheidest, ob es passt. Nicht umgekehrt.
                </span>
              </p>
            </FadeIn>

            {/* Paragraph 3 */}
            <FadeIn delay={0.4}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Den Rest des Tages?{' '}
                <span className="font-bold text-[var(--text)]">
                  Content erstellen. Ideen entwickeln.
                </span>{' '}
                Das tun, wofür du Creator bist.
              </p>
            </FadeIn>

            {/* Highlight Box */}
            <FadeIn delay={0.5}>
              <div className="bg-[var(--bg-ivory)] border border-[var(--border)] rounded-lg p-6 my-8">
                <p className="text-lg font-bold text-[var(--text)]">
                  Du bist nicht mehr der, der hinterherläuft. Du bist ein Professional, mit dem
                  Brands zusammenarbeiten wollen.
                </p>
              </div>
            </FadeIn>

            {/* Final Paragraph */}
            <FadeIn delay={0.6}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Und das Beste: Dein Einkommen wird planbar. Nicht mehr abhängig von Algorithmen,
                Sponsorships oder Ad-Rates. Du weißt, was kommt. Du kannst kalkulieren. Du kannst
                wachsen.
              </p>
            </FadeIn>
          </div>

          {/* Right: Image Placeholder */}
          <FadeIn delay={0.7}>
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-96 rounded-lg overflow-hidden bg-gradient-to-br from-[var(--bg-ivory)] to-[var(--gold)] border border-[var(--border)] flex items-center justify-center">
              <div className="text-center">
                <p className="text-[var(--text-muted)] text-sm font-medium">
                  Bildplatzhalter
                </p>
                <p className="text-[var(--text-muted)] text-xs mt-2">
                  Creator mit Phone
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
