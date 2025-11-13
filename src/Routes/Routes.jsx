import React from 'react'

import { createBrowserRouter } from "react-router";
import Layout from '../Layout/Layout';
import Home from '../Pages/Home';
import AllBook from '../Pages/AllBook';
import AddBook from '../Pages/AddBook';
import MyBook from '../Pages/MyBook';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import NotFound from '../Pages/NotFound';
import BookDetails from '../Components/BookDetails/BookDetails'
import PrivateRoutes from '../Provider/PrivateRoutes';
import Loader from '../Components/Loader/Loader';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,

    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("https://the-book-haven-server-delta.vercel.app/all-book"),
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: '/all-books',
        loader: async () =>  fetch('https://the-book-haven-server-delta.vercel.app/all-book'),
        element: <AllBook />,
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: '/add-book',
        element: <PrivateRoutes> <AddBook></AddBook> </PrivateRoutes> 
      },
      {
        path: '/my-books',
        element:<PrivateRoutes> <MyBook></MyBook> </PrivateRoutes> 
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/book-details/:id',
        element: <PrivateRoutes> <BookDetails></BookDetails> </PrivateRoutes> 
      },
      {
        path: '/*',
        element: <NotFound></NotFound>
      }
    ]
  },
]);
