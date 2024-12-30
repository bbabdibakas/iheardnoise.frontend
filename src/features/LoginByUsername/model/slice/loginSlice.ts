import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginState } from '../types/LoginState';
import { loginByUsername } from '../services/loginByUsername';

const initialState: LoginState = {
    username: '',
    password: '',
    isLoading: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        resetState: (state) => {
            state.username = ''
            state.password = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.errorMessage = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.errorMessage = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
