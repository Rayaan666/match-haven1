import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './EthicsAndValues.css';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    name: 'Trust',
    note: 'Every relationship begins with honesty, authenticity, and mutual confidence.',
    art: (
      <svg viewBox="0 0 90 70" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M45 8c3 15 10 22 25 25-15 3-22 10-25 25-3-15-10-22-25-25 15-3 22-10 25-25Z" fill="currentColor" fillOpacity="0.1" />
        <path d="M70 8v13M64 14h13" />
      </svg>
    ),
  },
  {
    name: 'Privacy',
    note: 'Every profile, conversation, and introduction is handled with complete confidentiality.',
    art: (
      <svg viewBox="0 0 90 70" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="33" y="32" width="24" height="20" rx="2" ry="2" fill="currentColor" fillOpacity="0.1" />
        <path d="M39 32V24a6 6 0 0 1 12 0v8" />
      </svg>
    ),
  },
  {
    name: 'Respect',
    note: "We celebrate every individual's values, aspirations, and life journey with dignity and care.",
    art: (
      <svg viewBox="0 0 90 70" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M45 59S14 42 17 22c2-13 20-16 28-3 8-13 26-10 28 3 3 20-28 37-28 37Z" fill="currentColor" fillOpacity="0.1" />
      </svg>
    ),
  },
  {
    name: 'Integrity',
    note: 'Every recommendation is thoughtfully curated without compromising ethics or transparency.',
    art: (
      <svg viewBox="0 0 90 70" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="37" cy="38" r="14" fill="currentColor" fillOpacity="0.05" />
        <circle cx="53" cy="38" r="14" fill="currentColor" fillOpacity="0.05" />
      </svg>
    ),
  },
  {
    name: 'Commitment',
    note: 'We remain committed to meaningful relationships built for a lifetime—not just introductions.',
    art: (
      <svg viewBox="0 0 90 70" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M25 35c0-8 10-10 20-2c10-8 20-6 20 2c0 8-20 18-20 18s-20-10-20-18Z" fill="currentColor" fillOpacity="0.1" />
        <path d="M30 20h30" />
      </svg>
    ),
  },
];

const EthicsAndValues = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.timeline-progress',
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.emotion-timeline',
            start: 'top 75%',
            end: 'center 45%',
            scrub: 1,
          },
        }
      );
      gsap.from('.milestone', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.16,
        scrollTrigger: {
          trigger: '.emotion-timeline',
          start: 'top 68%',
          once: true,
        },
      });
      gsap.from('.story-quote-inner', {
        y: 40,
        opacity: 0,
        duration: 1.1,
        scrollTrigger: {
          trigger: '.story-quote',
          start: 'top 72%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="emotion-timeline" ref={sectionRef} aria-labelledby="ethics-values-title" style={{ background: '#FDFBF7' }}>
      <span className="story-eyebrow">Ethics &amp; Values</span>
      <h3 id="ethics-values-title">Guided by core <em>principles.</em></h3>
      <div className="timeline-track" aria-hidden="true">
        <span className="timeline-progress" />
      </div>
      <div className="milestones">
        {values.map((val) => (
          <div className="milestone" key={val.name} tabIndex="0" data-tooltip={val.note}>
            <div className="milestone-art">{val.art}</div>
            <i aria-hidden="true" />
            <span>{val.name}</span>
          </div>
        ))}
      </div>

      <blockquote className="story-quote" style={{ marginTop: '40px' }}>
        <div className="story-quote-inner">
          <span className="oversized-quote opening-quote" aria-hidden="true">“</span>
          <p>Technology can introduce two people. Only trust, values, and genuine understanding can bring them together.</p>
          <span className="oversized-quote closing-quote" aria-hidden="true">”</span>
          <span className="quote-signature">The Match Haven Philosophy</span>
        </div>
      </blockquote>
    </section>
  );
};

export default EthicsAndValues;
