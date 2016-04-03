import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavBar} from './nav-bar';
import {ContactList} from './contact-list';
import {ContactDetail} from './contact-detail';
import {NoSelection} from './no-selection';

@Component({
    selector: 'contacts-app',
    templateUrl: 'dist/app.html',
    directives:  [NavBar, ContactList, ContactDetail, ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', component: NoSelection, name: 'No-selection' },
    { path: '/contacts/:id', component: ContactDetail, name: 'Contacts' }
])

export class App {
}
