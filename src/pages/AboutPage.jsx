// src/pages/AboutPage.jsx

import MissionStatement from '../components/MissionStatement';
import Socials from '../components/Socials';
import Donation from '../components/Donation';
import AboutThisSite from '../components/AboutThisSite';

const AboutPage = () => {
  return (
    <div className="page-container">
      <h1>About O'Fallon Area Democratic Club</h1>
      
      <div className="main-content-grid">
        <div className="grid-column">
          <div className="content-tile">
            <MissionStatement />
          </div>
        </div>

        <div className="grid-column">
          <div className="content-tile">
            <h2>Leadership</h2>
            
            <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--accent-blue)', fontSize: '1.1rem' }}>
              Executive Board
            </h3>
            <ul style={{ marginTop: '0.5rem' }}>
              <li>President: <strong>Dennis Muyleart</strong></li>
              <li>Vice President: <strong>Roy Carney</strong></li>
              <li>Youth Engagement Chair: <strong>Andrea Fohne</strong></li>
            </ul>

            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-blue)', fontSize: '1.1rem' }}>
              Community Outreach
            </h3>
            <ul style={{ marginTop: '0.5rem' }}>
              <li>Co-Chair, Secretary: <strong>Sarah L. Cunningham</strong></li>
              <li>Co-Chair, Secretary: <strong>Kendra Paulson</strong></li>
              <li>Co-Chair, Technology: <strong>Joe Wiegert</strong></li>
            </ul>
          </div>

          <div className="content-tile">
            <AboutThisSite />
          </div>
        </div>

        <div className="grid-column">
          <div className="content-tile">
            <Socials />
          </div>

          <div className="content-tile donation-tile">
            <Donation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
