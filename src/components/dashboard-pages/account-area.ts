import { IRouteableComponent, IRouter } from '@aurelia/router';

export class AccountArea implements IRouteableComponent {
    constructor(@IRouter readonly router: IRouter) {
    }

    back() {
        this.router.back();
    }
}