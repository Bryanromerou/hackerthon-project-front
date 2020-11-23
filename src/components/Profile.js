import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import CovidModel from '../models/covid'

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  useEffect(()=>{
    // CovidModel.dailyUS().then((response)=>{
    //   console.log(response.data)
    // })

    // CovidModel.byState("CA").then((response)=>{
    //   console.log(response.data)
    // })

    // CovidModel.byState_Date("CA",20201121).then((response)=>{
    //   console.log(response.data)
    // })

    console.log("hello")
  },[])

  return (
    isAuthenticated && ( 
     <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <JSONPretty data={user} />
        {/* {JSON.stringify(user, null, 2)} */}
      </div>
    )
  )
}

export default Profile