(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/guillaumebouhier/Documents/Dev/ivy/src/main.ts */"zUnb");


/***/ }),

/***/ "9ki0":
/*!************************************!*\
  !*** ./src/app/cart/cart.store.ts ***!
  \************************************/
/*! exports provided: CartStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartStore", function() { return CartStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CartStore = class CartStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_1__["EntityStore"] {
    constructor() {
        super();
    }
};
CartStore.ɵfac = function CartStore_Factory(t) { return new (t || CartStore)(); };
CartStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CartStore, factory: CartStore.ɵfac, providedIn: 'root' });
CartStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({ name: "cart" }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CartStore);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BCVc":
/*!************************************!*\
  !*** ./src/app/gear/gear.store.ts ***!
  \************************************/
/*! exports provided: GearStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GearStore", function() { return GearStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let GearStore = class GearStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_1__["EntityStore"] {
    constructor() {
        super( /*{ filter: 'ALL' }*/);
        const gear1 = {
            id: 0,
            brand: 'Ibanez',
            model: 'RG1570',
            imageUrl: 'https://images.reverb.com/image/upload/s--wY470ddn--/f_auto,t_supersize/v1542532382/r3k2ktcleqjodl23inpw.jpg'
        };
        const gear2 = {
            id: 1,
            brand: 'Ernie Ball Music Man',
            model: 'JP7',
            imageUrl: 'https://images.reverb.com/image/upload/s--oKibNVBZ--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_1600,q_80,w_1600/v1460170475/ejke6uziv2djxwwvj5mz.jpg'
        };
        const gear3 = {
            id: 2,
            brand: '.strandberg*',
            model: 'Boden Classic 6 Trem',
            imageUrl: 'https://images.reverb.com/image/upload/s--DB0VuX_N--/f_auto,t_large/v1568112718/q4xhmtcqa64xbc9fe5gg.jpg'
        };
        const gear4 = {
            id: 3,
            brand: 'Charvel',
            model: 'Guthrie Govan Signature',
            imageUrl: 'https://images.reverb.com/image/upload/s--aVSVzDcj--/f_auto,t_supersize/v1565125389/cnn7pqepcdfbtetfejpw.jpg'
        };
        const gear5 = {
            id: 4,
            brand: 'Abasi Guitars',
            model: 'Larada 7',
            imageUrl: 'https://images.reverb.com/image/upload/s--GyLqVpU8--/f_auto,t_supersize/v1562382159/rjqf1hti5kqwgbzla0lf.jpg'
        };
        this.set([gear1, gear2, gear3, gear4]);
        this.add(gear5);
    }
};
GearStore.ɵfac = function GearStore_Factory(t) { return new (t || GearStore)(); };
GearStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GearStore, factory: GearStore.ɵfac, providedIn: 'root' });
GearStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({ name: 'gears' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], GearStore);



/***/ }),

/***/ "D31i":
/*!**************************************!*\
  !*** ./src/app/gear/gear.service.ts ***!
  \**************************************/
/*! exports provided: GearService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GearService", function() { return GearService; });
/* harmony import */ var _gear_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gear.store */ "BCVc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class GearService {
    constructor(gearStore) {
        this.gearStore = gearStore;
    }
    get GearStore() {
        return this.gearStore;
    }
}
GearService.ɵfac = function GearService_Factory(t) { return new (t || GearService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_gear_store__WEBPACK_IMPORTED_MODULE_0__["GearStore"])); };
GearService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GearService, factory: GearService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "K9yR":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




class TestComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(); };
TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 9, vars: 1, consts: [["appMenu", "matMenu"], ["mat-menu-item", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"]], template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-menu", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Nagw":
/*!**************************************!*\
  !*** ./src/app/cart/cart.service.ts ***!
  \**************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _cart_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.store */ "9ki0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CartService {
    constructor(cartStore) {
        this.cartStore = cartStore;
    }
    get CartStore() {
        return this.cartStore;
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cart_store__WEBPACK_IMPORTED_MODULE_0__["CartStore"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ONz1":
/*!************************************!*\
  !*** ./src/app/cart/cart.query.ts ***!
  \************************************/
/*! exports provided: CartQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartQuery", function() { return CartQuery; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var _cart_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.store */ "9ki0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class CartQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__["QueryEntity"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
}
CartQuery.ɵfac = function CartQuery_Factory(t) { return new (t || CartQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_cart_store__WEBPACK_IMPORTED_MODULE_1__["CartStore"])); };
CartQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CartQuery, factory: CartQuery.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _cart_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart/cart.service */ "Nagw");
/* harmony import */ var _cart_cart_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/cart.query */ "ONz1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");









