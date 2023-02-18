import { Breadcrumb, Space, Table, Tag } from 'antd';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import AddLiquidity from "../../../components/AddLiquidity/AddLiquidity";
import { getOrg } from "../../../services/dashboard";
// import { withRouter } from "react-router";
import axios from "axios";
import { shortAddress } from '../../../helpers';

function DashboardHome(props) {
    const { org, auth, history } = props;
    useEffect(() => {
        // getIcos();
        if (auth && auth.org_id) getOrg(auth.org_id);
    }, [auth]);
    const createProjectHandler = async (e) => {
        e.preventDefault();
    
        if (auth && auth.org_id) {
          const {
            data: { response: orgData },
          } = await axios.get(
            `${process.env.REACT_APP_API_URL}/get_org/${auth.org_id}`
          );
          console.log(orgData);
          if (orgData) {
            if (orgData?.project && orgData.project.length) {
              alert(
                "Project allready launched please refresh the page to see details of project"
              );
            } else {
              // alert("You can create Project");
              history.push("/dashboard/project/new");
            }
            // console.log(org?.project && org.project.length);
          }
        }
    };
    const transCol = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Recivers',
            dataIndex: 'to_wallet',
            key: 'to_wallet',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Amount',
            key: 'amount',
            dataIndex: 'amount',
            // render: (_, { tags }) => (
            //     <>
            //         {tags.map((tag) => {
            //             let color = tag.length > 5 ? 'geekblue' : 'green';
            //             if (tag === 'loser') {
            //                 color = 'volcano';
            //             }
            //             return (
            //                 <Tag color={color} key={tag}>
            //                     {tag.toUpperCase()}
            //                 </Tag>
            //             );
            //         })}
            //     </>
            // ),
        },
        {
            title: 'Start Date',
            key: 'proposed_date',
            render: (text) => text?.substring(0, 10),
        },
        {
            title: 'End Date',
            key: 'finished_date',
            render: (text) => text?.substring(0, 10),
        },
        {
            title: 'Status',
            key: 'status',
            render: (val, record) => (
                <p className="font-medium text-xs mb-0  text-center">
                    {val == 0 ? (
                        <span className="bg-yellow-400 py-1 px-2 text-white font-bold rounded-md">
                        In Progress
                        </span>
                    ) : val == 1 ? (
                        <span className="bg-green-400 py-1 px-2 text-white font-bold rounded-md">
                        Completed
                        </span>
                    ) : (
                        <span className="bg-red-400 py-1 px-2 text-white font-bold rounded-md">
                        Failed
                        </span>
                    )}
                </p>
            ),
        }
    ];
    const transData = org?.fund_transfer ? org.fund_transfer : [];
    const govCol = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Start Date',
            key: 'start_date',
            render: (text) => text?.substring(0, 10),
        },
        {
            title: 'End Date',
            key: 'end_date',
            render: (text) => text?.substring(0, 10),
        },
        {
            title: 'Status',
            key: 'status',
            render: (val, record) => (
                <p className="font-medium text-xs mb-0  text-center">
                    {val === "Initialized" ||
                    val === "Expired" ? (
                        <span className="bg-yellow-400 py-1 px-2 text-white font-bold rounded-md">
                        In Progress
                        </span>
                    ) : val === "Approved" ? (
                        <span className="bg-green-400 py-1 px-2 text-white font-bold rounded-md">
                        Completed
                        </span>
                    ) : (
                        <span className="bg-red-400 py-1 px-2 text-white font-bold rounded-md">
                        Failed
                        </span>
                    )}
                </p>
            ),
        }
    ];
    const govData = org?.proposal && org.proposal.length ? org.proposal.slice(0, 5) : [];
    return (
        <>
            <div className='mb-4'>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href={() => { }}>Home</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className='font-bold text-pink-500'>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="flex flex-wrap max-lg:text-center row-minus">
                <div className='flex-none w-5/12 px-3'>
                    <div className='welcome-card rounded-lg p-6 mb-6'>
                        <div className='text-sm text-gray-400 mb-3'>
                            USER PROFILE
                        </div>
                        <div className='text-2xl font-bold'>
                            {auth?.member_name} (You)
                        </div>
                        <div className='text-sm flex'>
                            {auth?.wallet_address ? shortAddress(auth.wallet_address) : ''}
                            <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 icon icon-tabler icon-tabler-copy" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                                <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                            </svg>
                        </div>
                        <div className='text-sm'>
                            {auth?.email}
                        </div>
                    </div>
                </div>
                <div className='flex-none  w-7/12 px-3'>
                    <div className='welcome-card rounded-lg p-6  mb-6'>
                        <div className='text-sm text-gray-400 mb-3'>
                            VAULT OVERVIEW
                        </div>

                        <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-6">
                            <div>
                                <div className='text-2xl font-bold'>
                                    EQ Vault
                                </div>
                                <div className='text-sm text-gray-400'>
                                    BNB Chain
                                </div>
                                <div className='text-sm flex'>
                                    0xE0c...c7C374c
                                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 icon icon-tabler icon-tabler-copy" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                                        <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div className='text-xl font-bold text-green-500'>
                                    $6000.78
                                </div>
                                <div className='text-sm text-gray-400'>
                                    20 BNB value
                                </div>
                                <div className='text-sm'>
                                    total value
                                </div>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>
                                    Send
                                </div>
                                <div className='text-sm text-gray-400'>
                                    Initiate transaction
                                </div>
                                <div className='text-sm'>
                                    BEP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-none w-5/12 px-3'>
                    <div className='welcome-card rounded-lg p-6 mb-6'>
                        <div className='text-sm text-gray-400 mb-3'>
                            VAULT OVERVIEW
                        </div>
                        <div className="flex gap-3 max-lg:text-center row-minus mb-6">
                            <div className='w-3/5 px-3  mb-6'>
                                <div className='text-2xl font-bold'>
                                    EQ Vault
                                </div>
                                <div className='text-sm text-gray-400'>
                                    30.02.2023
                                </div>
                                <div className='text-sm'>
                                    Name
                                </div>
                            </div>
                            <div className='w-2/5 px-3 mb-6'>
                                <div className='font-bold'>
                                    ----
                                </div>
                                <div className='text-sm text-gray-400'>
                                    BEP20
                                </div>
                                <div className='text-sm'>
                                    Total Value
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 max-lg:text-center row-minus mb-3">
                            <div className='w-3/5 px-3  mb-6'>
                                <div className='text-2xl font-bold'>
                                    0xE0c...c7C374c
                                </div>
                                <div className='text-sm text-gray-400'>
                                    BNB Chain
                                </div>
                                <div className='text-sm'>
                                    Token Contract
                                </div>
                            </div>
                            <div className='w-2/5 px-3 mb-6'>
                                <div className='font-bold'>
                                    100 million
                                </div>
                                <div className='text-sm text-gray-400'>
                                    Fixed
                                </div>
                                <div className='text-sm'>
                                    Token supply
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 max-lg:text-center row-minus mb-6">
                            <div className='w-3/5 px-3  mb-6'>
                                <div className='text-2xl font-bold'>
                                    Send
                                </div>
                                <div className='text-sm text-gray-400'>
                                    30.02.2023
                                </div>
                                <div className='text-sm'>
                                    Name
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-none w-7/12 px-3'>
                    <div className='flex flex-wrap row-minus'>
                        <div className='w-3/5 px-3  mb-6'>
                            <div className='welcome-card rounded-lg p-6 mb-6'>
                                <div className='text-sm text-gray-400 mb-3'>
                                    VAULT OVERVIEW
                                </div>
                                <div className="flex gap-3 max-lg:text-center row-minus mb-6">
                                    <div className='w-3/5 px-3  mb-6'>
                                        <div className='text-2xl font-bold'>
                                            EQ Vault
                                        </div>
                                        <div className='text-sm text-gray-400'>
                                            30.02.2023
                                        </div>
                                        <div className='text-sm'>
                                            Name
                                        </div>
                                    </div>
                                    <div className='w-2/5 px-3 mb-6'>
                                        <div className='font-bold'>
                                            ----
                                        </div>
                                        <div className='text-sm text-gray-400'>
                                            BEP20
                                        </div>
                                        <div className='text-sm'>
                                            Total Value
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 max-lg:text-center row-minus mb-3">
                                    <div className='w-3/5 px-3  mb-6'>
                                        <div className='text-2xl font-bold'>
                                            0xE0c...c7C374c
                                        </div>
                                        <div className='text-sm text-gray-400'>
                                            BNB Chain
                                        </div>
                                        <div className='text-sm'>
                                            Token Contract
                                        </div>
                                    </div>
                                    <div className='w-2/5 px-3 mb-6'>
                                        <div className='font-bold'>
                                            100 million
                                        </div>
                                        <div className='text-sm text-gray-400'>
                                            Fixed
                                        </div>
                                        <div className='text-sm'>
                                            Token supply
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 max-lg:text-center row-minus mb-6">
                                    <div className='w-3/5 px-3  mb-6'>
                                        <div className='text-2xl font-bold'>
                                            Send
                                        </div>
                                        <div className='text-sm text-gray-400'>
                                            30.02.2023
                                        </div>
                                        <div className='text-sm'>
                                            Name
                                        </div>
                                    </div>
                                    <div className='w-2/5 px-3 mb-6'>
                                        <div className='font-bold'>
                                            100 million
                                        </div>
                                        <div className='text-sm text-gray-400'>
                                            Fixed
                                        </div>
                                        <div className='text-sm'>
                                            Token supply
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/5 px-3  mb-6'>
                            <div className='welcome-card rounded-lg p-6 mb-8'>
                                <div className='text-sm text-gray-400'>
                                    Members <br/>Overview
                                </div>
                                <div className='text-2xl font-bold text-yellow-500'>
                                    6
                                </div>
                                <div className='text-sm text-gray-400'>
                                    Active
                                </div>
                                <div className='text-sm'>
                                    Total Members
                                </div>
                            </div>
                            <div className='welcome-card rounded-lg p-6 mb-6'>
                                <div className='text-sm text-gray-400'>
                                    Recent<br/> Notification
                                </div>
                                <div className='text-2xl font-bold text-blue-700'>
                                    14
                                </div>
                                <div className='text-sm text-gray-400'>
                                    Active
                                </div>
                                <div className='text-sm'>
                                    Total Members
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mb-6'>
                <div className="grid grid-cols-2 max-lg:grid-cols-2 gap-6 max-lg:text-center">
                    <div className='p-6 welcome-card rounded-lg'>
                        <h1 className='font-bold text-pink-500 text-xl mb-2'>
                            EQ Vault
                        </h1>
                        <p className='mb-6'>
                            0xE0c1603aa4A370b551492e89139c0408b87C374c
                        </p>
                        <div className='net-bg-opacity mb-8 backdrop-opacity-5 p-3 rounded-lg '>
                            <div className='mb-1 text-sm text-gray-400'>Network</div>
                            <div className='font-bold'>Binance SmartChain(BEP20)</div>
                        </div>
                        <div className='text-sm text-gray-400'>
                            ( Note: Always use BEP20 network to send and receive assets on EQ Vault)
                        </div>
                    </div>
                    <div className='p-6 welcome-card rounded-lg'>
                        <h1 className='font-bold text-pink-500 text-xl mb-2'>
                            EQ Network
                        </h1>
                        <p className='mb-6'>
                            An integrated ecosystem of interoperable blockchain and natively developed smart contract protocols to collectively own/mint/manage Cryptos & NFTs in Decentralised Vaults, to tokenize projects using tokens/nfts, offer subscription with tokens/nfts, share yield with subscribers, to collectively create LPs on Popular DEXs and to access DeFi right from the Decentralised Vaults.<br />
                            <span className='text-pink-500 font-bold'>
                                info@eqnetwork.io
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='mb-8'>
                <div className='text-base font-bold mb-3'>
                    Recent Transaction requests
                </div>
                <div>
                    <Table pagination={false} columns={transCol} dataSource={transData} />
                </div>
            </div>
            <div>
                <div className='text-base font-bold mb-3'>
                    Governance proposals
                </div>
                <div>
                    <Table pagination={false} columns={govCol} dataSource={govData} />
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
      org: state.org,
      auth: state.auth,
    };
  };
  
  export default connect(mapStateToProps)(DashboardHome);