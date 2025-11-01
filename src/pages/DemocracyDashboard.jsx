// src/pages/DemocracyDashboard.jsx

import { useState } from 'react';
import RecognizeFascism from '../components/RecognizeFascism';
import GovernmentShutdownCounter from '../components/GovernmentShutdownCounter';
import CongressWorkTracker from '../components/CongressWorkTracker';
import SpendingTracker from '../components/SpendingTracker';
import Project2025Tracker from '../components/Project2025Tracker';
import './DemocracyDashboard.css';

const DemocracyDashboard = () => {
  const [activeFilter, setActiveFilter] = useState('congress');

  return (
    <div className="page-container democracy-dashboard-page">
      <h1>Democracy Dashboard</h1>


      <div className="dashboard-filters">
        <button
          className={`filter-button ${activeFilter === 'congress' ? 'active' : ''}`}
          onClick={() => setActiveFilter('congress')}
        >
          🏛️ Congress
        </button>
        <button
          className={`filter-button ${activeFilter === 'administration' ? 'active' : ''}`}
          onClick={() => setActiveFilter('administration')}
        >
          🏢 Administration
        </button>
      </div>
      
      {activeFilter === 'congress' && (
        <div className="congress-grid">
          {/* Column 1 */}
          <div className="grid-column">
            <div className="content-tile">
              <GovernmentShutdownCounter />
            </div>
          </div>

          {/* Column 2 */}
          <div className="grid-column">
            <div className="content-tile">
              <CongressWorkTracker />
            </div>
          </div>
        </div>
      )}

      {activeFilter === 'administration' && (
        <div className="administration-grid">
          {/* Left Column */}
          <div className="grid-column">
            <div className="content-tile">
              <SpendingTracker />
            </div>
          </div>

          {/* Right Column */}
          <div className="grid-column">
            <div className="content-tile">
              <Project2025Tracker />
            </div>
            
            <div className="content-tile">
              <RecognizeFascism />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemocracyDashboard;
