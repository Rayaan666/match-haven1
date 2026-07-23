import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Check,
  HeartHandshake,
  MessagesSquare,
  Search,
  ShieldCheck,
  Sparkles,
  UserRoundSearch,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FamilyIntroductionsPage.css';

gsap.registerPlugin(ScrollTrigger);

const journey = [
  {
    name: 'Discover',
    description: 'Understanding your family, aspirations, preferences, and values.',
    Icon: Search,
    position: 'family-journey__stage--discover',
  },
  {
    name: 'Understand',
    description: 'Dedicated consultations to build a complete compatibility profile.',
    Icon: MessagesSquare,
    position: 'family-journey__stage--understand',
  },
  {
    name: 'Curate',
    description: 'Relationship experts personally shortlist suitable introductions.',
    Icon: UserRoundSearch,
    position: 'family-journey__stage--curate',
  },
  {
    name: 'Introduce',
    description: 'Private introductions are arranged respectfully and discreetly.',
    Icon: HeartHandshake,
    position: 'family-journey__stage--introduce',
  },
  {
    name: 'Support',
    description: 'Guidance and ongoing support throughout the journey.',
    Icon: Sparkles,
    position: 'family-journey__stage--support',
  },
];

const benefits = [
  {
    title: 'Personal Matchmaking Experts',
    description: 'A dedicated consultant learns the nuances of your family, your values, and the person you hope to welcome into your life.',
    image: '/services/family/profile-review.png',
    alt: 'A relationship consultant reviewing profiles with a family',
  },
  {
    title: 'Carefully Curated Introductions',
    description: 'Every introduction is considered by an experienced human—never sent by an impersonal system or selected by convenience.',
    image: '/services/compatibility-portfolio.png',
    alt: 'A leather portfolio with carefully prepared compatibility notes',
  },
  {
    title: 'Family-Centric Guidance',
    description: 'Parents and trusted family members can participate with dignity, clarity, and the right degree of involvement at every stage.',
    image: '/about/family-introduction.jpg',
    alt: 'Two families in a warm and thoughtful conversation',
  },
  {
    title: 'Verified Members',
    description: 'We protect the quality of our community through identity checks, considered screening, and a clear commitment to serious intent.',
    image: '/about/promise-integrity.jpg',
    alt: 'A refined visual representing integrity and trust',
  },
  {
    title: 'Private & Confidential Process',
    description: 'Your details, conversations, and introductions are handled with discretion by a small team that understands the value of privacy.',
    image: '/services/private-invitation.png',
    alt: 'A private ivory invitation sealed with burgundy wax',
  },
  {
    title: 'Meaningful Long-Term Compatibility',
    description: 'We look beyond surface preferences to shared direction, emotional maturity, lifestyle, family understanding, and lasting potential.',
    image: '/about/couple-editorial.jpg',
    alt: 'An elegant couple sharing a meaningful moment',
  },
];

const audiences = [
  {
    title: 'Families seeking trusted introductions',
    description: 'A considered path led by people you can know and trust.',
    image: '/about/philosophy-family.jpg',
  },
  {
    title: 'Professionals looking for serious relationships',
    description: 'Private introductions designed around full and purposeful lives.',
    image: '/about/philosophy-quality.jpg',
  },
  {
    title: 'Entrepreneurs and business families',
    description: 'Discreet guidance that respects legacy, ambition, and time.',
    image: '/about/philosophy-trust.jpg',
  },
  {
    title: 'NRI families',
    description: 'Culturally aware introductions that thoughtfully bridge distance.',
    image: '/about/philosophy-stories.jpg',
  },
  {
    title: 'Individuals seeking long-term commitment',
    description: 'For those ready to build something genuine and enduring.',
    image: '/about/philosophy-forever.jpg',
  },
  {
    title: 'Members valuing privacy and discretion',
    description: 'A protected, invitation-led experience from first conversation onward.',
    image: '/about/way-values.jpg',
  },
];

const faqs = [
  {
    question: 'How are introductions selected?',
    answer: 'Your consultant considers values, family background, relationship goals, lifestyle, personality, and the qualities that matter most to you. Technology can support the process, but every introduction is reviewed and personally selected by our matchmaking team.',
  },
  {
    question: 'Can families participate?',
    answer: 'Yes. Family participation can be woven into the process in a way that feels comfortable for everyone. We agree the right level of involvement during your first consultations and can keep parents or trusted family members thoughtfully informed.',
  },
  {
    question: 'Is my profile kept confidential?',
    answer: 'Absolutely. Profiles are never publicly searchable. Information is shared selectively, with appropriate consent, only when our team identifies a considered introduction with genuine potential.',
  },
  {
    question: 'How long does the process usually take?',
    answer: 'There is no artificial deadline because the quality of an introduction matters more than volume. Timing varies with preferences, availability, and mutual interest, while your consultant keeps you informed throughout the journey.',
  },
  {
    question: 'How are profiles verified?',
    answer: 'Members complete an identity and background review before introductions begin. Our team also speaks with every member to understand intent, expectations, and readiness for a serious relationship.',
  },
  {
    question: 'Can preferences be updated during the process?',
    answer: 'Yes. Your understanding may evolve after conversations and introductions. Regular consultant feedback allows us to refine your compatibility profile and keep the search aligned with what feels true to you.',
  },
];

