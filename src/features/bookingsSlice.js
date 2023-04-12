import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAPI } from "./fetchAPI";

const initialState = {
    bookings: [],
    booking: [],
};

export const getAllBookings = createAsyncThunk(
    'bookings/getAllBookings',
    async () => {
        try {
            return await fetchAPI("bookings", 'GET');
        } catch (error) {
            alert(`Can't get all the bookings right now, error: ${error}`);
        }
    }
)

export const getBooking = createAsyncThunk(
    'bookings/getBooking',
    async (arg) => {
        try {
            return await fetchAPI(`bookings/${arg}`, 'GET');
        } catch (error) {
            alert(`Can't get that booking right now, error: ${error}`);
        }
    }
)

export const CreateBooking = createAsyncThunk(
    'bookings/CreateBooking',
    async () => {
        try {
            setTimeout(() => null, 200);
        } catch (error) {
            alert(`Can't add a booking right now, error: ${error}`);
        }
    }
)

export const DeleteBooking = createAsyncThunk(
    'bookings/DeleteBooking',
    async () => {
        try {
            setTimeout(() => null, 200);
        } catch (error) {
            alert(`Can't add a booking right now, error: ${error}`);
        }
    }
)

export const UpdateBooking = createAsyncThunk(
    'bookings/UpdateBooking',
    async () => {
        try {
            setTimeout(() => null, 200);
        } catch (error) {
            alert(`Can't add a booking right now, error: ${error}`);
        }
    }
)

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    extraReducers: {
        // get all bookings
        [getAllBookings.pending]: (state) => {
            console.log("Loading...");
        },
        [getAllBookings.fulfilled]: (state, action) => {
            state.bookings = action.payload;
        },
        [getAllBookings.rejected]: (state) => {
            console.log("Failed fetching the data");
        },
        //get booking
        [getBooking.pending]: (state) => {
            console.log("Loading...");
        },
        [getBooking.fulfilled]: (state, action) => {
            state.booking = action.payload;
        },
        [getBooking.rejected]: (state) => {
            console.log("Failed fetching the data");
        },
        // Create booking
        [CreateBooking.pending]: (state) => {
            console.log("Loading...");
        },
        [CreateBooking.fulfilled]: (state, action) => {
            state.bookings = [...state.bookings, action.payload];
        },
        [CreateBooking.rejected]: (state) => {
            console.log("Failed fetching the data");
        },
        // Delete Booking
        [DeleteBooking.pending]: (state) => {
            console.log("Loading...");
        },
        [DeleteBooking.fulfilled]: (state, action) => {
            state.bookings = state.bookings.filter(booking => booking.id !== action.payload);
        },
        [DeleteBooking.rejected]: (state) => {
            console.log("Failed fetching the data");
        },
        // Update booking
        [UpdateBooking.pending]: (state) => {
            console.log("Loading...");
        },
        [UpdateBooking.fulfilled]: (state, action) => {
            state.bookings = state.bookings.map(booking => {
                return booking.id === action.payload.id ? action.payload : booking;
            });
        },
        [UpdateBooking.rejected]: (state) => {
            console.log("Failed fetching the data");
        },
    }
})

export default bookingsSlice.reducer;