// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import all your components and pages
import Events from './components/Events';
import Banner from './components/Banner';
import MissionStatement from './components/MissionStatement';
import ThemeToggle from './components/ThemeToggle';
import LiveUserCount from './components/LiveUserCount';
import MailingListSignup from './components/MailingListSignup';
import Donation from './components/Donation';
import Socials from './components/Socials';
import NoKings from './components/NoKings';
import Representatives from './components/Representatives';
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
    
    {/* --- NEW UNIFIED GRID LAYOUT --- */}
    <div className="main-content-grid">
      
      {/* --- COLUMN 1 --- */}
      <div className="grid-column">
        {/* Banner */}
        <div className="content-tile banner-tile">
          <Banner />
        </div>
        
        {/* Mailing List */}
        <div className="content-tile">
          <MailingListSignup />
        </div>
      </div>
      
      {/* --- COLUMN 2 (MIDDLE - WIDER) --- */}
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
      
      {/* --- COLUMN 3 --- */}
      <div className="grid-column">
        {/* No Kings */}
        <div className="content-tile">
          <NoKings />
        </div>

        {/* Mission Statement */}
        <div className="content-tile">
          <MissionStatement />
        </div>

        {/* Donation */}
        <div className="content-tile donation-tile">
          <Donation />
        </div>

        {/* Socials */}
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
      <LiveUserCount />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy-policy" element={<PolicyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;