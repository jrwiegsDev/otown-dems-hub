// src/components/Navbar.jsx

import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LiveUserCount from './LiveUserCount';
import './Navbar.css';

const Navbar = ({ snowfallFeatureEnabled, isSnowing, onStartSnow, onStopSnow }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <LiveUserCount />
        </div>
        
        <div className="navbar-center">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            About
          </NavLink>
          <NavLink 
            to="/get-involved" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Get Involved
          </NavLink>
          <NavLink 
            to="/resources" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Resources
          </NavLink>
          <NavLink 
            to="/democracy-dashboard" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
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
    </nav>
  );
};

export default Navbar;
