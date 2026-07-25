import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Award, LockKeyhole, Users, PenTool, Flower2, Infinity as InfinityIcon } from 'lucide-react'
import './ValuesAndEthics.css'

gsap.registerPlugin(ScrollTrigger)

const promises = [
  {
    id: 'integrity',
    title: 'Integrity in Every Introduction',
    description: 'Every recommendation is made honestly, transparently, and without compromising authenticity.',
    icon: Award,
    position: { top: '5%', left: '50%', transform: 'translate(-50%, -50%)' }
  },
  {
    id: 'privacy',
    title: 'Privacy Is Never Optional',
    description: 'Every profile, conversation, and introduction is protected with complete confidentiality.',
    icon: LockKeyhole,
    position: { top: '25%', left: '85%', transform: 'translate(-50%, -50%)' }
  },
  {
    id: 'respect',
    title: 'Respect Above Everything',
    description: 'Every member is treated with dignity regardless of background, profession, or beliefs.',
    icon: Users,
    position: { top: '75%', left: '85%', transform: 'translate(-50%, -50%)' }
  },
  {
    id: 'commitment',
    title: 'Committed Beyond The Match',
    description: 'Our purpose isn’t simply introductions. It’s helping create lifelong partnerships built on understanding and trust.',
    icon: InfinityIcon,
    position: { top: '95%', left: '50%', transform: 'translate(-50%, -50%)' }
  },
  {
    id: 'family',
    title: 'Honouring Families, Respecting Choices',
    description: 'We embrace modern relationships while recognising the importance of family guidance and shared values.',
    icon: Flower2,
    position: { top: '75%', left: '15%', transform: 'translate(-50%, -50%)' }
  },
  {
    id: 'authenticity',
    title: 'Authenticity Creates Trust',
    description: 'Verified identities and genuine intentions form the foundation of every meaningful introduction.',
    icon: PenTool,
    position: { top: '25%', left: '15%', transform: 'translate(-50%, -50%)' }
  }
]

const trustBadges = [
  'Invitation-Only Community',
  'Verified Members',
  'Human Matchmaking Experts',
  'AI with Integrity',
  'Complete Confidentiality'
]

const ValuesAndEthics = () => {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const ctx = gsap.context(() => {
      // Setup initial states
      gsap.set('.sanc-panel', { opacity: 0, y: 30 })
      gsap.set('.sanc-emblem', { opacity: 0, scale: 0.8 })
      gsap.set('.sanc-line', { strokeDasharray: 1000, strokeDashoffset: 1000 })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.sanc-constellation',
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: 1
        }
      })

      // Central emblem appears
      tl.to('.sanc-emblem', { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' })
        // Lines draw out
        .to('.sanc-line', { strokeDashoffset: 0, duration: 1.5, ease: 'power2.inOut' }, '-=0.5')
        // Panels fade in
        .to('.sanc-panel', { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }, '-=1')

      // Certificate and signature animation
      gsap.from('.sanc-certificate', {
        scrollTrigger: {
          trigger: '.sanc-certificate',
          start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      })

      const sigPath = document.querySelector('.sig-path')
      if (sigPath) {
        const length = sigPath.getTotalLength()
        gsap.set(sigPath, { strokeDasharray: length, strokeDashoffset: length })
        gsap.to(sigPath, {
          scrollTrigger: {
            trigger: '.sanc-signature',
            start: 'top 85%'
          },
          strokeDashoffset: 0,
          duration: 2.5,
          ease: 'power2.out',
          delay: 0.5
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="values-ethics-section" ref={sectionRef} aria-labelledby="values-title">
      
      {/* Hero Introduction */}
      <div className="ve-header">
        <span className="ve-eyebrow">OUR PROMISE</span>
        <h2 id="values-title" className="ve-title">
          Principles We <em>Never Compromise</em> On.
        </h2>
        <p className="ve-intro">
          Trust is earned through every interaction. Every introduction, every conversation, and every relationship on Match Haven is guided by unwavering principles that place people before platforms.
        </p>
        <div className="ve-divider" aria-hidden="true" />
      </div>

      {/* Main Experience: Constellation */}
      <div className="sanc-constellation">
        
        {/* Background SVG Lines */}
        <svg className="sanc-svg-overlay" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">
          <circle cx="500" cy="500" r="450" fill="none" stroke="rgba(168,102,30,0.1)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="500" cy="500" r="300" fill="none" stroke="rgba(168,102,30,0.05)" strokeWidth="1" />
          
          {/* Connection Lines */}
          <path className="sanc-line" d="M500,500 L500,50" fill="none" stroke="#A8661E" strokeWidth="1.5" opacity="0.3" />
          <path className="sanc-line" d="M500,500 L850,250" fill="none" stroke="#A8661E" strokeWidth="1.5" opacity="0.3" />
          <path className="sanc-line" d="M500,500 L850,750" fill="none" stroke="#A8661E" strokeWidth="1.5" opacity="0.3" />
          <path className="sanc-line" d="M500,500 L500,950" fill="none" stroke="#A8661E" strokeWidth="1.5" opacity="0.3" />
          <path className="sanc-line" d="M500,500 L150,750" fill="none" stroke="#A8661E" strokeWidth="1.5" opacity="0.3" />
          <path className="sanc-line" d="M500,500 L150,250" fill="none" stroke="#A8661E" strokeWidth="1.5" opacity="0.3" />
        </svg>

        {/* Center Emblem */}
        <div className="sanc-emblem">
          <div className="sanc-emblem-inner">
            <span className="emblem-brand">MATCH HAVEN</span>
            <span className="emblem-tag">Built on Trust</span>
          </div>
        </div>

        {/* Orbiting Panels */}
        {promises.map((promise) => {
          const Icon = promise.icon
          return (
            <div className="sanc-panel" key={promise.id} style={promise.position}>
              <div className="sanc-panel-icon">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="sanc-panel-title">{promise.title}</h3>
              <p className="sanc-panel-desc">{promise.description}</p>
            </div>
          )
        })}
      </div>

      {/* Signature Trust Seal */}
      <div className="sanc-certificate-wrapper">
        <div className="sanc-certificate">
          <div className="cert-border-inner">
            <h3 className="cert-title">The Match Haven Commitment</h3>
            <p className="cert-promise">
              "We will always place integrity before growth, people before technology, trust before convenience, and meaningful relationships before numbers."
            </p>
            
            <div className="sanc-signature">
              {/* Handwritten signature SVG simulation */}
              <svg viewBox="0 0 300 80" className="sig-svg" aria-label="The Match Haven Team signature">
                <path className="sig-path" d="M10,50 C30,20 50,20 60,40 C70,60 90,60 100,50 C120,30 140,20 150,40 C160,60 180,60 190,50 C210,30 230,20 240,40 C250,60 270,60 280,45" fill="none" stroke="#A8661E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="sig-text">The Match Haven Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="ve-closing">
        <blockquote className="ve-quote">
          "Luxury is not defined by exclusivity alone. It is defined by the integrity with which every relationship begins."
        </blockquote>
        
        <div className="ve-badges">
          {trustBadges.map((badge, idx) => (
            <span className="ve-badge-item" key={idx}>{badge}</span>
          ))}
        </div>
      </div>

    </section>
  )
}

export default ValuesAndEthics
