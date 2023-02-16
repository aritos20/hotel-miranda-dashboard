import React from 'react';
import { mockData } from '../../mockData';
import { Link } from 'react-router-dom';
import OptionsBar from '../../components/OptionsBar';
import RoomsTable from './RoomsTable';

const OptionsRooms = ['All Rooms', 'Active Employee', 'Inactive Employee'];

const Rooms = () => {
  return (
    <div style={{paddingTop: '56px', paddingBottom: '127px'}}>
      <OptionsBar options={OptionsRooms}/>
      <RoomsTable />
    </div>
  )
}

export default Rooms;