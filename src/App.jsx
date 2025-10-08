// src/App.jsx

import './App.css';
import Events from './components/Events';
import Banner from './components/Banner';
import MissionStatement from './components/MissionStatement';
import ThemeToggle from './components/ThemeToggle'; // <-- Import Toggle

function App() {
  return (
    <div className="main-container">
      <ThemeToggle />
      <h1>O'Fallon Dems Club Hub</h1>
      
      {/* This is now our three-column container */}
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
           <div className="content-tile placeholder">
            <h3>Placeholder</h3>
            <p>Space for future content.</p>
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