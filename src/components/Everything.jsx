import RevealHeadline from './RevealHeadline'

const cards = [
  { src: '/assets/team2.jpg', alt: 'Students training in formation at the dojo', tag: 'DOJOS', num: '60+', label: 'Dojos', delay: '' },
  { src: '/assets/team.jpg', alt: 'Athletes sparring at the Attingal Karate field', tag: 'STUDENTS', num: '10000+', label: 'Students', delay: 'reveal--delay-1' },
  { src: '/assets/team3.jpg', alt: 'Karateka in white gi at sunrise', tag: 'COACHES', num: '40+', label: 'Coaches', delay: 'reveal--delay-2' },
]

export default function Everything() {
  return (
    <section className="everything" id="everything" data-screen-label="03 Programs">
      <div className="wrap">
        <RevealHeadline tag="h2" className="everything__title display">
          Everything you need to walk the way
        </RevealHeadline>
        <div className="everything__grid">
          {cards.map((card, i) => (
            <div key={i} className={`stat-card reveal ${card.delay}`}>
              <img src={card.src} alt={card.alt} loading="lazy" />
              <span className="stat-card__tag">{card.tag}</span>
              <span className="stat-card__num"><em>{card.num}</em>{card.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
