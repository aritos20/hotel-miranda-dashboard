import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthProvider';
import { Hlogo, HotelMiranda } from '../../components/SideBar/SideBarStyled';
import { MainContainer, MainLoginContainer, InputLogin, ButtonLogin } from './LoginStyled'

const Login = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    auth.dispatch({type: 'LOGIN', value: {userName, email, password}});
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
              <p>The Username to sign in is {auth.user.userName || 'admin'}, the Email is {auth.user.email || 'admin@admin.com'} and the Password is admin</p>
            </div>
          <InputLogin className="username" type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}/>
          <InputLogin className="email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <InputLogin className="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <ButtonLogin onClick={handleLogin} className="button">SIGN IN</ButtonLogin>
        </form>
      </MainLoginContainer>
    </MainContainer>
  )
}

export default Login;