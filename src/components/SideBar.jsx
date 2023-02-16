import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGripVertical, FaKey, FaRegCalendarAlt, FaRegUser, FaPhoneAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const MainContainer = styled.div`
    padding-top: 32px;
    background-color: #ffffff;
    box-shadow: 13px 3px 40px #00000005;
    height: 100vh;
`

export const Hlogo = styled.p`
    display: inline-block;
    padding: 16px 19px;
    font-family: var(--font-archivo);
    font-weight: 700;
    font-size: 22px;
    box-shadow: 0px 14px 24px rgba(139, 139, 139, 0.25);
`

export const HotelMiranda = styled.ul`
    list-style: none;

    .hotel {
        font-family: var(--font-archivo);
        font-weight: 700;
        font-size: 18px;
    }

    .miranda {
        font-family: var(--font-archivo);
        font-weight: 400;
        font-size: 18px;
    }
`

const DashboardOptions = styled.ul`
    list-style: none;
`;

const NavOptions = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 36px;
    
    div {
        display: inline-block;
        margin-right: 22%;
        border: ${props => {
            if (props.route === props.current) {
                return "5px solid #E23428";
            } else {
                return "5px solid #FFFFFF";
            }
        }};;
        border-radius: 0 8px 8px 0;
        height: 70px;
    }

    svg {
        color: ${props => {
            if (props.route === props.current) {
                return "#E23428";
            }
        }};;
    }

    span {
        font-family: var(--font-poppins);
        font-size: 18px;
        font-weight: 400;
        color: ${props => {
            if (props.route === props.current) {
                return "#E23428";
            } else {
                return "var(--color-sidebar)";
            }
        }};;
    }
`;

const UserAccount = styled.div`
    width: 67.5%;
    margin: 0 auto;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 18px;
    padding-bottom: 24px;
    margin-bottom: 62px;
`

const SideBar = () => {
    const location = useLocation();

  return (
    <MainContainer>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '22px',
            marginBottom: '82px',
        }}>
            <Hlogo>H</Hlogo>
            <HotelMiranda>
                <li className='hotel'>HOTEL</li>
                <li className='miranda'>MIRANDA</li>
            </HotelMiranda>
        </div>
        <DashboardOptions>
            <NavOptions route="/" current={location.pathname}>
            <div /><FaGripVertical style={{width: '24px', height: '27px', marginRight: '30px'}} />
                <Link to="/" style={{textDecoration: 'none'}}><span>Dashboard</span></Link>
            </NavOptions>
            <NavOptions route="/rooms" current={location.pathname}>
            <div /><FaKey style={{width: '24px', height: '27px', marginRight: '30px'}} />
                <Link to="/rooms" style={{textDecoration: 'none'}}><span>Room</span></Link>
            </NavOptions>
            <NavOptions route="/bookings" current={location.pathname}>
            <div /><FaRegCalendarAlt style={{width: '24px', height: '27px', marginRight: '30px'}} />
                <Link to="/bookings" style={{textDecoration: 'none'}}><span>Bookings</span></Link>
            </NavOptions>
            <NavOptions route="/users" current={location.pathname}>
            <div /><FaRegUser style={{width: '24px', height: '27px', marginRight: '30px'}} />
                <Link to="/users" style={{textDecoration: 'none'}}><span>Users</span></Link>
            </NavOptions>
            <NavOptions route="/contact" current={location.pathname}>
            <div /><FaPhoneAlt style={{width: '24px', height: '27px', marginRight: '30px'}} />
                <Link to="/contact" style={{textDecoration: 'none'}}><span>Contact</span></Link>
            </NavOptions>
        </DashboardOptions>
        <UserAccount>
            <div style={{
                display: 'block',
                width: '70px',
                height: '70px',
                backgroundColor: '#C5C5C5',
                borderRadius: '8px',
                margin: '0 auto',
                marginBottom: '15px',
            }}></div>
            <h6 style={{
                textAlign: 'center',
                fontFamily: 'var(--font-poppins)',
                fontSize: '16px',
                fontWeight: '400',
                color: '#393939',
                marginBottom: '9px'
            }}>William Johanson</h6>
            <p style={{
                textAlign: 'center',
                fontFamily: 'var(--font-poppins)',
                fontSize: '12px',
                fontWeight: '300',
                color: '#B2B2B2',
                marginBottom: '16px'
            }}>williamjohn@mail.com</p>
            <button style={{
                display: 'block',
                width: '158px',
                height: '47px',
                margin: '0 auto',
                backgroundColor: '#EBF1EF',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-poppins)',
                fontSize: '14px',
                fontWeight: '600',
                color: '135846'
            }}>Edit Profile</button>
        </UserAccount>
        <p style={{
            textAlign: 'center',
            fontFamily: 'var(--font-poppins)',
            fontSize: '16px',
            fontWeight: '600',
            color: '#212121',
        }}>Hotel Miranda Admin Dashboard</p>
        <p style={{
            textAlign: 'center',
            fontFamily: 'var(--font-poppins)',
            fontSize: '14px',
            fontWeight: '300',
            color: '#799283',
        }}>&copy; 2023 All Rights Reserved</p>
    </MainContainer>
  )
}

export default SideBar;