import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block" />
            Now accepting waitlist applications
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stop Writing.<br />
            Start Talking.
          </h1>

          <p className="text-xl text-gray-600 mb-4 leading-relaxed max-w-2xl mx-auto">
            The stories are already in you — we set them free.
          </p>

          <p className="text-base text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto">
            Ideoloop conducts a short guided interview with you. You talk. We turn it into ready-to-share content for LinkedIn, X, your newsletter, and more — in your authentic voice.
          </p>

          <div className="flex flex-col items-center gap-3">
            <a
              href="#waitlist"
              className="px-8 py-4 bg-terracotta text-white rounded-full font-medium text-lg hover:bg-terracotta-dark transition-colors shadow-lg hover:shadow-xl"
            >
              Get Early Access →
            </a>
            <p className="text-sm text-gray-400">Invite-only beta. Limited spots available.</p>
          </div>
        </div>

        {/* Hero product screenshot */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <Image
              src="/assets/ui-output-dashboard.png"
              alt="Ideoloop output dashboard"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
