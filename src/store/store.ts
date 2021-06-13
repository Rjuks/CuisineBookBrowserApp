import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import recipeSlice from './features/recipe/recipeSlice';
import calculatorSlice from './features/calculator/calculatorSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
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
