import React from 'react';
import styled from 'styled-components'
import { useAuth } from './AuthProvider'
import { FaBars, FaRegEnvelope, FaRegBell, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = styled.header`
    width: 100%;
    height: 120px;
    box-shadow: 0px 3px 10px #00000005;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.p`
    font-size: 28px;
    font-family: var(--font-poppins);
    color: var(--color-title);
    font-weight: 600;
    flex: 1;
`;

const NavContent = styled.nav`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
`

const NavBar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  }

  return (
    <Header>
      <NavContent>
          <FaBars style={{width: '24px', height: '27px', cursor: 'pointer'}} />
          <Title>Dashboard</Title>
          <FaRegEnvelope style={{width: '24px', height: '27px'}} />
          <FaRegBell style={{width: '24px', height: '27px'}} />
          <FaSignOutAlt onClick={handleLogout} style={{width: '24px', height: '27px', cursor: 'pointer'}} />
      </NavContent>
    </Header>
  )
}

export default NavBar