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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,

    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/all-books',
        loader: async () => {
          const res = await fetch('http://localhost:3000/all-book');
          if (!res.ok) {
            throw new Response("Failed to load books", { status: res.status });
          }
          return res.json();
        },
        element: <AllBook />
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
