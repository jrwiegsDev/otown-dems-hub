// src/components/Banner.jsx

import React from 'react';

const Banner = () => {
  return (
    <div className="protest-banner"> {/* Keep the class name for styling */}
      <h2>Join Us for Our Monthly Meeting!</h2>
      <p>
        <strong>Date:</strong> Wednesday, October 22, 2025<br />
        <strong>Time:</strong> 6:30 PM<br />
        <strong>Location:</strong> O'Fallon KC Hall
      </p>
      <p>Thank you to everyone who showed up and made their voices heard at No Kings 2.0! Crowd estimates are between 695 - 750 people downtown!!!</p>
      <p>Please come out this coming Wednesday night for our monthly meeting!</p>
    </div>
  );
};

export default Banner;