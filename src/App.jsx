// src/App.jsx

import './App.css'
import Events from './components/Events'
import Banner from './components/Banner'
import MissionStatement from './components/MissionStatement'
import ThemeToggle from './components/ThemeToggle'
import MailingListSignup from './components/MailingListSignup' // <-- 1. Import it

function App() {
  return (
    <div className="main-container">
      <ThemeToggle />
      <h1 className="main-heading"> {/* Added a class for styling */}
        <img src="/OADC_logo.jpg" alt="OADC Logo" className="header-logo left" />
        O'Fallon Area Democratic Club
        <img src="/OADC_logo.jpg" alt="OADC Logo" className="header-logo right" />
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

        {/* --- Column 2 (25% width) --- */}
        <div className="layout-column">
          <div className="content-tile">
            <MissionStatement />
          </div>
          <div className="content-tile placeholder">
            <h3>Placeholder</h3>
            <p>Space for future content.</p>
          </div>
        </div>

        {/* --- Column 3 (25% width) --- */}
        <div className="layout-column">
           <div className="content-tile"> {/* <-- 2. Replace the placeholder */}
            <MailingListSignup />
          </div>
           <div className="content-tile placeholder">
            <h3>Placeholder</h3>
            <p>Space for future content.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;