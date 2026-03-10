'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = ['Overview', 'Deals', 'Inbox', 'Profile'];

const StatusBar = () => (
  <div
    className="flex items-center justify-between px-4 py-2 text-xs font-semibold"
    style={{ color: 'var(--text)' }}
  >
    <span>9:41</span>
    <div className="flex gap-1">
      <span>📶</span>
      <span>📡</span>
      <span>🔋</span>
    </div>
  </div>
);

const AppHeader = () => (
  <div
    className="flex items-center justify-between px-4 py-3 border-b"
    style={{ borderColor: 'var(--border)' }}
  >
    <div className="flex items-center gap-2">
      <span style={{ color: 'var(--cocoa)', fontWeight: '700', fontSize: '16px' }}>
        Creator
      </span>
      <span
        style={{
          color: 'var(--accent)',
          fontStyle: 'italic',
          fontWeight: '600',
          fontSize: '16px',
        }}
      >
        Bridge
      </span>
    </div>
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs"
      style={{ backgroundColor: 'var(--accent)', color: 'white' }}
    >
      LS
    </div>
  </div>
);

const TabBar = ({ activeTab, onTabChange }) => (
  <div
    className="flex items-center justify-around border-b"
    style={{ borderColor: 'var(--border)' }}
  >
    {TABS.map((tab) => (
      <button
        key={tab}
        onClick={() => onTabChange(tab)}
        className="flex-1 py-3 text-xs font-semibold relative transition-colors"
        style={{
          color: activeTab === tab ? 'var(--accent)' : 'var(--text-secondary)',
        }}
      >
        {tab}
        {activeTab === tab && (
          <motion.div
            layoutId="activeTab"
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ backgroundColor: 'var(--accent)' }}
          />
        )}
      </button>
    ))}
  </div>
);

const OverviewTab = () => (
  <div className="space-y-4">
    {/* Stats row */}
    <div className="flex gap-2 px-4 pt-4">
      <div className="flex-1 p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Umsatz</div>
        <div style={{ color: 'var(--cocoa)', fontSize: '16px', fontWeight: '700' }}>
          €2.650
        </div>
      </div>
      <div className="flex-1 p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Aktiv</div>
        <div style={{ color: 'var(--cocoa)', fontSize: '16px', fontWeight: '700' }}>
          5 Deals
        </div>
      </div>
      <div className="flex-1 p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Matches</div>
        <div style={{ color: 'var(--cocoa)', fontSize: '16px', fontWeight: '700' }}>
          3
        </div>
      </div>
    </div>

    {/* Deal rows */}
    <div className="space-y-2 px-4">
      {[
        {
          name: 'Hautpflege-Kampagne',
          brand: 'Beauty Brand Co.',
          amount: '€850',
          status: 'Matched',
          color: '#10b981',
        },
        {
          name: 'Sommer-Kollektion',
          brand: 'Fashion Label X',
          amount: '€1.200',
          status: 'Prüfung',
          color: '#f59e0b',
        },
        {
          name: 'Fitness-Supplement',
          brand: 'SupFit GmbH',
          amount: '€600',
          status: 'Neu',
          color: '#ec4899',
        },
      ].map((deal, idx) => (
        <div
          key={idx}
          className="p-3 rounded-lg border"
          style={{ borderColor: 'var(--border)', backgroundColor: 'white' }}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div style={{ color: 'var(--cocoa)', fontSize: '13px', fontWeight: '600' }}>
                {deal.name}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>
                {deal.brand}
              </div>
            </div>
            <div className="text-right">
              <div style={{ color: 'var(--cocoa)', fontSize: '13px', fontWeight: '700' }}>
                {deal.amount}
              </div>
              <div
                className="text-10px font-semibold px-2 py-1 rounded-full"
                style={{
                  backgroundColor: `${deal.color}20`,
                  color: deal.color,
                }}
              >
                {deal.status}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DealsTab = () => (
  <div className="space-y-2 p-4">
    {[
      {
        name: 'Nachhaltige Lifestyle',
        brand: 'GreenLiving DE',
        amount: '€950',
      },
      {
        name: 'Tech-Review Serie',
        brand: 'GadgetPro',
        amount: '€1.500',
      },
      {
        name: 'Reise-Logbuch',
        brand: 'WanderLust',
        amount: '€700',
      },
    ].map((deal, idx) => (
      <div
        key={idx}
        className="p-3 rounded-lg border"
        style={{ borderColor: 'var(--border)', backgroundColor: 'white' }}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div style={{ color: 'var(--cocoa)', fontSize: '13px', fontWeight: '600' }}>
              {deal.name}
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>
              {deal.brand}
            </div>
          </div>
          <div style={{ color: 'var(--accent)', fontSize: '13px', fontWeight: '700' }}>
            {deal.amount}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const InboxTab = () => (
  <div className="space-y-2 p-4">
    {[
      {
        sender: 'Beauty Brand Co.',
        message: 'Hi! Wir haben dein Profil geprüft...',
      },
      {
        sender: 'Fashion Label X',
        message: 'Das Briefing für die Sommer-Kollektion...',
      },
      {
        sender: 'SupFit GmbH',
        message: 'Willkommen! Wir freuen uns...',
      },
    ].map((msg, idx) => (
      <div
        key={idx}
        className="p-3 rounded-lg border"
        style={{ borderColor: 'var(--border)', backgroundColor: 'white' }}
      >
        <div style={{ color: 'var(--cocoa)', fontSize: '13px', fontWeight: '600' }}>
          {msg.sender}
        </div>
        <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '4px' }}>
          {msg.message}
        </div>
      </div>
    ))}
  </div>
);

const ProfileTab = () => (
  <div className="p-4 space-y-4">
    {/* Avatar & Name */}
    <div className="flex items-center gap-3">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
        style={{ backgroundColor: 'var(--accent)', color: 'white' }}
      >
        LS
      </div>
      <div>
        <div style={{ color: 'var(--cocoa)', fontSize: '14px', fontWeight: '700' }}>
          Lisa Schmidt
        </div>
        <div style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>
          @lisacreates
        </div>
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-2">
      {[
        { label: 'Follower', value: '47K' },
        { label: 'Deals', value: '8' },
        { label: 'Rating', value: '4.8' },
      ].map((stat, idx) => (
        <div
          key={idx}
          className="p-2 rounded-lg text-center"
          style={{ backgroundColor: 'var(--bg-ivory)' }}
        >
          <div style={{ color: 'var(--cocoa)', fontSize: '13px', fontWeight: '700' }}>
            {stat.value}
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '10px' }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>

    {/* Badges */}
    <div className="flex flex-wrap gap-2">
      {['Founding 10', 'Beauty', 'Lifestyle', 'DACH'].map((badge, idx) => (
        <div
          key={idx}
          className="px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            backgroundColor: 'var(--gold)',
            color: 'var(--cocoa)',
          }}
        >
          {badge}
        </div>
      ))}
    </div>
  </div>
);

export default function PhoneAppUI() {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabContent = {
    Overview: <OverviewTab />,
    Deals: <DealsTab />,
    Inbox: <InboxTab />,
    Profile: <ProfileTab />,
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
            transition={{ duration: 0.2 }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
