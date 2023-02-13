import React from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../../mockData';

const Bookings = () => {
  return (
    <div>
      {
        mockData.map(item => (
          <div key={item.id} style={{
            display: 'flex',
            gap: '20px'
          }}>
            <h4>{item.id}</h4>
            <h4>{item.first_name}</h4>
            <h4>{item.last_name}</h4>
            <h4>{item.email}</h4>
            <Link to={`/bookings/${item.id}`}>see booking</Link>
          </div>
        ))
      }
    </div>
  )
}

export default Bookings