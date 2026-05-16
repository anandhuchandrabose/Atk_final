import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Gallery from './components/Gallery'
import Everything from './components/Everything'
import Marquee from './components/Marquee'
import Philosophy from './components/Philosophy'
import Community from './components/Community'
import Testimonials from './components/Testimonials'
import Sensei from './components/Sensei'
import Journey from './components/Journey'
import Coaches from './components/Coaches'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach(el => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <Intro />
      <Gallery />
      <Everything />
      <Marquee variant="red" reverse />
      <Philosophy />
      <Community />
      <Testimonials />
      <Sensei />
      <Marquee variant="cream" />
      <Journey />
      <Coaches />
      <Footer />
    </>
  )
}
