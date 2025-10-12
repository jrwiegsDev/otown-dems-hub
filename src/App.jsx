// src/App.jsx

import './App.css'
import Events from './components/Events'
import Banner from './components/Banner'
import MissionStatement from './components/MissionStatement'
import ThemeToggle from './components/ThemeToggle'
import MailingListSignup from './components/MailingListSignup'
import Socials from './components/Socials' // <-- 1. Import Socials

function App() {
  return (
    <div className="main-container">
      <ThemeToggle />
      <h1 className="main-heading">
        <img src="/OTown-Dems_logo.png" alt="O'Fallon Area Dems Logo" className="header-logo left" />
        O'Fallon Area Democratic Club
        <img src="/OTown-Dems_logo.png" alt="O'Fallon Area Dems Logo" className="header-logo right" />
      </h1>
      
      <div className="main-layout">
        
        {/* --- Column 1 (50% width) --- */}
        <div className="layout-column">
          <div className="content-tile banner-tile">
            <Banner />
          </div>
          <div className="content-tile calendar-tile">
            <Events />
          </div>
        </div>

        {/* --- Column 2 (25% width) - REARRANGED --- */}
        <div className="layout-column">
          <div className="content-tile placeholder">
            <h3>Support Our Cause</h3>
            <p>Donations section coming soon. We'll link to our official ActBlue page here.</p>
          </div>
          <div className="content-tile">
            <MissionStatement />
          </div>
        </div>

        {/* --- Column 3 (25% width) --- */}
        <div className="layout-column">
           <div className="content-tile">
            <MailingListSignup />
          </div>
           <div className="content-tile"> {/* <-- 2. Replace Placeholder */}
            <Socials />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;