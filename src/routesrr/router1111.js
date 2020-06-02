// import { Router, Route, Switch, IndexRoute } from 'dva/router';
// // import Home from '../pages/home.js'
// import User from '../pages/user.js'
// import React from 'react'
// import App from '../index'
import Header from '../layout/header'
import Footer from '../layout/footer'
import Loading from '../pages/special/loading'
import NotFound from '../pages/special/404'


import React from 'react';
import { Route, Switch, routerRedux, Redirect} from 'dva/router';
// import { Route, Switch, routerRedux } from 'dva';
// import { router } from 'dva';
// const {Route, Switch, routerRedux} = router
// import {dynamic} from 'dva'
import dynamic from 'dva/dynamic';


const { ConnectedRouter } = routerRedux
// import User from '../pages/user/user'



function RouterConfig({ history, app }) {
  const routes = [
    {
      path: "/user",
      // layout: '',
      component: () => import('../pages/user/user.js'),
      models: () => [
        import('../pages/user/model.js'),
          ],
      name: 'User'
    },
    {
      path: "/",
      component: () => import('../pages/home/home'),
      models:() => [
        import('../pages/home/model.js'),
          ],
      // LoadingComponent: Loading,
      name: 'Home'
    },
    {
      path: "/login",
      component: () => import('../pages/login/components/index.js'),
      models:() => [
        import('../pages/login/model/index'),
          ],
      // LoadingComponent: Loading,
      name: 'Login'
    },
    {
      path: "/mapform",
      component: () => import('../pages/formm/index'),
      models:() => [
        import('../pages/formm/model'),
          ],
      // LoadingComponent: Loading,
      name: 'mapform'
    },
    {
      path: "/parent-son",
      component: () => import('../pages/parent-son/parent-son'),
      // LoadingComponent: Loading,
      name: 'parent-son'
    },
    {
      path: "/consumer",
      component: () => import('../pages/consumer/consumer'),
      name: 'consumer'
    },
    {
      path: "/form",
      component: () => import('../pages/form/components/form'),
      // LoadingComponent: Loading,
      name: 'form'
    },
    {
      path: "/context",
      component: () => import('../pages/context/index'),
      // LoadingComponent: Loading,
      name: 'Context'
    },
    {
      path: "/table",
      // exact,
      component: () => import('../pages/table/index'),
      // LoadingComponent: Loading,
      name: 'table'
    },
    {
      path: "/table-f",
      // exact,
      component: () => import('../pages/table/filterTable'),
      // LoadingComponent: Loading,
      name: 'tablefilter'
    },
    {
      path: "/table-ajax",
      // exact,
      component: () => import('../pages/table/ajaxTable'),
      // LoadingComponent: Loading,
      name: 'tableajax'
    },
    {
      path: "/table-edit",
      // exact,
      component: () => import('../pages/table/editTable'),
      // LoadingComponent: Loading,
      name: 'tableedit'
    },
    {
      path: '/404',
      component: () => import('../pages/special/404'),
      
      name: 'Not'
    },
    {
      path: '/cascader',
      component: () => import('../pages/cascader/cascader_dyc'),
      
      name: 'cascader'
    }
  ];
  // const UserPageComponent = dynamic({
  //   app,
  //       models: () => [
  //           import('../pages/user/model'),
  //         ],
  //         component: () => import('../pages/user/user'),
  // });
 
  return (
    <ConnectedRouter history={history} app={app}>
      <Switch>
        <React.Fragment>
          <Header />
          {
            routes.map(({ path, name, models, component , ...arg}) => {
              const Component = dynamic({ app,models,component  })
              return (
                <Route path={path} key={name} exact 
                render={(props) => <Component {...props}/>} />
              )
            })
         
          }
          
            {/* <Route path='/user' key='user' exact component={User} /> */}
          <Footer />

        </React.Fragment>
      </Switch>
    </ConnectedRouter>
  )
}

export default RouterConfig;


