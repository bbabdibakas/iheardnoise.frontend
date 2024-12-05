import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthFormState } from '../types/AuthFormState';
import { authByUsername } from '../services/authByUsername';

const initialState: AuthFormState = {
    username: '',
    password: '',
    isLoading: false
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
        resetAuthForm: (state) => {
            state.username = ''
            state.password = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authByUsername.pending, (state) => {
                state.isErrorMessage = undefined;
                state.isLoading = true;
            })
            .addCase(authByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(authByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.isErrorMessage = action.payload;
            });
    },
});

export const { actions: authFormActions } = authFormSlice;
export const { reducer: authFormReducer } = authFormSlice;