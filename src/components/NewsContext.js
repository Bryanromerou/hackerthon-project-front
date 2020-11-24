import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../config/key';

export const NewsContext = createContext()
// const query = {GoogleMaps.city.name}
// This query will build from Bryan's Google Maps click feature
// Once a city is clicked, the name of that city will need to pass as the query variable.

export const NewsContextProvider = (props) => {
  const [data, setData] = useState()
  const countryQuery = 'us'

  useEffect(() => {
    axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=${countryQuery}&q=covid&apiKey=${API_KEY}`
    )
    .then((response) => setData(response.data))
    .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider 
      value = {{ data }}>
      {props.children}
    </NewsContext.Provider>
  )
}