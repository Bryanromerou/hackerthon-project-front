import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Profile = (props) => {
  const { user, isAuthenticated } = useAuth0();

  const covidNews = props.list.map((item, index) => {
    return <div key={index}>{item}</div> 
  })

  const newsCount = props.list.map((item, index) => {
    return <NewsAlert key={index} item={item} />
  })

  const postCount = db.collection('collection_name');
  postCount.countDocuments().then((count) => {

  })

  return (
    isAuthenticated && ( 
      <div>
        <CovidAlert news={covidNews}/>
        {newsCount}
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <JSONPretty data={user} />
        {/* {JSON.stringify(user, null, 2)} */}
        <h2>Recent Activities</h2>
        <div>

        </div>
      </div>
    )
  )
}

export default Profile