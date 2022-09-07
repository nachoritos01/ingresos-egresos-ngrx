"use strict";
(self["webpackChunkingresos_egresos"] = self["webpackChunkingresos_egresos"] || []).push([[742],{

/***/ 425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 7528);
/* harmony import */ var _dashboard_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.routes */ 9926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);





const rutasHijas = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
  children: _dashboard_routes__WEBPACK_IMPORTED_MODULE_1__.dashboardRoutes
}];
let DashboardRoutingModule = /*#__PURE__*/(() => {
  class DashboardRoutingModule {}

  DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) {
    return new (t || DashboardRoutingModule)();
  };

  DashboardRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: DashboardRoutingModule
  });
  DashboardRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(rutasHijas)]]
  });
  return DashboardRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 7528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9300);
/* harmony import */ var _ingreso_egreso_ingreso_egreso_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ingreso-egreso/ingreso-egreso.actions */ 725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 5094);
/* harmony import */ var _services_ingreso_egreso_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ingreso-egreso.service */ 8302);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/navbar/navbar.component */ 4696);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sidebar/sidebar.component */ 7500);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/footer/footer.component */ 5227);









let DashboardComponent = /*#__PURE__*/(() => {
  class DashboardComponent {
    constructor(store, ingresoEgresoService) {
      this.store = store;
      this.ingresoEgresoService = ingresoEgresoService;
    }

    ngOnDestroy() {
      var _a, _b;

      (_a = this.unserSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
      (_b = this.ingresosSubs) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }

    ngOnInit() {
      this.unserSubs = this.store.select('user').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(auth => {
        return auth.user != null;
      })).subscribe(({
        user
      }) => {
        this.ingresosSubs = this.ingresoEgresoService.initIngresosEgresosListener((user === null || user === void 0 ? void 0 : user.uid) || '').subscribe(ingresosEgresos => {
          this.store.dispatch((0,_ingreso_egreso_ingreso_egreso_actions__WEBPACK_IMPORTED_MODULE_0__.setItems)({
            items: ingresosEgresos
          }));
        });
      });
    }

  }

  DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_ingreso_egreso_service__WEBPACK_IMPORTED_MODULE_1__.IngresoEgresoService));
  };

  DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 7,
    vars: 0,
    consts: [[1, "page-body-wrapper"], [1, "main-panel"], [1, "content-wrapper"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    },
    directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent],
    encapsulation: 2
  });
  return DashboardComponent;
})();

/***/ }),

/***/ 9926:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.routes.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dashboardRoutes": () => (/* binding */ dashboardRoutes)
/* harmony export */ });
/* harmony import */ var _ingreso_egreso_estadistica_estadistica_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ingreso-egreso/estadistica/estadistica.component */ 2967);
/* harmony import */ var _ingreso_egreso_ingreso_egreso_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ingreso-egreso/ingreso-egreso.component */ 130);
/* harmony import */ var _ingreso_egreso_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ingreso-egreso/detalle/detalle.component */ 8856);



const dashboardRoutes = [{
  path: '',
  component: _ingreso_egreso_estadistica_estadistica_component__WEBPACK_IMPORTED_MODULE_0__.EstadisticaComponent
}, {
  path: 'ingreso-egreso',
  component: _ingreso_egreso_ingreso_egreso_component__WEBPACK_IMPORTED_MODULE_1__.IngresoEgresoComponent
}, {
  path: 'detalle',
  component: _ingreso_egreso_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_2__.DetalleComponent
}];

/***/ }),

/***/ 8856:
/*!*************************************************************!*\
  !*** ./src/app/ingreso-egreso/detalle/detalle.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleComponent": () => (/* binding */ DetalleComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 5226);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 5094);
/* harmony import */ var _services_ingreso_egreso_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ingreso-egreso.service */ 8302);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _pipes_order_ingresp_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/order-ingresp.pipe */ 191);







function DetalleComponent_tbody_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetalleComponent_tbody_16_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r2.borrar(item_r1.uid);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.monto);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-success", item_r1.tipo === "ingreso")("text-danger", item_r1.tipo === "egreso");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.tipo);
  }
}

