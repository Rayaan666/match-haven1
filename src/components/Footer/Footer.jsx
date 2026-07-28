import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="Match Haven home">
              <img src="/logo.png" alt="Match Haven — Where Forever Begins" decoding="async" />
            </Link>
            <p className="footer-story">
              An exclusive, invitation-only matrimonial experience for Dubai's most accomplished individuals.
              Where timeless luxury meets meaningful connections.
            </p>
          </div>
          <div className="footer-links-group">
            <div className="footer-links">
              <h4>Navigation</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/blog">Blogs</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/guidelines">Community Guidelines</Link></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:matchhaven.events@gmail.com">matchhaven.events@gmail.com</a></li>
                <li><a href="tel:+971561663994">+971 56 166 3994</a></li>
              </ul>
              <div className="social-icons">
                <a href="#" onClick={(e) => { e.preventDefault(); alert("To protect the confidentiality of our elite network, Match Haven does not maintain public social media channels. All communications are private and direct."); }} aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("To protect the confidentiality of our elite network, Match Haven does not maintain public social media channels. All communications are private and direct."); }} aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("To protect the confidentiality of our elite network, Match Haven does not maintain public social media channels. All communications are private and direct."); }} aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("To protect the confidentiality of our elite network, Match Haven does not maintain public social media channels. All communications are private and direct."); }} aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Match Haven. All rights reserved.</p>
          <p>Designed with elegance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
