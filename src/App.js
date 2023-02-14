import './App.css';
import React from 'react';
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


  return (
    <AuthProvider>
      <BrowserRouter>
      <RequireAuth>
        <NavBar />
        <SideBar />
      </RequireAuth>
        <Routes>
          <Route index path="/login" element={<Login />} />
          <Route path="/" element={ <RequireAuth> <Dashboard /> </RequireAuth>} />
          <Route path="/bookings" element={ <RequireAuth> <Bookings /> </RequireAuth>} />
          <Route path="/bookings/:bookingid" element={ <RequireAuth> <BookingDetails /> </RequireAuth>} />
          <Route path="/users" element={ <RequireAuth> <Users /> </RequireAuth>} />
          <Route path="/users/:userid" element={ <RequireAuth> <UserDetails /> </RequireAuth>} />
          <Route path="/rooms" element={ <RequireAuth> <Rooms /> </RequireAuth>} />
          <Route path="/rooms/:roomid" element={ <RequireAuth> <RoomDetails /> </RequireAuth>} />
          <Route path="/contact" element={ <RequireAuth> <Contact /> </RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