let DetalleComponent = /*#__PURE__*/(() => {
  class DetalleComponent {
    constructor(store, ingresoEgresoService) {
      this.store = store;
      this.ingresoEgresoService = ingresoEgresoService;
    }

    ngOnDestroy() {
      this.ingresoIngresoSubs.unsubscribe();
    }

    ngOnInit() {
      this.ingresoIngresoSubs = this.store.select('ingresoEgreso').subscribe(({
        items
      }) => {
        this.ingresoEgreso = items;
      });
    }
    /**
     * Método para eliminar, elimina en firebase y por sockets notifica
     * al observable por medio de redux
     * @param uuid
     */


    borrar(uuid) {
      if (uuid === undefined) return;
      console.log(uuid);
      this.ingresoEgresoService.borrarIngresoEgreso(uuid).then(() => sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Borrado', 'Item borrado', 'success')).catch(error => sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', error.message, 'error'));
    }

  }

  DetalleComponent.ɵfac = function DetalleComponent_Factory(t) {
    return new (t || DetalleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_ingreso_egreso_service__WEBPACK_IMPORTED_MODULE_1__.IngresoEgresoService));
  };

  DetalleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DetalleComponent,
    selectors: [["app-detalle"]],
    decls: 18,
    vars: 3,
    consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "table"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"]],
    template: function DetalleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Detalle de ingreso egreso");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Monto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DetalleComponent_tbody_16_Template, 12, 7, "tbody", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "orderIngresp");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 1, ctx.ingresoEgreso));
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
    pipes: [_pipes_order_ingresp_pipe__WEBPACK_IMPORTED_MODULE_2__.OrderIngrespPipe],
    encapsulation: 2
  });
  return DetalleComponent;
})();

/***/ }),

/***/ 2967:
/*!*********************************************************************!*\
  !*** ./src/app/ingreso-egreso/estadistica/estadistica.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstadisticaComponent": () => (/* binding */ EstadisticaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5094);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9808);




function EstadisticaComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Grafica");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0, a1) {
  return {
    "text-success": a0,
    "text-danger": a1
  };
};

let EstadisticaComponent = /*#__PURE__*/(() => {
  class EstadisticaComponent {
    constructor(store) {
      this.store = store;
      this.ingresos = 0;
      this.egresos = 0;
      this.totalIngresos = 0;
      this.totalEgresos = 0;
    }

    ngOnInit() {
      this.store.select('ingresoEgreso').subscribe(({
        items
      }) => {
        this.generarEstadistica(items);
      });
    }

    generarEstadistica(items) {
      const total = 0;
      this.ingresos = 0;
      this.egresos = 0;
      this.totalIngresos = 0;
      this.totalEgresos = 0;

      for (const item of items) {
        if (item.tipo === 'ingreso') {
          this.ingresos++;
          this.totalIngresos += Number(item.monto);
        } else {
          this.egresos++;
          this.totalEgresos += Number(item.monto);
        }
      }
    }

  }

  EstadisticaComponent.ɵfac = function EstadisticaComponent_Factory(t) {
    return new (t || EstadisticaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store));
  };

  EstadisticaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EstadisticaComponent,
    selectors: [["app-estadistica"]],
    decls: 48,
    vars: 16,
    consts: [[1, "row"], [1, "col-6"], [1, "card", "card-statistics"], [1, "card-body"], [1, "clearfix"], [1, "float-left"], [1, "fa", "fa-money-bill-alt", "text-success", "icon-lg"], [1, "float-right"], [1, "mb-0", "text-right"], [1, "fluid-container"], [1, "font-weight-medium", "text-right", "mb-0"], [1, "text-muted", "mt-3", "mb-0"], ["aria-hidden", "true", 1, "mdi", "mdi-alert-octagon", "mr-1"], [1, "fa", "fa-shipping-fast", "text-danger", "icon-lg"], [1, "row", "m-5"], [1, "col-12"], [1, "fa", "fa-building", "text-info", "icon-lg"], [1, "font-weight-medium", "text-right", "mb-0", 3, "ngClass"], ["class", "col-12 p-5", 4, "ngIf"], [1, "col-12", "p-5"], [1, "card-title"]],
    template: function EstadisticaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ingresos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Ingresos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Diferencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, EstadisticaComponent_div_47_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, ctx.totalIngresos));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ingresos, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 9, ctx.totalEgresos));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.egresos, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, ctx.totalIngresos - ctx.totalEgresos > 0, ctx.totalIngresos - ctx.totalEgresos < 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 11, ctx.totalIngresos - ctx.totalEgresos), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ingresos > 0 || ctx.egresos > 0);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe],
    encapsulation: 2
  });
  return EstadisticaComponent;
})();

