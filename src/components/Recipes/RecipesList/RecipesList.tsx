import React from 'react';
import { Text } from '../../shared/Text/Text';
import { Recipe } from '../../../store/features/recipe/recipeTypes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { showProperNumberOfStars } from '../utils';
import { THEME_COLORS } from '../../../styles/themeStyles';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import WhatshotIcon from '@material-ui/icons/Whatshot';

// todo w kompopnentach zrob liste widoku dla admina i usera, a ten jeden komponent reusable

interface RecipesListProps {
  recipes: Recipe[];
}

export const RecipesList: React.FunctionComponent<RecipesListProps> = ({
  recipes
}: RecipesListProps) => {
  return (
    <StyledRecipesList>
      {recipes.map((recipe: Recipe) => (
        <Link key={recipe.id} to={`/recipes/recipe/${recipe.id}`}>
          <div className="recipe_container">
            <img src={recipe.imageLink} alt={recipe.title} />

            <Text
              as="h3"
              color="GREY2"
              textAlign="left"
              fontSize="HEADER_SMALL"
              fontWeight={700}
            >
              {recipe.title}
            </Text>

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
          </div>
        </Link>
      ))}
    </StyledRecipesList>
  );
};

const StyledRecipesList = styled.ul`
  max-width: 1600px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  padding: 10px;
  align-items: center;
  justify-items: center;

  a {
    text-decoration: none;
  }

  .recipe_container {
    min-width: 350px;
    min-height: 190px;
    padding: 10px;
    margin: 0 20px;
    display: block;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
