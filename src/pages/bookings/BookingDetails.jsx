import React from 'react'
import { useParams } from 'react-router-dom';
import { mockData } from '../../mockData';
import { BookingDetailsContainer, InfoContainer, BookingInfo, CheckInOut, RoomInfo, RoomDescription, Facilities, ImgContainer } from './BookingDetailsStyled';
import thumbnail from '../../assets/room.jpg';
import { FaPhoneAlt } from 'react-icons/fa';
import { TbMessageCircle } from 'react-icons/tb';

const BookingDetails = () => {

  return (
    <div style={{paddingTop: '56px', paddingBottom: '127px'}}>
      <BookingDetailsContainer>
        <InfoContainer>
          <BookingInfo>
            <img src={thumbnail} alt="a hotel room" width="156" height="156"/>
            <ul>
              <li>Roberto Mansini</li>
              <li>ID 1234124512551</li>
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
              <li>October 30th, 2020 | 08:23 AM</li>
            </ul>
            <ul>
              <li>Check Out</li>
              <li>November 2th, 2020</li>
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
                $145<span>/night</span>
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
          
        </ImgContainer>
      </BookingDetailsContainer>
    </div>
  )
}

export default BookingDetails;