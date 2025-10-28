// src/components/PetitionsAndCalls.jsx

import './PetitionsAndCalls.css';

const PetitionsAndCalls = () => {
  return (
    <div className="petitions-calls-tile">
      <h2>📞 Petitions & Calls</h2>
      <p className="intro-text">
        Make your voice heard through petitions and direct calls to representatives.
      </p>
      
      <div className="petitions-resources">
        {/* 5 Calls */}
        <div className="resource-item">
          <h3>5 Calls</h3>
          <a href="https://5calls.org/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/5-Calls.png" 
              alt="5 Calls" 
              className="resource-logo"
            />
          </a>
          <p>
            Calling your representative is the most effective way to make your voice heard. 5 Calls provides 
            scripts and contact information to make it easy. Congressional staffers tally phone calls right 
            away—far faster than emails, faxes, or letters.
          </p>
          <a 
            href="https://5calls.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resource-link"
          >
            Start Making Calls →
          </a>
        </div>
      </div>
    </div>
  );
};

export default PetitionsAndCalls;
