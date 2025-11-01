// src/pages/ResourcesPage.jsx

import NeedSupport from '../components/NeedSupport';
import Healthcare from '../components/Healthcare';
import VoterInformation from '../components/VoterInformation';

const ResourcesPage = () => {
  return (
    <div className="page-container resources-page">
      <h1>Resources</h1>
      
      <div className="main-content-grid">
        {/* Column 1 */}
        <div className="grid-column">
          <div className="content-tile">
            <VoterInformation />
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

          <div className="content-tile">
            <h2>🎓 Citizenship Education</h2>
            <p>
              Learn about U.S. citizenship, civics, and the democratic process.
            </p>
            <p><em>Educational video content coming soon...</em></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
