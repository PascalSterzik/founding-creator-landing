'use client';

export default function PhoneMockup({
  width = 300,
  children,
  className = '',
  flat = false,
  interactive = false,
}) {
  const frameThickness = 12;
  const cornerRadius = 50;
  const screenWidth = width - frameThickness * 2;
  const screenHeight = (screenWidth / 9) * 19.5;
  const totalHeight = screenHeight + frameThickness * 2;

  // More dramatic 3D tilt for hero
  const rotY = 14;
  const rotX = -5;
  const rightEdgeWidth = 16;
  const bottomEdgeHeight = 8;

  const tiltStyle = flat
    ? {}
    : {
        transform: `rotateY(${rotY}deg) rotateX(${rotX}deg)`,
        transformStyle: 'preserve-3d',
      };

  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{
        width: `${width + (flat ? 0 : rightEdgeWidth)}px`,
        perspective: '1000px',
      }}
    >
      {/* Ambient glow behind phone */}
      {!flat && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            transform: 'scale(1.3) translateY(10%)',
            background:
              'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201, 140, 131, 0.3), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      )}

      {/* 3D Phone wrapper */}
      <div
        className="relative"
        style={{
          width: `${width}px`,
          height: `${totalHeight}px`,
          ...tiltStyle,
        }}
      >
        {/* ===== RIGHT EDGE (visible due to Y rotation) ===== */}
        {!flat && (
          <div
            className="absolute pointer-events-none"
            style={{
              right: `-${rightEdgeWidth}px`,
              top: `${cornerRadius / 2}px`,
              bottom: `${cornerRadius / 2}px`,
              width: `${rightEdgeWidth}px`,
              background: `linear-gradient(
                180deg,
                #b0ada9 0%,
                #8a8784 8%,
                #6d6a67 15%,
                #5a5754 25%,
                #4d4a47 40%,
                #5a5754 55%,
                #6d6a67 70%,
                #8a8784 85%,
                #b0ada9 100%
              )`,
              borderRadius: `0 ${rightEdgeWidth / 2}px ${rightEdgeWidth / 2}px 0`,
              transformOrigin: 'left center',
              transform: 'rotateY(90deg) translateX(-1px)',
              boxShadow: `
                inset -3px 0 6px rgba(255, 255, 255, 0.12),
                inset 3px 0 5px rgba(0, 0, 0, 0.4),
                4px 0 12px rgba(0, 0, 0, 0.3)
              `,
            }}
          >
            {/* Metallic highlight stripe */}
            <div
              className="absolute pointer-events-none"
              style={{
                left: '2px',
                top: '10%',
                bottom: '10%',
                width: '2px',
                background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.25) 30%, rgba(255,255,255,0.1) 70%, transparent 100%)',
                borderRadius: '1px',
              }}
            />
          </div>
        )}

        {/* ===== BOTTOM EDGE (visible due to X rotation) ===== */}
        {!flat && (
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: `-${bottomEdgeHeight}px`,
              left: `${cornerRadius / 2}px`,
              right: `${cornerRadius / 2}px`,
              height: `${bottomEdgeHeight}px`,
              background: `linear-gradient(
                90deg,
                #b0ada9 0%,
                #7a7774 15%,
                #5a5754 30%,
                #4d4a47 50%,
                #5a5754 70%,
                #7a7774 85%,
                #b0ada9 100%
              )`,
              borderRadius: `0 0 ${bottomEdgeHeight / 2}px ${bottomEdgeHeight / 2}px`,
              transformOrigin: 'center top',
              transform: 'rotateX(-90deg)',
              boxShadow: `
                inset 0 -3px 5px rgba(255, 255, 255, 0.08),
                inset 0 3px 4px rgba(0, 0, 0, 0.35),
                0 6px 16px rgba(0, 0, 0, 0.2)
              `,
            }}
          />
        )}

        {/* ===== PHONE FRAME ===== */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            borderRadius: `${cornerRadius}px`,
            background: `linear-gradient(
              145deg,
              #d8d5d2 0%,
              #c4c1be 5%,
              #a8a5a1 12%,
              #8a8784 25%,
              #706d6a 40%,
              #5a5754 55%,
              #706d6a 65%,
              #8a8784 75%,
              #a8a5a1 85%,
              #c4c1be 93%,
              #d8d5d2 100%
            )`,
            boxShadow: flat
              ? '0 20px 40px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.15)'
              : `
              0 60px 120px rgba(0, 0, 0, 0.4),
              0 30px 60px rgba(0, 0, 0, 0.3),
              0 10px 25px rgba(0, 0, 0, 0.25),
              inset 0 1px 3px rgba(255, 255, 255, 0.5),
              inset 0 -1px 3px rgba(0, 0, 0, 0.25)
            `,
          }}
        >
          {/* Inner bevel highlight */}
          <div
            className="absolute inset-[1px] pointer-events-none"
            style={{
              borderRadius: `${cornerRadius - 1}px`,
              border: '1px solid rgba(255, 255, 255, 0.35)',
            }}
          />

          {/* Second inner bevel (dark) */}
          <div
            className="absolute inset-[2px] pointer-events-none"
            style={{
              borderRadius: `${cornerRadius - 2}px`,
              border: '1px solid rgba(0, 0, 0, 0.1)',
            }}
          />

          {/* ===== SCREEN AREA ===== */}
          <div
            className="absolute overflow-hidden"
            style={{
              borderRadius: `${cornerRadius - frameThickness + 2}px`,
              width: `${screenWidth}px`,
              height: `${screenHeight}px`,
              top: `${frameThickness}px`,
              left: `${frameThickness}px`,
              background: '#000',
              boxShadow: `
                inset 0 3px 8px rgba(0, 0, 0, 0.5),
                inset 0 0 3px rgba(0, 0, 0, 0.9)
              `,
            }}
          >
            {/* Screen content */}
            <div
              className="w-full h-full overflow-hidden"
              style={{
                background: 'var(--bg)',
                pointerEvents: interactive ? 'auto' : 'none',
              }}
            >
              {children}
            </div>
          </div>

          {/* ===== DYNAMIC ISLAND ===== */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 rounded-full z-40"
            style={{
              width: '110px',
              height: '34px',
              top: `${frameThickness + 2}px`,
              background: '#000',
              boxShadow: `
                inset 0 1px 3px rgba(255, 255, 255, 0.05),
                0 1px 4px rgba(0, 0, 0, 0.4)
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

          {/* ===== SIDE BUTTONS ===== */}
          {/* Power button (right) */}
          <div
            className="absolute"
            style={{
              right: '-4px',
              top: '120px',
              width: '5px',
              height: '36px',
              background:
                'linear-gradient(90deg, #c0bdb9 0%, #a8a5a1 40%, #8a8784 100%)',
              borderRadius: '0 3px 3px 0',
              boxShadow:
                '2px 0 3px rgba(0,0,0,0.25), inset -1px 0 1px rgba(255,255,255,0.3)',
            }}
          />

          {/* Volume buttons (left) */}
          <div
            className="absolute"
            style={{
              left: '-4px',
              top: '100px',
              width: '5px',
              height: '30px',
              background:
                'linear-gradient(90deg, #8a8784 0%, #a8a5a1 60%, #c0bdb9 100%)',
              borderRadius: '3px 0 0 3px',
              boxShadow:
                '-2px 0 3px rgba(0,0,0,0.25), inset 1px 0 1px rgba(255,255,255,0.3)',
            }}
          />
          <div
            className="absolute"
            style={{
              left: '-4px',
              top: '142px',
              width: '5px',
              height: '30px',
              background:
                'linear-gradient(90deg, #8a8784 0%, #a8a5a1 60%, #c0bdb9 100%)',
              borderRadius: '3px 0 0 3px',
              boxShadow:
                '-2px 0 3px rgba(0,0,0,0.25), inset 1px 0 1px rgba(255,255,255,0.3)',
            }}
          />

          {/* ===== GLASS REFLECTIONS ===== */}
          {/* Top diagonal reflection */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: '50%',
              borderRadius: `${cornerRadius}px ${cornerRadius}px 0 0`,
              background: `linear-gradient(
                155deg,
                rgba(255, 255, 255, 0.4) 0%,
                rgba(255, 255, 255, 0.15) 25%,
                transparent 55%
              )`,
              opacity: 0.8,
            }}
          />

          {/* Bottom reflection */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '12%',
              borderRadius: `0 0 ${cornerRadius}px ${cornerRadius}px`,
              background:
                'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.06) 100%)',
            }}
          />
        </div>
      </div>

      {/* Drop shadow on ground */}
      {!flat && (
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: '100px',
            transform: 'translateY(90%) scaleX(0.7)',
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,0,0,0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(10px)',
          }}
        />
      )}
    </div>
  );
}
