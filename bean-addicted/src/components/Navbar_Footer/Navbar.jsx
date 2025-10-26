import { useState, useEffect } from 'react';
import './Navbar.css';
import BeanAddictedLogo from '../Bean_Files/BeanAddictedLogo.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > 50);

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setMenuOpen(false); // Close menu when scrolling down
    }
    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={BeanAddictedLogo} alt="Bean Addicted Logo" className="logo-image" />
        </div>
        
        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>HOME</a>
          <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>CONTACT US</a>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;