import React from 'react';
import styled from 'styled-components';
import OptionsBar from '../../components/OptionsBar';
import Table from '../../components/Table';

const OptionsBookings = ['All Guest', 'Pending', 'Booked', 'Canceled', 'Refund'];

const Bookings = () => {
  return (
    <div style={{paddingTop: '127px', paddingBottom: '127px'}}>
      <OptionsBar options={OptionsBookings}/>
      <Table />
    </div>
  )
}

export default Bookings