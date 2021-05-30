import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Recipe, RecipeStoreState } from './recipeTypes';

import {
  createAnRecipe,
  getAllAcceptedRecipes,
  getAllRecipes,
  getAllRecipesByCategory,
  getRecipeByID
} from './recipeAsync';

export const INITIAL_STATE: RecipeStoreState = {
  allRecipes: [],
  allAcceptedRecipes: [],
  chosenRecipeByID: [],
  allRecipesByCategory: []
};

const recipeSlice = createSlice({
  name: 'Recipe',
  initialState: INITIAL_STATE,
  reducers: {
    updateRecipesOnDelete: (state, { payload }) => {
      state.allRecipes = state.allRecipes.filter(
        (recipe: any) => recipe.id !== payload.id
      );
    },
    updateRecipesOnAccept: (state, { payload }) => {
      state.allRecipes = state.allRecipes.map((recipe: any) => {
        if (recipe.id === payload.id) {
          return { ...recipe, isAccepted: true };
        }

        return recipe;
      });
    },
    cleanUpAllRecipesByCategory: (state) => {
      state.allRecipesByCategory = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllRecipes.pending, (state, { payload }) => {
      state.allRecipes = [];
    });
    builder.addCase(getAllRecipes.fulfilled, (state, { payload }) => {
      state.allRecipes = payload;
    });
    builder.addCase(getAllAcceptedRecipes.fulfilled, (state, { payload }) => {
      state.allAcceptedRecipes = payload;
    });
    builder.addCase(createAnRecipe.fulfilled, (state, { payload }) => {
      console.log('Przepis dodany');
    });
    builder.addCase(getRecipeByID.fulfilled, (state, { payload }) => {
      state.chosenRecipeByID = payload;
    });
    builder.addCase(getAllRecipesByCategory.fulfilled, (state, { payload }) => {
      state.allRecipesByCategory = payload;
    });
  }
});

export const {
  updateRecipesOnDelete,
  updateRecipesOnAccept,
  cleanUpAllRecipesByCategory
} = recipeSlice.actions;

export const selectAllAcceptedRecipes = (state: RootState): Recipe[] =>
  state.recipe.allAcceptedRecipes;

export const selectAllRecipes = (state: RootState): any =>
  state.recipe.allRecipes;

export const selectAllRecipesByCategory = (state: RootState): any =>
  state.recipe.allRecipesByCategory;

export const selectChosenRecipeByID = (state: RootState): any =>
  state.recipe.chosenRecipeByID;

export default recipeSlice.reducer;
