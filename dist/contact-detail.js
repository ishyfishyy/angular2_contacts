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
            ContactDetail = (function () {
                function ContactDetail(_contactStore, _routeParams) {
                    this._contactStore = _contactStore;
                    this._routeParams = _routeParams;
                }
                ContactDetail.prototype.routerOnActivate = function (next, prev) {
                    var _this = this;
                    this._contactStore.find(this._routeParams.get('id')).then(function (contact) {
                        _this.selectedContact = JSON.parse(JSON.stringify(contact));
                        _this.originalContact = contact;
                        //this.eventAggregator.publish(new ContactSelected(contact));
                    });
                };
                ContactDetail.prototype.routerCanDeactivate = function (next, prev) {
                    if (!this.areEqual(this.originalContact, this.selectedContact)) {
                        var result = confirm('You have unsaved changes. Are you sure you wish to leave?');
                        if (!result) {
                        }
                        return result;
                    }
                    return true;
                };
                ContactDetail.prototype.save = function () {
                    var _this = this;
                    this._contactStore.save(this.selectedContact).then(function (contact) {
                        _this.selectedContact = JSON.parse(JSON.stringify(_this.selectedContact));
                        _this.originalContact = contact;
                        //this.eventAggregator.publish(new ContactUpdated(contact));
                    });
                };
                Object.defineProperty(ContactDetail.prototype, "canSave", {
                    get: function () {
                        return this.selectedContact.username && this.selectedContact.email;
                    },
                    enumerable: true,
                    configurable: true
                });
                ContactDetail.prototype.areEqual = function (obj1, obj2) {
                    return Object.keys(obj1).every(function (key) { return obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]); });
                };
                ;
                ContactDetail = __decorate([
                    core_1.Component({
                        selector: 'contact-detail',
                        templateUrl: 'dist/contact-detail.html'
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [store_1.ContactStore, (typeof (_a = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _a) || Object])
                ], ContactDetail);
                return ContactDetail;
                var _a;
            }());
            exports_1("ContactDetail", ContactDetail);
        }
    }
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

