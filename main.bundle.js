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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".separadorIzq\n{\n  margin-left: 3em;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Barra de presentacion de la pantalla-->\n<app-barraub></app-barraub>\n\n<!--Body-->\n<div class=\"col-sm-12\">\n\n  <!--Inicia body-->\n    <router-outlet></router-outlet>\n  <!--Termina body-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__ = __webpack_require__("./src/app/servicios/auth.service.ts");
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
    function AppComponent(auth) {
        this.auth = auth;
        //this.auth.login();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_material_service__ = __webpack_require__("./src/app/servicios/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__servicios_personal_service__ = __webpack_require__("./src/app/servicios/personal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__servicios_producto_service__ = __webpack_require__("./src/app/servicios/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__servicios_comanda_service__ = __webpack_require__("./src/app/servicios/comanda.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__servicios_pedido_service__ = __webpack_require__("./src/app/servicios/pedido.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__servicios_auth_service__ = __webpack_require__("./src/app/servicios/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__servicios_auth_bloq_service__ = __webpack_require__("./src/app/servicios/auth-bloq.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__servicios_contador_service__ = __webpack_require__("./src/app/servicios/contador.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__servicios_elaboracion_service__ = __webpack_require__("./src/app/servicios/elaboracion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_barraub_barraub_component__ = __webpack_require__("./src/app/componentes/barraub/barraub.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__paginas_comandas_body_body_component__ = __webpack_require__("./src/app/paginas/comandas/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__paginas_comandas_componentes_addped_addped_component__ = __webpack_require__("./src/app/paginas/comandas/componentes/addped/addped.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__paginas_estadisticas_body_body_component__ = __webpack_require__("./src/app/paginas/estadisticas/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__paginas_inicio_body_body_component__ = __webpack_require__("./src/app/paginas/inicio/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__paginas_inicio_componentes_card_card_component__ = __webpack_require__("./src/app/paginas/inicio/componentes/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__paginas_personal_body_body_component__ = __webpack_require__("./src/app/paginas/personal/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__paginas_personal_componentes_add_add_component__ = __webpack_require__("./src/app/paginas/personal/componentes/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__paginas_personal_componentes_modify_modify_component__ = __webpack_require__("./src/app/paginas/personal/componentes/modify/modify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__paginas_productos_body_body_component__ = __webpack_require__("./src/app/paginas/productos/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__paginas_productos_componentes_add_add_component__ = __webpack_require__("./src/app/paginas/productos/componentes/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__paginas_productos_componentes_modify_modify_component__ = __webpack_require__("./src/app/paginas/productos/componentes/modify/modify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__paginas_productos_componentes_nvo_nvo_component__ = __webpack_require__("./src/app/paginas/productos/componentes/nvo/nvo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__paginas_almacen_body_body_component__ = __webpack_require__("./src/app/paginas/almacen/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__paginas_almacen_componentes_add_add_component__ = __webpack_require__("./src/app/paginas/almacen/componentes/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__paginas_almacen_componentes_modify_modify_component__ = __webpack_require__("./src/app/paginas/almacen/componentes/modify/modify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_material_pipe__ = __webpack_require__("./src/app/pipes/material.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipes_personal_pipe__ = __webpack_require__("./src/app/pipes/personal.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_productos_pipe__ = __webpack_require__("./src/app/pipes/productos.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__paginas_comandas_componentes_pedido_pedido_component__ = __webpack_require__("./src/app/paginas/comandas/componentes/pedido/pedido.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes_comanda_pipe__ = __webpack_require__("./src/app/pipes/comanda.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pipes_pedido_pipe__ = __webpack_require__("./src/app/pipes/pedido.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__paginas_manual_body_body_component__ = __webpack_require__("./src/app/paginas/manual/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__paginas_elaboracion_body_body_component__ = __webpack_require__("./src/app/paginas/elaboracion/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__paginas_manual_componentes_malmacen_malmacen_component__ = __webpack_require__("./src/app/paginas/manual/componentes/malmacen/malmacen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__paginas_manual_componentes_mcomandas_mcomandas_component__ = __webpack_require__("./src/app/paginas/manual/componentes/mcomandas/mcomandas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__paginas_manual_componentes_mestadisticas_mestadisticas_component__ = __webpack_require__("./src/app/paginas/manual/componentes/mestadisticas/mestadisticas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__paginas_manual_componentes_mproductos_mproductos_component__ = __webpack_require__("./src/app/paginas/manual/componentes/mproductos/mproductos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__paginas_manual_componentes_mpersonal_mpersonal_component__ = __webpack_require__("./src/app/paginas/manual/componentes/mpersonal/mpersonal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__paginas_elaboracion_componentes_barraped_barraped_component__ = __webpack_require__("./src/app/paginas/elaboracion/componentes/barraped/barraped.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__paginas_elaboracion_componentes_cards_cards_component__ = __webpack_require__("./src/app/paginas/elaboracion/componentes/cards/cards.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//rutas

//servicios









//componentes


//componentes comandas


//componentes Estadisticas

//componentes Inicio


//componentes Personal



//componentes productos




//componentes almacen



//pipes






//componentes manual.









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__paginas_inicio_body_body_component__["a" /* BodyComponent */],
                __WEBPACK_IMPORTED_MODULE_16__paginas_comandas_body_body_component__["a" /* BodyComponent */],
                __WEBPACK_IMPORTED_MODULE_21__paginas_personal_body_body_component__["a" /* BodyComponent */],
                __WEBPACK_IMPORTED_MODULE_22__paginas_personal_componentes_add_add_component__["a" /* AddComponent */],
                __WEBPACK_IMPORTED_MODULE_23__paginas_personal_componentes_modify_modify_component__["a" /* ModifyComponent */],
                __WEBPACK_IMPORTED_MODULE_24__paginas_productos_body_body_component__["a" /* BodyComponent */],
                __WEBPACK_IMPORTED_MODULE_18__paginas_estadisticas_body_body_component__["a" /* BodyComponent */],
                __WEBPACK_IMPORTED_MODULE_17__paginas_comandas_componentes_addped_addped_component__["a" /* AddpedComponent */],
                __WEBPACK_IMPORTED_MODULE_15__componentes_barraub_barraub_component__["a" /* BarraubComponent */],
                __WEBPACK_IMPORTED_MODULE_20__paginas_inicio_componentes_card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_25__paginas_productos_componentes_add_add_component__["a" /* AddComponent */],
                __WEBPACK_IMPORTED_MODULE_26__paginas_productos_componentes_modify_modify_component__["a" /* ModifyComponent */],
                __WEBPACK_IMPORTED_MODULE_28__paginas_almacen_body_body_component__["a" /* BodyComponent */],
                __WEBPACK_IMPORTED_MODULE_29__paginas_almacen_componentes_add_add_component__["a" /* AddComponent */],
                __WEBPACK_IMPORTED_MODULE_30__paginas_almacen_componentes_modify_modify_component__["a" /* ModifyComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pipes_material_pipe__["a" /* MaterialPipe */],
                __WEBPACK_IMPORTED_MODULE_32__pipes_personal_pipe__["a" /* PersonalPipe */],
                __WEBPACK_IMPORTED_MODULE_27__paginas_productos_componentes_nvo_nvo_component__["a" /* NvoComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pipes_productos_pipe__["a" /* ProductosPipe */],
                __WEBPACK_IMPORTED_MODULE_34__paginas_comandas_componentes_pedido_pedido_component__["a" /* PedidoComponent */],
                __WEBPACK_IMPORTED_MODULE_35__pipes_comanda_pipe__["a" /* ComandaPipe */],
                __WEBPACK_IMPORTED_MODULE_36__pipes_pedido_pipe__["a" /* PedidoPipe */],
                __WEBPACK_IMPORTED_MODULE_37__paginas_manual_body_body_component__["a" /* BodyComponent */],
                __WEBPACK_IMPORTED_MODULE_38__paginas_elaboracion_body_body_component__["a" /* BodyComponent */],
                __WEBPACK_IMPORTED_MODULE_39__paginas_manual_componentes_malmacen_malmacen_component__["a" /* MalmacenComponent */],
                __WEBPACK_IMPORTED_MODULE_40__paginas_manual_componentes_mcomandas_mcomandas_component__["a" /* McomandasComponent */],
                __WEBPACK_IMPORTED_MODULE_41__paginas_manual_componentes_mestadisticas_mestadisticas_component__["a" /* MestadisticasComponent */],
                __WEBPACK_IMPORTED_MODULE_42__paginas_manual_componentes_mproductos_mproductos_component__["a" /* MproductosComponent */],
                __WEBPACK_IMPORTED_MODULE_43__paginas_manual_componentes_mpersonal_mpersonal_component__["a" /* MpersonalComponent */],
                __WEBPACK_IMPORTED_MODULE_44__paginas_elaboracion_componentes_barraped_barraped_component__["a" /* BarrapedComponent */],
                __WEBPACK_IMPORTED_MODULE_45__paginas_elaboracion_componentes_cards_cards_component__["a" /* CardsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* APP_ROUTING */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__servicios_material_service__["a" /* MaterialService */],
                __WEBPACK_IMPORTED_MODULE_6__servicios_personal_service__["a" /* PersonalService */],
                __WEBPACK_IMPORTED_MODULE_7__servicios_producto_service__["a" /* ProductoService */],
                __WEBPACK_IMPORTED_MODULE_8__servicios_comanda_service__["a" /* ComandaService */],
                __WEBPACK_IMPORTED_MODULE_9__servicios_pedido_service__["a" /* PedidoService */],
                __WEBPACK_IMPORTED_MODULE_10__servicios_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__servicios_auth_bloq_service__["a" /* AuthBloqService */],
                __WEBPACK_IMPORTED_MODULE_12__servicios_contador_service__["a" /* ContadorService */],
                __WEBPACK_IMPORTED_MODULE_13__servicios_elaboracion_service__["a" /* ElaboracionService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTING; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paginas_inicio_body_body_component__ = __webpack_require__("./src/app/paginas/inicio/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paginas_almacen_body_body_component__ = __webpack_require__("./src/app/paginas/almacen/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paginas_comandas_body_body_component__ = __webpack_require__("./src/app/paginas/comandas/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paginas_estadisticas_body_body_component__ = __webpack_require__("./src/app/paginas/estadisticas/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__paginas_personal_body_body_component__ = __webpack_require__("./src/app/paginas/personal/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__paginas_productos_body_body_component__ = __webpack_require__("./src/app/paginas/productos/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__paginas_elaboracion_body_body_component__ = __webpack_require__("./src/app/paginas/elaboracion/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__paginas_manual_body_body_component__ = __webpack_require__("./src/app/paginas/manual/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__servicios_auth_bloq_service__ = __webpack_require__("./src/app/servicios/auth-bloq.service.ts");









//servicio de autenticacion

var APP_ROUTES = [
    { path: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_1__paginas_inicio_body_body_component__["a" /* BodyComponent */] },
    { path: 'Inicio/:id', component: __WEBPACK_IMPORTED_MODULE_1__paginas_inicio_body_body_component__["a" /* BodyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__servicios_auth_bloq_service__["a" /* AuthBloqService */]] },
    { path: 'Almacen', component: __WEBPACK_IMPORTED_MODULE_2__paginas_almacen_body_body_component__["a" /* BodyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__servicios_auth_bloq_service__["a" /* AuthBloqService */]] },
    { path: 'Comandas', component: __WEBPACK_IMPORTED_MODULE_3__paginas_comandas_body_body_component__["a" /* BodyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__servicios_auth_bloq_service__["a" /* AuthBloqService */]] },
    { path: 'Estadisticas', component: __WEBPACK_IMPORTED_MODULE_4__paginas_estadisticas_body_body_component__["a" /* BodyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__servicios_auth_bloq_service__["a" /* AuthBloqService */]] },
    { path: 'Personal', component: __WEBPACK_IMPORTED_MODULE_5__paginas_personal_body_body_component__["a" /* BodyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__servicios_auth_bloq_service__["a" /* AuthBloqService */]] },
    { path: 'Productos', component: __WEBPACK_IMPORTED_MODULE_6__paginas_productos_body_body_component__["a" /* BodyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__servicios_auth_bloq_service__["a" /* AuthBloqService */]] },
    { path: 'Elaboracion', component: __WEBPACK_IMPORTED_MODULE_7__paginas_elaboracion_body_body_component__["a" /* BodyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__servicios_auth_bloq_service__["a" /* AuthBloqService */]] },
    { path: 'Manual', component: __WEBPACK_IMPORTED_MODULE_8__paginas_manual_body_body_component__["a" /* BodyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__servicios_auth_bloq_service__["a" /* AuthBloqService */]] },
    { path: '**', pathMatch: 'full', redirectTo: 'Inicio' }
];
var APP_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES, { useHash: true });


/***/ }),

/***/ "./src/app/componentes/barraub/barraub.component.css":
/***/ (function(module, exports) {

module.exports = "nav span\n{\n  color: #FFF;\n}\n"

/***/ }),

/***/ "./src/app/componentes/barraub/barraub.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-dark\">\n  <span class=\"navbar-brand mb-0 h1\" *ngIf=\"!auth.isAuthenticated()\">Sistema de Gestión y Control</span>\n  <p class=\"navbar-brand mb-0 h1\" style=\"color:#fff\" *ngIf=\"auth.isAuthenticated()\"><b><i>Bienvenido: </i></b><i>{{ profile?.nickname}}</i></p>\n  <div>\n      <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"login()\" *ngIf=\"!auth.isAuthenticated()\">\n        Ingresar\n      </button>\n      <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"logout()\" *ngIf=\"auth.isAuthenticated()\">\n        Salir\n      </button>\n  </div>\n</nav>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li>\n        <a [routerLink]=\"['Inicio']\" class=\"nav-link\"><h4>Inicio</h4></a>\n      </li>\n      <li>\n        <a [routerLink]=\"['Almacen']\" class=\"nav-link\" *ngIf=\"auth.isAuthenticated()\"><h4>Almacen</h4></a>\n      </li>\n      <li>\n        <a [routerLink]=\"['Comandas']\" class=\"nav-link\" *ngIf=\"auth.isAuthenticated()\"><h4>Comandas</h4></a>\n      </li>\n      <li>\n        <a [routerLink]=\"['Personal']\" class=\"nav-link\" *ngIf=\"auth.isAuthenticated()\"><h4>Personal</h4></a>\n      </li>\n      <li>\n        <a [routerLink]=\"['Productos']\" class=\"nav-link\" *ngIf=\"auth.isAuthenticated()\"><h4>Productos</h4></a>\n      </li>\n      <li>\n        <a [routerLink]=\"['Estadisticas']\" class=\"nav-link\" *ngIf=\"auth.isAuthenticated()\"><h4>Estadisticas</h4></a>\n      </li>\n      <li>\n        <a [routerLink]=\"['Elaboracion']\" class=\"nav-link\" *ngIf=\"auth.isAuthenticated()\"><h4>Elaboración</h4></a>\n      </li>\n      <li>\n        <a [routerLink]=\"['Manual']\" class=\"nav-link\" *ngIf=\"auth.isAuthenticated()\"><h4>Manual</h4></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/componentes/barraub/barraub.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarraubComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__ = __webpack_require__("./src/app/servicios/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarraubComponent = /** @class */ (function () {
    function BarraubComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
        this.cargar_perfil();
    }
    BarraubComponent.prototype.ngOnInit = function () {
    };
    BarraubComponent.prototype.cargar_perfil = function () {
        var _this = this;
        if (this.auth.isAuthenticated()) {
            if (this.auth.userProfile) {
                this.profile = this.auth.userProfile;
            }
            else {
                this.auth.getProfile(function (err, profile) {
                    _this.profile = profile;
                });
            }
        }
    };
    BarraubComponent.prototype.login = function () {
        this.auth.login();
    };
    BarraubComponent.prototype.logout = function () {
        this.auth.logout();
    };
    BarraubComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-barraub',
            template: __webpack_require__("./src/app/componentes/barraub/barraub.component.html"),
            styles: [__webpack_require__("./src/app/componentes/barraub/barraub.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__["a" /* AuthService */]])
    ], BarraubComponent);
    return BarraubComponent;
}());



