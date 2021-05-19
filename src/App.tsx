import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import { WholeAppLayout } from './layouts/WholeAppLayout/WholeAppLayout';
import Routing from './routing/Routing';
import { AppContext } from './service/AppContext';
import { NotificationContext } from './service/NotificationContext';

export const App: React.FunctionComponent = () => {
  return (
    <AppContext>
      <NotificationContext>
        <WholeAppLayout>
          <GlobalStyles />
          <Routing />
        </WholeAppLayout>
      </NotificationContext>
    </AppContext>
  );
};

export default App;
