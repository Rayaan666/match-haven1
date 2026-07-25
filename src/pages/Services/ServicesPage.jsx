import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Check, Shield, Sparkles, Star, Users } from 'lucide-react';
import { gsap } from 'gsap';
import ServicesOverview from '../../components/Services/ServicesOverview';
import './ServicesPage.css';

const journey = [
  { step: 'Discover', detail: 'We listen to the story behind your search.' },
  { step: 'Understand', detail: 'Values, family, and aspirations come into focus.' },
  { step: 'Curate', detail: 'Human insight and intelligent signals shape a shortlist.' },
  { step: 'Introduce', detail: 'Every introduction is intentional and discreet.' },
  { step: 'Support', detail: 'Your concierge stays beside you throughout.' },
];

const badges = [
  { label: 'Personally Curated', className: 'badge-curated' },
  { label: 'AI Enhanced', className: 'badge-ai' },
  { label: 'Invitation Only', className: 'badge-invitation' },
  { label: 'Family Focused', className: 'badge-family' },
  { label: 'Complete Confidentiality', className: 'badge-confidential' },
];

const stats = [
  '100% Verified Members',
  'Private Introductions',
  'Human Matchmaking Experts',
  'AI Compatibility Insights',
  'Family-Centric Process',
];

const ServicesPage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      timeline
        .from('.services-hero__eyebrow', { y: 16, opacity: 0, duration: 0.7 })
        .from('.services-hero__line > span', {
          yPercent: 110,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
        }, '-=0.35')
        .from('.services-hero__copy', { y: 24, opacity: 0, duration: 0.8 }, '-=0.45')
        .from('.services-hero__actions > *', {
          y: 18,
          opacity: 0,
          duration: 0.65,
          stagger: 0.12,
        }, '-=0.45')
        .from('.journey-panel', { y: 24, opacity: 0, duration: 0.85 }, '-=0.4')
        .from('.journey-milestone', {
          scale: 0.75,
          opacity: 0,
          duration: 0.55,
          stagger: 0.1,
        }, '-=0.55')
        .fromTo('.journey-line__fill', { scaleX: 0 }, {
          scaleX: 1,
          transformOrigin: 'left center',
          duration: 1.1,
        }, '-=0.75')
        .from('.concierge-collage', { scale: 0.94, opacity: 0, duration: 1.3 }, 0.4)
        .from('.collage-card', {
          y: 28,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
        }, '-=0.8')
        .from('.premium-badge', {
          scale: 0.85,
          opacity: 0,
          duration: 0.55,
          stagger: 0.08,
        }, '-=0.55')
        .from('.services-stats__item', {
          y: 12,
          opacity: 0,
          duration: 0.5,
          stagger: 0.07,
        }, '-=0.25');

      gsap.to('.services-hero__light', {
        xPercent: 8,
        yPercent: -5,
        scale: 1.12,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.utils.toArray('.premium-badge').forEach((badge, index) => {
        gsap.to(badge, {
          y: index % 2 ? 8 : -9,
          x: index % 2 ? -3 : 4,
          duration: 3.4 + index * 0.32,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      gsap.to('.gold-ribbon__path', {
        strokeDashoffset: -42,
        duration: 2.8,
        repeat: -1,
        ease: 'none',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToServices = (event) => {
    event.preventDefault();
    document.querySelector('.services-overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Our Services | Match Haven Exclusive Matrimony</title>
        <meta name="description" content="Discover Match Haven's bespoke matchmaking pathways: Family Introductions, Elite events, and confidential relationship coaching for accomplished singles." />
      </Helmet>

      <div className="services-page">
        <section className="services-hero" ref={heroRef} aria-labelledby="services-hero-title">
          <div className="services-hero__light" aria-hidden="true" />
          <div className="services-hero__grain" aria-hidden="true" />
          <div className="services-hero__arch services-hero__arch--one" aria-hidden="true" />
          <div className="services-hero__arch services-hero__arch--two" aria-hidden="true" />
          <svg className="botanical botanical--left" viewBox="0 0 180 360" aria-hidden="true">
            <path d="M36 352C54 282 65 210 57 120M58 262c30-19 49-44 55-76M59 219c-29-14-43-39-46-69M58 168c25-18 37-41 39-68M57 133C33 119 22 98 20 72M60 103c17-16 25-36 23-59" />
            <path d="M109 188c-16-2-28-10-36-23 17-4 30 4 36 23ZM14 151c16-2 29 5 39 19-17 5-31-1-39-19ZM96 101c-15 0-26-7-34-19 15-5 28 1 34 19ZM20 73c14-1 25 5 34 17-15 4-26-1-34-17Z" />
          </svg>
          <svg className="botanical botanical--right" viewBox="0 0 180 360" aria-hidden="true">
            <path d="M36 352C54 282 65 210 57 120M58 262c30-19 49-44 55-76M59 219c-29-14-43-39-46-69M58 168c25-18 37-41 39-68M57 133C33 119 22 98 20 72M60 103c17-16 25-36 23-59" />
            <path d="M109 188c-16-2-28-10-36-23 17-4 30 4 36 23ZM14 151c16-2 29 5 39 19-17 5-31-1-39-19ZM96 101c-15 0-26-7-34-19 15-5 28 1 34 19ZM20 73c14-1 25 5 34 17-15 4-26-1-34-17Z" />
          </svg>

          <div className="services-hero__main">
            <div className="services-hero__content">
              <div className="services-hero__eyebrow">
                <span className="eyebrow-diamond" aria-hidden="true" />
                Match Haven Services
              </div>

              <h1 id="services-hero-title" className="services-hero__title">
                <span className="services-hero__line"><span>Every Match Is</span></span>
                <span className="services-hero__line">
                  <span><em>Crafted,</em> Never Automated.</span>
                </span>
              </h1>

              <p className="services-hero__copy">
                Behind every introduction is a thoughtful process that blends intelligent technology,
                experienced matchmakers, family understanding, and complete confidentiality—creating
                meaningful relationships, one introduction at a time.
              </p>

              <div className="services-hero__actions">
                <a className="services-cta services-cta--primary" href="#signature-services" onClick={scrollToServices}>
                  <span>Explore Our Services</span>
                  <ArrowUpRight size={17} strokeWidth={1.6} />
                </a>
                <Link className="services-cta services-cta--secondary" to="/services/premier-introductions-for-families#how-it-works">
                  <span>How It Works</span>
                  <ArrowUpRight size={17} strokeWidth={1.6} />
                </Link>
              </div>

              <div className="journey-panel">
                <div className="journey-panel__heading">
                  <span>Your Matchmaking Journey</span>
                  <small>Hover to discover each chapter</small>
                </div>
                <div className="journey-track">
                  <div className="journey-line" aria-hidden="true">
                    <span className="journey-line__fill" />
                  </div>
                  {journey.map((item, index) => (
                    <div className="journey-milestone" key={item.step} tabIndex="0">
                      <span className="journey-milestone__number">0{index + 1}</span>
                      <span className="journey-milestone__dot" />
                      <span className="journey-milestone__label">{item.step}</span>
                      <span className="journey-milestone__detail">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="services-hero__visual" aria-label="An editorial collage of the Match Haven concierge experience">
              <div className="concierge-collage">
                <div className="collage-ornament" aria-hidden="true">
                  <span>MH</span>
                </div>
                <figure className="collage-card collage-card--main">
                  <img src="/services/concierge-consultation.png" alt="A Match Haven consultant listening to a client in a private lounge" />
                  <figcaption>
                    <span>Private Consultation</span>
                    <small>Dubai · By appointment</small>
                  </figcaption>
                </figure>
                <figure className="collage-card collage-card--portfolio">
                  <img src="/services/compatibility-portfolio.png" alt="Leather portfolio with handwritten compatibility notes" />
                </figure>
                <figure className="collage-card collage-card--invitation">
                  <img src="/services/private-invitation.png" alt="Ivory invitation envelope with a burgundy wax seal" />
                </figure>
                <figure className="collage-card collage-card--table">
                  <img src="/services/concierge-table.png" alt="Curated lounge table with notebook, flowers, invitation and pen" />
                </figure>

                {badges.map((badge) => (
                  <span className={`premium-badge ${badge.className}`} key={badge.label}>
                    <Check size={12} strokeWidth={2} />
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="services-hero__bottom">
            <div className="services-stats" aria-label="Match Haven service principles">
              {stats.map((stat) => (
                <div className="services-stats__item" key={stat}>
                  <span className="services-stats__gem" aria-hidden="true" />
                  <span>{stat}</span>
                </div>
              ))}
            </div>

            <a className="services-scroll-cue" href="#signature-services" onClick={scrollToServices}>
              <svg className="gold-ribbon" viewBox="0 0 42 66" aria-hidden="true">
                <path className="gold-ribbon__path" d="M20 1c18 13-14 22 3 34s-6 20-2 29" />
                <path className="gold-ribbon__tip" d="m15 57 6 7 7-7" />
              </svg>
              <span>Discover Our Signature Services</span>
              <ArrowDown size={13} />
            </a>
          </div>
        </section>

        <div id="signature-services">
          <ServicesOverview />
        </div>

        <section className="services-details section-padding">
          <div className="container">
            <div className="services-details-grid">
              <div className="detail-card">
                <div className="detail-icon"><Sparkles size={32} /></div>
                <h3>AI Compatibility Curation</h3>
                <p>We analyze core psychological traits, family values, and lifestyle preferences to find the perfect match with absolute precision.</p>
              </div>
              <div className="detail-card">
                <div className="detail-icon"><Shield size={32} /></div>
                <h3>100% Background Curation</h3>
                <p>Your safety and peace of mind are paramount. Every prospective member undergoes rigorous background validation and secure verification.</p>
              </div>
              <div className="detail-card">
                <div className="detail-icon"><Users size={32} /></div>
                <h3>Personal Match Concierge</h3>
                <p>A dedicated, expert relationship concierge walks with you at every stage, providing feedback, support, and professional coordination.</p>
              </div>
              <div className="detail-card">
                <div className="detail-icon"><Star size={32} /></div>
                <h3>Signature Private Events</h3>
                <p>Gain invitation-only access to our elite social mixers, private wine tastings, and exclusive cultural events designed for organic discovery.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
