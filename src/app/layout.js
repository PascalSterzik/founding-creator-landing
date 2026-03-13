import './globals.css'

export const metadata = {
  title: 'Influbook — Founding Creator Bewerbung',
  description: 'Bewirb dich als einer der ersten Founding Creator bei Influbook. Strukturierte Brand Deals, von Creator für Creator. Die ersten 50 erhalten exklusive Vorteile.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Influbook — Founding Creator Bewerbung',
    description: 'Strukturierte Brand Deals, von Creator für Creator.',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://founding-creator-landing.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Influbook — Founding Creator Programm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influbook — Founding Creator Bewerbung',
    description: 'Strukturierte Brand Deals, von Creator für Creator.',
    images: ['https://founding-creator-landing.vercel.app/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
