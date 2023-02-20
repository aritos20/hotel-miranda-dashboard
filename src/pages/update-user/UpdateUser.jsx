import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthProvider';
import { Hlogo, HotelMiranda } from '../../components/SideBar/SideBarStyled';
import { MainContainer, MainLoginContainer, InputLogin, ButtonLogin } from '../login/LoginStyled';

const UpdateUser = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const handleUserChange = () => {
        auth.dispatch({type: 'UPDATEUSER', value: {userName, email}});
        navigate("/");
    }

  return (
    <MainContainer>
      <MainLoginContainer>
        <form onSubmit={handleUserChange}>
          <div className='content-container'>
            <div>
              <Hlogo>H</Hlogo>
                <HotelMiranda>
                    <li className='hotel'>HOTEL</li>
                    <li className='miranda'>MIRANDA</li>
                </HotelMiranda>
              </div>
              <p>Here you can change the Username and the password</p>
            </div>
          <InputLogin type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}/>
          <InputLogin type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <ButtonLogin onClick={handleUserChange}>CHANGE USER</ButtonLogin>
        </form>
      </MainLoginContainer>
    </MainContainer>
  )
}

export default UpdateUser