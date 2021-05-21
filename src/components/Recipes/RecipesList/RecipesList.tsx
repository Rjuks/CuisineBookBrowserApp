import React from 'react';
import { Text } from '../../shared/Text/Text';
import { Recipe } from '../../../store/features/recipe/recipeTypes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// todo w kompopnentach zrob liste widoku dla admina i usera, a ten jeden komponent reusable

interface RecipesListProps {
  recipes: Recipe[];
}

export const RecipesList: React.FunctionComponent<RecipesListProps> = ({
  recipes
}: RecipesListProps) => {
  console.log(recipes, 'hm');
  return (
    <StyledRecipesList>
      {recipes.map((recipe: Recipe) => (
        <Link key={recipe.id} to={`/recipes/recipe/${recipe.id}`}>
          <div className="recipe_container">
            <div className="recipe_container__overlay">
              <Text
                className="recipe_container__text"
                as="h2"
                color="GREY2"
                textAlign="center"
                fontSize="HEADER_BIG"
                fontWeight={700}
              >
                {recipe.title}
              </Text>
            </div>
            <img src={recipe.imageLink} alt={recipe.title} />
          </div>
        </Link>
      ))}
    </StyledRecipesList>
  );
};

const StyledRecipesList = styled.ul`
  max-width: 1600px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 auto;
  align-items: center;
  justify-items: center;

  .recipe_container {
    width: 280px;
    height: 160px;
    display: block;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .recipe_container__overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: radial-gradient(
        80% 30% at center,
        rgba(0, 0, 0, 0.5) 30%,
        rgba(255, 255, 255, 0)
      );
      cursor: pointer;
      transition: all 0.7s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        transition: all 0.7s;
      }
    }

    .recipe_container__text {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
      text-shadow: 0 0 25px #000;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: 0.4px;
      text-align: center;
      color: #fff;
      text-transform: uppercase;
    }
  }
`;
