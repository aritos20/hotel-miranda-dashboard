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
    padding: 12px;
    border-radius: 12px;
    margin-bottom: 24px;
    outline: none;
    background-color: #f8f8f8;
`

const ButtonLogin = styled.button`

`


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    auth.login({email, password});
    navigate("/dashboard");
  }
  
  return (
    <div style={{display: 'flex', alignItems: 'center', height: '100vh'}}>
      <MainContainer>
        <form onSubmit={handleLogin}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '24px'}}>
            <Hlogo >H</Hlogo>
              <HotelMiranda>
                  <li className='hotel'>HOTEL</li>
                  <li className='miranda'>MIRANDA</li>
              </HotelMiranda>
            </div>
          <InputLogin type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
          <InputLogin type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={handleLogin}>Sign in</button>
        </form>
      </MainContainer>
    </div>
  )
}

export default Login;