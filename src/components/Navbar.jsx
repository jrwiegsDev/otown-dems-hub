// src/components/Navbar.jsx

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LiveUserCount from './LiveUserCount';
import './Navbar.css';

const Navbar = ({ snowfallFeatureEnabled, isSnowing, onStartSnow, onStopSnow }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <LiveUserCount />
        </div>

        {/* Hamburger button - visible on mobile only */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        <div className={`navbar-center ${isMenuOpen ? 'open' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/get-involved" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            Get Involved
          </NavLink>
          <NavLink 
            to="/resources" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            Resources
          </NavLink>
          <NavLink 
            to="/democracy-dashboard" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            Democracy Dashboard
          </NavLink>
        </div>
        
        <div className="navbar-right">
          {/* Snow Toggle Button - Only visible when feature is enabled by admin */}
          {snowfallFeatureEnabled && (
            <button
              onClick={isSnowing ? onStopSnow : onStartSnow}
              className="snow-toggle-button"
              aria-label={isSnowing ? "Stop snowing" : "Let it snow"}
            >
              {isSnowing ? 'Stop Snowing!' : 'Let It Snow!'}
            </button>
          )}
          <ThemeToggle />
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
