import { Breadcrumb, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function Project(props) {
    return (
        <div>
            <div className='mb-4 text-white'>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to='/dashboard/home'>Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className='font-bold text-yellow-400'>Project</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='mb-8'>
                <div className='text-base font-bold mb-3'>
                    EQ Network<br></br>
                    <span className='text-sm text-gray-400'>
                        https://eqnetwork.io
                    </span>
                </div>
                <div className='mb-6 w-3/5 lg:width-full'>
                    An integrated ecosystem of interoperable blockchain and natively developed smart contract protocols to collectively own/mint/manage Cryptos & NFTs in Decentralised Vaults, to tokenize projects using tokens/nfts, offer subscription with tokens/nfts, share yield with subscribers, to collectively create LPs on Popular DEXs and to access DeFi right from the Decentralised Vaults.
                </div>
                <div className='flex gap-6'>
                    <div className='flex gap-2 p-2 px-4 welcome-card rounded-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                        </svg>
                        <span>
                            Twitter
                        </span>
                    </div>
                    <div className='flex gap-2 p-2 px-4 welcome-card rounded-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                        </svg>
                        <span>
                            Facebook
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <div className='p-6 welcome-card rounded-lg'>
                    <h1 className='font-bold text-yellow-400 text-xl mb-2'>
                        Total Supply
                    </h1>
                    <p className='mb-6 text-4xl font-bold'>
                        1,00,000,000
                    </p>
                    <div className='flex flex-wrap gap-6'>
                        <div>
                            <Link to='./create-subscription'>
                                <Button type="primary" className='grad-btn border-0'>CREATE/MANAGE SUBSCRIPTION</Button>
                            </Link>
                        </div>
                        <div>
                            <Button type="primary" className='grad-btn border-0'>CREATE IDO</Button>
                        </div>
                        <div>
                            <Button type="primary" className='grad-btn border-0'>APPROVE/INITIATE REQUESTS</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;