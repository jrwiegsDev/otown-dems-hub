// src/components/NeedSupport.jsx

import './NeedSupport.css';

const NeedSupport = () => {
  return (
    <div className="need-support-tile">
      <h2>💙 Need Support?</h2>
      <p className="intro-text">
        These local organizations are here to help our community members in O'Fallon and Shiloh.
      </p>
      
      <div className="support-resources">
        {/* O'Fallon Food Pantry */}
        <div className="resource-item">
          <h3>O'Fallon Food Pantry</h3>
          <a href="https://ofallonfoodpantry.org/home" target="_blank" rel="noopener noreferrer">
            <img 
              src="/OTown-Food-Pantry.png" 
              alt="O'Fallon Food Pantry" 
              className="resource-logo"
            />
          </a>
          <p>
            <strong>Serving the community since 1992.</strong> A volunteer-run organization providing 
            supplemental food assistance to O'Fallon and Shiloh residents experiencing food insecurity. 
            Services available once every 30 days.
          </p>
          <p>
            <strong>What we provide:</strong> Canned goods, fresh meat, milk, eggs, and personal hygiene items. 
            In 2019, we served an average of 265 families (759 people) monthly—9,103 clients for the year.
          </p>
          <p>
            <strong>Requirements:</strong> Photo ID and proof of residency (utility bill, government letter, 
            or lease) no older than 90 days. Services available every 30 days.
          </p>
          <p>
            <strong>Hours:</strong> Monday 9 AM–12 PM • Tuesday 9 AM–3 PM • Friday 9 AM–3 PM
          </p>
          <p>
            <strong>Volunteer opportunities:</strong> Pantry shifts (ages 14+ with guardian, 16+ without), 
            food pickup/unload, and food drive events. Orientations held the fourth Thursday of each month at 1 PM.
          </p>
          <a 
            href="https://ofallonfoodpantry.org/home" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resource-link"
          >
            Visit Food Pantry →
          </a>
        </div>

        {/* Hattie's Helping Hands */}
        <div className="resource-item">
          <h3>Hattie's Helping Hands NFP</h3>
          <a href="https://hattieshelpinghandsnfp.org/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/Hatties-Helping-Hands.png" 
              alt="Hattie's Helping Hands" 
              className="resource-logo"
            />
          </a>
          <p>
            <strong>Mission:</strong> "Act as if what you do makes a difference, because it does." 
            Supporting families and individuals in our community through various programs and services.
          </p>
          <p>
            <strong>Programs & Services:</strong>
          </p>
          <ul>
            <li><strong>School Supplies</strong> – Annual drive providing essential tools for student success</li>
            <li><strong>Thanksgiving Baskets</strong> – Complete holiday meals including turkey and all the fixings</li>
            <li><strong>Christmas Toy Drive</strong> – New toys for children during the holidays</li>
            <li><strong>College Readiness</strong> – Dorm supplies for first-time college students</li>
            <li><strong>Achieving Scholars Rewards</strong> – Recognition for students with highest GPAs</li>
            <li><strong>Girls On Fire</strong> – Teen mentoring program building confidence and leadership</li>
            <li><strong>Hattie's Essentials</strong> – Toiletries and hygiene products for students in need</li>
            <li><strong>Hattie's Extensions</strong> – Custom wigs for cancer patients experiencing hair loss</li>
            <li><strong>Community Services</strong> – Breast cancer awareness events, spa experiences, CPR classes, and notary services</li>
          </ul>
          <p>
            <strong>Volunteer & Donate:</strong> Year-round opportunities to donate toiletries, socks, and 
            essential items to nursing homes, senior centers, and shelters. Various community events throughout the year.
          </p>
          <a 
            href="https://hattieshelpinghandsnfp.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resource-link"
          >
            Learn More & Get Involved →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NeedSupport;
