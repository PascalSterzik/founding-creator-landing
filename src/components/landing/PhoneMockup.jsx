'use client';

import { motion } from 'framer-motion';

export default function PhoneMockup({
  width = 300,
  children,
  className = '',
  showFloatingCards = true,
  tilt = true,
}) {
  const screenWidth = width - 16;
  const screenHeight = (screenWidth / 9) * 19.5;

  const floatingCardVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const floatingPulse = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity },
  };

  return (
    <motion.div
      className={`relative mx-auto ${className}`}
      style={{
        width: `${width}px`,
        perspective: '1200px',
      }}
      animate={tilt ? { rotateY: -8, rotateX: 4 } : { rotateY: 0, rotateX: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {/* Phone frame outer */}
      <div
        className="relative rounded-[44px] overflow-hidden shadow-2xl"
        style={{
          width: `${width}px`,
          height: `${screenHeight + 16}px`,
          background: 'linear-gradient(135deg, #2a2a2a 0%, #0d0d0d 100%)',
          boxShadow: `
            0 0 40px rgba(0, 0, 0, 0.5),
            inset 0 1px 2px rgba(255, 255, 255, 0.1),
            inset 0 -1px 2px rgba(0, 0, 0, 0.8)
          `,
        }}
      >
        {/* Frame inner border highlight */}
        <div
          className="absolute inset-0 rounded-[44px] pointer-events-none"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: 'inset 0 1px 3px rgba(255, 255, 255, 0.1)',
          }}
        />

        {/* Screen container with padding */}
        <div
          className="absolute rounded-[34px] overflow-hidden"
          style={{
            width: `${screenWidth}px`,
            height: `${screenHeight}px`,
            top: '8px',
            left: '8px',
            background: 'var(--bg)',
            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
          }}
        >
          {children}
        </div>

        {/* Dynamic Island */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 rounded-[20px] z-40"
          style={{
            width: '100px',
            height: '24px',
            top: '10px',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.8)',
          }}
        >
          {/* Camera lens */}
          <div
            className="absolute left-6 top-1/2 transform -translate-y-1/2 rounded-full"
            style={{
              width: '8px',
              height: '8px',
              background: '#050505',
              boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.9), 0 1px 2px rgba(255, 255, 255, 0.1)',
            }}
          />
        </div>

        {/* Side buttons */}
        {/* Power button (right side) */}
        <div
          className="absolute right-0 top-24 rounded-md"
          style={{
            width: '3px',
            height: '30px',
            backgroundColor: '#1a1a1a',
            boxShadow: 'inset -1px 0 1px rgba(255, 255, 255, 0.1)',
          }}
        />

        {/* Volume up (left side) */}
        <div
          className="absolute left-0 top-20 rounded-md"
          style={{
            width: '3px',
            height: '24px',
            backgroundColor: '#1a1a1a',
            boxShadow: 'inset 1px 0 1px rgba(255, 255, 255, 0.1)',
          }}
        />

        {/* Silent switch (left side) */}
        <div
          className="absolute left-0 top-48 rounded-md"
          style={{
            width: '3px',
            height: '20px',
            backgroundColor: '#1a1a1a',
            boxShadow: 'inset 1px 0 1px rgba(255, 255, 255, 0.1)',
          }}
        />

        {/* Volume down (left side) */}
        <div
          className="absolute left-0 top-72 rounded-md"
          style={{
            width: '3px',
            height: '24px',
            backgroundColor: '#1a1a1a',
            boxShadow: 'inset 1px 0 1px rgba(255, 255, 255, 0.1)',
          }}
        />

        {/* Glass reflection/shine */}
        <div
          className="absolute top-0 left-0 right-0 rounded-[44px] pointer-events-none opacity-30"
          style={{
            height: '40%',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Floating notification cards */}
      {showFloatingCards && (
        <>
          {/* Top-left card */}
          <motion.div
            className="absolute top-8 -left-32 bg-white rounded-2xl shadow-lg p-3 z-50"
            style={{
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            }}
            initial="initial"
            animate="animate"
            variants={floatingCardVariants}
            transition={{ delay: 0.2 }}
          >
            <motion.div animate={floatingPulse}>
              <div style={{ color: 'var(--cocoa)', fontSize: '12px', fontWeight: '600' }}>
                +3 Neue Matches
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '10px' }}>
                Beauty & Lifestyle
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom-right card */}
          <motion.div
            className="absolute bottom-8 -right-32 bg-white rounded-2xl shadow-lg p-3 z-50"
            style={{
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            }}
            initial="initial"
            animate="animate"
            variants={floatingCardVariants}
            transition={{ delay: 0.4 }}
          >
            <motion.div animate={floatingPulse}>
              <div style={{ color: 'var(--cocoa)', fontSize: '12px', fontWeight: '600' }}>
                ↑ 24% diesen Monat
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '10px' }}>
                Engagement Rate
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
