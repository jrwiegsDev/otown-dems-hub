// src/components/Representatives.jsx

import React, { useState } from 'react';

const Representatives = () => {
  const [view, setView] = useState('house'); // 'house' or 'senate'

  const senators = [
    {
      name: 'Tammy Duckworth',
      party: 'Democratic',
      image: '/Duckworth.png',
      nextElection: 2028,
      district: null, // Senators don't have districts
    },
    {
      name: 'Dick Durbin',
      party: 'Democratic',
      image: '/Durbin.png',
      nextElection: 2026,
      district: null,
    },
  ];

  const houseReps = [
    {
      name: 'Mike Bost',
      party: 'Republican',
      image: '/Bost.png',
      district: '12th',
      nextElection: 2026,
    },
    {
      name: 'Nikki Budzinski',
      party: 'Democratic',
      image: '/Budzinski.png',
      district: '13th',
      nextElection: 2026,
    },
    {
      name: 'Mary Miller',
      party: 'Republican',
      image: '/Miller.png',
      district: '15th',
      nextElection: 2026,
    },
  ];

  const currentReps = view === 'senate' ? senators : houseReps;

  return (
    <div className="representatives-component">
      <h3>Your Representatives</h3>
      
      {/* Filter Buttons */}
      <div className="rep-filter-buttons">
        <button
          className={`rep-filter-btn ${view === 'house' ? 'active' : ''}`}
          onClick={() => setView('house')}
        >
          House
        </button>
        <button
          className={`rep-filter-btn ${view === 'senate' ? 'active' : ''}`}
          onClick={() => setView('senate')}
        >
          Senate
        </button>
      </div>

      {/* Representatives List */}
      <div className="representatives-list">
        {currentReps.map((rep, index) => (
          <div key={index} className="rep-card">
            <img 
              src={rep.image} 
              alt={rep.name}
              className="rep-photo"
            />
            <div className="rep-info">
              <h4 className="rep-name">{rep.name}</h4>
              {rep.district && (
                <p className="rep-district">District: {rep.district}</p>
              )}
              <p className={`rep-party ${rep.party.toLowerCase()}`}>
                {rep.party}
              </p>
              <p className="rep-election">Next Election: {rep.nextElection}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Julie Fortier Callout for House view */}
      {view === 'house' && (
        <div className="julie-callout">
          <p>
            <strong>Julie Fortier</strong> is running to replace Mike Bost in the 12th District!
          </p>
        </div>
      )}
    </div>
  );
};

export default Representatives;
