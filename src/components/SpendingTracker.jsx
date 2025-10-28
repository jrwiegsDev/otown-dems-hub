// src/components/SpendingTracker.jsx

import { useState } from 'react';
import './SpendingTracker.css';

const SpendingTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const wastefulSpending = [
    {
      item: "White House Ballroom (East Wing Demolition)",
      cost: 300000000,
      description: "Trump demolished the historic 123-year-old East Wing (remodeled by FDR in 1942) to build a 90,000 sq ft ballroom. Despite claims of private funding, critics note the administration's pattern of fraud and money funneling. Over 60% of Americans disapprove.",
      source: "Yahoo/YouGov poll, preservation groups",
      date: "October 2025"
    },
    {
      item: "Kristi Noem's DHS Private Jets",
      cost: 200000000,
      description: "Two new Gulfstream G700 jets purchased during government shutdown for DHS Secretary. Noem requires personal approval on all DHS expenses over $100K but prioritized these planes while federal workers went unpaid.",
      source: "New York Times, congressional Democrats",
      date: "October 2025"
    },
    {
      item: "Trump's DOJ Settlement Demand",
      cost: 230000000,
      description: "Trump seeks $230 million in taxpayer funds from DOJ for alleged 'privacy violations' related to Mar-a-Lago documents case and Russia investigation. Ethics experts call this illegal and unprecedented conflict of interest.",
      source: "Federal Tort Claims Act filings",
      date: "October 2025"
    },
    {
      item: "Argentina Bailout During U.S. Shutdown",
      cost: 20000000000,
      description: "Trump announced $20 billion 'currency swap' to Argentina during U.S. government shutdown, benefiting hedge funds tied to Treasury Secretary Scott Bessent. Announced while American federal workers went unpaid.",
      source: "U.S. Treasury, bipartisan congressional criticism",
      date: "October 2025"
    }
  ];

  const cutPrograms = [
    {
      program: "SNAP (Food Assistance)",
      impact: "40+ million Americans (4M to lose all benefits)",
      description: "'One Big Beautiful Bill Act' cuts $187B over 10 years. Expands work requirements to ages 18-64, removes veteran/homeless exemptions. November 2025 benefits suspended despite $6B in emergency funds. Over 20 states filed lawsuits.",
      annualBudget: 99800000000 // FY2024 actual
    },
    {
      program: "Medicaid",
      impact: "70.5 million enrolled (11.8M to lose coverage)", 
      description: "'One Big Beautiful Bill Act' cuts $1T over 10 years. New 80-hour monthly work requirements for adults 19-64. Six-month eligibility checks replace annual. Eliminates coverage for many refugees and asylum seekers. CBO: 5.3M uninsured from work requirements alone.",
      annualBudget: 619000000000 // FY2025 CBO projection
    },
    {
      program: "Public Education (DOE)",
      impact: "49.6 million students",
      description: "EO 14242 orders DOE closure. 2,000+ employees fired in March. $6B in grants withheld in July. All DEI programs terminated in September. Office of Federal Student Aid gutted despite managing $1.6T loan portfolio. Civil rights enforcement eroded.",
      annualBudget: 195420000000 // FY2025 total
    }
  ];

  const formatCurrency = (amount) => {
    if (amount >= 1000000000) {
      return `$${(amount / 1000000000).toFixed(1)}B`;
    } else if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    return `$${amount.toLocaleString()}`;
  };

  return (
    <div className="spending-tracker">
      <h2>💸 Spending Tracker</h2>
      <p className="spending-subtitle">
        Following the money: Wasteful spending vs. programs they claim we "can't afford"
      </p>

      <div className="priorities-box">
        <p><strong>The Truth About Priorities:</strong></p>
        <p>
          There IS money. The question is: who benefits? Republicans choose luxury renovations, 
          private planes, and corporate tax cuts over feeding hungry Americans, healthcare for the 
          vulnerable, and education for our children.
        </p>
        <p className="priorities-emphasis">
          It's not about affordability. It's about priorities. And their priorities are clear.
        </p>
      </div>

      {/* Wasteful Spending */}
      <div className="spending-section">
        <h3>💰 Where They DO Spend Your Tax Dollars</h3>
        <div className="spending-items">
          {wastefulSpending.map((item, index) => (
            <div key={index} className="spending-card wasteful">
              <div className="spending-header">
                <div className="spending-title">{item.item}</div>
                <div className="spending-cost">{formatCurrency(item.cost)}</div>
              </div>
              <p className="spending-description">{item.description}</p>
              <div className="spending-meta">
                <span className="spending-date">{item.date}</span>
                <span className="spending-source">Source: {item.source}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="total-box wasteful-total">
          <span>Total Wasteful Spending Tracked:</span>
          <span className="total-amount">
            {formatCurrency(wastefulSpending.reduce((sum, item) => sum + item.cost, 0))}
          </span>
        </div>
      </div>

      {/* Programs Being Cut */}
      <div className="spending-section">
        <h3>🚫 Programs They Claim We "Can't Afford"</h3>
        <div className="spending-items">
          {cutPrograms.map((program, index) => (
            <div key={index} className="spending-card programs">
              <div className="spending-header">
                <div className="spending-title">{program.program}</div>
                <div className="spending-impact">{program.impact}</div>
              </div>
              <p className="spending-description">{program.description}</p>
              <div className="program-budget">
                Annual Budget: {formatCurrency(program.annualBudget)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="update-note">
        Data sources: Yahoo/YouGov polling, New York Times, U.S. Treasury, Federal Tort Claims Act filings, CBO projections, Kaiser Family Foundation, state lawsuits, congressional testimony • Updated October 28, 2025
      </p>
    </div>
  );
};

export default SpendingTracker;
