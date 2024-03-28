
import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from '../layout/Header';
import AdminHeader from '../admin/AdminHeader';

const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <Header /> },
      { path: '/adminHeader', element: <AdminHeader /> },
    ],
  },
]);

export default adminRouter;
