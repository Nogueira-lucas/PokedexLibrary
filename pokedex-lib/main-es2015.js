(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_pokemon_storage_pokemon_storage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pokemon-storage/pokemon-storage.component */ "./src/app/pages/pokemon-storage/pokemon-storage.component.ts");





const routes = [
    {
        path: '',
        component: _pages_pokemon_storage_pokemon_storage_component__WEBPACK_IMPORTED_MODULE_2__["PokemonStorageComponent"],
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_translations_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/translations/translation.service */ "./src/app/services/translations/translation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(translate) {
        this.translate = translate;
    }
    ngOnInit() {
        this.translate.initLocation();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_translations_translation_service__WEBPACK_IMPORTED_MODULE_1__["PokemonTranslationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `<router-outlet></router-outlet>`,
            }]
    }], function () { return [{ type: _services_translations_translation_service__WEBPACK_IMPORTED_MODULE_1__["PokemonTranslationService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/material/material.module */ "./src/app/modules/material/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _pages_pokemon_storage_pokemon_storage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/pokemon-storage/pokemon-storage.component */ "./src/app/pages/pokemon-storage/pokemon-storage.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _modules_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({}),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_pokemon_storage_pokemon_storage_component__WEBPACK_IMPORTED_MODULE_9__["PokemonStorageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _modules_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_pokemon_storage_pokemon_storage_component__WEBPACK_IMPORTED_MODULE_9__["PokemonStorageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _modules_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({}),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_modules_material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/material/material.module */ "./src/app/modules/material/material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pokecard_pokecard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokecard/pokecard.component */ "./src/app/components/pokecard/pokecard.component.ts");
/* harmony import */ var _poketoolbar_poketoolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./poketoolbar/poketoolbar.component */ "./src/app/components/poketoolbar/poketoolbar.component.ts");
/* harmony import */ var _pokesearchbar_pokeseachbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pokesearchbar/pokeseachbar.component */ "./src/app/components/pokesearchbar/pokeseachbar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_loading_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/loading/interceptor.service */ "./src/app/services/loading/interceptor.service.ts");











const views = [
    _pokecard_pokecard_component__WEBPACK_IMPORTED_MODULE_3__["PokeCardComponent"],
    _poketoolbar_poketoolbar_component__WEBPACK_IMPORTED_MODULE_4__["PokeToolbarComponent"],
    _pokesearchbar_pokeseachbar_component__WEBPACK_IMPORTED_MODULE_5__["PokeSearchBarComponent"]
];
class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _services_loading_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["LoadingInterceptorService"],
            multi: true
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_modules_material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_pokecard_pokecard_component__WEBPACK_IMPORTED_MODULE_3__["PokeCardComponent"],
        _poketoolbar_poketoolbar_component__WEBPACK_IMPORTED_MODULE_4__["PokeToolbarComponent"],
        _pokesearchbar_pokeseachbar_component__WEBPACK_IMPORTED_MODULE_5__["PokeSearchBarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        src_app_modules_material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]], exports: [_pokecard_pokecard_component__WEBPACK_IMPORTED_MODULE_3__["PokeCardComponent"],
        _poketoolbar_poketoolbar_component__WEBPACK_IMPORTED_MODULE_4__["PokeToolbarComponent"],
        _pokesearchbar_pokeseachbar_component__WEBPACK_IMPORTED_MODULE_5__["PokeSearchBarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    ...views
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    src_app_modules_material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ],
                exports: [
                    ...views
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                        useClass: _services_loading_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["LoadingInterceptorService"],
                        multi: true
                    }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/pokecard/pokecard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pokecard/pokecard.component.ts ***!
  \***********************************************************/
/*! exports provided: PokeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeCardComponent", function() { return PokeCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/pokemon/pokemon.service */ "./src/app/services/pokemon/pokemon.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









function PokeCardComponent_mat_progress_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 13);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate");
} }
function PokeCardComponent_mat_chip_list_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const specie_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, specie_r10));
} }
class PokeCardComponent {
    constructor(pokeService) {
        this.pokeService = pokeService;
    }
    ngOnInit() {
        this.init();
        this.pokemonDetails$.subscribe(details => {
            this.name = details.name;
            this.imageUrl = details.sprites.front_default;
            this.order = details.order;
            this.mainSkill = details.abilities[0].ability.name;
            this.pokeService.getSpecies(details.species.url)
                .subscribe(specie => {
                this.color = specie.color.name;
                this.species = specie.egg_groups.map(egg => egg.name);
            });
        });
    }
    init() {
        this.pokemonDetails$ = this.pokeService.getDetails(this.url);
    }
    get backgroundColor() {
        if (this.color)
            return `poke-card-background-${this.color.toString().toLowerCase()}`;
    }
}
PokeCardComponent.ɵfac = function PokeCardComponent_Factory(t) { return new (t || PokeCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"])); };
PokeCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokeCardComponent, selectors: [["poke-card-component"]], inputs: { url: "url" }, decls: 23, vars: 16, consts: [["matRipple", "", 1, "poke-card"], ["class", "poke-card-progressbar", 3, "mode", 4, "ngIf"], [1, "poke-card-header"], [1, "poke-card-header-name"], [1, "poke-card-header-number"], [1, "poke-card-image"], [3, "src"], [1, "poke-card-foot"], [1, "poke-card-foot-container"], [1, "poke-card-foot-container-description"], [1, "poke-card-foot-container-description-title"], [1, "poke-card-foot-container-mat-icon"], [4, "ngFor", "ngForOf"], [1, "poke-card-progressbar", 3, "mode"]], template: function PokeCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokeCardComponent_mat_progress_spinner_1_Template, 1, 1, "mat-progress-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PokeCardComponent_mat_chip_list_22_Template, 4, 3, "mat-chip-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.backgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, ctx.name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 11, ctx.order, "3.0-9"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 14, "card.skillLabel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mainSkill);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.species);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinner"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]], styles: [".poke-card[_ngcontent-%COMP%] {\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  -webkit-animation: fadeIn 1s;\n          animation: fadeIn 1s;\n  cursor: pointer;\n}\n.poke-card-progressbar[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.poke-card-background-black[_ngcontent-%COMP%] {\n  background-color: rgba(56, 54, 54, 0.502);\n}\n.poke-card-background-blue[_ngcontent-%COMP%] {\n  background-color: rgba(23, 96, 207, 0.502);\n}\n.poke-card-background-green[_ngcontent-%COMP%] {\n  background-color: rgba(44, 95, 37, 0.502);\n}\n.poke-card-background-brown[_ngcontent-%COMP%] {\n  background-color: rgba(77, 46, 5, 0.502);\n}\n.poke-card-background-gray[_ngcontent-%COMP%] {\n  background-color: rgba(122, 131, 121, 0.502);\n}\n.poke-card-background-pink[_ngcontent-%COMP%] {\n  background-color: rgba(221, 67, 221, 0.502);\n}\n.poke-card-background-purple[_ngcontent-%COMP%] {\n  background-color: rgba(112, 28, 112, 0.502);\n}\n.poke-card-background-red[_ngcontent-%COMP%] {\n  background-color: rgba(230, 16, 8, 0.502);\n}\n.poke-card-background-white[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.poke-card-background-yellow[_ngcontent-%COMP%] {\n  background-color: rgba(150, 136, 15, 0.502);\n}\n.poke-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n}\n.poke-card-header-name[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n}\n.poke-card-header-number[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: black;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.poke-card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.poke-card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.poke-card-foot-container[_ngcontent-%COMP%] {\n  margin: -10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 8px;\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n.poke-card-foot-container-description[_ngcontent-%COMP%] {\n  line-height: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  font-size: 0.9em;\n}\n.poke-card-foot-container-description-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 5px;\n}\n.poke-card-foot-container-mat-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n  .mat-standard-chip {\n  min-height: 10px !important;\n  height: 10px !important;\n  font-size: 10px !important;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    top: -10px;\n  }\n  to {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    top: -10px;\n  }\n  to {\n    opacity: 1;\n    top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1Y2FzL0RldmVsb3BtZW50L3Byb2plY3RzL3Bva2VkZXgtbGliL3NyYy9hcHAvY29tcG9uZW50cy9wb2tlY2FyZC9wb2tlY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb2tlY2FyZC9wb2tlY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7RUFDQSxlQUFBO0FDQUY7QURFRTtFQUNFLGNBQUE7QUNBSjtBREtJO0VBQ0UseUNBQUE7QUNITjtBRE1JO0VBQ0UsMENBQUE7QUNKTjtBRE9JO0VBQ0UseUNBQUE7QUNMTjtBRFFJO0VBQ0Usd0NBQUE7QUNOTjtBRFNJO0VBQ0UsNENBQUE7QUNQTjtBRFVJO0VBQ0UsMkNBQUE7QUNSTjtBRFdJO0VBQ0UsMkNBQUE7QUNUTjtBRFlJO0VBQ0UseUNBQUE7QUNWTjtBRGFJO0VBQ0UsdUJBQUE7QUNYTjtBRGNJO0VBQ0UsMkNBQUE7QUNaTjtBRGlCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUNmSjtBRGlCSTtFQUNFLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDZk47QURrQkk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHdJQUFBO0FDaEJOO0FEb0JFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDbEJKO0FEb0JJO0VBQ0UsYUFBQTtBQ2xCTjtBRHdCSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBQ3RCTjtBRHdCTTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDdEJSO0FEd0JRO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ3RCVjtBRDBCTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ3hCUjtBRDhCQTtFQUNFLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQzNCRjtBRDhCQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFVBQUE7RUMzQkY7RUQ0QkM7SUFDQyxVQUFBO0lBQ0EsTUFBQTtFQzFCRjtBQUNGO0FEbUJBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsVUFBQTtFQzNCRjtFRDRCQztJQUNDLFVBQUE7SUFDQSxNQUFBO0VDMUJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bva2VjYXJkL3Bva2VjYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucG9rZS1jYXJkIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBhbmltYXRpb246IGZhZGVJbiAxcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBcbiAgJi1wcm9ncmVzc2JhciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAmLWJhY2tncm91bmQge1xuXG4gICAgJi1ibGFjayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1NCwgNTQsIDAuNTAyKTtcbiAgICB9XG5cbiAgICAmLWJsdWUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMywgOTYsIDIwNywgMC41MDIpO1xuICAgIH1cblxuICAgICYtZ3JlZW4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NCwgOTUsIDM3LCAwLjUwMik7XG4gICAgfSAgICBcblxuICAgICYtYnJvd24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NywgNDYsIDUsIDAuNTAyKTtcbiAgICB9XG5cbiAgICAmLWdyYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDEzMSwgMTIxLCAwLjUwMik7XG4gICAgfVxuXG4gICAgJi1waW5rIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCA2NywgMjIxLCAwLjUwMik7XG4gICAgfVxuXG4gICAgJi1wdXJwbGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTIsIDI4LCAxMTIsIDAuNTAyKTtcbiAgICB9XG5cbiAgICAmLXJlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgMTYsIDgsIDAuNTAyKTtcbiAgICB9XG5cbiAgICAmLXdoaXRlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSk7XG4gICAgfVxuXG4gICAgJi15ZWxsb3cge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTAsIDEzNiwgMTUsIDAuNTAyKTtcbiAgICB9XG5cbiAgfVxuXG4gICYtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblxuICAgICYtbmFtZSB7XG4gICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgICYtbnVtYmVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIH1cbiAgfVxuXG4gICYtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgfVxuXG4gICYtZm9vdCB7XG5cbiAgICAmLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW46IC0xMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzAwMDAwMCwgMC41KTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgICAmLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuXG4gICAgICAgICYtdGl0bGUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYtbWF0LWljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RhbmRhcmQtY2hpcCB7ICAgIFxuICBtaW4taGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogLTEwcHg7XG4gIH10byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0b3A6IDA7XG4gIH1cbn0iLCIucG9rZS1jYXJkIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBhbmltYXRpb246IGZhZGVJbiAxcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBva2UtY2FyZC1wcm9ncmVzc2JhciB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnBva2UtY2FyZC1iYWNrZ3JvdW5kLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NiwgNTQsIDU0LCAwLjUwMik7XG59XG4ucG9rZS1jYXJkLWJhY2tncm91bmQtYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMsIDk2LCAyMDcsIDAuNTAyKTtcbn1cbi5wb2tlLWNhcmQtYmFja2dyb3VuZC1ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDQsIDk1LCAzNywgMC41MDIpO1xufVxuLnBva2UtY2FyZC1iYWNrZ3JvdW5kLWJyb3duIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NywgNDYsIDUsIDAuNTAyKTtcbn1cbi5wb2tlLWNhcmQtYmFja2dyb3VuZC1ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDEzMSwgMTIxLCAwLjUwMik7XG59XG4ucG9rZS1jYXJkLWJhY2tncm91bmQtcGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCA2NywgMjIxLCAwLjUwMik7XG59XG4ucG9rZS1jYXJkLWJhY2tncm91bmQtcHVycGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTIsIDI4LCAxMTIsIDAuNTAyKTtcbn1cbi5wb2tlLWNhcmQtYmFja2dyb3VuZC1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgMTYsIDgsIDAuNTAyKTtcbn1cbi5wb2tlLWNhcmQtYmFja2dyb3VuZC13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnBva2UtY2FyZC1iYWNrZ3JvdW5kLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUwLCAxMzYsIDE1LCAwLjUwMik7XG59XG4ucG9rZS1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLnBva2UtY2FyZC1oZWFkZXItbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBva2UtY2FyZC1oZWFkZXItbnVtYmVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG4ucG9rZS1jYXJkLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBva2UtY2FyZC1pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLnBva2UtY2FyZC1mb290LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogLTEwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgY29sb3I6ICNmZmY7XG59XG4ucG9rZS1jYXJkLWZvb3QtY29udGFpbmVyLWRlc2NyaXB0aW9uIHtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuLnBva2UtY2FyZC1mb290LWNvbnRhaW5lci1kZXNjcmlwdGlvbi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5wb2tlLWNhcmQtZm9vdC1jb250YWluZXItbWF0LWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gIG1pbi1oZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdG9wOiAtMTBweDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0b3A6IDA7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokeCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'poke-card-component',
                styleUrls: ['./pokecard.component.scss'],
                templateUrl: './pokecard.component.html'
            }]
    }], function () { return [{ type: src_app_services_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"] }]; }, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pokesearchbar/pokeseachbar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/pokesearchbar/pokeseachbar.component.ts ***!
  \********************************************************************/
/*! exports provided: PokeSearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeSearchBarComponent", function() { return PokeSearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");






class PokeSearchBarComponent {
    constructor() {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.nameSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    emitName() {
        console.log(this.name.value);
        this.nameSubmitted.emit(this.name.value);
    }
}
PokeSearchBarComponent.ɵfac = function PokeSearchBarComponent_Factory(t) { return new (t || PokeSearchBarComponent)(); };
PokeSearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokeSearchBarComponent, selectors: [["poke-search-bar"]], decls: 7, vars: 1, consts: [[1, "pokemon-list-search_bar_initial"], [1, "pokemon-list-search_bar_initial-form"], [1, "pokemon-list-search_bar_initial-form-field"], ["matInput", "", "placeholder", "Ex.: 'Picachu'", 3, "formControl", "keyup"]], template: function PokeSearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pokemon.lib");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PokeSearchBarComponent_Template_input_keyup_6_listener() { return ctx.emitName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.name);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: ["./pokeseachbar.component.scss"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokeSearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'poke-search-bar',
                templateUrl: './pokeseachbar.component.html',
                styles: ['./pokeseachbar.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/poketoolbar/poketoolbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/poketoolbar/poketoolbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: PokeToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeToolbarComponent", function() { return PokeToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");






function PokeToolbarComponent_mat_toolbar_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-button-toggle-group", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-button-toggle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokeToolbarComponent_mat_toolbar_0_Template_mat_button_toggle_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.setLanguage("en"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-button-toggle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokeToolbarComponent_mat_toolbar_0_Template_mat_button_toggle_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.setLanguage("pt"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "toolbar.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "toolbar.subtitle"), " ");
} }
class PokeToolbarComponent {
    constructor(translate) {
        this.translate = translate;
        this.isVisible = true;
    }
    setLanguage(language) {
        this.translate.use(language);
    }
}
PokeToolbarComponent.ɵfac = function PokeToolbarComponent_Factory(t) { return new (t || PokeToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
PokeToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokeToolbarComponent, selectors: [["poke-toolbar"]], inputs: { isVisible: "isVisible" }, decls: 1, vars: 1, consts: [["class", "poketoolbar-toolbar", 4, "ngIf"], [1, "poketoolbar-toolbar"], [1, "poketoolbar-toolbar-firstWorld"], [1, "poketoolbar-toolbar-secondWorld"], [1, "poketoolbar-toolbar-options"], [1, "poketoolbar-toolbar-options-button"], [3, "click"], ["src", "../../../assets/images/logos/united_kingdom.png", "alt", "english"], ["src", "../../../assets/images/logos/brazil.png", "alt", "brazil"]], template: function PokeToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PokeToolbarComponent_mat_toolbar_0_Template, 14, 6, "mat-toolbar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".poketoolbar-toolbar[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  -webkit-animation: fadeInTop 0.3s;\n          animation: fadeInTop 0.3s;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #424242;\n  color: #fff;\n}\n.poketoolbar-toolbar-options-button[_ngcontent-%COMP%] {\n  background-color: #424242;\n}\n.poketoolbar-toolbar-options[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 30px;\n}\n.poketoolbar-toolbar-firstWorld[_ngcontent-%COMP%] {\n  -webkit-text-stroke-width: 0.5px;\n  -webkit-text-stroke-color: #0038d3;\n  font-size: 1em;\n  color: #fbff00;\n  margin: 0;\n  padding: 0;\n}\n.poketoolbar-toolbar-secondWorld[_ngcontent-%COMP%] {\n  -webkit-text-stroke-width: 0.5px;\n  -webkit-text-stroke-color: #0038d3;\n  font-size: 1em;\n  color: #fbff00;\n  margin: 0;\n  padding: 0;\n}\n@-webkit-keyframes fadeInTop {\n  from {\n    top: -200px;\n  }\n  to {\n    top: 0;\n  }\n}\n@keyframes fadeInTop {\n  from {\n    top: -200px;\n  }\n  to {\n    top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1Y2FzL0RldmVsb3BtZW50L3Byb2plY3RzL3Bva2VkZXgtbGliL3NyYy9hcHAvY29tcG9uZW50cy9wb2tldG9vbGJhci9wb2tldG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb2tldG9vbGJhci9wb2tldG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0RGO0FES0k7RUFDRSx5QkFBQTtBQ0hOO0FETUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0pOO0FEUUU7RUFDRSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ05KO0FEU0U7RUFDRSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1BKO0FEV0E7RUFDRTtJQUNFLFdBQUE7RUNSRjtFRFVBO0lBQ0UsTUFBQTtFQ1JGO0FBQ0Y7QURFQTtFQUNFO0lBQ0UsV0FBQTtFQ1JGO0VEVUE7SUFDRSxNQUFBO0VDUkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9rZXRvb2xiYXIvcG9rZXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnBva2V0b29sYmFyLXRvb2xiYXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgYW5pbWF0aW9uOiBmYWRlSW5Ub3AgMC4zcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gIGNvbG9yOiAjZmZmO1xuXG4gICYtb3B0aW9ucyB7XG4gICAgXG4gICAgJi1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG5cbiAgJi1maXJzdFdvcmxkIHtcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjVweDtcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiByZ2IoMCwgNTYsIDIxMSk7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6IHJnYigyNTEsIDI1NSwgMCk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gICYtc2Vjb25kV29ybGQge1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuNXB4O1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHJnYigwLCA1NiwgMjExKTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogcmdiKDI1MSwgMjU1LCAwKTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblRvcCB7XG4gIGZyb20ge1xuICAgIHRvcDogLTIwMHB4O1xuICB9XG4gIHRvIHtcbiAgICB0b3A6IDBcbiAgfVxufSIsIi5wb2tldG9vbGJhci10b29sYmFyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGFuaW1hdGlvbjogZmFkZUluVG9wIDAuM3M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wb2tldG9vbGJhci10b29sYmFyLW9wdGlvbnMtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0Mjtcbn1cbi5wb2tldG9vbGJhci10b29sYmFyLW9wdGlvbnMgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5wb2tldG9vbGJhci10b29sYmFyLWZpcnN0V29ybGQge1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjVweDtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogIzAwMzhkMztcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjZmJmZjAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ucG9rZXRvb2xiYXItdG9vbGJhci1zZWNvbmRXb3JsZCB7XG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuNXB4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiAjMDAzOGQzO1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICNmYmZmMDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5Ub3Age1xuICBmcm9tIHtcbiAgICB0b3A6IC0yMDBweDtcbiAgfVxuICB0byB7XG4gICAgdG9wOiAwO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokeToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'poke-toolbar',
                templateUrl: './poketoolbar.component.html',
                styleUrls: ['./poketoolbar.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, { isVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/material/material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");












const modules = [
    _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[...modules],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"]], exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [...modules],
                exports: [...modules]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/pokemon-storage/pokemon-storage.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/pokemon-storage/pokemon-storage.component.ts ***!
  \********************************************************************/
/*! exports provided: PokemonStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonStorageComponent", function() { return PokemonStorageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var src_app_services_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pokemon/pokemon.service */ "./src/app/services/pokemon/pokemon.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _components_poketoolbar_poketoolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/poketoolbar/poketoolbar.component */ "./src/app/components/poketoolbar/poketoolbar.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _components_pokecard_pokecard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/pokecard/pokecard.component */ "./src/app/components/pokecard/pokecard.component.ts");












function PokemonStorageComponent_mat_progress_bar_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 9);
} }
function PokemonStorageComponent_div_11_poke_card_component_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "poke-card-component", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nameSubmitted", function PokemonStorageComponent_div_11_poke_card_component_1_Template_poke_card_component_nameSubmitted_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.searchPokemon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokemon_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", pokemon_r4.url);
} }
function PokemonStorageComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonStorageComponent_div_11_poke_card_component_1_Template, 1, 1, "poke-card-component", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.results);
} }
class PokemonStorageComponent {
    constructor(pokeService, translation) {
        this.pokeService = pokeService;
        this.translation = translation;
        this.pageOptions = [1, 2, 5];
        this.results = [];
    }
    ngOnInit() {
        this.pokeService.getAll().subscribe(pokemonResponse => {
            this.count = pokemonResponse.count,
                this.results = pokemonResponse.results,
                this.nextUrl = pokemonResponse.next,
                this.previousUrl = pokemonResponse.previous;
        });
        this.limit = this.pokeService.limit;
    }
    injectTranslationPagitator() {
        this.translation.get('paginator.RANGE_PAGE_LABEL_2').subscribe(translation => {
            this.paginator._intl.itemsPerPageLabel = translation;
        });
    }
    searchPokemon(name) {
        this.pokeService.getByName(name).subscribe(pokemonResponse => {
            this.count = pokemonResponse.count,
                this.results = pokemonResponse.results,
                this.nextUrl = pokemonResponse.next,
                this.previousUrl = pokemonResponse.previous;
        });
    }
    changePage(event) {
        if (event.previousPageIndex < event.pageIndex)
            this.next();
        else if (event.previousPageIndex > event.pageIndex)
            this.previous();
    }
    get isLoading() {
        return !this.results;
    }
    next() {
        this.pokeService.changePage(this.nextUrl).subscribe(response => {
            this.count = response.count,
                this.results = response.results,
                this.nextUrl = response.next,
                this.previousUrl = response.previous;
        });
    }
    previous() {
        this.pokeService.changePage(this.previousUrl).subscribe(response => {
            this.count = response.count,
                this.results = response.results,
                this.nextUrl = response.next,
                this.previousUrl = response.previous;
        });
    }
}
PokemonStorageComponent.ɵfac = function PokemonStorageComponent_Factory(t) { return new (t || PokemonStorageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["PokemonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
PokemonStorageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonStorageComponent, selectors: [["app-pokemon-storage"]], viewQuery: function PokemonStorageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 17, vars: 17, consts: [[1, "pokemon_storage"], [1, "pokemon_storage-controllers"], [1, "pokemon_storage-controllers-input"], ["disabled", "", "matInput", "", "placeholder", "Ex. Jiglypuff", 3, "keyup"], ["pokemonName", ""], [3, "hidePageSize", "showFirstLastButtons", "length", "pageIndex", "pageSize", "pageSizeOptions", "page"], ["mode", "indeterminate", 4, "ngIf"], ["class", "pokemon_storage-card-panel", 4, "ngIf"], [1, "pokemon_storage-footer"], ["mode", "indeterminate"], [1, "pokemon_storage-card-panel"], ["class", "pokemon_storage-card-panel-item", 3, "url", "nameSubmitted", 4, "ngFor", "ngForOf"], [1, "pokemon_storage-card-panel-item", 3, "url", "nameSubmitted"]], template: function PokemonStorageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "poke-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PokemonStorageComponent_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.searchPokemon(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-paginator", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function PokemonStorageComponent_Template_mat_paginator_page_9_listener($event) { return ctx.changePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PokemonStorageComponent_mat_progress_bar_10_Template, 1, 0, "mat-progress-bar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PokemonStorageComponent_div_11_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "footer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, "storage.searchInput"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidePageSize", true)("showFirstLastButtons", false)("length", ctx.count)("pageIndex", ctx.index)("pageSize", ctx.limit)("pageSizeOptions", ctx.pageOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.results);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 13, "storage.copyRightsPrimary"), "\u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 15, "storage.copyRightsSecond"), "");
    } }, directives: [_components_poketoolbar_poketoolbar_component__WEBPACK_IMPORTED_MODULE_4__["PokeToolbarComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _components_pokecard_pokecard_component__WEBPACK_IMPORTED_MODULE_9__["PokeCardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".pokemon_storage-controllers[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  margin-right: 20px;\n  margin-left: 20px;\n}\n.pokemon_storage-controllers-input[_ngcontent-%COMP%] {\n  width: 350px;\n}\n.pokemon_storage-card-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: auto;\n  width: 80%;\n}\n.pokemon_storage-card-panel-item[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.pokemon_storage-footer[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  min-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1Y2FzL0RldmVsb3BtZW50L3Byb2plY3RzL3Bva2VkZXgtbGliL3NyYy9hcHAvcGFnZXMvcG9rZW1vbi1zdG9yYWdlL3Bva2Vtb24tc3RvcmFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcG9rZW1vbi1zdG9yYWdlL3Bva2Vtb24tc3RvcmFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRko7QURJSTtFQUNFLFlBQUE7QUNGTjtBRE1FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDSko7QURNSTtFQUNFLFdBQUE7QUNKTjtBRFFFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9rZW1vbi1zdG9yYWdlL3Bva2Vtb24tc3RvcmFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBva2Vtb25fc3RvcmFnZSB7XG4gIFxuICAmLWNvbnRyb2xsZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyBcblxuICAgICYtaW5wdXQge1xuICAgICAgd2lkdGg6IDM1MHB4O1xuICAgIH1cbiAgfVxuXG4gICYtY2FyZC1wYW5lbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDgwJTtcblxuICAgICYtaXRlbSB7XG4gICAgICBtYXJnaW46IDVweFxuICAgIH1cbiAgfVxuXG4gICYtZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICB9XG59IiwiLnBva2Vtb25fc3RvcmFnZS1jb250cm9sbGVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5wb2tlbW9uX3N0b3JhZ2UtY29udHJvbGxlcnMtaW5wdXQge1xuICB3aWR0aDogMzUwcHg7XG59XG4ucG9rZW1vbl9zdG9yYWdlLWNhcmQtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwJTtcbn1cbi5wb2tlbW9uX3N0b3JhZ2UtY2FyZC1wYW5lbC1pdGVtIHtcbiAgbWFyZ2luOiA1cHg7XG59XG4ucG9rZW1vbl9zdG9yYWdlLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzNnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonStorageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pokemon-storage',
                templateUrl: './pokemon-storage.component.html',
                styleUrls: ['./pokemon-storage.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["PokemonService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "./src/app/services/loading/interceptor.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/loading/interceptor.service.ts ***!
  \*********************************************************/
/*! exports provided: LoadingInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptorService", function() { return LoadingInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.service */ "./src/app/services/loading/loading.service.ts");




class LoadingInterceptorService {
    constructor(loadingScreenService) {
        this.loadingScreenService = loadingScreenService;
        this.activeRequests = 0;
    }
    intercept(request, next) {
        if (this.activeRequests === 0) {
            this.loadingScreenService.startLoading();
        }
        this.activeRequests++;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this.activeRequests--;
            if (this.activeRequests === 0) {
                this.loadingScreenService.stopLoading();
            }
        }));
    }
    ;
}
LoadingInterceptorService.ɵfac = function LoadingInterceptorService_Factory(t) { return new (t || LoadingInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"])); };
LoadingInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingInterceptorService, factory: LoadingInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/loading/loading.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/loading/loading.service.ts ***!
  \*****************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class LoadingService {
    constructor() {
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    startLoading() {
        this.loading$.next(true);
    }
    stopLoading() {
        this.loading$.next(false);
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(); };
LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/pokemon/pokemon.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/pokemon/pokemon.service.ts ***!
  \*****************************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PokemonService {
    constructor(http) {
        this.http = http;
        this.limit = 12;
        this.pageNumber = 0;
    }
    getDetails(url) {
        return this.http.get(url);
    }
    getByName(name) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlBase}/pokemon/${name}`);
    }
    changePage(url) {
        return this.http.get(url);
    }
    getAll() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlBase}/pokemon/?offset=${this.pageNumber}&limit=${this.limit}`);
    }
    getSpecies(url) {
        return this.http.get(url);
    }
}
PokemonService.ɵfac = function PokemonService_Factory(t) { return new (t || PokemonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PokemonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonService, factory: PokemonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/translations/translation.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/translations/translation.service.ts ***!
  \**************************************************************/
/*! exports provided: PokemonTranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonTranslationService", function() { return PokemonTranslationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_i18n_pt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/i18n/pt */ "./src/assets/i18n/pt.ts");
/* harmony import */ var src_assets_i18n_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/i18n/en */ "./src/assets/i18n/en.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





const locales = [src_assets_i18n_pt__WEBPACK_IMPORTED_MODULE_1__["PT_BR"], src_assets_i18n_en__WEBPACK_IMPORTED_MODULE_2__["EN_US"]];
class PokemonTranslationService {
    constructor(translateService) {
        this.translateService = translateService;
    }
    initLocation() {
        this.translateService.addLangs(['pt', 'en']);
        this.translateService.setDefaultLang('pt');
        this.translateService.use('pt');
        locales.forEach((locale) => {
            this.translateService
                .setTranslation(locale.language, locale.component, true);
        });
    }
    setLang(lang) {
        this.translateService.use(lang);
        window.localStorage.setItem('lang', lang);
    }
}
PokemonTranslationService.ɵfac = function PokemonTranslationService_Factory(t) { return new (t || PokemonTranslationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
PokemonTranslationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonTranslationService, factory: PokemonTranslationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonTranslationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/i18n/en.ts":
/*!*******************************!*\
  !*** ./src/assets/i18n/en.ts ***!
  \*******************************/
/*! exports provided: EN_US */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EN_US", function() { return EN_US; });
/* harmony import */ var _translations_poke_card_poke_card_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translations/poke-card/poke-card.en */ "./src/assets/i18n/translations/poke-card/poke-card.en.ts");
/* harmony import */ var _translations_poke_toolbar_poke_toolbar_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translations/poke-toolbar/poke-toolbar.en */ "./src/assets/i18n/translations/poke-toolbar/poke-toolbar.en.ts");
/* harmony import */ var _translations_poke_storage_poke_storage_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/poke-storage/poke-storage.en */ "./src/assets/i18n/translations/poke-storage/poke-storage.en.ts");
/* harmony import */ var _translations_paginator_paginator_defines_pt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/paginator/paginator-defines.pt */ "./src/assets/i18n/translations/paginator/paginator-defines.pt.ts");




