'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';
import PhoneMockup from './PhoneMockup';
import PhoneAppUI from './PhoneAppUI';

/* ─── SVG Icons (no emojis) ─── */
const TrendUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const ChatIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

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
        style={{ opacity: logoOpacity, transform: `scale(${logoScale})` }}
        className="flex items-center gap-1 mb-4"
      >
        <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--cocoa)', fontWeight: '700', fontSize: '28px' }}>
          Creator
        </span>
        <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--accent)', fontStyle: 'italic', fontWeight: '600', fontSize: '28px' }}>
          Bridge
        </span>
      </div>

      {/* "Willkommen, Creator." */}
      <div style={{ opacity: textOpacity, transform: `translateY(${textY}px)` }} className="text-center">
        <p style={{ color: 'var(--text-secondary)', fontSize: '16px', fontWeight: '400', letterSpacing: '0.3px' }}>
          Willkommen, Creator.
        </p>
      </div>

      {/* Loading bar */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2" style={{ opacity: textOpacity * 0.6 }}>
        <div className="w-8 h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(201, 140, 131, 0.15)' }}>
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

/* ─── Notification Card (pops from center outward) ─── */
function NotificationCard({ children, delay = 0, side = 'left', visible, large = false }) {
  // Pop from center: start at x=0 (center), pop outward
  const xTarget = side === 'left' ? -20 : 20;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, x: 0 }}
      animate={
        visible
          ? { opacity: 1, scale: 1, x: xTarget }
          : { opacity: 0, scale: 0.3, x: 0 }
      }
      transition={
        visible
          ? {
              duration: 0.45,
              delay,
              scale: { type: 'spring', stiffness: 400, damping: 15, delay },
              opacity: { duration: 0.2, delay },
            }
          : { duration: 0.2 }
      }
      className={`rounded-2xl backdrop-blur-md border ${large ? 'px-6 py-5' : 'px-5 py-3.5'}`}
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderColor: 'rgba(0,0,0,0.06)',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06)',
        whiteSpace: 'nowrap',
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

  // Scroll-driven transforms
  const phoneScale = useTransform(scrollYProgress, [0.08, 0.25], [0.85, 1]);
  const phoneTranslateY = useTransform(scrollYProgress, [0.08, 0.25], [80, 0]);
  const phoneOpacity = useTransform(scrollYProgress, [0.05, 0.18], [0, 1]);

  // Text fades out as phone takes over
  const textOpacity = useTransform(scrollYProgress, [0.18, 0.3], [1, 0]);
  const textTranslateY = useTransform(scrollYProgress, [0.18, 0.3], [0, -40]);

  // Phase tracking
  const [appProgress, setAppProgress] = useState(0);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      // App opening progress
      const p = Math.max(0, Math.min(1, (v - 0.18) / 0.14));
      setAppProgress(p);

      // Dashboard appears
      setShowDashboard(v > 0.35);

      // Notifications pop in
      setShowNotifications(v > 0.42);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ minHeight: '350vh' }}
    >
      <div className="sticky top-0 min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          {/* ─── Header text (fades out as phone takes over) ─── */}
          <motion.div style={{ opacity: textOpacity, y: textTranslateY }} className="text-center mb-8">
            <FadeIn>
              <p className="text-sm font-semibold tracking-wide text-[var(--accent)] mb-4 uppercase">
                Die Lösung
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--text)] mb-4 max-w-3xl mx-auto">
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
              <h3 className="text-lg lg:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto font-light">
                Eine Plattform, die das macht, was bisher nur Agenturen konnten: dich mit den richtigen Brands zusammenbringen.
              </h3>
            </FadeIn>
          </motion.div>

          {/* ─── Phone + Notifications ─── */}
          <div className="relative flex items-center justify-center">
            {/* Notification cards positioned absolutely around phone */}
            {/* LEFT SIDE notifications (desktop) */}
            <div className="hidden lg:block absolute z-10" style={{ left: 'calc(50% - 340px)', top: '8%' }}>
              <NotificationCard side="left" delay={0} visible={showNotifications} large>
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white' }}
                  >
                    <TrendUpIcon />
                  </div>
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '16px', fontWeight: '700', letterSpacing: '-0.3px' }}>+€2.650</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '2px' }}>Umsatz diesen Monat</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            <div className="hidden lg:block absolute z-10" style={{ left: 'calc(50% - 300px)', top: '38%' }}>
              <NotificationCard side="left" delay={0.2} visible={showNotifications}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: 'white' }}
                  >
                    <StarIcon />
                  </div>
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '14px', fontWeight: '700' }}>4.8 Rating</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>von 5 Brands</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            {/* RIGHT SIDE notifications (desktop) */}
            <div className="hidden lg:block absolute z-10" style={{ right: 'calc(50% - 360px)', top: '12%' }}>
              <NotificationCard side="right" delay={0.1} visible={showNotifications} large>
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)', color: 'white' }}
                  >
                    <BriefcaseIcon />
                  </div>
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '16px', fontWeight: '700', letterSpacing: '-0.3px' }}>+3 neue Deals</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '2px' }}>warten auf dich</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            <div className="hidden lg:block absolute z-10" style={{ right: 'calc(50% - 320px)', top: '45%' }}>
              <NotificationCard side="right" delay={0.3} visible={showNotifications}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', color: 'white' }}
                  >
                    <ChatIcon />
                  </div>
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '14px', fontWeight: '700' }}>2 Nachrichten</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>Beauty Brand Co.</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            {/* ─── PHONE ─── */}
            <motion.div
              style={{
                scale: phoneScale,
                y: phoneTranslateY,
                opacity: phoneOpacity,
              }}
              className="relative z-0"
            >
              <PhoneMockup width={340} interactive={showDashboard}>
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

          {/* Mobile notifications (below phone) */}
          <div className="lg:hidden flex flex-wrap justify-center gap-3 mt-6">
            <AnimatePresence>
              {showNotifications && (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="px-4 py-2.5 rounded-xl border flex items-center gap-2"
                    style={{ background: 'rgba(255,255,255,0.95)', borderColor: 'rgba(0,0,0,0.06)', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                  >
                    <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)', color: 'white' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--cocoa)' }}>+3 neue Deals</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.1 }}
                    className="px-4 py-2.5 rounded-xl border flex items-center gap-2"
                    style={{ background: 'rgba(255,255,255,0.95)', borderColor: 'rgba(0,0,0,0.06)', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                  >
                    <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#10b981' }}>+€2.650</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.2 }}
                    className="px-4 py-2.5 rounded-xl border flex items-center gap-2"
                    style={{ background: 'rgba(255,255,255,0.95)', borderColor: 'rgba(0,0,0,0.06)', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                  >
                    <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', color: 'white' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--cocoa)' }}>2 Nachrichten</span>
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
