import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createRecipeAPI,
  getAllAcceptedRecipesAPI,
  getAllRecipesAPI
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
  async () => {
    const getRecipes = await getAllRecipesAPI();

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
