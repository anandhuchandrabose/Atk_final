import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export default function Hero() {
  const eyebrowRef = useRef(null)
  const titleRef   = useRef(null)
  const subRef     = useRef(null)
  const rowRef     = useRef(null)
  const statRef    = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 })

    // Split title into lines for the masked slide-up reveal
    const split = new SplitText(titleRef.current, { type: 'lines', mask: 'lines' })

    tl.from(eyebrowRef.current, {
      opacity: 0,
      y: 16,
      duration: 0.7,
      ease: 'power3.out',
    })
    .from(split.lines, {
      yPercent: 110,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.12,
    }, '-=0.3')
    .from(subRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: 'power3.out',
    }, '-=0.5')
    .from(rowRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: 'power3.out',
    }, '-=0.45')
    .from(statRef.current, {
      opacity: 0,
      x: 20,
      duration: 0.7,
      ease: 'power3.out',
    }, '-=0.6')

    return () => {
      tl.kill()
      split.revert()
    }
  }, [])

  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="hero__media" aria-hidden="true">
        <video autoPlay muted loop playsInline className="hero__video">
          <source src="/assets/hero12.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero__veil" aria-hidden="true"></div>

      <div className="wrap hero__inner">
        <p className="eyebrow hero__eyebrow" ref={eyebrowRef}>空手道 · KARATE-DŌ · EST. ATTINGAL</p>
        <h1 className="hero__title display" ref={titleRef}>Expand the space within</h1>
        <p className="hero__sub body" ref={subRef}>A new-age martial arts system for personal growth and social wellness.</p>

        <div className="hero__row" ref={rowRef}>
          <button className="hero__cta" type="button">
            <span>Begin your journey</span>
            <span className="hero__cta-arrow" aria-hidden="true">↗</span>
          </button>
          <div className="hero__scroll">
            <span>Scroll</span>
            <span className="hero__scroll-bar" aria-hidden="true"></span>
          </div>
        </div>
      </div>

      <aside className="hero__stat-strip" ref={statRef} aria-hidden="true">
        <div><strong>60+</strong><span>Dojos</span></div>
        <div><strong>40+</strong><span>Coaches</span></div>
        <div><strong>10k+</strong><span>Students</span></div>
      </aside>
    </section>
  )
}
