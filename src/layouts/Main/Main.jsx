import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import ErrorBoundary from '../../components/ErrorBoundary';
import Footer from '../../pages/shared/Footer/Footer';
import Navbar from '../../pages/shared/Navbar/Navbar';

const Main = () => (
  <>
    <ScrollRestoration />
    <Navbar />
    <main className="">
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </main>
    <Footer />
  </>
);

export default Main;
