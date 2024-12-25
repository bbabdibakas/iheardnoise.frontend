import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
    id: string
    username: string;
}

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'auth/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8001/auth/login', authData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {

            // for test
            console.log(error)
            return thunkAPI.rejectWithValue('error');
        }
    },
);
