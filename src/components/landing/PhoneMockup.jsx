'use client';

/*
 * PhoneMockup — uses a real phone frame image (transparent PNG/AVIF overlay).
 * Screen content renders behind it, positioned to match the frame's screen hole.
 *
 * Image: 1015 × 2048 px, RGBA with transparent screen area.
 * Screen hole measured at: x 70–947, y 70–1978 (in image pixels).
 */

// Screen insets as percentages of the full image dimensions
const IMG_W = 1015;
const IMG_H = 2048;
const SCREEN = { left: 70, top: 70, right: 947, bottom: 1978 };

const INSET_LEFT   = (SCREEN.left / IMG_W) * 100;           // ~6.9%
const INSET_TOP    = (SCREEN.top / IMG_H) * 100;            // ~3.4%
const INSET_RIGHT  = ((IMG_W - SCREEN.right) / IMG_W) * 100; // ~6.7%
const INSET_BOTTOM = ((IMG_H - SCREEN.bottom) / IMG_H) * 100; // ~3.4%

export default function PhoneMockup({
  width = 300,
  children,
  className = '',
  flat = false,
  interactive = false,
}) {
  const height = width * (IMG_H / IMG_W);

  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
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
          borderRadius: `${width * 0.038}px`,
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

      {/* ===== DROP SHADOW (behind everything) ===== */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          borderRadius: `${width * 0.05}px`,
          boxShadow: `
            0 25px 60px rgba(0, 0, 0, 0.25),
            0 12px 30px rgba(0, 0, 0, 0.18),
            0 4px 12px rgba(0, 0, 0, 0.12)
          `,
        }}
      />
    </div>
  );
}
