import { createSlice } from '@reduxjs/toolkit';
import { signInUser } from './userAsync/userAsync';
import { RootState } from '../../store';
import { boolean } from 'yup';
import { counterSlice } from '../counter/counterSlice';

export const INITIAL_STATE: UserStoreState = {
  isLoggedIn: false
};

export interface UserStoreState {
  isLoggedIn: boolean;
}

const userSlice = createSlice({
  name: 'User',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signInUser.fulfilled, (state, action) => {
      console.log('fullfiled');
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      console.log('rejected');
    });
  }
});

export const selectUserIsLoggedIn = (state: RootState): boolean =>
  state.user.isLoggedIn;

export default userSlice.reducer;
