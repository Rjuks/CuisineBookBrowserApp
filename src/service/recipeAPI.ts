import axios, { AxiosResponse } from 'axios';
import { Recipe } from '../store/features/recipe/recipeTypes';

export const createRecipeAPI = async (
  recipeData: Recipe
): Promise<AxiosResponse<Recipe>> => {
  return await axios.post(
    `${process.env.REACT_APP_ENDPOINT_URL}/api/Food`,
    recipeData
  );
};

export const getAllRecipesAPI = async (): Promise<Recipe[]> => {
  return await axios.get(`${process.env.REACT_APP_ENDPOINT_URL}/api/Food`);
};