/***/ }),

/***/ 130:
/*!************************************************************!*\
  !*** ./src/app/ingreso-egreso/ingreso-egreso.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoEgresoComponent": () => (/* binding */ IngresoEgresoComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3075);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 5226);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_ingreso_egreso__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/ingreso-egreso */ 4806);
/* harmony import */ var _shared_ui_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/ui.actions */ 5299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _services_ingreso_egreso_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ingreso-egreso.service */ 8302);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 5094);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 9808);










function IngresoEgresoComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IngresoEgresoComponent_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r4.tipo = "egreso";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ingreso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function IngresoEgresoComponent_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IngresoEgresoComponent_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r6.tipo = "ingreso";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Egreso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function IngresoEgresoComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Agregar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r2.formIngresoEgreso.invalid);
  }
}

function IngresoEgresoComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Espere por favor... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

let IngresoEgresoComponent = /*#__PURE__*/(() => {
  class IngresoEgresoComponent {
    constructor(fb, ingresoEgresoService, store) {
      this.fb = fb;
      this.ingresoEgresoService = ingresoEgresoService;
      this.store = store;
      this.tipo = 'ingreso';
      this.isLoading = false;
    }

    ngOnDestroy() {
      this.cargando$.unsubscribe();
    }

    ngOnInit() {
      this.formIngresoEgreso = this.fb.group({
        descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        monto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] //tipo: ['', Validators.required],

      });
      this.cargando$ = this.store.select('ui').subscribe(ui => {
        this.isLoading = ui.isLoading;
      });
    }

    crearIngresoEgreso() {
      if (this.formIngresoEgreso.invalid) return;
      this.store.dispatch(_shared_ui_actions__WEBPACK_IMPORTED_MODULE_2__.isLoading());
      console.log(this.tipo);
      const {
        descripcion,
        monto
      } = this.formIngresoEgreso.value;
      const ingresoEgreso = new _models_ingreso_egreso__WEBPACK_IMPORTED_MODULE_1__.IngresoEgreso(descripcion, monto, this.tipo);
      this.ingresoEgresoService.crearIngresoEgreso(ingresoEgreso).then(response => {
        this.store.dispatch(_shared_ui_actions__WEBPACK_IMPORTED_MODULE_2__.stopLoading());
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          icon: 'success',
          title: 'Registro creado',
          text: descripcion
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          icon: 'success',
          title: 'Registro creado',
          text: descripcion
        });
      }).catch(e => {
        this.store.dispatch(_shared_ui_actions__WEBPACK_IMPORTED_MODULE_2__.stopLoading());
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          icon: 'error',
          title: 'Error',
          text: e.message
        });
      });
    }

  }

  IngresoEgresoComponent.ɵfac = function IngresoEgresoComponent_Factory(t) {
    return new (t || IngresoEgresoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_ingreso_egreso_service__WEBPACK_IMPORTED_MODULE_3__.IngresoEgresoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
  };

  IngresoEgresoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: IngresoEgresoComponent,
    selectors: [["app-ingreso-egreso"]],
    decls: 30,
    vars: 5,
    consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-description"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "placeholder", "Descripci\u00F3n", "name", "descripcion", "formControlName", "descripcion", 1, "form-control"], ["type", "number", "placeholder", "Monto", "formControlName", "monto", "name", "monto", 1, "form-control"], ["type", "button", "class", "btn btn-primary btn-block", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-warning btn-block", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-success mr-2", 3, "disabled", 4, "ngIf"], ["disabled", "", "class", "btn btn-success mr-2", 4, "ngIf"], ["type", "reset", 1, "btn", "btn-light"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "click"], ["type", "button", 1, "btn", "btn-warning", "btn-block", 3, "click"], ["type", "submit", 1, "btn", "btn-success", "mr-2", 3, "disabled"], [1, "fa", "fa-save"], ["disabled", "", 1, "btn", "btn-success", "mr-2"], [1, "fa", "fa-spin", "fa-sync"]],
    template: function IngresoEgresoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Agregar Ingreso / Egreso");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Especifique el monto y el tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function IngresoEgresoComponent_Template_form_ngSubmit_8_listener() {
          return ctx.crearIngresoEgreso();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Monto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Debe de ser un monto positivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, IngresoEgresoComponent_button_23_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, IngresoEgresoComponent_button_24_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, IngresoEgresoComponent_button_26_Template, 3, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, IngresoEgresoComponent_button_27_Template, 3, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formIngresoEgreso);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tipo === "ingreso");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tipo === "egreso");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
      }
    },
    directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
    encapsulation: 2
  });
  return IngresoEgresoComponent;
})();

