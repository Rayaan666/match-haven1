import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Difference.css';

gsap.registerPlugin(ScrollTrigger);

const differenceItems = [
  {
    num: '01',
    title: 'We Understand What Matters',
    description: 'Our relationship experts learn about your personality, values, ambitions, and expectations — going beyond surface-level preferences to curate introductions with genuine potential.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="24" cy="24" r="20"/><path d="M16 24c0-4.4 3.6-8 8-8s8 3.6 8 8"/><circle cx="24" cy="28" r="4"/><path d="M14 18l-3-3M34 18l3-3M14 30l-3 3M34 30l3 3"/></svg>,
  },
  {
    num: '02',
    title: 'Every Profile Is Verified',
    description: 'Every member undergoes a rigorous multi-step verification — identity, education, profession, and character — ensuring you only meet individuals of the highest integrity.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M24 4 8 10v14c0 9 7.2 17.4 16 20 8.8-2.6 16-11 16-20V10L24 4Z"/><path d="m17 24 4.5 4.5L31 19"/></svg>,
  },
  {
    num: '03',
    title: 'Invitation-Only Community',
    description: "Match Haven is not open to all. Our curated, invitation-only membership ensures you are always in the company of Dubai's most accomplished, discerning, and genuine individuals.",
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m24 6 3.6 7.3 8 1.2-5.8 5.6 1.4 8-7.2-3.8-7.2 3.8 1.4-8-5.8-5.6 8-1.2L24 6Z"/><path d="M8 38h32M12 44h24"/></svg>,
  },
  {
    num: '04',
    title: 'Human Matchmaking Experts',
    description: 'Your dedicated Relationship Concierge works with you personally — understanding nuances, aspirations, and family expectations that no automated system alone can fully grasp.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="18" cy="14" r="6"/><circle cx="30" cy="14" r="6"/><path d="M6 38c0-7.7 5.4-14 12-14M30 24c6.6 0 12 6.3 12 14M24 28v12m-4-4 4 4 4-4"/></svg>,
  },
  {
    num: '05',
    title: 'Compatibility Beyond Checklists',
    description: 'We evaluate emotional intelligence, family values, lifestyle rhythms, and life goals — because lasting relationships are built on deep compatibility, not just profile data.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M24 40S8 30 8 18a8 8 0 0 1 16 0 8 8 0 0 1 16 0c0 12-16 22-16 22Z"/><circle cx="24" cy="18" r="3"/><path d="M18 25c0-3.3 2.7-6 6-6s6 2.7 6 6"/></svg>,
  },
  {
    num: '06',
    title: 'Your Forever Begins Here',
    description: "Every introduction we make is guided by one singular intention — your lifelong happiness. We don't just find matches; we curate the beginning of your forever story.",
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="24" cy="24" r="8"/><path d="M24 8v4m0 24v4M8 24H4m40 0h-4M12.7 12.7l2.8 2.8m17 17 2.8 2.8m-22.6 0 2.8-2.8m17-17 2.8-2.8"/><circle cx="24" cy="24" r="14" strokeDasharray="3 3"/></svg>,
  },
];

const stats = [
  ['50,000+', 'Verified Members', <svg key="members" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>],
  ['12,500+', 'Successful Matches', <svg key="matches" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"/></svg>],
  ['96%', 'Member Satisfaction', <svg key="satisfaction" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m22 4-10 10.01-3-3"/></svg>],
  ['4.9 / 5', 'Trust & Privacy Rating', <svg key="privacy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>],
];

export default function Difference() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } });
      tl.fromTo(headerRef.current.querySelectorAll('.diff-reveal'), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .9, stagger: .12, ease: 'power3.out' });
      tl.fromTo(cardsRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .7, stagger: .1, ease: 'power3.out' }, '-=.4');
      tl.fromTo(statsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .6, stagger: .1, ease: 'power2.out' }, '-=.2');
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return <section className="difference section-padding" ref={sectionRef}>
    <div className="diff-corner diff-corner-tl" aria-hidden="true"/><div className="diff-corner diff-corner-tr" aria-hidden="true"/><div className="diff-corner diff-corner-bl" aria-hidden="true"/><div className="diff-corner diff-corner-br" aria-hidden="true"/>
    <div className="container">
      <div className="diff-header" ref={headerRef}>
        <p className="diff-eyebrow diff-reveal">The Match Haven Difference</p>
        <div className="diff-gold-divider diff-reveal"><span/><i/><span/></div>
        <h2 className="diff-heading diff-reveal">Not Just Matches. <em>Meaningful Connections.</em></h2>
        <p className="diff-subheading diff-reveal">We combine thoughtful compatibility assessment with the warmth of human expertise to create introductions with lasting potential.</p>
      </div>
      <div className="diff-cards-grid">{differenceItems.map((item,i)=><article className="diff-card" key={item.num} ref={el=>{if(el)cardsRef.current[i]=el}}><div className="diff-card-icon">{item.icon}</div><span className="diff-card-num">{item.num}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      <div className="diff-stats-bar">{stats.map(([value,label,icon],i)=><React.Fragment key={label}><div className="diff-stat" ref={el=>{if(el)statsRef.current[i]=el}}><div className="stat-icon">{icon}</div><span className="stat-value">{value}</span><span className="stat-label">{label}</span></div>{i<stats.length-1&&<i className="stat-divider"/>}</React.Fragment>)}</div>
    </div>
  </section>;
}
