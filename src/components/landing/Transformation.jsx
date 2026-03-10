'use client';

import { useState } from 'react';
import FadeIn from '@/components/motion/FadeIn';

const Transformation = () => {
  const beforeItems = [
    'Du scrollst durch DMs und hoffst, dass irgendjemand antwortet',
    'Preisverhandlungen fühlen sich jedes Mal unangenehm an',
    'Du investierst Stunden in Pitches, die ins Leere laufen',
    'Dein Einkommen bleibt unberechenbar',
    'Verträge, Briefings, Kommunikation: alles auf dir allein',
    'Du fragst dich, ob es das wert ist',
  ];

  const afterItems = [
    'Brands kommen zu dir, nicht umgekehrt',
    'Faire, transparente Konditionen von Anfang an',
    'Passende Deals statt blindes Anschreiben',
    'Mehr Zeit für das, was du liebst: Content erstellen',
    'Planbare Einnahmen statt Hoffen auf den nächsten Deal',
    'Du fühlst dich endlich wie ein echter Professional',
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[var(--bg-ivory)]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[var(--text-secondary)] mb-2">
              Die Veränderung
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
              Stell dir vor, wie dein Creator-Alltag in{' '}
              <span className="italic text-[var(--accent)]">6 Monaten</span> aussieht
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before Column */}
          <FadeIn delay={0.1}>
            <div
              className="p-8 rounded-[var(--radius-lg)] bg-gradient-to-br from-[rgba(201,140,131,0.08)] to-[rgba(201,140,131,0.04)] border border-[var(--border)]"
            >
              <h3 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-2">
                <span className="text-xl">✕</span>
                Ohne CreatorBridge
              </h3>
              <div className="space-y-4">
                {beforeItems.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="text-[var(--text-muted)] mt-1 flex-shrink-0">✕</span>
                    <p className="text-[var(--text-secondary)] font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* After Column */}
          <FadeIn delay={0.2}>
            <div
              className="p-8 rounded-[var(--radius-lg)] bg-gradient-to-br from-[rgba(201,140,131,0.12)] to-[rgba(201,140,131,0.06)] border border-[var(--border)]"
            >
              <h3 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-2">
                <span className="text-xl">✓</span>
                Mit CreatorBridge
              </h3>
              <div className="space-y-4">
                {afterItems.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="text-[var(--accent)] mt-1 flex-shrink-0">✓</span>
                    <p className="text-[var(--text)] font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
