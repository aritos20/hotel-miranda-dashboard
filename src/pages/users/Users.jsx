import React from 'react'
import NewAndSelect from '../../components/NewAndSelect/NewAndSelect';
import OptionsBar from '../../components/OptionsBar/OptionsBar';
import UsersTable from './UsersTable';
import BeatLoader from 'react-spinners/BeatLoader';
import { useSelector } from 'react-redux';

const OptionsUsers = ['All Employee', 'Active Employee', 'Inactive Employee'];

const override = {
  display: "flex",
  justifyContent: 'center',
  marginTop: '180px'
}

const Users = () => {
  const status = useSelector(state => state.usersStore.status);

  return (
    <div style={{paddingTop: '56px', paddingBottom: '127px'}}>
      {status === 'loading' ?
        <BeatLoader 
        color="#135846"
        size={50}
        cssOverride={override}/> :
        <>
          <div style={{display: 'flex', width: '90%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
            <OptionsBar options={OptionsUsers} />
            <NewAndSelect textButton="New Employee" show={true} />
          </div>
          <UsersTable />
        </>
      }
  </div>
  )
}

export default Users