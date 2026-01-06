import React from 'react';
import { Mic, Brain, Sparkles, Users, ArrowRight, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Autonomous AI Meeting Assistant</span>
            </div>
            
            <h1 className="hero-title">
              Miniclay AI — Your Autonomous AI Meeting Bot
            </h1>
            
            <p className="hero-subtitle">
              Joins meetings, understands conversations in real-time, and responds intelligently like a human participant.
            </p>
            
            <div className="hero-cta">
              <a href="#" className="btn-primary">
                Launch Miniclay AI
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Floating gradient orbs */}
            <div className="gradient-orb gradient-orb-1"></div>
            <div className="gradient-orb gradient-orb-2"></div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="highlights-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Intelligent Meeting Capabilities</h2>
            <p className="section-subtitle">Everything you need for AI-powered collaboration</p>
          </div>

          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">
                <Mic size={24} />
              </div>
              <h3 className="highlight-title">Real-time transcription & understanding</h3>
              <p className="highlight-description">
                Captures and processes every word with advanced speech recognition technology
              </p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <Brain size={24} />
              </div>
              <h3 className="highlight-title">AI-powered conversational responses</h3>
              <p className="highlight-description">
                Responds intelligently to questions and participates naturally in discussions
              </p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <Sparkles size={24} />
              </div>
              <h3 className="highlight-title">Natural-sounding voice replies</h3>
              <p className="highlight-description">
                Human-like voice synthesis that integrates seamlessly into conversations
              </p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <Users size={24} />
              </div>
              <h3 className="highlight-title">Designed for collaboration & productivity</h3>
              <p className="highlight-description">
                Built to enhance team dynamics and boost meeting effectiveness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="value-section">
        <div className="container">
          <div className="value-content">
            <div className="value-statement">
              <div className="value-quote">"</div>
              <h2 className="value-text">Transforms meetings into intelligent conversations.</h2>
            </div>
            
            <div className="value-statement">
              <div className="value-quote">"</div>
              <h2 className="value-text">Your AI teammate — not just a note-taker.</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof-section">
        <div className="container">
          <div className="social-proof-content">
            <h2 className="social-proof-title">Built for creators, founders, remote teams, and innovators.</h2>
            <p className="social-proof-subtitle">
              Join the future of intelligent meeting collaboration
            </p>
            <a href="#" className="btn-secondary">
              Get Started Today
              <ArrowRight size={20} />
            </a>
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
