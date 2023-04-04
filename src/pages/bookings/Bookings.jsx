import React from 'react';
import NewAndSelect from '../../components/NewAndSelect/NewAndSelect';
import OptionsBar from '../../components/OptionsBar/OptionsBar';
import BookingsTable from './BookingsTable';

const OptionsBookings = ['All Guest', 'Pending', 'Booked', 'Canceled', 'Refund'];

const Bookings = () => {
  return (
    <div style={{paddingTop: '56px', paddingBottom: '127px'}}>
      <div style={{display: 'flex', width: '90%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
        <OptionsBar options={OptionsBookings}/>
        <NewAndSelect textButton="New Room" show={false}/>
      </div>
      <BookingsTable />
    </div>
  )
}

export default Bookings;