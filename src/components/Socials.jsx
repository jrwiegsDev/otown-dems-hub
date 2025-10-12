// src/components/Socials.jsx

import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="socials-component">
      <h3>Follow Us</h3>
      <div className="socials-icon-container">
        <a href="https://www.facebook.com/ofallondemocrats" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/ofallon.dems" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@ofallon.dems" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <FaTiktok />
        </a>
        <a href="mailto:ofallondems@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Socials;