import React, { useState } from "react";
import { connect } from "react-redux";
import { addOrgFormData } from "../../../redux/actions";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Form, Input, Select } from "antd";

const OrgStep2 = (props) => {
  const [validPan, setValidPan] = useState(true);
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [final, setFinal] = useState("");
  const [captchaNote, setCaptchaNote] = useState(false);
  const [mailOtpNote, setMailOtpNote] = useState(false);
  const [validPassport, setValidPassport] = useState(false);
  const [tandc, setTandc] = useState(false);

  const onFinish = async (values) => {
    console.log(values);
    await new Promise((r) => setTimeout(r, 500));
    console.log(values);
    props.dispatch(addOrgFormData(values));
    console.log("calling");
    props.nextStep();
  }

  const onFinishFailed = () => {

  }

  const handleChange = () => {

  }

  const verifyPan = (values, setFieldTouched, setFieldError) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/verify_pan/${values.pan}`)
      .then((res) => {
        console.log(res, res.data.response.status_code);
        if (res.data.response.status_code === 200) {
          console.log("Successfully verified");
          setFieldTouched("");
          setValidPan(true);
        } else {
          setFieldTouched("pan");
          setValidPan(false);
        }
      })
      .catch((err) => {
        setFieldTouched("pan");
        setValidPan(false);
        console.log(err);
      });
  };
  const verifyPassport = (e, values, setFieldTouched, setFieldValue) => {
    const { value } = e.target;

    const formData = new FormData();
    formData.append("passport", values.passport);
    axios
      .post(`${process.env.REACT_APP_API_URL}/verify_passport`, formData)
      .then((res) => {
        console.log(res);
        if (res.data.response.status_code === 200) {
          setValidPassport(true);
          setFieldTouched("");
        } else {
          setValidPassport(false);
          setFieldTouched("passport");
        }
      })
      .catch((err) => {
        setValidPassport(false);
        setFieldTouched("passport");
      });
    console.log(value);
  };

  const verifyEmail = (e, error, setFieldTouched) => {
    setFieldTouched("email");
    console.log("CALLING", error, e.target.value);
    const { value } = e.target;
    axios
      .get(`${process.env.REACT_APP_API_URL}/check_email/${value}`)
      .then((res) => {
        if (res?.data?.data.length) {
          setValidEmail(false);
          console.log(res?.data?.data.length);
        } else {
          setValidEmail(true);
          if (!error) {
            axios
              .get(
                `${process.env.REACT_APP_API_URL}/send_activation_code/${value}`
              )
              .then((res) => {
                console.log(res);
                setMailOtpNote(true);
              })
              .catch((er) => console.log(er));
          }
        }
      })
      .catch((e) => {
        setValidEmail(true);
        console.log(e);
      });
  };

  // const verifyPhone = (e, error, setFieldTouched) => {
  //   setFieldTouched("phone");
  //   console.log(e);
  //   if (!error) {
  //     if (e === "" || e.length < 10) return;
  //     setCaptchaNote(true);
  //     let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
  //     auth
  //       .signInWithPhoneNumber(e, verify)
  //       .then((result) => {
  //         setFinal(result);
  //         toast.success("OTP sent to your phone number.");
  //       })
  //       .catch((err) => {
  //         alert(err);
  //         window.location.reload();
  //       });
  //   }
  // };

  const verifyOtp = (e, setFieldTouched, email, setFieldValue) => {
    const { value } = e.target;
    setFieldTouched(`otp`);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("otp", value);
    axios
      .post(`${process.env.REACT_APP_API_URL}/verify_otp`, formData)
      .then((res) => {
        setValidEmail(true);
      })
      .catch((err) => {
        setValidEmail(false);
      });
  };

  // const verifyPhoneOtp = (e, setFieldTouched, email, setFieldValue) => {
  //   const { value } = e.target;
  //   setFieldTouched(`mobile_otp`);
  //   if (e.target.value === null || final === null || !final) {
  //     setValidPhone(false);
  //   } else {
  //     final
  //       .confirm(value)
  //       .then((result) => {
  //         setValidPhone(true);
  //       })
  //       .catch((err) => {
  //         setValidPhone(false);
  //       });
  //   }
  // };

  const kycOptions = [
    {
      id: "passport",
      name: "PASSPORT",
    },
    {
      id: "pan",
      name: "PAN",
    },
  ];
  // props.nextStep();
  return (
    <div className="OrgStep2" data-testid="OrgStep2">
      <div className="container">
        <div className="inner_card ">
          <div className="w-100">
            <div className="row mb-4">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <p></p>
                <h2>STEP 2</h2>
                <p className="text-primary">Deployer KYC</p>
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
                      // phone: "",
                      email: "",
                      passport: "",
                      pan: "",
                      linkedin_link: "",
                      otp: "",
                      //mobile_otp: "",
                    }}
                    // validate={(values) => {
                    //   let errors = {};
  
                    //   if (values.kyc === "pan" && !validPan) {
                    //     errors.pan = "not a valid pan";
                    //   }
                    //   if (!validEmail) {
                    //     errors.otp = "not a valid otp";
                    //   }
                    //   // if (!validPhone) {
                    //   //   errors.mobile_otp = "not  a valid otp";
                    //   // }
                    //   if (values.kyc === "passport" && !validPassport) {
                    //     errors.passport = "Not a valid passport";
                    //   }
                    //   console.log(errors);
                    //   return errors;
                    // }}
                >
                    <Form.Item
                        label="Email ID"
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                                message: 'Please input your email address!',
                            },
                        ]}
                        
                    >
                        <Input onBlur={(e) => {}
                          // verifyEmail(e, errors.email, setFieldTouched)
                        } />
                    </Form.Item>
                    {mailOtpNote && (
                          <div className="form-note">
                            OTP has been sent to your email.
                          </div>
                    )}
                    <Form.Item
                        label="Email OTP"
                        name="otp"
                        onBlur={(e) => {}
                          // verifyOtp(
                          //   e,
                          //   setFieldTouched,
                          //   values.email,
                          //   setFieldValue
                          // )
                        }
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="KYC"
                        name="kyc"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your kyc!',
                            },
                        ]}
                    >
                        <Select
                          onChange={handleChange}
                          options={kycOptions}
                        />
                    </Form.Item>
                    {/* {values.kyc === "passport" && ( */}
                        <>
                            <div className="with-form-field">
                              <div className="text-start">
                                <label
                                  htmlFor="passport"
                                  className="form-label"
                                  title="passport"
                                >
                                  Passport Image
                                </label>
                              </div>
                              <input
                                id="passport"
                                name="passport"
                                type="file"
                                onChange={(event) => {
                                  // setFieldValue(
                                  //   "passport",
                                  //   event.currentTarget.files
                                  //     ? event.currentTarget.files[0]
                                  //     : ""
                                  // );
                                }}
                                onBlur={(e) => {}
                                  // verifyPassport(
                                  //   e,
                                  //   values,
                                  //   setFieldTouched,
                                  //   setFieldValue
                                  // )
                                }
                              />
                            </div>
                            {/* <WithFormField
                              label="Passport No."
                              name="passport_no"
                              error={errors.passport_no && touched.passport_no}
                            /> */}
                        </>
                    {/* )} */}
                    {/* {values.kyc === "pan" && ( */}
                        <Form.Item
                            label="Pan Card"
                            name="pan"
                            onBlur={() => {}
                              // verifyPan(values, setFieldTouched, setFieldError)
                            }
                        >
                            <Input />
                        </Form.Item>
                    {/* )} */}
                    <Form.Item
                      label="LinkdIn profile link"
                      name="linkedin_link"
                      rules={[
                        {
                          required: true,
                          message: 'please enter your linkedin'
                        },
                        {
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
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "left",
                            marginBottom: "20px",
                        }}
                    >
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="tandc"
                          onChange={() => setTandc((p) => !p)}
                          value={tandc}
                        />
                        <label style={{ marginLeft: "10px" }} for="tandc">
                            By clicking Next, you agree to our
                            <span>
                              <a
                                target="_blank"
                                href="https://equinox.business"
                              >
                                <b>Terms of service.</b>
                              </a>
                            </span>
                            You may receive Email notifications from us and can
                            opt out at any time.
                        </label>
                    </div>
                    <div className="float-start">
                        <button
                            className="next_btn"
                            type="button"
                            onClick={() => props.previousStep()}
                        >
                            Previuos
                        </button>
                    </div>
                    <div className="float-end ">
                        <button
                            className="next_btn"
                            type="submit"
                            disabled={!tandc}
                        >
                            NEXT{" "}
                        </button>
                    </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default connect()(OrgStep2);
