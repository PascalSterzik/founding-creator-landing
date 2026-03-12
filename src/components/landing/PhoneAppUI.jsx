'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Star, TrendingUp, Lock } from 'lucide-react';

const TABS = [
  { key: 'Übersicht', label: 'Übersicht' },
  { key: 'Deals', label: 'Deals' },
  { key: 'Postfach', label: 'Postfach' },
  { key: 'Profil', label: 'Profil' },
];

// Inline SVG brand logos (no external dependencies, always load)
const BrandLogoBc = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="6" fill="#10b981" fillOpacity="0.12"/>
    <path d="M8 8h4c2.2 0 3.5 1 3.5 2.8 0 1.2-.6 2-1.6 2.4 1.2.3 2 1.3 2 2.7 0 2-1.4 3.1-3.8 3.1H8V8zm4 4.4c1 0 1.6-.5 1.6-1.3 0-.8-.6-1.3-1.6-1.3H10v2.6h2zm.2 4.8c1.1 0 1.8-.6 1.8-1.4 0-.9-.7-1.4-1.8-1.4H10v2.8h2.2z" fill="#10b981"/>
    <path d="M17 14.5c0-3 1.8-5 4.2-5 .6 0 1.1.1 1.5.3l-.5 1.6c-.3-.1-.6-.2-1-.2-1.5 0-2.4 1.3-2.4 3.3 0 2 .9 3.2 2.4 3.2.4 0 .7-.1 1-.2l.5 1.6c-.4.2-.9.3-1.5.3-2.4 0-4.2-2-4.2-4.9z" fill="#10b981"/>
  </svg>
);

const BrandLogoFl = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="6" fill="#f59e0b" fillOpacity="0.12"/>
    <path d="M7 8h6v1.8H9v2.5h3.5v1.7H9V19H7V8z" fill="#f59e0b"/>
    <path d="M15 8h2v9h4.5V19H15V8z" fill="#f59e0b"/>
  </svg>
);

const BrandLogoSf = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="6" fill="#ec4899" fillOpacity="0.12"/>
    <path d="M7 16.8l1.6-1c.5.9 1.3 1.5 2.4 1.5 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.8-1.5-1.5-.5-2.8-1.1-2.8-2.8 0-1.6 1.3-2.8 3.2-2.8 1.5 0 2.6.7 3.2 1.7l-1.5.9c-.4-.6-1-1-1.7-1-.8 0-1.3.4-1.3 1 0 .7.5 1 1.7 1.4 1.6.5 2.9 1.1 2.9 2.9 0 1.7-1.3 2.9-3.4 2.9-1.7 0-3-.8-3.7-2z" fill="#ec4899"/>
    <path d="M16 8h6v1.8h-4v2.5h3.5v1.7H18V19h-2V8z" fill="#ec4899"/>
  </svg>
);

const BrandLogoGl = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#10b981" fillOpacity="0.12"/>
    <path d="M8 10c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2V10z" fill="#10b981" fillOpacity="0.08"/>
    <path d="M12 20V12h2v8h-2z" fill="#10b981" fillOpacity="0.4"/>
    <path d="M16 20v-5h2v5h-2z" fill="#10b981" fillOpacity="0.6"/>
    <path d="M20 20v-7h2v7h-2z" fill="#10b981" fillOpacity="0.9"/>
    <circle cx="13" cy="11" r="1" fill="#10b981"/>
  </svg>
);

const BrandLogoGp = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#3b82f6" fillOpacity="0.12"/>
    <rect x="10" y="10" width="12" height="8" rx="1.5" stroke="#3b82f6" strokeWidth="1.5" fill="none"/>
    <circle cx="16" cy="14" r="2" fill="#3b82f6" fillOpacity="0.3"/>
    <path d="M13 21h6" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 18v3" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BrandLogoWl = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#8b5cf6" fillOpacity="0.12"/>
    <path d="M10 14l3-4 3 3 3-5 3 6" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="20" r="1.5" fill="#8b5cf6" fillOpacity="0.4"/>
    <path d="M12.5 22.5c0-2 1.6-3.5 3.5-3.5s3.5 1.5 3.5 3.5" stroke="#8b5cf6" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
  </svg>
);

