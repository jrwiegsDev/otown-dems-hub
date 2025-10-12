// src/components/Socials.jsx

import React from 'react';
// Import the specific icons we need from the Font Awesome set
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="socials-component">
      <h3>Follow Us</h3>
      <div className="socials-icon-container">
        <a href="https://www.facebook.com/ofallondemocrats" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/ofallon.dems" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@ofallon.dems" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
};

export default Socials;