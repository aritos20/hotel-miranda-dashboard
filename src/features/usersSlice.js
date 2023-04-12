import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAPI } from "./fetchAPI";

const initialState = {
    users: [],
    status: ''
};

export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async () => {
        try {
            return await fetchAPI("users", 'GET');
        } catch (error) {
            alert(`Can't get all the bookings right now, error: ${error}`);
        }
    }
)

export const getUser = createAsyncThunk(
    'users/getUser',
    async () => {
        try {
            setTimeout(() => null, 200);
        } catch (error) {
            alert(`Can't get all the bookings right now, error: ${error}`);
        }
    }
)

export const CreateUser = createAsyncThunk(
    'users/CreateUser',
    async () => {
        try {
            setTimeout(() => null, 200);
        } catch (error) {
            alert(`Can't get all the bookings right now, error: ${error}`);
        }
    }
)

export const DeleteUser = createAsyncThunk(
    'users/DeleteUser',
    async () => {
        try {
            setTimeout(() => null, 200);
        } catch (error) {
            alert(`Can't get all the bookings right now, error: ${error}`);
        }
    }
)

export const UpdateUser = createAsyncThunk(
    'users/UpdateUser',
    async () => {
        try {
            setTimeout(() => null, 200);
        } catch (error) {
            alert(`Can't get all the bookings right now, error: ${error}`);
        }
    }
)

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        // get all users
        [getAllUsers.pending]: (state) => {
            state.status = 'loading';
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = action.payload;
        },
        [getAllUsers.rejected]: (state) => {
            state.status = 'rejected';
            console.log("Failed fetching the data");
        },
        // get user
        [getUser.pending]: (state) => {
            state.status = 'loading';
        },
        [getUser.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = state.users.find(user => user.id === action.payload);
        },
        [getUser.rejected]: (state) => {
            state.status = 'rejected';
            console.log("Failed fetching the data");
        },
        // Create user
        [CreateUser.pending]: (state) => {
            state.status = 'loading';
        },
        [CreateUser.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = [...state.users, action.payload];
        },
        [CreateUser.rejected]: (state) => {
            state.status = 'rejected';
            console.log("Failed fetching the data");
        },
        // Delete user
        [DeleteUser.pending]: (state) => {
            state.status = 'loading';
        },
        [DeleteUser.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        [DeleteUser.rejected]: (state) => {
            state.status = 'rejected';
            console.log("Failed fetching the data");
        },
        // Update user
        [UpdateUser.pending]: (state) => {
            state.status = 'loading';
        },
        [UpdateUser.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = state.users.map(user => {
                return user.id === action.payload.id ? action.payload : user;
            })
        },
        [UpdateUser.rejected]: (state) => {
            state.status = 'rejected';
            console.log("Failed fetching the data");
        },
    }
})

export default usersSlice.reducer;