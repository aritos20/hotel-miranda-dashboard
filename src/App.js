import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Bookings from './pages/bookings/Bookings';
import Contact from './pages/contact/Contact';
import Dashboard from './pages/dashboard/Dashboard';
import Users from './pages/users/Users';
import Rooms from './pages/rooms/Rooms';
import Login from './pages/login/Login';
import BookingDetails from './pages/bookings/BookingDetails';
import RoomDetails from './pages/rooms/RoomDetails';
import UserDetails from './pages/users/UserDetails';
import AuthProvider from './components/AuthProvider';
import NavBar from './components/NavBar/NavBar';
import RequireAuth from './components/RequireAuth';
import SideBar from './components/SideBar/SideBar';
import UpdateUser from './pages/update-user/UpdateUser';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AuthProvider>
      <BrowserRouter basename='/hotel-miranda-dashboard'>
        <div className='container'>
            <div className={`side-menu ${isOpen ? 'open' : ''}`}>
              <SideBar />
            </div>
            <div className='main-content'>
              <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route index path="/" element={ <RequireAuth> <Dashboard /> </RequireAuth>} />
                  <Route path="/bookings" element={ <RequireAuth> <Bookings /> </RequireAuth>} />
                  <Route path="/bookings/:bookingid" element={ <RequireAuth> <BookingDetails /> </RequireAuth>} />
                  <Route path="/users" element={ <RequireAuth> <Users /> </RequireAuth>} />
                  <Route path="/users/:userid" element={ <RequireAuth> <UserDetails /> </RequireAuth>} />
                  <Route path="/rooms" element={ <RequireAuth> <Rooms /> </RequireAuth>} />
                  <Route path="/rooms/:roomid" element={ <RequireAuth> <RoomDetails /> </RequireAuth>} />
                  <Route path="/contact" element={ <RequireAuth> <Contact /> </RequireAuth>} />
                  <Route path="/update-user" element={<RequireAuth> <UpdateUser /> </RequireAuth>} />
                </Routes>
            </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
