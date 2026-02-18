export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">I</span>
          </div>
          <span className="font-bold text-lg text-gray-900">Ideoloop</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</a>
          <a href="#benefits" className="hover:text-gray-900 transition-colors">Benefits</a>
          <a href="#testimonials" className="hover:text-gray-900 transition-colors">Testimonials</a>
        </div>

        <a
          href="#start"
          className="px-6 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-light transition-colors"
        >
          Start Free
        </a>
      </div>
    </nav>
  )
}
