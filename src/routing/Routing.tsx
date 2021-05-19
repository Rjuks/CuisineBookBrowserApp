import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Homepage } from '../components/Homepage/Homepage';
import PrivateRoute from './PrivateRoute';
import { LoginPage } from '../components/LoginPage/LoginPage';

const Routing: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginPage} />
      <PrivateRoute path="/">
        <Homepage />
      </PrivateRoute>
    </Switch>
  );
};

export default Routing;
