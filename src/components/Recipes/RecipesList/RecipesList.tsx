import React from 'react';
import { Text } from '../../shared/Text/Text';
import { Recipe } from '../../../store/features/recipe/recipeTypes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { showProperNumberOfStars } from '../utils';
import { THEME_COLORS } from '../../../styles/themeStyles';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

// todo w kompopnentach zrob liste widoku dla admina i usera, a ten jeden komponent reusable

interface RecipesListProps {
  recipes: Recipe[];
  isAdmin: boolean;
  onDeclineRecipeHandler?: (recipeID: string) => void;
  onAcceptRecipeHandler?: (recipe: Recipe) => void;
}

export const RecipesList: React.FunctionComponent<RecipesListProps> = ({
  recipes,
  isAdmin,
  onAcceptRecipeHandler,
  onDeclineRecipeHandler
}: RecipesListProps) => {
  return (
    <StyledRecipesList>
      {recipes.map((recipe: Recipe) => (
        <li className="recipe_container" key={recipe.id}>
          <Link to={`/recipes/recipe/${recipe.id}`}>
            <img src={recipe.imageLink} alt={recipe.title} />
          </Link>
          {isAdmin && (
            <StyledActionsContainer>
              <CheckCircleIcon
                onClick={() =>
                  onAcceptRecipeHandler && onAcceptRecipeHandler(recipe)
                }
              />
              <CancelIcon
                onClick={() =>
                  onDeclineRecipeHandler &&
                  onDeclineRecipeHandler(recipe.id as string)
                }
              />
            </StyledActionsContainer>
          )}

          <Link to={`/recipes/recipe/${recipe.id}`}>
            <Text
              as="h3"
              color="GREY2"
              textAlign="left"
              fontSize="HEADER_SMALL"
              fontWeight={700}
            >
              {recipe.title}
            </Text>
          </Link>

          <div className="recipe_container__informations">
            <div className="informations_difficulty">
              {showProperNumberOfStars(recipe.difficulty)}
              <Text
                as="p"
                color="GREY2"
                textAlign="left"
                fontSize="TEXT_DEFAULT"
                fontWeight={700}
              >
                {recipe.difficulty}
              </Text>
            </div>

            <div className="informations_calorie">
              <WhatshotIcon />
              <Text
                as="p"
                color="GREY2"
                textAlign="left"
                fontSize="TEXT_DEFAULT"
                fontWeight={700}
              >
                {recipe.calorificValue} kcal
              </Text>
            </div>

            <div className="informations_preparationTime">
              <AccessAlarmIcon />
              <Text
                as="p"
                color="GREY2"
                textAlign="left"
                fontSize="TEXT_DEFAULT"
                fontWeight={700}
              >
                {recipe.preparationTime}
              </Text>
            </div>
          </div>
        </li>
      ))}
    </StyledRecipesList>
  );
};

const StyledRecipesList = styled.ul`
  // width: 100%;
  // height: 100%;
  // display: flex;
  // margin: 0 auto;
  // padding: 10px;
  // align-items: center;
  // justify-items: center;
  justify-content: center;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  a {
    text-decoration: none;
  }

  .recipe_container {
    min-width: 350px;
    min-height: 190px;
    padding: 10px;
    display: block;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    position: relative;
    transition: all 0.3s;

    &:hover {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: all 0.3s;
    }

    h3 {
      margin: 10px 0 15px 0;
    }

    img {
      width: 350px;
      height: 190px;
      object-fit: cover;
      transition: all 0.3s;

      &:hover {
        opacity: 0.8;
        transition: all 0.3s;
      }
    }

    .recipe_container__informations {
      display: flex;
      justify-content: space-between;
      .informations_difficulty,
      .informations_calorie,
      .informations_preparationTime {
        display: block;
        text-align: center;

        p {
          text-align: center;
        }

        svg {
          color: ${THEME_COLORS.TERTIARY};
        }
      }
    }
  }
`;

const StyledActionsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 6px 10px;
  background-color: white;
  border-radius: 0 0 10px 0;

  svg {
    vertical-align: middle;
  }

  svg:first-of-type {
    color: #2ecc40;
    margin-right: 5px;
  }

  svg:last-of-type {
    color: #ff4136;
    margin-left: 5px;
  }
`;
