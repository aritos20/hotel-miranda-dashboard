import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  TableContainer,
  HeaderRow,
  HeaderData,
  DataRow,
  BodyData,
  GuestText,
  CheckText
} from './UsersTableStyled';
import { getAllUsers } from '../../features/usersSlice';

const head = [
    {label: 'Name'},
    {label: 'Job Description'},
    {label: 'Contact'},
    {label: 'Status'}
  ];

const UsersTable = () => {
  const usersList = useSelector(state => state.usersStore.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [])

    return (
        <TableContainer>
            <thead>
              <HeaderRow>
                {head.map(item => (
                  <HeaderData key={item.label}>
                    {item.label}
                  </HeaderData>
                ))
                }
              </HeaderRow>
            </thead>
            <tbody>
            {usersList && usersList.map(data => (
              <DataRow key={data.id}>
                <BodyData style={{display: 'flex', gap: '10px'}}>
                  <img src={data.user_picture} alt="thumbnail of a hotel room" height="88" width="88"/>
                  <GuestText>
                    <li>{data.username}</li>
                    <li>#{data.id}</li>
                    <li>{data.joined_date}</li>
                  </GuestText>
                </BodyData>
                <BodyData style={{font: 'normal normal 400 16px Poppins', verticalAlign: 'top'}}>
                  {data.job_description}
                </BodyData>
                <BodyData>
                  <CheckText>
                    <li>
                      <FaPhoneAlt />{data.phone_number}
                    </li>
                    <li>
                      <FaEnvelope />{data.email}
                    </li>
                  </CheckText>
                </BodyData>
                <BodyData>
                  <CheckText>
                    <li>{data.check_out}</li>
                    <li>{data.check_out_hour}</li>
                  </CheckText>
                </BodyData>
              </DataRow>
            ))}
            </tbody>
          </TableContainer>
      )
}

export default UsersTable