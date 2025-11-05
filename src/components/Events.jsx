// src/components/Events.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './FullCalendar.css';
import { useMediaQuery } from '../hooks/useMediaQuery';
import EventDetailModal from './EventDetailModal';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    id: event._id,
    title: event.eventName,
    date: event.eventDate.slice(0, 10),
    extendedProps: {
      description: event.eventDescription,
      time: event.eventTime,
      startTime: event.startTime,
      endTime: event.endTime,
      isAllDay: event.isAllDay,
      location: event.eventLocation,
      coordinates: event.eventCoordinates,
      link: event.eventLink,
      linkText: event.eventLinkText
    }
  }));

  const handleEventClick = (clickInfo) => {
    const eventData = {
      title: clickInfo.event.title,
      date: clickInfo.event.startStr,
      ...clickInfo.event.extendedProps
    };
    setSelectedEvent(eventData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  if (loading) return <p>Loading events...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;


  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={formattedEvents}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek'
        }}
        eventClick={handleEventClick}
        height={isMobile ? 'auto' : '100%'}
        aspectRatio={1.8}
      />
      
      <EventDetailModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        event={selectedEvent}
      />
    </div>
  );
};

export default Events;