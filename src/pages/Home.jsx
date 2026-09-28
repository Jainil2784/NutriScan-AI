import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const features = [
  {
    icon: '📷',
    title: 'Smart Scanner',
    description: 'Instantly scan packaged food labels with your camera or by uploading an image.',
    color: '#2E7D32',
  },
  {
    icon: '🥗',
    title: 'Nutrition Analysis',
    description: 'Detailed breakdown of calories, proteins, fats, sugars and key micronutrients.',
    color: '#388E3C',
  },
  {
    icon: '📅',
    title: 'Expiry Detection',
    description: 'Automatically detects and checks product expiry dates to ensure food safety.',
    color: '#43A047',
  },
  {
    icon: '💯',
    title: 'Health Score',
    description: 'Get an AI-powered health score (0–100) based on your personal health profile.',
    color: '#4CAF50',
  },
  {
    icon: '🎯',
    title: 'Personalized Recommendations',
    description: 'Smart food alternatives tailored to your health category and dietary needs.',
    color: '#66BB6A',
  },
]

const stats = [
  { value: '10K+', label: 'Food Products' },
  { value: '99%', label: 'Accuracy' },
  { value: '5', label: 'Health Categories' },
  { value: 'Real-time', label: 'Analysis' },
]

const Home = () => {
  const navigate = useNavigate()
  const heroRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleMouseMove = (e) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
    const floatEl = heroRef.current.querySelector('.hero-illustration')
    if (floatEl) {
      floatEl.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) translateZ(20px)`
    }
  }

  return (
    <div className="home-page">
      {/* ========== HERO SECTION ========== */}
      <section className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
        <div className="hero-bg-orbs">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>

        <div className="container">
          <div className="hero-grid">
            {/* Hero Text */}
            <div className="hero-text">
              <div className="hero-badge animate-fadeInUp">
                <span className="pulse-dot" />
                AI-Powered Food Intelligence
              </div>

              <h1 className="hero-heading animate-fadeInUp delay-1">
                <span className="brand-word">NutriScan</span>
                <span className="gradient-text"> AI</span>
              </h1>

              <p className="hero-subtitle animate-fadeInUp delay-2">
                Smart Food Health Analyzer
              </p>

              <p className="hero-description animate-fadeInUp delay-3">
                Scan a packaged food label and receive an instant nutrition analysis,
                expiry detection, personalized health score and food recommendations
                — all tailored to your health profile.
              </p>

              <div className="hero-actions animate-fadeInUp delay-4">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => navigate('/select-category')}
                  id="start-scanning-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2"/>
                    <rect x="7" y="7" width="10" height="10" rx="1"/>
                  </svg>
                  Start Scanning
                </button>
                <button
                  className="btn btn-secondary btn-lg"
                  onClick={() => navigate('/about')}
                  id="about-project-btn"
                >
                  About Project
                </button>
              </div>

              {/* Stats */}
              <div className="hero-stats animate-fadeInUp delay-5">
                {stats.map((stat, i) => (
                  <div key={i} className="stat-item">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="hero-visual animate-fadeInUp delay-3">
              <div className="hero-illustration">
                <div className="illustration-glow" />
                <div className="illustration-card">
                  {/* Food Scanner SVG Illustration */}
                  <svg viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                    {/* Plate Base */}
                    <circle cx="170" cy="200" r="110" fill="url(#plateGrad)" opacity="0.15"/>
                    <circle cx="170" cy="200" r="90" fill="url(#plateGrad)" opacity="0.1"/>

                    {/* Plate */}
                    <circle cx="170" cy="195" r="85" fill="white" opacity="0.95"/>
                    <circle cx="170" cy="195" r="85" fill="url(#plateGrad)" opacity="0.05"/>
                    <circle cx="170" cy="195" r="85" stroke="url(#plateGrad)" strokeWidth="2" opacity="0.3"/>

                    {/* Salad Bowl - Leaves */}
                    <ellipse cx="170" cy="205" rx="60" ry="40" fill="url(#bowlGrad)" opacity="0.9"/>

                    {/* Lettuce Leaves */}
                    <path d="M130 210 Q145 185 160 200 Q145 215 130 210Z" fill="#66BB6A" opacity="0.8"/>
                    <path d="M145 195 Q160 170 175 190 Q160 205 145 195Z" fill="#81C784"/>
                    <path d="M165 192 Q180 167 195 188 Q180 203 165 192Z" fill="#4CAF50" opacity="0.9"/>
                    <path d="M180 205 Q195 182 210 200 Q195 215 180 205Z" fill="#66BB6A" opacity="0.8"/>
                    <path d="M155 215 Q175 198 190 215 Q175 228 155 215Z" fill="#A5D6A7" opacity="0.7"/>

                    {/* Tomato */}
                    <circle cx="152" cy="208" r="14" fill="#EF5350" opacity="0.9"/>
                    <circle cx="152" cy="208" r="10" fill="#E53935" opacity="0.7"/>
                    <path d="M152 196 Q148 190 150 194" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M152 196 Q156 190 154 194" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round"/>

                    {/* Avocado */}
                    <ellipse cx="185" cy="207" rx="12" ry="16" fill="#558B2F" opacity="0.9"/>
                    <ellipse cx="185" cy="207" rx="8" ry="11" fill="#8BC34A" opacity="0.8"/>
                    <ellipse cx="185" cy="209" rx="5" ry="7" fill="#F9A825" opacity="0.9"/>

                    {/* Carrot */}
                    <path d="M165 215 L170 235 L175 215" fill="#FF8F00" opacity="0.8"/>
                    <path d="M170 215 Q168 210 172 210" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round"/>

                    {/* Scan Lines */}
                    <rect x="90" y="90" width="50" height="50" rx="8" fill="none" stroke="url(#scanGrad)" strokeWidth="3"/>
                    <path d="M90 102 L90 90 L102 90" stroke="url(#scanGrad)" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
                    <path d="M128 90 L140 90 L140 102" stroke="url(#scanGrad)" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
                    <path d="M90 128 L90 140 L102 140" stroke="url(#scanGrad)" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
                    <path d="M128 140 L140 140 L140 128" stroke="url(#scanGrad)" strokeWidth="3.5" strokeLinecap="round" fill="none"/>

                    {/* Scan beam */}
                    <line x1="90" y1="115" x2="140" y2="115" stroke="url(#scanGrad)" strokeWidth="2" opacity="0.7">
                      <animate attributeName="y1" values="95;140;95" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="y2" values="95;140;95" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite"/>
                    </line>

                    {/* Health Score Badge */}
                    <rect x="225" y="100" width="85" height="50" rx="12" fill="white" filter="url(#shadow)"/>
                    <rect x="225" y="100" width="85" height="50" rx="12" fill="url(#scoreGrad)" opacity="0.1"/>
                    <rect x="225" y="100" width="85" height="50" rx="12" stroke="url(#scoreGrad)" strokeWidth="1.5" opacity="0.5"/>
                    <text x="267" y="120" textAnchor="middle" fill="#2E7D32" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">HEALTH SCORE</text>
                    <text x="267" y="140" textAnchor="middle" fill="#2E7D32" fontSize="18" fontWeight="800" fontFamily="Outfit, sans-serif">82/100</text>

                    {/* Nutrition Pills */}
                    <rect x="55" y="270" width="70" height="30" rx="15" fill="white" filter="url(#shadow)"/>
                    <rect x="55" y="270" width="70" height="30" rx="15" stroke="url(#plateGrad)" strokeWidth="1.5" opacity="0.4"/>
                    <text x="90" y="290" textAnchor="middle" fill="#2E7D32" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">🥗 Protein 12g</text>

                    <rect x="215" y="270" width="70" height="30" rx="15" fill="white" filter="url(#shadow)"/>
                    <rect x="215" y="270" width="70" height="30" rx="15" stroke="url(#plateGrad)" strokeWidth="1.5" opacity="0.4"/>
                    <text x="250" y="290" textAnchor="middle" fill="#E65100" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">🔥 Cal 245</text>

                    {/* Defs */}
                    <defs>
                      <linearGradient id="plateGrad" x1="0" y1="0" x2="340" y2="340" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2E7D32"/>
                        <stop offset="1" stopColor="#81C784"/>
                      </linearGradient>
                      <linearGradient id="bowlGrad" x1="110" y1="165" x2="230" y2="245" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#C8E6C9"/>
                        <stop offset="1" stopColor="#A5D6A7"/>
                      </linearGradient>
                      <linearGradient id="scanGrad" x1="90" y1="90" x2="140" y2="140" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2E7D32"/>
                        <stop offset="1" stopColor="#4CAF50"/>
                      </linearGradient>
                      <linearGradient id="scoreGrad" x1="225" y1="100" x2="310" y2="150" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2E7D32"/>
                        <stop offset="1" stopColor="#4CAF50"/>
                      </linearGradient>
                      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#2E7D32" floodOpacity="0.12"/>
                      </filter>
                    </defs>
                  </svg>
                </div>

                {/* Floating Info Cards */}
                <div className="float-card float-card-1">
                  <span className="float-card-icon">✅</span>
                  <div>
                    <div className="float-card-title">Safe to Eat</div>
                    <div className="float-card-sub">Exp: Jan 2026</div>
                  </div>
                </div>

                <div className="float-card float-card-2">
                  <span className="float-card-icon">🎯</span>
                  <div>
                    <div className="float-card-title">Recommended</div>
                    <div className="float-card-sub">For your profile</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 Q360 80 720 40 Q1080 0 1440 40 V80 H0Z" fill="var(--bg)"/>
          </svg>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section className="features-section section" id="features">
        <div className="container">
          <div className="section-header">
            <div className="section-chip">What We Offer</div>
            <h2>Powerful AI Features</h2>
            <p>Everything you need to make informed, healthy food choices every single day.</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card animate-fadeInUp delay-${index + 1}`}
                id={`feature-card-${index}`}
              >
                <div className="feature-icon-wrap" style={{ background: `${feature.color}18` }}>
                  <span className="feature-icon">{feature.icon}</span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
                <div className="feature-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Included
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="cta-banner animate-fadeInUp">
            <div className="cta-banner-content">
              <div>
                <h3>Ready to scan your first food product?</h3>
                <p>Join thousands making healthier choices with NutriScan AI.</p>
              </div>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => navigate('/select-category')}
                id="cta-banner-btn"
              >
                Get Started Free
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
            <div className="cta-banner-orb" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
