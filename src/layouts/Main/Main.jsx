import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../../pages/shared/Navbar/Navbar.jsx';
import Footer from '../../pages/shared/Footer/Footer.jsx';
import ErrorBoundary from '../../components/ErrorBoundary.jsx';

const Main = () => {
  return (
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
};

export default Main;
