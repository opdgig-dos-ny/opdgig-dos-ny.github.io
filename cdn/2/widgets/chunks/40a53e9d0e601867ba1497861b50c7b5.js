"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-loader_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-loader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-loader.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteLoader: () => (/* binding */ CalciteLoader),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const CalciteLoader = _loader_js__WEBPACK_IMPORTED_MODULE_0__.L;
const defineCustomElement = _loader_js__WEBPACK_IMPORTED_MODULE_0__.d;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/guid.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/guid.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ guid)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
function gen(counts) {
  return counts
    .map((count) => {
    let out = "";
    for (let i = 0; i < count; i++) {
      out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return out;
  })
    .join("-");
}
const guid = () => gen([2, 1, 1, 1, 3]);




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/loader.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/loader.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ Loader),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const loaderCss = "@charset \"UTF-8\";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem)}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}@supports (display: grid){.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}}:host([type=determinate]){animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}";

const Loader = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.inline = false;
    this.label = undefined;
    this.scale = "m";
    this.type = undefined;
    this.value = 0;
    this.text = "";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const { el, inline, label, scale, text, type, value } = this;
    const id = el.id || (0,_guid_js__WEBPACK_IMPORTED_MODULE_0__.g)();
    const radiusRatio = 0.45;
    const size = inline ? this.getInlineSize(scale) : this.getSize(scale);
    const radius = size * radiusRatio;
    const viewbox = `0 0 ${size} ${size}`;
    const isDeterminate = type === "determinate";
    const circumference = 2 * radius * Math.PI;
    const progress = (value / 100) * circumference;
    const remaining = circumference - progress;
    const valueNow = Math.floor(value);
    const hostAttributes = {
      "aria-valuenow": valueNow,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      complete: valueNow === 100,
    };
    const svgAttributes = { r: radius, cx: size / 2, cy: size / 2 };
    const determinateStyle = { "stroke-dasharray": `${progress} ${remaining}` };
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Host, { "aria-label": label, id: id, role: "progressbar", ...(isDeterminate ? hostAttributes : {}) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: "loader__svgs" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg", { "aria-hidden": "true", class: "loader__svg loader__svg--1", viewBox: viewbox }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("circle", { ...svgAttributes })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg", { "aria-hidden": "true", class: "loader__svg loader__svg--2", viewBox: viewbox }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("circle", { ...svgAttributes })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg", { "aria-hidden": "true", class: "loader__svg loader__svg--3", viewBox: viewbox, ...(isDeterminate ? { style: determinateStyle } : {}) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("circle", { ...svgAttributes }))), text && (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: "loader__text" }, text), isDeterminate && (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: "loader__percentage" }, value)));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Return the proper sizes based on the scale property
   *
   * @param scale
   */
  getSize(scale) {
    return {
      s: 32,
      m: 56,
      l: 80,
    }[scale];
  }
  getInlineSize(scale) {
    return {
      s: 12,
      m: 16,
      l: 20,
    }[scale];
  }
  get el() { return this; }
  static get style() { return loaderCss; }
}, [1, "calcite-loader", {
    "inline": [516],
    "label": [1],
    "scale": [513],
    "type": [513],
    "value": [2],
    "text": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Loader);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNDBhNTNlOWQwZTYwMTg2N2JhMTQ5Nzg2MWI1MGM3YjUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzRTs7QUFFdEUsc0JBQXNCLHlDQUFNO0FBQzVCLDRCQUE0Qix5Q0FBcUI7O0FBRUg7Ozs7Ozs7Ozs7Ozs7OztBQ1Y5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tHO0FBQzVEOztBQUV0QyxzQ0FBc0Msd0NBQXdDLE1BQU0sc0NBQXNDLE1BQU0sa0JBQWtCLG1CQUFtQixhQUFhLG1CQUFtQix1QkFBdUIsVUFBVSwwQ0FBMEMsMENBQTBDLCtCQUErQixlQUFlLFVBQVUsc0JBQXNCLDJNQUEyTSxrREFBa0QsaUJBQWlCLHVEQUF1RCwyQkFBMkIscUNBQXFDLGlCQUFpQixzREFBc0QsMkJBQTJCLGtDQUFrQyxpQkFBaUIsc0RBQXNELDJCQUEyQixvQ0FBb0Msb0JBQW9CLGtCQUFrQixNQUFNLGFBQWEsY0FBYyxjQUFjLGtCQUFrQixzQ0FBc0MsaUJBQWlCLCtCQUErQiw2REFBNkQsb0JBQW9CLGtCQUFrQixjQUFjLGtCQUFrQiwrQkFBK0IsMENBQTBDLHVDQUF1Qyx1QkFBdUIsOERBQThELGlCQUFpQixzQkFBc0IsY0FBYyxrQkFBa0IsaUJBQWlCLFVBQVUsdUNBQXVDLHNDQUFzQyx1QkFBdUIsOERBQThELG1DQUFtQyxpQ0FBaUMsa0tBQWtLLGdDQUFnQyxhQUFhLGtCQUFrQixzQkFBc0Isd0JBQXdCLGlCQUFpQixxQkFBcUIsdUNBQXVDLHNDQUFzQyxtQ0FBbUMsaUNBQWlDLDBCQUEwQixnQkFBZ0IsK0JBQStCLGdCQUFnQiwrQkFBK0IsZ0JBQWdCLGdDQUFnQywwQkFBMEIsZUFBZSxrQ0FBa0Msd0NBQXdDLGVBQWUsMENBQTBDLGVBQWUsK0JBQStCLDJCQUEyQix5QkFBeUIsb0VBQW9FLGdCQUFnQixrQkFBa0IsV0FBVyxlQUFlLG9CQUFvQixlQUFlLGtCQUFrQiw2Q0FBNkMsaURBQWlELDhDQUE4QyxnRUFBZ0Usa0VBQWtFLDhCQUE4QixzQkFBc0IsV0FBVyxxQkFBcUIsOENBQThDLDZDQUE2Qyw2QkFBNkIsOENBQThDLDZDQUE2QyxrQkFBa0IsVUFBVSw0QkFBNEIsd0JBQXdCLDBKQUEwSixnQ0FBZ0MsVUFBVSw0QkFBNEIsd0JBQXdCLG9LQUFvSyxzQ0FBc0MsOEJBQThCLDRCQUE0Qix3QkFBd0IsMElBQTBJLGdCQUFnQiw4Q0FBOEMsaUtBQWlLLDJCQUEyQixHQUFHLHdDQUF3QyxvQkFBb0IsSUFBSSwrQ0FBK0MsaUNBQWlDLEtBQUssd0NBQXdDLG1DQUFtQyxnQkFBZ0IsOENBQThDLGlLQUFpSywyQkFBMkIsR0FBRyw4Q0FBOEMsb0JBQW9CLElBQUksK0NBQStDLGlDQUFpQyxLQUFLLDhDQUE4QyxtQ0FBbUMsZ0JBQWdCLDhDQUE4QyxtS0FBbUssMkJBQTJCLEdBQUcsOENBQThDLG9CQUFvQixJQUFJLCtDQUErQyxpQ0FBaUMsS0FBSyw4Q0FBOEMsbUNBQW1DLDhCQUE4QixHQUFHLCtCQUErQixJQUFJLHFDQUFxQyxJQUFJLHFDQUFxQyxLQUFLLGdDQUFnQyw0QkFBNEIsS0FBSywwQkFBMEIsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUU5NEwsNkJBQTZCLDBGQUFrQixlQUFlLCtFQUFXO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhDQUE4QztBQUMxRCx3QkFBd0IsMkNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU0sRUFBRSxLQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsK0JBQStCLHVCQUF1QixVQUFVLEVBQUUsVUFBVTtBQUM1RSxZQUFZLHlFQUFDLENBQUMsd0VBQUksSUFBSSx5RkFBeUYsR0FBRyxFQUFFLHlFQUFDLFVBQVUsdUJBQXVCLEVBQUUseUVBQUMsVUFBVSw4RUFBOEUsRUFBRSx5RUFBQyxhQUFhLGtCQUFrQixJQUFJLHlFQUFDLFVBQVUsOEVBQThFLEVBQUUseUVBQUMsYUFBYSxrQkFBa0IsSUFBSSx5RUFBQyxVQUFVLG9HQUFvRywwQkFBMEIsSUFBSSxHQUFHLEVBQUUseUVBQUMsYUFBYSxrQkFBa0IsYUFBYSx5RUFBQyxVQUFVLHVCQUF1QiwwQkFBMEIseUVBQUMsVUFBVSw2QkFBNkI7QUFDenJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFaUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2d1aWQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2xvYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBMIGFzIExvYWRlciwgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5cbmNvbnN0IENhbGNpdGVMb2FkZXIgPSBMb2FkZXI7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlTG9hZGVyLCBkZWZpbmVDdXN0b21FbGVtZW50IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5mdW5jdGlvbiBnZW4oY291bnRzKSB7XG4gIHJldHVybiBjb3VudHNcbiAgICAubWFwKChjb3VudCkgPT4ge1xuICAgIGxldCBvdXQgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgb3V0ICs9ICgoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApIHwgMCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfSlcbiAgICAuam9pbihcIi1cIik7XG59XG5jb25zdCBndWlkID0gKCkgPT4gZ2VuKFsyLCAxLCAxLCAxLCAzXSk7XG5cbmV4cG9ydCB7IGd1aWQgYXMgZyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC5qcyc7XG5cbmNvbnN0IGxvYWRlckNzcyA9IFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowfX06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4taW5saW5lOmF1dG87ZGlzcGxheTpub25lO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO29wYWNpdHk6MTttaW4tYmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItZm9udC1zaXplKTtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7c3Ryb2tlLXdpZHRoOjM7ZmlsbDpub25lO3RyYW5zZm9ybTpzY2FsZSgxLCAxKTthbmltYXRpb246bG9hZGVyLWNvbG9yLXNoaWZ0IGNhbGModmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpICogMiAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSkgYWx0ZXJuYXRlLXJldmVyc2UgaW5maW5pdGUgbGluZWFyO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1sb2FkZXItcGFkZGluZywgNHJlbSl9Omhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtbG9hZGVyLWZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7LS1jYWxjaXRlLWxvYWRlci1zaXplOjJyZW07LS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZTowLjc1cmVtfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLWxvYWRlci1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7LS1jYWxjaXRlLWxvYWRlci1zaXplOjRyZW07LS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZToxcmVtfTpob3N0KFtzY2FsZT1sXSl7LS1jYWxjaXRlLWxvYWRlci1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMik7LS1jYWxjaXRlLWxvYWRlci1zaXplOjZyZW07LS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZToxLjVyZW19Omhvc3QoW25vLXBhZGRpbmddKXtwYWRkaW5nLWJsb2NrOjBweH06aG9zdHtkaXNwbGF5OmZsZXh9LmxvYWRlcl9fdGV4dHtkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7bWFyZ2luLWJsb2NrLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSkgKyAxLjVyZW0pfS5sb2FkZXJfX3BlcmNlbnRhZ2V7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLWZvbnQtc2l6ZSk7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7aW5zZXQtaW5saW5lLXN0YXJ0OjUwJTttYXJnaW4taW5saW5lLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSkgLyAyICogLTEpO2xpbmUtaGVpZ2h0OjAuMjU7dHJhbnNmb3JtOnNjYWxlKDEsIDEpfS5sb2FkZXJfX3N2Z3N7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6dmlzaWJsZTtvcGFjaXR5OjE7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtpbnNldC1pbmxpbmUtc3RhcnQ6NTAlO21hcmdpbi1pbmxpbmUtc3RhcnQ6Y2FsYyh2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKSAvIDIgKiAtMSk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikgKiA2LjY2IC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTthbmltYXRpb24tbmFtZTpsb2FkZXItY2xvY2t3aXNlfS5sb2FkZXJfX3N2Z3twb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1ibG9jay1zdGFydDowcHg7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7b3ZlcmZsb3c6dmlzaWJsZTtpbnNldC1pbmxpbmUtc3RhcnQ6MDtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXJ9QHN1cHBvcnRzIChkaXNwbGF5OiBncmlkKXsubG9hZGVyX19zdmctLTF7YW5pbWF0aW9uLW5hbWU6bG9hZGVyLW9mZnNldC0xfS5sb2FkZXJfX3N2Zy0tMnthbmltYXRpb24tbmFtZTpsb2FkZXItb2Zmc2V0LTJ9LmxvYWRlcl9fc3ZnLS0ze2FuaW1hdGlvbi1uYW1lOmxvYWRlci1vZmZzZXQtM319Omhvc3QoW3R5cGU9ZGV0ZXJtaW5hdGVdKXthbmltYXRpb246bm9uZTtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9Omhvc3QoW3R5cGU9ZGV0ZXJtaW5hdGVdKSAubG9hZGVyX19zdmdze2FuaW1hdGlvbjpub25lfTpob3N0KFt0eXBlPWRldGVybWluYXRlXSkgLmxvYWRlcl9fc3ZnLS0ze2FuaW1hdGlvbjpub25lO3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtzdHJva2UtZGFzaGFycmF5OjE1MC43OTYzMjt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyk7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3QpIGxpbmVhcn06aG9zdChbaW5saW5lXSl7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjBweDthbmltYXRpb246bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDoyO3BhZGRpbmctYmxvY2s6MHB4O2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpO21pbi1ibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSk7bWFyZ2luLWlubGluZS1lbmQ6Y2FsYyh2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSkgKiAwLjUpO3ZlcnRpY2FsLWFsaWduOmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpICogLTEgKiAwLjIpfTpob3N0KFtpbmxpbmVdKSAubG9hZGVyX19zdmdze2luc2V0LWJsb2NrLXN0YXJ0OjBweDttYXJnaW46MHB4O2luc2V0LWlubGluZS1zdGFydDowO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKX06aG9zdChbaW5saW5lXSkgLmxvYWRlcl9fc3Zne2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKX06aG9zdChbY29tcGxldGVdKXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKDAuNzUsIDAuNzUpO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zaXRpb246b3BhY2l0eSB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBsaW5lYXIgMTAwMG1zLCB0cmFuc2Zvcm0gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgbGluZWFyIDEwMDBtc306aG9zdChbY29tcGxldGVdKSAubG9hZGVyX19zdmdze29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUoMC43NSwgMC43NSk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNpdGlvbjpvcGFjaXR5IGNhbGMoMTgwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpIGxpbmVhciA4MDBtcywgdHJhbnNmb3JtIGNhbGMoMTgwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpIGxpbmVhciA4MDBtc306aG9zdChbY29tcGxldGVdKSAubG9hZGVyX19wZXJjZW50YWdle2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO3RyYW5zZm9ybTpzY2FsZSgxLjA1LCAxLjA1KTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2l0aW9uOmNvbG9yIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGxpbmVhciwgdHJhbnNmb3JtIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGxpbmVhcn0ubG9hZGVyX19zdmctLTF7c3Ryb2tlLWRhc2hhcnJheToyNy45MjUyNDQ0NDQ0IDEzOS42MjYyMjIyMjIyO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDQuOCAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9QGtleWZyYW1lcyBsb2FkZXItb2Zmc2V0LTF7MCV7c3Ryb2tlLWRhc2hhcnJheToyNy45MjUyNDQ0NDQ0IDI1MS4zMjcyO3N0cm9rZS1kYXNob2Zmc2V0OjB9NTAle3N0cm9rZS1kYXNoYXJyYXk6MTM5LjYyNjIyMjIyMjIgMTM5LjYyNjIyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTgzLjc3NTczMzMzMzN9MTAwJXtzdHJva2UtZGFzaGFycmF5OjI3LjkyNTI0NDQ0NDQgMjUxLjMyNzI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTI3OS4yNTI0NDQ0NDQ0fX0ubG9hZGVyX19zdmctLTJ7c3Ryb2tlLWRhc2hhcnJheTo1NS44NTA0ODg4ODg5IDEzOS42MjYyMjIyMjIyO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDYuNCAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9QGtleWZyYW1lcyBsb2FkZXItb2Zmc2V0LTJ7MCV7c3Ryb2tlLWRhc2hhcnJheTo1NS44NTA0ODg4ODg5IDIyMy40MDE5NTU1NTU2O3N0cm9rZS1kYXNob2Zmc2V0OjB9NTAle3N0cm9rZS1kYXNoYXJyYXk6MTM5LjYyNjIyMjIyMjIgMTM5LjYyNjIyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTk3LjczODM1NTU1NTZ9MTAwJXtzdHJva2UtZGFzaGFycmF5OjU1Ljg1MDQ4ODg4ODkgMjIzLjQwMTk1NTU1NTY7c3Ryb2tlLWRhc2hvZmZzZXQ6LTI3OS4yNTI0NDQ0NDQ0fX0ubG9hZGVyX19zdmctLTN7c3Ryb2tlLWRhc2hhcnJheToxMy45NjI2MjIyMjIyIDEzOS42MjYyMjIyMjIyO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDcuNzM0IC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX1Aa2V5ZnJhbWVzIGxvYWRlci1vZmZzZXQtM3swJXtzdHJva2UtZGFzaGFycmF5OjEzLjk2MjYyMjIyMjIgMjY1LjI4OTgyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6MH01MCV7c3Ryb2tlLWRhc2hhcnJheToxMzkuNjI2MjIyMjIyMiAxMzkuNjI2MjIyMjIyMjtzdHJva2UtZGFzaG9mZnNldDotNzYuNzk0NDIyMjIyMn0xMDAle3N0cm9rZS1kYXNoYXJyYXk6MTMuOTYyNjIyMjIyMiAyNjUuMjg5ODIyMjIyMjtzdHJva2UtZGFzaG9mZnNldDotMjc5LjI1MjQ0NDQ0NDR9fUBrZXlmcmFtZXMgbG9hZGVyLWNvbG9yLXNoaWZ0ezAle3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0zMyV7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYnJhbmQtcHJlc3MpfTY2JXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZC1ob3Zlcil9MTAwJXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9fUBrZXlmcmFtZXMgbG9hZGVyLWNsb2Nrd2lzZXsxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IExvYWRlciA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5pbmxpbmUgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnR5cGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgdGhpcy50ZXh0ID0gXCJcIjtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgaW5saW5lLCBsYWJlbCwgc2NhbGUsIHRleHQsIHR5cGUsIHZhbHVlIH0gPSB0aGlzO1xuICAgIGNvbnN0IGlkID0gZWwuaWQgfHwgZ3VpZCgpO1xuICAgIGNvbnN0IHJhZGl1c1JhdGlvID0gMC40NTtcbiAgICBjb25zdCBzaXplID0gaW5saW5lID8gdGhpcy5nZXRJbmxpbmVTaXplKHNjYWxlKSA6IHRoaXMuZ2V0U2l6ZShzY2FsZSk7XG4gICAgY29uc3QgcmFkaXVzID0gc2l6ZSAqIHJhZGl1c1JhdGlvO1xuICAgIGNvbnN0IHZpZXdib3ggPSBgMCAwICR7c2l6ZX0gJHtzaXplfWA7XG4gICAgY29uc3QgaXNEZXRlcm1pbmF0ZSA9IHR5cGUgPT09IFwiZGV0ZXJtaW5hdGVcIjtcbiAgICBjb25zdCBjaXJjdW1mZXJlbmNlID0gMiAqIHJhZGl1cyAqIE1hdGguUEk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSAodmFsdWUgLyAxMDApICogY2lyY3VtZmVyZW5jZTtcbiAgICBjb25zdCByZW1haW5pbmcgPSBjaXJjdW1mZXJlbmNlIC0gcHJvZ3Jlc3M7XG4gICAgY29uc3QgdmFsdWVOb3cgPSBNYXRoLmZsb29yKHZhbHVlKTtcbiAgICBjb25zdCBob3N0QXR0cmlidXRlcyA9IHtcbiAgICAgIFwiYXJpYS12YWx1ZW5vd1wiOiB2YWx1ZU5vdyxcbiAgICAgIFwiYXJpYS12YWx1ZW1pblwiOiAwLFxuICAgICAgXCJhcmlhLXZhbHVlbWF4XCI6IDEwMCxcbiAgICAgIGNvbXBsZXRlOiB2YWx1ZU5vdyA9PT0gMTAwLFxuICAgIH07XG4gICAgY29uc3Qgc3ZnQXR0cmlidXRlcyA9IHsgcjogcmFkaXVzLCBjeDogc2l6ZSAvIDIsIGN5OiBzaXplIC8gMiB9O1xuICAgIGNvbnN0IGRldGVybWluYXRlU3R5bGUgPSB7IFwic3Ryb2tlLWRhc2hhcnJheVwiOiBgJHtwcm9ncmVzc30gJHtyZW1haW5pbmd9YCB9O1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1sYWJlbFwiOiBsYWJlbCwgaWQ6IGlkLCByb2xlOiBcInByb2dyZXNzYmFyXCIsIC4uLihpc0RldGVybWluYXRlID8gaG9zdEF0dHJpYnV0ZXMgOiB7fSkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImxvYWRlcl9fc3Znc1wiIH0sIGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogXCJsb2FkZXJfX3N2ZyBsb2FkZXJfX3N2Zy0tMVwiLCB2aWV3Qm94OiB2aWV3Ym94IH0sIGgoXCJjaXJjbGVcIiwgeyAuLi5zdmdBdHRyaWJ1dGVzIH0pKSwgaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBcImxvYWRlcl9fc3ZnIGxvYWRlcl9fc3ZnLS0yXCIsIHZpZXdCb3g6IHZpZXdib3ggfSwgaChcImNpcmNsZVwiLCB7IC4uLnN2Z0F0dHJpYnV0ZXMgfSkpLCBoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IFwibG9hZGVyX19zdmcgbG9hZGVyX19zdmctLTNcIiwgdmlld0JveDogdmlld2JveCwgLi4uKGlzRGV0ZXJtaW5hdGUgPyB7IHN0eWxlOiBkZXRlcm1pbmF0ZVN0eWxlIH0gOiB7fSkgfSwgaChcImNpcmNsZVwiLCB7IC4uLnN2Z0F0dHJpYnV0ZXMgfSkpKSwgdGV4dCAmJiBoKFwiZGl2XCIsIHsgY2xhc3M6IFwibG9hZGVyX190ZXh0XCIgfSwgdGV4dCksIGlzRGV0ZXJtaW5hdGUgJiYgaChcImRpdlwiLCB7IGNsYXNzOiBcImxvYWRlcl9fcGVyY2VudGFnZVwiIH0sIHZhbHVlKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHByb3BlciBzaXplcyBiYXNlZCBvbiB0aGUgc2NhbGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHNjYWxlXG4gICAqL1xuICBnZXRTaXplKHNjYWxlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHM6IDMyLFxuICAgICAgbTogNTYsXG4gICAgICBsOiA4MCxcbiAgICB9W3NjYWxlXTtcbiAgfVxuICBnZXRJbmxpbmVTaXplKHNjYWxlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHM6IDEyLFxuICAgICAgbTogMTYsXG4gICAgICBsOiAyMCxcbiAgICB9W3NjYWxlXTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBsb2FkZXJDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtbG9hZGVyXCIsIHtcbiAgICBcImlubGluZVwiOiBbNTE2XSxcbiAgICBcImxhYmVsXCI6IFsxXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwidHlwZVwiOiBbNTEzXSxcbiAgICBcInZhbHVlXCI6IFsyXSxcbiAgICBcInRleHRcIjogWzFdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtbG9hZGVyXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIExvYWRlcik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgTG9hZGVyIGFzIEwsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9