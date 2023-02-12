import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import { useLocation } from "react-router-dom";



const { Header } = Layout;

// import Logo from '../images/eqn-logo.png';


function MainHeader(props) {
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const { pathname } = useLocation();


    return (
        <div>
            <Header>
                <div className='flex justify-between'>
                    <div className='flex flex-auto'>
                        <div className="logo self-center mr-16" >
                            <img src={require('../../images/eqn-logo.png')} />
                        </div>
                        <div className='flex-auto'>
                            
                        </div>
                    </div>
                    <div>
                        <Button type="primary" className='grad-btn font-bold'>Off Chain</Button>
                    </div>
                </div>
            </Header>
        </div>
    );
}

export default MainHeader;