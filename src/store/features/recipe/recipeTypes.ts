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
  id?: string;
  title: string;
  ingredients: string;
  imageLink: string;
  difficulty: 'Latwy' | 'Średni' | 'Trudny';
  preparationTime?: string;
  calorificValue: number;
  preparingMethod?: string;
  cathegory: string;
}

// todo check chosenreicpe types
export interface RecipeStoreState {
  allRecipes: Recipe[];
  allAcceptedRecipes: Recipe[];
  chosenRecipeByID: any;
  allRecipesByCategory: any;
}
