'use client';

export default function PhoneMockup({
  width = 300,
  children,
  className = '',
  flat = false,
  interactive = false,
}) {
  const frameThickness = 10;
  const cornerRadius = 48;
  const screenWidth = width - frameThickness * 2;
  const screenHeight = (screenWidth / 9) * 19.5;
  const totalHeight = screenHeight + frameThickness * 2;

  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{ width: `${width}px` }}
    >
      {/* Phone body */}
      <div
        className="relative"
        style={{
          width: `${width}px`,
          height: `${totalHeight}px`,
        }}
      >
        {/* ===== PHONE FRAME - Realistic bezel ===== */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            borderRadius: `${cornerRadius}px`,
            background: `linear-gradient(
              160deg,
              #e0deda 0%,
              #cccac7 6%,
              #b8b5b2 14%,
              #a8a5a1 25%,
              #9a9794 40%,
              #8a8784 55%,
              #9a9794 68%,
              #a8a5a1 78%,
              #b8b5b2 88%,
              #d0cecc 95%,
              #e0deda 100%
            )`,
            boxShadow: `
              0 25px 60px rgba(0, 0, 0, 0.25),
              0 12px 28px rgba(0, 0, 0, 0.18),
              0 4px 12px rgba(0, 0, 0, 0.12),
              inset 0 1px 2px rgba(255, 255, 255, 0.5),
              inset 0 -1px 2px rgba(0, 0, 0, 0.15)
            `,
          }}
        >
          {/* Outer bevel - light highlight */}
          <div
            className="absolute inset-[0.5px] pointer-events-none"
            style={{
              borderRadius: `${cornerRadius - 0.5}px`,
              border: '1px solid rgba(255, 255, 255, 0.4)',
            }}
          />

          {/* Inner bevel - subtle dark edge around screen cutout */}
          <div
            className="absolute pointer-events-none"
            style={{
              borderRadius: `${cornerRadius - frameThickness + 3}px`,
              top: `${frameThickness - 1}px`,
              left: `${frameThickness - 1}px`,
              right: `${frameThickness - 1}px`,
              bottom: `${frameThickness - 1}px`,
              boxShadow: `
                inset 0 2px 4px rgba(0, 0, 0, 0.2),
                inset 0 0 2px rgba(0, 0, 0, 0.15)
              `,
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
                inset 0 2px 6px rgba(0, 0, 0, 0.4),
                inset 0 0 2px rgba(0, 0, 0, 0.8)
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
              width: '105px',
              height: '32px',
              top: `${frameThickness + 2}px`,
              background: '#000',
              boxShadow: 'inset 0 1px 3px rgba(255, 255, 255, 0.04), 0 1px 3px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Camera lens */}
            <div
              className="absolute right-5 top-1/2 -translate-y-1/2"
              style={{
                width: '11px',
                height: '11px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, rgba(60,60,80,0.4) 0%, #0a0a0c 60%)',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,0.3)',
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12) 0%, transparent 60%)',
                }}
              />
            </div>
          </div>

          {/* ===== SIDE BUTTONS ===== */}
          {/* Power button (right) */}
          <div
            className="absolute"
            style={{
              right: '-3px',
              top: '115px',
              width: '4px',
              height: '34px',
              background: 'linear-gradient(90deg, #c0bdb9 0%, #a8a5a1 40%, #908d8a 100%)',
              borderRadius: '0 2px 2px 0',
              boxShadow: '1px 0 2px rgba(0,0,0,0.2), inset -1px 0 1px rgba(255,255,255,0.25)',
            }}
          />

          {/* Volume buttons (left) */}
          <div
            className="absolute"
            style={{
              left: '-3px',
              top: '98px',
              width: '4px',
              height: '28px',
              background: 'linear-gradient(90deg, #908d8a 0%, #a8a5a1 60%, #c0bdb9 100%)',
              borderRadius: '2px 0 0 2px',
              boxShadow: '-1px 0 2px rgba(0,0,0,0.2), inset 1px 0 1px rgba(255,255,255,0.25)',
            }}
          />
          <div
            className="absolute"
            style={{
              left: '-3px',
              top: '136px',
              width: '4px',
              height: '28px',
              background: 'linear-gradient(90deg, #908d8a 0%, #a8a5a1 60%, #c0bdb9 100%)',
              borderRadius: '2px 0 0 2px',
              boxShadow: '-1px 0 2px rgba(0,0,0,0.2), inset 1px 0 1px rgba(255,255,255,0.25)',
            }}
          />

          {/* ===== GLASS REFLECTION ===== */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: '45%',
              borderRadius: `${cornerRadius}px ${cornerRadius}px 0 0`,
              background: `linear-gradient(
                160deg,
                rgba(255, 255, 255, 0.3) 0%,
                rgba(255, 255, 255, 0.1) 25%,
                transparent 50%
              )`,
              opacity: 0.6,
            }}
          />
        </div>
      </div>
    </div>
  );
}
