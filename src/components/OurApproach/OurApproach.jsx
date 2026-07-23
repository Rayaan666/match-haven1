import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './OurApproach.css';

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    id: 'expertise',
    num: '01',
    title: 'Human Expertise Guides Every Introduction',
    body: "Our experienced relationship consultants thoughtfully assess and refine every recommendation, bringing personal judgement, discretion, and a genuine understanding of what makes relationships last.",
    side: 'left',
    illustration: (
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="120" r="60" stroke="rgba(168,102,30,0.4)" strokeWidth="1.2" strokeDasharray="4 6"/>
        <circle cx="220" cy="120" r="60" stroke="rgba(114,47,55,0.35)" strokeWidth="1.2" strokeDasharray="4 6"/>
        {/* Human figure */}
        <circle cx="100" cy="98" r="14" stroke="rgba(168,102,30,0.7)" strokeWidth="1.5"/>
        <path d="M78 140c0-12.2 9.8-22 22-22s22 9.8 22 22" stroke="rgba(168,102,30,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Compatibility constellation */}
        <circle cx="220" cy="100" r="8" fill="rgba(86,34,41,0.12)" stroke="rgba(86,34,41,0.5)" strokeWidth="1.5"/>
        <circle cx="240" cy="130" r="5" stroke="rgba(86,34,41,0.4)" strokeWidth="1.2"/>
        <circle cx="200" cy="130" r="5" stroke="rgba(86,34,41,0.4)" strokeWidth="1.2"/>
        <circle cx="220" cy="155" r="5" stroke="rgba(86,34,41,0.4)" strokeWidth="1.2"/>
        <path d="M220 108v14M220 114l-14 10M220 114l14 10M220 135v12" stroke="rgba(86,34,41,0.4)" strokeWidth="1.2"/>
        {/* Connection */}
        <path d="M160 120 Q160 100 160 100" stroke="rgba(168,102,30,0.5)" strokeWidth="1" strokeDasharray="3 4"/>
        <path d="M152 115l8 5 8-5" stroke="rgba(168,102,30,0.4)" strokeWidth="0.8"/>
        {/* Overlap glow */}
        <ellipse cx="160" cy="120" rx="18" ry="18" fill="rgba(168,102,30,0.06)"/>
        <text x="160" y="195" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(120,80,40,0.5)">Collaboration</text>
      </svg>
    ),
  },
  {
    id: 'family',
    num: '02',
    title: 'Family Values Remain at the Heart',
    body: "Meaningful introductions respect family traditions, shared aspirations, and long-term compatibility while remaining modern and flexible. We honour the role families play in every great relationship.",
    side: 'right',
    illustration: (
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 180 Q160 80 260 180" stroke="rgba(168,102,30,0.3)" strokeWidth="1" fill="rgba(168,102,30,0.03)"/>
        {/* Family silhouettes */}
        <circle cx="130" cy="95" r="12" stroke="rgba(168,102,30,0.6)" strokeWidth="1.5"/>
        <path d="M112 130c0-9.9 8.1-18 18-18s18 8.1 18 18" stroke="rgba(168,102,30,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="190" cy="100" r="10" stroke="rgba(114,47,55,0.6)" strokeWidth="1.5"/>
        <path d="M174 130c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="rgba(114,47,55,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Heart connection */}
        <path d="M160 135 C152 125, 140 126, 140 136 C140 143 148 150 160 158 C172 150 180 143 180 136 C180 126, 168 125, 160 135z" stroke="rgba(183,110,121,0.5)" strokeWidth="1.2" fill="rgba(183,110,121,0.06)"/>
        {/* Decorative rings */}
        <circle cx="160" cy="145" r="40" stroke="rgba(168,102,30,0.12)" strokeWidth="1" strokeDasharray="2 5"/>
        <circle cx="160" cy="145" r="60" stroke="rgba(168,102,30,0.07)" strokeWidth="0.8" strokeDasharray="2 6"/>
        <text x="160" y="215" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(120,80,40,0.5)">Tradition & Modernity</text>
      </svg>
    ),
  },
  {
    id: 'culture',
    num: '03',
    title: 'Compatibility Beyond Shared Interests',
    body: "We map cultural values, regional traditions, language, lifestyle rhythms, and life goals — recognising that the most lasting relationships are built on layers of profound, layered compatibility.",
    side: 'left',
    illustration: (
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Mandala-like cultural motif */}
        <circle cx="160" cy="120" r="75" stroke="rgba(168,102,30,0.18)" strokeWidth="1" strokeDasharray="3 5"/>
        <circle cx="160" cy="120" r="55" stroke="rgba(168,102,30,0.28)" strokeWidth="1.2"/>
        <circle cx="160" cy="120" r="32" stroke="rgba(114,47,55,0.35)" strokeWidth="1.5"/>
        <circle cx="160" cy="120" r="14" fill="rgba(168,102,30,0.1)" stroke="rgba(168,102,30,0.6)" strokeWidth="1.5"/>
        {/* Petal lines */}
        {[0,45,90,135,180,225,270,315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 160 + 18 * Math.cos(rad);
          const y1 = 120 + 18 * Math.sin(rad);
          const x2 = 160 + 52 * Math.cos(rad);
          const y2 = 120 + 52 * Math.sin(rad);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(168,102,30,0.35)" strokeWidth="1"/>;
        })}
        <text x="160" y="210" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(120,80,40,0.5)">Cultural Harmony</text>
      </svg>
    ),
  },
  {
    id: 'quality',
    num: '04',
    title: 'Curated Introductions Over Endless Profiles',
    body: "Instead of thousands of random suggestions, we present only a carefully refined selection of deeply compatible introductions — each one reviewed by a human expert before it reaches you.",
    side: 'right',
    illustration: (
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Concierge / curation motif */}
        <rect x="100" y="60" width="120" height="140" rx="8" stroke="rgba(168,102,30,0.4)" strokeWidth="1.2"/>
        <rect x="108" y="68" width="104" height="124" rx="6" fill="rgba(168,102,30,0.03)"/>
        {/* Profile lines */}
        <circle cx="160" cy="100" r="16" stroke="rgba(168,102,30,0.7)" strokeWidth="1.5"/>
        <path d="M137 128c0-12.7 10.3-23 23-23s23 10.3 23 23" stroke="rgba(168,102,30,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Check badge */}
        <circle cx="200" cy="72" r="14" fill="rgba(168,102,30,0.15)" stroke="rgba(168,102,30,0.6)" strokeWidth="1.5"/>
        <path d="M193 72l5 5 9-9" stroke="rgba(168,102,30,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Small divider lines */}
        <line x1="120" y1="155" x2="200" y2="155" stroke="rgba(168,102,30,0.3)" strokeWidth="0.8"/>
        <line x1="120" y1="168" x2="185" y2="168" stroke="rgba(168,102,30,0.2)" strokeWidth="0.8"/>
        <text x="160" y="215" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(120,80,40,0.5)">Intentional Curation</text>
      </svg>
    ),
  },
  {
    id: 'privacy',
    num: '05',
    title: 'Your Journey Stays Completely Private',
    body: "Invitation-only access, verified identities, encrypted communication, and complete discretion — your search for a meaningful relationship remains entirely confidential from beginning to end.",
    side: 'left',
    illustration: (
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield */}
        <path d="M160 48L98 70v52c0 39.2 26.4 74.8 62 86 35.6-11.2 62-46.8 62-86V70z" stroke="rgba(168,102,30,0.5)" strokeWidth="1.5" fill="rgba(168,102,30,0.04)"/>
        <path d="M160 65l-44 16.2v38c0 28.8 19.4 55 44 63.2 24.6-8.2 44-34.4 44-63.2v-38z" stroke="rgba(114,47,55,0.35)" strokeWidth="1.2" fill="rgba(114,47,55,0.03)"/>
        {/* Lock icon */}
        <rect x="148" y="118" width="24" height="18" rx="3" stroke="rgba(168,102,30,0.8)" strokeWidth="1.5"/>
        <path d="M152 118v-6a8 8 0 0116 0v6" stroke="rgba(168,102,30,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="160" cy="127" r="2.5" fill="rgba(168,102,30,0.6)"/>
        {/* Concentric glow rings */}
        <circle cx="160" cy="120" r="90" stroke="rgba(168,102,30,0.06)" strokeWidth="1" strokeDasharray="2 6"/>
        <text x="160" y="226" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(120,80,40,0.5)">Complete Confidentiality</text>
      </svg>
    ),
  },
];

