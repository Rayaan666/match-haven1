import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, X } from 'lucide-react';
import './BlogPage.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Discerning Matchmaking: Beyond Algorithmic Compatibility',
    excerpt: 'True connection lies at the intersection of quantitative science and qualitative intuition. Explore how human expertise guides our AI matchmaking.',
    category: 'Relationship Science',
    date: 'July 18, 2026',
    author: 'Aarti Sharma',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
    content: [
      "In a world dominated by sliding cards and algorithmic matches, the search for a life partner has too often been reduced to a numbers game. At Match Haven, we believe that compatibility cannot be fully quantified by lines of code.",
      "While technology plays an invaluable role in parsing large-scale parameters and filtering basic preferences, the true magic of connection lies at the intersection of quantitative science and qualitative intuition.",
      "Our personal matchmakers invest hours in understanding the nuances of your lifestyle, your family values, and your unspoken aspirations. By combining these human insights with refined psychological profiling, we curate introductions that resonate deeply, not just on paper, but in real life.",
      "The result is a relationship that has the foundations to weather time—a connection built on mutual respect, shared visions, and true compatibility."
    ]
  },
  {
    id: 2,
    title: 'Modern Dubai Legacies: Blending Family Values with Personal Choice',
    excerpt: 'Navigating contemporary matrimony while honoring deep-rooted heritage. A guide for the modern, accomplished Dubai professional.',
    category: 'Legacy & Culture',
    date: 'June 25, 2026',
    author: 'Vikram Mehta',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800',
    content: [
      "Dubai is a city where history and the future coexist in a beautiful, dynamic dance. For accomplished professionals, this duality is especially present when seeking a life partner.",
      "Balancing the expectations of family heritage with personal lifestyle choices is a delicate art. Many of our members come from families with proud legacies, yet they themselves lead modern, global lives. We recognize that a union is not just between two individuals, but also a joining of families, cultures, and values.",
      "Our family-inclusive matchmaking process respects traditional wisdom while embracing modern aspirations. We facilitate introductions where both the couple's personal chemistry and the families' long-term alignments are carefully considered.",
      "By bridging these two worlds, we help create partnerships that honor the past while building a vibrant, shared future."
    ]
  },
  {
    id: 3,
    title: 'Privacy in the Digital Age: How High-Net-Worth Individuals Find Love',
    excerpt: 'In a hyper-connected world, discretion is the ultimate luxury. Discover our industry-leading protocols for securing your matrimonial journey.',
    category: 'Privacy & Safety',
    date: 'May 12, 2026',
    author: 'Rajesh Iyer',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=800',
    content: [
      "Discretion is the ultimate luxury. For prominent business leaders, high-profile executives, and families of standing, finding love in the digital age presents unique challenges.",
      "Public matrimonial apps or social networks pose security, reputation, and privacy risks that many simply cannot afford. How do you find a compatible partner when you cannot put yourself in the public eye?",
      "At Match Haven, privacy is our cornerstone. We operate an invitation-only, closed-circle database. Member profiles are never searchable online, and portfolios are only shared with carefully vetted matches after obtaining mutual consent.",
      "This secure environment ensures that you can embark on your matchmaking journey with complete peace of mind, knowing that your identity and personal story remain entirely confidential."
    ]
  }
];

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPost]);

  const categories = ['All', 'Relationship Science', 'Legacy & Culture', 'Privacy & Safety'];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>The Journal | Match Haven Exclusive Matrimony</title>
        <meta name="description" content="Explore insightful essays on relationships, legacy, and compatibility science written by Dubai's leading relationship coaches." />
      </Helmet>

      <div className="blog-page">
        {/* Hero */}
        <section className="blog-hero">
          <div className="container">
            <span className="blog-eyebrow">The Match Haven Journal</span>
            <h1>Perspectives on Love &amp; Legacy</h1>
            <p className="blog-lead">
              Thought leadership, relationship wisdom, and exclusive insights curated for Dubai's finest minds.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="blog-categories">
          <div className="container">
            <div className="categories-list">
              {categories.map((cat, idx) => (
                <button
                   key={idx}
                   className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                   onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="blog-grid-section">
          <div className="container">
            <div className="blog-grid">
              {filteredPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                    <span className="blog-card-category">{post.category}</span>
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-meta">
                      <span><Calendar size={14} /> {post.date}</span>
                      <span><User size={14} /> By {post.author}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <button className="blog-read-more" onClick={() => setSelectedPost(post)}>
                      Read Essay <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Essay Detail Modal */}
        {selectedPost && (
          <div className="blog-modal-overlay" onClick={() => setSelectedPost(null)}>
            <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="blog-modal-close" onClick={() => setSelectedPost(null)} aria-label="Close modal">
                <X size={20} />
              </button>
              <div className="blog-modal-body">
                <span className="blog-modal-category">{selectedPost.category}</span>
                <h2>{selectedPost.title}</h2>
                <div className="blog-modal-meta">
                  <span><Calendar size={14} /> {selectedPost.date}</span>
                  <span><User size={14} /> By {selectedPost.author}</span>
                </div>
                <div className="blog-modal-text">
                  {selectedPost.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPage;
