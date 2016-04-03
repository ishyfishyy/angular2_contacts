System.register(["./services/store", 'angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var store_1, core_1, router_1;
    var ContactList;
    return {
        setters:[
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let ContactList = class ContactList {
                constructor(_contactStore, _eventEmitter) {
                    this._contactStore = _contactStore;
                    this._eventEmitter = _eventEmitter;
                    this.selectedId = 0;
                    this.selectedFilter = 0;
                    this.applyFilter(0);
                }
                get contacts() {
                    return this._contactStore.contacts;
                }
                applyFilter(type) {
                    switch (type) {
                        case 0:
                            this.selectedFilter = 0;
                            this.filteredContacts = this.contacts;
                            break;
                        case 1:
                            this.selectedFilter = 1;
                            this.filteredContacts = this.contacts.filter(x => x.checked == false);
                            break;
                        case 2:
                            this.selectedFilter = 2;
                            this.filteredContacts = this.contacts.filter(x => x.checked == true);
                            break;
                    }
                }
                select(contact) {
                    console.log("selected contact " + contact.username + " " + contact.id);
                    this.selectedId = contact.id;
                }
                remove(contact) {
                    this._contactStore.remove(contact);
                }
                addNew() {
                    this._contactStore.addNew();
                    this.applyFilter(this.selectedFilter);
                }
            };
            ContactList = __decorate([
                core_1.Component({
                    selector: 'contact-list',
                    templateUrl: 'dist/contact-list.html',
                    directives: [router_1.RouterLink]
                }),
                core_1.Injectable(), 
                __metadata('design:paramtypes', [store_1.ContactStore, (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object])
            ], ContactList);
            exports_1("ContactList", ContactList);
        }
    }
    var _a;
});
//
// @inject(ContactStore, EventAggregator)
// export class ContactList {
// 	contactStore: ContactStore;
// 	selectedId: number = 0;
//
// 	selectedFilter: number = 0;
// 	filteredContacts: Array<Contact>;
//
// 	constructor(contactStore: ContactStore, eventAggregator: EventAggregator) {
// 		this.contactStore = contactStore;
// 		this.applyFilter(0);
//
// 		eventAggregator.subscribe(ContactSelected, x => this.select(x.contact))
// 		eventAggregator.subscribe(ContactUpdated, x => {
// 			let id = x.contact.id;
// 			let found = this.contacts.filter(c => c.id == id)[0];
//
// 			Object.assign(found, x.contact);
// 		});
// 	}
//
// 	private get contacts(): Array<Contact> {
// 		return this.contactStore.contacts;
// 	}
//
// 	applyFilter(type: number): void {
// 		switch(type) {
// 			case 0:
// 				this.selectedFilter = 0;
// 				this.filteredContacts = this.contacts;
// 				break;
// 			case 1:
// 				this.selectedFilter = 1;
// 				this.filteredContacts = this.contacts.filter(x => x.checked == false);
// 				break;
// 			case 2:
// 				this.selectedFilter = 2;
// 				this.filteredContacts = this.contacts.filter(x => x.checked == true);
// 				break;
// 		}
// 	}
//
// 	select(contact: Contact): void {
// 		console.log("selected contact " + contact.username + " " + contact.id);
//
// 		this.selectedId = contact.id;
// 	}
//
// 	remove(contact: Contact): void {
// 		this.contactStore.remove(contact);
// 	}
//
// 	addNew(): void {
// 		this.contactStore.addNew();
// 		this.applyFilter(this.selectedFilter);
// 	}
// }

//# sourceMappingURL=data:application/json;base64,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QUFhO0FBQ2IsK0JBQStCO0FBQy9CLDZDQUE2QztBQUM3QyxhQUFhO0FBQ2IsYUFBYTtBQUNiLCtCQUErQjtBQUMvQiw2RUFBNkU7QUFDN0UsYUFBYTtBQUNiLGFBQWE7QUFDYiwrQkFBK0I7QUFDL0IsNEVBQTRFO0FBQzVFLGFBQWE7QUFDYixNQUFNO0FBQ04sS0FBSztBQUNMLEVBQUU7QUFDRixvQ0FBb0M7QUFDcEMsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRixrQ0FBa0M7QUFDbEMsS0FBSztBQUNMLEVBQUU7QUFDRixvQ0FBb0M7QUFDcEMsdUNBQXVDO0FBQ3ZDLEtBQUs7QUFDTCxFQUFFO0FBQ0Ysb0JBQW9CO0FBQ3BCLGdDQUFnQztBQUNoQywyQ0FBMkM7QUFDM0MsS0FBSztBQUNMLElBQUkiLCJmaWxlIjoiY29udGFjdC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWN0U3RvcmV9IGZyb20gXCIuL3NlcnZpY2VzL3N0b3JlXCI7XHJcbmltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vc2VydmljZXMvY29udGFjdFwiO1xyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSAncnhqcy9PYnNlcnZlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY29udGFjdC1saXN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnZGlzdC9jb250YWN0LWxpc3QuaHRtbCcsXHJcblx0ZGlyZWN0aXZlczogW1JvdXRlckxpbmtdXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdCB7XHJcblx0c2VsZWN0ZWRJZDogbnVtYmVyID0gMDtcclxuXHJcblx0c2VsZWN0ZWRGaWx0ZXI6IG51bWJlciA9IDA7XHJcblx0ZmlsdGVyZWRDb250YWN0czogQXJyYXk8Q29udGFjdD47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRhY3RTdG9yZTogQ29udGFjdFN0b3JlLCBwcml2YXRlIF9ldmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcikge1xyXG5cdFx0dGhpcy5hcHBseUZpbHRlcigwKTtcclxuXHJcblxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXQgY29udGFjdHMoKTogQXJyYXk8Q29udGFjdD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbnRhY3RTdG9yZS5jb250YWN0cztcclxuXHR9XHJcblxyXG5cdGFwcGx5RmlsdGVyKHR5cGU6IG51bWJlcik6IHZvaWQge1xyXG5cdFx0c3dpdGNoKHR5cGUpIHtcclxuXHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXIgPSAwO1xyXG5cdFx0XHRcdHRoaXMuZmlsdGVyZWRDb250YWN0cyA9IHRoaXMuY29udGFjdHM7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyID0gMTtcclxuXHRcdFx0XHR0aGlzLmZpbHRlcmVkQ29udGFjdHMgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguY2hlY2tlZCA9PSBmYWxzZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyID0gMjtcclxuXHRcdFx0XHR0aGlzLmZpbHRlcmVkQ29udGFjdHMgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguY2hlY2tlZCA9PSB0cnVlKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNlbGVjdChjb250YWN0OiBDb250YWN0KTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcInNlbGVjdGVkIGNvbnRhY3QgXCIgKyBjb250YWN0LnVzZXJuYW1lICsgXCIgXCIgKyBjb250YWN0LmlkKTtcclxuXHJcblx0XHR0aGlzLnNlbGVjdGVkSWQgPSBjb250YWN0LmlkO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlKGNvbnRhY3Q6IENvbnRhY3QpOiB2b2lkIHtcclxuXHRcdHRoaXMuX2NvbnRhY3RTdG9yZS5yZW1vdmUoY29udGFjdCk7XHJcblx0fVxyXG5cclxuXHRhZGROZXcoKTogdm9pZCB7XHJcblx0XHR0aGlzLl9jb250YWN0U3RvcmUuYWRkTmV3KCk7XHJcblx0XHR0aGlzLmFwcGx5RmlsdGVyKHRoaXMuc2VsZWN0ZWRGaWx0ZXIpO1xyXG5cdH1cclxufVxyXG4vL1xyXG4vLyBAaW5qZWN0KENvbnRhY3RTdG9yZSwgRXZlbnRBZ2dyZWdhdG9yKVxyXG4vLyBleHBvcnQgY2xhc3MgQ29udGFjdExpc3Qge1xyXG4vLyBcdGNvbnRhY3RTdG9yZTogQ29udGFjdFN0b3JlO1xyXG4vLyBcdHNlbGVjdGVkSWQ6IG51bWJlciA9IDA7XHJcbi8vXHJcbi8vIFx0c2VsZWN0ZWRGaWx0ZXI6IG51bWJlciA9IDA7XHJcbi8vIFx0ZmlsdGVyZWRDb250YWN0czogQXJyYXk8Q29udGFjdD47XHJcbi8vXHJcbi8vIFx0Y29uc3RydWN0b3IoY29udGFjdFN0b3JlOiBDb250YWN0U3RvcmUsIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yKSB7XHJcbi8vIFx0XHR0aGlzLmNvbnRhY3RTdG9yZSA9IGNvbnRhY3RTdG9yZTtcclxuLy8gXHRcdHRoaXMuYXBwbHlGaWx0ZXIoMCk7XHJcbi8vXHJcbi8vIFx0XHRldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKENvbnRhY3RTZWxlY3RlZCwgeCA9PiB0aGlzLnNlbGVjdCh4LmNvbnRhY3QpKVxyXG4vLyBcdFx0ZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShDb250YWN0VXBkYXRlZCwgeCA9PiB7XHJcbi8vIFx0XHRcdGxldCBpZCA9IHguY29udGFjdC5pZDtcclxuLy8gXHRcdFx0bGV0IGZvdW5kID0gdGhpcy5jb250YWN0cy5maWx0ZXIoYyA9PiBjLmlkID09IGlkKVswXTtcclxuLy9cclxuLy8gXHRcdFx0T2JqZWN0LmFzc2lnbihmb3VuZCwgeC5jb250YWN0KTtcclxuLy8gXHRcdH0pO1xyXG4vLyBcdH1cclxuLy9cclxuLy8gXHRwcml2YXRlIGdldCBjb250YWN0cygpOiBBcnJheTxDb250YWN0PiB7XHJcbi8vIFx0XHRyZXR1cm4gdGhpcy5jb250YWN0U3RvcmUuY29udGFjdHM7XHJcbi8vIFx0fVxyXG4vL1xyXG4vLyBcdGFwcGx5RmlsdGVyKHR5cGU6IG51bWJlcik6IHZvaWQge1xyXG4vLyBcdFx0c3dpdGNoKHR5cGUpIHtcclxuLy8gXHRcdFx0Y2FzZSAwOlxyXG4vLyBcdFx0XHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXIgPSAwO1xyXG4vLyBcdFx0XHRcdHRoaXMuZmlsdGVyZWRDb250YWN0cyA9IHRoaXMuY29udGFjdHM7XHJcbi8vIFx0XHRcdFx0YnJlYWs7XHJcbi8vIFx0XHRcdGNhc2UgMTpcclxuLy8gXHRcdFx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyID0gMTtcclxuLy8gXHRcdFx0XHR0aGlzLmZpbHRlcmVkQ29udGFjdHMgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguY2hlY2tlZCA9PSBmYWxzZSk7XHJcbi8vIFx0XHRcdFx0YnJlYWs7XHJcbi8vIFx0XHRcdGNhc2UgMjpcclxuLy8gXHRcdFx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyID0gMjtcclxuLy8gXHRcdFx0XHR0aGlzLmZpbHRlcmVkQ29udGFjdHMgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguY2hlY2tlZCA9PSB0cnVlKTtcclxuLy8gXHRcdFx0XHRicmVhaztcclxuLy8gXHRcdH1cclxuLy8gXHR9XHJcbi8vXHJcbi8vIFx0c2VsZWN0KGNvbnRhY3Q6IENvbnRhY3QpOiB2b2lkIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgY29udGFjdCBcIiArIGNvbnRhY3QudXNlcm5hbWUgKyBcIiBcIiArIGNvbnRhY3QuaWQpO1xyXG4vL1xyXG4vLyBcdFx0dGhpcy5zZWxlY3RlZElkID0gY29udGFjdC5pZDtcclxuLy8gXHR9XHJcbi8vXHJcbi8vIFx0cmVtb3ZlKGNvbnRhY3Q6IENvbnRhY3QpOiB2b2lkIHtcclxuLy8gXHRcdHRoaXMuY29udGFjdFN0b3JlLnJlbW92ZShjb250YWN0KTtcclxuLy8gXHR9XHJcbi8vXHJcbi8vIFx0YWRkTmV3KCk6IHZvaWQge1xyXG4vLyBcdFx0dGhpcy5jb250YWN0U3RvcmUuYWRkTmV3KCk7XHJcbi8vIFx0XHR0aGlzLmFwcGx5RmlsdGVyKHRoaXMuc2VsZWN0ZWRGaWx0ZXIpO1xyXG4vLyBcdH1cclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
