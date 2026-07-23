import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, CheckCircle2 } from 'lucide-react';
import './Testimonials.css';
import testimonialCouple from '../../assets/testimonial_couple_1784451000257.png';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo(
      sectionRef.current.querySelector('.testimonials-heading'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );

    tl.fromTo(
      cardsRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
      '-=0.4'
    );

    tl.fromTo(
      statsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      '-=0.2'
    );
  }, []);

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const addToStatsRef = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  return (
    <section className="testimonials section-padding" ref={sectionRef}>
      <div className="container">
        <h2 className="testimonials-heading">Stories That Found Forever</h2>
        
        <div className="testimonials-grid">
          {/* Featured Large Testimonial */}
          <div className="testimonial-card featured" ref={addToCardsRef}>
            <div className="testimonial-image-wrapper">
              <img src={testimonialCouple} alt="Rohan and Anjali" className="testimonial-image" />
            </div>
            
            <div className="testimonial-content">
              <Quote className="quote-icon" size={40} />
              <p className="testimonial-quote">
                "We were both extremely busy professionals who had almost given up on finding someone who truly understood our lifestyle and values. Match Haven't just introduced us; they found the missing piece of our puzzle. The level of curation is simply unmatched."
              </p>
              
              <div className="testimonial-author-area">
                <div className="testimonial-author-info">
                  <h4>Rohan & Anjali</h4>
                  <span className="author-location">Dubai & London</span>
                </div>
                
                <div className="testimonial-badges">
                  <div className="badge"><CheckCircle2 size={14}/> Verified Match</div>
                  <div className="badge highlight">96% Compatibility</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Secondary Testimonials */}
          <div className="testimonials-secondary">
            <div className="testimonial-card secondary" ref={addToCardsRef}>
              <Quote className="quote-icon small" size={24} />
              <p className="testimonial-quote small">
                "An incredibly refined experience. The privacy and exclusivity made all the difference in my journey to finding my soulmate."
              </p>
              <div className="testimonial-author-info">
                <h4>Priya S.</h4>
                <span className="author-location">Dubai</span>
              </div>
            </div>
            
            <div className="testimonial-card secondary" ref={addToCardsRef}>
              <Quote className="quote-icon small" size={24} />
              <p className="testimonial-quote small">
                "Unlike any other platform. The bespoke concierge service felt like having a dedicated family member looking out for my best interests."
              </p>
              <div className="testimonial-author-info">
                <h4>Vikram M.</h4>
                <span className="author-location">Dubai</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Statistics Strip */}
        <div className="stats-strip">
          <div className="stat-item" ref={addToStatsRef}>
            <span className="stat-value">100%</span>
            <span className="stat-label">Verified Members</span>
          </div>
          <div className="stat-item" ref={addToStatsRef}>
            <span className="stat-value">2,500+</span>
            <span className="stat-label">Successful Matches</span>
          </div>
          <div className="stat-item" ref={addToStatsRef}>
            <span className="stat-value">94%</span>
            <span className="stat-label">Average Compatibility</span>
          </div>
          <div className="stat-item" ref={addToStatsRef}>
            <span className="stat-value">4.9/5</span>
            <span className="stat-label">Member Satisfaction</span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
