import React from 'react';

const EventsCard = ({data}) => {
  return (
    <div className="card events">
      <h1 className="card-title events__title">{data.title}</h1>
      <p className="card-body events__desc">{data.description}</p>
      {/* <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span> */}
    </div>
  );
}

export default EventsCard;