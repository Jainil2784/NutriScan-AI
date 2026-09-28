import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './AnalyzeFood.css'

const AnalyzeFood = ({ uploadedImage, setUploadedImage, selectedCategory }) => {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [imageError, setImageError] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
    // Redirect if no category selected
    if (!selectedCategory) {
      navigate('/select-category')
    }
  }, [])

  const handleFileSelect = (file) => {
    setImageError('')
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setImageError('Please upload a valid image file (JPG, PNG, WEBP).')
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      setImageError('File size should be less than 10 MB.')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      setUploadedImage(e.target.result)
    }
    reader.readAsDataURL(file)
  }

  const handleInputChange = (e) => {
    const file = e.target.files[0]
    handleFileSelect(file)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => setIsDragOver(false)

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    const file = e.dataTransfer.files[0]
    handleFileSelect(file)
  }

  const handleAnalyze = () => {
    if (uploadedImage) {
      navigate('/loading')
    }
  }

  const handleOpenCamera = () => {
    // Mock camera — for demo, just trigger file input with camera capture
    if (fileInputRef.current) {
      fileInputRef.current.setAttribute('capture', 'environment')
      fileInputRef.current.click()
    }
  }

  const clearImage = () => {
    setUploadedImage(null)
    setImageError('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const categoryLabel = {
    fit: '💪 Fit',
    underweight: '⚡ Underweight',
    overweight: '🏃 Overweight',
    obese: '🛡️ Obese',
  }[selectedCategory] || ''

  return (
    <div className="analyze-page">
      <div className="af-bg-orb af-orb-1" />
      <div className="af-bg-orb af-orb-2" />

      <div className="container-sm">
        {/* Step Indicator */}
        <div className="step-indicator animate-fadeInUp">
          <span className="step done">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </span>
          <div className="step-line done-line" />
          <span className="step active">2</span>
          <div className="step-line" />
          <span className="step">3</span>
        </div>

        {/* Header */}
        <div className="af-header animate-fadeInUp delay-1">
          <h1 className="af-title">Analyze Food Product</h1>
          <p className="af-desc">
            Upload or capture the <strong>back-side image</strong> of a packaged food product
            to begin AI-powered nutrition analysis.
          </p>
          {selectedCategory && (
            <div className="af-category-chip">
              Profile: <strong>{categoryLabel}</strong>
            </div>
          )}
        </div>

        {/* Upload Area */}
        <div
          className={`upload-area animate-scaleIn delay-2 ${isDragOver ? 'drag-over' : ''} ${uploadedImage ? 'has-image' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => !uploadedImage && fileInputRef.current?.click()}
          id="upload-area"
        >
          {!uploadedImage ? (
            <div className="upload-placeholder">
              {/* Camera SVG Illustration */}
              <div className="camera-illustration">
                <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Camera body */}
                  <rect x="10" y="25" width="100" height="65" rx="10" fill="url(#camGrad)" opacity="0.15"/>
                  <rect x="10" y="25" width="100" height="65" rx="10" fill="none" stroke="url(#camGrad)" strokeWidth="2.5"/>

                  {/* Viewfinder bump */}
                  <rect x="40" y="15" width="40" height="18" rx="6" fill="url(#camGrad)" opacity="0.15"/>
                  <rect x="40" y="15" width="40" height="18" rx="6" fill="none" stroke="url(#camGrad)" strokeWidth="2"/>

                  {/* Lens outer ring */}
                  <circle cx="60" cy="57" r="22" fill="url(#lensGrad)" opacity="0.12"/>
                  <circle cx="60" cy="57" r="22" stroke="url(#camGrad)" strokeWidth="2.5"/>

                  {/* Lens inner */}
                  <circle cx="60" cy="57" r="14" fill="url(#lensGrad)" opacity="0.25"/>
                  <circle cx="60" cy="57" r="14" stroke="url(#camGrad)" strokeWidth="1.5"/>
                  <circle cx="60" cy="57" r="7" fill="url(#camGrad)" opacity="0.6"/>

                  {/* Flash */}
                  <rect x="80" y="34" width="16" height="10" rx="4" fill="url(#camGrad)" opacity="0.5"/>

                  {/* Corner scan marks */}
                  <path d="M18 40 L18 32 L26 32" stroke="url(#camGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <path d="M102 40 L102 32 L94 32" stroke="url(#camGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <path d="M18 75 L18 83 L26 83" stroke="url(#camGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <path d="M102 75 L102 83 L94 83" stroke="url(#camGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

                  <defs>
                    <linearGradient id="camGrad" x1="10" y1="15" x2="110" y2="90" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2E7D32"/>
                      <stop offset="1" stopColor="#4CAF50"/>
                    </linearGradient>
                    <linearGradient id="lensGrad" x1="38" y1="35" x2="82" y2="79" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#81C784"/>
                      <stop offset="1" stopColor="#2E7D32"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <h3 className="upload-title">
                {isDragOver ? 'Drop your image here!' : 'Upload Food Label Image'}
              </h3>
              <p className="upload-hint">
                Drag & drop or <span className="upload-browse">browse files</span>
              </p>
              <p className="upload-formats">Supports JPG, PNG, WEBP · Max 10MB</p>
            </div>
          ) : (
            <div className="image-preview">
              <img src={uploadedImage} alt="Uploaded food label" className="preview-img" />
              <div className="preview-overlay">
                <button
                  className="preview-remove"
                  onClick={(e) => { e.stopPropagation(); clearImage() }}
                  id="remove-image-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  Remove
                </button>
              </div>
              <div className="preview-success-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Image Ready
              </div>
            </div>
          )}
        </div>

        {/* Error */}
        {imageError && (
          <div className="upload-error animate-scaleIn">
            ⚠️ {imageError}
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleInputChange}
          style={{ display: 'none' }}
          id="file-input"
        />

        {/* Upload Buttons */}
        <div className="upload-buttons animate-fadeInUp delay-3">
          <button
            className="btn btn-outline upload-btn"
            onClick={() => fileInputRef.current?.click()}
            id="upload-image-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            Upload Image
          </button>

          <button
            className="btn btn-outline upload-btn"
            onClick={handleOpenCamera}
            id="open-camera-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
            Open Camera
          </button>
        </div>

        {/* Demo Notice */}
        {!uploadedImage && (
          <div className="demo-notice animate-fadeInUp delay-4">
            <span>💡</span>
            <span>
              <strong>Demo Mode:</strong> Upload any image to simulate food label scanning.
              Mock results will be displayed for demonstration.
            </span>
          </div>
        )}

        {/* Analyze Button */}
        <div className="af-actions animate-fadeInUp delay-4">
          <button
            className="btn btn-primary btn-lg af-analyze"
            onClick={handleAnalyze}
            disabled={!uploadedImage}
            id="analyze-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            Analyze Food
          </button>
          {!uploadedImage && (
            <p className="af-hint">Upload an image to enable analysis</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AnalyzeFood
