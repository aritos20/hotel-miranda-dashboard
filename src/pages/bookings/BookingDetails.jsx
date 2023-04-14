import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { BookingDetailsContainer, InfoContainer, BookingInfo, CheckInOut, RoomInfo, RoomDescription, Facilities, ImgContainer } from './BookingDetailsStyled';
import thumbnail from '../../assets/room.jpg';
import { FaPhoneAlt } from 'react-icons/fa';
import { TbMessageCircle } from 'react-icons/tb';
import { getBooking } from '../../features/bookingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';

const override = {
  display: "flex",
  justifyContent: 'center',
  marginTop: '180px'
}

const BookingDetails = () => {
  const booking = useSelector(state => state.bookingsStore.booking);
  const status = useSelector(state => state.bookingsStore.status);
  const { bookingid } = useParams();
  const dispatch = useDispatch();
  const checkInParsed = new Date(Date.parse(booking.check_in))

  useEffect(() => {
    dispatch(getBooking(`bookings/${bookingid}`));
  }, [dispatch, bookingid])

  return (
    <div style={{paddingTop: '56px', paddingBottom: '127px'}}>
      {status === 'loading' ?
      <BeatLoader 
        color="#135846"
        size={50}
        cssOverride={override}/> :
      <BookingDetailsContainer>
        <InfoContainer>
          <BookingInfo>
            <img src={booking.guest_picture} alt="a hotel room" width="156" height="156"/>
            <ul>
              <li>{booking.guest_name}</li>
              <li>#{booking.id}</li>
              <li>
                <FaPhoneAlt className='phone'/>
                <button>
                  <TbMessageCircle />Send Message
                </button>
              </li>
            </ul>
          </BookingInfo>
          <CheckInOut>
            <ul>
              <li>Check In</li>
              <li>{checkInParsed.toDateString()}</li>
            </ul>
            <ul>
              <li>Check Out</li>
              <li>{booking.check_out}</li>
            </ul>
          </CheckInOut>
          <RoomInfo>
            <ul>
              <li>Room info</li>
              <li>Deluxe Z - 002424</li>
            </ul>
            <ul>
              <li>Price</li>
              <li>
                ${booking.price}<span>/night</span>
              </li>
            </ul>
          </RoomInfo>
          <RoomDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </RoomDescription>
          <Facilities>
            <p>Facilities</p>
            <div>
              <button>3 Bed Space</button>
              <button>24 Hours Guard</button>
              <button>Free Wifi</button>
              <button>2 Bathroom</button>
              <button>Air Conditioner</button>
              <button>Television</button>
            </div>
          </Facilities>
        </InfoContainer>
        <ImgContainer>
          <img src={thumbnail} alt="an hotel room" />
        </ImgContainer>
      </BookingDetailsContainer>
      }
    </div>
  )
}

export default BookingDetails;