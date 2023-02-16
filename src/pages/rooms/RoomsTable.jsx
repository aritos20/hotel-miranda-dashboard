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
    max-width: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
`

const ButtonTable = styled.button`
  padding: 12px 30px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li:nth-child(2) {
    font-family: var(--font-poppins);
    font-weight: 500;
    font-size: 16px;
    color: #393939;
  }

  li:nth-child(1) {
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

const PriceStyle = styled.p`
    font-family: var(--font-poppins);
    font-weight: 600;
    font-size: 16px;
    color: #212121;
    vertical-align: bottom;

    span {
        font-size: 14px;
        font-weight: 400;
        color: #799283; 
    }
`

const head = [
    {label: 'Room Name'},
    {label: 'Room Type'},
    {label: 'Room Floor'},
    {label: 'Amenities'},
    {label: 'Price'},
    {label: 'Offer Price'},
    {label: 'Status'},
  ];

const RoomsTable = () => {
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
                  <img src={thumbnail} alt="thumbnail of a hotel room" height="70" width="150"/>
                  <GuestText>
                    <li>#000123456</li>
                    <li>Deluxe A-91234</li>
                  </GuestText>
                </BodyData>
                <BodyData style={{font: 'normal normal 400 16px Poppins', verticalAlign: 'bottom'}}>
                    Double Bed
                </BodyData>
                <BodyData style={{font: 'normal normal 400 16px Poppins', verticalAlign: 'bottom'}}>
                    Floor A-1
                </BodyData>
                <BodyData style={{width: '17%'}}>
                    <p style={{
                       font: 'normal normal 400 16px Poppins'
                    }}>AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</p>
                </BodyData>
                <BodyData>
                    <PriceStyle>
                        $315<span>/night</span>
                    </PriceStyle>
                </BodyData>
                <BodyData>
                    <PriceStyle>
                        $145<span>/night</span>
                    </PriceStyle>
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

export default RoomsTable