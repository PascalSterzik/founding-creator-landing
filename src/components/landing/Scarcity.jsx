'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';
import { useSlotCount } from '@/lib/slotTracker';

const TOTAL_SLOTS = 50;

const Scarcity = () => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const remaining = useSlotCount();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let current = 0;
          const interval = setInterval(() => {
            current += Math.random() * 2.5;
            if (current >= 100) {
              current = 100;
              clearInterval(interval);
            }
            setAnimatedProgress(current);
          }, 25);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const slotsShown = Math.floor((animatedProgress / 100) * remaining);
  const filledPercent = (slotsShown / TOTAL_SLOTS) * 100;

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-4 md:px-8 bg-[var(--cocoa-deep)]"
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[var(--gold)] mb-2 tracking-wide">
              Limitierte Bonus-Plätze
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nur die ersten 50 Creator bekommen den vollen{' '}
              <span className="italic text-[var(--gold)]">Founding-Bonus</span>
            </h2>
            <p className="text-lg text-gray-300">
              {50 - remaining > 0 ? `${50 - remaining} Plätze sind bereits vergeben. ` : ''}Sichere dir deinen Founding Creator Status, bevor alle Plätze weg sind.
            </p>
          </div>
        </FadeIn>

        {/* Single Progress Bar */}
        <FadeIn delay={0.1}>
          <div className="mb-12">
            {/* The bar */}
            <div
              className="w-full h-5 sm:h-6 rounded-full overflow-hidden border border-[rgba(230,201,168,0.2)] relative"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
            >
              <div
                className="h-full rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${filledPercent}%`,
                  background: 'linear-gradient(90deg, var(--gold) 0%, #d4a099 40%, var(--accent) 100%)',
                }}
              />
            </div>

            {/* Labels under bar */}
            <div className="flex justify-between mt-3">
              <span className="text-xs text-gray-400">0</span>
              <span className="text-sm font-semibold text-[var(--gold)]">
                {slotsShown} von {TOTAL_SLOTS} verfügbar
              </span>
              <span className="text-xs text-gray-400">{TOTAL_SLOTS}</span>
            </div>
          </div>
        </FadeIn>

        {/* Big Counter */}
        <FadeIn delay={0.2}>
          <div className="bg-gradient-to-br from-[rgba(230,201,168,0.1)] to-[rgba(201,140,131,0.1)] border border-[rgba(230,201,168,0.2)] rounded-[var(--radius-lg)] p-8 text-center">
            <div className="mb-4">
              <p className="text-6xl md:text-7xl font-bold text-[var(--gold)] mb-2">
                {slotsShown}
              </p>
              <p className="text-xl text-white font-semibold">Bonus-Plätze noch verfügbar</p>
            </div>
            <p className="text-gray-300 text-sm">
              Creator Economy wächst um 23% pro Jahr. Die Spots füllen sich schnell.
            </p>
            <a
              href="#bewerbung"
              className="relative inline-flex items-center justify-center mt-6 px-8 py-3 rounded-full text-white font-bold text-base overflow-hidden cursor-pointer no-underline whitespace-nowrap transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(180deg, #d4a099 0%, var(--accent) 40%, #b5736a 100%)',
                boxShadow: '0 8px 24px rgba(201, 140, 131, 0.35), 0 3px 6px rgba(201, 140, 131, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 -2px 3px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                letterSpacing: '0.5px',
              }}
            >
              <span className="absolute inset-x-0 top-0 h-[45%] rounded-t-full pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, transparent 100%)' }} />
              <motion.div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)' }} animate={{ x: ['100%', '-100%'] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }} />
              <span className="relative" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)' }}>Jetzt Platz sichern</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Scarcity;
