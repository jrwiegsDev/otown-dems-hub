// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} O'Fallon Area Democratic Club</p>
      <Link to="/privacy-policy">Privacy Policy & Terms of Use</Link>
    </footer>
  );
};

export default Footer;