const OurApproach = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const compareRef = useRef(null);
  const panelRefs = useRef([]);
  const closingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headerRef.current.querySelectorAll('.apr-reveal'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%' } }
      );

      // Comparison pillars
      gsap.fromTo(
        compareRef.current.querySelectorAll('.compare-col'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: compareRef.current, start: 'top 80%' } }
      );

      // Connecting lines draw
      gsap.fromTo(
        compareRef.current.querySelectorAll('.connect-line'),
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 1.2, ease: 'power2.inOut',
          scrollTrigger: { trigger: compareRef.current, start: 'top 78%' } }
      );

      // Panels
      panelRefs.current.forEach((panel) => {
        if (!panel) return;
        const img = panel.querySelector('.apr-panel-visual');
        const text = panel.querySelector('.apr-panel-text');
        gsap.fromTo(img,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out',
            scrollTrigger: { trigger: panel, start: 'top 85%' } }
        );
        gsap.fromTo(text,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: panel, start: 'top 85%' }, delay: 0.15 }
        );
      });

      // Closing
      gsap.fromTo(
        closingRef.current.querySelectorAll('.close-reveal'),
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: closingRef.current, start: 'top 88%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="our-approach section-padding" ref={sectionRef}>
      <div className="apr-bg-radial" aria-hidden="true" />

      <div className="container">
        {/* ── Header ── */}
        <div className="apr-header" ref={headerRef}>
          <p className="apr-eyebrow apr-reveal">Our Approach</p>
          <div className="apr-divider apr-reveal"><span /><span className="apr-diamond" /><span /></div>
          <h2 className="apr-heading apr-reveal">
            Where <em className="apr-burgundy">Human Wisdom</em> Meets{' '}
            <em className="apr-gold">Intelligent Matching.</em>
          </h2>
          <p className="apr-subheading apr-reveal">
            Technology can identify compatibility, but meaningful relationships are built through understanding,
            values, and human insight. Match Haven combines both to create introductions that truly matter.
          </p>
        </div>

        {/* ── Three-Column Comparison ── */}
        <div className="apr-compare" ref={compareRef}>
          {/* Left — Traditional */}
          <div className="compare-col compare-left">
            <div className="compare-illustration">
              <svg viewBox="0 0 160 200" fill="none">
                {/* Traditional motif — matchmaker / family */}
                <ellipse cx="80" cy="190" rx="70" ry="8" fill="rgba(168,102,30,0.06)"/>
                <circle cx="80" cy="68" r="24" stroke="rgba(168,102,30,0.7)" strokeWidth="1.5"/>
                <path d="M50 115c0-16.6 13.4-30 30-30s30 13.4 30 30" stroke="rgba(168,102,30,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Wedding invitation motif */}
                <rect x="42" y="128" width="76" height="52" rx="4" stroke="rgba(168,102,30,0.4)" strokeWidth="1.2"/>
                <path d="M42 140h76M55 152h50M60 162h40" stroke="rgba(168,102,30,0.25)" strokeWidth="0.8"/>
                <path d="M80 130l-5 8h10z" fill="rgba(168,102,30,0.3)" stroke="rgba(168,102,30,0.5)" strokeWidth="0.8"/>
                <circle cx="80" cy="125" r="40" stroke="rgba(168,102,30,0.1)" strokeWidth="0.8" strokeDasharray="2 5"/>
              </svg>
            </div>
            <h3 className="compare-title compare-title-gold">Traditional Wisdom</h3>
            <ul className="compare-traits">
              <li>Deep cultural understanding</li>
              <li>Family values & heritage</li>
              <li>Human intuition & empathy</li>
              <li>Long-term relationship focus</li>
            </ul>
          </div>

          {/* Center — Match Haven Medallion */}
          <div className="compare-col compare-center">
            <div className="connect-line connect-left" />
            <div className="compare-medallion">
              <div className="medallion-outer">
                <div className="medallion-middle">
                  <div className="medallion-inner">
                    <svg viewBox="0 0 100 100" fill="none" className="medallion-mandala">
                      <circle cx="50" cy="50" r="46" stroke="rgba(168,102,30,0.4)" strokeWidth="0.8" strokeDasharray="2 4"/>
                      <circle cx="50" cy="50" r="36" stroke="rgba(168,102,30,0.6)" strokeWidth="0.8"/>
                      <circle cx="50" cy="50" r="22" stroke="rgba(168,102,30,0.8)" strokeWidth="1"/>
                      {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => {
                        const rad = (angle * Math.PI) / 180;
                        return (
                          <line key={i}
                            x1={50 + 24 * Math.cos(rad)} y1={50 + 24 * Math.sin(rad)}
                            x2={50 + 34 * Math.cos(rad)} y2={50 + 34 * Math.sin(rad)}
                            stroke="rgba(168,102,30,0.5)" strokeWidth="0.8"
                          />
                        );
                      })}
                      <circle cx="50" cy="50" r="8" fill="rgba(168,102,30,0.2)" stroke="rgba(168,102,30,0.9)" strokeWidth="1"/>
                    </svg>
                    <span className="medallion-brand">MATCH HAVEN</span>
                  </div>
                </div>
              </div>
              <p className="medallion-caption">Where Technology<br/>Meets Tradition.</p>
            </div>
            <div className="connect-line connect-right" />
          </div>

          {/* Right — modern insight */}
          <div className="compare-col compare-right">
            <div className="compare-illustration">
              <svg viewBox="0 0 160 200" fill="none">
                <ellipse cx="80" cy="190" rx="70" ry="8" fill="rgba(86,34,41,0.05)"/>
                {/* Neural constellation */}
                <circle cx="80" cy="50" r="10" stroke="rgba(86,34,41,0.6)" strokeWidth="1.5" fill="rgba(86,34,41,0.08)"/>
                <circle cx="42" cy="90" r="7" stroke="rgba(86,34,41,0.5)" strokeWidth="1.3"/>
                <circle cx="118" cy="90" r="7" stroke="rgba(86,34,41,0.5)" strokeWidth="1.3"/>
                <circle cx="55" cy="135" r="6" stroke="rgba(114,47,55,0.5)" strokeWidth="1.2"/>
                <circle cx="105" cy="135" r="6" stroke="rgba(114,47,55,0.5)" strokeWidth="1.2"/>
                <circle cx="80" cy="165" r="8" stroke="rgba(168,102,30,0.6)" strokeWidth="1.5"/>
                <path d="M80 60L42 83M80 60L118 83M42 97L55 129M118 97L105 129M55 141L80 157M105 141L80 157" stroke="rgba(86,34,41,0.35)" strokeWidth="1"/>
                <circle cx="80" cy="100" r="52" stroke="rgba(86,34,41,0.07)" strokeWidth="0.8" strokeDasharray="2 5"/>
              </svg>
            </div>
            <h3 className="compare-title compare-title-burgundy">Modern Intelligence</h3>
            <ul className="compare-traits">
              <li>Deep personality mapping</li>
              <li>Thoughtful compatibility analysis</li>
              <li>Behavioural pattern insights</li>
              <li>Data-driven curation</li>
            </ul>
          </div>
        </div>

        {/* ── Editorial Feature Panels ── */}
        <div className="apr-panels">
          {panels.map((panel, i) => (
            <div
              key={panel.id}
              className={`apr-panel ${panel.side === 'right' ? 'apr-panel-reverse' : ''}`}
              ref={el => { if (el) panelRefs.current[i] = el; }}
            >
              <div className="apr-panel-visual">
                <div className="apr-panel-illustration">
                  {panel.illustration}
                </div>
                <div className="apr-panel-num">{panel.num}</div>
              </div>
              <div className="apr-panel-text">
                <span className="apr-panel-label">Step {panel.num}</span>
                <h3 className="apr-panel-title">{panel.title}</h3>
                <p className="apr-panel-body">{panel.body}</p>
                <div className="apr-panel-accent" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>

        {/* ── Closing Statement ── */}
        <div className="apr-closing" ref={closingRef}>
          <h3 className="apr-closing-heading close-reveal">
            Because the Right Match is<br />
            <em>Never Just About Data.</em>
          </h3>
          <p className="apr-closing-body close-reveal">
            At Match Haven, experienced matchmakers guide every introduction and ensure each connection is built
            on trust, compatibility, shared values, and genuine human understanding.
          </p>
          <div className="apr-closing-divider close-reveal"><span /><span className="apr-diamond" /><span /></div>
          <div className="apr-closing-badges close-reveal">
            {['Human Matchmaking Experts','Thoughtful Compatibility','Invitation-Only Community','Family-Centric Approach','100% Confidential'].map((b, i) => (
              <div key={i} className="apr-badge"><span className="apr-check">✓</span>{b}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
