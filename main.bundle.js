webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getBusyConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app_routing_app_routing_component__ = __webpack_require__("./src/app/components/app.routing/app.routing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_shared_app_component__ = __webpack_require__("./src/app/components/shared/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_busy__ = __webpack_require__("./node_modules/angular2-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_busy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_canActivate_service__ = __webpack_require__("./src/app/services/canActivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_notification_notification_component__ = __webpack_require__("./src/app/components/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_notif_service_service__ = __webpack_require__("./src/app/services/notif-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_login_service_service__ = __webpack_require__("./src/app/services/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_customer_service_service__ = __webpack_require__("./src/app/services/customer-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_customer_list_list_component__ = __webpack_require__("./src/app/components/customer/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_customer_newcustomer_newcustomer_component__ = __webpack_require__("./src/app/components/customer/newcustomer/newcustomer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_customer_updatecustomer_update_component__ = __webpack_require__("./src/app/components/customer/updatecustomer/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_pageNotFound_PageNotFound_component__ = __webpack_require__("./src/app/components/pageNotFound/PageNotFound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_point_point_component__ = __webpack_require__("./src/app/components/point/point.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_rewards_rewards_component__ = __webpack_require__("./src/app/components/rewards/rewards.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























function getBusyConfig() {
    return new __WEBPACK_IMPORTED_MODULE_11_angular2_busy__["BusyConfig"]({
        message: 'Please wait ...',
        backdrop: false,
        delay: 300,
        minDuration: 800,
        wrapperClass: 'ng-busy'
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__components_shared_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_customer_list_list_component__["a" /* CustomerListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_customer_newcustomer_newcustomer_component__["a" /* Newcustomer */],
                __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_customer_updatecustomer_update_component__["a" /* UpdateCustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_notification_notification_component__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_pageNotFound_PageNotFound_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_point_point_component__["a" /* PointComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_rewards_rewards_component__["a" /* RewardsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_busy__["BusyModule"].forRoot(getBusyConfig()),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_app_routing_app_routing_component__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular_datatables__["a" /* DataTablesModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_12__services_canActivate_service__["a" /* CanActivateService */], __WEBPACK_IMPORTED_MODULE_14__services_notif_service_service__["a" /* NotifService */], __WEBPACK_IMPORTED_MODULE_15__services_login_service_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_16__services_customer_service_service__["a" /* CustomerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__components_shared_app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_13__components_notification_notification_component__["a" /* NotificationComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  This is what I'm all about. <a href=\"\" (click)=\"sendMeHome()\"><strong>Take me back</strong></a>.\r\n</p>\r\n\r\n\r\n<ul>\r\n  <li *ngFor=\"let goal of goals\">\r\n    {{ goal }}\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(route, router, _data) {
        this.route = route;
        this.router = router;
        this._data = _data;
        this.route.params.subscribe(function (res) { return console.log(res.id); });
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.goal.subscribe(function (res) { return _this.goals = res; });
    };
    AboutComponent.prototype.sendMeHome = function () {
        this.router.navigate(['']);
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/app.routing/app.routing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_newcustomer_newcustomer_component__ = __webpack_require__("./src/app/components/customer/newcustomer/newcustomer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_list_list_component__ = __webpack_require__("./src/app/components/customer/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_canActivate_service__ = __webpack_require__("./src/app/services/canActivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pageNotFound_PageNotFound_component__ = __webpack_require__("./src/app/components/pageNotFound/PageNotFound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_updatecustomer_update_component__ = __webpack_require__("./src/app/components/customer/updatecustomer/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_point_point_component__ = __webpack_require__("./src/app/components/point/point.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rewards_rewards_component__ = __webpack_require__("./src/app/components/rewards/rewards.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */]
    },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'point', component: __WEBPACK_IMPORTED_MODULE_10__components_point_point_component__["a" /* PointComponent */] },
    { path: 'rewards', component: __WEBPACK_IMPORTED_MODULE_11__rewards_rewards_component__["a" /* RewardsComponent */] },
    { path: 'customerlist', component: __WEBPACK_IMPORTED_MODULE_4__customer_list_list_component__["a" /* CustomerListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_canActivate_service__["a" /* CanActivateService */]] },
    { path: 'newcustomer', component: __WEBPACK_IMPORTED_MODULE_3__customer_newcustomer_newcustomer_component__["a" /* Newcustomer */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_canActivate_service__["a" /* CanActivateService */]] },
    { path: 'updatecustomer/:id', component: __WEBPACK_IMPORTED_MODULE_7__customer_updatecustomer_update_component__["a" /* UpdateCustomerComponent */] },
    // otherwise redirect to home
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__pageNotFound_PageNotFound_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/customer/list/list.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n  body{\r\n    background: #ffffff!important;\r\n    padding: 3em;\r\n    font-family: 'Raleway', 'Arial';\r\n    color:black!important;\r\n}"

/***/ }),

/***/ "./src/app/components/customer/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\">\r\n      <div class=\"col-lg-8\">\r\n        <p><b>Filter by Customer  :</b>\r\n          <select [(ngModel)]=\"selectedItem\" (ngModelChange)=\"searchCar()\" >\r\n            <option   [value]=\"-1\"   selected>choose option</option>\r\n            <option  *ngFor=\"let item of listCustomers\"  [value]=\"item.first\" >{{item.first}}</option>\r\n          </select>\r\n        </p>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <a class=\"btn btn-primary btn-xs pull-right \" routerLink=\"/newcustomer\" queryParamsHandling preserveFragment><b>+</b>  New Customer </a>\r\n      </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"  class=\"row-border hover\">\r\n      <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>First</th>\r\n            <th>Last</th>\r\n            <th>Middle</th>\r\n            <th>Birth Date</th>      \r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let customer of filteredCustomers\">\r\n            <td>{{customer.customerId}} </td>\r\n            <td>{{customer.first}}</td>\r\n            <td>{{customer.last}}</td>\r\n            <td>{{customer.middle}}</td>\r\n            <td>{{customer.birthdate | date }}</td>\r\n            <td>\r\n              <button class=\"btn btn-link\"  routerLink=\"/updatecustomer/{{customer.customerId}}\" queryParamsHandling preserveFragment>\r\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Update \r\n              </button>\r\n              <button class=\"btn btn-link\" (click)=\"deleteCustomer(customer.customerId)\">\r\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n "

/***/ }),

/***/ "./src/app/components/customer/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_notif_service_service__ = __webpack_require__("./src/app/services/notif-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customer_service_service__ = __webpack_require__("./src/app/services/customer-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(_customerService, notifService) {
        this._customerService = _customerService;
        this.notifService = notifService;
        this.listCustomers = [];
        this.filteredCustomers = [];
        this.first = "";
        this.last = "";
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Subject */]();
        this.dtOptions = {};
        this.init();
    }
    CustomerListComponent.prototype.init = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.selectedItem = -1;
        this._customerService.getCustomers().then(function (response) {
            _this.listCustomers = response.json();
            _this.filteredCustomers = _this.listCustomers.slice(0);
            // Calling the DT trigger to manually render the table
            _this.dtTrigger.next();
        }).catch(function (resp) {
            console.log(resp);
            _this.notifService.error("Server Exception was raised");
        });
    };
    CustomerListComponent.prototype.searchCustomer = function () {
        var _this = this;
        if (this.selectedItem == -1) {
            this.filteredCustomers = this.listCustomers.slice(0);
        }
        else {
            this.filteredCustomers = this.listCustomers.filter(function (customer) { return customer.customerId == _this.selectedItem; });
        }
    };
    CustomerListComponent.prototype.deleteCustomer = function (id) {
        var _this = this;
        this._customerService.deleteCustomer(id).then(function (response) {
            _this.filteredCustomers = _this.filteredCustomers.filter(function (item) {
                return (item.customerId != id);
            });
            _this.notifService.success("Delete Operation was well done");
            // this.dtTrigger.next();
        }).catch(function (resp) {
            _this.notifService.error("Server Exception was raised");
        });
    };
    CustomerListComponent.prototype.ngOnInit = function () {
    };
    CustomerListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-list',
            template: __webpack_require__("./src/app/components/customer/list/list.component.html"),
            styles: [__webpack_require__("./src/app/components/customer/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_customer_service_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_0__services_notif_service_service__["a" /* NotifService */]])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/components/customer/newcustomer/newcustomer.component.css":
/***/ (function(module, exports) {

module.exports = ".has-error{\r\n    color : red !important;\r\n}"

/***/ }),

/***/ "./src/app/components/customer/newcustomer/newcustomer.component.html":
/***/ (function(module, exports) {

module.exports = "<h3> New Customer</h3>\r\n<form [formGroup]=\"complexForm\" (ngSubmit)=\"newCustomer(complexForm.value)\">\r\n  <div class=\"form-group\">\r\n    <label for=\"\"><b>First</b></label>\r\n    <input type=\"text\" class=\"form-control\" [formControl]=\"complexForm.controls['first']\" />\r\n    <div *ngIf=\"complexForm.controls['first'].hasError('required')\" class=\"has-error\">field required</div>    \r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label for=\"\"><b>Last</b></label>\r\n      <input type=\"text\" class=\"form-control\" [formControl]=\"complexForm.controls['last']\"/>\r\n      <div *ngIf=\"complexForm.controls['last'].hasError('required')\" class=\"has-error\">field required</div>    \r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"\"><b>Middle</b></label>\r\n    <input type=\"text\" class=\"form-control\" [formControl]=\"complexForm.controls['middle']\"/>\r\n    <div *ngIf=\"complexForm.controls['middle'].hasError('required')\" class=\"has-error\">field required</div>    \r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!complexForm.valid\">Submit</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/components/customer/newcustomer/newcustomer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Newcustomer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customer_service_service__ = __webpack_require__("./src/app/services/customer-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notif_service_service__ = __webpack_require__("./src/app/services/notif-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Newcustomer = /** @class */ (function () {
    function Newcustomer(fb, customerService, notifService) {
        this.customerService = customerService;
        this.notifService = notifService;
        // Here we are using the FormBuilder to build out our form.
        this.complexForm = fb.group({
            // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
            'first': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'last': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'middle': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
    }
    Newcustomer.prototype.ngOnInit = function () {
    };
    Newcustomer.prototype.newCustomer = function (model) {
        var _this = this;
        this.customerService.addNewCustomer(model).then(function (resp) {
            _this.notifService.success("Insertion operation was well done");
        }).catch(function (exp) {
            _this.notifService.error("Server Exception was raised");
        });
    };
    Newcustomer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newcar',
            template: __webpack_require__("./src/app/components/customer/newcustomer/newcustomer.component.html"),
            styles: [__webpack_require__("./src/app/components/customer/newcustomer/newcustomer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_customer_service_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_3__services_notif_service_service__["a" /* NotifService */]])
    ], Newcustomer);
    return Newcustomer;
}());



/***/ }),

/***/ "./src/app/components/customer/updatecustomer/update.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/customer/updatecustomer/update.component.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/><br/>\r\n<div class=\"row\">\r\n   \r\n  <div class=\"col-sm-6\">\r\n      <div class=\"card-header bg-success text-white card-title\">\r\n          Customer Information\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n          <div class=\"card-body\">\r\n              <form ng-if=\"complexForm != null\" [formGroup]=\"complexForm\" (ngSubmit)=\"updateCustomer(complexForm.value)\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"\"><b>Id</b></label>\r\n                <input type=\"text\" class=\"form-control\"  [formControl]=\"complexForm.controls['customerId']\" \r\n                  disabled>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"\"><b>First</b></label>\r\n                <input type=\"text\" class=\"form-control\"   [formControl]=\"complexForm.controls['first']\">\r\n                <div *ngIf=\"complexForm.controls['first'].hasError('required')\" class=\"has-error\">field required</div>    \r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"\"><b>Last</b></label>\r\n                <input type=\"text\" class=\"form-control\"   [formControl]=\"complexForm.controls['last']\">\r\n                <div *ngIf=\"complexForm.controls['last'].hasError('required')\" class=\"has-error\">field required</div>    \r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"\"><b>Middle</b></label>\r\n                <input type=\"text\" class=\"form-control\"   [formControl]=\"complexForm.controls['middle']\">\r\n                <div *ngIf=\"complexForm.controls['middle'].hasError('required')\" class=\"has-error\">field required</div>    \r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!complexForm.valid\">Submit</button>\r\n              </div>\r\n            </form>\r\n         \r\n          </div>\r\n      </div>\r\n  </div>  \r\n\r\n\r\n   \r\n  <div class=\"col-sm-6\">\r\n      <div class=\"card-header bg-primary text-white card-title\">\r\n          Membership Information\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n          <div class=\"card-body\">\r\n              <form ng-if=\"complexForm != null\" [formGroup]=\"complexForm\" (ngSubmit)=\"updateCustomer(complexForm.value)\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"\"><b>Membership No</b></label>\r\n                <input type=\"text\" class=\"form-control\" value=\"201803300001\"\r\n                  disabled>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"\"><b>Expiration Date</b></label>\r\n                <input type=\"text\" class=\"form-control\" value=\"12/01/2019\">\r\n                <div *ngIf=\"complexForm.controls['first'].hasError('required')\" class=\"has-error\">field required</div>    \r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"\"><b>Status</b></label>\r\n                <input type=\"text\" class=\"form-control\"  value=\"Active\">\r\n                <div *ngIf=\"complexForm.controls['last'].hasError('required')\" class=\"has-error\">field required</div>    \r\n              </div>\r\n            \r\n\r\n              <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!complexForm.valid\">Submit</button>\r\n              </div>\r\n            </form>\r\n         \r\n          </div>\r\n      </div>\r\n  </div>  \r\n</div>"

/***/ }),

/***/ "./src/app/components/customer/updatecustomer/update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customer_service_service__ = __webpack_require__("./src/app/services/customer-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notif_service_service__ = __webpack_require__("./src/app/services/notif-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateCustomerComponent = /** @class */ (function () {
    function UpdateCustomerComponent(fb, customerService, notifService, route) {
        var _this = this;
        this.fb = fb;
        this.customerService = customerService;
        this.notifService = notifService;
        this.route = route;
        // Here we are using the FormBuilder to build out our form.
        this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.complexForm = fb.group({
                // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
                'customerId': [""],
                'first': ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                'last': ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                'middle': ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            });
            _this.customerService.getCustomer(id).then(function (resp) {
                var customer = resp.json();
                _this.complexForm = fb.group({
                    // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
                    'customerId': [customer.customerId],
                    'first': [customer.first, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                    'last': [customer.last, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                    'middle': [customer.middle, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                });
            }).catch(function (exp) {
                _this.notifService.error("Server Exception was raised");
            });
        });
    }
    UpdateCustomerComponent.prototype.ngOnInit = function () {
    };
    UpdateCustomerComponent.prototype.updateCustomer = function (model) {
        var _this = this;
        console.log(model);
        this.customerService.updateCustomer(model).then(function (resp) {
            _this.notifService.success("Update operation is well done");
        }).catch(function (exp) {
            _this.notifService.error("Server Exception was raised");
        });
    };
    UpdateCustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-updatecustomer',
            template: __webpack_require__("./src/app/components/customer/updatecustomer/update.component.html"),
            styles: [__webpack_require__("./src/app/components/customer/updatecustomer/update.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_customer_service_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_3__services_notif_service_service__["a" /* NotifService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], UpdateCustomerComponent);
    return UpdateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 50% auto;\r\n        grid-template-columns: 50% auto;\r\n}\r\n.col{\r\n    padding: .5em 1.3em;\r\n}\r\n.color-dark{\r\n    background: #2885C4;\r\n}\r\n.color-light{\r\n    background: #57B3F1;\r\n}\r\ninput.txt{\r\n   border: 0;\r\n   padding: 1em;\r\n   width: 80%;\r\n   margin-bottom:2em;\r\n}\r\ninput.btn{\r\n   border:0;\r\n   display:block;\r\n   padding:1em 3em;\r\n   background:#A5F883;\r\n   color:#003A61;\r\n   margin-bottom:1em;\r\n   cursor:pointer;\r\n}\r\n.life-container{\r\n   background:#3FA0E1;\r\n   padding:1em;\r\n   font-weight:bold;\r\n   cursor:pointer;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container color-dark\">\r\n  <div class=\"col\">\r\n     <p>Add a bucket List itemm</p>\r\n  </div>\r\n  <div class=\"col\">\r\n    <p>Your bucket list [{{itemCount}}]</p>\r\n  </div>\r\n</div>\r\n<div class=\"container color-light\" [@goals]= \"goals.length\">\r\n  <div class=\"col\">\r\n     <p class=\"sm\">Use this form below to add a new bucket list goal. What do you want?</p>\r\n     <form>\r\n       <input type=\"text\" class=\"txt\" name=\"item\" placeholder=\"Life goal..\" [(ngModel)]= \"goalText\">\r\n       <input type=\"submit\" class=\"btn\" [value]=\"btnText\" (click)= \"addItem()\"> \r\n     </form>\r\n  </div>\r\n  <div class=\"col\">\r\n    <p class=\"life-container\" *ngFor=\"let goal of goals; let i = index\" (click)=\"removeItem(i)\">\r\n      {{ goal}}\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_data) {
        this._data = _data;
        this.itemCount = 4;
        this.btnText = "Add Item";
        this.goalText = "my First Goal";
        this.goals = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemCount = this.goals.length;
        this._data.goal.subscribe(function (res) { return _this.goals = res; });
        this._data.changeGoal(this.goals);
    };
    HomeComponent.prototype.addItem = function () {
        this.goals.push(this.goalText);
        this.goalText = "";
        this.itemCount = this.goals.length;
        this._data.changeGoal(this.goals);
    };
    HomeComponent.prototype.removeItem = function (i) {
        this.goals.splice(i, 1);
        this.itemCount = this.goals.length;
        this._data.changeGoal(this.goals);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('goals', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["query"])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["query"])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["stagger"])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('.6s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["keyframes"])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                            ]))
                        ]), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["query"])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["stagger"])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('.6s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["keyframes"])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n\r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = " <form [ngBusy]=\"busy\" class=\"form-horizontal\"  (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>  \r\n     <div  class=\"row\">\r\n        <div class=\"col-md-3\"></div>\r\n        <div class=\"col-md-6\">\r\n            <h4>Login</h4>\r\n            <hr>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\"></div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label class=\"sr-only\" for=\"email\">E-Mail Address</label>\r\n                <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n                    <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\r\n                    <input type=\"email\" class=\"form-control\" name=\"email\" \r\n                    [(ngModel)]=\"model.email\" #username=\"ngModel\" [pattern]=\"EMAIL_REGEXP\" required />\r\n                  </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n                <div class=\"form-control-feedback\" *ngIf=\"f.submitted && !username.valid\">\r\n                    <span class=\"text-danger align-middle\">\r\n                        <i class=\"fa fa-close\"></i> Username is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\"></div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label class=\"sr-only\" for=\"password\">Password</label>\r\n                <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n                    <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\"\r\n                    [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                  </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n                <div class=\"form-control-feedback\" *ngIf=\"f.submitted && !password.valid\">\r\n                    <span class=\"text-danger align-middle\">\r\n                        <i class=\"fa fa-close\"></i> Password is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\"></div>\r\n        <div class=\"col-md-6\" style=\"padding-top: .35rem\">\r\n            <div class=\"form-check mb-2 mr-sm-2 mb-sm-0\">\r\n                <label class=\"form-check-label\">\r\n                    <input  [(ngModel)]=\"model.rememberMe\"  class=\"form-check-input\" name=\"rememberMe\"\r\n                           type=\"checkbox\" >\r\n                    <span style=\"padding-bottom: .15rem\">Remember me</span>\r\n                </label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"padding-top: 1rem\">\r\n        <div class=\"col-md-3\"></div>\r\n        <div class=\"col-md-6\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\"><i class=\"fa fa-sign-in\"></i> Login</button>            \r\n        </div>\r\n    </div>\r\n</form>\r\n "

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service_service__ = __webpack_require__("./src/app/services/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notif_service_service__ = __webpack_require__("./src/app/services/notif-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, notifService, loginService) {
        this.router = router;
        this.notifService = notifService;
        this.loginService = loginService;
        this.EMAIL_REGEXP = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";
        this.loading = false;
        this.message = "";
        this.model = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.removeItem('loggedUser');
        this.loading = false;
        this.loginService.logout().then(function (resp) {
            _this.loginService.loginSubject.next(1);
        });
    };
    LoginComponent.prototype.ngDestroy = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        //clean notifications message on page
        this.notifService.subject.next();
        this.loading = true;
        this.busy = this.loginService.login(this.model).then(function (resp) {
            _this.loading = false;
            localStorage.setItem('loggedUser', _this.model.email);
            _this.loginService.loginSubject.next(1);
            _this.router.navigate(["/list"]);
        }).catch(function (exp) {
            _this.notifService.error(exp._body);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        //clean notifications message on page
        this.notifService.subject.next();
        this.loading = true;
        this.busy = this.loginService.logout().then(function (resp) {
            _this.loading = false;
            localStorage.setItem('loggedUser', "");
            _this.router.navigate(["/login"]);
        }).catch(function (exp) {
            _this.notifService.error(exp._body);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_notif_service_service__["a" /* NotifService */],
            __WEBPACK_IMPORTED_MODULE_3__services_login_service_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"message\" \r\n[ngClass]=\"{'alert': message}\"\r\n[class]=\"message.type\">\r\n    <strong>{{message.text}}</strong>\r\n</div>"

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notif_service_service__ = __webpack_require__("./src/app/services/notif-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(notifService) {
        this.notifService = notifService;
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notifService.getMessage().subscribe(function (p) {
            _this.message = p;
        });
    };
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'notification',
            template: __webpack_require__("./src/app/components/notification/notification.component.html"),
            styles: [__webpack_require__("./src/app/components/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_notif_service_service__["a" /* NotifService */]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/pageNotFound/PageNotFound.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pageNotFound/PageNotFound.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  404 : Page Not Found !\r\n</p>"

/***/ }),

/***/ "./src/app/components/pageNotFound/PageNotFound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-PageNotFound',
            template: __webpack_require__("./src/app/components/pageNotFound/PageNotFound.component.html"),
            styles: [__webpack_require__("./src/app/components/pageNotFound/PageNotFound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/point/point.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 100% auto;\r\n        grid-template-columns: 100% auto;\r\n}\r\n.col{\r\n    padding: .5em 1.3em;\r\n}\r\n.color-dark{\r\n    background: #2885C4;\r\n}\r\n.color-light{\r\n    background: #fff;\r\n}\r\ninput.txt{\r\n   border: 0;\r\n   padding: 1em;\r\n   width: 80%;\r\n   margin-bottom:2em;\r\n}\r\ninput.btn{\r\n   border:0;\r\n   display:block;\r\n   padding:1em 3em;\r\n   background:#A5F883;\r\n   color:#003A61;\r\n   margin-bottom:1em;\r\n   cursor:pointer;\r\n}\r\n.life-container{\r\n    color:#000;\r\n   background:#f0f0f5;\r\n   padding:1em;\r\n   font-weight:normal;\r\n   cursor:pointer;\r\n}"

/***/ }),

/***/ "./src/app/components/point/point.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\r\n<!-- <div>\r\n<div class=\"card-header\">\r\n    Point\r\n  </div> -->\r\n  <!-- <div class=\"card-body\"> -->\r\n    <!-- <img src=\"../../../assets/br-more-pts-baner1.gif\"> -->\r\n  <!-- </div> -->\r\n  <!-- <div class=\"card-footer text-muted\">\r\n    2 days ago\r\n  </div> -->\r\n<!-- </div>  -->\r\n\r\n<!-- <div class=\"card\" style=\"width: 18rem;\">\r\n  <img class=\"card-img-top\" src=\"../../../assets/br-more-pts-baner1.gif\" alt=\"Card image cap\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Card title</h5>\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n  </div>\r\n  <ul class=\"list-group list-group-flush\">\r\n    <li class=\"list-group-item\">Cras justo odio</li>\r\n    <li class=\"list-group-item\">Dapibus ac facilisis in</li>\r\n    <li class=\"list-group-item\">Vestibulum at eros</li>\r\n  </ul>\r\n  <div class=\"card-body\">\r\n    <a href=\"#\" class=\"card-link\">Card link</a>\r\n    <a href=\"#\" class=\"card-link\">Another link</a>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\"> \r\n      <div class=\"card-header bg-success text-white card-title\">\r\n          Customer Information\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <input type=\"text\" placeholder=\"Search Card Number\" class=\"form-control\"/><br/>\r\n            <div class=\"container color-light\" [@goals]= \"goals.length\">\r\n                <div class=\"col\">\r\n              <p class=\"life-container\" *ngFor=\"let goal of goals;let i = index\" (click)=\"redirectCustomerInfo(i)\">\r\n                  {{ goal}}\r\n              </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n          <img class=\"card-img-top\" src=\"../../../assets/br-more-pts-baner1.gif\" alt=\"Card image cap\">\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <img class=\"card-img-top\" src=\"../../../assets/BMW_S1000RR-loyalty-rewards_large.png\" alt=\"Card image cap\">\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"card\">\r\n          <div class=\"card-body\">\r\n              <img class=\"card-img-top\" src=\"../../../assets/reward_points.png\" alt=\"Card image cap\">\r\n          </div>\r\n        </div> -->\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/components/point/point.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PointComponent = /** @class */ (function () {
    function PointComponent(_data, router) {
        this._data = _data;
        this.router = router;
        this.itemCount = 4;
        this.goals = [];
    }
    PointComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemCount = this.goals.length;
        this._data.goal.subscribe(function (res) { return _this.goals = res; });
        this._data.changeGoal(this.goals);
    };
    PointComponent.prototype.redirectCustomerInfo = function (i) {
        this.router.navigate(['/rewards']);
        // this.goals.splice(i, 1);
        // this.itemCount = this.goals.length;
        // this._data.changeGoal(this.goals);
    };
    PointComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-point',
            template: __webpack_require__("./src/app/components/point/point.component.html"),
            styles: [__webpack_require__("./src/app/components/point/point.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('goals', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["query"])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["query"])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["stagger"])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('.6s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["keyframes"])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                            ]))
                        ]), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["query"])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["stagger"])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('.6s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["keyframes"])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], PointComponent);
    return PointComponent;
}());



/***/ }),

/***/ "./src/app/components/rewards/rewards.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 100% auto;\r\n        grid-template-columns: 100% auto;\r\n}\r\n.col{\r\n    padding: .5em 1.3em;\r\n}\r\n.color-dark{\r\n    background: #2885C4;\r\n}\r\n.color-light{\r\n    background: #fff;\r\n}\r\ninput.txt{\r\n   border: 0;\r\n   padding: 1em;\r\n   width: 80%;\r\n   margin-bottom:2em;\r\n}\r\ninput.btn{\r\n   border:0;\r\n   display:block;\r\n   padding:1em 3em;\r\n   background:#A5F883;\r\n   color:#003A61;\r\n   margin-bottom:1em;\r\n   cursor:pointer;\r\n}\r\n.life-container{\r\n    color:#000;\r\n   background:#f0f0f5;\r\n   padding:1em;\r\n   font-weight:normal;\r\n   cursor:pointer;\r\n}"

/***/ }),

