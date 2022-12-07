import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';
import { MyApp } from './my-app';

Aurelia
    .register(
        RouterConfiguration.customize({
            // Enable pushState routing
            useUrlFragmentHash: false,
        })
    )
    .app(MyApp).start();
