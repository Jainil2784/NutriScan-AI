import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Results.css'

// Mock data per category
const getMockData = (category) => {
  const productImage = null // will use uploaded image or fallback

  const products = {
    fit: {
      productName: 'Himalaya Mixed Nuts Trail Mix',
      brand: 'Himalaya Naturals',
      category: 'Healthy Snacks',
      healthScore: 88,
      expiryStatus: 'Safe to Consume',
      expiryDate: 'Jan 2026',
      recommendation: 'Recommended',
      calories: 280,
      protein: 9.5,
      fat: 22,
      sugar: 6.2,
      fiber: 3.8,
      sodium: 85,
      ingredients: 'Almonds, Cashews, Walnuts, Raisins, Sunflower Seeds, Pumpkin Seeds',
      recommendation_reason: 'This product is RECOMMENDED for a Fit lifestyle. It provides healthy fats, protein, and essential nutrients that support an active, balanced diet.',
      alternative: null,
      color: '#2E7D32',
      scoreColor: '#2E7D32',
    },
    underweight: {
      productName: 'Ensure Plus Nutrition Shake',
      brand: 'Abbott Nutrition',
      category: 'Nutritional Supplements',
      healthScore: 82,
      expiryStatus: 'Safe to Consume',
      expiryDate: 'Mar 2026',
      recommendation: 'Recommended',
      calories: 350,
      protein: 13,
      fat: 11.5,
      sugar: 18,
      fiber: 1.2,
      sodium: 230,
      ingredients: 'Water, Sugar, Corn Maltodextrin, Milk Protein Concentrate, Canola Oil, Soy Protein, Vitamins & Minerals',
      recommendation_reason: 'This product is RECOMMENDED for weight gain. It provides high calorie intake with balanced protein and essential vitamins to support healthy weight gain.',
      alternative: null,
      color: '#F57F17',
      scoreColor: '#F57F17',
    },
    overweight: {
      productName: 'Lays Classic Salted Chips',
      brand: "Frito-Lay (PepsiCo)",
      category: 'Packaged Snacks',
      healthScore: 38,
      expiryStatus: 'Safe to Consume',
      expiryDate: 'Dec 2025',
      recommendation: 'Not Recommended',
      calories: 540,
      protein: 6.2,
      fat: 34,
      sugar: 2.1,
      fiber: 4.5,
      sodium: 680,
      ingredients: 'Potatoes, Vegetable Oil (Sunflower/Corn), Salt, Flavoring Agents, Preservatives',
      recommendation_reason: "This product is NOT RECOMMENDED for calorie control. It contains very high fat content (34g) and high sodium (680mg), which can hinder weight management efforts.",
      alternative: 'Roasted Makhana (Fox Nuts)',
      color: '#E65100',
      scoreColor: '#E65100',
    },
    obese: {
      productName: 'Britannia Bourbon Cream Biscuits',
      brand: 'Britannia Industries',
      category: 'Packaged Biscuits',
      healthScore: 24,
      expiryStatus: 'Safe to Consume',
      expiryDate: 'Nov 2025',
      recommendation: 'Not Recommended',
      calories: 480,
      protein: 5.4,
      fat: 19,
      sugar: 28,
      fiber: 1.8,
      sodium: 390,
      ingredients: 'Refined Wheat Flour (Maida), Sugar, Vegetable Oil, Cocoa Powder, Glucose Syrup, Salt, Raising Agents, Vanilla Flavoring',
      recommendation_reason: 'This product is NOT RECOMMENDED for obesity management. It contains high calories (480), high sugar (28g), and refined flour which can worsen insulin resistance and weight gain.',
      alternative: 'Roasted Makhana (Fox Nuts)',
      color: '#C62828',
      scoreColor: '#C62828',
    },
  }

  return products[category] || products.fit
}

const getNutritionGrade = (score) => {
  if (score >= 75) return { grade: 'A', color: '#2E7D32', label: 'Excellent' }
  if (score >= 55) return { grade: 'B', color: '#558B2F', label: 'Good' }
  if (score >= 40) return { grade: 'C', color: '#F57F17', label: 'Average' }
  if (score >= 25) return { grade: 'D', color: '#E65100', label: 'Poor' }
  return { grade: 'F', color: '#C62828', label: 'Unhealthy' }
}

const NutritionBar = ({ label, value, unit, max, color }) => {
  const pct = Math.min(100, (value / max) * 100)
  return (
    <div className="nutrition-bar-item">
      <div className="nutrition-bar-header">
        <span className="nutrition-label">{label}</span>
        <span className="nutrition-value" style={{ color }}>{value}{unit}</span>
      </div>
      <div className="nutrition-bar-track">
        <div
          className="nutrition-bar-fill"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  )
}

