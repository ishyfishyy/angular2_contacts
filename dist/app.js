System.register(['angular2/core', 'angular2/router', './nav-bar', './contact-list', './contact-detail', './no-selection'], function(exports_1, context_1) {
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
    var core_1, router_1, nav_bar_1, contact_list_1, contact_detail_1, no_selection_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (nav_bar_1_1) {
                nav_bar_1 = nav_bar_1_1;
            },
            function (contact_list_1_1) {
                contact_list_1 = contact_list_1_1;
            },
            function (contact_detail_1_1) {
                contact_detail_1 = contact_detail_1_1;
            },
            function (no_selection_1_1) {
                no_selection_1 = no_selection_1_1;
            }],
        execute: function() {
            let App = class App {
            };
            App = __decorate([
                core_1.Component({
                    selector: 'contacts-app',
                    templateUrl: 'dist/app.html',
                    directives: [nav_bar_1.NavBar, contact_list_1.ContactList, contact_detail_1.ContactDetail, router_1.ROUTER_DIRECTIVES]
                }),
                router_1.RouteConfig([
                    { path: '/', component: no_selection_1.NoSelection, name: 'No-selection' },
                    { path: '/contacts/:id', component: contact_detail_1.ContactDetail, name: 'Contacts' }
                ]), 
                __metadata('design:paramtypes', [])
            ], App);
            exports_1("App", App);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtZQUNBLENBQUM7WUFaRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixXQUFXLEVBQUUsZUFBZTtvQkFDNUIsVUFBVSxFQUFHLENBQUMsZ0JBQU0sRUFBRSwwQkFBVyxFQUFFLDhCQUFhLEVBQUUsMEJBQWlCLENBQUM7aUJBQ3ZFLENBQUM7Z0JBRUQsb0JBQVcsQ0FBQztvQkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLDBCQUFXLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtvQkFDM0QsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7aUJBQ3hFLENBQUM7O21CQUFBO1lBRUYscUJBQ0MsQ0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtOYXZCYXJ9IGZyb20gJy4vbmF2LWJhcic7XHJcbmltcG9ydCB7Q29udGFjdExpc3R9IGZyb20gJy4vY29udGFjdC1saXN0JztcclxuaW1wb3J0IHtDb250YWN0RGV0YWlsfSBmcm9tICcuL2NvbnRhY3QtZGV0YWlsJztcclxuaW1wb3J0IHtOb1NlbGVjdGlvbn0gZnJvbSAnLi9uby1zZWxlY3Rpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvbnRhY3RzLWFwcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rpc3QvYXBwLmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogIFtOYXZCYXIsIENvbnRhY3RMaXN0LCBDb250YWN0RGV0YWlsLCBST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBOb1NlbGVjdGlvbiwgbmFtZTogJ05vLXNlbGVjdGlvbicgfSxcclxuICAgIHsgcGF0aDogJy9jb250YWN0cy86aWQnLCBjb21wb25lbnQ6IENvbnRhY3REZXRhaWwsIG5hbWU6ICdDb250YWN0cycgfVxyXG5dKVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
