// src/components/Donation.jsx

import React from 'react';

const Donation = () => {
  return (
    // A React Fragment (<>) is used here because the parent div in App.jsx provides the tile styling.
    <>
      <h3>Donate to the O'Fallon Democrats Club</h3>
      <p>Your contribution fuels our local efforts to promote progressive values and support Democratic candidates.</p>
      <a 
        href="https://secure.actblue.com/donate/o-fallon-democrats-club-1" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="donation-button"
      >
        Donate via ActBlue
      </a>
    </>
  );
};

export default Donation;