import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { Text } from '../shared/Text/Text';
import { THEME_COLORS } from '../../styles/themeStyles';
import { TextField } from '../shared/Formik/TextField/TextField';
import { Button } from '../shared/Button/Button';
import {
  addUserRecipe,
  deleteUserRecipe,
  selectCurrentCategory,
  selectMaxCalories,
  selectRecipesByChosenCategory,
  selectUserRecipes,
  selectUserRecipesCalories,
  setCurrentCategory,
  setMaxCalories
} from '../../store/features/calculator/calculatorSlice';
import { CalculatorRecipesList } from './CalculatorRecipesList/CalculatorRecipesList';
import { Recipe } from '../../store/features/recipe/recipeTypes';
import { CalculatorUserRecipesList } from './CalculatorUserRecipesList/CalculatorUserRecipesList';
import { updateUserNotification } from '../../store/features/user/userSlice';

export const Calculator = () => {
  const dispatch = useAppDispatch();
  const getCurrentCategory = useAppSelector(selectCurrentCategory);
  const getRecipesByChosenCategory = useAppSelector(
    selectRecipesByChosenCategory
  );
  const getUserRecipes = useAppSelector(selectUserRecipes);

  const getMaxCalories = useAppSelector(selectMaxCalories);
  const getUserRecipesCalories = useAppSelector(selectUserRecipesCalories);

  const percentage = 66;

  const validateFormValues = Yup.object({
    maxCalories: Yup.number().required('Podaj ilość kalorii!')
  });

  const changeCategory = useCallback(
    (categoryType: string) => {
      dispatch(setCurrentCategory(categoryType));
    },
    [dispatch]
  );

  const addRecipe = useCallback(
    (recipe: any) => {
      dispatch(addUserRecipe(recipe));
    },
    [dispatch]
  );

  const deleteRecipe = useCallback(
    (recipe: any) => {
      dispatch(deleteUserRecipe(recipe));
    },
    [dispatch]
  );

  useEffect(() => {
    if (getUserRecipesCalories > getMaxCalories) {
      dispatch(
        updateUserNotification({
          show: true,
          message: 'Przekroczyłeś swój dzienny limit!',
          title: 'Kalkulator',
          type: 'danger'
        })
      );
    }
  }, [getMaxCalories, getUserRecipesCalories]);

  console.log(getMaxCalories);

  return (
    <StyledCalculatorContainer>
      <Text
        as="h1"
        color="GREY2"
        textAlign="center"
        fontSize="HEADER_DEFAULT"
        fontWeight={700}
      >
        Kalkulator kalorii
      </Text>
      <StyledInputContainer>
        <Formik
          initialValues={{
            maxCalories: 0
          }}
          validationSchema={validateFormValues}
          onSubmit={(values: any) => {
            dispatch(setMaxCalories(values.maxCalories));
          }}
        >
          {() => (
            <Form>
              <TextField
                labelProps={{
                  fontSize: 'TEXT_DEFAULT',
                  fontWeight: 700,
                  color: 'GREY2',
                  children: 'Wpisz dzienne zapotrzebowanie kaloryczne'
                }}
                name="maxCalories"
                type="number"
                icon={<LocalDiningIcon />}
                placeholder="Kalorie"
              />
              <div className="buttons_wrapper">
                <Button type="submit">Zatwierdź</Button>
              </div>
            </Form>
          )}
        </Formik>
      </StyledInputContainer>
      {getMaxCalories !== 0 && (
        <>
          <StyledArrowIcon>
            <ArrowDownwardIcon />
          </StyledArrowIcon>
          <StyledProgressBar>
            <CircularProgressbar
              value={Math.floor(
                (getUserRecipesCalories / getMaxCalories) * 100
              )}
              text={`${getUserRecipesCalories} kcal`}
              styles={buildStyles({
                textColor: 'black',
                pathColor:
                  getUserRecipesCalories > getMaxCalories
                    ? 'red'
                    : THEME_COLORS.SECONDARY,
                textSize: '16px'
              })}
            />
          </StyledProgressBar>
          <StyledRecipesSections>
            <CalculatorRecipesList
              recipes={getRecipesByChosenCategory}
              onChangeCategoryHandler={changeCategory}
              onAddUserRecipeHandler={addRecipe}
            />
            {getUserRecipes.length !== 0 && (
              <CalculatorUserRecipesList
                recipes={getUserRecipes}
                onDeleteUserRecipeHandler={deleteRecipe}
              />
            )}
          </StyledRecipesSections>
        </>
      )}
    </StyledCalculatorContainer>
  );
};

const StyledCalculatorContainer = styled.div`
  max-width: 1600px;
  margin: 20px auto 0 auto;
  display: block;
  padding: 20px;
  background-color: ${THEME_COLORS.LIGHTGREY};
  border-radius: 20px;
`;

const StyledInputContainer = styled.div`
  display: block;
  width: 25%;
  margin: 0 auto;

  button {
    width: 50%;
  }
`;

const StyledRecipesSections = styled.section`
  display: flex;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  gap: 50px;

  div {
    flex: 1 1 0;
  }
`;

const StyledArrowIcon = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 40px 0;

  svg {
    color: ${THEME_COLORS.SECONDARY};
    width: 40px;
    height: 40px;
    padding: 10px;
    background-color: #fff;
    border-radius: 50%;
  }
`;

const StyledProgressBar = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 30px auto;
`;
