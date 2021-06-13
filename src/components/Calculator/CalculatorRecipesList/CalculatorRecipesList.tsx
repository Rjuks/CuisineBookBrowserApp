import React from 'react';
import { Button } from '../../shared/Button/Button';
import { Recipe } from '../../../store/features/recipe/recipeTypes';
import styled from 'styled-components';
import { THEME_COLORS } from '../../../styles/themeStyles';
import { IconButton } from '@material-ui/core';
import Logo from '../../../assets/photos/logo.jpg';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Text } from '../../shared/Text/Text';

interface CalculatorListProps {
  recipes: any;
  onChangeCategoryHandler: (categoryType: any) => void;
  onAddUserRecipeHandler: (recipe: any) => void;
}

export const CalculatorRecipesList: React.FunctionComponent<CalculatorListProps> =
  ({
    recipes,
    onChangeCategoryHandler,
    onAddUserRecipeHandler
  }: CalculatorListProps) => {
    return (
      <StyledRecipesContainer>
        <StyledButtonsContainer>
          <Button onClick={() => onChangeCategoryHandler('breakfast')}>
            Śniadanie
          </Button>
          <Button onClick={() => onChangeCategoryHandler('dinner')}>
            Obiad
          </Button>
          <Button onClick={() => onChangeCategoryHandler('supper')}>
            Kolacja
          </Button>
          <Button onClick={() => onChangeCategoryHandler('snack')}>
            Przekąski
          </Button>
        </StyledButtonsContainer>

        <StyledList>
          <StyledListItem color={THEME_COLORS.TERTIARY}>
            <Text
              as="p"
              color="GREY2"
              textAlign="center"
              fontSize="TEXT_BIG"
              fontWeight={700}
            >
              Danie
            </Text>
            <Text
              as="p"
              color="GREY2"
              textAlign="center"
              fontSize="TEXT_DEFAULT"
              fontWeight={700}
            >
              Kalorie
            </Text>
            <Text
              as="p"
              color="GREY2"
              textAlign="center"
              fontSize="TEXT_DEFAULT"
              fontWeight={700}
            >
              Gramatura
            </Text>
            <Text
              as="p"
              color="GREY2"
              textAlign="center"
              fontSize="TEXT_DEFAULT"
              fontWeight={700}
            >
              Dodaj do swojej listy
            </Text>
          </StyledListItem>
          {recipes.map((recipe: any, index: number) => (
            <StyledListItem key={recipe.id} color={THEME_COLORS.SECONDARY}>
              <Text
                as="p"
                color="GREY2"
                textAlign="center"
                fontSize="TEXT_BIG"
                fontWeight={700}
              >
                {recipe.label}
              </Text>
              <Text
                as="p"
                color="GREY2"
                textAlign="center"
                fontSize="TEXT_DEFAULT"
                fontWeight={700}
              >
                {recipe.kcalValue} kcal
              </Text>
              <Text
                as="p"
                color="GREY2"
                textAlign="center"
                fontSize="TEXT_DEFAULT"
                fontWeight={700}
              >
                {recipe.grams}g
              </Text>
              <CheckCircleIcon onClick={() => onAddUserRecipeHandler(recipe)} />
            </StyledListItem>
          ))}
        </StyledList>
      </StyledRecipesContainer>
    );
  };

const StyledRecipesContainer = styled.section`
  display: block;
}
`;

const StyledListItem = styled.li`
  display: flex;
  margin: 10px 0;
  padding: 5px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  align-items: center;

  p,
  span,
  svg,
  h3 {
    flex: 1 1 0;
    text-align: center;
  }

  svg {
    color: ${THEME_COLORS.GREEN};
    cursor: pointer;
  }
`;

const StyledList = styled.ul`
  list-style: none;
}
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  margin: 0 auto;

  button {
    margin: 0 20px;
  }
`;
