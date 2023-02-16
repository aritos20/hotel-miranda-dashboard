import React from 'react'
import { mockData } from '../../mockData';
import { Link } from 'react-router-dom';
import OptionsBar from '../../components/OptionsBar';
import UsersTable from './UsersTable'

const OptionsUsers = ['All Employee', 'Active Employee', 'Inactive Employee'];

const Users = () => {
  return (
    <div style={{paddingTop: '56px', paddingBottom: '127px'}}>
      <OptionsBar options={OptionsUsers}/>
      <UsersTable />
  </div>
  )
}

export default Users