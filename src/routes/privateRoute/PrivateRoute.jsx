import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, allowedRole }) => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || (allowedRole && user.role !== allowedRole)) {
        return <Navigate to='/' />
    }
  return children;
}

export default PrivateRoute