
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import guestRouter from './guestRouter';
import userRouter from './userRouter';
import adminRouter from './adminRouter';

export default function AppRouter() {
  const { user } = useAuth();
  let finalRouter;

  if (user?.role === 'admin') {
    finalRouter = adminRouter;
  } else if (user?.id) {
    finalRouter = userRouter;
  } else {
    finalRouter = guestRouter;
  }

  return (
    <RouterProvider router={finalRouter} />
  );
}
