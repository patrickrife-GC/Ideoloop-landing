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
        
        
          href="#start"
          className="px-6 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-light transition-colors"
        >
          Start Free
        </a>
      </div>
    </nav>
  )
}
