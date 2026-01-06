import React, { useState } from 'react';
import { Mic, Brain, MessageSquare, Users, ArrowRight, Twitter, Linkedin, Github, Mail, Check, Play, ChevronDown, Zap, Menu, X } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="landing-page">
      {/* Professional Header/Navigation */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="header-logo">
              <img src="/logo.png" alt="Miniclay AI" className="logo-img" />
              <span className="logo-text">Miniclay AI</span>
            </div>
            
            <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
              <a href="#features" className="nav-link">Features</a>
              <a href="#how-it-works" className="nav-link">How It Works</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
              <a href="#faq" className="nav-link">FAQ</a>
              <a href="#" className="btn-nav">Get Started</a>
            </nav>

            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              Autonomous AI Meeting Teammate
            </div>
            
            <h1 className="hero-title">
              <span className="metallic-title">Transform Your Meetings with</span> <span className="gradient-text">Autonomous AI</span>
            </h1>
            
            <p className="hero-description">
              Miniclay AI — Your Autonomous AI Meeting Teammate for Freelancers & Solo Founders. Miniclay AI doesn't just listen — it participates in conversations, helps handle meetings, and supports independent creators like a real teammate.
            </p>
            
            <div className="hero-cta-group">
              <a href="#" className="btn-primary">
                Get Started Free
                <ArrowRight size={20} />
              </a>
              <a href="#how-it-works" className="btn-secondary">
                <Play size={18} />
                Watch Demo
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">5K+</div>
                <div className="stat-label">Solo Founders</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">AI-First</div>
                <div className="stat-label">Participation</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-section">
        <div className="container">
          <p className="trust-text">Trusted by leading companies worldwide</p>
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
          <div className="section-header">
            <h2 className="section-title">Your AI Teammate, Built for Independence</h2>
            <p className="section-subtitle">Perfect for freelancers, indie makers, and solo founders who need meeting support</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Mic size={24} />
              </div>
              <h3 className="feature-title">Active Participation</h3>
              <p className="feature-description">
                Joins meetings as your teammate and actively participates in discussions with context-aware responses.
              </p>
              <ul className="feature-list">
                <li><Check size={16} /> Answers questions on your behalf</li>
                <li><Check size={16} /> Provides relevant input</li>
                <li><Check size={16} /> Natural conversation flow</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Brain size={24} />
              </div>
              <h3 className="feature-title">Context Understanding</h3>
              <p className="feature-description">
                Understands your business, projects, and goals to represent you accurately in every meeting.
              </p>
              <ul className="feature-list">
                <li><Check size={16} /> Learns your style</li>
                <li><Check size={16} /> Remembers past conversations</li>
                <li><Check size={16} /> Adapts to each client</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <MessageSquare size={24} />
              </div>
              <h3 className="feature-title">Real Teammate Experience</h3>
              <p className="feature-description">
                Communicates naturally and professionally, representing you as a real member of your team.
              </p>
              <ul className="feature-list">
                <li><Check size={16} /> Professional voice & tone</li>
                <li><Check size={16} /> Human-like engagement</li>
                <li><Check size={16} /> Client-ready presence</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users size={24} />
              </div>
              <h3 className="feature-title">Always Available</h3>
              <p className="feature-description">
                Never miss a meeting or client call. Miniclay AI is available 24/7 to represent you.
              </p>
              <ul className="feature-list">
                <li><Check size={16} /> Handle multiple meetings</li>
                <li><Check size={16} /> Timezone flexibility</li>
                <li><Check size={16} /> Scale your presence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How Your AI Teammate Works</h2>
            <p className="section-subtitle">Get your autonomous meeting partner in three simple steps</p>
          </div>

          <div className="how-grid">
            <div className="how-item">
              <div className="how-number">01</div>
              <h3 className="how-title">Set Your Context</h3>
              <p className="how-description">Tell Miniclay AI about your business, projects, and how you want to be represented in meetings.</p>
            </div>

            <div className="how-item">
              <div className="how-number">02</div>
              <h3 className="how-title">Connect & Schedule</h3>
              <p className="how-description">Sync your calendar and Miniclay AI joins as your autonomous teammate, ready to participate.</p>
            </div>

            <div className="how-item">
              <div className="how-number">03</div>
              <h3 className="how-title">Let AI Represent You</h3>
              <p className="how-description">Miniclay AI participates in meetings, answers questions, and handles discussions professionally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trusted by Solo Founders Worldwide</h2>
            <p className="section-subtitle">See how freelancers and indie makers use Miniclay AI</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "As a solo founder, I can't be in every meeting. Miniclay AI represents me professionally and handles client calls when I'm focused on building. It's like having a co-founder."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SJ</div>
                <div>
                  <div className="author-name">Sarah Johnson</div>
                  <div className="author-role">Solo Founder, SaaS Product</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "I'm a freelance developer juggling multiple clients. Miniclay AI handles standup meetings and client check-ins while I code. It understands my projects and communicates on my behalf."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">MK</div>
                <div>
                  <div className="author-name">Michael Kim</div>
                  <div className="author-role">Freelance Developer</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "As an indie maker shipping products fast, I need to focus on building. Miniclay AI attends partnership calls and user interviews for me. It's the teammate I always needed."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">EP</div>
                <div>
                  <div className="author-name">Emily Park</div>
                  <div className="author-role">Indie Maker</div>
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
            <h2 className="cta-title">Ready for Your AI Teammate?</h2>
            <p className="cta-description">
              Join thousands of freelancers and solo founders using Miniclay AI to scale their presence and focus on what matters.
            </p>
            <div className="cta-buttons">
              <a href="#" className="btn-primary btn-large">
                Start Free Trial
                <ArrowRight size={20} />
              </a>
              <a href="#" className="btn-secondary btn-large">
                Schedule Demo
              </a>
            </div>
            <p className="cta-note">No credit card required • Perfect for independent creators</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            <div className={`faq-item ${openFaq === 0 ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(0)}>
                <span>Is Miniclay AI just a transcription bot?</span>
                <ChevronDown className={`faq-icon ${openFaq === 0 ? 'rotated' : ''}`} size={20} />
              </button>
              {openFaq === 0 && (
                <div className="faq-answer">
                  <p>No! Miniclay AI is not a transcription tool. It's an autonomous AI teammate that actively participates in your meetings, answers questions, and represents you professionally. It engages in conversations like a real team member.</p>
                </div>
              )}
            </div>

            <div className={`faq-item ${openFaq === 1 ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(1)}>
                <span>How does Miniclay AI know what to say in meetings?</span>
                <ChevronDown className={`faq-icon ${openFaq === 1 ? 'rotated' : ''}`} size={20} />
              </button>
              {openFaq === 1 && (
                <div className="faq-answer">
                  <p>You provide context about your business, projects, and communication style. Miniclay AI learns from this and adapts to each meeting's context, ensuring it represents you accurately and professionally.</p>
                </div>
              )}
            </div>

            <div className={`faq-item ${openFaq === 2 ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(2)}>
                <span>Can clients tell it's an AI?</span>
                <ChevronDown className={`faq-icon ${openFaq === 2 ? 'rotated' : ''}`} size={20} />
              </button>
              {openFaq === 2 && (
                <div className="faq-answer">
                  <p>Miniclay AI communicates naturally with professional voice synthesis and human-like engagement. You can choose to introduce it as your AI teammate or let it participate seamlessly. Many users find it indistinguishable from a human assistant.</p>
                </div>
              )}
            </div>

            <div className={`faq-item ${openFaq === 3 ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(3)}>
                <span>What platforms does Miniclay AI work with?</span>
                <ChevronDown className={`faq-icon ${openFaq === 3 ? 'rotated' : ''}`} size={20} />
              </button>
              {openFaq === 3 && (
                <div className="faq-answer">
                  <p>Miniclay AI works with Zoom, Google Meet, Microsoft Teams, and other major video conferencing platforms. It integrates with your calendar and joins meetings automatically as scheduled.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <img src="/logo.png" alt="Miniclay AI" className="footer-logo-img" />
                <span className="footer-brand">Miniclay AI</span>
              </div>
              <p className="footer-tagline">Transforming meetings with intelligent automation</p>
              <div className="footer-social">
                <a href="#" className="social-link"><Twitter size={20} /></a>
                <a href="#" className="social-link"><Linkedin size={20} /></a>
                <a href="#" className="social-link"><Github size={20} /></a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">GDPR</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Miniclay AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
