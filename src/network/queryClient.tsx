import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {useEffect} from 'react';

const queryClient = new QueryClient();

const ReactQueryClientProvider = ({children}: {children: JSX.Element}) => {
  useEffect(() => {
    return () => {
      queryClient.clear();
      queryClient.invalidateQueries();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
