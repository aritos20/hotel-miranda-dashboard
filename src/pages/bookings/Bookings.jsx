import React from 'react';
import OptionsBar from '../../components/OptionsBar/OptionsBar';
import BookingsTable from './BookingsTable';

const OptionsBookings = ['All Guest', 'Pending', 'Booked', 'Canceled', 'Refund'];

const Bookings = () => {
  return (
    <div style={{paddingTop: '56px', paddingBottom: '127px'}}>
      <OptionsBar options={OptionsBookings}/>
      <BookingsTable />
    </div>
  )
}

export default Bookings