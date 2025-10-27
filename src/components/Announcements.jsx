// src/components/Announcements.jsx

import React from 'react';

const Announcements = () => {
  return (
    <div className="announcements-section">
      <h3>Community Announcements</h3>
      <div className="announcement-content">
        <h4 style={{ color: 'var(--accent-blue)', marginTop: 0, marginBottom: '0.5rem' }}>
          Join Us for the Petition Signing for George McClellan!
        </h4>
        <p style={{ marginBottom: '0.75rem' }}>
          <strong>Date:</strong> Monday, October 27, 2025<br />
          <strong>Time:</strong> 9:30 AM - 10:30 AM<br />
          <strong>Location:</strong> The Coffeehouse Company<br />
          <em>1333 Central Park Dr, O'Fallon, IL 62269-1775</em>
        </p>
        <p style={{ marginBottom: '0.75rem' }}>
          We've got another opportunity to support a strong Democratic candidate for our area: <strong>George McClellan</strong> still needs signatures to get on the ballot to challenge Kevin Schmidt as IL State House Rep for the 114th!
        </p>
        <p style={{ marginBottom: '0.75rem' }}>
          After decades spent serving our community as Asst Chief of the ESTL Fire Dept, trauma nurse at the BJC ICU, and the Vice President of the ESTL NAACP, Mr McClellan is now ready to serve as the IL State Rep for the 114th.
        </p>
        <p>
          Kendra will be enjoying a delicious coffee and treat at The Coffeehouse Company in O'Fallon from 9:30 - 10:30; come grab a cup of coffee and sign George's petition so our community can have the strong Democratic representation we deserve!
        </p>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: 0 }}>
          (Note: The Coffeehouse Company isn't affiliated with our club or this event, we just love their coffee!)
        </p>
      </div>
    </div>
  );
};

export default Announcements;
