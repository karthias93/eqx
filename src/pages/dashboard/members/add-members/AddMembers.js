import { Breadcrumb, Button, Form, Input, message } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function AddMembers(props) {
    const onFinish = (values) => {
        message.success('Submit success!');
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('Submit success!');
    };
    return (
        <div>
            <div className='mb-4 text-white'>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to='/dashboard'>Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className=''>  <Link to='/dashboard/members'>Members</Link></Breadcrumb.Item>
                    <Breadcrumb.Item className='font-bold text-pink-500'>Add</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div>
                <h1 className='font-bold text-xl mb-2'>
                    EQ Vault member
                </h1>
                <p className='mb-6 w-3/5 lg:width-full'>
                    EQ Vault Members are core team members and weild equal rights for it's operations and in decision making. Member's may inititate the addition and removal instance. It needs appraval of more than 50% members for its success.
                </p>
            </div>
            <div className='form w-1/2 lg:width-full welcome-card rounded-lg p-6'>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='vertical'
                >
                    <Form.Item
                        label="Wallet"
                        name="wallet"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Full Name"
                        name="full-name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email Address"
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <div className='flex gap-3'>
                        <div className='w-5/6'>
                            <Form.Item
                                label="OTP"
                                name="full-name"
                                tooltip="What do you want others to call you?"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <div className='w-2/12 mt-5'>
                            <Button type="primary" className='w-full grad-btn border-0 mt-3'>
                                Submit
                            </Button>
                        </div>
                    </div>

                    <Form.Item >
                        <p className='text-white text-center mt-3'>
                            New Member will get an email link for updating further profile
                        </p>
                    </Form.Item>

                    <Form.Item className=''>
                        <div className='text-center'>
                            <Button type="primary" className='flex gap-1 mx-auto grad-btn border-0 ' htmlType="submit">
                                Add <svg xmlns="http://www.w3.org/2000/svg" className="self-center icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 12l14 0"></path>
                                    <path d="M15 16l4 -4"></path>
                                    <path d="M15 8l4 4"></path>
                                </svg>
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default AddMembers;