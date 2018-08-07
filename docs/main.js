(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav nav-dark fixed split-nav\">\n  <div class=\"nav-brand\">\n    <h5>\n      <a href=\"#\">Bikini-Bottom</a>\n    </h5>\n  </div>\n  <input id=\"toggler\" type=\"checkbox\">\n  <label class=\"nav-toggler\" for=\"toggler\">\n    <div class=\"bar\"></div>\n  </label>\n  <div class=\"nav-collapse\">\n    <ul>\n      <li>\n        <a href=\"#\">Home</a>\n      </li>\n      <li>\n        <a href=\"#\">Docs</a>\n      </li>\n      <li>\n        <a href=\"#\">Github</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<app-map></app-map>\n\n<app-chat-panel></app-chat-panel>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/agm-direction.umd.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(agm_direction__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_chat_panel_chat_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/chat-panel/chat-panel.component */ "./src/app/components/chat-panel/chat-panel.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_chat_panel_chat_panel_component__WEBPACK_IMPORTED_MODULE_5__["ChatPanelComponent"],
                _components_map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBTXraiDSLBaDOSoKTzd1ZL_B3vEORHIHc',
                }),
                agm_direction__WEBPACK_IMPORTED_MODULE_4__["AgmDirectionModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chat-panel/chat-panel.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/chat-panel/chat-panel.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-panel\">\n  <div class=\"panel-header\">\n    <h5>賽況討論區</h5>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"msg-group row flex-left\">\n      <img class=\"msg-avatar circle\" src=\"http://robby570.tw/img/avatar.png\">\n      <span class=\"msg-name\">Robby</span>\n      <span class=\"msg-content\">安安你好</span>\n    </div>\n    <div class=\"msg-group row flex-left\">\n      <img class=\"msg-avatar circle\" src=\"http://robby570.tw/img/avatar.png\">\n      <span class=\"msg-name\">Robby</span>\n      <span class=\"msg-content\">華麗大賽正式開始</span>\n    </div>\n    <div class=\"msg-group row flex-left\">\n      <img class=\"msg-avatar circle\" src=\"http://robby570.tw/img/avatar.png\">\n      <span class=\"msg-name\">Robby</span>\n      <span class=\"msg-content\">我賭小瓜贏</span>\n    </div>\n    <div class=\"msg-group row flex-left\">\n      <img class=\"msg-avatar circle\" src=\"http://robby570.tw/img/avatar.png\">\n      <span class=\"msg-name\">Robby</span>\n      <span class=\"msg-content\">樓下廢物</span>\n    </div>\n    <div class=\"msg-group row flex-left\">\n      <img class=\"msg-avatar circle\" src=\"http://robby570.tw/img/avatar.png\">\n      <span class=\"msg-name\">Robby</span>\n      <span class=\"msg-content\">五樓帥哥</span>\n    </div>\n    <div class=\"msg-group row flex-left\">\n      <img class=\"msg-avatar circle\" src=\"http://robby570.tw/img/avatar.png\">\n      <span class=\"msg-name\">Robby</span>\n      <span class=\"msg-content\">五樓自肥 嘔嘔嘔嘔嘔</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/chat-panel/chat-panel.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/chat-panel/chat-panel.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-panel {\n  position: absolute;\n  right: 0;\n  top: 3.5rem;\n  height: calc(100vh - 3.5rem);\n  width: 400px;\n  background-color: #36393f;\n  color: #fff; }\n  .chat-panel .panel-header {\n    text-align: center;\n    border-top: 1px solid #111;\n    border-bottom: 1px solid #111;\n    box-shadow: #111 0 0.5px 1px; }\n  .chat-panel .panel-body {\n    overflow-y: scroll;\n    height: calc(100% - 2.6rem); }\n  .chat-panel .panel-body::-webkit-scrollbar {\n      width: 5px; }\n  .chat-panel .panel-body:hover::-webkit-scrollbar {\n      width: 8px; }\n  .chat-panel .panel-body::-webkit-scrollbar-track {\n      background: rgba(17, 17, 17, 0.8); }\n  .chat-panel .panel-body::-webkit-scrollbar-thumb {\n      border-radius: 4px;\n      background: rgba(136, 136, 136, 0.8); }\n  .chat-panel .panel-body .msg-group {\n      margin: 1rem; }\n  .chat-panel .panel-body .msg-group .msg-avatar {\n        margin-right: 1rem;\n        width: 25px;\n        height: 25px; }\n  .chat-panel .panel-body .msg-group .msg-name {\n        margin-right: 0.5rem;\n        color: #28bc9c; }\n"

/***/ }),

/***/ "./src/app/components/chat-panel/chat-panel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/chat-panel/chat-panel.component.ts ***!
  \***************************************************************/
/*! exports provided: ChatPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPanelComponent", function() { return ChatPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatPanelComponent = /** @class */ (function () {
    function ChatPanelComponent() {
    }
    ChatPanelComponent.prototype.ngOnInit = function () {
    };
    ChatPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-panel',
            template: __webpack_require__(/*! ./chat-panel.component.html */ "./src/app/components/chat-panel/chat-panel.component.html"),
            styles: [__webpack_require__(/*! ./chat-panel.component.scss */ "./src/app/components/chat-panel/chat-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatPanelComponent);
    return ChatPanelComponent;
}());



/***/ }),

/***/ "./src/app/components/map/map.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map #gmap [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n  <agm-direction [origin]=\"origin\" [destination]=\"destination\" [waypoints]=\"waypoints\">\n  </agm-direction>\n</agm-map>\n"

/***/ }),

/***/ "./src/app/components/map/map.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  display: block;\n  width: calc(100vw - 400px);\n  height: calc(100vh - 100px); }\n"

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.zoom = 17;
        this.lat = 24.1505222;
        this.lng = 120.6855433;
        this.origin = { lat: 24.1505222, lng: 120.6855433 };
        this.destination = { lat: 24.1503016, lng: 120.6856202 };
        this.waypoints = [
            {
                location: { lat: 24.1524205, lng: 120.6863555 },
                stopover: false,
            },
            {
                location: { lat: 24.1517399, lng: 120.6883902 },
                stopover: false,
            },
            {
                location: { lat: 24.1497931, lng: 120.6867862 },
                stopover: false,
            },
            {
                location: { lat: 24.1495154, lng: 120.6851402 },
                stopover: false,
            }
        ];
    }
    MapComponent.prototype.ngOnInit = function () { };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/components/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/components/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Case\20180807-第一屆比奇堡盃蝸牛賽跑競賽\bikini-bottom-racing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map