(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_stencil_core_internal_client_lazy_recursive_entry_js_include_entry_js_exclude_sy-b0ea05"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-dropdown-group.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-dropdown-group.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteDropdownGroup: () => (/* binding */ CalciteDropdownGroup),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _resources2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources2.js */ "./node_modules/@esri/calcite-components/dist/components/resources2.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const dropdownGroupCss = ":host{position:relative;display:block}.container{text-align:start}.container--s{font-size:var(--calcite-font-size--2);line-height:1rem}.container--s .dropdown-title{padding:0.5rem}.container--m{font-size:var(--calcite-font-size--1);line-height:1rem}.container--m .dropdown-title{padding:0.75rem}.container--l{font-size:var(--calcite-font-size-0);line-height:1.25rem}.container--l .dropdown-title{padding:1rem}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-ui-border-3)}:host([hidden]){display:none}[hidden]{display:none}";

const DropdownGroup = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalDropdownItemChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.createEvent)(this, "calciteInternalDropdownItemChange", 6);
    this.updateItems = () => {
      Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach((item) => (item.selectionMode = this.selectionMode));
    };
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_0__.c)("mutation", () => this.updateItems());
    this.groupTitle = undefined;
    this.scale = "m";
    this.selectionMode = "single";
  }
  handlePropsChange() {
    this.updateItems();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.updateItems();
    this.mutationObserver?.observe(this.el, { childList: true });
  }
  componentWillLoad() {
    this.groupPosition = this.getGroupPosition();
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
  }
  render() {
    const groupTitle = this.groupTitle ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("span", { "aria-hidden": "true", class: "dropdown-title" }, this.groupTitle)) : null;
    const dropdownSeparator = this.groupPosition > 0 ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: "dropdown-separator", role: "separator" }) : null;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Host, { "aria-label": this.groupTitle, role: "group" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: {
        [_resources2_js__WEBPACK_IMPORTED_MODULE_1__.C.container]: true,
        [`${_resources2_js__WEBPACK_IMPORTED_MODULE_1__.C.container}--${this.scale}`]: true,
      } }, dropdownSeparator, groupTitle, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", null))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  updateActiveItemOnChange(event) {
    this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
    this.requestedDropdownItem = event.detail.requestedDropdownItem;
    this.calciteInternalDropdownItemChange.emit({
      requestedDropdownGroup: this.requestedDropdownGroup,
      requestedDropdownItem: this.requestedDropdownItem,
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  getGroupPosition() {
    return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"), this.el);
  }
  static get delegatesFocus() { return true; }
  get el() { return this; }
  static get watchers() { return {
    "selectionMode": ["handlePropsChange"]
  }; }
  static get style() { return dropdownGroupCss; }
}, [17, "calcite-dropdown-group", {
    "groupTitle": [513, "group-title"],
    "scale": [1],
    "selectionMode": [513, "selection-mode"]
  }, [[0, "calciteInternalDropdownItemSelect", "updateActiveItemOnChange"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-dropdown-group"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-dropdown-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DropdownGroup);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteDropdownGroup = DropdownGroup;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/observers.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/observers.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createObserver)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
function createObserver(type, callback, options) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return undefined;
  }
  const Observer = getObserver(type);
  return new Observer(callback, options);
}
function getObserver(type) {
  // based on https://github.com/whatwg/dom/issues/126#issuecomment-1049814948
  class ExtendedMutationObserver extends window.MutationObserver {
    constructor(callback) {
      super(callback);
      this.observedEntry = [];
      this.callback = callback;
    }
    observe(target, options) {
      this.observedEntry.push({ target, options });
      return super.observe(target, options);
    }
    unobserve(target) {
      const newObservedEntries = this.observedEntry.filter((observed) => observed.target !== target);
      this.observedEntry = [];
      this.callback(super.takeRecords(), this);
      this.disconnect();
      newObservedEntries.forEach((observed) => this.observe(observed.target, observed.options));
    }
  }
  return (function () {
    return (type === "intersection"
      ? window.IntersectionObserver
      : type === "mutation"
        ? ExtendedMutationObserver
        : window.ResizeObserver);
  })();
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/resources2.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/resources2.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CSS)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const CSS = {
  container: "container",
  containerLink: "container--link",
  containerMulti: "container--multi-selection",
  containerSingle: "container--single-selection",
  containerNone: "container--none-selection",
  icon: "dropdown-item-icon",
  iconEnd: "dropdown-item-icon-end",
  iconStart: "dropdown-item-icon-start",
  itemContent: "dropdown-item-content",
  link: "dropdown-link",
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNzI2Y2NlYThiNzljYWJlZTY2NTMxMmU5YjJmYzJkMjMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRztBQUMxRDtBQUNWOztBQUUzQyxnQ0FBZ0Msa0JBQWtCLGNBQWMsV0FBVyxpQkFBaUIsY0FBYyxzQ0FBc0MsaUJBQWlCLDhCQUE4QixlQUFlLGNBQWMsc0NBQXNDLGlCQUFpQiw4QkFBOEIsZ0JBQWdCLGNBQWMscUNBQXFDLG9CQUFvQiw4QkFBOEIsYUFBYSxnQkFBZ0Isc0JBQXNCLGNBQWMsZUFBZSx5QkFBeUIsaUJBQWlCLDJCQUEyQixtQkFBbUIsd0NBQXdDLDRDQUE0QywrQkFBK0Isb0JBQW9CLGNBQWMsZUFBZSw0Q0FBNEMsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUVqMUIsb0NBQW9DLDBGQUFrQixlQUFlLCtFQUFXO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLG1GQUFXO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnREFBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGlCQUFpQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHlFQUFDLFdBQVcsZ0RBQWdEO0FBQ3RHLHVEQUF1RCx5RUFBQyxVQUFVLGdEQUFnRDtBQUNsSCxZQUFZLHlFQUFDLENBQUMsd0VBQUksSUFBSSw4Q0FBOEMsRUFBRSx5RUFBQyxVQUFVO0FBQ2pGLFNBQVMsNkNBQUc7QUFDWixZQUFZLDZDQUFHLFdBQVcsSUFBSSxXQUFXO0FBQ3pDLFNBQVMsaUNBQWlDLHlFQUFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckdyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50LyBsYXp5IF5cXC5cXC8uKlxcLmVudHJ5XFwuanMuKiQgaW5jbHVkZTogXFwuZW50cnlcXC5qcyQgZXhjbHVkZTogXFwuc3lzdGVtXFwuZW50cnlcXC5qcyQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS1kcm9wZG93bi1ncm91cC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvb2JzZXJ2ZXJzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9yZXNvdXJjZXMyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudCBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5lbnRyeVxcXFwuanMuKiQgaW5jbHVkZTogXFxcXC5lbnRyeVxcXFwuanMkIGV4Y2x1ZGU6IFxcXFwuc3lzdGVtXFxcXC5lbnRyeVxcXFwuanMkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDsiLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5pbXBvcnQgeyBDIGFzIENTUyB9IGZyb20gJy4vcmVzb3VyY2VzMi5qcyc7XG5cbmNvbnN0IGRyb3Bkb3duR3JvdXBDc3MgPSBcIjpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2t9LmNvbnRhaW5lcnt0ZXh0LWFsaWduOnN0YXJ0fS5jb250YWluZXItLXN7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtfS5jb250YWluZXItLXMgLmRyb3Bkb3duLXRpdGxle3BhZGRpbmc6MC41cmVtfS5jb250YWluZXItLW17Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfS5jb250YWluZXItLW0gLmRyb3Bkb3duLXRpdGxle3BhZGRpbmc6MC43NXJlbX0uY29udGFpbmVyLS1se2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtfS5jb250YWluZXItLWwgLmRyb3Bkb3duLXRpdGxle3BhZGRpbmc6MXJlbX0uZHJvcGRvd24tdGl0bGV7bWFyZ2luLWJsb2NrLWVuZDotMXB4O2Rpc3BsYXk6YmxvY2s7Y3Vyc29yOmRlZmF1bHQ7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkO2JvcmRlci13aWR0aDowcHg7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWJvbGQpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX0uZHJvcGRvd24tc2VwYXJhdG9ye2Rpc3BsYXk6YmxvY2s7YmxvY2stc2l6ZToxcHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgRHJvcGRvd25Hcm91cCA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEcm9wZG93bkl0ZW1DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbUNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLnVwZGF0ZUl0ZW1zID0gKCkgPT4ge1xuICAgICAgQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWRyb3Bkb3duLWl0ZW1cIikpLmZvckVhY2goKGl0ZW0pID0+IChpdGVtLnNlbGVjdGlvbk1vZGUgPSB0aGlzLnNlbGVjdGlvbk1vZGUpKTtcbiAgICB9O1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gdGhpcy51cGRhdGVJdGVtcygpKTtcbiAgICB0aGlzLmdyb3VwVGl0bGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9IFwic2luZ2xlXCI7XG4gIH1cbiAgaGFuZGxlUHJvcHNDaGFuZ2UoKSB7XG4gICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5ncm91cFBvc2l0aW9uID0gdGhpcy5nZXRHcm91cFBvc2l0aW9uKCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGdyb3VwVGl0bGUgPSB0aGlzLmdyb3VwVGl0bGUgPyAoaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogXCJkcm9wZG93bi10aXRsZVwiIH0sIHRoaXMuZ3JvdXBUaXRsZSkpIDogbnVsbDtcbiAgICBjb25zdCBkcm9wZG93blNlcGFyYXRvciA9IHRoaXMuZ3JvdXBQb3NpdGlvbiA+IDAgPyBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiZHJvcGRvd24tc2VwYXJhdG9yXCIsIHJvbGU6IFwic2VwYXJhdG9yXCIgfSkgOiBudWxsO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmdyb3VwVGl0bGUsIHJvbGU6IFwiZ3JvdXBcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jb250YWluZXJdOiB0cnVlLFxuICAgICAgICBbYCR7Q1NTLmNvbnRhaW5lcn0tLSR7dGhpcy5zY2FsZX1gXTogdHJ1ZSxcbiAgICAgIH0gfSwgZHJvcGRvd25TZXBhcmF0b3IsIGdyb3VwVGl0bGUsIGgoXCJzbG90XCIsIG51bGwpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVwZGF0ZUFjdGl2ZUl0ZW1PbkNoYW5nZShldmVudCkge1xuICAgIHRoaXMucmVxdWVzdGVkRHJvcGRvd25Hcm91cCA9IGV2ZW50LmRldGFpbC5yZXF1ZXN0ZWREcm9wZG93bkdyb3VwO1xuICAgIHRoaXMucmVxdWVzdGVkRHJvcGRvd25JdGVtID0gZXZlbnQuZGV0YWlsLnJlcXVlc3RlZERyb3Bkb3duSXRlbTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbUNoYW5nZS5lbWl0KHtcbiAgICAgIHJlcXVlc3RlZERyb3Bkb3duR3JvdXA6IHRoaXMucmVxdWVzdGVkRHJvcGRvd25Hcm91cCxcbiAgICAgIHJlcXVlc3RlZERyb3Bkb3duSXRlbTogdGhpcy5yZXF1ZXN0ZWREcm9wZG93bkl0ZW0sXG4gICAgfSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0R3JvdXBQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLmVsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtZHJvcGRvd24tZ3JvdXBcIiksIHRoaXMuZWwpO1xuICB9XG4gIHN0YXRpYyBnZXQgZGVsZWdhdGVzRm9jdXMoKSB7IHJldHVybiB0cnVlOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcInNlbGVjdGlvbk1vZGVcIjogW1wiaGFuZGxlUHJvcHNDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gZHJvcGRvd25Hcm91cENzczsgfVxufSwgWzE3LCBcImNhbGNpdGUtZHJvcGRvd24tZ3JvdXBcIiwge1xuICAgIFwiZ3JvdXBUaXRsZVwiOiBbNTEzLCBcImdyb3VwLXRpdGxlXCJdLFxuICAgIFwic2NhbGVcIjogWzFdLFxuICAgIFwic2VsZWN0aW9uTW9kZVwiOiBbNTEzLCBcInNlbGVjdGlvbi1tb2RlXCJdXG4gIH0sIFtbMCwgXCJjYWxjaXRlSW50ZXJuYWxEcm9wZG93bkl0ZW1TZWxlY3RcIiwgXCJ1cGRhdGVBY3RpdmVJdGVtT25DaGFuZ2VcIl1dXSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtZHJvcGRvd24tZ3JvdXBcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtZHJvcGRvd24tZ3JvdXBcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBEcm9wZG93bkdyb3VwKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG5cbmNvbnN0IENhbGNpdGVEcm9wZG93bkdyb3VwID0gRHJvcGRvd25Hcm91cDtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVEcm9wZG93bkdyb3VwLCBkZWZpbmVDdXN0b21FbGVtZW50IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgZW5zdXJlcyBvYnNlcnZlcnMgYXJlIGNyZWF0ZWQgb25seSBmb3IgYnJvd3NlciBjb250ZXh0cy5cbiAqXG4gKiBAcGFyYW0gdHlwZSAtIHRoZSB0eXBlIG9mIG9ic2VydmVyIHRvIGNyZWF0ZVxuICogQHBhcmFtIGNhbGxiYWNrIC0gdGhlIG9ic2VydmVyIGNhbGxiYWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIHRoZSBvYnNlcnZlciBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCBPYnNlcnZlciA9IGdldE9ic2VydmVyKHR5cGUpO1xuICByZXR1cm4gbmV3IE9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGdldE9ic2VydmVyKHR5cGUpIHtcbiAgLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNiNpc3N1ZWNvbW1lbnQtMTA0OTgxNDk0OFxuICBjbGFzcyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXIgZXh0ZW5kcyB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcbiAgICAgIHN1cGVyKGNhbGxiYWNrKTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICBvYnNlcnZlKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5LnB1c2goeyB0YXJnZXQsIG9wdGlvbnMgfSk7XG4gICAgICByZXR1cm4gc3VwZXIub2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICB1bm9ic2VydmUodGFyZ2V0KSB7XG4gICAgICBjb25zdCBuZXdPYnNlcnZlZEVudHJpZXMgPSB0aGlzLm9ic2VydmVkRW50cnkuZmlsdGVyKChvYnNlcnZlZCkgPT4gb2JzZXJ2ZWQudGFyZ2V0ICE9PSB0YXJnZXQpO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrKHN1cGVyLnRha2VSZWNvcmRzKCksIHRoaXMpO1xuICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICBuZXdPYnNlcnZlZEVudHJpZXMuZm9yRWFjaCgob2JzZXJ2ZWQpID0+IHRoaXMub2JzZXJ2ZShvYnNlcnZlZC50YXJnZXQsIG9ic2VydmVkLm9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0eXBlID09PSBcImludGVyc2VjdGlvblwiXG4gICAgICA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlclxuICAgICAgOiB0eXBlID09PSBcIm11dGF0aW9uXCJcbiAgICAgICAgPyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXJcbiAgICAgICAgOiB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIpO1xuICB9KSgpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVPYnNlcnZlciBhcyBjIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgY29udGFpbmVyTGluazogXCJjb250YWluZXItLWxpbmtcIixcbiAgY29udGFpbmVyTXVsdGk6IFwiY29udGFpbmVyLS1tdWx0aS1zZWxlY3Rpb25cIixcbiAgY29udGFpbmVyU2luZ2xlOiBcImNvbnRhaW5lci0tc2luZ2xlLXNlbGVjdGlvblwiLFxuICBjb250YWluZXJOb25lOiBcImNvbnRhaW5lci0tbm9uZS1zZWxlY3Rpb25cIixcbiAgaWNvbjogXCJkcm9wZG93bi1pdGVtLWljb25cIixcbiAgaWNvbkVuZDogXCJkcm9wZG93bi1pdGVtLWljb24tZW5kXCIsXG4gIGljb25TdGFydDogXCJkcm9wZG93bi1pdGVtLWljb24tc3RhcnRcIixcbiAgaXRlbUNvbnRlbnQ6IFwiZHJvcGRvd24taXRlbS1jb250ZW50XCIsXG4gIGxpbms6IFwiZHJvcGRvd24tbGlua1wiLFxufTtcblxuZXhwb3J0IHsgQ1NTIGFzIEMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==