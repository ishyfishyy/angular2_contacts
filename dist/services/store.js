System.register(["./contact", "./constants", 'angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var contact_1, constants_1, core_1, http_1;
    var ContactStore;
    return {
        setters:[
            function (contact_1_1) {
                contact_1 = contact_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            let ContactStore = class ContactStore {
                constructor(_http) {
                    localStorage.clear();
                    this.contacts = JSON.parse(localStorage.getItem(constants_1.Constants.STORAGE_CONTACTS));
                    if (!this.contacts) {
                        _http.get('https://api.github.com/users') // THIS: HTTP
                            .subscribe(users => {
                            users = users.json().splice(5);
                            this.contacts = users.map((user) => {
                                let contact = new contact_1.Contact();
                                contact.id = user.id;
                                contact.username = user.login;
                                contact.email = user.login + "@email.com";
                                contact.avatarUrl = user.avatar_url;
                                contact.description = user.type;
                                contact.checked = false;
                                return contact;
                            });
                        }, err => {
                            console.log(err);
                        }, () => {
                            this.updateStorage();
                            this.applyObservers();
                            console.log(this.contacts);
                        });
                    }
                    console.log(this.contacts);
                }
                applyObservers() {
                    // TODO:
                }
                addNew() {
                    let contact = new contact_1.Contact();
                    contact.id = this.getId();
                    contact.username = "username";
                    contact.email = "e-mail";
                    //this.observerLocator.getObserver(contact, 'checked').subscribe(() => this.updateStorage());
                    this.contacts.push(contact);
                    this.updateStorage();
                }
                add(contact) {
                    this.contacts.push(contact);
                    this.updateStorage();
                }
                remove(contact) {
                    this.contacts.splice(this.contacts.indexOf(contact), 1);
                    this.updateStorage();
                }
                save(contact) {
                    return new Promise(executor => {
                        let instance = JSON.parse(JSON.stringify(contact));
                        let found = this.contacts.filter(x => x.id == contact.id)[0];
                        if (found) {
                            let index = this.contacts.indexOf(found);
                            Object.assign(this.contacts[index], instance);
                        }
                        else {
                            instance.id = this.getId();
                            this.contacts.push(instance);
                        }
                        this.updateStorage();
                        executor(instance);
                    });
                }
                find(id) {
                    console.log("find request?");
                    return new Promise(executor => {
                        let found = this.contacts.filter(x => x.id == id)[0];
                        executor(found);
                    });
                    //return this.contacts.filter(x => x.id == id)[0];
                }
                getId() {
                    return Math.round(Math.random() * 100000);
                }
                updateStorage() {
                    localStorage.setItem(constants_1.Constants.STORAGE_CONTACTS, JSON.stringify(this.contacts));
                    console.log("update storage");
                }
            };
            ContactStore = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
            ], ContactStore);
            exports_1("ContactStore", ContactStore);
        }
    }
    var _a;
});
//
// @inject(HttpClient, ObserverLocator)
// export class ContactStore {
// 	contacts: Array<Contact>;
//
// 	observerLocator: ObserverLocator;
//
// 	constructor(private http: HttpClient, observerLocator: ObserverLocator) {
// 		this.observerLocator = observerLocator;
//
// 		//localStorage.clear();
// 		this.contacts = JSON.parse(localStorage.getItem(Constants.STORAGE_CONTACTS));
//
// 		if (!this.contacts) {
// 			http.configure(config => {
// 				config.useStandardConfiguration().withBaseUrl('https://api.github.com/');
// 			});
// 			http.fetch('users')
// 				.then(response => response.json())
// 				.then(users => {
// 					users.splice(5);
// 					this.contacts = users.map((user: { id: number, login: string, avatar_url: string, type: string }) => {
// 						let contact = new Contact();
// 						contact.id = user.id;
// 						contact.username = user.login;
// 						contact.email = user.login + "@email.com";
// 						contact.avatarUrl = user.avatar_url;
// 						contact.description = user.type;
// 						contact.checked = false;
//
// 						return contact;
// 					});
// 					this.updateStorage();
// 					this.applyObservers();
// 				})
// 			;
// 			console.log("Fetch");
// 		}
//
// 	}
//
// 	applyObservers(): void {
// 		this.contacts.forEach((e, i) => {
// 			this.observerLocator.getObserver(e, 'checked').subscribe(() => this.updateStorage());
// 		});
// 	}
//
// 	addNew(): void {
// 		let contact = new Contact();
// 		contact.id = this.getId();
// 		contact.username = "username";
// 		contact.email = "e-mail";
//
// 		this.observerLocator.getObserver(contact, 'checked').subscribe(() => this.updateStorage());
//
// 		this.contacts.push(contact);
// 		this.updateStorage();
// 	}
//
// 	add(contact: Contact): void {
// 		this.contacts.push(contact);
// 		this.updateStorage();
// 	}
//
// 	remove(contact: Contact): void {
// 		this.contacts.splice(this.contacts.indexOf(contact), 1);
// 		this.updateStorage();
// 	}
//
// 	save(contact: Contact) {
// 		return new Promise(executor => {
// 			let instance = JSON.parse(JSON.stringify(contact));
// 			let found: Contact = this.contacts.filter(x => x.id == contact.id)[0];
//
// 			if(found) {
// 				let index = this.contacts.indexOf(found);
// 				Object.assign(this.contacts[index], instance);
// 			} else {
// 				instance.id = this.getId();
// 				this.contacts.push(instance);
// 			}
// 			this.updateStorage();
//
// 			executor(instance);
// 		});
// 	}
//
// 	find(id: number) {
// 		console.log("find request?");
// 		return new Promise(executor => {
// 			let found: Contact = this.contacts.filter(x => x.id == id)[0];
// 			executor(found);
// 		});
// 		//return this.contacts.filter(x => x.id == id)[0];
//
// 	}
//
// 	private getId(): number {
// 		return Math.round(Math.random() * 100000);
// 	}
//
// 	updateStorage(): void {
// 		localStorage.setItem(Constants.STORAGE_CONTACTS, JSON.stringify(this.contacts));
// 		console.log("update storage");
// 	}
// }
//
// export class ContactUpdated {
// 	contact: Contact;
//
// 	constructor(contact: Contact) {
// 		this.contact = contact;
// 	}
// }
//
// export class ContactSelected {
// 	contact: Contact;
//
// 	constructor(contact: Contact) {
// 		this.contact = contact;
// 	}
// }

