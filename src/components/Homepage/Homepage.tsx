import React, { useCallback } from 'react';
import { Button } from '@material-ui/core';
import { useAppDispatch } from '../../store/hooks';
import { signInUser } from '../../store/features/user/userAsync/userAsync';

export const Homepage = () => {
  const dispatch = useAppDispatch();

  const signIn = useCallback(
    (credentials: any) => {
      dispatch(signInUser(credentials));
    },
    [dispatch]
  );
  const dane = {
    username: 'testAdmin',
    password: 'test'
  };

  return (
    <div>
      Strona główna
      <Button onClick={() => signIn(dane)}>siema login</Button>
    </div>
  );
};
