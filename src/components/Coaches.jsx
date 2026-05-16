import RevealHeadline from './RevealHeadline'

const coaches = [
  { src: '/assets/sensei/Sambath%20.JPG',             name: 'Sambath',          role: 'Principal Instructor' },
  { src: '/assets/sensei/Sudheer%20S%20A%20.JPG',     name: 'Sudheer S A',      role: 'Chief Instructor' },
  { src: '/assets/sensei/Sooraj%20Santhosh%20.JPG',   name: 'Sooraj Santhosh',  role: 'Chief Instructor' },
  { src: '/assets/sensei/VISHNU.JPG',                 name: 'Vishnu',           role: 'Chief InstrChief Instructor' },
  { src: '/assets/sensei/Akhil%20M%20.jpg',           name: 'Akhil M',          role: 'Chief Instructor' },
  { src: '/assets/sensei/Amal%20.jpg',                name: 'Amal',             role: 'Chief Instructor' },
  { src: '/assets/sensei/Shaju%20S%20.JPG',           name: 'Shaju S',          role: 'Chief Instructor' },
  { src: '/assets/sensei/SOORAJ%20S%20.JPG',          name: 'Sooraj S',         role: 'Chief Instructor' },
  { src: '/assets/sensei/ANARGHA%20.JPG',             name: 'Anargha',          role: 'Chief Instructor' },
  { src: '/assets/sensei/MAHEEN.JPG',                 name: 'Maheen',           role: 'Chief Instructor' },
  { src: '/assets/sensei/Swathy%20.JPG',              name: 'Swathy',           role: 'Chief Instructor' },
  { src: '/assets/sensei/HAMDAN%20.JPG',              name: 'Hamdan',           role: 'Chief Instructor' },
  { src: '/assets/sensei/muhammed%20shajil%20.JPG',   name: 'Muhammed Shajil',  role: 'Chief Instructor' },
  // { src: '/assets/sensei/ADIL%20SALIM.jpg',           name: 'Adil Salim',       role: 'Coach' },
  // { src: '/assets/sensei/ARJUN.jpg',                  name: 'Arjun',            role: 'Coach' },
  // { src: '/assets/sensei/ARSHA%20C%20%20.JPG',        name: 'Arsha C',          role: 'Coach' },
  // { src: '/assets/sensei/ASIN.JPG',                   name: 'Asin',             role: 'Coach' },
  // { src: '/assets/sensei/Amal%20Faisal%20.jpg',       name: 'Amal Faisal',      role: 'Coach' },
  // { src: '/assets/sensei/Anto%20%20.JPG',             name: 'Anto',             role: 'Coach' },
  // { src: '/assets/sensei/Bhadra%20.JPG',              name: 'Bhadra',           role: 'Coach' },
  // { src: '/assets/sensei/Chithra%20.JPG',             name: 'Chithra',          role: 'Coach' },
  // { src: '/assets/sensei/DIVYA%20MOL.JPG',            name: 'Divya Mol',        role: 'Coach' },
  // { src: '/assets/sensei/GOWRI%20LEKSHMI.jpg',        name: 'Gowri Lekshmi',   role: 'Coach' },
  // { src: '/assets/sensei/Rangan%20.jpg',              name: 'Rangan',           role: 'Coach' },
  // { src: '/assets/sensei/SOORAJ%20SHAJI%20.JPG',      name: 'Sooraj Shaji',     role: 'Coach' },
  // { src: '/assets/sensei/SUDHEESH.JPG',               name: 'Sudheesh',         role: 'Coach' },
  // { src: '/assets/sensei/Shefeek%20.jpg',             name: 'Shefeek',          role: 'Coach' },
  // { src: '/assets/sensei/avanee%20%20.JPG',           name: 'Avanee',           role: 'Coach' },
  // { src: '/assets/sensei/bhAVIN%20.jpg',              name: 'Bhavin',           role: 'Coach' },
  // { src: '/assets/sensei/dEVASOORYA.JPG',             name: 'Devasoorya',       role: 'Coach' },
  // { src: '/assets/sensei/goutham%20.JPG',             name: 'Goutham',          role: 'Coach' },
  // { src: '/assets/sensei/jyothisha%20.jpg',           name: 'Jyothisha',        role: 'Coach' },
  // { src: '/assets/sensei/nidhin%20.jpg',              name: 'Nidhin',           role: 'Coach' },
]

export default function Coaches() {
  return (
    <section className="coaches" id="coaches" data-screen-label="07 Coaches">
      <div className="wrap">
        <div className="coaches__head">
          <RevealHeadline tag="h2" className="coaches__title display">
            Meet our coaches
          </RevealHeadline>
          <p className="coaches__lede reveal reveal--delay-1">
            Every coach at Attingal Karate carries the discipline of the dojo into every class — forged through years of training and competition.
          </p>
        </div>
        <div className="coaches__grid">
          {coaches.map((coach, i) => (
            <article key={i} className="coach-card reveal">
              <div className="coach-card__img-wrap">
                <img src={coach.src} alt={coach.name} loading="lazy" />
              </div>
              <div className="coach-card__info">
                <span className="coach-card__name">{coach.name}</span>
                <span className="coach-card__role">{coach.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
