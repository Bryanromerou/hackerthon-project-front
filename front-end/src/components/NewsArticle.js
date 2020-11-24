import React from 'react';

const NewsArticle = ({data}) => {
  return (
    <div className="card mt-5 news">
      <a href={data.source.url}><h1 className="card-title news__title">{data.title}</h1></a>
      <p className="card-body news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
    </div>
  );
}

export default NewsArticle;