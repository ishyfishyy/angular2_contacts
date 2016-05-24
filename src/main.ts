import 'zone.js';
import 'zone.js/dist/long-stack-trace-zone';
import 'reflect-metadata';

import {bootstrap} from 'angular2/platform/browser';
import {bind} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';


import {App} from './app';

import {ContactStore} from "./services/store";

bootstrap(App, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	ContactStore,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
	success => console.log("Angular 2 Bootstrap successful"),
	error => console.log(error)
);