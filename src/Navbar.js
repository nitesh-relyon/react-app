import React from 'react';
import { Layout, Menu, Button } from 'antd';
const { Header } = Layout;


const NavBar = () => (
  <Layout className="layout">
    <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" >Home</Menu.Item>
        <Menu.Item key="2" >Products</Menu.Item>
        <Menu.Item key="3">About Us</Menu.Item>
        <Menu.Item key="4">Contact Us</Menu.Item>
      </Menu>
      <div>
        <Button type="primary" style={{ marginRight: '10px' }}>Sign in</Button>
        <Button>Sign up</Button>
      </div>
    </Header>
  </Layout>
);

export default NavBar;
