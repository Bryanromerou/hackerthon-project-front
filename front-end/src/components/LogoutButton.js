import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { User } from 'react-feather';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <>
      <a className="nav-link">
        <img src={ User } className="user-icon" alt="user"/>
      </a>
      <a className="nav-link" onClick={() => logout()}>
        Sign Out
      </a>
      </>
    )
  )
}

export default LogoutButton