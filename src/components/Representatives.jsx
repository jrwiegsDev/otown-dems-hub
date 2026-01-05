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
              <div className="julie-callout-inline">
                <p>
                  <strong>Julie Fortier</strong> is running to replace <strong className="mike-bost-red">Mike Bost</strong> in the 12th District!
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                  <a 
                    href="https://www.juliefortier.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="julie-volunteer-button"
                  >
                    Visit Julie's Website!
                  </a>
                  <a 
                    href="https://volunteer4julie.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="julie-volunteer-button"
                  >
                    Sign Up to Volunteer!
                  </a>
                </div>
              </div>
            )}

            {/* Democratic Candidates for Dick Durbin's Senate seat */}
            {rep.name === 'Dick Durbin' && (
              <div className="julie-callout-inline">
                <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}><strong>Democratic candidates running for this seat:</strong></p>
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="https://www.botsfordforillinois.com/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.85rem', padding: '0.4rem 0.75rem' }}>
                    Steve Botsford Jr.
                  </a>
                  <a href="https://www.seanbrownforsenate.com/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.85rem', padding: '0.4rem 0.75rem' }}>
                    Sean Brown
                  </a>
                  <a href="https://awisiforussenate.us/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.85rem', padding: '0.4rem 0.75rem' }}>
                    Awisi Bustos
                  </a>
                  <a href="https://www.dean4il.com/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.85rem', padding: '0.4rem 0.75rem' }}>
                    Jonathan Dean
                  </a>
                  <a href="https://www.robinforsenate.com/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.85rem', padding: '0.4rem 0.75rem' }}>
                    Robin Kelly
                  </a>
                  <a href="https://rajaforil.com/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.85rem', padding: '0.4rem 0.75rem' }}>
                    Raja Krishnamoorthi
                  </a>
                  <a href="https://www.maxwell4senate.com/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.85rem', padding: '0.4rem 0.75rem' }}>
                    Bryan Maxwell
                  </a>
                  <a href="https://www.runwithkev.com/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.85rem', padding: '0.4rem 0.75rem' }}>
                    Kevin Ryan
                  </a>
                  <a href="https://www.julianastratton.com/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.85rem', padding: '0.4rem 0.75rem' }}>
                    Juliana Stratton
                  </a>
                  <a href="https://www.swannforsenate.com/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.85rem', padding: '0.4rem 0.75rem' }}>
                    Christopher Swann
                  </a>
                </div>
              </div>
            )}

            {/* Democratic Candidates for Nikki Budzinski's seat */}
            {rep.name === 'Nikki Budzinski' && (
              <div className="julie-callout-inline">
                <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}><strong>Democratic candidates running for this seat:</strong></p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="https://nikkiforcongress.com/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                    Nikki Budzinski
                  </a>
                  <a href="https://www.dylanforillinois.com/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                    Dylan Blaha
                  </a>
                  <a href="https://www.drluxforcongress.com/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                    Dr. Emily Lux
                  </a>
                </div>
              </div>
            )}

            {/* Democratic Candidates for Mary Miller's seat */}
            {rep.name === 'Mary Miller' && (
              <div className="julie-callout-inline">
                <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}><strong>Democratic candidates running for this seat:</strong></p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="https://www.pauldavisforcongress.com/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                    Paul Davis
                  </a>
                  <a href="https://kyleforillinois.com/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                    Kyle Nudo
                  </a>
                  <a href="https://electraley.com/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                    Randy Raley
                  </a>
                  <a href="https://www.jentodd2026.us/" target="_blank" rel="noopener noreferrer" className="julie-volunteer-button" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                    Jennifer Todd
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Representatives;
