// src/pages/PolicyPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const PolicyPage = () => {
  return (
    <div className="policy-container">
      <Link to="/" className="back-link">&larr; Back to Home</Link>

      <h1>PRIVACY POLICY & TERMS OF SERVICE</h1>
      <p><strong>Last Updated: October 12, 2025</strong></p>
      <p>The O'Fallon Area Democratic Club (“we,” or “us”) cares about your privacy rights and providing you with the information you need to protect them. Accordingly, we've created this policy to explain our privacy practices. This policy applies to ofallonildems.org only.</p>
      <p>We may revise and update this policy if our practices change or if we add or change features on the site. You should refer back to this page often for the latest information.</p>

      <hr />

      <h2>TERMS OF USE</h2>
      <p>These Terms of Service (“Terms”) apply to your access to and use of the websites and other online offerings (collectively, the “Sites”) provided by the O'Fallon Area Democratic Club. By accessing or using the Sites, you agree to these Terms. If you do not agree to these Terms, do not use the Sites.</p>

      <hr />

      <h2>INFORMATION COLLECTED ABOUT YOU</h2>
      <p>We collect personal information when you sign up for our mailing list on our site. Personal information we collect includes your first name and email address. Providing your last name is optional.</p>
      <p>When making a contribution via a third-party service like ActBlue, you will be subject to their terms and privacy policy. We may receive personal information from that processor as required by campaign finance law, such as your name, mailing address, occupation, and name of employer. We do not collect or store your credit card or bank account information on our Sites.</p>
      <p><strong>Automatically Collected Information:</strong> We automatically receive certain types of information when you interact with us online. For example, our systems may automatically collect your IP address and the type of browser you use. This information may be collected through the use of “cookies.”</p>
      
      <hr />

      <h2>NETWORK AND INFORMATION SECURITY</h2>
      <p>We employ a variety of physical, electronic, and procedural safeguards to guard your personal information. We work to protect the security of your information by using Secure Sockets Layer (SSL) software, which encrypts information you input. We store the personal information we collect from you behind a secure firewall. You should be aware that we have no control over the security of other sites on the Internet you might visit.</p>

      <hr />

      <h2>DISCLOSURE OF PERSONAL INFORMATION</h2>
      <p>Information about our supporters and website visitors is kept confidential. Personal information is made available to others for the following, limited purposes:</p>
      <ul>
        <li><strong>To Comply with Campaign Finance Laws:</strong> We are required to disclose information regarding our contributions to comply with campaign finance laws. Federal law requires us to use our best efforts to collect and report the name, mailing address, occupation, and name of employer of individuals whose contributions aggregate in excess of $200 in a calendar year.</li>
        <li><strong>To Carry Out Your Requests:</strong> We may disclose information to carry out your requests, such as delivering a newsletter to the email address you provided.</li>
        <li><strong>To Protect You and Ourselves:</strong> We may release personal information to comply with the law (e.g., a lawful subpoena) or if we reasonably believe that an emergency involving immediate danger requires disclosure.</li>
        <li><strong>To Support Democratic Candidates and Organizations:</strong> We may disclose selected personal information (other than financial information) to other Democratic campaigns and organizations that we believe you may wish to hear from.</li>
      </ul>

      <hr />

      <h2>COOKIES & WEB BEACONS</h2>
      <p>We may automatically collect information using “cookies,” which are small data files stored on your hard drive by a website. Cookies help us improve our site and your experience. Most Web browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject cookies, which could affect certain features of our site.</p>
      <p>We may also collect information using Web beacons (electronic images) on our sites or in our emails to deliver cookies, count visits, and understand campaign effectiveness.</p>
      
      <hr />

      <h2>CHILDREN'S ONLINE PRIVACY PROTECTION ACT</h2>
      <p>We do not knowingly, directly, or passively collect information from children under the age of 13. To comply with the Children's Online Privacy Protection Act, children under 13 should not provide any Personal Information on this Site. We ask that parents supervise their children while online.</p>

      <hr />

      <h2>LINKS TO OTHER SITES</h2>
      <p>We may provide links to third-party websites as a service to our visitors. We are not responsible for the content or information collection practices of those sites. Their privacy policies may differ from ours, and we encourage you to review their policies before providing them with information.</p>

      <hr />

      <h2>HOW TO CONTACT US</h2>
      <p>If you have any questions, comments, or concerns, please contact us by e-mail at <strong>ofallondems@gmail.com</strong>.</p>
    </div>
  );
};

export default PolicyPage;