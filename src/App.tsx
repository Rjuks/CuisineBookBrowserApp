import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './styles/globalStyles';
import { WholeAppLayout } from './layouts/WholeAppLayout/WholeAppLayout';
import Routing from './routing/Routing';
import { NotificationContext } from './service/NotificationContext';

export const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <NotificationContext>
        <WholeAppLayout>
          <GlobalStyles />
          <Routing />
        </WholeAppLayout>
      </NotificationContext>
    </BrowserRouter>
  );
};

export default App;
