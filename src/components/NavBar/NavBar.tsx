import React from 'react';
import { useAuth } from '../AuthProvider'
import { FaBars, FaRegEnvelope, FaRegBell, FaSignOutAlt } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header, Title, NavContent, ChangeUserButton } from './NavBarStyled';

const titleNav = {
    "/": "Dashboard",
    "/bookings": "Bookings",
    "/rooms": "Rooms",
    "/contact": "Contact",
    "/users": "Users",
}

interface NavProps {
  isOpen: Boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

const NavBar = ({isOpen, setIsOpen}: NavProps) => {
  const auth = useAuth();
  const navigate = useNavigate();
  let location = useLocation();

  if (!auth.user.isLogged) {
    return null;
  }

  const handleLogout = () => {
    auth.dispatch({type: 'LOGOUT', value: {userName: '', email: '', isLogged: false}});
    setIsOpen(false);
    navigate("/login");
  }

  const handleUpdateUser = () => {
    setIsOpen(false);
    navigate("/update-user");
  }

  return (
    <Header>
      <NavContent>
          <FaBars style={{width: '24px', height: '27px', cursor: 'pointer'}} onClick={() => setIsOpen(!isOpen)} />
          <Title>{titleNav[location.pathname] || "Dashboard"}</Title>
          <FaRegEnvelope style={{width: '24px', height: '27px'}} />
          <FaRegBell style={{width: '24px', height: '27px'}} />
          <ChangeUserButton onClick={handleUpdateUser}>Change Username and email</ChangeUserButton>
          <FaSignOutAlt onClick={handleLogout} style={{width: '24px', height: '27px', cursor: 'pointer'}} />
      </NavContent>
    </Header>
  )
}

export default NavBar