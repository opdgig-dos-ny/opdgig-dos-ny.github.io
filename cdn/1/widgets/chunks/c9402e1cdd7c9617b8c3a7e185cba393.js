(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_stencil_core_internal_client_lazy_recursive_entry_js_include_entry_js_exclude_sy-dd940d"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-tabs.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-tabs.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteTabs: () => (/* binding */ CalciteTabs),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.js */ "./node_modules/@esri/calcite-components/dist/components/tabs.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const CalciteTabs = _tabs_js__WEBPACK_IMPORTED_MODULE_0__.T;
const defineCustomElement = _tabs_js__WEBPACK_IMPORTED_MODULE_0__.d;




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

/***/ "./node_modules/@esri/calcite-components/dist/components/tabs.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/tabs.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ Tabs),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const SLOTS = {
  titleGroup: "title-group",
};

const tabsCss = ":host{display:flex;flex-direction:column}:host([bordered]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1)}:host([bordered]:not([position=bottom])) ::slotted(calcite-tab-nav){margin-block-end:-1px}:host([bordered][position=bottom]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1), inset 0 -1px 0 var(--calcite-ui-border-1)}:host([bordered]) section{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1)}:host([bordered][scale=s]) section{padding:0.75rem}:host([bordered][scale=m]) section{padding:0.5rem}:host([bordered][scale=l]) section{padding:1rem}:host([position=bottom]){flex-direction:column-reverse}section{display:flex;flex-grow:1;overflow:hidden;border-block-start-width:1px;border-block-start-color:var(--calcite-ui-border-1);border-block-start-style:solid}:host([position=bottom]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px;border-block-end-color:var(--calcite-ui-border-1)}:host([position=bottom]:not([bordered])) section{border-block-end-style:solid}@media (forced-colors: active){:host([bordered]) section{border-block-start-width:0px;border-block-end-width:1px}:host([position=bottom][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}}:host([hidden]){display:none}[hidden]{display:none}";

