// src/components/Healthcare.jsx

import { useState } from 'react';
import './Healthcare.css';

const Healthcare = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Get Covered Illinois?",
      answer: "Get Covered Illinois is the state's official health insurance marketplace where Illinoisans can shop for, compare and enroll in high-quality health insurance vetted by the state. Get Covered Illinois is the only place you can apply for and receive tax credits to help cover the cost of your coverage."
    },
    {
      question: "Who can get coverage through Get Covered Illinois?",
      answer: "You can buy a Get Covered Illinois health plan and enroll if: You live in Illinois, are a U.S. citizen or national or a lawfully present non-citizen in the U.S., are not incarcerated, and do not have health insurance through an employer, Medicare, Medicaid, Children's Insurance Program (CHIP), or other source that provides qualifying health coverage. If you were enrolled in the Health Benefits for Immigrant Adults (HBIA) program that ended July 1, 2025 and are a legal permanent resident, you may be eligible for coverage."
    },
    {
      question: "How do I shop for and enroll in coverage?",
      answer: "Get Covered Illinois lets you easily shop for and compare health plans. To shop without logging in, use their Comparison tool. When you've found the plan that fits your needs and budget, add the plan to your cart. Then follow the instructions to log in or create an account."
    },
    {
      question: "When can I enroll in a health plan?",
      answer: "Illinoisans can enroll in health coverage each year during open enrollment. This year, open enrollment starts on November 1 and ends on January 15. If you or someone in your household experiences a life change, such as losing health insurance coverage from a job, moving, getting married or having a baby, you might qualify for a Special Enrollment Period."
    },
    {
      question: "How can I get help applying for or enrolling in a plan?",
      answer: "Call the Get Covered Illinois Customer Assistance Center at 1-866-311-1119. Customer Service Representatives can help you apply for and enroll in coverage. You can also get free help from one of their certified brokers or Navigators."
    },
    {
      question: "How much will health insurance cost?",
      answer: "Several factors affect your cost of insurance, including: age, household income, household size, where you live, tobacco use, and type of insurance plan that you buy. You may also qualify for financial help from the federal government to help lower the cost of coverage. Use their Cost Calculator to learn more about the financial help you qualify for."
    },
    {
      question: "How do I qualify for financial help?",
      answer: "Get Covered Illinois can help lower your monthly premium and/or out-of-pocket costs in two ways: Advanced Premium Tax Credits (APTC) and Cost-Sharing Reductions (CSR). Your eligibility to get financial help is based on factors such as income and household size. Use their Cost Calculator to find out if you qualify."
    },
    {
      question: "What information do I need to enroll?",
      answer: "When enrolling, you'll need: Social Security numbers (if you have one), birth dates, employer information, projected income information, most recent tax returns, and immigration documents (if applicable). For questions on documentation, call 1-866-311-1119."
    },
    {
      question: "What do Get Covered Illinois health plans cover?",
      answer: "All plans cover these essential benefits: children's services (including dental and vision), emergency services, hospital stays and surgery, laboratory services, mental health and substance use disorder services, outpatient services, pregnancy/maternity/newborn care, prescription drugs, preventive and wellness services, and rehabilitative services."
    },
    {
      question: "What types of plans are offered?",
      answer: "Four categories: Bronze (lower monthly cost, highest out-of-pocket costs), Silver (balanced costs; required for Cost-Sharing Reductions), Gold (higher monthly cost, lower out-of-pocket costs), and Catastrophic (low monthly costs, mostly for emergencies; only for people under 30)."
    },
    {
      question: "My insurer is not on the marketplace anymore. How do I choose a new plan?",
      answer: "If your insurer is no longer available, Get Covered Illinois will enroll you in a comparable plan. They encourage all customers to shop and compare plans during open enrollment to ensure they enroll in coverage that best meets their health and financial needs."
    },
    {
      question: "How do I end my health plan?",
      answer: "You can end your coverage at any time by logging into your Get Covered Illinois account. Go to My Enrollments, scroll to the plan you want to end, and click Disenroll from Health Plan. Coverage can end at the end of the current month or the end of the next month. For questions, call 1-866-311-1119."
    },
    {
      question: "How do I reconcile my Advanced Premium Tax Credits on my federal taxes?",
      answer: "If you received Advanced Premium Tax Credits (APTC), you must file a federal tax return and report your APTC. For more information on how to reconcile your APTC, visit the Taxes and Form 1095-A section on their website."
    },
    {
      question: "How do I file an appeal or complaint?",
      answer: "If you enroll in a Get Covered Illinois plan and you do not agree with a decision your insurance company makes about your coverage, the Illinois Department of Insurance - Office of Consumer Health Insurance (OCHI) can help. They can answer your questions about filing a complaint or an external review."
    }
  ];

  return (
    <div className="healthcare-tile">
      <h2>🏥 Healthcare</h2>
      
      <div className="healthcare-content">
        <a href="https://getcovered.illinois.gov/" target="_blank" rel="noopener noreferrer">
          <img 
            src="/Get-Covered-Illinois.png" 
            alt="Get Covered Illinois" 
            className="healthcare-logo"
          />
        </a>
        
        <p className="intro-text">
          Get Covered Illinois is the state's official health insurance marketplace where you can shop for, 
          compare and enroll in high-quality health insurance. The only place to apply for and receive tax 
          credits to help cover the cost of your coverage.
        </p>

        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question ${openFaq === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a 
          href="https://getcovered.illinois.gov/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="healthcare-link"
        >
          Visit Get Covered Illinois →
        </a>
      </div>
    </div>
  );
};

export default Healthcare;
