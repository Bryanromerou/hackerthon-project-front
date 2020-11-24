import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
     <div className="container-fluid">
       <section className="profile-details">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <JSONPretty data={user} />
       </section>
       <section className="profile-activity">
        <h1>This is where profile activity will go.</h1>
       </section>
        {/* {JSON.stringify(user, null, 2)} */}
      </div>
    )
  )
}

export default Profile