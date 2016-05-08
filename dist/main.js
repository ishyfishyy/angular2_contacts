System.register(['zone.js', 'zone.js/dist/long-stack-trace-zone', 'reflect-metadata', 'angular2/platform/browser', 'angular2/core', 'angular2/router', 'angular2/http', './app', "./services/store"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, router_1, http_1, app_1, store_1;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.App, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                store_1.ContactStore,
                core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
            ]).then(function (success) { return console.log("Angular 2 Bootstrap successful"); }, function (error) { return console.log(error); });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBLG1CQUFTLENBQUMsU0FBRyxFQUFFO2dCQUNkLHlCQUFnQjtnQkFDaEIscUJBQWM7Z0JBQ2Qsb0JBQVk7Z0JBQ1osV0FBSSxDQUFDLHlCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLDZCQUFvQixDQUFDO2FBQ3BELENBQUMsQ0FBQyxJQUFJLENBQ04sVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLEVBQTdDLENBQTZDLEVBQ3hELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDM0IsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd6b25lLmpzJztcbmltcG9ydCAnem9uZS5qcy9kaXN0L2xvbmctc3RhY2stdHJhY2Utem9uZSc7XG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge2JpbmR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTLCBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5cbmltcG9ydCB7QXBwfSBmcm9tICcuL2FwcCc7XG5cbmltcG9ydCB7Q29udGFjdFN0b3JlfSBmcm9tIFwiLi9zZXJ2aWNlcy9zdG9yZVwiO1xuXG5ib290c3RyYXAoQXBwLCBbXG5cdFJPVVRFUl9QUk9WSURFUlMsXG5cdEhUVFBfUFJPVklERVJTLFxuXHRDb250YWN0U3RvcmUsXG5cdGJpbmQoTG9jYXRpb25TdHJhdGVneSkudG9DbGFzcyhIYXNoTG9jYXRpb25TdHJhdGVneSlcbl0pLnRoZW4oXG5cdHN1Y2Nlc3MgPT4gY29uc29sZS5sb2coXCJBbmd1bGFyIDIgQm9vdHN0cmFwIHN1Y2Nlc3NmdWxcIiksXG5cdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
