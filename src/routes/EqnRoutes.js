import React from 'react';
import Home from '../pages/home/Home';
import {Route, Routes} from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Org from '../pages/Org/Org';

function EqnRoutes(props) {
    return (
        <>
            <Routes>
                <Route path="/"  element={<Home />}/>
                <Route path="/dashboard/*"  element={<Dashboard />}/>
                <Route path="/treasury"  element={<Org />}/>
            </Routes>
        </>
    );
}

export default EqnRoutes;