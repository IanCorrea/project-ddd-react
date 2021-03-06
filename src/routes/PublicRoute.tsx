import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

const PublicRoute = () => {
  const { user } = useAuth();

  return user ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
