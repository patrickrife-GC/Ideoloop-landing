export default function FinalCTA() {
  return (
    <section id="start" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl px-8 py-16 sm:px-16 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full" />
          <div className="absolute -bottom-16 -left-10 w-64 h-64 bg-white/5 rounded-full" />

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Your voice deserves to be heard.
            </h2>

            <p className="text-xl text-white/75 mb-10">
              Start your first session for free. No credit card needed.
            </p>

            <a
              href="https://ideoloop-webapp.web.app"
              className="inline-block px-10 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Your First Session
            </a>

            <p className="text-white/50 text-sm mt-8">
              Takes about 10 minutes &nbsp;•&nbsp; No experience necessary
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
