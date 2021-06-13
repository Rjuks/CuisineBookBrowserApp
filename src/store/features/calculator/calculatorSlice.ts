import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
import { calculatorMockData } from '../../../consts/calculatorData';

export interface CounterState {
  maxCalories: number;
  currentCategory: 'breakfast' | 'dinner' | 'supper' | 'snack';
  recipesList: any;
  userRecipes: any;
}

const initialState: CounterState = {
  maxCalories: 0,
  currentCategory: 'snack',
  recipesList: calculatorMockData,
  userRecipes: []
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setMaxCalories: (state, action: PayloadAction<number>) => {
      state.maxCalories = action.payload;
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    addUserRecipe: (state, action) => {
      const isRecipeAlreadyExists = state.userRecipes.some(
        (recipe: any) => recipe.id === action.payload.id
      );
      !isRecipeAlreadyExists && state.userRecipes.push(action.payload);
    },
    deleteUserRecipe: (state, action) => {
      state.userRecipes = state.userRecipes.filter(
        (recipe: any) => recipe.id !== action.payload.id
      );
    }
  }
});

export const {
  setMaxCalories,
  setCurrentCategory,
  addUserRecipe,
  deleteUserRecipe
} = calculatorSlice.actions;

export const selectMaxCalories = (state: RootState) =>
  state.calculator.maxCalories;

export const selectRecipesByChosenCategory = (state: RootState) => {
  const myKeys = state.calculator.recipesList.filter(
    (recipe: any) => recipe[state.calculator.currentCategory]
  );

  return myKeys[0][state.calculator.currentCategory];
};

export const selectCurrentCategory = (state: RootState) =>
  state.calculator.currentCategory;

export const selectUserRecipes = (state: RootState) =>
  state.calculator.userRecipes;

export const selectUserRecipesCalories = (state: RootState) => {
  let calories = 0;
  const countAllCalories = state.calculator.userRecipes.forEach(
    (recipe: any) => (calories += recipe.kcalValue)
  );

  return calories;
};

export default calculatorSlice.reducer;
