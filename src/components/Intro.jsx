export default function Intro() {
  return (
    <section className="intro" id="way" data-screen-label="02 The Way">
      <div className="wrap">
        <h2 className="intro__title display reveal">The way of <br />the empty hand</h2>
        <p className="intro__body body reveal reveal--delay-1">
          Karate is more than combat. It is the lifelong pursuit of discipline, balance and self-mastery — where the body grows stronger, the mind becomes calmer and the spirit awakens.
        </p>
        <figure className="intro__feature reveal reveal--delay-2">
          <img src="/assets/modern-disciplines.jpg" alt="Karate practitioner tying a black belt" loading="lazy" />
          <figcaption className="intro__feature-overlay">
            <span className="intro__feature-title">Karate with<br />modern disciplines</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
