import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: '01',
    tag: 'For Families',
    title: 'Premier Introductions for Families',
    headline: 'Where Two Families Begin One Story',
    description:
      "Our matchmakers meet with individuals and families to understand their values, beliefs, lifestyle, personality, and partner preferences. Following a careful screening and assessment process, we curate compatible matches and share detailed profiles for consideration. Once a mutual interest is established, we facilitate a formal family introduction, creating the foundation for a meaningful and lasting relationship.",
    highlights: ['Personally Verified Family Profiles', 'Cultural Compatibility Mapping', 'Dedicated Relationship Concierge', 'Confidential & Private Process'],
    cta: 'Explore Family Services',
    ctaPath: '/services/premier-introductions-for-families',
    accent: '#5C0F1A',
    bgPattern: 'service-pattern-a',
    image: '/home/difference1.png',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="22" cy="18" r="8" />
        <circle cx="42" cy="18" r="8" />
        <path d="M8 52c0-9.9 6.3-18 14-18M42 34c7.7 0 14 8.1 14 18" />
        <path d="M32 36v16M28 48l4 4 4-4" />
        <path d="M26 30c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </svg>
    ),
  },
  {
    num: '02',
    tag: 'Exclusive Events',
    title: 'Signature Match Events',
    headline: 'Curated Encounters, Crafted for Connection',
    description:
      "Designed with compatibility in mind, our Signature Match Events bring together carefully selected individuals who share common values, beliefs, and lifestyles. Every event is tailored to foster genuine connections within a like-minded community.",
    highlights: ['Customised Event', 'Invitation only', 'Premium Venue', 'Formal introduction'],
    cta: 'View Upcoming Events',
    ctaPath: '/services/signature-match-events',
    accent: '#5C0F1A',
    bgPattern: 'service-pattern-b',
    image: '/home/difference2.png',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 8l4.8 9.7 10.7 1.6-7.7 7.5 1.8 10.6L32 32.5l-9.6 5-1.8-10.6L13 19.3l10.7-1.6z" />
        <path d="M10 52h44M16 44h32" />
        <circle cx="32" cy="20" r="3" fill="currentColor" fillOpacity="0.15" />
        <path d="M22 52V42a10 10 0 0120 0v10" />
      </svg>
    ),
  },
];

const ServicesOverview = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current.querySelectorAll('.svc-reveal'),
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%' }
        }
      );

      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
            delay: i * 0.15,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services-overview section-padding" ref={sectionRef}>
      {/* Subtle radial glow */}
      <div className="svc-glow" aria-hidden="true"></div>

      <div className="container">
        {/* Header */}
        <div className="svc-header" ref={headerRef}>
          <p className="svc-eyebrow svc-reveal">Our Services</p>
          <div className="svc-divider svc-reveal" aria-hidden="true">
            <span></span><span className="svc-diamond"></span><span></span>
          </div>
          <h2 className="svc-heading svc-reveal">
            An Elevated Path<br />
            <em className="svc-heading-italic">to Lifelong Love</em>
          </h2>
          <p className="svc-subheading svc-reveal">
            Two bespoke pathways, both guided by expert judgement and human warmth — crafted for those who value privacy, quality, and meaningful connection.
          </p>
        </div>

        {/* Service Cards */}
        <div className="svc-cards">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`svc-card ${svc.bgPattern}`}
              ref={el => { if (el) cardsRef.current[i] = el; }}
            >
              {/* Left: content */}
              <div className="svc-card-content">
                <div className="svc-card-top">
                  <span className="svc-card-tag">{svc.tag}</span>
                  <span className="svc-card-num">{svc.num}</span>
                </div>

                <div className="svc-icon-wrapper" style={{ color: svc.accent }}>
                  {svc.icon}
                </div>

                <h3 className="svc-card-title">{svc.title}</h3>
                <p className="svc-card-headline">{svc.headline}</p>
                <p className="svc-card-desc">{svc.description}</p>

                <ul className="svc-highlights">
                  {svc.highlights.map((h, j) => (
                    <li key={j} className="svc-highlight-item">
                      <span className="svc-check" style={{ color: svc.accent }}>◆</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <Link to={svc.ctaPath} className="svc-cta" style={{ '--svc-accent': svc.accent }}>
                  {svc.cta}
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Right: decorative visual panel */}
              <div className="svc-card-visual">
                {svc.image ? (
                  <img src={svc.image} alt={svc.title} className="svc-visual-img" />
                ) : (
                  <>
                    <div className="svc-visual-ring svc-ring-lg" style={{ borderColor: `${svc.accent}18` }}></div>
                    <div className="svc-visual-ring svc-ring-md" style={{ borderColor: `${svc.accent}28` }}></div>
                    <div className="svc-visual-ring svc-ring-sm" style={{ borderColor: `${svc.accent}40` }}></div>
                    <div className="svc-visual-icon" style={{ color: svc.accent }}>
                      {svc.icon}
                    </div>
                    <p className="svc-visual-label">{svc.headline}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
