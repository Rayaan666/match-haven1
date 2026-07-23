import { useLayoutEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowDownRight, Check, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import OurStory from '../../components/OurStory/OurStory'
import OurPhilosophy from '../../components/OurPhilosophy/OurPhilosophy'
import MatchHavenPromise from '../../components/MatchHavenPromise/MatchHavenPromise'
import './AboutPage.css'

const badges = [
  { label: 'AI-Powered Matching', className: 'badge-ai' },
  { label: 'Invitation Only', className: 'badge-invite' },
  { label: '100% Verified Members', className: 'badge-verified' },
  { label: 'Family Approved', className: 'badge-family' },
]

const trustItems = ['Human Matchmaking Experts', 'AI-Driven Compatibility', 'Private & Confidential']

const AboutPage = () => {
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

      timeline
        .from('.about-eyebrow', { y: 12, opacity: 0, duration: 0.65 })
        .from('.about-heading-line > span', { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.12 }, '-=0.3')
        .from('.about-intro', { y: 20, opacity: 0, duration: 0.7 }, '-=0.45')
        .from('.about-actions > *', { y: 16, opacity: 0, duration: 0.55, stagger: 0.1 }, '-=0.4')
        .from('.collage-stage', { scale: 0.94, opacity: 0, duration: 1.1 }, '-=1.1')
        .from('.story-preview', { y: 20, opacity: 0, duration: 0.8 }, '-=0.55')
        .from('.about-ornament', { opacity: 0, duration: 1.2, stagger: 0.08 }, 0.25)

      gsap.to('.about-glow', { xPercent: 6, yPercent: -4, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.floating-badge', { y: -7, duration: 3.2, repeat: -1, yoyo: true, stagger: 0.45, ease: 'sine.inOut' })
      gsap.to('.orbit-dot', { rotation: 360, transformOrigin: '50% 50%', duration: 22, repeat: -1, ease: 'none' })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Helmet>
        <title>About Match Haven | Meaningful Stories Begin Here</title>
        <meta name="description" content="Discover Match Haven's private, considered approach to modern matchmaking, guided by intelligent compatibility and timeless human values." />
      </Helmet>

      <section className="about-hero" ref={heroRef} aria-labelledby="about-title">
        <div className="about-glow" aria-hidden="true" />
        <svg className="about-ornament floral-ornament" viewBox="0 0 340 420" aria-hidden="true">
          <path d="M28 392C95 330 61 250 135 205c64-39 84-94 91-169M90 312c-45-5-68-28-72-67 41-7 69 16 72 67Zm43-96c-35-27-42-60-20-97 39 20 47 54 20 97Zm53-72c11-42 37-65 78-67 0 43-26 66-78 67Zm-73 140c30-32 63-39 100-18-24 38-57 43-100 18Z" />
          <circle cx="226" cy="35" r="5" />
        </svg>
        <svg className="about-ornament gold-sweep" viewBox="0 0 620 250" aria-hidden="true">
          <path d="M4 214C180 14 344 292 616 32" />
          <path d="M72 236C225 77 371 256 574 75" />
        </svg>
        <div className="particle-field about-ornament" aria-hidden="true">
          <i /><i /><i /><i /><i /><i />
        </div>

        <div className="about-hero-inner">
          <div className="about-copy">
            <div className="about-eyebrow">
              <span>About Match Haven</span>
              <span className="eyebrow-rule" />
            </div>

            <h1 id="about-title" className="about-title">
              <span className="about-heading-line"><span>Where <em>Meaningful Stories</em></span></span>
              <span className="about-heading-line"><span>Begin.</span></span>
            </h1>

            <p className="about-intro">
              Match Haven was created to redefine modern matchmaking by combining intelligent technology with timeless human values. Every introduction is thoughtfully curated to help individuals and families build meaningful lifelong relationships.
            </p>

            <div className="about-actions">
              <a href="#our-story" className="about-button about-button-primary">
                <span>Our Story</span><ArrowDownRight size={17} strokeWidth={1.5} />
              </a>
              <a href="#our-philosophy" className="about-button about-button-secondary">
                <span>Meet Our Philosophy</span><ArrowDownRight size={17} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="collage-wrap" aria-label="Stories of connection and family">
            <div className="collage-stage">
              <div className="collage-halo" aria-hidden="true" />
              <figure className="image-panel panel-main">
                <img src="/about/couple-editorial.jpg" alt="Couple sharing a joyful moment in wedding attire" />
              </figure>
              <figure className="image-panel panel-family">
                <img src="/about/family-introduction.jpg" alt="Two families sharing a warm introduction" />
              </figure>
              <figure className="image-panel panel-detail">
                <img src="/about/ring-detail.jpg" alt="A couple exchanging a ring" />
              </figure>

              <svg className="panel-connector about-ornament" viewBox="0 0 500 570" aria-hidden="true">
                <path d="M106 114C230 45 391 101 404 233S316 415 141 485" />
                <circle cx="106" cy="114" r="4" /><circle cx="141" cy="485" r="4" />
              </svg>
              <div className="orbit-dot about-ornament" aria-hidden="true"><span /></div>

              {badges.map(({ label, className }) => (
                <div className={`floating-badge ${className}`} key={label}>
                  <span className="badge-check"><Check size={11} strokeWidth={2.4} /></span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="story-preview">
          <Sparkles className="quote-mark" size={17} strokeWidth={1.3} aria-hidden="true" />
          <p>“Because finding the right life partner should be guided by trust, values, and genuine human understanding—not endless swiping.”</p>
          <div className="trust-row">
            {trustItems.map((item) => <span key={item}><i aria-hidden="true" />{item}</span>)}
          </div>
        </div>
      </section>
      <OurStory />
      <OurPhilosophy />
      <MatchHavenPromise />
    </>
  )
}

export default AboutPage
