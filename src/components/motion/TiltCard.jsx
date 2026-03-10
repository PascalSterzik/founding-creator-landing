'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * TiltCard — 3D perspective tilt effect on hover.
 * Inspired by Aceternity UI's 3D Card Effect.
 *
 * The card tilts toward the cursor on hover,
 * creating a premium interactive feel.
 *
 * Automatically disables on touch devices for performance.
 */
export default function TiltCard({
  children,
  className = '',
  tiltAmount = 8,
  glareEnabled = false,
  scale = 1.02,
  perspective = 1000,
  springConfig = { stiffness: 300, damping: 20 },
}) {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)

  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    // Normalize to -1 to 1 range
    const normalX = mouseX / (rect.width / 2)
    const normalY = mouseY / (rect.height / 2)

    // Tilt: rotateX is inverted (moving mouse down should tilt top toward viewer)
    rotateX.set(-normalY * tiltAmount)
    rotateY.set(normalX * tiltAmount)

    // Glare position (percentage)
    glareX.set(((e.clientX - rect.left) / rect.width) * 100)
    glareY.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{ scale: isHovered ? scale : 1 }}
        transition={{ duration: 0.2 }}
        className="relative w-full h-full"
      >
        {children}

        {/* Glare overlay */}
        {glareEnabled && isHovered && (
          <motion.div
            className="absolute inset-0 rounded-brand pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}
