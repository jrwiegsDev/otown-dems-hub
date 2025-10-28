// src/components/ActiveOrganizations.jsx

import './ActiveOrganizations.css';

const ActiveOrganizations = () => {
  return (
    <div className="active-orgs-tile">
      <h2>🎯 Active Organizations</h2>
      <p className="intro-text">
        Join these organizations working to defend democracy and civil rights across America.
      </p>
      
      <div className="active-orgs-resources">
        {/* No Kings */}
        <div className="resource-item">
          <h3>No Kings</h3>
          <a href="https://www.nokings.org/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/No-Kings_logo.png" 
              alt="No Kings" 
              className="resource-logo"
            />
          </a>
          <p>
            A nationwide, peaceful resistance born from protests against authoritarianism, mobilizing 
            millions to defend our democracy. Thank you to everyone who showed up at No Kings 2.0!
          </p>
          <a 
            href="https://www.nokings.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resource-link"
          >
            Learn More & Take Action →
          </a>
        </div>

        {/* Swing Left */}
        <div className="resource-item">
          <h3>Swing Left</h3>
          <a href="https://swingleft.org/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/Swing-Left.png" 
              alt="Swing Left" 
              className="resource-logo"
            />
          </a>
          <p>
            Turn your outrage into action by helping Democrats win the most competitive House races. 
            Swing Left identifies key races and mobilizes volunteers to make a difference where it matters most.
          </p>
          <a 
            href="https://swingleft.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resource-link"
          >
            Get Involved →
          </a>
        </div>

        {/* ACLU */}
        <div className="resource-item">
          <h3>ACLU</h3>
          <a href="https://www.aclu.org/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/ACLU.png" 
              alt="ACLU" 
              className="resource-logo"
            />
          </a>
          <p>
            The American Civil Liberties Union defends and preserves individual rights and liberties 
            guaranteed by the Constitution and laws of the United States. Fighting for justice for over 100 years.
          </p>
          <a 
            href="https://www.aclu.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resource-link"
          >
            Support the ACLU →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActiveOrganizations;
