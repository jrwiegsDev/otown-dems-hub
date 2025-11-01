// src/components/VoterInformation.jsx

import { useState } from 'react';
import './VoterInformation.css';

const VoterInformation = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="voter-info-container">
      <h2>🗳️ Voter Information</h2>
      <p className="voter-intro">
        Your guide to registration, polling locations, and upcoming elections in <strong>St. Clair County, Illinois</strong>.
      </p>

      {/* Key Election Dates - At Top, Always Visible */}
      <div className="election-dates">
        <h3>📅 2026 Election Dates</h3>
        <div className="dates-grid">
          <div className="date-item">
            <span className="date-label">Primary Election:</span>
            <span className="date-value">March 17, 2026</span>
          </div>
          <div className="date-item">
            <span className="date-label">General Election:</span>
            <span className="date-value">November 3, 2026</span>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="quick-links">
        <h3>Quick Access</h3>
        <div className="quick-links-buttons">
          <a 
            href="https://vr.platinumvrms.com/county/RSLRequest/6?t=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="quick-link-button"
          >
            Check Registration & Find Polling Place
          </a>
          <a 
            href="https://www.co.st-clair.il.us/departments/county-clerk/elections/vote-by-mail-information" 
            target="_blank" 
            rel="noopener noreferrer"
            className="quick-link-button"
          >
            Vote By Mail Information
          </a>
          <a 
            href="https://www.co.st-clair.il.us/departments/county-clerk/elections" 
            target="_blank" 
            rel="noopener noreferrer"
            className="quick-link-button"
          >
            St. Clair County Elections Office
          </a>
        </div>
      </div>

      {/* Senate Race */}
      <div className="info-section">
        <button 
          className={`section-header ${activeSection === 'senate' ? 'active' : ''}`}
          onClick={() => toggleSection('senate')}
        >
          <span>🏛️ U.S. Senate Race - Illinois 2026</span>
          <span className="toggle-icon">{activeSection === 'senate' ? '−' : '+'}</span>
        </button>
        {activeSection === 'senate' && (
          <div className="section-content">
            <p className="race-note">
              <strong>Incumbent:</strong> Dick Durbin (D) - Withdrew from Primary
            </p>
            
            <div className="candidates-section">
              <h4>Democratic Primary Candidates</h4>
              <ul className="candidate-list">
                <li>Steve Botsford</li>
                <li>Awisi Bustos</li>
                <li>Jonathan Dean</li>
                <li>Adam Delgado</li>
                <li>Robin Kelly</li>
                <li>Raja Krishnamoorthi</li>
                <li>Stanley Leavell</li>
                <li>Bryan Maxwell</li>
                <li>Robert Palmer</li>
                <li>Adair Rodriquez</li>
                <li>Kevin Ryan</li>
                <li>Jump Shepherd</li>
                <li>Juliana Stratton</li>
                <li>Christopher Swann</li>
              </ul>
            </div>

            <p className="info-note">
              <a 
                href="https://ballotpedia.org/United_States_Senate_elections,_2026" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View full 2026 U.S. Senate elections on Ballotpedia
              </a>
            </p>
          </div>
        )}
      </div>

      {/* House Elections */}
      <div className="info-section">
        <button 
          className={`section-header ${activeSection === 'house' ? 'active' : ''}`}
          onClick={() => toggleSection('house')}
        >
          <span>🏛️ U.S. House Elections 2026</span>
          <span className="toggle-icon">{activeSection === 'house' ? '−' : '+'}</span>
        </button>
        {activeSection === 'house' && (
          <div className="section-content">
            <div className="highlight-race">
              <h4>🎯 Illinois 12th District - Our Race to Win!</h4>
              <p><strong>Our Candidate:</strong> Julie Fortier (D)</p>
              <p><strong>Incumbent to Unseat:</strong> Mike Bost (R)</p>
              <p>
                The IL-12 race is crucial for our community. Julie Fortier represents our 
                values and the change we need in Washington. Let's work together to flip 
                this seat!
              </p>
              <p className="info-note">
                <a 
                  href="https://ballotpedia.org/Illinois%27_12th_Congressional_District_election,_2026" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Learn more about the IL-12 race
                </a>
              </p>
            </div>

            <div className="general-races">
              <h4>All Illinois House Races</h4>
              <p>
                Stay informed about all congressional races across Illinois in the 2026 
                midterm elections.
              </p>
              <p className="info-note">
                <a 
                  href="https://ballotpedia.org/United_States_House_of_Representatives_elections_in_Illinois,_2026" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View all Illinois House races on Ballotpedia
                </a>
              </p>
            </div>

            <p className="info-note" style={{ marginTop: '1rem' }}>
              <a 
                href="https://ballotpedia.org/United_States_House_of_Representatives_elections,_2026" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View nationwide 2026 House elections
              </a>
            </p>
          </div>
        )}
      </div>

      {/* Contact Info */}
      <div className="contact-section">
        <h3>Need Help?</h3>
        <p><strong>Voter Integrity Hotline:</strong></p>
        <p>📞 <a href="tel:618-825-2366">618-825-2366</a></p>
        <p>
          ✉️ <a href="mailto:voterIntegrity@stclaircountyil.gov">
            voterIntegrity@stclaircountyil.gov
          </a>
        </p>
      </div>
    </div>
  );
};

export default VoterInformation;
