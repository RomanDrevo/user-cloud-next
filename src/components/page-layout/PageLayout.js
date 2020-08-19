import React, {useState} from 'react';
import style from './PageLayout.module.scss';
import {Layout, Menu} from 'antd';
import {UserAddOutlined, UserOutlined, LogoutOutlined,} from '@ant-design/icons';
import Logo from '../logo/Logo';
import Link from 'next/link'

const {Header, Content, Sider} = Layout;

const PageLayout = ({children, handleLogout}) => {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    const handleOnclick = () => {
        handleLogout();
    };

    return (
        <Layout className={style['page-layout-wrapper']} style={{minHeight: '100vh'}}>
            <Header className="site-layout-background" style={{padding: 0}}>
                <Logo/>
            </Header>
            <Layout className="site-layout">
                <Sider width={150} collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="7" icon={<UserOutlined />} >
                            <Link href='/'>
                                <a>Users</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="8" icon={<UserAddOutlined />} >
                            <Link href='/add-user'>
                                <a>Add User</a>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="9" icon={<LogoutOutlined/>} onClick={handleOnclick}>
                            Logout
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{margin: '0 16px'}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>

    );
};

export default PageLayout;

