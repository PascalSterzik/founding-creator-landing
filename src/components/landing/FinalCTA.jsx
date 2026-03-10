'use client';

import FadeIn from '@/components/motion/FadeIn';

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-[var(--cocoa)] to-[var(--cocoa-deep)]">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sichere dir deine{' '}
            <span className="italic text-[var(--gold)]">Founding-Creator-Vorteile</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg text-gray-200 mb-10">
            Die Plattform steht jedem offen. Aber die exklusiven Founding-Boni gibt es nur für
            die ersten 100 Creator.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href="#bewerbung"
            className="inline-block px-10 py-4 bg-gradient-to-r from-[var(--accent)] to-[var(--gold)] hover:from-[var(--accent-hover)] hover:to-[var(--accent)] text-white font-bold rounded-[var(--radius-md)] transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Jetzt bewerben
          </a>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xs text-gray-300 mt-8">
            Kostenlos. Unverbindlich. 30-Minuten-Call nach der Bewerbung.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default FinalCTA;
