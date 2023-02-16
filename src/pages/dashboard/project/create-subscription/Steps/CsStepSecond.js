import React from 'react';
import { Form, Input, message, DatePicker } from 'antd';
import dayjs from 'dayjs';
function CsStepSecond(props) {
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
                    CREATE Project Subscription
                </h1>
                <p className='text-4xl font-bold mb-6 w-3/5 lg:width-full'>
                    Step 2
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
                        label="Start date"
                        name="start-date"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Project!',
                            },
                        ]}
                    >
                        <DatePicker
                            className='w-full'
                            format="YYYY-MM-DD HH:mm:ss"
                            showTime={{
                                defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label="End date"
                        name="end-date"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Project!',
                            },
                        ]}
                    >
                        <DatePicker
                            className='w-full'
                            format="YYYY-MM-DD HH:mm:ss"
                            showTime={{
                                defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Offer Price ( Enter tokens per bnb value here )"
                        name="end-date"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Project!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Soft Cap"
                        name="soft-cap"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Project!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Hard Cap"
                        name="hard-cap"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Project!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Supply for subscription"
                        name="supply"
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
                <p>
                    NOTE: Don’t remove any member untill subscription is completed & finished.
                </p>
            </div>

        </div>
    );
}

export default CsStepSecond;