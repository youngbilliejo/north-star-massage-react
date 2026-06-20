import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>Quick Links</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/benefits">Benefits</Link></li>
        <li><Link to="/services">Services & Rates</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/scheduling">Scheduling</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
