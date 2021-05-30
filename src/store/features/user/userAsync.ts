import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInUserAPI, signUpUserAPI } from '../../../service/userAPI';
import { UserCredentials } from './userTypes';
import { setCookie } from '../../../service/cookieService';

export const signInUser = createAsyncThunk(
  'User/signInUser',
  async (credentials: UserCredentials, thunkAPI) => {
    const signInUser = await signInUserAPI(credentials);

    const accessToken = signInUser.data.token;
    if (accessToken) {
      setCookie('user', accessToken, signInUser.data.expiration);
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
