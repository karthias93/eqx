import React from 'react';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import DashboardRoutes from '../../routes/DashboardRoutes';
import { useNavigate } from "react-router-dom";
const { Content, Sider } = Layout;
const menuitems = [
    { label: "Dashboard", key: "home" },
    { label: "Project", key: "project" },
    { label: "Members", key: "members" },
    { label: "Assets", key: "assets" },
    { label: "Goverance", key: "goverance" },
    // { label: "Play Subscription", key: "play-subscription" },
];

const menufooteritems = [
    { label: "Documentation", key: 'https://docs.eqnetwork.io/' },
    { label: "Support", key: 'https://t.me/eqxcommunity' },
];
const handleClick = ({ key }) => {
    document.body.classList.toggle('sidebar-open');
};
function DashboardLayout(props) {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <div onClick={handleClick} className='overlay-div hidden'></div>

            <div className='flex'>
                <Sider collapsible onCollapse={(value) => { setCollapsed(value); console.log(collapsed) }}>

                    <div className='flex flex-col justify-between menu-height'>
                        <div>
                            <Menu theme="light" defaultSelectedKeys={['dashboard']} mode="inline" items={menuitems}
                                onClick={({ key }) => navigate(`/dashboard/${key}`)}
                            />
                        </div>
                        <div>
                            <hr className='border-gray-300' />
                            <Menu theme="light" defaultSelectedKeys={['dashboard']} mode="inline" items={menufooteritems} onClick={({key})=> window.open(key, '_blank')}/>
                        </div>
                    </div>

                </Sider>
                <Content className='overflow-auto'>
                    <div className='px-4 p-4 pb-12'>
                        <DashboardRoutes />
                    </div>
                </Content>
            </div>
        </>
    );
}

export default DashboardLayout;