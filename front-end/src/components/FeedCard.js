import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const FeedCard = (props) => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
      <div className="container-fluid">
        <section className="profile-details">
        <h2>{user.username}</h2>
        <p>{props.feed.text}</p>
        </section>
      </div>
    )
  )
}

export default FeedCard;