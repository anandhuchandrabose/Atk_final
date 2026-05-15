import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

/**
 * RevealWords — each word slides up from a line-level mask on scroll.
 *
 * Props:
 *   tag      — HTML element to render (default: 'h2')
 *   delay    — seconds before the first word starts (default: 0)
 *   className — forwarded to the element
 */
export default function RevealWords({ children, tag: Tag = 'h2', delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // type:"words" splits into individual words.
    // mask:"lines" wraps by line so the overflow:hidden region aligns
    // naturally with the text baseline — no jarring per-word boxes.
    const split = new SplitText(el, { type: 'words', mask: 'lines' })

    const ctx = gsap.context(() => {
      gsap.from(split.words, {
        yPercent: 110,
        duration: 0.75,
        ease: 'power3.out',
        stagger: 0.05,
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
        },
      })
    }, el)

    return () => {
      ctx.revert()
      split.revert()
    }
  }, [delay])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
