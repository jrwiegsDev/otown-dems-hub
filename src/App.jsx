// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import all your components and pages
import Events from './components/Events';
import Banner from './components/Banner';
import MissionStatement from './components/MissionStatement';
import ThemeToggle from './components/ThemeToggle';
import MailingListSignup from './components/MailingListSignup';
import Socials from './components/Socials';
import Footer from './components/Footer';
import PolicyPage from './pages/PolicyPage';

// This component defines the layout for your main homepage
const MainPage = () => (
  <>
    <h1 className="main-heading">
      <img src="/OTown-Dems_logo.png" alt="O'Fallon Area Dems Logo" className="header-logo left" />
        O'Fallon Area Democratic Club
      <img src="/OTown-Dems_logo.png" alt="O'Fallon Area Dems Logo" className="header-logo right" />
    </h1>
    
    {/* --- Section 1: Top Row --- */}
    <div className="top-section">
      <div className="content-tile banner-tile">
        <Banner />
      </div>
      <div className="content-tile calendar-tile">
        <Events />
      </div>
    </div>

    {/* --- Bottom Sections (2 & 3) --- */}
    <div className="bottom-section">
      {/* Section 2: Lower Left Column */}
      <div className="layout-column">
        {/* Mailing list is now the only tile here */}
        <div className="content-tile">
          <MailingListSignup />
        </div>
      </div>
      
      {/* Section 3: Lower Right Column */}
      <div className="layout-column">
        <div className="content-tile placeholder">
          <h3>Support Our Cause</h3>
          <p>Donations section coming soon. We'll link to our official ActBlue page here.</p>
        </div>
        {/* Mission statement moves here */}
        <div className="content-tile">
          <MissionStatement />
        </div>
        <div className="content-tile">
          <Socials />
        </div>
      </div>
    </div>
  </>
);

function App() {
  return (
    <div className="main-container">
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy-policy" element={<PolicyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;