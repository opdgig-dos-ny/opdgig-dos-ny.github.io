(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_stencil_core_internal_client_lazy_recursive_entry_js_include_entry_js_exclude_sy-d4e082"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-progress.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-progress.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteProgress: () => (/* binding */ CalciteProgress),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress.js */ "./node_modules/@esri/calcite-components/dist/components/progress.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const CalciteProgress = _progress_js__WEBPACK_IMPORTED_MODULE_0__.P;
const defineCustomElement = _progress_js__WEBPACK_IMPORTED_MODULE_0__.d;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/progress.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/progress.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ Progress),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const progressCss = ":host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-app-z-index);inline-size:100%;overflow:hidden;background:var(--calcite-ui-border-3)}.bar{z-index:var(--calcite-app-z-index);background-color:var(--calcite-ui-brand)}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(-600%, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}";

const Progress = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.type = "determinate";
    this.value = 0;
    this.label = undefined;
    this.text = undefined;
    this.reversed = false;
  }
  render() {
    const isDeterminate = this.type === "determinate";
    const barStyles = isDeterminate ? { width: `${this.value * 100}%` } : {};
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.el);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { "aria-label": this.label || this.text, "aria-valuemax": 1, "aria-valuemin": 0, "aria-valuenow": this.value, role: "progressbar" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: "track" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: {
        bar: true,
        indeterminate: this.type === "indeterminate",
        [_dom_js__WEBPACK_IMPORTED_MODULE_0__.C.rtl]: dir === "rtl",
        reversed: this.reversed,
      }, style: barStyles })), this.text ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: "text" }, this.text) : null));
  }
  get el() { return this; }
  static get style() { return progressCss; }
}, [1, "calcite-progress", {
    "type": [513],
    "value": [2],
    "label": [1],
    "text": [1],
    "reversed": [516]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Progress);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYTk5NmZjZmVkZmZlOTg1OTVmNzNjN2NjMTU5N2RkMDMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEU7O0FBRTFFLHdCQUF3QiwyQ0FBUTtBQUNoQyw0QkFBNEIsMkNBQXFCOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEY7QUFDNUI7O0FBRWhFLDJCQUEyQixrQkFBa0IsY0FBYyxpQkFBaUIsWUFBWSxrQkFBa0Isc0JBQXNCLGVBQWUsT0FBTyxtQ0FBbUMsaUJBQWlCLGdCQUFnQixzQ0FBc0MsS0FBSyxtQ0FBbUMseUNBQXlDLCtCQUErQixPQUFPLCtCQUErQixLQUFLLDJCQUEyQixlQUFlLGdCQUFnQixrTUFBa00sNEJBQTRCLDRDQUE0QyxVQUFVLDRCQUE0QixNQUFNLG1CQUFtQix1QkFBdUIsa0JBQWtCLHNDQUFzQyxpQkFBaUIsOENBQThDLCtCQUErQixvQ0FBb0MsR0FBRyxtQ0FBbUMsSUFBSSxnQkFBZ0IsS0FBSyxtQ0FBbUMsd0NBQXdDLEdBQUcsa0NBQWtDLElBQUksZ0JBQWdCLEtBQUssb0NBQW9DLGdCQUFnQixhQUFhLFNBQVMsYUFBYTs7QUFFOXdDLCtCQUErQiwwRkFBa0IsZUFBZSwrRUFBVztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsVUFBVSxpQkFBaUIsS0FBSztBQUN4RSxnQkFBZ0IsMENBQWE7QUFDN0IsWUFBWSx5RUFBQyxVQUFVLGlJQUFpSSxFQUFFLHlFQUFDLFVBQVUsZ0JBQWdCLEVBQUUseUVBQUMsVUFBVTtBQUNsTTtBQUNBO0FBQ0EsU0FBUyxzQ0FBVztBQUNwQjtBQUNBLE9BQU8sb0JBQW9CLGdCQUFnQix5RUFBQyxVQUFVLGVBQWU7QUFDckU7QUFDQSxhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVtRCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvIGxhenkgXlxcLlxcLy4qXFwuZW50cnlcXC5qcy4qJCBpbmNsdWRlOiBcXC5lbnRyeVxcLmpzJCBleGNsdWRlOiBcXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLXByb2dyZXNzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9wcm9ncmVzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChbXSk7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuZW50cnlcXFxcLmpzLiokIGluY2x1ZGU6IFxcXFwuZW50cnlcXFxcLmpzJCBleGNsdWRlOiBcXFxcLnN5c3RlbVxcXFwuZW50cnlcXFxcLmpzJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7IiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgUCBhcyBQcm9ncmVzcywgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL3Byb2dyZXNzLmpzJztcblxuY29uc3QgQ2FsY2l0ZVByb2dyZXNzID0gUHJvZ3Jlc3M7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlUHJvZ3Jlc3MsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldEVsZW1lbnREaXIsIEMgYXMgQ1NTX1VUSUxJVFkgfSBmcm9tICcuL2RvbS5qcyc7XG5cbmNvbnN0IHByb2dyZXNzQ3NzID0gXCI6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO2lubGluZS1zaXplOjEwMCV9LnRyYWNrLC5iYXJ7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtYmxvY2stc3RhcnQ6MHB4O2Jsb2NrLXNpemU6MnB4fS50cmFja3t6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2lubGluZS1zaXplOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQ6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9LmJhcnt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpey50cmFja3tiYWNrZ3JvdW5kLWNvbG9yOmhpZ2hsaWdodFRleHR9LmJhcntiYWNrZ3JvdW5kLWNvbG9yOmxpbmtUZXh0fX0uaW5kZXRlcm1pbmF0ZXtpbmxpbmUtc2l6ZToyMCU7YW5pbWF0aW9uOmxvb3BpbmctcHJvZ3Jlc3MtYmFyLWFuaSBjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpICogMTEgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpIGxpbmVhciBpbmZpbml0ZX0uaW5kZXRlcm1pbmF0ZS5jYWxjaXRlLS1ydGx7YW5pbWF0aW9uLW5hbWU6bG9vcGluZy1wcm9ncmVzcy1iYXItYW5pLXJ0bH0ucmV2ZXJzZWR7YW5pbWF0aW9uLWRpcmVjdGlvbjpyZXZlcnNlfS50ZXh0e3BhZGRpbmctaW5saW5lOjBweDtwYWRkaW5nLWJsb2NrOjFyZW0gMHB4O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfUBrZXlmcmFtZXMgbG9vcGluZy1wcm9ncmVzcy1iYXItYW5pezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCl9NTAle2lubGluZS1zaXplOjQwJX0xMDAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg2MDAlLCAwLCAwKX19QGtleWZyYW1lcyBsb29waW5nLXByb2dyZXNzLWJhci1hbmktcnRsezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKX01MCV7aW5saW5lLXNpemU6NDAlfTEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC02MDAlLCAwLCAwKX19Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IFByb2dyZXNzID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLnR5cGUgPSBcImRldGVybWluYXRlXCI7XG4gICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZXZlcnNlZCA9IGZhbHNlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpc0RldGVybWluYXRlID0gdGhpcy50eXBlID09PSBcImRldGVybWluYXRlXCI7XG4gICAgY29uc3QgYmFyU3R5bGVzID0gaXNEZXRlcm1pbmF0ZSA/IHsgd2lkdGg6IGAke3RoaXMudmFsdWUgKiAxMDB9JWAgfSA6IHt9O1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIodGhpcy5lbCk7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWwgfHwgdGhpcy50ZXh0LCBcImFyaWEtdmFsdWVtYXhcIjogMSwgXCJhcmlhLXZhbHVlbWluXCI6IDAsIFwiYXJpYS12YWx1ZW5vd1wiOiB0aGlzLnZhbHVlLCByb2xlOiBcInByb2dyZXNzYmFyXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRyYWNrXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIGJhcjogdHJ1ZSxcbiAgICAgICAgaW5kZXRlcm1pbmF0ZTogdGhpcy50eXBlID09PSBcImluZGV0ZXJtaW5hdGVcIixcbiAgICAgICAgW0NTU19VVElMSVRZLnJ0bF06IGRpciA9PT0gXCJydGxcIixcbiAgICAgICAgcmV2ZXJzZWQ6IHRoaXMucmV2ZXJzZWQsXG4gICAgICB9LCBzdHlsZTogYmFyU3R5bGVzIH0pKSwgdGhpcy50ZXh0ID8gaChcImRpdlwiLCB7IGNsYXNzOiBcInRleHRcIiB9LCB0aGlzLnRleHQpIDogbnVsbCkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHByb2dyZXNzQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXByb2dyZXNzXCIsIHtcbiAgICBcInR5cGVcIjogWzUxM10sXG4gICAgXCJ2YWx1ZVwiOiBbMl0sXG4gICAgXCJsYWJlbFwiOiBbMV0sXG4gICAgXCJ0ZXh0XCI6IFsxXSxcbiAgICBcInJldmVyc2VkXCI6IFs1MTZdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtcHJvZ3Jlc3NcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtcHJvZ3Jlc3NcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBQcm9ncmVzcyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgUHJvZ3Jlc3MgYXMgUCwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=