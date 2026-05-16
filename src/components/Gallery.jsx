import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BEFORE = [
  { src: '/assets/grid.jpg',               alt: '' },
  { src: '/assets/112.jpg',               alt: '' },
  { src: '/assets/118.jpg',               alt: '' },
  { src: '/assets/113.jpg',             alt: '' },
  { src: '/assets/114.jpg', alt: '' },
  { src: '/assets/115.jpg',            alt: '' },
  { src: '/assets/116.jpg',               alt: '' },
]

const AFTER = [
  { src: '/assets/117.jpg',             alt: '' },
  { src: '/assets/team.jpg',               alt: '' },
  { src: '/assets/modern-disciplines.jpg', alt: '' },
  { src: '/assets/hero.png',               alt: '' },
  { src: '/assets/grid.jpg',               alt: '' },
  { src: '/assets/dojo.jpg',               alt: '' },
  { src: '/assets/journey.jpg',            alt: '' },
]

export default function Gallery() {
  const sectionRef = useRef(null)
  const centerRef  = useRef(null)
  const tileRefs   = useRef([])

  useEffect(() => {
    const init = () => {
      const section = sectionRef.current
      const center  = centerRef.current
      if (!section || !center) return

      const tiles    = tileRefs.current.filter(Boolean)
      const introFig = document.querySelector('.intro__feature')
      if (!introFig) return

      // ── Measure everything at scroll = 0 ────────────────────────────────
      const sRect = section.getBoundingClientRect()
      const cRect = center.getBoundingClientRect()
      const iRect = introFig.getBoundingClientRect()

      // Flyer START: where intro image sits when its bottom just hits viewport bottom
      // At that scroll offset, intro top in viewport = vh - introHeight
      const startTop  = window.innerHeight - iRect.height
      const startLeft = iRect.left
      const startW    = iRect.width
      const startH    = iRect.height

      // Flyer END: gallery center cell position when section pins at viewport top
      // (section.top = 0 → center's viewport pos = its offset from section top)
      const endTop  = cRect.top  - sRect.top
      const endLeft = cRect.left
      const endW    = cRect.width
      const endH    = cRect.height

      // ── Build flyer (fixed-position visual proxy) ────────────────────────
      const flyer = document.createElement('figure')
      Object.assign(flyer.style, {
        position:     'fixed',
        top:          `${startTop}px`,
        left:         `${startLeft}px`,
        width:        `${startW}px`,
        height:       `${startH}px`,
        borderRadius: '25px',
        overflow:     'hidden',
        background:   '#041514',
        zIndex:       '1000',
        margin:       '0',
        pointerEvents:'none',
        opacity:      '0',
        willChange:   'top, left, width, height',
      })

      const flyerImg = document.createElement('img')
      flyerImg.src = '/assets/modern-disciplines.jpg'
      flyerImg.alt = 'Karate practitioner tying a black belt'
      Object.assign(flyerImg.style, { width: '100%', height: '100%', objectFit: 'cover', display: 'block' })
      flyer.appendChild(flyerImg)

      const label = document.createElement('div')
      Object.assign(label.style, {
        position:      'absolute',
        inset:         '0',
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
        justifyContent:'flex-start',
        padding:       'clamp(28px,5vw,56px) clamp(20px,3vw,40px)',
        textAlign:     'center',
        pointerEvents: 'none',
      })
      const span = document.createElement('span')
      span.textContent = 'Karate with modern disciplines'
      Object.assign(span.style, {
        fontFamily:    '"Passion One", sans-serif',
        fontSize:      'clamp(44px, 7.8vw, 100px)',
        lineHeight:    '0.96',
        letterSpacing: '-0.02em',
        textTransform: 'uppercase',
        color:         '#E7E6E2',
        marginTop:     'clamp(32px,5vw,60px)',
        textShadow:    '0 2px 24px rgba(0,0,0,.25)',
      })
      label.appendChild(span)
      flyer.appendChild(label)
      document.body.appendChild(flyer)

      // Flyer is the visual proxy — hide the real intro figure
      gsap.set(introFig, { opacity: 0 })
      gsap.set(tiles, { opacity: 0 })

      // Scroll distances (px) for each phase, used to proportion timeline durations
      const d1 = iRect.height                                    // intro enters → fully visible
      const d2 = sRect.top - iRect.bottom + window.innerHeight   // fully visible → gallery pins

      // ── Single timeline, single ScrollTrigger — no boundary conflicts ────
      // Phase 1a (d1 px): flyer tracks intro image entering viewport (linear, 1:1)
      // Phase 1b (d2 px): flyer shrinks & flies to gallery centre (eased)
      // scrub:true = zero lag → no overshoot on scroll-back
      const flyTl = gsap.timeline({
        scrollTrigger: {
          trigger:     introFig,
          start:       'top bottom',
          endTrigger:  section,
          end:         'top top',
          scrub:       true,
          onEnter:     () => gsap.set(flyer, { opacity: 1 }),
          onLeaveBack: () => gsap.set(flyer, { opacity: 0 }),
          onEnterBack: () => gsap.set(flyer, { opacity: 1 }),
        },
      })

      // Phase 1a — track intro image entering (no ease, matches natural scroll)
      flyTl.fromTo(flyer,
        { top: window.innerHeight, left: startLeft, width: startW, height: startH, borderRadius: '25px' },
        { top: startTop, ease: 'none', duration: d1 }
      )
      // Phase 1b — shrink & fly (eased within the scrub)
      flyTl.to(flyer,
        { top: endTop, left: endLeft, width: endW, height: endH, borderRadius: '15px', ease: 'power2.inOut', duration: d2 }
      )
      // Label fades during first third of phase 1b
      flyTl.to(label,
        { opacity: 0, ease: 'none', duration: d2 * 0.35 },
        d1   // start at the phase 1b boundary
      )

      // ── Gallery pin: hand off flyer → centre cell, burst tiles in ────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger:       section,
          start:         'top top',
          end:           '+=250',
          scrub:         0.3,
          pin:           true,
          anticipatePin: 1,
          onEnter: () => {
            if (!center.querySelector('img')) {
              const cellImg = document.createElement('img')
              cellImg.src = '/assets/modern-disciplines.jpg'
              cellImg.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;'
              center.style.background = '#041514'
              center.appendChild(cellImg)
            }
            gsap.to(flyer, { opacity: 0, duration: 0.15 })
          },
          onLeaveBack: () => {
            const cellImg = center.querySelector('img')
            if (cellImg) cellImg.remove()
            center.style.background = 'transparent'
            gsap.set(flyer, { opacity: 1 })
          },
        },
      })

      tl.to(tiles, {
        opacity:  1,
        stagger:  { amount: 0.15, from: 'center' },
      }, 0)

      ScrollTrigger.refresh()

      return () => {
        if (document.body.contains(flyer)) flyer.remove()
        gsap.set(introFig, { clearProps: 'opacity' })
        ScrollTrigger.getAll().forEach(st => st.kill())
      }
    }

    if (document.readyState === 'complete') {
      const cleanup = init()
      return cleanup
    }
    let cleanup
    const onLoad = () => { cleanup = init() }
    window.addEventListener('load', onLoad)
    return () => {
      window.removeEventListener('load', onLoad)
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <section
      className="gallery"
      id="gallery"
      ref={sectionRef}
      data-screen-label="03 Gallery"
    >
      <div className="wrap">
        <div className="gallery__grid">

          {BEFORE.map((img, i) => (
            <figure
              key={`b${i}`}
              className="gallery__tile"
              ref={el => { tileRefs.current[i] = el }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}

          <figure
            className="gallery__tile"
            ref={centerRef}
            style={{ overflow: 'hidden', background: 'transparent' }}
          />

          {AFTER.map((img, i) => (
            <figure
              key={`a${i}`}
              className="gallery__tile"
              ref={el => { tileRefs.current[7 + i] = el }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}

        </div>
      </div>
    </section>
  )
}
