import { Button, Typography } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ETHEREUMM from "../../../../assets/images/ETH.png";
import USDTT from "../../../../assets/images/USDT.png";
import BNBB from "../../../../assets/images/BNB.png";
import BUSDD from "../../../../assets/images/BUSD.png";
import BTCC from "../../../../assets/images/btc.svg";

function Overview(props) {
    const { org, auth } = props;
    const [available, setAvailable] = useState(0);
    const [ICOAvailable, setICOAvailable] = useState(0);
    const [icoDetails, setIcoDetails] = useState([]);
    const [icoBalance, setIcoBalance] = useState(0);
      //TOKENBALANCE STATS
    const [bnbBalance, setBnbBalance] = useState(0);
    const [busdBalance, setBusdBalance] = useState(0);
    const [ethBalance, setEthBalance] = useState(0);
    const [usdtBalance, setUsdtBalance] = useState(0);
    const allTokens = [
        {
          token: "USDT",
          image: USDTT,
          balance: usdtBalance,
        },
        {
          token: "BNB",
          image: BNBB,
    
          balance: bnbBalance,
        },
        {
          token: "ETH",
          image: ETHEREUMM,
    
          balance: ethBalance,
        },
        {
          token: "BUSD",
          image: BUSDD,
    
          balance: busdBalance,
        },
        {
          token: "BTC",
          image: BTCC,
    
          balance: busdBalance,
        },
    ];
    const convertPrice = (price) => {
        const convertedprice = new Intl.NumberFormat("en-GB", {
          // notation: "compact",
          compactDisplay: "short",
        }).format(price);
        return convertedprice;
    };
    return (
        <div>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6">
                <div>
                    {org &&
                      org.project &&
                      org.project.length &&
                      org.project.map((pro) => {
                        return (
                            <div className='welcome-card rounded-lg p-6 mb-6' key={pro.id}>
                                <div className='text-sm text-gray-400 mb-3'>
                                    {pro.project_name}
                                </div>
                                <div className='text-xl text-gray-900 font-bold truncate mb-3'>
                                    {pro.gtoken_address}
                                </div>
                                <div className='flex gap-6 mb-3 font-bold'>
                                    <div className='text-sm text-gray-400'>
                                        Total Supply
                                        <div className='text-xl text-gray-600'>
                                        {convertPrice(pro.fixed_supply)}
                                        </div>
                                    </div>
                                    <div className='text-sm text-gray-400'>
                                        Available
                                        <div className='text-xl text-gray-600'>
                                            {convertPrice(available)}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Link to='/dashboard/assets/createico'> <Button type='primary' className='grad-btn border-0'>Create manage Subscription</Button></Link>
                                </div>
                            </div>
                        )}
                    )}
                    <div className='welcome-card rounded-lg p-6 mb-3'>
                        <div className='text-sm text-gray-400 mb-2'>
                        Project Subscription Contribution
                        </div>
                        <div className='text-xl text-gray-700 font-bold truncate'>
                            {convertPrice(ICOAvailable / 1000000000)}{" "}
                            {org &&
                              org.project &&
                              org.project.length &&
                              org.project[0].token_ticker}{" "}
                        </div>
                    </div>
                    {icoDetails &&
                        icoDetails.map((ico) => {
                          return (
                            <div className='welcome-card rounded-lg p-6 mb-3 flex justify-between' key={ico.token}>
                                <div className='text-sm text-gray-700'>
                                {ico.token}
                                </div>
                                <div className='text-xl text-gray-700 font-bold truncate'>
                                {icoBalance}
                                </div>
                            </div>
                          );
                    })}
                </div>
                <div>
                    <div className='welcome-card rounded-lg p-6 mb-3'>
                        <div className='text-sm text-gray-400 mb-2'>
                            Crypto asset value
                        </div>
                        <div className='text-xl text-gray-700 font-bold truncate'>
                            {convertPrice(available)}{" "}
                            {org &&
                              org.project &&
                              org.project.length &&
                              org.project[0].token_ticker}{" "}
                        </div>
                    </div>
                    {allTokens &&
                        allTokens.map((token) => {
                          return (
                            <div className='welcome-card rounded-lg p-6 mb-3 flex justify-between' key={token.token}>
                                <div className='text-sm text-gray-700'>
                                    {token.token}
                                </div>
                                <div className='text-xl text-gray-700 font-bold truncate'>
                                    {token.balance}
                                </div>
                                <div className='text-sm text-pink-500 font-bold truncate'>
                                    Send
                                </div>
                            </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      org: state.org,
      auth: state.auth,
    };
  };
  
  export default connect(mapStateToProps)(Overview);