/***/ }),

/***/ 5742:
/*!*********************************************************!*\
  !*** ./src/app/ingreso-egreso/ingreso-egreso.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoEgresoModule": () => (/* binding */ IngresoEgresoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dashboard/dashboard.component */ 7528);
/* harmony import */ var _pipes_order_ingresp_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/order-ingresp.pipe */ 191);
/* harmony import */ var _detalle_detalle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle/detalle.component */ 8856);
/* harmony import */ var _estadistica_estadistica_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estadistica/estadistica.component */ 2967);
/* harmony import */ var _ingreso_egreso_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ingreso-egreso.component */ 130);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3075);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard/dashboard-routing.module */ 425);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 5094);
/* harmony import */ var _ingreso_egreso_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ingreso-egreso.reducer */ 8910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 5000);














let IngresoEgresoModule = /*#__PURE__*/(() => {
  class IngresoEgresoModule {}

  IngresoEgresoModule.ɵfac = function IngresoEgresoModule_Factory(t) {
    return new (t || IngresoEgresoModule)();
  };

  IngresoEgresoModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: IngresoEgresoModule
  });
  IngresoEgresoModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forFeature('ingresoEgreso', _ingreso_egreso_reducer__WEBPACK_IMPORTED_MODULE_7__.ingresoEgresoReducer), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__.DashboardRoutingModule]]
  });
  return IngresoEgresoModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](IngresoEgresoModule, {
    declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _ingreso_egreso_component__WEBPACK_IMPORTED_MODULE_4__.IngresoEgresoComponent, _estadistica_estadistica_component__WEBPACK_IMPORTED_MODULE_3__.EstadisticaComponent, _detalle_detalle_component__WEBPACK_IMPORTED_MODULE_2__.DetalleComponent, _pipes_order_ingresp_pipe__WEBPACK_IMPORTED_MODULE_1__.OrderIngrespPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreFeatureModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__.DashboardRoutingModule]
  });
})();

/***/ }),

/***/ 8910:
/*!**********************************************************!*\
  !*** ./src/app/ingreso-egreso/ingreso-egreso.reducer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ingresoEgresoReducer": () => (/* binding */ ingresoEgresoReducer),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5094);
/* harmony import */ var _ingreso_egreso_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingreso-egreso.actions */ 725);


const initialState = {
  items: []
};

const _ingresoEgresoReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ingreso_egreso_actions__WEBPACK_IMPORTED_MODULE_0__.setItems, (state, {
  items
}) => Object.assign(Object.assign({}, state), {
  items: [...items]
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ingreso_egreso_actions__WEBPACK_IMPORTED_MODULE_0__.unSetItems, state => Object.assign(Object.assign({}, state), {
  items: []
})));

function ingresoEgresoReducer(state, action) {
  return _ingresoEgresoReducer(state, action);
}

/***/ }),

/***/ 191:
/*!*********************************************!*\
  !*** ./src/app/pipes/order-ingresp.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderIngrespPipe": () => (/* binding */ OrderIngrespPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);

