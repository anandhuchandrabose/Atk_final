import RevealHeadline from './RevealHeadline'

const testimonials = [
  {
    quote: 'Run by highly skilled, passionate and dedicated professionals providing result oriented training.',
    name: 'Binesh Madhuripu',
    role: 'Google review',
    delay: '',
  },
  {
    quote: 'a great way to channel your ability to become a champion',
    name: 'Antoksk',
    role: 'Google review',
    delay: 'reveal--delay-1',
  },
  {
    quote: "Attingal karate team has one of the best athlete friendly atmosphere. They always brings a fun and logic oriantal ways to learn karate.",
    name: 'Resmipriya S Nair',
    role: 'Google review',
    delay: 'reveal--delay-2',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials" data-screen-label="06 Testimonials">
      <div className="wrap">
        <div className="testimonials__head">
          <RevealHeadline tag="h2" className="testimonials__title display">
            Reviews from the web.
          </RevealHeadline>
          <p className="testimonials__lede reveal reveal--delay-1">
            Every black belt was once a beginner who chose not to give up. Hear from those walking the way.
          </p>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <article key={i} className={`tcard reveal ${t.delay}`}>
              <div className="tcard__stars">★★★★★</div>
              <p className="tcard__quote">{t.quote}</p>
              <div className="tcard__who">
                <span className="tcard__name">{t.name}</span>
                <span className="tcard__role">{t.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
