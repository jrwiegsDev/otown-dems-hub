// src/components/SnowCaps.jsx
import { useEffect } from 'react';
import './SnowCaps.css';

const SnowCaps = ({ isActive }) => {
  useEffect(() => {
    if (!isActive) {
      // Remove all snow caps when not active
      document.querySelectorAll('.snow-cap-overlay').forEach(cap => cap.remove());
      return;
    }

    const addSnowCaps = () => {
      // Remove any existing caps first
      document.querySelectorAll('.snow-cap-overlay').forEach(cap => cap.remove());
      
      // Target the navbar and footer
      const navbar = document.querySelector('.navbar');
      const footer = document.querySelector('.site-footer');
      
      // Determine if we're on a wide display (3 caps) or narrow (2 caps)
      const isWideDisplay = window.innerWidth > 1024;
      
      // Top positions for navbar and footer
      const topPositions = isWideDisplay 
        ? [15, 40, 85]  // Wide: 3 caps at 15%, 40%, 85%
        : [30, 70];     // Narrow: 2 caps at 30%, 70%
      
      // Bottom positions for navbar only
      const bottomPositions = isWideDisplay
        ? [5, 60, 95]   // Wide: 3 caps at 5%, 60%, 95%
        : [20, 80];     // Narrow: 2 caps at 20%, 80%
      
      const containers = [
        { element: navbar, addBottom: true },
        { element: footer, addBottom: false }
      ];
      
      containers.forEach(({ element, addBottom }) => {
        if (!element) return;
        
        element.style.position = 'relative';
        element.style.overflow = 'visible';
        
        const capWidth = 100;
        
        // Top caps - fixed positions
        topPositions.forEach(position => {
          const cap = document.createElement('img');
          cap.src = '/snowcap-1.png';
          cap.className = 'snow-cap-overlay middle top';
          cap.style.width = `${capWidth}px`;
          cap.style.left = `${position}%`;
          element.appendChild(cap);
        });
        
        // Bottom caps - fixed positions, only for navbar
        if (addBottom) {
          bottomPositions.forEach(position => {
            const cap = document.createElement('img');
            cap.src = '/snowcap-1.png';
            cap.className = 'snow-cap-overlay middle bottom';
            cap.style.width = `${capWidth}px`;
            cap.style.left = `${position}%`;
            element.appendChild(cap);
          });
        }
      });
    };

    // Run immediately
    addSnowCaps();
    
    // Run again after a short delay
    const timeoutId = setTimeout(addSnowCaps, 200);
    
    // Re-add caps on window resize to adjust for screen width changes
    window.addEventListener('resize', addSnowCaps);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', addSnowCaps);
      document.querySelectorAll('.snow-cap-overlay').forEach(cap => cap.remove());
    };
  }, [isActive]);

  return null;
};

export default SnowCaps;