let OrderIngrespPipe = /*#__PURE__*/(() => {
  class OrderIngrespPipe {
    transform(items) {
      const newItems = [...items];
      return newItems.sort((a, b) => {
        return a.tipo === 'ingreso' ? -1 : 1;
      });
    }

  }

  OrderIngrespPipe.ɵfac = function OrderIngrespPipe_Factory(t) {
    return new (t || OrderIngrespPipe)();
  };

  OrderIngrespPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "orderIngresp",
    type: OrderIngrespPipe,
    pure: true
  });
  return OrderIngrespPipe;
})();

/***/ }),

/***/ 8302:
/*!****************************************************!*\
  !*** ./src/app/services/ingreso-egreso.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoEgresoService": () => (/* binding */ IngresoEgresoService)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 2731);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2962);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 7556);





let IngresoEgresoService = /*#__PURE__*/(() => {
  class IngresoEgresoService {
    constructor(firestore, authService) {
      this.firestore = firestore;
      this.authService = authService;
    }

    crearIngresoEgreso(ingresoEgreso) {
      const {
        uid
      } = this.authService.user;
      const {
        descripcion,
        monto,
        tipo
      } = ingresoEgreso; //Fallaba en firebase por que el uid esta como indefinido  

      return this.firestore.doc(`${uid}/ingresos-egresos`).collection('items').add({
        descripcion,
        monto,
        tipo
      });
    }
    /**
     * Este método es un observable que estara pendiente de
     * los cambios
     * @param uid
     * @returns
     */


    initIngresosEgresosListener(uid) {
      return this.firestore.collection(`${uid}/ingresos-egresos/items`).snapshotChanges().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(snapshot => snapshot.map(doc => Object.assign({
        uid: doc.payload.doc.id
      }, doc.payload.doc.data())))); //.subscribe(console.log);
    }

    borrarIngresoEgreso(uidItem) {
      const uidUser = this.authService.user.uid;
      return this.firestore.doc(`${uidUser}/ingresos-egresos/items/${uidItem}`).delete();
    }

  }

  IngresoEgresoService.ɵfac = function IngresoEgresoService_Factory(t) {
    return new (t || IngresoEgresoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };

  IngresoEgresoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: IngresoEgresoService,
    factory: IngresoEgresoService.ɵfac,
    providedIn: 'root'
  });
  return IngresoEgresoService;
})();

/***/ }),

/***/ 5227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);

let FooterComponent = /*#__PURE__*/(() => {
  class FooterComponent {
    constructor() {}

    ngOnInit() {}

  }

  FooterComponent.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };

  FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 10,
    vars: 0,
    consts: [[1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], ["href", "http://fernando-herrera.com", "target", "_blank"], [1, "float-none", "float-sm-right", "d-block", "mt-1", "mt-sm-0", "text-center"], [1, "fa", "fa-heart", "text-danger"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Derechos reservados \u00A9 20XX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Fernando Herrera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Creado a mano con ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
  return FooterComponent;
})();

/***/ }),

/***/ 4696:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);

let NavbarComponent = /*#__PURE__*/(() => {
  class NavbarComponent {
    constructor() {}

    ngOnInit() {}

  }

  NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)();
  };

  NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    decls: 15,
    vars: 0,
    consts: [[1, "navbar", "default-layout", "col-sm-12", "col-12", "p-0", "fixed-top", "d-flex", "flex-row"], [1, "text-center", "navbar-brand-wrapper", "d-flex", "align-items-top", "justify-content-center"], [1, "navbar-brand", "brand-logo"], ["src", "assets/images/logo.svg", "alt", "logo"], [1, "navbar-brand", "brand-logo-mini"], ["src", "assets/images/logo-mini.svg", "alt", "logo"], [1, "navbar-menu-wrapper", "d-flex", "align-items-center"], [1, "navbar-nav", "navbar-nav-right"], [1, "nav-item", "d-none", "d-sm-inline-block"], ["id", "UserDropdown", "href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link"], [1, "profile-text"], ["src", "assets/images/faces/face1.jpg", "alt", "Profile image", 1, "img-xs", "rounded-circle"], ["type", "button", "data-toggle", "offcanvas", 1, "navbar-toggler", "navbar-toggler-right", "d-sm-none", "align-self-center"], [1, "icon-menu"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Hello, Richard V.Welsh !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
  return NavbarComponent;
})();

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 5227);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ 4696);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 7500);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);






