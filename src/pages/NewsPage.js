import React from 'react';
import axios from 'axios';
import { NewsContextProvider } from '../components/NewsContext';
import News from "../components/News";

const NewsPage = () => {
  return (
      <NewsContextProvider>
        <News />
      </NewsContextProvider>
  );
}

export default NewsPage;
