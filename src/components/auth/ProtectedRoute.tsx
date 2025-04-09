import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface ProtectedRouteProps {
     element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
     const accessToken = Cookies.get('accessToken');

     return accessToken ? element : <Navigate to="/" />;
};

export default ProtectedRoute;