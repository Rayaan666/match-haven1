import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './MatchHavenPromise.css'

gsap.registerPlugin(ScrollTrigger)

const artPaths = {
  listen: 'M54 88c-24-12-23-55 3-70 30-17 64 4 55 35-5 18-22 16-25 32-3 14-20 22-33 13M72 70c-12-8-10-27 3-32 15-6 27 8 18 20-7 8-15 8-15 20M119 42c20-7 35-4 51 7M122 58c18 0 31 5 44 15M117 75c17 6 27 14 36 26',
  curate: 'M41 38h96v62H41zM41 40l48 37 48-37M20 31h96M62 20h96M147 49h18v55H69v-7',
  privacy: 'M38 22h104l20 20v70H18V42l20-20ZM90 48c24 0 43 19 43 43s-19 43-43 43-43-19-43-43 19-43 43-43Zm0 19v24l17 12M18 55h20M142 55h20',
  journey: 'M13 99c34-60 48 13 79-44 25-47 44 37 91-35M12 67c31-34 54 11 78-23M14 113c42-22 57 20 94-17 25-25 41-11 75-43M165 15l18 5-6 18',
}

const LineArt = ({ type }) => <svg className={`promise-line-art promise-art-${type}`} viewBox="0 0 180 130" aria-hidden="true"><path d={artPaths[type]} />{type === 'curate' && <path className="selected-envelope" d="M41 38h96v62H41z" />}</svg>

const promises = [
  { key: 'listen', title: 'We Listen Before We Recommend', text: 'Understanding your aspirations always comes before making recommendations.', art: 'listen' },
  { key: 'curate', title: 'We Curate, Never Overwhelm', text: 'We believe meaningful introductions are more valuable than endless choices.', art: 'curate' },
  { key: 'privacy', title: 'We Respect Your Privacy', text: 'Every profile and every conversation remains completely confidential.', art: 'privacy' },
  { key: 'journey', title: 'We Respect Every Journey', text: 'Every member has a unique story, background, and pace. We honour each journey equally.', art: 'journey' },
  { key: 'family', title: 'We Value Families', text: 'Where appropriate, we encourage family involvement while always respecting individual decisions.', image: '/about/way-values.jpg', alt: 'Two family trees connected through golden roots' },
  { key: 'care', title: 'We Care Beyond The Introduction', text: 'Our role doesn’t end with an introduction—it continues through guidance, support, and meaningful relationships.', image: '/about/philosophy-trust.jpg', alt: 'Joined hands extending into a fine golden thread' },
]

const standards = ['Every profile is treated with care.', 'Every recommendation is thoughtfully curated.', 'Every conversation is handled confidentially.', 'Every member is respected equally.', 'Every introduction reflects our reputation.']
const trustBadges = ['Personally Curated', 'AI Enhanced', 'Invitation Only', 'Confidential', 'Relationship Experts']

const MatchHavenPromise = () => {
  const rootRef = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.from('.promise-emblem', { scale: .82, opacity: 0, duration: 1.15, scrollTrigger: { trigger: '.promise-sanctuary', start: 'top 70%', once: true } })
      gsap.from('.constellation-path', { strokeDashoffset: 1, duration: 2.2, ease: 'power2.out', scrollTrigger: { trigger: '.promise-sanctuary', start: 'top 68%', once: true } })
      gsap.from('.promise-orbit-card', { y: 35, scale: .96, opacity: 0, duration: .9, stagger: .13, scrollTrigger: { trigger: '.promise-sanctuary', start: 'top 66%', once: true } })
      gsap.to('.promise-art img', { yPercent: -3, duration: 4, yoyo: true, repeat: -1, ease: 'sine.inOut', stagger: .3 })
      gsap.from('.commitment-certificate', { y: 45, opacity: 0, duration: 1.1, scrollTrigger: { trigger: '.commitment-certificate', start: 'top 76%', once: true } })
      gsap.from('.signature-stroke', { strokeDashoffset: 1, duration: 1.8, scrollTrigger: { trigger: '.certificate-signature', start: 'top 82%', once: true } })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return <section className="match-promise" ref={rootRef} aria-labelledby="promise-title">
    <header className="promise-opening"><span>Our Promise</span><h2 id="promise-title">Every Introduction Carries <em>Our Reputation.</em></h2><p>When we introduce two people, we don’t simply make a connection—we stand behind it with the same care, discretion, and integrity that defines every Match Haven experience.</p><div className="promise-rule" aria-hidden="true"><i /><b>MH</b><i /></div></header>
    <div className="promise-sanctuary">
      <svg className="constellation" viewBox="0 0 1400 1080" preserveAspectRatio="none" aria-hidden="true"><circle cx="700" cy="540" r="350"/><circle cx="700" cy="540" r="430"/><path className="constellation-path" pathLength="1" d="M700 540C530 376 364 274 190 190M700 540C870 376 1036 274 1210 190M700 540C430 520 278 526 134 546M700 540C970 520 1122 526 1266 546M700 540C510 720 370 820 205 900M700 540C890 720 1030 820 1195 900" /></svg>
      <div className="promise-emblem"><div><span>Match Haven</span><i />A Promise That Lasts<br />Beyond The First Conversation</div></div>
      {promises.map((item, index) => <article className={`promise-orbit-card promise-card-${index + 1}`} key={item.key}><div className="promise-art">{item.image ? <img src={item.image} alt={item.alt} loading="lazy" /> : <LineArt type={item.art} />}</div><span className="promise-index">Promise 0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
    </div>
    <div className="commitment-certificate"><span>The Match Haven Standard</span><h3>Our standard is carried through every introduction.</h3><div className="standard-promises">{standards.map((standard) => <p key={standard}><i>✓</i>{standard}</p>)}</div><div className="certificate-footer"><div className="certificate-signature"><svg viewBox="0 0 220 55" aria-hidden="true"><path className="signature-stroke" pathLength="1" d="M6 38c25-49 31 29 56-15 17-29 22 39 43 2 17-30 20 18 38 1 15-14 25 9 69-8" /></svg><span>The Match Haven Team</span></div><img src="/about/promise-integrity.jpg" alt="Embossed Match Haven seal" /></div></div>
    <div className="promise-closing"><span className="closing-mark" aria-hidden="true">“</span><blockquote>The greatest promise we can make isn’t finding someone for you. It’s ensuring every introduction is worthy of your trust.</blockquote><div className="promise-badges">{trustBadges.map((badge) => <span key={badge}>✓&nbsp; {badge}</span>)}</div></div>
  </section>
}

export default MatchHavenPromise
