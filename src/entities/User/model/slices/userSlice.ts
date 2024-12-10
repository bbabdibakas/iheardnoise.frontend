import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from '../types/UserState';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

const initialState: UserState = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.userData = action.payload;
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(action.payload));
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.userData = JSON.parse(user);
            }
        },
        resetUserData: (state) => {
            state.userData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