/***/ }),

/***/ "./src/app/paginas/almacen/body/body.component.css":
/***/ (function(module, exports) {

module.exports = ".bgNav\r\n{\r\n  background-color: #f1f1f1;\r\n  border-radius: 1em;\r\n  margin-top: 0.5em;\r\n}\r\n\r\n.mgTb\r\n{\r\n  margin-top: 0.5em;\r\n}\r\n\r\n.mgR\r\n{\r\n  margin-top: 0.3em;\r\n}\r\n\r\n.separador\r\n{\r\n  height: 0.2em;\r\n  background-color: #f1f1f1;\r\n  margin-top: 0.2em;\r\n}\r\n\r\n.th\r\n{\r\n  background-color: #000;\r\n  color: #fff;\r\n  border-top-left-radius: 0.5em;\r\n  border-top-right-radius: 0.5em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/paginas/almacen/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n\n    <!--Barra de acciones-->\n    <div class=\"row bgNav\">\n      <div class=\"col-md-10\">\n        <h2>Materiales</h2>\n      </div>\n      <div class=\"col-md-2\">\n          <button type=\"button\" class=\"btn btn-default btn-outline-secondary\" (click)=\"nuevo = !nuevo\">\n            <h5>Nuevo <img src=\"./../../../../assets/add.png\" class=\"img-fluid pull-xs-left\" alt=\"ADD\"></h5>\n          </button>\n      </div>\n    </div>\n\n    <!--sección que sera modificada por enlaces-->\n\n    <div class=\"col-lg-12\" *ngIf=\"nuevo\">\n      <app-add (detect)=\"recargar();\" ></app-add>\n    </div>\n    <div class=\"col-lg-12 mgTb\">\n\n<!--Tabla para ver los datos-->\n      <!--Thead-->\n      <div class=\"row th\">\n        <div class=\"col-md-1 \"><h2>#</h2></div>\n        <div class=\"col-md-2 \"><h2>Nombre</h2></div>\n        <div class=\"col-md-4 \"><h2>Descripción</h2></div>\n        <div class=\"col-md-3 \"><h2>Cantidad</h2></div>\n        <div class=\"col-md-2 text-center\"><h2>Opciones</h2></div>\n      </div>\n      <!--Tbody-->\n      <div class=\"row mgR\" *ngFor=\"let k of materiales | material; let i = index\">\n        <div class=\"col-md-1\">{{i+1}}</div>\n        <div class=\"col-md-2\">{{materiales[k].nombre}}</div>\n        <div class=\"col-md-4\">{{materiales[k].descripcion}}</div>\n        <div class=\"col-md-3 \">{{materiales[k].cantidad}} {{materiales[k].unidad}} <p *ngIf=\"materiales[k].relacion != '' \">Relación: {{materiales[k].relacion}}</p> </div>\n        <div class=\"col-md-2\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <button type=\"button\" class=\"btn btn-default btn-outline-warning btn-block\" (click)=\"abrirModificar(k);\">Editar</button>\n            </div>\n            <div class=\"col-md-6\">\n              <button type=\"button\" class=\"btn btn-default btn-outline-danger btn-block\" (click)=\"borrar(k);\" >Eliminar</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12 separador\">\n\n        </div>\n      </div>\n      <!--div de edicion-->\n      <div class=\"col-lg-12\">\n        <app-modify-alm *ngIf=\"memoriak\" [k]=\"llave\"  (detect)=\"recargar();\"></app-modify-alm>\n      </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/almacen/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_material_service__ = __webpack_require__("./src/app/servicios/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_contador_service__ = __webpack_require__("./src/app/servicios/contador.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BodyComponent = /** @class */ (function () {
    function BodyComponent(_materialService, _cont) {
        this._materialService = _materialService;
        this._cont = _cont;
        this.materiales = [];
        this.memoriak = false;
        this.recargarLista();
    }
    BodyComponent.prototype.recargarLista = function () {
        var _this = this;
        delete this.materiales;
        this._materialService.getMateriales()
            .subscribe(function (data) { _this.materiales = data; });
        this.nuevo = false;
        this._cont.rpm();
        this._cont.actualizarPosibles();
    };
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent.prototype.borrar = function (key$) {
        var _this = this;
        this._materialService.borrarMaterial(key$).subscribe(function (data) { if (data == null) {
            delete _this.materiales[key$];
        } });
    };
    BodyComponent.prototype.abrirModificar = function (k) {
        this.llave = k;
        this.memoriak = !this.memoriak;
    };
    BodyComponent.prototype.recargar = function () {
        this.memoriak = false;
        this.recargarLista();
        this.recargarLista();
        this._cont.actualizarPosibles();
    };
    BodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-body',
            template: __webpack_require__("./src/app/paginas/almacen/body/body.component.html"),
            styles: [__webpack_require__("./src/app/paginas/almacen/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_material_service__["a" /* MaterialService */], __WEBPACK_IMPORTED_MODULE_2__servicios_contador_service__["a" /* ContadorService */]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/paginas/almacen/componentes/add/add.component.css":
/***/ (function(module, exports) {

module.exports = ".margenes\r\n{\r\n  margin-top: 0.5em;\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.bgG\r\n{\r\n  background-color: #f1f1f1;\r\n  outline-style: groove;\r\n  outline-color: #c0c0c0;\r\n  outline-width: thin;\r\n}\r\n\r\n.mgT\r\n{\r\n  margin-top: 0.7em;\r\n}\r\n\r\n.mgTT\r\n{\r\n  margin-top: 35%;\r\n}\r\n\r\n.mgL\r\n{\r\n  margin-left: 1.5em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/paginas/almacen/componentes/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card margenes\">\n  <div class=\"row\">\n    <div class=\"col-md-3 bgG\">\n      <h3 class=\"mgTT\">Nuevo Material</h3>\n    </div>\n  <!--inputs-->\n  <div class=\"col-md-8 row mgL\">\n    <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\n      <div class=\"form-group row\">\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Nombre:</span>\n            </div>\n            <input [(ngModel)]=\"material.nombre\"\n              name=\"nombre\"\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Nombre\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\" required>\n          </div>\n\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Descripcion:</span>\n            </div>\n            <input [(ngModel)]=\"material.descripcion\"\n              name=\"descripcion\"\n              type=\"text\"\n              placeholder=\"Ejem. capacidad n, color n, proviene de n\"\n              class=\"form-control\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\">\n          </div>\n\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Cantidad Actual:</span>\n            </div>\n            <input [(ngModel)]=\"material.cantidad\"\n              name=\"cantidad\"\n              type=\"number\"\n              placeholder=\"Ejem. 2\"\n              step=\"any\"\n              class=\"form-control\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\" required>\n          </div>\n\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Unidad:</span>\n            </div>\n            <select class=\"custom-select\"\n                    id=\"inputGroupSelect0\"\n                    name=\"unidad\"\n                    [(ngModel)]=\"material.unidad\" required>\n                <option value=\"Kg\">Kilogramos</option>\n                <option value=\"Pz\">Piezas</option>\n                <option value=\"Gr\">Gramos</option>\n                <option value=\"L\">Litros</option>\n            </select>\n          </div>\n\n          <div class=\"col-md-12\" >\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Si el material se usa por piezas, especifica la cantidad que posee un kilogramo:\n              </div>\n              <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\">\n                  <div class=\"input-group input-group-sm mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Piezas:</span>\n                    </div>\n                    <input [(ngModel)]=\"material.relacion\"\n                      name=\"relacion\"\n                      type=\"number\"\n                      placeholder=\"Ejem. 2\"\n                      step=\"any\"\n                      class=\"form-control\"\n                      aria-label=\"Small\"\n                      aria-describedby=\"inputGroup-sizing-sm\" >\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"input-group input-group-sm mb-3 col-md-12 mgT\">\n            <button [disabled]=\"!forma.valid\"\n                    type=\"submit\" class=\"btn btn-secondary btn-lg btn-block\">Añadir</button>\n          </div>\n      </div>\n    </form>\n  </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/almacen/componentes/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_material_service__ = __webpack_require__("./src/app/servicios/material.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddComponent = /** @class */ (function () {
    function AddComponent(_materialService) {
        this._materialService = _materialService;
        this.material = {
            nombre: "",
            descripcion: "",
            cantidad: "",
            unidad: "Kg",
            relacion: ""
        };
        this.detect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.guardar = function () {
        this._materialService.nuevoMaterial(this.material)
            .subscribe(function (data) { });
        this.detect.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AddComponent.prototype, "detect", void 0);
    AddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add',
            template: __webpack_require__("./src/app/paginas/almacen/componentes/add/add.component.html"),
            styles: [__webpack_require__("./src/app/paginas/almacen/componentes/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_material_service__["a" /* MaterialService */]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/paginas/almacen/componentes/modify/modify.component.css":
/***/ (function(module, exports) {

module.exports = ".margenes\r\n{\r\n  margin-top: 0.5em;\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.bgG\r\n{\r\n  background-color: #f1f1f1;\r\n  outline-style: groove;\r\n  outline-color: #c0c0c0;\r\n  outline-width: thin;\r\n}\r\n\r\n.mgT\r\n{\r\n  margin-top: 0.7em;\r\n}\r\n\r\n.mgTT\r\n{\r\n  margin-top: 35%;\r\n}\r\n\r\n.mgL\r\n{\r\n  margin-left: 1.5em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/paginas/almacen/componentes/modify/modify.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card margenes\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 bgG\">\r\n      <h3 class=\"mgTT\">Nuevo Material</h3>\r\n    </div>\r\n  <!--inputs-->\r\n  <div class=\"col-md-8 row mgL\">\r\n    <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\r\n      <div class=\"form-group row\">\r\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Nombre:</span>\r\n            </div>\r\n            <input [(ngModel)]=\"material.nombre\"\r\n              name=\"nombre\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              aria-label=\"Small\"\r\n              aria-describedby=\"inputGroup-sizing-sm\" required>\r\n          </div>\r\n\r\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Descripcion:</span>\r\n            </div>\r\n            <input [(ngModel)]=\"material.descripcion\"\r\n              name=\"descripcion\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              aria-label=\"Small\"\r\n              aria-describedby=\"inputGroup-sizing-sm\">\r\n          </div>\r\n\r\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Cantidad Actual:</span>\r\n            </div>\r\n            <input [(ngModel)]=\"material.cantidad\"\r\n              name=\"cantidad\"\r\n              type=\"number\"\r\n              step=\"any\"\r\n              class=\"form-control\"\r\n              aria-label=\"Small\"\r\n              aria-describedby=\"inputGroup-sizing-sm\" required>\r\n          </div>\r\n\r\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Unidad de Peso:</span>\r\n            </div>\r\n            <select class=\"custom-select\" id=\"inputGroupSelect0\" name=\"unidad\" [(ngModel)]=\"material.unidad\" required>\r\n                <option value=\"x\">...</option>\r\n                <option value=\"Kg\">Kilogramos</option>\r\n                <option value=\"Pz\">Piezas</option>\r\n                <option value=\"Gr\">Gramos</option>\r\n                <option value=\"L\">Litros</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\" >\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Si el material se usa por piezas, especifica la cantidad que posee un kilogramo:\r\n              </div>\r\n              <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"input-group input-group-sm mb-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Piezas:</span>\r\n                    </div>\r\n                    <input [(ngModel)]=\"material.relacion\"\r\n                      name=\"relacion\"\r\n                      type=\"number\"\r\n                      placeholder=\"Ejem. 2\"\r\n                      step=\"any\"\r\n                      class=\"form-control\"\r\n                      aria-label=\"Small\"\r\n                      aria-describedby=\"inputGroup-sizing-sm\" >\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"input-group input-group-sm mb-3 col-md-12 mgT\">\r\n            <button [disabled]=\"!forma.valid\"\r\n                    type=\"submit\" class=\"btn btn-secondary btn-lg btn-block\">Modificar</button>\r\n          </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/paginas/almacen/componentes/modify/modify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_material_service__ = __webpack_require__("./src/app/servicios/material.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModifyComponent = /** @class */ (function () {
    function ModifyComponent(_materialService) {
        this._materialService = _materialService;
        this.material = {
            nombre: "",
            descripcion: "",
            cantidad: "",
            relacion: "",
            unidad: ""
        };
        this.detect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ModifyComponent.prototype.cargar = function () {
        var _this = this;
        this._materialService.getMaterial(this.key).subscribe(function (data) {
            if (data != null) {
                _this.material = data;
            }
            else {
                _this.material.nombre = "Error";
                _this.material.descripcion = "Error";
                _this.material.cantidad = "0";
                _this.material.unidad = "";
            }
        });
    };
    ModifyComponent.prototype.ngOnInit = function () {
        this.cargar();
    };
    ModifyComponent.prototype.guardar = function () {
        this._materialService.modificarMaterial(this.material, this.key)
            .subscribe(function (data) { });
        this.detect.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('k'),
        __metadata("design:type", String)
    ], ModifyComponent.prototype, "key", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ModifyComponent.prototype, "detect", void 0);
    ModifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modify-alm',
            template: __webpack_require__("./src/app/paginas/almacen/componentes/modify/modify.component.html"),
            styles: [__webpack_require__("./src/app/paginas/almacen/componentes/modify/modify.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_material_service__["a" /* MaterialService */]])
    ], ModifyComponent);
    return ModifyComponent;
}());



/***/ }),

/***/ "./src/app/paginas/comandas/body/body.component.css":
/***/ (function(module, exports) {

module.exports = ".mgNb\r\n{\r\n  background-color: #f1f1f1;\r\n  border-radius: 1em;\r\n  margin-top: 0.5em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/paginas/comandas/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n  <div class=\"row mgNb\">\n    <div class=\"col-md-8\">\n      <div class=\"col-lg-12\">\n        <h2>Comanda: # {{folioComanda}}</h2>\n      </div>\n      <div class=\"col-lg-12 row\">\n        <div class=\"col-md-6\">\n          <button type=\"button\" class=\"btn btn-outline-info btn-block\" [routerLink]=\"['/Inicio', 1]\">\n            Generar Nueva Comanda\n          </button>\n        </div>\n        <div class=\"col-md-6\"></div>\n      </div>\n    </div>\n    <div class=\"col-md-4 alert alert-info\">\n      <h2>Total: {{totalt | currency}}</h2>\n    </div>\n  </div>\n\n\n  <br>\n\n  <!--Espacio para generar el pedido-->\n  <div class=\"col-sm-12\">\n    <div class=\"card\">\n      <!--barra presentacion de agregar-->\n      <nav class=\"navbar navbar-light bg-light\">\n        <span class=\"navbar-brand mb-0 h1\">Pedido #{{npedido+1}}</span>\n        <button type=\"button\" class=\"btn btn-default btn-outline-secondary\" (click)=\"agregarPed()\">Agregar</button>\n      </nav>\n      <!--barra presentacion de agregar-->\n\n        <!--espacio de muestra de pedidos y de -->\n        <div class=\"col-lg-12 row\">\n          <div class=\"col-md-3\">\n            <app-pedido *ngFor=\"let k of list;let i = index \" [n]=\"list[i]\" [t]=\"total[i]\"></app-pedido>\n          </div>\n          <div class=\"col-md-9\">\n            <app-addped (detectc)=\"asignarC($event)\" (detectp)=\"asignarP($event)\" (detectprod)=\"asignarProd($event)\"></app-addped>\n          </div>\n        </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/comandas/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_comanda_service__ = __webpack_require__("./src/app/servicios/comanda.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_pedido_service__ = __webpack_require__("./src/app/servicios/pedido.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_material_service__ = __webpack_require__("./src/app/servicios/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_producto_service__ = __webpack_require__("./src/app/servicios/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_contador_service__ = __webpack_require__("./src/app/servicios/contador.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_addped_addped_component__ = __webpack_require__("./src/app/paginas/comandas/componentes/addped/addped.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BodyComponent = /** @class */ (function () {
    function BodyComponent(_comandaService, _pedidoService, _materialService, _productoService, _contador) {
        var _this = this;
        this._comandaService = _comandaService;
        this._pedidoService = _pedidoService;
        this._materialService = _materialService;
        this._productoService = _productoService;
        this._contador = _contador;
        this.npedido = 0;
        this.totalt = 0;
        this.total = [];
        this.list = [1];
        this.productosS = "";
        this.materiales = [];
        this.productos = [];
        this.precios = [];
        this.cantidades = [];
        this.comanda = {
            fecha: "",
            pedido: {},
            elaborada: 1
        };
        var hoy = new Date();
        this.comanda.fecha = String(hoy.getDate()) + '/' + String(hoy.getMonth() + 1) + '/' + String(hoy.getFullYear());
        this._comandaService.nueva(this.comanda)
            .subscribe(function (data) {
            _this.folioComanda = data["name"];
        });
        this._materialService.getMateriales()
            .subscribe(function (data) {
            if (data != null) {
                _this.materiales = data;
            }
            else {
                alert("ERROR type: sm00");
            }
        });
        this._productoService.getProductos()
            .subscribe(function (data) {
            if (data != null) {
                _this.productos = data;
            }
            else {
                alert("ERROR type: sp00");
            }
        });
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent.prototype.agregarPed = function () {
        var _this = this;
        var hcompra = false;
        for (var i = 0; i < this.cantidades.length; i++) {
            if (this.cantidades[i] != 0) {
                hcompra = true;
                break;
            }
        }
        if (hcompra) {
            var pedido = {
                productos: this.productosS,
                cantidades: String(this.cantidades),
                total: this.total[this.npedido]
            };
            this._contador.restarProductos(this.productosS, String(this.cantidades));
            for (var i = 0; i < this.precios.length; i++) {
                this.precios[i] = 0;
                this.cantidades[i] = 0;
            }
            this.productosS = "";
            this._pedidoService.nuevo(pedido, this.folioComanda)
                .subscribe(function (data) {
                if (data != null) {
                    alert("se inserto correctamente");
                    _this.npedido++;
                    _this.list[_this.npedido] = _this.npedido + 1;
                    _this.hijo.recargarLista();
                }
                else {
                    alert(data);
                }
            });
        }
        else {
            alert("No hay productos seleccionados.");
        }
    };
    BodyComponent.prototype.asignarProd = function (prod) {
        this.productosS = String(prod);
    };
    BodyComponent.prototype.asignarC = function (cantidades) {
        this.cantidades = cantidades;
    };
    BodyComponent.prototype.asignarP = function (precios) {
        this.precios = precios;
        this.crearTotal();
    };
    BodyComponent.prototype.crearTotal = function () {
        var total = 0;
        for (var i = 0; i < this.precios.length; i++) {
            var x = this.precios[i] * this.cantidades[i];
            total += x;
        }
        this.total[this.npedido] = String(total);
        this.totalt = 0;
        for (var i = 0; i < this.total.length; i++) {
            this.totalt += Number(this.total[i]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__componentes_addped_addped_component__["a" /* AddpedComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__componentes_addped_addped_component__["a" /* AddpedComponent */])
    ], BodyComponent.prototype, "hijo", void 0);
    BodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-body',
            template: __webpack_require__("./src/app/paginas/comandas/body/body.component.html"),
            styles: [__webpack_require__("./src/app/paginas/comandas/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_comanda_service__["a" /* ComandaService */], __WEBPACK_IMPORTED_MODULE_2__servicios_pedido_service__["a" /* PedidoService */],
            __WEBPACK_IMPORTED_MODULE_3__servicios_material_service__["a" /* MaterialService */], __WEBPACK_IMPORTED_MODULE_4__servicios_producto_service__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_5__servicios_contador_service__["a" /* ContadorService */]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/paginas/comandas/componentes/addped/addped.component.css":
/***/ (function(module, exports) {

module.exports = ".mgT\r\n{\r\n  margin-top: 0.5em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/paginas/comandas/componentes/addped/addped.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success col-lg-12\" role=\"alert\" *ngIf=\"nada\">\n  No existen productos registrados\n</div>\n<div class=\"row\">\n\n  <div class=\"card col-md-6 mgT\" *ngFor=\"let k of productos | productos;let i = index\">\n    <div class=\"card-body\">\n      <h3 class=\"card-title text-center\">{{productos[k].nombre}}</h3>\n      <p class=\"card-subtitle mb-2 text-muted text-center\">{{productos[k].descripcion}}</p>\n      <p class=\"card-text text-center\">\n        Cantidad: <b>{{cantidades[i]}}</b><br>\n        Costo por unidad: <b>{{productos[k].precio | currency}}</b>\n        Cantidad Actual: <b>{{productos[k].posible}}</b>\n      </p>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <button type=\"button\" class=\"btn btn-default btn-outline-secondary btn-block\" (click)=\"sumar(i,productos[k].precio,k)\">\n            <h5><img src=\"./../../../../assets/add.png\" class=\"img-fluid pull-xs-left\" alt=\"ADD\"></h5>\n          </button>\n        </div>\n        <div class=\"col-md-6\">\n          <button type=\"button\" class=\"btn btn-default btn-outline-secondary btn-block\" (click)=\"restar(i,productos[k].precio)\">\n            <h5><img src=\"./../../../../assets/less.png\" class=\"img-fluid pull-xs-left\" alt=\"ADD\"></h5>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/comandas/componentes/addped/addped.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_producto_service__ = __webpack_require__("./src/app/servicios/producto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddpedComponent = /** @class */ (function () {
    function AddpedComponent(_productoService) {
        this._productoService = _productoService;
        //boleanos para activar algunas alertas
        this.nada = false;
        //array que contiene los productos del pedido
        this.productosS = [];
        //array que contiene los productos para mostrarlos
        this.productos = [];
        //arrays que contienen las cantidades y precios del pedido
        this.cantidades = [];
        this.precios = [];
        //se carga la vista de los productos
        this.recargarLista();
        //se crea la instancia de los eventos
        this.detectc = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.detectp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.detectprod = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    //metodo que tiene la funcion de cargar la lista de pedidos al iniciar la ventana
    AddpedComponent.prototype.recargarLista = function () {
        var _this = this;
        this._productoService.getProductos()
            .subscribe(function (data) {
            if (data != null) {
                //se llena el arreglo para mostrar los productos.
                _this.productos = data;
                //variale que contendra la cantidad de productos
                var x = 0;
                var ps = "";
                //metodo para recorrer el arreglo y saber cuantos productos hay
                for (var i in _this.productos) {
                    if (ps == "")
                        ps = i;
                    else
                        ps += "," + i;
                    if (_this.productos.hasOwnProperty(i)) {
                        x++;
                    }
                }
                _this.productosS = ps.split(",");
                //variables locales para hacer el paso de string a array.
                var c = "";
                var p = "";
                //metodo para llenar un string el cual contendra
                //las cantidades de cada producto por eso inicializado en 0
                for (var i_1 = 0; i_1 < x; i_1++) {
                    if (c == "")
                        c = "0";
                    else
                        c += ",0";
                    if (p == "")
                        p = "0";
                    else
                        p += ",0";
                }
                //se hace un array no asociativo del string
                _this.cantidades = c.split(",");
                _this.precios = p.split(",");
            }
            else
                _this.nada = true;
        });
    };
    AddpedComponent.prototype.ngOnInit = function () {
    };
    //los metodos sumar y restar contienen las mismas lineas,
    // en la linea 2 (relativa) se agrega ++ o -- de acuerdo al caso
    AddpedComponent.prototype.sumar = function (id, precio, nombre) {
        //variable para obtener la cantidad y convertirla a numero para sumar
        var x = Number(this.cantidades[id]);
        //se suma
        x++;
        //se convierte a string y se añade nuevamente la variable a la posicion
        //de donde se obtuvo
        this.cantidades[id] = String(x);
        this.precios[id] = precio;
        //se coloca el nombre del producto en un string.
        this.productosS[id] = nombre;
        //se lanzan los array para tratarlos
        this.detectc.emit(this.cantidades);
        this.detectp.emit(this.precios);
        this.detectprod.emit(this.productosS);
    };
    AddpedComponent.prototype.restar = function (id) {
        var x = Number(this.cantidades[id]);
        if (x == 0)
            x = 0;
        else
            x--;
        this.cantidades[id] = String(x);
        this.detectc.emit(this.cantidades);
        this.detectp.emit(this.precios);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AddpedComponent.prototype, "detectc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AddpedComponent.prototype, "detectp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AddpedComponent.prototype, "detectprod", void 0);
    AddpedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addped',
            template: __webpack_require__("./src/app/paginas/comandas/componentes/addped/addped.component.html"),
            styles: [__webpack_require__("./src/app/paginas/comandas/componentes/addped/addped.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_producto_service__["a" /* ProductoService */]])
    ], AddpedComponent);
    return AddpedComponent;
}());



/***/ }),

/***/ "./src/app/paginas/comandas/componentes/pedido/pedido.component.css":
/***/ (function(module, exports) {

module.exports = ".mgTb\r\n{\r\n  margin-top: 0.5em;\r\n  margin-bottom: 0.5em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/paginas/comandas/componentes/pedido/pedido.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mgTb\">\n  <div class=\"card-header\">\n    Pedido # {{pedido}}\n  </div>\n  <div class=\"card-body\">\n    <blockquote class=\"blockquote mb-0\">\n      <p>Total: {{total | currency}}</p>\n    </blockquote>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/comandas/componentes/pedido/pedido.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoComponent; });
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

var PedidoComponent = /** @class */ (function () {
    function PedidoComponent() {
    }
    PedidoComponent.prototype.ngOnInit = function () {
        this.total = "0";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('n'),
        __metadata("design:type", Number)
    ], PedidoComponent.prototype, "pedido", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('t'),
        __metadata("design:type", String)
    ], PedidoComponent.prototype, "total", void 0);
    PedidoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pedido',
            template: __webpack_require__("./src/app/paginas/comandas/componentes/pedido/pedido.component.html"),
            styles: [__webpack_require__("./src/app/paginas/comandas/componentes/pedido/pedido.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PedidoComponent);
    return PedidoComponent;
}());



/***/ }),

/***/ "./src/app/paginas/elaboracion/body/body.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/elaboracion/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"col-lg-12\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <app-barraped (detect)=\"cargarPedidos($event);\" (detect2)=\"cargarPedidos($event);\"></app-barraped>\n    </div>\n    <div class=\"col-sm-8 row\" *ngIf=\"!memoria\">\n      <app-cards [id]=\"i+1\" [p]=\"k\" class=\"col-md-4\" *ngFor=\"let k of pedidos; let i = index\"></app-cards>\n    </div>\n    <div class=\"col-sm-8 row\" *ngIf=\"memoria\">\n      <div class=\"alert alert-warning text-center\" role=\"alert\">\n        <h2>No existen comandas.</h2>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/elaboracion/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_comanda_service__ = __webpack_require__("./src/app/servicios/comanda.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BodyComponent = /** @class */ (function () {
    function BodyComponent(_comandaService) {
        var _this = this;
        this._comandaService = _comandaService;
        this.comandas = [];
        this.pedidos = [];
        this.memoria = false;
        this._comandaService.getComandas().subscribe(function (data) {
            if (data != null) {
                _this.comandas = data;
            }
        });
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent.prototype.cargarPedidos = function (key) {
        if (key != "xyz") {
            this.memoria = false;
            var p = this.comandas[key].pedido;
            var ped = [];
            for (var k in p) {
                ped.push(p[k]);
            }
            this.pedidos = ped;
        }
        else {
            this.memoria = true;
        }
    };
    BodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-body',
            template: __webpack_require__("./src/app/paginas/elaboracion/body/body.component.html"),
            styles: [__webpack_require__("./src/app/paginas/elaboracion/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_comanda_service__["a" /* ComandaService */]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/paginas/elaboracion/componentes/barraped/barraped.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/elaboracion/componentes/barraped/barraped.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ul class=\"list-group\">\r\n  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n      <div class=\"col-md-12 row\">\r\n        <div class=\"col-md-6\">\r\n          <button class=\"btn btn-outline-info btn-lg btn-block\" (click)=\"alert(1);\">Recargar</button>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <button class=\"btn btn-outline-success btn-lg btn-block\" (click)=\"elaborar();\" *ngIf=\"llave != ''\">Hecho</button>\r\n        </div>\r\n      </div>\r\n  </li>\r\n  <li class=\"list-group-item d-flex justify-content-between align-items-center\"\r\n      *ngFor=\"let k of comandas; let i = index;\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"emitirComanda(k);\">\r\n      <b>Comanda #{{i+1}}</b>: {{k}}\r\n    </button>\r\n    <span class=\"badge badge-primary badge-pill\">{{contarPed(k)}}</span>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/paginas/elaboracion/componentes/barraped/barraped.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarrapedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_comanda_service__ = __webpack_require__("./src/app/servicios/comanda.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarrapedComponent = /** @class */ (function () {
    function BarrapedComponent(_comandaService) {
        var _this = this;
        this._comandaService = _comandaService;
        this.comandas = [];
        this.comandasC = [];
        this.llave = "";
        this.detect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.detect2 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this._comandaService.getComandas().subscribe(function (data) {
            if (data != null) {
                _this.revisar(data);
                _this.comandasC = data;
            }
        });
    }
    BarrapedComponent.prototype.ngOnInit = function () {
    };
    BarrapedComponent.prototype.emitirComanda = function (k) {
        this.llave = k;
        this.detect.emit(k);
    };
    BarrapedComponent.prototype.elaborar = function () {
        this.comandasC[this.llave].elaborada = 0;
        this._comandaService.modificarComanda(this.comandasC[this.llave], this.llave).subscribe(function (data) { });
        this.revisar(this.comandasC);
        this.llave = this.comandas[0];
        if (this.comandas.length != 0) {
            console.log("aun hay");
            this.detect2.emit(this.comandas[0]);
        }
        else {
            this.detect2.emit("xyz");
        }
    };
    BarrapedComponent.prototype.revisar = function (x) {
        var arr = [];
        for (var k in x) {
            if (x[k].elaborada == 1) {
                arr.push(k);
            }
        }
        this.comandas = arr;
    };
    BarrapedComponent.prototype.contarPed = function (x) {
        var cont = 0;
        var ped = this.comandasC[x].pedido;
        for (var k in ped) {
            cont++;
        }
        return cont;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], BarrapedComponent.prototype, "detect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], BarrapedComponent.prototype, "detect2", void 0);
    BarrapedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-barraped',
            template: __webpack_require__("./src/app/paginas/elaboracion/componentes/barraped/barraped.component.html"),
            styles: [__webpack_require__("./src/app/paginas/elaboracion/componentes/barraped/barraped.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_comanda_service__["a" /* ComandaService */]])
    ], BarrapedComponent);
    return BarrapedComponent;
}());



/***/ }),

/***/ "./src/app/paginas/elaboracion/componentes/cards/cards.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/elaboracion/componentes/cards/cards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Pedido #{{id}}</h5>\r\n  </div>\r\n  <ul class=\"list-group list-group-flush\">\r\n    <li class=\"list-group-item\" *ngFor=\"let k of nomprod; let i = index\">\r\n      {{k}} : {{cantidades[i]}}\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/paginas/elaboracion/componentes/cards/cards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_producto_service__ = __webpack_require__("./src/app/servicios/producto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsComponent = /** @class */ (function () {
    function CardsComponent(_productoService) {
        var _this = this;
        this._productoService = _productoService;
        this.productos = []; //arreglo que contendra los materiales para poder convertir las llaves en nombres.
        this.nomprod = []; //arreglo que contendra los nombres de los productos pedidos.
        this.cantidades = []; //arreglo que contendra las cantidades de los productos pedidos.
        this._productoService.getProductos().subscribe(function (data) { if (data != null)
            _this.productos = data;
        else
            alert("ERROR"); _this.cargarDatos(); });
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent.prototype.cargarDatos = function () {
        var keys = this.pedido.productos.split(","); //obtengo las keys de pedidos.
        var cant = this.pedido.cantidades.split(","); //obtengo las cantidades de los pedidos.
        for (var i = 0; i < cant.length; i++) {
            if (Number(cant[i]) > 0) {
                this.nomprod.push(this.productos[keys[i]].nombre); //añado el nombre del producto a un arreglo que se usara en el html
                this.cantidades.push(cant[i]); //añado su cantidad a un arreglo que se usara en el html. con esto nombre y cantidad estaran en la misma posicion en diferentes arreglos
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('id'),
        __metadata("design:type", Number)
    ], CardsComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('p'),
        __metadata("design:type", Object)
    ], CardsComponent.prototype, "pedido", void 0);
    CardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cards',
            template: __webpack_require__("./src/app/paginas/elaboracion/componentes/cards/cards.component.html"),
            styles: [__webpack_require__("./src/app/paginas/elaboracion/componentes/cards/cards.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_producto_service__["a" /* ProductoService */]])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/paginas/estadisticas/body/body.component.css":
/***/ (function(module, exports) {

module.exports = ".mgNb\r\n{\r\n  background-color: #f1f1f1;\r\n  border-radius: 1em;\r\n  margin-top: 0.5em;\r\n}\r\n\r\n.mgTb\r\n{\r\n    margin-top: 0.5em;\r\n}\r\n\r\n.th\r\n{\r\n  background-color: #000;\r\n  color: #fff;\r\n  border-top-left-radius: 0.5em;\r\n  border-top-right-radius: 0.5em;\r\n}\r\n\r\n.mgR\r\n{\r\n  margin-top: 0.3em;\r\n}\r\n\r\n.wC\r\n{\r\n  width: 18rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/paginas/estadisticas/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mgNb\">\n  <div class=\"col-md-10\">\n    <h2>Estadisticas</h2>\n  </div>\n</div>\n<br><br>\n\n\n  <div class=\"row col-md-12 \" width=\"50%\">\n     <div class=\"col-md-2\"></div>\n     <div class=\"col-md-8\">\n       <div class=\"card\">\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\">\n                  <button type=\"button\" name=\"button\" (click)=\"llenar()\" class=\"btn btn-block btn-success\" > <h2>Generar</h2> </button>\n                </li>\n                <li class=\"list-group-item\"> <h3><b>Dia más vendido:</b> {{diamv}}</h3> </li>\n                <li class=\"list-group-item\"> <h3><b>Producto más vendido:</b> {{productomv}}</h3> </li>\n                <li class=\"list-group-item\"> <h3><b>Ganancias del dia:</b> {{gananciasD | currency}}</h3> </li>\n                <li class=\"list-group-item\"> <h3><b>Ganacias:</b> {{gananciasT | currency}}</h3> </li>\n            </ul>\n        </div>\n     </div>\n  </div>\n\n<br><br>\n\n<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Folio</th>\n      <th scope=\"col\">Fecha</th>\n      <th scope=\"col\">Pedidos</th>\n      <th scope=\"col\">Acción</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let c of comandas | comanda; let i = index;\">\n      <td scope=\"row\">{{i+1}}</td>\n      <td>{{c}}</td>\n      <td>{{comandas[c].fecha}}</td>\n      <td>{{comandas[c].pedido | pedido}}</td>\n      <td>\n        <button type=\"button\" name=\"button\" (click)=\"borrarComanda(c)\" class=\"btn btn-outline-danger\">Borrar</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/paginas/estadisticas/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_comanda_service__ = __webpack_require__("./src/app/servicios/comanda.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_producto_service__ = __webpack_require__("./src/app/servicios/producto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BodyComponent = /** @class */ (function () {
    function BodyComponent(_comandaService, _productoService) {
        this._comandaService = _comandaService;
        this._productoService = _productoService;
        this.comandas = [];
        this.fechas = [];
        this.pedidos = [];
        this.productos = [];
        this.diamv = "sin datos";
        this.gananciasT = 0;
        this.gananciasD = 0;
        this.productomv = "sin datos";
        var hoy = new Date();
        var dd = String(hoy.getDate());
        var mm = String(hoy.getMonth() + 1); //hoy es 0!
        var yyyy = String(hoy.getFullYear());
        var h = dd + '/' + mm + '/' + yyyy;
        this.fechaDelDia = h;
        this.cargarLista();
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent.prototype.cargarLista = function () {
        var _this = this;
        this._comandaService.getComandas().subscribe(function (data) {
            if (data != null)
                _this.comandas = data;
        });
        this._productoService.getProductos().subscribe(function (data) {
            if (data != null)
                _this.productos = data;
        });
    };
    BodyComponent.prototype.llenar = function () {
        this.gananciasT = 0;
        this.gananciasD = 0;
        var comandas = this.comandas;
        var fechas = [];
        var totales = [];
        var totalesD = [];
        var prod = [];
        var cantprod = [];
        var totalesdia = [];
        for (var key in comandas) {
            if (comandas[key].pedido != null) {
                fechas.push(comandas[key].fecha);
                for (var k in comandas[key].pedido) {
                    totales.push(comandas[key].pedido[k].total);
                    if (this.fechaDelDia == comandas[key].fecha) {
                        totalesD.push(comandas[key].pedido[k].total);
                    }
                    prod.push(comandas[key].pedido[k].productos);
                    cantprod.push(comandas[key].pedido[k].cantidades);
                    if (totalesdia[String(comandas[key].fecha)] != null) {
                        totalesdia[String(comandas[key].fecha)] = comandas[key].pedido[k].total;
                    }
                    else {
                        totalesdia[String(comandas[key].fecha)] += comandas[key].pedido[k].total;
                    }
                }
            }
        }
        this.gananciasTm(totales);
        this.gananciasDm(totalesD);
        this.productoMv(prod[0], cantprod);
        this.diaMv(this.sinRedundancia(fechas));
    };
    BodyComponent.prototype.diaMv = function (x) {
        var fec = "";
        var cant = 0;
        for (var key in x) {
            if (cant == 0) {
                fec = String(key);
                cant = x[key];
            }
            if (cant < Number(x[key])) {
                fec = String(key);
                cant = x[key];
            }
        }
        if (fec != "" && cant != 0) {
            this.diamv = fec + " No. comandas: " + cant;
        }
        else {
            this.diamv = "sin datos";
        }
    };
    BodyComponent.prototype.productoMv = function (x, y) {
        if (x != null && y != null) {
            var xx = x.split(",");
            var arrpos = [];
            for (var i = 0; i < xx.length; i++) {
                arrpos[String(xx[i])] = 0;
            }
            for (var i = 0; i < y.length; i++) {
                var yy = y[i].split(",");
                for (var j = 0; j < yy.length; j++) {
                    arrpos[xx[j]] += Number(yy[j]);
                }
            }
            var cant = 0;
            var fec = "";
            for (var key in arrpos) {
                if (cant == 0) {
                    fec = this.productos[key].nombre;
                    cant = arrpos[key];
                }
                if (cant < Number(arrpos[key])) {
                    fec = this.productos[key].nombre;
                    cant = arrpos[key];
                }
            }
            if (fec != "" && cant != 0) {
                this.productomv = fec + " con: " + cant;
            }
            else {
                this.productomv = "sin datos";
            }
        }
    };
    BodyComponent.prototype.gananciasDm = function (x) {
        for (var i = 0; i < x.length; i++) {
            this.gananciasD += Number(x[i]);
        }
    };
    BodyComponent.prototype.gananciasTm = function (x) {
        for (var i = 0; i < x.length; i++) {
            this.gananciasT += Number(x[i]);
        }
    };
    BodyComponent.prototype.sinRedundancia = function (array) {
        var array2 = [];
        var c = 0;
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (array2[String(array[i])] == null) {
                    array2[String(array[i])] = 1;
                }
                else {
                    array2[String(array[i])]++;
                }
            }
            c++;
        }
        for (var key in array2) {
            array2[key] = String(Number(array2[key]) / c);
        }
        return array2;
    };
    BodyComponent.prototype.borrarComanda = function (c) {
        var _this = this;
        this._comandaService.borrarComanda(c).subscribe(function (data) {
            if (data == null) {
                delete _this.comandas[c];
                _this.llenar();
            }
        });
    };
    BodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-body',
            template: __webpack_require__("./src/app/paginas/estadisticas/body/body.component.html"),
            styles: [__webpack_require__("./src/app/paginas/estadisticas/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_comanda_service__["a" /* ComandaService */], __WEBPACK_IMPORTED_MODULE_2__servicios_producto_service__["a" /* ProductoService */]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/paginas/inicio/body/body.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/inicio/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\n  <div class=\"row\">\n    <div class=\"col-md-4\"></div>\n    <div class=\"col-md-4\">\n      <app-card></app-card>\n    </div>\n    <div class=\"col-md-4\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/inicio/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
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


var BodyComponent = /** @class */ (function () {
    function BodyComponent(router, activatedRoute) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.subscribe(function (data) {
            if (data['id'] != 1)
                return true;
            else
                _this.cargarComandas();
        });
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent.prototype.cargarComandas = function () {
        this.router.navigate(['/Comandas']);
    };
    BodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-body',
            template: __webpack_require__("./src/app/paginas/inicio/body/body.component.html"),
            styles: [__webpack_require__("./src/app/paginas/inicio/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/paginas/inicio/componentes/card/card.component.css":
/***/ (function(module, exports) {

module.exports = "div {\r\n  width: 100%;\r\n  margin-top: 5em;\r\n}\r\n\r\ndiv div {\r\n  margin-top: 0em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/paginas/inicio/componentes/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Bienvenido a SGyC</h5>\n    <h6 class=\"card-subtitle mb-2 text-muted\">Sistema de Gestion y Control</h6>\n    <p class=\"card-text\">Este software es desarrollado para hacer mas sencillos los procesos de gestion de la empresa, así como el control de las areas necesarias.</p>\n    <a href=\"https://mc0.000webhostapp.com/\" class=\"btn btn-info btn-block\">Visita el Sitio de nuestra empresa</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/inicio/componentes/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
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

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__("./src/app/paginas/inicio/componentes/card/card.component.html"),
            styles: [__webpack_require__("./src/app/paginas/inicio/componentes/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/paginas/manual/body/body.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/manual/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\">\n  <div class=\"card-header\">\n    <ul class=\"nav nav-tabs card-header-tabs\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"mostrar(0)\">Inicio</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"mostrar(1)\">Almacen</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"mostrar(2)\">Productos</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"mostrar(3)\">Personal</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"mostrar(4)\">Estadisticas</a>\n      </li>\n    </ul>\n  </div>\n\n  <br>\n  <div class=\"col-lg-12 row\" *ngIf=\"inicio\">\n    <div class=\"col-md-4\"></div>\n\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./../../../../../assets/pi.png\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">\n            Manual de Usuario\n          </h5>\n          <p class=\"card-text text-justify\">\n            Este apartado esta destinado a mostrar de manera breve con videos y texto, la manera correcta\n            en que se usa el sistema, los pasos a seguir para crear, modificar o eliminar las opciones posibles que\n            presenta el sistema.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n\n\n\n\n  <app-malmacen *ngIf=\"alma\" ></app-malmacen>\n  <app-mcomandas *ngIf=\"coma\"></app-mcomandas>\n  <app-mestadisticas *ngIf=\"esta\"></app-mestadisticas>\n  <app-mpersonal *ngIf=\"pers\"></app-mpersonal>\n  <app-mproductos *ngIf=\"prod\"></app-mproductos>\n"

/***/ }),

/***/ "./src/app/paginas/manual/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
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

var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
        this.inicio = true;
        this.alma = false;
        this.coma = false;
        this.esta = false;
        this.pers = false;
        this.prod = false;
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent.prototype.mostrar = function (i) {
        this.inicio = false;
        this.alma = false;
        this.prod = false;
        this.pers = false;
        this.esta = false;
        switch (i) {
            case 0:
                this.inicio = true;
                break;
            case 1:
                this.alma = true;
                break;
            case 2:
                this.prod = true;
                break;
            case 3:
                this.pers = true;
                break;
            case 4:
                this.esta = true;
                break;
        }
    };
    BodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-body',
            template: __webpack_require__("./src/app/paginas/manual/body/body.component.html"),
            styles: [__webpack_require__("./src/app/paginas/manual/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/paginas/manual/componentes/malmacen/malmacen.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/manual/componentes/malmacen/malmacen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n  <br>\n  <div class=\"row\">\n\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./../../../../../assets/nvomat.gif\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">\n            Dar de alta un nuevo material\n          </h5>\n          <p class=\"card-text text-justify\">\n            Para dar de alta un nuevo material, estando en el menu Almacen, en la barra principal\n            se encuentra un botón con el nombre \"nuevo\", una vez se haya dado clic se abrirá un\n            formulario, el cual habrá que llenar, todos los datos son necesarios, a excepción de\n            la cantidad de piezas por kilogramo, este campo es unicamente necesario si el material\n            tiene esa propiedad.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./../../../../../assets/modmat.gif\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">\n            Modificar un Material\n          </h5>\n          <p class=\"card-text text-justify\">\n            Para modificar un material estara el boton correspondiente en la tabla de los materiales,\n            daras clic sobre el y te mostrara el formulario con el que lo diste de alta para\n            realizar los cambios necesarios.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./../../../../../assets/elimat.gif\" alt=\"matpros..\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">\n            Borrar un Material.\n          </h5>\n          <p class=\"card-text text-justify\">\n            Para eliminar un material estara el boton correspondiente en la tabla de los materiales,\n            solo tendras que dar clic para darlo de baja en el sistema.\n          </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <br>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/manual/componentes/malmacen/malmacen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MalmacenComponent; });
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

var MalmacenComponent = /** @class */ (function () {
    function MalmacenComponent() {
    }
    MalmacenComponent.prototype.ngOnInit = function () {
    };
    MalmacenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-malmacen',
            template: __webpack_require__("./src/app/paginas/manual/componentes/malmacen/malmacen.component.html"),
            styles: [__webpack_require__("./src/app/paginas/manual/componentes/malmacen/malmacen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MalmacenComponent);
    return MalmacenComponent;
}());



/***/ }),

/***/ "./src/app/paginas/manual/componentes/mcomandas/mcomandas.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/manual/componentes/mcomandas/mcomandas.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  mcomandas works!\n</p>\n"

/***/ }),

/***/ "./src/app/paginas/manual/componentes/mcomandas/mcomandas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return McomandasComponent; });
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

var McomandasComponent = /** @class */ (function () {
    function McomandasComponent() {
    }
    McomandasComponent.prototype.ngOnInit = function () {
    };
    McomandasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mcomandas',
            template: __webpack_require__("./src/app/paginas/manual/componentes/mcomandas/mcomandas.component.html"),
            styles: [__webpack_require__("./src/app/paginas/manual/componentes/mcomandas/mcomandas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], McomandasComponent);
    return McomandasComponent;
}());



/***/ }),

/***/ "./src/app/paginas/manual/componentes/mestadisticas/mestadisticas.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/manual/componentes/mestadisticas/mestadisticas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n  <br>\n  <div class=\"row\">\n\n    <div class=\"col-md-1\"></div>\n\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./../../../../../assets/genest.gif\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">\n            Generar Estadisticas\n          </h5>\n          <p class=\"card-text text-justify\">\n            Para obtener en pantalla las estadisticas de las ventas, nos desplazaremos al modulo de Estadisticas,\n            dentro se nos mostrara una tabla con un botón color verde encima cuyo titulo es \"Generar\", al dar clic\n            sobre este, se generaran los 4 datos de las estadisticas.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-2\"></div>\n\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./../../../../../assets/elimcom.gif\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">\n            Borrar una comanda\n          </h5>\n          <p class=\"card-text text-justify\">\n            Para borrar una comanda nos desplazaremos en al modulo de estadisticas, dentro de este modulo\n            buscaremos el folio de la comanda que desemos eliminar, una vez encontrada la fila de la comanda\n            se dará clic en el boton borrar.\n          </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <br>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/manual/componentes/mestadisticas/mestadisticas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MestadisticasComponent; });
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

var MestadisticasComponent = /** @class */ (function () {
    function MestadisticasComponent() {
    }
    MestadisticasComponent.prototype.ngOnInit = function () {
    };
    MestadisticasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mestadisticas',
            template: __webpack_require__("./src/app/paginas/manual/componentes/mestadisticas/mestadisticas.component.html"),
            styles: [__webpack_require__("./src/app/paginas/manual/componentes/mestadisticas/mestadisticas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MestadisticasComponent);
    return MestadisticasComponent;
}());



/***/ }),

/***/ "./src/app/paginas/manual/componentes/mpersonal/mpersonal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/manual/componentes/mpersonal/mpersonal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n  <br>\n  <div class=\"row\">\n\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./../../../../../assets/nvoper.gif\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">\n            Dar de alta un nuevo material\n          </h5>\n          <p class=\"card-text text-justify\">\n            Para dar de alta un nuevo material, estando en el menu Almacen, en la barra principal\n            se encuentra un botón con el nombre \"nuevo\", una vez se haya dado clic se abrirá un\n            formulario, el cual habrá que llenar, todos los datos son necesarios, a excepción de\n            la cantidad de piezas por kilogramo, este campo es unicamente necesario si el material\n            tiene esa propiedad.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./../../../../../assets/modper.gif\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">\n            Modificar un Material\n          </h5>\n          <p class=\"card-text text-justify\">\n            Para dar de alta un nuevo material, estando en el menu Almacen, en la barra principal\n            se encuentra un botón con el nombre \"nuevo\", una vez se haya dado clic se abrirá un\n            formulario, el cual habrá que llenar, todos los datos son necesarios, a excepción de\n            la cantidad de piezas por kilogramo, este campo es unicamente necesario si el material\n            tiene esa propiedad.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./../../../../../assets/eliper.gif\" alt=\"matpros..\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">\n            Borrar un Material.\n          </h5>\n          <p class=\"card-text text-justify\">\n            Para dar de alta un nuevo material, estando en el menu Almacen, en la barra principal\n            se encuentra un botón con el nombre \"nuevo\", una vez se haya dado clic se abrirá un\n            formulario, el cual habrá que llenar, todos los datos son necesarios, a excepción de\n            la cantidad de piezas por kilogramo, este campo es unicamente necesario si el material\n            tiene esa propiedad.\n          </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <br>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/manual/componentes/mpersonal/mpersonal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MpersonalComponent; });
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

var MpersonalComponent = /** @class */ (function () {
    function MpersonalComponent() {
    }
    MpersonalComponent.prototype.ngOnInit = function () {
    };
    MpersonalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mpersonal',
            template: __webpack_require__("./src/app/paginas/manual/componentes/mpersonal/mpersonal.component.html"),
            styles: [__webpack_require__("./src/app/paginas/manual/componentes/mpersonal/mpersonal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MpersonalComponent);
    return MpersonalComponent;
}());



/***/ }),

/***/ "./src/app/paginas/manual/componentes/mproductos/mproductos.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/manual/componentes/mproductos/mproductos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n  <br>\n  <div class=\"row\">\n\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./../../../../../assets/nvoprod.gif\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">\n            Dar de alta un nuevo Producto\n          </h5>\n          <p class=\"card-text text-justify\">\n            Para dar de alta un nuevo producto, estando en el menu Productos, en la barra principal\n            se encuentra un botón con el nombre \"nuevo\", una vez se haya dado clic se abrirá un\n            formulario, el cual se divide en dos partes que habrá que llenar,en la primera es donde se\n            colocara el nombre, descripcion y precio del producto y en la segunda contara con otro\n            boton \"agregar\" en donde escogeras los materiales que lo componen, todos los datos son necesarios.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./../../../../../assets/nvoprod.gif\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">\n            Modificar un Producto\n          </h5>\n          <p class=\"card-text text-justify\">\n            Cuando el producto este dado de alta te mostrara dos opciones, \"editar\" y \"eliminar\". Para\n            editar el producto daras clic en la opcion correspondiente y se mostrara de nuevo\n            el formulario con el que lo diste de alta, pero esta vez con los datos y materiales\n            que contenga para que puedas modificar lo necesario.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./../../../../../assets/nvoprod.gif\" alt=\"matpros..\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">\n            Borrar un Producto.\n          </h5>\n          <p class=\"card-text text-justify\">\n            Para borrar el producto se dara clic al boton \"eliminar\" dentro de la respectiva\n            tarjeta del producto.\n          </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <br>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/manual/componentes/mproductos/mproductos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MproductosComponent; });
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

var MproductosComponent = /** @class */ (function () {
    function MproductosComponent() {
    }
    MproductosComponent.prototype.ngOnInit = function () {
    };
    MproductosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mproductos',
            template: __webpack_require__("./src/app/paginas/manual/componentes/mproductos/mproductos.component.html"),
            styles: [__webpack_require__("./src/app/paginas/manual/componentes/mproductos/mproductos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MproductosComponent);
    return MproductosComponent;
}());



/***/ }),

/***/ "./src/app/paginas/personal/body/body.component.css":
/***/ (function(module, exports) {

module.exports = ".bgNav\r\n{\r\n  background-color: #f1f1f1;\r\n  border-radius: 1em;\r\n  margin-top: 0.5em;\r\n}\r\n\r\n.mgTb\r\n{\r\n  margin-top: 0.5em;\r\n}\r\n\r\n.mgR\r\n{\r\n  margin-top: 0.3em;\r\n}\r\n\r\n.separador\r\n{\r\n  height: 0.2em;\r\n  background-color: #f1f1f1;\r\n  margin-top: 0.2em;\r\n}\r\n\r\n.th\r\n{\r\n  background-color: #000;\r\n  color: #fff;\r\n  border-top-left-radius: 0.5em;\r\n  border-top-right-radius: 0.5em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/paginas/personal/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n\n    <!--Barra de acciones-->\n    <div class=\"row bgNav\">\n      <div class=\"col-md-10\">\n        <h2>Personal</h2>\n      </div>\n      <div class=\"col-md-2\">\n          <button type=\"button\" class=\"btn btn-default btn-outline-secondary\" (click)=\"nuevo = !nuevo\">\n            <h5>Nuevo <img src=\"./../../../../assets/add.png\" class=\"img-fluid pull-xs-left\" alt=\"ADD\"></h5>\n          </button>\n      </div>\n    </div>\n\n    <!--sección que sera modificada por enlaces-->\n\n    <div class=\"col-lg-12\" *ngIf=\"nuevo\">\n      <app-add-per (detect)=\"recargar();\" ></app-add-per>\n    </div>\n    <div class=\"col-lg-12 mgTb\">\n\n<!--Tabla para ver los datos-->\n      <!--Thead-->\n      <div class=\"row th\">\n        <div class=\"col-md-1\"><h2>#</h2></div>\n        <div class=\"col-md-2 text-center\"><h2>Nombre</h2></div>\n        <div class=\"col-md-1\"><h2>Telefono</h2></div>\n        <div class=\"col-md-3 text-center\"><h2>Curp</h2></div>\n        <div class=\"col-md-2 text-center\"><h2>RFC</h2></div>\n        <div class=\"col-md-3 text-center\"><h2>Opciones</h2></div>\n      </div>\n      <!--Tbody-->\n      <div class=\"row mgR\" *ngFor=\"let k of personales | personal; let i = index\">\n        <div class=\"col-md-1\">{{i+1}}</div>\n        <div class=\"col-md-2\">{{personales[k].nombre}} {{personales[k].apellidop}} {{personales[k].apellidom}}</div>\n        <div class=\"col-md-1\">{{personales[k].tel}}</div>\n        <div class=\"col-md-3 text-right\">{{personales[k].curp}}</div>\n        <div class=\"col-md-2 text-center\">{{personales[k].rfc}}</div>\n        <div class=\"col-md-3\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <button type=\"button\" class=\"btn btn-default btn-outline-warning btn-block\" (click)=\"abrirModificar(k);\">Editar</button>\n            </div>\n            <div class=\"col-md-6\">\n              <button type=\"button\" class=\"btn btn-default btn-outline-danger btn-block\" (click)=\"borrar(k);\" >Eliminar</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12 separador\">\n\n        </div>\n      </div>\n      <!--div de edicion-->\n      <div class=\"col-lg-12\">\n        <app-modify-per *ngIf=\"memoriak\" [k]=\"llave\" (detect)=\"recargar();\"></app-modify-per>\n      </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/personal/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_personal_service__ = __webpack_require__("./src/app/servicios/personal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BodyComponent = /** @class */ (function () {
    function BodyComponent(_personalService) {
        this._personalService = _personalService;
        this.personales = [];
        this.memoriak = false;
        this.recargarLista();
    }
    BodyComponent.prototype.recargarLista = function () {
        var _this = this;
        delete this.personales;
        this._personalService.getPersonales()
            .subscribe(function (data) { _this.personales = data; });
        this.nuevo = false;
    };
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent.prototype.borrar = function (key$) {
        var _this = this;
        this._personalService.borrarPersonal(key$).subscribe(function (data) { if (data == null) {
            delete _this.personales[key$];
        } });
    };
    BodyComponent.prototype.abrirModificar = function (k) {
        if (!this.memoriak) {
            this.llave = k;
        }
        this.memoriak = !this.memoriak;
    };
    BodyComponent.prototype.recargar = function () {
        this.memoriak = false;
        this.recargarLista();
        this.recargarLista();
    };
    BodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-body',
            template: __webpack_require__("./src/app/paginas/personal/body/body.component.html"),
            styles: [__webpack_require__("./src/app/paginas/personal/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_personal_service__["a" /* PersonalService */]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/paginas/personal/componentes/add/add.component.css":
/***/ (function(module, exports) {

module.exports = ".margenes\r\n{\r\n  margin-top: 0.5em;\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.bgG\r\n{\r\n  background-color: #f1f1f1;\r\n  outline-style: groove;\r\n  outline-color: #c0c0c0;\r\n  outline-width: thin;\r\n}\r\n\r\n.mgT\r\n{\r\n  margin-top: 0.7em;\r\n}\r\n\r\n.mgTT\r\n{\r\n  margin-top: 70%;\r\n}\r\n\r\n.mgL\r\n{\r\n  margin-left: 1.5em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/paginas/personal/componentes/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card margenes\">\n  <div class=\"row\">\n    <div class=\"col-md-3 bgG text-center\">\n      <h3 class=\"mgTT\">Nuevo Personal</h3>\n    </div>\n  <!--inputs-->\n  <div class=\"col-md-8 row mgL\">\n    <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\n      <div class=\"form-group row\">\n\n          <!--input para nombre row:0-->\n          <div class=\"input-group col-md-12 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"\">Nombre Completo:</span>\n            </div>\n            <input [(ngModel)]=\"personal.nombre\"\n              name=\"nombre\"\n              type=\"tarea\"\n              class=\"form-control\"\n              placeholder=\"Nombre\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\" required>\n              <input [(ngModel)]=\"personal.apellidop\"\n                name=\"apellidop\"\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Apellido Paterno\"\n                aria-label=\"Small\"\n                aria-describedby=\"inputGroup-sizing-sm\" required>\n                <input [(ngModel)]=\"personal.apellidom\"\n                  name=\"apellidom\"\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Apellido Materno\"\n                  aria-label=\"Small\"\n                  aria-describedby=\"inputGroup-sizing-sm\">\n          </div>\n\n          <!--input para telefono y rfc row:1-->\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Telefono:</span>\n            </div>\n            <input [(ngModel)]=\"personal.tel\"\n              name=\"tel\"\n              type=\"text\"\n              placeholder=\"Telefono\"\n              class=\"form-control\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\">\n          </div>\n\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Sexo:</span>\n            </div>\n            <select class=\"custom-select\" id=\"inputGroupSelect0\" name=\"sexo\" [(ngModel)]=\"personal.sexo\" required>\n                <option value=\"Masculino\">Masculino</option>\n                <option value=\"Femenino\">Femenino</option>\n            </select>\n          </div>\n\n          <!--input para RFC row:2-->\n          <div class=\"input-group input-group-sm mb-3 col-md-12 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">RFC:</span>\n            </div>\n            <input [(ngModel)]=\"personal.rfc\"\n              name=\"rfc\"\n              type=\"text\"\n              step=\"any\"\n              placeholder=\"RFC\"\n              class=\"form-control\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\">\n          </div>\n\n          <!--input para RFC row:3-->\n          <div class=\"input-group input-group-sm mb-3 col-md-12 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Curp:</span>\n            </div>\n            <input [(ngModel)]=\"personal.curp\"\n              name=\"curp\"\n              type=\"text\"\n              placeholder=\"Curp\"\n              class=\"form-control\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\" required>\n          </div>\n\n\n          <!--input para colonia y direccion row:4-->\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Colonia:</span>\n            </div>\n            <select class=\"custom-select\" id=\"inputGroupSelect0\" name=\"colonia\" [(ngModel)]=\"personal.colonia\" required>\n                <option value=\"Celaya Centro\">Celaya Centro</option>\n                <option value=\"Rancho seco\">Rancho seco</option>\n                <option value=\"Su corazón\">Fovisste :'v (que triste we)</option>\n                <option value=\"Campo azul\">Campo azul</option>\n                <option value=\"El Campanario\">El Campanario</option>\n                <option value=\"Rincón de Tamayo\">Rincón de Tamayo</option>\n            </select>\n          </div>\n\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Dirección:</span>\n            </div>\n            <input [(ngModel)]=\"personal.direccion\"\n              name=\"direccion\"\n              type=\"text\"\n              placeholder=\"Ejem. Calle #000\"\n              class=\"form-control\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\" required>\n          </div>\n\n          <div class=\"input-group input-group-sm mb-3 col-md-12 mgT\">\n            <button [disabled]=\"!forma.valid\"\n                    type=\"submit\" class=\"btn btn-secondary btn-lg btn-block\">Añadir</button>\n          </div>\n      </div>\n    </form>\n  </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/personal/componentes/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_personal_service__ = __webpack_require__("./src/app/servicios/personal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddComponent = /** @class */ (function () {
    function AddComponent(_personalService) {
        this._personalService = _personalService;
        this.personal = {
            nombre: "",
            apellidop: "",
            apellidom: "",
            tel: "",
            sexo: "Masculino",
            rfc: "",
            colonia: "Celaya Centro",
            direccion: "",
            curp: ""
        };
        this.detect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.guardar = function () {
        this._personalService.nuevoPersonal(this.personal)
            .subscribe(function (data) { });
        this.detect.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AddComponent.prototype, "detect", void 0);
    AddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-per',
            template: __webpack_require__("./src/app/paginas/personal/componentes/add/add.component.html"),
            styles: [__webpack_require__("./src/app/paginas/personal/componentes/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_personal_service__["a" /* PersonalService */]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/paginas/personal/componentes/modify/modify.component.css":
/***/ (function(module, exports) {

module.exports = ".margenes\r\n{\r\n  margin-top: 0.5em;\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.bgG\r\n{\r\n  background-color: #f1f1f1;\r\n  outline-style: groove;\r\n  outline-color: #c0c0c0;\r\n  outline-width: thin;\r\n}\r\n\r\n.mgT\r\n{\r\n  margin-top: 0.7em;\r\n}\r\n\r\n.mgTT\r\n{\r\n  margin-top: 70%;\r\n}\r\n\r\n.mgL\r\n{\r\n  margin-left: 1.5em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/paginas/personal/componentes/modify/modify.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card margenes\">\n  <div class=\"row\">\n    <div class=\"col-md-3 bgG text-center\">\n      <h3 class=\"mgTT\">Nuevo Personal</h3>\n    </div>\n  <!--inputs-->\n  <div class=\"col-md-8 row mgL\">\n    <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\n      <div class=\"form-group row\">\n\n          <!--input para nombre row:0-->\n          <div class=\"input-group col-md-12 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"\">Nombre Completo:</span>\n            </div>\n            <input [(ngModel)]=\"personal.nombre\"\n              name=\"nombre\"\n              type=\"tarea\"\n              class=\"form-control\"\n              placeholder=\"Nombre\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\" required>\n              <input [(ngModel)]=\"personal.apellidop\"\n                name=\"apellidop\"\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Apellido Paterno\"\n                aria-label=\"Small\"\n                aria-describedby=\"inputGroup-sizing-sm\" required>\n                <input [(ngModel)]=\"personal.apellidom\"\n                  name=\"apellidom\"\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Apellido Materno\"\n                  aria-label=\"Small\"\n                  aria-describedby=\"inputGroup-sizing-sm\" required>\n          </div>\n\n          <!--input para telefono y rfc row:1-->\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Telefono:</span>\n            </div>\n            <input [(ngModel)]=\"personal.tel\"\n              name=\"tel\"\n              type=\"text\"\n              placeholder=\"Telefono\"\n              class=\"form-control\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\">\n          </div>\n\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Sexo:</span>\n            </div>\n            <select class=\"custom-select\" id=\"inputGroupSelect0\" name=\"sexo\" [(ngModel)]=\"personal.sexo\" required>\n                <option value=\"Masculino\">Masculino</option>\n                <option value=\"Femenino\">Femenino</option>\n            </select>\n          </div>\n\n          <!--input para RFC row:2-->\n          <div class=\"input-group input-group-sm mb-3 col-md-12 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">RFC:</span>\n            </div>\n            <input [(ngModel)]=\"personal.rfc\"\n              name=\"rfc\"\n              type=\"text\"\n              step=\"any\"\n              placeholder=\"RFC\"\n              class=\"form-control\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\" required>\n          </div>\n\n          <!--input para RFC row:3-->\n          <div class=\"input-group input-group-sm mb-3 col-md-12 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Curp:</span>\n            </div>\n            <input [(ngModel)]=\"personal.curp\"\n              name=\"curp\"\n              type=\"text\"\n              placeholder=\"Curp\"\n              class=\"form-control\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\" required>\n          </div>\n\n\n          <!--input para colonia y direccion row:4-->\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Colonia:</span>\n            </div>\n            <select class=\"custom-select\" id=\"inputGroupSelect0\" name=\"colonia\" [(ngModel)]=\"personal.colonia\" required>\n                <option value=\"Celaya Centro\">Celaya Centro</option>\n                <option value=\"Rancho seco\">Rancho seco</option>\n                <option value=\"Su corazón\">Fovisste :'v (que triste we)</option>\n                <option value=\"Campo azul\">Campo azul</option>\n                <option value=\"El Campanario\">El Campanario</option>\n                <option value=\"Rincón de Tamayo\">Rincón de Tamayo</option>\n            </select>\n          </div>\n\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Dirección:</span>\n            </div>\n            <input [(ngModel)]=\"personal.direccion\"\n              name=\"direccion\"\n              type=\"text\"\n              placeholder=\"Ejem. Calle #000\"\n              class=\"form-control\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\" required>\n          </div>\n\n          <div class=\"input-group input-group-sm mb-3 col-md-12 mgT\">\n            <button [disabled]=\"!forma.valid\"\n                    type=\"submit\" class=\"btn btn-secondary btn-lg btn-block\">Añadir</button>\n          </div>\n      </div>\n    </form>\n  </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/personal/componentes/modify/modify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_personal_service__ = __webpack_require__("./src/app/servicios/personal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModifyComponent = /** @class */ (function () {
    function ModifyComponent(_personalService) {
        this._personalService = _personalService;
        this.personal = {
            nombre: "",
            apellidop: "",
            apellidom: "",
            tel: "",
            sexo: "Masculino",
            rfc: "",
            colonia: "Celaya Centro",
            direccion: "",
            curp: ""
        };
        this.detect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ModifyComponent.prototype.cargar = function () {
        var _this = this;
        this._personalService.getPersonal(this.key).subscribe(function (data) {
            if (data != null) {
                _this.personal = data;
            }
            else {
                _this.personal.nombre = "Error";
                _this.personal.apellidop = "Error";
                _this.personal.apellidom = "Error";
                _this.personal.tel = "Error";
                _this.personal.rfc = "Error";
                _this.personal.direccion = "Error";
                _this.personal.curp = "Error";
            }
            console.log(data);
        });
    };
    ModifyComponent.prototype.ngOnInit = function () {
        this.cargar();
    };
    ModifyComponent.prototype.guardar = function () {
        this._personalService.modificarPersonal(this.personal, this.key)
            .subscribe(function (data) { });
        this.detect.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('k'),
        __metadata("design:type", String)
    ], ModifyComponent.prototype, "key", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ModifyComponent.prototype, "detect", void 0);
    ModifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modify-per',
            template: __webpack_require__("./src/app/paginas/personal/componentes/modify/modify.component.html"),
            styles: [__webpack_require__("./src/app/paginas/personal/componentes/modify/modify.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_personal_service__["a" /* PersonalService */]])
    ], ModifyComponent);
    return ModifyComponent;
}());



/***/ }),

/***/ "./src/app/paginas/productos/body/body.component.css":
/***/ (function(module, exports) {

module.exports = ".bgNav\r\n{\r\n  background-color: #f1f1f1;\r\n  border-radius: 1em;\r\n  margin-top: 0.5em;\r\n}\r\n\r\n.mgTb\r\n{\r\n  margin-top: 0.5em;\r\n}\r\n\r\n.mgR\r\n{\r\n  margin-top: 0.3em;\r\n}\r\n\r\n.separador\r\n{\r\n  height: 0.2em;\r\n  background-color: #f1f1f1;\r\n  margin-top: 0.2em;\r\n}\r\n\r\n.th\r\n{\r\n  background-color: #000;\r\n  color: #fff;\r\n  border-top-left-radius: 0.5em;\r\n  border-top-right-radius: 0.5em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/paginas/productos/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n\n  <div class=\"row bgNav\">\n    <div class=\"col-md-10\">\n      <h2>Productos</h2>\n    </div>\n    <div class=\"col-md-2\">\n        <button type=\"button\" class=\"btn btn-default btn-outline-secondary\" (click)=\"nuevo = !nuevo\">\n          <h5>Nuevo <img src=\"./../../../../assets/add.png\" class=\"img-fluid pull-xs-left\" alt=\"ADD\"></h5>\n        </button>\n    </div>\n  </div>\n\n  <div class=\"col-sm-12\">\n    <app-add-prod *ngIf=\"nuevo\" (detect)=\"recargar();\"></app-add-prod>\n  </div>\n\n  <div class=\"col-lg-12 row mgTb\">\n\n<!--Cards para ver los datos-->\n    <div class=\"card wC col-md-4\" *ngFor=\"let k of productos | productos; let i = indexz\">\n      <!--<img class=\"card-img-top\" src=\".../100px180/?text=Image cap\" alt=\"Card image cap\">-->\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{productos[k].nombre}}<br> {{productos[k].precio | currency}}</h5>\n        <p class=\"card-text\">Descripcion: <br>{{productos[k].descripcion}}</p>\n      </div>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\"><b>Materiales: </b>{{traductor(productos[k].materiales)}}</li>\n        <li class=\"list-group-item\"><b>Cantidades: </b>{{productos[k].cantidades}}</li>\n        <li class=\"list-group-item\"><b>Cantidad disponible: </b>{{productos[k].posible}} <i>piezas</i></li>\n      </ul>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <button type=\"button\" class=\"btn btn-default btn-outline-warning btn-block\" (click)=\"abrirModificar(k);\">Editar</button>\n          </div>\n          <div class=\"col-md-6\">\n            <button type=\"button\" class=\"btn btn-default btn-outline-danger btn-block\" (click)=\"borrar(k);\" >Eliminar</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <!--div de edicion-->\n    <div class=\"col-sm-12 mgTb\">\n      <app-modify-ped *ngIf=\"memoria\" [k]=\"llave\" (detect)=\"recargar($event);\"></app-modify-ped>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/productos/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_producto_service__ = __webpack_require__("./src/app/servicios/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_material_service__ = __webpack_require__("./src/app/servicios/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_contador_service__ = __webpack_require__("./src/app/servicios/contador.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BodyComponent = /** @class */ (function () {
    function BodyComponent(_productoService, _materialService, _cont) {
        this._productoService = _productoService;
        this._materialService = _materialService;
        this._cont = _cont;
        this.productos = [];
        this.materiales = [];
        this.nuevo = false;
        this.memoria = false;
        this.recargarLista();
        this.recargarLista();
    }
    BodyComponent.prototype.recargarLista = function () {
        var _this = this;
        delete this.productos;
        this._productoService.getProductos()
            .subscribe(function (data) { _this.productos = data; });
        this._materialService.getMateriales()
            .subscribe(function (data) { _this.materiales = data; });
        this.nuevo = false;
    };
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent.prototype.recargar = function (x) {
        this.memoria = false;
        if (x != null) {
            this.productos[this.llave] = x;
        }
    };
    BodyComponent.prototype.borrar = function (key$) {
        var _this = this;
        this._productoService.borrarProducto(key$).subscribe(function (data) { if (data == null) {
            delete _this.productos[key$];
        } });
    };
    BodyComponent.prototype.abrirModificar = function (k) {
        if (!this.memoria) {
            this.llave = k;
        }
        this.memoria = !this.memoria;
    };
    BodyComponent.prototype.traductor = function (x) {
        var array = x.split(",");
        var cadena = "";
        if (JSON.stringify(this.materiales) != "[]") {
            for (var i = 0; i < array.length; i++) {
                var m = this.materiales[array[i]];
                if (cadena == "")
                    cadena = m.nombre;
                else
                    cadena += "," + m.nombre;
            }
        }
        return cadena;
    };
    BodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-body',
            template: __webpack_require__("./src/app/paginas/productos/body/body.component.html"),
            styles: [__webpack_require__("./src/app/paginas/productos/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_2__servicios_material_service__["a" /* MaterialService */], __WEBPACK_IMPORTED_MODULE_3__servicios_contador_service__["a" /* ContadorService */]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/paginas/productos/componentes/add/add.component.css":
/***/ (function(module, exports) {

module.exports = ".margenes\r\n{\r\n  margin-top: 0.5em;\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.bgG\r\n{\r\n  background-color: #f1f1f1;\r\n  outline-style: groove;\r\n  outline-color: #c0c0c0;\r\n  outline-width: thin;\r\n}\r\n\r\n.mgT\r\n{\r\n  margin-top: 0.7em;\r\n}\r\n\r\n.mgTT\r\n{\r\n  margin-top: 35%;\r\n}\r\n\r\n.mgL\r\n{\r\n  margin-left: 1.5em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/paginas/productos/componentes/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card margenes\">\n  <div class=\"row\">\n    <div class=\"col-md-3 bgG\">\n      <h3 class=\"mgTT\">Nuevo Platillo</h3>\n    </div>\n  <!--inputs-->\n  <div class=\"col-md-8 row mgL\">\n    <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\n      <div class=\"form-group row\">\n\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Nombre:</span>\n            </div>\n            <input [(ngModel)]=\"producto.nombre\"\n              name=\"nombre\"\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Nombre\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\" required>\n          </div>\n\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Precio:</span>\n            </div>\n            <input [(ngModel)]=\"producto.precio\"\n              name=\"precio\"\n              type=\"number\"\n              step=\"any\"\n              class=\"form-control\"\n              placeholder=\"Ejem. $12.50\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\" required>\n          </div>\n\n          <div class=\"input-group input-group-sm mb-3 col-md-12 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Descripcion:</span>\n            </div>\n            <input [(ngModel)]=\"producto.descripcion\"\n              name=\"descripcion\"\n              type=\"text\"\n              placeholder=\"Ejem. capacidad n, color n, proviene de n\"\n              class=\"form-control\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\">\n          </div>\n\n          <!--contenedor de materiales-->\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-12\">\n              <h4>Coloca los materiales que se requieren:</h4>\n            </div>\n          </div>\n\n          <div class=\"col-md-12\">\n            <app-nvo-prod (detectm)=\"cargarStringm( $event );\" (detectc)=\"cargarStringc( $event );\"></app-nvo-prod>\n          </div>\n\n          <div class=\"col-md-12\">\n            <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"cargadoc && cargadom\">\n                <h5>Los materiales han sido cargados correctamente</h5>\n            </div>\n          </div>\n\n\n          <div class=\"input-group input-group-sm mb-3 col-md-12 mgT\">\n            <button [disabled]=\"!forma.valid\"\n                    type=\"submit\" class=\"btn btn-secondary btn-lg btn-block\">Añadir</button>\n          </div>\n      </div>\n    </form>\n  </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/productos/componentes/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_producto_service__ = __webpack_require__("./src/app/servicios/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_material_service__ = __webpack_require__("./src/app/servicios/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_contador_service__ = __webpack_require__("./src/app/servicios/contador.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddComponent = /** @class */ (function () {
    function AddComponent(_productoService, _materialService, _contador) {
        var _this = this;
        this._productoService = _productoService;
        this._materialService = _materialService;
        this._contador = _contador;
        this.cargadom = false;
        this.cargadoc = false;
        this.materiales = [];
        this.producto = {
            nombre: "",
            descripcion: "",
            materiales: "",
            cantidades: "",
            precio: "",
            posible: ""
        };
        this.detect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this._materialService.getMateriales()
            .subscribe(function (data) { _this.materiales = data; });
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.cargarStringm = function (cadena) {
        this.producto.materiales = cadena;
        console.log(cadena);
        this.revisar();
    };
    AddComponent.prototype.cargarStringc = function (cadena) {
        this.producto.cantidades = cadena;
        this.revisar();
    };
    AddComponent.prototype.revisar = function () {
        if (this.producto.materiales != "")
            this.cargadom = true;
        if (this.producto.cantidades != "")
            this.cargadoc = true;
    };
    AddComponent.prototype.guardar = function () {
        var x = this.crearPosible();
        if (x) {
            this._productoService.nuevoProducto(this.producto).subscribe(function (data) { });
            this.detect.emit(true);
        }
        else {
            alert("ERROR type:scp0"); //sIN cANTIDAD pOSIBLE.
        }
    };
    AddComponent.prototype.crearPosible = function () {
        var x = this.producto.materiales;
        var y = this.producto.cantidades;
        this.producto.posible = String(this._contador.crearPosible(x, y));
        if (this.producto.posible != "")
            return true;
        else
            return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AddComponent.prototype, "detect", void 0);
    AddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-prod',
            template: __webpack_require__("./src/app/paginas/productos/componentes/add/add.component.html"),
            styles: [__webpack_require__("./src/app/paginas/productos/componentes/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_2__servicios_material_service__["a" /* MaterialService */], __WEBPACK_IMPORTED_MODULE_3__servicios_contador_service__["a" /* ContadorService */]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/paginas/productos/componentes/modify/modify.component.css":
/***/ (function(module, exports) {

module.exports = ".margenes\r\n{\r\n  margin-top: 0.5em;\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.bgG\r\n{\r\n  background-color: #f1f1f1;\r\n  outline-style: groove;\r\n  outline-color: #c0c0c0;\r\n  outline-width: thin;\r\n}\r\n\r\n.mgT\r\n{\r\n  margin-top: 0.7em;\r\n}\r\n\r\n.mgTT\r\n{\r\n  margin-top: 35%;\r\n}\r\n\r\n.mgL\r\n{\r\n  margin-left: 1.5em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/paginas/productos/componentes/modify/modify.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card margenes\">\n  <div class=\"row\">\n    <div class=\"col-md-3 bgG\">\n      <h3 class=\"mgTT\">Nuevo Platillo</h3>\n    </div>\n  <!--inputs-->\n  <div class=\"col-md-8 row mgL\">\n    <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\n      <div class=\"form-group row\">\n\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Nombre:</span>\n            </div>\n            <input [(ngModel)]=\"producto.nombre\"\n              name=\"nombre\"\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Nombre\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\" required>\n          </div>\n\n          <div class=\"input-group input-group-sm mb-3 col-md-6 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Precio:</span>\n            </div>\n            <input [(ngModel)]=\"producto.precio\"\n              name=\"precio\"\n              type=\"number\"\n              step=\"any\"\n              class=\"form-control\"\n              placeholder=\"Ejem. $12.50\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\" required>\n          </div>\n\n          <div class=\"input-group input-group-sm mb-3 col-md-12 mgT\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Descripcion:</span>\n            </div>\n            <input [(ngModel)]=\"producto.descripcion\"\n              name=\"descripcion\"\n              type=\"text\"\n              placeholder=\"Ejem. capacidad n, color n, proviene de n\"\n              class=\"form-control\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\">\n          </div>\n\n          <!--contenedor de materiales-->\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-12\">\n              <h4>Coloca los materiales que se requieren:</h4>\n            </div>\n          </div>\n\n          <div class=\"col-md-12\">\n            <app-nvo-prod (detectm)=\"cargarStringm( $event );\" (detectc)=\"cargarStringc( $event );\" [mm]=\"mm\" [cc]=\"cc\" [m]=\"m\" [c]=\"c\"></app-nvo-prod>\n          </div>\n\n          <div class=\"col-md-12\">\n            <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"cargadoc && cargadom\">\n                <h5>Los materiales han sido cargados correctamente</h5>\n            </div>\n          </div>\n\n\n          <div class=\"input-group input-group-sm mb-3 col-md-12 mgT\">\n            <button [disabled]=\"!forma.valid\"\n                    type=\"submit\" class=\"btn btn-secondary btn-lg btn-block\">Modificar</button>\n          </div>\n      </div>\n    </form>\n  </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/productos/componentes/modify/modify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_producto_service__ = __webpack_require__("./src/app/servicios/producto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModifyComponent = /** @class */ (function () {
    function ModifyComponent(_productoService) {
        this._productoService = _productoService;
        this.mm = [];
        this.cc = [];
        this.m = "no hay";
        this.c = "0.00";
        this.cargadom = false;
        this.cargadoc = false;
        this.producto = {
            nombre: "",
            descripcion: "",
            materiales: "",
            cantidades: "",
            precio: "",
            posible: ""
        };
        this.detect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ModifyComponent.prototype.ngOnInit = function () {
        this.cargar();
    };
    ModifyComponent.prototype.cargar = function () {
        var _this = this;
        this._productoService.getProducto(this.key).subscribe(function (data) {
            if (data != null) {
                _this.producto = data;
                _this.m = _this.producto.materiales;
                _this.c = _this.producto.cantidades;
                _this.convertirMC(_this.producto.materiales, _this.producto.cantidades);
            }
            else {
                _this.producto.nombre = "Error";
                _this.producto.descripcion = "Error";
                _this.producto.materiales = "Error,Error";
                _this.producto.cantidades = "Error,Error";
                _this.producto.precio = "0";
            }
        });
    };
    ModifyComponent.prototype.guardar = function () {
        var _this = this;
        this._productoService.modificarProducto(this.producto, this.key)
            .subscribe(function (data) { if (data != null)
            _this.detect.emit(data); });
    };
    ModifyComponent.prototype.convertirMC = function (m, c) {
        this.mm = m.split(",");
        this.cc = c.split(",");
    };
    ModifyComponent.prototype.cargarStringm = function (cadena) {
        this.producto.materiales = cadena;
        this.revisar();
    };
    ModifyComponent.prototype.cargarStringc = function (cadena) {
        this.producto.cantidades = cadena;
        this.revisar();
    };
    ModifyComponent.prototype.revisar = function () {
        if (this.producto.materiales != "")
            this.cargadom = true;
        if (this.producto.cantidades != "")
            this.cargadoc = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('k'),
        __metadata("design:type", String)
    ], ModifyComponent.prototype, "key", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ModifyComponent.prototype, "detect", void 0);
    ModifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modify-ped',
            template: __webpack_require__("./src/app/paginas/productos/componentes/modify/modify.component.html"),
            styles: [__webpack_require__("./src/app/paginas/productos/componentes/modify/modify.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_producto_service__["a" /* ProductoService */]])
    ], ModifyComponent);
    return ModifyComponent;
}());



/***/ }),

/***/ "./src/app/paginas/productos/componentes/nvo/nvo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/productos/componentes/nvo/nvo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n<!--Inicio de instruccciones-->\n    <form (ngSubmit)=\"recargarMateriales(0)\" #forma=\"ngForm\">\n        <div class=\"col-lg-12 row text-left\">\n          <div class=\"col-md-10\">\n            <h5>Elige los materiales que ocupas en la elaboracion del producto.</h5>\n          </div>\n          <div class=\"col-md-2\">\n            <button type=\"submit\" class=\"btn btn-outline-success\" [disabled]=\"!forma.valid\">Agregar</button>\n          </div>\n        </div>\n<!--Inicio de instrucciones-->\n<br>\n<!--Inicio de Inputs-->\n\n      <div class=\"form-group\">\n        <div class=\"col-ld-12 row\">\n          <div class=\"col-md-12\">\n\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <label class=\"input-group-text\" for=\"inputGroupSelect01\">Materiales</label>\n                  </div>\n                  <select class=\"custom-select\" id=\"inputGroupSelect01\" name=\"nombre\" [(ngModel)]=\"material.nombre\" required>\n                    <option value=\"x\">Elige un Material...</option>\n                    <option *ngFor=\"let k of materiales | material; let i = index\" value=\"{{k}}\">{{materiales[k].nombre}} || {{materiales[k].descripcion}}</option>\n                  </select>\n                </div>\n          </div>\n\n          <div class=\"input-group input-group-sm mb-3 col-md-6\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Gasto:</span>\n            </div>\n            <input [(ngModel)]=\"material.cantidad\"\n              name=\"cantidad\"\n              type=\"number\"\n              placeholder=\"Ejem. 2\"\n              step=\"any\"\n              class=\"form-control\"\n              aria-label=\"Small\"\n              aria-describedby=\"inputGroup-sizing-sm\" required>\n          </div>\n\n          <div class=\"input-group mb-3 col-md-6\">\n            <div class=\"input-group-prepend\">\n              <label class=\"input-group-text\" for=\"inputGroupSelect01\">Unidad:</label>\n            </div>\n            <select class=\"custom-select\" id=\"inputGroupSelect01\" name=\"unidad\" [(ngModel)]=\"material.unidad\" required>\n              <option value=\"Kg\">Kilogramos</option>\n              <option value=\"Gr\">Gramos</option>\n              <option value=\"Pz\">Piezas</option>\n              <option value=\"L\">Litros</option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </form>\n<!--Fin de Inputs-->\n<!--Inicio de mostrar componentes-->\n    <div class=\"col-lg-12 row\">\n      <div class=\"col-md-12\">\n        <h4>Materiales agregados:</h4>\n      </div>\n      <div class=\"col-md-6\" *ngFor=\"let k of mm; let i = index\">\n        <div class=\"col-md-12\">\n          <div class=\"alert alert-primary \">\n            {{materiales[k].nombre}}: {{cc[i]}}\n            <button type=\"button\" class=\"btn btn-sm btn-danger btn-block\" (click)=\"borrar(i);\">Borrar</button>\n          </div>\n        </div>\n\n      </div>\n      <br>\n      <div class=\"col-md-12\">\n        <div class=\"alert alert-warning\" role=\"alert\">\n          <h5>Una vez hayas agregado los materiales, <br> espera a que se te indique para poder añadir el producto.</h5>\n        </div>\n      </div>\n    </div>\n<!--Fin de mostrar componentes-->\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/productos/componentes/nvo/nvo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NvoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_material_service__ = __webpack_require__("./src/app/servicios/material.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NvoComponent = /** @class */ (function () {
    function NvoComponent(_materialService) {
        this._materialService = _materialService;
        this.materiales = [];
        this.mm = [];
        this.cc = [];
        this.m = "no hay";
        this.c = "0.00";
        this.material = {
            nombre: "x",
            cantidad: "",
            unidad: "Gr"
        };
        this.detectm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.detectc = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    NvoComponent.prototype.ngOnInit = function () {
        this.cargar();
    };
    NvoComponent.prototype.cargar = function () {
        var _this = this;
        this._materialService.getMateriales()
            .subscribe(function (data) { _this.materiales = data; });
    };
    NvoComponent.prototype.recargarMateriales = function (borrar) {
        if (borrar == 0) {
            if (this.m == "no hay")
                this.m = this.material.nombre;
            else
                this.m += "," + this.material.nombre;
            if (this.c == "0.00")
                this.c = this.material.cantidad + " " + this.material.unidad;
            else
                this.c += "," + this.material.cantidad + " " + this.material.unidad;
            this.mm = this.m.split(",");
            this.cc = this.c.split(",");
        }
        if (this.m != "no hay" && this.c != "0.00") {
            this.detectm.emit(this.m);
            this.detectc.emit(this.c);
        }
        this.material.nombre = "x";
        this.material.cantidad = "";
        this.material.unidad = "Gr";
    };
    NvoComponent.prototype.borrar = function (i) {
        var mmm;
        var ccc;
        var posicion;
        delete this.mm[i];
        delete this.cc[i];
        if (this.mm.length != 1) {
            for (var i_1 = 0; i_1 < this.mm.length; i_1++) {
                if (this.mm[i_1] == undefined) {
                    if (i_1 != this.mm.length - 1) {
                        posicion = i_1;
                        for (posicion; posicion < this.mm.length; posicion++) {
                            if (this.mm[posicion + 1] != undefined) {
                                mmm = this.mm[posicion + 1];
                                ccc = this.cc[posicion + 1];
                                this.mm[posicion] = mmm;
                                this.cc[posicion] = ccc;
                            }
                            else {
                                this.mm.pop();
                                this.cc.pop();
                                this.m = String(this.mm);
                                this.c = String(this.cc);
                                break;
                            }
                        }
                    }
                    else {
                        this.mm.pop();
                        this.cc.pop();
                        this.m = String(this.mm);
                        this.c = String(this.cc);
                    }
                }
            }
        }
        else {
            this.mm = new Array();
            this.cc = new Array();
            this.m = "no hay";
            this.c = "0.00";
        }
        this.recargarMateriales(1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('mm'),
        __metadata("design:type", Array)
    ], NvoComponent.prototype, "mm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('cc'),
        __metadata("design:type", Array)
    ], NvoComponent.prototype, "cc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('m'),
        __metadata("design:type", String)
    ], NvoComponent.prototype, "m", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('c'),
        __metadata("design:type", String)
    ], NvoComponent.prototype, "c", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], NvoComponent.prototype, "detectm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], NvoComponent.prototype, "detectc", void 0);
    NvoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nvo-prod',
            template: __webpack_require__("./src/app/paginas/productos/componentes/nvo/nvo.component.html"),
            styles: [__webpack_require__("./src/app/paginas/productos/componentes/nvo/nvo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_material_service__["a" /* MaterialService */]])
    ], NvoComponent);
    return NvoComponent;
}());



/***/ }),

/***/ "./src/app/pipes/comanda.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComandaPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComandaPipe = /** @class */ (function () {
    function ComandaPipe() {
    }
    ComandaPipe.prototype.transform = function (value) {
        var comandas = [];
        for (var comanda in value) {
            comandas.push(comanda);
        }
        return comandas;
    };
    ComandaPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'comanda',
            pure: false
        })
    ], ComandaPipe);
    return ComandaPipe;
}());



/***/ }),

/***/ "./src/app/pipes/material.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MaterialPipe = /** @class */ (function () {
    function MaterialPipe() {
    }
    MaterialPipe.prototype.transform = function (value) {
        var materiales = [];
        for (var material in value) {
            materiales.push(material);
        }
        return materiales;
    };
    MaterialPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'material',
            pure: false
        })
    ], MaterialPipe);
    return MaterialPipe;
}());



/***/ }),

/***/ "./src/app/pipes/pedido.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PedidoPipe = /** @class */ (function () {
    function PedidoPipe() {
    }
    PedidoPipe.prototype.transform = function (value) {
        var pedido = "";
        for (var ped in value) {
            pedido += "||| " + ped + " |||";
        }
        return pedido;
    };
    PedidoPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'pedido',
            pure: false
        })
    ], PedidoPipe);
    return PedidoPipe;
}());



/***/ }),

/***/ "./src/app/pipes/personal.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PersonalPipe = /** @class */ (function () {
    function PersonalPipe() {
    }
    PersonalPipe.prototype.transform = function (value) {
        var personales = [];
        for (var personal in value) {
            personales.push(personal);
        }
        return personales;
    };
    PersonalPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'personal',
            pure: false
        })
    ], PersonalPipe);
    return PersonalPipe;
}());



/***/ }),

/***/ "./src/app/pipes/productos.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductosPipe = /** @class */ (function () {
    function ProductosPipe() {
    }
    ProductosPipe.prototype.transform = function (value) {
        var productos = [];
        for (var producto in value) {
            productos.push(producto);
        }
        return productos;
    };
    ProductosPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'productos',
            pure: false
        })
    ], ProductosPipe);
    return ProductosPipe;
}());



/***/ }),

/***/ "./src/app/servicios/auth-bloq.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthBloqService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/servicios/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthBloqService = /** @class */ (function () {
    function AuthBloqService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthBloqService.prototype.canActivate = function (next, state) {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            alert("No estas verificado.");
            this.router.navigate(['/Inicio']);
            return false;
        }
    };
    AuthBloqService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthBloqService);
    return AuthBloqService;
}());



/***/ }),

/***/ "./src/app/servicios/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js__ = __webpack_require__("./node_modules/auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_auth0_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



window.global = window;
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_2_auth0_js__["WebAuth"]({
            clientID: '4MfPCrZWFM3qAD9i40d4LE6ymUsE1OHx',
            domain: 'sgyc.auth0.com',
            responseType: 'token id_token',
            audience: 'https://sgyc.auth0.com/userinfo',
            //redirectUri: 'http://localhost:4200/callback',
            redirectUri: 'https://sgycv1.000webhostapp.com/#/inicio/callback',
            scope: 'openid profile'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the Access Token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // Access Token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access Token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/servicios/comanda.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComandaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComandaService = /** @class */ (function () {
    function ComandaService(http) {
        this.http = http;
        this.comandasURL = "https://sgyc-81627.firebaseio.com/comandas.json";
        this.comandaURL = "https://sgyc-81627.firebaseio.com/comandas";
    }
    ComandaService.prototype.nueva = function (comanda) {
        var body = JSON.stringify(comanda);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post(this.comandasURL, body, { headers: headers }).map(function (res) { return res.json(); });
    };
    ComandaService.prototype.modificarComanda = function (comanda, key$) {
        var body = JSON.stringify(comanda);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        var url = this.comandaURL + "/" + key$ + ".json";
        return this.http.put(url, body, { headers: headers }).map(function (res) { return res.json(); });
    };
    ComandaService.prototype.getComandas = function () {
        return this.http.get(this.comandasURL).map(function (res) { return res.json(); });
    };
    ComandaService.prototype.getComanda = function (key$) {
        var url = this.comandaURL + "/" + key$ + ".json";
        console.log(url);
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ComandaService.prototype.borrarComanda = function (key$) {
        var url = this.comandaURL + "/" + key$ + ".json";
        return this.http.delete(url).map(function (res) { return res.json(); });
    };
    ComandaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ComandaService);
    return ComandaService;
}());



/***/ }),

/***/ "./src/app/servicios/contador.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContadorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producto_service__ = __webpack_require__("./src/app/servicios/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_service__ = __webpack_require__("./src/app/servicios/material.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//importaciones del servicio.


var ContadorService = /** @class */ (function () {
    //creo una instancia de los servicios que me permitiran obtener los datos necesarios
    function ContadorService(_productoService, _materialService) {
        this._productoService = _productoService;
        this._materialService = _materialService;
        //variables generales.
        this.productos = []; //Arreglo que recibe todos los productos existentes en el momento de la ejecucion.
        this.materiales = []; //Arreglo que recibe todos los materiales que existen en el momento de la ejecucion.
        this.rpm();
    }
    ContadorService.prototype.rpm = function () {
        var _this = this;
        this._productoService.getProductos().subscribe(function (data) { _this.productos = data; }); //obtengo los productos.
        this._materialService.getMateriales().subscribe(function (data) { _this.materiales = data; }); //obtengo los materiales.
    };
    ContadorService.prototype.rpM = function () {
        var _this = this;
        this._productoService.getProductos().subscribe(function (data) { _this.productos = data; }); //obtengo los productos.
        this._materialService.getMateriales().subscribe(function (data) { _this.materiales = data; }); //obtengo los materiales.
    };
    //función que genera una cantidad posible a partir de las cantidadesde varios materiales.(func.Productos).
    ContadorService.prototype.crearPosible = function (x, y) {
        this.rpm();
        //arreglos de los datos del producto
        var array = x.split(","); //arreglo de las llaves de los materiales
        var arrayC = y.split(","); //arreglos de las cantidades
        //instancia de variables del material en especifico de la bd.
        var cantidadbd = "";
        var unidadbd = "";
        var relacion = "";
        var cantPos = [];
        for (var i = 0; i < array.length; i++) {
            cantPos[i] = this.compararUnidades(array[i], arrayC[i], 0);
        }
        cantPos = cantPos.sort(); //se ordenan las cantidades para obtener la menor.
        return cantPos[0]; //se retorna la cantidad menor.
    };
    //función que permite actualizar la cantidad posible de todos los productos.(func.XXXX).
    ContadorService.prototype.actualizarPosibles = function () {
        for (var k in this.productos) {
            this.productos[k].posible = this.crearPosible(this.productos[k].materiales, this.productos[k].cantidades); //genero el nuevo posible.
            this._productoService.modificarProducto(this.productos[k], k).subscribe(function (data) { }); //actualizo el producto en bd.
        }
    };
    //función que permite restar una cantidad a la que se posee actualmente de un material en especifico
    ContadorService.prototype.restarMateriales = function (keysMat, cantsRest) {
        this.rpm();
        var arrayK = keysMat.split(","); //arreglo de llaves.
        var arrayC = cantsRest.split(","); //arreglo de cantidades.
        for (var i = 0; i < arrayK.length; i++) {
            var cant = this.compararUnidades(arrayK[i], arrayC[i], 1);
            this.materiales[arrayK[i]].cantidad = cant;
            this._materialService.modificarMaterial(this.materiales[arrayK[i]], arrayK[i]).subscribe(function (data) { });
        }
        this.actualizarPosibles();
    };
    ContadorService.prototype.compararUnidades = function (x, cant, tp) {
        if (this.materiales[x] != null) {
            //se obtienen los datos del material de la bd.
            var cantidadbd = this.materiales[x].cantidad;
            var unidadbd = this.materiales[x].unidad;
            var relacion = this.materiales[x].relacion;
            var cantidad = cant.split(" "); //arreglo con posiciones 0 y 1 donde: [00,xx];
            var c = cantidad[0]; //se saca la cantidad del arreglo.
            var u = cantidad[1]; //se saca la unidad del arreglo.
            var result = 0; //variable que almacenara la cantidad posible del material actual.
            if (relacion != "") {
                result = Number(cantidadbd) * Number(relacion); //se realiza la conversion por unidad.
                if (u == "Pz") {
                    if (tp == 0)
                        result = Number(result) / Number(c); //se asigna.
                    else
                        result = (Number(result) - Number(c)) / Number(relacion); //se asigna.
                }
                else {
                    alert("ERROR type: upz0"); //si la unidad no coincide se lanza una alerta con el error upz0.
                }
            }
            else {
                if (u == unidadbd) {
                    if (tp == 0)
                        result = Number(cantidadbd) / Number(c); //se asigna.
                    else
                        result = (Number(cantidadbd) - Number(c)); //se asigna.
                }
                else {
                    if (unidadbd == "Kg") {
                        if (u == "Gr") {
                            cantidadbd = String(Number(cantidadbd) * 1000); //se realiza la conversion de gr a kg.
                            if (tp == 0)
                                result = Number(cantidadbd) / Number(c); //se asigna.
                            else
                                result = (Number(cantidadbd) - Number(c)) / 1000; //se asigna.
                        }
                        else {
                            alert("ERROR type: ukg0"); //si la unidad no es gr, se lanza una alerta con el error ukg0.
                        }
                    }
                    else {
                        alert("ERROR type: une0"); //si la unidad no es kg se lanza la alerta une0 (uNIDAD nO eXISTE).
                    }
                }
            }
            return result; //retorno el resultdo de la operacion correspondiente, en caso de no entrar retorna 0.
        }
        else {
            alert("ERROR type: mne0"); //alerta que lanza el error mne0 (mATERIAL nO eXISTE).
        }
    };
    //función que permite obtener los materiales y convertir las cantidades.
    ContadorService.prototype.restarProductos = function (x, y) {
        this.rpm();
        var arrayKP = x.split(","); // se genera un arreglo con llaves de productos.
        var arrayCC = y.split(","); //se genera un arreglo con las cantidades compradas.
        for (var i = 0; i < arrayKP.length; i++) {
            var keyProd = arrayKP[i]; //se obtiene la llave de un producto.
            if (Number(arrayCC[i]) != 0) {
                var arrayM = this.productos[keyProd].materiales.split(","); //se obtienen las llaves de los materiales.
                var arrayCM = this.productos[keyProd].cantidades.split(","); //se obtienen las cantidades usadas por el producto.
                for (var j = 0; j < arrayM.length; j++) {
                    var cantidad = arrayCM[j].split(" "); //separo cantidad en [00,xx].
                    cantidad[0] = Number(cantidad[0]) * Number(arrayCC[i]); //multiplico la cantidad usada por la cantidad comprada.
                    arrayCM[j] = cantidad[0] + " " + cantidad[1]; //regreso al formato [00 xx].
                }
                console.log(this.productos[keyProd].materiales);
                console.log(String(arrayCM));
                this.restarMateriales(this.productos[keyProd].materiales, String(arrayCM));
            }
        }
    };
    ContadorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_3__material_service__["a" /* MaterialService */]])
    ], ContadorService);
    return ContadorService;
}());



/***/ }),

/***/ "./src/app/servicios/elaboracion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElaboracionService; });
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

var ElaboracionService = /** @class */ (function () {
    function ElaboracionService() {
    }
    ElaboracionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ElaboracionService);
    return ElaboracionService;
}());



/***/ }),

/***/ "./src/app/servicios/material.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialService = /** @class */ (function () {
    function MaterialService(http) {
        this.http = http;
        this.materialesURL = "https://sgyc-81627.firebaseio.com/materiales.json";
        this.materialURL = "https://sgyc-81627.firebaseio.com/materiales";
    }
    MaterialService.prototype.nuevoMaterial = function (material) {
        var body = JSON.stringify(material);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post(this.materialesURL, body, { headers: headers }).map(function (res) { console.log(res.json()); });
    };
    MaterialService.prototype.modificarMaterial = function (material, key$) {
        var body = JSON.stringify(material);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        var url = this.materialURL + "/" + key$ + ".json";
        return this.http.put(url, body, { headers: headers }).map(function (res) { console.log(res.json()); });
    };
    MaterialService.prototype.getMateriales = function () {
        return this.http.get(this.materialesURL).map(function (res) { return res.json(); });
    };
    MaterialService.prototype.getMaterial = function (key$) {
        var url = this.materialURL + "/" + key$ + ".json";
        console.log(url);
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    MaterialService.prototype.borrarMaterial = function (key$) {
        var url = this.materialURL + "/" + key$ + ".json";
        return this.http.delete(url).map(function (res) { return res.json(); });
    };
    MaterialService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MaterialService);
    return MaterialService;
}());



/***/ }),

/***/ "./src/app/servicios/pedido.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PedidoService = /** @class */ (function () {
    function PedidoService(http) {
        this.http = http;
        this.pedidoURL = "https://sgyc-81627.firebaseio.com/comandas/";
    }
    PedidoService.prototype.nuevo = function (pedido, key) {
        var body = JSON.stringify(pedido);
        var url = this.pedidoURL + "/" + key + "/pedido.json";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).map(function (res) { return res.json(); });
    };
    PedidoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PedidoService);
    return PedidoService;
}());



