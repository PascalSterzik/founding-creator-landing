'use client';

/**
 * Inline "Influbook" with logo styling (Cormorant Garamond, "Influ" bold + "book" italic accent)
 * Use this wherever "Influbook" appears in body copy.
 */
export default function InflubookLogo({ size = 'inherit', className = '' }) {
  return (
    <span className={className} style={{ whiteSpace: 'nowrap' }}>
      <span
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: '700',
          fontSize: size,
        }}
      >
        Influ
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
        book
      </span>
    </span>
  );
}
