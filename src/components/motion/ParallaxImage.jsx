'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * ParallaxImage — Image that moves at a different speed than scroll.
 * Creates depth and visual interest on scroll.
 *
 * speed: How much parallax effect (0 = none, 0.3 = subtle, 0.5 = noticeable)
 * scale: Extra scale on the image to prevent edges showing during parallax
 */
export default function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  scale = 1.15,
  className = '',
  imgClassName = '',
  overlay = false,
  overlayClass = 'bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent',
  children,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Map scroll progress to a y translation
  // When element enters (0) to when it leaves (1), move the image
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
      {overlay && (
        <div className={`absolute inset-0 ${overlayClass}`} />
      )}
      {children}
    </div>
  )
}

/**
 * ParallaxSection — Section background with parallax effect.
 * Wraps content with a parallax background image.
 */
export function ParallaxSection({
  src,
  alt,
  speed = 0.2,
  className = '',
  overlayClass = 'bg-brand-dark/70',
  children,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="absolute inset-0 -top-[15%] -bottom-[15%]"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}
