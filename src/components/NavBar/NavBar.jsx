import React from 'react';
import { useAuth } from '../AuthProvider'
import { FaBars, FaRegEnvelope, FaRegBell, FaSignOutAlt } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header, Title, NavContent } from './NavBarStyled';

const titleNav = {
    "/": "Dashboard",
    "/bookings": "Bookings",
    "/rooms": "Rooms",
    "/contact": "Contact",
    "/users": "Users",
}

const NavBar = ({isOpen, setIsOpen}) => {
  const auth = useAuth();
  const navigate = useNavigate();
  let location = useLocation();

  if (!auth.user.isLogged) {
    return null;
  }

  const handleLogout = () => {
    auth.logout();
    setIsOpen(false);
    navigate("/login");
  }

  return (
    <Header>
      <NavContent>
          <FaBars style={{width: '24px', height: '27px', cursor: 'pointer'}} onClick={() => setIsOpen(!isOpen)} />
          <Title>{titleNav[location.pathname] || "Dashboard"}</Title>
          <FaRegEnvelope style={{width: '24px', height: '27px'}} />
          <FaRegBell style={{width: '24px', height: '27px'}} />
          <FaSignOutAlt onClick={handleLogout} style={{width: '24px', height: '27px', cursor: 'pointer'}} />
      </NavContent>
    </Header>
  )
}

export default NavBar