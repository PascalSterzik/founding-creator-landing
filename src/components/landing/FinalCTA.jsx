'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';
import { useSlotCount } from '@/lib/slotTracker';

const FinalCTA = () => {
  const remaining = useSlotCount();
  const taken = 50 - remaining;
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
            Nur die ersten 50 Creator bekommen den vollen Founding-Bonus.{taken > 0 ? ` ${taken} Plätze sind bereits vergeben.` : ''}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
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
        </FadeIn>

      </div>
    </section>
  );
};

export default FinalCTA;
