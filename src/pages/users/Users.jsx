import React from 'react'
import NewAndSelect from '../../components/NewAndSelect/NewAndSelect';
import OptionsBar from '../../components/OptionsBar/OptionsBar';
import UsersTable from './UsersTable'

const OptionsUsers = ['All Employee', 'Active Employee', 'Inactive Employee'];

const Users = () => {
  return (
    <div style={{paddingTop: '56px', paddingBottom: '127px'}}>
      <div style={{display: 'flex', width: '90%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
        <OptionsBar options={OptionsUsers} />
        <NewAndSelect textButton="New Employee" show={true} />
      </div>
      <UsersTable />
  </div>
  )
}

export default Users