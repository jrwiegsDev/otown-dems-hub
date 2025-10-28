// src/components/RecognizeFascism.jsx

import { useState } from 'react';
import './RecognizeFascism.css';

const RecognizeFascism = () => {
  const [selectedSign, setSelectedSign] = useState(null);

  const warningSigns = [
    {
      sign: "Powerful & Continuing Nationalism",
      example: '"America First," American superiority/patriotic imagery everywhere'
    },
    {
      sign: "Disdain for Human Rights",
      example: 'Inhumane detention practices ie "Alligator Alcatraz," reproductive rights stripped away'
    },
    {
      sign: "Identification of Enemies/Scapegoats for Unifying Cause",
      example: 'Immigrants as "other," violent ICE raids in streets, ziptying children & elderly'
    },
    {
      sign: "Supremacy of the Military",
      example: "Robust defense spending even when all other federal funds are cut"
    },
    {
      sign: "Rampant Sexism",
      example: "Didn't matter to MAGA voters that Trump is a prodigious sex offender, women around him are objectified publicly"
    },
    {
      sign: "Controlled Mass Media",
      example: "Paramount lawsuit, defunding public radio, FCC moves directed by Trump re Jimmy Kimmel"
    },
    {
      sign: "Obsession with National Security",
      example: "Federalizing police officers, militarizing city streets"
    },
    {
      sign: "Religion & Government Entwined",
      example: 'Established "White House Faith Office"'
    },
    {
      sign: "Corporate Power is Protected",
      example: "Corporate tax cuts & rolled back corporate oversight protections"
    },
    {
      sign: "Labor Power is Suppressed",
      example: "Stripped federal workers of collective bargaining"
    },
    {
      sign: "Disdain for Intellectuals & the Arts",
      example: "Attacks colleges & universities"
    },
    {
      sign: "Obsession with Crime & Punishment",
      example: "Manipulates/makes up crime data to justify excessive force"
    },
    {
      sign: "Rampant Cronyism & Corruption",
      example: "Pay to Play dinners at the White House & Mar a Lago, cryptocurrency as backdoor for bribes, Qatari jet gift"
    },
    {
      sign: "Fraudulent Elections",
      example: 'States Jan 6 insurrection was response to "stolen" election, attempts to get rid of mail in voting'
    }
  ];

  return (
    <div className="fascism-container">
      <h2>⚠️ Recognize the Warning Signs of Fascism</h2>
      <div className="fascism-intro-box">
        <p>
          <strong>Stay informed. Stay vigilant. Defend democracy.</strong>
        </p>
        <p className="intro-note">
          These warning signs are based on historical patterns of authoritarian regimes 
          and are crucial for recognizing threats to democratic institutions.
        </p>
      </div>

      <div className="warning-signs-grid">
        {warningSigns.map((item, index) => (
          <button
            key={index}
            className={`warning-sign-card ${selectedSign === index ? 'active' : ''}`}
            onClick={() => setSelectedSign(selectedSign === index ? null : index)}
          >
            <div className="warning-number">{index + 1}</div>
            <div className="warning-title">{item.sign}</div>
          </button>
        ))}
      </div>

      {selectedSign !== null && (
        <div className="selected-example">
          <h3>{warningSigns[selectedSign].sign}</h3>
          <p><strong>Current Example:</strong> {warningSigns[selectedSign].example}</p>
        </div>
      )}

      <p className="fascism-footer-text">
        These aren't just policy differences—these are attempts to overthrow democracy for fascism. 
        Click any sign to see current examples from the Trump administration.
      </p>
    </div>
  );
};

export default RecognizeFascism;
