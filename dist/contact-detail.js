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
    var ContactDetail;
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
            let ContactDetail = class ContactDetail {
                constructor(_contactStore, _routeParams) {
                    this._contactStore = _contactStore;
                    this._routeParams = _routeParams;
                }
                routerOnActivate(next, prev) {
                    this._contactStore.find(this._routeParams.get('id')).then((contact) => {
                        this.selectedContact = JSON.parse(JSON.stringify(contact));
                        this.originalContact = contact;
                        //this.eventAggregator.publish(new ContactSelected(contact));
                    });
                }
                routerCanDeactivate(next, prev) {
                    if (!this.areEqual(this.originalContact, this.selectedContact)) {
                        let result = confirm('You have unsaved changes. Are you sure you wish to leave?');
                        if (!result) {
                        }
                        return result;
                    }
                    return true;
                }
                save() {
                    this._contactStore.save(this.selectedContact).then((contact) => {
                        this.selectedContact = JSON.parse(JSON.stringify(this.selectedContact));
                        this.originalContact = contact;
                        //this.eventAggregator.publish(new ContactUpdated(contact));
                    });
                }
                get canSave() {
                    return this.selectedContact.username && this.selectedContact.email;
                }
                areEqual(obj1, obj2) {
                    return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]));
                }
                ;
            };
            ContactDetail = __decorate([
                core_1.Component({
                    selector: 'contact-detail',
                    templateUrl: 'dist/contact-detail.html'
                }),
                core_1.Injectable(), 
                __metadata('design:paramtypes', [store_1.ContactStore, (typeof (_a = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _a) || Object])
            ], ContactDetail);
            exports_1("ContactDetail", ContactDetail);
        }
    }
    var _a;
});
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

