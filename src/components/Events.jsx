// src/components/Events.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './FullCalendar.css';
import { useMediaQuery } from '../hooks/useMediaQuery';
import EventDetailModal from './EventDetailModal';
import MultiEventModal from './MultiEventModal';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);
  const [isMultiEventModalOpen, setIsMultiEventModalOpen] = useState(false);

  // 2. Use the hook to check for mobile screen size
  const isMobile = useMediaQuery('(max-width: 1024px)');

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
      linkText: event.eventLinkText,
      fullEvent: event
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

  const closeMultiEventModal = () => {
    setIsMultiEventModalOpen(false);
    setSelectedDateEvents([]);
  };

  const handleEventSelect = (event) => {
    // Close multi-event modal
    closeMultiEventModal();
    // Open single event detail modal
    const eventData = {
      title: event.eventName,
      date: event.eventDate.slice(0, 10),
      description: event.eventDescription,
      time: event.eventTime,
      startTime: event.startTime,
      endTime: event.endTime,
      isAllDay: event.isAllDay,
      location: event.eventLocation,
      coordinates: event.eventCoordinates,
      link: event.eventLink,
      linkText: event.eventLinkText
    };
    setSelectedEvent(eventData);
    setIsModalOpen(true);
  };

  // Format event time for display
  const formatEventTime = (event) => {
    if (event.isAllDay) {
      return 'All Day';
    }
    if (event.startTime && event.endTime) {
      return `${event.startTime} - ${event.endTime}`;
    }
    if (event.startTime) {
      return event.startTime;
    }
    if (event.eventTime) {
      return event.eventTime;
    }
    return 'Time TBD';
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
        dayMaxEventRows={true}
        dayMaxEvents={(arg) => {
          // Count events for this day
          const dateStr = arg.date.toISOString().split('T')[0];
          const eventsOnThisDay = events.filter(event => 
            event.eventDate.slice(0, 10) === dateStr
          ).length;
          // If only 1 event, show it; if 2+, show 0 (only the "X Events" link)
          return eventsOnThisDay === 1 ? true : 0;
        }}
        moreLinkClick={(info) => {
          // Get all events from the segments that were passed
          const eventsOnDate = info.allSegs.map(seg => seg.event.extendedProps.fullEvent);
          setSelectedDateEvents(eventsOnDate);
          setIsMultiEventModalOpen(true);
          info.jsEvent.preventDefault();
          return 'none'; // Prevents the default popover
        }}
        moreLinkContent={(args) => {
          // Get total count from allSegs
          const totalEvents = args.allSegs ? args.allSegs.length : args.num;
          return `${totalEvents} Event${totalEvents !== 1 ? 's' : ''}`;
        }}
        eventDisplay="block"
      />
      
      <EventDetailModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        event={selectedEvent}
      />

      <MultiEventModal 
        isOpen={isMultiEventModalOpen}
        onClose={closeMultiEventModal}
        events={selectedDateEvents}
        onEventSelect={handleEventSelect}
        formatEventTime={formatEventTime}
      />
    </div>
  );
};

export default Events;