import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(15, 12, 41, 0.7)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      padding: '16px 40px',
    }}>
      <div className="flex justify-between items-center max-w-6xl mx-auto">

        {/* Logo */}
        <Link to="/" style={{
          fontSize: '22px',
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #ec4899, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textDecoration: 'none'
        }}>
          DevDou PH
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} style={{
                color: location.pathname === link.to ? '#ec4899' : '#d1d5db',
                textDecoration: 'none',
                transition: 'color 0.3s',
                fontWeight: location.pathname === link.to ? '600' : '400',
              }}
                onMouseEnter={e => e.target.style.color = '#ec4899'}
                onMouseLeave={e => e.target.style.color = location.pathname === link.to ? '#ec4899' : '#d1d5db'}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Us Button Desktop */}
        <Link to="/contact" className="hidden md:block" style={{
          background: 'linear-gradient(90deg, #ec4899, #a855f7)',
          boxShadow: '0 0 20px rgba(236,72,153,0.4)',
          borderRadius: '999px',
          padding: '10px 24px',
          fontSize: '14px',
          fontWeight: '600',
          color: 'white',
          textDecoration: 'none',
          transition: 'all 0.3s'
        }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 35px rgba(236,72,153,0.7)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(236,72,153,0.4)'}
        >
          Hire Us
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span style={{ fontSize: '24px' }}>{isOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          background: 'rgba(15,12,41,0.95)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '20px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {links.map((link) => (
            <Link key={link.to} to={link.to}
              onClick={() => setIsOpen(false)}
              style={{
                color: location.pathname === link.to ? '#ec4899' : '#d1d5db',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '500'
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact"
            onClick={() => setIsOpen(false)}
            style={{
              background: 'linear-gradient(90deg, #ec4899, #a855f7)',
              borderRadius: '999px',
              padding: '12px 24px',
              textAlign: 'center',
              color: 'white',
              fontWeight: '600',
              textDecoration: 'none'
            }}
          >
            Hire Us
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar