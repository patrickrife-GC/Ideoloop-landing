import { Mic, Zap, Share2 } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Have a Conversation',
    description: 'Answer a few reflective questions about your perspective, experience, or insights. Takes about 10 minutes.',
    icon: Mic,
  },
  {
    number: 2,
    title: 'We Map Your Voice',
    description: 'Our AI extracts your unique themes, tone, and ideas. No generic output—just you, distilled.',
    icon: Zap,
  },
  {
    number: 3,
    title: 'Share Everywhere',
    description: 'Get ready-to-post content for LinkedIn, Twitter, email, and more. All in your authentic voice.',
    icon: Share2,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          How It Works
        </h2>
        <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">
          Three simple steps from thought to content
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 h-px bg-gray-200" style={{ left: '22%', right: '22%' }} />

          {steps.map((step) => (
            <div key={step.number} className="text-center relative">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-primary/8 rounded-2xl flex items-center justify-center mx-auto">
                  <step.icon className="w-9 h-9 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
