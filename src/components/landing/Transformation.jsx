'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';
import Image from 'next/image';
import { ArrowRight, X, Check } from 'lucide-react';

const Transformation = () => {
  const beforePoints = [
    'Du scrollst durch DMs und hoffst, dass irgendjemand antwortet',
    'Preisverhandlungen fühlen sich jedes Mal unangenehm an',
    'Du investierst Stunden in Pitches, die ins Leere laufen',
    'Dein Einkommen bleibt unberechenbar',
    'Verträge, Briefings, Kommunikation: alles auf dir allein',
    'Du fragst dich, ob es das wert ist',
  ];

  const afterPoints = [
    'Brands kommen zu dir, nicht umgekehrt',
    'Faire, transparente Konditionen von Anfang an',
    'Passende Deals statt blindes Anschreiben',
    'Planbare Einnahmen, Monat für Monat',
    'Mehr Zeit für das, was du liebst: Content erstellen',
    'Du fühlst dich endlich wie ein echter Professional',
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[var(--bg-ivory)]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[var(--accent)] mb-2 tracking-wide uppercase">
              Die Veränderung
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
              Stell dir vor, wie dein Creator-Alltag in{' '}
              <span className="italic text-[var(--accent)]">6 Monaten</span> aussieht
            </h2>
          </div>
        </FadeIn>

        {/* Before / After Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-start">
          {/* BEFORE Column */}
          <FadeIn delay={0.1}>
            <div>
              <h3
                className="text-xl font-bold mb-6 text-center"
                style={{ color: 'var(--text-muted)' }}
              >
                Ohne Influbook
              </h3>

              {/* Before Image */}
              <div
                className="rounded-2xl overflow-hidden mb-6"
                style={{
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Image
                  src="/images/transformation-before.png"
                  alt="Creator gestresst am chaotischen Schreibtisch, Hände an den Schläfen"
                  width={1216}
                  height={832}
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '3/2' }}
                />
              </div>

              {/* Before Points */}
              <ul className="space-y-3">
                {beforePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X
                      size={16}
                      className="flex-shrink-0 mt-1"
                      style={{ color: 'var(--text-muted)' }}
                    />
                    <span
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Arrow in the middle */}
          <FadeIn delay={0.2}>
            <div className="hidden lg:flex items-center justify-center h-full pt-32">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)',
                  boxShadow: '0 8px 24px rgba(201, 140, 131, 0.3)',
                }}
              >
                <ArrowRight size={28} className="text-white" />
              </div>
            </div>
            {/* Mobile arrow */}
            <div className="flex lg:hidden items-center justify-center py-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)',
                  boxShadow: '0 8px 24px rgba(201, 140, 131, 0.3)',
                }}
              >
                <ArrowRight size={22} className="text-white rotate-90 lg:rotate-0" />
              </div>
            </div>
          </FadeIn>

          {/* AFTER Column */}
          <FadeIn delay={0.3}>
            <div>
              <h3
                className="text-xl font-bold mb-6 text-center"
                style={{ color: 'var(--accent)' }}
              >
                Mit Influbook
              </h3>

              {/* After Image */}
              <div
                className="rounded-2xl overflow-hidden mb-6"
                style={{
                  boxShadow: '0 15px 40px rgba(201, 140, 131, 0.15)',
                  border: '2px solid rgba(201, 140, 131, 0.15)',
                }}
              >
                <Image
                  src="/images/transformation-after.png"
                  alt="Creator lächelnd am aufgeräumten Schreibtisch, entspannt und professionell"
                  width={1216}
                  height={832}
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '3/2' }}
                />
              </div>

              {/* After Points */}
              <ul className="space-y-3">
                {afterPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="flex-shrink-0 mt-1"
                      style={{ color: 'var(--accent)' }}
                    />
                    <span
                      style={{
                        color: 'var(--text)',
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        fontWeight: '500',
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn delay={0.5}>
          <div className="text-center mt-14">
            <a
              href="#bewerbung"
              className="relative inline-flex items-center justify-center px-10 py-4 rounded-full text-white font-bold text-base overflow-hidden cursor-pointer no-underline whitespace-nowrap transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(180deg, #d4a099 0%, var(--accent) 40%, #b5736a 100%)',
                boxShadow: '0 8px 24px rgba(201, 140, 131, 0.35), 0 3px 6px rgba(201, 140, 131, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 -2px 3px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                letterSpacing: '0.5px',
              }}
            >
              <span className="absolute inset-x-0 top-0 h-[45%] rounded-t-full pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, transparent 100%)' }} />
              <motion.div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)' }} animate={{ x: ['100%', '-100%'] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }} />
              <span className="relative" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)' }}>Jetzt als Founding Creator bewerben</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Transformation;
