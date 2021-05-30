import React, { useEffect } from 'react';
import { Text } from '../shared/Text/Text';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectAllAcceptedRecipes } from '../../store/features/recipe/recipeSlice';
import { getAllAcceptedRecipes } from '../../store/features/recipe/recipeAsync';
import { RecipesList } from '../Recipes/RecipesList/RecipesList';

export const RecipesViewForUser: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const recipesToView = useAppSelector(selectAllAcceptedRecipes);

  useEffect(() => {
    dispatch(getAllAcceptedRecipes());
  }, []);

  return (
    <>
      <Text
        as="h2"
        color="GREY2"
        textAlign="center"
        fontSize="HEADER_BIG"
        fontWeight={700}
      >
        Przepisy({recipesToView.length})
      </Text>
      {recipesToView && <RecipesList recipes={recipesToView} isAdmin={false} />}
    </>
  );
};
