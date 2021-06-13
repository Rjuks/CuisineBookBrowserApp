import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../../../styles/themeStyles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Text } from '../../shared/Text/Text';
import CancelIcon from '@material-ui/icons/Cancel';

interface CalculatorListProps {
  recipes: any;
  onDeleteUserRecipeHandler: (recipe: any) => void;
}

export const CalculatorUserRecipesList: React.FunctionComponent<CalculatorListProps> =
  ({ recipes, onDeleteUserRecipeHandler }: CalculatorListProps) => {
    return (
      <StyledRecipesContainer>
        <Text
          as="h3"
          color="GREY2"
          textAlign="center"
          fontSize="HEADER_DEFAULT"
          fontWeight={700}
          style={{ paddingBottom: '10px' }}
        >
          Twoja lista dań
        </Text>
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
              Usuń ze swojej listy
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
              <CancelIcon onClick={() => onDeleteUserRecipeHandler(recipe)} />
            </StyledListItem>
          ))}
        </StyledList>
      </StyledRecipesContainer>
    );
  };

const StyledRecipesContainer = styled.div`
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
    color: ${THEME_COLORS.RED};
    cursor: pointer;
  }
`;

const StyledList = styled.ul`
  list-style: none;
}
`;
