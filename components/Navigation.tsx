import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/assets/logo.png" alt="Ideoloop" width={140} height={36} className="h-9 w-auto" />
        </div>

        <a
          href="#waitlist"
          className="px-6 py-2 bg-terracotta text-white rounded-full text-sm font-medium hover:bg-terracotta-dark transition-colors"
        >
          Get Early Access
        </a>
      </div>
    </nav>
  )
}
