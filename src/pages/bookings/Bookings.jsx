import React from 'react';
import NewAndSelect from '../../components/NewAndSelect/NewAndSelect';
import OptionsBar from '../../components/OptionsBar/OptionsBar';
import BookingsTable from './BookingsTable';
import BeatLoader from 'react-spinners/BeatLoader';
import { useSelector } from 'react-redux';

const OptionsBookings = ['All Guest', 'Pending', 'Booked', 'Canceled', 'Refund'];

const override = {
  display: "flex",
  justifyContent: 'center',
  marginTop: '180px'
}

const Bookings = () => {
  const status = useSelector(state => state.bookingsStore.status);

  return (
    <div style={{paddingTop: '56px', paddingBottom: '127px'}}>
      {status === 'loading' ? 
      <BeatLoader 
      color="#135846"
      size={50}
      cssOverride={override}/> :
      <>
        <div style={{display: 'flex', width: '90%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
          <OptionsBar options={OptionsBookings}/>
          <NewAndSelect textButton="New Room" show={false}/>
        </div>
        <BookingsTable />
      </>
    }
    </div>
  )
}

export default Bookings;