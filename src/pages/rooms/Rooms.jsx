import React from 'react';
import OptionsBar from '../../components/OptionsBar/OptionsBar';
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