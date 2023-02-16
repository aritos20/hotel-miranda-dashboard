import React from 'react';
import styled from 'styled-components';
import { mockData } from '../../mockData';
import thumbnail from '../../assets/room.jpg';

const TableContainer = styled.table`
    width: 90%;
    margin: 0 auto;
    background-color: #ffffff;
    border-collapse: collapse;
    border-radius: 20px;
`;

const HeaderRow = styled.tr`
`

const DataRow = styled.tr`
  &:hover {
    box-shadow: 0px 4px 30px #0000001A;
  }
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
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-family: var(--font-poppins);
  font-weight: 500;
  font-size: 16px;
  color: #212121;
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
    color: var(--color-sidebar);
  }
`;

const CheckText = styled.ul`
  list-style: none;

  li:nth-child(1) {
    font-family: var(--font-poppins);
    font-size: 16px;
    font-weight: 500;
    color: #393939;
  }

  li:nth-child(2) {
    font-family: var(--font-poppins);
    font-size: 14px;
    font-weight: 400;
    color: #393939;
  }
`;

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
                  <HeaderData key={item.label}>{item.label}</HeaderData>
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
                <BodyData style={{font: 'normal normal 400 16px Poppins', verticalAlign: 'top'}}>{data.order_date}</BodyData>
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
                <BodyData style={{font: 'normal normal 500 16px Poppins', verticalAlign: 'top'}}>{data.room_type}</BodyData>
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