let SharedModule = /*#__PURE__*/(() => {
  class SharedModule {}

  SharedModule.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };

  SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]]
  });
  return SharedModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent]
  });
})();

/***/ }),

/***/ 7500:
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 5094);





let SidebarComponent = /*#__PURE__*/(() => {
  class SidebarComponent {
    constructor(authService, router, store) {
      this.authService = authService;
      this.router = router;
      this.store = store;
    }

    ngOnDestroy() {
      this.userSubs$.unsubscribe();
    }

    ngOnInit() {
      this.username = this.authService.user.nombre;
      this.userSubs$ = this.store.select('user').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.filter)(auth => {
        return auth.user != null;
      })).subscribe(({
        user
      }) => this.username = user === null || user === void 0 ? void 0 : user.nombre);
    }

    logout() {
      this.authService.logout().then(response => {
        this.router.navigate(['/login']);
      });
    }

  }

  SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
    return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
  };

  SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SidebarComponent,
    selectors: [["app-sidebar"]],
    decls: 33,
    vars: 1,
    consts: [[1, "sidebar", "sidebar-offcanvas"], [1, "nav"], [1, "nav-item", "nav-profile"], [1, "nav-link"], [1, "user-wrapper"], [1, "profile-image"], ["src", "assets/images/faces/face1.jpg", "alt", "profile image"], [1, "text-wrapper"], [1, "profile-name"], [1, "designation", "text-muted"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], [1, "menu-icon", "fa", "fa-tachometer-alt"], [1, "menu-title"], ["routerLink", "/ingreso-egreso", 1, "nav-link"], [1, "menu-icon", "fa", "fa-clipboard-list"], ["routerLink", "/detalle", 1, "nav-link"], [1, "menu-icon", "fa", "fa-table"], ["routerLink", "/login", 1, "nav-link", "cursor"], [1, "menu-icon", "fa", "fa-sign-out-alt"], [1, "menu-title", 3, "click"]],
    template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Gerente");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Ingresos y Egresos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_Template_span_click_31_listener() {
          return ctx.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Cerrar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.username);
      }
    },
    directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
    encapsulation: 2
  });
  return SidebarComponent;
})();

/***/ }),

/***/ 4806:
/*!**************************************!*\
  !*** ./src/models/ingreso-egreso.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoEgreso": () => (/* binding */ IngresoEgreso)
/* harmony export */ });
class IngresoEgreso {
  constructor(descripcion, monto, tipo, uid) {
    this.descripcion = descripcion;
    this.monto = monto;
    this.tipo = tipo;
    this.uid = uid;
  }

}

/***/ }),

