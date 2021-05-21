import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import { Homepage } from '../components/Homepage/Homepage';
import { LoginPage } from '../components/LoginPage/LoginPage';
import { AddNewRecipe } from '../components/AddNewRecipe/AddNewRecipe';
import { RecipesViewForUser } from '../components/RecipesViewForUser/RecipesViewForUser';
import { FullRecipeView } from '../components/FullRecipeView/FullRecipeView';

const Routing: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/recipes" exact component={RecipesViewForUser} />
      <Route path="/recipes/recipe/:id" exact component={FullRecipeView} />
      <PrivateRoute path="/homepage">
        <Homepage />
      </PrivateRoute>
      <PrivateRoute path="/add-new-recipe">
        <AddNewRecipe />
      </PrivateRoute>
    </Switch>
  );
};

export default Routing;
