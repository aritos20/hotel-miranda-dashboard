import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAPI } from "./fetchAPI";

const initialState = {
    rooms: [],
    status: ''
};

export const getAllRooms = createAsyncThunk(
    'rooms/getAllRooms',
    async () => {
        try {
            return await fetchAPI("rooms", 'GET');
        } catch (error) {
            alert(`Can't get all the bookings right now, error: ${error}`);
        }
    }
)

export const getRoom = createAsyncThunk(
    'rooms/getRoom',
    async () => {
        try {
            setTimeout(() => null, 200);
        } catch (error) {
            alert(`Can't get all the bookings right now, error: ${error}`);
        }
    }
)

export const CreateRoom = createAsyncThunk(
    'rooms/CreateRoom',
    async () => {
        try {
            setTimeout(() => null, 200);
        } catch (error) {
            alert(`Can't get all the bookings right now, error: ${error}`);
        }
    }
)

export const DeleteRoom = createAsyncThunk(
    'rooms/DeleteRoom',
    async () => {
        try {
            setTimeout(() => null, 200);
        } catch (error) {
            alert(`Can't get all the bookings right now, error: ${error}`);
        }
    }
)

export const UpdateRoom = createAsyncThunk(
    'rooms/UpdateRoom',
    async () => {
        try {
            setTimeout(() => null, 200);
        } catch (error) {
            alert(`Can't get all the bookings right now, error: ${error}`);
        }
    }
)

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    extraReducers: {
        // get all rooms
        [getAllRooms.pending]: (state) => {
            state.status = 'loading';
        },
        [getAllRooms.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.rooms = action.payload;
        },
        [getAllRooms.rejected]: (state) => {
            state.status = 'rejected';
            console.log("Failed fetching the data");
        },
        // get room
        [getRoom.pending]: (state) => {
            state.status = 'loading';
        },
        [getRoom.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.rooms = state.rooms.find(room => room.id === action.payload);
        },
        [getRoom.rejected]: (state) => {
            state.status = 'rejected';
            console.log("Failed fetching the data");
        },
        // Create room
        [CreateRoom.pending]: (state) => {
            state.status = 'loading';
        },
        [CreateRoom.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.rooms = [...state.rooms, action.payload];
        },
        [CreateRoom.rejected]: (state) => {
            state.status = 'rejected';
            console.log("Failed fetching the data");
        },
        // Delete room
        [DeleteRoom.pending]: (state) => {
            state.status = 'loading';
        },
        [DeleteRoom.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.rooms = state.rooms.filter(room => room.id !== action.payload);
        },
        [DeleteRoom.rejected]: (state) => {
            state.status = 'rejected';
            console.log("Failed fetching the data");
        },
        // Update room
        [UpdateRoom.pending]: (state) => {
            state.status = 'loading';
        },
        [UpdateRoom.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.rooms = state.rooms.map(room => {
                return room.id === action.payload.id ? action.payload : room;
            })
        },
        [UpdateRoom.rejected]: (state) => {
            state.status = 'rejected';
            console.log("Failed fetching the data");
        },
    }
})

export default roomsSlice.reducer;