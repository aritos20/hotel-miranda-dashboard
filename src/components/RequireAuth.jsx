import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider'

const RequireAuth = ({ children }) => {
  const auth = useAuth();

  if (!auth.user.isLogged) {
    return <Navigate to="/login" />
  }
    
  return children;
}

export default RequireAuth