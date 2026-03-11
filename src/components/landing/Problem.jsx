'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';

const ProblemCard = ({ title, description, image, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { amount: 0.6 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Mobile: always show text (no interaction needed). Desktop: hover to reveal.
  const isExpanded = isMobile ? true : isHovered;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleClick = () => {
    if (isMobile) setIsTapped((prev) => !prev);
  };

  const rotateX = useTransform(mouseY, [0, 400], [1.5, -1.5]);
  const rotateY = useTransform(mouseX, [0, 300], [-1.5, 1.5]);

  return (
    <FadeIn delay={delay}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="h-full"
      >
        <div
          className="relative h-full cursor-pointer overflow-hidden"
          style={{
            borderRadius: 'var(--radius-lg)',
            minHeight: '420px',
          }}
        >
          {/* Full background image */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: isExpanded ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Dark gradient overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: isExpanded
                ? 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)'
                : 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 45%, transparent 100%)',
              transition: 'background 0.5s ease',
            }}
          />

          {/* Text content at bottom */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
            {/* Title (always visible) */}
            <motion.h3
              animate={{ y: isExpanded ? -8 : 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                color: '#FFFFFF',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: '700',
                lineHeight: '1.3',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              {title}
            </motion.h3>

            {/* Description (always visible on mobile, revealed on hover on desktop) */}
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? 'auto' : 0,
                marginTop: isExpanded ? 12 : 0,
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.95rem',
                  lineHeight: '1.65',
                  textShadow: '0 1px 4px rgba(0,0,0,0.4)',
                }}
              >
                {description}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
};

export default function Problem() {
  const problems = [
    {
      title: 'Deals kommen zufällig',
      description:
        'Du wartest auf DMs, hoffst auf Empfehlungen und bist von Glück abhängig, ob die richtige Brand deine Arbeit sieht. Kein System, kein Plan. Nur Hoffen und Warten.',
      image: '/images/creator-late-night-grind.jpg',
    },
    {
      title: 'Akquise kostet Zeit',
      description:
        'Statt Content zu erstellen, verbringst du Stunden mit Recherche, Kaltakquise und E-Mails an Brands, die nie antworten. Du bist Creator geworden, um kreativ zu sein, nicht um Pitches zu schreiben.',
      image: '/images/problem-akquise-time.png',
    },
    {
      title: 'Kommunikation ist Chaos',
      description:
        'DMs auf Instagram, E-Mails, WhatsApp-Gruppen, Notion-Seiten. Absprachen sind dezentralisiert und Infos gehen ständig verloren. Wo war nochmal die Deadline?',
      image: '/images/problem-communication-chaos.png',
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
                fontFamily: "'Cormorant Garamond', Georgia, serif",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
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
                fontFamily: "'Cormorant Garamond', Georgia, serif",
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
