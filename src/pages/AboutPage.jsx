// src/pages/AboutPage.jsx

import MissionStatement from '../components/MissionStatement';
import Socials from '../components/Socials';

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
            <p>
              Content coming soon - meet our leadership team and board members.
            </p>
          </div>
        </div>

        <div className="grid-column">
          <div className="content-tile">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
