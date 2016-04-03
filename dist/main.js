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
            ]).then(success => console.log("Angular 2 Bootstrap successful"), error => console.log(error));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBLG1CQUFTLENBQUMsU0FBRyxFQUFFO2dCQUNkLHlCQUFnQjtnQkFDaEIscUJBQWM7Z0JBQ2Qsb0JBQVk7Z0JBQ1osV0FBSSxDQUFDLHlCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLDZCQUFvQixDQUFDO2FBQ3BELENBQUMsQ0FBQyxJQUFJLENBQ04sT0FBTyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsRUFDeEQsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzNCLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgJ3pvbmUuanMvZGlzdC9sb25nLXN0YWNrLXRyYWNlLXpvbmUnO1xuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcblxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtiaW5kfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSUywgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuXG5pbXBvcnQge0FwcH0gZnJvbSAnLi9hcHAnO1xuXG5pbXBvcnQge0NvbnRhY3RTdG9yZX0gZnJvbSBcIi4vc2VydmljZXMvc3RvcmVcIjtcblxuYm9vdHN0cmFwKEFwcCwgW1xuXHRST1VURVJfUFJPVklERVJTLFxuXHRIVFRQX1BST1ZJREVSUyxcblx0Q29udGFjdFN0b3JlLFxuXHRiaW5kKExvY2F0aW9uU3RyYXRlZ3kpLnRvQ2xhc3MoSGFzaExvY2F0aW9uU3RyYXRlZ3kpXG5dKS50aGVuKFxuXHRzdWNjZXNzID0+IGNvbnNvbGUubG9nKFwiQW5ndWxhciAyIEJvb3RzdHJhcCBzdWNjZXNzZnVsXCIpLFxuXHRlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbik7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
