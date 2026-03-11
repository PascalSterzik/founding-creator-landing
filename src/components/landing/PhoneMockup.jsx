'use client';

/*
 * PhoneMockup — uses a real phone frame image (transparent PNG/AVIF overlay).
 * Screen content renders behind it, positioned to match the frame's screen hole.
 *
 * Image: 1015 × 2048 px, RGBA with transparent screen area.
 * Screen hole (straight edges): x 70–947, y ~150–~1900
 * Screen hole corners: ~100px radius in image coordinates
 */

// Screen insets as percentages of the full image dimensions
const IMG_W = 1015;
const IMG_H = 2048;
// Pull screen inward a bit more to stay safely inside the frame's rounded corners
const SCREEN = { left: 72, top: 72, right: 945, bottom: 1976 };

const INSET_LEFT   = (SCREEN.left / IMG_W) * 100;
const INSET_TOP    = (SCREEN.top / IMG_H) * 100;
const INSET_RIGHT  = ((IMG_W - SCREEN.right) / IMG_W) * 100;
const INSET_BOTTOM = ((IMG_H - SCREEN.bottom) / IMG_H) * 100;

// Corner radius of the screen hole: ~100px in image coords
const CORNER_RADIUS_RATIO = 100 / IMG_W; // ~0.0985

export default function PhoneMockup({
  width = 300,
  children,
  className = '',
  flat = false,
  interactive = false,
}) {
  const height = width * (IMG_H / IMG_W);
  const screenCornerRadius = width * CORNER_RADIUS_RATIO;
  // Outer frame corner radius (for clipping during 3D transforms)
  const outerRadius = width * 0.058;

  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        /* Clip the entire phone during 3D animations so no background leaks */
        overflow: 'hidden',
        borderRadius: `${outerRadius}px`,
        /* Use filter drop-shadow instead of a background div */
        filter: `
          drop-shadow(0 25px 50px rgba(0, 0, 0, 0.22))
          drop-shadow(0 10px 24px rgba(0, 0, 0, 0.15))
        `,
      }}
    >
      {/* ===== SCREEN CONTENT (behind frame) ===== */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: `${INSET_LEFT}%`,
          top: `${INSET_TOP}%`,
          right: `${INSET_RIGHT}%`,
          bottom: `${INSET_BOTTOM}%`,
          borderRadius: `${screenCornerRadius}px`,
          background: '#000',
        }}
      >
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

      {/* ===== FRAME IMAGE OVERLAY ===== */}
      <picture className="absolute inset-0 pointer-events-none z-10">
        <source srcSet="/images/phone-frame.avif" type="image/avif" />
        <img
          src="/images/phone-frame.png"
          alt=""
          className="w-full h-full object-contain"
          draggable={false}
        />
      </picture>

      {/* ===== DYNAMIC ISLAND / CAMERA ===== */}
      <div
        className="absolute z-20 pointer-events-none"
        style={{
          top: `${(SCREEN.top / IMG_H) * 100 + 0.6}%`,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {/* Dynamic Island pill */}
        <div
          style={{
            width: `${width * 0.27}px`,
            height: `${width * 0.065}px`,
            borderRadius: '100px',
            background: '#000',
            position: 'relative',
            boxShadow: '0 0 0 1px rgba(0,0,0,0.15)',
          }}
        >
          {/* Front camera lens */}
          <div
            style={{
              position: 'absolute',
              right: `${width * 0.028}px`,
              top: '50%',
              transform: 'translateY(-50%)',
              width: `${width * 0.03}px`,
              height: `${width * 0.03}px`,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 40% 35%, #2a2a3e 0%, #0a0a12 60%, #000 100%)',
              boxShadow: 'inset 0 0.5px 1px rgba(255,255,255,0.08), 0 0 0 0.5px rgba(255,255,255,0.05)',
            }}
          >
            {/* Lens reflection */}
            <div
              style={{
                position: 'absolute',
                top: '20%',
                left: '25%',
                width: '35%',
                height: '35%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(80,100,180,0.5) 0%, transparent 70%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
