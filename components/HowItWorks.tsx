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
    description: 'Get ready-to-post content for LinkedIn, Twitter, email, and more. All in
cat > components/Benefits.tsx << 'EOF'
import { Check } from 'lucide-react'

const benefits = [
  {
    title: 'Sounds Like You',
    description: 'AI preserves your actual voice and perspective, not generic templates. Your ideas, your tone.',
  },
  {
    title: 'Save Hours Weekly',
    description: '10 minutes of conversation = 5+ pieces of ready-to-share content. No endless editing.',
  },
  {
    title: 'Multi-Platform Ready',
    description: 'LinkedIn posts, tweets, newsletter angles, blog intros—all formatted and optimized.',
  },
  {
    title: 'Stay On Brand',
    description: 'Consistency across platforms automatically. You sound like you everywhere.',
  },
]

export default function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
          Why Creators Choose Ideoloop
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
