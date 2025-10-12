// src/components/Banner.jsx

import React from 'react';

const Banner = () => {
  return (
    <div className="protest-banner">
      <h2>
        Join Us for the <a href="https://www.mobilize.us/mobilize/event/840695/" target="_blank" rel="noopener noreferrer">
          No Kings 2 Protest!!!
        </a>
      </h2>
      <p>
        <strong>Date:</strong> Saturday, October 18, 2025
        <br />
        <strong>Time:</strong> 9:00 AM - 10:30 AM
        <br />
        <strong>Location:</strong> O'Fallon City Hall
      </p>
      {/* NEW: Image added here */}
      <img 
        src="/No-Kings-2.png" 
        alt="Map of No Kings 2 Protests" 
        className="protest-map-image" 
      />
    </div>
  );
};

export default Banner;