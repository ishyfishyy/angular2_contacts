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
            ContactStore = (function () {
                function ContactStore(_http) {
                    var _this = this;
                    //localStorage.clear();
                    this.contacts = JSON.parse(localStorage.getItem(constants_1.Constants.STORAGE_CONTACTS));
                    if (!this.contacts) {
                        _http.get('https://api.github.com/users') // THIS: HTTP
                            .subscribe(function (users) {
                            users = users.json();
                            _this.contacts = users.map(function (user) {
                                console.log("xxx");
                                var contact = new contact_1.Contact();
                                contact.id = user.id;
                                contact.username = user.login;
                                contact.email = user.login + "@email.com";
                                contact.avatarUrl = user.avatar_url;
                                contact.description = user.type;
                                contact.checked = false;
                                return contact;
                            });
                            _this.contacts = _this.contacts.splice(20);
                        }, function (err) {
                            console.log(err);
                        }, function () {
                            _this.updateStorage();
                            _this.applyObservers();
                            console.log(_this.contacts);
                        });
                    }
                    console.log(this.contacts);
                }
                ContactStore.prototype.applyObservers = function () {
                    this.contacts.forEach(function (e, i) {
                    });
                };
                ContactStore.prototype.addNew = function () {
                    var contact = new contact_1.Contact();
                    contact.id = this.getId();
                    contact.username = "username";
                    contact.email = "e-mail";
                    //this.observerLocator.getObserver(contact, 'checked').subscribe(() => this.updateStorage());
                    this.contacts.push(contact);
                    this.updateStorage();
                };
                ContactStore.prototype.add = function (contact) {
                    this.contacts.push(contact);
                    this.updateStorage();
                };
                ContactStore.prototype.remove = function (contact) {
                    this.contacts.splice(this.contacts.indexOf(contact), 1);
                    this.updateStorage();
                };
                ContactStore.prototype.save = function (contact) {
                    var _this = this;
                    return new Promise(function (executor) {
                        var instance = JSON.parse(JSON.stringify(contact));
                        var found = _this.contacts.filter(function (x) { return x.id == contact.id; })[0];
                        if (found) {
                            var index = _this.contacts.indexOf(found);
                            Object.assign(_this.contacts[index], instance);
                        }
                        else {
                            instance.id = _this.getId();
                            _this.contacts.push(instance);
                        }
                        _this.updateStorage();
                        executor(instance);
                    });
                };
                ContactStore.prototype.find = function (id) {
                    var _this = this;
                    console.log("find request?");
                    return new Promise(function (executor) {
                        var found = _this.contacts.filter(function (x) { return x.id == id; })[0];
                        executor(found);
                    });
                    //return this.contacts.filter(x => x.id == id)[0];
                };
                ContactStore.prototype.getId = function () {
                    return Math.round(Math.random() * 100000);
                };
                ContactStore.prototype.updateStorage = function () {
                    localStorage.setItem(constants_1.Constants.STORAGE_CONTACTS, JSON.stringify(this.contacts));
                    console.log("update storage");
                };
                ContactStore = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], ContactStore);
                return ContactStore;
                var _a;
            }());
            exports_1("ContactStore", ContactStore);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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LDJCQUFJLEdBQUosVUFBSyxFQUFVO29CQUFmLGlCQVFDO29CQVBBLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFBLFFBQVE7d0JBQzFCLElBQUksS0FBSyxHQUFZLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlELFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDakIsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsa0RBQWtEO2dCQUVuRCxDQUFDO2dCQUVPLDRCQUFLLEdBQWI7b0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUVELG9DQUFhLEdBQWI7b0JBQ0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkExR0Y7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBMkdiLG1CQUFDOztZQUFELENBMUdBLEFBMEdDLElBQUE7WUExR0QsdUNBMEdDLENBQUEiLCJmaWxlIjoic2VydmljZXMvc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhY3R9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJ1xyXG5cclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge09ic2VydmVyfSBmcm9tICdyeGpzL09ic2VydmVyJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0U3RvcmUge1xyXG5cdGNvbnRhY3RzOiBBcnJheTxDb250YWN0PjtcclxuXHJcblx0Y29uc3RydWN0b3IoX2h0dHA6IEh0dHApIHsgLy8gVEhJUzogSU5KRUNUXHJcblx0XHQvL2xvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG5cdFx0dGhpcy5jb250YWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLlNUT1JBR0VfQ09OVEFDVFMpKTtcclxuXHJcblx0XHRpZighdGhpcy5jb250YWN0cykge1xyXG5cdFx0XHRfaHR0cC5nZXQoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMnKSAvLyBUSElTOiBIVFRQXHJcblx0XHRcdFx0Ly8ubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkgLy8gTk9UIFdPUktJTkdcclxuXHRcdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0dXNlcnMgPT4ge1xyXG5cdFx0XHRcdFx0XHR1c2VycyA9IHVzZXJzLmpzb24oKTtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuY29udGFjdHMgPSB1c2Vycy5tYXAoKHVzZXI6IHsgaWQ6IG51bWJlciwgbG9naW46IHN0cmluZywgYXZhdGFyX3VybDogc3RyaW5nLCB0eXBlOiBzdHJpbmcgfSkgPT4geyAvLyBUSElTXHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJ4eHhcIik7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGNvbnRhY3QgPSBuZXcgQ29udGFjdCgpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRhY3QuaWQgPSB1c2VyLmlkO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRhY3QudXNlcm5hbWUgPSB1c2VyLmxvZ2luO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRhY3QuZW1haWwgPSB1c2VyLmxvZ2luICsgXCJAZW1haWwuY29tXCI7XHJcblx0XHRcdFx0XHRcdFx0Y29udGFjdC5hdmF0YXJVcmwgPSB1c2VyLmF2YXRhcl91cmw7XHJcblx0XHRcdFx0XHRcdFx0Y29udGFjdC5kZXNjcmlwdGlvbiA9IHVzZXIudHlwZTtcclxuXHRcdFx0XHRcdFx0XHRjb250YWN0LmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGNvbnRhY3Q7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRhY3RzID0gdGhpcy5jb250YWN0cy5zcGxpY2UoMjApO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVyciA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZVN0b3JhZ2UoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5hcHBseU9ic2VydmVycygpO1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5jb250YWN0cyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KVxyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2codGhpcy5jb250YWN0cyk7XHJcblx0fVxyXG5cclxuXHRhcHBseU9ic2VydmVycygpOiB2b2lkIHtcclxuXHRcdHRoaXMuY29udGFjdHMuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YWRkTmV3KCk6IHZvaWQge1xyXG5cdFx0bGV0IGNvbnRhY3QgPSBuZXcgQ29udGFjdCgpO1xyXG5cdFx0Y29udGFjdC5pZCA9IHRoaXMuZ2V0SWQoKTtcclxuXHRcdGNvbnRhY3QudXNlcm5hbWUgPSBcInVzZXJuYW1lXCI7XHJcblx0XHRjb250YWN0LmVtYWlsID0gXCJlLW1haWxcIjtcclxuXHJcblx0XHQvL3RoaXMub2JzZXJ2ZXJMb2NhdG9yLmdldE9ic2VydmVyKGNvbnRhY3QsICdjaGVja2VkJykuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlU3RvcmFnZSgpKTtcclxuXHJcblx0XHR0aGlzLmNvbnRhY3RzLnB1c2goY29udGFjdCk7XHJcblx0XHR0aGlzLnVwZGF0ZVN0b3JhZ2UoKTtcclxuXHR9XHJcblxyXG5cdGFkZChjb250YWN0OiBDb250YWN0KTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbnRhY3RzLnB1c2goY29udGFjdCk7XHJcblx0XHR0aGlzLnVwZGF0ZVN0b3JhZ2UoKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZShjb250YWN0OiBDb250YWN0KTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbnRhY3RzLnNwbGljZSh0aGlzLmNvbnRhY3RzLmluZGV4T2YoY29udGFjdCksIDEpO1xyXG5cdFx0dGhpcy51cGRhdGVTdG9yYWdlKCk7XHJcblx0fVxyXG5cclxuXHRzYXZlKGNvbnRhY3Q6IENvbnRhY3QpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvciA9PiB7XHJcblx0XHRcdGxldCBpbnN0YW5jZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29udGFjdCkpO1xyXG5cdFx0XHRsZXQgZm91bmQ6IENvbnRhY3QgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguaWQgPT0gY29udGFjdC5pZClbMF07XHJcblxyXG5cdFx0XHRpZihmb3VuZCkge1xyXG5cdFx0XHRcdGxldCBpbmRleCA9IHRoaXMuY29udGFjdHMuaW5kZXhPZihmb3VuZCk7XHJcblx0XHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLmNvbnRhY3RzW2luZGV4XSwgaW5zdGFuY2UpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGluc3RhbmNlLmlkID0gdGhpcy5nZXRJZCgpO1xyXG5cdFx0XHRcdHRoaXMuY29udGFjdHMucHVzaChpbnN0YW5jZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy51cGRhdGVTdG9yYWdlKCk7XHJcblxyXG5cdFx0XHRleGVjdXRvcihpbnN0YW5jZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZpbmQoaWQ6IG51bWJlcikge1xyXG5cdFx0Y29uc29sZS5sb2coXCJmaW5kIHJlcXVlc3Q/XCIpO1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGV4ZWN1dG9yID0+IHtcclxuXHRcdFx0bGV0IGZvdW5kOiBDb250YWN0ID0gdGhpcy5jb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGlkKVswXTtcclxuXHRcdFx0ZXhlY3V0b3IoZm91bmQpO1xyXG5cdFx0fSk7XHJcblx0XHQvL3JldHVybiB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguaWQgPT0gaWQpWzBdO1xyXG5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0SWQoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU3RvcmFnZSgpOiB2b2lkIHtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5TVE9SQUdFX0NPTlRBQ1RTLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbnRhY3RzKSk7XHJcblx0XHRjb25zb2xlLmxvZyhcInVwZGF0ZSBzdG9yYWdlXCIpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
