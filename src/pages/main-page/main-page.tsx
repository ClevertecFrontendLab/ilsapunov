import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  const { Header, Sider, Content } = Layout;
  export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className='container'>
      <Layout>
        <Sider
            theme="light"
            trigger={null} 
            collapsible 
            collapsed={collapsed}
            >
          <div className="logo" />
          <Menu
            theme="light"
            mode="inline"
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Календарь',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Тренировки',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'Достижения',
              },
              {
                key: '4',
                icon: <UploadOutlined />,
                label: 'Профиль',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
      </div>
    );
  };
  