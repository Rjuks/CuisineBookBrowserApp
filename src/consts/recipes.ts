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
    path: '/dinners'
  },
  {
    recipeName: 'Deser',
    recipeCategory: 'dessert',
    photo: {
      title: 'Deser',
      alt: 'Deser',
      imgSrc: dessertPhoto
    },
    path: '/desserts'
  },
  {
    recipeName: 'Śniadanie',
    recipeCategory: 'breakfast',
    photo: {
      title: 'Śniadanie',
      alt: 'Śniadanie',
      imgSrc: breakfastPhoto
    },
    path: '/breakfasts'
  },
  {
    recipeName: 'Orientalne',
    recipeCategory: 'oriental',
    photo: {
      title: 'Danie orientalne',
      alt: 'Danie orientalne',
      imgSrc: orientalDishPhoto
    },
    path: '/oriental-dishes'
  },
  {
    recipeName: 'Zupa',
    recipeCategory: 'soup',
    photo: {
      title: 'Zupa',
      alt: 'Zupa',
      imgSrc: soupPhoto
    },
    path: '/soups'
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
  { label: '15 minut', value: '15min' },
  { label: '30 minut', value: '30min' },
  { label: '45 minut', value: '45min' },
  { label: '60 minut', value: '60min' },
  { label: '90 minut', value: '90min' },
  { label: 'Ponad 90 minut', value: 'over90min' }
];

export const recipesDifficultyOptions: DropdownOption[] = [
  { label: 'Poziom trudności', value: '' },
  { label: 'Łatwy', value: 'easy' },
  { label: 'Średni', value: 'medium' },
  { label: 'Trudny', value: 'hard' }
];
