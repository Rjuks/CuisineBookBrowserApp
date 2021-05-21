import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  RecipesCategoriesProps,
  RecipesCategoriesInterface
} from '../../../store/features/recipe/recipeTypes';
import { Text } from '../../shared/Text/Text';

export const RecipesCategoriesList = ({
  recipes
}: RecipesCategoriesInterface) => {
  return (
    <StyledRecipes>
      {recipes.length > 0 ? (
        recipes.map((recipe: RecipesCategoriesProps) => (
          <Link key={recipe.recipeName} to={recipe.path}>
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
                  {recipe.recipeName}
                </Text>
              </div>
              <img
                src={recipe.photo.imgSrc}
                title={recipe.photo.title}
                alt={recipe.photo.alt}
              />
            </div>
          </Link>
        ))
      ) : (
        <p>Błąd z kategoriami. Skontaktuj się z administratorem.</p>
      )}
    </StyledRecipes>
  );
};

const StyledRecipes = styled.section`
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
