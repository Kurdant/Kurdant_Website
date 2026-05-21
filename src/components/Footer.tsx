export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-ink text-paper py-12 overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div>
            <p className="font-display text-3xl tracking-tightest">
              KURDANT<span className="text-accent-pink">.</span>
            </p>
            <p className="label opacity-50 mt-1">Portfolio © {year}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:items-center">
            <a href="#" className="label opacity-70 hover:opacity-100 hover:text-accent-pink transition">
              Top ↑
            </a>
            <a href="#about" className="label opacity-70 hover:opacity-100 hover:text-accent-pink transition">
              About
            </a>
            <a href="#projects" className="label opacity-70 hover:opacity-100 hover:text-accent-pink transition">
              Projects
            </a>
            <a href="#contact" className="label opacity-70 hover:opacity-100 hover:text-accent-pink transition">
              Contact
            </a>
          </div>

          <p className="label opacity-50">Made with ◆ in FR</p>
        </div>

        {/* Massive footer wordmark */}
        <div aria-hidden className="mt-16 -mb-6 overflow-hidden">
          <p className="display text-[18vw] leading-none opacity-10 select-none whitespace-nowrap">
            KURDANT
          </p>
        </div>
      </div>
    </footer>
  )
}
