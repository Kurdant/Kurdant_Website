import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Motion blur effect on scroll (design3 inspiration)
  const blur = useTransform(scrollYProgress, [0, 1], [0, 24])
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Floating side labels — design3 */}
      <div className="absolute left-6 top-1/3 hidden md:flex flex-col gap-2 label opacity-70">
        <span>{`// dev`}</span>
        <span>{`// 2026`}</span>
        <span>{`// fr`}</span>
      </div>
      <div className="absolute right-6 top-1/3 hidden md:flex flex-col gap-2 label opacity-70 text-right">
        <span>portfolio v.01</span>
        <span>kurdant.fr</span>
        <span>scroll ↓</span>
      </div>

      {/* Small caption top */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 text-center">
        <span className="label">Lorem ipsum / Full-stack Developer</span>
      </div>

      {/* MEGA TYPO with motion blur */}
      <motion.h1
        style={{
          y,
          opacity,
          filter: useTransform(blur, (v) => `blur(${v}px)`),
        }}
        className="display text-mega text-center text-balance px-4 select-none"
      >
        Port<span className="text-transparent bg-clip-text bg-accent-gradient">folio</span>
      </motion.h1>

      {/* Bottom info row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-10 left-0 right-0"
      >
        <div className="container-x flex items-end justify-between">
          <div className="max-w-xs">
            <p className="label mb-2">→ A propos</p>
            <p className="text-sm text-ink/70">
              Lorem ipsum dolor sit amet — développeur basé quelque part, qui construit
              des trucs sur le web.
            </p>
          </div>
          <div className="hidden md:block">
            <p className="label">↓ Scroll</p>
          </div>
          <div className="text-right">
            <p className="label mb-1">Available for work</p>
            <p className="font-mono text-sm flex items-center gap-2 justify-end">
              <span className="inline-block w-2 h-2 rounded-full bg-accent-pink animate-pulse" />
              2026
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
