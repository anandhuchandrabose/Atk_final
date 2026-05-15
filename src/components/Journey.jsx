export default function Journey() {
  return (
    <section className="journey" id="journey" data-screen-label="09 Journey">
      <div className="journey__inner">
        <figure className="journey__media reveal">
          <img src="/assets/journey.jpg" alt="Students lined up on the dojo floor" loading="lazy" />
        </figure>
        <div className="journey__bar">
          <h2 className="journey__title reveal">Ready to begin<br />your journey?</h2>
          <div className="journey__copy reveal reveal--delay-1">
            <p className="journey__lede">Every black belt was once a beginner who chose not to give up.</p>
            <button className="journey__cta" type="button">
              <span>Find your dojo</span>
              <span aria-hidden="true" style={{ marginLeft: '2px' }}>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
