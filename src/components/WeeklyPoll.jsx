// src/components/WeeklyPoll.jsx

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import validator from 'validator';
import './WeeklyPoll.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const WS_URL = import.meta.env.VITE_WS_URL || 'ws://localhost:8000';

const ISSUES = [
  'Government Corruption',
  'Cost of Living / Inflation',
  'The Economy',
  'State of US Democracy',
  'Disruption of Federal Government Services',
  'Government Shutdown',
  'Treatment of Immigrants by ICE',
  'Climate Change',
  'Crime',
  'Personal Financial Situation'
];

const WeeklyPoll = () => {
  const [email, setEmail] = useState('');
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedIssues, setSelectedIssues] = useState([]);
  const [votingEnabled, setVotingEnabled] = useState(false);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const wsRef = useRef(null);

  // Fetch initial results
  useEffect(() => {
    fetchResults();
    setupWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  const setupWebSocket = () => {
    try {
      const ws = new WebSocket(WS_URL);
      
      ws.onopen = () => {
        console.log('WebSocket connected for poll updates');
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === 'pollResults') {
          setResults(data.data);
          if (data.data.reset) {
            // Poll has been reset - clear voting state
            setHasVoted(false);
            setSelectedIssues([]);
            setVotingEnabled(false);
            setEmail('');
          }
        }
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      ws.onclose = () => {
        console.log('WebSocket disconnected');
        // Attempt to reconnect after 5 seconds
        setTimeout(setupWebSocket, 5000);
      };

      wsRef.current = ws;
    } catch (error) {
      console.error('Failed to setup WebSocket:', error);
    }
  };

  const fetchResults = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/poll/results`);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching poll results:', error);
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validator.isEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/api/poll/check-email`, { email });
      
      if (response.data.hasVoted) {
        setHasVoted(true);
        setSelectedIssues(response.data.selectedIssues || []);
        setMessage('You have already voted this week. Thank you!');
      } else {
        setVotingEnabled(true);
        setMessage('Email verified! Please select up to 3 issues that matter most to you.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Error verifying email');
    } finally {
      setLoading(false);
    }
  };

  const handleIssueToggle = (issue) => {
    if (hasVoted) return;

    setSelectedIssues(prev => {
      if (prev.includes(issue)) {
        return prev.filter(i => i !== issue);
      } else {
        if (prev.length >= 3) {
          setError('You can only select up to 3 issues');
          return prev;
        }
        setError('');
        return [...prev, issue];
      }
    });
  };

  const handleVoteSubmit = async () => {
    if (selectedIssues.length === 0) {
      setError('Please select at least 1 issue');
      return;
    }

    if (selectedIssues.length > 3) {
      setError('Please select no more than 3 issues');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${API_URL}/api/poll/vote`, {
        email,
        selectedIssues
      });

      setHasVoted(true);
      setVotingEnabled(false);
      setMessage(response.data.message || 'Vote submitted successfully!');
      
      // Results will be updated via WebSocket
    } catch (error) {
      setError(error.response?.data?.message || 'Error submitting vote');
    } finally {
      setLoading(false);
    }
  };

  const getPercentage = (count) => {
    if (!results || results.totalVotes === 0) return 0;
    return ((count / results.totalVotes) * 100).toFixed(1);
  };

  return (
    <div className="weekly-poll-container">
      <h2>🗳️ Weekly Community Poll</h2>
      <p className="poll-question">What are the top 3 issues affecting you this week?</p>

      {/* Email Entry Section */}
      {!votingEnabled && !hasVoted && (
        <form onSubmit={handleEmailSubmit} className="email-form">
          <p className="poll-instruction">
            Enter your email to enable voting. We don't store your email or sign you up for anything.
          </p>
          <div className="email-input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email to vote"
              className="email-input"
              disabled={loading}
            />
            <button type="submit" className="email-submit-btn" disabled={loading}>
              {loading ? 'Checking...' : 'Enable Voting'}
            </button>
          </div>
        </form>
      )}

      {/* Message/Error Display */}
      {message && <div className="poll-message success">{message}</div>}
      {error && <div className="poll-message error">{error}</div>}

      {/* Voting Section */}
      {votingEnabled && !hasVoted && (
        <div className="voting-section">
          <p className="voting-instruction">
            Select up to 3 issues, then click "Submit Votes" to lock in your choices for the week.
          </p>
          <div className="issues-list">
            {ISSUES.map((issue) => (
              <label key={issue} className="issue-checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedIssues.includes(issue)}
                  onChange={() => handleIssueToggle(issue)}
                  disabled={loading}
                />
                <span>{issue}</span>
              </label>
            ))}
          </div>
          <div className="vote-actions">
            <p className="selection-count">
              {selectedIssues.length} of 3 issues selected
            </p>
            <button
              onClick={handleVoteSubmit}
              className="submit-vote-btn"
              disabled={loading || selectedIssues.length === 0}
            >
              {loading ? 'Submitting...' : 'Submit Votes'}
            </button>
          </div>
        </div>
      )}

      {/* Results Section */}
      {results && (
        <div className="results-section">
          <h3>Live Results</h3>
          <p className="total-votes">Total Votes: {results.totalVotes}</p>
          <div className="results-list">
            {(results.issues || ISSUES).map((issue) => {
              const count = results.issueCounts[issue] || 0;
              const percentage = getPercentage(count);
              return (
                <div key={issue} className="result-item">
                  <div className="result-header">
                    <span className="issue-name">{issue}</span>
                    <span className="issue-stats">
                      {count} votes ({percentage}%)
                    </span>
                  </div>
                  <div className="result-bar-container">
                    <div 
                      className="result-bar" 
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklyPoll;
