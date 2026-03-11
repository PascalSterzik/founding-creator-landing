'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';
import PhoneMockup from './PhoneMockup';
import PhoneAppUI from './PhoneAppUI';

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

/* ─── Notification Card (scroll-triggered pop) ─── */
function NotificationCard({ children, visible, large = false, style: posStyle = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={
        visible
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 0.3 }
      }
      transition={
        visible
          ? {
              scale: { type: 'spring', stiffness: 350, damping: 18 },
              opacity: { duration: 0.2 },
            }
          : { duration: 0.15 }
      }
      className={`rounded-2xl backdrop-blur-md border ${large ? 'px-5 py-4' : 'px-4 py-3'}`}
      style={{
        background: 'rgba(255, 255, 255, 0.97)',
        borderColor: 'rgba(0,0,0,0.06)',
        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12), 0 6px 16px rgba(0, 0, 0, 0.06)',
        whiteSpace: 'nowrap',
        ...posStyle,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── SVG Revenue Growth Chart (Beacons-inspired, large) ─── */
const RevenueChart = () => (
  <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    {/* Grid lines */}
    <line x1="0" y1="28" x2="280" y2="28" stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
    <line x1="0" y1="56" x2="280" y2="56" stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
    <line x1="0" y1="84" x2="280" y2="84" stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
    <line x1="0" y1="112" x2="280" y2="112" stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
    {/* Area fill */}
    <path
      d="M0 120 L40 105 L80 95 L120 80 L160 55 L200 40 L240 25 L280 10 L280 140 L0 140Z"
      fill="url(#revenueGradient)"
    />
    {/* Line */}
    <path
      d="M0 120 L40 105 L80 95 L120 80 L160 55 L200 40 L240 25 L280 10"
      stroke="#10b981"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Endpoint dot */}
    <circle cx="280" cy="10" r="5" fill="#10b981"/>
    <circle cx="280" cy="10" r="8" fill="#10b981" opacity="0.2"/>
    <defs>
      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="140">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.25"/>
        <stop offset="100%" stopColor="#10b981" stopOpacity="0.02"/>
      </linearGradient>
    </defs>
  </svg>
);

/* ─── Star Rating SVG ─── */
const StarRating = ({ rating = 4.8 }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill={star <= Math.floor(rating) ? '#f59e0b' : star <= rating ? 'url(#halfStar)' : 'none'} stroke="#f59e0b" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

/* ─── Contextual images for notification popups ─── */
const NOTIF_IMAGES = {
  // Brand partnership deal
  deals: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=120&h=120&fit=crop&crop=center',
  // Chat / messages from brands
  messages: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=120&h=120&fit=crop&crop=center',
};

/* ─── Main Component ─── */
export default function SolutionBridge() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // 3D tilt animation: starts tilted, flattens as you scroll
  const rotateX = useTransform(scrollYProgress, [0.05, 0.22], [25, 0]);
  const phoneScale = useTransform(scrollYProgress, [0.05, 0.22], [0.8, 1.05]);
  const phoneTranslateY = useTransform(scrollYProgress, [0.05, 0.22], [120, 0]);
  const phoneOpacity = useTransform(scrollYProgress, [0.03, 0.12], [0, 1]);

  // Phase tracking for app content and scroll-triggered notifications
  const [appProgress, setAppProgress] = useState(0);
  const [showDashboard, setShowDashboard] = useState(false);
  const [visibleNotifs, setVisibleNotifs] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      // App opening progress
      const p = Math.max(0, Math.min(1, (v - 0.15) / 0.12));
      setAppProgress(p);

      // Dashboard appears
      setShowDashboard(v > 0.30);

      // Scroll-triggered notifications: each one at a specific scroll position
      if (v < 0.36) setVisibleNotifs(0);
      else if (v < 0.41) setVisibleNotifs(1);
      else if (v < 0.46) setVisibleNotifs(2);
      else if (v < 0.51) setVisibleNotifs(3);
      else setVisibleNotifs(4);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ minHeight: '400vh' }}
    >
      {/* ─── Header text: scrolls normally (NOT sticky) ─── */}
      <div className="container mx-auto px-6 lg:px-12 pt-20 lg:pt-32">
        <div className="text-center mb-8">
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
            <h3 className="text-lg lg:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto font-light mb-8">
              Eine Plattform, die das macht, was bisher nur Agenturen konnten: dich mit den richtigen Brands zusammenbringen.
            </h3>
          </FadeIn>

          {/* ─── LARGE Revenue Chart (Beacons-style, above phone) ─── */}
          <FadeIn delay={0.3}>
            <div className="max-w-md mx-auto mb-4">
              <div
                className="rounded-2xl p-6 border"
                style={{
                  backgroundColor: 'white',
                  borderColor: 'var(--border)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Monatlicher Umsatz
                    </div>
                    <div style={{ color: '#10b981', fontSize: '28px', fontWeight: '700', letterSpacing: '-0.5px', marginTop: '2px' }}>
                      €2.650
                    </div>
                  </div>
                  <div
                    className="px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{ backgroundColor: '#10b98118', color: '#10b981' }}
                  >
                    +34% ↑
                  </div>
                </div>
                <RevenueChart />
                <div className="flex justify-between mt-2" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mär</span>
                  <span>Apr</span>
                  <span>Mai</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ─── Sticky phone + notifications (phone stays centered while user scrolls) ─── */}
      <div className="sticky top-0 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative flex items-center justify-center" style={{ perspective: '1200px' }}>
            {/* LEFT SIDE notifications (desktop) */}
            <div className="hidden lg:block absolute z-10" style={{ left: 'calc(50% - 370px)', top: '5%' }}>
              <NotificationCard visible={visibleNotifs >= 1} large>
                <div className="flex items-center gap-3.5">
                  <img
                    src={NOTIF_IMAGES.deals}
                    alt="Neue Deals"
                    className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                  />
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '16px', fontWeight: '700', letterSpacing: '-0.3px' }}>+3 neue Deals</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '2px' }}>warten auf dich</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            <div className="hidden lg:block absolute z-10" style={{ left: 'calc(50% - 320px)', top: '40%' }}>
              <NotificationCard visible={visibleNotifs >= 3}>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <StarRating rating={4.8} />
                  </div>
                  <div>
                    <div style={{ color: '#f59e0b', fontSize: '14px', fontWeight: '700' }}>4.8 Rating</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>von 5 Brands</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            {/* RIGHT SIDE notifications (desktop) */}
            <div className="hidden lg:block absolute z-10" style={{ right: 'calc(50% - 380px)', top: '10%' }}>
              <NotificationCard visible={visibleNotifs >= 2} large>
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#10b98115' }}
                  >
                    <span style={{ color: '#10b981', fontSize: '18px', fontWeight: '700' }}>+€850</span>
                  </div>
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '16px', fontWeight: '700', letterSpacing: '-0.3px' }}>Neuer Deal</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '2px' }}>Beauty Brand Co.</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            <div className="hidden lg:block absolute z-10" style={{ right: 'calc(50% - 340px)', top: '48%' }}>
              <NotificationCard visible={visibleNotifs >= 4}>
                <div className="flex items-center gap-3">
                  <img
                    src={NOTIF_IMAGES.messages}
                    alt="Neue Nachrichten"
                    className="w-11 h-11 rounded-xl object-cover flex-shrink-0"
                  />
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '14px', fontWeight: '700' }}>2 Nachrichten</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>Beauty Brand Co.</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            {/* ─── PHONE (centered) with 3D tilt + rise from below ─── */}
            <motion.div
              style={{
                rotateX,
                scale: phoneScale,
                opacity: phoneOpacity,
                y: phoneTranslateY,
                transformOrigin: 'center bottom',
              }}
              className="relative z-0"
            >
              <PhoneMockup width={360} interactive={showDashboard}>
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

          {/* Mobile notifications (below phone, staggered) */}
          <div className="lg:hidden flex flex-wrap justify-center gap-3 mt-6">
            <AnimatePresence>
              {visibleNotifs >= 1 && (
                <motion.div
                  key="m1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="px-4 py-2.5 rounded-xl border flex items-center gap-2"
                  style={{ background: 'rgba(255,255,255,0.95)', borderColor: 'rgba(0,0,0,0.06)', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                >
                  <img src={NOTIF_IMAGES.deals} alt="" className="w-7 h-7 rounded-lg object-cover" />
                  <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--cocoa)' }}>+3 neue Deals</span>
                </motion.div>
              )}
              {visibleNotifs >= 2 && (
                <motion.div
                  key="m2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="px-4 py-2.5 rounded-xl border flex items-center gap-2"
                  style={{ background: 'rgba(255,255,255,0.95)', borderColor: 'rgba(0,0,0,0.06)', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                >
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#10b981' }}>+€2.650</span>
                </motion.div>
              )}
              {visibleNotifs >= 3 && (
                <motion.div
                  key="m3"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="px-4 py-2.5 rounded-xl border flex items-center gap-2"
                  style={{ background: 'rgba(255,255,255,0.95)', borderColor: 'rgba(0,0,0,0.06)', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                >
                  <img src={NOTIF_IMAGES.messages} alt="" className="w-7 h-7 rounded-lg object-cover" />
                  <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--cocoa)' }}>2 Nachrichten</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
