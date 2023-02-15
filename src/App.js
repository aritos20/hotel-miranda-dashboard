import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

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
import NavBar from './components/NavBar';
import RequireAuth from './components/RequireAuth';
import SideBar from './components/SideBar';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className='container'>
            <div className={`side-menu ${isOpen ? 'open' : ''}`}>
              <RequireAuth>
                <SideBar />
              </RequireAuth>
            </div>
            <div className='main-content'>
              <RequireAuth>
                <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
              </RequireAuth>
              <div style={{backgroundColor: '#f8f8f8', height: '100vh'}}>
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/dashboard" element={ <RequireAuth> <Dashboard /> </RequireAuth>} />
                  <Route path="/bookings" element={ <RequireAuth> <Bookings /> </RequireAuth>} />
                  <Route path="/bookings/:bookingid" element={ <RequireAuth> <BookingDetails /> </RequireAuth>} />
                  <Route path="/users" element={ <RequireAuth> <Users /> </RequireAuth>} />
                  <Route path="/users/:userid" element={ <RequireAuth> <UserDetails /> </RequireAuth>} />
                  <Route path="/rooms" element={ <RequireAuth> <Rooms /> </RequireAuth>} />
                  <Route path="/rooms/:roomid" element={ <RequireAuth> <RoomDetails /> </RequireAuth>} />
                  <Route path="/contact" element={ <RequireAuth> <Contact /> </RequireAuth>} />
                </Routes>
              </div>
            </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
