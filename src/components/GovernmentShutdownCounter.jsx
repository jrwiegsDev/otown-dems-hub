// src/components/GovernmentShutdownCounter.jsx

import './GovernmentShutdownCounter.css';

const GovernmentShutdownCounter = () => {
  // The 2025 government shutdown ended on November 9, 2025 at 10:52 PM ET
  // Final duration: 39 days, 23 hours, 52 minutes
  const shutdownEnded = true;
  
  // Final statistics from the shutdown
  const finalStats = {
    days: 39,
    hours: 23,
    minutes: 52,
    seconds: 0,
    totalCost: 17397646526, // $17.4 billion
    furloughedWorkers: 1000000, // ~900K-1.1M
    workingWithoutPay: 1200000, // ~800K-1.6M
    permanentLayoffs: 6200,
    congressionalDailyPay: 475.89 // $174,000 annual salary / 365 days
  };

  if (!shutdownEnded) {
    return (
      <div className="shutdown-counter">
        <h2>🏛️ Government Shutdown Tracker</h2>
        <div className="no-shutdown">
          <p className="status-message">No active government shutdown at this time.</p>
          <p className="info-text">
            This tracker will activate if the federal government enters a shutdown. 
            A shutdown occurs when Congress fails to pass funding legislation.
          </p>
        </div>
      </div>
    );
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const congressionalTotalPay = (finalStats.days * finalStats.congressionalDailyPay).toFixed(2);

  // Congressional salary breakdown
  const salaries = {
    member: 174000,
    speaker: 223500,
    leadership: 193400
  };

  const calculateDailyPay = (annualSalary) => {
    return (annualSalary / 365).toFixed(2);
  };

  return (
    <div className="shutdown-counter ended">
      <h2>🏛️ 2025 Government Shutdown</h2>
      <p className="shutdown-subtitle ended">
        Ended November 9, 2025 at 10:52 PM ET
      </p>
      
      <div className="counter-display ended">
        <div className="counter-item">
          <div className="counter-value">{finalStats.days}</div>
          <div className="counter-label">Days</div>
        </div>
        <div className="counter-separator">:</div>
        <div className="counter-item">
          <div className="counter-value">{finalStats.hours}</div>
          <div className="counter-label">Hours</div>
        </div>
        <div className="counter-separator">:</div>
        <div className="counter-item">
          <div className="counter-value">{finalStats.minutes}</div>
          <div className="counter-label">Minutes</div>
        </div>
      </div>

      <div className="shutdown-impact">
        <h3>💰 The Cost of Congressional Failure</h3>
        <div className="cost-highlight">
          <p className="total-cost">{formatCurrency(finalStats.totalCost)}</p>
          <p className="cost-label">Total estimated cost to taxpayers</p>
        </div>

        <div className="congress-pay-callout">
          <p className="callout-text">
            <strong>Meanwhile, Members of Congress:</strong>
          </p>
          <p className="congress-daily-pay">
            Made <strong>${finalStats.congressionalDailyPay.toFixed(2)} EACH DAY</strong> during the shutdown
          </p>
          <p className="congress-total-pay">
            Total per member over {finalStats.days} days: <strong>{formatCurrency(congressionalTotalPay)}</strong>
          </p>
          
          <div className="salary-breakdown">
            <h4>Congressional Salaries During the Crisis:</h4>
            <div className="salary-grid">
              <div className="salary-item">
                <span className="salary-role">Regular Members:</span>
                <span className="salary-amount">${salaries.member.toLocaleString()}/year (${calculateDailyPay(salaries.member)}/day)</span>
              </div>
              <div className="salary-item">
                <span className="salary-role">Speaker of the House:</span>
                <span className="salary-amount">${salaries.speaker.toLocaleString()}/year (${calculateDailyPay(salaries.speaker)}/day)</span>
              </div>
              <div className="salary-item">
                <span className="salary-role">Leadership Positions:</span>
                <span className="salary-amount">${salaries.leadership.toLocaleString()}/year (${calculateDailyPay(salaries.leadership)}/day)</span>
              </div>
            </div>
          </div>

          <p className="callout-reminder">
            While federal workers went without paychecks and American families struggled to make ends meet, 
            Congress continued collecting their salaries for failing to do their job. They left EARLY on 
            July 22, 2025 for a 6-week August recess, returned September 2nd, worked only 33 days, and 
            then failed to pass funding legislation.
          </p>
        </div>

        <h3>👥 Human Impact</h3>
        <div className="impact-stats">
          <div className="stat-item">
            <div className="stat-number">{formatNumber(finalStats.furloughedWorkers)}</div>
            <div className="stat-label">Federal employees furloughed (on unpaid leave)</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{formatNumber(finalStats.workingWithoutPay)}</div>
            <div className="stat-label">Essential workers forced to work without pay</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{formatNumber(finalStats.permanentLayoffs)}</div>
            <div className="stat-label">Permanent layoffs (RIFs) across agencies</div>
          </div>
        </div>

        <h3>📊 Additional Context</h3>
        <ul className="impact-details">
          <li>~2 million military personnel continued serving without pay</li>
          <li>SNAP benefits halted November 1st, affecting millions of families</li>
          <li>WIC funding expired November 15th, cutting off nutrition assistance for mothers and children</li>
          <li>Court injunctions paused ~1,800 RIFs; legal battles ongoing</li>
          <li>Lost productivity exceeded $600 million per day</li>
          <li>TSA agents, air traffic controllers, and border patrol worked without paychecks</li>
        </ul>
      </div>

      <div className="shutdown-resolution">
        <h3>How It Ended</h3>
        <p>
          On November 9, 2025, the Senate passed cloture on H.R. 5371 with a 60-40 vote, 
          ending the 40-day shutdown. The bipartisan deal funds the government through 
          January 30, 2026, but excludes Obamacare subsidies and guarantees an ACA vote 
          by mid-December.
        </p>
        <p>
          <strong>This was the longest government shutdown in U.S. history.</strong>
        </p>
      </div>

      <div className="shutdown-info">
        <h3>What is a Government Shutdown?</h3>
        <p>
          A federal government shutdown happens when Congress fails to pass funding legislation 
          or a continuing resolution. Agencies must halt non-essential operations, furlough employees, 
          and rely on contingency plans until lawmakers resolve the funding gap.
        </p>
        
        <h3>What Happened During This Shutdown?</h3>
        <p><strong>Essential services continued:</strong> Defense, Social Security, air traffic control, 
        and other critical operations kept running, though workers faced delayed pay and financial hardship.</p>
        <p><strong>Public programs paused:</strong> SNAP benefits, WIC nutrition assistance, IRS tax processing, 
        national parks visitor centers, and many administrative services were suspended.</p>

        <p className="info-credit">
          Impact data sourced from{' '}
          <a href="https://www.governmentshutdown2025.com/" target="_blank" rel="noopener noreferrer">
            GovernmentShutdown2025.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default GovernmentShutdownCounter;
