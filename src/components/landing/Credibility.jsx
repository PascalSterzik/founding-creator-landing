'use client';

import FadeIn from '@/components/motion/FadeIn';
import CreatorBridgeLogo from './CreatorBridgeLogo';
import { Zap, Scale, Users } from 'lucide-react';

export default function Credibility() {
  const cards = [
    {
      icon: Zap,
      title: 'Creator-First Architektur',
      description:
        'Kein Marktplatz, auf dem du dich gegen tausende bewirbst. CreatorBridge verbindet dich gezielt mit Brands, die zu dir passen.',
    },
    {
      icon: Scale,
      title: 'Faire Konditionen',
      description:
        'Transparente Deals, keine versteckten Gebühren. Du weißt genau, was du verdienst und wie die Zusammenarbeit funktioniert.',
    },
    {
      icon: Users,
      title: 'Community statt Konkurrenz',
      description:
        'Founding Creator sind keine Nummern. Du bist Teil einer handverlesenen Gemeinschaft, die gemeinsam wächst.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[var(--accent)] mb-3 tracking-wide">
            Warum <CreatorBridgeLogo />?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text)] mb-4">
            Gebaut von jemandem, der das Problem{' '}
            <span className="italic text-[var(--accent)]">kennt</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            <CreatorBridgeLogo /> entstand aus eigener Frustration mit bestehenden Lösungen. Ich wollte
            eine Plattform bauen, die ich selbst nutzen würde.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <FadeIn key={card.title} delay={index * 0.15}>
                <div className="relative h-full rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                  {/* Icon Circle with Accent Background */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent)] from-0% to-[var(--accent-hover)] to-100% flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[var(--text)] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
