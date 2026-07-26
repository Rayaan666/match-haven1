import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import './Navbar.css'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Services',
    path: '/services',
    disabled: true,
    children: [
      {
        name: 'Premier Introductions for Families',
        description: 'Private, family-inclusive matchmaking',
        path: '/services/premier-introductions-for-families',
      },
      {
        name: 'Signature Match Events',
        description: 'Invitation-only curated gatherings',
        path: '/services/signature-match-events',
      },
    ],
  },
  { name: 'Blogs', path: '/blog', disabled: true },
  { name: 'Contact', path: '/contact', disabled: true },
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
              const isActive = location.pathname === item.path || (
                item.children && location.pathname.startsWith(`${item.path}/`)
              )
              if (item.children) {
                return (
                  <div className="nav-item nav-item--has-submenu" key={item.name}>
                    {item.disabled ? (
                      <span className="nav-link nav-link-disabled" aria-disabled="true">
                        <span className="mobile-nav-index">0{index + 1}</span>
                        <span>{item.name}</span>
                        <ChevronDown className="nav-link__chevron" size={13} strokeWidth={1.6} aria-hidden="true" />
                      </span>
                    ) : (
                      <Link
                        to={item.path}
                        className={`nav-link ${isActive ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="mobile-nav-index">0{index + 1}</span>
                        <span>{item.name}</span>
                        <ChevronDown className="nav-link__chevron" size={13} strokeWidth={1.6} aria-hidden="true" />
                      </Link>
                    )}
                    <div className="services-submenu">
                      <span className="services-submenu__eyebrow">Signature Services</span>
                      {item.children.map((child) => (
                        <span
                          className="services-submenu__link services-submenu__link--disabled"
                          key={child.path}
                          style={{ cursor: 'default' }}
                        >
                          <span>
                            <strong>{child.name}</strong>
                            <small>{child.description}</small>
                          </span>
                          <ArrowUpRight size={15} strokeWidth={1.5} />
                        </span>
                      ))}
                      <span className="services-submenu__all services-submenu__all--disabled" style={{ cursor: 'default' }}>
                        View all services
                        <ArrowUpRight size={13} strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                )
              }

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
            <span className="navbar-cta navbar-cta--disabled" aria-disabled="true">Begin Your Journey <ArrowUpRight size={16} /></span>
          </div>
        </nav>

        <div className="navbar-actions">
          <span className="navbar-cta navbar-cta--disabled" aria-disabled="true">
            <span>Begin Your Journey</span><ArrowUpRight size={16} strokeWidth={1.7} />
          </span>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-expanded={isMenuOpen} 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>
    </header>
  )
}

export default Navbar
