// src/components/EventDetailModal.jsx

import React from 'react';
import './EventDetailModal.css';

const EventDetailModal = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null;

  // Format the date nicely
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      timeZone: 'UTC'
    });
  };

  // Format time display - prefer new format, fallback to old
  const formatTime = () => {
    if (event.isAllDay) {
      return 'All Day';
    }
    if (event.startTime && event.endTime) {
      return `${event.startTime} - ${event.endTime}`;
    }
    if (event.startTime) {
      return event.startTime;
    }
    if (event.time) {
      return event.time;
    }
    return 'Time TBD';
  };

  // Handle "Get Directions" click
  const handleGetDirections = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Prefer using the formatted address if available
    if (event.location) {
      const encodedAddress = encodeURIComponent(event.location);
      
      if (isMobile) {
        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (isIOS) {
          // iOS: Use address for Apple Maps
          window.location.href = `maps://?address=${encodedAddress}`;
          // Fallback to Google Maps after a delay
          setTimeout(() => {
            window.location.href = `https://maps.google.com/?q=${encodedAddress}`;
          }, 500);
        } else {
          // Android: Use address with geo scheme
          if (event.coordinates && event.coordinates.lat && event.coordinates.lng) {
            window.location.href = `geo:${event.coordinates.lat},${event.coordinates.lng}?q=${encodedAddress}`;
          } else {
            window.location.href = `geo:0,0?q=${encodedAddress}`;
          }
        }
      } else {
        // Desktop: Open Google Maps with address
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
      }
    } else if (event.coordinates && event.coordinates.lat && event.coordinates.lng) {
      // Fallback to coordinates only if no address is available
      const { lat, lng } = event.coordinates;
      
      if (isMobile) {
        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (isIOS) {
          window.location.href = `maps://maps.apple.com/?q=${lat},${lng}`;
        } else {
          window.location.href = `geo:${lat},${lng}?q=${lat},${lng}`;
        }
      } else {
        window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
      }
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <h2 className="modal-title">{event.title}</h2>

        {event.image && (
          <div className="event-image-container">
            {event.image.startsWith('data:application/pdf') ? (
              <iframe
                src={event.image}
                title={`Flyer for ${event.title}`}
                className="event-pdf"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            ) : (
              <img 
                src={event.image} 
                alt={`Flyer for ${event.title}`}
                className="event-image"
              />
            )}
          </div>
        )}
        
        <div className="modal-details">
          <div className="detail-item">
            <strong>Date:</strong>
            <span>{formatDate(event.date)}</span>
          </div>
          
          <div className="detail-item">
            <strong>Time:</strong>
            <span>{formatTime()}</span>
          </div>
          
          {event.location && (
            <div className="detail-item">
              <strong>Location:</strong>
              <span>{event.location}</span>
            </div>
          )}
          
          {event.description && (
            <div className="detail-item">
              <strong>Details:</strong>
              <p>{event.description}</p>
            </div>
          )}
        </div>
        
        <div className="modal-actions">
          {event.location && (
            <button 
              className="btn-directions" 
              onClick={handleGetDirections}
            >
              Get Directions
            </button>
          )}
          
          {event.link && (
            <a 
              href={event.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-link"
            >
              {event.linkText || 'Learn More'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetailModal;