const Results = ({ selectedCategory, uploadedImage }) => {
  const navigate = useNavigate()
  const data = getMockData(selectedCategory || 'fit')
  const grade = getNutritionGrade(data.healthScore)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categoryLabels = {
    fit: '💪 Fit',
    underweight: '⚡ Underweight',
    overweight: '🏃 Overweight',
    obese: '🛡️ Obese',
  }

  return (
    <div className="results-page">
      <div className="results-bg-orb results-orb-1" />
      <div className="results-bg-orb results-orb-2" />

      <div className="container">
        {/* Page Header */}
        <div className="results-header animate-fadeInUp">
          <div className="results-header-chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Analysis Complete
          </div>
          <h1 className="results-title">Food Analysis Results</h1>
          <p className="results-subtitle">Here's what our AI found about your product.</p>
        </div>

        {/* TOP SUMMARY CARDS */}
        <div className="summary-cards animate-fadeInUp delay-1">
          {/* Health Score */}
          <div className="summary-card score-card">
            <div className="score-ring-wrap">
              <svg className="score-ring" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="32" fill="none" stroke="var(--border)" strokeWidth="5" opacity="0.4"/>
                <circle
                  cx="40" cy="40" r="32"
                  fill="none"
                  stroke={data.scoreColor}
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 32}`}
                  strokeDashoffset={`${2 * Math.PI * 32 * (1 - data.healthScore / 100)}`}
                  transform="rotate(-90 40 40)"
                  style={{ filter: `drop-shadow(0 0 6px ${data.scoreColor}66)` }}
                />
              </svg>
              <div className="score-center">
                <span className="score-value" style={{ color: data.scoreColor }}>{data.healthScore}</span>
                <span className="score-max">/100</span>
              </div>
            </div>
            <div className="summary-card-info">
              <div className="summary-card-icon">💯</div>
              <p className="summary-card-label">Health Score</p>
              <span className="summary-card-badge" style={{ background: `${data.scoreColor}18`, color: data.scoreColor }}>
                Grade {grade.grade} · {grade.label}
              </span>
            </div>
          </div>

          {/* Expiry Status */}
          <div className="summary-card expiry-card">
            <div className="expiry-icon-big">📅</div>
            <div className="summary-card-info">
              <p className="summary-card-label">Expiry Status</p>
              <p className="summary-card-value expiry-value">
                <span className="expiry-dot" />
                {data.expiryStatus}
              </p>
              <span className="summary-card-badge badge-success">Exp: {data.expiryDate}</span>
            </div>
          </div>

          {/* Recommendation */}
          <div className={`summary-card rec-card ${data.recommendation === 'Recommended' ? 'rec-yes' : 'rec-no'}`}>
            <div className="rec-icon-big">
              {data.recommendation === 'Recommended' ? '✅' : '❌'}
            </div>
            <div className="summary-card-info">
              <div className="summary-card-icon">🍽</div>
              <p className="summary-card-label">Recommendation</p>
              <p className={`summary-card-value ${data.recommendation === 'Recommended' ? 'text-success' : 'text-danger'}`}>
                {data.recommendation}
              </p>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="results-grid">
          {/* Left Column */}
          <div className="results-left">
            {/* Product Image */}
            <div className="card product-image-card animate-fadeInUp delay-2">
              <h3 className="card-heading">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                Product Image
              </h3>
              <div className="product-img-wrap">
                {uploadedImage ? (
                  <img src={uploadedImage} alt="Food product" className="product-img" />
                ) : (
                  <div className="product-img-placeholder">
                    <span>🏪</span>
                    <p>No image uploaded</p>
                  </div>
                )}
              </div>
            </div>

            {/* Product Information */}
            <div className="card product-info-card animate-fadeInUp delay-3">
              <h3 className="card-heading">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                Product Information
              </h3>
              <div className="product-info-list">
                <div className="info-row">
                  <span className="info-key">Product Name</span>
                  <span className="info-val">{data.productName}</span>
                </div>
                <div className="info-row">
                  <span className="info-key">Brand</span>
                  <span className="info-val">{data.brand}</span>
                </div>
                <div className="info-row">
                  <span className="info-key">Category</span>
                  <span className="info-val">
                    <span className="category-tag">{data.category}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="card ingredients-card animate-fadeInUp delay-4">
              <h3 className="card-heading">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 110 20A10 10 0 0112 2z"/>
                  <path d="M12 8v4l3 3"/>
                </svg>
                Ingredients
              </h3>
              <div className="ingredients-tags">
                {data.ingredients.split(', ').map((ing, i) => (
                  <span key={i} className="ingredient-tag">{ing}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="results-right">
            {/* Nutrition Information */}
            <div className="card nutrition-card animate-fadeInUp delay-2">
              <div className="card-heading-row">
                <h3 className="card-heading">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3h18v18H3z"/>
                    <path d="M3 9h18M3 15h18M9 3v18"/>
                  </svg>
                  Nutrition Information
                </h3>
                <span className="per-serving">Per 100g serving</span>
              </div>

              {/* Macro Circles */}
              <div className="macro-grid">
                <div className="macro-item">
                  <div className="macro-circle" style={{ '--macro-color': '#FF8F00' }}>
                    <span className="macro-val">{data.calories}</span>
                    <span className="macro-unit">kcal</span>
                  </div>
                  <p className="macro-name">Calories</p>
                </div>
                <div className="macro-item">
                  <div className="macro-circle" style={{ '--macro-color': '#1565C0' }}>
                    <span className="macro-val">{data.protein}g</span>
                  </div>
                  <p className="macro-name">Protein</p>
                </div>
                <div className="macro-item">
                  <div className="macro-circle" style={{ '--macro-color': '#E65100' }}>
                    <span className="macro-val">{data.fat}g</span>
                  </div>
                  <p className="macro-name">Fat</p>
                </div>
                <div className="macro-item">
                  <div className="macro-circle" style={{ '--macro-color': '#C62828' }}>
                    <span className="macro-val">{data.sugar}g</span>
                  </div>
                  <p className="macro-name">Sugar</p>
                </div>
              </div>

              {/* Nutrition Bars */}
              <div className="nutrition-bars">
                <NutritionBar label="Calories" value={data.calories} unit=" kcal" max={600} color="#FF8F00" />
                <NutritionBar label="Protein" value={data.protein} unit="g" max={30} color="#1565C0" />
                <NutritionBar label="Total Fat" value={data.fat} unit="g" max={50} color="#E65100" />
                <NutritionBar label="Sugar" value={data.sugar} unit="g" max={50} color="#C62828" />
                <NutritionBar label="Fiber" value={data.fiber} unit="g" max={15} color="#2E7D32" />
                <NutritionBar label="Sodium" value={data.sodium} unit="mg" max={800} color="#546E7A" />
              </div>
            </div>

            {/* Recommendation Card */}
            <div className={`card rec-detail-card animate-fadeInUp delay-3 ${data.recommendation === 'Recommended' ? 'rec-positive' : 'rec-negative'}`}>
              <h3 className="card-heading">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                AI Recommendation
              </h3>

              <div className="rec-category-row">
                <span className="rec-cat-label">Your Profile:</span>
                <span className="rec-cat-value">
                  {categoryLabels[selectedCategory] || '💪 Fit'}
                </span>
              </div>

              <div className={`rec-status-banner ${data.recommendation === 'Recommended' ? 'rec-yes-banner' : 'rec-no-banner'}`}>
                <span className="rec-status-icon">{data.recommendation === 'Recommended' ? '✅' : '⚠️'}</span>
                <p>{data.recommendation_reason}</p>
              </div>

              {/* Nutrition Grade */}
              <div className="nutrition-grade-wrap">
                <div
                  className="nutrition-grade-circle"
                  style={{ background: `${grade.color}18`, border: `3px solid ${grade.color}`, color: grade.color }}
                >
                  {grade.grade}
                </div>
                <div>
                  <p className="grade-title" style={{ color: grade.color }}>Nutritional Grade: {grade.grade}</p>
                  <p className="grade-sub">{grade.label} nutritional profile</p>
                </div>
              </div>
            </div>

            {/* Alternative Food Card */}
            {data.alternative && (
              <div className="card alternative-card animate-fadeInUp delay-4">
                <h3 className="card-heading">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/>
                  </svg>
                  Healthier Alternative
                </h3>
                <div className="alternative-content">
                  <div className="alt-image">
                    🌾
                  </div>
                  <div className="alt-info">
                    <h4 className="alt-name">{data.alternative}</h4>
                    <p className="alt-desc">
                      A much healthier snack option — low in calories, high in protein, and rich in antioxidants.
                      Perfect for your health goals.
                    </p>
                    <div className="alt-benefits">
                      <span className="alt-benefit">✅ Low Fat</span>
                      <span className="alt-benefit">✅ High Protein</span>
                      <span className="alt-benefit">✅ Low Sugar</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="results-actions animate-fadeInUp delay-5">
          <button
            className="btn btn-primary btn-lg"
            onClick={() => navigate('/analyze')}
            id="scan-again-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>
            </svg>
            Scan Again
          </button>
          <button
            className="btn btn-secondary btn-lg"
            onClick={() => navigate('/')}
            id="back-home-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Back Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Results
