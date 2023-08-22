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
        <ul className='nav-bar'>
          <Link to='/' >
              <li className='nbar-buttons'>Home</li>
          </Link>
          <Link to='Details'>
              <li className='nbar-buttons'>Details</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
