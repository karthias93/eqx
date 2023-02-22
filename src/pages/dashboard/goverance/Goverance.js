import { Breadcrumb, Button, Tabs } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import All from './goverance-tab-content/All';

function Goverance(props) {
    const items = [
        {
            key: '1',
            label: `All`,
            children: <All />,
        },
        {
            key: '2',
            label: `Open for Vote`,
            children: `Content of Tab Pane 2`,
        },
        {
            key: '3',
            label: `Pending`,
            children: `Content of Tab Pane 3`,
        },
        {
            key: '4',
            label: `Completed`,
            children: `Content of Tab Pane 3`,
        },
        {
            key: '5',
            label: `Failed`,
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
                    <Breadcrumb.Item className='text-pink-500 font-bold'>Goverance</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='mb-4'>
                <Tabs items={items} />
            </div>
            <div className='flex gap-3'>
                <div>
                   <Link to='/dashboard/members/add'> <Button type='primary' className='grad-btn border-0'>Create New</Button></Link>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default Goverance;