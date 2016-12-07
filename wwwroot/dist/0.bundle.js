webpackJsonp([0],{

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(3);
var ng2_bootstrap_1 = __webpack_require__(32);
var about_routing_module_1 = __webpack_require__(176);
var about_component_1 = __webpack_require__(175);
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        core_1.NgModule({
            declarations: [
                about_component_1.AboutComponent
            ],
            imports: [
                common_1.CommonModule,
                ng2_bootstrap_1.Ng2BootstrapModule,
                about_routing_module_1.AboutRoutingModule
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AboutModule);
    return AboutModule;
}());
exports.AboutModule = AboutModule;


/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var interfaces_1 = __webpack_require__(140);
var SignalR_service_1 = __webpack_require__(181);
var AboutComponent = (function () {
    function AboutComponent(signalRService) {
        this.signalRService = signalRService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.signalRService.updateSignalRMessage.subscribe(function (message) {
            console.log('received..');
            console.log(message);
            _this.myMessage = message;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof interfaces_1.ISignalRMessage !== 'undefined' && interfaces_1.ISignalRMessage) === 'function' && _a) || Object)
    ], AboutComponent.prototype, "messages", void 0);
    AboutComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(177)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof SignalR_service_1.SignalRService !== 'undefined' && SignalR_service_1.SignalRService) === 'function' && _b) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a, _b;
}());
exports.AboutComponent = AboutComponent;


/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(8);
var about_component_1 = __webpack_require__(175);
var routes = [
    { path: '', component: about_component_1.AboutComponent }
];
var AboutRoutingModule = (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes)
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());
exports.AboutRoutingModule = AboutRoutingModule;


/***/ },

/***/ 177:
/***/ function(module, exports) {

module.exports = "<h1>About</h1>\r\n<p>A web application for making decisions.</p>";

/***/ }

});
//# sourceMappingURL=0.map