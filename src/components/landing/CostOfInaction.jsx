'use client';

import FadeIn from '@/components/motion/FadeIn';

const CostOfInaction = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-transparent via-[rgba(201,140,131,0.05)] to-transparent">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[var(--text-secondary)] mb-2">
              Ein ehrliches Wort
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
              Was passiert, wenn du <span className="italic text-[var(--accent)]">wartest</span>?
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed">
          <FadeIn delay={0.1}>
            <p>
              Die Creator Economy wächst. Jeden Tag melden sich neue Creator an, probieren es aus,
              bauen ihre Reichweite auf. Die Konkurrenz wird größer. Die Deals werden knapper.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p>
              <strong className="text-[var(--text)]">
                Die Creator, die sich jetzt positionieren, die sich jetzt damit beschäftigen, wie sie
                ihre Reichweite zu Geld machen, wie sie mit Brands zusammenarbeiten...
              </strong>{' '}
              Das sind die Creator, die in 12 Monaten die Deals machen, von denen andere nur träumen.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p>
              Dieses Founding Creator Programm ist nicht ein Newsletter opt-in. Es ist nicht ein
              verkappter Sales Funnel. Es ist dein Einstieg in ein System, das dir hilft, profitabel
              zu wachsen, während du noch Zeit für echten Content hast.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p>
              <strong className="text-[var(--text)]">
                Du kannst warten. Oder du kannst einer der ersten sein.
              </strong>
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <div className="text-center mt-10">
            <a
              href="#bewerbung"
              className="inline-block px-8 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold rounded-[var(--radius-md)] transition-colors duration-200"
            >
              Zum Bewerbungsformular
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CostOfInaction;
