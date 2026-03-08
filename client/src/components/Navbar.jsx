import { useState } from 'react'
import logo from "../assets/logo2.jpeg"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Schools', href: '#schools' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo" aria-label="UniForm Pro home">
          <img 
            src = {logo}
            alt="Kidwoo Uniforms"
            className='navbar-logo'
          />
        </a>

        <div className="navbar-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} role="menu">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            role="menuitem"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
