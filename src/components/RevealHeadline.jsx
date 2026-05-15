import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

/**
 * RevealHeadline — lines slide up from a masked container on scroll.
 *
 * Props:
 *   tag      — HTML element to render (default: 'h1')
 *   delay    — seconds before the first line starts (default: 0)
 *   className — forwarded to the element
 */
export default function RevealHeadline({ children, tag: Tag = 'h1', delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // mask:"lines" auto-wraps each line in overflow:hidden so we get the
    // clean "text rises from below a clip" look without any extra HTML.
    const split = new SplitText(el, { type: 'lines', mask: 'lines' })

    const ctx = gsap.context(() => {
      gsap.from(split.lines, {
        yPercent: 110,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.12,
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
