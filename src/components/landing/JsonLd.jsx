const JsonLd = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was bedeutet Founding Creator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Founding Creator sind die ersten Creator im CreatorBridge System. Du gehörst zu einer exklusiven Gruppe von maximal 100 Creators, die von Anfang an dabei sind. Es gibt 3 Tiers: Founding 10 (die ersten 10), Founding 50 (die nächsten 40) und Founding 100 (die letzten 50). Jeder Tier hat unterschiedliche Bonus-Vorteile.',
        },
      },
      {
        '@type': 'Question',
        name: 'Brauche ich eine große Reichweite?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nein. Micro-Creator, Nano-Creator, alle sind willkommen. Die Idee dahinter: Brands suchen nicht nur Mega-Influencer. Sie suchen eng verbundene Communities und echte Engagement. Wenn deine Audience loyal ist, bist du interessant.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was ist der größte Vorteil?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Du musst nicht mehr selbst Brands anschreiben. Keine Rejection mehr. CreatorBridge kennt deine Nische, deine Reichweite, deine Availability und matched dich mit Brands, die exakt zu dir passen. Brands kommen zu dir, nicht umgekehrt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Muss ich selbst weiter Akquise machen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nein. Das System übernimmt das. Dein Job: Content erstellen. CreatorBridge matched, negotiiert (faire Konditionen), klärt die Technik. Du focusst auf das, was du kannst.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was passiert nach meiner Bewerbung?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wenn deine Bewerbung akzeptiert wird, kriegst du einen Calendly-Link für einen 30-Minuten-Call mit unserem Team. Im Call: Wir lernen dich kennen, du lernst das System kennen, und wir klären alle Open Questions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ist ein Platz garantiert?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nein, leider nicht. Es sind begrenzt 100 Plätze, first come first served. Wenn die voll sind, voll sind sie. Deshalb: Wenn du Interesse hast, bewirb dich jetzt, nicht nächste Woche.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was passiert im Call?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ganz entspannt, 30 Minuten, kein Sales Pitch. Wir quatschen über dich, deine Nische, deine Ziele mit Brand Deals. Du fragst uns aus über das System, die Chancen, wie es funktioniert. Am Ende: Wir sagen dir, ob es passt und wie es weitergeht.',
        },
      },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'CreatorBridge: Founding Creator Program',
    description:
      'Sei einer der ersten Creator in CreatorBridge. Exklusive Founding-Vorteile für nur 100 Creator.',
    url: 'https://creatorbridge.de',
    publisher: {
      '@type': 'Organization',
      name: 'Platri IT GmbH',
      logo: {
        '@type': 'ImageObject',
        url: 'https://creatorbridge.de/logo.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
};

export default JsonLd;
