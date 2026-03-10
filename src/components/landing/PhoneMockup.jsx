'use client';

import { motion } from 'framer-motion';

export default function PhoneMockup({
  width = 300,
  children,
  className = '',
}) {
  const screenWidth = width - 16;
  const screenHeight = (screenWidth / 9) * 19.5;

  return (
    <motion.div
      className={`relative mx-auto ${className}`}
      style={{
        width: `${width}px`,
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
      initial={{ y: 0 }}
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Ambient glow behind phone */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: 'scale(1.15) translateY(8%)',
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201, 140, 131, 0.2), transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Phone body with 3D depth */}
      <div
        className="relative rounded-[44px] overflow-visible"
        style={{
          width: `${width}px`,
          height: `${screenHeight + 16}px`,
          transform: 'rotateX(2deg) rotateY(-3deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Phone frame - titanium finish */}
        <div
          className="absolute inset-0 rounded-[44px] overflow-hidden"
          style={{
            background: `linear-gradient(
              145deg,
              #e8e6e3 0%,
              #d4d2cf 8%,
              #a8a5a1 20%,
              #8a8784 35%,
              #6d6a67 50%,
              #8a8784 65%,
              #a8a5a1 80%,
              #d4d2cf 92%,
              #e8e6e3 100%
            )`,
            boxShadow: `
              0 40px 80px rgba(0, 0, 0, 0.35),
              0 15px 35px rgba(0, 0, 0, 0.25),
              0 5px 15px rgba(0, 0, 0, 0.2),
              inset 0 1px 2px rgba(255, 255, 255, 0.6),
              inset 0 -1px 2px rgba(0, 0, 0, 0.3)
            `,
          }}
        >
          {/* Inner frame edge */}
          <div
            className="absolute inset-[1px] rounded-[43px] pointer-events-none"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          />

          {/* Screen area */}
          <div
            className="absolute rounded-[38px] overflow-hidden"
            style={{
              width: `${screenWidth}px`,
              height: `${screenHeight}px`,
              top: '8px',
              left: '8px',
              background: '#000',
              boxShadow: `
                inset 0 2px 6px rgba(0, 0, 0, 0.4),
                inset 0 0 2px rgba(0, 0, 0, 0.8)
              `,
            }}
          >
            {/* Screen content */}
            <div className="w-full h-full overflow-hidden" style={{ background: 'var(--bg)' }}>
              {children}
            </div>
          </div>

          {/* Dynamic Island */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 rounded-full z-40"
            style={{
              width: '110px',
              height: '32px',
              top: '10px',
              background: '#000',
              boxShadow: `
                inset 0 1px 3px rgba(255, 255, 255, 0.05),
                0 1px 4px rgba(0, 0, 0, 0.3)
              `,
            }}
          >
            {/* Camera lens */}
            <div
              className="absolute right-6 top-1/2 -translate-y-1/2"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, rgba(60,60,80,0.4) 0%, #0a0a0c 60%)',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.9), 0 0 3px rgba(0,0,0,0.4)',
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 60%)',
                }}
              />
            </div>
          </div>

          {/* Power button (right) */}
          <div
            className="absolute rounded-sm"
            style={{
              right: '-3px',
              top: '120px',
              width: '4px',
              height: '32px',
              background: 'linear-gradient(90deg, #c0bdb9 0%, #a8a5a1 50%, #8a8784 100%)',
              borderRadius: '0 2px 2px 0',
              boxShadow: '1px 0 2px rgba(0,0,0,0.2), inset -1px 0 1px rgba(255,255,255,0.3)',
            }}
          />

          {/* Volume buttons (left) */}
          <div
            className="absolute rounded-sm"
            style={{
              left: '-3px',
              top: '100px',
              width: '4px',
              height: '28px',
              background: 'linear-gradient(90deg, #8a8784 0%, #a8a5a1 50%, #c0bdb9 100%)',
              borderRadius: '2px 0 0 2px',
              boxShadow: '-1px 0 2px rgba(0,0,0,0.2), inset 1px 0 1px rgba(255,255,255,0.3)',
            }}
          />
          <div
            className="absolute rounded-sm"
            style={{
              left: '-3px',
              top: '140px',
              width: '4px',
              height: '28px',
              background: 'linear-gradient(90deg, #8a8784 0%, #a8a5a1 50%, #c0bdb9 100%)',
              borderRadius: '2px 0 0 2px',
              boxShadow: '-1px 0 2px rgba(0,0,0,0.2), inset 1px 0 1px rgba(255,255,255,0.3)',
            }}
          />

          {/* Glass reflection - top diagonal */}
          <div
            className="absolute top-0 left-0 right-0 rounded-t-[44px] pointer-events-none"
            style={{
              height: '50%',
              background: `linear-gradient(
                155deg,
                rgba(255, 255, 255, 0.35) 0%,
                rgba(255, 255, 255, 0.1) 30%,
                transparent 60%
              )`,
              opacity: 0.7,
            }}
          />

          {/* Subtle bottom reflection */}
          <div
            className="absolute bottom-0 left-0 right-0 rounded-b-[44px] pointer-events-none"
            style={{
              height: '15%',
              background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.08) 100%)',
            }}
          />
        </div>
      </div>

      {/* Drop shadow */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: '80px',
          transform: 'translateY(80%) scaleX(0.75)',
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,0,0,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(8px)',
        }}
      />
    </motion.div>
  );
}
