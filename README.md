# Handoff: Attingal Karate — Landing Page

## Overview
A single-page marketing site for **Attingal Karate**, a martial arts brand based in Kerala, India. The page introduces the dojo's philosophy ("The Way of the Empty Hand"), showcases programs and the team, profiles the chief sensei, and drives users toward a "Find your dojo / Begin your journey" CTA. It is editorial in tone: large Passion One display type, full-bleed photography, marquee bands, and a high-contrast ink/red/cream palette.

## About the Design Files
The files in this bundle are **design references created in HTML/CSS/vanilla JS** — a prototype demonstrating the intended look, layout, type, color, motion, and behavior. They are **not production code**. The task is to **recreate this design in the target codebase's existing environment** (Next.js, Astro, plain HTML, etc.) using its established patterns, component library, and asset pipeline. If no environment exists yet, pick the framework that best fits the project — for a mostly-static marketing site, Astro or Next.js (App Router with React Server Components) are both strong choices.

The HTML is laid out to be readable and 1:1 with the design; treat it as a spec, not as something to copy wholesale.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, ratios, and motion are all defined. Recreate pixel-perfectly. The mockup is responsive (desktop / tablet / mobile) — preserve the breakpoint behavior described below.

## Source
Reconstructed from a Figma file ("Atk (1).fig"). The Figma uses a 1280-wide MacBook frame for the hero and seven loose section frames for the rest of the page. Layout in this mock follows the Figma intent but is fluidly scaled (clamp-based) for responsiveness; some sparse Figma frames were intentionally left out (an empty black section3) and a Testimonials grid was added at the user's request.

---

## Design Tokens

### Colors
| Token   | Hex       | Use                                                |
| ------- | --------- | -------------------------------------------------- |
| `--ink`   | `#041514` | Primary dark — backgrounds, body text on light    |
| `--red`   | `#FA3139` | Accent — CTAs, dots, hover, COMMUNITY/SAMBATH bg  |
| `--cream` | `#E7E6E2` | Off-white — text on dark, soft section bg         |
| `--white` | `#FFFFFF` | Pure white — used on hero title, intro section bg |
| `--black` | `#000000` | Used once for the "Karate is more than combat…" copy color in Figma; treated as `--ink` here |
| Muted text | `rgba(231,230,226, 0.65)` | Secondary text on dark        |

### Typography
Three families. **Passion One** drives nearly all display type. The Figma uses "Momo Trust Display" for body — not on Google Fonts; **Sora** is the chosen fallback (similar metrics, geometric). Use the same fallback in production unless you have a license for Momo Trust Display.

| Family      | Weights used | Where                                            |
| ----------- | ------------ | ------------------------------------------------ |
| Passion One | 400          | All display headlines, mega text, stat numbers   |
| Sora        | 400/500/700  | Body copy, lede text (substitutes Momo Trust)    |
| Inter       | 700          | All eyebrows, tags, small caps, button labels    |

Display rules: `line-height: 0.92`, `letter-spacing: -0.022em`, `text-transform: uppercase`.

Type scale (fluid, clamp-based):
```css
--display-xl:   clamp(64px, 13vw, 200px);   /* hero title */
--display-l:    clamp(48px, 8.5vw, 128px);  /* (reserved) */
--display-m:    clamp(40px, 6.2vw, 100px);  /* section heads */
--display-s:    clamp(28px, 4.5vw, 80px);   /* sub-display */
--display-huge: clamp(80px, 22vw, 382px);   /* SAMBATH / COMMUNITY */
--body-l:       clamp(18px, 1.6vw, 24px);
--body-m:       clamp(16px, 1.3vw, 20px);
--eyebrow:      clamp(11px, 0.92vw, 13px);
```
Inter eyebrow text always uses `font-weight: 700`, `letter-spacing: 0.32em` (or `0.4em` on tags), uppercase.

### Spacing
There is no rigid spacing scale; sections use vertical rhythm via `clamp()`:
- Section vertical padding: `clamp(80px, 12vw, 160px)` (dark sections) or `clamp(80px, 10vw, 130px)` (color sections).
- Inner grid gaps: `clamp(16px, 2vw, 28px)`.
- Wrap container: `max-width: 1280px`, side padding `clamp(24px, 5vw, 70px)`.

### Border Radius
- Cards & images: `15px` (Figma) — kept as fixed value.
- Hero feature portrait: `25px`.
- Small chips/badges: `999px` (pill).
- Testimonial cards & gallery tiles: `12–18px`.

