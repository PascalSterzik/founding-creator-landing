'use client';

import { useEffect, useRef, useState } from 'react';
import FadeIn from '@/components/motion/FadeIn';

const Scarcity = () => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

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

  const tiers = [
    { label: 'Founding 10', available: 10, total: 10 },
    { label: 'Founding 50', available: 40, total: 40 },
    { label: 'Founding 100', available: 50, total: 50 },
  ];

  const totalAvailable = Math.floor((animatedProgress / 100) * 100);

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
              Nur die ersten 100 Creator erhalten{' '}
              <span className="italic text-[var(--gold)]">Founding-Vorteile</span>
            </h2>
            <p className="text-lg text-gray-300">
              Danach normaler Preis. Keine Gnade. Das ist der Deal.
            </p>
          </div>
        </FadeIn>

        {/* Tier Breakdown */}
        <FadeIn delay={0.1}>
          <div className="space-y-6 mb-12">
            {tiers.map((tier, idx) => {
              const barProgress = Math.min(animatedProgress, 100);
              return (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-white">{tier.label}</label>
                    <span className="text-sm text-gray-300">
                      {Math.floor((barProgress / 100) * tier.available)}/{tier.total} verfügbar
                    </span>
                  </div>
                  <div className="w-full h-3 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden border border-[rgba(230,201,168,0.2)]">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--accent)] transition-all duration-300 ease-out rounded-full"
                      style={{ width: `${barProgress}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* Big Counter */}
        <FadeIn delay={0.2}>
          <div className="bg-gradient-to-br from-[rgba(230,201,168,0.1)] to-[rgba(201,140,131,0.1)] border border-[rgba(230,201,168,0.2)] rounded-[var(--radius-lg)] p-8 text-center">
            <div className="mb-4">
              <p className="text-6xl md:text-7xl font-bold text-[var(--gold)] mb-2">
                {totalAvailable}
              </p>
              <p className="text-xl text-white font-semibold">Bonus-Plätze noch verfügbar</p>
            </div>
            <p className="text-gray-300 text-sm">
              Creator Economy wächst um 23% pro Jahr. Die Spots füllen sich schnell.
            </p>
            <a
              href="#bewerbung"
              className="inline-block mt-6 px-8 py-3 rounded-full text-white font-bold text-base transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)',
                boxShadow: '0 12px 40px rgba(201, 140, 131, 0.4)',
              }}
            >
              Jetzt Platz sichern
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Scarcity;
