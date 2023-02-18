import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import DashboardHome from '../pages/dashboard/dashboard-home/DashboardHome';
import AddMembers from '../pages/dashboard/members/add-members/AddMembers';
import Members from '../pages/dashboard/members/Members';
import RemoveMembers from '../pages/dashboard/members/remove-members/RemoveMembers';
import CreateSubscription from '../pages/dashboard/project/create-subscription/CreateSubscription';
import Project from '../pages/dashboard/project/Project';
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { getOrg } from '../services/dashboard';
import { message } from 'antd';

function DashboardRoutes(props) {
    const { auth, spinner } = props;
    const authenticated = localStorage.getItem("authenticated");
    const account = sessionStorage.getItem("selected_account");
    let navigate = useNavigate();
    useEffect(() => {
        if (auth && auth.org_id) getOrg(auth.org_id);
    }, [auth]);
    useEffect(() => {
        message.info(`Do not add any new team member unless any of your proposals are finalized `);
    }, []);
    useEffect(() => {
        if (!account || !authenticated) {
            // return navigate("/");
        }
    }, [account, authenticated])
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
            {spinner && <Spinner />}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        spinner: state.spinner,
    };
  };
  
  export default connect(mapStateToProps)(DashboardRoutes);