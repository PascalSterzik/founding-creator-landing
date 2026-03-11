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

/* ─────────────────────────────────────────────────
   TAB 0: DEALS ENTDECKEN
   Search bar + filters + deal listing cards
   ───────────────────────────────────────────────── */
function DealsDiscoveryDashboard({ compact }) {
  const deals = [
    { brand: 'GlowSkin Co.', category: 'Beauty', amount: '€1.200', match: 95, type: 'Instagram Reel', deadline: '3 Tage', avatar: '🧴' },
    { brand: 'FitLife Pro', category: 'Fitness', amount: '€850', match: 88, type: 'TikTok + Story', deadline: '5 Tage', avatar: '💪' },
    { brand: 'Urban Style', category: 'Fashion', amount: '€2.100', match: 82, type: 'YouTube Review', deadline: '7 Tage', avatar: '👗' },
    { brand: 'TechWave', category: 'Tech', amount: '€650', match: 76, type: 'Instagram Post', deadline: '4 Tage', avatar: '📱' },
  ];
  const filters = ['Alle', 'Beauty', 'Fashion', 'Tech', 'Fitness', 'Food'];

  return (
    <div className={`${compact ? '' : 'space-y-5'}`}>
      {/* Search bar */}
      <div
        className="flex items-center gap-3 rounded-xl border px-4 py-3"
        style={{ backgroundColor: 'white', borderColor: 'var(--border)' }}
      >
        <Search size={18} style={{ color: 'var(--text-muted)' }} />
        <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Deals durchsuchen...</span>
        <div className="ml-auto flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-lg text-xs font-semibold border" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline mr-1"><path d="M4 6h16M4 12h10M4 18h4"/></svg>
            Filter
          </div>
          <div className="px-2.5 py-1 rounded-lg text-xs font-semibold border" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
            Sortieren
          </div>
        </div>
      </div>

      {/* Filter pills */}
      <div className={`flex gap-2 flex-wrap ${compact ? 'mt-3' : ''}`}>
        {filters.map((f, i) => (
          <span
            key={f}
            className="px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all"
            style={{
              backgroundColor: i === 0 ? 'var(--accent)' : 'var(--bg-ivory)',
              color: i === 0 ? 'white' : 'var(--text-secondary)',
              border: i === 0 ? 'none' : '1px solid var(--border)',
            }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Deal cards */}
      <div className={`space-y-3 ${compact ? 'mt-3' : ''}`}>
        {deals.map((deal, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-white border transition-all hover:shadow-md cursor-pointer group"
            style={{ borderColor: 'var(--border)' }}
          >
            {/* Brand avatar */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ backgroundColor: 'var(--bg-ivory)' }}
            >
              {deal.avatar}
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold" style={{ color: 'var(--text)' }}>{deal.brand}</span>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: 'var(--accent-light, rgba(201,140,131,0.1))', color: 'var(--accent)' }}>
                  {deal.category}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{deal.type}</span>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>· {deal.deadline}</span>
              </div>
            </div>
            {/* Match + Amount */}
            <div className="text-right flex-shrink-0">
              <div className="text-sm font-bold" style={{ color: '#10b981' }}>{deal.amount}</div>
              <div className="flex items-center gap-1.5 mt-1 justify-end">
                <div className="w-12 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(16,185,129,0.12)' }}>
                  <div className="h-full rounded-full" style={{ width: `${deal.match}%`, backgroundColor: '#10b981' }} />
                </div>
                <span className="text-xs font-semibold" style={{ color: '#10b981' }}>{deal.match}%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Results count */}
      <div className={`text-center ${compact ? 'mt-3' : 'mt-4'}`}>
        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>23 weitere Deals verfügbar</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   TAB 1: GEMATCHT WERDEN
   Brand marketplace grid with logos/cards
   ───────────────────────────────────────────────── */
function BrandMarketplaceDashboard({ compact }) {
  const brands = [
    { name: 'Nike', category: 'Sports', logo: '✓', color: '#111', match: 97 },
    { name: 'L\'Oréal', category: 'Beauty', logo: 'L', color: '#333' , match: 94 },
    { name: 'Adidas', category: 'Sports', logo: '⫽', color: '#000', match: 91 },
    { name: 'Sephora', category: 'Beauty', logo: 'S', color: '#000', match: 89 },
    { name: 'Zara', category: 'Fashion', logo: 'Z', color: '#111', match: 86 },
    { name: 'Samsung', category: 'Tech', logo: 'S', color: '#1428A0', match: 83 },
    { name: 'H&M', category: 'Fashion', logo: 'H', color: '#E50010', match: 81 },
    { name: 'HelloFresh', category: 'Food', logo: 'H', color: '#96C93D', match: 78 },
    { name: 'Gymshark', category: 'Fitness', logo: 'G', color: '#111', match: 76 },
    { name: 'ASOS', category: 'Fashion', logo: 'A', color: '#2D2D2D', match: 74 },
    { name: 'Glossier', category: 'Beauty', logo: 'G', color: '#F5C6C2', match: 72 },
    { name: 'Puma', category: 'Sports', logo: 'P', color: '#E5001A', match: 70 },
  ];

  return (
    <div>
      {/* Header stats */}
      <div className={`flex items-center justify-between mb-4 ${compact ? '' : 'mb-6'}`}>
        <div>
          <h4 className={`font-bold ${compact ? 'text-base' : 'text-lg'}`} style={{ color: 'var(--text)' }}>Brand Marketplace</h4>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>248 Brands aktiv · 12 neue diese Woche</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
            Für dich
          </div>
          <div className="px-3 py-1.5 rounded-lg text-xs font-semibold border" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
            Alle
          </div>
        </div>
      </div>

      {/* Matching indicator */}
      <div className="flex items-center gap-3 p-3 rounded-xl mb-4" style={{ backgroundColor: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)' }}>
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#10b981', color: 'white', fontSize: '14px', fontWeight: '800' }}>
          AI
        </div>
        <div>
          <div className="text-sm font-bold" style={{ color: '#10b981' }}>Smart Matching aktiv</div>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>12 neue Matches basierend auf deinem Profil</div>
        </div>
      </div>

      {/* Brand grid */}
      <div className={`grid ${compact ? 'grid-cols-3 gap-2' : 'grid-cols-4 gap-3'}`}>
        {brands.map((brand, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.04 }}
            className="flex flex-col items-center p-3 rounded-xl border bg-white cursor-pointer transition-all hover:shadow-md hover:border-[var(--accent)] group"
            style={{ borderColor: 'var(--border)' }}
          >
            <div
              className={`${compact ? 'w-10 h-10 text-sm' : 'w-12 h-12 text-base'} rounded-xl flex items-center justify-center font-bold text-white mb-2`}
              style={{ backgroundColor: brand.color }}
            >
              {brand.logo}
            </div>
            <span className={`${compact ? 'text-xs' : 'text-sm'} font-bold text-center`} style={{ color: 'var(--text)' }}>{brand.name}</span>
            <span className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{brand.category}</span>
            <div className="flex items-center gap-1 mt-1.5">
              <div className={`${compact ? 'w-8' : 'w-10'} h-1 rounded-full overflow-hidden`} style={{ backgroundColor: 'rgba(16,185,129,0.12)' }}>
                <div className="h-full rounded-full" style={{ width: `${brand.match}%`, backgroundColor: '#10b981' }} />
              </div>
              <span className="text-xs font-semibold" style={{ color: '#10b981', fontSize: '10px' }}>{brand.match}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   TAB 2: ALLES AN EINEM ORT
   Project management / unified workspace view
   ───────────────────────────────────────────────── */
function UnifiedWorkspaceDashboard({ compact }) {
  const projects = [
    { brand: 'GlowSkin Co.', status: 'In Bearbeitung', phase: 'Content', progress: 65, deadline: '15. Apr', messages: 3, amount: '€1.200' },
    { brand: 'FitLife Pro', status: 'Briefing', phase: 'Planung', progress: 25, deadline: '20. Apr', messages: 1, amount: '€850' },
    { brand: 'Urban Style', status: 'Review', phase: 'Abnahme', progress: 90, deadline: '12. Apr', messages: 0, amount: '€2.100' },
  ];

  const activities = [
    { text: 'Briefing von GlowSkin Co. erhalten', time: 'vor 2 Std.', icon: '📋' },
    { text: 'Content für FitLife Pro hochgeladen', time: 'vor 5 Std.', icon: '📤' },
    { text: 'Zahlung von Urban Style eingegangen', time: 'Gestern', icon: '💰' },
    { text: 'Vertrag mit TechWave unterzeichnet', time: 'Gestern', icon: '✍️' },
  ];

  return (
    <div>
      {/* Top bar with stats */}
      <div className={`grid ${compact ? 'grid-cols-3 gap-2 mb-3' : 'grid-cols-4 gap-3 mb-5'}`}>
        {[
          { label: 'Aktive Projekte', value: '5', color: 'var(--accent)' },
          { label: 'Offene Briefings', value: '3', color: '#f59e0b' },
          { label: 'Nachrichten', value: '7', color: '#6366f1' },
          ...(!compact ? [{ label: 'Deadlines', value: '2', color: '#ef4444' }] : []),
        ].map((stat, idx) => (
          <div key={idx} className="p-3 rounded-xl bg-white border" style={{ borderColor: 'var(--border)' }}>
            <div className={`${compact ? 'text-xl' : 'text-2xl'} font-bold`} style={{ color: stat.color }}>{stat.value}</div>
            <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Active projects */}
      <div className={`space-y-3 ${compact ? 'mb-3' : 'mb-5'}`}>
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="p-4 rounded-xl bg-white border"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold" style={{ color: 'var(--text)' }}>{project.brand}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{
                    backgroundColor: project.progress > 80 ? 'rgba(16,185,129,0.1)' : project.progress > 40 ? 'rgba(245,158,11,0.1)' : 'rgba(99,102,241,0.1)',
                    color: project.progress > 80 ? '#10b981' : project.progress > 40 ? '#f59e0b' : '#6366f1',
                  }}
                >
                  {project.status}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {project.messages > 0 && (
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: 'var(--accent)' }}>
                    {project.messages}
                  </span>
                )}
                <span className="text-sm font-bold" style={{ color: '#10b981' }}>{project.amount}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-ivory)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: project.progress > 80 ? '#10b981' : project.progress > 40 ? '#f59e0b' : '#6366f1',
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${project.progress}%` }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                />
              </div>
              <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>{project.progress}%</span>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>bis {project.deadline}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent activity */}
      <div className="rounded-xl bg-white border p-4" style={{ borderColor: 'var(--border)' }}>
        <h5 className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: 'var(--text-muted)' }}>Letzte Aktivität</h5>
        <div className="space-y-2.5">
          {activities.map((a, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-sm">{a.icon}</span>
              <span className="text-xs flex-1" style={{ color: 'var(--text-secondary)' }}>{a.text}</span>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   TAB 3: ÜBERBLICK BEHALTEN
   Complex analytics dashboard with charts + KPIs
   Inspired by the CRM / finance dashboards
   ───────────────────────────────────────────────── */
function AnalyticsDashboard({ compact }) {
  // Revenue chart data points (SVG)
  const revenuePoints = [
    { m: 'Jan', v: 420 }, { m: 'Feb', v: 680 }, { m: 'Mär', v: 850 },
    { m: 'Apr', v: 1200 }, { m: 'Mai', v: 1650 }, { m: 'Jun', v: 2100 }, { m: 'Jul', v: 2650 },
  ];
  const maxVal = 3000;
  const chartW = 320;
  const chartH = 120;

  // Build SVG path
  const points = revenuePoints.map((p, i) => {
    const x = (i / (revenuePoints.length - 1)) * chartW;
    const y = chartH - (p.v / maxVal) * chartH;
    return `${x},${y}`;
  });
  const linePath = `M${points.join(' L')}`;
  const areaPath = `${linePath} L${chartW},${chartH} L0,${chartH}Z`;

  // Deal funnel data
  const funnel = [
    { label: 'Angeboten', count: 24, color: '#6366f1', width: '100%' },
    { label: 'Beworben', count: 18, color: '#8b5cf6', width: '75%' },
    { label: 'Gematcht', count: 12, color: 'var(--accent)', width: '50%' },
    { label: 'Abgeschlossen', count: 8, color: '#10b981', width: '33%' },
  ];

  // Category donut data
  const categories = [
    { name: 'Beauty', pct: 35, color: '#ec4899' },
    { name: 'Fashion', pct: 25, color: '#8b5cf6' },
    { name: 'Tech', pct: 20, color: '#3b82f6' },
    { name: 'Fitness', pct: 12, color: '#10b981' },
    { name: 'Food', pct: 8, color: '#f59e0b' },
  ];

  // Build donut segments
  const donutSegments = [];
  let cumulative = 0;
  categories.forEach((cat) => {
    const start = cumulative;
    cumulative += cat.pct;
    donutSegments.push({ ...cat, start, end: cumulative });
  });

  return (
    <div>
      {/* KPI cards row */}
      <div className={`grid ${compact ? 'grid-cols-2 gap-2 mb-3' : 'grid-cols-4 gap-3 mb-5'}`}>
        {[
          { label: 'Monatl. Umsatz', value: '€2.650', change: '+34%', positive: true },
          { label: 'Aktive Deals', value: '5', change: '+2', positive: true },
          { label: 'Avg. Deal-Wert', value: '€530', change: '+12%', positive: true },
          { label: 'Erfolgsrate', value: '78%', change: '+5%', positive: true },
        ].map((kpi, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06 }}
            className="p-3 rounded-xl bg-white border"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{kpi.label}</div>
            <div className="flex items-end gap-2">
              <span className={`${compact ? 'text-lg' : 'text-xl'} font-bold`} style={{ color: 'var(--text)' }}>{kpi.value}</span>
              <span className="text-xs font-semibold mb-0.5" style={{ color: kpi.positive ? '#10b981' : '#ef4444' }}>
                {kpi.change} ↑
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Revenue chart */}
      <div className={`rounded-xl bg-white border p-4 ${compact ? 'mb-3' : 'mb-5'}`} style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h5 className="text-sm font-bold" style={{ color: 'var(--text)' }}>Umsatzentwicklung</h5>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Letzte 7 Monate</span>
          </div>
          <div className="flex gap-2">
            {['7M', '3M', '1M'].map((period, i) => (
              <span key={period} className="px-2 py-1 rounded text-xs font-semibold cursor-pointer" style={{
                backgroundColor: i === 0 ? 'var(--accent)' : 'transparent',
                color: i === 0 ? 'white' : 'var(--text-muted)',
              }}>
                {period}
              </span>
            ))}
          </div>
        </div>
        <svg viewBox={`0 0 ${chartW} ${chartH + 20}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
            <line key={ratio} x1="0" y1={chartH - ratio * chartH} x2={chartW} y2={chartH - ratio * chartH} stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
          ))}
          {/* Area gradient */}
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.01"/>
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#areaGrad)"/>
          <path d={linePath} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Data points */}
          {revenuePoints.map((p, i) => {
            const x = (i / (revenuePoints.length - 1)) * chartW;
            const y = chartH - (p.v / maxVal) * chartH;
            return <circle key={i} cx={x} cy={y} r="3.5" fill="var(--accent)" stroke="white" strokeWidth="2"/>;
          })}
          {/* X-axis labels */}
          {revenuePoints.map((p, i) => {
            const x = (i / (revenuePoints.length - 1)) * chartW;
            return <text key={i} x={x} y={chartH + 14} textAnchor="middle" fontSize="9" fill="var(--text-muted)">{p.m}</text>;
          })}
        </svg>
      </div>

      {/* Bottom row: Funnel + Category breakdown */}
      <div className={`grid ${compact ? 'grid-cols-1 gap-3' : 'grid-cols-2 gap-4'}`}>
        {/* Deal Funnel */}
        <div className="rounded-xl bg-white border p-4" style={{ borderColor: 'var(--border)' }}>
          <h5 className="text-sm font-bold mb-3" style={{ color: 'var(--text)' }}>Deal Funnel</h5>
          <div className="space-y-2.5">
            {funnel.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                style={{ transformOrigin: 'left' }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{step.label}</span>
                  <span className="text-xs font-bold" style={{ color: step.color }}>{step.count}</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-ivory)', width: step.width }}>
                  <div className="h-full rounded-full" style={{ backgroundColor: step.color, width: '100%' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Breakdown (donut visual) */}
        <div className="rounded-xl bg-white border p-4" style={{ borderColor: 'var(--border)' }}>
          <h5 className="text-sm font-bold mb-3" style={{ color: 'var(--text)' }}>Branchen</h5>
          <div className="flex items-center gap-4">
            {/* Simple donut via SVG */}
            <svg viewBox="0 0 36 36" className={`${compact ? 'w-16 h-16' : 'w-20 h-20'} flex-shrink-0`}>
              {donutSegments.map((seg, idx) => {
                const circumference = 100;
                const dashArray = `${seg.pct} ${circumference - seg.pct}`;
                const dashOffset = 25 - seg.start; // rotate so it starts at top
                return (
                  <circle
                    key={idx}
                    cx="18" cy="18" r="15.91549430918954"
                    fill="transparent"
                    stroke={seg.color}
                    strokeWidth="3.5"
                    strokeDasharray={dashArray}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="butt"
                  />
                );
              })}
            </svg>
            {/* Legend */}
            <div className="space-y-1.5 flex-1">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                    <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{cat.name}</span>
                  </div>
                  <span className="text-xs font-bold" style={{ color: 'var(--text)' }}>{cat.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Dashboard Router
   ───────────────────────────────────────────────── */
function DashboardPreview({ activeTab, compact = false }) {
  if (activeTab < 0) return null;

  const dashboards = {
    0: DealsDiscoveryDashboard,
    1: BrandMarketplaceDashboard,
    2: UnifiedWorkspaceDashboard,
    3: AnalyticsDashboard,
  };

  const Dashboard = dashboards[activeTab];
  if (!Dashboard) return null;

  return (
    <div
      className={`relative rounded-xl overflow-hidden border ${compact ? 'p-4' : 'p-6 lg:p-8'}`}
      style={{
        backgroundColor: 'var(--bg-ivory)',
        borderColor: 'var(--border)',
      }}
    >
      {/* Premium grid background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dashGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--cocoa)" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dashGrid)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 pointer-events-none" style={{ background: 'var(--accent)', filter: 'blur(80px)' }} />
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Dashboard compact={compact} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────────── */
export default function SolutionFeatures() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Label */}
        <FadeIn>
          <p className="text-sm font-semibold tracking-wide text-[var(--accent)] mb-4">
            SO FUNKTIONIERT&apos;S
          </p>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text)] mb-4 max-w-3xl">
            So einfach läuft es mit{' '}
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: '700' }}>Creator</span><span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--accent)', fontStyle: 'italic', fontWeight: '600' }}>Bridge</span>
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.2}>
          <p className="text-lg text-[var(--text-secondary)] mb-16 max-w-2xl">
            Vier einfache Schritte zwischen deinen Deals und deinem Erfolg.
          </p>
        </FadeIn>

        {/* Desktop: Tabs left + Dashboard right */}
        <div className="hidden lg:grid grid-cols-3 gap-12">
          {/* Left: Feature Tabs */}
          <FadeIn delay={0.3} className="col-span-1">
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
                      borderColor: isActive ? 'var(--accent)' : 'var(--border)',
                      boxShadow: isActive
                        ? '0 4px 12px rgba(0, 0, 0, 0.05)'
                        : 'none',
                    }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex gap-4">
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
                          className="text-lg font-bold mt-1 transition-colors"
                          style={{ color: 'var(--text)' }}
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
          <FadeIn delay={0.4} className="col-span-2">
            <DashboardPreview activeTab={activeTab} />
          </FadeIn>
        </div>

        {/* Mobile: Accordion style (tab + dashboard inline) */}
        <div className="lg:hidden space-y-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            const isActive = activeTab === feature.id;
            return (
              <FadeIn key={feature.id} delay={feature.id * 0.08}>
                <div>
                  <motion.button
                    onClick={() => setActiveTab(isActive ? -1 : feature.id)}
                    className="w-full text-left p-5 rounded-xl border transition-all"
                    style={{
                      backgroundColor: isActive ? 'white' : 'transparent',
                      borderColor: isActive ? 'var(--accent)' : 'var(--border)',
                      boxShadow: isActive ? '0 4px 12px rgba(0, 0, 0, 0.05)' : 'none',
                      borderBottomLeftRadius: isActive ? 0 : undefined,
                      borderBottomRightRadius: isActive ? 0 : undefined,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: isActive ? 'var(--accent)' : 'var(--bg-ivory)',
                        }}
                      >
                        <Icon size={20} style={{ color: isActive ? 'white' : 'var(--text)' }} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold" style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }}>
                          {feature.number}
                        </p>
                        <h3 className="text-base font-bold mt-0.5" style={{ color: 'var(--text)' }}>
                          {feature.title}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.button>

                  {/* Accordion panel: description + dashboard */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          className="border border-t-0 rounded-b-xl p-5"
                          style={{ borderColor: 'var(--accent)' }}
                        >
                          <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                            {feature.description}
                          </p>
                          <DashboardPreview activeTab={activeTab} compact />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
