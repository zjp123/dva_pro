import React from 'react';
import { Menu } from 'antd';
// import {BarsOutlined, HomeOutlined, FrownOutlined} from '@ant-design/icons';
import { Icon } from 'antd';
// import { router } from 'dva';
// const {Link, withRouter} = router
import { Link, withRouter } from 'dva/router';

function Header() {
  return (
    <Menu  mode="horizontal" theme="dark">
      <Menu.Item key="/user">
        <Link to="/user">
          {/* <BarsOutlined />Users */}
          <Icon type="bars" />Users
        </Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to="/">
          {/* <HomeOutlined />Home */}
          <Icon type="home" />Home
        </Link>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/404">
        {/* <FrownOutlined />404 */}
        <Icon type="frown" />404

        </Link>
      </Menu.Item>
      <Menu.Item key="/antd">
        <a href="https://github.com/dvajs/dva">dva</a>
      </Menu.Item>
    </Menu>
  );
}

export default withRouter(Header);