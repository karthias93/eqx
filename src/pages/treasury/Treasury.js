import { Breadcrumb, Button, message, theme } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TreasuryStepFirst from './steps/TreasuryStepFirst';
import TreasuryStepSecond from './steps/TreasuryStepSecond';

const steps = [
    {
        title: 'First',
        content: <TreasuryStepFirst />,
    },
    {
        title: 'Second',
        content: <TreasuryStepSecond/>,
    },

];

function Treasury(props) {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));


    return (
        <div className='main-sec'>
            <div className='container mx-auto p-4'>
                <div className=' mb-12'>
                    <h1 className='text-2xl text-white font-bold mb-4'>
                        CREATE TREASURY
                    </h1>
                    <p className='text-base text-gray-300'>
                        You must hold 100 EQX to deploy and access treasury (currently disabled). Read Docs for requirements.
                    </p>
                </div>
                <div>
                    <div >{steps[current].content}</div>
                    <div className='mt-6 text-center flex gap-3'>
                        {current < steps.length - 1 && (
                            <Button onClick={() => next()} type="primary" className='ml-0 flex gap-1 mx-auto grad-btn border-0 '>
                                Next <svg xmlns="http://www.w3.org/2000/svg" class="self-center icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 12l14 0"></path>
                                    <path d="M15 16l4 -4"></path>
                                    <path d="M15 8l4 4"></path>
                                </svg>
                            </Button>
                        )}

                        {current > 0 && (
                            <Button
                                className='mx-0 flex gap-1 mx-auto bordered border-gray-400 text-gray-400' type="primary"
                                onClick={() => prev()}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 12l14 0"></path>
                                    <path d="M5 12l4 4"></path>
                                    <path d="M5 12l4 -4"></path>
                                </svg>
                                Previous
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" className='grad-btn border-0' onClick={() => message.success('Processing complete!')}>
                                Deploy
                            </Button>
                        )}
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Treasury;