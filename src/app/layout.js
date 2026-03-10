import './globals.css'

export const metadata = {
  title: 'CreatorBridge — Founding Creator Bewerbung',
  description: 'Bewirb dich als einer der ersten Founding Creator bei CreatorBridge. Strukturierte Brand Deals, von Creator für Creator. Die ersten 100 erhalten exklusive Vorteile.',
  openGraph: {
    title: 'CreatorBridge — Founding Creator Bewerbung',
    description: 'Strukturierte Brand Deals, von Creator für Creator.',
    locale: 'de_DE',
    type: 'website',
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
