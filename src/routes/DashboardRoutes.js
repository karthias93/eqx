import React from 'react';
import {Route, Routes} from 'react-router-dom';
import DashboardHome from '../pages/dashboard/dashboard-home/DashboardHome';
import AddMembers from '../pages/dashboard/members/add-members/AddMembers';
import Members from '../pages/dashboard/members/Members';
import RemoveMembers from '../pages/dashboard/members/remove-members/RemoveMembers';
import CreateSubscription from '../pages/dashboard/project/create-subscription/CreateSubscription';
import Project from '../pages/dashboard/project/Project';

function DashboardRoutes(props) {
    return (
        <>
            <Routes>
                <Route path="/home"  element={<DashboardHome />}/>
                <Route path="/project"  element={<Project />}/>
                <Route path="/project/create-subscription"  element={<CreateSubscription />}/>
                <Route path="/members"  element={<Members />}/>
                <Route path="/members/add"  element={<AddMembers />}/>
                <Route path="/members/remove"  element={<RemoveMembers />}/>
            </Routes>
        </>
    );
}

export default DashboardRoutes;