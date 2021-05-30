import React, { useEffect } from 'react';
import { Text } from '../../shared/Text/Text';
import {
  cleanUpAllRecipesByCategory,
  selectAllRecipesByCategory
} from '../../../store/features/recipe/recipeSlice';
import { getAllRecipesByCategory } from '../../../store/features/recipe/recipeAsync';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { RecipesList } from '../../Recipes/RecipesList/RecipesList';
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps<{ category: string }>;

export const RecipesByCategory: React.FunctionComponent<Props> = ({
  match
}: Props) => {
  const dispatch = useAppDispatch();
  const allRecipesByCategory = useAppSelector(selectAllRecipesByCategory);

  useEffect(() => {
    dispatch(getAllRecipesByCategory(match.params.category));

    //todo powinienem czyścić store przy każdym unmount
    return function cleanup() {
      dispatch(cleanUpAllRecipesByCategory());
    };
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
        Przepisy({allRecipesByCategory.length})
      </Text>
      {allRecipesByCategory && (
        <RecipesList recipes={allRecipesByCategory} isAdmin={false} />
      )}
    </>
  );
};
