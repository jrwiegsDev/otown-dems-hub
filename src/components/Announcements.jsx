// src/components/Announcements.jsx

import React, { useState, useEffect } from 'react';
import './Announcements.css';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect theme on mount and when it changes
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      setIsDarkMode(htmlElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
        const response = await fetch(`${API_URL}/api/announcements`);
        if (!response.ok) {
          throw new Error('Failed to fetch announcements');
        }
        const data = await response.json();
        // Get the last 5 announcements
        setAnnouncements(data.slice(0, 5));
      } catch (err) {
        setError(err.message);
        console.error('Error fetching announcements:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  const openModal = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

  const closeModal = () => {
    setSelectedAnnouncement(null);
  };

  if (loading) {
    return (
      <div className="announcements-section">
        <h3>Community Announcements</h3>
        <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>Loading announcements...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="announcements-section">
        <h3>Community Announcements</h3>
        <p style={{ color: 'var(--text-secondary)' }}>Unable to load announcements at this time.</p>
      </div>
    );
  }

  if (announcements.length === 0) {
    return (
      <div className="announcements-section">
        <h3>Community Announcements</h3>
        <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>No announcements at this time. Check back soon!</p>
      </div>
    );
  }

  return (
    <>
      <div className="announcements-section">
        <h3>Community Announcements</h3>
        <div style={{ 
          maxHeight: '400px', 
          overflowY: 'auto',
          paddingRight: '8px'
        }}>
          {announcements.map((announcement) => (
            <div 
              key={announcement._id} 
              className="announcement-item"
              onClick={() => openModal(announcement)}
              style={{
                padding: '12px',
                marginBottom: '10px',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: isDarkMode 
                  ? 'rgba(255, 255, 255, 0.05)' 
                  : 'rgba(0, 0, 0, 0.02)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDarkMode 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isDarkMode 
                  ? 'rgba(255, 255, 255, 0.05)' 
                  : 'rgba(0, 0, 0, 0.02)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <h4 style={{ 
                color: 'var(--accent-blue)', 
                marginTop: 0, 
                marginBottom: '6px',
                fontSize: '1rem'
              }}>
                {announcement.title}
              </h4>
              <p style={{ 
                fontSize: '0.75rem', 
                color: 'var(--text-secondary)', 
                margin: 0,
                fontStyle: 'italic' 
              }}>
                Posted {new Date(announcement.createdAt).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedAnnouncement && (
        <div 
          className="announcement-modal-overlay"
          onClick={closeModal}
        >
          <div 
            className="announcement-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="announcement-modal-close"
              onClick={closeModal}
            >
              ×
            </button>
            
            <h2 className="announcement-modal-title">
              {selectedAnnouncement.title}
            </h2>
            
            <p className="announcement-modal-date">
              Posted {new Date(selectedAnnouncement.createdAt).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
              })}
            </p>

            {selectedAnnouncement.image && (
              <div className="announcement-modal-image">
                <img 
                  src={selectedAnnouncement.image} 
                  alt={`Image for ${selectedAnnouncement.title}`}
                />
              </div>
            )}
            
            <div className="announcement-modal-body">
              {selectedAnnouncement.content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Announcements;
