// src/pages/ResourcesPage.jsx

import RecognizeFascism from '../components/RecognizeFascism';

const ResourcesPage = () => {
  return (
    <div className="page-container">
      <h1>Resources</h1>
      
      <div className="main-content-grid">
        {/* Column 1 */}
        <div className="grid-column">
          <div className="content-tile">
            <h2>🎓 Citizenship Education</h2>
            <p>
              Learn about U.S. citizenship, civics, and the democratic process.
            </p>
            <p><em>Educational video content coming soon...</em></p>
          </div>

          <div className="content-tile">
            <h2>🗳️ Voter Information</h2>
            <p>
              Registration info, polling locations, and key election dates.
            </p>
            <p><em>Content coming soon...</em></p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid-column">
          <div className="content-tile">
            <RecognizeFascism />
          </div>
        </div>

        {/* Column 3 */}
        <div className="grid-column">
          <div className="content-tile">
            <h2>✅ Fact-Check Resources</h2>
            <p>
              Tools and resources to verify information and combat disinformation online.
            </p>
            <p><em>Resources coming soon...</em></p>
          </div>

          <div className="content-tile">
            <h2>💙 Need Support?</h2>
            <p>
              These local organizations are here to help our community members.
            </p>
            <p><em>Organization directory coming soon...</em></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
