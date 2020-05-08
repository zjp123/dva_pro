import { dynamicWrapper, createRoute } from '../../utils/core';

const routesConfig = (app) => ({
  path: '/login',
  title: 'Login',
  component: dynamicWrapper(app, [import('./model/index')], () => import('./components/index'))
});

export default (app) => createRoute(app, routesConfig);
