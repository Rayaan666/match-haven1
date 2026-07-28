import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';
import './FinalCTA.css';
import ctaCouple from '../../assets/cta_couple_1784450991849.png';

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = ({ 
  title = "Your Forever Begins With a Single Step", 
  description = "Join the most exclusive matrimonial network for Dubai's accomplished professionals. Allow us to curate introductions that resonate with your intellect, lifestyle, and values.",
  buttonText = "Find Your Forever",
  showFeatures = true,
  image = ctaCouple
}) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      }
    });

    tl.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
    );

    tl.fromTo(
      contentRef.current.querySelectorAll('.cta-reveal'),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
      '-=1'
    );
  }, []);

  return (
    <section className="final-cta" ref={sectionRef}>
      <div className="cta-background">
        <img src={image} alt="Romantic Couple" className="cta-bg-image" ref={imageRef} />
        <div className="cta-overlay"></div>
      </div>
      
      <div className="container cta-container">
        <div className="cta-content" ref={contentRef}>
          <h2 className="cta-reveal">{title}</h2>
          
          <p className="cta-description cta-reveal">
            {description}
          </p>
          
          <div className="cta-actions cta-reveal">
            <Link to="/contact" className="btn-primary">{buttonText}</Link>
          </div>
          
          {showFeatures && (
            <div className="cta-trust cta-reveal">
              <div className="cta-trust-item"><CheckCircle2 size={16} /> Verified Members</div>
              <div className="cta-trust-item"><CheckCircle2 size={16} /> Private Profiles</div>
              <div className="cta-trust-item"><CheckCircle2 size={16} /> Thoughtful Compatibility</div>
              <div className="cta-trust-item"><CheckCircle2 size={16} /> Dedicated Matchmaker</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
