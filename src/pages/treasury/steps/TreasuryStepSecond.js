import React from 'react';
import { Button, Form, Input, message } from 'antd';
function TreasuryStepSecond(props) {
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
            <div className='form w-1/2 lg:width-full welcome-card border border-gray-600 rounded-lg text-white p-6'>
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

export default TreasuryStepSecond;