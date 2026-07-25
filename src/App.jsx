import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home/Home'
import AboutPage from './pages/About/AboutPage'
import ServicesPage from './pages/Services/ServicesPage'
import FamilyIntroductionsPage from './pages/FamilyIntroductions/FamilyIntroductionsPage'
import SignatureEventsPage from './pages/SignatureEvents/SignatureEventsPage'
import BlogPage from './pages/Blog/BlogPage'
import ContactPage from './pages/Contact/ContactPage'
import LegalPage from './pages/Legal/LegalPage'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/premier-introductions-for-families" element={<FamilyIntroductionsPage />} />
          <Route path="/services/signature-match-events" element={<SignatureEventsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<LegalPage />} />
          <Route path="/terms" element={<LegalPage />} />
          <Route path="/guidelines" element={<LegalPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
