export type ProjectCategory = 'web' | 'app' | 'design' | 'experiment'

export interface Project {
  id: string
  index: string
  title: string
  category: ProjectCategory
  year: string
  description: string
  tags: string[]
  link?: string
  accent?: 'pink' | 'violet' | 'gradient' | null
}

export const categories: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Tout' },
  { id: 'web', label: 'Web' },
  { id: 'app', label: 'App' },
  { id: 'design', label: 'Design' },
  { id: 'experiment', label: 'Experiment' },
]

export const projects: Project[] = [
  {
    id: 'p01',
    index: '01',
    title: 'Lorem Site',
    category: 'web',
    year: '2026',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Site vitrine animé avec scroll narratif.',
    tags: ['React', 'Framer Motion', 'GSAP'],
    accent: 'pink',
  },
  {
    id: 'p02',
    index: '02',
    title: 'Ipsum App',
    category: 'app',
    year: '2026',
    description:
      'Application mobile-first pour la gestion de quelque chose. Phasellus sit amet enim sed nisi.',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    accent: null,
  },
  {
    id: 'p03',
    index: '03',
    title: 'Dolor System',
    category: 'design',
    year: '2025',
    description:
      'Design system complet — tokens, composants, documentation. Donec ullamcorper massa vitae.',
    tags: ['Figma', 'Storybook', 'Tokens'],
    accent: 'violet',
  },
  {
    id: 'p04',
    index: '04',
    title: 'Sit Lab',
    category: 'experiment',
    year: '2025',
    description:
      'Expérimentation WebGL — particules réactives à la souris. Vivamus lacinia odio vitae vestibulum.',
    tags: ['Three.js', 'GLSL', 'WebGL'],
    accent: 'gradient',
  },
  {
    id: 'p05',
    index: '05',
    title: 'Amet Platform',
    category: 'web',
    year: '2025',
    description:
      'Plateforme SaaS avec dashboard temps réel. Mauris dignissim, urna eu cursus volutpat.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    accent: null,
  },
  {
    id: 'p06',
    index: '06',
    title: 'Consectetur Kit',
    category: 'design',
    year: '2024',
    description:
      'Brand identity et site web pour studio créatif. Quisque eget mauris et libero faucibus.',
    tags: ['Branding', 'Web', 'Print'],
    accent: 'pink',
  },
]
