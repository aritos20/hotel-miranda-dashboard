import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthProvider';

const Dashboard = () => {
  const auth = useAuth();
  const navigate = useNavigate()

  return (
    <div>
      <h2>Dashboard, Welcome {auth.user.email}</h2>
    </div>
  )
}

export default Dashboard