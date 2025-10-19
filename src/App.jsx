// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import all your components and pages
import Events from './components/Events';
import Banner from './components/Banner';
import MissionStatement from './components/MissionStatement';
import ThemeToggle from './components/ThemeToggle';
import MailingListSignup from './components/MailingListSignup';
import Donation from './components/Donation';
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
    
    {/* --- NEW UNIFIED GRID LAYOUT --- */}
    <div className="main-content-grid">
      
      {/* --- LEFT COLUMN (Q1 & Q3) --- */}
      <div className="grid-column">
        {/* Q1: Banner */}
        <div className="content-tile banner-tile">
          <Banner />
        </div>
        
        {/* Q3: Mailing List & Donations */}
        <div className="content-tile">
          <MailingListSignup />
        </div>
        
        <div className="content-tile donation-tile">
          <Donation />
        </div>
      </div>
      
      {/* --- RIGHT COLUMN (Q2 & Q4) --- */}
      <div className="grid-column">
        {/* Q2: Calendar */}
        <div className="content-tile calendar-tile">
          <Events />
        </div>

        {/* Q4: Mission & Socials */}
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