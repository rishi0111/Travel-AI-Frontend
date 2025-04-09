import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface PublicRouteProps {
     element: React.ReactElement;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element }) => {
     const accessToken = Cookies.get('accessToken');

     return accessToken ? <Navigate to="/chat" /> : element;
};

export default PublicRoute;