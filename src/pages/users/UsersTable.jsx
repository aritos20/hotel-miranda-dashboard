import React from 'react';
import styled from 'styled-components';
import { mockData } from '../../mockData';
import thumbnail from '../../assets/room.jpg';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const TableContainer = styled.table`
    width: 90%;
    margin: 0 auto;
    background-color: #ffffff;
    border-collapse: collapse;
    border-radius: 20px;
`;

const HeaderRow = styled.tr`
`

const DataRow = styled.tr`
  &:hover {
    box-shadow: 0px 4px 30px #0000001A;
  }
`

const HeaderData = styled.td`
  padding: 12px;
  border-bottom: 1px solid #cccccc;
  font-family: var(--font-poppins);
  font-weight: 600;
  font-size: 16px;
  color: #393939;
`

const BodyData = styled.td`
  padding: 12px;
  img {
    max-width: 88px;
    object-fit: cover;
    border-radius: 8px;
  }
`

const ButtonTable = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-family: var(--font-poppins);
  font-weight: 500;
  font-size: 16px;
  color: #212121;
`

const GuestText = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li:nth-child(1) {
    font-family: var(--font-poppins);
    font-weight: 500;
    font-size: 16px;
    color: #393939;
  }

  li:nth-child(2) {
    font-family: var(--font-poppins);
    font-weight: 400;
    font-size: 14px;
    color: var(--color-sidebar);
  }

  li:nth-child(3) {
    font-family: var(--font-poppins);
    font-weight: 400;
    font-size: 14px;
    color: #393939;
  }
`;

const CheckText = styled.ul`
  list-style: none;

  li:nth-child(1) {
    margin-bottom: 12px;
    display: flex;
    gap: 8px;
    align-items: center;
  }

  li:nth-child(2) {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

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
                  <HeaderData key={item.label}>{item.label}</HeaderData>
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
                    <li><FaPhoneAlt />012 234 55512</li>
                    <li><FaEnvelope />@carlosperez@miranda.com</li>
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