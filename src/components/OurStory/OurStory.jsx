import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './OurStory.css'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  {
    name: 'Believe', note: 'Begin with the courage to hope.',
    art: <svg viewBox="0 0 90 70" aria-hidden="true"><path d="M45 8c3 15 10 22 25 25-15 3-22 10-25 25-3-15-10-22-25-25 15-3 22-10 25-25Z"/><path d="M70 8v13M64 14h13"/></svg>,
  },
  {
    name: 'Connect', note: 'Meet through a thoughtful introduction.',
    art: <svg viewBox="0 0 90 70" aria-hidden="true"><path d="M8 45c13-13 24-13 35-1l5 5c5 5 11 4 16-1l15-15M12 31l13-9 20 17M78 26 64 16 46 34"/><path d="m35 35 8-8 10 8"/></svg>,
  },
  {
    name: 'Understand', note: 'Discover the values beneath the surface.',
    art: <svg viewBox="0 0 90 70" aria-hidden="true"><path d="M45 59S14 42 17 22c2-13 20-16 28-3 8-13 26-10 28 3 3 20-28 37-28 37Z"/><path d="M24 29c8 1 13-2 16-9M66 29c-8 1-13-2-16-9"/></svg>,
  },
  {
    name: 'Commit', note: 'Choose each other with clarity and trust.',
    art: <svg viewBox="0 0 90 70" aria-hidden="true"><ellipse cx="38" cy="38" rx="18" ry="21"/><ellipse cx="53" cy="38" rx="18" ry="21"/><path d="m45 13 5-7 6 7-6 7-5-7Z"/></svg>,
  },
  {
    name: 'Forever', note: 'Build a life that feels like home.',
    art: <svg viewBox="0 0 90 70" aria-hidden="true"><path d="m13 36 32-25 32 25M21 30v31h48V30M37 61V43h16v18"/><path d="M58 19c0-7 10-8 10-1 0-7 10-6 10 1 0 7-10 12-10 12s-10-5-10-12Z"/></svg>,
  },
]

const StoryOrnament = ({ type }) => (
  <div className={`story-ornament story-ornament-${type}`} aria-hidden="true">
    {type === 'infinity' ? (
      <svg viewBox="0 0 170 44"><path d="M85 22C64-7 24 1 24 22s40 29 61 0c21-29 61-21 61 0s-40 29-61 0Z"/><path d="M2 22h22M146 22h22"/></svg>
    ) : (
      <svg viewBox="0 0 170 58"><path d="M85 48c-3-17-15-26-31-30 0 18 11 29 31 30Zm0 0c3-17 15-26 31-30 0 18-11 29-31 30ZM85 48c-12-9-16-22-12-39 9 7 13 20 12 39Zm0 0c12-9 16-22 12-39-9 7-13 20-12 39ZM2 48h55M113 48h55"/></svg>
    )}
  </div>
)

