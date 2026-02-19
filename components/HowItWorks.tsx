import Image from 'next/image'

const steps = [
  {
    number: 1,
    title: 'Press Record. Start Talking.',
    description: 'Answer a few guided questions about your perspective, experience, or what\'s on your mind. Takes about 10 minutes. No script. No blank page.',
    image: '/assets/ui-record-screen.png',
    imageDark: true,
  },
  {
    number: 2,
    title: 'Choose Your Lens.',
    description: 'Pick the type of insight you want to extract — a win, a hard lesson, a half-baked idea. Ideoloop guides you through a specific 3-question sequence designed to pull out the good stuff.',
    image: '/assets/ui-select-lens.png',
    imageDark: false,
  },
  {
    number: 3,
    title: 'Here\'s What We Made.',
    description: 'Your conversation becomes ready-to-share content across LinkedIn, X, your newsletter, and more — all in your authentic voice. Copy, edit, publish.',
    image: '/assets/ui-output-dashboard.png',
    imageDark: false,
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
          Three steps from thought to content.
        </p>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
            >
              {/* Screenshot */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <div className={`rounded-2xl overflow-hidden shadow-xl ${step.imageDark ? 'border-2 border-gray-700' : 'border border-gray-200'}`}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={800}
                    height={520}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Copy */}
              <div className="w-full md:w-1/2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-sm font-bold">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
