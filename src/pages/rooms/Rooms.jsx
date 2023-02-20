import React from 'react';
import NewAndSelect from '../../components/NewAndSelect/NewAndSelect';
import OptionsBar from '../../components/OptionsBar/OptionsBar';
import RoomsTable from './RoomsTable';

const OptionsRooms = ['All Rooms', 'Active Employee', 'Inactive Employee'];

const Rooms = () => {
  return (
    <div style={{paddingTop: '56px', paddingBottom: '127px'}}>
      <div style={{display: 'flex', width: '90%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
        <OptionsBar options={OptionsRooms}/>
        <NewAndSelect textButton="New Room" show={true}/>
      </div>
      <RoomsTable />
    </div>
  )
}

export default Rooms;