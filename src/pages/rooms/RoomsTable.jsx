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
    PriceStyle,
    ButtonTable
} from './RoomsTableStyled';

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
                    <p style={{font: 'normal normal 400 16px Poppins'}}>
                      AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi
                    </p>
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