import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyApp</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/login" className="btn-secondary">Login</Link></li>
        <li><Link to="/signup" className="btn-primary">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;