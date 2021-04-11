import React from 'react';
import Routes from '../Route/Routes';
import { Menu } from '../Component/index'
import { Layout } from 'antd';

const {  Content } = Layout;

const AppPresenter = (props) => {

  return (
    <Layout style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <Menu {...props} />
      <Layout
        className="site-layout"
        style={{ height: '100%', overflow: 'hidden' }}
      >
        <Content
          className="site-layout-background"
          style={{
            width: '100%',
            height: '100%',
            margin: '0.4% 0.3%',
            overflow: 'auto',
            padding: '1%',
            minHeight: 280,
          }}
        >
          <Routes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppPresenter;
