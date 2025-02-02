import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AutContext/AutContex';

const ProtectedRoute = ({ element }) => {
  const {auth} = useContext(AuthContext)
  return auth ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
