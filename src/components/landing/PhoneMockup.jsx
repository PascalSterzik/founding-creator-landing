'use client';

import { motion } from 'framer-motion';

export default function PhoneMockup({
  width = 300,
  children,
  className = '',
  tilt = true,
}) {
  const screenWidth = width - 18;
  const screenHeight = (screenWidth / 9) * 19.5;

  return (
    <motion.div
      className={`relative mx-auto ${className}`}
      style={{
        width: `${width}px`,
        perspective: '1200px',
      }}
      animate={
        tilt
          ? { rotateY: [-8, 8, -2], rotateX: [4, -4, 2] }
          : { rotateY: 0, rotateX: 0 }
      }
      transition={{
        type: 'spring',
        stiffness: 40,
        damping: 15,
        duration: 6,
        repeat: Infinity,
      }}
      whileHover={tilt ? { rotateY: -12, rotateX: 6 } : {}}
    >
      {/* Outer glow/light environment */}
      <div
        className="absolute inset-0 rounded-[50px] pointer-events-none"
        style={{
          boxShadow: `
            0 0 80px rgba(255, 255, 255, 0.08),
            0 0 40px rgba(0, 0, 0, 0.3)
          `,
        }}
      />

      {/* Phone frame outer (titanium) */}
      <div
        className="relative rounded-[48px] overflow-visible"
        style={{
          width: `${width}px`,
          height: `${screenHeight + 18}px`,
        }}
      >
        {/* Titanium frame with metallic gradient */}
        <div
          className="absolute inset-0 rounded-[48px] overflow-hidden"
          style={{
            background: `linear-gradient(
              135deg,
              #3a3a3c 0%,
              #1d1d1f 25%,
              #0f0f11 50%,
              #1a1a1c 75%,
              #2d2d2f 100%
            )`,
            boxShadow: `
              /* Outer glow */
              0 20px 60px rgba(0, 0, 0, 0.6),
              0 8px 24px rgba(0, 0, 0, 0.5),
              /* Subtle top light */
              inset 0 1px 2px rgba(255, 255, 255, 0.08),
              /* Rim shadow */
              inset 0 -1px 3px rgba(0, 0, 0, 0.9)
            `,
          }}
        >
          {/* Frame inner edge highlight */}
          <div
            className="absolute inset-0 rounded-[48px] pointer-events-none"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: 'inset 0 0.5px 1px rgba(255, 255, 255, 0.12)',
            }}
          />

          {/* Screen bezel */}
          <div
            className="absolute rounded-[42px] overflow-hidden"
            style={{
              width: `${screenWidth}px`,
              height: `${screenHeight}px`,
              top: '9px',
              left: '9px',
              background: 'var(--bg)',
              boxShadow: `
                /* Screen inset shadow */
                inset 0 1px 3px rgba(0, 0, 0, 0.15),
                inset 0 0px 1px rgba(0, 0, 0, 0.5)
              `,
              border: '1px solid rgba(0, 0, 0, 0.3)',
            }}
          >
            {children}
          </div>

          {/* Dynamic Island - Premium camera module */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 rounded-full z-40"
            style={{
              width: '120px',
              height: '28px',
              top: '12px',
              background: `linear-gradient(
                180deg,
                #1a1a1c 0%,
                #0d0d0f 50%,
                #050505 100%
              )`,
              border: '1px solid rgba(255, 255, 255, 0.06)',
              boxShadow: `
                inset 0 1px 2px rgba(255, 255, 255, 0.08),
                inset 0 -2px 4px rgba(0, 0, 0, 0.95),
                0 2px 8px rgba(0, 0, 0, 0.4)
              `,
            }}
          >
            {/* Main camera lens (left) */}
            <div
              className="absolute left-5 top-1/2 transform -translate-y-1/2"
              style={{
                width: '14px',
                height: '14px',
                background: `radial-gradient(
                  circle at 35% 35%,
                  rgba(100, 100, 100, 0.3) 0%,
                  #050505 50%
                )`,
                borderRadius: '50%',
                boxShadow: `
                  inset 0 1px 3px rgba(0, 0, 0, 0.95),
                  inset -1px -1px 3px rgba(0, 0, 0, 0.8),
                  0 0 2px rgba(0, 0, 0, 0.5)
                `,
              }}
            >
              {/* Lens glass shine */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(
                    circle at 25% 25%,
                    rgba(255, 255, 255, 0.2) 0%,
                    transparent 70%
                  )`,
                }}
              />
            </div>

            {/* Secondary lens (right) */}
            <div
              className="absolute left-24 top-1/2 transform -translate-y-1/2"
              style={{
                width: '10px',
                height: '10px',
                background: `radial-gradient(
                  circle at 35% 35%,
                  rgba(80, 80, 80, 0.2) 0%,
                  #050505 50%
                )`,
                borderRadius: '50%',
                boxShadow: `
                  inset 0 1px 2px rgba(0, 0, 0, 0.95),
                  inset -1px -1px 2px rgba(0, 0, 0, 0.8)
                `,
              }}
            />
          </div>

          {/* Power Button (Right side - thicker and visible) */}
          <div
            className="absolute right-0 top-32 rounded-sm"
            style={{
              width: '4px',
              height: '36px',
              marginRight: '-2px',
              background: `linear-gradient(
                90deg,
                #3a3a3c 0%,
                #1a1a1c 50%,
                #0f0f11 100%
              )`,
              boxShadow: `
                inset -1px 0 1px rgba(255, 255, 255, 0.12),
                inset 1px 0 1px rgba(0, 0, 0, 0.8),
                0 2px 4px rgba(0, 0, 0, 0.4)
              `,
            }}
          />

          {/* Volume Up (Left side) */}
          <div
            className="absolute left-0 top-24 rounded-sm"
            style={{
              width: '4px',
              height: '28px',
              marginLeft: '-2px',
              background: `linear-gradient(
                90deg,
                #0f0f11 0%,
                #1a1a1c 50%,
                #3a3a3c 100%
              )`,
              boxShadow: `
                inset 1px 0 1px rgba(255, 255, 255, 0.12),
                inset -1px 0 1px rgba(0, 0, 0, 0.8),
                0 2px 4px rgba(0, 0, 0, 0.4)
              `,
            }}
          />

          {/* Action Button / Silent Switch (Left side) */}
          <div
            className="absolute left-0 top-56 rounded-sm"
            style={{
              width: '4px',
              height: '20px',
              marginLeft: '-2px',
              background: `linear-gradient(
                90deg,
                #0f0f11 0%,
                #1a1a1c 50%,
                #3a3a3c 100%
              )`,
              boxShadow: `
                inset 1px 0 1px rgba(255, 255, 255, 0.12),
                inset -1px 0 1px rgba(0, 0, 0, 0.8),
                0 2px 4px rgba(0, 0, 0, 0.4)
              `,
            }}
          />

          {/* Volume Down (Left side) */}
          <div
            className="absolute left-0 top-80 rounded-sm"
            style={{
              width: '4px',
              height: '28px',
              marginLeft: '-2px',
              background: `linear-gradient(
                90deg,
                #0f0f11 0%,
                #1a1a1c 50%,
                #3a3a3c 100%
              )`,
              boxShadow: `
                inset 1px 0 1px rgba(255, 255, 255, 0.12),
                inset -1px 0 1px rgba(0, 0, 0, 0.8),
                0 2px 4px rgba(0, 0, 0, 0.4)
              `,
            }}
          />

          {/* Premium glass reflection - top light */}
          <div
            className="absolute top-0 left-0 right-0 rounded-[48px] pointer-events-none"
            style={{
              height: '45%',
              background: `linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.12) 0%,
                rgba(255, 255, 255, 0.04) 25%,
                transparent 60%
              )`,
              opacity: 0.6,
            }}
          />

          {/* Glass reflection - subtle mid-light */}
          <div
            className="absolute top-1/4 left-1/4 rounded-full pointer-events-none"
            style={{
              width: '80px',
              height: '80px',
              background: `radial-gradient(
                circle at 30% 30%,
                rgba(255, 255, 255, 0.08) 0%,
                transparent 70%
              )`,
              opacity: 0.5,
            }}
          />

          {/* Glass reflection - bottom edge shine */}
          <div
            className="absolute bottom-0 left-0 right-0 rounded-[48px] pointer-events-none"
            style={{
              height: '20%',
              background: `linear-gradient(
                180deg,
                transparent 0%,
                rgba(255, 255, 255, 0.04) 100%
              )`,
              opacity: 0.4,
            }}
          />
        </div>
      </div>

      {/* Cast shadow for depth */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: '120px',
          transform: 'translateY(100%)',
          background: `radial-gradient(
            ellipse 60% 40% at 50% 0%,
            rgba(0, 0, 0, 0.2) 0%,
            transparent 70%
          )`,
          borderRadius: '50%',
        }}
      />
    </motion.div>
  );
}
