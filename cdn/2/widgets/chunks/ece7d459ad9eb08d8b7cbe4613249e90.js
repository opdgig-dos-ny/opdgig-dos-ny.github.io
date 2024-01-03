(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_stencil_core_internal_client_lazy_recursive_entry_js_include_entry_js_exclude_sy-fc5dd0"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-navigation-user.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-navigation-user.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteNavigationUser: () => (/* binding */ CalciteNavigationUser),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _avatar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.js */ "./node_modules/@esri/calcite-components/dist/components/avatar.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */





const CSS = {
  textContainer: "text-container",
  fullName: "full-name",
  username: "username",
  button: "button",
};

const navigationUserCss = ":host{display:inline-flex;outline:2px solid transparent;outline-offset:2px}:host .button{background-color:transparent;border:none;margin:0px;display:flex;cursor:pointer;align-items:center;justify-content:center;font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size-0);line-height:1.25rem;outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end:2px solid transparent}:host(:hover) .button,:host(:focus) .button{background-color:var(--calcite-ui-foreground-2)}:host(:focus) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host(:active) .button{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}calcite-avatar{padding-inline:1rem}calcite-avatar~.text-container{padding-inline-start:0px}:host([active]) .button{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1);--calcite-ui-icon-color:var(--calcite-ui-brand)}.text-container{margin-block-start:0.125rem;display:flex;flex-direction:column;padding-inline:1rem;text-align:start}.full-name{margin-inline-start:0px;font-size:var(--calcite-font-size-0);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.username{color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host([hidden]){display:none}[hidden]{display:none}";

const CalciteNavigationUser$1 = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.active = undefined;
    this.fullName = undefined;
    this.label = undefined;
    this.textDisabled = false;
    this.thumbnail = undefined;
    this.userId = undefined;
    this.username = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_0__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_0__.s)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("button", { "aria-label": this.label, class: CSS.button }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("calcite-avatar", { "full-name": this.fullName, label: this.label, thumbnail: this.thumbnail, "user-id": this.userId, username: this.username }), (this.fullName || this.username) && !this.textDisabled && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("div", { class: CSS.textContainer }, this.fullName && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("span", { class: CSS.fullName, key: CSS.fullName }, this.fullName)), this.username && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("span", { class: CSS.username, key: CSS.username }, this.username)))))));
  }
  static get delegatesFocus() { return true; }
  get el() { return this; }
  static get style() { return navigationUserCss; }
}, [17, "calcite-navigation-user", {
    "active": [516],
    "fullName": [1, "full-name"],
    "label": [1],
    "textDisabled": [516, "text-disabled"],
    "thumbnail": [1],
    "userId": [1, "user-id"],
    "username": [1],
    "setFocus": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-navigation-user", "calcite-avatar", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-navigation-user":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalciteNavigationUser$1);
      }
      break;
    case "calcite-avatar":
      if (!customElements.get(tagName)) {
        (0,_avatar_js__WEBPACK_IMPORTED_MODULE_1__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_2__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteNavigationUser = CalciteNavigationUser$1;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/loadable.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/loadable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ setUpLoadableComponent),
/* harmony export */   b: () => (/* binding */ componentLoaded),
/* harmony export */   c: () => (/* binding */ componentFocusable),
/* harmony export */   s: () => (/* binding */ setComponentLoaded)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const resolveMap = new WeakMap();
const promiseMap = new WeakMap();
/**
 * This helper util sets up the component for the ability to know when the component has been loaded.
 *
 * This should be used in the `componentWillLoad` lifecycle hook.
 *
 * ```
 * componentWillLoad(): void {
 *   setUpLoadableComponent(this);
 * }
 * ```
 *
 * @param component
 */
function setUpLoadableComponent(component) {
  promiseMap.set(component, new Promise((resolve) => resolveMap.set(component, resolve)));
}
/**
 * This helper util lets the loadable component know that it is now loaded.
 *
 * This should be used in the `componentDidLoad` lifecycle hook.
 *
 * ```
 * componentDidLoad(): void {
 *   setComponentLoaded(this);
 * }
 * ```
 *
 * @param component
 */
function setComponentLoaded(component) {
  resolveMap.get(component)();
}
/**
 * This helper util can be used to ensure a component has been loaded (The "componentDidLoad" Stencil lifecycle method has been called).
 *
 * Requires requires `LoadableComponent` to be implemented.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first.
 *
 * ```
 * async myMethod(): Promise<void> {
 *   await componentLoaded(this);
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
function componentLoaded(component) {
  return promiseMap.get(component);
}
/**
 * This helper util can be used to ensuring the component is loaded and rendered by the browser (The "componentDidLoad" Stencil lifecycle method has been called and any internal elements are focusable).
 *
 * Requires requires `LoadableComponent` to be implemented.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first and then an internal element be focused.
 *
 * ```
 * async setFocus(): Promise<void> {
 *   await componentFocusable(this);
 *   this.internalElement?.focus();
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
async function componentFocusable(component) {
  await componentLoaded(component);
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return;
  }
  (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.forceUpdate)(component);
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZWNlN2Q0NTlhZDllYjA4ZDhiN2NiZTQ2MTMyNDllOTAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0c7QUFDWTtBQUNyRDtBQUNGOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG9CQUFvQiw4QkFBOEIsbUJBQW1CLGNBQWMsNkJBQTZCLFlBQVksV0FBVyxhQUFhLGVBQWUsbUJBQW1CLHVCQUF1Qix1Q0FBdUMscUNBQXFDLG9CQUFvQiwwQkFBMEIsNkZBQTZGLHVDQUF1Qyw0Q0FBNEMsZ0RBQWdELHNCQUFzQix5RUFBeUUscVBBQXFQLHVCQUF1QixnREFBZ0QsK0JBQStCLGVBQWUsb0JBQW9CLCtCQUErQix5QkFBeUIsd0JBQXdCLHFDQUFxQywrQkFBK0IsZ0RBQWdELGdCQUFnQiw0QkFBNEIsYUFBYSxzQkFBc0Isb0JBQW9CLGlCQUFpQixXQUFXLHdCQUF3QixxQ0FBcUMsOENBQThDLCtCQUErQixVQUFVLCtCQUErQixzQ0FBc0MsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUVwbkQsOENBQThDLDBGQUFrQixlQUFlLCtFQUFXO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrQ0FBa0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQXNCO0FBQzFCO0FBQ0E7QUFDQSxJQUFJLCtDQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseUVBQUMsQ0FBQyx3RUFBSSxRQUFRLHlFQUFDLGFBQWEsNkNBQTZDLEVBQUUseUVBQUMscUJBQXFCLDJIQUEySCw4REFBOEQseUVBQUMsVUFBVSwwQkFBMEIsb0JBQW9CLHlFQUFDLFdBQVcsd0NBQXdDLHFDQUFxQyx5RUFBQyxXQUFXLHdDQUF3QztBQUM1ZTtBQUNBLGdDQUFnQztBQUNoQyxhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQXFCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEU7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUVBQUs7QUFDWjtBQUNBO0FBQ0EsRUFBRSxtRkFBVztBQUNiO0FBQ0E7O0FBRStHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC8gbGF6eSBeXFwuXFwvLipcXC5lbnRyeVxcLmpzLiokIGluY2x1ZGU6IFxcLmVudHJ5XFwuanMkIGV4Y2x1ZGU6IFxcLnN5c3RlbVxcLmVudHJ5XFwuanMkIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtbmF2aWdhdGlvbi11c2VyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sb2FkYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChbXSk7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuZW50cnlcXFxcLmpzLiokIGluY2x1ZGU6IFxcXFwuZW50cnlcXFxcLmpzJCBleGNsdWRlOiBcXFxcLnN5c3RlbVxcXFwuZW50cnlcXFxcLmpzJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7IiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlLCBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vYXZhdGFyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9pY29uLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICB0ZXh0Q29udGFpbmVyOiBcInRleHQtY29udGFpbmVyXCIsXG4gIGZ1bGxOYW1lOiBcImZ1bGwtbmFtZVwiLFxuICB1c2VybmFtZTogXCJ1c2VybmFtZVwiLFxuICBidXR0b246IFwiYnV0dG9uXCIsXG59O1xuXG5jb25zdCBuYXZpZ2F0aW9uVXNlckNzcyA9IFwiOmhvc3R7ZGlzcGxheTppbmxpbmUtZmxleDtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHh9Omhvc3QgLmJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO21hcmdpbjowcHg7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZvbnQtZmFtaWx5OnZhcigtLWNhbGNpdGUtc2Fucy1mYW1pbHkpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7Ym9yZGVyLWJsb2NrLWVuZDoycHggc29saWQgdHJhbnNwYXJlbnR9Omhvc3QoOmhvdmVyKSAuYnV0dG9uLDpob3N0KDpmb2N1cykgLmJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX06aG9zdCg6Zm9jdXMpIC5idXR0b257b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTpob3N0KDphY3RpdmUpIC5idXR0b257YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfWNhbGNpdGUtYXZhdGFye3BhZGRpbmctaW5saW5lOjFyZW19Y2FsY2l0ZS1hdmF0YXJ+LnRleHQtY29udGFpbmVye3BhZGRpbmctaW5saW5lLXN0YXJ0OjBweH06aG9zdChbYWN0aXZlXSkgLmJ1dHRvbntib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpOy0tY2FsY2l0ZS11aS1pY29uLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS50ZXh0LWNvbnRhaW5lcnttYXJnaW4tYmxvY2stc3RhcnQ6MC4xMjVyZW07ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwYWRkaW5nLWlubGluZToxcmVtO3RleHQtYWxpZ246c3RhcnR9LmZ1bGwtbmFtZXttYXJnaW4taW5saW5lLXN0YXJ0OjBweDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0udXNlcm5hbWV7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IENhbGNpdGVOYXZpZ2F0aW9uVXNlciQxID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZ1bGxOYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50ZXh0RGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnRodW1ibmFpbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVzZXJJZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVzZXJuYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5sYWJlbCwgY2xhc3M6IENTUy5idXR0b24gfSwgaChcImNhbGNpdGUtYXZhdGFyXCIsIHsgXCJmdWxsLW5hbWVcIjogdGhpcy5mdWxsTmFtZSwgbGFiZWw6IHRoaXMubGFiZWwsIHRodW1ibmFpbDogdGhpcy50aHVtYm5haWwsIFwidXNlci1pZFwiOiB0aGlzLnVzZXJJZCwgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUgfSksICh0aGlzLmZ1bGxOYW1lIHx8IHRoaXMudXNlcm5hbWUpICYmICF0aGlzLnRleHREaXNhYmxlZCAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MudGV4dENvbnRhaW5lciB9LCB0aGlzLmZ1bGxOYW1lICYmIChoKFwic3BhblwiLCB7IGNsYXNzOiBDU1MuZnVsbE5hbWUsIGtleTogQ1NTLmZ1bGxOYW1lIH0sIHRoaXMuZnVsbE5hbWUpKSwgdGhpcy51c2VybmFtZSAmJiAoaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLnVzZXJuYW1lLCBrZXk6IENTUy51c2VybmFtZSB9LCB0aGlzLnVzZXJuYW1lKSkpKSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGRlbGVnYXRlc0ZvY3VzKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBuYXZpZ2F0aW9uVXNlckNzczsgfVxufSwgWzE3LCBcImNhbGNpdGUtbmF2aWdhdGlvbi11c2VyXCIsIHtcbiAgICBcImFjdGl2ZVwiOiBbNTE2XSxcbiAgICBcImZ1bGxOYW1lXCI6IFsxLCBcImZ1bGwtbmFtZVwiXSxcbiAgICBcImxhYmVsXCI6IFsxXSxcbiAgICBcInRleHREaXNhYmxlZFwiOiBbNTE2LCBcInRleHQtZGlzYWJsZWRcIl0sXG4gICAgXCJ0aHVtYm5haWxcIjogWzFdLFxuICAgIFwidXNlcklkXCI6IFsxLCBcInVzZXItaWRcIl0sXG4gICAgXCJ1c2VybmFtZVwiOiBbMV0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1uYXZpZ2F0aW9uLXVzZXJcIiwgXCJjYWxjaXRlLWF2YXRhclwiLCBcImNhbGNpdGUtaWNvblwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1uYXZpZ2F0aW9uLXVzZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBDYWxjaXRlTmF2aWdhdGlvblVzZXIkMSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1hdmF0YXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlTmF2aWdhdGlvblVzZXIgPSBDYWxjaXRlTmF2aWdhdGlvblVzZXIkMTtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVOYXZpZ2F0aW9uVXNlciwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQsIGZvcmNlVXBkYXRlIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBTdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyByZXF1aXJlcyBgTG9hZGFibGVDb21wb25lbnRgIHRvIGJlIGltcGxlbWVudGVkLlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QuXG4gKlxuICogYGBgXG4gKiBhc3luYyBteU1ldGhvZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5mdW5jdGlvbiBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBwcm9taXNlTWFwLmdldChjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyaW5nIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkIGFuZCByZW5kZXJlZCBieSB0aGUgYnJvd3NlciAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIFN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQgYW5kIGFueSBpbnRlcm5hbCBlbGVtZW50cyBhcmUgZm9jdXNhYmxlKS5cbiAqXG4gKiBSZXF1aXJlcyByZXF1aXJlcyBgTG9hZGFibGVDb21wb25lbnRgIHRvIGJlIGltcGxlbWVudGVkLlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QgYW5kIHRoZW4gYW4gaW50ZXJuYWwgZWxlbWVudCBiZSBmb2N1c2VkLlxuICpcbiAqIGBgYFxuICogYXN5bmMgc2V0Rm9jdXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAqICAgdGhpcy5pbnRlcm5hbEVsZW1lbnQ/LmZvY3VzKCk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvbXBvbmVudEZvY3VzYWJsZShjb21wb25lbnQpIHtcbiAgYXdhaXQgY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCk7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvcmNlVXBkYXRlKGNvbXBvbmVudCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJlc29sdmUoKSkpO1xufVxuXG5leHBvcnQgeyBzZXRVcExvYWRhYmxlQ29tcG9uZW50IGFzIGEsIGNvbXBvbmVudExvYWRlZCBhcyBiLCBjb21wb25lbnRGb2N1c2FibGUgYXMgYywgc2V0Q29tcG9uZW50TG9hZGVkIGFzIHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==