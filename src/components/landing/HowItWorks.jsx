'use client';

import FadeIn from '@/components/motion/FadeIn';
import { FileText, Phone, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      number: 1,
      title: 'Bewerbung ausfüllen',
      description: 'Erzähl uns von deinen Kanälen, deiner Nische und deinen Zielen. Dauert unter 3 Minuten.',
      detail: 'Unter 3 Minuten',
    },
    {
      icon: Phone,
      number: 2,
      title: 'Persönlicher Call mit Carlo',
      description: 'Kein Verkaufsgespräch. Ein ehrliches Kennenlernen, um herauszufinden, ob es passt.',
      detail: '30 Min, ganz entspannt',
    },
    {
      icon: Zap,
      number: 3,
      title: 'Zugang erhalten',
      description: 'Wenn es passt, bekommst du sofort Zugang zur Plattform und startest vor allen anderen.',
      detail: 'Sofortiger Start',
    },
  ];

  return (
    <section id="so-funktionierts" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[var(--accent)] mb-3 tracking-wide">
            So funktioniert&apos;s
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text)] mb-4">
            In 3 Schritten zum{' '}
            <span className="italic text-[var(--accent)]">Founding Creator</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Kein komplizierter Prozess. Kein Papierkram. Nur drei einfache Schritte.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.number} delay={index * 0.15}>
                <div className="relative text-center">
                  {/* Connector arrow (desktop only, between cards) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-4 w-8 text-[var(--border-strong)] z-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}

                  {/* Step number */}
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 relative"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)',
                      boxShadow: '0 8px 24px rgba(201, 140, 131, 0.25)',
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    <div
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{
                        backgroundColor: 'var(--cocoa)',
                        border: '2px solid var(--bg)',
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--text)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed">
                    {step.description}
                  </p>
                  <span
                    className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full"
                    style={{
                      color: 'var(--accent)',
                      backgroundColor: 'rgba(201, 140, 131, 0.1)',
                      border: '1px solid rgba(201, 140, 131, 0.15)',
                    }}
                  >
                    {step.detail}
                  </span>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
