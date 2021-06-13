import React, { useEffect } from 'react';
import { Text } from '../shared/Text/Text';

import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { THEME_COLORS } from '../../styles/themeStyles';
import { getRecipeByID } from '../../store/features/recipe/recipeAsync';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectChosenRecipeByID } from '../../store/features/recipe/recipeSlice';
import { showProperNumberOfStars } from '../Recipes/utils';

// interface RecipeProps {
//   recipe: Recipe;
// }

type Props = RouteComponentProps<{ id: string }>;

export const FullRecipeView: React.FunctionComponent<Props> = ({
  match
}: Props) => {
  const dispatch = useAppDispatch();
  const chosenRecipe = useAppSelector(selectChosenRecipeByID);

  useEffect(() => {
    dispatch(getRecipeByID(match.params.id));
  }, []);

  const formattedRecipeCreationDate = new Date(
    chosenRecipe.creationDate
  ).toLocaleDateString();

  return (
    <StyledRecipesList>
      <div className="recipe_container">
        <div className="recipe_container__headSection">
          <div className="headSection_container">
            <Text
              as="h2"
              color="GREY2"
              textAlign="left"
              fontSize="HEADER_BIG"
              fontWeight={700}
            >
              {chosenRecipe.title}
            </Text>

            <Text
              as="p"
              color="PRIMARY"
              textAlign="left"
              fontSize="TEXT_DEFAULT"
              fontWeight={700}
            >
              {formattedRecipeCreationDate}
            </Text>

            <div className="headSection__informations">
              <div className="informations_calorie">
                <WhatshotIcon />
                <Text
                  as="p"
                  color="GREY2"
                  textAlign="left"
                  fontSize="TEXT_DEFAULT"
                  fontWeight={700}
                >
                  {chosenRecipe.calorificValue} kcal
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
                  {chosenRecipe.preparationTime}
                </Text>
              </div>
              <div className="informations_difficulty">
                {showProperNumberOfStars(chosenRecipe.difficulty)}
                <Text
                  as="p"
                  color="GREY2"
                  textAlign="left"
                  fontSize="TEXT_DEFAULT"
                  fontWeight={700}
                >
                  {chosenRecipe.difficulty}
                </Text>
              </div>
            </div>
          </div>

          <img src={chosenRecipe.imageLink} alt={chosenRecipe.title} />
        </div>

        <div className="bodySection_container">
          <div>
            <Text
              as="h3"
              color="GREY2"
              textAlign="left"
              fontSize="HEADER_DEFAULT"
              fontWeight={700}
            >
              Składniki
            </Text>
            <Text
              as="p"
              color="GREY2"
              textAlign="left"
              fontSize="TEXT_DEFAULT"
              fontWeight={700}
            >
              {chosenRecipe.ingredients}
            </Text>
          </div>

          <div>
            <Text
              as="h3"
              color="GREY2"
              textAlign="left"
              fontSize="HEADER_DEFAULT"
              fontWeight={700}
            >
              Sposób przygotowania
            </Text>

            <Text
              as="p"
              color="GREY2"
              textAlign="left"
              fontSize="TEXT_DEFAULT"
              fontWeight={700}
            >
              {chosenRecipe.preparingMethod}
            </Text>
          </div>
        </div>
      </div>
    </StyledRecipesList>
  );
};

const StyledRecipesList = styled.ul`
  height: 100%;
  padding: 20px;

  a {
    text-decoration: none;
  }

  .recipe_container {
    display: block;
    height: 100%;
    margin: 0 auto;
    padding: 50px;

    img {
      width: 1000px;
      height: 500px;
      object-fit: cover;
      margin: 0 auto;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    .recipe_container__headSection {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 4fr;
      column-gap: 3rem;
    }

    .headSection_container {
      // padding: 50px;
    }

    .headSection__informations {
      display: flex;
      justify-content: space-around;
      margin: 35px 0 0 0;

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
          width: 40px;
          height: 40px;
        }
      }
    }
    .bodySection_container {
      display: flex;
      justify-content: space-around;
      margin-top: 30px;

      div {
        padding: 30px;
      }
    }
  }
`;
