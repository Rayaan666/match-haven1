import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhoWeServe.css';

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  {
    num: '01',
    tag: 'Featured',
    title: 'Accomplished Professionals',
    desc: 'Entrepreneurs, executives, doctors, engineers, consultants, and professionals seeking partners who share their ambitions, values, and vision for the future. We understand your time is precious — every introduction is intentional.',
    featured: true,
  },
  {
    num: '02',
    tag: 'For Families',
    title: 'Families Seeking Trusted Introductions',
    desc: 'Families looking for confidential, respectful, and thoughtfully curated introductions built on trust and deep compatibility.',
    featured: false,
  },
  {
    num: '03',
    tag: 'Global',
    title: 'Dubai Expats & Global Residents',
    desc: 'Connecting accomplished professionals living across the world with compatible matches rooted in shared culture, heritage, and values.',
    featured: false,
  },
  {
    num: '04',
    tag: 'Leadership',
    title: 'Entrepreneurs & Business Leaders',
    desc: 'For individuals balancing ambitious careers and growing ventures while seeking a meaningful, grounding lifelong partnership.',
    featured: false,
  },
  {
    num: '05',
    tag: 'Commitment',
    title: 'Individuals Ready for Marriage',
    desc: 'Those who value commitment, emotional compatibility, and authentic relationships over fleeting digital connections.',
    featured: false,
  },
];

const WhoWeServe = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const rowsRef = useRef([]);
  const trustRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headerRef.current.querySelectorAll('.wws-reveal'),
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%' },
        }
      );

      // Rows stagger in
      rowsRef.current.forEach((row, i) => {
        if (!row) return;
        gsap.fromTo(row,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: row, start: 'top 88%' },
            delay: i * 0.08,
          }
        );
      });

      // Trust block
      gsap.fromTo(
        trustRef.current.querySelectorAll('.trust-reveal'),
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: trustRef.current, start: 'top 88%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="who-we-serve section-padding" ref={sectionRef}>
      <div className="wws-radial-glow" aria-hidden="true" />

      <div className="container">
        {/* ── Header ── */}
        <div className="wws-header" ref={headerRef}>
          <p className="wws-eyebrow wws-reveal">Who We Serve</p>
          <div className="wws-divider wws-reveal" aria-hidden="true">
            <span /><span className="wws-diamond" /><span />
          </div>
          <h2 className="wws-heading wws-reveal">
            Crafted for Those Seeking<br />
            <em className="wws-heading-italic">Something Meaningful.</em>
          </h2>
          <p className="wws-subheading wws-reveal">
            Match Haven welcomes accomplished individuals and families who value trust, authenticity, privacy,
            and meaningful lifelong relationships over casual connections.
          </p>
        </div>

        {/* ── Editorial Audience List ── */}
        <div className="wws-list">
          {/* Top rule */}
          <div className="wws-rule" aria-hidden="true" />

          {audiences.map((item, i) => (
            <div
              key={item.num}
              className={`wws-row ${item.featured ? 'wws-row-featured' : ''}`}
              ref={el => { if (el) rowsRef.current[i] = el; }}
            >
              {/* Number */}
              <span className="wws-row-num">{item.num}</span>

              {/* Tag pill */}
              <span className="wws-row-tag">{item.tag}</span>

              {/* Title — dominant editorial element */}
              <h3 className="wws-row-title">{item.title}</h3>

              {/* Description — revealed inline on the right */}
              <p className="wws-row-desc">{item.desc}</p>

              {/* Arrow accent */}
              <span className="wws-row-arrow" aria-hidden="true">→</span>

              {/* Bottom rule */}
              <div className="wws-rule wws-rule-inner" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* ── Trust Statement ── */}
        <div className="wws-trust" ref={trustRef}>
          <h3 className="wws-trust-heading trust-reveal">
            Every Journey Is Unique.<br />
            <em>Every Match Is Personal.</em>
          </h3>
          <p className="wws-trust-body trust-reveal">
            Whether you are beginning your search independently or alongside your family, Match Haven combines
            intelligent technology with human expertise to create introductions that truly matter.
          </p>
          <div className="wws-trust-divider trust-reveal" aria-hidden="true">
            <span /><span className="wws-diamond" /><span />
          </div>
          <div className="wws-trust-badges trust-reveal">
            {[
              'Invitation-Only Community',
              '100% Verified Members',
              'Thoughtful Compatibility',
              'Confidential Matchmaking',
            ].map((badge, i) => (
              <div className="wws-trust-badge" key={i}>
                <span className="wws-check">✓</span>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
