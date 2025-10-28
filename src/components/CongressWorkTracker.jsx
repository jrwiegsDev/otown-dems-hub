// src/components/CongressWorkTracker.jsx

import { useState } from 'react';
import './CongressWorkTracker.css';

const CongressWorkTracker = () => {
  // Left EARLY for August recess: July 22, 2025
  // Returned from recess: September 2, 2025  
  // Government Shutdown began: October 1, 2025
  const recessStartDate = new Date('2025-07-22');
  const today = new Date();
  
  // Calculate total days since leaving for August recess
  const totalDaysSinceRecess = Math.floor((today - recessStartDate) / (1000 * 60 * 60 * 24));
  
  const currentYear = 2025;
  const data = {
    house: {
      daysInSession: 33, // Approximate working days since return (Sept 2 - Oct 28)
      totalDays: totalDaysSinceRecess, // Dynamically calculated from July 22
      averageSalary: 174000,
      leadershipSalary: {
        speaker: 223500,
        majority: 193400,
        minority: 193400
      }
    },
    senate: {
      daysInSession: 33, // Approximate working days since return (Sept 2 - Oct 28)
      totalDays: totalDaysSinceRecess, // Dynamically calculated from July 22
      averageSalary: 174000,
      leadershipSalary: {
        majority: 193400,
        minority: 193400
      }
    }
  };

  const calculatePercentage = (days, total) => {
    return ((days / total) * 100).toFixed(1);
  };

  const calculateDailyPay = (annualSalary) => {
    return (annualSalary / 365).toFixed(2);
  };

  return (
    <div className="congress-tracker">
      <h2>⏰ Congress Work Tracker</h2>
      <p className="tracker-subtitle">
        They left 3 days EARLY for a 6-week vacation, then failed to fund the government.
      </p>

      <div className="accountability-box">
        <p><strong>The Reality:</strong> Congress left EARLY on July 22, 2025 (scheduled for July 25) for a 6-week August recess. 
        After returning on September 2nd, they worked approximately 33 days before failing to pass funding legislation, 
        triggering a government shutdown on October 1st. Since July 22nd, they've collected full salaries 
        ($174,000/year = $476.71/day) while barely working.</p>
        <p className="action-text">
          <strong>They cannot escape accountability for their inaction.</strong>
        </p>
      </div>

      {/* House of Representatives */}
      <div className="chamber-section">
        <h3>🏛️ House of Representatives</h3>
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-value">{data.house.daysInSession}</div>
            <div className="stat-label">Days in Session</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{data.house.totalDays}</div>
            <div className="stat-label">Days Since July 22 (Left Early)</div>
          </div>
          <div className="stat-box highlight">
            <div className="stat-value">{calculatePercentage(data.house.daysInSession, data.house.totalDays)}%</div>
            <div className="stat-label">Work Rate</div>
          </div>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${calculatePercentage(data.house.daysInSession, data.house.totalDays)}%` }}
          />
        </div>

        <div className="salary-info">
          <p><strong>Member Salary:</strong> ${data.house.averageSalary.toLocaleString()}/year 
            (${calculateDailyPay(data.house.averageSalary)}/day)</p>
          <p><strong>Speaker Salary:</strong> ${data.house.leadershipSalary.speaker.toLocaleString()}/year</p>
          <p><strong>Leadership Salary:</strong> ${data.house.leadershipSalary.majority.toLocaleString()}/year</p>
        </div>
      </div>

      {/* Senate */}
      <div className="chamber-section">
        <h3>🏛️ Senate</h3>
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-value">{data.senate.daysInSession}</div>
            <div className="stat-label">Days in Session</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{data.senate.totalDays}</div>
            <div className="stat-label">Days Since July 22 (Left Early)</div>
          </div>
          <div className="stat-box highlight">
            <div className="stat-value">{calculatePercentage(data.senate.daysInSession, data.senate.totalDays)}%</div>
            <div className="stat-label">Work Rate</div>
          </div>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${calculatePercentage(data.senate.daysInSession, data.senate.totalDays)}%` }}
          />
        </div>

        <div className="salary-info">
          <p><strong>Senator Salary:</strong> ${data.senate.averageSalary.toLocaleString()}/year 
            (${calculateDailyPay(data.senate.averageSalary)}/day)</p>
          <p><strong>Leadership Salary:</strong> ${data.senate.leadershipSalary.majority.toLocaleString()}/year</p>
        </div>
      </div>

      <p className="update-note">
        Last Updated: {new Date().toLocaleDateString()} • Tracking since July 22, 2025 (left EARLY for 6-week recess) • Shutdown began Oct 1
      </p>
    </div>
  );
};

export default CongressWorkTracker;
