import React, { useContext } from "react";
import { EventsContext }  from "./EventsContext";
import EventsCard from "./EventsCard";


// Recieving an error on line 7 >>> TO DO <<<
function Events(props) {
  const {data} = useContext(EventsContext);
  console.log(data);

  return (
    <div className="container-fluid events-container">
      <div className="all__news">
        {data
          ? data.results.map((events) => (
              <EventsCard data={events} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default Events;