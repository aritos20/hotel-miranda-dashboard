import React from 'react';
import { mockData } from '../../mockData';
import thumbnail from '../../assets/room.jpg';
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

const head = [
    {label: 'Name'},
    {label: 'Job Description'},
    {label: 'Contact'},
    {label: 'Status'}
  ];

const UsersTable = () => {
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
            {mockData.map(data => (
              <DataRow key={data.id}>
                <BodyData style={{display: 'flex', gap: '10px'}}>
                  <img src={thumbnail} alt="thumbnail of a hotel room" height="88" width="88"/>
                  <GuestText>
                    <li>{data.guest_name}</li>
                    <li>#12341225</li>
                    <li>Joined on Aug 2th 2017</li>
                  </GuestText>
                </BodyData>
                <BodyData style={{font: 'normal normal 400 16px Poppins', verticalAlign: 'top'}}>
                  Answering guest inquiries, directing phone calls, coordinating travel plans, and more.
                </BodyData>
                <BodyData>
                  <CheckText>
                    <li>
                      <FaPhoneAlt />012 234 55512
                    </li>
                    <li>
                      <FaEnvelope />@carlosperez@miranda.com
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