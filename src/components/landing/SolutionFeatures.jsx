'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';
import {
  Search, Handshake, LayoutDashboard, BarChart3,
  ClipboardList, Upload, CircleDollarSign, PenLine,
} from 'lucide-react';

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
   Brand Image Component — real brand icons/logos
   Uses actual brand images from /public/brands/
   ───────────────────────────────────────────────── */
function BrandImage({ src, alt, size = 40 }) {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-full flex-shrink-0 object-cover"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}

/* ─────────────────────────────────────────────────
   TAB 0: DEALS ENTDECKEN
   Search bar + filters + deal listing cards with category icons
   ───────────────────────────────────────────────── */
function DealsDiscoveryDashboard({ compact }) {
  const deals = [
    { brand: 'L\'Oréal', category: 'Beauty', amount: '€1.200', match: 95, type: 'Instagram Reel', deadline: '3 Tage', image: '/brands/loreal.jpeg', catColor: '#ec4899' },
    { brand: 'Gymshark', category: 'Fitness', amount: '€850', match: 88, type: 'TikTok + Story', deadline: '5 Tage', image: '/brands/gymshark.png', catColor: '#10b981' },
    { brand: 'Zara', category: 'Fashion', amount: '€2.100', match: 82, type: 'YouTube Review', deadline: '7 Tage', image: '/brands/zara.jpeg', catColor: '#8b5cf6' },
    { brand: 'Samsung', category: 'Tech', amount: '€1.800', match: 79, type: 'Unboxing + Review', deadline: '10 Tage', image: '/brands/samsung.jpeg', catColor: '#3b82f6' },
    { brand: 'Sephora', category: 'Beauty', amount: '€950', match: 91, type: 'Instagram Story Serie', deadline: '4 Tage', image: '/brands/sephora.jpeg', catColor: '#ec4899' },
    { brand: 'Adidas', category: 'Sports', amount: '€1.400', match: 86, type: 'Reel + Story Takeover', deadline: '6 Tage', image: '/brands/adidas.png', catColor: '#f59e0b' },
    { brand: 'Nike', category: 'Sports', amount: '€2.500', match: 93, type: 'YouTube Kampagne', deadline: '14 Tage', image: '/brands/nike.jpeg', catColor: '#f59e0b' },
  ];
  const filters = ['Alle', 'Beauty', 'Fashion', 'Tech', 'Fitness', 'Food'];

  return (
    <div>
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
      <div className="flex gap-2 flex-wrap mt-3">
        {filters.map((f, i) => (
          <span
            key={f}
            className="px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all"
            style={{
              backgroundColor: i === 0 ? 'var(--accent)' : 'white',
              color: i === 0 ? 'white' : 'var(--text-secondary)',
              border: i === 0 ? '1px solid var(--accent)' : '1px solid var(--border)',
            }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Deal cards with category icons */}
      <div className="space-y-3 mt-3">
        {deals.map((deal, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-white border transition-all hover:shadow-md cursor-pointer"
            style={{ borderColor: 'var(--border)' }}
          >
            {/* Brand image */}
            <BrandImage src={deal.image} alt={deal.brand} size={compact ? 36 : 42} />
            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold" style={{ color: 'var(--text)' }}>{deal.brand}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-semibold"
                  style={{ backgroundColor: `${deal.catColor}18`, color: deal.catColor }}
                >
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

      <div className="text-center mt-3">
        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>34 weitere Deals verfügbar</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   TAB 1: GEMATCHT WERDEN
   Brand marketplace with 8 brands, category icons, more info
   ───────────────────────────────────────────────── */
function BrandMarketplaceDashboard({ compact }) {
  const brands = [
    { name: 'Nike', category: 'Sports', image: '/brands/nike.jpeg', color: '#f59e0b', match: 97, budget: '€1.500+', deals: 12, avgDeal: '€1.250', responseTime: '< 24h', topFormat: 'Reels', rating: 4.9, lastActive: 'Heute' },
    { name: 'L\'Oréal', category: 'Beauty', image: '/brands/loreal.jpeg', color: '#ec4899', match: 94, budget: '€800+', deals: 8, avgDeal: '€920', responseTime: '< 12h', topFormat: 'Stories', rating: 4.7, lastActive: 'Heute' },
    { name: 'Zara', category: 'Fashion', image: '/brands/zara.jpeg', color: '#8b5cf6', match: 86, budget: '€900+', deals: 4, avgDeal: '€1.050', responseTime: '< 48h', topFormat: 'TikTok', rating: 4.3, lastActive: 'Gestern' },
    { name: 'Samsung', category: 'Tech', image: '/brands/samsung.jpeg', color: '#3b82f6', match: 83, budget: '€1.200+', deals: 6, avgDeal: '€1.800', responseTime: '< 24h', topFormat: 'YouTube', rating: 4.6, lastActive: 'vor 2 Tagen' },
    { name: 'Adidas', category: 'Sports', image: '/brands/adidas.png', color: '#f59e0b', match: 91, budget: '€1.000+', deals: 10, avgDeal: '€1.100', responseTime: '< 12h', topFormat: 'Reels', rating: 4.8, lastActive: 'Heute' },
    { name: 'Sephora', category: 'Beauty', image: '/brands/sephora.jpeg', color: '#ec4899', match: 89, budget: '€700+', deals: 5, avgDeal: '€780', responseTime: '< 24h', topFormat: 'Stories', rating: 4.5, lastActive: 'Gestern' },
    { name: 'H&M', category: 'Fashion', image: '/brands/hm.jpeg', color: '#8b5cf6', match: 80, budget: '€600+', deals: 7, avgDeal: '€650', responseTime: '< 48h', topFormat: 'TikTok', rating: 4.1, lastActive: 'vor 3 Tagen' },
    { name: 'Gymshark', category: 'Fitness', image: '/brands/gymshark.png', color: '#10b981', match: 92, budget: '€850+', deals: 9, avgDeal: '€900', responseTime: '< 12h', topFormat: 'Reels', rating: 4.7, lastActive: 'Heute' },
    { name: 'H&M Home', category: 'Lifestyle', image: '/brands/hm.jpeg', color: '#6366f1', match: 77, budget: '€500+', deals: 3, avgDeal: '€550', responseTime: '< 48h', topFormat: 'Stories', rating: 4.2, lastActive: 'vor 3 Tagen' },
    { name: 'GlowSkin Co.', category: 'Beauty', image: '/brands/glowskin.svg', color: '#ec4899', match: 93, budget: '€900+', deals: 7, avgDeal: '€850', responseTime: '< 12h', topFormat: 'Reels', rating: 4.9, lastActive: 'Heute' },
    { name: 'FitLife Pro', category: 'Fitness', image: '/brands/fitlife.svg', color: '#10b981', match: 88, budget: '€750+', deals: 5, avgDeal: '€720', responseTime: '< 24h', topFormat: 'TikTok', rating: 4.6, lastActive: 'Gestern' },
    { name: 'TechWave', category: 'Tech', image: '/brands/techwave.svg', color: '#3b82f6', match: 81, budget: '€1.500+', deals: 4, avgDeal: '€1.650', responseTime: '< 24h', topFormat: 'YouTube', rating: 4.7, lastActive: 'vor 2 Tagen' },
    { name: 'Urban Style', category: 'Fashion', image: '/brands/urbanstyle.svg', color: '#8b5cf6', match: 85, budget: '€800+', deals: 6, avgDeal: '€780', responseTime: '< 48h', topFormat: 'Reels', rating: 4.4, lastActive: 'Heute' },
    { name: 'Puma', category: 'Sports', image: '/brands/nike.jpeg', color: '#f59e0b', match: 90, budget: '€800+', deals: 7, avgDeal: '€870', responseTime: '< 12h', topFormat: 'Reels', rating: 4.8, lastActive: 'Heute' },
    { name: 'Douglas', category: 'Beauty', image: '/brands/sephora.jpeg', color: '#ec4899', match: 84, budget: '€600+', deals: 8, avgDeal: '€680', responseTime: '< 24h', topFormat: 'Stories', rating: 4.3, lastActive: 'Gestern' },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-sm font-bold" style={{ color: 'var(--text)' }}>Brand Marketplace</h4>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>486 Brands aktiv · 24 neue diese Woche</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>Für dich</span>
          <span className="px-3 py-1.5 rounded-lg text-xs font-semibold border" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>Alle</span>
        </div>
      </div>

      {/* AI matching indicator */}
      <div className="flex items-center gap-3 p-3 rounded-xl mb-4" style={{ backgroundColor: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)' }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#10b981', color: 'white', fontSize: '11px', fontWeight: '800' }}>AI</div>
        <div className="flex-1">
          <div className="text-xs font-bold" style={{ color: '#10b981' }}>Smart Matching aktiv</div>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Prozente zeigen, wie gut die Brand zu deinem Profil passt</div>
        </div>
      </div>

      {/* Brand grid - scrollable with enriched cards */}
      <div
        className={`grid ${compact ? 'grid-cols-1 gap-2' : 'grid-cols-3 gap-3'}`}
        style={!compact ? { maxHeight: '380px', overflowY: 'auto', paddingRight: '4px' } : {}}
      >
        {brands.map((brand, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.04 }}
            className="p-3 rounded-xl border bg-white cursor-pointer transition-all hover:shadow-md hover:border-[var(--accent)]"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="flex items-center gap-2.5 mb-2">
              <BrandImage src={brand.image} alt={brand.name} size={compact ? 32 : 36} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold truncate" style={{ color: 'var(--text)' }}>{brand.name}</div>
                <div className="text-xs" style={{ color: brand.color }}>{brand.category}</div>
              </div>
            </div>
            {/* Match percentage */}
            <div className="flex items-center gap-1.5 mb-2">
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                <div className="h-full rounded-full" style={{ width: `${brand.match}%`, backgroundColor: '#10b981' }} />
              </div>
              <span className="text-xs font-bold" style={{ color: '#10b981' }}>{brand.match}%</span>
            </div>
            {/* Enriched details */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Budget</span>
                <span className="text-xs font-semibold" style={{ color: 'var(--text)' }}>{brand.budget}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Avg. Deal</span>
                <span className="text-xs font-semibold" style={{ color: '#10b981' }}>{brand.avgDeal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Antwortzeit</span>
                <span className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>{brand.responseTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Top-Format</span>
                <span className="text-xs font-semibold" style={{ color: brand.color }}>{brand.topFormat}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Deals</span>
                <span className="text-xs font-bold" style={{ color: 'var(--text)' }}>{brand.deals} aktiv</span>
              </div>
              {brand.rating && (
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Rating</span>
                  <span className="text-xs font-semibold" style={{ color: '#f59e0b' }}>{brand.rating} ★</span>
                </div>
              )}
              {brand.lastActive && (
                <div className="flex items-center justify-between pt-0.5">
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Aktiv</span>
                  <span className="text-xs font-semibold" style={{ color: brand.lastActive === 'Heute' ? '#10b981' : 'var(--text-secondary)' }}>{brand.lastActive}</span>
                </div>
              )}
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
   Activity icons use lucide-react, NOT emojis
   ───────────────────────────────────────────────── */
function UnifiedWorkspaceDashboard({ compact }) {
  const projects = [
    { brand: 'GlowSkin Co.', status: 'In Bearbeitung', progress: 65, deadline: '15. Apr', messages: 3, amount: '€1.200' },
    { brand: 'FitLife Pro', status: 'Briefing', progress: 25, deadline: '20. Apr', messages: 1, amount: '€850' },
    { brand: 'Urban Style', status: 'Review', progress: 90, deadline: '12. Apr', messages: 0, amount: '€2.100' },
  ];

  const activities = [
    { text: 'Briefing von GlowSkin Co. erhalten', time: 'vor 2 Std.', icon: ClipboardList, iconColor: 'var(--accent)' },
    { text: 'Content für FitLife Pro hochgeladen', time: 'vor 5 Std.', icon: Upload, iconColor: '#10b981' },
    { text: 'Zahlung von Urban Style eingegangen', time: 'Gestern', icon: CircleDollarSign, iconColor: '#f59e0b' },
    { text: 'Vertrag mit TechWave unterzeichnet', time: 'Gestern', icon: PenLine, iconColor: '#6366f1' },
  ];

  return (
    <div>
      {/* Stats row */}
      <div className={`grid ${compact ? 'grid-cols-3 gap-2 mb-3' : 'grid-cols-4 gap-3 mb-4'}`}>
        {[
          { label: 'Aktive Projekte', value: '5', color: 'var(--accent)' },
          { label: 'Offene Briefings', value: '3', color: '#f59e0b' },
          { label: 'Nachrichten', value: '7', color: '#6366f1' },
          ...(!compact ? [{ label: 'Deadlines', value: '2', color: '#ef4444' }] : []),
        ].map((stat, idx) => (
          <div key={idx} className={`rounded-xl bg-white border ${compact ? 'p-3' : 'px-4 py-3'}`} style={{ borderColor: 'var(--border)' }}>
            <div className="text-xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
            <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Active projects */}
      <div className={`space-y-2.5 ${compact ? 'mb-3' : 'mb-4'}`}>
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.08 }}
            className={`rounded-xl bg-white border ${compact ? 'px-4 py-3' : 'px-5 py-4'}`}
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
                  style={{ backgroundColor: project.progress > 80 ? '#10b981' : project.progress > 40 ? '#f59e0b' : '#6366f1' }}
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

      {/* Recent activity - compact horizontal pills with label on the right */}
      <div className={`rounded-xl bg-white border ${compact ? 'px-4 py-3' : 'px-5 py-4'}`} style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-start gap-4">
          {/* Activity pills - half size, compact */}
          <div className="flex-1 flex flex-wrap gap-1.5">
            {activities.map((a, idx) => {
              const ActivityIcon = a.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border"
                  style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-ivory)' }}
                >
                  <ActivityIcon size={10} style={{ color: a.iconColor }} />
                  <span className="text-xs truncate" style={{ color: 'var(--text-secondary)', maxWidth: '140px', fontSize: '10px' }}>{a.text}</span>
                  <span className="text-xs flex-shrink-0" style={{ color: 'var(--text-muted)', fontSize: '9px' }}>{a.time}</span>
                </div>
              );
            })}
          </div>
          {/* Label on the right */}
          <h5 className="text-xs font-bold uppercase tracking-wide flex-shrink-0 pt-1" style={{ color: 'var(--text-muted)', writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: '9px', letterSpacing: '1px' }}>Letzte Aktivität</h5>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   TAB 3: ÜBERBLICK BEHALTEN
   COMPACT analytics: KPI row + 3 equal cards in a row
   ───────────────────────────────────────────────── */
function AnalyticsDashboard({ compact }) {
  // Revenue mini chart
  const revenuePoints = [420, 680, 850, 1200, 1650, 2100, 2650];
  const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul'];
  const maxVal = 3000;
  const chartW = 200;
  const chartH = 60;

  const linePath = revenuePoints.map((v, i) => {
    const x = (i / (revenuePoints.length - 1)) * chartW;
    const y = chartH - (v / maxVal) * chartH;
    return `${i === 0 ? 'M' : 'L'}${x},${y}`;
  }).join(' ');
  const areaPath = `${linePath} L${chartW},${chartH} L0,${chartH}Z`;

  // Deal funnel
  const funnel = [
    { label: 'Angeboten', count: 24, color: '#6366f1', width: '100%' },
    { label: 'Beworben', count: 18, color: '#8b5cf6', width: '75%' },
    { label: 'Gematcht', count: 12, color: 'var(--accent)', width: '50%' },
    { label: 'Abgeschlossen', count: 8, color: '#10b981', width: '33%' },
  ];

  // Donut
  const categories = [
    { name: 'Beauty', pct: 35, color: '#ec4899' },
    { name: 'Fashion', pct: 25, color: '#8b5cf6' },
    { name: 'Tech', pct: 20, color: '#3b82f6' },
    { name: 'Fitness', pct: 12, color: '#10b981' },
    { name: 'Food', pct: 8, color: '#f59e0b' },
  ];
  let cumulative = 0;
  const donutSegments = categories.map((cat) => {
    const start = cumulative;
    cumulative += cat.pct;
    return { ...cat, start, end: cumulative };
  });

  return (
    <div>
      {/* KPI cards row */}
      <div className={`grid ${compact ? 'grid-cols-2 gap-2 mb-3' : 'grid-cols-4 gap-3 mb-4'}`}>
        {[
          { label: 'Monatl. Umsatz', value: '€2.650', change: '+34%' },
          { label: 'Aktive Deals', value: '5', change: '+2' },
          { label: 'Avg. Deal-Wert', value: '€530', change: '+12%' },
          { label: 'Erfolgsrate', value: '78%', change: '+5%' },
        ].map((kpi, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06 }}
            className="px-3 py-2.5 rounded-xl bg-white border"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>{kpi.label}</div>
            <div className="flex items-end gap-1.5">
              <span className="text-lg font-bold" style={{ color: 'var(--text)' }}>{kpi.value}</span>
              <span className="text-xs font-semibold mb-0.5" style={{ color: '#10b981' }}>{kpi.change} ↑</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2x2 grid: Revenue + Branchen on top, Deal Funnel + Side panel below */}
      <div className={`grid ${compact ? 'grid-cols-1 gap-2' : 'grid-cols-2 gap-3'}`}>
        {/* Revenue mini chart */}
        <div className="rounded-xl bg-white border px-4 py-3" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-xs font-bold" style={{ color: 'var(--text)' }}>Umsatzentwicklung</h5>
            <span className="text-xs px-1.5 py-0.5 rounded font-semibold" style={{ backgroundColor: 'var(--accent)', color: 'white', fontSize: '10px' }}>7M</span>
          </div>
          <svg viewBox={`0 0 ${chartW} ${chartH + 14}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
            {[0, 0.5, 1].map((ratio) => (
              <line key={ratio} x1="0" y1={chartH - ratio * chartH} x2={chartW} y2={chartH - ratio * chartH} stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
            ))}
            <defs>
              <linearGradient id="miniAreaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.01"/>
              </linearGradient>
            </defs>
            <path d={areaPath} fill="url(#miniAreaGrad)"/>
            <path d={linePath} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            {revenuePoints.map((v, i) => {
              const x = (i / (revenuePoints.length - 1)) * chartW;
              const y = chartH - (v / maxVal) * chartH;
              return <circle key={i} cx={x} cy={y} r="2.5" fill="var(--accent)" stroke="white" strokeWidth="1.5"/>;
            })}
            {months.map((m, i) => (
              <text key={i} x={(i / (months.length - 1)) * chartW} y={chartH + 11} textAnchor="middle" fontSize="7" fill="rgba(0,0,0,0.3)">{m}</text>
            ))}
          </svg>
        </div>

        {/* Branchen Donut */}
        <div className="rounded-xl bg-white border px-4 py-3" style={{ borderColor: 'var(--border)' }}>
          <h5 className="text-xs font-bold mb-2" style={{ color: 'var(--text)' }}>Branchen</h5>
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 36 36" className="w-16 h-16 flex-shrink-0">
              {donutSegments.map((seg, idx) => (
                <circle
                  key={idx}
                  cx="18" cy="18" r="15.91549430918954"
                  fill="transparent"
                  stroke={seg.color}
                  strokeWidth="3.5"
                  strokeDasharray={`${seg.pct} ${100 - seg.pct}`}
                  strokeDashoffset={25 - seg.start}
                  strokeLinecap="butt"
                />
              ))}
            </svg>
            <div className="space-y-1 flex-1">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                    <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{cat.name}</span>
                  </div>
                  <span className="text-xs font-bold" style={{ color: 'var(--text)' }}>{cat.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deal Funnel - below metrics */}
        <div className="rounded-xl bg-white border px-4 py-3" style={{ borderColor: 'var(--border)' }}>
          <h5 className="text-xs font-bold mb-2" style={{ color: 'var(--text)' }}>Deal Funnel</h5>
          <div className="space-y-2">
            {funnel.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: idx * 0.08 }}
                style={{ transformOrigin: 'left' }}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{step.label}</span>
                  <span className="text-xs font-bold" style={{ color: step.color }}>{step.count}</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-ivory)', width: step.width }}>
                  <div className="h-full rounded-full" style={{ backgroundColor: step.color }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Top Deals side panel */}
        <div className="rounded-xl bg-white border px-4 py-3" style={{ borderColor: 'var(--border)' }}>
          <h5 className="text-xs font-bold mb-2" style={{ color: 'var(--text)' }}>Top Deals</h5>
          <div className="space-y-2">
            {[
              { brand: 'GlowSkin Co.', amount: '€2.100', status: 'Abgeschlossen', statusColor: '#10b981' },
              { brand: 'FitLife Pro', amount: '€1.200', status: 'In Bearbeitung', statusColor: '#f59e0b' },
              { brand: 'Urban Style', amount: '€850', status: 'Abgeschlossen', statusColor: '#10b981' },
            ].map((deal, idx) => (
              <div key={idx} className="flex items-center justify-between py-1.5 border-b last:border-b-0" style={{ borderColor: 'var(--bg-ivory)' }}>
                <div>
                  <div className="text-xs font-bold" style={{ color: 'var(--text)' }}>{deal.brand}</div>
                  <div className="text-xs" style={{ color: deal.statusColor }}>{deal.status}</div>
                </div>
                <span className="text-sm font-bold" style={{ color: '#10b981' }}>{deal.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Dashboard Router with FIXED HEIGHT (matches tabs column)
   All tabs render at identical height. Content overflows with scroll.
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
      className={`relative rounded-xl overflow-hidden border flex flex-col ${compact ? 'p-4' : 'p-6'}`}
      style={{
        backgroundColor: 'var(--bg-ivory)',
        borderColor: 'var(--border)',
        /* Fixed height: matches tallest dashboard content */
        height: compact ? 'auto' : '620px',
        width: '100%',
      }}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dashGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--cocoa)" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dashGrid)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-5 pointer-events-none" style={{ background: 'var(--accent)', filter: 'blur(60px)' }} />
      {/* Scrollable content area for consistent height */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
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
   Desktop: grid with items-stretch so dashboard matches tabs height
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

        {/* Desktop: Tabs left + Dashboard right, SAME HEIGHT via items-stretch */}
        <div className="hidden lg:grid grid-cols-3 gap-12 items-stretch">
          {/* Left: Feature Tabs */}
          <FadeIn delay={0.3} className="col-span-1" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="space-y-3 flex-1 flex flex-col">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                const isActive = activeTab === feature.id;
                return (
                  <motion.button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className="w-full text-left p-6 rounded-xl border transition-all relative group flex-1"
                    style={{
                      backgroundColor: isActive ? 'white' : 'transparent',
                      borderColor: isActive ? 'var(--accent)' : 'var(--border)',
                      boxShadow: isActive ? '0 4px 12px rgba(0, 0, 0, 0.05)' : 'none',
                    }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex gap-4">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all"
                        style={{ backgroundColor: isActive ? 'var(--accent)' : 'var(--bg-ivory)' }}
                      >
                        <Icon size={24} style={{ color: isActive ? 'white' : 'var(--text)' }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold transition-colors" style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }}>
                          {feature.number}
                        </p>
                        <h3 className="text-xl font-bold mt-1 transition-colors" style={{ color: 'var(--text)' }}>
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

          {/* Right: Dashboard Preview - stretches to match tabs height */}
          <FadeIn delay={0.4} className="col-span-2" style={{ display: 'flex' }}>
            <DashboardPreview activeTab={activeTab} />
          </FadeIn>
        </div>

        {/* Mobile: Accordion */}
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
                        style={{ backgroundColor: isActive ? 'var(--accent)' : 'var(--bg-ivory)' }}
                      >
                        <Icon size={20} style={{ color: isActive ? 'white' : 'var(--text)' }} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold" style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }}>
                          {feature.number}
                        </p>
                        <h3 className="text-lg font-bold mt-0.5" style={{ color: 'var(--text)' }}>
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

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="border border-t-0 rounded-b-xl p-5" style={{ borderColor: 'var(--accent)' }}>
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
