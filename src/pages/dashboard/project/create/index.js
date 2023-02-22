import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { getMe, getProjects } from "../../../../services/dashboard";
import ProjectStepFirst from './steps/ProjectStepFirst';
import ProjectStepSecond from './steps/ProjectStepSecond';
import ProjectStepThird from './steps/ProjectStepThird';
import ProjectStepFour from './steps/ProjectStepFour';
import ProjectStepFive from './steps/ProjectStepFive';
import ProjectStepSix from './steps/ProjectStepSix';
import Spinner from "../../../../components/Spinner/Spinner";
import StepWizard from "react-step-wizard";


function CreateProject(props) {
    const { org, spinner } = props;
    const [wallet, setWallet] = useState("");

    useEffect(() => {
        if (props.account && props.account.account) {
          setWallet(props.account.account);
        }
    }, [props.account]);

    useEffect(() => {
        const account = sessionStorage.getItem("selected_account");
        if (account) {
          getMe(account);
        }
    }, []);
    
    useEffect(() => {
        console.log(org);
        if (org && org?.project && org.project.length && org.project[0].id)
          getProjects(org.project[0].id);
    }, [org]);

    return (
        <div className='main-sec'>
            <div className='container mx-auto p-4'>
                <StepWizard>
                    <ProjectStepFirst/>
                    <ProjectStepSecond/>
                    <ProjectStepThird />
                    <ProjectStepFour />
                    <ProjectStepFive walletInfo={{ wallet: wallet }} />
                    <ProjectStepSix />
                </StepWizard>
            </div>
            {spinner && <Spinner />}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        account: state.account,
        org: state.org,
        spinner: state.spinner,
    };
};

export default connect(mapStateToProps)(CreateProject);