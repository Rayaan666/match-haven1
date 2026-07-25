import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Shield, FileText, Users, ArrowLeft } from 'lucide-react';
import './LegalPage.css';

const LegalPage = () => {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const getContent = () => {
    if (path === '/privacy') {
      return {
        title: 'Privacy Policy',
        subtitle: 'Our absolute commitment to your discretion and confidentiality.',
        icon: <Shield size={40} className="legal-icon" />,
        sections: [
          {
            heading: '1. Discretion by Design',
            content: 'Unlike standard platforms, Match Haven does not maintain a public, searchable directory of member profiles. All data is stored in encrypted, private servers, accessible only to authorized relationship managers.'
          },
          {
            heading: '2. Information We Collect',
            content: 'We collect information provided directly by you during the consultation phase, including verification details (identity, profession, education) and personal preferences. This information is used solely to assess and curate compatible introductions.'
          },
          {
            heading: '3. Controlled Disclosure',
            content: 'No profile details, photos, or identifying information are shared with other members without your explicit, step-by-step consent. When an introduction is proposed, details are presented in a dignified, confidential portfolio.'
          },
          {
            heading: '4. Data Deletion',
            content: 'You retain full ownership of your data. If you choose to close your account or pause your matchmaking services, all personal profile records will be permanently removed from our active databases upon request.'
          }
        ]
      };
    } else if (path === '/terms') {
      return {
        title: 'Terms of Service',
        subtitle: 'The guidelines governing our invitation-only matrimonial community.',
        icon: <FileText size={40} className="legal-icon" />,
        sections: [
          {
            heading: '1. Invitation and Membership Eligibility',
            content: 'Match Haven is an invitation-only community designed for accomplished individuals seeking serious, long-term matrimonial relationships. We reserve the right to approve or decline any membership application at our absolute discretion.'
          },
          {
            heading: '2. Strict Profile Verification',
            content: 'All members agree to provide accurate, truthful, and verified information regarding identity, marital status, professional background, and education. Provision of falsified records will result in immediate termination of membership.'
          },
          {
            heading: '3. Concierge Matrimonial Services',
            content: 'Match Haven provides curated personal matchmaking, family introductions, and invitation-only events. While our team exercises the highest level of care and judgment, we do not guarantee specific outcomes or marital matches.'
          },
          {
            heading: '4. Non-Disclosure & Confidentiality',
            content: 'Members are bound by strict non-disclosure obligations. You agree never to share, publish, or disclose any details, photos, or portfolios of other members introduced to you through our services.'
          }
        ]
      };
    } else {
      return {
        title: 'Community Guidelines',
        subtitle: 'Maintaining a respectful, sincere, and premium matrimonial space.',
        icon: <Users size={40} className="legal-icon" />,
        sections: [
          {
            heading: '1. Sincerity of Intent',
            content: 'Match Haven is exclusively for individuals and families looking for marriage or lifelong commitment. Members seeking casual relationships or using the community for networking/commercial purposes are strictly prohibited.'
          },
          {
            heading: '2. Dignity and Respect',
            content: 'Every communication, introduction, and meeting must be conducted with the highest degree of politeness, respect, and emotional maturity. We maintain a zero-tolerance policy for harassment or inappropriate behavior.'
          },
          {
            heading: '3. Family Consideration',
            content: 'We respect family traditions and welcome family involvement. In line with our values, members are expected to conduct introductions with cultural awareness, discretion, and respect for both families involved.'
          },
          {
            heading: '4. Integrity of Feedback',
            content: 'Open and honest communication with your relationship concierge helps us refine compatibility. We encourage constructive feedback after introductions, helping us build a supportive, premium community experience.'
          }
        ]
      };
    }
  };

  const data = getContent();

  return (
    <div className="legal-page">
      <div className="legal-glow" aria-hidden="true" />
      <div className="container legal-container">
        <Link to="/" className="legal-back-btn">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <header className="legal-header">
          {data.icon}
          <h1>{data.title}</h1>
          <p className="legal-subtitle">{data.subtitle}</p>
          <div className="legal-divider" />
        </header>

        <div className="legal-content">
          {data.sections.map((sec, idx) => (
            <section key={idx} className="legal-section">
              <h2>{sec.heading}</h2>
              <p>{sec.content}</p>
            </section>
          ))}
        </div>

        <footer className="legal-page-footer">
          <p>If you have any questions regarding these documents, please contact our private concierge desk.</p>
          <Link to="/contact" className="legal-contact-btn">
            Inquire Confidential Consultation
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default LegalPage;
