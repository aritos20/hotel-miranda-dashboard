import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: []
};

export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async (arg) => {
        try {
            setTimeout(() => null, 200);
            return arg;
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
            console.log("Loading...");
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
        },
        [getAllUsers.rejected]: (state) => {
            console.log("Failed fetching the data");
        },
        // get user
        [getUser.pending]: (state) => {
            console.log("Loading...");
        },
        [getUser.fulfilled]: (state, action) => {
            state.users = state.users.find(user => user.id === action.payload);
        },
        [getUser.rejected]: (state) => {
            console.log("Failed fetching the data");
        },
        // Create user
        [CreateUser.pending]: (state) => {
            console.log("Loading...");
        },
        [CreateUser.fulfilled]: (state, action) => {
            state.users = [...state.users, action.payload];
        },
        [CreateUser.rejected]: (state) => {
            console.log("Failed fetching the data");
        },
        // Delete user
        [DeleteUser.pending]: (state) => {
            console.log("Loading...");
        },
        [DeleteUser.fulfilled]: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        [DeleteUser.rejected]: (state) => {
            console.log("Failed fetching the data");
        },
        // Update user
        [UpdateUser.pending]: (state) => {
            console.log("Loading...");
        },
        [UpdateUser.fulfilled]: (state, action) => {
            state.users = state.users.map(user => {
                return user.id === action.payload.id ? action.payload : user;
            })
        },
        [UpdateUser.rejected]: (state) => {
            console.log("Failed fetching the data");
        },
    }
})

export default usersSlice.reducer;