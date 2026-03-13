'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';
import { useSlotCount } from '@/lib/slotTracker';
import { Check, Crown } from 'lucide-react';

const perks = [
  {
    title: 'Erste 3 Kooperationen komplett kostenlos vermittelt',
    description: 'Wir übernehmen alles: Matching, Abstimmung, Verhandlung. Du musst nur Content liefern.',
  },
  {
    title: 'Persönliches Onboarding mit dem Gründerteam',
    description: 'Carlo nimmt sich persönlich Zeit für dein Profil. Kein Gruppen-Call, kein Chatbot.',
  },
  {
    title: 'Höchste Matching-Priorität bei Brand Deals',
    description: 'Wenn ein neuer Deal reinkommt, sehen Founding Creator ihn zuerst.',
  },
  {
    title: 'Direkter Draht zum Founder',
    description: 'Feedback, Fragen, Wünsche: direkt an Carlo, ohne Umweg über Support-Tickets.',
  },
  {
    title: 'Early Access zu allen neuen Features',
    description: 'Du testest neue Funktionen, bevor sie für andere Creator freigeschaltet werden.',
  },
  {
    title: 'Exklusiver Founding Creator Badge',
    description: 'Sichtbar auf deinem Profil. Brands sehen sofort, dass du von Anfang an dabei warst.',
  },
  {
    title: 'Einfluss auf die Produktentwicklung',
    description: 'Dein Feedback fließt direkt in neue Features ein. Du formst die Plattform mit.',
  },
];

export default function Perks() {
  const remaining = useSlotCount();
  const taken = 55 - remaining;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-ivory)]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[var(--accent)] mb-3 tracking-wide">
            Founding Creator Programm
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text)] mb-4">
            Was du als{' '}
            <span className="italic text-[var(--accent)]">Founding Creator</span>
            {' '}bekommst
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            {`55 Plätze.${taken > 0 ? ` ${taken} bereits vergeben.` : ''} Jeder Founding Creator bekommt den gleichen vollen Bonus.`}
          </p>
        </div>

        {/* Single Card with all Perks */}
        <FadeIn>
          <div className="relative rounded-2xl overflow-hidden border-2 border-[var(--gold)] bg-white shadow-xl">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)] to-[var(--accent)] opacity-5 pointer-events-none" />

            {/* Top border accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--gold)] to-[var(--accent)]" />

            <div className="p-8 sm:p-10 relative z-10">
              {/* Icon + Badge row */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(230, 201, 168, 0.2)' }}
                  >
                    <Crown size={24} style={{ color: 'var(--gold-dark)' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text)]">
                      Founding Creator
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {`Limitiert auf 55 Plätze${taken > 0 ? `, ${taken} bereits vergeben` : ''}`}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-green-50 text-green-700 border-green-200">
                  Noch erhältlich
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-[var(--border)] my-5" />

              {/* Perks List — checkmarks only */}
              <ul className="space-y-5">
                {perks.map((perk, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: 'rgba(201, 140, 131, 0.08)' }}
                    >
                      <Check size={18} style={{ color: 'var(--accent)' }} />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[var(--text)]">{perk.title}</span>
                      <p className="text-sm text-[var(--text-secondary)] mt-0.5">{perk.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.15}>
          <div className="text-center mt-12">
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
}
