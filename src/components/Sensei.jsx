export default function Sensei() {
  return (
    <section className="sensei" id="sensei" data-screen-label="07 Sensei">
      <div className="wrap sensei__inner">
        <div className="sensei__media reveal">
          <img src="/assets/sensei.jpg" alt="Sensei Sambath portrait" loading="lazy" />
        </div>
        <div className="sensei__copy reveal reveal--delay-1">
          <p className="eyebrow" style={{ color: 'rgba(231,230,226,.85)' }}>空手道 · CHIEF INSTRUCTOR</p>
          <h3 className="sensei__name" style={{ marginTop: '14px' }}>Sambath<br />sensei</h3>
          <p className="sensei__lede">
            Three decades on the mat. Builder of champions, leaders and stronger human beings — a quiet teacher of a louder discipline.
          </p>
        </div>
      </div>
    </section>
  )
}
