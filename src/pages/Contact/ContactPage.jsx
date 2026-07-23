import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membershipType: 'Elite',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Concierge | Match Haven Exclusive Matrimony</title>
        <meta name="description" content="Reach out to the Match Haven private concierge. Schedule a confidential consultation or enquire about membership options." />
      </Helmet>

      <div className="contact-page">
        {/* Hero */}
        <section className="contact-hero">
          <div className="container">
            <span className="contact-eyebrow">Private Concierge</span>
            <h1>Begin Your Journey</h1>
            <p className="contact-lead">
              Our relationship experts are ready to assist you. Complete the inquiry form below for a confidential consultation.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="contact-content-section section-padding">
          <div className="container">
            <div className="contact-grid">
              {/* Info Column */}
              <div className="contact-info">
                <h2>Direct Channels</h2>
                <p className="info-intro">
                  For immediate assistance, reach out directly to our private desk. All inquiries are treated with strict confidentiality.
                </p>

                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon"><Mail size={24} /></div>
                    <div>
                      <h4>Email Concierge</h4>
                      <p><a href="mailto:matchhaven.events@gmail.com">matchhaven.events@gmail.com</a></p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon"><Phone size={24} /></div>
                    <div>
                      <h4>Direct Line</h4>
                      <p><a href="tel:+971561663994">+971 56 166 3994</a></p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon"><MapPin size={24} /></div>
                    <div>
                      <h4>Headquarters</h4>
                      <p>Downtown Dubai, Dubai, UAE</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Column */}
              <div className="contact-form-container">
                {submitted ? (
                  <div className="submission-success">
                    <h3>Thank You for Reaching Out</h3>
                    <p>A senior relationship director will contact you within 24 hours to schedule a private, encrypted call.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="e.g. Siddhartha Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="e.g. siddhartha@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="membershipType">Preferred Tier</label>
                      <select
                        id="membershipType"
                        value={formData.membershipType}
                        onChange={(e) => setFormData({ ...formData, membershipType: e.target.value })}
                      >
                        <option value="Elite">Elite Membership</option>
                        <option value="Imperial">Imperial Signature</option>
                        <option value="Royale">Royale Concierge</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Confidential Notes</label>
                      <textarea
                        id="message"
                        rows="4"
                        placeholder="Please share any preferences or details you'd like us to know..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-primary form-submit-btn">
                      Request Invitation <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
