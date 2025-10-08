// src/components/Events.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './FullCalendar.css';

// --- NEW: Tippy.js imports for tooltips ---
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // Optional for default styling

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // --- NEW: Custom function to render event content with a tooltip ---
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
        // --- NEW: Use our custom render function ---
        eventContent={renderEventContent}
        height="auto"
      />
    </div>
  );
};

export default Events;