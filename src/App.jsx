import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import ServicesPage from './pages/Services/ServicesPage'
import FamilyIntroductionsPage from './pages/FamilyIntroductions/FamilyIntroductionsPage'
import BlogPage from './pages/Blog/BlogPage'
import ContactPage from './pages/Contact/ContactPage'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const target = e.target.closest('a, button');
      if (target) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    document.addEventListener('click', handleGlobalClick, true);
    return () => {
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/premier-introductions-for-families" element={<FamilyIntroductionsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
