(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_stencil_core_internal_client_lazy_recursive_entry_js_include_entry_js_exclude_sy-c8f7e3"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-tab.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-tab.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteTab: () => (/* binding */ CalciteTab),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.js */ "./node_modules/@esri/calcite-components/dist/components/tab.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const CalciteTab = _tab_js__WEBPACK_IMPORTED_MODULE_0__.T;
const defineCustomElement = _tab_js__WEBPACK_IMPORTED_MODULE_0__.d;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/tab.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/tab.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ Tab),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const CSS = {
  container: "container",
  content: "content",
};

const tabCss = ":host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}.scale-s .content{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m .content{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l .content{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}section,.container{display:none;block-size:100%;inline-size:100%}:host([hidden]){display:none}[hidden]{display:none}";

const Tab = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalTabRegister = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.createEvent)(this, "calciteInternalTabRegister", 6);
    this.guid = `calcite-tab-title-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_1__.g)()}`;
    this.tab = undefined;
    this.selected = false;
    this.scale = "m";
    this.labeledBy = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const id = this.el.id || this.guid;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Host, { "aria-labelledby": this.labeledBy, id: id }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: { [CSS.container]: true, [`scale-${this.scale}`]: true }, role: "tabpanel", tabIndex: this.selected ? 0 : -1 }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("section", { class: CSS.content }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", null)))));
  }
  connectedCallback() {
    this.parentTabsEl = this.el.closest("calcite-tabs");
  }
  componentDidLoad() {
    this.calciteInternalTabRegister.emit();
  }
  disconnectedCallback() {
    // Dispatching to body in order to be listened by other elements that are still connected to the DOM.
    document.body?.dispatchEvent(new CustomEvent("calciteTabUnregister", {
      detail: this.el,
    }));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  internalTabChangeHandler(event) {
    const targetTabsEl = event
      .composedPath()
      .find((el) => el.tagName === "CALCITE-TABS");
    // to allow `<calcite-tabs>` to be nested we need to make sure this
    // `calciteTabChange` event was actually fired from a within the same
    // `<calcite-tabs>` that is the a parent of this tab.
    if (targetTabsEl !== this.parentTabsEl) {
      return;
    }
    if (this.tab) {
      this.selected = this.tab === event.detail.tab;
    }
    else {
      this.getTabIndex().then((index) => {
        this.selected = index === event.detail.tab;
      });
    }
    event.stopPropagation();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Returns the index of the component item within the tab array.
   */
  async getTabIndex() {
    return Array.prototype.indexOf.call((0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.o)(this.el.parentElement.children).filter((el) => el.matches("calcite-tab")), this.el);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * @param tabIds
   * @param titleIds
   * @internal
   */
  async updateAriaInfo(tabIds = [], titleIds = []) {
    this.labeledBy = titleIds[tabIds.indexOf(this.el.id)] || null;
  }
  get el() { return this; }
  static get style() { return tabCss; }
}, [1, "calcite-tab", {
    "tab": [513],
    "selected": [1540],
    "scale": [1],
    "labeledBy": [32],
    "getTabIndex": [64],
    "updateAriaInfo": [64]
  }, [[16, "calciteInternalTabChange", "internalTabChangeHandler"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tab"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tab":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tab);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNTJkMDAxN2YwMWYxODI3ZTE2NmNiZWQyZGVjNzM4ZGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0U7O0FBRWhFLG1CQUFtQixzQ0FBRztBQUN0Qiw0QkFBNEIsc0NBQXFCOztBQUVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1YzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytHO0FBQy9EO0FBQ1Y7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVFQUF1RSxjQUFjLE1BQU0sYUFBYSxnQkFBZ0IsaUJBQWlCLGtCQUFrQixjQUFjLGdCQUFnQixpQkFBaUIsY0FBYyxrQkFBa0Isc0JBQXNCLHNDQUFzQyxpQkFBaUIsa0JBQWtCLHFCQUFxQixzQ0FBc0MsaUJBQWlCLGtCQUFrQix1QkFBdUIscUNBQXFDLG9CQUFvQixtQkFBbUIsYUFBYSxnQkFBZ0IsaUJBQWlCLGdCQUFnQixhQUFhLFNBQVMsYUFBYTs7QUFFM21CLDBCQUEwQiwwRkFBa0IsZUFBZSwrRUFBVztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxtRkFBVztBQUNqRCxxQ0FBcUMsMkNBQUksR0FBRztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlFQUFDLENBQUMsd0VBQUksSUFBSSwyQ0FBMkMsRUFBRSx5RUFBQyxVQUFVLFNBQVMsaUNBQWlDLFdBQVcsVUFBVSxzREFBc0QsRUFBRSx5RUFBQyxjQUFjLG9CQUFvQixFQUFFLHlFQUFDO0FBQzNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDBDQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRThDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC8gbGF6eSBeXFwuXFwvLipcXC5lbnRyeVxcLmpzLiokIGluY2x1ZGU6IFxcLmVudHJ5XFwuanMkIGV4Y2x1ZGU6IFxcLnN5c3RlbVxcLmVudHJ5XFwuanMkIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtdGFiLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy90YWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50IGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmVudHJ5XFxcXC5qcy4qJCBpbmNsdWRlOiBcXFxcLmVudHJ5XFxcXC5qcyQgZXhjbHVkZTogXFxcXC5zeXN0ZW1cXFxcLmVudHJ5XFxcXC5qcyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0OyIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IFQgYXMgVGFiLCBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vdGFiLmpzJztcblxuY29uc3QgQ2FsY2l0ZVRhYiA9IFRhYjtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVUYWIsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgbyBhcyBub2RlTGlzdFRvQXJyYXkgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG59O1xuXG5jb25zdCB0YWJDc3MgPSBcIjpob3N0KFtzZWxlY3RlZF0pIHNlY3Rpb24sOmhvc3QoW3NlbGVjdGVkXSkgLmNvbnRhaW5lcntkaXNwbGF5OmJsb2NrfTpob3N0e2Rpc3BsYXk6bm9uZTtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJX06aG9zdChbc2VsZWN0ZWRdKXtkaXNwbGF5OmJsb2NrO2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO292ZXJmbG93OmF1dG99LnNjYWxlLXMgLmNvbnRlbnR7cGFkZGluZy1ibG9jazowLjI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbX0uc2NhbGUtbSAuY29udGVudHtwYWRkaW5nLWJsb2NrOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW19LnNjYWxlLWwgLmNvbnRlbnR7cGFkZGluZy1ibG9jazowLjYyNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbX1zZWN0aW9uLC5jb250YWluZXJ7ZGlzcGxheTpub25lO2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBUYWIgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFiUmVnaXN0ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYlJlZ2lzdGVyXCIsIDYpO1xuICAgIHRoaXMuZ3VpZCA9IGBjYWxjaXRlLXRhYi10aXRsZS0ke2d1aWQoKX1gO1xuICAgIHRoaXMudGFiID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5sYWJlbGVkQnkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5lbC5pZCB8fCB0aGlzLmd1aWQ7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWxhYmVsbGVkYnlcIjogdGhpcy5sYWJlbGVkQnksIGlkOiBpZCB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5jb250YWluZXJdOiB0cnVlLCBbYHNjYWxlLSR7dGhpcy5zY2FsZX1gXTogdHJ1ZSB9LCByb2xlOiBcInRhYnBhbmVsXCIsIHRhYkluZGV4OiB0aGlzLnNlbGVjdGVkID8gMCA6IC0xIH0sIGgoXCJzZWN0aW9uXCIsIHsgY2xhc3M6IENTUy5jb250ZW50IH0sIGgoXCJzbG90XCIsIG51bGwpKSkpKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnBhcmVudFRhYnNFbCA9IHRoaXMuZWwuY2xvc2VzdChcImNhbGNpdGUtdGFic1wiKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFiUmVnaXN0ZXIuZW1pdCgpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIC8vIERpc3BhdGNoaW5nIHRvIGJvZHkgaW4gb3JkZXIgdG8gYmUgbGlzdGVuZWQgYnkgb3RoZXIgZWxlbWVudHMgdGhhdCBhcmUgc3RpbGwgY29ubmVjdGVkIHRvIHRoZSBET00uXG4gICAgZG9jdW1lbnQuYm9keT8uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjYWxjaXRlVGFiVW5yZWdpc3RlclwiLCB7XG4gICAgICBkZXRhaWw6IHRoaXMuZWwsXG4gICAgfSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGludGVybmFsVGFiQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHRhcmdldFRhYnNFbCA9IGV2ZW50XG4gICAgICAuY29tcG9zZWRQYXRoKClcbiAgICAgIC5maW5kKChlbCkgPT4gZWwudGFnTmFtZSA9PT0gXCJDQUxDSVRFLVRBQlNcIik7XG4gICAgLy8gdG8gYWxsb3cgYDxjYWxjaXRlLXRhYnM+YCB0byBiZSBuZXN0ZWQgd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhpc1xuICAgIC8vIGBjYWxjaXRlVGFiQ2hhbmdlYCBldmVudCB3YXMgYWN0dWFsbHkgZmlyZWQgZnJvbSBhIHdpdGhpbiB0aGUgc2FtZVxuICAgIC8vIGA8Y2FsY2l0ZS10YWJzPmAgdGhhdCBpcyB0aGUgYSBwYXJlbnQgb2YgdGhpcyB0YWIuXG4gICAgaWYgKHRhcmdldFRhYnNFbCAhPT0gdGhpcy5wYXJlbnRUYWJzRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFiKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy50YWIgPT09IGV2ZW50LmRldGFpbC50YWI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5nZXRUYWJJbmRleCgpLnRoZW4oKGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBpbmRleCA9PT0gZXZlbnQuZGV0YWlsLnRhYjtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgY29tcG9uZW50IGl0ZW0gd2l0aGluIHRoZSB0YWIgYXJyYXkuXG4gICAqL1xuICBhc3luYyBnZXRUYWJJbmRleCgpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChub2RlTGlzdFRvQXJyYXkodGhpcy5lbC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKS5maWx0ZXIoKGVsKSA9PiBlbC5tYXRjaGVzKFwiY2FsY2l0ZS10YWJcIikpLCB0aGlzLmVsKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogQHBhcmFtIHRhYklkc1xuICAgKiBAcGFyYW0gdGl0bGVJZHNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyB1cGRhdGVBcmlhSW5mbyh0YWJJZHMgPSBbXSwgdGl0bGVJZHMgPSBbXSkge1xuICAgIHRoaXMubGFiZWxlZEJ5ID0gdGl0bGVJZHNbdGFiSWRzLmluZGV4T2YodGhpcy5lbC5pZCldIHx8IG51bGw7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gdGFiQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXRhYlwiLCB7XG4gICAgXCJ0YWJcIjogWzUxM10sXG4gICAgXCJzZWxlY3RlZFwiOiBbMTU0MF0sXG4gICAgXCJzY2FsZVwiOiBbMV0sXG4gICAgXCJsYWJlbGVkQnlcIjogWzMyXSxcbiAgICBcImdldFRhYkluZGV4XCI6IFs2NF0sXG4gICAgXCJ1cGRhdGVBcmlhSW5mb1wiOiBbNjRdXG4gIH0sIFtbMTYsIFwiY2FsY2l0ZUludGVybmFsVGFiQ2hhbmdlXCIsIFwiaW50ZXJuYWxUYWJDaGFuZ2VIYW5kbGVyXCJdXV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS10YWJcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtdGFiXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgVGFiKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBUYWIgYXMgVCwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=