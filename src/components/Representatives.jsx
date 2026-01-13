// src/components/Representatives.jsx

import React, { useState } from 'react';

const Representatives = () => {
  const [level, setLevel] = useState('federal'); // 'federal' or 'state'
  const [chamber, setChamber] = useState('house'); // 'house' or 'senate'

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
      nextElection: 'March 17, 2026',
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
      nextElection: 'March 17, 2026',
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
      nextElection: 'March 17, 2026',
      phone: '(202) 225-5271',
      office: '1740 Longworth House Office Building',
      location: 'Washington, DC 20515',
      contactUrl: 'https://marymiller.house.gov/contact',
    },
  ];

  const ilHouseReps = [
    {
      name: 'C.D. Davidsmeyer',
      party: 'Republican',
      image: '/Davidsmeyer.png',
      district: '100th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-1840',
      office: '202-N Stratton Office Building',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/House/Members/Details/3304',
    },
    {
      name: 'Wayne Arthur Rosenthal',
      party: 'Republican',
      image: '/Rosenthal.png',
      district: '108th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-8071',
      office: 'E-1 Stratton Office Building',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/House/Members/Details/3434',
    },
    {
      name: 'Charles E. Meier',
      party: 'Republican',
      image: '/Meier.png',
      district: '109th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-6401',
      office: '200-5N Stratton Office Building',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/House/Members/Details/3305',
    },
    {
      name: 'Blaine Wilhour',
      party: 'Republican',
      image: '/Wilhour.png',
      district: '110th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-0066',
      office: '213-N Stratton Office Building',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/House/Members/Details/3365',
    },
    {
      name: 'Amy Elik',
      party: 'Republican',
      image: '/Elik.png',
      district: '111th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-5996',
      office: '204-N Stratton Office Building',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/House/Members/Details/3393',
    },
    {
      name: 'Katie Stuart',
      party: 'Democratic',
      image: '/Stuart.png',
      district: '112th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-8018',
      office: '278-S Stratton Office Building',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/House/Members/Details/3326',
    },
    {
      name: 'Jay C. Hoffman',
      party: 'Democratic',
      image: '/Hoffman.png',
      district: '113th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-0104',
      office: '300 Capitol Building',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/House/Members/Details/3306',
    },
    {
      name: 'Kevin Schmidt',
      party: 'Republican',
      image: '/Schmidt.png',
      district: '114th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-5951',
      office: '205-N Stratton Office Building',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/House/Members/Details/3436',
    },
    {
      name: 'David Friess',
      party: 'Republican',
      image: '/Friess.png',
      district: '115th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-1018',
      office: '216-N Stratton Office Building',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/House/Members/Details/3395',
    },
    {
      name: 'Dave Severin',
      party: 'Republican',
      image: '/Severin.png',
      district: '116th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-1051',
      office: '219-N Stratton Office Building',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/House/Members/Details/3324',
    },
  ];

  const ilSenateReps = [
    {
      name: 'Jil Tracy',
      party: 'Republican',
      image: '/Tracy.png',
      district: '50th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-2479',
      office: '208 B Capitol Building',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/Senate/Members/Details/3319',
    },
    {
      name: 'Steve McClure',
      party: 'Republican',
      image: '/McClure.png',
      district: '54th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-8206',
      office: 'Stratton Office Building, Section A, Office L',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/Senate/Members/Details/3342',
    },
    {
      name: 'Jason Plummer',
      party: 'Republican',
      image: '/Plummer.png',
      district: '55th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-5755',
      office: 'Stratton Office Building, Section A, Office M',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/Senate/Members/Details/3344',
    },
    {
      name: 'Erica Harriss',
      party: 'Republican',
      image: '/Harriss.png',
      district: '56th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-5247',
      office: 'Stratton Office Building, Section B, Office C',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/Senate/Members/Details/3411',
    },
    {
      name: 'Christopher Belt',
      party: 'Democratic',
      image: '/Belt.png',
      district: '57th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-5399',
      office: '417 B Capitol Building',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/Senate/Members/Details/3337',
    },
    {
      name: 'Terri Bryant',
      party: 'Republican',
      image: '/Bryant.png',
      district: '58th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-8137',
      office: 'Stratton Office Building, Section A, Office H',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/Senate/Members/Details/3386',
    },
    {
      name: 'Dale Fowler',
      party: 'Republican',
      image: '/Fowler.png',
      district: '59th',
      nextElection: 'March 17, 2026',
      phone: '(217) 782-5509',
      office: '208 Capitol Building',
      location: 'Springfield, IL 62706',
      contactUrl: 'https://www.ilga.gov/Senate/Members/Details/3318',
    },
  ];

  const currentReps = 
    level === 'federal' && chamber === 'senate' ? senators :
    level === 'federal' && chamber === 'house' ? houseReps :
    level === 'state' && chamber === 'senate' ? ilSenateReps :
    ilHouseReps;

  return (
    <div className="representatives-component">
      <h3>Your Representatives</h3>
      
      {/* First Level Filter: Federal vs State */}
      <div className="rep-filter-buttons">
        <button
          className={`rep-filter-btn ${level === 'federal' ? 'active' : ''}`}
          onClick={() => setLevel('federal')}
        >
          Federal
        </button>
        <button
          className={`rep-filter-btn ${level === 'state' ? 'active' : ''}`}
          onClick={() => setLevel('state')}
        >
          IL State
        </button>
      </div>

      {/* Second Level Filter: House vs Senate */}
      <div className="rep-filter-buttons" style={{ marginTop: '0.5rem' }}>
        <button
          className={`rep-filter-btn ${chamber === 'house' ? 'active' : ''}`}
          onClick={() => setChamber('house')}
        >
          House
        </button>
        <button
          className={`rep-filter-btn ${chamber === 'senate' ? 'active' : ''}`}
          onClick={() => setChamber('senate')}
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
                <p className="rep-contact-label">{level === 'state' ? 'Springfield Office' : 'Washington, D.C. Office'}</p>
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
            
            {/* IL House District 12 - Mike Bost */}
            {rep.name === 'Mike Bost' && (
              <div className="julie-callout-inline">
                <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}><strong>Democratic candidates running for this seat:</strong></p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href="https://www.juliefortier.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="julie-volunteer-button"
                    style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                  >
                    Julie Fortier
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

            {/* IL House District 111 - Amy Elik (R) vs Rosetta Brown (D) */}
            {rep.name === 'Amy Elik' && (
              <div className="julie-callout-inline">
                <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}><strong>Democratic candidates running for this seat:</strong></p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href="https://www.rosiebrownforillinoisstaterep111.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="julie-volunteer-button"
                    style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                  >
                    Rosetta Brown
                  </a>
                </div>
              </div>
            )}

            {/* IL House District 112 - Katie Stuart */}
            {rep.name === 'Katie Stuart' && (
              <div className="julie-callout-inline">
                <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}><strong>Democratic candidates running for this seat:</strong></p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href="https://www.stuartforilrep.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="julie-volunteer-button"
                    style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                  >
                    Katie Stuart
                  </a>
                </div>
              </div>
            )}

            {/* IL House District 113 - Jay C. Hoffman */}
            {rep.name === 'Jay C. Hoffman' && (
              <div className="julie-callout-inline">
                <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}><strong>Democratic candidates running for this seat:</strong></p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href="https://www.jayhoffman.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="julie-volunteer-button"
                    style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                  >
                    Jay Hoffman
                  </a>
                </div>
              </div>
            )}

            {/* IL Senate District 56 - Erica Harriss */}
            {rep.name === 'Erica Harriss' && (
              <div className="julie-callout-inline">
                <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}><strong>Democratic candidates running for this seat:</strong></p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href="https://www.marsieforillinois.info/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="julie-volunteer-button"
                    style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                  >
                    Marsia Geldert-Murphey
                  </a>
                  <a 
                    href="https://votekhall.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="julie-volunteer-button"
                    style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                  >
                    Kevin Hall
                  </a>
                </div>
              </div>
            )}

            {/* IL Senate District 57 - Christopher Belt */}
            {rep.name === 'Christopher Belt' && (
              <div className="julie-callout-inline">
                <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}><strong>Democratic candidates running for this seat:</strong></p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href="https://beltforsenate.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="julie-volunteer-button"
                    style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                  >
                    Christopher Belt
                  </a>
                </div>
              </div>
            )}

            {/* IL Senate District 59 - Dale Fowler */}
            {rep.name === 'Dale Fowler' && (
              <div className="julie-callout-inline">
                <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}><strong>Democratic candidates running for this seat:</strong></p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href="https://tc4si.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="julie-volunteer-button"
                    style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                  >
                    T.C. Mueller
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
