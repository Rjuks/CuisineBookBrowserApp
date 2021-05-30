import React from 'react';

import { RecipesCategoriesList } from './RecipesCategoriesList/RecipesCategoriesList';
import { recipesCategories } from '../../consts/recipes';
import { HomepageHero } from './HomepageHero/HomepageHero';

export const Homepage: React.FunctionComponent = () => {
  return (
    <>
      <HomepageHero />
      <RecipesCategoriesList recipes={recipesCategories} />
    </>
  );
};
