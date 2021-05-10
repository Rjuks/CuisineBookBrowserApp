import React from 'react';
import { Counter } from './features/counter/Counter';
import { GlobalStyles } from './styles/styles';
import { WholeAppLayout } from './layouts/WholeAppLayout/WholeAppLayout';

export const App: React.FunctionComponent = () => {
  return (
    <WholeAppLayout>
      <GlobalStyles />
      <Counter />
    </WholeAppLayout>
  );
};

export default App;