const FamilyIntroductionsPage = () => {
  const pageRef = useRef(null);
  const answerRefs = useRef([]);
  const [activeFaq, setActiveFaq] = useState(null);

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
      gsap.set(answerRefs.current, { height: 0 });
      if (reduceMotion) return;

      const introTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      introTimeline
        .from('.family-intro__eyebrow', { y: 16, opacity: 0, duration: 0.65 })
        .from('.family-intro__title .family-title-line > span', {
          yPercent: 110,
          opacity: 0,
          duration: 0.95,
          stagger: 0.12,
        }, '-=.35')
        .from('.family-intro__copy', { y: 24, opacity: 0, duration: 0.8 }, '-=.42')
        .from('.family-highlight', { y: 15, opacity: 0, duration: 0.55, stagger: 0.1 }, '-=.42')
        .from('.family-intro__collage', { scale: .94, opacity: 0, duration: 1.1 }, .3)
        .from('.family-collage__frame:not(.family-collage__frame--main)', {
          y: 25,
          opacity: 0,
          duration: .7,
          stagger: .12,
        }, '-=.65')
        .from('.family-glass-badge', { scale: .86, opacity: 0, duration: .5, stagger: .1 }, '-=.45');

      gsap.utils.toArray('.family-section-heading').forEach((heading) => {
        gsap.from(heading.children, {
          y: 26,
          opacity: 0,
          duration: .85,
          stagger: .1,
          ease: 'power3.out',
          scrollTrigger: { trigger: heading, start: 'top 82%' },
        });
      });

      gsap.fromTo('.family-journey__path',
        { strokeDashoffset: 1900 },
        {
          strokeDashoffset: 0,
          duration: 2.4,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: '.family-journey', start: 'top 70%' },
        }
      );

      gsap.from('.family-journey__stage', {
        scale: .8,
        opacity: 0,
        duration: .7,
        stagger: .16,
        ease: 'back.out(1.35)',
        scrollTrigger: { trigger: '.family-journey', start: 'top 68%' },
      });

      gsap.utils.toArray('.family-benefit').forEach((item) => {
        gsap.from(item, {
          y: 45,
          opacity: 0,
          duration: .9,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 86%' },
        });
        gsap.from(item.querySelector('img'), {
          scale: 1.1,
          duration: 1.35,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 86%' },
        });
      });

      gsap.from('.family-member', {
        y: 42,
        opacity: 0,
        duration: .85,
        stagger: .09,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.family-membership__gallery', start: 'top 80%' },
      });

      gsap.from('.family-faq__paper', {
        y: 34,
        opacity: 0,
        rotate: 0,
        duration: .75,
        stagger: .09,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.family-faq__papers', start: 'top 82%' },
      });

      gsap.from('.family-cta__inner > *:not(.family-cta__ribbon)', {
        y: 28,
        opacity: 0,
        duration: .85,
        stagger: .12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.family-cta', start: 'top 76%' },
      });

      gsap.to('.family-cta__ribbon-path', {
        strokeDashoffset: -110,
        duration: 7,
        repeat: -1,
        ease: 'none',
      });

      gsap.utils.toArray('.family-glass-badge').forEach((badge, index) => {
        gsap.to(badge, {
          y: index % 2 ? 7 : -7,
          duration: 3.4 + index * .4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }, pageRef);

    return () => {
      window.clearTimeout(sectionScrollTimer);
      ctx.revert();
    };
  }, []);

  const toggleFaq = (index) => {
    const current = activeFaq;
    if (current !== null && answerRefs.current[current]) {
      gsap.to(answerRefs.current[current], {
        height: 0,
        duration: .45,
        ease: 'power2.inOut',
      });
    }

    if (index === current) {
      setActiveFaq(null);
      return;
    }

    const next = answerRefs.current[index];
    gsap.to(next, {
      height: 'auto',
      duration: .55,
      ease: 'power2.inOut',
    });
    gsap.fromTo(next.querySelector('p'), { y: 10, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: .45,
      delay: .12,
      ease: 'power2.out',
    });
    setActiveFaq(index);
  };

  return (
    <>
      <Helmet>
        <title>Premier Introductions for Families | Match Haven</title>
        <meta
          name="description"
          content="A private, family-inclusive matchmaking experience with personally curated introductions, experienced consultants, and complete confidentiality."
        />
      </Helmet>

      <div className="family-service-page" ref={pageRef}>
        <section className="family-intro" aria-labelledby="family-intro-title">
          <div className="family-intro__glow" aria-hidden="true" />
          <svg className="family-botanical family-botanical--intro" viewBox="0 0 300 460" aria-hidden="true">
            <path d="M76 451c12-89 41-183 112-281M112 354c-45-16-68-50-75-101M143 301c48-15 85-47 108-98M167 251c-28-28-36-61-24-99M194 195c29-14 51-37 64-68" />
            <path d="M37 253c31 2 55 19 72 50-34 2-58-15-72-50ZM143 153c28 14 44 39 47 74-31-11-47-36-47-74ZM252 203c-31 3-57 19-78 49 34 4 60-13 78-49ZM258 127c-29 2-51 17-65 45 31 2 53-13 65-45Z" />
          </svg>

          <div className="family-intro__inner">
            <div className="family-intro__content">
              <p className="family-intro__eyebrow">
                <span aria-hidden="true" />
                Signature Service
              </p>
              <h1 className="family-intro__title" id="family-intro-title">
                <span className="family-title-line"><span className="family-title-gold">Premier Introductions</span></span>
                <span className="family-title-line"><span>for Families</span></span>
              </h1>
              <p className="family-intro__copy">
                Designed for families seeking meaningful introductions through a refined, private,
                and highly personalised matchmaking experience guided by experienced relationship consultants.
              </p>

              <div className="family-intro__highlights" aria-label="Service highlights">
                {['Personally Curated Matches', 'Family-Inclusive Process', 'Complete Confidentiality'].map((highlight) => (
                  <span className="family-highlight" key={highlight}>
                    <Check size={13} strokeWidth={1.8} />
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="family-intro__collage" aria-label="A private family matchmaking consultation">
              <figure className="family-collage__frame family-collage__frame--main">
                <img src="/about/family-introduction.jpg" alt="Families sharing a warm conversation in an elegant lounge" />
              </figure>
              <figure className="family-collage__frame family-collage__frame--profiles">
                <img src="/services/family/profile-review.png" alt="A consultant reviewing selected profiles with parents" />
              </figure>
              <figure className="family-collage__frame family-collage__frame--invitation">
                <img src="/services/private-invitation.png" alt="A private invitation envelope with a burgundy wax seal" />
              </figure>

              <span className="family-glass-badge family-glass-badge--consultations"><Check size={12} />Private Consultations</span>
              <span className="family-glass-badge family-glass-badge--verified"><Check size={12} />Verified Profiles</span>
              <span className="family-glass-badge family-glass-badge--trusted"><Check size={12} />Trusted Introductions</span>
            </div>
          </div>
        </section>

        <section className="family-process" id="how-it-works" aria-labelledby="family-process-title">
          <div className="family-section-heading family-section-heading--center">
            <p>Our Considered Approach</p>
            <h2 id="family-process-title">How It <em>Works</em></h2>
            <span>Five thoughtful stages. One deeply personal journey.</span>
          </div>

          <div className="family-journey">
            <svg className="family-journey__line" viewBox="0 0 900 820" aria-hidden="true">
              <defs>
                <linearGradient id="familyJourneyGold" x1="0" x2="1">
                  <stop offset="0" stopColor="#8d5a20" />
                  <stop offset=".48" stopColor="#e2c580" />
                  <stop offset="1" stopColor="#9b6829" />
                </linearGradient>
              </defs>
              <path className="family-journey__ghost" d="M450 84C652 84 794 237 794 420S650 742 450 742 106 604 106 420 248 84 450 84Z" />
              <path className="family-journey__path" pathLength="1900" d="M450 84C652 84 794 237 794 420S650 742 450 742 106 604 106 420 248 84 450 84Z" />
              <path className="family-journey__inner-line" d="M450 134C616 134 742 259 742 420S614 691 450 691 158 577 158 420 284 134 450 134Z" />
            </svg>

            <div className="family-journey__centre" aria-hidden="true">
              <span>Match Haven</span>
              <strong>A journey shaped<br />around your family</strong>
              <ShieldCheck size={25} strokeWidth={1.2} />
            </div>

            {journey.map(({ name, description, Icon, position }) => (
              <article className={`family-journey__stage ${position}`} key={name}>
                <div className="family-journey__illustration">
                  <span className="family-journey__halo" aria-hidden="true" />
                  <Icon size={24} strokeWidth={1.2} />
                </div>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="family-benefits" id="benefits" aria-labelledby="family-benefits-title">
          <div className="family-section-heading">
            <p>The Difference Is Personal</p>
            <h2 id="family-benefits-title">Guidance with <em>Depth &amp; Discernment</em></h2>
            <span>Every detail is designed to protect what matters and bring the right people closer.</span>
          </div>

          <div className="family-benefits__grid">
            {benefits.map((benefit, index) => (
              <article className={`family-benefit ${index % 2 ? 'family-benefit--reverse' : ''}`} key={benefit.title}>
                <div className="family-benefit__image">
                  <img src={benefit.image} alt={benefit.alt} />
                </div>
                <div className="family-benefit__content">
                  <span className="family-benefit__index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                  <span className="family-benefit__rule" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="family-membership" id="suitable-for" aria-labelledby="family-membership-title">
          <div className="family-section-heading family-section-heading--center">
            <p>Created for Considered People</p>
            <h2 id="family-membership-title">A Private Circle of <em>Intent</em></h2>
            <span>For individuals and families who value sincerity, quality, and a more thoughtful way to meet.</span>
          </div>

          <div className="family-membership__gallery">
            {audiences.map((audience, index) => (
              <article className={`family-member family-member--${index + 1}`} key={audience.title}>
                <img src={audience.image} alt="" />
                <div className="family-member__veil" aria-hidden="true" />
                <div className="family-member__copy">
                  <span aria-hidden="true">0{index + 1}</span>
                  <h3>{audience.title}</h3>
                  <p>{audience.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="family-faq" id="faq" aria-labelledby="family-faq-title">
          <div className="family-section-heading">
            <p>A Private Conversation</p>
            <h2 id="family-faq-title">Questions, Answered with <em>Care</em></h2>
            <span>Clarity is part of feeling understood. Begin with what matters to you.</span>
          </div>

          <div className="family-faq__papers">
            {faqs.map((faq, index) => (
              <article
                className={`family-faq__paper ${activeFaq === index ? 'family-faq__paper--open' : ''}`}
                key={faq.question}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                  aria-controls={`family-faq-answer-${index}`}
                >
                  <span className="family-faq__mark" aria-hidden="true">
                    <i />
                    <i />
                  </span>
                  <span>{faq.question}</span>
                  <small>Ask Match Haven</small>
                </button>
                <div
                  className="family-faq__answer"
                  id={`family-faq-answer-${index}`}
                  ref={(element) => { answerRefs.current[index] = element; }}
                >
                  <div className="family-faq__connector" aria-hidden="true" />
                  <p>{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="family-cta" id="begin-journey" aria-labelledby="family-cta-title">
          <svg className="family-cta__botanical family-cta__botanical--left" viewBox="0 0 260 410" aria-hidden="true">
            <path d="M38 398C54 292 103 196 206 76M86 300c-42-13-68-39-78-79M124 244c44-2 80-22 108-60M161 173c-27-26-37-55-30-88M205 78c-1-29 10-52 35-69" />
            <path d="M9 221c29-1 53 14 72 47-32 4-56-12-72-47ZM131 85c27 13 43 37 47 71-31-10-47-34-47-71ZM232 184c-31 2-56 19-76 51 35 2 60-15 76-51Z" />
          </svg>
          <svg className="family-cta__botanical family-cta__botanical--right" viewBox="0 0 260 410" aria-hidden="true">
            <path d="M38 398C54 292 103 196 206 76M86 300c-42-13-68-39-78-79M124 244c44-2 80-22 108-60M161 173c-27-26-37-55-30-88M205 78c-1-29 10-52 35-69" />
            <path d="M9 221c29-1 53 14 72 47-32 4-56-12-72-47ZM131 85c27 13 43 37 47 71-31-10-47-34-47-71ZM232 184c-31 2-56 19-76 51 35 2 60-15 76-51Z" />
          </svg>

          <div className="family-cta__inner">
            <svg className="family-cta__ribbon" viewBox="0 0 1400 360" preserveAspectRatio="none" aria-hidden="true">
              <path className="family-cta__ribbon-soft" d="M-80 220C220 70 382 350 680 190S1120 50 1480 205" />
              <path className="family-cta__ribbon-path" d="M-80 220C220 70 382 350 680 190S1120 50 1480 205" />
            </svg>
            <p>By Invitation · With Complete Discretion</p>
            <h2 id="family-cta-title">Begin Your Family&apos;s<br /><em>Matchmaking Journey.</em></h2>
            <span className="family-cta__copy">
              Experience a refined approach to matchmaking where thoughtful introductions, trusted guidance,
              and genuine human understanding come together to create meaningful lifelong relationships.
            </span>
            <div className="family-cta__actions">
              <Link className="family-cta__button family-cta__button--primary" to="/contact">
                Schedule a Private Consultation
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
              <Link className="family-cta__button family-cta__button--secondary" to="/contact">
                Speak With Our Matchmaking Team
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FamilyIntroductionsPage;
