import { Breadcrumb, Button, Form, Input, Select} from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function PlaySubscription(props) {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const { Option } = Select;
    const selectAfter = (
        <Select defaultValue="bnb">
          <Option value="bnb">BNB</Option>
          <Option value="eqn">EQN</Option>
        </Select>
      );

      const selectAfter1 = (
        <Select defaultValue="eqn">
          <Option value="bnb">BNB</Option>
          <Option value="eqn">EQN</Option>
        </Select>
      );

    return (
        <div>
            <div className='mb-8 text-white'>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to='/dashboard'>Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className='font-bold text-pink-500'>Play Subscription</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className=' mb-4 text-center'>
                <h1 className='text-2xl font-bold mb-2'>
                    Subscribe to Earn
                </h1>
                <p className='text-base text-gray-800'>
                    Project Subscription offer <br />
                    <small>subscribe to projects by acquring project tokens if project subscription offer tails you will get yours funds back </small>
                </p>
            </div>
            <div className='form w-1/2 lg:width-full welcome-card rounded-lg p-6 pb-3 mx-auto'>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='vertical'
                >
                    <Form.Item
                        name="value"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                      <Input addonAfter={selectAfter} defaultValue="0" />
                    </Form.Item>
                    <Form.Item
                        name="value1"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                      <Input addonAfter={selectAfter1} defaultValue="0.0" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className='w-full font-bold mx-auto grad-btn border-0 '>
                            Connect Wallet
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default PlaySubscription;