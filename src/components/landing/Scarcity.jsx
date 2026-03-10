'use client';

import { useEffect, useRef, useState } from 'react';
import FadeIn from '@/components/motion/FadeIn';

const Scarcity = () => {
  const [animatedValues, setAnimatedValues] = useState({ tier1: 0, tier2: 0, tier3: 0 });
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Animate progress bars
          let currentT1 = 0,
            currentT2 = 0,
            currentT3 = 0;
          const interval = setInterval(() => {
            if (currentT1 < 0) currentT1 = 0;
            if (currentT2 < 0) currentT2 = 0;
            if (currentT3 < 0) currentT3 = 0;

            if (currentT1 < 10 || currentT2 < 40 || currentT3 < 50) {
              if (currentT1 < 10) currentT1 += Math.random() * 1.5;
              if (currentT2 < 40) currentT2 += Math.random() * 1.2;
              if (currentT3 < 50) currentT3 += Math.random() * 0.8;

              setAnimatedValues({
                tier1: Math.min(currentT1, 10),
                tier2: Math.min(currentT2, 40),
                tier3: Math.min(currentT3, 50),
              });
            } else {
              clearInterval(interval);
            }
          }, 30);

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

  const tiers = [
    { label: 'Founding 10', filled: animatedValues.tier1, total: 10 },
    { label: 'Founding 50', filled: animatedValues.tier2, total: 40 },
    { label: 'Founding 100', filled: animatedValues.tier3, total: 50 },
  ];

  const totalAvailable = 100 - (animatedValues.tier1 + animatedValues.tier2 + animatedValues.tier3);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-4 md:px-8 bg-[var(--cocoa-deep)]"
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[var(--gold)] mb-2">
              Limitierte Bonus-Plätze
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nur die ersten 100 Creator erhalten{' '}
              <span className="italic text-[var(--gold)]">Founding-Vorteile</span>
            </h2>
            <p className="text-lg text-gray-300">
              Danach normaler Preis. Keine Gnade. Das ist der Deal.
            </p>
          </div>
        </FadeIn>

        {/* Progress Bars */}
        <FadeIn delay={0.1}>
          <div className="space-y-8 mb-12">
            {tiers.map((tier, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-white">{tier.label}</label>
                  <span className="text-sm text-gray-300">
                    {Math.floor(tier.filled)}/{tier.total}
                  </span>
                </div>
                <div className="w-full h-3 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden border border-[rgba(230,201,168,0.2)]">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--gold)] transition-all duration-300 ease-out"
                    style={{ width: `${(tier.filled / tier.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Big Counter */}
        <FadeIn delay={0.2}>
          <div className="bg-gradient-to-br from-[rgba(230,201,168,0.1)] to-[rgba(201,140,131,0.1)] border border-[rgba(230,201,168,0.2)] rounded-[var(--radius-lg)] p-8 text-center">
            <div className="mb-4">
              <p className="text-6xl md:text-7xl font-bold text-[var(--gold)] mb-2">
                {Math.max(0, Math.floor(totalAvailable))}
              </p>
              <p className="text-xl text-white font-semibold">Bonus-Plätze noch verfügbar</p>
            </div>
            <p className="text-gray-300 text-sm">
              Creator Economy wächst um 23% pro Jahr. Die Spots füllen sich schnell.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Scarcity;
