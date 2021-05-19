import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { selectUserIsLoggedIn } from '../store/features/user/userSlice';
export interface PrivateRouteProps {
  children: React.ReactElement | React.ReactElement[];
  authenticated?: boolean;
  path?: string;
}

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
  children,
  path,
  ...rest
}: PrivateRouteProps): React.ReactElement | null => {
  const isUserLoggedIn = useAppSelector(selectUserIsLoggedIn);
  if (isUserLoggedIn) {
    return (
      <Route
        {...rest}
        render={(): React.ReactElement | React.ReactElement[] => children}
      />
    );
  } else {
    return (
      <Route
        {...rest}
        render={({ location }): React.ReactElement => (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )}
      />
    );
  }
};

export default PrivateRoute;
