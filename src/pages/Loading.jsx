import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Loading.css'

const steps = [
  { icon: '📷', text: 'Reading food label...', duration: 800 },
  { icon: '🔬', text: 'Extracting nutrition facts...', duration: 800 },
  { icon: '📅', text: 'Checking expiry date...', duration: 700 },
  { icon: '🤖', text: 'Running AI analysis...', duration: 600 },
  { icon: '🎯', text: 'Preparing recommendations...', duration: 600 },
]

const Loading = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)

    let stepIndex = 0
    let elapsed = 0
    const totalDuration = steps.reduce((a, s) => a + s.duration, 0)

    const runStep = () => {
      if (stepIndex >= steps.length) {
        // Navigate to results
        setTimeout(() => navigate('/results'), 400)
        return
      }

      setCurrentStep(stepIndex)

      const stepTimer = setTimeout(() => {
        setCompletedSteps(prev => [...prev, stepIndex])
        stepIndex++
        elapsed += steps[stepIndex - 1]?.duration || 0
        setProgress(Math.min(100, (elapsed / totalDuration) * 100))
        runStep()
      }, steps[stepIndex].duration)

      return stepTimer
    }

    const firstTimer = setTimeout(runStep, 300)
    return () => clearTimeout(firstTimer)
  }, [navigate])

  return (
    <div className="loading-page">
      <div className="loading-bg">
        <div className="loading-orb loading-orb-1" />
        <div className="loading-orb loading-orb-2" />
        <div className="loading-orb loading-orb-3" />
      </div>

      <div className="loading-content">
        {/* Main Spinner */}
        <div className="spinner-container">
          {/* Outer ripple rings */}
          <div className="ripple-ring ripple-1" />
          <div className="ripple-ring ripple-2" />
          <div className="ripple-ring ripple-3" />

          {/* Spinner track */}
          <div className="spinner-track">
            <svg className="spinner-svg" viewBox="0 0 120 120">
              {/* Track */}
              <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="4" className="track-circle"/>
              {/* Progress arc */}
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="url(#spinGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 50}`}
                strokeDashoffset={`${2 * Math.PI * 50 * (1 - progress / 100)}`}
                transform="rotate(-90 60 60)"
                style={{ transition: 'stroke-dashoffset 0.4s ease' }}
                className="progress-arc"
              />
              <defs>
                <linearGradient id="spinGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2E7D32"/>
                  <stop offset="1" stopColor="#81C784"/>
                </linearGradient>
              </defs>
            </svg>

            {/* Center content */}
            <div className="spinner-center">
              <div className="spinner-icon">🍀</div>
              <div className="spinner-percent">{Math.round(progress)}%</div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="loading-text">
          <h2 className="loading-title">Analyzing Your Food</h2>
          <p className="loading-subtitle">Our AI is processing the food label...</p>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-wrap">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Steps List */}
        <div className="loading-steps">
          {steps.map((step, index) => {
            const isDone = completedSteps.includes(index)
            const isCurrent = currentStep === index && !isDone
            return (
              <div
                key={index}
                className={`loading-step ${isDone ? 'done' : ''} ${isCurrent ? 'current' : ''} ${index > currentStep && !isDone ? 'pending' : ''}`}
              >
                <div className="step-status-icon">
                  {isDone ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : isCurrent ? (
                    <div className="step-spinner" />
                  ) : (
                    <div className="step-dot" />
                  )}
                </div>
                <span className="step-emoji">{step.icon}</span>
                <span className="step-text">{step.text}</span>
                {isDone && <span className="step-done-label">Done</span>}
              </div>
            )
          })}
        </div>

        {/* Tip */}
        <div className="loading-tip">
          <span>💡</span>
          <span>Using AI to compare against a database of 10,000+ food products</span>
        </div>
      </div>
    </div>
  )
}

export default Loading