/***/ "./src/app/components/rewards/rewards.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\r\n<!-- <div>\r\n<div class=\"card-header\">\r\n    Point\r\n  </div> -->\r\n  <!-- <div class=\"card-body\"> -->\r\n    <!-- <img src=\"../../../assets/br-more-pts-baner1.gif\"> -->\r\n  <!-- </div> -->\r\n  <!-- <div class=\"card-footer text-muted\">\r\n    2 days ago\r\n  </div> -->\r\n<!-- </div>  -->\r\n\r\n<!-- <div class=\"card\" style=\"width: 18rem;\">\r\n  <img class=\"card-img-top\" src=\"../../../assets/br-more-pts-baner1.gif\" alt=\"Card image cap\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Card title</h5>\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n  </div>\r\n  <ul class=\"list-group list-group-flush\">\r\n    <li class=\"list-group-item\">Cras justo odio</li>\r\n    <li class=\"list-group-item\">Dapibus ac facilisis in</li>\r\n    <li class=\"list-group-item\">Vestibulum at eros</li>\r\n  </ul>\r\n  <div class=\"card-body\">\r\n    <a href=\"#\" class=\"card-link\">Card link</a>\r\n    <a href=\"#\" class=\"card-link\">Another link</a>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\"> \r\n      <div class=\"card-header bg-success text-white card-title\">\r\n          Rewards\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          \r\n          </div>\r\n      </div>\r\n    </div>\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n          <img class=\"card-img-top\" src=\"../../../assets/br-more-pts-baner1.gif\" alt=\"Card image cap\">\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <img class=\"card-img-top\" src=\"../../../assets/BMW_S1000RR-loyalty-rewards_large.png\" alt=\"Card image cap\">\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"card\">\r\n          <div class=\"card-body\">\r\n              <img class=\"card-img-top\" src=\"../../../assets/reward_points.png\" alt=\"Card image cap\">\r\n          </div>\r\n        </div> -->\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/components/rewards/rewards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RewardsComponent = /** @class */ (function () {
    function RewardsComponent() {
    }
    RewardsComponent.prototype.ngOnInit = function () {
    };
    RewardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rewards',
            template: __webpack_require__("./src/app/components/rewards/rewards.component.html"),
            styles: [__webpack_require__("./src/app/components/rewards/rewards.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RewardsComponent);
    return RewardsComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<div class=\"container\">\r\n  <div style=\"text-align:center\">\r\n    <h1>\r\n      {{title}}\r\n    </h1>\r\n  </div>\r\n  <ul>\r\n    <li><a routerLink=\"\">Home</a></li>\r\n    <li><a  routerLink=\"point\">Rewards</a></li>\r\n    <li><a  routerLink=\"customerlist\">Customer</a></li>\r\n    <li><a  routerLink=\"about\">About</a></li>\r\n  </ul>\r\n  <div *ngIf=\"userEmail\" class=\"float-right\"> \r\n      <p><b>Welcome</b> {{userEmail}} (<a [routerLink]=\"['/logout']\">Logout</a>) </p>\r\n  </div>\r\n  <notification></notification>\r\n  \r\n  <router-outlet></router-outlet>\r\n </div>"

/***/ }),

