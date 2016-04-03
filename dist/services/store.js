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
    var ContactStore, ContactUpdated, ContactSelected;
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
                    //localStorage.clear();
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
            class ContactUpdated {
                constructor(contact) {
                    this.contact = contact;
                }
            }
            exports_1("ContactUpdated", ContactUpdated);
            class ContactSelected {
                constructor(contact) {
                    this.contact = contact;
                }
            }
            exports_1("ContactSelected", ContactSelected);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUdDLFlBQVksS0FBVztvQkFDdEIsdUJBQXVCO29CQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztvQkFFN0UsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLGFBQWE7NkJBRXJELFNBQVMsQ0FDVCxLQUFLOzRCQUNKLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUUvQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFxRTtnQ0FDL0YsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7Z0NBQzVCLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQ0FDckIsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dDQUM5QixPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO2dDQUMxQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0NBQ3BDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQ0FDaEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0NBRXhCLE1BQU0sQ0FBQyxPQUFPLENBQUM7NEJBQ2hCLENBQUMsQ0FBQyxDQUFDO3dCQUNKLENBQUMsRUFDRCxHQUFHOzRCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2xCLENBQUMsRUFDRDs0QkFDQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7NEJBQ3JCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzs0QkFFdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzVCLENBQUMsQ0FDRCxDQUFBO29CQUNILENBQUM7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsY0FBYztvQkFDYixRQUFRO2dCQUNULENBQUM7Z0JBRUQsTUFBTTtvQkFDTCxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO29CQUM5QixPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztvQkFFekIsNkZBQTZGO29CQUU3RixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN0QixDQUFDO2dCQUVELEdBQUcsQ0FBQyxPQUFnQjtvQkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQztnQkFFRCxNQUFNLENBQUMsT0FBZ0I7b0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7Z0JBRUQsSUFBSSxDQUFDLE9BQWdCO29CQUNwQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUTt3QkFDMUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ25ELElBQUksS0FBSyxHQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFdEUsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDVixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO3dCQUMvQyxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNQLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDOUIsQ0FBQzt3QkFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7d0JBRXJCLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQztnQkFFRCxJQUFJLENBQUMsRUFBVTtvQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUM3QixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUTt3QkFDMUIsSUFBSSxLQUFLLEdBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlELFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDakIsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsa0RBQWtEO2dCQUVuRCxDQUFDO2dCQUVPLEtBQUs7b0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUVELGFBQWE7b0JBQ1osWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztZQUNGLENBQUM7WUF2R0Q7Z0JBQUMsaUJBQVUsRUFBRTs7NEJBQUE7WUFDYix1Q0FzR0MsQ0FBQTtZQUVEO2dCQUdFLFlBQVksT0FBZ0I7b0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN4QixDQUFDO1lBQ0YsQ0FBQztZQU5GLDJDQU1FLENBQUE7WUFFRDtnQkFHQyxZQUFZLE9BQWdCO29CQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDeEIsQ0FBQztZQUNGLENBQUM7WUFORCw2Q0FNQyxDQUFBOzs7OztBQUVGLEVBQUU7QUFDRix1Q0FBdUM7QUFDdkMsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUM3QixFQUFFO0FBQ0YscUNBQXFDO0FBQ3JDLEVBQUU7QUFDRiw2RUFBNkU7QUFDN0UsNENBQTRDO0FBQzVDLEVBQUU7QUFDRiw0QkFBNEI7QUFDNUIsa0ZBQWtGO0FBQ2xGLEVBQUU7QUFDRiwwQkFBMEI7QUFDMUIsZ0NBQWdDO0FBQ2hDLGdGQUFnRjtBQUNoRixTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCLHlDQUF5QztBQUN6Qyx1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLDhHQUE4RztBQUM5RyxxQ0FBcUM7QUFDckMsOEJBQThCO0FBQzlCLHVDQUF1QztBQUN2QyxtREFBbUQ7QUFDbkQsNkNBQTZDO0FBQzdDLHlDQUF5QztBQUN6QyxpQ0FBaUM7QUFDakMsRUFBRTtBQUNGLHdCQUF3QjtBQUN4QixXQUFXO0FBQ1gsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5QixTQUFTO0FBQ1QsT0FBTztBQUNQLDJCQUEyQjtBQUMzQixNQUFNO0FBQ04sRUFBRTtBQUNGLEtBQUs7QUFDTCxFQUFFO0FBQ0YsNEJBQTRCO0FBQzVCLHNDQUFzQztBQUN0QywyRkFBMkY7QUFDM0YsUUFBUTtBQUNSLEtBQUs7QUFDTCxFQUFFO0FBQ0Ysb0JBQW9CO0FBQ3BCLGlDQUFpQztBQUNqQywrQkFBK0I7QUFDL0IsbUNBQW1DO0FBQ25DLDhCQUE4QjtBQUM5QixFQUFFO0FBQ0YsZ0dBQWdHO0FBQ2hHLEVBQUU7QUFDRixpQ0FBaUM7QUFDakMsMEJBQTBCO0FBQzFCLEtBQUs7QUFDTCxFQUFFO0FBQ0YsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQywwQkFBMEI7QUFDMUIsS0FBSztBQUNMLEVBQUU7QUFDRixvQ0FBb0M7QUFDcEMsNkRBQTZEO0FBQzdELDBCQUEwQjtBQUMxQixLQUFLO0FBQ0wsRUFBRTtBQUNGLDRCQUE0QjtBQUM1QixxQ0FBcUM7QUFDckMseURBQXlEO0FBQ3pELDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsaUJBQWlCO0FBQ2pCLGdEQUFnRDtBQUNoRCxxREFBcUQ7QUFDckQsY0FBYztBQUNkLGtDQUFrQztBQUNsQyxvQ0FBb0M7QUFDcEMsT0FBTztBQUNQLDJCQUEyQjtBQUMzQixFQUFFO0FBQ0YseUJBQXlCO0FBQ3pCLFFBQVE7QUFDUixLQUFLO0FBQ0wsRUFBRTtBQUNGLHNCQUFzQjtBQUN0QixrQ0FBa0M7QUFDbEMscUNBQXFDO0FBQ3JDLG9FQUFvRTtBQUNwRSxzQkFBc0I7QUFDdEIsUUFBUTtBQUNSLHVEQUF1RDtBQUN2RCxFQUFFO0FBQ0YsS0FBSztBQUNMLEVBQUU7QUFDRiw2QkFBNkI7QUFDN0IsK0NBQStDO0FBQy9DLEtBQUs7QUFDTCxFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLHFGQUFxRjtBQUNyRixtQ0FBbUM7QUFDbkMsS0FBSztBQUNMLElBQUk7QUFDSixFQUFFO0FBQ0YsZ0NBQWdDO0FBQ2hDLHFCQUFxQjtBQUNyQixFQUFFO0FBQ0YsbUNBQW1DO0FBQ25DLDRCQUE0QjtBQUM1QixLQUFLO0FBQ0wsSUFBSTtBQUNKLEVBQUU7QUFDRixpQ0FBaUM7QUFDakMscUJBQXFCO0FBQ3JCLEVBQUU7QUFDRixtQ0FBbUM7QUFDbkMsNEJBQTRCO0FBQzVCLEtBQUs7QUFDTCxJQUFJIiwiZmlsZSI6InNlcnZpY2VzL3N0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbnRhY3RTdG9yZSB7XHJcblx0Y29udGFjdHM6IEFycmF5PENvbnRhY3Q+O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihfaHR0cDogSHR0cCkgeyAvLyBUSElTOiBJTkpFQ1RcclxuXHRcdC8vbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcblx0XHR0aGlzLmNvbnRhY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuU1RPUkFHRV9DT05UQUNUUykpO1xyXG5cclxuXHRcdGlmKCF0aGlzLmNvbnRhY3RzKSB7XHJcblx0XHRcdF9odHRwLmdldCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2VycycpIC8vIFRISVM6IEhUVFBcclxuXHRcdFx0XHQvLy5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSAvLyBOT1QgV09SS0lOR1xyXG5cdFx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0XHR1c2VycyA9PiB7XHJcblx0XHRcdFx0XHRcdHVzZXJzID0gdXNlcnMuanNvbigpLnNwbGljZSg1KTtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuY29udGFjdHMgPSB1c2Vycy5tYXAoKHVzZXI6IHsgaWQ6IG51bWJlciwgbG9naW46IHN0cmluZywgYXZhdGFyX3VybDogc3RyaW5nLCB0eXBlOiBzdHJpbmcgfSkgPT4geyAvLyBUSElTXHJcblx0XHRcdFx0XHRcdFx0bGV0IGNvbnRhY3QgPSBuZXcgQ29udGFjdCgpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRhY3QuaWQgPSB1c2VyLmlkO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRhY3QudXNlcm5hbWUgPSB1c2VyLmxvZ2luO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRhY3QuZW1haWwgPSB1c2VyLmxvZ2luICsgXCJAZW1haWwuY29tXCI7XHJcblx0XHRcdFx0XHRcdFx0Y29udGFjdC5hdmF0YXJVcmwgPSB1c2VyLmF2YXRhcl91cmw7XHJcblx0XHRcdFx0XHRcdFx0Y29udGFjdC5kZXNjcmlwdGlvbiA9IHVzZXIudHlwZTtcclxuXHRcdFx0XHRcdFx0XHRjb250YWN0LmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGNvbnRhY3Q7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVyciA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZVN0b3JhZ2UoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5hcHBseU9ic2VydmVycygpO1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5jb250YWN0cyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KVxyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2codGhpcy5jb250YWN0cyk7XHJcblx0fVxyXG5cclxuXHRhcHBseU9ic2VydmVycygpOiB2b2lkIHtcclxuXHRcdC8vIFRPRE86XHJcblx0fVxyXG5cclxuXHRhZGROZXcoKTogdm9pZCB7XHJcblx0XHRsZXQgY29udGFjdCA9IG5ldyBDb250YWN0KCk7XHJcblx0XHRjb250YWN0LmlkID0gdGhpcy5nZXRJZCgpO1xyXG5cdFx0Y29udGFjdC51c2VybmFtZSA9IFwidXNlcm5hbWVcIjtcclxuXHRcdGNvbnRhY3QuZW1haWwgPSBcImUtbWFpbFwiO1xyXG5cclxuXHRcdC8vdGhpcy5vYnNlcnZlckxvY2F0b3IuZ2V0T2JzZXJ2ZXIoY29udGFjdCwgJ2NoZWNrZWQnKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVTdG9yYWdlKCkpO1xyXG5cclxuXHRcdHRoaXMuY29udGFjdHMucHVzaChjb250YWN0KTtcclxuXHRcdHRoaXMudXBkYXRlU3RvcmFnZSgpO1xyXG5cdH1cclxuXHJcblx0YWRkKGNvbnRhY3Q6IENvbnRhY3QpOiB2b2lkIHtcclxuXHRcdHRoaXMuY29udGFjdHMucHVzaChjb250YWN0KTtcclxuXHRcdHRoaXMudXBkYXRlU3RvcmFnZSgpO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlKGNvbnRhY3Q6IENvbnRhY3QpOiB2b2lkIHtcclxuXHRcdHRoaXMuY29udGFjdHMuc3BsaWNlKHRoaXMuY29udGFjdHMuaW5kZXhPZihjb250YWN0KSwgMSk7XHJcblx0XHR0aGlzLnVwZGF0ZVN0b3JhZ2UoKTtcclxuXHR9XHJcblxyXG5cdHNhdmUoY29udGFjdDogQ29udGFjdCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGV4ZWN1dG9yID0+IHtcclxuXHRcdFx0bGV0IGluc3RhbmNlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb250YWN0KSk7XHJcblx0XHRcdGxldCBmb3VuZDogQ29udGFjdCA9IHRoaXMuY29udGFjdHMuZmlsdGVyKHggPT4geC5pZCA9PSBjb250YWN0LmlkKVswXTtcclxuXHJcblx0XHRcdGlmKGZvdW5kKSB7XHJcblx0XHRcdFx0bGV0IGluZGV4ID0gdGhpcy5jb250YWN0cy5pbmRleE9mKGZvdW5kKTtcclxuXHRcdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuY29udGFjdHNbaW5kZXhdLCBpbnN0YW5jZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aW5zdGFuY2UuaWQgPSB0aGlzLmdldElkKCk7XHJcblx0XHRcdFx0dGhpcy5jb250YWN0cy5wdXNoKGluc3RhbmNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnVwZGF0ZVN0b3JhZ2UoKTtcclxuXHJcblx0XHRcdGV4ZWN1dG9yKGluc3RhbmNlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZmluZChpZDogbnVtYmVyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImZpbmQgcmVxdWVzdD9cIik7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IgPT4ge1xyXG5cdFx0XHRsZXQgZm91bmQ6IENvbnRhY3QgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguaWQgPT0gaWQpWzBdO1xyXG5cdFx0XHRleGVjdXRvcihmb3VuZCk7XHJcblx0XHR9KTtcclxuXHRcdC8vcmV0dXJuIHRoaXMuY29udGFjdHMuZmlsdGVyKHggPT4geC5pZCA9PSBpZClbMF07XHJcblxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRJZCgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTdG9yYWdlKCk6IHZvaWQge1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLlNUT1JBR0VfQ09OVEFDVFMsIEpTT04uc3RyaW5naWZ5KHRoaXMuY29udGFjdHMpKTtcclxuXHRcdGNvbnNvbGUubG9nKFwidXBkYXRlIHN0b3JhZ2VcIik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGFjdFVwZGF0ZWQge1xyXG4gXHRjb250YWN0OiBDb250YWN0O1xyXG5cclxuIFx0Y29uc3RydWN0b3IoY29udGFjdDogQ29udGFjdCkge1xyXG4gXHRcdHRoaXMuY29udGFjdCA9IGNvbnRhY3Q7XHJcbiBcdH1cclxuIH1cclxuXHJcbiBleHBvcnQgY2xhc3MgQ29udGFjdFNlbGVjdGVkIHtcclxuIFx0Y29udGFjdDogQ29udGFjdDtcclxuXHJcbiBcdGNvbnN0cnVjdG9yKGNvbnRhY3Q6IENvbnRhY3QpIHtcclxuIFx0XHR0aGlzLmNvbnRhY3QgPSBjb250YWN0O1xyXG4gXHR9XHJcbiB9XHJcblxyXG4vL1xyXG4vLyBAaW5qZWN0KEh0dHBDbGllbnQsIE9ic2VydmVyTG9jYXRvcilcclxuLy8gZXhwb3J0IGNsYXNzIENvbnRhY3RTdG9yZSB7XHJcbi8vIFx0Y29udGFjdHM6IEFycmF5PENvbnRhY3Q+O1xyXG4vL1xyXG4vLyBcdG9ic2VydmVyTG9jYXRvcjogT2JzZXJ2ZXJMb2NhdG9yO1xyXG4vL1xyXG4vLyBcdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgb2JzZXJ2ZXJMb2NhdG9yOiBPYnNlcnZlckxvY2F0b3IpIHtcclxuLy8gXHRcdHRoaXMub2JzZXJ2ZXJMb2NhdG9yID0gb2JzZXJ2ZXJMb2NhdG9yO1xyXG4vL1xyXG4vLyBcdFx0Ly9sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuLy8gXHRcdHRoaXMuY29udGFjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5TVE9SQUdFX0NPTlRBQ1RTKSk7XHJcbi8vXHJcbi8vIFx0XHRpZiAoIXRoaXMuY29udGFjdHMpIHtcclxuLy8gXHRcdFx0aHR0cC5jb25maWd1cmUoY29uZmlnID0+IHtcclxuLy8gXHRcdFx0XHRjb25maWcudXNlU3RhbmRhcmRDb25maWd1cmF0aW9uKCkud2l0aEJhc2VVcmwoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vJyk7XHJcbi8vIFx0XHRcdH0pO1xyXG4vLyBcdFx0XHRodHRwLmZldGNoKCd1c2VycycpXHJcbi8vIFx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4vLyBcdFx0XHRcdC50aGVuKHVzZXJzID0+IHtcclxuLy8gXHRcdFx0XHRcdHVzZXJzLnNwbGljZSg1KTtcclxuLy8gXHRcdFx0XHRcdHRoaXMuY29udGFjdHMgPSB1c2Vycy5tYXAoKHVzZXI6IHsgaWQ6IG51bWJlciwgbG9naW46IHN0cmluZywgYXZhdGFyX3VybDogc3RyaW5nLCB0eXBlOiBzdHJpbmcgfSkgPT4ge1xyXG4vLyBcdFx0XHRcdFx0XHRsZXQgY29udGFjdCA9IG5ldyBDb250YWN0KCk7XHJcbi8vIFx0XHRcdFx0XHRcdGNvbnRhY3QuaWQgPSB1c2VyLmlkO1xyXG4vLyBcdFx0XHRcdFx0XHRjb250YWN0LnVzZXJuYW1lID0gdXNlci5sb2dpbjtcclxuLy8gXHRcdFx0XHRcdFx0Y29udGFjdC5lbWFpbCA9IHVzZXIubG9naW4gKyBcIkBlbWFpbC5jb21cIjtcclxuLy8gXHRcdFx0XHRcdFx0Y29udGFjdC5hdmF0YXJVcmwgPSB1c2VyLmF2YXRhcl91cmw7XHJcbi8vIFx0XHRcdFx0XHRcdGNvbnRhY3QuZGVzY3JpcHRpb24gPSB1c2VyLnR5cGU7XHJcbi8vIFx0XHRcdFx0XHRcdGNvbnRhY3QuY2hlY2tlZCA9IGZhbHNlO1xyXG4vL1xyXG4vLyBcdFx0XHRcdFx0XHRyZXR1cm4gY29udGFjdDtcclxuLy8gXHRcdFx0XHRcdH0pO1xyXG4vLyBcdFx0XHRcdFx0dGhpcy51cGRhdGVTdG9yYWdlKCk7XHJcbi8vIFx0XHRcdFx0XHR0aGlzLmFwcGx5T2JzZXJ2ZXJzKCk7XHJcbi8vIFx0XHRcdFx0fSlcclxuLy8gXHRcdFx0O1xyXG4vLyBcdFx0XHRjb25zb2xlLmxvZyhcIkZldGNoXCIpO1xyXG4vLyBcdFx0fVxyXG4vL1xyXG4vLyBcdH1cclxuLy9cclxuLy8gXHRhcHBseU9ic2VydmVycygpOiB2b2lkIHtcclxuLy8gXHRcdHRoaXMuY29udGFjdHMuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4vLyBcdFx0XHR0aGlzLm9ic2VydmVyTG9jYXRvci5nZXRPYnNlcnZlcihlLCAnY2hlY2tlZCcpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVN0b3JhZ2UoKSk7XHJcbi8vIFx0XHR9KTtcclxuLy8gXHR9XHJcbi8vXHJcbi8vIFx0YWRkTmV3KCk6IHZvaWQge1xyXG4vLyBcdFx0bGV0IGNvbnRhY3QgPSBuZXcgQ29udGFjdCgpO1xyXG4vLyBcdFx0Y29udGFjdC5pZCA9IHRoaXMuZ2V0SWQoKTtcclxuLy8gXHRcdGNvbnRhY3QudXNlcm5hbWUgPSBcInVzZXJuYW1lXCI7XHJcbi8vIFx0XHRjb250YWN0LmVtYWlsID0gXCJlLW1haWxcIjtcclxuLy9cclxuLy8gXHRcdHRoaXMub2JzZXJ2ZXJMb2NhdG9yLmdldE9ic2VydmVyKGNvbnRhY3QsICdjaGVja2VkJykuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlU3RvcmFnZSgpKTtcclxuLy9cclxuLy8gXHRcdHRoaXMuY29udGFjdHMucHVzaChjb250YWN0KTtcclxuLy8gXHRcdHRoaXMudXBkYXRlU3RvcmFnZSgpO1xyXG4vLyBcdH1cclxuLy9cclxuLy8gXHRhZGQoY29udGFjdDogQ29udGFjdCk6IHZvaWQge1xyXG4vLyBcdFx0dGhpcy5jb250YWN0cy5wdXNoKGNvbnRhY3QpO1xyXG4vLyBcdFx0dGhpcy51cGRhdGVTdG9yYWdlKCk7XHJcbi8vIFx0fVxyXG4vL1xyXG4vLyBcdHJlbW92ZShjb250YWN0OiBDb250YWN0KTogdm9pZCB7XHJcbi8vIFx0XHR0aGlzLmNvbnRhY3RzLnNwbGljZSh0aGlzLmNvbnRhY3RzLmluZGV4T2YoY29udGFjdCksIDEpO1xyXG4vLyBcdFx0dGhpcy51cGRhdGVTdG9yYWdlKCk7XHJcbi8vIFx0fVxyXG4vL1xyXG4vLyBcdHNhdmUoY29udGFjdDogQ29udGFjdCkge1xyXG4vLyBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGV4ZWN1dG9yID0+IHtcclxuLy8gXHRcdFx0bGV0IGluc3RhbmNlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb250YWN0KSk7XHJcbi8vIFx0XHRcdGxldCBmb3VuZDogQ29udGFjdCA9IHRoaXMuY29udGFjdHMuZmlsdGVyKHggPT4geC5pZCA9PSBjb250YWN0LmlkKVswXTtcclxuLy9cclxuLy8gXHRcdFx0aWYoZm91bmQpIHtcclxuLy8gXHRcdFx0XHRsZXQgaW5kZXggPSB0aGlzLmNvbnRhY3RzLmluZGV4T2YoZm91bmQpO1xyXG4vLyBcdFx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy5jb250YWN0c1tpbmRleF0sIGluc3RhbmNlKTtcclxuLy8gXHRcdFx0fSBlbHNlIHtcclxuLy8gXHRcdFx0XHRpbnN0YW5jZS5pZCA9IHRoaXMuZ2V0SWQoKTtcclxuLy8gXHRcdFx0XHR0aGlzLmNvbnRhY3RzLnB1c2goaW5zdGFuY2UpO1xyXG4vLyBcdFx0XHR9XHJcbi8vIFx0XHRcdHRoaXMudXBkYXRlU3RvcmFnZSgpO1xyXG4vL1xyXG4vLyBcdFx0XHRleGVjdXRvcihpbnN0YW5jZSk7XHJcbi8vIFx0XHR9KTtcclxuLy8gXHR9XHJcbi8vXHJcbi8vIFx0ZmluZChpZDogbnVtYmVyKSB7XHJcbi8vIFx0XHRjb25zb2xlLmxvZyhcImZpbmQgcmVxdWVzdD9cIik7XHJcbi8vIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IgPT4ge1xyXG4vLyBcdFx0XHRsZXQgZm91bmQ6IENvbnRhY3QgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguaWQgPT0gaWQpWzBdO1xyXG4vLyBcdFx0XHRleGVjdXRvcihmb3VuZCk7XHJcbi8vIFx0XHR9KTtcclxuLy8gXHRcdC8vcmV0dXJuIHRoaXMuY29udGFjdHMuZmlsdGVyKHggPT4geC5pZCA9PSBpZClbMF07XHJcbi8vXHJcbi8vIFx0fVxyXG4vL1xyXG4vLyBcdHByaXZhdGUgZ2V0SWQoKTogbnVtYmVyIHtcclxuLy8gXHRcdHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApO1xyXG4vLyBcdH1cclxuLy9cclxuLy8gXHR1cGRhdGVTdG9yYWdlKCk6IHZvaWQge1xyXG4vLyBcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLlNUT1JBR0VfQ09OVEFDVFMsIEpTT04uc3RyaW5naWZ5KHRoaXMuY29udGFjdHMpKTtcclxuLy8gXHRcdGNvbnNvbGUubG9nKFwidXBkYXRlIHN0b3JhZ2VcIik7XHJcbi8vIFx0fVxyXG4vLyB9XHJcbi8vXHJcbi8vIGV4cG9ydCBjbGFzcyBDb250YWN0VXBkYXRlZCB7XHJcbi8vIFx0Y29udGFjdDogQ29udGFjdDtcclxuLy9cclxuLy8gXHRjb25zdHJ1Y3Rvcihjb250YWN0OiBDb250YWN0KSB7XHJcbi8vIFx0XHR0aGlzLmNvbnRhY3QgPSBjb250YWN0O1xyXG4vLyBcdH1cclxuLy8gfVxyXG4vL1xyXG4vLyBleHBvcnQgY2xhc3MgQ29udGFjdFNlbGVjdGVkIHtcclxuLy8gXHRjb250YWN0OiBDb250YWN0O1xyXG4vL1xyXG4vLyBcdGNvbnN0cnVjdG9yKGNvbnRhY3Q6IENvbnRhY3QpIHtcclxuLy8gXHRcdHRoaXMuY29udGFjdCA9IGNvbnRhY3Q7XHJcbi8vIFx0fVxyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
