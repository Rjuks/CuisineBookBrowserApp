import dinnerPhoto from '../assets/photos/recipesCategories/dinner.jpg';
import dessertPhoto from '../assets/photos/recipesCategories/dessert.jpg';
import breakfastPhoto from '../assets/photos/recipesCategories/breakfast.jpg';
import orientalDishPhoto from '../assets/photos/recipesCategories/oriental.jpg';
import soupPhoto from '../assets/photos/recipesCategories/soup.jpg';
import { RecipesListProps } from '../store/features/recipe/recipeTypes';

export const recipesCategories: RecipesListProps[] = [
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