//# sourceMappingURL=data:application/json;base64,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b0NBQW9DO0FBQ3BDLEVBQUU7QUFDRiwwRUFBMEU7QUFDMUUsaUVBQWlFO0FBQ2pFLHFDQUFxQztBQUNyQyxFQUFFO0FBQ0YsaUVBQWlFO0FBQ2pFLFFBQVE7QUFDUixLQUFLO0FBQ0wsRUFBRTtBQUNGLGtCQUFrQjtBQUNsQiw4RUFBOEU7QUFDOUUsOEVBQThFO0FBQzlFLHFDQUFxQztBQUNyQyxFQUFFO0FBQ0YsZ0VBQWdFO0FBQ2hFLFFBQVE7QUFDUixLQUFLO0FBQ0wsRUFBRTtBQUNGLGtCQUFrQjtBQUNsQix3RUFBd0U7QUFDeEUsS0FBSztBQUNMLEVBQUU7QUFDRixvQkFBb0I7QUFDcEIsb0VBQW9FO0FBQ3BFLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0Ysa0JBQWtCO0FBQ2xCLCtFQUErRTtBQUMvRSxPQUFPO0FBQ1Asb0JBQW9CO0FBQ3BCLE1BQU07QUFDTixFQUFFO0FBQ0YsaUJBQWlCO0FBQ2pCLEtBQUs7QUFDTCxFQUFFO0FBQ0YsMkNBQTJDO0FBQzNDLG9HQUFvRztBQUNwRyxNQUFNO0FBQ04sSUFBSSIsImZpbGUiOiJjb250YWN0LWRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vc2VydmljZXMvY29udGFjdFwiO1xyXG5pbXBvcnQge0NvbnRhY3RTdG9yZX0gZnJvbSBcIi4vc2VydmljZXMvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZVBhcmFtcywgQ2FuRGVhY3RpdmF0ZSwgT25BY3RpdmF0ZSwgQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY29udGFjdC1kZXRhaWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkaXN0L2NvbnRhY3QtZGV0YWlsLmh0bWwnXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0RGV0YWlsIGltcGxlbWVudHMgT25BY3RpdmF0ZSwgQ2FuRGVhY3RpdmF0ZSAge1xyXG5cdHNlbGVjdGVkQ29udGFjdDogQ29udGFjdDtcclxuXHRvcmlnaW5hbENvbnRhY3Q6IENvbnRhY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29udGFjdFN0b3JlOiBDb250YWN0U3RvcmUsIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge1xyXG4gICAgfVxyXG5cclxuXHRyb3V0ZXJPbkFjdGl2YXRlKG5leHQ6IENvbXBvbmVudEluc3RydWN0aW9uLCBwcmV2OiBDb21wb25lbnRJbnN0cnVjdGlvbikge1xyXG5cdFx0dGhpcy5fY29udGFjdFN0b3JlLmZpbmQodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpKS50aGVuKChjb250YWN0OiBDb250YWN0KSA9PiB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRDb250YWN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb250YWN0KSk7XHJcblx0XHRcdHRoaXMub3JpZ2luYWxDb250YWN0ID0gY29udGFjdDtcclxuXHJcblx0XHRcdC8vdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgQ29udGFjdFNlbGVjdGVkKGNvbnRhY3QpKTtcclxuXHRcdH0pO1xyXG4gICAgfVxyXG5cclxuXHRyb3V0ZXJDYW5EZWFjdGl2YXRlKG5leHQ6IENvbXBvbmVudEluc3RydWN0aW9uLCBwcmV2OiBDb21wb25lbnRJbnN0cnVjdGlvbikge1xyXG5cdFx0aWYoIXRoaXMuYXJlRXF1YWwodGhpcy5vcmlnaW5hbENvbnRhY3QsIHRoaXMuc2VsZWN0ZWRDb250YWN0KSl7XHJcblx0XHRcdGxldCByZXN1bHQgPSBjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXMuIEFyZSB5b3Ugc3VyZSB5b3Ugd2lzaCB0byBsZWF2ZT8nKTtcclxuXHJcblx0XHRcdGlmKCFyZXN1bHQpe1xyXG5cdFx0XHRcdC8vdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgQ29udGFjdFNlbGVjdGVkKHRoaXMuc2VsZWN0ZWRDb250YWN0KSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHRzYXZlKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fY29udGFjdFN0b3JlLnNhdmUodGhpcy5zZWxlY3RlZENvbnRhY3QpLnRoZW4oKGNvbnRhY3Q6IENvbnRhY3QpID0+IHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZENvbnRhY3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2VsZWN0ZWRDb250YWN0KSk7XHJcblx0XHRcdHRoaXMub3JpZ2luYWxDb250YWN0ID0gY29udGFjdDtcclxuXHJcblx0XHRcdC8vdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgQ29udGFjdFVwZGF0ZWQoY29udGFjdCkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXQgY2FuU2F2ZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRDb250YWN0LnVzZXJuYW1lICYmIHRoaXMuc2VsZWN0ZWRDb250YWN0LmVtYWlsO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhcmVFcXVhbChvYmoxLCBvYmoyKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMob2JqMSkuZXZlcnkoKGtleSkgPT4gb2JqMi5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIChvYmoxW2tleV0gPT09IG9iajJba2V5XSkpO1xyXG5cdH07XHJcbn1cclxuLy8gaW1wb3J0IHtpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbi8vIGltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tIFwiYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yXCI7XHJcbi8vIGltcG9ydCB7Um91dGVyQ29uZmlndXJhdGlvbn0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbi8vXHJcbi8vIEBpbmplY3QoQ29udGFjdFN0b3JlLCBFdmVudEFnZ3JlZ2F0b3IpXHJcbi8vIGV4cG9ydCBjbGFzcyBDb250YWN0RGV0YWlsIHtcclxuLy8gXHRjb250YWN0U3RvcmU6IENvbnRhY3RTdG9yZTtcclxuLy8gXHRldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuLy8gXHRyb3V0ZUNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbjtcclxuLy9cclxuLy8gXHRzZWxlY3RlZENvbnRhY3Q6IENvbnRhY3Q7XHJcbi8vIFx0b3JpZ2luYWxDb250YWN0OiBDb250YWN0O1xyXG4vL1xyXG4vLyBcdGNvbnN0cnVjdG9yKGNvbnRhY3RTdG9yZTogQ29udGFjdFN0b3JlLCBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcikge1xyXG4vLyBcdFx0dGhpcy5jb250YWN0U3RvcmUgPSBjb250YWN0U3RvcmU7XHJcbi8vIFx0XHR0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcclxuLy8gXHR9XHJcbi8vXHJcbi8vIFx0YWN0aXZhdGUocGFyYW1zOiBhbnksIHJvdXRlQ29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uKSB7XHJcbi8vIFx0XHR0aGlzLnJvdXRlQ29uZmlnID0gcm91dGVDb25maWc7XHJcbi8vXHJcbi8vIFx0XHRyZXR1cm4gdGhpcy5jb250YWN0U3RvcmUuZmluZChwYXJhbXMuaWQpLnRoZW4oKGNvbnRhY3Q6IENvbnRhY3QpID0+IHtcclxuLy8gXHRcdFx0dGhpcy5zZWxlY3RlZENvbnRhY3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnRhY3QpKTtcclxuLy8gXHRcdFx0dGhpcy5vcmlnaW5hbENvbnRhY3QgPSBjb250YWN0O1xyXG4vL1xyXG4vLyBcdFx0XHR0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBDb250YWN0U2VsZWN0ZWQoY29udGFjdCkpO1xyXG4vLyBcdFx0fSk7XHJcbi8vIFx0fVxyXG4vL1xyXG4vLyBcdHNhdmUoKTogdm9pZCB7XHJcbi8vIFx0XHR0aGlzLmNvbnRhY3RTdG9yZS5zYXZlKHRoaXMuc2VsZWN0ZWRDb250YWN0KS50aGVuKChjb250YWN0OiBDb250YWN0KSA9PiB7XHJcbi8vIFx0XHRcdHRoaXMuc2VsZWN0ZWRDb250YWN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNlbGVjdGVkQ29udGFjdCkpO1xyXG4vLyBcdFx0XHR0aGlzLm9yaWdpbmFsQ29udGFjdCA9IGNvbnRhY3Q7XHJcbi8vXHJcbi8vIFx0XHRcdHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2gobmV3IENvbnRhY3RVcGRhdGVkKGNvbnRhY3QpKTtcclxuLy8gXHRcdH0pO1xyXG4vLyBcdH1cclxuLy9cclxuLy8gXHRnZXQgY2FuU2F2ZSgpe1xyXG4vLyBcdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRDb250YWN0LnVzZXJuYW1lICYmIHRoaXMuc2VsZWN0ZWRDb250YWN0LmVtYWlsO1xyXG4vLyBcdH1cclxuLy9cclxuLy8gXHRjYW5EZWFjdGl2YXRlKCl7XHJcbi8vIFx0XHRpZighdGhpcy5hcmVFcXVhbCh0aGlzLm9yaWdpbmFsQ29udGFjdCwgdGhpcy5zZWxlY3RlZENvbnRhY3QpKXtcclxuLy8gXHRcdFx0bGV0IHJlc3VsdCA9IGNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcy4gQXJlIHlvdSBzdXJlIHlvdSB3aXNoIHRvIGxlYXZlPycpO1xyXG4vL1xyXG4vLyBcdFx0XHRpZighcmVzdWx0KXtcclxuLy8gXHRcdFx0XHR0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBDb250YWN0U2VsZWN0ZWQodGhpcy5zZWxlY3RlZENvbnRhY3QpKTtcclxuLy8gXHRcdFx0fVxyXG4vLyBcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG4vLyBcdFx0fVxyXG4vL1xyXG4vLyBcdFx0cmV0dXJuIHRydWU7XHJcbi8vIFx0fVxyXG4vL1xyXG4vLyBcdHByaXZhdGUgYXJlRXF1YWwob2JqMSwgb2JqMik6IGJvb2xlYW4ge1xyXG4vLyBcdFx0cmV0dXJuIE9iamVjdC5rZXlzKG9iajEpLmV2ZXJ5KChrZXkpID0+IG9iajIuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAob2JqMVtrZXldID09PSBvYmoyW2tleV0pKTtcclxuLy8gXHR9O1xyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
