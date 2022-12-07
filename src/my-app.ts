

import { IRouteableComponent, IRoute, IRouter } from '@aurelia/router';

export class MyApp implements IRouteableComponent {

  constructor(@IRouter readonly router: IRouter) {
  }

  static routes: IRoute[] = [
    {
      path: '',
      component: () => import('./components/home-page'),
      id: 'home',
      title: 'Home'
    },

    {
      path: 'user',
      component: () => import('./components/user-dashboard'),
      id: 'dashboard',
      title: 'Dashboard'
    }

  ];

}

