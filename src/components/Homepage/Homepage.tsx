import React, { useEffect } from 'react';

import { useAppDispatch } from '../../store/hooks';
import { RecipesList } from '../Recipes/RecipesList/RecipesList';
import { recipesCategories } from '../../consts/recipes';
import { Text } from '../shared/Text/Text';
import { getAllRecipes } from '../../store/features/recipe/recipeAsync';
import { getCookie } from '../../service/cookieService';
import { NewRecipeForm } from '../Recipes/NewRecipeForm/NewRecipeForm';

export const Homepage: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllRecipes());
  }, []);

  console.log(getCookie('username'));

  return (
    <>
      <Text
        className="recipe_container__text"
        as="h1"
        color="GREY2"
        textAlign="center"
        fontSize="HEADER_BIG"
        fontWeight={700}
      >
        Wybierz kategorie dania
      </Text>
      <RecipesList recipes={recipesCategories} />

      <NewRecipeForm />
    </>
  );
};
