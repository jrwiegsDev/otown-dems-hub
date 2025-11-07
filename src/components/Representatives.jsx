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
      phone: '(202) 224-2854',
      office: '524 Hart Senate Office Building',
      location: 'Washington, DC 20510',
      contactUrl: 'https://www.duckworth.senate.gov/help/email-tammy',
    },
    {
      name: 'Dick Durbin',
      party: 'Democratic',
      image: '/Durbin.png',
      nextElection: '2026 (Retiring)',
      district: null,
      phone: '(202) 224-2152',
      office: '711 Hart Senate Office Building',
      location: 'Washington, DC 20510',
      contactUrl: 'https://www.durbin.senate.gov/contact/',
    },
  ];

  const houseReps = [
    {
      name: 'Mike Bost',
      party: 'Republican',
      image: '/Bost.png',
      district: '12th',
      nextElection: 2026,
      phone: '(202) 225-5661',
      office: '352 Cannon House Office Building',
      location: 'Washington, DC 20515',
      contactUrl: 'https://bost.house.gov/contact',
    },
    {
      name: 'Nikki Budzinski',
      party: 'Democratic',
      image: '/Budzinski.png',
      district: '13th',
      nextElection: 2026,
      phone: '(202) 225-2371',
      office: '1717 Longworth House Office Building',
      location: 'Washington, DC 20515',
      contactUrl: 'https://budzinski.house.gov/contact',
    },
    {
      name: 'Mary Miller',
      party: 'Republican',
      image: '/Miller.png',
      district: '15th',
      nextElection: 2026,
      phone: '(202) 225-5271',
      office: '1740 Longworth House Office Building',
      location: 'Washington, DC 20515',
      contactUrl: 'https://marymiller.house.gov/contact',
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
          <div key={index}>
            <div className="rep-card">
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
              <div className="rep-contact">
                <p className="rep-contact-label">Washington, D.C. Office</p>
                <p className="rep-contact-info">{rep.office}</p>
                <p className="rep-contact-info">{rep.location}</p>
                <p className="rep-contact-info">{rep.phone}</p>
                <a 
                  href={rep.contactUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rep-contact-link"
                >
                  Contact →
                </a>
              </div>
            </div>
            
            {/* Julie Fortier Callout for Mike Bost */}
            {rep.name === 'Mike Bost' && (
              <>
                <div className="julie-callout-inline">
                  <p>
                    <strong>Julie Fortier</strong> is running to replace <strong className="mike-bost-red">Mike Bost</strong> in the 12th District!
                  </p>
                </div>
                <div className="julie-callout-inline">
                  <p>
                    Interested in volunteering for <strong>Julie's</strong> campaign?
                  </p>
                  <a 
                    href="https://volunteer4julie.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="julie-volunteer-button"
                  >
                    Sign Up Here!
                  </a>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Representatives;
