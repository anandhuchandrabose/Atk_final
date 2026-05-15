const redContent = (
  <>
    REAL DISCIPLINE <i className="dot"></i> REAL TRANSFORMATION <i className="dot"></i> 空手 · 規律 · 遺産 <i className="dot"></i> TRADITION MEETS MODERN TRAINING <i className="dot"></i> FORGED THROUGH DISCIPLINE <i className="dot"></i>
  </>
)

const creamContent = (
  <>
    READY TO BEGIN <i className="dot"></i> THE WAY OF THE EMPTY HAND <i className="dot"></i> ENROLL NOW <i className="dot"></i> 空手道 · 規律 · 遺産 <i className="dot"></i> ATTINGAL KARATE <i className="dot"></i>
  </>
)

export default function Marquee({ variant = 'red', reverse = false }) {
  const content = variant === 'red' ? redContent : creamContent

  return (
    <div className={`marquee marquee--${variant}`} aria-hidden="true">
      <div className={`marquee__track${reverse ? ' marquee__track--reverse' : ''}`}>
        <span>{content}</span>
        <span aria-hidden="true">{content}</span>
      </div>
    </div>
  )
}
