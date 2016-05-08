System.register(["./services/store", "./converters/to-upper-case-converter", 'angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var store_1, to_upper_case_converter_1, core_1, router_1;
    var ContactList;
    return {
        setters:[
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (to_upper_case_converter_1_1) {
                to_upper_case_converter_1 = to_upper_case_converter_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ContactList = (function () {
                function ContactList(_contactStore) {
                    this._contactStore = _contactStore;
                    this.selectedId = 0;
                    this.selectedFilter = 0;
                    this.applyFilter(0);
                }
                ContactList.prototype.checked = function () {
                    console.log("checked");
                    this._contactStore.updateStorage();
                };
                Object.defineProperty(ContactList.prototype, "contacts", {
                    get: function () {
                        return this._contactStore.contacts;
                    },
                    enumerable: true,
                    configurable: true
                });
                ContactList.prototype.applyFilter = function (type) {
                    switch (type) {
                        case 0:
                            this.selectedFilter = 0;
                            this.filteredContacts = this.contacts;
                            break;
                        case 1:
                            this.selectedFilter = 1;
                            this.filteredContacts = this.contacts.filter(function (x) { return x.checked == false; });
                            break;
                        case 2:
                            this.selectedFilter = 2;
                            this.filteredContacts = this.contacts.filter(function (x) { return x.checked == true; });
                            break;
                    }
                    console.log("HEY!");
                };
                ContactList.prototype.select = function (contact) {
                    console.log("selected contact " + contact.username + " " + contact.id);
                    this.selectedId = contact.id;
                };
                ContactList.prototype.remove = function (contact) {
                    this._contactStore.remove(contact);
                };
                ContactList.prototype.addNew = function () {
                    this._contactStore.addNew();
                    this.applyFilter(this.selectedFilter);
                };
                ContactList = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        templateUrl: 'dist/contact-list.html',
                        directives: [router_1.RouterLink],
                        pipes: [to_upper_case_converter_1.ToUpperCasePipe]
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [store_1.ContactStore])
                ], ContactList);
                return ContactList;
            }());
            exports_1("ContactList", ContactList);
        }
    }
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

