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

      {/* Upcoming Primary Election Information */}
      <div className="info-section">
        <button 
          className={`section-header ${activeSection === 'primary' ? 'active' : ''}`}
          onClick={() => toggleSection('primary')}
        >
          <span>🗳️ March 17, 2026 General Primary Election</span>
          <span className="toggle-icon">{activeSection === 'primary' ? '−' : '+'}</span>
        </button>
        {activeSection === 'primary' && (
          <div className="section-content">
            <div className="important-dates">
              <h4>Important Deadlines</h4>
              <ul>
                <li><strong>Last day to register:</strong> February 17, 2026</li>
                <li><strong>All forms must be turned in by:</strong> February 18, 2026</li>
              </ul>
            </div>

            <div className="early-voting-info">
              <h4>Early Voting</h4>
              <p><strong>Dates:</strong> February 5 - March 16, 2026</p>
              <p><strong>Hours:</strong> Monday - Friday, 8:30 AM - 5:00 PM</p>
              
              <h5>Permanent Early Voting Sites:</h5>
              <ol>
                <li>St. Clair County Clerk's Office, Election Department, 2nd Floor, 10 Public Square, Belleville</li>
                <li>The Rec Complex, 9950 Bunkum Rd., Fairview Heights</li>
                <li>O'Fallon Township Office, 801 East State St., O'Fallon</li>
                <li>Jerome Early Childhood Center (Gym), 1825 Jerome Ln., Cahokia Heights</li>
              </ol>

              <h5>Extended Hours:</h5>
              <p><strong>Weekdays:</strong></p>
              <ul>
                <li>March 2-6: 9 AM - 5 PM</li>
                <li>March 9-13: 9 AM - 7 PM</li>
                <li>March 16: 9 AM - 7 PM</li>
              </ul>
              <p><strong>Weekends:</strong></p>
              <ul>
                <li>Saturday, March 7: 9 AM - Noon | Sunday, March 8: 10 AM - 4 PM</li>
                <li>Saturday, March 14: 9 AM - 5 PM | Sunday, March 15: 10 AM - 4 PM</li>
              </ul>
            </div>

            <div className="election-day-info">
              <h4>Election Day - March 17, 2026</h4>
              <p><strong>Polling Hours:</strong> 6:00 AM - 7:00 PM</p>
              <p className="note-text">
                <em>Note: The County building will be closed February 16, 2026 for President's Day, 
                but voting in-person at the County Clerk's Office is available on March 17, 2026 
                from 6 AM to 7 PM.</em>
              </p>
            </div>

            <div className="voting-age-reminder">
              <h4>Special Voting Age Rule for Primary Elections</h4>
              <p>
                <strong>10 ILCS 5/7-44:</strong> An individual who is 17 years of age on the date 
                of a primary election and who is otherwise qualified to vote and will be 18 years 
                of age on or before the date of the immediately following General Election is 
                qualified to vote at that primary.
              </p>
            </div>

            <div className="additional-info">
              <p>
                <strong>Contact Election Department:</strong><br />
                Phone: <a href="tel:618-277-6600,2367">618-277-6600, Extension 2367</a><br />
                Website: <a href="https://www.stclaircountyil.gov/departments/county-clerk" target="_blank" rel="noopener noreferrer">
                  www.stclaircountyil.gov/departments/county-clerk
                </a>
              </p>
            </div>
          </div>
        )}
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
