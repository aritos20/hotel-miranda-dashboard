import React from 'react';
import { useAuth } from '../AuthProvider'
import { FaBars, FaRegEnvelope, FaRegBell, FaSignOutAlt } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header, Title, NavContent, ChangeUserButton } from './NavBarStyled';

const NavBar = ({isOpen, setIsOpen}) => {
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

  const getNavBarTitle = (currentRoute) => {
    if (!currentRoute)
     return "Dashboard";
    return currentRoute.toUpperCase().charAt(0) + currentRoute.slice(1);
  }

  return (
    <Header>
      <NavContent>
          <FaBars style={{width: '24px', height: '27px', cursor: 'pointer'}} onClick={() => setIsOpen(!isOpen)} />
          <Title>{getNavBarTitle(location.pathname.split('/')[1])}</Title>
          <FaRegEnvelope style={{width: '24px', height: '27px'}} />
          <FaRegBell style={{width: '24px', height: '27px'}} />
          <ChangeUserButton onClick={handleUpdateUser}>Change Username and email</ChangeUserButton>
          <FaSignOutAlt onClick={handleLogout} style={{width: '24px', height: '27px', cursor: 'pointer'}} />
      </NavContent>
    </Header>
  )
}

export default NavBar