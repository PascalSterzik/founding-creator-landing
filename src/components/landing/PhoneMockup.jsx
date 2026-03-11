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

  // Button dimensions - visibly protruding
  const btnProtrude = 6;   // how far buttons stick out from frame
  const btnWidth = 4;      // thickness of each button
  const btnRadius = 3;

  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{ width: `${width + btnProtrude * 2}px`, padding: `0 ${btnProtrude}px` }}
    >
      {/* Phone body */}
      <div
        className="relative"
        style={{
          width: `${width}px`,
          height: `${totalHeight}px`,
          margin: '0 auto',
        }}
      >
        {/* ===== PHONE FRAME - Realistic titanium bezel ===== */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            borderRadius: `${cornerRadius}px`,
            background: `linear-gradient(
              160deg,
              #e8e6e3 0%,
              #d4d2cf 5%,
              #c0bdb9 12%,
              #b0ada9 22%,
              #9e9b97 38%,
              #8e8b87 52%,
              #9e9b97 65%,
              #b0ada9 76%,
              #c0bdb9 86%,
              #d4d2cf 94%,
              #e8e6e3 100%
            )`,
            boxShadow: `
              0 30px 70px rgba(0, 0, 0, 0.28),
              0 15px 35px rgba(0, 0, 0, 0.2),
              0 5px 15px rgba(0, 0, 0, 0.14),
              inset 0 1px 3px rgba(255, 255, 255, 0.6),
              inset 0 -1px 3px rgba(0, 0, 0, 0.18)
            `,
          }}
        >
          {/* Outer bevel - light highlight */}
          <div
            className="absolute inset-[0.5px] pointer-events-none"
            style={{
              borderRadius: `${cornerRadius - 0.5}px`,
              border: '1px solid rgba(255, 255, 255, 0.45)',
            }}
          />

          {/* Inner bevel - dark edge around screen cutout */}
          <div
            className="absolute pointer-events-none"
            style={{
              borderRadius: `${cornerRadius - frameThickness + 3}px`,
              top: `${frameThickness - 1.5}px`,
              left: `${frameThickness - 1.5}px`,
              right: `${frameThickness - 1.5}px`,
              bottom: `${frameThickness - 1.5}px`,
              boxShadow: `
                inset 0 2px 5px rgba(0, 0, 0, 0.25),
                inset 0 0 3px rgba(0, 0, 0, 0.2)
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
                inset 0 2px 6px rgba(0, 0, 0, 0.5),
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
              boxShadow: 'inset 0 1px 3px rgba(255, 255, 255, 0.04), 0 1px 3px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Camera lens */}
            <div
              className="absolute right-5 top-1/2 -translate-y-1/2"
              style={{
                width: '12px',
                height: '12px',
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

        {/* ===== SIDE BUTTONS - Protruding outside frame ===== */}
        {/* Power button (right side) - single long button */}
        <div
          className="absolute"
          style={{
            right: `-${btnProtrude}px`,
            top: '120px',
            width: `${btnProtrude + btnWidth}px`,
            height: '42px',
            background: `linear-gradient(90deg,
              #b8b5b2 0%,
              #d0cecc 20%,
              #e0deda 40%,
              #c8c5c2 60%,
              #a8a5a1 80%,
              #9a9794 100%
            )`,
            borderRadius: `0 ${btnRadius}px ${btnRadius}px 0`,
            boxShadow: `
              2px 0 4px rgba(0,0,0,0.2),
              1px 0 2px rgba(0,0,0,0.15),
              inset 0 1px 1px rgba(255,255,255,0.4),
              inset 0 -1px 1px rgba(0,0,0,0.1)
            `,
            zIndex: 50,
          }}
        >
          {/* Button highlight stripe */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: `0 ${btnRadius}px ${btnRadius}px 0`,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 40%, rgba(0,0,0,0.08) 100%)',
            }}
          />
        </div>

        {/* Silent/Action switch (left side, small) */}
        <div
          className="absolute"
          style={{
            left: `-${btnProtrude}px`,
            top: '90px',
            width: `${btnProtrude + btnWidth}px`,
            height: '18px',
            background: `linear-gradient(90deg,
              #9a9794 0%,
              #a8a5a1 20%,
              #c0bdb9 40%,
              #d0cecc 60%,
              #b8b5b2 80%,
              #b0ada9 100%
            )`,
            borderRadius: `${btnRadius}px 0 0 ${btnRadius}px`,
            boxShadow: `
              -2px 0 4px rgba(0,0,0,0.2),
              -1px 0 2px rgba(0,0,0,0.15),
              inset 0 1px 1px rgba(255,255,255,0.4),
              inset 0 -1px 1px rgba(0,0,0,0.1)
            `,
            zIndex: 50,
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: `${btnRadius}px 0 0 ${btnRadius}px`,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 40%, rgba(0,0,0,0.08) 100%)',
            }}
          />
        </div>

        {/* Volume Up button (left side) */}
        <div
          className="absolute"
          style={{
            left: `-${btnProtrude}px`,
            top: '128px',
            width: `${btnProtrude + btnWidth}px`,
            height: '36px',
            background: `linear-gradient(90deg,
              #9a9794 0%,
              #a8a5a1 20%,
              #c0bdb9 40%,
              #d0cecc 60%,
              #b8b5b2 80%,
              #b0ada9 100%
            )`,
            borderRadius: `${btnRadius}px 0 0 ${btnRadius}px`,
            boxShadow: `
              -2px 0 4px rgba(0,0,0,0.2),
              -1px 0 2px rgba(0,0,0,0.15),
              inset 0 1px 1px rgba(255,255,255,0.4),
              inset 0 -1px 1px rgba(0,0,0,0.1)
            `,
            zIndex: 50,
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: `${btnRadius}px 0 0 ${btnRadius}px`,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 40%, rgba(0,0,0,0.08) 100%)',
            }}
          />
        </div>

        {/* Volume Down button (left side) */}
        <div
          className="absolute"
          style={{
            left: `-${btnProtrude}px`,
            top: '174px',
            width: `${btnProtrude + btnWidth}px`,
            height: '36px',
            background: `linear-gradient(90deg,
              #9a9794 0%,
              #a8a5a1 20%,
              #c0bdb9 40%,
              #d0cecc 60%,
              #b8b5b2 80%,
              #b0ada9 100%
            )`,
            borderRadius: `${btnRadius}px 0 0 ${btnRadius}px`,
            boxShadow: `
              -2px 0 4px rgba(0,0,0,0.2),
              -1px 0 2px rgba(0,0,0,0.15),
              inset 0 1px 1px rgba(255,255,255,0.4),
              inset 0 -1px 1px rgba(0,0,0,0.1)
            `,
            zIndex: 50,
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: `${btnRadius}px 0 0 ${btnRadius}px`,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 40%, rgba(0,0,0,0.08) 100%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
