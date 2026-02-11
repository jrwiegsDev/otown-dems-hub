import './StandWithMinnesota.css';

const StandWithMinnesota = () => {
  return (
    <div className="stand-with-mn-tile">
      <h2>Stand With Minnesota</h2>
      
      <div className="mn-resource">
        <div className="resource-item">
          <a href="https://www.standwithminnesota.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/Stand_w_MN.png" 
              alt="Stand With Minnesota" 
              className="resource-logo"
            />
          </a>
          <p className="quoted-text">
            "Across Minnesota, ICE continues to stop, harass, and detain people regardless of their citizenship status. Normal life in Minnesota has been interrupted, as schools have been forced to close or go virtual, as people live in fear of leaving their homes or going to work. Minnesotans are organized and activated to respond to this violence. But they need our help."
          </p>
          <a 
            href="https://www.standwithminnesota.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resource-link"
          >
            Learn How to Help →
          </a>
        </div>
      </div>
    </div>
  );
};

export default StandWithMinnesota;
