import React, { FC, ReactElement } from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ComposeContext from './context/Compose.context';
import { rootContext } from './context/root.context';

const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <Dashboard />
      </ComposeContext>
    </QueryClientProvider>
  );
};

export default App;
