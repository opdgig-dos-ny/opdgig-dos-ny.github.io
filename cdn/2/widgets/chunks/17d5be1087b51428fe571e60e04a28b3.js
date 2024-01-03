(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_stencil_core_internal_client_lazy_recursive_entry_js_include_entry_js_exclude_sy-196e30"],{

/***/ "./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-tile.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-tile.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteTile: () => (/* binding */ CalciteTile),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.js */ "./node_modules/@esri/calcite-components/dist/components/tile.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const CalciteTile = _tile_js__WEBPACK_IMPORTED_MODULE_0__.T;
const defineCustomElement = _tile_js__WEBPACK_IMPORTED_MODULE_0__.d;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectConditionalSlotComponent),
/* harmony export */   d: () => (/* binding */ disconnectConditionalSlotComponent)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const observed = new Set();
let mutationObserver;
const observerOptions = { childList: true };
/**
 * Helper to set up a conditional slot component on connectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function connectConditionalSlotComponent(component) {
  if (!mutationObserver) {
    mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_0__.c)("mutation", processMutations);
  }
  mutationObserver.observe(component.el, observerOptions);
}
/**
 * Helper to tear down a conditional slot component on disconnectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function disconnectConditionalSlotComponent(component) {
  observed.delete(component.el);
  // we explicitly process queued mutations and disconnect and reconnect
  // the observer until MutationObserver gets an `unobserve` method
  // see https://github.com/whatwg/dom/issues/126
  processMutations(mutationObserver.takeRecords());
  mutationObserver.disconnect();
  for (const [element] of observed.entries()) {
    mutationObserver.observe(element, observerOptions);
  }
}
function processMutations(mutations) {
  mutations.forEach(({ target }) => {
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.forceUpdate)(target);
  });
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/tile.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/tile.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ Tile),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./link.js */ "./node_modules/@esri/calcite-components/dist/components/link.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */







const SLOTS = {
  contentStart: "content-start",
  contentEnd: "content-end",
};

const tileCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{box-sizing:border-box;display:inline-block;-webkit-user-select:none;user-select:none;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .container{pointer-events:none;display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));gap:0.5rem}:host .content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;gap:0.5rem;inline-size:10%}:host .content-container{display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;padding:0px;color:var(--calcite-ui-text-2);outline-color:transparent}:host .content-slot-container{display:flex;align-items:center;background-color:var(--calcite-ui-foreground-1)}:host .content-slot-container:first-child{padding-inline:0 0.75rem}:host .content-slot-container:last-child{padding-inline:0.75rem 0}:host .heading{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .large-visual{align-items:center;text-align:center;min-block-size:12rem}:host .large-visual .icon{display:flex;justify-content:center;align-self:flex-end}:host .large-visual .content-container{align-self:center}:host .description{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([href]) .heading,:host([href]:hover) .heading{text-decoration-line:underline;color:var(--calcite-ui-text-link)}:host(:not([embed])){padding:0.75rem;box-shadow:0 0 0 1px var(--calcite-ui-border-2)}:host(:not([embed])[href]:hover){cursor:pointer;box-shadow:0 0 0 2px var(--calcite-ui-brand)}:host(:not([embed])[href]:active){box-shadow:0 0 0 3px var(--calcite-ui-brand)}:host([icon][heading]:not([description]):not([embed])){padding:0px}:host([icon][heading]:not([description])) .icon{display:flex;justify-content:center}:host([icon][heading]:not([description])) .large-visual{text-align:center}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host(:hover) .heading,:host([active]) .heading{color:var(--calcite-ui-text-1)}:host(:hover) .description,:host([active]) .description{color:var(--calcite-ui-text-2)}:host([hidden]){display:none}[hidden]{display:none}";

const Tile = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.active = false;
    this.description = undefined;
    this.disabled = false;
    this.embed = false;
    this.focused = false;
    this.heading = undefined;
    this.hidden = false;
    this.href = undefined;
    this.icon = undefined;
    this.iconFlipRtl = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderTile() {
    const { icon, el, heading, description, iconFlipRtl } = this;
    const isLargeVisual = heading && icon && !description;
    const iconStyle = isLargeVisual
      ? {
        height: "64px",
        width: "64px",
      }
      : undefined;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: { container: true, "large-visual": isLargeVisual } }, icon && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: "icon" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("calcite-icon", { flipRtl: iconFlipRtl, icon: icon, scale: "l", style: iconStyle }))), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: "content-container" }, (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.contentStart) ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: "content-slot-container" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { name: SLOTS.contentStart }))) : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: "content" }, heading && (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: "heading" }, heading), description && (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: "description" }, description)), (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.contentEnd) ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: "content-slot-container" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { name: SLOTS.contentEnd }))) : null)));
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, this.href ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("calcite-link", { disabled: this.disabled, href: this.href }, this.renderTile())) : (this.renderTile())));
  }
  get el() { return this; }
  static get style() { return tileCss; }
}, [1, "calcite-tile", {
    "active": [516],
    "description": [513],
    "disabled": [516],
    "embed": [516],
    "focused": [516],
    "heading": [513],
    "hidden": [516],
    "href": [513],
    "icon": [513],
    "iconFlipRtl": [516, "icon-flip-rtl"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tile", "calcite-icon", "calcite-link"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tile":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tile);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_3__.d)();
      }
      break;
    case "calcite-link":
      if (!customElements.get(tagName)) {
        (0,_link_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMTdkNWJlMTA4N2I1MTQyOGZlNTcxZTYwZTA0YTI4YjMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0U7O0FBRWxFLG9CQUFvQix1Q0FBSTtBQUN4Qiw0QkFBNEIsdUNBQXFCOztBQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVjVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUU7QUFDaEI7O0FBRXJEO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0VBQXdFO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdEQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdFQUF3RTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IsSUFBSSxtRkFBVztBQUNmLEdBQUc7QUFDSDs7QUFFeUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdER6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NHO0FBQ2U7QUFDMUU7QUFDd0U7QUFDNUQ7QUFDQTs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLHNCQUFzQixxQkFBcUIseUJBQXlCLGlCQUFpQixnREFBZ0QsK0JBQStCLDBCQUEwQix3REFBd0QsaUJBQWlCLG9CQUFvQixhQUFhLGdEQUFnRCxXQUFXLGVBQWUsYUFBYSxjQUFjLHNCQUFzQix1QkFBdUIsV0FBVyxnQkFBZ0IseUJBQXlCLGFBQWEsaUJBQWlCLGNBQWMsb0JBQW9CLFlBQVksK0JBQStCLDBCQUEwQiw4QkFBOEIsYUFBYSxtQkFBbUIsZ0RBQWdELDBDQUEwQyx5QkFBeUIseUNBQXlDLHlCQUF5QixlQUFlLG9CQUFvQix5QkFBeUIsc0NBQXNDLGtCQUFrQiw4Q0FBOEMsK0JBQStCLDBCQUEwQix3REFBd0Qsb0JBQW9CLG1CQUFtQixrQkFBa0IscUJBQXFCLDBCQUEwQixhQUFhLHVCQUF1QixvQkFBb0IsdUNBQXVDLGtCQUFrQixtQkFBbUIsb0JBQW9CLHlCQUF5QixzQ0FBc0Msa0JBQWtCLCtCQUErQiwwQkFBMEIsd0RBQXdELG9EQUFvRCwrQkFBK0Isa0NBQWtDLHFCQUFxQixnQkFBZ0IsZ0RBQWdELGlDQUFpQyxlQUFlLDZDQUE2QyxrQ0FBa0MsNkNBQTZDLHVEQUF1RCxZQUFZLGdEQUFnRCxhQUFhLHVCQUF1Qix3REFBd0Qsa0JBQWtCLHlHQUF5RyxVQUFVLGdEQUFnRCwrQkFBK0Isd0RBQXdELCtCQUErQixnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRWxyRiwyQkFBMkIsMEZBQWtCLGVBQWUsK0VBQVc7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBK0I7QUFDbkMsSUFBSSxrREFBa0I7QUFDdEI7QUFDQTtBQUNBLElBQUksc0RBQWtDO0FBQ3RDLElBQUksa0RBQXFCO0FBQ3pCO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOENBQThDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5RUFBQyxVQUFVLFNBQVMsa0RBQWtELFdBQVcseUVBQUMsVUFBVSxlQUFlLEVBQUUseUVBQUMsbUJBQW1CLGdFQUFnRSxLQUFLLHlFQUFDLFVBQVUsNEJBQTRCLEVBQUUsMENBQVUsNEJBQTRCLHlFQUFDLFVBQVUsaUNBQWlDLEVBQUUseUVBQUMsV0FBVywwQkFBMEIsWUFBWSx5RUFBQyxVQUFVLGtCQUFrQixhQUFhLHlFQUFDLFVBQVUsa0JBQWtCLDJCQUEyQix5RUFBQyxVQUFVLHNCQUFzQixpQkFBaUIsMENBQVUsMEJBQTBCLHlFQUFDLFVBQVUsaUNBQWlDLEVBQUUseUVBQUMsV0FBVyx3QkFBd0I7QUFDM29CO0FBQ0E7QUFDQSxZQUFZLHlFQUFDLENBQUMsNEVBQVEscUJBQXFCLHlFQUFDLG1CQUFtQiwwQ0FBMEM7QUFDekc7QUFDQSxhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJDQUFxQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRStDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC8gbGF6eSBeXFwuXFwvLipcXC5lbnRyeVxcLmpzLiokIGluY2x1ZGU6IFxcLmVudHJ5XFwuanMkIGV4Y2x1ZGU6IFxcLnN5c3RlbVxcLmVudHJ5XFwuanMkIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtdGlsZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29uZGl0aW9uYWxTbG90LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy90aWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudCBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5lbnRyeVxcXFwuanMuKiQgaW5jbHVkZTogXFxcXC5lbnRyeVxcXFwuanMkIGV4Y2x1ZGU6IFxcXFwuc3lzdGVtXFxcXC5lbnRyeVxcXFwuanMkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDsiLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBUIGFzIFRpbGUsIGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi90aWxlLmpzJztcblxuY29uc3QgQ2FsY2l0ZVRpbGUgPSBUaWxlO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZVRpbGUsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGZvcmNlVXBkYXRlIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcblxuY29uc3Qgb2JzZXJ2ZWQgPSBuZXcgU2V0KCk7XG5sZXQgbXV0YXRpb25PYnNlcnZlcjtcbmNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgcHJvY2Vzc011dGF0aW9ucyk7XG4gIH1cbiAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudC5lbCwgb2JzZXJ2ZXJPcHRpb25zKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBvYnNlcnZlZC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgLy8gd2UgZXhwbGljaXRseSBwcm9jZXNzIHF1ZXVlZCBtdXRhdGlvbnMgYW5kIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdFxuICAvLyB0aGUgb2JzZXJ2ZXIgdW50aWwgTXV0YXRpb25PYnNlcnZlciBnZXRzIGFuIGB1bm9ic2VydmVgIG1ldGhvZFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNlxuICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBmb3IgKGNvbnN0IFtlbGVtZW50XSBvZiBvYnNlcnZlZC5lbnRyaWVzKCkpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBmb3JjZVVwZGF0ZSh0YXJnZXQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBjLCBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGgsIEZyYWdtZW50IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmRpdGlvbmFsU2xvdC5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFNsb3R0ZWQgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMiB9IGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vbGluay5qcyc7XG5cbmNvbnN0IFNMT1RTID0ge1xuICBjb250ZW50U3RhcnQ6IFwiY29udGVudC1zdGFydFwiLFxuICBjb250ZW50RW5kOiBcImNvbnRlbnQtZW5kXCIsXG59O1xuXG5jb25zdCB0aWxlQ3NzID0gXCI6aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTppbmxpbmUtYmxvY2s7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKX06aG9zdCAuY29udGFpbmVye3BvaW50ZXItZXZlbnRzOm5vbmU7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO2dhcDowLjVyZW19Omhvc3QgLmNvbnRlbnR7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7Z2FwOjAuNXJlbTtpbmxpbmUtc2l6ZToxMCV9Omhvc3QgLmNvbnRlbnQtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2ZsZXg6MSAxIGF1dG87YWxpZ24taXRlbXM6c3RyZXRjaDtwYWRkaW5nOjBweDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH06aG9zdCAuY29udGVudC1zbG90LWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0IC5jb250ZW50LXNsb3QtY29udGFpbmVyOmZpcnN0LWNoaWxke3BhZGRpbmctaW5saW5lOjAgMC43NXJlbX06aG9zdCAuY29udGVudC1zbG90LWNvbnRhaW5lcjpsYXN0LWNoaWxke3BhZGRpbmctaW5saW5lOjAuNzVyZW0gMH06aG9zdCAuaGVhZGluZ3twb2ludGVyLWV2ZW50czpub25lO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjEuMzc1O2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7dHJhbnNpdGlvbi1kdXJhdGlvbjoxNTBtczt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpfTpob3N0IC5sYXJnZS12aXN1YWx7YWxpZ24taXRlbXM6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyO21pbi1ibG9jay1zaXplOjEycmVtfTpob3N0IC5sYXJnZS12aXN1YWwgLmljb257ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24tc2VsZjpmbGV4LWVuZH06aG9zdCAubGFyZ2UtdmlzdWFsIC5jb250ZW50LWNvbnRhaW5lcnthbGlnbi1zZWxmOmNlbnRlcn06aG9zdCAuZGVzY3JpcHRpb257cG9pbnRlci1ldmVudHM6bm9uZTtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxLjM3NTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7dHJhbnNpdGlvbi1kdXJhdGlvbjoxNTBtczt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpfTpob3N0KFtocmVmXSkgLmhlYWRpbmcsOmhvc3QoW2hyZWZdOmhvdmVyKSAuaGVhZGluZ3t0ZXh0LWRlY29yYXRpb24tbGluZTp1bmRlcmxpbmU7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LWxpbmspfTpob3N0KDpub3QoW2VtYmVkXSkpe3BhZGRpbmc6MC43NXJlbTtib3gtc2hhZG93OjAgMCAwIDFweCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0yKX06aG9zdCg6bm90KFtlbWJlZF0pW2hyZWZdOmhvdmVyKXtjdXJzb3I6cG9pbnRlcjtib3gtc2hhZG93OjAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdCg6bm90KFtlbWJlZF0pW2hyZWZdOmFjdGl2ZSl7Ym94LXNoYWRvdzowIDAgMCAzcHggdmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW2ljb25dW2hlYWRpbmddOm5vdChbZGVzY3JpcHRpb25dKTpub3QoW2VtYmVkXSkpe3BhZGRpbmc6MHB4fTpob3N0KFtpY29uXVtoZWFkaW5nXTpub3QoW2Rlc2NyaXB0aW9uXSkpIC5pY29ue2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfTpob3N0KFtpY29uXVtoZWFkaW5nXTpub3QoW2Rlc2NyaXB0aW9uXSkpIC5sYXJnZS12aXN1YWx7dGV4dC1hbGlnbjpjZW50ZXJ9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0KDpob3ZlcikgLmhlYWRpbmcsOmhvc3QoW2FjdGl2ZV0pIC5oZWFkaW5ne2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCg6aG92ZXIpIC5kZXNjcmlwdGlvbiw6aG9zdChbYWN0aXZlXSkgLmRlc2NyaXB0aW9ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgVGlsZSA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmVtYmVkID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5oZWFkaW5nID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5ocmVmID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gZmFsc2U7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJUaWxlKCkge1xuICAgIGNvbnN0IHsgaWNvbiwgZWwsIGhlYWRpbmcsIGRlc2NyaXB0aW9uLCBpY29uRmxpcFJ0bCB9ID0gdGhpcztcbiAgICBjb25zdCBpc0xhcmdlVmlzdWFsID0gaGVhZGluZyAmJiBpY29uICYmICFkZXNjcmlwdGlvbjtcbiAgICBjb25zdCBpY29uU3R5bGUgPSBpc0xhcmdlVmlzdWFsXG4gICAgICA/IHtcbiAgICAgICAgaGVpZ2h0OiBcIjY0cHhcIixcbiAgICAgICAgd2lkdGg6IFwiNjRweFwiLFxuICAgICAgfVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IHsgY29udGFpbmVyOiB0cnVlLCBcImxhcmdlLXZpc3VhbFwiOiBpc0xhcmdlVmlzdWFsIH0gfSwgaWNvbiAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImljb25cIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgZmxpcFJ0bDogaWNvbkZsaXBSdGwsIGljb246IGljb24sIHNjYWxlOiBcImxcIiwgc3R5bGU6IGljb25TdHlsZSB9KSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LCBnZXRTbG90dGVkKGVsLCBTTE9UUy5jb250ZW50U3RhcnQpID8gKGgoXCJkaXZcIiwgeyBjbGFzczogXCJjb250ZW50LXNsb3QtY29udGFpbmVyXCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5jb250ZW50U3RhcnQgfSkpKSA6IG51bGwsIGgoXCJkaXZcIiwgeyBjbGFzczogXCJjb250ZW50XCIgfSwgaGVhZGluZyAmJiBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGVhZGluZ1wiIH0sIGhlYWRpbmcpLCBkZXNjcmlwdGlvbiAmJiBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiZGVzY3JpcHRpb25cIiB9LCBkZXNjcmlwdGlvbikpLCBnZXRTbG90dGVkKGVsLCBTTE9UUy5jb250ZW50RW5kKSA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiY29udGVudC1zbG90LWNvbnRhaW5lclwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuY29udGVudEVuZCB9KSkpIDogbnVsbCkpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEZyYWdtZW50LCBudWxsLCB0aGlzLmhyZWYgPyAoaChcImNhbGNpdGUtbGlua1wiLCB7IGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBocmVmOiB0aGlzLmhyZWYgfSwgdGhpcy5yZW5kZXJUaWxlKCkpKSA6ICh0aGlzLnJlbmRlclRpbGUoKSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiB0aWxlQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXRpbGVcIiwge1xuICAgIFwiYWN0aXZlXCI6IFs1MTZdLFxuICAgIFwiZGVzY3JpcHRpb25cIjogWzUxM10sXG4gICAgXCJkaXNhYmxlZFwiOiBbNTE2XSxcbiAgICBcImVtYmVkXCI6IFs1MTZdLFxuICAgIFwiZm9jdXNlZFwiOiBbNTE2XSxcbiAgICBcImhlYWRpbmdcIjogWzUxM10sXG4gICAgXCJoaWRkZW5cIjogWzUxNl0sXG4gICAgXCJocmVmXCI6IFs1MTNdLFxuICAgIFwiaWNvblwiOiBbNTEzXSxcbiAgICBcImljb25GbGlwUnRsXCI6IFs1MTYsIFwiaWNvbi1mbGlwLXJ0bFwiXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXRpbGVcIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWxpbmtcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtdGlsZVwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIFRpbGUpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1saW5rXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBUaWxlIGFzIFQsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9