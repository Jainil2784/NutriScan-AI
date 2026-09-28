import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" fill="url(#logoGrad)" />
              <path d="M9 14.5C9 11.5 11 9 14 9C17 9 19 11.5 19 14.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 14L14 19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="14" cy="14" r="2" fill="white"/>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2E7D32"/>
                  <stop offset="1" stopColor="#4CAF50"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">NutriScan</span>
            <span className="logo-ai">AI</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="navbar-links">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
            About
          </Link>
          <button
            className="btn btn-primary btn-sm nav-cta"
            onClick={() => navigate('/select-category')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Start Scanning
          </button>
        </div>

        {/* Right Controls */}
        <div className="navbar-right">
          {/* Dark Mode Toggle */}
          <button
            className={`dark-toggle ${darkMode ? 'dark-active' : ''}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            id="dark-mode-toggle"
          >
            <div className="toggle-track">
              <span className="toggle-icon sun">☀️</span>
              <span className="toggle-icon moon">🌙</span>
              <div className="toggle-thumb" />
            </div>
          </button>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className={`mobile-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
        <Link to="/about" className={`mobile-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
        <button className="btn btn-primary w-full" onClick={() => navigate('/select-category')}>
          Start Scanning
        </button>
      </div>
    </nav>
  )
}

export default Navbar
