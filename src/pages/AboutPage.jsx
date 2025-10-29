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
            <ul>
              <li>President: <strong>Dennis Muyleart</strong></li>
              <li>Vice President: <strong>Roy Carney</strong></li>
              <li>Community Outreach: <strong>Sarah L. Cunningham</strong></li>
              <li>Community Outreach: <strong>Kendra Paulson</strong></li>
              <li>Youth Engagement Chair: <strong>Andrea Fohne</strong></li>
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