//# sourceMappingURL=data:application/json;base64,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K0JBQStCO0FBQy9CLHFDQUFxQztBQUNyQyxFQUFFO0FBQ0YsK0VBQStFO0FBQy9FLHNDQUFzQztBQUN0Qyx5QkFBeUI7QUFDekIsRUFBRTtBQUNGLDRFQUE0RTtBQUM1RSxxREFBcUQ7QUFDckQsNEJBQTRCO0FBQzVCLDJEQUEyRDtBQUMzRCxFQUFFO0FBQ0Ysc0NBQXNDO0FBQ3RDLFFBQVE7QUFDUixLQUFLO0FBQ0wsRUFBRTtBQUNGLDRDQUE0QztBQUM1Qyx1Q0FBdUM7QUFDdkMsS0FBSztBQUNMLEVBQUU7QUFDRixxQ0FBcUM7QUFDckMsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYiwrQkFBK0I7QUFDL0IsNkNBQTZDO0FBQzdDLGFBQWE7QUFDYixhQUFhO0FBQ2IsK0JBQStCO0FBQy9CLDZFQUE2RTtBQUM3RSxhQUFhO0FBQ2IsYUFBYTtBQUNiLCtCQUErQjtBQUMvQiw0RUFBNEU7QUFDNUUsYUFBYTtBQUNiLE1BQU07QUFDTixLQUFLO0FBQ0wsRUFBRTtBQUNGLG9DQUFvQztBQUNwQyw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLGtDQUFrQztBQUNsQyxLQUFLO0FBQ0wsRUFBRTtBQUNGLG9DQUFvQztBQUNwQyx1Q0FBdUM7QUFDdkMsS0FBSztBQUNMLEVBQUU7QUFDRixvQkFBb0I7QUFDcEIsZ0NBQWdDO0FBQ2hDLDJDQUEyQztBQUMzQyxLQUFLO0FBQ0wsSUFBSSIsImZpbGUiOiJjb250YWN0LWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhY3RTdG9yZX0gZnJvbSBcIi4vc2VydmljZXMvc3RvcmVcIjtcclxuaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9zZXJ2aWNlcy9jb250YWN0XCI7XHJcbmltcG9ydCB7VG9VcHBlckNhc2VQaXBlfSBmcm9tIFwiLi9jb252ZXJ0ZXJzL3RvLXVwcGVyLWNhc2UtY29udmVydGVyXCJcclxuXHJcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlckxpbmt9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gJ3J4anMvT2JzZXJ2ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvbnRhY3QtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rpc3QvY29udGFjdC1saXN0Lmh0bWwnLFxyXG5cdGRpcmVjdGl2ZXM6IFtSb3V0ZXJMaW5rXSxcclxuXHRwaXBlczogW1RvVXBwZXJDYXNlUGlwZV1cclxufSlcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0IHtcclxuXHRzZWxlY3RlZElkOiBudW1iZXIgPSAwO1xyXG5cclxuXHRzZWxlY3RlZEZpbHRlcjogbnVtYmVyID0gMDtcclxuXHRmaWx0ZXJlZENvbnRhY3RzOiBBcnJheTxDb250YWN0PjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfY29udGFjdFN0b3JlOiBDb250YWN0U3RvcmUpIHtcclxuXHRcdHRoaXMuYXBwbHlGaWx0ZXIoMCk7XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGNoZWNrZWQoKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcImNoZWNrZWRcIik7XHJcblx0XHR0aGlzLl9jb250YWN0U3RvcmUudXBkYXRlU3RvcmFnZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXQgY29udGFjdHMoKTogQXJyYXk8Q29udGFjdD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbnRhY3RTdG9yZS5jb250YWN0cztcclxuXHR9XHJcblxyXG5cdGFwcGx5RmlsdGVyKHR5cGU6IG51bWJlcik6IHZvaWQge1xyXG5cdFx0c3dpdGNoKHR5cGUpIHtcclxuXHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXIgPSAwO1xyXG5cdFx0XHRcdHRoaXMuZmlsdGVyZWRDb250YWN0cyA9IHRoaXMuY29udGFjdHM7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyID0gMTtcclxuXHRcdFx0XHR0aGlzLmZpbHRlcmVkQ29udGFjdHMgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguY2hlY2tlZCA9PSBmYWxzZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyID0gMjtcclxuXHRcdFx0XHR0aGlzLmZpbHRlcmVkQ29udGFjdHMgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguY2hlY2tlZCA9PSB0cnVlKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKFwiSEVZIVwiKTtcclxuXHR9XHJcblxyXG5cdHNlbGVjdChjb250YWN0OiBDb250YWN0KTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcInNlbGVjdGVkIGNvbnRhY3QgXCIgKyBjb250YWN0LnVzZXJuYW1lICsgXCIgXCIgKyBjb250YWN0LmlkKTtcclxuXHJcblx0XHR0aGlzLnNlbGVjdGVkSWQgPSBjb250YWN0LmlkO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlKGNvbnRhY3Q6IENvbnRhY3QpOiB2b2lkIHtcclxuXHRcdHRoaXMuX2NvbnRhY3RTdG9yZS5yZW1vdmUoY29udGFjdCk7XHJcblx0fVxyXG5cclxuXHRhZGROZXcoKTogdm9pZCB7XHJcblx0XHR0aGlzLl9jb250YWN0U3RvcmUuYWRkTmV3KCk7XHJcblx0XHR0aGlzLmFwcGx5RmlsdGVyKHRoaXMuc2VsZWN0ZWRGaWx0ZXIpO1xyXG5cdH1cclxufVxyXG4vL1xyXG4vLyBAaW5qZWN0KENvbnRhY3RTdG9yZSwgRXZlbnRBZ2dyZWdhdG9yKVxyXG4vLyBleHBvcnQgY2xhc3MgQ29udGFjdExpc3Qge1xyXG4vLyBcdGNvbnRhY3RTdG9yZTogQ29udGFjdFN0b3JlO1xyXG4vLyBcdHNlbGVjdGVkSWQ6IG51bWJlciA9IDA7XHJcbi8vXHJcbi8vIFx0c2VsZWN0ZWRGaWx0ZXI6IG51bWJlciA9IDA7XHJcbi8vIFx0ZmlsdGVyZWRDb250YWN0czogQXJyYXk8Q29udGFjdD47XHJcbi8vXHJcbi8vIFx0Y29uc3RydWN0b3IoY29udGFjdFN0b3JlOiBDb250YWN0U3RvcmUsIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yKSB7XHJcbi8vIFx0XHR0aGlzLmNvbnRhY3RTdG9yZSA9IGNvbnRhY3RTdG9yZTtcclxuLy8gXHRcdHRoaXMuYXBwbHlGaWx0ZXIoMCk7XHJcbi8vXHJcbi8vIFx0XHRldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKENvbnRhY3RTZWxlY3RlZCwgeCA9PiB0aGlzLnNlbGVjdCh4LmNvbnRhY3QpKVxyXG4vLyBcdFx0ZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShDb250YWN0VXBkYXRlZCwgeCA9PiB7XHJcbi8vIFx0XHRcdGxldCBpZCA9IHguY29udGFjdC5pZDtcclxuLy8gXHRcdFx0bGV0IGZvdW5kID0gdGhpcy5jb250YWN0cy5maWx0ZXIoYyA9PiBjLmlkID09IGlkKVswXTtcclxuLy9cclxuLy8gXHRcdFx0T2JqZWN0LmFzc2lnbihmb3VuZCwgeC5jb250YWN0KTtcclxuLy8gXHRcdH0pO1xyXG4vLyBcdH1cclxuLy9cclxuLy8gXHRwcml2YXRlIGdldCBjb250YWN0cygpOiBBcnJheTxDb250YWN0PiB7XHJcbi8vIFx0XHRyZXR1cm4gdGhpcy5jb250YWN0U3RvcmUuY29udGFjdHM7XHJcbi8vIFx0fVxyXG4vL1xyXG4vLyBcdGFwcGx5RmlsdGVyKHR5cGU6IG51bWJlcik6IHZvaWQge1xyXG4vLyBcdFx0c3dpdGNoKHR5cGUpIHtcclxuLy8gXHRcdFx0Y2FzZSAwOlxyXG4vLyBcdFx0XHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXIgPSAwO1xyXG4vLyBcdFx0XHRcdHRoaXMuZmlsdGVyZWRDb250YWN0cyA9IHRoaXMuY29udGFjdHM7XHJcbi8vIFx0XHRcdFx0YnJlYWs7XHJcbi8vIFx0XHRcdGNhc2UgMTpcclxuLy8gXHRcdFx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyID0gMTtcclxuLy8gXHRcdFx0XHR0aGlzLmZpbHRlcmVkQ29udGFjdHMgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguY2hlY2tlZCA9PSBmYWxzZSk7XHJcbi8vIFx0XHRcdFx0YnJlYWs7XHJcbi8vIFx0XHRcdGNhc2UgMjpcclxuLy8gXHRcdFx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyID0gMjtcclxuLy8gXHRcdFx0XHR0aGlzLmZpbHRlcmVkQ29udGFjdHMgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguY2hlY2tlZCA9PSB0cnVlKTtcclxuLy8gXHRcdFx0XHRicmVhaztcclxuLy8gXHRcdH1cclxuLy8gXHR9XHJcbi8vXHJcbi8vIFx0c2VsZWN0KGNvbnRhY3Q6IENvbnRhY3QpOiB2b2lkIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgY29udGFjdCBcIiArIGNvbnRhY3QudXNlcm5hbWUgKyBcIiBcIiArIGNvbnRhY3QuaWQpO1xyXG4vL1xyXG4vLyBcdFx0dGhpcy5zZWxlY3RlZElkID0gY29udGFjdC5pZDtcclxuLy8gXHR9XHJcbi8vXHJcbi8vIFx0cmVtb3ZlKGNvbnRhY3Q6IENvbnRhY3QpOiB2b2lkIHtcclxuLy8gXHRcdHRoaXMuY29udGFjdFN0b3JlLnJlbW92ZShjb250YWN0KTtcclxuLy8gXHR9XHJcbi8vXHJcbi8vIFx0YWRkTmV3KCk6IHZvaWQge1xyXG4vLyBcdFx0dGhpcy5jb250YWN0U3RvcmUuYWRkTmV3KCk7XHJcbi8vIFx0XHR0aGlzLmFwcGx5RmlsdGVyKHRoaXMuc2VsZWN0ZWRGaWx0ZXIpO1xyXG4vLyBcdH1cclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
