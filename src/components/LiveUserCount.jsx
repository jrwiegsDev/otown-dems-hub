// src/components/LiveUserCount.jsx

import React, { useState, useEffect, useRef } from 'react';
import { FaUsers } from 'react-icons/fa';

const LiveUserCount = () => {
  const [userCount, setUserCount] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const ws = useRef(null); // Use useRef to hold the WebSocket connection

  useEffect(() => {
    // --- Determine WebSocket URL based on environment ---
    // Use 'wss://' for secure connection in production
    const wsUrl = import.meta.env.MODE === 'production'
      ? `wss://${import.meta.env.VITE_API_URL.split('//')[1]}` // Correctly construct WSS URL from VITE_API_URL
      : `ws://localhost:8000`; // Local WebSocket URL (adjust port if needed)
      
    // --- Establish WebSocket connection ---
    ws.current = new WebSocket(wsUrl);

    ws.current.onopen = () => {
      console.log('WebSocket Connected');
      setIsConnected(true);
    };

    ws.current.onclose = () => {
      console.log('WebSocket Disconnected');
      setIsConnected(false);
    };

    ws.current.onerror = (error) => {
      console.error('WebSocket Error:', error);
      setIsConnected(false);
    };

    // --- Listen for messages from the server ---
    ws.current.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        if (message.type === 'userCount') {
          setUserCount(message.count);
        }
      } catch (error) {
        console.error('Failed to parse WebSocket message:', error);
      }
    };

    // --- Cleanup function: Close connection when component unmounts ---
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Only show the component when connected and have a count
  if (!isConnected || userCount === 0) {
    return null;
  }

  return (
    <div className="live-user-count">
      <FaUsers className="user-count-icon" />
      <span className="user-count-text">
        {userCount} {userCount === 1 ? 'Neighbor' : 'Neighbors'} Online!
      </span>
    </div>
  );
};

export default LiveUserCount;