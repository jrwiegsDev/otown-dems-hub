import './EconomicAction.css';

const EconomicAction = () => {
  return (
    <div className="economic-action-tile">
      <h2>💰 Economic Action</h2>
      <p className="intro-text">
        Learn how to use your purchasing power and economic influence to support democracy and democratic values.
      </p>
      
      <div className="economic-resources">
        {/* Blackout The System */}
        <div className="resource-item">
          <h3>Blackout The System</h3>
          <a href="https://blackoutthesystem.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/Blackout-the-System.png" 
              alt="Blackout The System" 
              className="resource-logo"
            />
          </a>
          <p>
            A global movement using economic power to demand justice and accountability. Stop funding oppression 
            by strategically withdrawing labor and spending. Build resilient local communities independent of 
            corrupt systems.
          </p>
          <p className="site-notice" style={{ fontStyle: 'italic', color: '#d97706' }}>
            ⚠️ We are aware that the link no longer works; this is a problem on Blackout The System's end. 
            Sorry for the inconvenience.
          </p>
          <a 
            href="https://blackoutthesystem.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resource-link"
          >
            Join the Movement →
          </a>
        </div>

        {/* OpenSecrets */}
        <div className="resource-item">
          <h3>OpenSecrets</h3>
          <a href="https://www.opensecrets.org/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/Open-Secrets.png" 
              alt="OpenSecrets" 
              className="resource-logo"
            />
          </a>
          <p>
            The trusted authority on money in American politics. Track campaign contributions, lobbying activities, 
            and how politicians spend their funds. Nonpartisan, independent, and comprehensive.
          </p>
          <a 
            href="https://www.opensecrets.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resource-link"
          >
            Explore OpenSecrets →
          </a>
        </div>

        {/* Goods Unite Us */}
        <div className="resource-item">
          <h3>Goods Unite Us</h3>
          <a href="https://www.goodsuniteus.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/Goods-Unite-Us.png" 
              alt="Goods Unite Us" 
              className="resource-logo"
            />
          </a>
          <p>
            Track corporate political donations from 7,000+ companies. See which brands align with your values 
            and discover alternatives. Download their free app to shop informed.
          </p>
          <a 
            href="https://www.goodsuniteus.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resource-link"
          >
            Visit Goods Unite Us →
          </a>
        </div>
      </div>
    </div>
  );
};

export default EconomicAction;