/***/ "./src/app/components/shared/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service_service__ = __webpack_require__("./src/app/services/login-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(loginService) {
        var _this = this;
        this.loginService = loginService;
        this.title = '';
        this.userEmail = "";
        loginService.loginSubject.asObservable().subscribe(function (p) {
            _this.userEmail = localStorage.getItem('loggedUser') || "";
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.userEmail = localStorage.getItem('loggedUser') || "";
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/components/shared/app.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service_service__["a" /* LoginService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/models/Message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = /** @class */ (function () {
    /**
     *
     */
    function Message(type, text) {
        this.type = type;
        this.text = text;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.email = "";
        this.password = "";
        this.rememberMe = false;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/canActivate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanActivateService = /** @class */ (function () {
    function CanActivateService(router) {
        this.router = router;
    }
    CanActivateService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('loggedUser')) {
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    CanActivateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], CanActivateService);
    return CanActivateService;
}());



/***/ }),

/***/ "./src/app/services/customer-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this._baseUrl = "http://localhost:2000/api/";
        this._getCustomersUrl = "Customer";
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            withCredentials: true
        });
    }
    CustomerService.prototype.getCustomers = function () {
        return this.http.get(this._baseUrl + this._getCustomersUrl, this.options)
            .toPromise();
    };
    CustomerService.prototype.getCustomer = function (customerId) {
        return this.http.get(this._baseUrl + this._getCustomersUrl + "/" + customerId, this.options)
            .toPromise();
    };
    CustomerService.prototype.addNewCustomer = function (_car) {
        return this.http.post(this._baseUrl + this._getCustomersUrl, _car, this.options)
            .toPromise();
    };
    CustomerService.prototype.updateCustomer = function (_car) {
        return this.http.put(this._baseUrl + this._getCustomersUrl + "/" + _car.customerId, _car, this.options)
            .toPromise();
    };
    CustomerService.prototype.deleteCustomer = function (customerId) {
        return this.http.delete(this._baseUrl + this._getCustomersUrl + "/" + customerId, this.options)
            .toPromise();
    };
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.goals = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](["Be a Professional Programmer", "To have own house", "TO have own car"]);
        this.goal = this.goals.asObservable();
    }
    DataService.prototype.changeGoal = function (goal) {
        this.goals.next(goal);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/login-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.loginSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this._baseUrl = "https://ebuztechsolutions.azurewebsites.net/Account";
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            withCredentials: true
        });
    }
    LoginService.prototype.login = function (currentUser) {
        var _currentUser = JSON.stringify(currentUser);
        return this.http.post(this._baseUrl + '/Login', currentUser, this.options)
            .toPromise()
            .catch(this.handleError);
    };
    LoginService.prototype.logout = function () {
        return this.http.post(this._baseUrl + '/Logout', this.options)
            .toPromise()
            .catch(this.handleError);
    };
    LoginService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/notif-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_Message__ = __webpack_require__("./src/app/models/Message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotifService = /** @class */ (function () {
    function NotifService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Subject */]();
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationStart */]) {
                _this.subject.next();
            }
        });
    }
    NotifService.prototype.success = function (message) {
        this.subject.next(new __WEBPACK_IMPORTED_MODULE_0__models_Message__["a" /* Message */]('alert-success', message));
    };
    NotifService.prototype.error = function (message) {
        this.subject.next(new __WEBPACK_IMPORTED_MODULE_0__models_Message__["a" /* Message */]('alert-danger', message));
    };
    NotifService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    NotifService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], NotifService);
    return NotifService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map