import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './SelectCategory.css'

const categories = [
  {
    id: 'fit',
    emoji: '🟢',
    icon: '💪',
    label: 'Fit',
    subtitle: 'Healthy lifestyle',
    description: 'Maintain your healthy weight and active lifestyle with balanced nutrition choices.',
    color: '#2E7D32',
    bg: '#E8F5E9',
    darkBg: '#1B3A1C',
    bmiBadge: 'BMI 18.5–24.9',
  },
  {
    id: 'underweight',
    emoji: '🟡',
    icon: '⚡',
    label: 'Underweight',
    subtitle: 'Need healthy weight gain',
    description: 'Focus on calorie-dense, nutrient-rich foods to achieve a healthy weight gain.',
    color: '#F57F17',
    bg: '#FFF8E1',
    darkBg: '#3A2E10',
    bmiBadge: 'BMI < 18.5',
  },
  {
    id: 'overweight',
    emoji: '🟠',
    icon: '🏃',
    label: 'Overweight',
    subtitle: 'Need calorie control',
    description: 'Choose low-calorie, high-fiber foods to achieve a gradual, healthy weight loss.',
    color: '#E65100',
    bg: '#FBE9E7',
    darkBg: '#3A1E10',
    bmiBadge: 'BMI 25–29.9',
  },
  {
    id: 'obese',
    emoji: '🔴',
    icon: '🛡️',
    label: 'Obese',
    subtitle: 'Need healthier food choices',
    description: 'Prioritize low-sugar, low-fat, and high-protein foods to improve your health.',
    color: '#C62828',
    bg: '#FFEBEE',
    darkBg: '#3A0D0D',
    bmiBadge: 'BMI ≥ 30',
  },
]

const SelectCategory = ({ selectedCategory, setSelectedCategory }) => {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleContinue = () => {
    if (selectedCategory) {
      navigate('/analyze')
    }
  }

  const selectedData = categories.find(c => c.id === selectedCategory)

  return (
    <div className="select-category-page">
      <div className="sc-bg-orb sc-orb-1" />
      <div className="sc-bg-orb sc-orb-2" />

      <div className="container">
        {/* Header */}
        <div className="sc-header animate-fadeInUp">
          <div className="step-indicator">
            <span className="step active">1</span>
            <div className="step-line" />
            <span className="step">2</span>
            <div className="step-line" />
            <span className="step">3</span>
          </div>
          <h1 className="sc-title">Select Your Health Category</h1>
          <p className="sc-desc">
            Choose the option that best matches your current health condition.
            This helps us provide personalized food recommendations.
          </p>
        </div>

        {/* Category Cards */}
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              className={`category-card animate-fadeInUp delay-${index + 1} ${selectedCategory === cat.id ? 'selected' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
              onMouseEnter={() => setHovered(cat.id)}
              onMouseLeave={() => setHovered(null)}
              id={`category-${cat.id}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedCategory(cat.id)}
              style={{
                '--cat-color': cat.color,
                '--cat-bg': cat.bg,
              }}
            >
              {/* Selected Badge */}
              {selectedCategory === cat.id && (
                <div className="selected-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Selected
                </div>
              )}

              {/* Card Header */}
              <div className="cat-header">
                <div className="cat-icon-wrap">
                  <span className="cat-status-dot">{cat.emoji}</span>
                  <span className="cat-icon">{cat.icon}</span>
                </div>
                <span className="cat-bmi-badge">{cat.bmiBadge}</span>
              </div>

              {/* Card Body */}
              <div className="cat-body">
                <h3 className="cat-label">{cat.label}</h3>
                <p className="cat-subtitle">{cat.subtitle}</p>
                <p className="cat-description">{cat.description}</p>
              </div>

              {/* Selection Ring */}
              <div className="selection-ring" />
            </div>
          ))}
        </div>

        {/* Selected Confirmation */}
        {selectedCategory && (
          <div className="selection-confirm animate-scaleIn">
            <div className="confirm-icon">
              {selectedData?.icon}
            </div>
            <div>
              <p className="confirm-text">
                You selected: <strong style={{ color: selectedData?.color }}>{selectedData?.label}</strong>
              </p>
              <p className="confirm-sub">{selectedData?.subtitle}</p>
            </div>
          </div>
        )}

        {/* Continue Button */}
        <div className="sc-actions animate-fadeInUp delay-5">
          <button
            className="btn btn-primary btn-lg sc-continue"
            onClick={handleContinue}
            disabled={!selectedCategory}
            id="continue-btn"
          >
            Continue to Analysis
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <p className="sc-hint">
            {selectedCategory ? '✅ Ready to proceed!' : 'Please select a category to continue.'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SelectCategory
