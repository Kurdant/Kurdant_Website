import { motion } from 'framer-motion'
import FloatingBlock from './FloatingBlock'

const contacts = [
  { label: 'Email', value: 'hello@kurdant.fr', href: 'mailto:hello@kurdant.fr' },
  { label: 'GitHub', value: '@kurdant', href: 'https://github.com/' },
  { label: 'LinkedIn', value: '/in/kurdant', href: 'https://linkedin.com/' },
  { label: 'Twitter', value: '@kurdant', href: 'https://twitter.com/' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative bg-paper py-32 md:py-48 border-t border-ink/10">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-4">
            <p className="label opacity-60 mb-4">{`// 03 — Contact`}</p>
            <p className="label opacity-60">{`(let's talk)`}</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="display text-huge text-balance"
            >
              On bosse <span className="text-transparent bg-clip-text bg-accent-gradient">ensemble</span>?
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Big CTA block */}
          <FloatingBlock variant="ink" className="lg:col-span-2 aspect-[16/9] lg:aspect-auto">
            <a
              href="mailto:hello@kurdant.fr"
              className="relative grain grain-light h-full flex flex-col justify-between p-10 group"
            >
              <div className="relative z-10">
                <p className="label opacity-60 mb-6">{`// Send a message`}</p>
                <h3 className="display text-5xl md:text-7xl leading-none text-balance">
                  Leave a<br />
                  <span className="text-accent-pink">request</span> ↗
                </h3>
              </div>
              <div className="relative z-10 flex justify-between items-end">
                <p className="text-paper/70 max-w-md">
                  Lorem ipsum — un projet, une idée, une collab ? Envoie un message,
                  je réponds dans les 48h.
                </p>
                <span className="label">hello@kurdant.fr</span>
              </div>
            </a>
          </FloatingBlock>

          {/* Contact links column */}
          <div className="grid grid-cols-1 gap-3">
            {contacts.map((c, i) => (
              <FloatingBlock
                key={c.label}
                variant={i === 0 ? 'gradient' : 'outline'}
                delay={i * 0.08}
                float={false}
              >
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center justify-between p-5 group"
                >
                  <div>
                    <p className="label opacity-70 mb-1">{c.label}</p>
                    <p className="font-mono text-sm md:text-base">{c.value}</p>
                  </div>
                  <span className="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </FloatingBlock>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
