const brand = {
  business: {
    name: 'CreatorBridge',
    tagline: 'Founding Creator Bewerbung',
    description: 'Bewirb dich als einer der ersten Founding Creator bei CreatorBridge. Strukturierte Brand Deals, von Creator für Creator.',
    phone: null,
    email: null,
    website: 'https://creatorbridge.io',
  },

  colors: {
    primary: '#C98C83',
    primaryDark: '#B87A71',
    primaryLight: '#DCA39B',
    secondary: '#4B322D',
    accent: '#E6C9A8',
    dark: '#2E1D19',
    light: '#FDFAF9',
    muted: '#9A8480',
    // Extended palette
    bg: '#FDFAF9',
    bgWarm: '#F5EAEA',
    bgIvory: '#FCF7F4',
    text: '#3A2520',
    textSecondary: '#6B5650',
    textMuted: '#9A8480',
    gold: '#E6C9A8',
    goldDark: '#C5A47F',
    cocoa: '#4B322D',
    cocoaDeep: '#2E1D19',
    white: '#FFFFFF',
  },

  fonts: {
    heading: 'Cormorant Garamond',
    headingFallback: ['Georgia', 'serif'],
    body: 'DM Sans',
    bodyFallback: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
    url: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
  },

  style: {
    borderRadius: '20px',
    animations: true,
  },

  images: {
    logo: null,
    logoText: true,
    hero: { style: 'split', priority: true },
    ogImage: null,
  },

  seo: {
    title: 'CreatorBridge — Founding Creator Bewerbung',
    description: 'Bewirb dich als einer der ersten Founding Creator bei CreatorBridge. Strukturierte Brand Deals, von Creator für Creator. Die ersten 100 erhalten exklusive Vorteile.',
    locale: 'de_DE',
    language: 'de',
  },

  schema: {
    type: 'WebPage',
  },
}

module.exports = brand
