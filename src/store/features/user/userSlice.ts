import { createSlice } from '@reduxjs/toolkit';
import { signInUser, signUpUser } from './userAsync';
import { RootState } from '../../store';
import { UserNotificationProps, UserStoreState } from './userTypes';

export const INITIAL_STATE: UserStoreState = {
  isLoggedIn: false,
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
    finishUserNotification: (state, action) => {
      state.userNotification.show = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.userNotification = {
        show: true,
        title: 'Logowanie',
        message: 'Logowanie przebiegło pomyślnie',
        type: 'success'
      };
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      state.isLoggedIn = false;
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

export const { finishUserNotification } = userSlice.actions;

export const selectUserIsLoggedIn = (state: RootState): boolean =>
  state.user.isLoggedIn;

export const selectUserNotification = (
  state: RootState
): UserNotificationProps => state.user.userNotification;

export default userSlice.reducer;
