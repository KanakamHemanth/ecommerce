import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          MRUH<span>.</span>
        </Link>
        
        <div className="navbar-menu">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            About
          </NavLink>
        </div>

        <div className="navbar-actions">
          <Link to="/login" className="btn-glass">Login</Link>
          <Link to="/signup" className="btn-gradient">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;