'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * TextReveal — Animates text word-by-word or character-by-character.
 * Inspired by Magic UI's BlurFade and TextAnimate components.
 *
 * Modes:
 * - 'words': Each word fades/slides in sequentially
 * - 'blur': Each word fades in with a blur effect
 * - 'slide': Each word slides up from below
 */
export default function TextReveal({
  text,
  as: Tag = 'h1',
  mode = 'blur',
  delay = 0,
  staggerDelay = 0.04,
  duration = 0.5,
  once = true,
  className = '',
  highlightWords = [],
  highlightClass = 'text-brand-primary',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.3 })
  const words = text.split(' ')

  const getVariants = (wordIndex) => {
    const baseDelay = delay + wordIndex * staggerDelay

    if (mode === 'blur') {
      return {
        hidden: { opacity: 0, filter: 'blur(8px)', y: 8 },
        visible: {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          transition: {
            duration,
            delay: baseDelay,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }
    }

    if (mode === 'slide') {
      return {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay: baseDelay,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }
    }

    // Default: words mode (simple fade)
    return {
      hidden: { opacity: 0, y: 6 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: duration * 0.8,
          delay: baseDelay,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    }
  }

  return (
    <Tag ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.3em' }}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some(hw =>
          word.toLowerCase().includes(hw.toLowerCase())
        )
        return (
          <motion.span
            key={index}
            variants={getVariants(index)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={isHighlighted ? highlightClass : undefined}
            style={{ display: 'inline-block', willChange: 'transform, opacity, filter' }}
          >
            {word}
          </motion.span>
        )
      })}
    </Tag>
  )
}

/**
 * BlurFade — Simple blur + fade entrance for any element.
 * Lighter than TextReveal, works on any content.
 */
export function BlurFade({
  children,
  delay = 0,
  duration = 0.6,
  blur = 6,
  direction = 'up',
  distance = 16,
  once = true,
  className = '',
  ...props
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.2 })

  const yOffset = direction === 'up' ? distance : direction === 'down' ? -distance : 0
  const xOffset = direction === 'left' ? distance : direction === 'right' ? -distance : 0

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        filter: `blur(${blur}px)`,
        y: yOffset,
        x: xOffset,
      }}
      animate={isInView ? {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        x: 0,
      } : {
        opacity: 0,
        filter: `blur(${blur}px)`,
        y: yOffset,
        x: xOffset,
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={{ willChange: 'transform, opacity, filter' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
