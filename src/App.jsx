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
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/971561663994"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Match Haven on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.729-1.465L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97-1.861-1.868-4.339-2.897-6.97-2.899-5.437 0-9.862 4.372-9.866 9.802-.001 1.83.479 3.619 1.393 5.187l-.951 3.478 3.585-.941zm10.222-3.841c-.272-.137-1.61-.795-1.86-.887-.248-.09-.43-.136-.61.137-.179.272-.694.887-.85 1.07-.156.18-.312.2-.584.063-.272-.138-1.15-.423-2.19-1.353-.81-.722-1.357-1.614-1.516-1.887-.159-.273-.017-.42.12-.556.123-.122.272-.319.408-.478.136-.159.182-.272.272-.455.09-.18.046-.339-.023-.478-.069-.138-.61-1.477-.836-2.023-.22-.53-.442-.458-.61-.466-.157-.008-.337-.01-.518-.01-.18 0-.474.068-.722.339-.248.272-.95.93-.95 2.268s.973 2.63 1.11 2.812c.137.18 1.914 2.923 4.636 4.103.648.28 1.153.447 1.547.572.651.207 1.243.178 1.71.108.521-.078 1.61-.658 1.837-1.296.226-.638.226-1.185.158-1.297-.068-.113-.248-.204-.52-.341z"/>
        </svg>
      </a>
    </div>
  )
}

export default App