/***/ }),

/***/ "./src/app/servicios/personal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonalService = /** @class */ (function () {
    function PersonalService(http) {
        this.http = http;
        this.personalesURL = "https://sgyc-81627.firebaseio.com/personal.json";
        this.personalURL = "https://sgyc-81627.firebaseio.com/personal";
    }
    PersonalService.prototype.nuevoPersonal = function (personal) {
        var body = JSON.stringify(personal);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post(this.personalesURL, body, { headers: headers }).map(function (res) { console.log(res.json()); });
    };
    PersonalService.prototype.modificarPersonal = function (personal, key$) {
        var body = JSON.stringify(personal);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        var url = this.personalURL + "/" + key$ + ".json";
        return this.http.put(url, body, { headers: headers }).map(function (res) { console.log(res.json()); });
    };
    PersonalService.prototype.getPersonales = function () {
        return this.http.get(this.personalesURL).map(function (res) { return res.json(); });
    };
    PersonalService.prototype.getPersonal = function (key$) {
        var url = this.personalURL + "/" + key$ + ".json";
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    PersonalService.prototype.borrarPersonal = function (key$) {
        var url = this.personalURL + "/" + key$ + ".json";
        return this.http.delete(url).map(function (res) { return res.json(); });
    };
    PersonalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PersonalService);
    return PersonalService;
}());



/***/ }),

/***/ "./src/app/servicios/producto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductoService = /** @class */ (function () {
    function ProductoService(http) {
        this.http = http;
        this.productosURL = "https://sgyc-81627.firebaseio.com/productos.json";
        this.productoURL = "https://sgyc-81627.firebaseio.com/productos";
    }
    ProductoService.prototype.nuevoProducto = function (producto) {
        var body = JSON.stringify(producto);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post(this.productosURL, body, { headers: headers }).map(function (res) { console.log(res.json()); });
    };
    ProductoService.prototype.getProductos = function () {
        return this.http.get(this.productosURL).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getProducto = function (key$) {
        var url = this.productoURL + "/" + key$ + ".json";
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.borrarProducto = function (key$) {
        var url = this.productoURL + "/" + key$ + ".json";
        return this.http.delete(url).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.modificarProducto = function (producto, key$) {
        var body = JSON.stringify(producto);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        var url = this.productoURL + "/" + key$ + ".json";
        return this.http.put(url, body, { headers: headers }).map(function (res) { return res.json(); });
    };
    ProductoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductoService);
    return ProductoService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
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