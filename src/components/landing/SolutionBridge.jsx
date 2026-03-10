'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';
import PhoneMockup from './PhoneMockup';

function PhoneAppOpen({ progress }) {
  // progress: 0 = start, 1 = fully open
  // Logo appears first, then "Willkommen Creator" fades in
  const logoOpacity = Math.min(1, progress * 3); // 0 to 0.33 -> 0 to 1
  const logoScale = 0.8 + Math.min(0.2, progress * 0.6); // 0.8 to 1
  const textOpacity = Math.max(0, (progress - 0.4) * 2.5); // 0.4 to 0.8 -> 0 to 1
  const textY = Math.max(0, (1 - Math.max(0, (progress - 0.4) * 2.5)) * 20); // slides up

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center relative"
      style={{
        background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-ivory) 100%)',
      }}
    >
      {/* Status bar */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-2.5 text-xs font-semibold"
        style={{ color: 'var(--text)', opacity: logoOpacity }}
      >
        <span>9:41</span>
        <div className="flex gap-1.5 items-center">
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path d="M1 9V5M3.5 9V3M6 9V1M8.5 9V4M11 9V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path d="M6 9C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9Z" fill="currentColor"/>
            <path d="M3.5 6C4.5 5 5.5 4.5 6 4.5C6.5 4.5 7.5 5 8.5 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            <path d="M1.5 4C3 2.5 4.5 1.5 6 1.5C7.5 1.5 9 2.5 10.5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          </svg>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <rect x="0.5" y="1.5" width="11" height="7" rx="0.5" stroke="currentColor" strokeWidth="1"/>
            <rect x="11.75" y="3" width="1.25" height="4" rx="0.25" fill="currentColor"/>
            <rect x="1" y="2" width="8" height="6" fill="currentColor" opacity="0.8"/>
          </svg>
        </div>
      </div>

      {/* Logo */}
      <div
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          transition: 'transform 0.1s ease-out',
        }}
        className="flex items-center gap-1 mb-4"
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: 'var(--cocoa)',
            fontWeight: '700',
            fontSize: '28px',
          }}
        >
          Creator
        </span>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: 'var(--accent)',
            fontStyle: 'italic',
            fontWeight: '600',
            fontSize: '28px',
          }}
        >
          Bridge
        </span>
      </div>

      {/* Willkommen Creator text */}
      <div
        style={{
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
        }}
        className="text-center"
      >
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '16px',
            fontWeight: '400',
            letterSpacing: '0.3px',
          }}
        >
          Willkommen, Creator.
        </p>
      </div>

      {/* Subtle loading indicator */}
      <div
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
        style={{ opacity: textOpacity * 0.6 }}
      >
        <div
          className="w-8 h-1 rounded-full overflow-hidden"
          style={{ backgroundColor: 'rgba(201, 140, 131, 0.15)' }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${Math.min(100, progress * 120)}%`,
              background: 'linear-gradient(90deg, var(--accent), var(--gold))',
              transition: 'width 0.2s ease-out',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function SolutionBridge() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // ContainerScroll-style transforms
  const rotateX = useTransform(scrollYProgress, [0.1, 0.5], [20, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.85, 1]);
  const translateY = useTransform(scrollYProgress, [0.1, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);

  // App opening progress (tied to scroll after phone is visible)
  const [appProgress, setAppProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      // Map scroll 0.3-0.7 to app progress 0-1
      const p = Math.max(0, Math.min(1, (v - 0.3) / 0.4));
      setAppProgress(p);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="py-20 lg:py-32 relative" style={{ minHeight: '120vh' }}>
      <div className="sticky top-20 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Label */}
          <FadeIn>
            <p className="text-sm font-semibold tracking-wide text-[var(--accent)] mb-4 text-center uppercase">
              Die Lösung
            </p>
          </FadeIn>

          {/* Heading with logo styling */}
          <FadeIn delay={0.1}>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--text)] mb-4 text-center max-w-3xl mx-auto">
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Creator
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: 'var(--accent)',
                  fontStyle: 'italic',
                }}
              >
                Bridge
              </span>
            </h2>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.2}>
            <h3 className="text-lg lg:text-xl text-[var(--text-secondary)] mb-12 text-center max-w-2xl mx-auto font-light">
              Eine Plattform, die das macht, was bisher nur Agenturen konnten: dich mit den richtigen Brands zusammenbringen.
            </h3>
          </FadeIn>

          {/* Phone with ContainerScroll animation */}
          <div
            className="flex justify-center mt-8"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              style={{
                rotateX,
                scale,
                translateY,
                opacity,
              }}
              className="w-full max-w-sm"
            >
              <PhoneMockup width={320} flat>
                <PhoneAppOpen progress={appProgress} />
              </PhoneMockup>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
