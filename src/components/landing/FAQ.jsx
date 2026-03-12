'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Was bedeutet Founding Creator?',
      answer:
        'Founding Creator sind die ersten 50 Creator im CreatorBridge System. Du gehörst zu einer exklusiven Gruppe, die von Anfang an dabei ist und bekommst den vollen Founding-Bonus: Deine ersten 3 Kooperationen werden komplett kostenlos vermittelt, du erhältst persönliches Onboarding mit dem Gründerteam, höchste Matching-Priorität bei Brand Deals, direkten Draht zum Founder, Early Access zu neuen Features, einen Lifetime Founding-Creator-Badge und direkten Einfluss auf die Produktentwicklung.',
    },
    {
      question: 'Brauche ich eine große Reichweite?',
      answer:
        'Nein. Micro-Creator, Nano-Creator, alle sind willkommen. Die Idee dahinter: Brands suchen nicht nur Mega-Influencer. Sie suchen eng verbundene Communities und echte Engagement. Wenn deine Audience loyal ist, bist du interessant.',
    },
    {
      question: 'Was ist der größte Vorteil?',
      answer:
        'Du musst nicht mehr selbst Brands anschreiben. Keine Rejection mehr. CreatorBridge kennt deine Nische, deine Reichweite, deine Availability und matched dich mit Brands, die exakt zu dir passen. Brands kommen zu dir, nicht umgekehrt.',
    },
    {
      question: 'Muss ich selbst weiter Akquise machen?',
      answer:
        'Nein. Das System übernimmt das. Dein Job: Content erstellen. CreatorBridge matched, negotiiert (faire Konditionen), klärt die Technik. Du focusst auf das, was du kannst.',
    },
    {
      question: 'Was passiert nach meiner Bewerbung?',
      answer:
        'Wenn deine Bewerbung akzeptiert wird, kriegst du einen Calendly-Link für einen 30-Minuten-Call mit unserem Team. Im Call: Wir lernen dich kennen, du lernst das System kennen, und wir klären alle Open Questions.',
    },
    {
      question: 'Ist ein Platz garantiert?',
      answer:
        'Nein, leider nicht. Es sind begrenzt 50 Plätze, first come first served. Wenn die voll sind, voll sind sie. Deshalb: Wenn du Interesse hast, bewirb dich jetzt, nicht nächste Woche.',
    },
    {
      question: 'Was passiert im Call?',
      answer:
        'Ganz entspannt, 30 Minuten, kein Sales Pitch. Wir quatschen über dich, deine Nische, deine Ziele mit Brand Deals. Du fragst uns aus über das System, die Chancen, wie es funktioniert. Am Ende: Wir sagen dir, ob es passt und wie es weitergeht.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[var(--bg-ivory)]">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[var(--text-secondary)] mb-2">
              Häufige Fragen
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
              Das wirst du dich vielleicht <span className="italic text-[var(--accent)]">fragen</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-2 border-[var(--border)] rounded-[var(--radius-md)] overflow-hidden transition-all duration-200 hover:border-[var(--accent)]"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex justify-between items-center bg-white hover:bg-[rgba(201,140,131,0.03)] transition-colors"
                >
                  <h3 className="text-left text-lg md:text-xl font-bold text-[var(--text)]">{faq.question}</h3>
                  <span
                    className={`text-2xl text-[var(--accent)] transition-transform duration-200 flex-shrink-0 ml-4 ${
                      openIndex === idx ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <div className="px-6 py-5 bg-gradient-to-b from-[rgba(201,140,131,0.05)] to-transparent border-t-2 border-[var(--border)]">
                        <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-medium">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQ;
