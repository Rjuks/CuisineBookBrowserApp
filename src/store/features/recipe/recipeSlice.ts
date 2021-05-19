import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { RecipeStoreState } from './recipeTypes';
import { signInUser } from '../user/userAsync';
import { createAnRecipe, getAllRecipes } from './recipeAsync';

export const INITIAL_STATE: RecipeStoreState = {
  allRecipes: []
};

const recipeSlice = createSlice({
  name: 'Recipe',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllRecipes.fulfilled, (state, { payload }) => {
      state.allRecipes = payload;
    });
    builder.addCase(getAllRecipes.rejected, (state, action) => {});
    alert('[RecipeSlice] U fkdc somth Carl');
  }
});

export default recipeSlice.reducer;
