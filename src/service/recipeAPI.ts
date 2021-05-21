import axios, { AxiosResponse } from 'axios';
import { Recipe } from '../store/features/recipe/recipeTypes';

export const createRecipeAPI = async (
  recipe: Recipe
): Promise<AxiosResponse<any>> => {
  return await axios.post(
    `${process.env.REACT_APP_ENDPOINT_URL}/api/Food`,
    recipe
  );
};

export const getAllRecipesAPI = async (): Promise<any> => {
  return await axios.get(`${process.env.REACT_APP_ENDPOINT_URL}/api/Food`);
};

export const getAllAcceptedRecipesAPI = async (): Promise<any> => {
  return await axios.get(
    `${process.env.REACT_APP_ENDPOINT_URL}/api/Food/GetAccepted`
  );
};
