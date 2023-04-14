import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthProvider';
import { Hlogo, HotelMiranda } from '../../components/SideBar/SideBarStyled';
import { MainContainer, MainLoginContainer, InputLogin, ButtonLogin } from './LoginStyled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetch from 'cross-fetch';

const api_url = process.env.REACT_APP_API_URL;

const loginApiCall = async (email, password) => {
  try {
      const response = await fetch(`${api_url}/login`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({email, password}),
        headers: {"Content-type": "application/json;charset=UTF-8"}
      });
      const data = await response.json();
      return data;
  } catch(e) {
    console.log('Invalid credentials')
  }
}

const Login = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { token } = await loginApiCall(email, password) || '';
    if (!token) {
      return toast.error('Invalid Credentials!', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    auth.dispatch({type: 'LOGIN', value: {userName, email, password, token}});
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
      <ToastContainer />
    </MainContainer>
  )
}

export default Login;