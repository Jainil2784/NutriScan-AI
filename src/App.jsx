import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import SelectCategory from './pages/SelectCategory.jsx'
import AnalyzeFood from './pages/AnalyzeFood.jsx'
import Loading from './pages/Loading.jsx'
import Results from './pages/Results.jsx'
import About from './pages/About.jsx'
import './styles/global.css'

function AppContent() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [uploadedImage, setUploadedImage] = useState(null)
  const location = useLocation()

  const isLoadingPage = location.pathname === '/loading'

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-category" element={
            <SelectCategory
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          } />
          <Route path="/analyze" element={
            <AnalyzeFood
              uploadedImage={uploadedImage}
              setUploadedImage={setUploadedImage}
              selectedCategory={selectedCategory}
            />
          } />
          <Route path="/loading" element={<Loading />} />
          <Route path="/results" element={
            <Results
              selectedCategory={selectedCategory}
              uploadedImage={uploadedImage}
            />
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      {!isLoadingPage && <Footer />}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
