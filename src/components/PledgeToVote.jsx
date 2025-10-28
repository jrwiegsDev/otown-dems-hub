import './PledgeToVote.css';

const PledgeToVote = () => {
  return (
    <div className="pledge-tile">
      <h3>Pledge to Vote 2026</h3>
      <a href="https://pledgetovote2026.com/" target="_blank" rel="noopener noreferrer">
        <img 
          src="/Pledge-to-Vote-2026.png" 
          alt="Pledge to Vote 2026" 
          className="pledge-logo"
        />
      </a>
      <p>
        Join your fellow Americans across the country making their commitment to vote in the 2026 U.S. Midterm Elections. 
        Watch the live countdown, see pledges from across the nation on an interactive heatmap, and share on social media to spread the word and encourage more participation!
      </p>
      <a 
        href="https://pledgetovote2026.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="pledge-link"
      >
        Make Your Pledge →
      </a>
    </div>
  );
};

export default PledgeToVote;
