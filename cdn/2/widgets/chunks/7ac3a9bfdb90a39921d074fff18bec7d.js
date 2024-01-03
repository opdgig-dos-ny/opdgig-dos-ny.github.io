(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_stencil_core_internal_client_lazy_recursive_entry_js_include_entry_js_exclude_sy-1a583e"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-color-picker-swatch.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-color-picker-swatch.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteColorPickerSwatch: () => (/* binding */ CalciteColorPickerSwatch),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _color_picker_swatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-picker-swatch.js */ "./node_modules/@esri/calcite-components/dist/components/color-picker-swatch.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const CalciteColorPickerSwatch = _color_picker_swatch_js__WEBPACK_IMPORTED_MODULE_0__.C;
const defineCustomElement = _color_picker_swatch_js__WEBPACK_IMPORTED_MODULE_0__.d;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/color-picker-swatch.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/color-picker-swatch.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ColorPickerSwatch),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _index2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index2.js */ "./node_modules/@esri/calcite-components/dist/components/index2.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@esri/calcite-components/dist/components/utils.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */





const CSS = {
  swatch: "swatch",
  noColorSwatch: "swatch--no-color",
  checker: "checker",
};
const COLORS = {
  borderLight: "rgba(0, 0, 0, 0.3)",
  borderDark: "rgba(255, 255, 255, 0.15)",
};
const checkerSquareSize = 4;
const CHECKER_DIMENSIONS = {
  squareSize: checkerSquareSize,
  size: checkerSquareSize * 2,
};

const colorPickerSwatchCss = ":host{position:relative;display:inline-flex}:host([scale=s]){block-size:1.25rem;inline-size:1.25rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem}.swatch{overflow:hidden;block-size:inherit;inline-size:inherit}.swatch rect{transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.swatch--no-color rect{fill:var(--calcite-ui-foreground-1)}.swatch--no-color line{stroke:var(--calcite-ui-danger)}.checker{fill:#cacaca}:host([hidden]){display:none}[hidden]{display:none}";

