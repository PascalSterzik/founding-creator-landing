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
    <img
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces&facepad=1.1"
      alt="Lisa Schmidt"
      className="w-8 h-8 rounded-full object-cover transition-transform hover:scale-105"
      style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)' }}
    />
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
      {/* Sliding underline (pure CSS transition, no layoutId) */}
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
    {/* Premium Stats Cards */}
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

    {/* Deal Cards */}
    <div className="space-y-2 px-3">
      {[
        {
          name: 'Hautpflege-Kampagne',
          brand: 'Beauty Brand Co.',
          amount: '€850',
          status: 'Matched',
          color: '#10b981',
          initials: 'BC',
          image: 'https://images.unsplash.com/photo-1570194065650-d99fb4a38d15?w=80&h=80&fit=crop&crop=center',
        },
        {
          name: 'Sommer-Kollektion',
          brand: 'Fashion Label X',
          amount: '€1.200',
          status: 'Prüfung',
          color: '#f59e0b',
          initials: 'FL',
          image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=80&h=80&fit=crop&crop=center',
        },
        {
          name: 'Fitness-Supplement',
          brand: 'SupFit GmbH',
          amount: '€600',
          status: 'Neu',
          color: '#ec4899',
          initials: 'SF',
          image: 'https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=80&h=80&fit=crop&crop=center',
        },
      ].map((deal, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 + idx * 0.05 }}
          className="p-3 rounded-xl border cursor-pointer"
          style={{
            borderColor: 'var(--border)',
            backgroundColor: 'white',
            borderLeft: `3px solid ${deal.color}`,
            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <img
                src={deal.image}
                alt={deal.name}
                className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                style={{ border: `2px solid ${deal.color}30` }}
              />
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
                className="font-semibold px-2 py-0.5 rounded-full inline-block mt-1"
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
      {
        name: 'Nachhaltige Lifestyle',
        brand: 'GreenLiving DE',
        amount: '€950',
        initials: 'GL',
        color: '#10b981',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=80&h=80&fit=crop&crop=center',
      },
      {
        name: 'Tech-Review Serie',
        brand: 'GadgetPro',
        amount: '€1.500',
        initials: 'GP',
        color: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=80&h=80&fit=crop&crop=center',
      },
      {
        name: 'Reise-Logbuch',
        brand: 'WanderLust',
        amount: '€700',
        initials: 'WL',
        color: '#8b5cf6',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&h=80&fit=crop&crop=center',
      },
    ].map((deal, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.05 }}
        className="p-4 rounded-2xl border group hover:shadow-lg transition-all duration-200 cursor-pointer"
        style={{
          borderColor: 'var(--border)',
          backgroundColor: 'white',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1">
            {deal.image ? (
              <img
                src={deal.image}
                alt={deal.name}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0 transition-transform group-hover:scale-110"
                style={{ border: `2px solid ${deal.color}30` }}
              />
            ) : (
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: `${deal.color}20`,
                  color: deal.color,
                }}
              >
                {deal.initials}
              </div>
            )}
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
      {
        sender: 'Beauty Brand Co.',
        message: 'Hi! Wir haben dein Profil geprüft...',
        unread: true,
      },
      {
        sender: 'Fashion Label X',
        message: 'Das Briefing für die Sommer-Kollektion...',
        unread: true,
      },
      {
        sender: 'SupFit GmbH',
        message: 'Willkommen! Wir freuen uns...',
        unread: false,
      },
    ].map((msg, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: idx * 0.05 }}
        className="p-4 rounded-2xl border group hover:shadow-lg transition-all duration-200 cursor-pointer relative"
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
      className="flex items-center gap-3.5 p-4 rounded-2xl"
      style={{
        background: 'linear-gradient(135deg, var(--bg-ivory) 0%, rgba(var(--accent-rgb), 0.08) 100%)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="relative flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces&facepad=1.2"
          alt="Lisa Schmidt"
          className="w-14 h-14 rounded-full object-cover"
          style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
        />
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
            className="p-3 rounded-2xl text-center group hover:shadow-md transition-all duration-200"
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
      {['Founding 10', 'Beauty', 'Lifestyle', 'DACH'].map((badge, idx) => (
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
