import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import { Homepage } from '../components/Homepage/Homepage';
import { LoginPage } from '../components/LoginPage/LoginPage';
import { AddNewRecipe } from '../components/AddNewRecipe/AddNewRecipe';
import { RecipesViewForUser } from '../components/RecipesViewForUser/RecipesViewForUser';
import { FullRecipeView } from '../components/FullRecipeView/FullRecipeView';
import { RecipesViewForAdmin } from '../components/RecipesViewForAdmin/RecipesViewForAdmin';
import { RecipesByCategory } from '../components/Homepage/RecipesByCategory/RecipesByCategory';
import { Calculator } from '../components/Calculator/Calculator';

const Routing: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/recipes" exact component={RecipesViewForUser} />
      <Route path="/recipes/recipe/:id" exact component={FullRecipeView} />
      <Route path="/homepage" exact component={Homepage} />
      <Route path="/calorie-calculator" exact component={Calculator} />
      <Route path="/recipes/:category" exact component={RecipesByCategory} />
      <Route path="/" exact component={Homepage} />
      <PrivateRoute path="/add-new-recipe">
        <AddNewRecipe />
      </PrivateRoute>
      <PrivateRoute path="/admin-panel">
        <RecipesViewForAdmin />
      </PrivateRoute>
    </Switch>
  );
};

export default Routing;
