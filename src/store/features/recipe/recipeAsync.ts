import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  acceptChosenRecipeAPI,
  createRecipeAPI,
  deleteRecipeByIDAPI,
  getAllAcceptedRecipesAPI,
  getAllRecipesAPI,
  getAllRecipesByCategoryAPI,
  getRecipeByIDAPI
} from '../../../service/recipeAPI';
import { Recipe } from './recipeTypes';
import { updateUserNotification } from '../user/userSlice';

export const createAnRecipe = createAsyncThunk(
  'Recipe/createAnRecipe',
  async (recipe: Recipe, thunkAPI) => {
    const createRecipe = await createRecipeAPI(recipe);

    if (createRecipe.data.succeeded) {
      thunkAPI.dispatch(
        updateUserNotification({
          show: true,
          message: 'Przepis został pomyślnie dodany',
          title: 'Tworzenie przepisu',
          type: 'success'
        })
      );
    } else {
      thunkAPI.dispatch(
        updateUserNotification({
          show: true,
          message:
            'Przepis nie został poprawnie dodany. Skontaktuj się z administratorem',
          title: 'Tworzenie przepisu',
          type: 'danger'
        })
      );
    }

    return createRecipe;
  }
);

export const getAllRecipes = createAsyncThunk(
  'Recipe/getAllRecipes',
  async (_, thunkAPI) => {
    const getRecipes = await getAllRecipesAPI();

    if (getRecipes.data.data.succeeded === false) {
      thunkAPI.dispatch(
        updateUserNotification({
          show: true,
          message:
            'Błąd podczas pobrania przepisów. Odśwież stronę lub skontaktuj się z administratorem',
          title: 'Przepisy',
          type: 'danger'
        })
      );
    }

    return getRecipes.data.data;
  }
);

export const getAllAcceptedRecipes = createAsyncThunk(
  'Recipe/getAllAcceptedRecipes',
  async (_, thunkAPI) => {
    const getAcceptedRecipes = await getAllAcceptedRecipesAPI();

    if (getAcceptedRecipes.data.data.succeeded === false) {
      thunkAPI.dispatch(
        updateUserNotification({
          show: true,
          message:
            'Błąd podczas pobierania przepisów. Odśwież stronę lub skontaktuj się z administratorem',
          title: 'Przepisy',
          type: 'danger'
        })
      );
    }

    return getAcceptedRecipes.data.data;
  }
);

export const getRecipeByID = createAsyncThunk(
  'Recipe/getRecipeByID',
  async (recipeID: string, thunkAPI) => {
    const getRecipe = await getRecipeByIDAPI(recipeID);

    if (getRecipe.data.succeeded === false) {
      thunkAPI.dispatch(
        updateUserNotification({
          show: true,
          message:
            'Błąd podczas pobrania przepisu. Odśwież stronę lub skontaktuj się z administratorem',
          title: 'Przepisy',
          type: 'danger'
        })
      );
    }
    return getRecipe.data.data;
  }
);

export const deleteRecipeByID = createAsyncThunk(
  'Recipe/deleteRecipeByID',
  async (recipeID: string, thunkAPI) => {
    const deleteRecipe = await deleteRecipeByIDAPI(recipeID);

    if (deleteRecipe.status === 204) {
      thunkAPI.dispatch(
        updateUserNotification({
          show: true,
          message: 'Przepis',
          title: 'Przepis został pomyślnie usunięty.',
          type: 'info'
        })
      );
    }
    return deleteRecipe.data.data;
  }
);

export const acceptChosenRecipe = createAsyncThunk(
  'Recipe/deleteRecipeByID',
  async (recipe: Recipe, thunkAPI) => {
    const acceptRecipe = await acceptChosenRecipeAPI(recipe);

    if (acceptRecipe.status === 204) {
      thunkAPI.dispatch(
        updateUserNotification({
          show: true,
          message: 'Przepis',
          title: 'Przepis został pomyślnie zaakceptowany.',
          type: 'info'
        })
      );
    }

    return acceptRecipe.data.data;
  }
);

export const getAllRecipesByCategory = createAsyncThunk(
  'Recipe/getAllRecipesByCategory',
  async (category: string, thunkAPI) => {
    const getRecipes = await getAllRecipesByCategoryAPI(category);

    if (getRecipes.data.data.succeeded === false) {
      thunkAPI.dispatch(
        updateUserNotification({
          show: true,
          message:
            'Błąd podczas pobrania przepisów. Odśwież stronę lub skontaktuj się z administratorem',
          title: 'Przepisy',
          type: 'danger'
        })
      );
    }

    return getRecipes.data.data;
  }
);
