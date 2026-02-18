const stats = [
  { value: '500+', label: 'Early creators' },
  { value: '12k+', label: 'Pieces of content generated' },
  { value: '10 min', label: 'Average session length' },
  { value: '94%', label: 'Say it sounds like them' },
]

export default function Stats() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-white/60">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
