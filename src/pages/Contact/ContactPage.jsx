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
            <h1 style={{ marginTop: '20px' }}>Begin Your Journey</h1>
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
                      <h4>Email Us</h4>
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
                    <div className="info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.729-1.465L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97-1.861-1.868-4.339-2.897-6.97-2.899-5.437 0-9.862 4.372-9.866 9.802-.001 1.83.479 3.619 1.393 5.187l-.951 3.478 3.585-.941zm10.222-3.841c-.272-.137-1.61-.795-1.86-.887-.248-.09-.43-.136-.61.137-.179.272-.694.887-.85 1.07-.156.18-.312.2-.584.063-.272-.138-1.15-.423-2.19-1.353-.81-.722-1.357-1.614-1.516-1.887-.159-.273-.017-.42.12-.556.123-.122.272-.319.408-.478.136-.159.182-.272.272-.455.09-.18.046-.339-.023-.478-.069-.138-.61-1.477-.836-2.023-.22-.53-.442-.458-.61-.466-.157-.008-.337-.01-.518-.01-.18 0-.474.068-.722.339-.248.272-.95.93-.95 2.268s.973 2.63 1.11 2.812c.137.18 1.914 2.923 4.636 4.103.648.28 1.153.447 1.547.572.651.207 1.243.178 1.71.108.521-.078 1.61-.658 1.837-1.296.226-.638.226-1.185.158-1.297-.068-.113-.248-.204-.52-.341z"/>
                      </svg>
                    </div>
                    <div>
                      <h4>WhatsApp Support</h4>
                      <p><a href="https://wa.me/971561663994" target="_blank" rel="noopener noreferrer">+971 56 166 3994</a></p>
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
                          placeholder="e.g. +971 56 166 3994"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
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
