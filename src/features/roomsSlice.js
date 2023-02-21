import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    rooms: []
};

export const getAllRooms = createAsyncThunk(
    'rooms/getAllRooms',
    async (arg) => {
        try {
            setTimeout(() => null, 200);
            return arg;
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
            console.log("Loading...");
        },
        [getAllRooms.fulfilled]: (state, action) => {
            state.rooms = action.payload;
        },
        [getAllRooms.rejected]: (state) => {
            console.log("Failed fetching the data");
        },
        // get room
        [getRoom.pending]: (state) => {
            console.log("Loading...");
        },
        [getRoom.fulfilled]: (state, action) => {
            state.rooms = state.rooms.find(room => room.id === action.payload);
        },
        [getRoom.rejected]: (state) => {
            console.log("Failed fetching the data");
        },
        // Create room
        [CreateRoom.pending]: (state) => {
            console.log("Loading...");
        },
        [CreateRoom.fulfilled]: (state, action) => {
            state.rooms = [...state.rooms, action.payload];
        },
        [CreateRoom.rejected]: (state) => {
            console.log("Failed fetching the data");
        },
        // Delete room
        [DeleteRoom.pending]: (state) => {
            console.log("Loading...");
        },
        [DeleteRoom.fulfilled]: (state, action) => {
            state.rooms = state.rooms.filter(room => room.id !== action.payload);
        },
        [DeleteRoom.rejected]: (state) => {
            console.log("Failed fetching the data");
        },
        // Update room
        [UpdateRoom.pending]: (state) => {
            console.log("Loading...");
        },
        [UpdateRoom.fulfilled]: (state, action) => {
            state.rooms = state.rooms.map(room => {
                return room.id === action.payload.id ? action.payload : room;
            })
        },
        [UpdateRoom.rejected]: (state) => {
            console.log("Failed fetching the data");
        },
    }
})

export default roomsSlice.reducer;