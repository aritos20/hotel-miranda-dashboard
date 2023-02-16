import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mockData } from '../../mockData';

const Table = styled.table`
    width: 90%;
    margin: 0 auto;
    background-color: #ffffff;
`;


const Bookings = () => {
  return (
    // <div>
    //   {
    //     mockData.map(item => (
    //       <div key={item.id} style={{
    //         display: 'flex',
    //         gap: '20px'
    //       }}>
    //         <h4>{item.id}</h4>
    //         <h4>{item.guest_name}</h4>
    //         <Link to={`/bookings/${item.id}`}>see booking</Link>
    //       </div>
    //     ))
    //   }
    // </div>
    <Table>
      <thead>
        <tr>
          <td>Guest</td>
          <td>Order Date</td>
          <td>Check In</td>
          <td>Check Out</td>
          <td>Special Request</td>
          <td>Room Type</td>
          <td>Status</td>
        </tr>
      </thead>
    </Table>
    
  )
}

export default Bookings