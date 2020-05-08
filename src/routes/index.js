import { createRoutes } from '../utils/core';
// import BasicLayout from '@/layouts/BasicLayout';
// import UserLayout from '@/layouts/UserLayout';
import Layout from '../layout/header';

import Login from '../pages/login/index';
import Register from '../pages/register/index';
// import Dashboard from './Dashboard';
// import Blank from './Blank';
// import Toolbar from './Widgets/Toolbar';
// import BaseComponent from './Widgets/BaseComponent';
// import Column from './Widgets/Column';
// import TransferTree from './Widgets/TransferTree';
// import SearchBar from './Widgets/SearchBar';
// import DataTable from './Widgets/DataTable';
// import Form from './Widgets/Form';
// import EC from './Widgets/Charts/EC';
// import G2 from './Widgets/Charts/G2';
// import Print from './Widgets/Print';
// import Banner from './Widgets/Banner';
// import Icon from './UI/Icon';
// import Mask from './UI/Mask';
// import Editor from './UI/Editor';
// import CSSAnimate from './UI/CSSAnimate';
// import Alerts from './UI/Alerts';
// import Button from './UI/Button';
// import Modal from './UI/Modal';
// import CRUD from './Business/CRUD';
// import CRUDDetail from './Business/CRUD/routers/Detail';

/**
 * 主路由配置
 * 
 * path 路由地址
 * component 组件
 * indexRoute 默认显示路由
 * childRoutes 所有子路由
 * NotFound 路由要放到最下面，当所有路由当没匹配到时会进入这个页面
 */
const routesConfig = app => [
  {
    path: '/',
    title: '首页',
    indexRoute: '/login',
    component: Layout,
    childRoutes: [
      Login(app),
      Register(app),
    //   Register(app),

    ]
  },
  // {
  //   path: '/sin',
  //   title: '不知道',
  //   // component: BasicLayout,
  //   component: Layout,
  //   indexRoute: '/sin/login',
  //   childRoutes: [
  //       Login(app),
  //       Page403(),
  //       Page500(),
  //     NotFound()
  //   ]
  // }
];


export default app => createRoutes(app, routesConfig)

