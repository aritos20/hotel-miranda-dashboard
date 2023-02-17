import React from 'react'
import OptionsBar from '../../components/OptionsBar/OptionsBar';
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