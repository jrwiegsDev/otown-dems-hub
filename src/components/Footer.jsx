// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} O'Fallon Area Democratic Club</p>
        
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy & Terms of Use</Link>
          
          <div className="asl-notice">
            🤟 ASL interpretation available - 
            <a href="mailto:ofallondems@gmail.com"> Contact us</a> 48 hours in advance
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;