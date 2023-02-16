import React, { useState } from 'react';
import { Button, Form, Input, message, Select, Upload, Checkbox } from 'antd';
import { addOrgFormData } from '../../../redux/actions';
import axios from 'axios';
import { PlusOutlined } from '@ant-design/icons';
function TreasuryStepSecond(props) {
    const [mailOtpNote, setMailOtpNote] = useState(false);
    const [form] = Form.useForm();
    const { Option } = Select;
    const onFinish = async (values) => {
        console.log('Success:', values);
        await new Promise((r) => setTimeout(r, 500));
        props.dispatch(addOrgFormData(values));
        console.log("calling");
        props.nextStep();
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('Submit Failed!');
    };
    const verifyEmail = (_, value, cb) => {
        axios.get(`${process.env.REACT_APP_API_URL}/check_email/${value}`)
            .then((res) => {
                if (res?.data?.data.length) {
                    cb(`not a valid email`)
                } else {
                    axios.get(
                        `${process.env.REACT_APP_API_URL}/send_activation_code/${value}`
                    ).then((res) => {
                        setMailOtpNote(true);
                        cb()
                    })
                    .catch((er) => {
                        console.log(er)
                        cb()
                    });
                }
            })
            .catch((e) => {
                cb()
            });
    }
    const verifyOtp = (_, value, cb) => {
        const formData = new FormData();
        formData.append("email", form.getFieldValue('email'));
        formData.append("otp", value);
        axios
          .post(`${process.env.REACT_APP_API_URL}/verify_otp`, formData)
          .then((res) => {
            cb()
          })
          .catch((err) => {
            cb('enter valid otp')
          });
    };
    const verifyPan = (_, value, cb) => {
        axios.get(`${process.env.REACT_APP_API_URL}/verify_pan/${value}`)
          .then((res) => {
            if (res.data.response.status_code === 200) {
              console.log("Successfully verified");
              cb()
            } else {
              cb('not a valid pan')
            }
          })
          .catch((err) => {
            cb('not a valid pan')
            console.log(err);
          });
      };
    return (
        <div>
            <div className=' mb-12'>
                <h1 className='text-2xl text-white font-bold mb-4'>
                    STEP 2
                </h1>
                <p className='text-base text-gray-300'>
                        Deployer KYC
                </p>
            </div>
            <div className='form w-1/2 lg:width-full welcome-card rounded-lg p-6'>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='vertical'
                    initialValues={{
                        email: "",
                        passport: "",
                        pan: "",
                        linkedin_link: "",
                        otp: "",
                    }}
                    form={form}
                >
                    <Form.Item
                        label="Email ID"
                        name="email"
                        validateTrigger="onBlur"
                        rules={[
                            {
                                required: true,
                                message: 'Required',
                            },
                            {
                                type: 'email',
                                message: 'Invalid email'
                            },
                            {
                                message: 'Not a valid email',
                                validator: verifyEmail
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    {mailOtpNote && (
                          <div className="form-note">
                            OTP has been sent to your email.
                          </div>
                    )}
                    <Form.Item
                        label="Email OTP"
                        name="otp"
                        validateTrigger="onBlur"
                        rules={[
                            {
                                required: true,
                                message: 'Required',
                            },
                            {
                                message: 'Not a valid otp',
                                validator: verifyOtp
                            }
                        ]}
                        tooltip="you should receive otp to your entered email"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="KYC"
                        name="kyc"
                        rules={[
                            {
                                required: true,
                                message: 'Required',
                            },
                        ]}
                    >
                         <Select
                            placeholder="Select a option"
                            allowClear
                        >
                            <Option value="passport">PASSPORT</Option>
                            <Option value="pan">PAN</Option>
                        </Select>
                    </Form.Item>
                    {form.getFieldValue('kyc') === 'passport' && <Form.Item label="Passport Image" valuePropName="passport">
                        <Upload action={`${process.env.REACT_APP_API_URL}/verify_passport`}>
                            <div>
                                <PlusOutlined />
                                <div
                                    style={{
                                    marginTop: 8,
                                    }}
                                >
                                    Upload
                                </div>
                            </div>
                        </Upload>
                    </Form.Item>}
                    {form.getFieldValue('kyc') === 'pan' && <Form.Item
                        label="Pan Card"
                        name="pan"
                        validateTrigger="onBlur"
                        rules={[
                            {
                                required: true,
                                message: 'Required',
                            },
                            {
                                message: 'Not a valid pan',
                                validator: verifyPan
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>}
                    <Form.Item
                        label="LinkdIn profile link"
                        name="linkedin_link"
                        validateTrigger="onBlur"
                        rules={[
                            {
                                required: true,
                                message: 'Required',
                            },
                            {
                                message: 'Not a valid linkedin',
                                validator: (_, value) => {
                                    if (/(https?:\/\/(www.)|(www.))?linkedin.com\/(mwlite\/|m\/)?in\/[a-zA-Z0-9_.-]+\/?/.test(value)) {
                                      return Promise.resolve();
                                    } else {
                                      return Promise.reject('Some message here');
                                    }
                                }
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label={``} name="tandc" valuePropName="checked">
                        <Checkbox>By clicking Next, you agree to our
                            <span>
                              <a
                                target="_blank"
                                href="https://equinox.business"
                              >
                                <b>Terms of service.</b>
                              </a>
                            </span>
                            You may receive Email notifications from us and can
                            opt out at any time.</Checkbox>
                    </Form.Item>
                    <div className='flex'>
                        <Button
                            className='mx-0 flex gap-1 mx-auto bordered border-gray-400 text-gray-400' type="primary"
                            onClick={() => {}}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M5 12l14 0"></path>
                                <path d="M5 12l4 4"></path>
                                <path d="M5 12l4 -4"></path>
                            </svg>
                            Previous
                        </Button>
                        <Button type="primary" htmlType="submit" className='ml-0 flex gap-1 mx-auto grad-btn border-0 '>
                            Next <svg xmlns="http://www.w3.org/2000/svg" className="self-center icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M5 12l14 0"></path>
                                <path d="M15 16l4 -4"></path>
                                <path d="M15 8l4 4"></path>
                            </svg>
                        </Button>
                    </div>
                </Form>
            </div>

        </div>
    );
}

export default TreasuryStepSecond;