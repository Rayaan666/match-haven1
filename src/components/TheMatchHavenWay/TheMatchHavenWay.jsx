import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './TheMatchHavenWay.css'

gsap.registerPlugin(ScrollTrigger)

const moments = [
  {
    id: 'search',
    title: 'The Search',
    mhTitle: 'The Match Haven Curation',
    description: 'We do not rely on algorithms. We rely on emotional intelligence, extensive networks, and a deep understanding of your family’s values to find a true match.',
    image: '/about/1.png',
    alignment: 'left'
  },
  {
    id: 'vetting',
    title: 'The Vetting',
    mhTitle: 'The Match Haven Discretion',
    description: 'Every introduction is backed by in-person interviews to ensure the highest level of trust and security.',
    image: '/about/2.png',
    alignment: 'right'
  },
  {
    id: 'presentation',
    title: 'The Presentation',
    mhTitle: 'The Match Haven Narrative',
    description: 'Profiles are presented not as resumes, but as compelling life stories. We highlight the essence of a person, their ambitions, and their character.',
    image: '/about/couple-editorial.jpg',
    alignment: 'left'
  },
  {
    id: 'meeting',
    title: 'The Meeting',
    mhTitle: 'The Match Haven Experience',
    description: 'We orchestrate elegant, pressure-free introductions designed to foster genuine connection in settings that feel natural and refined.',
    image: '/about/family-introduction.jpg',
    alignment: 'right'
  },
  {
    id: 'commitment',
    title: 'The Commitment',
    mhTitle: 'The Match Haven Forever',
    description: 'Our involvement does not end at the introduction. We offer continued guidance as relationships blossom into lifelong commitments.',
    image: '/about/philosophy-forever.jpg',
    alignment: 'left'
  }
]

const TheMatchHavenWay = () => {
  const sectionRef = useRef(null)
  const pathRef = useRef(null)

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const ctx = gsap.context(() => {
      // Draw SVG Path on scroll
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength()
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length })

        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '.way-moments-container',
            start: 'top center',
            end: 'bottom center',
            scrub: 1
          }
        })
      }

      // Fade up moments
      gsap.utils.toArray('.way-moment').forEach((moment) => {
        gsap.from(moment, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: moment,
            start: 'top 80%',
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="the-way-section" ref={sectionRef} aria-labelledby="the-way-title">
      <div className="way-header">
        <span className="way-eyebrow">Traditional Matchmaking Approach</span>
        <h2 id="the-way-title" className="way-title">
          Timeless Traditions. <em>Thoughtfully Reimagined.</em>
        </h2>
        <p className="way-intro">
          "For generations, meaningful relationships were built through trust, shared values, family guidance, and genuine understanding. Match Haven preserves these timeless principles while enhancing them for the modern world."
        </p>
      </div>

      <div className="way-moments-container">
        {/* SVG Ribbon Pathway */}
        <div className="way-svg-container" aria-hidden="true">
          <svg className="way-ribbon" viewBox="0 0 200 1500" preserveAspectRatio="none">
            <path 
              ref={pathRef}
              d="M100,0 C150,200 50,400 100,600 C150,800 50,1000 100,1200 C150,1350 100,1500 100,1500" 
              fill="none" 
              stroke="#A8661E" 
              strokeWidth="2" 
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <div className="way-moments-list">
          {moments.map((moment, index) => (
            <div className={`way-moment align-${moment.alignment} moment-${moment.id}`} key={moment.id}>
              <div className="way-moment-content">
                <div className="way-moment-number">0{index + 1}</div>
                <h4 className="way-moment-new">{moment.mhTitle}</h4>
                <p className="way-moment-desc">{moment.description}</p>
              </div>
              <figure className="way-moment-image">
                <img src={moment.image} alt={moment.mhTitle} />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TheMatchHavenWay
