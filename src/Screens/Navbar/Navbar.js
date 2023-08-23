import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css'; // Import your custom styling here

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-text">Vision<span className="logo-accent">AI</span></span>
      </div>
      <div className="nav-links">
        <ul className='nav-bar'>
          <li>
            <Link to='/'> {/* Link to the Dashboard component */}
              Home
            </Link>
          </li>
          <li>
            <ScrollLink
              to="details-section" // This should match the ID of your Details component's section
              smooth={true}
              duration={500} // Duration of the scroll animation in milliseconds
              offset={-70} // Offset for the scrolled position (adjust as needed)
            >
              Details
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
