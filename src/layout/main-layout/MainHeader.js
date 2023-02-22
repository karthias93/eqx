import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import Accountmodal from '../../components/Accountmodal';
import { useLocation, useNavigate } from 'react-router-dom';

const { Header } = Layout;

// import Logo from '../images/eqn-logo.png';


function MainHeader(props) {
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        const { target } = items.find(item => item.key === e.key) || {};
        console.log(target, '-----t-----')
        if (target) {
            navigate(target);
        }
    };

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const handleClick = ({ key }) => {
        document.body.classList.toggle('sidebar-open');
    };

    const items = [
        {
            label: 'Home',
            key: 'home',
            target: '/'
        },
        {
            label: 'Subscription',
            key: 'play-subscription',
            target: '/play-subscription'
        },
        // {
        //     label: 'Create Treasury',
        //     key: 'create-treasury',
        // },
        // {
        //     label: 'Projects',
        //     key: 'projects',
        // },
        // {
        //     label: 'Subscribe',
        //     key: 'subscribe',
        // },
        // {
        //     label: 'Main website',
        //     key: 'main-website',
        // },
    ];
    return (
        <div>
            <Header>
                <div className='flex justify-between'>
                    <div className='flex flex-auto'>
                        <div className="flex-none logo self-center mr-16 flex gap-3" >
                            <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" className="hidden mv-block self-center icon icon-tabler icon-tabler-align-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 6l16 0"></path>
                                <path d="M4 12l10 0"></path>
                                <path d="M4 18l14 0"></path>
                            </svg>
                            <img src={require('../../images/eqn-logo.png')} alt="" />

                        </div>
                        {!pathname.includes('dashboard') && <div className='flex-auto'>
                            <Menu selectedKeys={[current]} onClick={onClick} mode="horizontal" items={items} />
                        </div>}
                    </div>
                    <div className='self-center'>
                        {/* <Button type="primary" className='grad-btn font-bold'>Off Chain</Button> */}
                        <Accountmodal />
                    </div>
                </div>
            </Header>
        </div>
    );
}

export default MainHeader;