const EN_US = {
    language: 'en',
    component: {
        card: _translations_poke_card_poke_card_en__WEBPACK_IMPORTED_MODULE_0__["cardEn"],
        toolBar: _translations_poke_toolbar_poke_toolbar_en__WEBPACK_IMPORTED_MODULE_1__["toolbarEn"],
        storage: _translations_poke_storage_poke_storage_en__WEBPACK_IMPORTED_MODULE_2__["storageEN"],
        paginator: _translations_paginator_paginator_defines_pt__WEBPACK_IMPORTED_MODULE_3__["PAGINATOR"]
    }
};


/***/ }),

/***/ "./src/assets/i18n/pt.ts":
/*!*******************************!*\
  !*** ./src/assets/i18n/pt.ts ***!
  \*******************************/
/*! exports provided: PT_BR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PT_BR", function() { return PT_BR; });
/* harmony import */ var _translations_poke_card_poke_card_pt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translations/poke-card/poke-card.pt */ "./src/assets/i18n/translations/poke-card/poke-card.pt.ts");
/* harmony import */ var _translations_poke_toolbar_poke_toolbar_pt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translations/poke-toolbar/poke-toolbar.pt */ "./src/assets/i18n/translations/poke-toolbar/poke-toolbar.pt.ts");
/* harmony import */ var _translations_poke_storage_poke_storage_t__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/poke-storage/poke-storage.ṕt */ "./src/assets/i18n/translations/poke-storage/poke-storage.ṕt.ts");
/* harmony import */ var _translations_paginator_paginator_defines_pt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/paginator/paginator-defines.pt */ "./src/assets/i18n/translations/paginator/paginator-defines.pt.ts");




