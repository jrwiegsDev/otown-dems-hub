// src/components/Project2025Tracker.jsx

import { useState } from 'react';
import './Project2025Tracker.css';

const Project2025Tracker = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Data from Project2025.observer - tracking 319 total objectives
  const trackerStats = {
    totalObjectives: 319,
    completed: 121,
    inProgress: 66,
    overallProgress: 48 // Updated from project2025.observer (Oct 28, 2025)
  };

  const agencyProgress = [
    { name: "USAID", objectives: 6, progress: 100 },
    { name: "CFTC - Commodity Futures Trading Commission", objectives: 1, progress: 100 },
    { name: "CPB - Corporation for Public Broadcasting", objectives: 1, progress: 100 },
    { name: "White House", objectives: 13, progress: 92 },
    { name: "Dept. of State", objectives: 10, progress: 80 },
    { name: "Dept. of the Interior", objectives: 15, progress: 67 },
    { name: "USAGM - U.S. Agency for Global Media", objectives: 3, progress: 67 },
    { name: "Dept. of Justice", objectives: 18, progress: 58 },
    { name: "EPA - Environmental Protection Agency", objectives: 15, progress: 57 },
    { name: "Personnel", objectives: 7, progress: 57 },
    { name: "Dept. of Homeland Security", objectives: 35, progress: 56 },
    { name: "Dept. of Defense", objectives: 13, progress: 54 },
    { name: "IC - Intelligence Community", objectives: 5, progress: 50 },
    { name: "Housing and Urban Development", objectives: 7, progress: 50 },
    { name: "CFPB - Consumer Financial Protection Bureau", objectives: 1, progress: 50 },
    { name: "Dept. of Education", objectives: 23, progress: 46 },
    { name: "Dept. of Energy", objectives: 19, progress: 45 },
    { name: "Dept. of Commerce", objectives: 10, progress: 45 },
    { name: "Dept. of the Treasury", objectives: 15, progress: 40 },
    { name: "Dept. of Transportation", objectives: 7, progress: 36 },
    { name: "Dept. of Health and Human Services", objectives: 22, progress: 34 },
    { name: "Dept. of Labor", objectives: 19, progress: 34 },
    { name: "Dept. of Agriculture", objectives: 17, progress: 29 },
    { name: "CMS - Centers for Medicare & Medicaid Services", objectives: 7, progress: 29 },
    { name: "CDC - Centers for Disease Control and Prevention", objectives: 8, progress: 25 },
    { name: "Securities and Exchange Commission", objectives: 4, progress: 25 },
    { name: "SBA - Small Business Administration", objectives: 2, progress: 25 },
    { name: "Dept. of Veterans Affairs", objectives: 5, progress: 20 },
    { name: "FCC - Federal Communications Commission", objectives: 3, progress: 17 },
    { name: "FTC - Federal Trade Commission", objectives: 2, progress: 0 },
    { name: "FEC - Federal Election Commission", objectives: 2, progress: 0 },
    { name: "Federal Reserve", objectives: 2, progress: 0 },
    { name: "NIH - National Institutes of Health", objectives: 1, progress: 0 },
    { name: "FDA - Food and Drug Administration", objectives: 1, progress: 0 }
  ];

  const project2025Items = [
    {
      category: "Federal Workforce",
      goal: "Centralize control over federal bureaucracy, eliminate DEI programs, weaken federal employee unions",
      status: "In Progress",
      progress: 100,
      actions: [
        "Created hiring committees to vet job candidates for 'alignment' with White House priorities (Oct 13, 2025)",
        "HHS terminated 80+ contracts related to diversity, equity, inclusion and accessibility (July 18, 2025)",
        "OPM issued memo allowing federal workers to promote religious beliefs to colleagues (July 23, 2025)"
      ]
    },
    {
      category: "Education",
      goal: "Abolish Department of Education, eradicate 'woke propaganda,' promote school vouchers",
      status: "In Progress",
      progress: 100,
      actions: [
        "Laid off entire Office of Special Education and Rehabilitative Services, eliminating IDEA compliance oversight (Oct 6, 2025)",
        "Dept. of Education cut contracts to support students with disabilities and low-income schools (July 18, 2025)",
        "Rescinded Equity in IDEA regulations through mass layoffs of enforcement staff"
      ]
    },
    {
      category: "Reproductive Rights",
      goal: "Enforce Comstock Act, reverse FDA approval of abortion pills, end federal abortion funding",
      status: "In Progress",
      progress: 67,
      actions: [
        "CDC rerouting birth control funds to 'menstrual cycle education classes' to prevent pregnancy without contraception",
        "VA proposed rule removes abortion services from medical benefits package",
        "Hyde Amendment enforcement expanded across federal programs"
      ]
    },
    {
      category: "Climate & Environment",
      goal: "Withdraw from climate agreements, maximize fossil fuel production, rescind EV/efficiency regulations",
      status: "In Progress",
      progress: 100,
      actions: [
        "Approved Ambler Road Project (211-mile industrial access road for large-scale mining in Alaska) (Oct 6, 2025)",
        "Reversed Inflation Reduction Act's IRS expansion: laid off 6,000 IRS employees, eliminated tax enforcement funding (Aug 8, 2025)",
        "Executive order targeting 'woke' AI models, expanding fossil fuel production on federal lands"
      ]
    },
    {
      category: "Immigration & Law Enforcement",
      goal: "End catch-and-release, mass deportations, eliminate sanctuary cities, expand federal police powers",
      status: "In Progress",
      progress: 100,
      actions: [
        "Allowed Secret Service officers to serve as law enforcement in D.C., deployed across federal agencies (July 28, 2025)",
        "Rubio froze all foreign aid spending; Supreme Court allowing Trump to use pocket rescission to cancel $4B+ in aid (Sept 26, 2025)",
        "Congress approved rescission package clawing back $7 billion in foreign aid"
      ]
    },
    {
      category: "LGBTQ+ Rights & DEI",
      goal: "Define sex as binary, remove LGBTQ+ protections, ban federal funding for gender-affirming care",
      status: "In Progress",
      progress: 67,
      actions: [
        "OPM memo allows federal workers to display religious items and pray at work, potentially conflicting with LGBTQ+ protections (July 23, 2025)",
        "Executive order uses government contracts to 'push back against woke policies' in corporate America (July 18, 2025)",
        "Terminated DEI initiatives across federal agencies, eliminated 'gender ideology' from federal policies"
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#dc2626';
      case 'In Progress': return '#f59e0b';
      case 'Not Started': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <div className="project2025-tracker">
      <h2>📋 Project 2025 Progress Tracker</h2>
      <p className="tracker-subtitle">
        They denied it existed. They distanced themselves from it. Now they're implementing it.
      </p>

      <div className="reminder-box">
        <p><strong>Remember:</strong> During the campaign, they said Project 2025 was "just a proposal" 
        and that Trump had "nothing to do with it."</p>
        <p className="reminder-emphasis">
          The receipts don't lie. This is their playbook, and they're executing it.
        </p>
      </div>

      <div className="tracker-overview">
        <div className="overview-stat">
          <div className="stat-number">{trackerStats.totalObjectives}</div>
          <div className="stat-label">Total Objectives</div>
        </div>
        <div className="overview-stat">
          <div className="stat-number">{trackerStats.completed}</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="overview-stat">
          <div className="stat-number">{trackerStats.inProgress}</div>
          <div className="stat-label">In Progress</div>
        </div>
        <div className="overview-stat">
          <div className="stat-number">{trackerStats.overallProgress}%</div>
          <div className="stat-label">Overall Progress</div>
        </div>
      </div>

      <div className="agency-progress-section">
        <h3>Progress by Agency</h3>
        <div className="agency-list">
          {agencyProgress.map((agency, index) => (
            <div key={index} className="agency-item">
              <div className="agency-header">
                <span className="agency-name">{agency.name}</span>
                <span className="agency-objectives">{agency.objectives} objective{agency.objectives !== 1 ? 's' : ''}</span>
                <span className="agency-percentage">{agency.progress}%</span>
              </div>
              <div className="agency-progress-bar">
                <div 
                  className="agency-progress-fill"
                  style={{ width: `${agency.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="update-note">
        Data from <a href="https://www.project2025.observer/en" target="_blank" rel="noopener noreferrer">Project2025.observer</a> - A community-driven tracker by /u/rusticgorilla and /u/mollynaquafina • Updated October 28, 2025
      </p>
    </div>
  );
};

export default Project2025Tracker;
