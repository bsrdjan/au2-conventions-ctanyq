import { IRouteableComponent, IRouter } from '@aurelia/router';

export class DashboardHome implements IRouteableComponent {
    constructor(@IRouter readonly router: IRouter) {
    }

    back() {
        this.router.back();
    }
}