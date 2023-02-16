import React from 'react';
import { mockData } from '../../mockData';
import { Link } from 'react-router-dom';
import OptionsBar from '../../components/OptionsBar';

const OptionsRooms = ['All Rooms', 'Active Employee', 'Inactive Employee'];

const Rooms = () => {
  return (
  //   <div>
  //   {
  //     mockData.map(item => (
  //       <div key={item.id} style={{
  //         display: 'flex',
  //         gap: '20px'
  //       }}>
  //         <h4>{item.id}</h4>
  //         <h4>{item.first_name}</h4>
  //         <h4>{item.last_name}</h4>
  //         <h4>{item.email}</h4>
  //         <Link to={`/rooms/${item.id}`}>see room</Link>
  //       </div>
  //     ))
  //   }
  // </div>
    <OptionsBar options={OptionsRooms}/>
  )
}

export default Rooms;