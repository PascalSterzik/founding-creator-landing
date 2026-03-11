'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';
import { Check, Crown, Star, Sparkles } from 'lucide-react';

export default function Perks() {
  const tiers = [
    {
      name: 'Founding 10',
      range: 'Plätze 1 bis 10',
      subtitle: 'Exklusivste Vorteile',
      badge: 'Noch erhältlich',
      badgeColor: 'bg-green-50 text-green-700 border-green-200',
      icon: Crown,
      perks: [
        'Persönliches 1:1 Onboarding mit dem Gründerteam',
        'Direkter Einfluss auf die Produktentwicklung',
        'Höchste Matching-Priorität bei Brand Deals',
        'Priorisierte Profilprüfung',
        'Frühester Zugang zu neuen Features',
        'Exklusiver Founding 10 Badge',
        'Zugang zur privaten Founding-10-Community',
      ],
      isHighlighted: true,
    },
    {
      name: 'Founding 50',
      range: 'Plätze 11 bis 50',
      subtitle: 'Starke Vorteile',
      badge: 'Verfügbar',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: Star,
      perks: [
        'Priorisiertes Gruppen-Onboarding',
        'Early Access zu allen Features',
        'Priorisierter Support',
        'Regelmäßige Founder-Updates',
        'Frühe Berücksichtigung bei neuen Deals',
        'Founding 50 Badge',
      ],
      isHighlighted: false,
    },
    {
      name: 'Founding 100',
      range: 'Plätze 51 bis 100',
      subtitle: 'Basis-Vorteile',
      badge: 'Verfügbar',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: Sparkles,
      perks: [
        'Onboarding-Support',
        'Early Access',
        'Regelmäßige Updates',
        'Feedback-Möglichkeit',
        'Zukünftige exklusive Perks',
        'Founding 100 Badge',
      ],
      isHighlighted: false,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-ivory)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[var(--accent)] mb-3 tracking-wide">
            Founding Creator Vorteile
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text)] mb-4">
            Warum es sich lohnt,{' '}
            <span className="italic text-[var(--accent)]">früh</span> dabei zu sein
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Wir haben insgesamt 100 exklusive Founding Creator Spots reserviert. Je früher du
            dabei bist, desto umfassender deine Vorteile.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <FadeIn key={tier.name} delay={index * 0.15}>
                <div
                  className={`relative h-full rounded-2xl overflow-hidden transition-all duration-300 ${
                    tier.isHighlighted
                      ? 'md:scale-105 border-2 border-[var(--gold)] bg-white shadow-xl'
                      : 'border border-[var(--border)] bg-white shadow-md hover:shadow-lg'
                  }`}
                >
                  {/* Glow effect for highlighted card */}
                  {tier.isHighlighted && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)] to-[var(--accent)] opacity-5 pointer-events-none" />
                  )}

                  {/* Top border accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 ${
                      tier.isHighlighted
                        ? 'bg-gradient-to-r from-[var(--gold)] to-[var(--accent)]'
                        : 'bg-gradient-to-r from-[var(--accent)] to-transparent'
                    }`}
                  />

                  <div className="p-8 relative z-10">
                    {/* Icon + Badge row */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: tier.isHighlighted
                            ? 'rgba(230, 201, 168, 0.2)'
                            : 'rgba(201, 140, 131, 0.1)',
                        }}
                      >
                        <Icon
                          size={20}
                          style={{
                            color: tier.isHighlighted ? 'var(--gold-dark)' : 'var(--accent)',
                          }}
                        />
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${tier.badgeColor}`}
                      >
                        {tier.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[var(--text)] mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                      {tier.range}
                    </p>
                    <p className="text-sm font-medium text-[var(--text-muted)] mb-4">
                      {tier.subtitle}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-[var(--border)] my-5" />

                    {/* Perks List */}
                    <ul className="space-y-3">
                      {tier.perks.map((perk, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <Check className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[var(--text-secondary)]">{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Single CTA for all tiers */}
        <FadeIn delay={0.45}>
          <div className="text-center">
            <p className="text-[var(--text-secondary)] mb-6">
              Alle Founding Creator Spots sind reserviert für echte Creator mit etabliertem
              Publikum im DACH-Raum.{' '}
              <span className="text-[var(--accent)] font-semibold">
                Verfügbarkeit ist limitiert.
              </span>
            </p>
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
