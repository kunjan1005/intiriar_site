import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <img 
                src="/images/Miirus White.png" 
                alt="MIIRUS" 
                className="logo-img"
                onError={(e) => {
                  // Fallback if image doesn't exist - show text
                  e.target.style.display = 'none';
                  if (!e.target.nextSibling) {
                    const fallback = document.createElement('h2');
                    fallback.textContent = 'MIRUS';
                    fallback.className = 'logo-fallback';
                    e.target.parentNode.appendChild(fallback);
                  }
                }}
              />
            </div>
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
              <li><a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
              <li><a href="#portfolio" className="nav-link" onClick={(e) => handleNavClick(e, '#portfolio')}>Portfolio</a></li>
              <li><a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
              <li><a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, '#services')}>Services</a></li>
              <li><a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
            </ul>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Overlay for mobile/tablet */}
      {isMenuOpen && (
        <div 
          className="nav-overlay"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;







