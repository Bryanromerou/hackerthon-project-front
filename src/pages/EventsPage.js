import React from 'react';
import axios from 'axios';
import { EventsContextProvider } from '../components/EventsContext';
import Events from "../components/Events";

const EventsPage = () => {
  return (
      <EventsContextProvider>
        <Events />
      </EventsContextProvider>
  );
}

export default EventsPage;
