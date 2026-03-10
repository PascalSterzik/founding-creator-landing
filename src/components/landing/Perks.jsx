'use client';

import FadeIn from '@/components/motion/FadeIn';
import { Check } from 'lucide-react';

export default function Perks() {
  const tiers = [
    {
      name: 'Die ersten 10',
      label: 'Founding 10',
      range: 'Plätze 1 bis 10',
      subtitle: 'Exklusivste Vorteile',
      badge: 'Noch erhältlich',
      badgeColor: 'bg-green-100 text-green-700',
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
      name: 'Plätze 11 bis 50',
      label: 'Founding 50',
      range: 'Founding 50',
      subtitle: 'Starke Vorteile',
      badge: 'Verfügbar',
      badgeColor: 'bg-blue-100 text-blue-700',
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
      name: 'Plätze 51 bis 100',
      label: 'Founding 100',
      range: 'Founding 100',
      subtitle: 'Basis-Vorteile',
      badge: 'Verfügbar',
      badgeColor: 'bg-blue-100 text-blue-700',
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
          {tiers.map((tier, index) => (
            <FadeIn key={tier.label} delay={index * 0.15}>
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
                  {/* Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${tier.badgeColor}`}>
                    {tier.badge}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[var(--text)] mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">
                    {tier.subtitle}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-[var(--border)] my-6" />

                  {/* Perks List */}
                  <ul className="space-y-4 mb-8">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <Check className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--text-secondary)]">{perk}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                      tier.isHighlighted
                        ? 'bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] text-white hover:shadow-lg hover:scale-105'
                        : 'border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white'
                    }`}
                  >
                    Jetzt beitreten
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Note */}
        <FadeIn delay={0.45}>
          <div className="bg-white border border-[var(--border)] rounded-2xl p-6 text-center">
            <p className="text-[var(--text-secondary)]">
              Alle Founding Creator Spots sind reserviert für echte Creator mit etabliertem
              Publikum im DACH-Raum.{' '}
              <span className="text-[var(--accent)] font-semibold">
                Verfügbarkeit ist limitiert.
              </span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
