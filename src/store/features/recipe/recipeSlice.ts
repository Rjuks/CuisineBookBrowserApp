import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Recipe, RecipeStoreState } from './recipeTypes';
import { signInUser } from '../user/userAsync';
import {
  createAnRecipe,
  getAllAcceptedRecipes,
  getAllRecipes
} from './recipeAsync';

export const INITIAL_STATE: RecipeStoreState = {
  allRecipes: [],
  allAcceptedRecipes: []
};

const recipeSlice = createSlice({
  name: 'Recipe',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllRecipes.fulfilled, (state, { payload }) => {
      state.allRecipes = payload;
    });
    builder.addCase(getAllRecipes.rejected, (state, action) => {
      alert('[RecipeSlice] U fkdc somth Carl createAnRecipe');
    });
    builder.addCase(getAllAcceptedRecipes.fulfilled, (state, { payload }) => {
      state.allAcceptedRecipes = payload;
    });
    builder.addCase(getAllAcceptedRecipes.rejected, (state, action) => {
      alert('[RecipeSlice] U fkdc somth Carl getAllAcceptedRecipes');
    });
    builder.addCase(createAnRecipe.fulfilled, (state, { payload }) => {
      alert('[RecipeSlice] poprawnie dodany');
    });
    builder.addCase(createAnRecipe.rejected, (state, action) => {
      alert('[RecipeSlice] U fkdc somth Carl createAnRecipe');
    });
  }
});

export const selectAllAcceptedRecipes = (state: RootState): Recipe[] =>
  state.recipe.allAcceptedRecipes;

export default recipeSlice.reducer;