### Shadows
Minimal. Two notable uses:
- Sensei portrait: `0 30px 60px rgba(4,21,20,.25)` (the rotated photo on the red SAMBATH section).
- Hero title text-shadow: `0 4px 30px rgba(0,0,0,.35)` for legibility on the photo.

### Motion
- Reveal-on-scroll: `transform: translateY(28px) → 0` + `opacity: 0 → 1`, easing `cubic-bezier(.2,.7,.2,1)`, duration `0.9s`, with stagger delays 0 / 0.12 / 0.24 / 0.36s.
- Marquee: linear, infinite, 38s per cycle, alternate direction in second band.
- Hero parallax: background translates `Y = scrollY * 0.25` and scales `1 + min(scrollY, 600) * 0.00015`, gated to the first 1.2 viewport-heights.
- Hover image scale: `scale(1.04–1.06)` over `0.8–1s`.
- Nav transition: `0.35s` opacity / backdrop / border-color on scroll past 60px.
- Respects `prefers-reduced-motion: reduce` — reveal becomes static, marquee paused.

---

## Screens / Views

There is one screen — a single long-scroll landing page. Sections in order:

### 1. Sticky Navigation
- **Position**: `fixed` top, full width, z-50.
- **States**:
  - *Transparent* (default, scrollY ≤ 60): no background, border-bottom transparent.
  - *Solid* (scrollY > 60): `rgba(4,21,20,0.88)` + `backdrop-filter: blur(18px) saturate(140%)` + 1px cream/8% border-bottom.
- **Layout**: flex, `space-between`. Padding: `clamp(16px, 1.7vw, 22px) clamp(24px, 4vw, 56px)`.
- **Brand cluster (left)**: 38×38 circle with 1.5px cream stroke and `空` glyph (Passion One 22px), followed by stacked "ATTINGAL KARATE" (Inter 700, 12.3px, letter-spacing 0.34em) and a smaller "空手道 · KARATE-DŌ" eyebrow.
- **Links (center-right)**: The Way · Programs · Community · Sensei · Gallery (Inter 700 12.3px, letter-spacing 0.32em, uppercase). Hover: `opacity: 0.65`.
- **CTA (right)**: "Begin Training" pill, red bg, white text, 12px 22px padding, 999px radius. Hover: `translateY(-1px)`, bg `#ff4d54`.
- **Mobile (≤880px)**: hide links + CTA, show hamburger icon button (SVG 28×28).

### 2. Hero
- **Container**: full viewport min-height, `display:flex; align-items: flex-end`. Padding bottom `clamp(60px, 7vw, 110px)`. Background `--ink`.
- **Media layer**: absolute-positioned div with `assets/hero.png` as `center 30% / cover` background. Filter `contrast(1.05) saturate(.9)`. Transformed by parallax JS.
- **Veil layer**: absolute, double gradient — top-to-bottom darkening (55% → 25% → 35% → 85%) plus left-to-right (55% → 0%).
- **Content (`wrap` container)**: grid of single column, gap `clamp(24px, 3vw, 40px)`.
  - Eyebrow: cream, "空手道 · KARATE-DŌ · EST. ATTINGAL", with a 40px red `::before` rule.
  - Title (h1): `--display-xl`, white, max 13ch wide, two/three line wrap of "Expand the space within". Text-shadow noted above.
  - Subtitle: `--body-l`, white@85%, max 38ch — "A new-age martial arts system for personal growth and social wellness."
  - Bottom row (flex, `space-between`): red CTA pill "Begin your journey" with a white circle arrow "↗", + a "Scroll" indicator on the right (60px×1.5px bar with an animated red sweep).
- **Stat strip (right-side, ≥980px)**: absolutely positioned, vertically centered, three stacked stats — `60+ Dojos / 40+ Coaches / 10k+ Students`. Numbers Passion One `clamp(42px, 4.8vw, 72px)`, labels Inter 700 11px / 0.3em.

### 3. Intro — "The way of the empty hand"
- Background `--cream`. Text-center. Padding top `clamp(80px, 12vw, 180px)`.
- H2 in `--display-m`, max 16ch, "The way of the empty hand".
- Body copy `--body-l`, max 56ch, the lifelong-pursuit paragraph.
- **Feature card** (the portrait that was misrendered in v1): max-width **555px**, aspect-ratio **555/832**, `border-radius: 25px`. Image `assets/modern-disciplines.jpg`, object-fit cover.
  - Overlay sits **top-centered**: padding `clamp(28px, 5vw, 56px)`, the headline "KARATE WITH MODERN DISCIPLINES" in Passion One `clamp(44px, 7.8vw, 100px)`, cream, centered, line-height 0.96, with a subtle text-shadow `0 2px 24px rgba(0,0,0,.25)`.

