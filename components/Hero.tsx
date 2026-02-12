export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Your Voice.{' '}
          <span className="gradient-text">Amplified.</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          Turn a single reflective conversation into ready-to-share content for LinkedIn, Twitter, your newsletter—without losing what makes you authentic.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          
            href="#start"
            className="px-8 py-4 bg-primary text-white rounded-full font-medium text-lg hover:bg-primary-light transition-colors shadow-lg hover:shadow-xl"
          >
            Begin a Session
          </a>
          <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-full font-medium text-lg hover:border-gray-400 transition-colors">
            Watch Demo
          </button>
        </div>

        <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl p-8 aspect-video flex items-center justify-center border border-gray-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <p className="text-gray-500">App preview coming soon</p>
          </div>
        </div>
      </div>
    </section>
  )
}
