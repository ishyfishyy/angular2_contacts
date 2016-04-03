import {Contact} from "./services/contact";
import {ContactStore} from "./services/store";

import {Component, Injectable} from 'angular2/core';
import {RouteParams, CanDeactivate, OnActivate, ComponentInstruction} from 'angular2/router';

@Component({
    selector: 'contact-detail',
    templateUrl: 'dist/contact-detail.html'
})

@Injectable()
export class ContactDetail implements OnActivate, CanDeactivate  {
	selectedContact: Contact;
	originalContact: Contact;

    constructor(private _contactStore: ContactStore, private _routeParams: RouteParams) {
    }

	routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
		this._contactStore.find(this._routeParams.get('id')).then((contact: Contact) => {
			this.selectedContact = JSON.parse(JSON.stringify(contact));
			this.originalContact = contact;

			//this.eventAggregator.publish(new ContactSelected(contact));
		});
    }

	routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
		if(!this.areEqual(this.originalContact, this.selectedContact)){
			let result = confirm('You have unsaved changes. Are you sure you wish to leave?');

			if(!result){
				//this.eventAggregator.publish(new ContactSelected(this.selectedContact));
			}
			return result;
		}
		return true;
    }

	save(): void {
		this._contactStore.save(this.selectedContact).then((contact: Contact) => {
			this.selectedContact = JSON.parse(JSON.stringify(this.selectedContact));
			this.originalContact = contact;

			//this.eventAggregator.publish(new ContactUpdated(contact));
		});
	}

	get canSave(){
		return this.selectedContact.username && this.selectedContact.email;
	}

	private areEqual(obj1, obj2): boolean {
		return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]));
	};
}
// import {inject} from "aurelia-dependency-injection";
// import {EventAggregator} from "aurelia-event-aggregator";
// import {RouterConfiguration} from "aurelia-router";
//
// @inject(ContactStore, EventAggregator)
// export class ContactDetail {
// 	contactStore: ContactStore;
// 	eventAggregator: EventAggregator;
// 	routeConfig: RouterConfiguration;
//
// 	selectedContact: Contact;
// 	originalContact: Contact;
//
// 	constructor(contactStore: ContactStore, eventAggregator: EventAggregator) {
// 		this.contactStore = contactStore;
// 		this.eventAggregator = eventAggregator;
// 	}
//
// 	activate(params: any, routeConfig: RouterConfiguration) {
// 		this.routeConfig = routeConfig;
//
// 		return this.contactStore.find(params.id).then((contact: Contact) => {
// 			this.selectedContact = JSON.parse(JSON.stringify(contact));
// 			this.originalContact = contact;
//
// 			this.eventAggregator.publish(new ContactSelected(contact));
// 		});
// 	}
//
// 	save(): void {
// 		this.contactStore.save(this.selectedContact).then((contact: Contact) => {
// 			this.selectedContact = JSON.parse(JSON.stringify(this.selectedContact));
// 			this.originalContact = contact;
//
// 			this.eventAggregator.publish(new ContactUpdated(contact));
// 		});
// 	}
//
// 	get canSave(){
// 		return this.selectedContact.username && this.selectedContact.email;
// 	}
//
// 	canDeactivate(){
// 		if(!this.areEqual(this.originalContact, this.selectedContact)){
// 			let result = confirm('You have unsaved changes. Are you sure you wish to leave?');
//
// 			if(!result){
// 				this.eventAggregator.publish(new ContactSelected(this.selectedContact));
// 			}
// 			return result;
// 		}
//
// 		return true;
// 	}
//
// 	private areEqual(obj1, obj2): boolean {
// 		return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]));
// 	};
// }
