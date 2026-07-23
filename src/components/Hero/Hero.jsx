import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const HERO_IMAGE = '/home/hero.png';

const Hero = () => {
  const heroRef = useRef(null);
  const bgImageRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      bgImageRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1.8 }
    );

    tl.fromTo(
      headingRef.current.querySelectorAll('.hero-line'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.15 },
      '-=1'
    );
  }, []);

  return (
    <section className="hero-cinematic" ref={heroRef}>
      {/* Cinematic Background Image */}
      <div className="hero-bg-wrapper">
        <img 
          src={HERO_IMAGE} 
          alt="Joyful wedding couple on yellow scooter" 
          className="hero-bg-img"
          ref={bgImageRef}
        />
        <div className="hero-dark-overlay"></div>
      </div>

      {/* Heading Overlay */}
      <div className="hero-heading-container" ref={headingRef}>
        <h1 className="hero-title">
          Ready for forever?<br />
          Let's tie the Knot.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
