import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

export const AppContext: React.FunctionComponent = ({
  children
}): ReactElement => {
  return (
    <CookiesProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </CookiesProvider>
  );
};
