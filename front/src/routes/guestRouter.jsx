import React from 'react'
import {createBrowserRouter, Outlet} from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import Header from '../layout/Header'
import Dresses from '../layout/Dresses'
import DressDetail from '../layout/DressDetail'
import Contact from '../layout/Contact'
import Reviews from'../layout/Reviews'


const guestRouter = createBrowserRouter([
  {
    path: '/',element: <> <Outlet /> </>,
    children: [
      { index: true, element: <Header/> },
      { path: '/register', element: <RegisterForm />},
      { path: '/login', element: <LoginForm />},
      { path: '/dresses', element: <Dresses />},
      { path: '/dresses/:id', element: <DressDetail /> },
      { path: '/contact', element: < Contact/> },
      { path: '/reviews', element:< Reviews/> },
      

    ]
  }
])
export default guestRouter