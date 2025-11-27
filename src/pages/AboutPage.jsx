// src/pages/AboutPage.jsx

import MissionStatement from '../components/MissionStatement';
import Socials from '../components/Socials';
import Donation from '../components/Donation';
import AboutThisSite from '../components/AboutThisSite';

const AboutPage = () => {
  return (
    <div className="page-container about-page">
      <h1>About O'Fallon Area Democratic Club</h1>
      
      <div className="main-content-grid">
        <div className="grid-column">
          <div className="content-tile">
            <MissionStatement />
          </div>

          <div className="content-tile">
            <AboutThisSite />
          </div>
        </div>

        <div className="grid-column">
          <div className="content-tile">
            <h2 style={{ color: 'var(--accent-blue)', textAlign: 'center' }}>Official Club Merch!</h2>
            <p style={{ textAlign: 'center', marginBottom: '1rem' }}>
              Show your support with our official club t-shirt! <strong>$5 from every purchase</strong> goes directly to the O'Fallon Area Democratic Club!
            </p>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <img 
                src="/t-shirt_design-1.png" 
                alt="O'Fallon Area Democratic Club T-Shirt Design" 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '300px', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                }} 
              />
            </div>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <a 
                href="https://www.kgdesignsofficial.com/category/ofallon-area-democratic-club" 
                target="_blank" 
                rel="noopener noreferrer"
                className="donation-button"
                style={{ display: 'inline-block' }}
              >
                Shop Now!
              </a>
            </div>
            <p style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0' }}>
              Design by <a href="https://www.kgdesignsofficial.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--link-color)' }}>KG Designs</a>
            </p>
          </div>

          <div className="content-tile">
            <h2>Leadership</h2>
            
            <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--accent-blue)', fontSize: '1.1rem' }}>
              Executive Board
            </h3>
            <ul style={{ marginTop: '0.5rem' }}>
              <li>President: <strong>Dennis Muyleart</strong></li>
              <li>Vice President: <strong>Roy Carney</strong></li>
              <li>Youth Engagement Chair: <strong>Andrea Fohne</strong></li>
            </ul>

            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-blue)', fontSize: '1.1rem' }}>
              Community Outreach
            </h3>
            <ul style={{ marginTop: '0.5rem' }}>
              <li>Co-Chair, Secretary: <strong>Sarah L. Cunningham</strong></li>
              <li>Co-Chair, Secretary: <strong>Kendra Paulson</strong></li>
              <li>Co-Chair, Technology: <strong>Joe Wiegert</strong></li>
            </ul>
          </div>
        </div>

        <div className="grid-column">
          <div className="content-tile">
            <Socials />
          </div>

          <div className="content-tile donation-tile">
            <Donation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