class AppComponent {
    constructor(cartService, cartQuery) {
        this.cartService = cartService;
        this.cartQuery = cartQuery;
        this.title = 'my ivy app';
    }
    get CartService() {
        return this.cartService;
    }
    /**
     *
     */
    get cartCount() {
        return this.cartQuery.getCount();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_cart_cart_service__WEBPACK_IMPORTED_MODULE_0__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_cart_cart_query__WEBPACK_IMPORTED_MODULE_1__["CartQuery"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 2, consts: [["fxLayout", "column", 1, "app-container"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "40px", 1, "menu", "mat-elevation-z8"], ["matRipple", "", "routerLink", "/", 1, "siteroot"], ["matRipple", "", "routerLink", "/music-gear-library", "routerLinkActive", "active", "routerLinkActive", "active"], ["matRipple", "", "routerLink", "/cart", "routerLinkActive", "active", "routerLinkActive", "active", "routerLinkActive", "active", "routerLinkActive", "active"], ["matBadgeOverlap", "false", 3, "matBadge", "matBadgeHidden"], ["fxLayout", "column", 1, "router-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "My Guitar Collection v0.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Music Gear Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " My Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matBadge", ctx.cartCount)("matBadgeHidden", ctx.cartCount === 0);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadge"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".app-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n}\n\n.router-container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.menu[_ngcontent-%COMP%] {\n  font-size: 14px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 30;\n  height: 50px;\n  background-color: #424242;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG5cbi5yb3V0ZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWVudSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAzMDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "WFQ1":
/*!************************************!*\
  !*** ./src/app/gear/gear.query.ts ***!
  \************************************/
/*! exports provided: GearQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GearQuery", function() { return GearQuery; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var _gear_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gear.store */ "BCVc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class GearQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__["QueryEntity"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
}
GearQuery.ɵfac = function GearQuery_Factory(t) { return new (t || GearQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_gear_store__WEBPACK_IMPORTED_MODULE_1__["GearStore"])); };
GearQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GearQuery, factory: GearQuery.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _music_gear_library_music_gear_library_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./music-gear-library/music-gear-library.component */ "qPC/");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @datorama/akita-ngdevtools */ "ZWwf");
/* harmony import */ var _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @datorama/akita-ng-router-store */ "Dxt5");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./test/test.component */ "K9yR");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _subcomponent_subcomponent_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./subcomponent/subcomponent.component */ "ikmf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");
























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
            _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].production
                ? []
                : _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_15__["AkitaNgDevtools"].forRoot(),
            _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_16__["AkitaNgRouterStoreModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _music_gear_library_music_gear_library_component__WEBPACK_IMPORTED_MODULE_4__["MusicGearLibraryComponent"],
        _test_test_component__WEBPACK_IMPORTED_MODULE_18__["TestComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_19__["CartComponent"],
        _subcomponent_subcomponent_component__WEBPACK_IMPORTED_MODULE_20__["SubcomponentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"], _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_15__["AkitaNgDevtools"], _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_16__["AkitaNgRouterStoreModule"]] }); })();


/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _cart_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.query */ "ONz1");
/* harmony import */ var _gear_gear_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gear/gear.query */ "WFQ1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");








function CartComponent_mat_list_1_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.getGear(item_r3.id).imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Item ", i_r4 + 1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.getGear(item_r3.id).brand, " -- ", ctx_r2.getGear(item_r3.id).model, " ");
} }
function CartComponent_mat_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CartComponent_mat_list_1_mat_list_item_1_Template, 7, 4, "mat-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.Items);
} }
function CartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No item in cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor(cartQuery, gearQuery) {
        this.cartQuery = cartQuery;
        this.gearQuery = gearQuery;
    }
    ngOnInit() {
        this.items = this.cartQuery.getAll();
        /*     if (this.items.length === 0) {
          this.items.push({ id: 0 });
          this.items.push({ id: 1 });
          this.items.push({ id: 2 });
        } */
    }
    get Items() {
        return this.items;
    }
    getGear(id) {
        return this.gearQuery.getEntity(id);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_cart_query__WEBPACK_IMPORTED_MODULE_0__["CartQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_gear_gear_query__WEBPACK_IMPORTED_MODULE_1__["GearQuery"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 3, vars: 2, consts: [["fxLayoutAlign", "center center"], ["role", "list", 4, "ngIf"], [4, "ngIf"], ["role", "list"], ["role", "listitem", 4, "ngFor", "ngForOf"], ["role", "listitem"], ["fxLayoutAlign", "center center", "fxLayoutGap", "10px"], [1, "small", 3, "src"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CartComponent_mat_list_1_Template, 2, 1, "mat-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CartComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Items.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Items.length === 0);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ikmf":
/*!********************************************************!*\
  !*** ./src/app/subcomponent/subcomponent.component.ts ***!
  \********************************************************/
/*! exports provided: SubcomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcomponentComponent", function() { return SubcomponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class SubcomponentComponent {
    constructor() {
        this.voted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
}
SubcomponentComponent.ɵfac = function SubcomponentComponent_Factory(t) { return new (t || SubcomponentComponent)(); };
SubcomponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubcomponentComponent, selectors: [["app-subcomponent"]], outputs: { voted: "voted" }, decls: 4, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function SubcomponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "subcomponent works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubcomponentComponent_Template_button_click_2_listener() { return ctx.voted.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJjb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "qPC/":
/*!********************************************************************!*\
  !*** ./src/app/music-gear-library/music-gear-library.component.ts ***!
  \********************************************************************/
/*! exports provided: MusicGearLibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicGearLibraryComponent", function() { return MusicGearLibraryComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _gear_gear_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gear/gear.service */ "D31i");
/* harmony import */ var _gear_gear_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gear/gear.query */ "WFQ1");
/* harmony import */ var _cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart/cart.service */ "Nagw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















function MusicGearLibraryComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-menu", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MusicGearLibraryComponent_mat_card_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const card_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.addToCart(card_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-card-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MusicGearLibraryComponent_mat_card_1_Template_mat_card_content_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const card_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.addToCart(card_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", card_r1.title, " - ", card_r1.model, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", card_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
class MusicGearLibraryComponent {
    constructor(breakpointObserver, gearQuery, gearService, cartService) {
        this.breakpointObserver = breakpointObserver;
        this.gearQuery = gearQuery;
        this.gearService = gearService;
        this.cartService = cartService;
        const isLoading = this.gearQuery.selectLoading();
        isLoading.subscribe(loading => {
            console.log('Loading: ' + loading);
        });
        const values = this.gearQuery.selectAll({
            asObject: true,
        });
        const select = this.gearQuery.select();
        isLoading.subscribe(loading => {
            console.log('Loading: ' + loading);
        });
        values.subscribe(val => {
            console.log('Values: ');
            console.log(val);
        });
        const store = this.Store;
        const cardsArray = [];
        store.forEach(entity => {
            cardsArray.push({
                id: entity.id,
                title: entity.brand,
                model: entity.model,
                imageUrl: entity.imageUrl,
                cols: 1,
                rows: 1,
            });
        });
        this.cards = cardsArray;
    }
    get Cards() {
        return this.cards;
    }
    get Store() {
        return this.gearQuery.getAll();
    }
    addToCart(gearId) {
        this.cartService.CartStore.add({
            id: gearId,
        });
    }
}
MusicGearLibraryComponent.ɵfac = function MusicGearLibraryComponent_Factory(t) { return new (t || MusicGearLibraryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_gear_gear_query__WEBPACK_IMPORTED_MODULE_2__["GearQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_gear_gear_service__WEBPACK_IMPORTED_MODULE_1__["GearService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
MusicGearLibraryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MusicGearLibraryComponent, selectors: [["app-music-gear-library"]], decls: 2, vars: 1, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", 1, "grid-container"], ["fxFlex", "", "class", "dashboard-card", 4, "ngFor", "ngForOf"], ["fxFlex", "", 1, "dashboard-card"], ["mat-icon-button", "", "aria-label", "Toggle menu", 1, "more-button", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", ""], [1, "dashboard-card-content", 3, "click"], ["matRipple", ""], ["src", "assets/cart.png", 1, "cart", "zindex-10"], [1, "link", "zindex-10"], [1, "gear", 3, "src"]], template: function MusicGearLibraryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MusicGearLibraryComponent_mat_card_1_Template, 19, 4, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRipple"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL211c2ljLWdlYXItbGlicmFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoibXVzaWMtZ2Vhci1saWJyYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4ubW9yZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _music_gear_library_music_gear_library_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music-gear-library/music-gear-library.component */ "qPC/");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test/test.component */ "K9yR");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: 'music-gear-library',
        component: _music_gear_library_music_gear_library_component__WEBPACK_IMPORTED_MODULE_1__["MusicGearLibraryComponent"],
    },
    {
        path: '',
        component: _music_gear_library_music_gear_library_component__WEBPACK_IMPORTED_MODULE_1__["MusicGearLibraryComponent"],
    },
    {
        path: 'angular-ivy',
        component: _music_gear_library_music_gear_library_component__WEBPACK_IMPORTED_MODULE_1__["MusicGearLibraryComponent"],
    },
    {
        path: 'test',
        component: _test_test_component__WEBPACK_IMPORTED_MODULE_2__["TestComponent"],
    },
    {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map