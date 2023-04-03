import React from 'react';
import { FaGripVertical, FaKey, FaRegCalendarAlt, FaRegUser, FaPhoneAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthProvider';
import {
    MainContainer,
    Hlogo,
    HotelMiranda,
    DashboardOptions,
    NavOptions,
    UserAccount,
    SideBarFinalName,
    SideBarCopyright
} from './SideBarStyled';

const SideBar = () => {
    const location = useLocation();
    const auth = useAuth();

    if (!auth.user.isLogged) {
        return null;
    }

  return (
    <MainContainer>
        <div className='logo-container'>
            <Hlogo>H</Hlogo>
            <HotelMiranda>
                <li className='hotel'>HOTEL</li>
                <li className='miranda'>MIRANDA</li>
            </HotelMiranda>
        </div>
        <DashboardOptions>
            <NavOptions route="" current={location.pathname}>
                <div /><FaGripVertical />
                <Link to="/">
                    <span>Dashboard</span>
                </Link>
            </NavOptions>
            <NavOptions route="rooms" current={location.pathname}>
                <div /><FaKey />
                <Link to="/rooms">
                    <span>Room</span>
                </Link>
            </NavOptions>
            <NavOptions route="bookings" current={location.pathname}>
                <div /><FaRegCalendarAlt />
                <Link to="/bookings">
                    <span>Bookings</span>
                </Link>
            </NavOptions>
            <NavOptions route="users" current={location.pathname}>
                <div /><FaRegUser />
                <Link to="/users">
                    <span>Users</span>
                </Link>
            </NavOptions>
            <NavOptions route="contact" current={location.pathname}>
                <div /><FaPhoneAlt />
                <Link to="/contact">
                    <span>Contact</span>
                </Link>
            </NavOptions>
        </DashboardOptions>
        <UserAccount>
            <div></div>
            <h6>William Johanson</h6>
            <p>williamjohn@mail.com</p>
            <button>Edit Profile</button>
        </UserAccount>
        <SideBarFinalName>Hotel Miranda Admin Dashboard</SideBarFinalName>
        <SideBarCopyright>&copy; 2023 All Rights Reserved</SideBarCopyright>
    </MainContainer>
  )
}

export default SideBar;