const PT_BR = {
    language: 'pt',
    component: {
        card: _translations_poke_card_poke_card_pt__WEBPACK_IMPORTED_MODULE_0__["cardPt"],
        toolbar: _translations_poke_toolbar_poke_toolbar_pt__WEBPACK_IMPORTED_MODULE_1__["toolbarPt"],
        storage: _translations_poke_storage_poke_storage_t__WEBPACK_IMPORTED_MODULE_2__["storagePT"],
        paginator: _translations_paginator_paginator_defines_pt__WEBPACK_IMPORTED_MODULE_3__["PAGINATOR"]
    }
};


/***/ }),

/***/ "./src/assets/i18n/translations/paginator/paginator-defines.pt.ts":
/*!************************************************************************!*\
  !*** ./src/assets/i18n/translations/paginator/paginator-defines.pt.ts ***!
  \************************************************************************/
/*! exports provided: PAGINATOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATOR", function() { return PAGINATOR; });
const PAGINATOR = {
    ITEMS_PER_PAGE_LABEL: "Items por página:",
    NEXT_PAGE_LABEL: "próximo",
    PREVIOUS_PAGE_LABEL: "anterior",
    FIRST_PAGE_LABEL: "primeira página",
    LAST_PAGE_LABEL: "última pagina",
    RANGE_PAGE_LABEL_1: "0 até {{length}}",
    RANGE_PAGE_LABEL_2: "{{startIndex}} - {{endIndex}} até {{length}}"
};


/***/ }),

