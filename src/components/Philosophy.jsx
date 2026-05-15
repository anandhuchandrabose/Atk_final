import RevealWords from './RevealWords'

const blocks = [
  {
    badge: '01 / REAL DISCIPLINE',
    src: '/assets/dojo.jpg',
    alt: 'Students in formation at the dojo',
    tag: '空手道 · KARATE-DŌ',
    heading: 'Real discipline. Real transformation.',
    body: 'Karate is more than punches and kicks — it is a lifelong practice. Through repetition, respect and resilience, students learn to remain calm under pressure, move with purpose and live with confidence inside and outside the dojo.',
    reverse: false,
  },
  {
    badge: '02 / THE WAY OF THE EMPTY HAND',
    src: '/assets/sensei.jpg',
    alt: 'Karate athlete mid-kick at sunrise',
    tag: 'THE WAY OF THE EMPTY HAND',
    heading: 'Tradition meets modern training.',
    body: 'At Attingal Karate, training goes beyond punches and kicks. Under experienced Senseis and champions, students develop discipline, confidence, focus and resilience — inside and outside the dojo. Every session is designed to strengthen the body, sharpen the mind and awaken the spirit.',
    reverse: true,
  },
  {
    badge: '03 / THE DOJO EXPERIENCE',
    src: '/assets/team.jpg',
    alt: 'Athletes sparring at the Attingal Karate field',
    tag: 'THE DOJO EXPERIENCE',
    heading: 'Guided by senseis forged through discipline.',
    body: 'From kata and kumite to strength, flexibility and competition preparation, our programs combine traditional karate values with modern athletic development. Every class is structured to help students grow physically, mentally and spiritually.',
    reverse: false,
  },
  {
    badge: '04 / ATTINGAL KARATE TEAM',
    src: '/assets/dojo.jpg',
    alt: 'Group training session at the dojo',
    tag: 'ATTINGAL KARATE TEAM',
    heading: 'Stronger together, united through karate.',
    body: 'Attingal Karate is more than a training center. It is a community built on respect, support and shared growth. From young beginners to national champions, every student walks the same path of discipline, perseverance and self-mastery together.',
    reverse: true,
  },
  {
    badge: '05 / INNER STRENGTH',
    src: '/assets/modern-disciplines.jpg',
    alt: 'Karateka tying a black belt',
    tag: 'STRONGER TOGETHER',
    heading: 'Discover balance, focus & inner strength.',
    body: 'With over 40 coaches, 60+ dojos and thousands of students, Attingal Karate continues to build champions, leaders and stronger human beings through the philosophy of Karate-Dō.',
    reverse: false,
  },
]

export default function Philosophy() {
  return (
    <section className="philosophy" id="philosophy" data-screen-label="04 Philosophy">
      <div className="wrap">
        <h2 className="philosophy__kicker reveal">
          空手<span className="dot"></span>規律<span className="dot"></span>遺産
        </h2>
        {blocks.map((block, i) => (
          <article key={i} className={`philosophy__block${block.reverse ? ' philosophy__block--reverse' : ''} reveal`}>
            <div className="philosophy__media">
              <span className="badge">{block.badge}</span>
              <img src={block.src} alt={block.alt} loading="lazy" />
            </div>
            <div className="philosophy__text">
              <span className="philosophy__tag">{block.tag}</span>
              <RevealWords tag="h3" className="philosophy__h">
                {block.heading}
              </RevealWords>
              <p className="philosophy__p">{block.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
