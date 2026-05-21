import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

interface Props {
  project: Project
  delay?: number
}

const accentBg: Record<NonNullable<Project['accent']> | 'none', string> = {
  pink: 'bg-accent-pink text-ink',
  violet: 'bg-accent-violet text-paper',
  gradient: 'bg-accent-gradient text-paper',
  none: 'bg-paper text-ink border border-ink',
}

export default function ProjectCard({ project, delay = 0 }: Props) {
  const accentClass = accentBg[project.accent ?? 'none']
  const isAccented = !!project.accent

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className={`group relative flex flex-col ${accentClass} aspect-[4/5] overflow-hidden cursor-pointer`}
    >
      {/* Top row */}
      <div className="flex items-center justify-between p-5">
        <span className="label opacity-80">[{project.index}]</span>
        <span className="label opacity-80 uppercase">{project.category}</span>
      </div>

      {/* Middle — title block */}
      <div className="flex-1 flex items-center justify-center px-6">
        <h3
          className={`display text-4xl md:text-5xl text-center text-balance ${
            isAccented ? '' : 'group-hover:text-accent-pink transition-colors'
          }`}
        >
          {project.title}
        </h3>
      </div>

      {/* Bottom info */}
      <div className="p-5 border-t border-current/20">
        <p className="text-sm leading-snug mb-4 opacity-90 line-clamp-3">
          {project.description}
        </p>
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-wider border border-current/40 px-2 py-1"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="label">{project.year} ↗</span>
        </div>
      </div>
    </motion.article>
  )
}
