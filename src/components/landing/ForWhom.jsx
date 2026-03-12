'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';
import CreatorBridgeLogo from './CreatorBridgeLogo';
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
            <CreatorBridgeLogo /> ist nicht für jeden. Das ist absichtlich.
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

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="text-center mt-4">
            <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed max-w-2xl mx-auto">
              Es geht nicht nur darum, dabei zu sein. Es geht darum, mit den richtigen Menschen
              an den richtigen Deals zu arbeiten. Wenn das nach dir klingt, lass uns sprechen.
            </p>
            <a
              href="#bewerbung"
              className="relative inline-flex items-center justify-center px-8 py-3 rounded-full text-white font-semibold overflow-hidden cursor-pointer no-underline whitespace-nowrap transition-all duration-300 hover:scale-105"
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
