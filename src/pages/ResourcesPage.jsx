// src/pages/ResourcesPage.jsx

import NeedSupport from '../components/NeedSupport';
import Healthcare from '../components/Healthcare';

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
            <NeedSupport />
          </div>

          <div className="content-tile">
            <h2>✅ Fact-Check Resources</h2>
            <p>
              Tools and resources to verify information and combat disinformation online.
            </p>
            <p><em>Resources coming soon...</em></p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="grid-column">
          <div className="content-tile">
            <Healthcare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
