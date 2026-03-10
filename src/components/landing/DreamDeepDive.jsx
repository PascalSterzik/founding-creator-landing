'use client';

import FadeIn from '@/components/motion/FadeIn';

export default function DreamDeepDive() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Label */}
        <FadeIn>
          <p className="text-sm font-semibold tracking-wide text-[var(--accent)] mb-4">
            DAS ZIEL
          </p>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text)] mb-12 max-w-3xl">
            Creator sein, ohne dich <span className="italic text-[var(--accent)]">selbst</span> zu
            verlieren
          </h2>
        </FadeIn>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image Placeholder */}
          <FadeIn delay={0.2}>
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-96 rounded-lg overflow-hidden bg-gradient-to-br from-[var(--gold)] to-[var(--bg-ivory)] border border-[var(--border)] flex items-center justify-center order-2 lg:order-1">
              <div className="text-center">
                <p className="text-[var(--text-muted)] text-sm font-medium">
                  Bildplatzhalter
                </p>
                <p className="text-[var(--text-muted)] text-xs mt-2">
                  Creator im Workflow
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Paragraph 1 */}
            <FadeIn delay={0.3}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Du bist Creator geworden, weil du kreativ bist. Die Akquise? War nie der Plan. Nie
                die Leidenschaft. Nie wirklich dein Ding.
              </p>
            </FadeIn>

            {/* Paragraph 2 */}
            <FadeIn delay={0.4}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Die besten Creators der Welt haben jemanden, der das Business für sie macht. Jemanden,
                der verhandelt, organisiert, die Zahlen im Blick hat. Das ist keine Ausnahme. Das ist
                der Standard. Und das funktioniert nicht nur bei 500k Followern. Das funktioniert auch
                bei 5k. Bei 100k. Bei dir.
              </p>
            </FadeIn>

            {/* Paragraph 3 */}
            <FadeIn delay={0.5}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Das, was dir bisher fehlte: ein System. Ein Tool. Ein{' '}
                <span className="font-bold text-[var(--text)]">
                  ein System, das die Arbeit für dich macht
                </span>
                .
              </p>
            </FadeIn>

            {/* Final Statement */}
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
