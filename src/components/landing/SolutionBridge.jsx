'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';

export default function SolutionBridge() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const phoneScale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const phoneOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section ref={containerRef} className="min-h-[200vh] py-20 lg:py-32 relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Label */}
          <FadeIn>
            <p className="text-sm font-semibold tracking-wide text-[var(--accent)] mb-4 text-center">
              DIE LÖSUNG
            </p>
          </FadeIn>

          {/* Heading */}
          <FadeIn delay={0.1}>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--text)] mb-4 text-center max-w-3xl mx-auto">
              <span className="block">CreatorBridge</span>
            </h2>
          </FadeIn>

          {/* Heading with accent */}
          <FadeIn delay={0.2}>
            <h3 className="text-2xl lg:text-3xl text-[var(--text)] mb-12 text-center max-w-2xl mx-auto font-light">
              Eine Plattform, die das macht, was bisher nur Agenturen konnten...
            </h3>
          </FadeIn>

          {/* Phone Mockup with Scroll Animation */}
          <div className="flex justify-center mt-16">
            <motion.div
              style={{
                scale: phoneScale,
                opacity: phoneOpacity,
              }}
              className="w-full max-w-sm"
            >
              {/* iPhone Frame */}
              <div className="relative bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-black">
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 bg-black rounded-b-3xl px-8 py-3 w-40">
                  <div className="flex items-center justify-between">
                    <div className="text-white text-xs font-semibold">9:41</div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Screen Content */}
                <div className="bg-[var(--bg-ivory)] pt-12 pb-8 px-4">
                  {/* Header */}
                  <div className="mb-6 px-2">
                    <p className="text-sm text-[var(--text-muted)] font-semibold mb-2">
                      CreatorBridge
                    </p>
                    <div className="flex gap-3">
                      <button className="text-xs font-bold text-[var(--accent)] pb-2 border-b-2 border-[var(--accent)]">
                        Deals
                      </button>
                      <button className="text-xs font-medium text-[var(--text-muted)] pb-2">
                        Matches
                      </button>
                      <button className="text-xs font-medium text-[var(--text-muted)] pb-2">
                        Inbox
                      </button>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3 mb-6 px-2">
                    <div className="bg-white rounded-lg p-3 border border-[var(--border)]">
                      <p className="text-xs text-[var(--text-muted)] mb-1">Umsatz</p>
                      <p className="text-sm font-bold text-[var(--text)]">€2.650</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-[var(--border)]">
                      <p className="text-xs text-[var(--text-muted)] mb-1">Aktive</p>
                      <p className="text-sm font-bold text-[var(--text)]">5 Deals</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-[var(--border)]">
                      <p className="text-xs text-[var(--text-muted)] mb-1">Neu</p>
                      <p className="text-sm font-bold text-[var(--text)]">3 Match</p>
                    </div>
                  </div>

                  {/* Deal Rows */}
                  <div className="space-y-3 px-2">
                    {[
                      { brand: 'TechBrand GmbH', value: '€800', status: 'Active' },
                      { brand: 'Fashion Studio', value: '€1.200', status: 'Review' },
                      { brand: 'Fitness Pro', value: '€650', status: 'Pending' },
                    ].map((deal, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-lg p-3 border border-[var(--border)] flex justify-between items-center"
                      >
                        <div className="flex-1">
                          <p className="text-xs font-bold text-[var(--text)]">{deal.brand}</p>
                          <p className="text-xs text-[var(--text-muted)] mt-1">{deal.status}</p>
                        </div>
                        <p className="text-sm font-bold text-[var(--accent)]">{deal.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="bg-black h-6 flex items-center justify-center">
                  <div className="w-24 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
