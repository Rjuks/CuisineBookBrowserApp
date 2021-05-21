import React, { useCallback } from 'react';
import { Text } from '../shared/Text/Text';
import { NewRecipeForm } from '../Recipes/NewRecipeForm/NewRecipeForm';

import { useAppDispatch } from '../../store/hooks';
import { Recipe } from '../../store/features/recipe/recipeTypes';
import { createAnRecipe } from '../../store/features/recipe/recipeAsync';
import styled from 'styled-components';

export const AddNewRecipe: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const createRecipe = useCallback(
    (recipe: Recipe) => {
      dispatch(createAnRecipe(recipe));
    },
    [dispatch]
  );

  return (
    <StyledNewRecipePage>
      <Text
        as="h1"
        color="GREY2"
        textAlign="center"
        fontSize="HEADER_BIG"
        fontWeight={700}
      >
        Dodaj nowy przepis
      </Text>
      <Text
        as="p"
        color="GREY2"
        textAlign="center"
        fontSize="TEXT_DEFAULT"
        fontWeight={700}
      >
        Przepis który dodasz, musi przejść przez osobę która sprawdzi poprawność
        przepisu :)
      </Text>
      <NewRecipeForm onSubmitHandler={createRecipe} />
    </StyledNewRecipePage>
  );
};

const StyledNewRecipePage = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;
