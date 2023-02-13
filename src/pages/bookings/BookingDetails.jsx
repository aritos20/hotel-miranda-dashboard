import React from 'react'
import { useParams } from 'react-router-dom';
import { mockData } from '../../mockData';

const BookingDetails = () => {
    const { bookingid } = useParams();
    let book = mockData.find(item => item.id === Number(bookingid));


  return (
    <div>{book.email}</div>
  )
}

export default BookingDetails