import { configureStore } from '@reduxjs/toolkit';
import bookingsSlice from '../features/bookingsSlice';

export const store = configureStore({
  reducer: {
      bookingsStore: bookingsSlice
  }
});