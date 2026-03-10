'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

/**
 * NumberTicker — Animates a number counting up from 0 to target.
 * Inspired by Magic UI's NumberTicker component.
 *
 * Uses Framer Motion spring physics for organic feel.
 * Supports prefix (e.g., "€") and suffix (e.g., "+", "%").
 */
export default function NumberTicker({
  value,
  prefix = '',
  suffix = '',
  duration = 1.5,
  delay = 0,
  decimals = 0,
  once = true,
  className = '',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 30,
    duration: duration * 1000,
  })

  const rounded = useTransform(springValue, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest)
  )

  useEffect(() => {
    if (isInView && !hasStarted) {
      const timer = setTimeout(() => {
        springValue.set(value)
        setHasStarted(true)
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [isInView, hasStarted, value, delay, springValue])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest)
    })
    return unsubscribe
  }, [rounded])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  )
}
