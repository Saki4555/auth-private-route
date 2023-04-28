import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    console.log(loading);

    if (loading) {
        return <progress className="progress progress-error w-56" value="10" max="100"></progress>;
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' replace={true}></Navigate>;
};

export default PrivateRoute;