import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import './Navbar.css'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about', disabled: true },
  { name: 'Services', path: '/services' },
  { name: 'Blogs', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const heroMode = location.pathname === '/' && !scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 880) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className={`navbar ${heroMode ? 'navbar--hero' : 'navbar--light'} ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div 
        className={`navbar-backdrop ${isMenuOpen ? 'visible' : ''}`} 
        onClick={() => setIsMenuOpen(false)}
      />
      <div className="navbar-shell">
        <Link to="/" className="navbar-brand" aria-label="Match Haven home" onClick={() => setIsMenuOpen(false)}>
          <img className="navbar-logo" src="/logo-transparent.png" alt="Match Haven — Where Forever Begins" decoding="async" />
        </Link>

        <nav className={`navbar-menu ${isMenuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          <div className="mobile-menu-heading">
            <span>Explore Match Haven</span>
            <small>Thoughtful introductions. Enduring relationships.</small>
          </div>
          <div className="nav-links">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path
              if (item.disabled) {
                return (
                  <span key={item.name} className="nav-link nav-link-disabled" aria-disabled="true">
                    <span className="mobile-nav-index">0{index + 1}</span>
                    <span>{item.name}</span>
                  </span>
                )
              }
              return (
                <Link key={item.name} to={item.path} className={`nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
                  <span className="mobile-nav-index">0{index + 1}</span>
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
          <div className="navbar-mobile-ctas">
            <Link to="/contact" className="navbar-cta" onClick={() => setIsMenuOpen(false)}>Begin Your Journey <ArrowUpRight size={16} /></Link>
          </div>
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="navbar-cta">
            <span>Begin Your Journey</span><ArrowUpRight size={16} strokeWidth={1.7} />
          </Link>
        </div>

        <button 
          className="mobile-toggle" 
          disabled
          aria-expanded={false} 
          aria-label="Menu disabled"
          style={{ cursor: 'not-allowed', pointerEvents: 'none' }}
        >
          <Menu size={20} />
        </button>

      </div>
    </header>
  )
}

export default Navbar
