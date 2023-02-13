import React from 'react'
import { useParams } from 'react-router-dom';
import { mockData } from '../../mockData';

const UserDetails = () => {
    const { userid } = useParams();
    let user = mockData.find(item => item.id === Number(userid));


  return (
    <div>{user.email}</div>
  )
}

export default UserDetails