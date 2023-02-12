import React from 'react';
import Home from '../pages/home/Home';
import {Route, Routes} from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';

function EqnRoutes(props) {
    return (
        <>
            <Routes>
                <Route path="/"  element={<Home />}/>
                <Route path="/dashboard/*"  element={<Dashboard />}/>
            </Routes>
        </>
    );
}

export default EqnRoutes;