// Avatar SVG (instead of Unsplash URL that may not load)
const AvatarSvg = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="24" fill="var(--accent)" fillOpacity="0.15"/>
    <circle cx="24" cy="19" r="8" fill="var(--accent)" fillOpacity="0.3"/>
    <path d="M8 42c0-8.8 7.2-16 16-16s16 7.2 16 16" fill="var(--accent)" fillOpacity="0.2"/>
    <text x="24" y="25" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--accent)" fontFamily="DM Sans, sans-serif">LS</text>
  </svg>
);

// SVG Status Icons
const SignalIcon = () => (
  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
    <path d="M1 9V5M3.5 9V3M6 9V1M8.5 9V4M11 9V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const WifiIcon = () => (
  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
    <path d="M6 9C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9Z" fill="currentColor"/>
    <path d="M3.5 6C4.5 5 5.5 4.5 6 4.5C6.5 4.5 7.5 5 8.5 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M1.5 4C3 2.5 4.5 1.5 6 1.5C7.5 1.5 9 2.5 10.5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const BatteryIcon = () => (
  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
    <rect x="0.5" y="1.5" width="11" height="7" rx="0.5" stroke="currentColor" strokeWidth="1"/>
    <rect x="11.75" y="3" width="1.25" height="4" rx="0.25" fill="currentColor"/>
    <rect x="1" y="2" width="8" height="6" fill="currentColor" opacity="0.8"/>
  </svg>
);

const StatusBar = () => (
  <div
    className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold"
    style={{ color: 'var(--text)' }}
  >
    <span>9:41</span>
    <div className="flex gap-1.5 items-center" style={{ color: 'var(--text)' }}>
      <SignalIcon />
      <WifiIcon />
      <BatteryIcon />
    </div>
  </div>
);

const AppHeader = () => (
  <div
    className="flex items-center justify-between px-4 py-4 border-b"
    style={{ borderColor: 'var(--border)' }}
  >
    <div className="flex items-center gap-1.5">
      <span style={{ color: 'var(--cocoa)', fontWeight: '700', fontSize: '17px', letterSpacing: '-0.3px' }}>
        Creator
      </span>
      <span
        style={{
          color: 'var(--accent)',
          fontStyle: 'italic',
          fontWeight: '600',
          fontSize: '17px',
          letterSpacing: '-0.3px',
        }}
      >
        Bridge
      </span>
    </div>
    <div
      className="w-8 h-8 rounded-full overflow-hidden"
      style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)' }}
    >
      <AvatarSvg size={32} />
    </div>
  </div>
);

const TabBar = ({ activeTab, onTabChange }) => {
  const activeIndex = TABS.findIndex((t) => t.key === activeTab);
  const tabCount = TABS.length;

  return (
    <div
      className="relative flex items-center justify-around border-b"
      style={{ borderColor: 'var(--border)' }}
    >
      {TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className="flex-1 py-3.5 text-xs font-semibold relative transition-colors duration-200"
          style={{
            color: activeTab === tab.key ? 'var(--accent)' : 'var(--text-secondary)',
          }}
        >
          {tab.label}
        </button>
      ))}
      {/* Sliding underline */}
      <div
        className="absolute bottom-0 h-1 rounded-t-full"
        style={{
          backgroundColor: 'var(--accent)',
          width: `${100 / tabCount}%`,
          left: `${(activeIndex / tabCount) * 100}%`,
          transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </div>
  );
};

