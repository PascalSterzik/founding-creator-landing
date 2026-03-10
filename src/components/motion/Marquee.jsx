'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Marquee — Infinite scrolling content.
 * Inspired by Magic UI's Marquee component.
 *
 * Uses CSS animation for performance (GPU-accelerated).
 * Duplicates children to create seamless loop.
 * Pauses on hover for readability.
 */
export default function Marquee({
  children,
  speed = 30,
  direction = 'left',
  pauseOnHover = true,
  gap = '2rem',
  className = '',
  fadeEdges = true,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const animationDirection = direction === 'left' ? 'normal' : 'reverse'

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        maskImage: fadeEdges
          ? 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          : undefined,
        WebkitMaskImage: fadeEdges
          ? 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          : undefined,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-max"
        style={{
          gap,
          animation: isInView
            ? `marquee-scroll ${speed}s linear infinite ${animationDirection}`
            : 'none',
          animationPlayState: 'running',
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) e.currentTarget.style.animationPlayState = 'paused'
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) e.currentTarget.style.animationPlayState = 'running'
        }}
      >
        {/* Original content */}
        <div className="flex shrink-0 items-center" style={{ gap }}>
          {children}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex shrink-0 items-center" style={{ gap }} aria-hidden="true">
          {children}
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
