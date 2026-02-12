import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Ideoloop - Turn Your Voice Into Powerful Content',
  description: 'Transform your authentic perspective into ready-to-share content across LinkedIn, Twitter, email, and more.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Testimonials />
      <HowItWorks />
      <Benefits />
      <FinalCTA />
      <Footer />
    </main>
  )
}
