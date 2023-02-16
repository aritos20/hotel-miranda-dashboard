import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../components/AuthProvider';
import { Hlogo, HotelMiranda } from '../../components/SideBar';

const MainContainer = styled.div`
    width: 500px;
    height: 400px;
    margin: 0 auto;
    margin-bottom: 200px;
    border-radius: 12px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 13px 3px 40px #00000005;
`

const InputLogin = styled.input`
    display: block;
    width: 50%;
    padding: 12px;
    margin: 0 auto;
    border-radius: 12px;
    margin-bottom: 24px;
    outline: none;
    background-color: #f8f8f8;
`

const ButtonLogin = styled.button`
    display: block;
    width: 50%;
    margin: 0 auto;
    padding: 12px;
    border-radius: 12px;
    fontFamily: 'var(--font-poppins)';
    fontSize: '18px';
    cursor: pointer;

    &:hover {
      background-color: #135846;
    }

`


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login({email, password});
    navigate("/");
  }
  
  return (
    <div style={{display: 'flex', alignItems: 'center', height: '100vh'}}>
      <MainContainer>
        <form onSubmit={handleLogin}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', marginBottom: '18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <Hlogo>H</Hlogo>
                <HotelMiranda>
                    <li className='hotel'>HOTEL</li>
                    <li className='miranda'>MIRANDA</li>
                </HotelMiranda>
              </div>
              <p style={{
                width: '60%',
                margin: '0 auto',
                fontFamily: 'var(--font-poppins)',
                fontSize: '18px',
                textAlign: 'center'
              }}>The user to sign in is admin@admin.com and the password is admin</p>
            </div>
          <InputLogin type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <InputLogin type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <ButtonLogin onClick={handleLogin}>SIGN IN</ButtonLogin>
        </form>
      </MainContainer>
    </div>
  )
}

export default Login;