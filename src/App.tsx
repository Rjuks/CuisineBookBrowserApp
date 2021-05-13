import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import { WholeAppLayout } from './layouts/WholeAppLayout/WholeAppLayout';
import Routing from './routing/Routing';
import { BrowserRouter } from 'react-router-dom';

export const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <WholeAppLayout>
        <GlobalStyles />
        <Routing />
      </WholeAppLayout>
    </BrowserRouter>
  );
};

export default App;