const OurStory = () => {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.story-chapter').forEach((chapter) => {
        const sentences = chapter.querySelectorAll('.story-sentence')
        const artwork = chapter.querySelector('.story-artwork')
        const label = chapter.querySelector('.chapter-label')

        gsap.timeline({ scrollTrigger: { trigger: chapter, start: 'top 72%', once: true } })
          .from(label, { y: 18, opacity: 0, duration: 0.6 })
          .from(chapter.querySelector('.chapter-title'), { y: 35, opacity: 0, duration: 0.8 }, '-=0.3')
          .from(sentences, { y: 18, opacity: 0, duration: 0.6, stagger: 0.13 }, '-=0.35')
          .from(artwork, { scale: 0.96, opacity: 0, duration: 1.15 }, '-=0.9')
      })

      gsap.to('.story-artwork img', { yPercent: -2.5, ease: 'none', scrollTrigger: { trigger: '.story-chapters', start: 'top bottom', end: 'bottom top', scrub: 1.5 } })
      gsap.fromTo('.timeline-progress', { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.emotion-timeline', start: 'top 75%', end: 'center 45%', scrub: 1 } })
      gsap.from('.milestone', { y: 24, opacity: 0, duration: 0.8, stagger: 0.16, scrollTrigger: { trigger: '.emotion-timeline', start: 'top 68%', once: true } })
      gsap.from('.story-quote-inner', { y: 40, opacity: 0, duration: 1.1, scrollTrigger: { trigger: '.story-quote', start: 'top 72%', once: true } })
      gsap.to('.thread-glow', { opacity: 0.75, scale: 1.05, duration: 3.8, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="our-story" id="our-story" ref={sectionRef} aria-labelledby="story-title">
      <header className="story-opening">
        <span className="story-eyebrow">Our Story</span>
        <h2 id="story-title">Every Great Love Story Begins With One <em>Meaningful Introduction.</em></h2>
        <p>We didn’t build another matchmaking platform. We created a place where meaningful relationships begin with trust, understanding, and human connection.</p>
        <div className="story-opening-rule" aria-hidden="true"><i /><span>MH</span><i /></div>
      </header>

      <div className="story-chapters">
        <article className="story-chapter chapter-problem" id="chapter-problem">
          <div className="chapter-copy">
            <span className="chapter-label"><b>01</b> The Problem</span>
            <h3 className="chapter-title">More choice.<br />Less <em>meaning.</em></h3>
            <div className="chapter-prose">
              <p className="story-sentence">Modern connection became a catalogue—endless profiles, effortless dismissals, and the quiet fatigue of starting over.</p>
              <p className="story-sentence">When everyone is visible, it can become harder to truly see anyone.</p>
            </div>
          </div>
          <figure className="story-artwork artwork-problem">
            <img src="/about/story-disconnected.jpg" alt="Watercolor illustration of people together yet isolated by their phones" loading="lazy" />
            <figcaption>Too many profiles. Too many choices. Too little meaning.</figcaption>
          </figure>
          <span className="chapter-word" aria-hidden="true">DISCONNECTED</span>
        </article>

        <StoryOrnament type="infinity" />

        <article className="story-chapter chapter-turning" id="chapter-turning">
          <figure className="story-artwork artwork-turning">
            <img src="/about/story-turning-point.jpg" alt="Painterly illustration of a couple in meaningful conversation with their families nearby" loading="lazy" />
            <figcaption>Human understanding is not an algorithm to replace.</figcaption>
          </figure>
          <div className="chapter-copy">
            <span className="chapter-label"><b>02</b> The Turning Point</span>
            <h3 className="chapter-title">Technology, guided by <em>human wisdom.</em></h3>
            <div className="chapter-prose">
              <p className="story-sentence">We believed technology should support a relationship—never stand in for the intuition, care, and conversation that bring two people closer.</p>
              <p className="story-sentence">Families still matter. Values still matter. Meaningful conversations still matter.</p>
            </div>
          </div>
          <span className="chapter-word" aria-hidden="true">UNDERSTANDING</span>
        </article>

        <StoryOrnament type="lotus" />

        <article className="story-chapter chapter-beginning" id="chapter-beginning">
          <div className="beginning-copy">
            <span className="chapter-label"><b>03</b> The Beginning</span>
            <h3 className="chapter-title">A more thoughtful way to find <em>forever.</em></h3>
            <p className="story-sentence">Match Haven brings together intelligent compatibility, experienced relationship experts, family values, privacy, and trust—creating introductions designed not for a moment, but for a lifetime.</p>
          </div>
          <figure className="story-artwork artwork-beginning">
            <div className="thread-glow" aria-hidden="true" />
            <img src="/about/story-beginning.jpg" alt="Watercolor hands connected by fine golden threads forming an infinity symbol" loading="lazy" />
          </figure>
        </article>
      </div>

      <section className="emotion-timeline" aria-labelledby="journey-title">
        <span className="story-eyebrow">The Journey</span>
        <h3 id="journey-title">From possibility to <em>forever.</em></h3>
        <div className="timeline-track" aria-hidden="true"><span className="timeline-progress" /></div>
        <div className="milestones">
          {milestones.map((milestone) => (
            <div className="milestone" key={milestone.name} tabIndex="0" data-tooltip={milestone.note}>
              <div className="milestone-art">{milestone.art}</div>
              <i aria-hidden="true" />
              <span>{milestone.name}</span>
            </div>
          ))}
        </div>
      </section>

      <blockquote className="story-quote">
        <div className="story-quote-inner">
          <span className="oversized-quote" aria-hidden="true">“</span>
          <p>Technology can introduce two people. Only trust, values, and genuine understanding can bring them together.</p>
          <span className="quote-signature">The Match Haven Philosophy</span>
        </div>
      </blockquote>
    </section>
  )
}

export default OurStory
