import dinnerPhoto from '../assets/photos/recipesCategories/dinner.jpg';
import dessertPhoto from '../assets/photos/recipesCategories/dessert.jpg';
import breakfastPhoto from '../assets/photos/recipesCategories/breakfast.jpg';
import orientalDishPhoto from '../assets/photos/recipesCategories/oriental.jpg';
import soupPhoto from '../assets/photos/recipesCategories/soup.jpg';
import { RecipesCategoriesProps } from '../store/features/recipe/recipeTypes';
import { DropdownOption } from '../types/commonTypes';

export const recipesCategories: RecipesCategoriesProps[] = [
  {
    recipeName: 'Obiad',
    recipeCategory: 'dinner',
    photo: {
      title: 'Obiad',
      alt: 'Obiad',
      imgSrc: dinnerPhoto
    },
    path: 'dinner'
  },
  {
    recipeName: 'Deser',
    recipeCategory: 'dessert',
    photo: {
      title: 'Deser',
      alt: 'Deser',
      imgSrc: dessertPhoto
    },
    path: 'dessert'
  },
  {
    recipeName: 'Śniadanie',
    recipeCategory: 'breakfast',
    photo: {
      title: 'Śniadanie',
      alt: 'Śniadanie',
      imgSrc: breakfastPhoto
    },
    path: 'breakfast'
  },
  {
    recipeName: 'Orientalne',
    recipeCategory: 'oriental',
    photo: {
      title: 'Danie orientalne',
      alt: 'Danie orientalne',
      imgSrc: orientalDishPhoto
    },
    path: 'oriental'
  },
  {
    recipeName: 'Zupa',
    recipeCategory: 'soup',
    photo: {
      title: 'Zupa',
      alt: 'Zupa',
      imgSrc: soupPhoto
    },
    path: 'soup'
  }
];

export const recipesCategoriesOptions: DropdownOption[] = [
  { label: 'Kategoria dania', value: '' },
  { label: 'Obiad', value: 'dinner' },
  { label: 'Deser', value: 'dessert' },
  { label: 'Śniadanie', value: 'breakfast' },
  { label: 'Orientalne', value: 'oriental' },
  { label: 'Zupa', value: 'soup' }
];

export const recipesPreparationTimeOptions: DropdownOption[] = [
  { label: 'Czas przygotowania', value: '' },
  { label: '15 minut', value: '15 minut' },
  { label: '30 minut', value: '30 minut' },
  { label: '45 minut', value: '45 minut' },
  { label: '60 minut', value: '60 minut' },
  { label: '90 minut', value: '90 minut' },
  { label: 'Ponad 90 minut', value: 'Ponad 90 minut' }
];

export const recipesDifficultyOptions: DropdownOption[] = [
  { label: 'Poziom trudności', value: '' },
  { label: 'Łatwy', value: 'Łatwy' },
  { label: 'Średni', value: 'Średni' },
  { label: 'Trudny', value: 'Trudny' }
];

export enum difficultyStars {
  Latwy = 1,
  Średni,
  Trudny
}
