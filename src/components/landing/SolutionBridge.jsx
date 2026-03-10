'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';
import PhoneMockup from './PhoneMockup';
import PhoneAppUI from './PhoneAppUI';

export default function SolutionBridge() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const phoneScale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
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
              CreatorBridge
            </h2>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.2}>
            <h3 className="text-lg lg:text-xl text-[var(--text-secondary)] mb-12 text-center max-w-2xl mx-auto font-light">
              Die Plattform, die das macht, was bisher nur Agenturen konnten.
            </h3>
          </FadeIn>

          {/* Phone Mockup with Scroll Animation */}
          <div className="flex justify-center mt-16">
            <motion.div
              style={{
                scale: phoneScale,
                opacity: phoneOpacity,
              }}
              className="w-full max-w-md"
            >
              <PhoneMockup width={340} tilt={false}>
                <PhoneAppUI />
              </PhoneMockup>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
