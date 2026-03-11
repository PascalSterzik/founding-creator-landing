'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';
import { Dice5, Clock, MessageCircle } from 'lucide-react';

const ProblemCard = ({ number, icon: Icon, title, description, image, delay }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const rotateX = useTransform(mouseY, [0, 300], [1.5, -1.5]);
  const rotateY = useTransform(mouseX, [0, 300], [-1.5, 1.5]);

  return (
    <FadeIn delay={delay}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="h-full"
      >
        <div
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0 2px 8px rgba(75, 50, 45, 0.08)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)',
            overflow: 'hidden',
          }}
          className="h-full flex flex-col"
        >
          {/* Card Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.3) 100%)',
              }}
            />
            {/* Number badge */}
            <div
              className="absolute top-4 left-4"
              style={{
                width: '2.5rem',
                height: '2.5rem',
                backgroundColor: 'var(--accent)',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontSize: '1rem',
                fontWeight: '700',
                fontFamily: 'var(--font-heading)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              }}
            >
              {number}
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 flex flex-col gap-3 flex-grow">
            {Icon && (
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(201, 140, 131, 0.12)',
                }}
              >
                <Icon size={20} style={{ color: 'var(--accent)' }} />
              </div>
            )}

            <h3
              style={{
                color: 'var(--text)',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: '700',
                lineHeight: '1.3',
              }}
            >
              {title}
            </h3>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                lineHeight: '1.6',
              }}
              className="flex-grow"
            >
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
};

export default function Problem() {
  const problems = [
    {
      number: '01',
      icon: Dice5,
      title: 'Deals kommen zufällig',
      description:
        'Du wartest auf DMs, hoffst auf Empfehlungen und bist von Glück abhängig, ob die richtige Brand deine Arbeit sieht.',
      // Dice: randomness/luck concept
      image: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?w=600&h=400&fit=crop&crop=center',
    },
    {
      number: '02',
      icon: Clock,
      title: 'Akquise kostet Zeit',
      description:
        'Statt Content zu erstellen, verbringst du Stunden mit Recherche, Kaltakquise und E-Mails an Brands, die nie antworten.',
      // Creator overwhelmed, stressed at desk with too many tasks
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center',
    },
    {
      number: '03',
      icon: MessageCircle,
      title: 'Kommunikation ist Chaos',
      description:
        'DMs auf Instagram, E-Mails, WhatsApp-Gruppen, Notion-Seiten. Absprachen sind dezentralisiert und ständig verloren gegangen.',
      // 3D chat/message bubble icon (keeping this one, it fits)
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="mb-16 md:mb-20">
            <p
              style={{
                color: 'var(--accent)',
                fontSize: '0.875rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
              }}
            >
              Das Problem
            </p>
            <h2
              style={{
                color: 'var(--text)',
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.875rem, 5vw, 2.75rem)',
                fontWeight: '700',
                lineHeight: '1.2',
              }}
              className="mb-4"
            >
              Creator-Brand-Kooperationen sind heute{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                Glückssache
              </span>
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                lineHeight: '1.7',
                maxWidth: '600px',
              }}
            >
              Die Realität für tausende Creator: Sie schaffen großartigen Content, aber können ihre Talente nicht in echte
              Brand-Deals umwandeln.
            </p>
          </div>
        </FadeIn>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-20">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              number={problem.number}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              image={problem.image}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Big Stat Callout */}
        <FadeIn>
          <div
            style={{
              backgroundColor: 'var(--bg-ivory)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              textAlign: 'center',
            }}
            className="md:px-8 md:py-10"
          >
            <div
              style={{
                color: 'var(--accent)',
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: '700',
                lineHeight: '1.2',
                marginBottom: '0.75rem',
              }}
            >
              1 von 4
            </div>
            <p
              style={{
                color: 'var(--text)',
                fontSize: '1.05rem',
                lineHeight: '1.7',
                marginBottom: '0.5rem',
              }}
            >
              Creatorn hat Schwierigkeiten, passende Brand-Partnerschaften zu finden.
            </p>
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.875rem',
              }}
            >
              Creator Economy Report 2024
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