//# sourceMappingURL=data:application/json;base64,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QUM1QixLQUFLO0FBQ0wsSUFBSSIsImZpbGUiOiJzZXJ2aWNlcy9zdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0U3RvcmUge1xyXG5cdGNvbnRhY3RzOiBBcnJheTxDb250YWN0PjtcclxuXHJcblx0Y29uc3RydWN0b3IoX2h0dHA6IEh0dHApIHsgLy8gVEhJUzogSU5KRUNUXHJcblx0XHRsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuXHRcdHRoaXMuY29udGFjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5TVE9SQUdFX0NPTlRBQ1RTKSk7XHJcblxyXG5cdFx0aWYoIXRoaXMuY29udGFjdHMpIHtcclxuXHRcdFx0X2h0dHAuZ2V0KCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzJykgLy8gVEhJUzogSFRUUFxyXG5cdFx0XHRcdC8vLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpIC8vIE5PVCBXT1JLSU5HXHJcblx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHRcdHVzZXJzID0+IHtcclxuXHRcdFx0XHRcdFx0dXNlcnMgPSB1c2Vycy5qc29uKCkuc3BsaWNlKDUpO1xyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5jb250YWN0cyA9IHVzZXJzLm1hcCgodXNlcjogeyBpZDogbnVtYmVyLCBsb2dpbjogc3RyaW5nLCBhdmF0YXJfdXJsOiBzdHJpbmcsIHR5cGU6IHN0cmluZyB9KSA9PiB7IC8vIFRISVNcclxuXHRcdFx0XHRcdFx0XHRsZXQgY29udGFjdCA9IG5ldyBDb250YWN0KCk7XHJcblx0XHRcdFx0XHRcdFx0Y29udGFjdC5pZCA9IHVzZXIuaWQ7XHJcblx0XHRcdFx0XHRcdFx0Y29udGFjdC51c2VybmFtZSA9IHVzZXIubG9naW47XHJcblx0XHRcdFx0XHRcdFx0Y29udGFjdC5lbWFpbCA9IHVzZXIubG9naW4gKyBcIkBlbWFpbC5jb21cIjtcclxuXHRcdFx0XHRcdFx0XHRjb250YWN0LmF2YXRhclVybCA9IHVzZXIuYXZhdGFyX3VybDtcclxuXHRcdFx0XHRcdFx0XHRjb250YWN0LmRlc2NyaXB0aW9uID0gdXNlci50eXBlO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRhY3QuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY29udGFjdDtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZXJyID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlU3RvcmFnZSgpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFwcGx5T2JzZXJ2ZXJzKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmNvbnRhY3RzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpXHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLmNvbnRhY3RzKTtcclxuXHR9XHJcblxyXG5cdGFwcGx5T2JzZXJ2ZXJzKCk6IHZvaWQge1xyXG5cdFx0Ly8gVE9ETzpcclxuXHR9XHJcblxyXG5cdGFkZE5ldygpOiB2b2lkIHtcclxuXHRcdGxldCBjb250YWN0ID0gbmV3IENvbnRhY3QoKTtcclxuXHRcdGNvbnRhY3QuaWQgPSB0aGlzLmdldElkKCk7XHJcblx0XHRjb250YWN0LnVzZXJuYW1lID0gXCJ1c2VybmFtZVwiO1xyXG5cdFx0Y29udGFjdC5lbWFpbCA9IFwiZS1tYWlsXCI7XHJcblxyXG5cdFx0Ly90aGlzLm9ic2VydmVyTG9jYXRvci5nZXRPYnNlcnZlcihjb250YWN0LCAnY2hlY2tlZCcpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVN0b3JhZ2UoKSk7XHJcblxyXG5cdFx0dGhpcy5jb250YWN0cy5wdXNoKGNvbnRhY3QpO1xyXG5cdFx0dGhpcy51cGRhdGVTdG9yYWdlKCk7XHJcblx0fVxyXG5cclxuXHRhZGQoY29udGFjdDogQ29udGFjdCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb250YWN0cy5wdXNoKGNvbnRhY3QpO1xyXG5cdFx0dGhpcy51cGRhdGVTdG9yYWdlKCk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmUoY29udGFjdDogQ29udGFjdCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb250YWN0cy5zcGxpY2UodGhpcy5jb250YWN0cy5pbmRleE9mKGNvbnRhY3QpLCAxKTtcclxuXHRcdHRoaXMudXBkYXRlU3RvcmFnZSgpO1xyXG5cdH1cclxuXHJcblx0c2F2ZShjb250YWN0OiBDb250YWN0KSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IgPT4ge1xyXG5cdFx0XHRsZXQgaW5zdGFuY2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnRhY3QpKTtcclxuXHRcdFx0bGV0IGZvdW5kOiBDb250YWN0ID0gdGhpcy5jb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGNvbnRhY3QuaWQpWzBdO1xyXG5cclxuXHRcdFx0aWYoZm91bmQpIHtcclxuXHRcdFx0XHRsZXQgaW5kZXggPSB0aGlzLmNvbnRhY3RzLmluZGV4T2YoZm91bmQpO1xyXG5cdFx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy5jb250YWN0c1tpbmRleF0sIGluc3RhbmNlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpbnN0YW5jZS5pZCA9IHRoaXMuZ2V0SWQoKTtcclxuXHRcdFx0XHR0aGlzLmNvbnRhY3RzLnB1c2goaW5zdGFuY2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudXBkYXRlU3RvcmFnZSgpO1xyXG5cclxuXHRcdFx0ZXhlY3V0b3IoaW5zdGFuY2UpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmaW5kKGlkOiBudW1iZXIpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiZmluZCByZXF1ZXN0P1wiKTtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvciA9PiB7XHJcblx0XHRcdGxldCBmb3VuZDogQ29udGFjdCA9IHRoaXMuY29udGFjdHMuZmlsdGVyKHggPT4geC5pZCA9PSBpZClbMF07XHJcblx0XHRcdGV4ZWN1dG9yKGZvdW5kKTtcclxuXHRcdH0pO1xyXG5cdFx0Ly9yZXR1cm4gdGhpcy5jb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGlkKVswXTtcclxuXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldElkKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0b3JhZ2UoKTogdm9pZCB7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuU1RPUkFHRV9DT05UQUNUUywgSlNPTi5zdHJpbmdpZnkodGhpcy5jb250YWN0cykpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJ1cGRhdGUgc3RvcmFnZVwiKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vXHJcbi8vIEBpbmplY3QoSHR0cENsaWVudCwgT2JzZXJ2ZXJMb2NhdG9yKVxyXG4vLyBleHBvcnQgY2xhc3MgQ29udGFjdFN0b3JlIHtcclxuLy8gXHRjb250YWN0czogQXJyYXk8Q29udGFjdD47XHJcbi8vXHJcbi8vIFx0b2JzZXJ2ZXJMb2NhdG9yOiBPYnNlcnZlckxvY2F0b3I7XHJcbi8vXHJcbi8vIFx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBvYnNlcnZlckxvY2F0b3I6IE9ic2VydmVyTG9jYXRvcikge1xyXG4vLyBcdFx0dGhpcy5vYnNlcnZlckxvY2F0b3IgPSBvYnNlcnZlckxvY2F0b3I7XHJcbi8vXHJcbi8vIFx0XHQvL2xvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4vLyBcdFx0dGhpcy5jb250YWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLlNUT1JBR0VfQ09OVEFDVFMpKTtcclxuLy9cclxuLy8gXHRcdGlmICghdGhpcy5jb250YWN0cykge1xyXG4vLyBcdFx0XHRodHRwLmNvbmZpZ3VyZShjb25maWcgPT4ge1xyXG4vLyBcdFx0XHRcdGNvbmZpZy51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKS53aXRoQmFzZVVybCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS8nKTtcclxuLy8gXHRcdFx0fSk7XHJcbi8vIFx0XHRcdGh0dHAuZmV0Y2goJ3VzZXJzJylcclxuLy8gXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbi8vIFx0XHRcdFx0LnRoZW4odXNlcnMgPT4ge1xyXG4vLyBcdFx0XHRcdFx0dXNlcnMuc3BsaWNlKDUpO1xyXG4vLyBcdFx0XHRcdFx0dGhpcy5jb250YWN0cyA9IHVzZXJzLm1hcCgodXNlcjogeyBpZDogbnVtYmVyLCBsb2dpbjogc3RyaW5nLCBhdmF0YXJfdXJsOiBzdHJpbmcsIHR5cGU6IHN0cmluZyB9KSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRcdGxldCBjb250YWN0ID0gbmV3IENvbnRhY3QoKTtcclxuLy8gXHRcdFx0XHRcdFx0Y29udGFjdC5pZCA9IHVzZXIuaWQ7XHJcbi8vIFx0XHRcdFx0XHRcdGNvbnRhY3QudXNlcm5hbWUgPSB1c2VyLmxvZ2luO1xyXG4vLyBcdFx0XHRcdFx0XHRjb250YWN0LmVtYWlsID0gdXNlci5sb2dpbiArIFwiQGVtYWlsLmNvbVwiO1xyXG4vLyBcdFx0XHRcdFx0XHRjb250YWN0LmF2YXRhclVybCA9IHVzZXIuYXZhdGFyX3VybDtcclxuLy8gXHRcdFx0XHRcdFx0Y29udGFjdC5kZXNjcmlwdGlvbiA9IHVzZXIudHlwZTtcclxuLy8gXHRcdFx0XHRcdFx0Y29udGFjdC5jaGVja2VkID0gZmFsc2U7XHJcbi8vXHJcbi8vIFx0XHRcdFx0XHRcdHJldHVybiBjb250YWN0O1xyXG4vLyBcdFx0XHRcdFx0fSk7XHJcbi8vIFx0XHRcdFx0XHR0aGlzLnVwZGF0ZVN0b3JhZ2UoKTtcclxuLy8gXHRcdFx0XHRcdHRoaXMuYXBwbHlPYnNlcnZlcnMoKTtcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdFx0XHQ7XHJcbi8vIFx0XHRcdGNvbnNvbGUubG9nKFwiRmV0Y2hcIik7XHJcbi8vIFx0XHR9XHJcbi8vXHJcbi8vIFx0fVxyXG4vL1xyXG4vLyBcdGFwcGx5T2JzZXJ2ZXJzKCk6IHZvaWQge1xyXG4vLyBcdFx0dGhpcy5jb250YWN0cy5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbi8vIFx0XHRcdHRoaXMub2JzZXJ2ZXJMb2NhdG9yLmdldE9ic2VydmVyKGUsICdjaGVja2VkJykuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlU3RvcmFnZSgpKTtcclxuLy8gXHRcdH0pO1xyXG4vLyBcdH1cclxuLy9cclxuLy8gXHRhZGROZXcoKTogdm9pZCB7XHJcbi8vIFx0XHRsZXQgY29udGFjdCA9IG5ldyBDb250YWN0KCk7XHJcbi8vIFx0XHRjb250YWN0LmlkID0gdGhpcy5nZXRJZCgpO1xyXG4vLyBcdFx0Y29udGFjdC51c2VybmFtZSA9IFwidXNlcm5hbWVcIjtcclxuLy8gXHRcdGNvbnRhY3QuZW1haWwgPSBcImUtbWFpbFwiO1xyXG4vL1xyXG4vLyBcdFx0dGhpcy5vYnNlcnZlckxvY2F0b3IuZ2V0T2JzZXJ2ZXIoY29udGFjdCwgJ2NoZWNrZWQnKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVTdG9yYWdlKCkpO1xyXG4vL1xyXG4vLyBcdFx0dGhpcy5jb250YWN0cy5wdXNoKGNvbnRhY3QpO1xyXG4vLyBcdFx0dGhpcy51cGRhdGVTdG9yYWdlKCk7XHJcbi8vIFx0fVxyXG4vL1xyXG4vLyBcdGFkZChjb250YWN0OiBDb250YWN0KTogdm9pZCB7XHJcbi8vIFx0XHR0aGlzLmNvbnRhY3RzLnB1c2goY29udGFjdCk7XHJcbi8vIFx0XHR0aGlzLnVwZGF0ZVN0b3JhZ2UoKTtcclxuLy8gXHR9XHJcbi8vXHJcbi8vIFx0cmVtb3ZlKGNvbnRhY3Q6IENvbnRhY3QpOiB2b2lkIHtcclxuLy8gXHRcdHRoaXMuY29udGFjdHMuc3BsaWNlKHRoaXMuY29udGFjdHMuaW5kZXhPZihjb250YWN0KSwgMSk7XHJcbi8vIFx0XHR0aGlzLnVwZGF0ZVN0b3JhZ2UoKTtcclxuLy8gXHR9XHJcbi8vXHJcbi8vIFx0c2F2ZShjb250YWN0OiBDb250YWN0KSB7XHJcbi8vIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IgPT4ge1xyXG4vLyBcdFx0XHRsZXQgaW5zdGFuY2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnRhY3QpKTtcclxuLy8gXHRcdFx0bGV0IGZvdW5kOiBDb250YWN0ID0gdGhpcy5jb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGNvbnRhY3QuaWQpWzBdO1xyXG4vL1xyXG4vLyBcdFx0XHRpZihmb3VuZCkge1xyXG4vLyBcdFx0XHRcdGxldCBpbmRleCA9IHRoaXMuY29udGFjdHMuaW5kZXhPZihmb3VuZCk7XHJcbi8vIFx0XHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLmNvbnRhY3RzW2luZGV4XSwgaW5zdGFuY2UpO1xyXG4vLyBcdFx0XHR9IGVsc2Uge1xyXG4vLyBcdFx0XHRcdGluc3RhbmNlLmlkID0gdGhpcy5nZXRJZCgpO1xyXG4vLyBcdFx0XHRcdHRoaXMuY29udGFjdHMucHVzaChpbnN0YW5jZSk7XHJcbi8vIFx0XHRcdH1cclxuLy8gXHRcdFx0dGhpcy51cGRhdGVTdG9yYWdlKCk7XHJcbi8vXHJcbi8vIFx0XHRcdGV4ZWN1dG9yKGluc3RhbmNlKTtcclxuLy8gXHRcdH0pO1xyXG4vLyBcdH1cclxuLy9cclxuLy8gXHRmaW5kKGlkOiBudW1iZXIpIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKFwiZmluZCByZXF1ZXN0P1wiKTtcclxuLy8gXHRcdHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvciA9PiB7XHJcbi8vIFx0XHRcdGxldCBmb3VuZDogQ29udGFjdCA9IHRoaXMuY29udGFjdHMuZmlsdGVyKHggPT4geC5pZCA9PSBpZClbMF07XHJcbi8vIFx0XHRcdGV4ZWN1dG9yKGZvdW5kKTtcclxuLy8gXHRcdH0pO1xyXG4vLyBcdFx0Ly9yZXR1cm4gdGhpcy5jb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGlkKVswXTtcclxuLy9cclxuLy8gXHR9XHJcbi8vXHJcbi8vIFx0cHJpdmF0ZSBnZXRJZCgpOiBudW1iZXIge1xyXG4vLyBcdFx0cmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCk7XHJcbi8vIFx0fVxyXG4vL1xyXG4vLyBcdHVwZGF0ZVN0b3JhZ2UoKTogdm9pZCB7XHJcbi8vIFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuU1RPUkFHRV9DT05UQUNUUywgSlNPTi5zdHJpbmdpZnkodGhpcy5jb250YWN0cykpO1xyXG4vLyBcdFx0Y29uc29sZS5sb2coXCJ1cGRhdGUgc3RvcmFnZVwiKTtcclxuLy8gXHR9XHJcbi8vIH1cclxuLy9cclxuLy8gZXhwb3J0IGNsYXNzIENvbnRhY3RVcGRhdGVkIHtcclxuLy8gXHRjb250YWN0OiBDb250YWN0O1xyXG4vL1xyXG4vLyBcdGNvbnN0cnVjdG9yKGNvbnRhY3Q6IENvbnRhY3QpIHtcclxuLy8gXHRcdHRoaXMuY29udGFjdCA9IGNvbnRhY3Q7XHJcbi8vIFx0fVxyXG4vLyB9XHJcbi8vXHJcbi8vIGV4cG9ydCBjbGFzcyBDb250YWN0U2VsZWN0ZWQge1xyXG4vLyBcdGNvbnRhY3Q6IENvbnRhY3Q7XHJcbi8vXHJcbi8vIFx0Y29uc3RydWN0b3IoY29udGFjdDogQ29udGFjdCkge1xyXG4vLyBcdFx0dGhpcy5jb250YWN0ID0gY29udGFjdDtcclxuLy8gXHR9XHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
