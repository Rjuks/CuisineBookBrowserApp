import { createSlice } from '@reduxjs/toolkit';
import { signInUser, signUpUser } from './userAsync';
import { RootState } from '../../store';
import { UserNotificationProps, UserStoreState } from './userTypes';
import { getCookie } from '../../../service/cookieService';

export const INITIAL_STATE: UserStoreState = {
  isLoggedIn: getCookie('user'),
  userNotification: {
    show: false,
    message: '',
    title: '',
    type: 'info'
  }
};

const userSlice = createSlice({
  name: 'User',
  initialState: INITIAL_STATE,
  reducers: {
    updateUserNotification: (state, action) => {
      state.userNotification = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.isLoggedIn = getCookie('user');
      state.userNotification = {
        show: true,
        title: 'Logowanie',
        message: 'Logowanie przebiegło pomyślnie',
        type: 'success'
      };
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      state.isLoggedIn = '';
      state.userNotification = {
        show: true,
        title: 'Logowanie',
        message: 'Błąd podczas logowania, skontaktuj się z administratorem',
        type: 'danger'
      };
    });

    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.userNotification = {
        show: true,
        title: 'Rejestracja',
        message:
          'Rejestracja przebiegła pomyślnie, za chwilę zostaniesz zalogowany',
        type: 'success'
      };
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.userNotification = {
        show: true,
        title: 'Rejestracja',
        message: 'Błąd podczas rejestracji, skontaktuj się z administratorem',
        type: 'danger'
      };
    });
  }
});

export const { updateUserNotification } = userSlice.actions;

export const selectUserIsLoggedIn = (state: RootState): string =>
  state.user.isLoggedIn;

export const selectUserNotification = (
  state: RootState
): UserNotificationProps => state.user.userNotification;

export default userSlice.reducer;
