// src/components/Banner.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Banner = () => {
  const [nextEvent, setNextEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNextEvent = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events`);
        const events = response.data;
        
        // Only show an event in the banner if it's explicitly marked as a banner event
        const bannerEvent = events.find(event => event.isBannerEvent === true);
        
        if (bannerEvent) {
          setNextEvent(bannerEvent);
        } else {
          // No banner event selected - show default message
          setNextEvent(null);
        }
      } catch (error) {
        console.error('Error fetching events for banner:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNextEvent();
  }, []);

  const formatEventDate = (dateString) => {
    // Use the same approach as the Events component to avoid timezone issues
    const dateOnly = dateString.slice(0, 10); // Get YYYY-MM-DD format
    const [year, month, day] = dateOnly.split('-');
    const date = new Date(year, month - 1, day); // Create date in local timezone
    
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="protest-banner">
        <h2>Loading upcoming event...</h2>
      </div>
    );
  }

  return (
    <div className="protest-banner">
      {nextEvent ? (
        <>
          <h2>Join Us for the {nextEvent.eventName}!</h2>
          <p>
            <strong>Date:</strong> {formatEventDate(nextEvent.eventDate)}<br />
            {nextEvent.eventTime && (
              <>
                <strong>Time:</strong> {nextEvent.eventTime}<br />
              </>
            )}
          </p>
          {nextEvent.eventDescription && (
            <p style={{ whiteSpace: 'pre-line' }}>{nextEvent.eventDescription}</p>
          )}
          {nextEvent.eventLink && (
            <a 
              href={nextEvent.eventLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="banner-event-link"
            >
              {nextEvent.eventLinkText || 'Learn More'} →
            </a>
          )}
        </>
      ) : (
        <>
          <h2>Stay Connected with OADC!</h2>
          <p>No upcoming events scheduled. Check back soon for new events!</p>
        </>
      )}
    </div>
  );
};

export default Banner;