const Tabs = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_0__.c)("mutation", (mutationsList) => {
      for (const mutation of mutationsList) {
        const target = mutation.target;
        if (target.nodeName === "CALCITE-TAB-NAV" ||
          target.nodeName === "CALCITE-TAB-TITLE" ||
          target.nodeName === "CALCITE-TAB") {
          this.updateItems();
        }
      }
    });
    this.layout = "inline";
    this.position = "top";
    this.scale = "m";
    this.bordered = false;
    this.titles = [];
    this.tabs = [];
  }
  handleInheritableProps() {
    this.updateItems();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.mutationObserver.observe(this.el, { childList: true });
    this.updateItems();
  }
  async componentWillLoad() {
    this.updateItems();
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", { name: SLOTS.titleGroup }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("section", null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  /**
   * @param event
   * @internal
   */
  calciteInternalTabTitleRegister(event) {
    this.titles = [...this.titles, event.target];
    this.registryHandler();
    event.stopPropagation();
  }
  /**
   * @param event
   * @internal
   */
  calciteTabTitleUnregister(event) {
    this.titles = this.titles.filter((el) => el !== event.detail);
    this.registryHandler();
    event.stopPropagation();
  }
  /**
   * @param event
   * @internal
   */
  calciteInternalTabRegister(event) {
    this.tabs = [...this.tabs, event.target];
    this.registryHandler();
    event.stopPropagation();
  }
  /**
   * @param event
   * @internal
   */
  calciteTabUnregister(event) {
    this.tabs = this.tabs.filter((el) => el !== event.detail);
    this.registryHandler();
    event.stopPropagation();
  }
  updateItems() {
    const { position, scale } = this;
    const nav = this.el.querySelector("calcite-tab-nav");
    if (nav) {
      nav.position = position;
      nav.scale = scale;
    }
    Array.from(this.el.querySelectorAll("calcite-tab")).forEach((tab) => {
      if (tab.parentElement === this.el) {
        tab.scale = scale;
      }
    });
    Array.from(this.el.querySelectorAll("calcite-tab-nav > calcite-tab-title")).forEach((title) => {
      title.position = position;
      title.scale = scale;
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   *
   * Matches up elements from the internal `tabs` and `titles` to automatically
   * update the ARIA attributes and link `<calcite-tab>` and
   * `<calcite-tab-title>` components.
   */
  async registryHandler() {
    let tabIds;
    let titleIds;
    // determine if we are using `tab` based or `index` based tab identifiers.
    if (this.tabs.some((el) => el.tab) || this.titles.some((el) => el.tab)) {
      // if we are using `tab` based identifiers sort by `tab` to account for
      // possible out of order tabs and get the id of each tab
      tabIds = this.tabs.sort((a, b) => a.tab.localeCompare(b.tab)).map((el) => el.id);
      titleIds = this.titles.sort((a, b) => a.tab.localeCompare(b.tab)).map((el) => el.id);
    }
    else {
      // if we are using index based tabs then the `<calcite-tab>` and
      // `<calcite-tab-title>` might have been rendered out of order so the
      // order of `this.tabs` and `this.titles` might not reflect the DOM state,
      // and might not match each other so we need to get the index of all the
      // tabs and titles in the DOM order to match them up as a source of truth
      const tabDomIndexes = await Promise.all(this.tabs.map((el) => el.getTabIndex()));
      const titleDomIndexes = await Promise.all(this.titles.map((el) => el.getTabIndex()));
      // once we have the DOM order as a source of truth we can build the
      // matching tabIds and titleIds arrays
      tabIds = tabDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
        ids[indexInDOM] = this.tabs[registryIndex].id;
        return ids;
      }, []);
      titleIds = titleDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
        ids[indexInDOM] = this.titles[registryIndex].id;
        return ids;
      }, []);
    }
    // pass all our new aria information to each `<calcite-tab>` and
    // `<calcite-tab-title>` which will check if they can update their internal
    // `controlled` or `labeledBy` states and re-render if necessary
    this.tabs.forEach((el) => el.updateAriaInfo(tabIds, titleIds));
    this.titles.forEach((el) => el.updateAriaInfo(tabIds, titleIds));
  }
  get el() { return this; }
  static get watchers() { return {
    "position": ["handleInheritableProps"],
    "scale": ["handleInheritableProps"]
  }; }
  static get style() { return tabsCss; }
}, [1, "calcite-tabs", {
    "layout": [513],
    "position": [513],
    "scale": [513],
    "bordered": [4],
    "titles": [32],
    "tabs": [32]
  }, [[0, "calciteInternalTabTitleRegister", "calciteInternalTabTitleRegister"], [16, "calciteTabTitleUnregister", "calciteTabTitleUnregister"], [0, "calciteInternalTabRegister", "calciteInternalTabRegister"], [16, "calciteTabUnregister", "calciteTabUnregister"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tabs"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tabs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tabs);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYzk0MDJlMWNkZDdjOTYxN2I4YzNhN2UxODVjYmEzOTMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0U7O0FBRWxFLG9CQUFvQix1Q0FBSTtBQUN4Qiw0QkFBNEIsdUNBQXFCOztBQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzRztBQUNqRDs7QUFFckQ7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixhQUFhLHNCQUFzQixrQkFBa0Isb0RBQW9ELGdEQUFnRCxvRUFBb0Usc0JBQXNCLG1DQUFtQywrRkFBK0YsMEJBQTBCLGlCQUFpQixtQkFBbUIsd0NBQXdDLG1DQUFtQyxnQkFBZ0IsbUNBQW1DLGVBQWUsbUNBQW1DLGFBQWEseUJBQXlCLDhCQUE4QixRQUFRLGFBQWEsWUFBWSxnQkFBZ0IsNkJBQTZCLG9EQUFvRCwrQkFBK0IsaUNBQWlDLDhCQUE4Qiw2QkFBNkIsMkJBQTJCLGtEQUFrRCxpREFBaUQsNkJBQTZCLCtCQUErQiwwQkFBMEIsNkJBQTZCLDJCQUEyQiwyQ0FBMkMsNkJBQTZCLDRCQUE0QixnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRTkxQywyQkFBMkIsMEZBQWtCLGVBQWUsK0VBQVc7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0RBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxpQkFBaUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5RUFBQyxDQUFDLDRFQUFRLFFBQVEseUVBQUMsV0FBVyx3QkFBd0IsR0FBRyx5RUFBQyxrQkFBa0IseUVBQUM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50LyBsYXp5IF5cXC5cXC8uKlxcLmVudHJ5XFwuanMuKiQgaW5jbHVkZTogXFwuZW50cnlcXC5qcyQgZXhjbHVkZTogXFwuc3lzdGVtXFwuZW50cnlcXC5qcyQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS10YWJzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9vYnNlcnZlcnMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3RhYnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50IGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmVudHJ5XFxcXC5qcy4qJCBpbmNsdWRlOiBcXFxcLmVudHJ5XFxcXC5qcyQgZXhjbHVkZTogXFxcXC5zeXN0ZW1cXFxcLmVudHJ5XFxcXC5qcyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0OyIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IFQgYXMgVGFicywgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL3RhYnMuanMnO1xuXG5jb25zdCBDYWxjaXRlVGFicyA9IFRhYnM7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlVGFicywgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbi8qKlxuICogVGhpcyB1dGlsaXR5IGVuc3VyZXMgb2JzZXJ2ZXJzIGFyZSBjcmVhdGVkIG9ubHkgZm9yIGJyb3dzZXIgY29udGV4dHMuXG4gKlxuICogQHBhcmFtIHR5cGUgLSB0aGUgdHlwZSBvZiBvYnNlcnZlciB0byBjcmVhdGVcbiAqIEBwYXJhbSBjYWxsYmFjayAtIHRoZSBvYnNlcnZlciBjYWxsYmFja1xuICogQHBhcmFtIG9wdGlvbnMgLSB0aGUgb2JzZXJ2ZXIgb3B0aW9uc1xuICovXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgY29uc3QgT2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcih0eXBlKTtcbiAgcmV0dXJuIG5ldyBPYnNlcnZlcihjYWxsYmFjaywgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBnZXRPYnNlcnZlcih0eXBlKSB7XG4gIC8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZG9tL2lzc3Vlcy8xMjYjaXNzdWVjb21tZW50LTEwNDk4MTQ5NDhcbiAgY2xhc3MgRXh0ZW5kZWRNdXRhdGlvbk9ic2VydmVyIGV4dGVuZHMgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XG4gICAgICBzdXBlcihjYWxsYmFjayk7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkgPSBbXTtcbiAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgb2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeS5wdXNoKHsgdGFyZ2V0LCBvcHRpb25zIH0pO1xuICAgICAgcmV0dXJuIHN1cGVyLm9ic2VydmUodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgdW5vYnNlcnZlKHRhcmdldCkge1xuICAgICAgY29uc3QgbmV3T2JzZXJ2ZWRFbnRyaWVzID0gdGhpcy5vYnNlcnZlZEVudHJ5LmZpbHRlcigob2JzZXJ2ZWQpID0+IG9ic2VydmVkLnRhcmdldCAhPT0gdGFyZ2V0KTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayhzdXBlci50YWtlUmVjb3JkcygpLCB0aGlzKTtcbiAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgbmV3T2JzZXJ2ZWRFbnRyaWVzLmZvckVhY2goKG9ic2VydmVkKSA9PiB0aGlzLm9ic2VydmUob2JzZXJ2ZWQudGFyZ2V0LCBvYnNlcnZlZC5vcHRpb25zKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodHlwZSA9PT0gXCJpbnRlcnNlY3Rpb25cIlxuICAgICAgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICAgIDogdHlwZSA9PT0gXCJtdXRhdGlvblwiXG4gICAgICAgID8gRXh0ZW5kZWRNdXRhdGlvbk9ic2VydmVyXG4gICAgICAgIDogd2luZG93LlJlc2l6ZU9ic2VydmVyKTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlT2JzZXJ2ZXIgYXMgYyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgRnJhZ21lbnQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuXG5jb25zdCBTTE9UUyA9IHtcbiAgdGl0bGVHcm91cDogXCJ0aXRsZS1ncm91cFwiLFxufTtcblxuY29uc3QgdGFic0NzcyA9IFwiOmhvc3R7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn06aG9zdChbYm9yZGVyZWRdKXtib3gtc2hhZG93Omluc2V0IDAgMXB4IDAgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2JvcmRlcmVkXTpub3QoW3Bvc2l0aW9uPWJvdHRvbV0pKSA6OnNsb3R0ZWQoY2FsY2l0ZS10YWItbmF2KXttYXJnaW4tYmxvY2stZW5kOi0xcHh9Omhvc3QoW2JvcmRlcmVkXVtwb3NpdGlvbj1ib3R0b21dKXtib3gtc2hhZG93Omluc2V0IDAgMXB4IDAgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSksIGluc2V0IDAgLTFweCAwIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfTpob3N0KFtib3JkZXJlZF0pIHNlY3Rpb257Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfTpob3N0KFtib3JkZXJlZF1bc2NhbGU9c10pIHNlY3Rpb257cGFkZGluZzowLjc1cmVtfTpob3N0KFtib3JkZXJlZF1bc2NhbGU9bV0pIHNlY3Rpb257cGFkZGluZzowLjVyZW19Omhvc3QoW2JvcmRlcmVkXVtzY2FsZT1sXSkgc2VjdGlvbntwYWRkaW5nOjFyZW19Omhvc3QoW3Bvc2l0aW9uPWJvdHRvbV0pe2ZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlfXNlY3Rpb257ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzoxO292ZXJmbG93OmhpZGRlbjtib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6MXB4O2JvcmRlci1ibG9jay1zdGFydC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKTtib3JkZXItYmxvY2stc3RhcnQtc3R5bGU6c29saWR9Omhvc3QoW3Bvc2l0aW9uPWJvdHRvbV0pIHNlY3Rpb257ZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2U7Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjBweDtib3JkZXItYmxvY2stZW5kLXdpZHRoOjFweDtib3JkZXItYmxvY2stZW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfTpob3N0KFtwb3NpdGlvbj1ib3R0b21dOm5vdChbYm9yZGVyZWRdKSkgc2VjdGlvbntib3JkZXItYmxvY2stZW5kLXN0eWxlOnNvbGlkfUBtZWRpYSAoZm9yY2VkLWNvbG9yczogYWN0aXZlKXs6aG9zdChbYm9yZGVyZWRdKSBzZWN0aW9ue2JvcmRlci1ibG9jay1zdGFydC13aWR0aDowcHg7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoxcHh9Omhvc3QoW3Bvc2l0aW9uPWJvdHRvbV1bYm9yZGVyZWRdKSBzZWN0aW9ue2JvcmRlci1ibG9jay1zdGFydC13aWR0aDoxcHg7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDowcHh9fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBUYWJzID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsIChtdXRhdGlvbnNMaXN0KSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lID09PSBcIkNBTENJVEUtVEFCLU5BVlwiIHx8XG4gICAgICAgICAgdGFyZ2V0Lm5vZGVOYW1lID09PSBcIkNBTENJVEUtVEFCLVRJVExFXCIgfHxcbiAgICAgICAgICB0YXJnZXQubm9kZU5hbWUgPT09IFwiQ0FMQ0lURS1UQUJcIikge1xuICAgICAgICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubGF5b3V0ID0gXCJpbmxpbmVcIjtcbiAgICB0aGlzLnBvc2l0aW9uID0gXCJ0b3BcIjtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5ib3JkZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMudGl0bGVzID0gW107XG4gICAgdGhpcy50YWJzID0gW107XG4gIH1cbiAgaGFuZGxlSW5oZXJpdGFibGVQcm9wcygpIHtcbiAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEZyYWdtZW50LCBudWxsLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLnRpdGxlR3JvdXAgfSksIGgoXCJzZWN0aW9uXCIsIG51bGwsIGgoXCJzbG90XCIsIG51bGwpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjYWxjaXRlSW50ZXJuYWxUYWJUaXRsZVJlZ2lzdGVyKGV2ZW50KSB7XG4gICAgdGhpcy50aXRsZXMgPSBbLi4udGhpcy50aXRsZXMsIGV2ZW50LnRhcmdldF07XG4gICAgdGhpcy5yZWdpc3RyeUhhbmRsZXIoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgY2FsY2l0ZVRhYlRpdGxlVW5yZWdpc3RlcihldmVudCkge1xuICAgIHRoaXMudGl0bGVzID0gdGhpcy50aXRsZXMuZmlsdGVyKChlbCkgPT4gZWwgIT09IGV2ZW50LmRldGFpbCk7XG4gICAgdGhpcy5yZWdpc3RyeUhhbmRsZXIoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgY2FsY2l0ZUludGVybmFsVGFiUmVnaXN0ZXIoZXZlbnQpIHtcbiAgICB0aGlzLnRhYnMgPSBbLi4udGhpcy50YWJzLCBldmVudC50YXJnZXRdO1xuICAgIHRoaXMucmVnaXN0cnlIYW5kbGVyKCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNhbGNpdGVUYWJVbnJlZ2lzdGVyKGV2ZW50KSB7XG4gICAgdGhpcy50YWJzID0gdGhpcy50YWJzLmZpbHRlcigoZWwpID0+IGVsICE9PSBldmVudC5kZXRhaWwpO1xuICAgIHRoaXMucmVnaXN0cnlIYW5kbGVyKCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgdXBkYXRlSXRlbXMoKSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgc2NhbGUgfSA9IHRoaXM7XG4gICAgY29uc3QgbmF2ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKFwiY2FsY2l0ZS10YWItbmF2XCIpO1xuICAgIGlmIChuYXYpIHtcbiAgICAgIG5hdi5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgbmF2LnNjYWxlID0gc2NhbGU7XG4gICAgfVxuICAgIEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS10YWJcIikpLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgaWYgKHRhYi5wYXJlbnRFbGVtZW50ID09PSB0aGlzLmVsKSB7XG4gICAgICAgIHRhYi5zY2FsZSA9IHNjYWxlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS10YWItbmF2ID4gY2FsY2l0ZS10YWItdGl0bGVcIikpLmZvckVhY2goKHRpdGxlKSA9PiB7XG4gICAgICB0aXRsZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgdGl0bGUuc2NhbGUgPSBzY2FsZTtcbiAgICB9KTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICpcbiAgICogTWF0Y2hlcyB1cCBlbGVtZW50cyBmcm9tIHRoZSBpbnRlcm5hbCBgdGFic2AgYW5kIGB0aXRsZXNgIHRvIGF1dG9tYXRpY2FsbHlcbiAgICogdXBkYXRlIHRoZSBBUklBIGF0dHJpYnV0ZXMgYW5kIGxpbmsgYDxjYWxjaXRlLXRhYj5gIGFuZFxuICAgKiBgPGNhbGNpdGUtdGFiLXRpdGxlPmAgY29tcG9uZW50cy5cbiAgICovXG4gIGFzeW5jIHJlZ2lzdHJ5SGFuZGxlcigpIHtcbiAgICBsZXQgdGFiSWRzO1xuICAgIGxldCB0aXRsZUlkcztcbiAgICAvLyBkZXRlcm1pbmUgaWYgd2UgYXJlIHVzaW5nIGB0YWJgIGJhc2VkIG9yIGBpbmRleGAgYmFzZWQgdGFiIGlkZW50aWZpZXJzLlxuICAgIGlmICh0aGlzLnRhYnMuc29tZSgoZWwpID0+IGVsLnRhYikgfHwgdGhpcy50aXRsZXMuc29tZSgoZWwpID0+IGVsLnRhYikpIHtcbiAgICAgIC8vIGlmIHdlIGFyZSB1c2luZyBgdGFiYCBiYXNlZCBpZGVudGlmaWVycyBzb3J0IGJ5IGB0YWJgIHRvIGFjY291bnQgZm9yXG4gICAgICAvLyBwb3NzaWJsZSBvdXQgb2Ygb3JkZXIgdGFicyBhbmQgZ2V0IHRoZSBpZCBvZiBlYWNoIHRhYlxuICAgICAgdGFiSWRzID0gdGhpcy50YWJzLnNvcnQoKGEsIGIpID0+IGEudGFiLmxvY2FsZUNvbXBhcmUoYi50YWIpKS5tYXAoKGVsKSA9PiBlbC5pZCk7XG4gICAgICB0aXRsZUlkcyA9IHRoaXMudGl0bGVzLnNvcnQoKGEsIGIpID0+IGEudGFiLmxvY2FsZUNvbXBhcmUoYi50YWIpKS5tYXAoKGVsKSA9PiBlbC5pZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gaWYgd2UgYXJlIHVzaW5nIGluZGV4IGJhc2VkIHRhYnMgdGhlbiB0aGUgYDxjYWxjaXRlLXRhYj5gIGFuZFxuICAgICAgLy8gYDxjYWxjaXRlLXRhYi10aXRsZT5gIG1pZ2h0IGhhdmUgYmVlbiByZW5kZXJlZCBvdXQgb2Ygb3JkZXIgc28gdGhlXG4gICAgICAvLyBvcmRlciBvZiBgdGhpcy50YWJzYCBhbmQgYHRoaXMudGl0bGVzYCBtaWdodCBub3QgcmVmbGVjdCB0aGUgRE9NIHN0YXRlLFxuICAgICAgLy8gYW5kIG1pZ2h0IG5vdCBtYXRjaCBlYWNoIG90aGVyIHNvIHdlIG5lZWQgdG8gZ2V0IHRoZSBpbmRleCBvZiBhbGwgdGhlXG4gICAgICAvLyB0YWJzIGFuZCB0aXRsZXMgaW4gdGhlIERPTSBvcmRlciB0byBtYXRjaCB0aGVtIHVwIGFzIGEgc291cmNlIG9mIHRydXRoXG4gICAgICBjb25zdCB0YWJEb21JbmRleGVzID0gYXdhaXQgUHJvbWlzZS5hbGwodGhpcy50YWJzLm1hcCgoZWwpID0+IGVsLmdldFRhYkluZGV4KCkpKTtcbiAgICAgIGNvbnN0IHRpdGxlRG9tSW5kZXhlcyA9IGF3YWl0IFByb21pc2UuYWxsKHRoaXMudGl0bGVzLm1hcCgoZWwpID0+IGVsLmdldFRhYkluZGV4KCkpKTtcbiAgICAgIC8vIG9uY2Ugd2UgaGF2ZSB0aGUgRE9NIG9yZGVyIGFzIGEgc291cmNlIG9mIHRydXRoIHdlIGNhbiBidWlsZCB0aGVcbiAgICAgIC8vIG1hdGNoaW5nIHRhYklkcyBhbmQgdGl0bGVJZHMgYXJyYXlzXG4gICAgICB0YWJJZHMgPSB0YWJEb21JbmRleGVzLnJlZHVjZSgoaWRzLCBpbmRleEluRE9NLCByZWdpc3RyeUluZGV4KSA9PiB7XG4gICAgICAgIGlkc1tpbmRleEluRE9NXSA9IHRoaXMudGFic1tyZWdpc3RyeUluZGV4XS5pZDtcbiAgICAgICAgcmV0dXJuIGlkcztcbiAgICAgIH0sIFtdKTtcbiAgICAgIHRpdGxlSWRzID0gdGl0bGVEb21JbmRleGVzLnJlZHVjZSgoaWRzLCBpbmRleEluRE9NLCByZWdpc3RyeUluZGV4KSA9PiB7XG4gICAgICAgIGlkc1tpbmRleEluRE9NXSA9IHRoaXMudGl0bGVzW3JlZ2lzdHJ5SW5kZXhdLmlkO1xuICAgICAgICByZXR1cm4gaWRzO1xuICAgICAgfSwgW10pO1xuICAgIH1cbiAgICAvLyBwYXNzIGFsbCBvdXIgbmV3IGFyaWEgaW5mb3JtYXRpb24gdG8gZWFjaCBgPGNhbGNpdGUtdGFiPmAgYW5kXG4gICAgLy8gYDxjYWxjaXRlLXRhYi10aXRsZT5gIHdoaWNoIHdpbGwgY2hlY2sgaWYgdGhleSBjYW4gdXBkYXRlIHRoZWlyIGludGVybmFsXG4gICAgLy8gYGNvbnRyb2xsZWRgIG9yIGBsYWJlbGVkQnlgIHN0YXRlcyBhbmQgcmUtcmVuZGVyIGlmIG5lY2Vzc2FyeVxuICAgIHRoaXMudGFicy5mb3JFYWNoKChlbCkgPT4gZWwudXBkYXRlQXJpYUluZm8odGFiSWRzLCB0aXRsZUlkcykpO1xuICAgIHRoaXMudGl0bGVzLmZvckVhY2goKGVsKSA9PiBlbC51cGRhdGVBcmlhSW5mbyh0YWJJZHMsIHRpdGxlSWRzKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwicG9zaXRpb25cIjogW1wiaGFuZGxlSW5oZXJpdGFibGVQcm9wc1wiXSxcbiAgICBcInNjYWxlXCI6IFtcImhhbmRsZUluaGVyaXRhYmxlUHJvcHNcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gdGFic0NzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS10YWJzXCIsIHtcbiAgICBcImxheW91dFwiOiBbNTEzXSxcbiAgICBcInBvc2l0aW9uXCI6IFs1MTNdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJib3JkZXJlZFwiOiBbNF0sXG4gICAgXCJ0aXRsZXNcIjogWzMyXSxcbiAgICBcInRhYnNcIjogWzMyXVxuICB9LCBbWzAsIFwiY2FsY2l0ZUludGVybmFsVGFiVGl0bGVSZWdpc3RlclwiLCBcImNhbGNpdGVJbnRlcm5hbFRhYlRpdGxlUmVnaXN0ZXJcIl0sIFsxNiwgXCJjYWxjaXRlVGFiVGl0bGVVbnJlZ2lzdGVyXCIsIFwiY2FsY2l0ZVRhYlRpdGxlVW5yZWdpc3RlclwiXSwgWzAsIFwiY2FsY2l0ZUludGVybmFsVGFiUmVnaXN0ZXJcIiwgXCJjYWxjaXRlSW50ZXJuYWxUYWJSZWdpc3RlclwiXSwgWzE2LCBcImNhbGNpdGVUYWJVbnJlZ2lzdGVyXCIsIFwiY2FsY2l0ZVRhYlVucmVnaXN0ZXJcIl1dXSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXRhYnNcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtdGFic1wiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIFRhYnMpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IFRhYnMgYXMgVCwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=