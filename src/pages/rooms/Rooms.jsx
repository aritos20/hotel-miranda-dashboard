import React from 'react';
import NewAndSelect from '../../components/NewAndSelect/NewAndSelect';
import OptionsBar from '../../components/OptionsBar/OptionsBar';
import RoomsTable from './RoomsTable';
import BeatLoader from 'react-spinners/BeatLoader';
import { useSelector } from 'react-redux';

const OptionsRooms = ['All Rooms', 'Active Employee', 'Inactive Employee'];

const override = {
  display: "flex",
  justifyContent: 'center',
  marginTop: '180px'
}

const Rooms = () => {
  const status = useSelector(state => state.roomsStore.status);

  return (
    <div style={{paddingTop: '56px', paddingBottom: '127px'}}>
      {status === 'loading' ? 
        <BeatLoader 
        color="#135846"
        size={50}
        cssOverride={override}/> :
        <>
          <div style={{display: 'flex', width: '90%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
            <OptionsBar options={OptionsRooms}/>
            <NewAndSelect textButton="New Room" show={true}/>
          </div>
          <RoomsTable />
        </>
      }
    </div>
  )
}

export default Rooms;