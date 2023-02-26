import React from 'react';
import rejectIcon from "../../../../assets/images/rejected.png";
import progressIcon from "../../../../assets/images/progress.png";
import checkedImage from "../../../../assets/images/checked.png";
import { connect } from 'react-redux';

function All(props) {
    const { org } = props;
    return (
        <div>
            {org?.proposal?.length &&
                org.proposal.map((pro, index) => {
                    return (
                        <div className='welcome-card rounded-lg p-6 mb-6 text-black' key={index}>
                            <div className='flex gap-6 justify-between'>
                                <div>
                                    {pro.description.slice(0, 40)} ...
                                </div>
                                <div className='self-center'>
                                    <img
                                        src={
                                        pro.status === "Initialized" ||
                                        pro.status === "Expired"
                                            ? progressIcon
                                            : pro.status === "Approved"
                                            ? checkedImage
                                            : rejectIcon
                                        }
                                        className="w-10 mx-auto mb-2"
                                        alt=""
                                    />
                                    <p>
                                        {pro.status === "Initialized" ||
                                        pro.status === "Expired"
                                        ? "In Progress"
                                        : pro.status === "Approved"
                                        ? "Completed"
                                        : "Rejected"}
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
      org: state.org,
      auth: state.auth,
    };
};
  
export default connect(mapStateToProps)(All);