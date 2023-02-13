import { Breadcrumb, Space, Table, Tag } from 'antd';
import React from 'react';

function DashboardHome(props) {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a href={()=>{}}>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a href={()=>{}}>Invite {record.name}</a>
                    <a href={()=>{}}>Delete</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return (
        <>
            <div className='mb-4 text-white'>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href={()=>{}}>Home</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className='font-bold text-yellow-400'>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='mb-6'>
                <div className="grid grid-cols-2 max-lg:grid-cols-2 gap-6 max-lg:text-center">
                    <div className='p-6 welcome-card border border-gray-600 rounded-lg text-white'>
                        <h1 className='font-bold text-yellow-400 text-xl mb-2'>
                            Treasury
                        </h1>
                        <p className='mb-6'>
                            0xE0c1603aa4A370b551492e89139c0408b87C374c
                        </p>
                        <div className='net-bg-opacity mb-8 backdrop-opacity-5 p-3 rounded-lg '>
                            <div className='mb-1 text-sm text-gray-400'>Network</div>
                            <div className='font-bold'>Binance SmartChain(BEP20)</div>
                        </div>
                        <div className='text-sm text-gray-400'>
                            ( Note: Always use BEP20 network to send and receive assets on Treasury)
                        </div>
                    </div>
                    <div className='p-6 welcome-card border border-gray-600 rounded-lg text-white'>
                        <h1 className='font-bold text-yellow-400 text-xl mb-2'>
                            EQ Network
                        </h1>
                        <p className='mb-6'>
                            An integrated ecosystem of interoperable blockchain and natively developed smart contract protocols to collectively own/mint/manage Cryptos & NFTs in Decentralised Vaults, to tokenize projects using tokens/nfts, offer subscription with tokens/nfts, share yield with subscribers, to collectively create LPs on Popular DEXs and to access DeFi right from the Decentralised Vaults.<br />
                            <span className='text-yellow-300 font-bold'>
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
                    <Table pagination={false} columns={columns} dataSource={data} />
                </div>
            </div>
            <div>
                <div className='text-base font-bold mb-3'>
                    Governance proposals
                </div>
                <div>
                    <Table pagination={false} columns={columns} dataSource={data} />
                </div>
            </div>
        </>
    );
}

export default DashboardHome;