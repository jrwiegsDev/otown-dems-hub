// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SnowEffects from './components/SnowEffects';
import SantaSleigh from './components/SantaSleigh';
import SnowCaps from './components/SnowCaps';

// Import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ResourcesPage from './pages/ResourcesPage';
import DemocracyDashboard from './pages/DemocracyDashboard';
import PolicyPage from './pages/PolicyPage';

function App() {
  const [snowfallFeatureEnabled, setSnowfallFeatureEnabled] = useState(false);
  const [isSnowing, setIsSnowing] = useState(false);

  // Fetch initial snowfall feature status
  useEffect(() => {
    const fetchSnowfallStatus = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
        const response = await fetch(`${API_URL}/api/config/snowfall`);
        const data = await response.json();
        setSnowfallFeatureEnabled(data.snowfallEnabled);
      } catch (error) {
        console.error('Error fetching snowfall status:', error);
      }
    };

    fetchSnowfallStatus();
  }, []);

  // WebSocket listener for real-time snowfall feature toggle
  useEffect(() => {
    const WS_URL = import.meta.env.VITE_WS_URL || 'ws://localhost:8000';
    let ws = null;

    const connectWebSocket = () => {
      try {
        ws = new WebSocket(WS_URL);

        ws.onopen = () => {
          console.log('Snow feature WebSocket connected');
        };

        ws.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            
            if (data.type === 'snowfallStatusChange') {
              setSnowfallFeatureEnabled(data.snowfallEnabled);
              // If feature is disabled, stop any active snow
              if (!data.snowfallEnabled) {
                setIsSnowing(false);
                sessionStorage.removeItem('snowActive');
              }
            }
          } catch (err) {
            console.error('Error parsing WebSocket message:', err);
          }
        };

        ws.onerror = (error) => {
          console.error('WebSocket error:', error);
        };

        ws.onclose = () => {
          console.log('Snow feature WebSocket disconnected');
        };
      } catch (error) {
        console.error('Failed to create WebSocket:', error);
      }
    };

    connectWebSocket();

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  // Restore snow state from sessionStorage on mount
  useEffect(() => {
    const savedSnowState = sessionStorage.getItem('snowActive');
    if (savedSnowState === 'true' && snowfallFeatureEnabled) {
      setIsSnowing(true);
    }
  }, [snowfallFeatureEnabled]);

  // Save snow state to sessionStorage whenever it changes
  useEffect(() => {
    if (isSnowing) {
      sessionStorage.setItem('snowActive', 'true');
    } else {
      sessionStorage.removeItem('snowActive');
    }
  }, [isSnowing]);

  const handleStartSnow = () => {
    setIsSnowing(true);
  };

  const handleStopSnow = () => {
    setIsSnowing(false);
  };

  return (
    <div className="main-container">
      <Navbar 
        snowfallFeatureEnabled={snowfallFeatureEnabled}
        isSnowing={isSnowing}
        onStartSnow={handleStartSnow}
        onStopSnow={handleStopSnow}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/democracy-dashboard" element={<DemocracyDashboard />} />
        <Route path="/privacy-policy" element={<PolicyPage />} />
      </Routes>
      <Footer />
      
      {/* Snow Effects */}
      <SnowEffects isSnowing={isSnowing} onStop={handleStopSnow} />
      
      {/* Santa flies whenever snowfall feature is enabled, regardless of active snow */}
      <SantaSleigh isActive={snowfallFeatureEnabled} />
      
      {/* Snow caps on navbar and footer when snowfall feature is enabled */}
      <SnowCaps isActive={snowfallFeatureEnabled} />
    </div>
  );
}

export default App;