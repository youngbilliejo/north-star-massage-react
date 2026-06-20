import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    // Dynamic header image or content if needed
  }, [location]);

  return (
    <header>
      <div className="logo">North Star Massage</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/benefits">Benefits</Link>
        <Link to="/services">Services & Rates</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/scheduling">Scheduling</Link>
        <Link to="/faq">FAQ</Link>
      </nav>
      {/* Header content will be in page components */}
    </header>
  );
};

export default Header;
