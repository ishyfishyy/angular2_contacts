import {Component} from 'angular2/core';
import {RouterOutlet, RouteConfig, RouteDefinition} from 'angular2/router';

import {NavBar} from './nav-bar';
import {ContactList} from './contact-list';

@Component({
    selector: 'contacts-app',
    templateUrl: 'dist/app.html',
    directives:  [NavBar, ContactList]
})

export class App {
}
