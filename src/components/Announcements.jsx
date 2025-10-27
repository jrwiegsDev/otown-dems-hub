// src/components/Announcements.jsx

import React, { useState, useEffect } from 'react';

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
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
        >
          <div 
            className="announcement-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--surface)',
              color: 'var(--text-primary)',
              padding: '30px',
              borderRadius: '12px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
              border: '1px solid var(--border-color)'
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '28px',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                lineHeight: '1',
                padding: '5px 10px',
                opacity: 0.7
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-blue)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.opacity = '0.7';
              }}
            >
              ×
            </button>
            
            <h2 style={{ 
              color: 'var(--accent-blue)', 
              marginTop: 0,
              marginBottom: '12px',
              paddingRight: '30px'
            }}>
              {selectedAnnouncement.title}
            </h2>
            
            <p style={{ 
              fontSize: '0.85rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '20px',
              fontStyle: 'italic' 
            }}>
              Posted {new Date(selectedAnnouncement.createdAt).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
              })}
            </p>
            
            <div style={{ 
              whiteSpace: 'pre-wrap', 
              lineHeight: '1.6',
              color: 'var(--text-primary)'
            }}>
              {selectedAnnouncement.content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Announcements;