### 4. Gallery — 5×3 Photo Grid
- Background `--white`, padding `clamp(48px,6vw,80px) 0 clamp(60px,8vw,110px)`.
- 15 tiles arranged 5-cols × 3-rows. Each tile: aspect-ratio `200/227`, `border-radius: 15px`, `overflow: hidden`.
- Image filter `grayscale(0.08)` at rest, transitions to `grayscale(0)` and `scale(1.06)` on hover (0.8s ease).
- **Breakpoints**: 5 cols ≥980px → 3 cols 560–979px → 2 cols ≤560px.

### 5. Everything — Stats Grid
- Background `--ink`, text cream.
- H2 `--display-m`, centered, max 18ch: "Everything you need to walk the way".
- 3-column grid, each card aspect-ratio `373/423`, radius 12–18px.
- Image filter at rest `brightness(.78) saturate(.9)`; on hover `brightness(.85) saturate(1)` + `scale(1.04)`.
- Each card has a top-left Inter eyebrow tag ("DOJOS" / "STUDENTS" / "COACHES") and a bottom Passion One stat block — `<em>60+</em>Dojos` etc. Number in 0.85em relative to the label.
- **Mobile (≤720px)**: 1 col.

### 6. Marquee — Red
- Background `--red`, text `--ink`, vertical padding `clamp(18px, 2vw, 26px)`, 1px hair borders top + bottom.
- Track is a single inline-flex with text + 14px ink-colored dots; the JS clones the inner span once so the loop is seamless.
- Direction: reverse (right-to-left feel matching the design's rhythm of alternating bands).
- Content: REAL DISCIPLINE • REAL TRANSFORMATION • 空手 · 規律 · 遺産 • TRADITION MEETS MODERN TRAINING • FORGED THROUGH DISCIPLINE.

### 7. Philosophy — 5 Editorial Blocks
- Background `--ink`. Top kicker headline "空手・規律・遺産" (with red 0.14em dots between).
- 5 alternating left/right blocks, each: `grid-template-columns: 1fr 1fr`, gap `clamp(40px, 6vw, 80px)`. Reverse blocks use `direction: rtl` on the row to swap sides.
- **Media side**: aspect-ratio `373/423`, radius 12–18px; on hover image scales 1.04 (1.2s ease). A top-left badge in Inter 700 11.5px / 0.4em — e.g. "01 / REAL DISCIPLINE".
- **Text side**: tag with a 14px red dot (`::before` circle), Passion One subhead `--display-s`, then body copy at `--body-m`, cream@78%, max 52ch.
- Block order + content:
  1. **Real discipline. Real transformation.** — "Karate is more than punches and kicks…"
  2. **Tradition meets modern training.** (reverse) — "At Attingal Karate, training goes beyond punches and kicks…"
  3. **Guided by senseis forged through discipline.** — "From kata and kumite to strength, flexibility and competition preparation…"
  4. **Stronger together, united through karate.** (reverse) — "Attingal Karate is more than a training center…"
  5. **Discover balance, focus & inner strength.** — "With over 40 coaches, 60+ dojos and thousands of students…"
- **Mobile (≤820px)**: collapse to 1 column, all blocks render LTR.

### 8. Community
- Background `--red`. Text `--ink` (the mega word) and `--cream` (sub copy).
- Top-right small sub-headline "Attingal / Karate Team" in Passion One `--display-s`, cream.
- Mega word "**COMMUNITY**" — Passion One `clamp(80px, 22vw, 290px)`, centered, `letter-spacing: -0.025em`, `white-space: nowrap`.
- **Carousel**: horizontal scroll, `scroll-snap-type: x mandatory`, scrollbar hidden, 6 cards. Each card flex `0 0 clamp(280px, 30vw, 400px)`, aspect-ratio `393/227`, radius 15px. Image hover `scale(1.05)` over 1s. Card has a bottom-left Inter eyebrow caption (e.g. "SPARRING · 2025").
- JS supports click-drag-to-scroll on desktop (`mousedown`/`mousemove`/`mouseleave|up`), 1.2× drag multiplier.

### 9. Testimonials
- Background `--ink`, text cream.
- Top: headline ("What our students say", `--display-s`, max 14ch) + lede ("Every black belt was once a beginner…") in a flex `space-between` row, wrapping to stack on narrow screens.
- 3-column grid of cards (`tcard`):
  - Border 1px cream@12%, radius 18px, padding `clamp(24px, 2.5vw, 36px)`, background cream@2%.
  - Stars: 5× ★, red, 16px, 2px tracking.
  - Quote: Passion One `clamp(20px, 1.8vw, 28px)` with red `“` / `”` smart-quotes injected via `::before`/`::after`.
  - Bottom row: name (Inter 700 13px / 0.16em) over role (Inter 12px cream@50%).
  - Hover: border → red, bg → red@4%.
- Content:
  - "Karate gave me a quiet mind in a loud world." — Aravind R., Brown Belt · 4 years
  - "My daughter walks taller. The dojo became her second home." — Lakshmi Menon, Parent · Attingal
  - "Sensei Sambath doesn't teach karate — he teaches a way of being." — Joshua Mathew, Black Belt · National Medallist
- **Mobile (≤820px)**: single column.

### 10. Sensei — SAMBATH
- Background `--red`. Min-height `clamp(540px, 60vw, 834px)`. Centered flex.
- **Mega word "SAMBATH"** absolutely centered, behind everything: Passion One `--display-huge` (up to 382px), ink, nowrap, pointer-events none.
- **Foreground grid** (2 cols `auto 1fr`, gap `clamp(28px, 5vw, 80px)`):
  - Left: portrait, width `clamp(220px, 25vw, 318px)`, aspect-ratio `318/405`, radius 15px, rotated `-2deg`, with the deep shadow noted above.
  - Right: eyebrow ("空手道 · CHIEF INSTRUCTOR"), then "Sambath sensei" name in `--display-s`, cream — then a `--body-m` ink@78% blurb: "Three decades on the mat. Builder of champions, leaders and stronger human beings…"
- **Mobile (≤720px)**: collapse to 1 col; mega word scales to 26vw.

### 11. Marquee — Cream
- Background `--cream`, text `--ink`. Same engine as the red marquee.
- Content: READY TO BEGIN • THE WAY OF THE EMPTY HAND • ENROLL NOW • 空手道 · 規律 · 遺産 • ATTINGAL KARATE.

### 12. Journey CTA
- Background `--white` above, `--ink` for the bar.
- Top: image `assets/journey.jpg`, max-width 862px, aspect-ratio `862/575`, no radius — sits directly above the ink bar (which overlaps by 1px to seal the seam).
- Ink bar: grid `1fr auto`, padding `clamp(48px, 6vw, 100px) clamp(24px, 5vw, 80px)`.
  - Left: H2 "Ready to begin your journey?" in `--display-s`, cream.
  - Right: stacked column — lede ("Every black belt was once a beginner who chose not to give up.") + red pill "Find your dojo →".
- **Mobile (≤820px)**: 1 column.

### 13. Footer
- Background `--ink`, text cream.
- Grid: `1.4fr repeat(3, 1fr)`, gap `clamp(24px, 4vw, 60px)`, divided by 1px cream@8% top and middle rules.
- Brand column: "ATTINGAL / KARATE" headline `clamp(40px, 4.2vw, 64px)`, then a short tagline @60% cream.
- Three link columns: "Train" / "Discover" / "Connect", each with a small caps header (Inter 700 11.5px / 0.4em) and 4 link items at 14px cream@60%. Link hover → red.
- Bottom row: copyright + "ATTINGAL · KERALA · INDIA" in 11.5px / 0.32em, cream@50%, with red dot separators.
- **Mobile**: 2 cols at ≤820px → 1 col at ≤520px.

---

## Interactions & Behavior

| Behavior          | Trigger                  | Effect                                                                     |
| ----------------- | ------------------------ | -------------------------------------------------------------------------- |
| Nav style flip    | `scroll > 60px`          | Add `.is-solid` → blurred ink bg + bottom rule (350ms transition)          |
| Reveal-on-scroll  | IntersectionObserver, `rootMargin: '0px 0px -10% 0px'`, threshold 0.05 | Add `.in` to `.reveal` element — fades up |
| Marquee loop      | Always (unless reduced motion) | Track translates `0 → -50%`, 38s linear infinite; cloned inner enables seamless wrap |
| Hero parallax     | scroll                   | bg translates `Y = scrollY * 0.25`, scales subtly. rAF-throttled.          |
| Community drag    | mousedown on carousel    | Drag-to-scroll horizontally; multiplier 1.2                                |
| CTA hover         | hover                    | `translateY(-1px or -2px)`, bg `#ff4d54`                                   |
| Photo card hover  | hover                    | image `scale(1.04–1.06)` + lift the card (in stats grid: `translateY(-6px)`) |
| Testimonial hover | hover                    | border-color → red, bg → red @4%                                          |
| Gallery hover     | hover                    | `scale(1.06)` + grayscale → 0 + dark gradient `::after` fades in           |
| Reduced motion    | `prefers-reduced-motion` | reveal becomes static, marquee paused, scroll-hint animation off          |

All buttons are visual only (no real functionality, per design brief).

## State Management
- Nav scrolled / not scrolled — a single boolean, derived from `scrollY`.
- Reveal element seen / not seen — tracked by IntersectionObserver (one-shot; observer unobserves on intersect).
- Carousel drag state — local: `isDown`, `startX`, `scrollLeft`.

No data fetching. No forms. No routing.

## Responsive Behavior
| Breakpoint | What changes |
| ---------- | ------------ |
| ≤980px     | Hero stat strip hidden; gallery 3 cols; Instagram-style fallbacks |
| ≤880px     | Nav links and CTA replaced by hamburger button (icon only; menu drawer not implemented in prototype) |
| ≤820px     | Philosophy blocks stack to 1 col (LTR); testimonials 1 col; journey bar 1 col; footer 2 cols |
| ≤720px     | Stats grid 1 col; sensei layout stacks; SAMBATH mega text shrinks to 26vw |
| ≤560px     | Gallery 2 cols |
| ≤520px     | Footer 1 col |

---

## Assets
All under `./assets/` — JPGs/PNGs extracted from the source Figma file:

| File                       | Use                                                 |
| -------------------------- | --------------------------------------------------- |
| `hero.png`                 | Hero background (large, ~7.5MB original)            |
| `logo.png`                 | Brand mark (not used in current layout — replaced with `空` glyph circle; keep for future) |
| `modern-disciplines.jpg`   | Intro feature portrait + reused in stats/feed       |
| `grid.jpg`                 | Gallery / Community / repeated                       |
| `team.jpg`                 | Community carousel / philosophy / repeated          |
| `dojo.jpg`                 | Stats card / philosophy / repeated                  |
| `sensei.jpg`               | Sambath section + philosophy + repeated             |
| `journey.jpg`              | Final CTA hero                                      |

**Implementation note**: in production the gallery and community grids should be populated with **unique** photos — the prototype reuses 7 photos because that's all the source provided. Optimize all images (WebP/AVIF, responsive `<picture>` or `srcset`) — the source PNGs/JPGs are very large (hero.png is ~7.5MB; sensei.jpg ~13.9MB).

## Files
- `Attingal Karate.html` — the assembled page markup
- `styles.css` — full stylesheet (tokens, sections, animations, breakpoints)
- `app.js` — vanilla JS: nav scroll state, reveal observer, marquee duplication, hero parallax, community drag-scroll
- `assets/` — all imagery

## Implementation Notes

- **Fonts**: load Passion One (400), Sora (400/500/700), Inter (700) via Google Fonts (or self-host). Substitute Sora for "Momo Trust Display" unless a license is obtained.
- **Component carve-up suggestion** (React/Vue/Astro):
  - `<Nav />` — owns the scroll-state boolean
  - `<Marquee variant="ink|red|cream">{children}</Marquee>` — auto-duplicates content for seamless loop (or use CSS-only with two pre-duplicated spans)
  - `<Reveal as="..." delay={0|1|2|3}>` — wraps any element, adds the reveal class + IntersectionObserver via a single shared observer
  - `<PhilosophyBlock reverse?>{media, tag, heading, body}</PhilosophyBlock>` — for the 5 alternating editorial blocks
  - `<StatCard tag number label image />`
  - `<TestimonialCard quote name role />`
- **Accessibility**:
  - All section landmarks use `<section>` with explicit headings.
  - The mega "COMMUNITY" / "SAMBATH" type are visual; keep them in the markup but ensure they don't compete with real headings semantically (consider `aria-hidden` or role="presentation" if they duplicate adjacent text).
  - Carousel exposes `role="region"` and `aria-label`.
  - All decorative dots / veil overlays carry `aria-hidden`.
  - Honor `prefers-reduced-motion: reduce` — already wired in the CSS.
- **Performance**: lazy-load all images below the fold (`loading="lazy"` on every non-hero `<img>`). Convert hero PNG to a WebP/AVIF — the current ~7.5MB hero PNG will block FCP.
- **The hero PNG has black diagonal artifact lines baked in** — replace with a clean photo when one is available; the dark gradient overlay in the design is partly there to mask them.
