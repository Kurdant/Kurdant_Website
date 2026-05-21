export default function Marquee() {
  const items = ['React', '★', 'TypeScript', '★', 'Node.js', '★', 'Design', '★', 'WebGL', '★']
  return (
    <div className="border-y border-ink/90 bg-ink text-paper overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-4">
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <span key={i} className="display text-3xl md:text-5xl px-6 shrink-0">
            {it}
          </span>
        ))}
      </div>
    </div>
  )
}
