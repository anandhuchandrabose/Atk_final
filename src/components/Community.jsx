import { useRef } from 'react'

const cards = [
  { src: '/assets/team.jpg', alt: 'Team sparring', label: 'SPARRING · 2025' },
  { src: '/assets/dojo.jpg', alt: 'Group training', label: 'KATA FORMATION' },
  { src: '/assets/sensei.jpg', alt: 'Mid-kick portrait', label: 'KUMITE' },
  { src: '/assets/modern-disciplines.jpg', alt: 'Tying the belt', label: 'THE BLACK BELT' },
  { src: '/assets/grid.jpg', alt: 'Outdoor practice', label: 'OUTDOOR TRAINING' },
  { src: '/assets/hero.png', alt: 'Field training', label: 'CHAMPIONSHIP' },
]

export default function Community() {
  const carouselRef = useRef(null)

  const handleMouseDown = (e) => {
    const c = carouselRef.current
    if (!c) return
    let active = true
    const startX = e.pageX - c.offsetLeft
    const startScroll = c.scrollLeft
    c.classList.add('grabbing')

    const onMove = (e) => {
      if (!active) return
      e.preventDefault()
      c.scrollLeft = startScroll - (e.pageX - c.offsetLeft - startX) * 1.2
    }
    const onUp = () => {
      active = false
      c.classList.remove('grabbing')
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  return (
    <section className="community" id="community" data-screen-label="05 Community">
      <div className="wrap community__head reveal">
        <p className="community__sub">Attingal<br />Karate Team</p>
      </div>
      <h2 className="community__mega reveal">COMMUNITY</h2>
      <div
        className="community__carousel reveal"
        role="region"
        aria-label="Community photos"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={() => carouselRef.current?.classList.remove('grabbing')}
      >
        {cards.map((card, i) => (
          <figure key={i} className="community__card">
            <img src={card.src} alt={card.alt} loading="lazy" />
            <figcaption className="community__card-label">{card.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
