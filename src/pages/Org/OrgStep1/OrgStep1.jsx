import React from "react";
import { addOrgFormData } from "../../../redux/actions";
import { connect } from "react-redux";

const OrgStep1 = (props) => {
  const onFinish = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    props.dispatch(addOrgFormData(values));
    props.nextStep();
    message.success('Submit success!');
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
      message.error('Submit success!');
  };
  return (
    <div className="OrgStep1" data-testid="OrgStep1">
      <div className="container">
        <div className="inner_card ">
          <div className="w-100">
            <div className="row mb-4">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <p></p>
                <h2>CREATE TREASURY</h2>
                <p>
                  You must hold 100 EQX to deploy and access treasury
                  (currently disabled). Read{" "}
                  <a href="https://docs.equinox.business/">
                    <span className="text-primary">Docs</span>
                  </a>{" "}
                  for requirements.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
              <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='vertical'
                    initialValues={{
                      wallet: props.walletInfo.wallet,
                      eqxBln: props.walletInfo.eqxBln,
                      deployer_name: "",
                    }}
                >
                    <Form.Item
                        label="Wallet"
                        name="wallet"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your wallet address!',
                            },
                        ]}
                    >
                        <Input disabled={true} />
                    </Form.Item>
                    <Form.Item
                        label="EQX Balance"
                        name="eqxBln"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your balance!',
                            },
                        ]}
                    >
                        <Input disabled={true} />
                    </Form.Item>
                    <Form.Item
                        label="Deployer's Full Name (You)"
                        name="deployer_name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input deployer name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <div className='w-2/12 mt-5'>
                        <Button type="primary" className='w-full grad-btn border-0 mt-3'>
                          NEXT{" "}
                        </Button>
                    </div>
                </Form>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(OrgStep1);
