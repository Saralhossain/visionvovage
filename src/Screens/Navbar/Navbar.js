import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your custom styling here

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-text">Vision<span className="logo-accent">AI</span></span>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/details" className="nav-link">Details</Link>
      </div>
    </nav>
  );
};

export default Navbar;
