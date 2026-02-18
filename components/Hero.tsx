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
            {/* Window chrome */}
            <div className="bg-primary px-5 py-3.5 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/25" />
                <div className="w-3 h-3 rounded-full bg-white/25" />
                <div className="w-3 h-3 rounded-full bg-white/25" />
              </div>
              <span className="text-white/80 text-sm font-medium mx-auto">Ideoloop — Active Session</span>
            </div>

            {/* Two-panel layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
              {/* Left: Conversation */}
              <div className="p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Your Session</p>
                <div className="bg-gray-50 rounded-xl p-4 mb-3 border border-gray-100">
                  <p className="text-xs text-gray-400 mb-1.5 font-medium">Question</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    What's one insight from your work that more people should know about?
                  </p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                  <p className="text-xs text-primary mb-1.5 font-medium">Your response</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    "Most people overcomplicate strategy. The best plans I've seen fit on one page — and the best leaders can explain their vision in a single sentence..."
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-primary/20 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-primary rounded-full" />
                  </div>
                  <span className="text-xs text-gray-400">3 of 4 questions</span>
                </div>
              </div>

              {/* Right: Generated content */}
              <div className="p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Generated for You</p>
                <div className="space-y-3">
                  {/* LinkedIn */}
                  <div className="bg-blue-50 rounded-xl p-3.5 border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[9px] font-bold">in</span>
                      </div>
                      <span className="text-xs font-semibold text-blue-700">LinkedIn Post</span>
                      <span className="ml-auto text-xs text-blue-400 bg-blue-100 px-2 py-0.5 rounded-full">Ready</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      After a decade in leadership, here's what I wish I knew sooner: the best strategies fit on one page. If you can't explain it simply, it's not ready...
                    </p>
                  </div>

                  {/* Twitter */}
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[9px] font-bold">𝕏</span>
                      </div>
                      <span className="text-xs font-semibold text-slate-700">Twitter / X</span>
                      <span className="ml-auto text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">Ready</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Most people overcomplicate strategy. The best plans fit on one page. Here's the framework I use →
                    </p>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-amber-50 rounded-xl p-3.5 border border-amber-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-amber-500 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[9px]">✉</span>
                      </div>
                      <span className="text-xs font-semibold text-amber-700">Newsletter Angle</span>
                      <span className="ml-auto text-xs text-amber-400 bg-amber-100 px-2 py-0.5 rounded-full">Ready</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      This week: why simplicity is the hardest strategic skill — and how to know if your plan is really done...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
