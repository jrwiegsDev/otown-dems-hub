// src/components/Navbar.jsx

import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LiveUserCount from './LiveUserCount';
import './Navbar.css';

const Navbar = () => {
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
        </div>
        
        <div className="navbar-right">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
