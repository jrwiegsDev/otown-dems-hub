// src/components/GovernmentShutdownCounter.jsx

import { useState, useEffect } from 'react';
import './GovernmentShutdownCounter.css';

const GovernmentShutdownCounter = () => {
  // October 1, 2025 at 12:00 AM EDT - Federal government shutdown began
  // Set to null if no shutdown is active
  const shutdownStartDate = new Date('2025-10-01T00:00:00-04:00');
  
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (!shutdownStartDate) return;

    const calculateTime = () => {
      const now = new Date();
      const diff = now - shutdownStartDate;
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [shutdownStartDate]);

  if (!shutdownStartDate) {
    return (
      <div className="shutdown-counter">
        <h2>🏛️ Government Shutdown Tracker</h2>
        <div className="no-shutdown">
          <p className="status-message">No active government shutdown at this time.</p>
          <p className="info-text">
            This tracker will activate if the federal government enters a shutdown. 
            A shutdown occurs when Congress fails to pass funding legislation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="shutdown-counter active">
      <h2>🚨 Government Shutdown</h2>
      <p className="shutdown-subtitle">
        The Republican-controlled Congress has failed to fund the government.
      </p>

      <p className="accountability-note">
        <strong>Remember:</strong> Republicans control both the House and Senate. 
        They cannot escape accountability for this failure.
      </p>
      
      <div className="counter-display">
        <div className="counter-item">
          <div className="counter-value">{timeElapsed.days}</div>
          <div className="counter-label">Days</div>
        </div>
        <div className="counter-separator">:</div>
        <div className="counter-item">
          <div className="counter-value">{timeElapsed.hours}</div>
          <div className="counter-label">Hours</div>
        </div>
        <div className="counter-separator">:</div>
        <div className="counter-item">
          <div className="counter-value">{timeElapsed.minutes}</div>
          <div className="counter-label">Minutes</div>
        </div>
        <div className="counter-separator">:</div>
        <div className="counter-item">
          <div className="counter-value">{timeElapsed.seconds}</div>
          <div className="counter-label">Seconds</div>
        </div>
      </div>

      <div className="shutdown-impact">
        <p><strong>Impact:</strong></p>
        <ul>
          <li>~900,000 federal employees furloughed</li>
          <li>~2 million working without pay</li>
          <li>NIH, CDC, and WIC programs suspended</li>
          <li>Longest full government shutdown in U.S. history</li>
        </ul>
      </div>

      <div className="shutdown-info">
        <h3>What is a Government Shutdown?</h3>
        <p>
          A federal government shutdown happens when Congress fails to pass funding legislation 
          or a continuing resolution. Agencies must halt non-essential operations, furlough employees, 
          and rely on contingency plans until lawmakers resolve the funding gap.
        </p>
        
        <h3>What Happens During a Shutdown?</h3>
        <p><strong>Essential services continue:</strong> Defense, Social Security, air traffic control, 
        and other critical operations keep running, though workers may face delayed pay.</p>
        <p><strong>Public programs pause:</strong> National parks, permitting offices, and many 
        administrative services are suspended. Contractors and support staff face furloughs.</p>

        <h3>Resources for Federal Workers & Citizens</h3>
        <ul>
          <li>
            <a href="https://www.usa.gov/" target="_blank" rel="noopener noreferrer">
              USA.gov shutdown updates
            </a> for citizens and small businesses
          </li>
          <li>
            <a href="https://www.opm.gov/" target="_blank" rel="noopener noreferrer">
              OPM furlough guidance
            </a> for federal employees and leave policies
          </li>
          <li>
            <a href="https://www.dol.gov/" target="_blank" rel="noopener noreferrer">
              Department of Labor resources
            </a> on federal paychecks and unemployment assistance
          </li>
        </ul>

        <p className="info-credit">
          Information and resources adapted from{' '}
          <a href="https://www.governmentshutdown2025.com/" target="_blank" rel="noopener noreferrer">
            GovernmentShutdown2025.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default GovernmentShutdownCounter;
