import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthProvider';
import { Hlogo, HotelMiranda } from '../../components/SideBar/SideBarStyled';
import { MainContainer, MainLoginContainer, InputLogin, ButtonLogin } from './LoginStyled'

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
    <MainContainer>
      <MainLoginContainer>
        <form onSubmit={handleLogin}>
          <div className='content-container'>
            <div>
              <Hlogo>H</Hlogo>
                <HotelMiranda>
                    <li className='hotel'>HOTEL</li>
                    <li className='miranda'>MIRANDA</li>
                </HotelMiranda>
              </div>
              <p>The user to sign in is admin@admin.com and the password is admin</p>
            </div>
          <InputLogin type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <InputLogin type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <ButtonLogin onClick={handleLogin}>SIGN IN</ButtonLogin>
        </form>
      </MainLoginContainer>
    </MainContainer>
  )
}

export default Login;