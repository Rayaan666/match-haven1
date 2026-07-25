import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShieldCheck, Heart, Sparkles, Users } from 'lucide-react';
import './About.css';
import aboutCouple from '../../assets/about_couple_1784450982162.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      }
    });

    tl.fromTo(
      imageRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );

    tl.fromTo(
      textRef.current.querySelectorAll('.reveal-up'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
      '-=0.8'
    );

    tl.fromTo(
      featuresRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      '-=0.4'
    );
  }, []);

  const addToFeaturesRef = (el) => {
    if (el && !featuresRef.current.includes(el)) {
      featuresRef.current.push(el);
    }
  };

  return (
    <section className="about section-padding" ref={sectionRef} aria-labelledby="about-match-haven-heading">
      <div className="container about-container">
        
        <div className="about-visual">
          <div className="about-image-composition" ref={imageRef}>
            <img src={aboutCouple} alt="Couple introduced through Match Haven's private matrimonial service" className="about-main-image" />
          </div>
        </div>
        
        <div className="about-content" ref={textRef}>
          <span className="eyebrow reveal-up">About Match Haven</span>
          <h2 className="reveal-up" id="about-match-haven-heading">Where Exclusivity Meets True Compatibility</h2>
          
          <div className="about-descriptions">
            <p className="reveal-up">
              Match-Haven is a trusted traditional matchmaking service for individuals and families seeking meaningful, introductions based on shared values, compatibility, and genuine commitment.
            </p>
            <p className="reveal-up">
              Inspired by the timeless tradition of personalised matchmaking, at Match Haven we honour traditions and family values, ensuring that matches are not only compatible as individuals but also aligned in terms of background, beliefs, and long-term expectations.
            </p>
          </div>
          
          <div className="about-features">
            <div className="feature-item" ref={addToFeaturesRef}>
              <div className="feature-icon"><Sparkles size={20} /></div>
              <div className="feature-text">
                <h4>Personal Matchmaking</h4>
                <p>Thoughtful compatibility assessment.</p>
              </div>
            </div>
            
            <div className="feature-item" ref={addToFeaturesRef}>
              <div className="feature-icon"><ShieldCheck size={20} /></div>
              <div className="feature-text">
                <h4>100% Verified Members</h4>
                <p>Strict background curation.</p>
              </div>
            </div>
            
            <div className="feature-item" ref={addToFeaturesRef}>
              <div className="feature-icon"><Heart size={20} /></div>
              <div className="feature-text">
                <h4>Private & Confidential</h4>
                <p>Your privacy is our utmost priority.</p>
              </div>
            </div>
            
            <div className="feature-item" ref={addToFeaturesRef}>
              <div className="feature-icon"><Users size={20} /></div>
              <div className="feature-text">
                <h4>Relationship Experts</h4>
                <p>Personalized concierge service.</p>
              </div>
            </div>
          </div>
          
          <div className="reveal-up" style={{ marginTop: '40px' }}>
            <Link to="/about" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center' }}>
              Discover Our Process <ArrowRight size={18} style={{marginLeft: '8px'}}/>
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
