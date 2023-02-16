import React from 'react';
import { Button, Form, Input, message } from 'antd';
function CsStepFirst(props) {
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
            <div>
                <h1 className='font-bold text-xl mb-2'>
                    Create Project Subscription
                </h1>
                <p className='mb-6 w-3/5 lg:width-full'>
                    Subscription stands for Initial Coin Offering which allow DAO to offer their Governance token holders to community at some price in BNB value. The BNB collected will be credited to DAO EQ Vault wallet and can be managed jointly by Team behind DAO
                </p>
            </div>
            <div className='form w-1/2 lg:width-full welcome-card rounded-lg  p-6'>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='vertical'
                >
                    <Form.Item
                        label="Project"
                        name="project"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Project!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
}

export default CsStepFirst;