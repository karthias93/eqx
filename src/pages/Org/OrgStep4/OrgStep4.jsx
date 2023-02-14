import React, { useState } from "react";
import { getWeb3 } from "../../../helpers/currentWalletHelper";
import MultiSig from "../../../Config/abis/EquinoxMain.json";
import GToken from "../../../Config/abis/GToken.json";
import Eq from "../../../Config/abis/EquinoxToken.json";
import AddMember from "../../../components/AddMember/AddMember";
import { connect } from "react-redux";
import { addOrgFormData, updateSpinner } from "../../../redux/actions";

import axios from "axios";
import {
  AwaitingApproval,
  MultiSignature,
  ContinuePay,
  GasError,
  DuplicateError,
} from "../../../components/modals";
import { getMe } from "../../../services/dashboard";
import toast from "react-hot-toast";
import Web3 from "web3";
import { CREATE_DAO } from "../../../utils";

const OrgStep4 = (props) => {
  const [wallets, setWallets] = useState([]);
  const [amount, setAmount] = useState("0");
  const eqxAdd = "0x54040960e09fb9f1dd533d4465505ba558693ad6"; // fetch this address (in this file and in org.jsx file) form pages/Config/contracts.js
  const [multiSigAdd, setMultiSigAdd] = useState("");
  const [members, addMember] = useState([{}, {}, {}]);
  const [awaiting, setAwaiting] = useState(false);
  const [multiSign, setMultiSign] = useState(false);
  const [pay, setPay] = useState(false);
  const [gasError, setGasError] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const [validWallet, setValidWallet] = useState(true);
  const [validEmail, setValidEmail] = useState(true);

  // const OrgStep4Schema = Yup.object().shape({
  //   members: Yup.array()
  //     .min(3)
  //     .of(
  //       Yup.object().shape({
  //         wallet: Yup.string().required("Wallet is required"),
  //         name: Yup.string().required("Name is required"),
  //         email: Yup.string()
  //           .email("Email is invalid")
  //           .required("Email is required"),
  //         otp: Yup.string().required("Otp is required"),
  //       })
  //     ),
  // });

  const initialValues = {
    members: [
      {
        wallet: props.walletInfo.wallet,
        name: props.orgFormdata?.deployer_name,
        email: props.orgFormdata?.email,
        otp: props.orgFormdata?.otp,
      },
    ],
  };

  const onSubmit = (fields) => {
    console.log(fields);
    var values = fields.members;
    let hasDuplicates =
      values.map((v) => v.email.toLowerCase()).length >
      new Set(values.map((v) => v.email.toLowerCase())).size
        ? true
        : false;
    if (hasDuplicates) {
      toast.error("Duplicate email entry found.!!");
      // alert("Duplicate email entry found.!!");
      return;
    }

    let hasDuplicatewallet =
      values.map((v) => v.wallet).length >
      new Set(values.map((v) => v.wallet)).size
        ? true
        : false;

    if (hasDuplicatewallet) {
      toast.error("Duplicate wallet entry found.!!");
      // alert("");
      return;
    }

    props.dispatch(addOrgFormData(fields));
    deploy(fields.members);
  };

  const addNewMember = () => {
    props.dispatch(updateSpinner(true));
    const arr = members;
    arr.push({});
    addMember(arr);
    props.dispatch(updateSpinner(false));
  };

  const removeMember = (index) => {
    props.dispatch(updateSpinner(true));
    const arr = members;
    arr.splice(index, 1);
    addMember(arr);
    props.dispatch(updateSpinner(false));
  };

  const addOrg = (member) => {
    const skipFields = ["eqxBln", "mobile_otp", "kyc"];
    const formData = new FormData();
    for (const [key, value] of Object.entries(props.orgFormdata)) {
      if (!skipFields.includes(key)) {
        if (key === "wallet") {
          formData.append("wallet_address", value);
        } else {
          formData.append(key, value);
        }
      }
    }
    member.forEach((mem, index) => {
      if (index > 0) {
        formData.append("member_name[]", mem.name);
        formData.append("member_wallet_address[]", mem.wallet);
        formData.append("member_email[]", mem.email);
        formData.append("member_otp[]", mem.otp);
      }
    });
    const multisigAddress = localStorage.getItem(props.walletInfo.wallet);
    formData.append("multisig_address", multisigAddress);
    axios
      .post(`${process.env.REACT_APP_API_URL}/add_org`, formData)
      .then((res) => {
        console.log(res);
        const account = sessionStorage.getItem("selected_account");
        if (account) {
          getMe(account);
        }
        props.nextStep();
      })
      .catch((err) => {
        console.log(err);
        setDuplicate(true);
      });
  };

  const deploy = async (member) => {
    setAwaiting(true);

    let web3 = await getWeb3();

    let contract = new web3.eth.Contract(MultiSig.abi); //MultiSig

    let gContract = new web3.eth.Contract(GToken.abi);

    let eqxContract = new web3.eth.Contract(Eq.abi, eqxAdd);
    let accounts = await web3.eth.getAccounts();
    member.forEach((mem) => {
      wallets.push(mem.wallet);
    });
    console.log(member);
    try {
      // this will deploy MultiSig contract that will give _address in response
      // 100 equinox will deposited to multisig address at the end
      // multisig contract address against user wallet address should be saved to databas at this step
      // because user has deposited his 100eqx at multisig

      const amountToPay = Web3.utils.toWei(`${CREATE_DAO}`, "ether");
      const tnx = await web3.eth.sendTransaction({
        from: accounts[0],
        to: process.env.REACT_APP_OWNER_ADDRESS,
        value: amountToPay,
      });
      if (!tnx) return;
      console.log(tnx);

      await contract
        .deploy({
          //multisig contract creation
          data: MultiSig.bytecode,
          arguments: [wallets, eqxAdd], // constructor arguments
        })
        .send({ from: props.walletInfo.wallet })
        .on("error", (err) => {
          console.log(err);
          setGasError(true);
        })
        .then(async (receipt) => {
          localStorage.setItem(props.walletInfo.wallet, receipt._address);
          setAwaiting(false);
          setPay(true);
          addOrg(member);
          console.log(receipt);
          setPay(false);
          // await eqxContract.methods
          //   .transfer(receipt._address, amount)
          //   .send({ from: props.walletInfo.wallet })
          //   .then(function (receipt) {
          //   })
          //   .catch((err) => {
          //
          //   });
        });
      // await gContract.deploy({ // gtoken contraction creation
      //   data:GToken.bytecode,
      //   arguments: [name, symbol, decimal, totalSupply, props.walletInfo.wallet, receipt._address, ] // constructor arguments
      // })
      // .send({from: props.walletInfo.wallet})
      // .on('error', (error) => {
      //   console.log("gtoken error", error)
      // }).then((gReceipt) => {
      //   console.log('receipt', gReceipt)
      //   console.log('Gtoken address', gReceipt._address);
      // })
    } catch (error) {
      // alert("Duplicate entry found");
      // setGasError(true);
      console.log(error);
      setAwaiting(false);
      setPay(false);
      setGasError(true);
    }
  };

  return (
    <div className="OrgStep4" data-testid="OrgStep4">
      <div className="container">
        <div className="inner_card ">
          <div className="w-100">
            <div className="row mb-4">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <p></p>
                <h2>STEP 4</h2>
                <p className="text-primary">Create DAO Treasury</p>
              </div>
            </div>
            <div className="row">
              {/* <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                validationSchema={OrgStep4Schema}
                validate={(values) => {
                  let errors = {};
                  if (!validWallet) {
                    errors.wallet = "not a valid wallet address";
                  }
                  if (!validEmail) {
                    errors.email = "not a valid email";
                  }
                  return errors;
                }}
                onSubmit={onSubmit}
              >
                {({
                  errors,
                  values,
                  touched,
                  setValues,
                  isValid,
                  setFieldValue,
                  setFieldError,
                  setFieldTouched,
                }) => (
                  <Form>
                    <div className="col-md-1"></div>
                    <div className="col-md-12 mx-auto">
                      <div className="step4_content_max_height">
                        <FieldArray name="members">
                          {() =>
                            members.map((member, index) => {
                              const memberErrors =
                                (errors.members?.length &&
                                  errors.members[index]) ||
                                {};
                              const memberTouched =
                                (touched.members?.length &&
                                  touched.members[index]) ||
                                {};
                              const memberValues =
                                (values.members?.length &&
                                  values.members[index]) ||
                                {};
                              return (
                                <AddMember
                                  index={index}
                                  memberErrors={memberErrors}
                                  memberTouched={memberTouched}
                                  key={index}
                                  memberValues={memberValues}
                                  setFieldValue={setFieldValue}
                                  setFieldError={setFieldError}
                                  setFieldTouched={setFieldTouched}
                                  disabled={index === 0 ? true : false}
                                  removeMember={removeMember}
                                  setValidWallet={setValidWallet}
                                  setValidEmail={setValidEmail}
                                />
                              );
                            })
                          }
                        </FieldArray>
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
                      <div className="float-end mt-3">
                        <button
                          type="button"
                          className="next_btn me-4"
                          onClick={() => addNewMember()}
                        >
                          ADD MORE MEMBERS{" "}
                          <i
                            className="fa fa-sign-in ps-2"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <button type="submit" className="next_btn">
                          DEPLOY{" "}
                          <i
                            className="fa fa-sign-in ps-2"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik> */}
            </div>
          </div>
        </div>
      </div>
      <AwaitingApproval open={awaiting} setOpen={setAwaiting} />
      <GasError open={gasError} setOpen={setGasError} />
      <ContinuePay open={pay} setOpen={setPay} />
      <MultiSignature open={multiSign} setOpen={setMultiSign} />
      <DuplicateError open={duplicate} setOpen={setDuplicate} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orgFormdata: state.orgFormdata,
  };
};

export default connect(mapStateToProps)(OrgStep4);