/***/ "./src/assets/i18n/translations/poke-card/poke-card.en.ts":
/*!****************************************************************!*\
  !*** ./src/assets/i18n/translations/poke-card/poke-card.en.ts ***!
  \****************************************************************/
/*! exports provided: cardEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardEn", function() { return cardEn; });
const cardEn = {
    skillLabel: 'Skill:',
    speciesLabel: 'Species:'
};


/***/ }),

/***/ "./src/assets/i18n/translations/poke-card/poke-card.pt.ts":
/*!****************************************************************!*\
  !*** ./src/assets/i18n/translations/poke-card/poke-card.pt.ts ***!
  \****************************************************************/
/*! exports provided: cardPt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardPt", function() { return cardPt; });
const cardPt = {
    skillLabel: 'Habilidade:',
    speciesLabel: 'Espécies:'
};


/***/ }),

/***/ "./src/assets/i18n/translations/poke-storage/poke-storage.en.ts":
/*!**********************************************************************!*\
  !*** ./src/assets/i18n/translations/poke-storage/poke-storage.en.ts ***!
  \**********************************************************************/
/*! exports provided: storageEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageEN", function() { return storageEN; });
const storageEN = {
    copyRightsPrimary: 'Developed by Lucas Nogueira',
    copyRightsSecond: '2020 - Powered by github pages.',
    searchInput: 'Find yours favorite pokemon:'
};


/***/ }),

