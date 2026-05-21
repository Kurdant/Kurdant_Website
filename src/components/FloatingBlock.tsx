import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Variant = 'pink' | 'violet' | 'gradient' | 'outline' | 'outline-light' | 'ink'

interface FloatingBlockProps {
  children: ReactNode
  variant?: Variant
  delay?: number
  className?: string
  float?: boolean
}

const variants: Record<Variant, string> = {
  pink: 'bg-accent-pink text-ink',
  violet: 'bg-accent-violet text-paper',
  gradient: 'bg-accent-gradient text-paper',
  outline: 'border border-ink text-ink bg-paper',
  'outline-light': 'border border-paper/30 text-paper bg-transparent',
  ink: 'bg-ink text-paper',
}

export default function FloatingBlock({
  children,
  variant = 'outline',
  delay = 0,
  className = '',
  float = true,
}: FloatingBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`${variants[variant]} ${
        float ? 'animate-float-slow' : ''
      } relative ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  )
}
