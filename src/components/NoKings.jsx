// src/components/NoKings.jsx

import React from 'react';

const NoKings = () => {
  return (
    <div className="no-kings-tile">
      <h3>No Kings</h3>
      <a href="https://www.nokings.org/" target="_blank" rel="noopener noreferrer">
        <img 
          src="/No-Kings_logo.png" 
          alt="No Kings Logo" 
          className="no-kings-logo"
        />
      </a>
      <p>
        The "No Kings" movement is a nationwide, peaceful resistance born from protests against authoritarianism, mobilizing millions to defend our democracy.
      </p>
      <p>Thank you to everyone who showed up and made their voices heard at No Kings 2.0! Crowd estimates are between 695 - 750 people downtown!!!</p>
      <a 
        href="https://www.nokings.org/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="no-kings-link"
      >
        Learn More & Take Action →
      </a>
    </div>
  );
};

export default NoKings;
