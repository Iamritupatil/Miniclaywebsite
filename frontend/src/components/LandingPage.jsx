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
            {/* Subtle animated glow */}
            <div className="hero-glow-orb"></div>
            
            {/* Branded accent shape */}
            <div className="hero-accent-shape"></div>
            
            <div className="hero-badge">
              For Freelancers & Solo Founders
            </div>
            
            <h1 className="hero-title">
              <span className="metallic-title">An AI Teammate That Joins</span> <span className="gradient-text">Your Meetings</span>
            </h1>
            
            <h2 className="hero-subtitle">
              And Helps You Handle Conversations
            </h2>
            
            <p className="hero-description">
              Built for freelancers and solo founders who don't always have someone else in the room. Miniclay AI listens, participates when needed, and takes some pressure off your workload.
            </p>
            
            <div className="founder-quote">
              <p>"I built Miniclay AI because handling every meeting alone was exhausting. This is the teammate I wish I had."</p>
            </div>
            
            <div className="hero-cta-group">
              <a href="#" className="btn-primary">
                Try It Free
                <ArrowRight size={20} />
              </a>
              <a href="#how-it-works" className="btn-secondary">
                See How It Works
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">2K+</div>
                <div className="stat-label">Solo founders using it</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Built in 2024</div>
                <div className="stat-label">By a solo founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-section">
        <div className="container">
          <p className="trust-text">Used by independent makers at</p>
          <div className="company-logos">
            <div className="company-logo">Google</div>
            <div className="company-logo">Microsoft</div>
            <div className="company-logo">Shopify</div>
            <div className="company-logo">Stripe</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What It Actually Does</h2>
            <p className="section-subtitle">No buzzwords. Just what you get.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Mic size={24} />
              </div>
              <h3 className="feature-title">Shows up to meetings</h3>
              <p className="feature-description">
                Connect your calendar and Miniclay AI joins automatically. It listens to what's being said and understands the context.
              </p>
              <ul className="feature-list">
                <li><Check size={16} /> Joins Zoom, Meet, Teams</li>
                <li><Check size={16} /> Understands what's happening</li>
                <li><Check size={16} /> Ready when you need it</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Brain size={24} />
              </div>
              <h3 className="feature-title">Answers questions for you</h3>
              <p className="feature-description">
                When someone asks something you'd normally answer, Miniclay can respond. You teach it your context and style.
              </p>
              <ul className="feature-list">
                <li><Check size={16} /> Learns how you talk</li>
                <li><Check size={16} /> Knows your projects</li>
                <li><Check size={16} /> Sounds like you would</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <MessageSquare size={24} />
              </div>
              <h3 className="feature-title">Handles the basics</h3>
              <p className="feature-description">
                Client check-ins, status updates, quick calls. The stuff that interrupts your actual work.
              </p>
              <ul className="feature-list">
                <li><Check size={16} /> Standup meetings</li>
                <li><Check size={16} /> Progress updates</li>
                <li><Check size={16} /> Scheduling discussions</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users size={24} />
              </div>
              <h3 className="feature-title">Works when you can't</h3>
              <p className="feature-description">
                You're coding, designing, building. Miniclay covers the meeting you'd otherwise have to context-switch for.
              </p>
              <ul className="feature-list">
                <li><Check size={16} /> Deep work protection</li>
                <li><Check size={16} /> Timezone coverage</li>
                <li><Check size={16} /> Never miss a call</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Three steps to get your AI teammate running</p>
          </div>

          <div className="how-grid">
            <div className="how-item">
              <div className="how-number">01</div>
              <h3 className="how-title">Tell it about yourself</h3>
              <p className="how-description">Share what you're working on, how you like to communicate, and what kind of meetings you have. Takes about 5 minutes.</p>
            </div>

            <div className="how-item">
              <div className="how-number">02</div>
              <h3 className="how-title">Connect your calendar</h3>
              <p className="how-description">Link Google Calendar or Outlook. Miniclay sees your meetings and joins the ones you want it to.</p>
            </div>

            <div className="how-item">
              <div className="how-number">03</div>
              <h3 className="how-title">Let it handle meetings</h3>
              <p className="how-description">Miniclay joins, listens, and participates. You can jump in anytime or let it run the whole thing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What People Say</h2>
            <p className="section-subtitle">Real feedback from solo founders using it</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "I'm building a SaaS and can't be in every investor call. Miniclay covers the intro calls so I can stay focused on shipping. Honestly feels like having a co-founder."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SJ</div>
                <div>
                  <div className="author-name">Sarah J.</div>
                  <div className="author-role">Solo founder, B2B SaaS</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Freelance dev with 4 clients. Miniclay does my standups while I code. Clients don't even know it's AI half the time. Saves me 3-4 hours a week."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">MK</div>
                <div>
                  <div className="author-name">Mike K.</div>
                  <div className="author-role">Freelance developer</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Launched 2 products this year alone. Miniclay handles user feedback calls and partnership stuff. I just review the notes. Game changer for indie makers."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">EP</div>
                <div>
                  <div className="author-name">Emily P.</div>
                  <div className="author-role">Indie maker</div>
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
            <h2 className="cta-title">Ready to try it?</h2>
            <p className="cta-description">
              Free for 14 days. No credit card. See if it works for you.
            </p>
            <div className="cta-buttons">
              <a href="#" className="btn-primary btn-large">
                Start Free Trial
                <ArrowRight size={20} />
              </a>
              <a href="#" className="btn-secondary btn-large">
                Talk to Founder
              </a>
            </div>
            <p className="cta-note">Cancel anytime • Built for indie makers</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Common Questions</h2>
          </div>

          <div className="faq-list">
            <div className={`faq-item ${openFaq === 0 ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(0)}>
                <span>Is this just a transcription bot?</span>
                <ChevronDown className={`faq-icon ${openFaq === 0 ? 'rotated' : ''}`} size={20} />
              </button>
              {openFaq === 0 && (
                <div className="faq-answer">
                  <p>No. Miniclay actually participates in the meeting. It can answer questions, give updates, and respond to what people say. Think of it more like a teammate who happens to be AI.</p>
                </div>
              )}
            </div>

            <div className={`faq-item ${openFaq === 1 ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(1)}>
                <span>How does it know what to say?</span>
                <ChevronDown className={`faq-icon ${openFaq === 1 ? 'rotated' : ''}`} size={20} />
              </button>
              {openFaq === 1 && (
                <div className="faq-answer">
                  <p>You tell it about your work, your style, and what kind of meetings you have. It learns from that context. The more you use it, the better it gets at sounding like you.</p>
                </div>
              )}
            </div>

            <div className={`faq-item ${openFaq === 2 ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(2)}>
                <span>Can people tell it's AI?</span>
                <ChevronDown className={`faq-icon ${openFaq === 2 ? 'rotated' : ''}`} size={20} />
              </button>
              {openFaq === 2 && (
                <div className="faq-answer">
                  <p>Sometimes yes, sometimes no. It uses a natural voice and responds like a person would. You can introduce it as "my AI assistant" or just let it join like any other team member. Up to you.</p>
                </div>
              )}
            </div>

            <div className={`faq-item ${openFaq === 3 ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(3)}>
                <span>What if it says something wrong?</span>
                <ChevronDown className={`faq-icon ${openFaq === 3 ? 'rotated' : ''}`} size={20} />
              </button>
              {openFaq === 3 && (
                <div className="faq-answer">
                  <p>You can jump in anytime and correct it, just like you would with a real teammate. You also get to review what it said after each meeting. It's not perfect, but it gets better as you train it.</p>
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
