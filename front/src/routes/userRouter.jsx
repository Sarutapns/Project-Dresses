
import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from '../layout/Header'
import DressesUser from '../user/DressesUser';
import DressDetailUser from '../user/DressDetailUser';
import ContactUser from '../user/ContactUser';
import ReviewsUser from '../user/ReviewsUser';
import UserHeader from '../user/UserHeader';
import LoginForm from '../layout/LoginForm';
import Modal from '../user/Modal';

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
       <Outlet /> 
    </>,
    children: [
      { index: true, element: <UserHeader /> },
      { path: '/header', element: <Header/> },
      { path: '/dressesUser', element: <DressesUser/> },
      { path: '/dresses/:id', element: <DressDetailUser /> },
      { path: '/contactUser', element: < ContactUser/> },
      { path: '/login', element: <LoginForm /> },
      { path: '/reviewsUser', element:<ReviewsUser/> },
      { path: '/modal', element:<Modal/> }
    ],
  },
]);

export default userRouter;
