import React, { useEffect } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useAuth } from './AuthProvider'

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const url = useLocation();

  if (!auth.user.isLogged && url.pathname === '/') {
    return
  }
  if (!auth.user.isLogged) {
    return <Navigate to="/" />
  }
    
  return children;
}

export default RequireAuth