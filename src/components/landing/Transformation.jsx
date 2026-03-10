'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';
import { ArrowRight } from 'lucide-react';

const Transformation = () => {
  const transformations = [
    {
      before: 'Du scrollst durch DMs und hoffst, dass jemand antwortet',
      after: 'Brands kommen zu dir, nicht umgekehrt',
    },
    {
      before: 'Preisverhandlungen fühlen sich unangenehm an',
      after: 'Faire, transparente Konditionen von Anfang an',
    },
    {
      before: 'Stundenlange Pitches, die ins Leere laufen',
      after: 'Passende Deals statt blindes Anschreiben',
    },
    {
      before: 'Unberechenbares Einkommen',
      after: 'Planbare Einnahmen, Monat für Monat',
    },
    {
      before: 'Verträge, Briefings, Kommunikation: alles auf dir allein',
      after: 'Mehr Zeit für das, was du liebst: Content erstellen',
    },
    {
      before: 'Du fragst dich, ob es das wert ist',
      after: 'Du fühlst dich endlich wie ein echter Professional',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[var(--cocoa-deep)]">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[var(--gold)] mb-2 tracking-wide">
              Die Veränderung
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Stell dir vor, wie dein Creator-Alltag in{' '}
              <span className="italic text-[var(--gold)]">6 Monaten</span> aussieht
            </h2>
          </div>
        </FadeIn>

        {/* Transformation rows */}
        <div className="space-y-4">
          {transformations.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.08}>
              <div
                className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center p-5 rounded-2xl"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                {/* Before */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  />
                  <p className="text-gray-400 text-sm leading-relaxed line-through decoration-gray-600">
                    {item.before}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight size={20} style={{ color: 'var(--gold)' }} />
                </div>

                {/* After */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: 'var(--gold)' }}
                  />
                  <p className="text-white text-sm font-medium leading-relaxed">
                    {item.after}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.5}>
          <div className="text-center mt-12">
            <a
              href="#bewerbung"
              className="inline-block px-10 py-4 rounded-full text-white font-bold text-base transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)',
                boxShadow: '0 12px 40px rgba(201, 140, 131, 0.35)',
              }}
            >
              Jetzt als Founding Creator bewerben
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Transformation;
