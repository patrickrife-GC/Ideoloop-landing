export default function FinalCTA() {
  return (
    <section id="start" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Your voice deserves to be heard.
        </h2>
        
        <p className="text-xl text-gray-600 mb-10">
          Start your first session for free. No credit card needed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://ideoloop-webapp.web.app" className="px-8 py-4 bg-primary text-white rounded-full font-medium text-lg hover:bg-primary-light transition-colors shadow-lg hover:shadow-xl">
            Start Your First Session
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-8">
          Takes about 10 minutes • No experience necessary
        </p>
      </div>
    </section>
  )
}
