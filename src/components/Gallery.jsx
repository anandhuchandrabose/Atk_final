const tiles = [
  { src: '/assets/grid.jpg', delay: '' },
  { src: '/assets/team.jpg', delay: '' },
  { src: '/assets/dojo.jpg', delay: '' },
  { src: '/assets/sensei.jpg', delay: '' },
  { src: '/assets/modern-disciplines.jpg', delay: '' },
  { src: '/assets/dojo.jpg', delay: 'reveal--delay-1' },
  { src: '/assets/grid.jpg', delay: 'reveal--delay-1' },
  { src: '/assets/sensei.jpg', delay: 'reveal--delay-1' },
  { src: '/assets/team.jpg', delay: 'reveal--delay-1' },
  { src: '/assets/modern-disciplines.jpg', delay: 'reveal--delay-1' },
  { src: '/assets/team.jpg', delay: 'reveal--delay-2' },
  { src: '/assets/grid.jpg', delay: 'reveal--delay-2' },
  { src: '/assets/dojo.jpg', delay: 'reveal--delay-2' },
  { src: '/assets/sensei.jpg', delay: 'reveal--delay-2' },
  { src: '/assets/modern-disciplines.jpg', delay: 'reveal--delay-2' },
]

export default function Gallery() {
  return (
    <section className="gallery" id="gallery" data-screen-label="03 Gallery">
      <div className="wrap">
        <div className="gallery__grid">
          {tiles.map((tile, i) => (
            <figure key={i} className={`gallery__tile reveal ${tile.delay}`}>
              <img src={tile.src} alt="" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
