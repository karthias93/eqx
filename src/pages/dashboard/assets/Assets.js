import { Breadcrumb, Button, Form, Input, Modal, Select, Tabs } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CompleteRequest from './asset-tab-content/CompleteRequest';
import Overview from './asset-tab-content/Overview';
import PendingRequest from './asset-tab-content/PendingRequest';

function Assets(props) {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [modal2Open, setModal2Open] = useState(false);
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
            children: <CompleteRequest/>,
        },
        {
            key: '5',
            label: `Pending Request`,
            children: <PendingRequest />,
        },
        {
            key: '6',
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
                    <Button onClick={() => setModal2Open(true)} type='primary' className='grad-btn border-0'>Create New Request</Button>
                </div>
                <div>
                </div>
            </div>

            <Modal
                centered
                open={modal2Open}
                footer={null}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
            >
                <div className='mt-6'>
                    <div className='text-center'>
                        <div className='text-xl font-bold mb-3'>
                            Create Request
                        </div>
                        <p className='mb-6'>
                            Create rquest to initiating an instance for sending crypto assets to receiver wallet. it must be approved by all members within 7days of initiation for sucessfull transaction
                        </p>
                    </div>
                    <div>
                        <Form
                            name="basic"
                            layout='vertical'
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Receiver wallet"
                                name="receiver-wallet"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Asset"
                                name="asset"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    defaultValue="lucy"
                                    // onChange={handleChange}
                                    options={[
                                        {
                                            value: 'jack',
                                            label: 'Jack',
                                        },
                                        {
                                            value: 'lucy',
                                            label: 'Lucy',
                                        },                                       
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Quantity"
                                name="quantity"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Description"
                                name="description"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item className='text-center'>
                                <Button type="primary" htmlType="submit" className='grad-btn border-0'>
                                    Initiate
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Modal>

        </div>
    );
}

export default Assets;