import React from 'react';
import { NDContextProvider } from '../components/NDContext';
import NDs from "../components/NDs";

const EventsPage = () => {
  return (
      <NDContextProvider>
        <NDs />
      </NDContextProvider>
  );
}

export default EventsPage;
