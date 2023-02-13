import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Bookings from './pages/bookings/Bookings';
import Contact from './pages/contact/Contact';
import Dashboard from './pages/dashboard/Dashboard';
import Users from './pages/users/Users';
import Rooms from './pages/rooms/Rooms';
import Login from './pages/login/Login';
import './App.css';
import BookingDetails from './pages/bookings/BookingDetails';
import RoomDetails from './pages/rooms/RoomDetails';
import UserDetails from './pages/users/UserDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookings/:bookingid" element={<BookingDetails />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userid" element={<UserDetails />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:roomid" element={<RoomDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
