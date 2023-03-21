import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import NotFound from '../components/NotFound';
import LoadingIcon from '../components/ui/LoadingIcon';
import Main from '../layouts/Main/Main';

const Home = lazy(() => import('../pages/Home/Home'));

export default createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<LoadingIcon />}>
            <Home />
          </Suspense>
        )
      }
    ]
  }
]);