/***/ "./src/assets/i18n/translations/poke-storage/poke-storage.ṕt.ts":
/*!**********************************************************************!*\
  !*** ./src/assets/i18n/translations/poke-storage/poke-storage.ṕt.ts ***!
  \**********************************************************************/
/*! exports provided: storagePT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storagePT", function() { return storagePT; });
const storagePT = {
    copyRightsPrimary: 'Desenvolvido por Lucas Nogueira',
    copyRightsSecond: '2020 - Mantido pelo github pages.',
    searchInput: 'Encontre seu pokemon favorito'
};


/***/ }),

/***/ "./src/assets/i18n/translations/poke-toolbar/poke-toolbar.en.ts":
/*!**********************************************************************!*\
  !*** ./src/assets/i18n/translations/poke-toolbar/poke-toolbar.en.ts ***!
  \**********************************************************************/
/*! exports provided: toolbarEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolbarEn", function() { return toolbarEn; });
const toolbarEn = {
    title: 'Pokedex',
    subtitle: 'lib'
};


/***/ }),

/***/ "./src/assets/i18n/translations/poke-toolbar/poke-toolbar.pt.ts":
/*!**********************************************************************!*\
  !*** ./src/assets/i18n/translations/poke-toolbar/poke-toolbar.pt.ts ***!
  \**********************************************************************/
/*! exports provided: toolbarPt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolbarPt", function() { return toolbarPt; });
const toolbarPt = {
    title: 'Pokedex',
    subtitle: 'biblioteca'
};


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    urlBase: 'https://pokeapi.co/api/v2'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lucas/Development/projects/pokedex-lib/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map