import './EconomicAction.css';

const EconomicAction = () => {
  return (
    <div className="economic-action-tile">
      <h2>💰 Economic Action</h2>
      <p className="intro-text">
        Learn how to use your purchasing power and economic influence to support democracy and democratic values.
      </p>
      
      <div className="economic-resources">
        {/* Free America Walkout */}
        <div className="resource-item">
          <h3>Free America Walkout</h3>
          <a href="https://action.womensmarch.com/events/o-fallon-illinois-free-america-walkout" target="_blank" rel="noopener noreferrer">
            <img 
              src="/free_america_walkout.png" 
              alt="Free America Walkout" 
              className="resource-logo"
            />
          </a>
          <p>
            On January 20, walk out on fascism. Join communities nationwide to turn your back on the system, 
            organize mutual aid, and stand together - because in the face of fascism, we will be ungovernable.
          </p>
          <a 
            href="https://action.womensmarch.com/events/o-fallon-illinois-free-america-walkout" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resource-link"
          >
            Join the Walkout →
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
