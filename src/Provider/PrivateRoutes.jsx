import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import Loading from '../Components/Loader/Loader';
import { Navigate, useLocation } from 'react-router';

export default function PrivateRoutes({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <Loading />;

  if (user) return children;
  

  return <Navigate state={location.pathname} to="/login" />;
}