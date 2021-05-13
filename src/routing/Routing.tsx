import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from '../components/Homepage/Homepage';
import { Counter } from '../features/counter/Counter';
import PrivateRoute from './PrivateRoute';
const Routing: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <PrivateRoute path="/homepage">
        <Counter />
      </PrivateRoute>
    </Switch>
  );
};

export default Routing;
