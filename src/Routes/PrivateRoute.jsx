import React, { useContext, useState } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { GridLoader } from "react-spinners";
const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    //console.log(location)

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <GridLoader color="#0317fc" />
            </div>
        );
    }

    if (user) { 
        return children
    }

    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivateRoute;