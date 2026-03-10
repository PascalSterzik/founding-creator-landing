'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * ScrollProgress — Thin progress bar at the top of the page.
 * Shows how far the user has scrolled.
 * Adds a polished, app-like feel to the site.
 */
export default function ScrollProgress({
  color,
  height = 3,
  zIndex = 60,
}) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height,
        zIndex,
        background: color || 'var(--color-brand-primary, #8B4513)',
      }}
    />
  )
}
