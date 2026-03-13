'use client';

import FadeIn from '@/components/motion/FadeIn';

export default function SocialProofBar() {
  const stats = [
    {
      number: '92%',
      label: 'der Brands investieren mehr in Creator',
    },
    {
      number: '480 Mrd. $',
      label: 'Creator Economy bis 2027',
    },
    {
      number: '50',
      label: 'Founding-Bonusplätze',
    },
  ];

  return (
    <FadeIn>
      <div
        style={{
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
        className="py-12 md:py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                style={{
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.75rem',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  marginBottom: '0.75rem',
                }}
              >
                {stat.number}
              </div>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  maxWidth: '280px',
                  margin: '0 auto',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
