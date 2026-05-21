import { motion } from 'framer-motion'
import FloatingBlock from './FloatingBlock'

const stats = [
  { kpi: '5+', label: 'années de code' },
  { kpi: '30+', label: 'projets livrés' },
  { kpi: '∞', label: 'cafés bus' },
]

const skills = ['React', 'TypeScript', 'Node.js', 'Tailwind', 'PostgreSQL', 'Three.js']

export default function About() {
  return (
    <section
      id="about"
      className="relative grain bg-ink text-paper py-32 md:py-48 overflow-hidden"
    >
      <div className="container-x relative z-10 grid grid-cols-12 gap-6">
        {/* Section label */}
        <div className="col-span-12 md:col-span-3 mb-12 md:mb-0">
          <p className="label opacity-60 mb-4">{`// 01 — À propos`}</p>
          <p className="label opacity-60">{`(qui je suis)`}</p>
        </div>

        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:col-span-9"
        >
          <h2 className="display text-huge text-balance mb-12">
            Je construis des sites
            <br />
            <span className="text-accent-pink">qui ne s'oublient pas</span>.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <p className="text-lg md:text-xl leading-relaxed text-paper/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Développeur
              full-stack avec un goût pour les interfaces qui sortent du moule. Je
              code, je design, je casse, je recommence.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-paper/80">
              Phasellus sit amet enim sed nisi rhoncus tincidunt. Spécialisé en React
              et écosystème JS/TS — du frontend détaillé au backend solide. Toujours
              prêt pour le prochain défi.
            </p>
          </div>
        </motion.div>

        {/* Stats row */}
        <div className="col-span-12 mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <FloatingBlock
              key={s.label}
              variant={i === 1 ? 'gradient' : 'outline-light'}
              delay={i * 0.1}
            >
              <div className="p-8">
                <p className="display text-6xl md:text-7xl mb-2">{s.kpi}</p>
                <p className="label opacity-80">{s.label}</p>
              </div>
            </FloatingBlock>
          ))}
        </div>

        {/* Skills row */}
        <div className="col-span-12 mt-16">
          <p className="label opacity-60 mb-4">{`// Stack`}</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="font-mono text-sm border border-paper/30 px-4 py-2 hover:bg-paper hover:text-ink transition-colors cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
