import React from 'react';
import { useAuth } from '../AuthProvider'
import { FaBars, FaRegEnvelope, FaRegBell, FaSignOutAlt } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header, Title, NavContent, ChangeUserButton } from './NavBarStyled';

interface NavProps {
  isOpen: Boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

const locationParse = (location: string): string => {
    if (location === "/") { return "Dashboard" }
    let regex = /[/0-9]/
    let ret: string = location;
    for (let i = 0; i < ret.length; i++) {
      if (ret.match(regex)) {
          ret = ret.replace(ret.charAt(i), '');
      }
    }
    ret = ret.charAt(0).toUpperCase() + ret.slice(1);
    return ret;
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
          <Title>{locationParse(location.pathname)}</Title>
          <FaRegEnvelope style={{width: '24px', height: '27px'}} />
          <FaRegBell style={{width: '24px', height: '27px'}} />
          <ChangeUserButton onClick={handleUpdateUser}>Change Username and email</ChangeUserButton>
          <FaSignOutAlt onClick={handleLogout} style={{width: '24px', height: '27px', cursor: 'pointer'}} />
      </NavContent>
    </Header>
  )
}

export default NavBar