import { Breadcrumb, Button, Tabs } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Overview from './asset-tab-content/Overview';

function Assets(props) {
    const items = [
        {
            key: '1',
            label: `Overview`,
            children: <Overview />,
        },
        {
            key: '2',
            label: `Subscription Completed Request`,
            children: `Content of Tab Pane 2`,
        },
        {
            key: '3',
            label: `Subscription Pending Request`,
            children: `Content of Tab Pane 3`,
        },
        {
            key: '4',
            label: `Completed Request`,
            children: `Content of Tab Pane 3`,
        },
        {
            key: '5',
            label: `Pending Request`,
            children: `Content of Tab Pane 3`,
        },
        {
            key: '5',
            label: `Failed Request`,
            children: `Content of Tab Pane 3`,
        },
    ];
    return (
        <div>
            <div className=''>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to='/dashboard/home'>Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className='text-pink-500 font-bold'>Assets</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='mb-4'>
                <Tabs items={items} />
            </div>
            <div className='flex gap-3'>
                <div>
                   <Link to='/dashboard/members/add'> <Button type='primary' className='grad-btn border-0'>Create New Request</Button></Link>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default Assets;