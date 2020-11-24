import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ACCESS_TOKEN } from '../config/key';

export const NDContext = createContext()

export const NDContextProvider = (props) => {
  const [data, setData] = useState()
  const category = 'severe-weather, disasters, terror, health-warnings'
  const country = 'US'
  // const location_around = '10mi'
  // &location_around.offset=${location_around} within get query

  useEffect(() => {
    axios
    .get(
      `https://api.predicthq.com/v1/events/?q=${category}&country=${country}&limit=20`, 
      {
        headers: {
          "Authorization": `Bearer ${ACCESS_TOKEN} `,
          "Accept": "application/json"
        },
      }
    )
    .then((response) => {
      setData(response.data);
      console.log(response.data);
    })
    .catch((error) => console.log(error));
  }, []);

  return (
    <NDContext.Provider 
      value = {{ data }}>
      {props.children}
    </NDContext.Provider>
  )
}