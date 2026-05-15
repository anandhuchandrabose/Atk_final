const cols = [
  {
    heading: 'Train',
    links: ['Find a dojo', 'Programs', 'Kata & Kumite', 'Strength'],
  },
  {
    heading: 'Discover',
    links: ['The philosophy', 'Senseis', 'Champions', 'Stories'],
  },
  {
    heading: 'Connect',
    links: ['Instagram', 'YouTube', 'Contact', 'Press'],
  },
]

export default function Footer() {
  return (
    <footer className="foot" data-screen-label="10 Footer">
      <div className="wrap">
        <div className="foot__top">
          <div className="foot__brand">
            <h3>ATTINGAL<br />KARATE</h3>
            <p>The way of the empty hand. A new-age martial arts system for personal growth and social wellness.</p>
          </div>
          {cols.map((col) => (
            <div key={col.heading} className="foot__col">
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot__bottom">
          <span>© 2026 ATTINGAL KARATE <span className="dot">·</span> ALL RIGHTS RESERVED</span>
          <span>ATTINGAL <span className="dot">·</span> KERALA <span className="dot">·</span> INDIA</span>
        </div>
      </div>
    </footer>
  )
}
