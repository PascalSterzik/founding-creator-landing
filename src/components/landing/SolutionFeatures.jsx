'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';

const FEATURES = [
  {
    id: 0,
    number: '01',
    title: 'Deals entdecken und bewerben',
    description: 'Marken stellen Kooperationen ein, du siehst alle Angebote passend zu deinem Profil.',
    icon: '✨',
  },
  {
    id: 1,
    number: '02',
    title: 'Gematcht werden',
    description: 'Die Plattform verbindet dich mit Marken, die perfekt zu dir passen.',
    icon: '🤝',
  },
  {
    id: 2,
    number: '03',
    title: 'Alles an einem Ort',
    description: 'Kommunikation, Briefings, Deadlines, Verträge. Organisiert. Zentral. Einfach.',
    icon: '📦',
  },
  {
    id: 3,
    number: '04',
    title: 'Überblick behalten',
    description: 'Sieh auf einen Blick, welche Deals offen sind, welche laufen, und was abgeschlossen ist.',
    icon: '📊',
  },
];

const DASHBOARD_VIEWS = {
  0: {
    title: 'Verfügbare Deals',
    items: [
      { label: 'TechBrand', value: '€1.200', tag: 'Neu' },
      { label: 'Fashion Studio', value: '€800', tag: 'Perfekt' },
      { label: 'Fitness Pro', value: '€650', tag: 'Nische' },
    ],
  },
  1: {
    title: 'Matching Engine',
    items: [
      { label: 'Perfect Match', value: '95%', tag: 'High' },
      { label: 'Good Fit', value: '87%', tag: 'Med' },
      { label: 'Interessant', value: '72%', tag: 'Low' },
    ],
  },
  2: {
    title: 'Projekt Center',
    items: [
      { label: 'Briefing', value: 'Offen', tag: '3 Tage' },
      { label: 'Content Due', value: 'Offen', tag: '2 Tage' },
      { label: 'Final Review', value: 'Offen', tag: '1 Tag' },
    ],
  },
  3: {
    title: 'Performance',
    items: [
      { label: 'Aktive Deals', value: '5', tag: '€2.650' },
      { label: 'Ausstehend', value: '2', tag: '€1.100' },
      { label: 'Abgeschlossen', value: '12', tag: '€8.900' },
    ],
  },
};

export default function SolutionFeatures() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Label */}
        <FadeIn>
          <p className="text-sm font-semibold tracking-wide text-[var(--accent)] mb-4">
            SO FUNKTIONIERT'S
          </p>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text)] mb-4 max-w-3xl">
            So einfach läuft es mit{' '}
            <span className="italic text-[var(--accent)]">CreatorBridge</span>
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.2}>
          <p className="text-lg text-[var(--text-secondary)] mb-16 max-w-2xl">
            Vier einfache Schritte zwischen deinen Deals und deinem Erfolg.
          </p>
        </FadeIn>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Tabs (Desktop) / Accordion (Mobile) */}
          <FadeIn delay={0.3} className="lg:col-span-1">
            <div className="space-y-3">
              {FEATURES.map((feature) => (
                <motion.button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`w-full text-left p-6 rounded-lg border transition-all ${
                    activeTab === feature.id
                      ? 'bg-white border-[var(--border)] shadow-md'
                      : 'border-[var(--border)] hover:bg-[var(--bg-ivory)]'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {/* Icon + Number */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`text-2xl transition-opacity ${
                        activeTab === feature.id ? 'opacity-100' : 'opacity-60'
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`text-sm font-bold transition-colors ${
                          activeTab === feature.id
                            ? 'text-[var(--accent)]'
                            : 'text-[var(--text-muted)]'
                        }`}
                      >
                        {feature.number}
                      </p>
                      <h3
                        className={`text-base font-bold mt-2 transition-colors ${
                          activeTab === feature.id
                            ? 'text-[var(--text)]'
                            : 'text-[var(--text)]'
                        }`}
                      >
                        {feature.title}
                      </h3>
                      {activeTab === feature.id && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </div>

                    {/* Active Indicator */}
                    {activeTab === feature.id && (
                      <motion.div
                        layoutId="activeBorder"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent)] rounded-l-lg"
                      />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </FadeIn>

          {/* Right: Dashboard Preview (Desktop) / Below Tabs (Mobile) */}
          <FadeIn delay={0.4} className="lg:col-span-2">
            <div className="relative h-full min-h-96 lg:min-h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-[var(--bg-ivory)] to-white border border-[var(--border)] p-8 flex flex-col justify-center">
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--cocoa)] to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-[var(--text)] mb-8">
                      {DASHBOARD_VIEWS[activeTab].title}
                    </h3>

                    <div className="space-y-4">
                      {DASHBOARD_VIEWS[activeTab].items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-[var(--border)] hover:shadow-md transition-shadow"
                        >
                          <div>
                            <p className="text-sm font-bold text-[var(--text)]">{item.label}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-[var(--accent)]">
                              {item.value}
                            </span>
                            <span className="text-xs font-semibold text-[var(--text-muted)] bg-[var(--bg-ivory)] px-3 py-1 rounded-full">
                              {item.tag}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
