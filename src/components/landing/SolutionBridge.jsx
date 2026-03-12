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
          : { duration: 0 }
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

/* ─── Animated Revenue Chart (line draws + number counts up, PERFECTLY SYNCED) ─── */
function AnimatedRevenueCard({ visible, style: posStyle = {}, className: extraClass = '' }) {
  const [animProgress, setAnimProgress] = useState(0);

  useEffect(() => {
    if (!visible) {
      setAnimProgress(0);
      return;
    }
    let start = null;
    let raf;
    const duration = 2000;
    const animate = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const t = Math.min(1, elapsed / duration);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setAnimProgress(eased);
      if (t < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  // Revenue data points
  const dataPoints = [420, 680, 850, 1200, 1650, 2100, 2650];
  const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul'];
  const maxVal = 3000;
  const chartW = 280;
  const chartH = 80;

  // SYNCED: Use continuousIndex so line position and number match exactly
  const continuousIndex = animProgress * (dataPoints.length - 1); // 0 to 6
  const baseIndex = Math.floor(continuousIndex);
  const frac = continuousIndex - baseIndex;

  // Display value: interpolate between current and next data point
  let displayValue;
  if (baseIndex >= dataPoints.length - 1) {
    displayValue = dataPoints[dataPoints.length - 1];
  } else {
    displayValue = Math.round(
      dataPoints[baseIndex] + (dataPoints[baseIndex + 1] - dataPoints[baseIndex]) * frac
    );
  }

  // Build path up to the current continuous position
  const points = [];
  for (let i = 0; i <= Math.min(baseIndex, dataPoints.length - 1); i++) {
    points.push({
      x: (i / (dataPoints.length - 1)) * chartW,
      y: chartH - (dataPoints[i] / maxVal) * chartH,
    });
  }
  // Add interpolated endpoint
  if (baseIndex < dataPoints.length - 1) {
    const curVal = dataPoints[baseIndex];
    const nextVal = dataPoints[baseIndex + 1];
    const interpVal = curVal + (nextVal - curVal) * frac;
    points.push({
      x: ((baseIndex + frac) / (dataPoints.length - 1)) * chartW,
      y: chartH - (interpVal / maxVal) * chartH,
    });
  }

  const linePath = points.length > 0 ? `M${points.map(p => `${p.x},${p.y}`).join(' L')}` : '';
  const areaPath = points.length > 0 ? `${linePath} L${points[points.length - 1].x},${chartH} L${points[0].x},${chartH}Z` : '';
  const lastPoint = points[points.length - 1];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, y: 20 }}
      animate={
        visible
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.3, y: 20 }
      }
      transition={
        visible
          ? {
              scale: { type: 'spring', stiffness: 300, damping: 20 },
              opacity: { duration: 0.25 },
              y: { type: 'spring', stiffness: 300, damping: 20 },
            }
          : { duration: 0 }
      }
      className={`rounded-2xl backdrop-blur-md border ${extraClass}`}
      style={{
        background: 'rgba(255, 255, 255, 0.97)',
        borderColor: 'rgba(0,0,0,0.06)',
        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12), 0 6px 16px rgba(0, 0, 0, 0.06)',
        ...posStyle,
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <div>
          <div style={{ color: 'var(--text-muted)', fontSize: '10px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Monatlicher Umsatz
          </div>
          <div style={{ color: '#10b981', fontSize: '22px', fontWeight: '700', letterSpacing: '-0.5px', marginTop: '1px' }}>
            €{displayValue.toLocaleString('de-DE')}
          </div>
        </div>
        <div
          className="px-2.5 py-1 rounded-full text-xs font-bold"
          style={{ backgroundColor: '#10b98118', color: '#10b981', opacity: animProgress > 0.9 ? 1 : 0, transition: 'opacity 0.3s' }}
        >
          +34% ↑
        </div>
      </div>
      <svg viewBox={`0 0 ${chartW} ${chartH + 16}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Grid lines */}
        <line x1="0" y1="20" x2={chartW} y2="20" stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
        <line x1="0" y1="40" x2={chartW} y2="40" stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
        <line x1="0" y1="60" x2={chartW} y2="60" stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
        {/* Area fill */}
        {areaPath && (
          <path d={areaPath} fill="url(#revenueGradAnim)" />
        )}
        {/* Line */}
        {linePath && (
          <path d={linePath} stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        )}
        {/* Moving endpoint dot */}
        {lastPoint && (
          <>
            <circle cx={lastPoint.x} cy={lastPoint.y} r="5" fill="#10b981" opacity="0.2"/>
            <circle cx={lastPoint.x} cy={lastPoint.y} r="3" fill="#10b981"/>
          </>
        )}
        <defs>
          <linearGradient id="revenueGradAnim" x1="0" y1="0" x2="0" y2={chartH}>
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.02"/>
          </linearGradient>
        </defs>
        {/* X-axis labels */}
        {months.map((m, i) => (
          <text key={i} x={(i / (months.length - 1)) * chartW} y={chartH + 12} textAnchor="middle" fontSize="8" fill="rgba(0,0,0,0.3)">{m}</text>
        ))}
      </svg>
    </motion.div>
  );
}

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
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Detect mobile for disabling sticky behavior (too short scroll distance)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* 3D tilt animation: TRUE perspective rotation (like ContainerScroll).
     The phone rotates on the X axis from 20deg tilted back to 0deg flat.
     Once the phone has fully entered, the animation locks and does NOT re-trigger on scroll back. */
  const phoneAnimDoneRef = useRef(false);
  const [phoneAnimValues, setPhoneAnimValues] = useState({ rotateX: 20, scale: 0.85, y: 100, opacity: 0 });

  // Phase tracking
  const [appProgress, setAppProgress] = useState(0);
  const appProgressDoneRef = useRef(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [smallNotifs, setSmallNotifs] = useState(0); // 0-4 for small notification cards
  const [showRevenue, setShowRevenue] = useState(false); // revenue chart, permanent once shown
  const revenueShownRef = useRef(false);
  const notifsEverShownRef = useRef(false); // tracks if staggered intro has completed

  // On mobile (no sticky), show everything once section is in view
  useEffect(() => {
    if (!isMobile) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          phoneAnimDoneRef.current = true;
          setPhoneAnimValues({ rotateX: 0, scale: 1.05, y: 0, opacity: 1 });
          appProgressDoneRef.current = true;
          setAppProgress(1);
          setShowDashboard(true);
          revenueShownRef.current = true;
          setShowRevenue(true);
          notifsEverShownRef.current = true;
          setSmallNotifs(4);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return; // Skip scroll-based logic on mobile
    const unsubscribe = scrollYProgress.on('change', (v) => {
      // Phone entrance animation: only runs forward, locks once done
      if (!phoneAnimDoneRef.current) {
        const rotateX = 20 - Math.min(1, Math.max(0, (v - 0.08) / 0.22)) * 20;
        const scale = 0.85 + Math.min(1, Math.max(0, (v - 0.08) / 0.22)) * 0.2;
        const y = 100 - Math.min(1, Math.max(0, (v - 0.08) / 0.22)) * 100;
        const opacity = Math.min(1, Math.max(0, (v - 0.06) / 0.10));
        setPhoneAnimValues({ rotateX, scale, y, opacity });
        // Lock once phone animation is complete
        if (v >= 0.30) {
          phoneAnimDoneRef.current = true;
          setPhoneAnimValues({ rotateX: 0, scale: 1.05, y: 0, opacity: 1 });
        }
      }

      // App opening: also locks once complete
      if (!appProgressDoneRef.current) {
        const p = Math.max(0, Math.min(1, (v - 0.24) / 0.12));
        setAppProgress(p);
        if (p >= 1) appProgressDoneRef.current = true;
      }

      // Dashboard appears after phone risen + app opened (locks once shown)
      if (v > 0.40) setShowDashboard(true);

      // Revenue chart: once shown, stays forever
      if (v >= 0.50) {
        revenueShownRef.current = true;
        setShowRevenue(true);
      }
      // Also keep it visible if it was already shown
      if (revenueShownRef.current) setShowRevenue(true);

      // Small notifications (1-4):
      // First time: staggered appearance from 0.42 to 0.48.
      // After all 4 have appeared once, they show when the phone is centered on screen.
      // The phone is sticky, so it's vertically centered roughly when v is between 0.35 and 0.75.
      // Below 0.35: phone is still entering from the bottom of the viewport.
      // Above 0.75: section is leaving from top, phone sliding off.
      // They ONLY hide when the phone is not centered.
      // This ensures notifications only appear when the phone is solidly in the middle of the screen.
      const phoneVisible = v > 0.35 && v < 0.75;

      if (!phoneVisible) {
        // Phone not visible: hide all (instant, duration: 0)
        setSmallNotifs(0);
      } else if (notifsEverShownRef.current) {
        // Re-entry after staggered intro already played: show all 4 immediately
        setSmallNotifs(4);
      } else {
        // First time staggered intro
        if (v >= 0.48) {
          setSmallNotifs(4);
          notifsEverShownRef.current = true; // stagger complete
        }
        else if (v >= 0.46) setSmallNotifs(3);
        else if (v >= 0.44) setSmallNotifs(2);
        else if (v >= 0.42) setSmallNotifs(1);
        // If v < 0.42 but phone visible and notifs never shown, keep at 0
      }
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section
      id="solution-bridge"
      ref={containerRef}
      className="relative"
      style={{ minHeight: isMobile ? 'auto' : '140vh' }}
    >
      {/* ─── Header text: scrolls normally, NOT sticky ─── */}
      <div className="container mx-auto px-6 lg:px-12 pt-20 lg:pt-32">
        <div className="text-center mb-2">
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
        </div>
      </div>

      {/* ─── Phone + notifications: sticky on desktop, normal flow on mobile ─── */}
      <div className={`${isMobile ? '' : 'sticky top-0 min-h-screen'} flex items-center justify-center overflow-visible pt-20 md:pt-2`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative flex items-center justify-center" style={{ perspective: '1200px' }}>

            {/* ════════════════════════════════════════════
                 MOBILE NOTIFICATIONS
                ════════════════════════════════════════════ */}

            {/* Notification 1: "+3 neue Deals" - just above the phone logo area */}
            <div className="lg:hidden absolute z-10" style={{ left: '2%', top: '2%' }}>
              <NotificationCard visible={smallNotifs >= 1}>
                <div className="flex items-center gap-2">
                  <img src="/images/creator-brand-handshake.jpg" alt="" className="w-8 h-8 rounded-lg object-cover" />
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '12px', fontWeight: '700' }}>+3 neue Deals</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '10px' }}>warten auf dich</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            {/* Notification 2: "+€850" - right side */}
            <div className="lg:hidden absolute z-10" style={{ right: '-4%', top: '18%' }}>
              <NotificationCard visible={smallNotifs >= 2}>
                <div className="text-center" style={{ minWidth: '60px' }}>
                  <div style={{ color: '#10b981', fontSize: '14px', fontWeight: '800', lineHeight: '1.2' }}>+€850</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '10px', marginTop: '2px' }}>Neuer Deal</div>
                </div>
              </NotificationCard>
            </div>

            {/* Notification 3: Stars - lower, just above the dashboard/revenue popup */}
            <div className="lg:hidden absolute z-10" style={{ left: '-2%', top: '68%' }}>
              <NotificationCard visible={smallNotifs >= 3}>
                <div className="flex items-center gap-2">
                  <StarRating rating={4.8} />
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#f59e0b' }}>4.8</span>
                </div>
              </NotificationCard>
            </div>

            {/* Notification 4: Messages - positioned above revenue chart */}
            <div className="lg:hidden absolute z-10" style={{ right: '-2%', top: '58%' }}>
              <NotificationCard visible={smallNotifs >= 4}>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  <span style={{ color: 'var(--cocoa)', fontSize: '12px', fontWeight: '700' }}>2 Nachrichten</span>
                </div>
              </NotificationCard>
            </div>

            {/* Notification 5: Animated Revenue - mobile */}
            <div className="lg:hidden absolute z-10" style={{ left: '50%', bottom: '-3%', transform: 'translateX(-50%)', width: '85%', maxWidth: '300px' }}>
              <AnimatedRevenueCard
                visible={showRevenue}
                style={{ padding: '14px' }}
              />
            </div>

            {/* ════════════════════════════════════════════
                 DESKTOP NOTIFICATIONS
                ════════════════════════════════════════════ */}

            {/* Notification 1: Deals - left */}
            <div className="hidden lg:block absolute z-10" style={{ left: 'calc(50% - 380px)', top: '5%' }}>
              <NotificationCard visible={smallNotifs >= 1}>
                <div className="flex items-center gap-3.5">
                  <img src="/images/creator-brand-handshake.jpg" alt="Neue Deals" className="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '15px', fontWeight: '700', letterSpacing: '-0.3px' }}>+3 neue Deals</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '2px' }}>warten auf dich</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            {/* Notification 2: +€850 - right */}
            <div className="hidden lg:block absolute z-10" style={{ right: 'calc(50% - 390px)', top: '8%' }}>
              <NotificationCard visible={smallNotifs >= 2}>
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#10b98112' }}>
                    <span style={{ color: '#10b981', fontSize: '15px', fontWeight: '800' }}>+€850</span>
                  </div>
                  <div>
                    <div style={{ color: 'var(--cocoa)', fontSize: '15px', fontWeight: '700', letterSpacing: '-0.3px' }}>Neuer Deal</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '2px' }}>Beauty Brand Co.</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            {/* Notification 3: Star Rating - left */}
            <div className="hidden lg:block absolute z-10" style={{ left: 'calc(50% - 330px)', top: '42%' }}>
              <NotificationCard visible={smallNotifs >= 3}>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0"><StarRating rating={4.8} /></div>
                  <div>
                    <div style={{ color: '#f59e0b', fontSize: '14px', fontWeight: '700' }}>4.8 Rating</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>von 5 Brands</div>
                  </div>
                </div>
              </NotificationCard>
            </div>

            {/* Notification 4: Messages - right */}
            <div className="hidden lg:block absolute z-10" style={{ right: 'calc(50% - 350px)', top: '46%' }}>
              <NotificationCard visible={smallNotifs >= 4}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(201, 140, 131, 0.12)' }}>
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

            {/* Notification 5: ANIMATED Revenue Chart - BOTTOM CENTER on desktop */}
            <div className="hidden lg:block absolute z-20" style={{ left: '50%', bottom: '-5%', transform: 'translateX(-50%)', width: '340px' }}>
              <AnimatedRevenueCard
                visible={showRevenue}
                style={{ padding: '18px' }}
              />
            </div>

            {/* ─── PHONE (centered) with TRUE 3D perspective tilt + rise ─── */}
            {/* Phone animation is one-shot: once it enters, it stays locked in final position */}
            <motion.div
              animate={{
                rotateX: phoneAnimValues.rotateX,
                scale: phoneAnimValues.scale,
                opacity: phoneAnimValues.opacity,
                y: phoneAnimValues.y,
              }}
              transition={phoneAnimDoneRef.current ? { duration: 0 } : { duration: 0.1 }}
              style={{
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
        </div>
      </div>

    </section>
  );
}
