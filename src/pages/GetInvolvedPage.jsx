// src/pages/GetInvolvedPage.jsx

import ActiveOrganizations from '../components/ActiveOrganizations';
import BannedBooks from '../components/BannedBooks';
import PledgeToVote from '../components/PledgeToVote';
import EconomicAction from '../components/EconomicAction';
import PetitionsAndCalls from '../components/PetitionsAndCalls';
import VolunteerSignup from '../components/VolunteerSignup';

const GetInvolvedPage = () => {
  return (
    <div className="page-container">
      <h1>Get Involved</h1>
      
      <div className="main-content-grid">
        {/* Column 1 */}
        <div className="grid-column">
          <div className="content-tile">
            <PledgeToVote />
          </div>

          <div className="content-tile">
            <h2>🤝 Help Your Neighbors</h2>
            <p>
              Able to help? Consider donating to these local organizations that support our community.
            </p>
            <p><em>Organization directory coming soon...</em></p>
          </div>

          <div className="content-tile">
            <PetitionsAndCalls />
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid-column">
          <div className="content-tile">
            <EconomicAction />
          </div>

          <div className="content-tile">
            <ActiveOrganizations />
          </div>
        </div>

        {/* Column 3 */}
        <div className="grid-column">
          <div className="content-tile">
            <VolunteerSignup />
          </div>

          <div className="content-tile">
            <BannedBooks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;
