import { lazy } from 'react';

import { IRouteWithComponent } from './types';

export enum Routes {
  Login = '/login',
  Testing = '/testing',
  Result = '/result',
  Home = '/',
}

export const routesWithComponent: IRouteWithComponent<Routes>[] = [
  {
    component: lazy(() => import('../pages/home')),
    path: Routes.Home,
  },
  {
    component: lazy(() => import('../pages/login')),
    path: Routes.Login,
  },
  {
    component: lazy(() => import('../pages/test')),
    path: Routes.Testing,
  },
  {
    component: lazy(() => import('../pages/result')),
    path: Routes.Result,
  },
];
