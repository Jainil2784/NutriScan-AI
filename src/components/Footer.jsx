import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" fill="url(#footerLogoGrad)" />
                  <path d="M9 14.5C9 11.5 11 9 14 9C17 9 19 11.5 19 14.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M14 14L14 19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="14" cy="14" r="2" fill="white"/>
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2E7D32"/>
                      <stop offset="1" stopColor="#4CAF50"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="footer-logo-text">NutriScan <span>AI</span></span>
            </div>
            <p className="footer-tagline">Smart Food Health Analyzer</p>
            <p className="footer-sub">MSc IT (AI) Mini Project · 2026</p>
          </div>

          {/* Links */}
          <div className="footer-links">
            <h4>Navigate</h4>
            <Link to="/">Home</Link>
            <Link to="/select-category">Start Scanning</Link>
            <Link to="/about">About Project</Link>
          </div>

          {/* Tech Stack */}
          <div className="footer-links">
            <h4>Built With</h4>
            <span>React.js</span>
            <span>HTML5 & CSS3</span>
            <span>JavaScript ES6+</span>
            <span>React Router</span>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2026 NutriScan AI — MSc IT (AI) Mini Project. All rights reserved.</p>
          <div className="footer-badges">
            <span className="footer-badge">🎓 Academic Project</span>
            <span className="footer-badge">🤖 AI Powered</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
