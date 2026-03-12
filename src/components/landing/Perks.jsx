'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';
import { Check, Crown, Gift, Users, Zap, MessageCircle, Star, Shield } from 'lucide-react';

const perks = [
  {
    icon: Gift,
    title: 'Erste 3 Kooperationen komplett kostenlos vermittelt',
    description: 'Wir übernehmen alles: Brand-Kontakt, Abstimmung, Matching. Keine Kosten, kein Haken.',
  },
  {
    icon: Users,
    title: 'Persönliches Onboarding mit dem Gründerteam',
    description: 'Kein Gruppen-Call, kein Video-Tutorial. Carlo nimmt sich persönlich Zeit für dein Profil.',
  },
  {
    icon: Zap,
    title: 'Höchste Matching-Priorität bei Brand Deals',
    description: 'Founding Creator werden immer zuerst berücksichtigt, wenn neue Brand Deals reinkommen.',
  },
  {
    icon: MessageCircle,
    title: 'Direkter Draht zum Founder',
    description: 'Persönlicher Kontakt für Feedback, Fragen, Wünsche. Kein Support-Ticket, kein Warten.',
  },
  {
    icon: Star,
    title: 'Early Access zu allen neuen Features',
    description: 'Du testest alles zuerst, bevor es live geht.',
  },
  {
    icon: Shield,
    title: 'Exklusiver Founding Creator Badge',
    description: 'Sichtbar auf deinem Profil. Zeigt Brands, dass du von Anfang an dabei warst.',
  },
  {
    icon: Crown,
    title: 'Einfluss auf die Produktentwicklung',
    description: 'Dein Feedback formt die Plattform direkt mit.',
  },
];

export default function Perks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-ivory)]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[var(--accent)] mb-3 tracking-wide">
            Founding Creator Bonus
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text)] mb-4">
            Werde einer der ersten 50{' '}
            <span className="italic text-[var(--accent)]">Founding Creator</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Wir sind in der Rollout-Phase und nehmen die ersten 50 Creator kostenlos auf. Deine ersten 3 Kooperationen gehen komplett auf uns. Im Gegenzug wollen wir nur dein ehrliches Feedback.
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
                      Limitiert auf 50 Plätze, 12 bereits vergeben
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-green-50 text-green-700 border-green-200">
                  Noch erhältlich
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-[var(--border)] my-5" />

              {/* Perks List */}
              <ul className="space-y-5">
                {perks.map((perk, i) => {
                  const Icon = perk.icon;
                  return (
                    <li key={i} className="flex gap-4 items-start">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: 'rgba(201, 140, 131, 0.08)' }}
                      >
                        <Icon size={18} style={{ color: 'var(--accent)' }} />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-[var(--text)]">{perk.title}</span>
                        <p className="text-sm text-[var(--text-secondary)] mt-0.5">{perk.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Divider */}
              <div className="h-px bg-[var(--border)] my-6" />

              {/* Single level notice */}
              <div
                className="rounded-xl p-4 text-center"
                style={{ backgroundColor: 'rgba(230, 201, 168, 0.1)', border: '1px solid rgba(230, 201, 168, 0.25)' }}
              >
                <p className="text-sm font-semibold text-[var(--text)]">
                  Es gibt nur EIN Level. Jeder Founding Creator bekommt denselben vollen Bonus.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Reason Why Block */}
        <FadeIn delay={0.15}>
          <div className="mt-10 text-center">
            <p className="text-base font-semibold text-[var(--text)] mb-2">
              Warum kostenlos?
            </p>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Weil wir in der Aufbauphase sind und mit echten Ergebnissen beweisen wollen, dass unser Konzept funktioniert. Dafür brauchen wir starke Creator, die uns ehrliches Feedback geben.
            </p>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.2}>
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
