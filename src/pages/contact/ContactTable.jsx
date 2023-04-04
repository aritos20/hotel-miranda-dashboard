import React from 'react';
import { mockData } from '../../mockData';
import { BodyData, DataRow, GuestText, HeaderData, HeaderRow, TableContainer } from '../rooms/RoomsTableStyled';

const head = [
    {label: 'Date'},
    {label: 'Customer'},
    {label: 'Subject'},
    {label: 'Action'}
]

const ContactTable = () => {
  return (
    <TableContainer>
        <thead>
            <HeaderRow>
                {head.map(item => (
                    <HeaderData key={item.label}>
                        {item.label}
                    </HeaderData>
                ))}
            </HeaderRow>
        </thead>
        <tbody>
            {mockData.map(data => (
                <DataRow key={data.id}>
                    <BodyData>
                        <GuestText>
                            <li>Nov 21th 2020 09 21 AM</li>
                            <li>#000123456</li>
                        </GuestText>
                    </BodyData>
                    <BodyData>
                        <GuestText>
                            <li>James Sitepu</li>
                            <li>james@sitepu.com</li>
                            <li>785 265 123</li>
                        </GuestText>
                    </BodyData>
                    <BodyData>
                        <GuestText>
                            <li>Problem with the AC</li>
                            <li>We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</li>
                        </GuestText>
                    </BodyData>
                    <BodyData>
                        <button>Archive</button>
                    </BodyData>
                </DataRow>
            ))}
        </tbody>
    </TableContainer>
  )
}

export default ContactTable;