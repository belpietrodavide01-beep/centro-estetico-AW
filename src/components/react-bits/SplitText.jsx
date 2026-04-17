import { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Componente SplitText — hover effect per i link della navbar.
 * Ogni lettera scivola verso l'alto e una copia identica entra dal basso,
 * creando l'effetto "testo diviso" staggerato tipico di React Bits.
 */
export default function SplitText({ text, className = '' }) {
  const [hovered, setHovered] = useState(false)
  const chars = text.split('')

  return (
    <span
      className={`relative inline-flex overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Layer 1 — esce verso l'alto */}
      <span aria-hidden="true" className="flex">
        {chars.map((char, i) => (
          <motion.span
            key={`top-${i}`}
            animate={hovered ? { y: '-100%', opacity: 0 } : { y: '0%', opacity: 1 }}
            transition={{
              duration: 0.55,
              delay: i * 0.045,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
            style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char}
          </motion.span>
        ))}
      </span>

      {/* Layer 2 — entra dal basso */}
      <span className="absolute inset-0 flex">
        {chars.map((char, i) => (
          <motion.span
            key={`bottom-${i}`}
            animate={hovered ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.55,
              delay: i * 0.045,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
            style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </span>
  )
}
