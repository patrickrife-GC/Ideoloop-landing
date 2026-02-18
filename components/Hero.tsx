export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block" />
            Now in early access
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Voice.{' '}
            <span className="gradient-text">Amplified.</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Turn a single reflective conversation into ready-to-share content for LinkedIn, Twitter, your newsletter—without losing what makes you authentic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#start"
              className="px-8 py-4 bg-primary text-white rounded-full font-medium text-lg hover:bg-primary-light transition-colors shadow-lg hover:shadow-xl"
            >
              Begin a Session
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-full font-medium text-lg hover:border-gray-400 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* App preview mockup */}
        <div className="animate-float max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

            {/* Top bar */}
            <div className="bg-primary px-5 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/25" />
                <div className="w-3 h-3 rounded-full bg-white/25" />
                <div className="w-3 h-3 rounded-full bg-white/25" />
              </div>
              <span className="text-white/70 text-sm font-medium mx-auto">Ideoloop</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">

              {/* Left panel: Lens selection (2 cols) */}
              <div className="sm:col-span-2 p-5 bg-gray-50/60">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Choose a Lens</p>
                <div className="space-y-2">

                  {/* Selected lens */}
                  <div className="bg-white rounded-xl p-3.5 border-2 border-primary shadow-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-xl leading-none mt-0.5">🎯</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">The Expert</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Share hard-won knowledge and position yourself as a trusted authority.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3.5 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <span className="text-xl leading-none mt-0.5">📖</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">The Storyteller</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Lead with a personal narrative that makes your insight memorable.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3.5 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <span className="text-xl leading-none mt-0.5">⚡</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">The Challenger</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Push back on the conventional take and spark a real conversation.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right panel: Active session (3 cols) */}
              <div className="sm:col-span-3 p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Session · The Expert</p>
                  <span className="text-[11px] text-gray-400">Q 2 of 4</span>
                </div>

                {/* Question */}
                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                  <p className="text-xs font-medium text-primary mb-1.5">Question</p>
                  <p className="text-sm text-gray-800 leading-relaxed font-medium">
                    What's one thing you know now that you wish you'd learned 5 years earlier in your field?
                  </p>
                </div>

                {/* Response */}
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-400 mb-2">Your answer</p>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 min-h-24">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      That relationships compound faster than skills. I spent years optimising for getting better at my craft — and that matters — but the biggest leaps came when I invested in the people around me...
                    </p>
                    <span className="inline-block w-0.5 h-4 bg-primary animate-pulse ml-0.5 align-middle" />
                  </div>
                </div>

                {/* Progress */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-primary rounded-full" />
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap">2 of 4</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
