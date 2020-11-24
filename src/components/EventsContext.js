import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ACCESS_TOKEN } from '../config/key';

export const EventsContext = createContext()

export const EventsContextProvider = (props) => {
  const [data, setData] = useState()
  const q = "Chicago"
  
  useEffect(() => {
    axios
    .get(
      `https://api.predicthq.com/v1/events/?q=${q}&country=US&limit=10`, 
      {
        headers: {
          "Authorization": `Bearer ${ACCESS_TOKEN} `,
          "Accept": "application/json"
        }
      }
      )
      .then((response) => {setData(response.data)
      console.log(response.data)})
      .catch((error) => console.log(error));
    }, []);
    
    return (
      <EventsContext.Provider 
        value = {{ data }}>
        {props.children}
    </EventsContext.Provider>
  )
}

// Code to Revisit Later
// const {setEvents} = useContext(EventsContext);
// setEvents(response.data.results);
{/* <EventsContext.Consumer> */}
{/* {value => <div className="card">{value.description}</div>}   */}
{/* </EventsContext.Consumer> */}