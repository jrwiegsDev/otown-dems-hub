// src/components/SantaSleigh.jsx
import { useEffect, useState } from 'react';
import './SantaSleigh.css';

const SantaSleigh = ({ isActive }) => {
  const [isFlying, setIsFlying] = useState(false);
  const [direction, setDirection] = useState(() => Math.random() > 0.5 ? 'ltr' : 'rtl');
  const [topPosition, setTopPosition] = useState(20);

  useEffect(() => {
    if (!isActive) {
      setIsFlying(false);
      return;
    }

    const scheduleNextFlight = () => {
      // Random interval between 10-15 seconds
      const randomDelay = Math.floor(Math.random() * 5000) + 10000;
      
      return setTimeout(() => {
        // Random vertical position (10% to 70% of viewport height)
        setTopPosition(Math.floor(Math.random() * 60) + 10);
        
        setIsFlying(true);
        
        // Hide after animation completes (6 seconds)
        setTimeout(() => {
          setIsFlying(false);
          // Toggle direction for next flight
          setDirection(prev => prev === 'ltr' ? 'rtl' : 'ltr');
          scheduleNextFlight(); // Schedule next flight
        }, 6000);
      }, randomDelay);
    };

    const timeoutId = scheduleNextFlight();

    return () => clearTimeout(timeoutId);
  }, [isActive]);

  if (!isActive || !isFlying) return null;

  return (
    <div 
      className={`santa-sleigh ${direction}`}
      style={{ top: `${topPosition}%` }}
    >
      <img 
        src="/santa-sleigh.gif" 
        alt="Santa and his reindeer" 
        className="santa-image"
      />
    </div>
  );
};

export default SantaSleigh;