const OverviewTab = () => (
  <div className="space-y-4 pb-4">
    {/* Stats Cards */}
    <div className="grid grid-cols-3 gap-2 px-3 pt-3">
      {[
        { label: 'Umsatz', value: '€2.650', accent: '#10b981' },
        { label: 'Aktiv', value: '5 Deals', accent: '#f59e0b' },
        { label: 'Matches', value: '3', accent: '#ec4899' },
      ].map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
          className="p-2 rounded-lg relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, var(--bg-ivory) 0%, rgba(var(--accent-rgb), 0.05) 100%)`,
            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.06)',
            borderLeft: `2px solid ${stat.accent}`,
          }}
        >
          <div style={{ color: 'var(--text-muted)', fontSize: '8px', fontWeight: '600', letterSpacing: '0.3px', textTransform: 'uppercase' }}>
            {stat.label}
          </div>
          <div style={{ color: 'var(--cocoa)', fontSize: '13px', fontWeight: '700', marginTop: '2px', letterSpacing: '-0.3px' }}>
            {stat.value}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Deal Cards — reduced border-radius, brand logo SVGs */}
    <div className="space-y-2 px-3">
      {[
        { name: 'Hautpflege-Kampagne', brand: 'Beauty Brand Co.', amount: '€850', status: 'Matched', color: '#10b981', Logo: BrandLogoBc },
        { name: 'Sommer-Kollektion', brand: 'Fashion Label X', amount: '€1.200', status: 'Prüfung', color: '#f59e0b', Logo: BrandLogoFl },
        { name: 'Fitness-Supplement', brand: 'SupFit GmbH', amount: '€600', status: 'Neu', color: '#ec4899', Logo: BrandLogoSf },
      ].map((deal, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 + idx * 0.05 }}
          className="p-3 rounded-lg border cursor-pointer"
          style={{
            borderColor: 'var(--border)',
            backgroundColor: 'white',
            borderLeft: `3px solid ${deal.color}`,
            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="flex-shrink-0">
                <deal.Logo />
              </div>
              <div className="flex-1 min-w-0">
                <div style={{ color: 'var(--cocoa)', fontSize: '12px', fontWeight: '600', letterSpacing: '-0.2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {deal.name}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '10px', marginTop: '1px' }}>
                  {deal.brand}
                </div>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div style={{ color: 'var(--cocoa)', fontSize: '12px', fontWeight: '700', letterSpacing: '-0.2px' }}>
                {deal.amount}
              </div>
              <div
                className="font-semibold px-2 py-0.5 rounded inline-block mt-1"
                style={{
                  backgroundColor: `${deal.color}15`,
                  color: deal.color,
                  fontSize: '9px',
                  fontWeight: '600',
                }}
              >
                {deal.status}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const DealsTab = () => (
  <div className="space-y-3 p-4 pb-6">
    {[
      { name: 'Nachhaltige Lifestyle', brand: 'GreenLiving DE', amount: '€950', color: '#10b981', Logo: BrandLogoGl },
      { name: 'Tech-Review Serie', brand: 'GadgetPro', amount: '€1.500', color: '#3b82f6', Logo: BrandLogoGp },
      { name: 'Reise-Logbuch', brand: 'WanderLust', amount: '€700', color: '#8b5cf6', Logo: BrandLogoWl },
    ].map((deal, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.05 }}
        className="p-4 rounded-xl border group hover:shadow-lg transition-all duration-200 cursor-pointer"
        style={{
          borderColor: 'var(--border)',
          backgroundColor: 'white',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex-shrink-0 transition-transform group-hover:scale-110">
              <deal.Logo />
            </div>
            <div className="flex-1 min-w-0">
              <div style={{ color: 'var(--cocoa)', fontSize: '13px', fontWeight: '600', letterSpacing: '-0.2px' }}>
                {deal.name}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '11px', marginTop: '2px' }}>
                {deal.brand}
              </div>
            </div>
          </div>
          <div style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: '700', letterSpacing: '-0.2px', flexShrink: 0 }}>
            {deal.amount}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

const InboxTab = () => (
  <div className="space-y-2 p-4 pb-6">
    {[
      { sender: 'Beauty Brand Co.', message: 'Hi! Wir haben dein Profil geprüft...', unread: true },
      { sender: 'Fashion Label X', message: 'Das Briefing für die Sommer-Kollektion...', unread: true },
      { sender: 'SupFit GmbH', message: 'Willkommen! Wir freuen uns...', unread: false },
    ].map((msg, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: idx * 0.05 }}
        className="p-4 rounded-xl border group hover:shadow-lg transition-all duration-200 cursor-pointer relative"
        style={{
          borderColor: 'var(--border)',
          backgroundColor: msg.unread ? 'rgba(var(--accent-rgb), 0.03)' : 'white',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        }}
      >
        {msg.unread && (
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
        )}
        <div className="flex items-start gap-2.5">
          <MessageSquare size={14} style={{ color: 'var(--accent)', marginTop: '3px', flexShrink: 0 }} />
          <div className="flex-1 min-w-0">
            <div style={{ color: 'var(--cocoa)', fontSize: '13px', fontWeight: '600', letterSpacing: '-0.2px' }}>
              {msg.sender}
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '4px', lineHeight: '1.4' }}>
              {msg.message}
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

const ProfileTab = () => (
  <div className="p-4 space-y-5 pb-6">
    {/* Avatar & Name Section */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-3.5 p-4 rounded-xl"
      style={{
        background: 'linear-gradient(135deg, var(--bg-ivory) 0%, rgba(var(--accent-rgb), 0.08) 100%)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="relative flex-shrink-0">
        <div
          className="w-14 h-14 rounded-full overflow-hidden"
          style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
        >
          <AvatarSvg size={56} />
        </div>
        <div
          className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
        >
          <Lock size={12} style={{ color: 'var(--accent)' }} />
        </div>
      </div>
      <div className="flex-1">
        <div style={{ color: 'var(--cocoa)', fontSize: '15px', fontWeight: '700', letterSpacing: '-0.3px' }}>
          Lisa Schmidt
        </div>
        <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '3px' }}>
          @lisacreates
        </div>
      </div>
    </motion.div>

    {/* Stats Grid */}
    <div className="grid grid-cols-3 gap-2.5">
      {[
        { label: 'Follower', value: '47K', icon: Star },
        { label: 'Deals', value: '8', icon: TrendingUp },
        { label: 'Rating', value: '4.8', icon: Star },
      ].map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="p-3 rounded-xl text-center group hover:shadow-md transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, var(--bg-ivory) 0%, rgba(var(--accent-rgb), 0.05) 100%)',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
            }}
          >
            <Icon size={14} style={{ color: 'var(--accent)', margin: '0 auto 4px', opacity: 0.7 }} />
            <div style={{ color: 'var(--cocoa)', fontSize: '14px', fontWeight: '700', letterSpacing: '-0.2px' }}>
              {stat.value}
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '10px', marginTop: '2px', fontWeight: '500' }}>
              {stat.label}
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* Badges */}
    <div className="flex flex-wrap gap-2">
      {['Founding Creator', 'Beauty', 'Lifestyle', 'DACH'].map((badge, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.05 }}
          className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-transform hover:scale-105 cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, var(--gold) 0%, rgba(var(--gold-rgb), 0.8) 100%)',
            color: 'var(--cocoa)',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
          }}
        >
          {badge}
        </motion.div>
      ))}
    </div>
  </div>
);

export default function PhoneAppUI() {
  const [activeTab, setActiveTab] = useState('Übersicht');

  const tabContent = {
    'Übersicht': <OverviewTab />,
    'Deals': <DealsTab />,
    'Postfach': <InboxTab />,
    'Profil': <ProfileTab />,
  };

  return (
    <div
      className="w-full h-full flex flex-col"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <StatusBar />
      <AppHeader />
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab content */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
