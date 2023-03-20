import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main/Main';
import NotFound from '../components/NotFound';
import LoadingIcon from '../components/ui/LoadingIcon';

const Home = lazy(() => import('../pages/Home/Home'));

export const router = createBrowserRouter([
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
