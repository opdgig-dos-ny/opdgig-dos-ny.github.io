(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_stencil_core_internal_client_lazy_recursive_entry_js_include_entry_js_exclude_sy-e0ea53"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-accordion.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-accordion.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteAccordion: () => (/* binding */ CalciteAccordion),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const accordionCss = ":host([scale=s]){--calcite-accordion-item-spacing-unit:0.25rem;--calcite-accordion-icon-margin:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-icon-margin:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-icon-margin:1rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:block;max-inline-size:100%;line-height:1.5rem;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}.accordion--transparent{--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}.accordion{border-width:1px;border-block-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-2)}:host([hidden]){display:none}[hidden]{display:none}";

const Accordion = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalAccordionChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.createEvent)(this, "calciteInternalAccordionChange", 6);
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_0__.c)("mutation", () => this.updateAccordionItems());
    this.appearance = "solid";
    this.iconPosition = "end";
    this.iconType = "chevron";
    this.scale = "m";
    this.selectionMode = "multiple";
  }
  handlePropsChange() {
    this.updateAccordionItems();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.mutationObserver?.observe(this.el, { childList: true });
    this.updateAccordionItems();
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
  }
  render() {
    const transparent = this.appearance === "transparent";
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: {
        "accordion--transparent": transparent,
        accordion: !transparent,
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  updateActiveItemOnChange(event) {
    this.calciteInternalAccordionChange.emit({
      requestedAccordionItem: event.detail.requestedAccordionItem,
    });
    event.stopPropagation();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  updateAccordionItems() {
    this.el.querySelectorAll("calcite-accordion-item").forEach((item) => {
      item.iconPosition = this.iconPosition;
      item.iconType = this.iconType;
      item.scale = this.scale;
    });
    // sync props on items across shadow DOM
    document.dispatchEvent(new CustomEvent("calciteInternalAccordionItemsSync"));
  }
  get el() { return this; }
  static get watchers() { return {
    "iconPosition": ["handlePropsChange"],
    "iconType": ["handlePropsChange"],
    "scale": ["handlePropsChange"],
    "selectionMode": ["handlePropsChange"]
  }; }
  static get style() { return accordionCss; }
}, [1, "calcite-accordion", {
    "appearance": [513],
    "iconPosition": [513, "icon-position"],
    "iconType": [513, "icon-type"],
    "scale": [513],
    "selectionMode": [513, "selection-mode"]
  }, [[0, "calciteInternalAccordionItemSelect", "updateActiveItemOnChange"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-accordion"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-accordion":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Accordion);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteAccordion = Accordion;
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOGM0NjliNWIyY2EwODQ5MjMxYTljZWQ5YjFmMWYwMDIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lHO0FBQ3BEOztBQUVyRCx1Q0FBdUMsOENBQThDLHVDQUF1QyxtRkFBbUYsc0NBQXNDLGlCQUFpQixpQkFBaUIsNkNBQTZDLHdDQUF3QyxvRkFBb0Ysc0NBQXNDLGlCQUFpQixpQkFBaUIsOENBQThDLHFDQUFxQyxpRkFBaUYscUNBQXFDLG9CQUFvQixNQUFNLGtCQUFrQixjQUFjLHFCQUFxQixtQkFBbUIsMkRBQTJELG1FQUFtRSx3QkFBd0IsNENBQTRDLGdEQUFnRCxXQUFXLGlCQUFpQiwyQkFBMkIsbUJBQW1CLHdDQUF3QyxnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRTFzQyxnQ0FBZ0MsMEZBQWtCLGVBQWUsK0VBQVc7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsbUZBQVc7QUFDckQsNEJBQTRCLGdEQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxpQkFBaUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlFQUFDLFVBQVU7QUFDdkI7QUFDQTtBQUNBLFNBQVMsRUFBRSx5RUFBQztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRWlEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUVBQUs7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlCQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50LyBsYXp5IF5cXC5cXC8uKlxcLmVudHJ5XFwuanMuKiQgaW5jbHVkZTogXFwuZW50cnlcXC5qcyQgZXhjbHVkZTogXFwuc3lzdGVtXFwuZW50cnlcXC5qcyQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS1hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL29ic2VydmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChbXSk7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuZW50cnlcXFxcLmpzLiokIGluY2x1ZGU6IFxcXFwuZW50cnlcXFxcLmpzJCBleGNsdWRlOiBcXFxcLnN5c3RlbVxcXFwuZW50cnlcXFxcLmpzJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7IiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuXG5jb25zdCBhY2NvcmRpb25Dc3MgPSBcIjpob3N0KFtzY2FsZT1zXSl7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLXNwYWNpbmctdW5pdDowLjI1cmVtOy0tY2FsY2l0ZS1hY2NvcmRpb24taWNvbi1tYXJnaW46MC41cmVtOy0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1wYWRkaW5nOnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tc3BhY2luZy11bml0KSAwLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLXNwYWNpbmctdW5pdDowLjVyZW07LS1jYWxjaXRlLWFjY29yZGlvbi1pY29uLW1hcmdpbjowLjc1cmVtOy0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1wYWRkaW5nOnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tc3BhY2luZy11bml0KSAwLjc1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bF0pey0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1zcGFjaW5nLXVuaXQ6MC43NXJlbTstLWNhbGNpdGUtYWNjb3JkaW9uLWljb24tbWFyZ2luOjFyZW07LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLXBhZGRpbmc6dmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1zcGFjaW5nLXVuaXQpIDFyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW19Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazttYXgtaW5saW5lLXNpemU6MTAwJTtsaW5lLWhlaWdodDoxLjVyZW07LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWJvcmRlcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0yKTstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tYmFja2dyb3VuZDp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9LmFjY29yZGlvbi0tdHJhbnNwYXJlbnR7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWJvcmRlcjp0cmFuc3BhcmVudDstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tYmFja2dyb3VuZDp0cmFuc3BhcmVudH0uYWNjb3JkaW9ue2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDowcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0yKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgQWNjb3JkaW9uID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEFjY29yZGlvbkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsQWNjb3JkaW9uQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gdGhpcy51cGRhdGVBY2NvcmRpb25JdGVtcygpKTtcbiAgICB0aGlzLmFwcGVhcmFuY2UgPSBcInNvbGlkXCI7XG4gICAgdGhpcy5pY29uUG9zaXRpb24gPSBcImVuZFwiO1xuICAgIHRoaXMuaWNvblR5cGUgPSBcImNoZXZyb25cIjtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5zZWxlY3Rpb25Nb2RlID0gXCJtdWx0aXBsZVwiO1xuICB9XG4gIGhhbmRsZVByb3BzQ2hhbmdlKCkge1xuICAgIHRoaXMudXBkYXRlQWNjb3JkaW9uSXRlbXMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgdGhpcy51cGRhdGVBY2NvcmRpb25JdGVtcygpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0cmFuc3BhcmVudCA9IHRoaXMuYXBwZWFyYW5jZSA9PT0gXCJ0cmFuc3BhcmVudFwiO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFwiYWNjb3JkaW9uLS10cmFuc3BhcmVudFwiOiB0cmFuc3BhcmVudCxcbiAgICAgICAgYWNjb3JkaW9uOiAhdHJhbnNwYXJlbnQsXG4gICAgICB9IH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdXBkYXRlQWN0aXZlSXRlbU9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxBY2NvcmRpb25DaGFuZ2UuZW1pdCh7XG4gICAgICByZXF1ZXN0ZWRBY2NvcmRpb25JdGVtOiBldmVudC5kZXRhaWwucmVxdWVzdGVkQWNjb3JkaW9uSXRlbSxcbiAgICB9KTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1cGRhdGVBY2NvcmRpb25JdGVtcygpIHtcbiAgICB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWFjY29yZGlvbi1pdGVtXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uaWNvblBvc2l0aW9uID0gdGhpcy5pY29uUG9zaXRpb247XG4gICAgICBpdGVtLmljb25UeXBlID0gdGhpcy5pY29uVHlwZTtcbiAgICAgIGl0ZW0uc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgIH0pO1xuICAgIC8vIHN5bmMgcHJvcHMgb24gaXRlbXMgYWNyb3NzIHNoYWRvdyBET01cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNhbGNpdGVJbnRlcm5hbEFjY29yZGlvbkl0ZW1zU3luY1wiKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiaWNvblBvc2l0aW9uXCI6IFtcImhhbmRsZVByb3BzQ2hhbmdlXCJdLFxuICAgIFwiaWNvblR5cGVcIjogW1wiaGFuZGxlUHJvcHNDaGFuZ2VcIl0sXG4gICAgXCJzY2FsZVwiOiBbXCJoYW5kbGVQcm9wc0NoYW5nZVwiXSxcbiAgICBcInNlbGVjdGlvbk1vZGVcIjogW1wiaGFuZGxlUHJvcHNDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gYWNjb3JkaW9uQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWFjY29yZGlvblwiLCB7XG4gICAgXCJhcHBlYXJhbmNlXCI6IFs1MTNdLFxuICAgIFwiaWNvblBvc2l0aW9uXCI6IFs1MTMsIFwiaWNvbi1wb3NpdGlvblwiXSxcbiAgICBcImljb25UeXBlXCI6IFs1MTMsIFwiaWNvbi10eXBlXCJdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJzZWxlY3Rpb25Nb2RlXCI6IFs1MTMsIFwic2VsZWN0aW9uLW1vZGVcIl1cbiAgfSwgW1swLCBcImNhbGNpdGVJbnRlcm5hbEFjY29yZGlvbkl0ZW1TZWxlY3RcIiwgXCJ1cGRhdGVBY3RpdmVJdGVtT25DaGFuZ2VcIl1dXSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtYWNjb3JkaW9uXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWFjY29yZGlvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEFjY29yZGlvbik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlQWNjb3JkaW9uID0gQWNjb3JkaW9uO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZUFjY29yZGlvbiwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbi8qKlxuICogVGhpcyB1dGlsaXR5IGVuc3VyZXMgb2JzZXJ2ZXJzIGFyZSBjcmVhdGVkIG9ubHkgZm9yIGJyb3dzZXIgY29udGV4dHMuXG4gKlxuICogQHBhcmFtIHR5cGUgLSB0aGUgdHlwZSBvZiBvYnNlcnZlciB0byBjcmVhdGVcbiAqIEBwYXJhbSBjYWxsYmFjayAtIHRoZSBvYnNlcnZlciBjYWxsYmFja1xuICogQHBhcmFtIG9wdGlvbnMgLSB0aGUgb2JzZXJ2ZXIgb3B0aW9uc1xuICovXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgY29uc3QgT2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcih0eXBlKTtcbiAgcmV0dXJuIG5ldyBPYnNlcnZlcihjYWxsYmFjaywgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBnZXRPYnNlcnZlcih0eXBlKSB7XG4gIC8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZG9tL2lzc3Vlcy8xMjYjaXNzdWVjb21tZW50LTEwNDk4MTQ5NDhcbiAgY2xhc3MgRXh0ZW5kZWRNdXRhdGlvbk9ic2VydmVyIGV4dGVuZHMgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XG4gICAgICBzdXBlcihjYWxsYmFjayk7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkgPSBbXTtcbiAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgb2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeS5wdXNoKHsgdGFyZ2V0LCBvcHRpb25zIH0pO1xuICAgICAgcmV0dXJuIHN1cGVyLm9ic2VydmUodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgdW5vYnNlcnZlKHRhcmdldCkge1xuICAgICAgY29uc3QgbmV3T2JzZXJ2ZWRFbnRyaWVzID0gdGhpcy5vYnNlcnZlZEVudHJ5LmZpbHRlcigob2JzZXJ2ZWQpID0+IG9ic2VydmVkLnRhcmdldCAhPT0gdGFyZ2V0KTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayhzdXBlci50YWtlUmVjb3JkcygpLCB0aGlzKTtcbiAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgbmV3T2JzZXJ2ZWRFbnRyaWVzLmZvckVhY2goKG9ic2VydmVkKSA9PiB0aGlzLm9ic2VydmUob2JzZXJ2ZWQudGFyZ2V0LCBvYnNlcnZlZC5vcHRpb25zKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodHlwZSA9PT0gXCJpbnRlcnNlY3Rpb25cIlxuICAgICAgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICAgIDogdHlwZSA9PT0gXCJtdXRhdGlvblwiXG4gICAgICAgID8gRXh0ZW5kZWRNdXRhdGlvbk9ic2VydmVyXG4gICAgICAgIDogd2luZG93LlJlc2l6ZU9ic2VydmVyKTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlT2JzZXJ2ZXIgYXMgYyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9