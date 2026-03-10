'use client';

import FadeIn from '@/components/motion/FadeIn';
import { Check, X } from 'lucide-react';

export default function ForWhom() {
  const goodFit = [
    'Regelmäßig Content auf Instagram, TikTok oder YouTube erstellst',
    'Interesse an Brand Deals hast',
    'Mehr authentische Kooperationen willst',
    'Wert auf Struktur und Transparenz legst',
    'Bereit bist, eine neue Plattform mitzugestalten',
    'Authentischen Content über schnelle Likes stellst',
    'Im DACH-Raum aktiv bist',
  ];

  const notAGoodFit = [
    'Nur schnelles Geld möchtest',
    'Keinen Content erstellst',
    'Kein Interesse an langfristigen Kooperationen hast',
    'Nicht bereit bist, Feedback zu geben',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[var(--accent)] mb-3 tracking-wide">
            Ist das für dich?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text)] mb-4">
            Für wen das{' '}
            <span className="italic text-[var(--accent)]">gedacht</span> ist
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            CreatorBridge ist nicht für jeden. Das ist absichtlich.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Good Fit Column */}
          <FadeIn delay={0}>
            <div className="rounded-2xl p-8 bg-green-50 border border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text)]">
                  Passt zu dir wenn...
                </h3>
              </div>

              <ul className="space-y-4">
                {goodFit.map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Not A Good Fit Column */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl p-8 bg-red-50 border border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-600" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text)]">
                  Eher nicht wenn...
                </h3>
              </div>

              <ul className="space-y-4">
                {notAGoodFit.map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* CTA Box */}
        <FadeIn delay={0.2}>
          <div className="bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] rounded-2xl p-8 md:p-10 text-white text-center">
            <p className="text-lg mb-6 leading-relaxed">
              Es geht nicht nur darum, dabei zu sein. Es geht darum, mit den richtigen Menschen
              an den richtigen Deals zu arbeiten. Wenn das nach dir klingt, lass uns sprechen.
            </p>
            <button className="bg-white text-[var(--accent)] px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Lass uns ein Call buchen
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
