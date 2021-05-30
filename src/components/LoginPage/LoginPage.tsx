import React, { useCallback, useState, ReactElement } from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';
import { RecoverPassword } from './RecoverPassword/RecoverPassword';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectUserIsLoggedIn } from '../../store/features/user/userSlice';
import { UserCredentials } from '../../store/features/user/userTypes';
import { signInUser, signUpUser } from '../../store/features/user/userAsync';

interface LocationState {
  from: {
    pathname: string;
  };
}

export const LoginPage = (): ReactElement => {
  const [formType, setFormType] =
    useState<'SIGNIN' | 'SIGNUP' | 'RECOVER_PASSWORD'>('SIGNIN');

  const dispatch = useAppDispatch();
  const isUserLoggedIn = useAppSelector(selectUserIsLoggedIn);
  const location = useLocation<LocationState>();

  const signIn = useCallback(
    (credentials: UserCredentials) => {
      dispatch(signInUser(credentials));
    },
    [dispatch]
  );
  //
  // const recoverPassword = useCallback(
  //   (email: string) => dispatch(postRecoveryPasswordEmail(email)),
  //   [dispatch]
  // );
  //
  const signUp = useCallback(
    (credentials: UserCredentials) => {
      dispatch(signUpUser(credentials));
    },
    [dispatch]
  );

  return (
    <StyledLoginPage>
      {!isUserLoggedIn ? (
        <StyledLoginPage>
          {formType === 'SIGNIN' && (
            <SignIn onSubmitHandler={signIn} changeFormHandler={setFormType} />
          )}
          {formType === 'RECOVER_PASSWORD' && (
            <RecoverPassword
              onSubmitHandler={() => alert('xd')}
              changeFormHandler={setFormType}
            />
          )}
          {formType === 'SIGNUP' && (
            <SignUp onSubmitHandler={signUp} changeFormHandler={setFormType} />
          )}
        </StyledLoginPage>
      ) : (
        <Route
          render={(innerProps: RouteProps): React.ReactElement => (
            <Redirect
              to={{
                pathname: location.state?.from?.pathname || '/homepage',
                state: { from: innerProps.location }
              }}
            />
          )}
        />
      )}
    </StyledLoginPage>
  );
};

const StyledLoginPage = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;
