import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate, useLocation } from 'react-router';
import Loader from '../Components/Loader/Loader';

export default function PrivateRoutes({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <Loader />;

  if (user) return children;
  

  return <Navigate state={location.pathname} to="/login" />;
}