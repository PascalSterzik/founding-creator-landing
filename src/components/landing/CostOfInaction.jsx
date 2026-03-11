'use client';

import { motion } from 'framer-motion';
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

        <FadeIn delay={0.1}>
          <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Die Creator Economy wächst. Jeden Tag melden sich neue Creator an, probieren es aus,
              bauen ihre Reichweite auf. Die Konkurrenz wird größer. Die Deals werden knapper.
            </p>

            <p>
              <strong className="text-[var(--text)]">
                Die Creator, die sich jetzt positionieren, die sich jetzt damit beschäftigen, wie sie
                ihre Reichweite zu Geld machen, wie sie mit Brands zusammenarbeiten...
              </strong>{' '}
              Das sind die Creator, die in 12 Monaten die Deals machen, von denen andere nur träumen.
            </p>

            <p>
              Dieses Founding Creator Programm ist nicht ein Newsletter opt-in. Es ist nicht ein
              verkappter Sales Funnel. Es ist dein Einstieg in ein System, das dir hilft, profitabel
              zu wachsen, während du noch Zeit für echten Content hast.
            </p>

            <p>
              <strong className="text-[var(--text)]">
                Du kannst warten. Oder du kannst einer der ersten sein.
              </strong>
            </p>
          </div>

          <div className="text-center mt-10">
            <a
              href="#bewerbung"
              className="relative inline-flex items-center justify-center px-8 py-3 rounded-full text-white font-semibold overflow-hidden cursor-pointer no-underline whitespace-nowrap transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(180deg, #d4a099 0%, var(--accent) 40%, #b5736a 100%)',
                boxShadow: '0 8px 24px rgba(201, 140, 131, 0.35), 0 3px 6px rgba(201, 140, 131, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 -2px 3px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                letterSpacing: '0.5px',
              }}
            >
              <span className="absolute inset-x-0 top-0 h-[45%] rounded-t-full pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, transparent 100%)' }} />
              <motion.div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)' }} animate={{ x: ['100%', '-100%'] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }} />
              <span className="relative" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)' }}>Zum Bewerbungsformular</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CostOfInaction;
