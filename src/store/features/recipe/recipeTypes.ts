import { PhotoProps } from '../../../types/commonTypes';

export interface RecipesCategoriesProps {
  recipeName: string;
  photo: PhotoProps;
  recipeCategory: string;
  path: string;
}

export interface RecipesCategoriesInterface {
  recipes: RecipesCategoriesProps[];
}

export interface Recipe {
  id?: number;
  title: string;
  ingredients: string;
  imageLink: string;
  difficulty: string;
  preparationTime?: string;
  calorificValue: number;
  preparingMethod?: string;
  cathegory: string;
}

export interface RecipeStoreState {
  allRecipes: Recipe[];
  allAcceptedRecipes: Recipe[];
}
