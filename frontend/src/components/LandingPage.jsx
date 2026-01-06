import React, { useState } from 'react';
import { Mic, Brain, Sparkles, Users, ArrowRight, Twitter, Linkedin, Github, Mail, Check, X, Play, ChevronDown, MessageSquare, Zap } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>EST. 2026</span>
            </div>
            
            <h1 className="hero-title metallic-text">
              MINICLAY AI
            </h1>
            
            <p className="hero-subtitle-large">
              Your Autonomous AI Meeting Bot
            </p>
            
            <p className="hero-description">
              Joins meetings, understands conversations in real-time, and responds intelligently like a human participant.
            </p>
            
            <div className="hero-cta-group">
              <a href="#" className="btn-primary btn-large">
                <Play size={20} />
                Launch Miniclay AI
              </a>
              <a href="#how-it-works" className="btn-secondary-ghost">
                See How It Works
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Animated background grid */}
            <div className="hero-grid-bg"></div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="container">
          <p className="trust-text">Trusted by innovators at</p>
          <div className="company-logos">
            <div className="company-logo">Google</div>
            <div className="company-logo">Microsoft</div>
            <div className="company-logo">Slack</div>
            <div className="company-logo">Zoom</div>
            <div className="company-logo">Amazon</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="section-header-centered">
            <h2 className="section-title">Intelligent Meeting Capabilities</h2>
            <p className="section-description">Everything you need for AI-powered collaboration</p>
          </div>

          <div className="features-grid">
            <div className="feature-card feature-card-hover">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <Mic size={28} />
                </div>
              </div>
              <h3 className="feature-title">Real-time transcription & understanding</h3>
              <p className="feature-description">
                Captures and processes every word with advanced speech recognition technology
              </p>
              <div className="feature-check-list">
                <div className="feature-check-item">
                  <Check size={16} className="check-icon" />
                  <span>99% accuracy rate</span>
                </div>
                <div className="feature-check-item">
                  <Check size={16} className="check-icon" />
                  <span>Multi-language support</span>
                </div>
              </div>
            </div>

            <div className="feature-card feature-card-hover">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <Brain size={28} />
                </div>
              </div>
              <h3 className="feature-title">AI-powered conversational responses</h3>
              <p className="feature-description">
                Responds intelligently to questions and participates naturally in discussions
              </p>
              <div className="feature-check-list">
                <div className="feature-check-item">
                  <Check size={16} className="check-icon" />
                  <span>Context-aware replies</span>
                </div>
                <div className="feature-check-item">
                  <Check size={16} className="check-icon" />
                  <span>Natural conversation flow</span>
                </div>
              </div>
            </div>

            <div className="feature-card feature-card-hover">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <MessageSquare size={28} />
                </div>
              </div>
              <h3 className="feature-title">Natural-sounding voice replies</h3>
              <p className="feature-description">
                Human-like voice synthesis that integrates seamlessly into conversations
              </p>
              <div className="feature-check-list">
                <div className="feature-check-item">
                  <Check size={16} className="check-icon" />
                  <span>Premium voice quality</span>
                </div>
                <div className="feature-check-item">
                  <Check size={16} className="check-icon" />
                  <span>Emotion detection</span>
                </div>
              </div>
            </div>

            <div className="feature-card feature-card-hover">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <Users size={28} />
                </div>
              </div>
              <h3 className="feature-title">Designed for collaboration & productivity</h3>
              <p className="feature-description">
                Built to enhance team dynamics and boost meeting effectiveness
              </p>
              <div className="feature-check-list">
                <div className="feature-check-item">
                  <Check size={16} className="check-icon" />
                  <span>Team insights & analytics</span>
                </div>
                <div className="feature-check-item">
                  <Check size={16} className="check-icon" />
                  <span>Action item tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section" id="how-it-works">
        <div className="container">
          <div className="how-it-works-content">
            <div className="how-it-works-left">
              <h2 className="section-title">How Miniclay AI Works</h2>
              <div className="step-list">
                <div className="step-item">
                  <div className="step-number">01</div>
                  <div className="step-content">
                    <h3>Join Your Meeting</h3>
                    <p>Miniclay AI seamlessly connects to your video platform and joins as a participant</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h3>Listen & Understand</h3>
                    <p>Real-time transcription and AI analysis of conversation context and sentiment</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">03</div>
                  <div className="step-content">
                    <h3>Respond Naturally</h3>
                    <p>Provides intelligent responses when needed, just like a human team member</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="how-it-works-right">
              <div className="demo-placeholder">
                <Play size={64} className="play-icon" />
                <p>Watch Demo Video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title-centered">What Teams Are Saying</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Transforms meetings into intelligent conversations. Game changer for our remote team."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SJ</div>
                <div className="author-info">
                  <p className="author-name">Sarah Johnson</p>
                  <p className="author-role">Product Manager, TechCo</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Finally, an AI teammate — not just a note-taker. Miniclay understands context like a human."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">MK</div>
                <div className="author-info">
                  <p className="author-name">Michael Kim</p>
                  <p className="author-role">Founder, StartupXYZ</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Our meetings are 40% more productive. Miniclay handles follow-ups automatically."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">EP</div>
                <div className="author-info">
                  <p className="author-name">Emily Park</p>
                  <p className="author-role">Engineering Lead, DevShop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Built for creators, founders,<br />remote teams, and innovators</h2>
            <p className="cta-subtitle">
              Join the future of intelligent meeting collaboration
            </p>
            <a href="#" className="btn-primary btn-large">
              <Zap size={20} />
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title-centered">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className={`faq-item ${openFaq === 0 ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(0)}>
                <span>How does Miniclay AI join my meetings?</span>
                <ChevronDown className={`faq-icon ${openFaq === 0 ? 'rotated' : ''}`} size={20} />
              </button>
              {openFaq === 0 && (
                <div className="faq-answer">
                  <p>Miniclay AI integrates with your calendar and joins meetings automatically via a secure connection to your video platform (Zoom, Teams, Google Meet, etc.).</p>
                </div>
              )}
            </div>

            <div className={`faq-item ${openFaq === 1 ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(1)}>
                <span>Is my conversation data secure and private?</span>
                <ChevronDown className={`faq-icon ${openFaq === 1 ? 'rotated' : ''}`} size={20} />
              </button>
              {openFaq === 1 && (
                <div className="faq-answer">
                  <p>Absolutely. All conversations are encrypted end-to-end. We never store sensitive data, and you have full control over what gets processed.</p>
                </div>
              )}
            </div>

            <div className={`faq-item ${openFaq === 2 ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(2)}>
                <span>Which platforms does Miniclay AI support?</span>
                <ChevronDown className={`faq-icon ${openFaq === 2 ? 'rotated' : ''}`} size={20} />
              </button>
              {openFaq === 2 && (
                <div className="faq-answer">
                  <p>Miniclay AI works with Zoom, Microsoft Teams, Google Meet, Slack Huddles, and more. We're constantly adding support for new platforms.</p>
                </div>
              )}
            </div>

            <div className={`faq-item ${openFaq === 3 ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(3)}>
                <span>Can I customize how Miniclay AI responds?</span>
                <ChevronDown className={`faq-icon ${openFaq === 3 ? 'rotated' : ''}`} size={20} />
              </button>
              {openFaq === 3 && (
                <div className="faq-answer">
                  <p>Yes! You can customize response tone, expertise level, and when the AI should participate. It learns your preferences over time.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand">
                <h3 className="footer-brand-name">Miniclay AI</h3>
                <p className="footer-brand-tagline">Autonomous Meeting Intelligence</p>
              </div>
              
              <div className="footer-links">
                <a href="#" className="footer-link">
                  <Mail size={18} />
                  <span>Contact / Learn More</span>
                </a>
              </div>
            </div>

            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="footer-social-link" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>

            <div className="footer-bottom">
              <p className="footer-copyright">
                © {new Date().getFullYear()} Miniclay AI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
