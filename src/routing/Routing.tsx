import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Homepage } from '../components/Homepage/Homepage';
import PrivateRoute from './PrivateRoute';
import { LoginPage } from '../components/LoginPage/LoginPage';
import { AddNewRecipe } from '../components/AddNewRecipe/AddNewRecipe';
import { RecipesViewForUser } from '../components/RecipesViewForUser/RecipesViewForUser';

const Routing: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/recipes" exact component={RecipesViewForUser} />
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
