(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_stencil_core_internal_client_lazy_recursive_entry_js_include_entry_js_exclude_sy-d594e4"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-pick-list.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-pick-list.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalcitePickList: () => (/* binding */ CalcitePickList),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _resources3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources3.js */ "./node_modules/@esri/calcite-components/dist/components/resources3.js");
/* harmony import */ var _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared-list-render.js */ "./node_modules/@esri/calcite-components/dist/components/shared-list-render.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter.js */ "./node_modules/@esri/calcite-components/dist/components/filter.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input.js */ "./node_modules/@esri/calcite-components/dist/components/input.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress.js */ "./node_modules/@esri/calcite-components/dist/components/progress.js");
/* harmony import */ var _scrim_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scrim.js */ "./node_modules/@esri/calcite-components/dist/components/scrim.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */













const pickListCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:1;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:stretch;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-app-z-index)}calcite-filter{margin-block-end:0px}:host([loading][disabled]){min-block-size:2rem}:host([hidden]){display:none}[hidden]{display:none}";

const PickList = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteListChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.createEvent)(this, "calciteListChange", 6);
    this.calciteListFilter = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.createEvent)(this, "calciteListFilter", 6);
    this.lastSelectedItem = null;
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_2__.c)("mutation", _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.m.bind(this));
    this.setFilterEl = (el) => {
      this.filterEl = el;
    };
    this.setFilteredItems = (filteredItems) => {
      this.filteredItems = filteredItems;
    };
    this.deselectRemovedItems = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.d.bind(this);
    this.deselectSiblingItems = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.a.bind(this);
    this.selectSiblings = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.s.bind(this);
    this.handleFilter = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.h.bind(this);
    this.handleFilterEvent = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.b.bind(this);
    this.getItemData = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.g.bind(this);
    this.keyDownHandler = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.k.bind(this);
    this.disabled = false;
    this.filteredItems = [];
    this.filteredData = [];
    this.filterEnabled = false;
    this.filterPlaceholder = undefined;
    this.filterText = undefined;
    this.headingLevel = undefined;
    this.loading = false;
    this.multiple = false;
    this.selectionFollowsFocus = false;
    this.selectedValues = new Map();
    this.dataForFilter = [];
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.i.call(this);
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.c.call(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
  }
  disconnectedCallback() {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.e.call(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
  }
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.f.call(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_0__.u)(this);
  }
  calciteListItemRemoveHandler(event) {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.r.call(this, event);
  }
  calciteListItemChangeHandler(event) {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.j.call(this, event);
  }
  calciteInternalListItemPropsChangeHandler(event) {
    event.stopPropagation();
    this.setUpFilter();
  }
  calciteInternalListItemValueChangeHandler(event) {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.l.call(this, event);
    event.stopPropagation();
  }
  calciteListFocusOutHandler(event) {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.n.call(this, event);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  setUpItems() {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.o.call(this, "calcite-pick-list-item");
  }
  setUpFilter() {
    if (this.filterEnabled) {
      this.dataForFilter = this.getItemData();
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Returns the component's selected `calcite-pick-list-item`s. */
  async getSelectedItems() {
    return this.selectedValues;
  }
  /**
   * Sets focus on the component's first focusable element.
   *
   * @param focusId
   */
  async setFocus(focusId) {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    return _shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.p.call(this, focusId);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  getIconType() {
    return this.multiple ? _resources3_js__WEBPACK_IMPORTED_MODULE_3__.I.square : _resources3_js__WEBPACK_IMPORTED_MODULE_3__.I.circle;
  }
  render() {
    return (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)(_shared_list_render_js__WEBPACK_IMPORTED_MODULE_4__.L, { onKeyDown: this.keyDownHandler, props: this });
  }
  get el() { return this; }
  static get style() { return pickListCss; }
}, [1, "calcite-pick-list", {
    "disabled": [516],
    "filteredItems": [1040],
    "filteredData": [1040],
    "filterEnabled": [516, "filter-enabled"],
    "filterPlaceholder": [513, "filter-placeholder"],
    "filterText": [1537, "filter-text"],
    "headingLevel": [514, "heading-level"],
    "loading": [516],
    "multiple": [516],
    "selectionFollowsFocus": [516, "selection-follows-focus"],
    "selectedValues": [32],
    "dataForFilter": [32],
    "getSelectedItems": [64],
    "setFocus": [64]
  }, [[0, "calciteListItemRemove", "calciteListItemRemoveHandler"], [0, "calciteListItemChange", "calciteListItemChangeHandler"], [0, "calciteInternalListItemPropsChange", "calciteInternalListItemPropsChangeHandler"], [0, "calciteInternalListItemValueChange", "calciteInternalListItemValueChangeHandler"], [0, "focusout", "calciteListFocusOutHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-pick-list", "calcite-filter", "calcite-icon", "calcite-input", "calcite-loader", "calcite-progress", "calcite-scrim"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-pick-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PickList);
      }
      break;
    case "calcite-filter":
      if (!customElements.get(tagName)) {
        (0,_filter_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-input":
      if (!customElements.get(tagName)) {
        (0,_input_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        (0,_progress_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        (0,_scrim_js__WEBPACK_IMPORTED_MODULE_10__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalcitePickList = PickList;
const defineCustomElement = defineCustomElement$1;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMjM0NGQxZDhiNGE1ZjI3YThkZjU0OTk4MjZmNjBlZTYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RztBQUNVO0FBQ0w7QUFDekQ7QUFDSDtBQUM2YjtBQUN0YjtBQUNGO0FBQ0M7QUFDQztBQUNFO0FBQ0g7O0FBRXhELHVDQUF1QyxlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxrQkFBa0Isc0JBQXNCLGFBQWEsY0FBYyxZQUFZLHNCQUFzQixvQkFBb0IsNkJBQTZCLHNDQUFzQyxpQkFBaUIsK0JBQStCLFFBQVEsc0JBQXNCLHlHQUF5RyxVQUFVLCtCQUErQix5QkFBeUIsYUFBYSxvQkFBb0IseUJBQXlCLGdEQUFnRCwrQ0FBK0MsbURBQW1ELHVHQUF1RywwQ0FBMEMsZ0JBQWdCLHNCQUFzQixtQ0FBbUMsZUFBZSxxQkFBcUIsMkJBQTJCLG9CQUFvQixnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRXpyQywrQkFBK0IsMkZBQWtCLGVBQWUsZ0ZBQVc7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0ZBQVc7QUFDeEMsNkJBQTZCLG9GQUFXO0FBQ3hDO0FBQ0EsNEJBQTRCLGdEQUFjLGFBQWEscURBQXdCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxREFBb0I7QUFDcEQsZ0NBQWdDLHFEQUFvQjtBQUNwRCwwQkFBMEIscURBQWM7QUFDeEMsd0JBQXdCLHFEQUFZO0FBQ3BDLDZCQUE2QixxREFBaUI7QUFDOUMsdUJBQXVCLHFEQUFXO0FBQ2xDLDBCQUEwQixxREFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVU7QUFDZCxJQUFJLHFEQUFrQjtBQUN0QixJQUFJLGtEQUFrQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSxxREFBZTtBQUNuQixJQUFJLGtEQUFxQjtBQUN6QjtBQUNBO0FBQ0EsSUFBSSwrQ0FBc0I7QUFDMUI7QUFDQTtBQUNBLElBQUksK0NBQWtCO0FBQ3RCLElBQUkscURBQW1CO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QjtBQUNBO0FBQ0EsSUFBSSxxREFBVTtBQUNkO0FBQ0E7QUFDQSxJQUFJLHFEQUE0QjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUF5QztBQUM3QztBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUEwQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtDQUFrQjtBQUM1QixXQUFXLHFEQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZDQUFVLFVBQVUsNkNBQVU7QUFDekQ7QUFDQTtBQUNBLFdBQVcsMEVBQUMsQ0FBQyxxREFBSSxJQUFJLDZDQUE2QztBQUNsRTtBQUNBLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkNBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDRDQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkNBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFxQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50LyBsYXp5IF5cXC5cXC8uKlxcLmVudHJ5XFwuanMuKiQgaW5jbHVkZTogXFwuZW50cnlcXC5qcyQgZXhjbHVkZTogXFwuc3lzdGVtXFwuZW50cnlcXC5qcyQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS1waWNrLWxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50IGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmVudHJ5XFxcXC5qcy4qJCBpbmNsdWRlOiBcXFxcLmVudHJ5XFxcXC5qcyQgZXhjbHVkZTogXFxcXC5zeXN0ZW1cXFxcLmVudHJ5XFxcXC5qcyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0OyIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUuanMnO1xuaW1wb3J0IHsgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRGb2N1c2FibGUgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5pbXBvcnQgeyBJIGFzIElDT05fVFlQRVMgfSBmcm9tICcuL3Jlc291cmNlczMuanMnO1xuaW1wb3J0IHsgbSBhcyBtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2ssIGQgYXMgZGVzZWxlY3RSZW1vdmVkSXRlbXMsIGEgYXMgZGVzZWxlY3RTaWJsaW5nSXRlbXMsIHMgYXMgc2VsZWN0U2libGluZ3MsIGggYXMgaGFuZGxlRmlsdGVyLCBiIGFzIGhhbmRsZUZpbHRlckV2ZW50LCBnIGFzIGdldEl0ZW1EYXRhLCBrIGFzIGtleURvd25IYW5kbGVyLCBpIGFzIGluaXRpYWxpemUsIGMgYXMgaW5pdGlhbGl6ZU9ic2VydmVyLCBlIGFzIGNsZWFuVXBPYnNlcnZlciwgZiBhcyBoYW5kbGVJbml0aWFsRmlsdGVyLCByIGFzIHJlbW92ZUl0ZW0sIGogYXMgY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlSGFuZGxlciwgbCBhcyBjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVZhbHVlQ2hhbmdlSGFuZGxlciwgbiBhcyBjYWxjaXRlTGlzdEZvY3VzT3V0SGFuZGxlciwgbyBhcyBzZXRVcEl0ZW1zLCBwIGFzIHNldEZvY3VzLCBMIGFzIExpc3QgfSBmcm9tICcuL3NoYXJlZC1saXN0LXJlbmRlci5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNyB9IGZyb20gJy4vZmlsdGVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ2IH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ1IH0gZnJvbSAnLi9pbnB1dC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNCB9IGZyb20gJy4vbG9hZGVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9wcm9ncmVzcy5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMiB9IGZyb20gJy4vc2NyaW0uanMnO1xuXG5jb25zdCBwaWNrTGlzdENzcyA9IFwiOmhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtmbGV4LXNocmluazowO2ZsZXgtZ3JvdzoxO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpzdHJldGNoO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX06aG9zdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QoW2ZpbHRlci1lbmFibGVkXSkgaGVhZGVye21hcmdpbi1ibG9jay1lbmQ6MC4yNXJlbTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6c3RyZXRjaDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7LS10dy1zaGFkb3c6MCAxcHggMCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMXB4IDAgdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QoW2ZpbHRlci1lbmFibGVkXSkgaGVhZGVyLnN0aWNreS1wb3N7cG9zaXRpb246c3RpY2t5O2luc2V0LWJsb2NrLXN0YXJ0OjBweDt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpfWNhbGNpdGUtZmlsdGVye21hcmdpbi1ibG9jay1lbmQ6MHB4fTpob3N0KFtsb2FkaW5nXVtkaXNhYmxlZF0pe21pbi1ibG9jay1zaXplOjJyZW19Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IFBpY2tMaXN0ID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVMaXN0Q2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTGlzdENoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVMaXN0RmlsdGVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTGlzdEZpbHRlclwiLCA2KTtcbiAgICB0aGlzLmxhc3RTZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgbXV0YXRpb25PYnNlcnZlckNhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuc2V0RmlsdGVyRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyRWwgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0RmlsdGVyZWRJdGVtcyA9IChmaWx0ZXJlZEl0ZW1zKSA9PiB7XG4gICAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJlZEl0ZW1zO1xuICAgIH07XG4gICAgdGhpcy5kZXNlbGVjdFJlbW92ZWRJdGVtcyA9IGRlc2VsZWN0UmVtb3ZlZEl0ZW1zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXNlbGVjdFNpYmxpbmdJdGVtcyA9IGRlc2VsZWN0U2libGluZ0l0ZW1zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWxlY3RTaWJsaW5ncyA9IHNlbGVjdFNpYmxpbmdzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIgPSBoYW5kbGVGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlckV2ZW50ID0gaGFuZGxlRmlsdGVyRXZlbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldEl0ZW1EYXRhID0gZ2V0SXRlbURhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0ga2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gW107XG4gICAgdGhpcy5maWx0ZXJlZERhdGEgPSBbXTtcbiAgICB0aGlzLmZpbHRlckVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZpbHRlclBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsdGVyVGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhlYWRpbmdMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm11bHRpcGxlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3Rpb25Gb2xsb3dzRm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWVzID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuZGF0YUZvckZpbHRlciA9IFtdO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaW5pdGlhbGl6ZS5jYWxsKHRoaXMpO1xuICAgIGluaXRpYWxpemVPYnNlcnZlci5jYWxsKHRoaXMpO1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjbGVhblVwT2JzZXJ2ZXIuY2FsbCh0aGlzKTtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICBoYW5kbGVJbml0aWFsRmlsdGVyLmNhbGwodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICBjYWxjaXRlTGlzdEl0ZW1SZW1vdmVIYW5kbGVyKGV2ZW50KSB7XG4gICAgcmVtb3ZlSXRlbS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgfVxuICBjYWxjaXRlTGlzdEl0ZW1DaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlSGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgfVxuICBjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVByb3BzQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuc2V0VXBGaWx0ZXIoKTtcbiAgfVxuICBjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVZhbHVlQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgIGNhbGNpdGVJbnRlcm5hbExpc3RJdGVtVmFsdWVDaGFuZ2VIYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGNhbGNpdGVMaXN0Rm9jdXNPdXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgY2FsY2l0ZUxpc3RGb2N1c091dEhhbmRsZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRVcEl0ZW1zKCkge1xuICAgIHNldFVwSXRlbXMuY2FsbCh0aGlzLCBcImNhbGNpdGUtcGljay1saXN0LWl0ZW1cIik7XG4gIH1cbiAgc2V0VXBGaWx0ZXIoKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5kYXRhRm9yRmlsdGVyID0gdGhpcy5nZXRJdGVtRGF0YSgpO1xuICAgIH1cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIHNlbGVjdGVkIGBjYWxjaXRlLXBpY2stbGlzdC1pdGVtYHMuICovXG4gIGFzeW5jIGdldFNlbGVjdGVkSXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRWYWx1ZXM7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZm9jdXNJZFxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoZm9jdXNJZCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICByZXR1cm4gc2V0Rm9jdXMuY2FsbCh0aGlzLCBmb2N1c0lkKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0SWNvblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyBJQ09OX1RZUEVTLnNxdWFyZSA6IElDT05fVFlQRVMuY2lyY2xlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaChMaXN0LCB7IG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciwgcHJvcHM6IHRoaXMgfSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gcGlja0xpc3RDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtcGljay1saXN0XCIsIHtcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwiZmlsdGVyZWRJdGVtc1wiOiBbMTA0MF0sXG4gICAgXCJmaWx0ZXJlZERhdGFcIjogWzEwNDBdLFxuICAgIFwiZmlsdGVyRW5hYmxlZFwiOiBbNTE2LCBcImZpbHRlci1lbmFibGVkXCJdLFxuICAgIFwiZmlsdGVyUGxhY2Vob2xkZXJcIjogWzUxMywgXCJmaWx0ZXItcGxhY2Vob2xkZXJcIl0sXG4gICAgXCJmaWx0ZXJUZXh0XCI6IFsxNTM3LCBcImZpbHRlci10ZXh0XCJdLFxuICAgIFwiaGVhZGluZ0xldmVsXCI6IFs1MTQsIFwiaGVhZGluZy1sZXZlbFwiXSxcbiAgICBcImxvYWRpbmdcIjogWzUxNl0sXG4gICAgXCJtdWx0aXBsZVwiOiBbNTE2XSxcbiAgICBcInNlbGVjdGlvbkZvbGxvd3NGb2N1c1wiOiBbNTE2LCBcInNlbGVjdGlvbi1mb2xsb3dzLWZvY3VzXCJdLFxuICAgIFwic2VsZWN0ZWRWYWx1ZXNcIjogWzMyXSxcbiAgICBcImRhdGFGb3JGaWx0ZXJcIjogWzMyXSxcbiAgICBcImdldFNlbGVjdGVkSXRlbXNcIjogWzY0XSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF1cbiAgfSwgW1swLCBcImNhbGNpdGVMaXN0SXRlbVJlbW92ZVwiLCBcImNhbGNpdGVMaXN0SXRlbVJlbW92ZUhhbmRsZXJcIl0sIFswLCBcImNhbGNpdGVMaXN0SXRlbUNoYW5nZVwiLCBcImNhbGNpdGVMaXN0SXRlbUNoYW5nZUhhbmRsZXJcIl0sIFswLCBcImNhbGNpdGVJbnRlcm5hbExpc3RJdGVtUHJvcHNDaGFuZ2VcIiwgXCJjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVByb3BzQ2hhbmdlSGFuZGxlclwiXSwgWzAsIFwiY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1WYWx1ZUNoYW5nZVwiLCBcImNhbGNpdGVJbnRlcm5hbExpc3RJdGVtVmFsdWVDaGFuZ2VIYW5kbGVyXCJdLCBbMCwgXCJmb2N1c291dFwiLCBcImNhbGNpdGVMaXN0Rm9jdXNPdXRIYW5kbGVyXCJdXV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXBpY2stbGlzdFwiLCBcImNhbGNpdGUtZmlsdGVyXCIsIFwiY2FsY2l0ZS1pY29uXCIsIFwiY2FsY2l0ZS1pbnB1dFwiLCBcImNhbGNpdGUtbG9hZGVyXCIsIFwiY2FsY2l0ZS1wcm9ncmVzc1wiLCBcImNhbGNpdGUtc2NyaW1cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtcGljay1saXN0XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgUGlja0xpc3QpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtZmlsdGVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDcoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaW5wdXRcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtbG9hZGVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDQoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXByb2dyZXNzXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDMoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXNjcmltXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG5cbmNvbnN0IENhbGNpdGVQaWNrTGlzdCA9IFBpY2tMaXN0O1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZVBpY2tMaXN0LCBkZWZpbmVDdXN0b21FbGVtZW50IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=