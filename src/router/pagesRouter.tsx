import { createBrowserRouter } from 'react-router-dom';

import DetailPage from '../pages/detail';
import { Main } from '../pages/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/detail/:id',
    element: <DetailPage />,
  },
]);
