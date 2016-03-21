System.register(["./services/store", 'angular2/core'], function(exports_1, context_1) {
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
    var store_1, core_1;
    var ContactList;
    return {
        setters:[
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let ContactList = class ContactList {
                constructor(_contactStore) {
                    this.selectedId = 0;
                    this.selectedFilter = 0;
                    this.contactStore = _contactStore;
                    this.applyFilter(0);
                    console.log("ContactList");
                }
                get contacts() {
                    return this.contactStore.contacts;
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
                    this.contactStore.remove(contact);
                }
                addNew() {
                    this.contactStore.addNew();
                    this.applyFilter(this.selectedFilter);
                }
            };
            ContactList = __decorate([
                core_1.Component({
                    selector: 'contact-list',
                    templateUrl: 'dist/contact-list.html',
                }),
                core_1.Injectable(), 
                __metadata('design:paramtypes', [store_1.ContactStore])
            ], ContactList);
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

//# sourceMappingURL=data:application/json;base64,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NkM7QUFDN0MsYUFBYTtBQUNiLGFBQWE7QUFDYiwrQkFBK0I7QUFDL0IsNkVBQTZFO0FBQzdFLGFBQWE7QUFDYixhQUFhO0FBQ2IsK0JBQStCO0FBQy9CLDRFQUE0RTtBQUM1RSxhQUFhO0FBQ2IsTUFBTTtBQUNOLEtBQUs7QUFDTCxFQUFFO0FBQ0Ysb0NBQW9DO0FBQ3BDLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0Ysa0NBQWtDO0FBQ2xDLEtBQUs7QUFDTCxFQUFFO0FBQ0Ysb0NBQW9DO0FBQ3BDLHVDQUF1QztBQUN2QyxLQUFLO0FBQ0wsRUFBRTtBQUNGLG9CQUFvQjtBQUNwQixnQ0FBZ0M7QUFDaEMsMkNBQTJDO0FBQzNDLEtBQUs7QUFDTCxJQUFJIiwiZmlsZSI6ImNvbnRhY3QtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGFjdFN0b3JlfSBmcm9tIFwiLi9zZXJ2aWNlcy9zdG9yZVwiO1xyXG5pbXBvcnQge0NvbnRhY3R9IGZyb20gXCIuL3NlcnZpY2VzL2NvbnRhY3RcIjtcclxuXHJcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb250YWN0LWxpc3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkaXN0L2NvbnRhY3QtbGlzdC5odG1sJyxcclxufSlcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0IHtcclxuXHRjb250YWN0U3RvcmU6IENvbnRhY3RTdG9yZTtcclxuXHRzZWxlY3RlZElkOiBudW1iZXIgPSAwO1xyXG5cclxuXHRzZWxlY3RlZEZpbHRlcjogbnVtYmVyID0gMDtcclxuXHRmaWx0ZXJlZENvbnRhY3RzOiBBcnJheTxDb250YWN0PjtcclxuXHJcblx0Y29uc3RydWN0b3IoX2NvbnRhY3RTdG9yZTogQ29udGFjdFN0b3JlKSB7XHJcblx0XHR0aGlzLmNvbnRhY3RTdG9yZSA9IF9jb250YWN0U3RvcmU7XHJcblx0XHR0aGlzLmFwcGx5RmlsdGVyKDApO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiQ29udGFjdExpc3RcIik7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldCBjb250YWN0cygpOiBBcnJheTxDb250YWN0PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb250YWN0U3RvcmUuY29udGFjdHM7XHJcblx0fVxyXG5cclxuXHRhcHBseUZpbHRlcih0eXBlOiBudW1iZXIpOiB2b2lkIHtcclxuXHRcdHN3aXRjaCh0eXBlKSB7XHJcblx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyID0gMDtcclxuXHRcdFx0XHR0aGlzLmZpbHRlcmVkQ29udGFjdHMgPSB0aGlzLmNvbnRhY3RzO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEZpbHRlciA9IDE7XHJcblx0XHRcdFx0dGhpcy5maWx0ZXJlZENvbnRhY3RzID0gdGhpcy5jb250YWN0cy5maWx0ZXIoeCA9PiB4LmNoZWNrZWQgPT0gZmFsc2UpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEZpbHRlciA9IDI7XHJcblx0XHRcdFx0dGhpcy5maWx0ZXJlZENvbnRhY3RzID0gdGhpcy5jb250YWN0cy5maWx0ZXIoeCA9PiB4LmNoZWNrZWQgPT0gdHJ1ZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZWxlY3QoY29udGFjdDogQ29udGFjdCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCJzZWxlY3RlZCBjb250YWN0IFwiICsgY29udGFjdC51c2VybmFtZSArIFwiIFwiICsgY29udGFjdC5pZCk7XHJcblxyXG5cdFx0dGhpcy5zZWxlY3RlZElkID0gY29udGFjdC5pZDtcclxuXHR9XHJcblxyXG5cdHJlbW92ZShjb250YWN0OiBDb250YWN0KTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbnRhY3RTdG9yZS5yZW1vdmUoY29udGFjdCk7XHJcblx0fVxyXG5cclxuXHRhZGROZXcoKTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbnRhY3RTdG9yZS5hZGROZXcoKTtcclxuXHRcdHRoaXMuYXBwbHlGaWx0ZXIodGhpcy5zZWxlY3RlZEZpbHRlcik7XHJcblx0fVxyXG59XHJcbi8vXHJcbi8vIEBpbmplY3QoQ29udGFjdFN0b3JlLCBFdmVudEFnZ3JlZ2F0b3IpXHJcbi8vIGV4cG9ydCBjbGFzcyBDb250YWN0TGlzdCB7XHJcbi8vIFx0Y29udGFjdFN0b3JlOiBDb250YWN0U3RvcmU7XHJcbi8vIFx0c2VsZWN0ZWRJZDogbnVtYmVyID0gMDtcclxuLy9cclxuLy8gXHRzZWxlY3RlZEZpbHRlcjogbnVtYmVyID0gMDtcclxuLy8gXHRmaWx0ZXJlZENvbnRhY3RzOiBBcnJheTxDb250YWN0PjtcclxuLy9cclxuLy8gXHRjb25zdHJ1Y3Rvcihjb250YWN0U3RvcmU6IENvbnRhY3RTdG9yZSwgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuLy8gXHRcdHRoaXMuY29udGFjdFN0b3JlID0gY29udGFjdFN0b3JlO1xyXG4vLyBcdFx0dGhpcy5hcHBseUZpbHRlcigwKTtcclxuLy9cclxuLy8gXHRcdGV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoQ29udGFjdFNlbGVjdGVkLCB4ID0+IHRoaXMuc2VsZWN0KHguY29udGFjdCkpXHJcbi8vIFx0XHRldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKENvbnRhY3RVcGRhdGVkLCB4ID0+IHtcclxuLy8gXHRcdFx0bGV0IGlkID0geC5jb250YWN0LmlkO1xyXG4vLyBcdFx0XHRsZXQgZm91bmQgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcihjID0+IGMuaWQgPT0gaWQpWzBdO1xyXG4vL1xyXG4vLyBcdFx0XHRPYmplY3QuYXNzaWduKGZvdW5kLCB4LmNvbnRhY3QpO1xyXG4vLyBcdFx0fSk7XHJcbi8vIFx0fVxyXG4vL1xyXG4vLyBcdHByaXZhdGUgZ2V0IGNvbnRhY3RzKCk6IEFycmF5PENvbnRhY3Q+IHtcclxuLy8gXHRcdHJldHVybiB0aGlzLmNvbnRhY3RTdG9yZS5jb250YWN0cztcclxuLy8gXHR9XHJcbi8vXHJcbi8vIFx0YXBwbHlGaWx0ZXIodHlwZTogbnVtYmVyKTogdm9pZCB7XHJcbi8vIFx0XHRzd2l0Y2godHlwZSkge1xyXG4vLyBcdFx0XHRjYXNlIDA6XHJcbi8vIFx0XHRcdFx0dGhpcy5zZWxlY3RlZEZpbHRlciA9IDA7XHJcbi8vIFx0XHRcdFx0dGhpcy5maWx0ZXJlZENvbnRhY3RzID0gdGhpcy5jb250YWN0cztcclxuLy8gXHRcdFx0XHRicmVhaztcclxuLy8gXHRcdFx0Y2FzZSAxOlxyXG4vLyBcdFx0XHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXIgPSAxO1xyXG4vLyBcdFx0XHRcdHRoaXMuZmlsdGVyZWRDb250YWN0cyA9IHRoaXMuY29udGFjdHMuZmlsdGVyKHggPT4geC5jaGVja2VkID09IGZhbHNlKTtcclxuLy8gXHRcdFx0XHRicmVhaztcclxuLy8gXHRcdFx0Y2FzZSAyOlxyXG4vLyBcdFx0XHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXIgPSAyO1xyXG4vLyBcdFx0XHRcdHRoaXMuZmlsdGVyZWRDb250YWN0cyA9IHRoaXMuY29udGFjdHMuZmlsdGVyKHggPT4geC5jaGVja2VkID09IHRydWUpO1xyXG4vLyBcdFx0XHRcdGJyZWFrO1xyXG4vLyBcdFx0fVxyXG4vLyBcdH1cclxuLy9cclxuLy8gXHRzZWxlY3QoY29udGFjdDogQ29udGFjdCk6IHZvaWQge1xyXG4vLyBcdFx0Y29uc29sZS5sb2coXCJzZWxlY3RlZCBjb250YWN0IFwiICsgY29udGFjdC51c2VybmFtZSArIFwiIFwiICsgY29udGFjdC5pZCk7XHJcbi8vXHJcbi8vIFx0XHR0aGlzLnNlbGVjdGVkSWQgPSBjb250YWN0LmlkO1xyXG4vLyBcdH1cclxuLy9cclxuLy8gXHRyZW1vdmUoY29udGFjdDogQ29udGFjdCk6IHZvaWQge1xyXG4vLyBcdFx0dGhpcy5jb250YWN0U3RvcmUucmVtb3ZlKGNvbnRhY3QpO1xyXG4vLyBcdH1cclxuLy9cclxuLy8gXHRhZGROZXcoKTogdm9pZCB7XHJcbi8vIFx0XHR0aGlzLmNvbnRhY3RTdG9yZS5hZGROZXcoKTtcclxuLy8gXHRcdHRoaXMuYXBwbHlGaWx0ZXIodGhpcy5zZWxlY3RlZEZpbHRlcik7XHJcbi8vIFx0fVxyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
