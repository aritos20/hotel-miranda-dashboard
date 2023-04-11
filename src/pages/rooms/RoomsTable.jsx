import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRooms } from '../../features/roomsSlice';
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
  const roomsList = useSelector(state => state.roomsStore.rooms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRooms());
  }, [])

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
            {roomsList && roomsList.map(data => (
              <DataRow key={data.id}>
                <BodyData style={{display: 'flex', gap: '10px'}}>
                  <img src={thumbnail} alt="thumbnail of a hotel room" height="70" width="150"/>
                  <GuestText>
                    <li>#{data.id}</li>
                    <li>Deluxe A-91234</li>
                  </GuestText>
                </BodyData>
                <BodyData style={{font: 'normal normal 400 16px Poppins', verticalAlign: 'bottom'}}>
                    {data.room_type}
                </BodyData>
                <BodyData style={{font: 'normal normal 400 16px Poppins', verticalAlign: 'bottom'}}>
                    {data.room_floor}
                </BodyData>
                <BodyData style={{width: '17%'}}>
                    <p style={{font: 'normal normal 400 16px Poppins'}}>
                      {data.amenities}
                    </p>
                </BodyData>
                <BodyData>
                    <PriceStyle>
                        ${data.price}<span>/night</span>
                    </PriceStyle>
                </BodyData>
                <BodyData>
                    <PriceStyle>
                        ${data.offer}<span>/night</span>
                    </PriceStyle>
                </BodyData>
                <BodyData>
                  <ButtonTable>{data.room_status.toString()}</ButtonTable>
                </BodyData>
              </DataRow>
            ))}
            </tbody>
          </TableContainer>
      )
}

export default RoomsTable