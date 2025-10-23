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
        
        // Find the next upcoming event
        const now = new Date();
        const upcomingEvents = events.filter(event => {
          const eventDate = new Date(event.eventDate);
          return eventDate >= now;
        });
        
        // Get the closest upcoming event
        const nextUpcomingEvent = upcomingEvents.length > 0 ? upcomingEvents[0] : null;
        setNextEvent(nextUpcomingEvent);
      } catch (error) {
        console.error('Error fetching events for banner:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNextEvent();
  }, []);

  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
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
            <p>{nextEvent.eventDescription}</p>
          )}
        </>
      ) : (
        <>
          <h2>Stay Connected with OADC!</h2>
          <p>No upcoming events scheduled. Check back soon for new events!</p>
        </>
      )}
      
      {/* Custom announcements section - you can edit this part for special messages */}
      <div className="custom-announcements">
        <p>Thank you to everyone who showed up and made their voices heard at No Kings 2.0! Crowd estimates are between 695 - 750 people downtown!!!</p>
      </div>
    </div>
  );
};

export default Banner;