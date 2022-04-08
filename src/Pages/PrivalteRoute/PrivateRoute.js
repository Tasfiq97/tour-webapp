import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user}=useAuth();
    let location = useLocation()
    console.log(location)
   if(!user.email){
    return <Navigate to="/register" state={{ from: location }} replace />;
   }
   else{
       return children;
   }
};

export default PrivateRoute;