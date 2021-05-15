import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from '../components/Homepage/Homepage';
import { Counter } from '../store/features/counter/Counter';
import PrivateRoute from './PrivateRoute';
import { LoginPage } from '../components/LoginPage/LoginPage';
const Routing: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <PrivateRoute path="/homepage">
        <Homepage />
      </PrivateRoute>
    </Switch>
  );
};

export default Routing;
