import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteBooking, getAllBookings } from '../../features/bookingsSlice';
import { useNavigate } from 'react-router';
import { BsXCircle } from 'react-icons/bs';
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
    const bookingsList = useSelector(state => state.bookingsStore.bookings);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      if (bookingsList && bookingsList.length === 0) {
        dispatch(getAllBookings());
      }
    }, [dispatch, bookingsList])

    const handleClick = (bookingId) => {
        navigate(`/bookings/${bookingId}`);
    }

    const handleDelete = (id) => {
      dispatch(DeleteBooking(`bookings/${id}`))
    }

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
            {bookingsList && bookingsList.map(data => (
              <DataRow key={data.id}>
                <BodyData style={{display: 'flex', gap: '10px', cursor: 'pointer'}} onClick={() => handleClick(data.id)}>
                  <img src={data.guest_picture} alt="thumbnail of a hotel room" height="45"/>
                  <GuestText>
                    <li>{data.guest_name}</li>
                    <li>#{data.id}</li>
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
                  <BsXCircle onClick={() => handleDelete(data.id)} style={{color: '#E23428', width: '24px', height: '24px', marginLeft: '16px', cursor: 'pointer'}}/>
                </BodyData>
              </DataRow>
            ))}
            </tbody>
          </TableContainer>
      )
}

export default BookingsTable