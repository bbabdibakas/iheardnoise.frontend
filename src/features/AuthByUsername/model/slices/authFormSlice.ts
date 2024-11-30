import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthFormState } from '../types/AuthFormState';

const initialState: AuthFormState = {
    username: '',
    password: '',
};

export const authFormSlice = createSlice({
    name: 'authForm',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
});

export const { actions: authFormActions } = authFormSlice;
export const { reducer: authFormReducer } = authFormSlice;