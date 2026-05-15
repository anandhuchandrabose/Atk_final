/* ── Nav: transparent → solid on scroll ── */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 60) nav.classList.add('is-solid');
    else nav.classList.remove('is-solid');
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Reveal on scroll ── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
  els.forEach(el => io.observe(el));
})();

/* ── Marquee: duplicate inner so loop is seamless ── */
(function () {
  document.querySelectorAll('.marquee__track').forEach(track => {
    const inner = track.firstElementChild;
    if (!inner) return;
    const clone = inner.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });
})();

/* ── Hero subtle parallax ── */
(function () {
  const media = document.querySelector('.hero__media');
  if (!media) return;
  const hero = document.querySelector('.hero');
  let raf = 0;
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const y = Math.max(0, window.scrollY);
      if (y < window.innerHeight * 1.2) {
        media.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(${1 + Math.min(y, 600) * 0.00015})`;
      }
      raf = 0;
    });
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Community carousel: subtle drag / wheel-to-scroll-x ── */
(function () {
  const c = document.querySelector('.community__carousel');
  if (!c) return;
  let isDown = false, startX = 0, scrollLeft = 0;
  c.addEventListener('mousedown', (e) => {
    isDown = true; c.classList.add('grabbing');
    startX = e.pageX - c.offsetLeft;
    scrollLeft = c.scrollLeft;
  });
  ['mouseleave', 'mouseup'].forEach(ev => c.addEventListener(ev, () => { isDown = false; c.classList.remove('grabbing'); }));
  c.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - c.offsetLeft;
    c.scrollLeft = scrollLeft - (x - startX) * 1.2;
  });
})();
