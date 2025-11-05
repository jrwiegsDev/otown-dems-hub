// src/components/MultiEventModal.jsx

import React from 'react';
import './MultiEventModal.css';

const MultiEventModal = ({ isOpen, onClose, events, onEventSelect, formatEventTime }) => {
  if (!isOpen || !events || events.length === 0) return null;

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

  return (
    <div className="multi-event-modal-overlay" onClick={onClose}>
      <div className="multi-event-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="multi-event-modal-close" onClick={onClose}>&times;</button>
        
        <h2 className="multi-event-modal-title">
          Events on {formatDate(events[0].eventDate)}
        </h2>
        
        <div className="multi-event-list">
          {events.map((event) => (
            <div
              key={event._id}
              className="multi-event-item"
              onClick={() => onEventSelect(event)}
            >
              <div className="multi-event-content">
                <h3 className="multi-event-name">{event.eventName}</h3>
                <p className="multi-event-time">{formatEventTime(event)}</p>
                {event.eventDescription && (
                  <p className="multi-event-description">{event.eventDescription}</p>
                )}
                {event.eventLocation && (
                  <p className="multi-event-location">📍 {event.eventLocation}</p>
                )}
              </div>
              <span className="multi-event-arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiEventModal;
