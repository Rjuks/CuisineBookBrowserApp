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

export const getRecipeByIDAPI = async (
  recipeID: string
): Promise<AxiosResponse<any>> => {
  return await axios.get(
    `${process.env.REACT_APP_ENDPOINT_URL}/api/Food/${recipeID}`
  );
};

export const deleteRecipeByIDAPI = async (
  recipeID: string
): Promise<AxiosResponse<any>> => {
  return await axios.delete(
    `${process.env.REACT_APP_ENDPOINT_URL}/api/Food/${recipeID}`
  );
};

export const acceptChosenRecipeAPI = async (
  recipe: Recipe
): Promise<AxiosResponse<any>> => {
  return await axios.put(`${process.env.REACT_APP_ENDPOINT_URL}/api/Food`, {
    id: recipe.id,
    ingredients: recipe.ingredients,
    imageLink: recipe.imageLink,
    difficulty: recipe.difficulty,
    preparationTime: recipe.preparationTime,
    calorificValue: recipe.calorificValue,
    preparingMethod: recipe.preparingMethod,
    cathegory: recipe.cathegory,
    isAccepted: true
  });
};

export const getAllRecipesByCategoryAPI = async (
  category: string
): Promise<AxiosResponse<any>> => {
  return await axios.get(
    `${process.env.REACT_APP_ENDPOINT_URL}/api/Food/cathegory?isAccepted=true&cathegory=${category}`
  );
};
