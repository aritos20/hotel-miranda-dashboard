import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAPI } from "./fetchAPI";

const initialState = {
    bookings: [],
    booking: [],
    status: ''
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
            console.log(arg)
            return await fetchAPI(arg, 'GET');
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
    async (arg) => {
        try {
            console.log(arg)
            return await fetchAPI(arg, 'DELETE');
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
            state.status = 'loading';
        },
        [getAllBookings.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.bookings = action.payload;
        },
        [getAllBookings.rejected]: (state) => {
            state.status = 'rejected';
            console.log("Failed fetching the data");
        },
        //get booking
        [getBooking.pending]: (state) => {
            state.status = 'loading';
        },
        [getBooking.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.booking = action.payload;
        },
        [getBooking.rejected]: (state) => {
            state.status = 'rejected';
            console.log("Failed fetching the data");
        },
        // Create booking
        [CreateBooking.pending]: (state) => {
            state.status = 'loading';
        },
        [CreateBooking.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.bookings = [...state.bookings, action.payload];
        },
        [CreateBooking.rejected]: (state) => {
            state.status = 'rejected';
            console.log("Failed fetching the data");
        },
        // Delete Booking
        [DeleteBooking.pending]: (state) => {
            state.status = 'loading';
            console.log("Loading...");
        },
        [DeleteBooking.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.bookings = state.bookings.filter(booking => Number(booking.id) !== Number(action.payload));
        },
        [DeleteBooking.rejected]: (state) => {
            state.status = 'rejected';
            console.log("Failed fetching the data");
        },
        // Update booking
        [UpdateBooking.pending]: (state) => {
            state.status = 'loading';
        },
        [UpdateBooking.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.bookings = state.bookings.map(booking => {
                return booking.id === action.payload.id ? action.payload : booking;
            });
        },
        [UpdateBooking.rejected]: (state) => {
            state.status = 'rejected';
            console.log("Failed fetching the data");
        },
    }
})

export default bookingsSlice.reducer;