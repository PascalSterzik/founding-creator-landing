'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * FadeIn — Replaces the old .reveal CSS class system.
 * Uses Framer Motion + useInView for scroll-triggered entrance animations.
 *
 * Supports multiple directions: up (default), down, left, right, none (opacity only)
 * Supports staggered children via stagger prop.
 */
export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 30,
  once = true,
  threshold = 0.15,
  className = '',
  as = 'div',
  ...props
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const MotionTag = motion[as] || motion.div

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionMap[direction] }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Same cubic-bezier as before
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

/**
 * StaggerChildren — Wraps children with staggered FadeIn animations.
 * Each child gets an incremental delay.
 */
export function StaggerChildren({
  children,
  direction = 'up',
  staggerDelay = 0.08,
  baseDelay = 0,
  duration = 0.5,
  distance = 24,
  once = true,
  threshold = 0.1,
  className = '',
  ...props
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }

  return (
    <div ref={ref} className={className} {...props}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, ...directionMap[direction] }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionMap[direction] }}
              transition={{
                duration,
                delay: baseDelay + index * staggerDelay,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </div>
  )
}
