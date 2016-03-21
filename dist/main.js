System.register(['zone.js', 'zone.js/dist/long-stack-trace-zone', 'reflect-metadata', 'angular2/platform/browser', 'angular2/router', 'angular2/http', './app', "./services/store"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, http_1, app_1, store_1;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (browser_1_1) {
                browser_1 = browser_1_1;
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
                store_1.ContactStore
            ]).then(success => console.log("Angular 2 Bootstrap successful"), error => console.log(error));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBLG1CQUFTLENBQUMsU0FBRyxFQUFFO2dCQUNkLHlCQUFnQjtnQkFDaEIscUJBQWM7Z0JBQ2Qsb0JBQVk7YUFDWixDQUFDLENBQUMsSUFBSSxDQUNOLE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLEVBQ3hELEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUMzQixDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0ICd6b25lLmpzL2Rpc3QvbG9uZy1zdGFjay10cmFjZS16b25lJztcbmltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5pbXBvcnQge0FwcH0gZnJvbSAnLi9hcHAnO1xuXG5pbXBvcnQge0NvbnRhY3RTdG9yZX0gZnJvbSBcIi4vc2VydmljZXMvc3RvcmVcIjtcblxuYm9vdHN0cmFwKEFwcCwgW1xuXHRST1VURVJfUFJPVklERVJTLFxuXHRIVFRQX1BST1ZJREVSUyxcblx0Q29udGFjdFN0b3JlXG5dKS50aGVuKFxuXHRzdWNjZXNzID0+IGNvbnNvbGUubG9nKFwiQW5ndWxhciAyIEJvb3RzdHJhcCBzdWNjZXNzZnVsXCIpLFxuXHRlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbik7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
