import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import HowItWorks from '@/components/HowItWorks'
import OutputShowcase from '@/components/OutputShowcase'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
import WaitlistForm from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ideoloop — Stop Writing. Start Talking.</title>
      </Head>
      <main className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <Stats />
        <HowItWorks />
        <OutputShowcase />
        <Benefits />
        <Testimonials />
        <WaitlistForm />
        <Footer />
      </main>
    </>
  )
}
