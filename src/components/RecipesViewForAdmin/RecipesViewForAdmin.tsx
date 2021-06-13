import React, { useCallback, useEffect, useState } from 'react';
import { Text } from '../shared/Text/Text';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  selectAllRecipes,
  updateRecipesOnAccept,
  updateRecipesOnDelete
} from '../../store/features/recipe/recipeSlice';
import {
  acceptChosenRecipe,
  deleteRecipeByID,
  getAllRecipes
} from '../../store/features/recipe/recipeAsync';
import { RecipesList } from '../Recipes/RecipesList/RecipesList';
import { Recipe } from '../../store/features/recipe/recipeTypes';
import { Button } from '../shared/Button/Button';

export const RecipesViewForAdmin: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const recipesToView = useAppSelector(selectAllRecipes);
  const [showAllRecipes, setShowAllRecipes] = useState<boolean>(false);
  // const history = useHistory();

  //todo, powinienem mieć role adminą bądz response z axiosa, ze nie mam uprawnien. Wieć dałem 1s i sprawdza czy data ma długość 0< (tylko admin dostaje data)

  // setTimeout(() => {
  //   if (recipesToView.length === 0) {
  //     dispatch(
  //       updateUserNotification({
  //         show: true,
  //         message:
  //           'Nie masz uprawnień do tej sekcji! Zostałeś przekierowany na stronę główną',
  //         title: 'Brak dostępu',
  //         type: 'danger'
  //       })
  //     );
  //     //
  //     // history.push({
  //     //   pathname: '/homepage'
  //     // });
  //   }
  // }, 2000);

  useEffect(() => {
    dispatch(getAllRecipes());
  }, []);

  const acceptRecipe = useCallback((recipeData: Recipe) => {
    dispatch(acceptChosenRecipe(recipeData));
    dispatch(updateRecipesOnAccept({ id: recipeData.id }));
  }, []);

  const declineRecipe = useCallback(
    (recipeID: string) => {
      dispatch(deleteRecipeByID(recipeID));

      //todo nie wiem czemu nie moge dodac w async thunkapi
      dispatch(updateRecipesOnDelete({ id: recipeID }));
    },
    [dispatch]
  );

  const filteredRecipesToView =
    recipesToView &&
    recipesToView.filter((recipe: any) =>
      showAllRecipes ? recipe.isAccepted : !recipe.isAccepted
    );

  return (
    <>
      {recipesToView.length === 0 ? (
        <Text
          as="h2"
          color="GREY2"
          textAlign="center"
          fontSize="HEADER_BIG"
          fontWeight={700}
        >
          Nie masz uprawnień do tej podstrony
        </Text>
      ) : (
        <>
          <Text
            as="h2"
            color="GREY2"
            textAlign="center"
            fontSize="HEADER_BIG"
            fontWeight={700}
            style={{ marginBottom: '20px' }}
          >
            Zatwierdź/usuń przepis
          </Text>
          <Button
            onClick={() => setShowAllRecipes(!showAllRecipes)}
            style={{ margin: '20px auto' }}
          >
            {showAllRecipes
              ? 'Pokaż przepisy do zaakceptowania'
              : 'Pokaż zaakceptowane przepisy'}
          </Button>
        </>
      )}
      {recipesToView && (
        <RecipesList
          recipes={filteredRecipesToView}
          isAdmin
          onDeclineRecipeHandler={declineRecipe}
          onAcceptRecipeHandler={acceptRecipe}
        />
      )}
    </>
  );
};