//# sourceMappingURL=data:application/json;base64,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QUFDRiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLEVBQUU7QUFDRiwrRUFBK0U7QUFDL0Usc0NBQXNDO0FBQ3RDLDRDQUE0QztBQUM1QyxLQUFLO0FBQ0wsRUFBRTtBQUNGLDZEQUE2RDtBQUM3RCxvQ0FBb0M7QUFDcEMsRUFBRTtBQUNGLDBFQUEwRTtBQUMxRSxpRUFBaUU7QUFDakUscUNBQXFDO0FBQ3JDLEVBQUU7QUFDRixpRUFBaUU7QUFDakUsUUFBUTtBQUNSLEtBQUs7QUFDTCxFQUFFO0FBQ0Ysa0JBQWtCO0FBQ2xCLDhFQUE4RTtBQUM5RSw4RUFBOEU7QUFDOUUscUNBQXFDO0FBQ3JDLEVBQUU7QUFDRixnRUFBZ0U7QUFDaEUsUUFBUTtBQUNSLEtBQUs7QUFDTCxFQUFFO0FBQ0Ysa0JBQWtCO0FBQ2xCLHdFQUF3RTtBQUN4RSxLQUFLO0FBQ0wsRUFBRTtBQUNGLG9CQUFvQjtBQUNwQixvRUFBb0U7QUFDcEUsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRixrQkFBa0I7QUFDbEIsK0VBQStFO0FBQy9FLE9BQU87QUFDUCxvQkFBb0I7QUFDcEIsTUFBTTtBQUNOLEVBQUU7QUFDRixpQkFBaUI7QUFDakIsS0FBSztBQUNMLEVBQUU7QUFDRiwyQ0FBMkM7QUFDM0Msb0dBQW9HO0FBQ3BHLE1BQU07QUFDTixJQUFJIiwiZmlsZSI6ImNvbnRhY3QtZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9zZXJ2aWNlcy9jb250YWN0XCI7XHJcbmltcG9ydCB7Q29udGFjdFN0b3JlfSBmcm9tIFwiLi9zZXJ2aWNlcy9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlUGFyYW1zLCBDYW5EZWFjdGl2YXRlLCBPbkFjdGl2YXRlLCBDb21wb25lbnRJbnN0cnVjdGlvbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb250YWN0LWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rpc3QvY29udGFjdC1kZXRhaWwuaHRtbCdcclxufSlcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbnRhY3REZXRhaWwgaW1wbGVtZW50cyBPbkFjdGl2YXRlLCBDYW5EZWFjdGl2YXRlICB7XHJcblx0c2VsZWN0ZWRDb250YWN0OiBDb250YWN0O1xyXG5cdG9yaWdpbmFsQ29udGFjdDogQ29udGFjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250YWN0U3RvcmU6IENvbnRhY3RTdG9yZSwgcHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKSB7XHJcbiAgICB9XHJcblxyXG5cdHJvdXRlck9uQWN0aXZhdGUobmV4dDogQ29tcG9uZW50SW5zdHJ1Y3Rpb24sIHByZXY6IENvbXBvbmVudEluc3RydWN0aW9uKSB7XHJcblx0XHR0aGlzLl9jb250YWN0U3RvcmUuZmluZCh0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJykpLnRoZW4oKGNvbnRhY3Q6IENvbnRhY3QpID0+IHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZENvbnRhY3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnRhY3QpKTtcclxuXHRcdFx0dGhpcy5vcmlnaW5hbENvbnRhY3QgPSBjb250YWN0O1xyXG5cclxuXHRcdFx0Ly90aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBDb250YWN0U2VsZWN0ZWQoY29udGFjdCkpO1xyXG5cdFx0fSk7XHJcbiAgICB9XHJcblxyXG5cdHJvdXRlckNhbkRlYWN0aXZhdGUobmV4dDogQ29tcG9uZW50SW5zdHJ1Y3Rpb24sIHByZXY6IENvbXBvbmVudEluc3RydWN0aW9uKSB7XHJcblx0XHRpZighdGhpcy5hcmVFcXVhbCh0aGlzLm9yaWdpbmFsQ29udGFjdCwgdGhpcy5zZWxlY3RlZENvbnRhY3QpKXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcy4gQXJlIHlvdSBzdXJlIHlvdSB3aXNoIHRvIGxlYXZlPycpO1xyXG5cclxuXHRcdFx0aWYoIXJlc3VsdCl7XHJcblx0XHRcdFx0Ly90aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBDb250YWN0U2VsZWN0ZWQodGhpcy5zZWxlY3RlZENvbnRhY3QpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cdHNhdmUoKTogdm9pZCB7XHJcblx0XHR0aGlzLl9jb250YWN0U3RvcmUuc2F2ZSh0aGlzLnNlbGVjdGVkQ29udGFjdCkudGhlbigoY29udGFjdDogQ29udGFjdCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkQ29udGFjdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zZWxlY3RlZENvbnRhY3QpKTtcclxuXHRcdFx0dGhpcy5vcmlnaW5hbENvbnRhY3QgPSBjb250YWN0O1xyXG5cclxuXHRcdFx0Ly90aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBDb250YWN0VXBkYXRlZChjb250YWN0KSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldCBjYW5TYXZlKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZENvbnRhY3QudXNlcm5hbWUgJiYgdGhpcy5zZWxlY3RlZENvbnRhY3QuZW1haWw7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFyZUVxdWFsKG9iajEsIG9iajIpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhvYmoxKS5ldmVyeSgoa2V5KSA9PiBvYmoyLmhhc093blByb3BlcnR5KGtleSkgJiYgKG9iajFba2V5XSA9PT0gb2JqMltrZXldKSk7XHJcblx0fTtcclxufVxyXG4vLyBpbXBvcnQge2luamVjdH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuLy8gaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gXCJhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3JcIjtcclxuLy8gaW1wb3J0IHtSb3V0ZXJDb25maWd1cmF0aW9ufSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuLy9cclxuLy8gQGluamVjdChDb250YWN0U3RvcmUsIEV2ZW50QWdncmVnYXRvcilcclxuLy8gZXhwb3J0IGNsYXNzIENvbnRhY3REZXRhaWwge1xyXG4vLyBcdGNvbnRhY3RTdG9yZTogQ29udGFjdFN0b3JlO1xyXG4vLyBcdGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4vLyBcdHJvdXRlQ29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uO1xyXG4vL1xyXG4vLyBcdHNlbGVjdGVkQ29udGFjdDogQ29udGFjdDtcclxuLy8gXHRvcmlnaW5hbENvbnRhY3Q6IENvbnRhY3Q7XHJcbi8vXHJcbi8vIFx0Y29uc3RydWN0b3IoY29udGFjdFN0b3JlOiBDb250YWN0U3RvcmUsIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yKSB7XHJcbi8vIFx0XHR0aGlzLmNvbnRhY3RTdG9yZSA9IGNvbnRhY3RTdG9yZTtcclxuLy8gXHRcdHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xyXG4vLyBcdH1cclxuLy9cclxuLy8gXHRhY3RpdmF0ZShwYXJhbXM6IGFueSwgcm91dGVDb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24pIHtcclxuLy8gXHRcdHRoaXMucm91dGVDb25maWcgPSByb3V0ZUNvbmZpZztcclxuLy9cclxuLy8gXHRcdHJldHVybiB0aGlzLmNvbnRhY3RTdG9yZS5maW5kKHBhcmFtcy5pZCkudGhlbigoY29udGFjdDogQ29udGFjdCkgPT4ge1xyXG4vLyBcdFx0XHR0aGlzLnNlbGVjdGVkQ29udGFjdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29udGFjdCkpO1xyXG4vLyBcdFx0XHR0aGlzLm9yaWdpbmFsQ29udGFjdCA9IGNvbnRhY3Q7XHJcbi8vXHJcbi8vIFx0XHRcdHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2gobmV3IENvbnRhY3RTZWxlY3RlZChjb250YWN0KSk7XHJcbi8vIFx0XHR9KTtcclxuLy8gXHR9XHJcbi8vXHJcbi8vIFx0c2F2ZSgpOiB2b2lkIHtcclxuLy8gXHRcdHRoaXMuY29udGFjdFN0b3JlLnNhdmUodGhpcy5zZWxlY3RlZENvbnRhY3QpLnRoZW4oKGNvbnRhY3Q6IENvbnRhY3QpID0+IHtcclxuLy8gXHRcdFx0dGhpcy5zZWxlY3RlZENvbnRhY3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2VsZWN0ZWRDb250YWN0KSk7XHJcbi8vIFx0XHRcdHRoaXMub3JpZ2luYWxDb250YWN0ID0gY29udGFjdDtcclxuLy9cclxuLy8gXHRcdFx0dGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgQ29udGFjdFVwZGF0ZWQoY29udGFjdCkpO1xyXG4vLyBcdFx0fSk7XHJcbi8vIFx0fVxyXG4vL1xyXG4vLyBcdGdldCBjYW5TYXZlKCl7XHJcbi8vIFx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZENvbnRhY3QudXNlcm5hbWUgJiYgdGhpcy5zZWxlY3RlZENvbnRhY3QuZW1haWw7XHJcbi8vIFx0fVxyXG4vL1xyXG4vLyBcdGNhbkRlYWN0aXZhdGUoKXtcclxuLy8gXHRcdGlmKCF0aGlzLmFyZUVxdWFsKHRoaXMub3JpZ2luYWxDb250YWN0LCB0aGlzLnNlbGVjdGVkQ29udGFjdCkpe1xyXG4vLyBcdFx0XHRsZXQgcmVzdWx0ID0gY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzLiBBcmUgeW91IHN1cmUgeW91IHdpc2ggdG8gbGVhdmU/Jyk7XHJcbi8vXHJcbi8vIFx0XHRcdGlmKCFyZXN1bHQpe1xyXG4vLyBcdFx0XHRcdHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2gobmV3IENvbnRhY3RTZWxlY3RlZCh0aGlzLnNlbGVjdGVkQ29udGFjdCkpO1xyXG4vLyBcdFx0XHR9XHJcbi8vIFx0XHRcdHJldHVybiByZXN1bHQ7XHJcbi8vIFx0XHR9XHJcbi8vXHJcbi8vIFx0XHRyZXR1cm4gdHJ1ZTtcclxuLy8gXHR9XHJcbi8vXHJcbi8vIFx0cHJpdmF0ZSBhcmVFcXVhbChvYmoxLCBvYmoyKTogYm9vbGVhbiB7XHJcbi8vIFx0XHRyZXR1cm4gT2JqZWN0LmtleXMob2JqMSkuZXZlcnkoKGtleSkgPT4gb2JqMi5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIChvYmoxW2tleV0gPT09IG9iajJba2V5XSkpO1xyXG4vLyBcdH07XHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
