import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInUserAPI, signUpUserAPI } from '../../../service/userAPI';
import axios from 'axios';
import { UserCredentials } from './userTypes';
import { setCookie } from '../../../service/cookieService';

// todo keep session by cookie
export const signInUser = createAsyncThunk(
  'User/signInUser',
  async (credentials: UserCredentials, thunkAPI) => {
    const signInUser = await signInUserAPI(credentials);

    const accessToken = signInUser.data.token;
    if (accessToken) {
      const setAuthToken = axios.interceptors.request.use((req) => {
        req.headers.authorization = `Bearer ${accessToken}`;

        setCookie('user', accessToken, 1);

        return req;
      }) as number;
      return setAuthToken;
    }

    return signInUser;
  }
);

export const signUpUser = createAsyncThunk(
  'User/signUpUser',
  async (credentials: UserCredentials, { dispatch }) => {
    const signUpUser = await signUpUserAPI(credentials);

    if (signUpUser.data.succeeded) {
      setTimeout(() => {
        dispatch(signInUser(credentials));
      }, 1500);
    }

    return signUpUser;
  }
);
