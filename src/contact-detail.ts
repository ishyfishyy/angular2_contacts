import {Contact} from "./services/contact";
import {ContactStore} from "./services/store";

import {Component} from 'angular2/core';
import {RouteParams, CanDeactivate, OnActivate, ComponentInstruction} from 'angular2/router';

@Component({
    selector: 'contact-detail',
    templateUrl: 'dist/contact-detail.html'
})
export class ContactDetail implements OnActivate, CanDeactivate  {
	selectedContact: Contact;
	originalContact: Contact;

    constructor(private _contactStore: ContactStore, private _routeParams: RouteParams) {
    }

	routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
		this._contactStore.find(this._routeParams.get('id')).then((contact: Contact) => {
			this.selectedContact = JSON.parse(JSON.stringify(contact));
			this.originalContact = contact;
		});
    }

	routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
		if(!this.areEqual(this.originalContact, this.selectedContact)){
			return confirm('You have unsaved changes. Are you sure you wish to leave?');
		}
		return true;
    }

	save(): void {
		this._contactStore.save(this.selectedContact).then((contact: Contact) => {
			this.selectedContact = JSON.parse(JSON.stringify(this.selectedContact));
			this.originalContact = contact;
		});
	}

	get canSave(){
		return this.selectedContact.username && this.selectedContact.email;
	}

	private areEqual(obj1, obj2): boolean {
		return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]));
	}
}