const ColorPickerSwatch = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.active = false;
    this.color = undefined;
    this.scale = "m";
  }
  handleColorChange(color$1) {
    this.internalColor = color$1 ? (0,_index2_js__WEBPACK_IMPORTED_MODULE_0__.c)(color$1) : null;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.handleColorChange(this.color);
  }
  render() {
    const isEmpty = !this.internalColor;
    const classes = {
      [CSS.swatch]: true,
      [CSS.noColorSwatch]: isEmpty,
    };
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("svg", { class: classes, xmlns: "http://www.w3.org/2000/svg" }, this.renderSwatch()));
  }
  renderSwatch() {
    const { active, el, internalColor } = this;
    const borderRadius = active ? "100%" : "0";
    const theme = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.r)(el);
    const borderColor = theme === "light" ? COLORS.borderLight : COLORS.borderDark;
    const commonSwatchProps = {
      height: "100%",
      rx: borderRadius,
      stroke: borderColor,
      // stroke-width and clip-path are needed to hide overflowing portion of stroke
      // see https://stackoverflow.com/a/7273346/194216
      // using attribute to work around Stencil using the prop name vs the attribute when rendering
      ["stroke-width"]: "2",
      width: "100%",
    };
    const isEmpty = !internalColor;
    if (isEmpty) {
      return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("clipPath", { id: "shape" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("rect", { height: "100%", rx: borderRadius, width: "100%" })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("rect", { "clip-path": `inset(0 round ${borderRadius})`, rx: borderRadius, ...commonSwatchProps }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("line", { "clip-path": "url(#shape)", "stroke-width": "3", x1: "100%", x2: "0", y1: "0", y2: "100%" })));
    }
    const alpha = internalColor.alpha();
    const hex = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.h)(internalColor);
    const hexa = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.h)(internalColor, alpha < 1);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("title", null, hexa), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("defs", null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("pattern", { height: CHECKER_DIMENSIONS.size, id: "checker", patternUnits: "userSpaceOnUse", width: CHECKER_DIMENSIONS.size, x: "0", y: "0" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("rect", { class: CSS.checker, height: CHECKER_DIMENSIONS.squareSize, width: CHECKER_DIMENSIONS.squareSize, x: "0", y: "0" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("rect", { class: CSS.checker, height: CHECKER_DIMENSIONS.squareSize, width: CHECKER_DIMENSIONS.squareSize, x: CHECKER_DIMENSIONS.squareSize, y: CHECKER_DIMENSIONS.squareSize }))), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("rect", { fill: "url(#checker)", height: "100%", rx: borderRadius, width: "100%" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("rect", { fill: hex, style: {
        "clip-path": alpha < 1 ? "polygon(100% 0, 0 0, 0 100%)" : `inset(0 round ${borderRadius})`,
      }, ...commonSwatchProps }), alpha < 1 ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("rect", { fill: hexa, key: "opacity-fill", style: { "clip-path": "polygon(100% 0, 100% 100%, 0 100%)" }, ...commonSwatchProps })) : null));
  }
  get el() { return this; }
  static get watchers() { return {
    "color": ["handleColorChange"]
  }; }
  static get style() { return colorPickerSwatchCss; }
}, [1, "calcite-color-picker-swatch", {
    "active": [516],
    "color": [1],
    "scale": [513]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-color-picker-swatch"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-color-picker-swatch":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ColorPickerSwatch);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvN2FjM2E5YmZkYjkwYTM5OTIxZDA3NGZmZjE4YmVjN2QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEY7O0FBRTlGLGlDQUFpQyxzREFBaUI7QUFDbEQsNEJBQTRCLHNEQUFxQjs7QUFFUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0c7QUFDN0Q7QUFDRztBQUNIOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxrQkFBa0Isb0JBQW9CLGlCQUFpQixtQkFBbUIsb0JBQW9CLGlCQUFpQixrQkFBa0IsbUJBQW1CLGlCQUFpQixnQkFBZ0IsaUJBQWlCLFFBQVEsZ0JBQWdCLG1CQUFtQixvQkFBb0IsYUFBYSx3QkFBd0IsMEJBQTBCLHdEQUF3RCx1QkFBdUIsb0NBQW9DLHVCQUF1QixnQ0FBZ0MsU0FBUyxhQUFhLGdCQUFnQixhQUFhLFNBQVMsYUFBYTs7QUFFM2xCLHdDQUF3QywwRkFBa0IsZUFBZSwrRUFBVztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNkNBQUs7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5RUFBQyxVQUFVLHFEQUFxRDtBQUM1RTtBQUNBO0FBQ0EsWUFBWSw0QkFBNEI7QUFDeEM7QUFDQSxrQkFBa0IsMENBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlFQUFDLENBQUMsNEVBQVEsUUFBUSx5RUFBQyxlQUFlLGFBQWEsRUFBRSx5RUFBQyxXQUFXLGlEQUFpRCxJQUFJLHlFQUFDLFdBQVcsOEJBQThCLGFBQWEsNENBQTRDLEdBQUcseUVBQUMsV0FBVywyRkFBMkY7QUFDN1U7QUFDQTtBQUNBLGdCQUFnQiw0Q0FBTTtBQUN0QixpQkFBaUIsNENBQU07QUFDdkIsWUFBWSx5RUFBQyxDQUFDLDRFQUFRLFFBQVEseUVBQUMsdUJBQXVCLHlFQUFDLGVBQWUseUVBQUMsY0FBYyxnSUFBZ0ksRUFBRSx5RUFBQyxXQUFXLGlIQUFpSCxHQUFHLHlFQUFDLFdBQVcscUtBQXFLLEtBQUsseUVBQUMsV0FBVyx3RUFBd0UsR0FBRyx5RUFBQyxXQUFXO0FBQ2huQixtRkFBbUYsYUFBYTtBQUNoRyxPQUFPLHdCQUF3QixnQkFBZ0IseUVBQUMsV0FBVywwQ0FBMEMsbURBQW1ELHdCQUF3QjtBQUNoTDtBQUNBLGFBQWE7QUFDYiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUU0RCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvIGxhenkgXlxcLlxcLy4qXFwuZW50cnlcXC5qcy4qJCBpbmNsdWRlOiBcXC5lbnRyeVxcLmpzJCBleGNsdWRlOiBcXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLWNvbG9yLXBpY2tlci1zd2F0Y2guanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NvbG9yLXBpY2tlci1zd2F0Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50IGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmVudHJ5XFxcXC5qcy4qJCBpbmNsdWRlOiBcXFxcLmVudHJ5XFxcXC5qcyQgZXhjbHVkZTogXFxcXC5zeXN0ZW1cXFxcLmVudHJ5XFxcXC5qcyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0OyIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEMgYXMgQ29sb3JQaWNrZXJTd2F0Y2gsIGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi9jb2xvci1waWNrZXItc3dhdGNoLmpzJztcblxuY29uc3QgQ2FsY2l0ZUNvbG9yUGlja2VyU3dhdGNoID0gQ29sb3JQaWNrZXJTd2F0Y2g7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlQ29sb3JQaWNrZXJTd2F0Y2gsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGgsIEZyYWdtZW50IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjb2xvciB9IGZyb20gJy4vaW5kZXgyLmpzJztcbmltcG9ydCB7IHIgYXMgZ2V0TW9kZU5hbWUgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBoIGFzIGhleGlmeSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIHN3YXRjaDogXCJzd2F0Y2hcIixcbiAgbm9Db2xvclN3YXRjaDogXCJzd2F0Y2gtLW5vLWNvbG9yXCIsXG4gIGNoZWNrZXI6IFwiY2hlY2tlclwiLFxufTtcbmNvbnN0IENPTE9SUyA9IHtcbiAgYm9yZGVyTGlnaHQ6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCIsXG4gIGJvcmRlckRhcms6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KVwiLFxufTtcbmNvbnN0IGNoZWNrZXJTcXVhcmVTaXplID0gNDtcbmNvbnN0IENIRUNLRVJfRElNRU5TSU9OUyA9IHtcbiAgc3F1YXJlU2l6ZTogY2hlY2tlclNxdWFyZVNpemUsXG4gIHNpemU6IGNoZWNrZXJTcXVhcmVTaXplICogMixcbn07XG5cbmNvbnN0IGNvbG9yUGlja2VyU3dhdGNoQ3NzID0gXCI6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1mbGV4fTpob3N0KFtzY2FsZT1zXSl7YmxvY2stc2l6ZToxLjI1cmVtO2lubGluZS1zaXplOjEuMjVyZW19Omhvc3QoW3NjYWxlPW1dKXtibG9jay1zaXplOjEuNXJlbTtpbmxpbmUtc2l6ZToxLjVyZW19Omhvc3QoW3NjYWxlPWxdKXtibG9jay1zaXplOjJyZW07aW5saW5lLXNpemU6MnJlbX0uc3dhdGNoe292ZXJmbG93OmhpZGRlbjtibG9jay1zaXplOmluaGVyaXQ7aW5saW5lLXNpemU6aW5oZXJpdH0uc3dhdGNoIHJlY3R7dHJhbnNpdGlvbi1wcm9wZXJ0eTphbGw7dHJhbnNpdGlvbi1kdXJhdGlvbjoxNTBtczt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpfS5zd2F0Y2gtLW5vLWNvbG9yIHJlY3R7ZmlsbDp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9LnN3YXRjaC0tbm8tY29sb3IgbGluZXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfS5jaGVja2Vye2ZpbGw6I2NhY2FjYX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgQ29sb3JQaWNrZXJTd2F0Y2ggPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jb2xvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gIH1cbiAgaGFuZGxlQ29sb3JDaGFuZ2UoY29sb3IkMSkge1xuICAgIHRoaXMuaW50ZXJuYWxDb2xvciA9IGNvbG9yJDEgPyBjb2xvcihjb2xvciQxKSA6IG51bGw7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5oYW5kbGVDb2xvckNoYW5nZSh0aGlzLmNvbG9yKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXNFbXB0eSA9ICF0aGlzLmludGVybmFsQ29sb3I7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIFtDU1Muc3dhdGNoXTogdHJ1ZSxcbiAgICAgIFtDU1Mubm9Db2xvclN3YXRjaF06IGlzRW1wdHksXG4gICAgfTtcbiAgICByZXR1cm4gKGgoXCJzdmdcIiwgeyBjbGFzczogY2xhc3NlcywgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LCB0aGlzLnJlbmRlclN3YXRjaCgpKSk7XG4gIH1cbiAgcmVuZGVyU3dhdGNoKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlLCBlbCwgaW50ZXJuYWxDb2xvciB9ID0gdGhpcztcbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSBhY3RpdmUgPyBcIjEwMCVcIiA6IFwiMFwiO1xuICAgIGNvbnN0IHRoZW1lID0gZ2V0TW9kZU5hbWUoZWwpO1xuICAgIGNvbnN0IGJvcmRlckNvbG9yID0gdGhlbWUgPT09IFwibGlnaHRcIiA/IENPTE9SUy5ib3JkZXJMaWdodCA6IENPTE9SUy5ib3JkZXJEYXJrO1xuICAgIGNvbnN0IGNvbW1vblN3YXRjaFByb3BzID0ge1xuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIHJ4OiBib3JkZXJSYWRpdXMsXG4gICAgICBzdHJva2U6IGJvcmRlckNvbG9yLFxuICAgICAgLy8gc3Ryb2tlLXdpZHRoIGFuZCBjbGlwLXBhdGggYXJlIG5lZWRlZCB0byBoaWRlIG92ZXJmbG93aW5nIHBvcnRpb24gb2Ygc3Ryb2tlXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzcyNzMzNDYvMTk0MjE2XG4gICAgICAvLyB1c2luZyBhdHRyaWJ1dGUgdG8gd29yayBhcm91bmQgU3RlbmNpbCB1c2luZyB0aGUgcHJvcCBuYW1lIHZzIHRoZSBhdHRyaWJ1dGUgd2hlbiByZW5kZXJpbmdcbiAgICAgIFtcInN0cm9rZS13aWR0aFwiXTogXCIyXCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgfTtcbiAgICBjb25zdCBpc0VtcHR5ID0gIWludGVybmFsQ29sb3I7XG4gICAgaWYgKGlzRW1wdHkpIHtcbiAgICAgIHJldHVybiAoaChGcmFnbWVudCwgbnVsbCwgaChcImNsaXBQYXRoXCIsIHsgaWQ6IFwic2hhcGVcIiB9LCBoKFwicmVjdFwiLCB7IGhlaWdodDogXCIxMDAlXCIsIHJ4OiBib3JkZXJSYWRpdXMsIHdpZHRoOiBcIjEwMCVcIiB9KSksIGgoXCJyZWN0XCIsIHsgXCJjbGlwLXBhdGhcIjogYGluc2V0KDAgcm91bmQgJHtib3JkZXJSYWRpdXN9KWAsIHJ4OiBib3JkZXJSYWRpdXMsIC4uLmNvbW1vblN3YXRjaFByb3BzIH0pLCBoKFwibGluZVwiLCB7IFwiY2xpcC1wYXRoXCI6IFwidXJsKCNzaGFwZSlcIiwgXCJzdHJva2Utd2lkdGhcIjogXCIzXCIsIHgxOiBcIjEwMCVcIiwgeDI6IFwiMFwiLCB5MTogXCIwXCIsIHkyOiBcIjEwMCVcIiB9KSkpO1xuICAgIH1cbiAgICBjb25zdCBhbHBoYSA9IGludGVybmFsQ29sb3IuYWxwaGEoKTtcbiAgICBjb25zdCBoZXggPSBoZXhpZnkoaW50ZXJuYWxDb2xvcik7XG4gICAgY29uc3QgaGV4YSA9IGhleGlmeShpbnRlcm5hbENvbG9yLCBhbHBoYSA8IDEpO1xuICAgIHJldHVybiAoaChGcmFnbWVudCwgbnVsbCwgaChcInRpdGxlXCIsIG51bGwsIGhleGEpLCBoKFwiZGVmc1wiLCBudWxsLCBoKFwicGF0dGVyblwiLCB7IGhlaWdodDogQ0hFQ0tFUl9ESU1FTlNJT05TLnNpemUsIGlkOiBcImNoZWNrZXJcIiwgcGF0dGVyblVuaXRzOiBcInVzZXJTcGFjZU9uVXNlXCIsIHdpZHRoOiBDSEVDS0VSX0RJTUVOU0lPTlMuc2l6ZSwgeDogXCIwXCIsIHk6IFwiMFwiIH0sIGgoXCJyZWN0XCIsIHsgY2xhc3M6IENTUy5jaGVja2VyLCBoZWlnaHQ6IENIRUNLRVJfRElNRU5TSU9OUy5zcXVhcmVTaXplLCB3aWR0aDogQ0hFQ0tFUl9ESU1FTlNJT05TLnNxdWFyZVNpemUsIHg6IFwiMFwiLCB5OiBcIjBcIiB9KSwgaChcInJlY3RcIiwgeyBjbGFzczogQ1NTLmNoZWNrZXIsIGhlaWdodDogQ0hFQ0tFUl9ESU1FTlNJT05TLnNxdWFyZVNpemUsIHdpZHRoOiBDSEVDS0VSX0RJTUVOU0lPTlMuc3F1YXJlU2l6ZSwgeDogQ0hFQ0tFUl9ESU1FTlNJT05TLnNxdWFyZVNpemUsIHk6IENIRUNLRVJfRElNRU5TSU9OUy5zcXVhcmVTaXplIH0pKSksIGgoXCJyZWN0XCIsIHsgZmlsbDogXCJ1cmwoI2NoZWNrZXIpXCIsIGhlaWdodDogXCIxMDAlXCIsIHJ4OiBib3JkZXJSYWRpdXMsIHdpZHRoOiBcIjEwMCVcIiB9KSwgaChcInJlY3RcIiwgeyBmaWxsOiBoZXgsIHN0eWxlOiB7XG4gICAgICAgIFwiY2xpcC1wYXRoXCI6IGFscGhhIDwgMSA/IFwicG9seWdvbigxMDAlIDAsIDAgMCwgMCAxMDAlKVwiIDogYGluc2V0KDAgcm91bmQgJHtib3JkZXJSYWRpdXN9KWAsXG4gICAgICB9LCAuLi5jb21tb25Td2F0Y2hQcm9wcyB9KSwgYWxwaGEgPCAxID8gKGgoXCJyZWN0XCIsIHsgZmlsbDogaGV4YSwga2V5OiBcIm9wYWNpdHktZmlsbFwiLCBzdHlsZTogeyBcImNsaXAtcGF0aFwiOiBcInBvbHlnb24oMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSlcIiB9LCAuLi5jb21tb25Td2F0Y2hQcm9wcyB9KSkgOiBudWxsKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiY29sb3JcIjogW1wiaGFuZGxlQ29sb3JDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gY29sb3JQaWNrZXJTd2F0Y2hDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtY29sb3ItcGlja2VyLXN3YXRjaFwiLCB7XG4gICAgXCJhY3RpdmVcIjogWzUxNl0sXG4gICAgXCJjb2xvclwiOiBbMV0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWNvbG9yLXBpY2tlci1zd2F0Y2hcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtY29sb3ItcGlja2VyLXN3YXRjaFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIENvbG9yUGlja2VyU3dhdGNoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBDb2xvclBpY2tlclN3YXRjaCBhcyBDLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==