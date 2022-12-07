import { IRouteableComponent, IRoute } from '@aurelia/router';

export class UserDashboard implements IRouteableComponent {

    static routes: IRoute[] = [
        {
            path: ['', 'home'],
            component: () => import('./dashboard-pages/dashboard-home'),
            id: 'dashboard-home',
            title: 'Home'
        },
        {
            path: 'account',
            component: () => import('./dashboard-pages/account-area'),
            id: 'account-area',
            title: 'Account'
        }
    ];
}