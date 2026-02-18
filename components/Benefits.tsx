import { Fingerprint, Clock, Layers, RefreshCw } from 'lucide-react'

const benefits = [
  {
    icon: Fingerprint,
    title: 'Sounds Like You',
    description: 'AI preserves your actual voice and perspective, not generic templates. Your ideas, your tone — every time.',
    color: 'bg-violet-50 text-violet-600',
    border: 'border-violet-100',
  },
  {
    icon: Clock,
    title: 'Save Hours Weekly',
    description: '10 minutes of conversation = 5+ pieces of ready-to-share content. No endless editing or staring at a blank page.',
    color: 'bg-amber-50 text-amber-600',
    border: 'border-amber-100',
  },
  {
    icon: Layers,
    title: 'Multi-Platform Ready',
    description: 'LinkedIn posts, tweets, newsletter angles, blog intros—all formatted and optimized for each platform automatically.',
    color: 'bg-blue-50 text-blue-600',
    border: 'border-blue-100',
  },
  {
    icon: RefreshCw,
    title: 'Stay On Brand',
    description: 'Consistency across platforms, automatically. You build a coherent presence without the manual effort.',
    color: 'bg-emerald-50 text-emerald-600',
    border: 'border-emerald-100',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Why Creators Choose Ideoloop
        </h2>
        <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
          Everything you need to turn your expertise into consistent, authentic content
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border ${benefit.border} hover:shadow-md transition-shadow`}
            >
              <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-5`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
