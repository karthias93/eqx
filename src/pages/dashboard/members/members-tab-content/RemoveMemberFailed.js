import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

function RemoveMemberFailed(props) {
    const { org } = props;
    const [removeMemberFailedList, setRemoveMemberFailedList] = useState([]);
    useEffect(() => {
        if (org) {
          getRemoveMembersFailedList(org);
        }
    }, [org]);
    const getRemoveMembersFailedList = async (org) => {
        try {
          console.log(org);
          const {
            data: { response },
          } = await axios.get(
            `${process.env.REACT_APP_API_URL}/get_remove_member_list/${org.org.id}/-1`
          );
          console.log(response);
          setRemoveMemberFailedList(response);
        } catch (error) {
          console.log(error);
        }
    };
    return (
        <div>
            {org &&
            org.members &&
            org.members.length > 0 &&
            org.members
            .filter((val) => val.is_active === -1)
            .map((pro, index) => {
                return (
                    <div className='welcome-card rounded-lg p-6 mb-6 text-black' key={org.id}>
                        <div className='flex gap-6 justify-between'>
                            <div>
                                Name: {pro.member_name}
                            </div>
                            <div>
                                Wallet Address: {pro.wallet_address}
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
      org: state.org,
    };
};
  
export default connect(mapStateToProps)(RemoveMemberFailed);