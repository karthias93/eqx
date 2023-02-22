import { Button, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function Overview(props) {
    return (
        <div>
            <div className="grid grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 gap-6 max-lg:text-center">
                <div>
                    <div className='welcome-card rounded-lg p-6 mb-6'>
                        <div className='text-sm text-gray-400 mb-3'>
                            Equinex Bussiness
                        </div>
                        <div className='text-xl text-gray-900 font-bold truncate mb-3'>
                            0x26838340ba7d2260C87395ebFafC5A8cAE033b8b
                        </div>
                        <div className='flex gap-6 mb-3 font-bold'>
                            <div className='text-sm text-gray-400'>
                                Total Supply
                                <div className='text-xl text-gray-600'>
                                    10 B
                                </div>
                            </div>
                            <div className='text-sm text-gray-400'>
                                Available
                                <div className='text-xl text-gray-600'>
                                    10.0 B
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to='/dashboard/members/add'> <Button type='primary' className='grad-btn border-0'>Create manage Subscription</Button></Link>
                        </div>
                    </div>
                    <div className='welcome-card rounded-lg p-6 mb-3'>
                        <div className='text-sm text-gray-400 mb-2'>
                            Equinex Bussiness
                        </div>
                        <div className='text-xl text-gray-700 font-bold truncate'>
                            0 EQXT
                        </div>
                    </div>
                    <div className='welcome-card rounded-lg p-6 mb-3 flex justify-between'>
                        <div className='text-sm text-gray-700'>
                            USDT
                        </div>
                        <div className='text-xl text-gray-700 font-bold truncate'>
                            0
                        </div>
                    </div>
                    <div className='welcome-card rounded-lg p-6 mb-3 flex justify-between'>
                        <div className='text-sm text-gray-700'>
                            USDT
                        </div>
                        <div className='text-xl text-gray-700 font-bold truncate'>
                            0
                        </div>
                    </div>
                    <div className='welcome-card rounded-lg p-6 mb-3 flex justify-between'>
                        <div className='text-sm text-gray-700'>
                            USDT
                        </div>
                        <div className='text-xl text-gray-700 font-bold truncate'>
                            0
                        </div>
                    </div>
                    <div className='welcome-card rounded-lg p-6 mb-3 flex justify-between'>
                        <div className='text-sm text-gray-700'>
                            USDT
                        </div>
                        <div className='text-xl text-gray-700 font-bold truncate'>
                            0
                        </div>
                    </div>
                    <div className='welcome-card rounded-lg p-6 mb-3 flex justify-between'>
                        <div className='text-sm text-gray-700'>
                            USDT
                        </div>
                        <div className='text-xl text-gray-700 font-bold truncate'>
                            0
                        </div>
                    </div>
                </div>
                <div>
                    <div className='welcome-card rounded-lg p-6 mb-3'>
                        <div className='text-sm text-gray-400 mb-2'>
                            Crypto asset value
                        </div>
                        <div className='text-xl text-gray-700 font-bold truncate'>
                            0 EQXT
                        </div>
                    </div>
                    <div className='welcome-card rounded-lg p-6 mb-3 flex justify-between'>
                        <div className='text-sm text-gray-700'>
                            USDT
                        </div>
                        <div className='text-xl text-gray-700 font-bold truncate'>
                            0
                        </div>
                        <div className='text-sm text-pink-500 font-bold truncate'>
                            Send/Receive
                        </div>
                    </div>
                    <div className='welcome-card rounded-lg p-6 mb-3 flex justify-between'>
                        <div className='text-sm text-gray-700'>
                            USDT
                        </div>
                        <div className='text-xl text-gray-700 font-bold truncate'>
                            0
                        </div>
                        <div className='text-sm text-pink-500 font-bold truncate'>
                            Send/Receive
                        </div>
                    </div>
                    <div className='welcome-card rounded-lg p-6 mb-3 flex justify-between'>
                        <div className='text-sm text-gray-700'>
                            USDT
                        </div>
                        <div className='text-xl text-gray-700 font-bold truncate'>
                            0
                        </div>
                        <div className='text-sm text-pink-500 font-bold truncate'>
                            Send/Receive
                        </div>
                    </div>
                    <div className='welcome-card rounded-lg p-6 mb-3 flex justify-between'>
                        <div className='text-sm text-gray-700'>
                            USDT
                        </div>
                        <div className='text-xl text-gray-700 font-bold truncate'>
                            0
                        </div>
                        <div className='text-sm text-pink-500 font-bold truncate'>
                            Send/Receive
                        </div>
                    </div>
                    <div className='welcome-card rounded-lg p-6 mb-3 flex justify-between'>
                        <div className='text-sm text-gray-700'>
                            USDT
                        </div>
                        <div className='text-xl text-gray-700 font-bold truncate'>
                            0
                        </div>
                        <div className='text-sm text-pink-500 font-bold truncate'>
                            Send/Receive
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;