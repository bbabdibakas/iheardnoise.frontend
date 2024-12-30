import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from '../types/UserState';

const initialState: UserState = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initUserData: (state) => {
            const userData = localStorage.getItem('LOCALSTORAGE_USER_DATA_KEY')
            if (userData) {
                state.userData = JSON.parse(userData)
            }
        },
        setUserData: (state, action: PayloadAction<User>) => {
            state.userData = action.payload;
            localStorage.setItem('LOCALSTORAGE_USER_DATA_KEY', JSON.stringify(action.payload))
        },
        resetUserData: (state) => {
            state.userData = undefined
            localStorage.removeItem('LOCALSTORAGE_USER_DATA_KEY')
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
