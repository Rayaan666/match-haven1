import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './EliteMembers.css';

gsap.registerPlugin(ScrollTrigger);

const EliteMembers = () => {
  const sectionRef = useRef(null);
  const logosRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      logosRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 0.5,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        }
      }
    );
  }, []);

  const addToLogosRef = (el) => {
    if (el && !logosRef.current.includes(el)) {
      logosRef.current.push(el);
    }
  };

  const eliteInstitutions = [
    "Stanford", "Harvard", "Oxford", "Cambridge", "IIT", "IIM", "ISB", "Wharton"
  ];

  return (
    <section className="elite-members section-padding" ref={sectionRef}>
      <div className="container">
        <h3 className="elite-heading">Built for Dubai's Most Accomplished Singles</h3>
        
        <div className="elite-logos-container">
          {eliteInstitutions.map((name, index) => (
            <div className="elite-logo" key={index} ref={addToLogosRef}>
              {/* Text fallback looking like logos */}
              <span className="logo-text">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EliteMembers;
