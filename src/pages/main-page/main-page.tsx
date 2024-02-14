import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

import { Layout, Menu } from 'antd';

import {HeaderContent} from '@components/headerContent/headerContent';
import {HomeDescription} from '@components/homeDescription/homeDescription';
import {HomeSlogan} from '@components/homeSlogan/homeSlogan';
import {HomeCards} from '@components/homeCards/homeCards';
import {Footer} from '@components/footer/footer';

import calendar from '../../images/calendar.svg';
import exit from '../../images/exit.svg';
import heart from '../../images/heart.svg';
import logo from '../../images/logo.svg';
import profile from '../../images/profile.svg';
import small_logo from '../../images/small_logo.svg';
import trophy from '../../images/trophy.svg';

import './main-page.css';

import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;
export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
        // unsubscribe "onComponentDestroy"
        window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
    const isMobile = (width > 600) ? false : true;
    const dataTestId = isMobile ? 'sider-switch-mobile' : 'sider-switch';
    return (
        <div className='container'>
        <div className='wrapper'>
            <Layout>
                <Sider
                    theme="light"
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    width={isMobile ? 106 : 208 }
                    collapsedWidth={isMobile ? 1 : 64}
                >
                    <div className="logo">
                            {collapsed ? (
                                <img src={small_logo} alt='small logo' />
                            ) : (
                                <img src={logo} alt='logo' />
                            )}
                    </div>
                    <Menu
                        theme="light"
                        mode="inline"
                        items={[
                            {
                                key: '1',
                                icon: <img src={calendar} alt='calendar' />,
                                label: 'Календарь',
                            },
                            {
                                key: '2',
                                icon: <img src={heart} alt='Тренировки' />,
                                label: 'Тренировки',
                            },
                            {
                                key: '3',
                                icon: <img src={trophy} alt='Достижения' />,
                                label: 'Достижения',
                            },
                            {
                                key: '4',
                                icon: <img src={profile} alt='Профиль' />,
                                label: 'Профиль',
                            },
                        ]}
                    />
                    <div className='exitMenu'>
                    <Menu
                        theme="light"
                        mode='inline'
                        items={[
                            {
                                key: '5',
                                icon: <img src={exit} alt='Выход' />,
                                label: 'Выход',
                            },
                        ]}
                    />
                    </div>  
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    >
                        <div
                                className={
                                    collapsed
                                        ? 'trigger trigger-close'
                                        : ' trigger trigger-open'
                                }
                                data-test-id={dataTestId}
                                onClick={() => setCollapsed(!collapsed)}
                            >
                                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            </div>
                            <HeaderContent/>
                    </Header>
                    <Content
                        className="main-content"  
                    >
                        <HomeDescription/>
                        <HomeSlogan/>
                        <HomeCards/>
                        <Footer/>
                    </Content>
                </Layout>
            </Layout>
        </div>
        </div>
    );
};
