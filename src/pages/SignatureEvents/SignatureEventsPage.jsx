import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Check } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SignatureEventsPage.css';

gsap.registerPlugin(ScrollTrigger);

const experienceChips = [
  'Invitation Only',
  'Curated Guest List',
  'Luxury Venues',
  'Meaningful Conversations',
];

const ribbonMoments = ['Invitation', 'Arrival', 'Conversation', 'Connection', 'Possibilities'];

const screeningStages = [
  {
    stage: 'Stage One',
    title: 'Application Review',
    description: 'Understanding every applicant beyond basic information.',
    position: 'event-studio__panel--application',
  },
  {
    stage: 'Stage Two',
    title: 'Compatibility Assessment',
    description: 'Reviewing values, aspirations, interests, and relationship goals.',
    position: 'event-studio__panel--compatibility',
  },
  {
    stage: 'Stage Three',
    title: 'Identity Verification',
    description: 'Ensuring authenticity and privacy for every attendee.',
    position: 'event-studio__panel--identity',
  },
  {
    stage: 'Stage Four',
    title: 'Curated Invitations',
    description: 'Only thoughtfully matched guests receive invitations.',
    position: 'event-studio__panel--invitations',
  },
  {
    stage: 'Stage Five',
    title: 'Event Preparation',
    description: 'Creating a balanced, welcoming, and meaningful event experience.',
    position: 'event-studio__panel--preparation',
  },
];

const eventBenefits = [
  {
    title: 'Exclusive Invitation-Only Events',
    description: 'Every gathering begins with intention, never open registration or public attendance.',
    image: '/services/events/rooftop-gathering.png',
  },
  {
    title: 'Carefully Curated Attendees',
    description: 'Guests are selected for shared intent, compatibility, and readiness for a meaningful connection.',
    image: '/home/difference2.png',
  },
  {
    title: 'Relaxed & Natural Conversations',
    description: 'Thoughtful settings and gentle hosting make it easy for genuine conversation to unfold.',
    image: '/services/events/candlelit-lounge.png',
  },
  {
    title: 'Luxury Hospitality & Venues',
    description: 'Each private setting is chosen for atmosphere, service, beauty, and quiet discretion.',
    image: '/services/events/private-dining.png',
  },
  {
    title: 'Privacy Throughout Every Event',
    description: 'No public guest lists, no exposed profiles, and no pressure—only considered introductions.',
    image: '/services/private-invitation.png',
  },
  {
    title: 'Meaningful Connections Beyond Algorithms',
    description: 'Human chemistry, shared moments, and expert curation create possibilities technology cannot predict.',
    image: '/services/compatibility-portfolio.png',
  },
];

const SignatureEventsPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const requestedSection = window.location.hash;
    let sectionScrollTimer;
    if (requestedSection) {
      sectionScrollTimer = window.setTimeout(
        () => document.querySelector(requestedSection)?.scrollIntoView(),
        800,
      );
    } else {
      window.scrollTo(0, 0);
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro
        .from('.event-experience__eyebrow', { y: 15, opacity: 0, duration: .65 })
        .from('.event-experience__title-line > span', {
          yPercent: 115,
          opacity: 0,
          duration: 1,
          stagger: .12,
        }, '-=.32')
        .from('.event-experience__copy', { y: 24, opacity: 0, duration: .8 }, '-=.45')
        .from('.event-chip', { y: 14, opacity: 0, duration: .5, stagger: .09 }, '-=.4')
        .from('.event-collage', { scale: .94, opacity: 0, duration: 1.15 }, .28)
        .from('.event-collage__frame:not(.event-collage__frame--rooftop)', {
          y: 24,
          scale: .96,
          opacity: 0,
          duration: .72,
          stagger: .1,
        }, '-=.68')
        .from('.event-glass-badge', { scale: .84, opacity: 0, duration: .5, stagger: .1 }, '-=.42')
        .from('.event-ribbon__moment', { y: 12, opacity: 0, duration: .5, stagger: .09 }, '-=.25');

      gsap.fromTo('.event-ribbon__gold',
        { strokeDashoffset: 1600 },
        {
          strokeDashoffset: 0,
          duration: 2.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.event-ribbon',
            start: 'top 88%',
            end: 'bottom 72%',
            scrub: 1.2,
          },
        }
      );

      gsap.utils.toArray('.event-section-heading').forEach((heading) => {
        gsap.from(heading.children, {
          y: 26,
          opacity: 0,
          duration: .85,
          stagger: .1,
          ease: 'power3.out',
          scrollTrigger: { trigger: heading, start: 'top 82%' },
        });
      });

      gsap.fromTo('.event-studio__thread-gold',
        { strokeDashoffset: 2100 },
        {
          strokeDashoffset: 0,
          duration: 2.6,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: '.event-selection-studio', start: 'top 72%' },
        }
      );

      gsap.from('.event-studio__panel', {
        scale: .9,
        y: 30,
        opacity: 0,
        duration: .8,
        stagger: .13,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.event-selection-studio', start: 'top 72%' },
      });

      gsap.utils.toArray('.event-benefit').forEach((panel, index) => {
        gsap.from(panel, {
          x: index % 2 ? 42 : -42,
          y: 24,
          opacity: 0,
          duration: .95,
          ease: 'power3.out',
          scrollTrigger: { trigger: panel, start: 'top 86%' },
        });
        gsap.from(panel.querySelector('img'), {
          scale: 1.1,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: { trigger: panel, start: 'top 86%' },
        });
      });

      const envelopeTimeline = gsap.timeline({
        scrollTrigger: { trigger: '.event-invitation-cta', start: 'top 72%' },
      });
      envelopeTimeline
        .fromTo('.event-envelope__outline', { strokeDashoffset: 900 }, {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: 'power2.inOut',
        })
        .from('.event-envelope__flap', {
          scaleY: 0,
          transformOrigin: 'center top',
          duration: 1,
          ease: 'power2.out',
        }, '-=.45')
        .fromTo('.event-envelope__ribbon', { strokeDashoffset: 600 }, {
          strokeDashoffset: 0,
          duration: 1.5,
          stagger: .12,
          ease: 'power2.inOut',
        }, '-=.35')
        .from('.event-invitation-cta__content > *', {
          y: 26,
          opacity: 0,
          duration: .75,
          stagger: .11,
          ease: 'power3.out',
        }, '-=1.1');

      gsap.utils.toArray('.event-glass-badge').forEach((badge, index) => {
        gsap.to(badge, {
          y: index % 2 ? 7 : -8,
          x: index % 2 ? -2 : 3,
          duration: 3.5 + index * .45,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      gsap.to('.event-ambient-glow', {
        xPercent: 12,
        yPercent: -8,
        scale: 1.14,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.event-envelope__ribbon', {
        strokeDashoffset: -45,
        duration: 5,
        repeat: -1,
        ease: 'none',
      });
    }, pageRef);

    return () => {
      window.clearTimeout(sectionScrollTimer);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Signature Match Events | Match Haven</title>
        <meta
          name="description"
          content="Invitation-only Match Haven gatherings with curated guests, private luxury venues, and thoughtful introductions designed to unfold naturally."
        />
      </Helmet>

      <div className="signature-events-page" ref={pageRef}>
        <section className="event-experience" aria-labelledby="event-experience-title">
          <div className="event-ambient-glow" aria-hidden="true" />
          <div className="event-experience__grain" aria-hidden="true" />
          <svg className="event-botanical event-botanical--hero" viewBox="0 0 260 430" aria-hidden="true">
            <path d="M28 422C57 310 100 219 205 93M78 319c-39-8-64-32-76-71M120 254c43-4 79-25 107-63M158 181c-26-24-38-53-34-88M204 94c-2-27 9-51 34-72" />
            <path d="M3 248c31 1 56 16 75 46-32 5-57-11-75-46ZM124 94c27 12 44 36 50 68-31-8-48-31-50-68ZM227 191c-31 3-57 20-77 51 34 3 60-14 77-51Z" />
          </svg>

          <div className="event-experience__main">
            <div className="event-experience__content">
              <p className="event-experience__eyebrow">
                <span aria-hidden="true" />
                Signature Experience
              </p>
              <h1 className="event-experience__title" id="event-experience-title">
                <span className="event-experience__title-line">
                  <span className="event-gold-text">Signature Match</span>
                </span>
                <span className="event-experience__title-line">
                  <span className="event-gold-text">Events</span>
                </span>
              </h1>
              <p className="event-experience__copy">
                Our invitation-only gatherings are thoughtfully curated to create genuine conversations
                in elegant settings, where meaningful introductions happen naturally through shared
                experiences rather than chance.
              </p>
              <div className="event-experience__chips" aria-label="Event qualities">
                {experienceChips.map((chip) => (
                  <span className="event-chip" key={chip}>
                    <i aria-hidden="true" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="event-collage" aria-label="A private Match Haven evening event">
              <figure className="event-collage__frame event-collage__frame--rooftop">
                <img src="/services/events/rooftop-gathering.png" alt="Guests speaking at an intimate rooftop gathering in Dubai" />
              </figure>
              <figure className="event-collage__frame event-collage__frame--conversation">
                <img src="/home/difference2.png" alt="Elegantly dressed guests sharing a natural conversation" />
              </figure>
              <figure className="event-collage__frame event-collage__frame--dining">
                <img src="/services/events/private-dining.png" alt="A candle-lit private dining table with ivory flowers" />
              </figure>
              <figure className="event-collage__frame event-collage__frame--lounge">
                <img src="/services/events/candlelit-lounge.png" alt="A secluded burgundy lounge prepared with candlelight" />
              </figure>

              <span className="event-glass-badge event-glass-badge--curated"><Check size={12} />Curated Guest List</span>
              <span className="event-glass-badge event-glass-badge--venue"><Check size={12} />Private Venue</span>
              <span className="event-glass-badge event-glass-badge--verified"><Check size={12} />Verified Guests</span>
            </div>
          </div>

          <div className="event-ribbon" aria-label="The event experience from invitation to possibility">
            <svg viewBox="0 0 1400 190" preserveAspectRatio="none" aria-hidden="true">
              <path className="event-ribbon__soft" d="M-30 124C170 12 320 188 548 92S910 4 1120 92s230 61 330 17" />
              <path className="event-ribbon__gold" pathLength="1600" d="M-30 124C170 12 320 188 548 92S910 4 1120 92s230 61 330 17" />
            </svg>
            <div className="event-ribbon__moments">
              {ribbonMoments.map((moment, index) => (
                <div className={`event-ribbon__moment event-ribbon__moment--${index + 1}`} key={moment}>
                  <span>{moment}</span>
                  {index < ribbonMoments.length - 1 && <ArrowDown size={12} strokeWidth={1.4} />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="event-screening" id="screening-process" aria-labelledby="event-screening-title">
          <div className="event-section-heading event-section-heading--center">
            <p>Selected with Discernment</p>
            <h2 id="event-screening-title">The Luxury <em>Selection Studio</em></h2>
            <span>Every application is considered by people who understand that the quality of the room shapes every conversation within it.</span>
          </div>

          <div className="event-selection-studio">
            <div className="event-studio__surface" aria-hidden="true" />
            <div className="event-studio__seal" aria-hidden="true">
              <span>MH</span>
            </div>
            <div className="event-studio__pen" aria-hidden="true" />
            <svg className="event-studio__threads" viewBox="0 0 1220 790" preserveAspectRatio="none" aria-hidden="true">
              <path className="event-studio__thread-ghost" d="M185 178C335 100 405 298 572 222S787 82 959 182c110 64 70 192-56 218-155 31-189 156-68 251M184 178C101 278 184 416 323 465s203 156 120 254" />
              <path className="event-studio__thread-gold" pathLength="2100" d="M185 178C335 100 405 298 572 222S787 82 959 182c110 64 70 192-56 218-155 31-189 156-68 251M184 178C101 278 184 416 323 465s203 156 120 254" />
            </svg>

            {screeningStages.map((stage) => (
              <article className={`event-studio__panel ${stage.position}`} key={stage.title}>
                <span>{stage.stage}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <i aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="event-benefits" id="event-benefits" aria-labelledby="event-benefits-title">
          <div className="event-section-heading">
            <p>Designed for Genuine Chemistry</p>
            <h2 id="event-benefits-title">Every Detail Creates <em>Possibility</em></h2>
            <span>From the guest list to the final candle, each choice is made to help meaningful connection feel effortless.</span>
          </div>

          <div className="event-benefits__magazine">
            {eventBenefits.map((benefit, index) => (
              <article className={`event-benefit event-benefit--${index + 1}`} key={benefit.title}>
                <img src={benefit.image} alt="" />
                <div className="event-benefit__veil" aria-hidden="true" />
                <div className="event-benefit__content">
                  <span>0{index + 1}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="event-invitation-cta" id="request-invitation" aria-labelledby="event-cta-title">
          <svg className="event-cta-botanical event-cta-botanical--left" viewBox="0 0 270 430" aria-hidden="true">
            <path d="M28 422C57 310 100 219 205 93M78 319c-39-8-64-32-76-71M120 254c43-4 79-25 107-63M158 181c-26-24-38-53-34-88M204 94c-2-27 9-51 34-72" />
            <path d="M3 248c31 1 56 16 75 46-32 5-57-11-75-46ZM124 94c27 12 44 36 50 68-31-8-48-31-50-68ZM227 191c-31 3-57 20-77 51 34 3 60-14 77-51Z" />
          </svg>
          <svg className="event-cta-botanical event-cta-botanical--right" viewBox="0 0 270 430" aria-hidden="true">
            <path d="M28 422C57 310 100 219 205 93M78 319c-39-8-64-32-76-71M120 254c43-4 79-25 107-63M158 181c-26-24-38-53-34-88M204 94c-2-27 9-51 34-72" />
            <path d="M3 248c31 1 56 16 75 46-32 5-57-11-75-46ZM124 94c27 12 44 36 50 68-31-8-48-31-50-68ZM227 191c-31 3-57 20-77 51 34 3 60-14 77-51Z" />
          </svg>

          <svg className="event-envelope" viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <path className="event-envelope__outline" pathLength="900" d="M319 184h562c30 0 54 24 54 54v274H265V238c0-30 24-54 54-54Z" />
            <path className="event-envelope__flap" d="m274 214 326 246 326-246M274 500l225-194M926 500 701 306" />
            <path className="event-envelope__ribbon" pathLength="600" d="M-50 360c202-135 351 60 523-30s265-33 370 26 211 43 407-80" />
            <path className="event-envelope__ribbon" pathLength="600" d="M-40 408c215-112 346 80 532-18s281-17 376 34 206 20 373-93" />
          </svg>

          <div className="event-invitation-cta__content">
            <p>Private Gatherings · Curated Introductions</p>
            <h2 id="event-cta-title">Your <em>Invitation</em> Awaits.</h2>
            <span>
              Experience thoughtfully curated events where every guest has been carefully selected,
              every conversation begins naturally, and every introduction has the potential to become
              something meaningful.
            </span>
            <div className="event-invitation-cta__actions">
              <Link className="event-cta-button event-cta-button--primary" to="/contact">
                Request an Invitation
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
              <Link className="event-cta-button event-cta-button--secondary" to="/contact">
                Speak With Our Concierge Team
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignatureEventsPage;
