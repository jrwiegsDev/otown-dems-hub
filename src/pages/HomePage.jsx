// src/pages/HomePage.jsx

import Events from '../components/Events';
import Banner from '../components/Banner';
import Announcements from '../components/Announcements';
import MailingListSignup from '../components/MailingListSignup';
import Donation from '../components/Donation';
import Representatives from '../components/Representatives';
import WeeklyPoll from '../components/WeeklyPoll';

const HomePage = () => {
  return (
    <>
      <h1 className="main-heading">
        <img src="/OTown-Dems_logo.png" alt="O'Fallon Area Dems Logo" className="header-logo left" />
          O'Fallon Area Democratic Club
        <img src="/OTown-Dems_logo.png" alt="O'Fallon Area Dems Logo" className="header-logo right" />
      </h1>
      
      {/* --- NEW UNIFIED GRID LAYOUT --- */}
      <div className="main-content-grid">
        
        {/* --- COLUMN 1: INFORMATIONAL --- */}
        <div className="grid-column">
          {/* Banner */}
          <div className="content-tile banner-tile">
            <Banner />
          </div>

          {/* Announcements */}
          <div className="content-tile">
            <Announcements />
          </div>
        </div>
        
        {/* --- COLUMN 2: CALENDAR (MIDDLE - WIDER) --- */}
        <div className="grid-column">
          {/* Calendar */}
          <div className="content-tile calendar-tile">
            <Events />
          </div>

          {/* Representatives */}
          <div className="content-tile">
            <Representatives />
          </div>
        </div>
        
        {/* --- COLUMN 3: ACTION --- */}
        <div className="grid-column">
          {/* Weekly Poll */}
          <div className="content-tile">
            <WeeklyPoll />
          </div>

          {/* Mailing List */}
          <div className="content-tile">
            <MailingListSignup />
          </div>

          {/* Donation */}
          <div className="content-tile donation-tile">
            <Donation />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default HomePage;
