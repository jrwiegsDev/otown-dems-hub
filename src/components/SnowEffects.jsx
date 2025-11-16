// src/components/SnowEffects.jsx
import { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';

const SnowEffects = ({ isSnowing, onStop }) => {
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 60-second countdown timer
  useEffect(() => {
    if (!isSnowing) {
      setTimeRemaining(60);
      return;
    }

    setTimeRemaining(60);
    
    const countdown = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          onStop(); // Auto-stop after 60 seconds
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [isSnowing, onStop]);

  if (!isSnowing) return null;

  // Fewer particles on mobile for performance
  const snowflakeCount = isMobile ? 50 : 150;

  return (
    <Snowfall
      color="#fff"
      snowflakeCount={snowflakeCount}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none'
      }}
    />
  );
};

export default SnowEffects;
