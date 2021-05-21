import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import userSlice from './features/user/userSlice';
import recipeSlice from './features/recipe/recipeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
    recipe: recipeSlice
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
