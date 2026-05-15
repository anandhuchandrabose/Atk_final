import RevealHeadline from './RevealHeadline'

const testimonials = [
  {
    quote: 'Karate gave me a quiet mind in a loud world.',
    name: 'Aravind R.',
    role: 'Brown Belt · 4 years',
    delay: '',
  },
  {
    quote: 'My daughter walks taller. The dojo became her second home.',
    name: 'Lakshmi Menon',
    role: 'Parent · Attingal',
    delay: 'reveal--delay-1',
  },
  {
    quote: "Sensei Sambath doesn't teach karate — he teaches a way of being.",
    name: 'Joshua Mathew',
    role: 'Black Belt · National Medallist',
    delay: 'reveal--delay-2',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials" data-screen-label="06 Testimonials">
      <div className="wrap">
        <div className="testimonials__head">
          <RevealHeadline tag="h2" className="testimonials__title display">
            What our students say
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
