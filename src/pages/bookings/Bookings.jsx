import React from 'react';
import styled from 'styled-components';
import { mockData } from '../../mockData';
import thumbnail from '../../assets/room.jpg';

const Table = styled.table`
    width: 90%;
    margin: 0 auto;
    background-color: #ffffff;
    border-collapse: collapse;
    border-radius: 20px;
`;

const HeaderRow = styled.tr`
`

const HeaderData = styled.td`
  padding: 12px;
  border-bottom: 1px solid #cccccc;
  font-family: var(--font-poppins);
  font-weight: 600;
  font-size: 16px;
  color: #393939;
`

const BodyData = styled.td`
  padding: 12px;
  img {
    max-width: 45px;
    object-fit: cover;
    border-radius: 8px;
  }
`

const ButtonTable = styled.button`
  padding: 8px 24px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`

const GuestText = styled.ul`
  list-style: none;

  li:nth-child(1) {
    font-family: var(--font-poppins);
    font-weight: 500;
    font-size: 16px;
    color: #393939;
  }

  li:nth-child(2) {
    font-family: var(--font-poppins);
    font-weight: 400;
    font-size: 14px;
    color: #799283;
  }
`

const head = [
  {label: 'Guest'},
  {label: 'Order Date'},
  {label: 'Check In'},
  {label: 'Check Out'},
  {label: 'Special Request'},
  {label: 'Room Type'},
  {label: 'Status'},
];

const Bookings = () => {
  return (
    <div style={{paddingTop: '127px'}}>
      <Table>
        <thead>
          <HeaderRow>
            {head.map(item => (
              <HeaderData key={item.label}>{item.label}</HeaderData>
            ))
            }
          </HeaderRow>
        </thead>
        <tbody>
        {mockData.map(data => (
          <tr key={data.id}>
            <BodyData style={{display: 'flex', gap: '10px'}}>
              <img src={thumbnail} alt="thumbnail of a hotel room" height="45"/>
              <GuestText>
                <li>{data.guest_name}</li>
                <li>#000123456</li>
              </GuestText>
            </BodyData>
            <BodyData>{data.order_date}</BodyData>
            <BodyData>{data.check_in}</BodyData>
            <BodyData>{data.check_out}</BodyData>
            <BodyData>
              <ButtonTable>View Notes</ButtonTable>
            </BodyData>
            <BodyData>{data.room_type}</BodyData>
            <BodyData>
              <ButtonTable>status</ButtonTable>
            </BodyData>
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Bookings