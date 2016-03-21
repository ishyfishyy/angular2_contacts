System.register(['angular2/core', './nav-bar', './contact-list'], function(exports_1, context_1) {
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
    var core_1, nav_bar_1, contact_list_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nav_bar_1_1) {
                nav_bar_1 = nav_bar_1_1;
            },
            function (contact_list_1_1) {
                contact_list_1 = contact_list_1_1;
            }],
        execute: function() {
            let App = class App {
            };
            App = __decorate([
                core_1.Component({
                    selector: 'contacts-app',
                    templateUrl: 'dist/app.html',
                    directives: [nav_bar_1.NavBar, contact_list_1.ContactList]
                }), 
                __metadata('design:paramtypes', [])
            ], App);
            exports_1("App", App);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO1lBQ0EsQ0FBQztZQVBEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFdBQVcsRUFBRSxlQUFlO29CQUM1QixVQUFVLEVBQUcsQ0FBQyxnQkFBTSxFQUFFLDBCQUFXLENBQUM7aUJBQ3JDLENBQUM7O21CQUFBO1lBRUYscUJBQ0MsQ0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyT3V0bGV0LCBSb3V0ZUNvbmZpZywgUm91dGVEZWZpbml0aW9ufSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtOYXZCYXJ9IGZyb20gJy4vbmF2LWJhcic7XHJcbmltcG9ydCB7Q29udGFjdExpc3R9IGZyb20gJy4vY29udGFjdC1saXN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb250YWN0cy1hcHAnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkaXN0L2FwcC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6ICBbTmF2QmFyLCBDb250YWN0TGlzdF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
