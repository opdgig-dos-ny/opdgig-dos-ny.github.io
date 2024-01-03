(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_stencil_core_internal_client_lazy_recursive_entry_js_include_entry_js_exclude_sy-ddfbf7"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-combobox-item-group.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-combobox-item-group.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteComboboxItemGroup: () => (/* binding */ CalciteComboboxItemGroup),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _utils2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils2.js */ "./node_modules/@esri/calcite-components/dist/components/utils2.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const CSS = {
  list: "list",
  label: "label",
  title: "title",
};

const comboboxItemGroupCss = ".scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent:1rem}:host,.list{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),.list:focus{outline:2px solid transparent;outline-offset:2px}.label{box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:0px;max-inline-size:100%;color:var(--calcite-ui-text-3)}.title{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  );border:0 solid;display:block;flex:1 1 0%;border-block-end-width:1px;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2);word-wrap:break-word;word-break:break-word;border-block-end-color:var(--calcite-ui-border-3);padding-block:var(--calcite-combobox-item-spacing-unit-l);padding-inline:var(--calcite-combobox-item-spacing-unit-s);margin-inline-start:var(--calcite-combobox-item-indent-value)}::slotted(calcite-combobox-item-group:not([after-empty-group])){padding-block-start:var(--calcite-combobox-item-spacing-unit-l)}:host([hidden]){display:none}[hidden]{display:none}";

const ComboboxItemGroup = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.guid = (0,_guid_js__WEBPACK_IMPORTED_MODULE_0__.g)();
    this.afterEmptyGroup = false;
    this.ancestors = undefined;
    this.label = undefined;
    this.scale = "m";
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.ancestors = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { el, scale } = this;
    const depth = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_1__.a)(el);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("ul", { "aria-labelledby": this.guid, class: { [CSS.list]: true, [`scale--${scale}`]: true }, role: "group" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("li", { class: { [CSS.label]: true }, id: this.guid, role: "presentation", style: { "--calcite-combobox-item-spacing-indent-multiplier": `${depth}` } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("span", { class: CSS.title }, this.label)), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", null)));
  }
  get el() { return this; }
  static get style() { return comboboxItemGroupCss; }
}, [1, "calcite-combobox-item-group", {
    "afterEmptyGroup": [516, "after-empty-group"],
    "ancestors": [1040],
    "label": [1],
    "scale": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-combobox-item-group"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-combobox-item-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ComboboxItemGroup);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteComboboxItemGroup = ComboboxItemGroup;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/utils2.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/utils2.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CSS),
/* harmony export */   a: () => (/* binding */ getDepth),
/* harmony export */   b: () => (/* binding */ ComboboxChildSelector),
/* harmony export */   c: () => (/* binding */ getItemAncestors),
/* harmony export */   d: () => (/* binding */ getItemChildren),
/* harmony export */   e: () => (/* binding */ ComboboxItem),
/* harmony export */   f: () => (/* binding */ ComboboxItemGroup),
/* harmony export */   g: () => (/* binding */ getAncestors),
/* harmony export */   h: () => (/* binding */ hasActiveChildren),
/* harmony export */   i: () => (/* binding */ isSingleLike)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const ComboboxItem = "CALCITE-COMBOBOX-ITEM";
const ComboboxItemGroup = "CALCITE-COMBOBOX-ITEM-GROUP";
const ComboboxChildSelector = `${ComboboxItem}, ${ComboboxItemGroup}`;
const CSS = {
  chipInvisible: "chip--invisible",
  selectionDisplayFit: "selection-display-fit",
  selectionDisplaySingle: "selection-display-single",
  listContainer: "list-container",
};

function getAncestors(element) {
  const parent = element.parentElement?.closest(ComboboxChildSelector);
  const grandparent = parent?.parentElement?.closest(ComboboxChildSelector);
  return [parent, grandparent].filter((el) => el);
}
function getItemAncestors(item) {
  return (item.ancestors?.filter((el) => el.nodeName === "CALCITE-COMBOBOX-ITEM") || []);
}
function getItemChildren(item) {
  return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.o)(item.querySelectorAll("calcite-combobox-item"));
}
function hasActiveChildren(node) {
  const items = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.o)(node.querySelectorAll("calcite-combobox-item"));
  return items.filter((item) => item.selected).length > 0;
}
function getDepth(element) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Build.isBrowser) {
    return 0;
  }
  const result = document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group", element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  return result.snapshotLength;
}
function isSingleLike(selectionMode) {
  return selectionMode.includes("single");
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvY2FkZDg5MmQ3Y2ZmN2E4NjNkYWRkYmUzNzVlM2QwZWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0RjtBQUN0RDtBQUN5Qjs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0Msc0NBQXNDLGlCQUFpQiw4Q0FBOEMsK0NBQStDLDhDQUE4QyxVQUFVLHNDQUFzQyxpQkFBaUIsK0NBQStDLDhDQUE4QywrQ0FBK0MsVUFBVSxxQ0FBcUMsb0JBQW9CLDRDQUE0QywrQ0FBK0MsNENBQTRDLFlBQVksV0FBVyxhQUFhLHNCQUFzQixZQUFZLDBCQUEwQiw4QkFBOEIsbUJBQW1CLE9BQU8sc0JBQXNCLGFBQWEsaUJBQWlCLG9CQUFvQixxQkFBcUIsK0JBQStCLE9BQU8sMEpBQTBKLGVBQWUsY0FBYyxZQUFZLDJCQUEyQiw0Q0FBNEMsK0JBQStCLHFCQUFxQixzQkFBc0Isa0RBQWtELDBEQUEwRCwyREFBMkQsOERBQThELGdFQUFnRSxnRUFBZ0UsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUV4b0Qsd0NBQXdDLDBGQUFrQixlQUFlLCtFQUFXO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkNBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFlBQVk7QUFDeEIsa0JBQWtCLDZDQUFRO0FBQzFCLFlBQVkseUVBQUMsU0FBUyx1Q0FBdUMsNkJBQTZCLE1BQU0sVUFBVSxpQkFBaUIsRUFBRSx5RUFBQyxTQUFTLFNBQVMsbUJBQW1CLGdEQUFnRCx3REFBd0QsTUFBTSxLQUFLLEVBQUUseUVBQUMsV0FBVyxrQkFBa0IsZ0JBQWdCLHlFQUFDO0FBQ3ZVO0FBQ0EsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnRDtBQUNlOztBQUUvRDtBQUNBO0FBQ0EsaUNBQWlDLGFBQWEsSUFBSSxrQkFBa0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMENBQWU7QUFDeEI7QUFDQTtBQUNBLGdCQUFnQiwwQ0FBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlFQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50LyBsYXp5IF5cXC5cXC8uKlxcLmVudHJ5XFwuanMuKiQgaW5jbHVkZTogXFwuZW50cnlcXC5qcyQgZXhjbHVkZTogXFwuc3lzdGVtXFwuZW50cnlcXC5qcyQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS1jb21ib2JveC1pdGVtLWdyb3VwLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy91dGlsczIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50IGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmVudHJ5XFxcXC5qcy4qJCBpbmNsdWRlOiBcXFxcLmVudHJ5XFxcXC5qcyQgZXhjbHVkZTogXFxcXC5zeXN0ZW1cXFxcLmVudHJ5XFxcXC5qcyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0OyIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRBbmNlc3RvcnMsIGEgYXMgZ2V0RGVwdGggfSBmcm9tICcuL3V0aWxzMi5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgbGlzdDogXCJsaXN0XCIsXG4gIGxhYmVsOiBcImxhYmVsXCIsXG4gIHRpdGxlOiBcInRpdGxlXCIsXG59O1xuXG5jb25zdCBjb21ib2JveEl0ZW1Hcm91cENzcyA9IFwiLnNjYWxlLS1ze2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbDowLjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LXM6MC4yNXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLWluZGVudDowLjVyZW19LnNjYWxlLS1te2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbDowLjc1cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zOjAuNXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLWluZGVudDowLjc1cmVtfS5zY2FsZS0tbHtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbDoxcmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zOjAuNzVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQ6MXJlbX06aG9zdCwubGlzdHttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cGFkZGluZzowcHh9Omhvc3QoOmZvY3VzKSwubGlzdDpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHh9LmxhYmVse2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTttaW4taW5saW5lLXNpemU6MHB4O21heC1pbmxpbmUtc2l6ZToxMDAlO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX0udGl0bGV7LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0taW5kZW50LXZhbHVlOmNhbGMoXFxuICAgIHZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLWluZGVudCkgKiB2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQtbXVsdGlwbGllcilcXG4gICk7Ym9yZGVyOjAgc29saWQ7ZGlzcGxheTpibG9jaztmbGV4OjEgMSAwJTtib3JkZXItYmxvY2stZW5kLXdpZHRoOjFweDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWJvbGQpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTt3b3JkLXdyYXA6YnJlYWstd29yZDt3b3JkLWJyZWFrOmJyZWFrLXdvcmQ7Ym9yZGVyLWJsb2NrLWVuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtwYWRkaW5nLWJsb2NrOnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbCk7cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zKTttYXJnaW4taW5saW5lLXN0YXJ0OnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1pbmRlbnQtdmFsdWUpfTo6c2xvdHRlZChjYWxjaXRlLWNvbWJvYm94LWl0ZW0tZ3JvdXA6bm90KFthZnRlci1lbXB0eS1ncm91cF0pKXtwYWRkaW5nLWJsb2NrLXN0YXJ0OnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbCl9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IENvbWJvYm94SXRlbUdyb3VwID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmd1aWQgPSBndWlkKCk7XG4gICAgdGhpcy5hZnRlckVtcHR5R3JvdXAgPSBmYWxzZTtcbiAgICB0aGlzLmFuY2VzdG9ycyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuYW5jZXN0b3JzID0gZ2V0QW5jZXN0b3JzKHRoaXMuZWwpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgc2NhbGUgfSA9IHRoaXM7XG4gICAgY29uc3QgZGVwdGggPSBnZXREZXB0aChlbCk7XG4gICAgcmV0dXJuIChoKFwidWxcIiwgeyBcImFyaWEtbGFiZWxsZWRieVwiOiB0aGlzLmd1aWQsIGNsYXNzOiB7IFtDU1MubGlzdF06IHRydWUsIFtgc2NhbGUtLSR7c2NhbGV9YF06IHRydWUgfSwgcm9sZTogXCJncm91cFwiIH0sIGgoXCJsaVwiLCB7IGNsYXNzOiB7IFtDU1MubGFiZWxdOiB0cnVlIH0sIGlkOiB0aGlzLmd1aWQsIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsIHN0eWxlOiB7IFwiLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQtbXVsdGlwbGllclwiOiBgJHtkZXB0aH1gIH0gfSwgaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLnRpdGxlIH0sIHRoaXMubGFiZWwpKSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBjb21ib2JveEl0ZW1Hcm91cENzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1jb21ib2JveC1pdGVtLWdyb3VwXCIsIHtcbiAgICBcImFmdGVyRW1wdHlHcm91cFwiOiBbNTE2LCBcImFmdGVyLWVtcHR5LWdyb3VwXCJdLFxuICAgIFwiYW5jZXN0b3JzXCI6IFsxMDQwXSxcbiAgICBcImxhYmVsXCI6IFsxXSxcbiAgICBcInNjYWxlXCI6IFsxXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtY29tYm9ib3gtaXRlbS1ncm91cFwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1jb21ib2JveC1pdGVtLWdyb3VwXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgQ29tYm9ib3hJdGVtR3JvdXApO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZUNvbWJvYm94SXRlbUdyb3VwID0gQ29tYm9ib3hJdGVtR3JvdXA7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlQ29tYm9ib3hJdGVtR3JvdXAsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IG8gYXMgbm9kZUxpc3RUb0FycmF5IH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbmNvbnN0IENvbWJvYm94SXRlbSA9IFwiQ0FMQ0lURS1DT01CT0JPWC1JVEVNXCI7XG5jb25zdCBDb21ib2JveEl0ZW1Hcm91cCA9IFwiQ0FMQ0lURS1DT01CT0JPWC1JVEVNLUdST1VQXCI7XG5jb25zdCBDb21ib2JveENoaWxkU2VsZWN0b3IgPSBgJHtDb21ib2JveEl0ZW19LCAke0NvbWJvYm94SXRlbUdyb3VwfWA7XG5jb25zdCBDU1MgPSB7XG4gIGNoaXBJbnZpc2libGU6IFwiY2hpcC0taW52aXNpYmxlXCIsXG4gIHNlbGVjdGlvbkRpc3BsYXlGaXQ6IFwic2VsZWN0aW9uLWRpc3BsYXktZml0XCIsXG4gIHNlbGVjdGlvbkRpc3BsYXlTaW5nbGU6IFwic2VsZWN0aW9uLWRpc3BsYXktc2luZ2xlXCIsXG4gIGxpc3RDb250YWluZXI6IFwibGlzdC1jb250YWluZXJcIixcbn07XG5cbmZ1bmN0aW9uIGdldEFuY2VzdG9ycyhlbGVtZW50KSB7XG4gIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudD8uY2xvc2VzdChDb21ib2JveENoaWxkU2VsZWN0b3IpO1xuICBjb25zdCBncmFuZHBhcmVudCA9IHBhcmVudD8ucGFyZW50RWxlbWVudD8uY2xvc2VzdChDb21ib2JveENoaWxkU2VsZWN0b3IpO1xuICByZXR1cm4gW3BhcmVudCwgZ3JhbmRwYXJlbnRdLmZpbHRlcigoZWwpID0+IGVsKTtcbn1cbmZ1bmN0aW9uIGdldEl0ZW1BbmNlc3RvcnMoaXRlbSkge1xuICByZXR1cm4gKGl0ZW0uYW5jZXN0b3JzPy5maWx0ZXIoKGVsKSA9PiBlbC5ub2RlTmFtZSA9PT0gXCJDQUxDSVRFLUNPTUJPQk9YLUlURU1cIikgfHwgW10pO1xufVxuZnVuY3Rpb24gZ2V0SXRlbUNoaWxkcmVuKGl0ZW0pIHtcbiAgcmV0dXJuIG5vZGVMaXN0VG9BcnJheShpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWNvbWJvYm94LWl0ZW1cIikpO1xufVxuZnVuY3Rpb24gaGFzQWN0aXZlQ2hpbGRyZW4obm9kZSkge1xuICBjb25zdCBpdGVtcyA9IG5vZGVMaXN0VG9BcnJheShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWNvbWJvYm94LWl0ZW1cIikpO1xuICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNlbGVjdGVkKS5sZW5ndGggPiAwO1xufVxuZnVuY3Rpb24gZ2V0RGVwdGgoZWxlbWVudCkge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmV2YWx1YXRlKFwiYW5jZXN0b3I6OmNhbGNpdGUtY29tYm9ib3gtaXRlbSB8IGFuY2VzdG9yOjpjYWxjaXRlLWNvbWJvYm94LWl0ZW0tZ3JvdXBcIiwgZWxlbWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuVU5PUkRFUkVEX05PREVfU05BUFNIT1RfVFlQRSwgbnVsbCk7XG4gIHJldHVybiByZXN1bHQuc25hcHNob3RMZW5ndGg7XG59XG5mdW5jdGlvbiBpc1NpbmdsZUxpa2Uoc2VsZWN0aW9uTW9kZSkge1xuICByZXR1cm4gc2VsZWN0aW9uTW9kZS5pbmNsdWRlcyhcInNpbmdsZVwiKTtcbn1cblxuZXhwb3J0IHsgQ1NTIGFzIEMsIGdldERlcHRoIGFzIGEsIENvbWJvYm94Q2hpbGRTZWxlY3RvciBhcyBiLCBnZXRJdGVtQW5jZXN0b3JzIGFzIGMsIGdldEl0ZW1DaGlsZHJlbiBhcyBkLCBDb21ib2JveEl0ZW0gYXMgZSwgQ29tYm9ib3hJdGVtR3JvdXAgYXMgZiwgZ2V0QW5jZXN0b3JzIGFzIGcsIGhhc0FjdGl2ZUNoaWxkcmVuIGFzIGgsIGlzU2luZ2xlTGlrZSBhcyBpIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=