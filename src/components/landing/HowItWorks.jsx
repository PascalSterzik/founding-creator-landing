'use client';

import { useState } from 'react';
import FadeIn from '@/components/motion/FadeIn';
import { FileText, Phone, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      number: 1,
      title: 'Bewerbung ausfüllen',
      description: 'Erzähl uns von deinen Kanälen...',
      detail: 'Dauert unter 3 Minuten',
    },
    {
      icon: Phone,
      number: 2,
      title: 'Persönlicher Call mit Carlo',
      description: 'Kein Verkaufsgespräch...',
      detail: '30 Minuten, ganz entspannt',
    },
    {
      icon: Zap,
      number: 3,
      title: 'Zugang erhalten',
      description: 'Wenn es passt, bekommst du sofort Zugang...',
      detail: 'Vor allen anderen starten',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[var(--accent)] mb-3 tracking-wide">
            So funktioniert's
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text)] mb-4">
            In 3 Schritten zum{' '}
            <span className="italic text-[var(--accent)]">Founding Creator</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Kein komplizierter Prozess...
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--accent)] via-[var(--accent)] to-transparent" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn
                  key={step.number}
                  delay={index * 0.15}
                  className="relative"
                >
                  <div className="flex flex-col items-center">
                    {/* Icon Circle with Badge */}
                    <div className="relative mb-6 z-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] rounded-full blur-lg opacity-20" />
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center">
                        <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--cocoa)] text-white text-sm font-bold flex items-center justify-center border-2 border-[var(--bg-ivory)]">
                        {step.number}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] mb-3 text-sm">
                        {step.description}
                      </p>
                      <p className="text-xs font-medium text-[var(--accent)] bg-[var(--accent)] bg-opacity-10 inline-block px-3 py-1 rounded-full">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
