import 'zone.js';
import 'zone.js/dist/long-stack-trace-zone';
import 'reflect-metadata';

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {App} from './app';

import {ContactStore} from "./services/store";

bootstrap(App, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	ContactStore
]).then(
	success => console.log("Angular 2 Bootstrap successful"),
	error => console.log(error)
);
