// src/pages/GetInvolvedPage.jsx

import NoKings from '../components/NoKings';
import BannedBooks from '../components/BannedBooks';

const GetInvolvedPage = () => {
  return (
    <div className="page-container">
      <h1>Get Involved</h1>
      
      <div className="main-content-grid">
        {/* Column 1 */}
        <div className="grid-column">
          <div className="content-tile">
            <NoKings />
          </div>

          <div className="content-tile">
            <h2>📞 Petitions & Calls</h2>
            <p>
              Make your voice heard through petitions and direct calls to representatives.
            </p>
            <p><em>Resources and links coming soon...</em></p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid-column">
          <div className="content-tile">
            <BannedBooks />
          </div>

          <div className="content-tile">
            <h2>🙋 Volunteer Opportunities</h2>
            <p>
              Get involved with local initiatives including highway adoption and civics trivia nights.
            </p>
            <p><em>Details coming soon...</em></p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="grid-column">
          <div className="content-tile">
            <h2>💰 Economic Action</h2>
            <p>
              Learn how to use your purchasing power to support democracy and democratic values.
            </p>
            <p><em>Resources and action plans coming soon...</em></p>
          </div>

          <div className="content-tile">
            <h2>🤝 Help Your Neighbors</h2>
            <p>
              Able to help? Consider donating to these local organizations that support our community.
            </p>
            <p><em>Organization directory coming soon...</em></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;
