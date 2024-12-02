import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';

interface AuthByUsernameProps {
    username: string;
    password: string;
}

export const authByUsername = createAsyncThunk<User, AuthByUsernameProps, { rejectValue: string }>(
    'auth/authByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/auth', authData);

            if (!response.data) {
                throw new Error();
            }

            thunkAPI.dispatch(userActions.setUserData(response.data))
            
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
