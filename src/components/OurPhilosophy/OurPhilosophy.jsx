import { useLayoutEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './OurPhilosophy.css'

gsap.registerPlugin(ScrollTrigger)

const principles = [
  {
    number: '01', title: 'Trust Before Technology', image: '/about/philosophy-trust.jpg',
    alt: 'Watercolor handshake becoming fine golden threads', className: 'exhibit-trust',
    lead: <>Technology introduces.<br /><em>Trust builds relationships.</em></>,
    body: 'Technology can illuminate compatibility and support considered decisions. But trust—earned slowly, protected carefully—will always be the foundation of something lasting.',
  },
  {
    number: '02', title: 'Every Story Is Different', image: '/about/philosophy-stories.jpg',
    alt: 'Distinct golden threads woven into unique patterns', className: 'exhibit-stories',
    lead: <>No two people share<br />the <em>same journey.</em></>,
    body: 'Every person arrives with a history, a hope, and a rhythm of their own. Every introduction deserves a deeply personalised approach.',
  },
  {
    number: '03', title: 'Families Matter', image: '/about/philosophy-family.jpg',
    alt: 'Two families connected by a floral golden thread', className: 'exhibit-family',
    lead: <>Tradition and modern thinking,<br /><em>held in balance.</em></>,
    body: 'Families are valued partners in the journey. They are an important part of lifelong relationships—voices to respect, understand, and welcome into the journey.',
  },
  {
    number: '04', title: 'Quality Creates Meaning', image: '/about/philosophy-quality.jpg',
    alt: 'One handcrafted ring standing apart from hundreds of blurred rings', className: 'exhibit-quality',
    lead: <>One thoughtful introduction<br />is worth <em>a hundred profiles.</em></>,
    body: 'Meaning is not measured by volume. We choose discernment over abundance, because carefully curated quality will always win over endless recommendations.',
  },
  {
    number: '05', title: 'Forever Is the Goal', image: '/about/philosophy-forever.jpg',
    alt: 'Golden infinity ribbon transforming into wedding rings', className: 'exhibit-forever',
    lead: <>Not another conversation.<br /><em>A life partner.</em></>,
    body: 'We are not here to create passing interactions. Every detail of Match Haven is designed around the possibility of a meaningful, lifelong commitment.',
  },
]

const badges = ['Trust', 'Compatibility', 'Family', 'Privacy', 'Lifelong Commitment']

const PhilosophyPanel = ({ principle }) => (
  <article className={`philosophy-exhibit ${principle.className}`}>
    <div className="exhibit-arch" aria-hidden="true" />
    <div className="exhibit-copy">
      <span className="exhibit-number">Exhibit {principle.number}</span>
      <h3>{principle.title}</h3>
      <p className="exhibit-lead">{principle.lead}</p>
      <p className="exhibit-body">{principle.body}</p>
    </div>
    <figure className="exhibit-art">
      <img src={principle.image} alt={principle.alt} loading="lazy" />
      <span aria-hidden="true">{principle.number}</span>
    </figure>
    <div className="exhibit-flourish" aria-hidden="true"><i /><b /><i /></div>
  </article>
)

const OurPhilosophy = () => {
  const rootRef = useRef(null)
  const galleryRef = useRef(null)
  const trackRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduced) return

      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const track = trackRef.current
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth)

        const horizontal = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        gsap.utils.toArray('.philosophy-exhibit').forEach((panel, index) => {
          if (index === 0) return
          gsap.from(panel.querySelector('.exhibit-copy'), {
            y: 36, opacity: 0, duration: 1,
            scrollTrigger: { trigger: panel, containerAnimation: horizontal, start: 'left 72%', once: true },
          })
          gsap.from(panel.querySelector('.exhibit-art'), {
            scale: 0.96, opacity: 0, duration: 1.2,
            scrollTrigger: { trigger: panel, containerAnimation: horizontal, start: 'left 78%', once: true },
          })
        })
      })

      mm.add('(max-width: 1023px)', () => {
        gsap.utils.toArray('.philosophy-exhibit').forEach((panel) => {
          gsap.from([panel.querySelector('.exhibit-copy'), panel.querySelector('.exhibit-art')], {
            y: 28, opacity: 0, duration: 0.9, stagger: 0.12,
            scrollTrigger: { trigger: panel, start: 'top 76%', once: true },
          })
        })
      })

      gsap.to('.exhibit-art img', { yPercent: -2, duration: 4.5, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: 0.35 })

      return () => mm.revert()
    }, rootRef)

    const refresh = () => ScrollTrigger.refresh()
    refresh()
    window.addEventListener('load', refresh, { once: true })
    return () => {
      window.removeEventListener('load', refresh)
      ctx.revert()
    }
  }, [])

  return (
    <section className="our-philosophy" id="our-philosophy" ref={rootRef} aria-labelledby="philosophy-title">
      <header className="philosophy-opening">
        <span className="philosophy-eyebrow">Our Philosophy</span>
        <h2 id="philosophy-title">Five Principles. One <em>Beautiful Journey.</em></h2>
        <p>Every introduction at Match Haven is guided by timeless principles that combine intelligent technology with genuine human understanding.</p>
        <div className="philosophy-divider" aria-hidden="true"><i /><span>∞</span><i /></div>
      </header>

      <div className="philosophy-gallery" ref={galleryRef}>
        <div className="philosophy-track" ref={trackRef}>
          {principles.map((principle) => <PhilosophyPanel principle={principle} key={principle.number} />)}
        </div>
      </div>
    </section>
  )
}

export default OurPhilosophy
