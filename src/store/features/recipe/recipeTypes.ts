import { PhotoProps } from '../../../types/commonTypes';

export interface RecipesListProps {
  recipeName: string;
  photo: PhotoProps;
  recipeCategory: string;
  path: string;
}

export interface RecipesListInterface {
  recipes: RecipesListProps[];
}

export interface Recipe {
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
}
