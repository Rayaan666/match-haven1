import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import ServicesOverview from '../../components/Services/ServicesOverview';
import WhoWeServe from '../../components/WhoWeServe/WhoWeServe';
import OurApproach from '../../components/OurApproach/OurApproach';
import WhyMatchHaven from '../../components/WhyMatchHaven/WhyMatchHaven';
import FinalCTA from '../../components/FinalCTA/FinalCTA';
import './Home.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Match Haven | Luxury Matrimonial &amp; Personal Matchmaking Dubai</title>
        <meta name="description" content="Discover Match Haven, Dubai's private, invitation-only matrimonial service offering verified profiles, personal matchmakers and thoughtfully curated introductions." />
        <meta property="og:title" content="Match Haven | Luxury Matrimonial & Personal Matchmaking Dubai" />
        <meta property="og:description" content="Private matrimonial introductions guided by trusted relationship experts, genuine compatibility and complete discretion." />
      </Helmet>
      
      <div className="home-page">
        <Hero />
        <About />
        <ServicesOverview />
        <WhoWeServe />
        <OurApproach />
        <WhyMatchHaven />
        <FinalCTA />
      </div>
    </>
  );
};

export default Home;
