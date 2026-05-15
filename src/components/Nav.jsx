import { useEffect, useState } from 'react'

export default function Nav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    document.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${solid ? ' is-solid' : ''}`} aria-label="Primary">
      <a className="nav__brand" href="#top" aria-label="Attingal Karate home">
        <img src="/assets/logo.png" alt="Attingal Karate logo" className="nav__logo-img" />
      </a>
      <ul className="nav__links">
        <li><a href="#way">About us</a></li>
        <li><a href="#everything">Gallery</a></li>
        <li><a href="#community">Community</a></li>
        <li><a href="#sensei">Sensei</a></li>
        <li><a href="#gallery">Contact Us</a></li>
      </ul>
      <button className="nav__cta" type="button">Begin Training</button>
      <button className="nav__menu" type="button" aria-label="Open menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </svg>
      </button>
    </nav>
  )
}
