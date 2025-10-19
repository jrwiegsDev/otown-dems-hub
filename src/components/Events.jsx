// src/components/Events.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './FullCalendar.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useMediaQuery } from '../hooks/useMediaQuery'; // <-- 1. Import the hook

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Use the hook to check for mobile screen size
  const isMobile = useMediaQuery('(max-width: 1024px)');

  // ... (useEffect, formattedEvents, renderEventContent remain the same) ...
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events`);
        setEvents(response.data);
      } catch (err) {
        setError('Failed to load events. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const formattedEvents = events.map(event => ({
    title: event.eventName,
    date: event.eventDate.slice(0, 10),
    extendedProps: {
      description: event.eventDescription,
      time: event.eventTime
    }
  }));

  const renderEventContent = (eventInfo) => {
    const { description, time } = eventInfo.event.extendedProps;
    const tooltipContent = `
      <div>
        <p><strong>Time:</strong> ${time || 'N/A'}</p>
        <p><strong>Info:</strong> ${description || 'No details'}</p>
      </div>
    `;

    return (
      <Tippy content={<div dangerouslySetInnerHTML={{ __html: tooltipContent }} />}>
        <div className="fc-event-main-frame">
          <div className="fc-event-title-container">
            <div className="fc-event-title fc-sticky">{eventInfo.event.title}</div>
          </div>
        </div>
      </Tippy>
    );
  };

  if (loading) return <p>Loading events...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;


  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={formattedEvents}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek'
        }}
        eventContent={renderEventContent}
        height={isMobile ? 'auto' : '100%'}
        aspectRatio={1.8} /* <-- ADD THIS PROP */
      />
    </div>
  );
};

export default Events;