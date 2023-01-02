import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Detail from './pages/detail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: '/detail',
    //     element: <Detail />,
    //     // loader: teamLoader,
    //   },
    // ],
  },
  {
    path: '/detail/:id',
    element: <Detail />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: '/detail',
    //     element: <Detail />,
    //     // loader: teamLoader,
    //   },
    // ],
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
);
