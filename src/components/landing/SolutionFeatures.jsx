'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';
import { Search, Handshake, LayoutDashboard, BarChart3 } from 'lucide-react';

const FEATURES = [
  {
    id: 0,
    number: '01',
    title: 'Deals entdecken',
    description: 'Marken stellen Kooperationen ein, du siehst alle Angebote passend zu deinem Profil.',
    icon: Search,
  },
  {
    id: 1,
    number: '02',
    title: 'Gematcht werden',
    description: 'Die Plattform verbindet dich mit Marken, die perfekt zu dir passen.',
    icon: Handshake,
  },
  {
    id: 2,
    number: '03',
    title: 'Alles an einem Ort',
    description: 'Kommunikation, Briefings, Deadlines, Verträge. Organisiert. Zentral. Einfach.',
    icon: LayoutDashboard,
  },
  {
    id: 3,
    number: '04',
    title: 'Überblick behalten',
    description: 'Sieh auf einen Blick, welche Deals offen sind, welche laufen, und was abgeschlossen ist.',
    icon: BarChart3,
  },
];

const DASHBOARD_VIEWS = {
  0: {
    title: 'Verfügbare Deals',
    items: [
      { label: 'TechBrand', value: '€1.200', tag: 'Neu', status: 'pending' },
      { label: 'Fashion Studio', value: '€800', tag: 'Perfekt', status: 'active' },
      { label: 'Fitness Pro', value: '€650', tag: 'Nische', status: 'review' },
    ],
  },
  1: {
    title: 'Matching Engine',
    items: [
      { label: 'Perfect Match', value: '95%', tag: 'High', status: 'active' },
      { label: 'Good Fit', value: '87%', tag: 'Med', status: 'active' },
      { label: 'Interessant', value: '72%', tag: 'Low', status: 'pending' },
    ],
  },
  2: {
    title: 'Projekt Center',
    items: [
      { label: 'Briefing', value: 'Offen', tag: '3 Tage', status: 'review' },
      { label: 'Content Due', value: 'Offen', tag: '2 Tage', status: 'pending' },
      { label: 'Final Review', value: 'Offen', tag: '1 Tag', status: 'pending' },
    ],
  },
  3: {
    title: 'Performance',
    items: [
      { label: 'Aktive Deals', value: '5', tag: '€2.650', status: 'active' },
      { label: 'Ausstehend', value: '2', tag: '€1.100', status: 'pending' },
      { label: 'Abgeschlossen', value: '12', tag: '€8.900', status: 'review' },
    ],
  },
};

const statusColors = {
  active: '#10b981',
  pending: '#f59e0b',
  review: '#ec4899',
};

export default function SolutionFeatures() {
  const [activeTab, setActiveTab] = useState(0);
  const IconComponent = FEATURES[activeTab].icon;

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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Feature Tabs */}
          <FadeIn delay={0.3} className="lg:col-span-1">
            <div className="space-y-3">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                const isActive = activeTab === feature.id;
                return (
                  <motion.button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className="w-full text-left p-6 rounded-xl border transition-all relative group"
                    style={{
                      backgroundColor: isActive ? 'white' : 'transparent',
                      borderColor: isActive ? 'var(--border)' : 'var(--border)',
                      boxShadow: isActive
                        ? '0 4px 12px rgba(0, 0, 0, 0.05)'
                        : 'none',
                    }}
                    whileHover={{ y: -2 }}
                  >
                    {/* Left accent bar for active state */}
                    {isActive && (
                      <motion.div
                        layoutId="activeBar"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent)] rounded-l-xl"
                      />
                    )}

                    {/* Content */}
                    <div className="flex gap-4">
                      {/* Icon in rounded square */}
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all"
                        style={{
                          backgroundColor: isActive
                            ? 'var(--accent)'
                            : 'var(--bg-ivory)',
                        }}
                      >
                        <Icon
                          size={24}
                          style={{
                            color: isActive ? 'white' : 'var(--text)',
                          }}
                        />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm font-bold transition-colors"
                          style={{
                            color: isActive
                              ? 'var(--accent)'
                              : 'var(--text-muted)',
                          }}
                        >
                          {feature.number}
                        </p>
                        <h3
                          className="text-base font-bold mt-1 transition-colors"
                          style={{
                            color: 'var(--text)',
                          }}
                        >
                          {feature.title}
                        </h3>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-sm mt-3 leading-relaxed"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            {feature.description}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </FadeIn>

          {/* Right: Dashboard Preview */}
          <FadeIn delay={0.4} className="lg:col-span-2">
            <div
              className="relative rounded-xl overflow-hidden p-8 border min-h-96 lg:min-h-[500px] flex flex-col justify-center"
              style={{
                backgroundColor: 'var(--bg-ivory)',
                borderColor: 'var(--border)',
              }}
            >
              {/* Premium grid background */}
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="var(--cocoa)"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Gradient overlay accent */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 pointer-events-none"
                style={{
                  background: 'var(--accent)',
                  filter: 'blur(80px)',
                }}
              />

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
                    <h3
                      className="text-2xl font-bold mb-8"
                      style={{ color: 'var(--text)' }}
                    >
                      {DASHBOARD_VIEWS[activeTab].title}
                    </h3>

                    <div className="space-y-3">
                      {DASHBOARD_VIEWS[activeTab].items.map((item, idx) => {
                        const borderColor =
                          statusColors[item.status] || 'var(--text-muted)';
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            className="flex items-center justify-between p-4 rounded-lg bg-white border transition-shadow hover:shadow-md"
                            style={{
                              borderColor: 'var(--border)',
                              borderLeft: `4px solid ${borderColor}`,
                            }}
                          >
                            <div>
                              <p
                                className="text-sm font-bold"
                                style={{ color: 'var(--text)' }}
                              >
                                {item.label}
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span
                                className="text-sm font-bold"
                                style={{ color: 'var(--accent)' }}
                              >
                                {item.value}
                              </span>
                              <span
                                className="text-xs font-semibold px-3 py-1 rounded-full"
                                style={{
                                  backgroundColor: `${borderColor}15`,
                                  color: borderColor,
                                }}
                              >
                                {item.tag}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
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
