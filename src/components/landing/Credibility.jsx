'use client';

import FadeIn from '@/components/motion/FadeIn';
import InflubookLogo from './InflubookLogo';
import { Zap, Scale, Users } from 'lucide-react';

export default function Credibility() {
  const cards = [
    {
      icon: Zap,
      title: 'Creator-First Architektur',
      description:
        'Kein Marktplatz, auf dem du dich gegen tausende bewirbst. Influbook verbindet dich gezielt mit Brands, die zu dir passen.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=350&fit=crop',
    },
    {
      icon: Scale,
      title: 'Faire Konditionen',
      description:
        'Transparente Deals, keine versteckten Gebühren. Du weißt genau, was du verdienst und wie die Zusammenarbeit funktioniert.',
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=350&fit=crop',
    },
    {
      icon: Users,
      title: 'Community statt Konkurrenz',
      description:
        'Founding Creator sind keine Nummern. Du bist Teil einer handverlesenen Gemeinschaft, die gemeinsam wächst.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=350&fit=crop&crop=faces',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[var(--accent)] mb-3 tracking-wide">
            Warum <InflubookLogo />?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text)] mb-4">
            Gebaut von jemandem, der das Problem{' '}
            <span className="italic text-[var(--accent)]">kennt</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            <InflubookLogo /> entstand aus eigener Frustration mit bestehenden Lösungen. Ich wollte
            eine Plattform bauen, die ich selbst nutzen würde.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <FadeIn key={card.title} delay={index * 0.15}>
                <div className="relative h-full rounded-2xl border border-[var(--border)] bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
                  {/* Card Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.15) 100%)',
                      }}
                    />
                  </div>

                  <div className="p-8">
                    {/* Icon Circle */}
                    <div className="mb-5 -mt-12 relative z-10">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300 border-4 border-white">
                        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--text)] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
