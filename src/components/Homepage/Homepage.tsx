import React, { useEffect } from 'react';

import { useAppDispatch } from '../../store/hooks';
import { RecipesCategoriesList } from '../Recipes/RecipesCategoriesList/RecipesCategoriesList';
import { recipesCategories } from '../../consts/recipes';
import { Text } from '../shared/Text/Text';
import { getAllAcceptedRecipes } from '../../store/features/recipe/recipeAsync';
import { getCookie } from '../../service/cookieService';

export const Homepage: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllAcceptedRecipes());
  }, []);

  console.log(getCookie('username'));

  return (
    <>
      <Text
        as="h1"
        color="GREY2"
        textAlign="center"
        fontSize="HEADER_BIG"
        fontWeight={700}
      >
        Wybierz kategorie dania
      </Text>
      <RecipesCategoriesList recipes={recipesCategories} />
    </>
  );
};
