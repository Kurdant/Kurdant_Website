import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { categories, projects, type ProjectCategory } from '../data/projects'
import ProjectCard from './ProjectCard'

type Filter = ProjectCategory | 'all'

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="projects" className="relative bg-paper py-32 md:py-48">
      <div className="container-x">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16 items-end">
          <div className="col-span-12 md:col-span-4">
            <p className="label opacity-60 mb-4">{`// 02 — Travaux`}</p>
            <p className="label opacity-60">{`(selected works)`}</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="display text-huge text-balance">
              Projets<span className="text-accent-pink">.</span>
            </h2>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-ink/20 pb-6">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`label px-4 py-2 transition-colors border ${
                filter === c.id
                  ? 'bg-ink text-paper border-ink'
                  : 'border-transparent hover:border-ink/40'
              }`}
            >
              {c.label}{' '}
              <span className="opacity-50">
                ({c.id === 'all' ? projects.length : projects.filter((p) => p.category === c.id).length})
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 0.05} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center label opacity-60 py-20">
            // Aucun projet dans cette catégorie pour l'instant
          </p>
        )}
      </div>
    </section>
  )
}
