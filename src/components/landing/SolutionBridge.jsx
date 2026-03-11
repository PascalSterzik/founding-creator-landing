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
function NotificationCard({ children, visible, style: posStyle = {} }) {
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
      className="rounded-2xl backdrop-blur-md border px-4 py-3"
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

/* ─── SVG Revenue Growth Chart (Beacons-inspired) ─── */
const RevenueChart = () => (
  <svg viewBox="0 0 280 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    {/* Grid lines */}
    <line x1="0" y1="20" x2="280" y2="20" stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
    <line x1="0" y1="40" x2="280" y2="40" stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
    <line x1="0" y1="60" x2="280" y2="60" stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
    <line x1="0" y1="80" x2="280" y2="80" stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
    {/* Area fill */}
    <path
      d="M0 85 L40 75 L80 68 L120 55 L160 40 L200 30 L240 18 L280 8 L280 100 L0 100Z"
      fill="url(#revenueGradient)"
    />
    {/* Line */}
    <path
      d="M0 85 L40 75 L80 68 L120 55 L160 40 L200 30 L240 18 L280 8"
      stroke="#10b981"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Endpoint dot */}
    <circle cx="280" cy="8" r="4" fill="#10b981"/>
    <circle cx="280" cy="8" r="7" fill="#10b981" opacity="0.2"/>
    <defs>
      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="100">
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

      // Scroll-triggered notifications: tighter intervals for faster pops
      if (v < 0.32) setVisibleNotifs(0);
      else if (v < 0.35) setVisibleNotifs(1);
      else if (v < 0.38) setVisibleNotifs(2);
      else if (v < 0.41) setVisibleNotifs(3);
      else if (v < 0.44) setVisibleNotifs(4);
      else setVisibleNotifs(5);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ minHeight: '250vh' }}
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
        </div>
      </div>

      {/* ─── Sticky phone + notifications (phone stays centered while user scrolls) ─── */}
      <div className="sticky top-0 min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative flex items-center justify-center" style={{ perspective: '1200px' }}>

            {/* ─── Mobile 3D overlay notifications (positioned around the phone) ─── */}
            {/* Notification 1: Top-left of phone */}
            <div className="lg:hidden absolute z-10" style={{ left: '2%', top: '5%' }}>
              <NotificationCard visible={visibleNotifs >= 1}>
                <div className="flex items-center gap-2">
                  <img src="/images/creator-brand-handshake.jpg" alt="" className="w-8 h-8 rounded-lg object-cover" />
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '12px', fontWeight: '700' }}>+3 neue Deals</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '10px' }}>warten auf dich</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            {/* Notification 2: Top-right of phone */}
            <div className="lg:hidden absolute z-10" style={{ right: '2%', top: '10%' }}>
              <NotificationCard visible={visibleNotifs >= 2}>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#10b981', fontSize: '13px', fontWeight: '800' }}>+€850</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '10px' }}>Neuer Deal</span>
                </div>
              </NotificationCard>
            </div>

            {/* Notification 3: Left side, middle */}
            <div className="lg:hidden absolute z-10" style={{ left: '0%', top: '38%' }}>
              <NotificationCard visible={visibleNotifs >= 3}>
                <div className="flex items-center gap-2">
                  <StarRating rating={4.8} />
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#f59e0b' }}>4.8</span>
                </div>
              </NotificationCard>
            </div>

            {/* Notification 4: Right side, middle */}
            <div className="lg:hidden absolute z-10" style={{ right: '0%', top: '42%' }}>
              <NotificationCard visible={visibleNotifs >= 4}>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  <span style={{ color: 'var(--cocoa)', fontSize: '12px', fontWeight: '700' }}>2 Nachrichten</span>
                </div>
              </NotificationCard>
            </div>

            {/* Notification 5: Bottom, centered below phone */}
            <div className="lg:hidden absolute z-10" style={{ left: '50%', bottom: '2%', transform: 'translateX(-50%)' }}>
              <NotificationCard visible={visibleNotifs >= 5}>
                <div className="flex items-center gap-3">
                  <span style={{ color: '#10b981', fontSize: '14px', fontWeight: '800' }}>€2.650</span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: '#10b98118', color: '#10b981' }}>+34% ↑</span>
                </div>
              </NotificationCard>
            </div>

            {/* ─── LEFT SIDE notifications (desktop) ─── */}

            {/* Notification 1: Deals (handshake image restored) */}
            <div className="hidden lg:block absolute z-10" style={{ left: 'calc(50% - 380px)', top: '5%' }}>
              <NotificationCard visible={visibleNotifs >= 1}>
                <div className="flex items-center gap-3.5">
                  <img
                    src="/images/creator-brand-handshake.jpg"
                    alt="Neue Deals"
                    className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                  />
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '15px', fontWeight: '700', letterSpacing: '-0.3px' }}>+3 neue Deals</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '2px' }}>warten auf dich</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            {/* Notification 3: Star Rating */}
            <div className="hidden lg:block absolute z-10" style={{ left: 'calc(50% - 330px)', top: '42%' }}>
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

            {/* ─── RIGHT SIDE notifications (desktop) ─── */}

            {/* Notification 2: New Deal Amount (+€850) */}
            <div className="hidden lg:block absolute z-10" style={{ right: 'calc(50% - 390px)', top: '8%' }}>
              <NotificationCard visible={visibleNotifs >= 2}>
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#10b98112' }}
                  >
                    <span style={{ color: '#10b981', fontSize: '15px', fontWeight: '800' }}>+€850</span>
                  </div>
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '15px', fontWeight: '700', letterSpacing: '-0.3px' }}>Neuer Deal</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '2px' }}>Beauty Brand Co.</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            {/* Notification 4: Messages */}
            <div className="hidden lg:block absolute z-10" style={{ right: 'calc(50% - 350px)', top: '46%' }}>
              <NotificationCard visible={visibleNotifs >= 4}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(201, 140, 131, 0.12)' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '14px', fontWeight: '700' }}>2 Nachrichten</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>Beauty Brand Co.</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            {/* ─── Notification 5: REVENUE CHART (floating popup, MUCH LARGER) ─── */}
            <div className="hidden lg:block absolute z-20" style={{ right: 'calc(50% - 460px)', bottom: '5%' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.3, y: 30 }}
                animate={
                  visibleNotifs >= 5
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.3, y: 30 }
                }
                transition={
                  visibleNotifs >= 5
                    ? {
                        scale: { type: 'spring', stiffness: 300, damping: 20 },
                        opacity: { duration: 0.25 },
                        y: { type: 'spring', stiffness: 300, damping: 20 },
                      }
                    : { duration: 0.15 }
                }
                className="rounded-2xl backdrop-blur-md border"
                style={{
                  background: 'rgba(255, 255, 255, 0.97)',
                  borderColor: 'rgba(0,0,0,0.06)',
                  boxShadow: '0 24px 64px rgba(0, 0, 0, 0.14), 0 8px 24px rgba(0, 0, 0, 0.08)',
                  width: '320px',
                  padding: '20px',
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Monatlicher Umsatz
                    </div>
                    <div style={{ color: '#10b981', fontSize: '26px', fontWeight: '700', letterSpacing: '-0.5px', marginTop: '2px' }}>
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
              </motion.div>
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

          {/* Old mobile notifications removed - now above the phone */}
        </div>
      </div>
    </section>
  );
}
