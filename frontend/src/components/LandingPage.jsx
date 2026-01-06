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
              AI-Powered Meeting Intelligence
            </div>
            
            <h1 className="hero-title">
              Transform Your Meetings with <span className="gradient-text">Autonomous AI</span>
            </h1>
            
            <p className="hero-description">
              Miniclay AI joins your meetings, transcribes in real-time, and responds intelligently like a human participant. Boost productivity and never miss important details again.
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
                <div className="stat-number">10K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99%</div>
                <div className="stat-label">Accuracy</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Languages</div>
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
            <h2 className="section-title">Powerful Features for Smart Collaboration</h2>
            <p className="section-subtitle">Everything you need for productive meetings in one intelligent platform</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Mic size={24} />
              </div>
              <h3 className="feature-title">Real-time Transcription</h3>
              <p className="feature-description">
                Crystal-clear transcription with 99% accuracy across 50+ languages and dialects.
              </p>
              <ul className="feature-list">
                <li><Check size={16} /> Multi-language support</li>
                <li><Check size={16} /> Speaker identification</li>
                <li><Check size={16} /> Instant searchable notes</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Brain size={24} />
              </div>
              <h3 className="feature-title">AI-Powered Insights</h3>
              <p className="feature-description">
                Automatically extracts action items, decisions, and key discussion points.
              </p>
              <ul className="feature-list">
                <li><Check size={16} /> Smart summaries</li>
                <li><Check size={16} /> Action item tracking</li>
                <li><Check size={16} /> Meeting analytics</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <MessageSquare size={24} />
              </div>
              <h3 className="feature-title">Natural Conversation</h3>
              <p className="feature-description">
                Responds to questions naturally with context-aware, human-like dialogue.
              </p>
              <ul className="feature-list">
                <li><Check size={16} /> Context understanding</li>
                <li><Check size={16} /> Natural voice synthesis</li>
                <li><Check size={16} /> Emotional intelligence</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users size={24} />
              </div>
              <h3 className="feature-title">Team Collaboration</h3>
              <p className="feature-description">
                Seamless integration with your existing tools and team workflows.
              </p>
              <ul className="feature-list">
                <li><Check size={16} /> Calendar integration</li>
                <li><Check size={16} /> Slack & Teams sync</li>
                <li><Check size={16} /> Shared workspaces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How Miniclay AI Works</h2>
            <p className="section-subtitle">Get started in three simple steps</p>
          </div>

          <div className="how-grid">
            <div className="how-item">
              <div className="how-number">01</div>
              <h3 className="how-title">Connect Your Calendar</h3>
              <p className="how-description">Sync with Google Calendar, Outlook, or your preferred platform in seconds.</p>
            </div>

            <div className="how-item">
              <div className="how-number">02</div>
              <h3 className="how-title">AI Joins Automatically</h3>
              <p className="how-description">Miniclay AI joins your scheduled meetings and listens attentively throughout.</p>
            </div>

            <div className="how-item">
              <div className="how-number">03</div>
              <h3 className="how-title">Receive Smart Summaries</h3>
              <p className="how-description">Get instant transcripts, action items, and insights delivered to your inbox.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Loved by Teams Worldwide</h2>
            <p className="section-subtitle">See what our customers have to say</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Miniclay AI has transformed how our team conducts meetings. The transcription accuracy is incredible, and the AI summaries save us hours every week."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SJ</div>
                <div>
                  <div className="author-name">Sarah Johnson</div>
                  <div className="author-role">Product Manager, TechCorp</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "The AI's ability to understand context and provide meaningful insights is remarkable. It's like having an extra team member who never misses a detail."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">MK</div>
                <div>
                  <div className="author-name">Michael Kim</div>
                  <div className="author-role">Founder, StartupXYZ</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Our meeting productivity increased by 40%. Action items are tracked automatically, and follow-ups happen seamlessly. Highly recommended!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">EP</div>
                <div>
                  <div className="author-name">Emily Park</div>
                  <div className="author-role">Engineering Lead, DevShop</div>
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
            <h2 className="cta-title">Ready to Transform Your Meetings?</h2>
            <p className="cta-description">
              Join thousands of teams using Miniclay AI to boost productivity and collaboration.
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
            <p className="cta-note">No credit card required • 14-day free trial</p>
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
                <span>How does Miniclay AI join my meetings?</span>
                <ChevronDown className={`faq-icon ${openFaq === 0 ? 'rotated' : ''}`} size={20} />
              </button>
              {openFaq === 0 && (
                <div className="faq-answer">
                  <p>Miniclay AI integrates with your calendar and automatically joins meetings via a secure connection to Zoom, Teams, Google Meet, and other platforms. You maintain full control over when it joins.</p>
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
                  <p>Absolutely. All data is encrypted end-to-end with enterprise-grade security. We're SOC 2 Type II and GDPR compliant. You have full control over data retention and deletion.</p>
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
                  <p>Miniclay AI works with Zoom, Microsoft Teams, Google Meet, Slack Huddles, Webex, and more. We're constantly adding support for new platforms based on user feedback.</p>
                </div>
              )}
            </div>

            <div className={`faq-item ${openFaq === 3 ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(3)}>
                <span>Can I customize AI responses and behavior?</span>
                <ChevronDown className={`faq-icon ${openFaq === 3 ? 'rotated' : ''}`} size={20} />
              </button>
              {openFaq === 3 && (
                <div className="faq-answer">
                  <p>Yes! Customize response tone, expertise level, participation frequency, and more. The AI learns from your preferences and adapts to your team's communication style over time.</p>
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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            {/* Logo */}
            <div className="hero-logo">
              <img src="/logo.png" alt="Miniclay AI Logo" className="logo-image" />
            </div>
            
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>AI-Powered Meeting Intelligence</span>
            </div>
            
            <h1 className="hero-title orange-gradient-text">
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
