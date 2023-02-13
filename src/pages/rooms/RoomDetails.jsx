import React from 'react';
import { useParams } from 'react-router-dom';
import { mockData } from '../../mockData';

const RoomDetails = () => {
    const { roomid } = useParams();
    let room = mockData.find(item => item.id === Number(roomid));


  return (
    <div>{room.email}</div>
  )
}

export default RoomDetails