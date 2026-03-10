'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';
import PhoneMockup from './PhoneMockup';
import PhoneAppUI from './PhoneAppUI';

/* ─── Phase constants ─── */
// Phase 0: 0.00 - 0.15  → Phone tilts in (ContainerScroll)
// Phase 1: 0.15 - 0.30  → App opening (logo + "Willkommen, Creator.")
// Phase 2: 0.30 - 0.45  → Transition to dashboard
// Phase 3: 0.45 - 0.75  → Dashboard visible + notifications fly in + interactive
// Phase 4: 0.75 - 0.85  → Fade out / release sticky

/* ─── Phone App Open Screen ─── */
function PhoneAppOpen({ progress }) {
  const logoOpacity = Math.min(1, progress * 4);
  const logoScale = 0.85 + Math.min(0.15, progress * 0.5);
  const textOpacity = Math.max(0, (progress - 0.35) * 3);
  const textY = Math.max(0, (1 - Math.max(0, (progress - 0.35) * 3)) * 15);

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

      {/* "Willkommen, Creator." */}
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

      {/* Loading bar */}
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
              width: `${Math.min(100, progress * 130)}%`,
              background: 'linear-gradient(90deg, var(--accent), var(--gold))',
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Side Notification Card ─── */
function NotificationCard({ children, delay = 0, side = 'left', visible }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -40 : 40, scale: 0.9 }}
      animate={visible ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: side === 'left' ? -40 : 40, scale: 0.9 }}
      transition={{ duration: 0.5, delay: visible ? delay : 0, ease: [0.22, 1, 0.36, 1] }}
      className="px-5 py-3.5 rounded-2xl backdrop-blur-md border whitespace-nowrap"
      style={{
        background: 'rgba(255, 255, 255, 0.92)',
        borderColor: 'var(--border)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)',
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Main Component ─── */
export default function SolutionBridge() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // ContainerScroll transforms (Phase 0)
  const rotateX = useTransform(scrollYProgress, [0.05, 0.2], [25, 0]);
  const scale = useTransform(scrollYProgress, [0.05, 0.2], [0.82, 1]);
  const translateY = useTransform(scrollYProgress, [0.05, 0.2], [120, 0]);
  const phoneOpacity = useTransform(scrollYProgress, [0.03, 0.15], [0, 1]);

  // Phase tracking
  const [phase, setPhase] = useState(0);
  const [appProgress, setAppProgress] = useState(0);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [sectionOpacity, setSectionOpacity] = useState(1);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      // App opening progress (Phase 1)
      const p = Math.max(0, Math.min(1, (v - 0.15) / 0.15));
      setAppProgress(p);

      // Dashboard appears (Phase 2+)
      setShowDashboard(v > 0.32);

      // Notifications fly in (Phase 3)
      setShowNotifications(v > 0.42);

      // Fade out (Phase 4)
      if (v > 0.78) {
        setSectionOpacity(Math.max(0, 1 - (v - 0.78) / 0.1));
      } else {
        setSectionOpacity(1);
      }

      // Phase
      if (v < 0.15) setPhase(0);
      else if (v < 0.30) setPhase(1);
      else if (v < 0.45) setPhase(2);
      else if (v < 0.75) setPhase(3);
      else setPhase(4);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ minHeight: '350vh' }}
    >
      <div
        className="sticky top-0 min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ opacity: sectionOpacity }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header text */}
          <FadeIn>
            <p className="text-sm font-semibold tracking-wide text-[var(--accent)] mb-4 text-center uppercase">
              Die Lösung
            </p>
          </FadeIn>

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

          <FadeIn delay={0.2}>
            <h3 className="text-lg lg:text-xl text-[var(--text-secondary)] mb-10 text-center max-w-2xl mx-auto font-light">
              Eine Plattform, die das macht, was bisher nur Agenturen konnten: dich mit den richtigen Brands zusammenbringen.
            </h3>
          </FadeIn>

          {/* Phone + Notifications layout */}
          <div className="flex items-center justify-center gap-6 lg:gap-10 relative">
            {/* Left notifications (desktop only) */}
            <div className="hidden lg:flex flex-col gap-4 items-end w-56">
              <NotificationCard side="left" delay={0} visible={showNotifications}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}>
                    <span className="text-white text-sm">📈</span>
                  </div>
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '14px', fontWeight: '700' }}>+€2.650</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>Umsatz diesen Monat</div>
                  </div>
                </div>
              </NotificationCard>

              <NotificationCard side="left" delay={0.15} visible={showNotifications}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}>
                    <span className="text-white text-sm">⭐</span>
                  </div>
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '14px', fontWeight: '700' }}>4.8 Rating</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>von 5 Brands</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            {/* Phone with ContainerScroll animation */}
            <div style={{ perspective: '1000px' }}>
              <motion.div
                style={{
                  rotateX,
                  scale,
                  translateY,
                  opacity: phoneOpacity,
                }}
              >
                <PhoneMockup width={320} flat interactive={showDashboard}>
                  <AnimatePresence mode="wait">
                    {showDashboard ? (
                      <motion.div
                        key="dashboard"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full"
                      >
                        <PhoneAppUI />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="appopen"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full"
                      >
                        <PhoneAppOpen progress={appProgress} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </PhoneMockup>
              </motion.div>
            </div>

            {/* Right notifications (desktop only) */}
            <div className="hidden lg:flex flex-col gap-4 items-start w-56">
              <NotificationCard side="right" delay={0.08} visible={showNotifications}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)' }}>
                    <span className="text-white text-sm">🤝</span>
                  </div>
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '14px', fontWeight: '700' }}>+3 neue Deals</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>warten auf dich</div>
                  </div>
                </div>
              </NotificationCard>

              <NotificationCard side="right" delay={0.25} visible={showNotifications}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' }}>
                    <span className="text-white text-sm">💬</span>
                  </div>
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '14px', fontWeight: '700' }}>2 Nachrichten</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>Beauty Brand Co.</div>
                  </div>
                </div>
              </NotificationCard>
            </div>
          </div>

          {/* Mobile notifications (below phone) */}
          <div className="lg:hidden flex flex-wrap justify-center gap-3 mt-6">
            <AnimatePresence>
              {showNotifications && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="px-4 py-2.5 rounded-xl border"
                    style={{
                      background: 'rgba(255,255,255,0.92)',
                      borderColor: 'var(--border)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--cocoa)' }}>+3 neue Deals</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="px-4 py-2.5 rounded-xl border"
                    style={{
                      background: 'rgba(255,255,255,0.92)',
                      borderColor: 'var(--border)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#10b981' }}>+€2.650</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="px-4 py-2.5 rounded-xl border"
                    style={{
                      background: 'rgba(255,255,255,0.92)',
                      borderColor: 'var(--border)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--cocoa)' }}>💬 2 Nachrichten</span>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
