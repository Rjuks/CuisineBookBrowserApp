import { createAsyncThunk } from '@reduxjs/toolkit';
import { createRecipeAPI, getAllRecipesAPI } from '../../../service/recipeAPI';
import { Recipe } from './recipeTypes';

export const createAnRecipe = createAsyncThunk(
  'Recipe/createAnRecipe',
  async (recipeData: Recipe, thunkAPI) => {
    const createRecipe = await createRecipeAPI(recipeData);

    return createRecipe;
  }
);

export const getAllRecipes = createAsyncThunk(
  'Recipe/getAllRecipes',
  async () => {
    const getRecipes = await getAllRecipesAPI();

    return getRecipes;
  }
);
