import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight } from 'lucide-react';
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
  },
  {
    id: 2,
    title: 'Modern Dubai Legacies: Blending Family Values with Personal Choice',
    excerpt: 'Navigating contemporary matrimony while honoring deep-rooted heritage. A guide for the modern, accomplished Dubai professional.',
    category: 'Legacy & Culture',
    date: 'June 25, 2026',
    author: 'Vikram Mehta',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Privacy in the Digital Age: How High-Net-Worth Individuals Find Love',
    excerpt: 'In a hyper-connected world, discretion is the ultimate luxury. Discover our industry-leading protocols for securing your matrimonial journey.',
    category: 'Privacy & Safety',
    date: 'May 12, 2026',
    author: 'Rajesh Iyer',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=800',
  }
];

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');

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
                    <button className="blog-read-more">
                      Read Essay <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
