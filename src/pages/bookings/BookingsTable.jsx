import React from 'react';
import { mockData } from '../../mockData';
import thumbnail from '../../assets/room.jpg';
import {
  TableContainer,
  HeaderRow,
  HeaderData,
  DataRow,
  BodyData,
  GuestText,
  CheckText,
  ButtonTable
} from './BookingsTableStyled';

const head = [
    {label: 'Guest'},
    {label: 'Order Date'},
    {label: 'Check In'},
    {label: 'Check Out'},
    {label: 'Special Request'},
    {label: 'Room Type'},
    {label: 'Status'},
  ];

const BookingsTable = () => {
    return (
        <TableContainer>
            <thead>
              <HeaderRow>
                {head.map(item => (
                  <HeaderData key={item.label}>
                    {item.label}
                  </HeaderData>
                ))
                }
              </HeaderRow>
            </thead>
            <tbody>
            {mockData.map(data => (
              <DataRow key={data.id}>
                <BodyData style={{display: 'flex', gap: '10px'}}>
                  <img src={thumbnail} alt="thumbnail of a hotel room" height="45"/>
                  <GuestText>
                    <li>{data.guest_name}</li>
                    <li>#000123456</li>
                  </GuestText>
                </BodyData>
                <BodyData style={{font: 'normal normal 400 16px Poppins', verticalAlign: 'top'}}>
                  {data.order_date}
                </BodyData>
                <BodyData>
                  <CheckText>
                    <li>{data.check_in}</li>
                    <li>{data.check_in_hour}</li>
                  </CheckText>
                </BodyData>
                <BodyData>
                  <CheckText>
                    <li>{data.check_out}</li>
                    <li>{data.check_out_hour}</li>
                  </CheckText>
                </BodyData>
                <BodyData>
                  <ButtonTable>View Notes</ButtonTable>
                </BodyData>
                <BodyData style={{font: 'normal normal 500 16px Poppins', verticalAlign: 'top'}}>
                  {data.room_type}
                </BodyData>
                <BodyData>
                  <ButtonTable>Status</ButtonTable>
                </BodyData>
              </DataRow>
            ))}
            </tbody>
          </TableContainer>
      )
}

export default BookingsTable