import { Button } from 'antd';
import React from 'react';

function PendingRequest(props) {
    return (
        <div>
            <div className='welcome-card rounded-lg p-6 mb-6 text-black'>
                <div className='flex gap-6 justify-between'>
                    <div>
                        Receiver: 0xdfsfdgsdfvs5sgf514sd5gf41sd514g5sd
                        <br />
                        Descrription For Twitter Promotion
                    </div>
                    <div>
                        Amount 100 Eqn
                    </div>
                    <div>
                        Approve
                    </div>
                    <div>
                        Disapprove
                    </div>
                    <div>
                        3 Days
                    </div>
                    <div className='flex gap-3'>
                        <Button type='primary' className='grad-btn border-0'>Finalize</Button>
                        <Button type='primary' className='grad-btn border-0'>View</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PendingRequest;