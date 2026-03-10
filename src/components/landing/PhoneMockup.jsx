'use client';

export default function PhoneMockup({
  width = 300,
  children,
  className = '',
  flat = false,
}) {
  const screenWidth = width - 16;
  const screenHeight = (screenWidth / 9) * 19.5;

  // 3D tilt: tilted left and upward so screen faces top-left
  const tiltStyle = flat
    ? {}
    : {
        transform: 'rotateY(8deg) rotateX(-4deg)',
        transformStyle: 'preserve-3d',
      };

  // Side edge thickness for 3D depth
  const edgeThickness = flat ? 0 : 8;

  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{
        width: `${width + edgeThickness}px`,
        perspective: '1200px',
      }}
    >
      {/* Ambient glow behind phone */}
      {!flat && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            transform: 'scale(1.2) translateY(8%)',
            background:
              'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201, 140, 131, 0.25), transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
      )}

      {/* 3D Phone wrapper */}
      <div
        className="relative"
        style={{
          width: `${width}px`,
          height: `${screenHeight + 16}px`,
          ...tiltStyle,
        }}
      >
        {/* Right edge (visible due to Y rotation) */}
        {!flat && (
          <div
            className="absolute pointer-events-none"
            style={{
              right: `-${edgeThickness}px`,
              top: '8px',
              bottom: '8px',
              width: `${edgeThickness}px`,
              background: `linear-gradient(
                180deg,
                #7a7774 0%,
                #5a5754 15%,
                #6d6a67 30%,
                #5a5754 50%,
                #6d6a67 70%,
                #5a5754 85%,
                #7a7774 100%
              )`,
              borderRadius: `0 ${edgeThickness / 2}px ${edgeThickness / 2}px 0`,
              transform: 'translateZ(-4px)',
              boxShadow: `
                inset -2px 0 4px rgba(255, 255, 255, 0.08),
                inset 2px 0 3px rgba(0, 0, 0, 0.3),
                2px 0 8px rgba(0, 0, 0, 0.2)
              `,
            }}
          />
        )}

        {/* Bottom edge (visible due to X rotation) */}
        {!flat && (
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: `-${edgeThickness - 2}px`,
              left: '20px',
              right: '20px',
              height: `${edgeThickness - 2}px`,
              background: `linear-gradient(
                90deg,
                #7a7774 0%,
                #5a5754 20%,
                #6d6a67 50%,
                #5a5754 80%,
                #7a7774 100%
              )`,
              borderRadius: `0 0 ${edgeThickness / 2}px ${edgeThickness / 2}px`,
              transform: 'translateZ(-4px)',
              boxShadow: `
                inset 0 -2px 4px rgba(255, 255, 255, 0.06),
                inset 0 2px 3px rgba(0, 0, 0, 0.3),
                0 4px 12px rgba(0, 0, 0, 0.15)
              `,
            }}
          />
        )}

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
            boxShadow: flat
              ? '0 20px 40px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.15)'
              : `
              0 50px 100px rgba(0, 0, 0, 0.35),
              0 20px 50px rgba(0, 0, 0, 0.25),
              0 8px 20px rgba(0, 0, 0, 0.2),
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
                background:
                  'radial-gradient(circle at 35% 35%, rgba(60,60,80,0.4) 0%, #0a0a0c 60%)',
                boxShadow:
                  'inset 0 1px 2px rgba(0,0,0,0.9), 0 0 3px rgba(0,0,0,0.4)',
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 60%)',
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
              background:
                'linear-gradient(90deg, #c0bdb9 0%, #a8a5a1 50%, #8a8784 100%)',
              borderRadius: '0 2px 2px 0',
              boxShadow:
                '1px 0 2px rgba(0,0,0,0.2), inset -1px 0 1px rgba(255,255,255,0.3)',
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
              background:
                'linear-gradient(90deg, #8a8784 0%, #a8a5a1 50%, #c0bdb9 100%)',
              borderRadius: '2px 0 0 2px',
              boxShadow:
                '-1px 0 2px rgba(0,0,0,0.2), inset 1px 0 1px rgba(255,255,255,0.3)',
            }}
          />
          <div
            className="absolute rounded-sm"
            style={{
              left: '-3px',
              top: '140px',
              width: '4px',
              height: '28px',
              background:
                'linear-gradient(90deg, #8a8784 0%, #a8a5a1 50%, #c0bdb9 100%)',
              borderRadius: '2px 0 0 2px',
              boxShadow:
                '-1px 0 2px rgba(0,0,0,0.2), inset 1px 0 1px rgba(255,255,255,0.3)',
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
              background:
                'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.08) 100%)',
            }}
          />
        </div>
      </div>

      {/* Drop shadow */}
      {!flat && (
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: '80px',
            transform: 'translateY(80%) scaleX(0.75)',
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,0,0,0.18) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(8px)',
          }}
        />
      )}
    </div>
  );
}
