import { FileOutlined, DashboardOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Outlet, Link, NavLink   } from "react-router-dom";
import DiscreteInputs from '../connection/chart/modbus/discreteInputs/DiscreteInputs';
import HoldingRegisters from '../connection/chart/modbus/holdingRegisters/holdingRegisters';
import DescreteInputsCell from '../../pages/descreteInputsCell/descreteInputsCell';
const { Header, Content, Footer, Sider } = Layout;


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem((<NavLink to={'/Dashboard'}> Dashboard </NavLink>), '1', <DashboardOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const LayoutAntDesign = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode="inline" items={items}/>

      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        > What here&</Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>

          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {props.children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutAntDesign;