'use client';

/**
 * Inline "CreatorBridge" with logo styling (Cormorant Garamond, "Creator" bold + "Bridge" italic accent)
 * Use this wherever "CreatorBridge" appears in body copy.
 */
export default function CreatorBridgeLogo({ size = 'inherit', className = '' }) {
  return (
    <span className={className} style={{ whiteSpace: 'nowrap' }}>
      <span
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: '700',
          fontSize: size,
        }}
      >
        Creator
      </span>
      <span
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: 'var(--accent)',
          fontStyle: 'italic',
          fontWeight: '600',
          fontSize: size,
        }}
      >
        Bridge
      </span>
    </span>
  );
}
