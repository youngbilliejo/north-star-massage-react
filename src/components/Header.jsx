import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">North Star Massage</div>
      
      {/* Hamburger Button - Mobile Only */}
      <button 
        className="hamburger" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/benefits">Benefits</Link>
        <Link to="/services">Services & Rates</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/scheduling">Scheduling</Link>
        <Link to="/faq">FAQ</Link>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/benefits" onClick={() => setMenuOpen(false)}>Benefits</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services & Rates</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/scheduling" onClick={() => setMenuOpen(false)}>Scheduling</Link>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
        </div>
      )}
    </header>
  );
};

export default Header;