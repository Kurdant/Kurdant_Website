import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-paper/80 border-b border-ink/10' : ''
      }`}
    >
      <div className="container-x flex items-center justify-between py-5">
        <a href="#" className="font-display text-xl tracking-tightest">
          KURDANT<span className="text-accent-pink">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label hover:text-accent-pink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="label hairline px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
        >
          Hire me ↗
        </a>
      </div>
    </header>
  )
}
