import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInUserAPI } from '../../../../service/userAPI';
import axios from 'axios';

export const signInUser = createAsyncThunk(
  'User/signInUser',
  async (credentials: any, thunkAPI) => {
    const signInUser = await signInUserAPI(credentials);

    const token = signInUser.data.accessToken;
    if (token) {
      const setAuthToken = axios.interceptors.request.use((req) => {
        req.headers.authorization = `Bearer ${token}`;

        return req;
      }) as number;
    }

    return signInUser;
  }
);