/***/ 2731:
/*!***********************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractUserDataWriter": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.AbstractUserDataWriter),
/* harmony export */   "Bytes": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Bytes),
/* harmony export */   "CACHE_SIZE_UNLIMITED": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.CACHE_SIZE_UNLIMITED),
/* harmony export */   "CollectionReference": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.CollectionReference),
/* harmony export */   "DocumentReference": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.DocumentReference),
/* harmony export */   "DocumentSnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.DocumentSnapshot),
/* harmony export */   "FieldPath": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.FieldPath),
/* harmony export */   "FieldValue": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.FieldValue),
/* harmony export */   "Firestore": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Firestore),
/* harmony export */   "FirestoreError": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.FirestoreError),
/* harmony export */   "GeoPoint": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.GeoPoint),
/* harmony export */   "LoadBundleTask": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.LoadBundleTask),
/* harmony export */   "Query": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Query),
/* harmony export */   "QueryConstraint": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QueryConstraint),
/* harmony export */   "QueryDocumentSnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QueryDocumentSnapshot),
/* harmony export */   "QuerySnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QuerySnapshot),
/* harmony export */   "SnapshotMetadata": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.SnapshotMetadata),
/* harmony export */   "Timestamp": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Timestamp),
/* harmony export */   "Transaction": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Transaction),
/* harmony export */   "WriteBatch": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.WriteBatch),
/* harmony export */   "_DatabaseId": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._DatabaseId),
/* harmony export */   "_DocumentKey": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._DocumentKey),
/* harmony export */   "_EmptyAppCheckTokenProvider": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._EmptyAppCheckTokenProvider),
/* harmony export */   "_EmptyAuthCredentialsProvider": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._EmptyAuthCredentialsProvider),
/* harmony export */   "_FieldPath": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._FieldPath),
/* harmony export */   "_cast": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._cast),
/* harmony export */   "_debugAssert": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._debugAssert),
/* harmony export */   "_isBase64Available": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._isBase64Available),
/* harmony export */   "_logWarn": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._logWarn),
/* harmony export */   "_setIndexConfiguration": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._setIndexConfiguration),
/* harmony export */   "_validateIsNotUsedTogether": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._validateIsNotUsedTogether),
/* harmony export */   "addDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc),
/* harmony export */   "arrayRemove": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayRemove),
/* harmony export */   "arrayUnion": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion),
/* harmony export */   "clearIndexedDbPersistence": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.clearIndexedDbPersistence),
/* harmony export */   "collection": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection),
/* harmony export */   "collectionGroup": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collectionGroup),
/* harmony export */   "connectFirestoreEmulator": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.connectFirestoreEmulator),
/* harmony export */   "deleteDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc),
/* harmony export */   "deleteField": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteField),
/* harmony export */   "disableNetwork": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.disableNetwork),
/* harmony export */   "doc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc),
/* harmony export */   "documentId": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.documentId),
/* harmony export */   "enableIndexedDbPersistence": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.enableIndexedDbPersistence),
/* harmony export */   "enableMultiTabIndexedDbPersistence": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.enableMultiTabIndexedDbPersistence),
/* harmony export */   "enableNetwork": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.enableNetwork),
/* harmony export */   "endAt": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.endAt),
/* harmony export */   "endBefore": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.endBefore),
/* harmony export */   "ensureFirestoreConfigured": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.ensureFirestoreConfigured),
/* harmony export */   "executeWrite": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.executeWrite),
/* harmony export */   "getDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc),
/* harmony export */   "getDocFromCache": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocFromCache),
/* harmony export */   "getDocFromServer": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocFromServer),
/* harmony export */   "getDocs": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs),
/* harmony export */   "getDocsFromCache": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocsFromCache),
/* harmony export */   "getDocsFromServer": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocsFromServer),
/* harmony export */   "getFirestore": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore),
/* harmony export */   "increment": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.increment),
/* harmony export */   "initializeFirestore": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.initializeFirestore),
/* harmony export */   "limit": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.limit),
/* harmony export */   "limitToLast": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.limitToLast),
/* harmony export */   "loadBundle": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.loadBundle),
/* harmony export */   "namedQuery": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.namedQuery),
/* harmony export */   "onSnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.onSnapshot),
/* harmony export */   "onSnapshotsInSync": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.onSnapshotsInSync),
/* harmony export */   "orderBy": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.orderBy),
/* harmony export */   "query": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query),
/* harmony export */   "queryEqual": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.queryEqual),
/* harmony export */   "refEqual": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.refEqual),
/* harmony export */   "runTransaction": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.runTransaction),
/* harmony export */   "serverTimestamp": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp),
/* harmony export */   "setDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc),
/* harmony export */   "setLogLevel": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setLogLevel),
/* harmony export */   "snapshotEqual": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.snapshotEqual),
/* harmony export */   "startAfter": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.startAfter),
/* harmony export */   "startAt": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.startAt),
/* harmony export */   "terminate": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.terminate),
/* harmony export */   "updateDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc),
/* harmony export */   "waitForPendingWrites": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.waitForPendingWrites),
/* harmony export */   "where": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where),
/* harmony export */   "writeBatch": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)
/* harmony export */ });
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/firestore */ 7512);
 //# sourceMappingURL=index.esm.js.map

/***/ })

}]);