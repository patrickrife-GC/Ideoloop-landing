import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          {/* Left: logo + tagline */}
          <div>
            <div className="mb-3">
              <Image src="/assets/logo.png" alt="Ideoloop" width={120} height={30} className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-gray-500">The stories are already in you.</p>
          </div>

          {/* Right: legal links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 Ideoloop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
