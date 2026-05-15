export default function Hero() {
  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="hero__media" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero__video"
        >
          <source src="/assets/WEBSITEHERO.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero__veil" aria-hidden="true"></div>

      <div className="wrap hero__inner">
        <p className="eyebrow hero__eyebrow reveal">空手道 · KARATE-DŌ · EST. ATTINGAL</p>
        <h1 className="hero__title display reveal reveal--delay-1">Expand the space within</h1>
        <p className="hero__sub body reveal reveal--delay-2">A new-age martial arts system for personal growth and social wellness.</p>

        <div className="hero__row reveal reveal--delay-3">
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

      <aside className="hero__stat-strip reveal reveal--delay-3" aria-hidden="true">
        <div><strong>60+</strong><span>Dojos</span></div>
        <div><strong>40+</strong><span>Coaches</span></div>
        <div><strong>10k+</strong><span>Students</span></div>
      </aside>
    </section>
  )
}
