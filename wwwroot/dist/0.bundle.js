webpackJsonp([0],{

/***/ 60:
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
var common_1 = __webpack_require__(7);
var ng2_bootstrap_1 = __webpack_require__(14);
var about_routing_module_1 = __webpack_require__(62);
var about_component_1 = __webpack_require__(61);
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

/***/ 61:
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
var interfaces_1 = __webpack_require__(13);
var SignalR_service_1 = __webpack_require__(25);
var AboutComponent = (function () {
    function AboutComponent(signalRService) {
        this.signalRService = signalRService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var self = this;
        console.log('About Component Initialized');
        //TODO: SignalR Fix
        //self.signalRService.updateSignalRMessage.subscribe(
        //    message => {
        //        console.log('received..');
        //        console.log(message);
        //        this.myMessage = message;
        //    }
        //);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof interfaces_1.ISignalRMessage !== 'undefined' && interfaces_1.ISignalRMessage) === 'function' && _a) || Object)
    ], AboutComponent.prototype, "messages", void 0);
    AboutComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(63)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof SignalR_service_1.SignalRService !== 'undefined' && SignalR_service_1.SignalRService) === 'function' && _b) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a, _b;
}());
exports.AboutComponent = AboutComponent;


/***/ },

/***/ 62:
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
var router_1 = __webpack_require__(3);
var about_component_1 = __webpack_require__(61);
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

/***/ 63:
/***/ function(module, exports) {

module.exports = "<h1>About</h1>\r\n<p>Currently used to test the SignalR service.</p>";

/***/ }

});
//# sourceMappingURL=0.map