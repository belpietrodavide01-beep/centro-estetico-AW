import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroductionSection from './components/IntroductionSection'
import TreatmentsSection from './components/TreatmentsSection'
import AboutSection from './components/AboutSection'
import BentoGridSection from './components/BentoGridSection'
import MedicalSection from './components/MedicalSection'
import TestimonialSection from './components/TestimonialSection'
import FaqSection from './components/FaqSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

gsap.registerPlugin(ScrollTrigger)

// Global GSAP Configuration for Performance
gsap.config({
  force3D: true,
  nullTargetWarn: false,
})

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0, // Leggermente più veloce per reattività
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1, // Più controllo
      touchMultiplier: 1.5,
      lerp: 0.1, // Fondamentale per la fluidità "limpida"
    })

    // Sincronizzazione atomica con GSAP
    lenis.on('scroll', ScrollTrigger.update)

    const update = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    // Ottimizzazione ScrollTrigger global
    ScrollTrigger.defaults({
      markers: false,
      fastScrollEnd: true,
    })

    return () => {
      lenis.destroy()
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#faf9f6' }}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Hero isMenuOpen={menuOpen} />
      <IntroductionSection />

      <TreatmentsSection />
      <AboutSection />
      <BentoGridSection />
      <MedicalSection />
      <TestimonialSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
