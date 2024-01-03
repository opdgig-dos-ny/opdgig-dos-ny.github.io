"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-graph_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-graph.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-graph.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteGraph: () => (/* binding */ CalciteGraph),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _graph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph.js */ "./node_modules/@esri/calcite-components/dist/components/graph.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const CalciteGraph = _graph_js__WEBPACK_IMPORTED_MODULE_0__.G;
const defineCustomElement = _graph_js__WEBPACK_IMPORTED_MODULE_0__.d;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/graph.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/graph.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ Graph),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




/**
 * Calculate slope of the tangents
 * uses Steffen interpolation as it's monotonic
 * http://jrwalsh1.github.io/posts/interpolations/
 *
 * @param p0
 * @param p1
 * @param p2
 */
function slope(p0, p1, p2) {
  const dx = p1[0] - p0[0];
  const dx1 = p2[0] - p1[0];
  const dy = p1[1] - p0[1];
  const dy1 = p2[1] - p1[1];
  const m = dy / (dx || (dx1 < 0 && 0));
  const m1 = dy1 / (dx1 || (dx < 0 && 0));
  const p = (m * dx1 + m1 * dx) / (dx + dx1);
  return (Math.sign(m) + Math.sign(m1)) * Math.min(Math.abs(m), Math.abs(m1), 0.5 * Math.abs(p)) || 0;
}
/**
 * Calculate slope for just one tangent (single-sided)
 *
 * @param p0
 * @param p1
 * @param m
 */
function slopeSingle(p0, p1, m) {
  const dx = p1[0] - p0[0];
  const dy = p1[1] - p0[1];
  return dx ? ((3 * dy) / dx - m) / 2 : m;
}
/**
 * Given two points and their tangent slopes,
 * calculate the bezier handle coordinates and return draw command.
 *
 * Translates Hermite Spline to Bézier curve:
 * https://stackoverflow.com/questions/42574940/
 *
 * @param p0
 * @param p1
 * @param m0
 * @param m1
 * @param t
 */
function bezier(p0, p1, m0, m1, t) {
  const [x0, y0] = p0;
  const [x1, y1] = p1;
  const dx = (x1 - x0) / 3;
  const h1 = t([x0 + dx, y0 + dx * m0]).join(",");
  const h2 = t([x1 - dx, y1 - dx * m1]).join(",");
  const p = t([x1, y1]).join(",");
  return `C ${h1} ${h2} ${p}`;
}
/**
 * Generate a function which will translate a point
 * from the data coordinate space to svg viewbox oriented pixels
 *
 * @param root0
 * @param root0.width
 * @param root0.height
 * @param root0.min
 * @param root0.max
 */
function translate({ width, height, min, max }) {
  const rangeX = max[0] - min[0];
  const rangeY = max[1] - min[1];
  return (point) => {
    const x = ((point[0] - min[0]) / rangeX) * width;
    const y = height - (point[1] / rangeY) * height;
    return [x, y];
  };
}
/**
 * Get the min and max values from the dataset
 *
 * @param data
 */
function range(data) {
  const [startX, startY] = data[0];
  const min = [startX, startY];
  const max = [startX, startY];
  return data.reduce(({ min, max }, [x, y]) => ({
    min: [Math.min(min[0], x), Math.min(min[1], y)],
    max: [Math.max(max[0], x), Math.max(max[1], y)],
  }), { min, max });
}
/**
 * Generate drawing commands for an area graph
 * returns a string can can be passed directly to a path element's `d` attribute
 *
 * @param root0
 * @param root0.data
 * @param root0.min
 * @param root0.max
 * @param root0.t
 */
function area({ data, min, max, t }) {
  if (data.length === 0) {
    return "";
  }
  // important points for beginning and ending the path
  const [startX, startY] = t(data[0]);
  const [minX, minY] = t(min);
  const [maxX] = t(max);
  // keep track of previous slope/points
  let m;
  let p0;
  let p1;
  // iterate over data points, calculating command for each
  const commands = data.reduce((acc, point, i) => {
    p0 = data[i - 2];
    p1 = data[i - 1];
    if (i > 1) {
      const m1 = slope(p0, p1, point);
      const m0 = m === undefined ? slopeSingle(p0, p1, m1) : m;
      const command = bezier(p0, p1, m0, m1, t);
      m = m1;
      return `${acc} ${command}`;
    }
    return acc;
  }, `M ${minX},${minY} L ${minX},${startY} L ${startX},${startY}`);
  // close the path
  const last = data[data.length - 1];
  const end = bezier(p1, last, m, slopeSingle(p1, last, m), t);
  return `${commands} ${end} L ${maxX},${minY} Z`;
}

const graphCss = ":host{display:block;block-size:100%}.svg{fill:currentColor;stroke:transparent;margin:0px;display:block;block-size:100%;inline-size:100%;padding:0px}.svg .graph-path--highlight{fill:var(--calcite-ui-brand);opacity:0.5}:host([hidden]){display:none}[hidden]{display:none}";

const Graph = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.graphId = `calcite-graph-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_0__.g)()}`;
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_1__.c)("resize", () => (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.forceUpdate)(this));
    this.data = [];
    this.colorStops = undefined;
    this.highlightMin = undefined;
    this.highlightMax = undefined;
    this.min = undefined;
    this.max = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.resizeObserver?.observe(this.el);
  }
  disconnectedCallback() {
    this.resizeObserver?.disconnect();
  }
  render() {
    const { data, colorStops, el, highlightMax, highlightMin, min, max } = this;
    const id = this.graphId;
    const { clientHeight: height, clientWidth: width } = el;
    // if we have no data, return empty svg
    if (!data || data.length === 0) {
      return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("svg", { "aria-hidden": "true", class: "svg", height: height, preserveAspectRatio: "none", viewBox: `0 0 ${width} ${height}`, width: width }));
    }
    const { min: rangeMin, max: rangeMax } = range(data);
    let currentMin = rangeMin;
    let currentMax = rangeMax;
    if (min < rangeMin[0] || min > rangeMin[0]) {
      currentMin = [min, 0];
    }
    if (max > rangeMax[0] || max < rangeMax[0]) {
      currentMax = [max, rangeMax[1]];
    }
    const t = translate({ min: currentMin, max: currentMax, width, height });
    const [hMinX] = t([highlightMin, currentMax[1]]);
    const [hMaxX] = t([highlightMax, currentMax[1]]);
    const areaPath = area({ data, min: rangeMin, max: rangeMax, t });
    const fill = colorStops ? `url(#linear-gradient-${id})` : undefined;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("svg", { "aria-hidden": "true", class: "svg", height: height, preserveAspectRatio: "none", viewBox: `0 0 ${width} ${height}`, width: width }, colorStops ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("defs", null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("linearGradient", { id: `linear-gradient-${id}`, x1: "0", x2: "1", y1: "0", y2: "0" }, colorStops.map(({ offset, color, opacity }) => ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("stop", { offset: `${offset * 100}%`, "stop-color": color, "stop-opacity": opacity })))))) : null, highlightMin !== undefined ? ([
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("mask", { height: "100%", id: `${id}1`, width: "100%", x: "0%", y: "0%" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: `
            M 0,0
            L ${hMinX - 1},0
            L ${hMinX - 1},${height}
            L 0,${height}
            Z
          `, fill: "white" })),
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("mask", { height: "100%", id: `${id}2`, width: "100%", x: "0%", y: "0%" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: `
            M ${hMinX + 1},0
            L ${hMaxX - 1},0
            L ${hMaxX - 1},${height}
            L ${hMinX + 1}, ${height}
            Z
          `, fill: "white" })),
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("mask", { height: "100%", id: `${id}3`, width: "100%", x: "0%", y: "0%" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: `
                M ${hMaxX + 1},0
                L ${width},0
                L ${width},${height}
                L ${hMaxX + 1}, ${height}
                Z
              `, fill: "white" })),
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { class: "graph-path", d: areaPath, fill: fill, mask: `url(#${id}1)` }),
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { class: "graph-path--highlight", d: areaPath, fill: fill, mask: `url(#${id}2)` }),
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { class: "graph-path", d: areaPath, fill: fill, mask: `url(#${id}3)` }),
    ]) : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { class: "graph-path", d: areaPath, fill: fill }))));
  }
  get el() { return this; }
  static get style() { return graphCss; }
}, [1, "calcite-graph", {
    "data": [16],
    "colorStops": [16],
    "highlightMin": [2, "highlight-min"],
    "highlightMax": [2, "highlight-max"],
    "min": [514],
    "max": [514]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-graph"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-graph":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Graph);
      }
      break;
  } });
}
defineCustomElement();




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

/***/ "./node_modules/@esri/calcite-components/dist/components/observers.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/observers.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOTk4MDdiNWE4NjgwOGMyOGMxNWNiYTA0M2Q3NTQyNWYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvRTs7QUFFcEUscUJBQXFCLHdDQUFLO0FBQzFCLDRCQUE0Qix3Q0FBcUI7O0FBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RztBQUNuRTtBQUNlOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlCQUF5QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBLEdBQUcsS0FBSyxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLWdyYXBoLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9ncmFwaC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvZ3VpZC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvb2JzZXJ2ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEcgYXMgR3JhcGgsIGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi9ncmFwaC5qcyc7XG5cbmNvbnN0IENhbGNpdGVHcmFwaCA9IEdyYXBoO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZUdyYXBoLCBkZWZpbmVDdXN0b21FbGVtZW50IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBmb3JjZVVwZGF0ZSwgaCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuXG4vKipcbiAqIENhbGN1bGF0ZSBzbG9wZSBvZiB0aGUgdGFuZ2VudHNcbiAqIHVzZXMgU3RlZmZlbiBpbnRlcnBvbGF0aW9uIGFzIGl0J3MgbW9ub3RvbmljXG4gKiBodHRwOi8vanJ3YWxzaDEuZ2l0aHViLmlvL3Bvc3RzL2ludGVycG9sYXRpb25zL1xuICpcbiAqIEBwYXJhbSBwMFxuICogQHBhcmFtIHAxXG4gKiBAcGFyYW0gcDJcbiAqL1xuZnVuY3Rpb24gc2xvcGUocDAsIHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxWzBdIC0gcDBbMF07XG4gIGNvbnN0IGR4MSA9IHAyWzBdIC0gcDFbMF07XG4gIGNvbnN0IGR5ID0gcDFbMV0gLSBwMFsxXTtcbiAgY29uc3QgZHkxID0gcDJbMV0gLSBwMVsxXTtcbiAgY29uc3QgbSA9IGR5IC8gKGR4IHx8IChkeDEgPCAwICYmIDApKTtcbiAgY29uc3QgbTEgPSBkeTEgLyAoZHgxIHx8IChkeCA8IDAgJiYgMCkpO1xuICBjb25zdCBwID0gKG0gKiBkeDEgKyBtMSAqIGR4KSAvIChkeCArIGR4MSk7XG4gIHJldHVybiAoTWF0aC5zaWduKG0pICsgTWF0aC5zaWduKG0xKSkgKiBNYXRoLm1pbihNYXRoLmFicyhtKSwgTWF0aC5hYnMobTEpLCAwLjUgKiBNYXRoLmFicyhwKSkgfHwgMDtcbn1cbi8qKlxuICogQ2FsY3VsYXRlIHNsb3BlIGZvciBqdXN0IG9uZSB0YW5nZW50IChzaW5nbGUtc2lkZWQpXG4gKlxuICogQHBhcmFtIHAwXG4gKiBAcGFyYW0gcDFcbiAqIEBwYXJhbSBtXG4gKi9cbmZ1bmN0aW9uIHNsb3BlU2luZ2xlKHAwLCBwMSwgbSkge1xuICBjb25zdCBkeCA9IHAxWzBdIC0gcDBbMF07XG4gIGNvbnN0IGR5ID0gcDFbMV0gLSBwMFsxXTtcbiAgcmV0dXJuIGR4ID8gKCgzICogZHkpIC8gZHggLSBtKSAvIDIgOiBtO1xufVxuLyoqXG4gKiBHaXZlbiB0d28gcG9pbnRzIGFuZCB0aGVpciB0YW5nZW50IHNsb3BlcyxcbiAqIGNhbGN1bGF0ZSB0aGUgYmV6aWVyIGhhbmRsZSBjb29yZGluYXRlcyBhbmQgcmV0dXJuIGRyYXcgY29tbWFuZC5cbiAqXG4gKiBUcmFuc2xhdGVzIEhlcm1pdGUgU3BsaW5lIHRvIELDqXppZXIgY3VydmU6XG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MjU3NDk0MC9cbiAqXG4gKiBAcGFyYW0gcDBcbiAqIEBwYXJhbSBwMVxuICogQHBhcmFtIG0wXG4gKiBAcGFyYW0gbTFcbiAqIEBwYXJhbSB0XG4gKi9cbmZ1bmN0aW9uIGJlemllcihwMCwgcDEsIG0wLCBtMSwgdCkge1xuICBjb25zdCBbeDAsIHkwXSA9IHAwO1xuICBjb25zdCBbeDEsIHkxXSA9IHAxO1xuICBjb25zdCBkeCA9ICh4MSAtIHgwKSAvIDM7XG4gIGNvbnN0IGgxID0gdChbeDAgKyBkeCwgeTAgKyBkeCAqIG0wXSkuam9pbihcIixcIik7XG4gIGNvbnN0IGgyID0gdChbeDEgLSBkeCwgeTEgLSBkeCAqIG0xXSkuam9pbihcIixcIik7XG4gIGNvbnN0IHAgPSB0KFt4MSwgeTFdKS5qb2luKFwiLFwiKTtcbiAgcmV0dXJuIGBDICR7aDF9ICR7aDJ9ICR7cH1gO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIGZ1bmN0aW9uIHdoaWNoIHdpbGwgdHJhbnNsYXRlIGEgcG9pbnRcbiAqIGZyb20gdGhlIGRhdGEgY29vcmRpbmF0ZSBzcGFjZSB0byBzdmcgdmlld2JveCBvcmllbnRlZCBwaXhlbHNcbiAqXG4gKiBAcGFyYW0gcm9vdDBcbiAqIEBwYXJhbSByb290MC53aWR0aFxuICogQHBhcmFtIHJvb3QwLmhlaWdodFxuICogQHBhcmFtIHJvb3QwLm1pblxuICogQHBhcmFtIHJvb3QwLm1heFxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGUoeyB3aWR0aCwgaGVpZ2h0LCBtaW4sIG1heCB9KSB7XG4gIGNvbnN0IHJhbmdlWCA9IG1heFswXSAtIG1pblswXTtcbiAgY29uc3QgcmFuZ2VZID0gbWF4WzFdIC0gbWluWzFdO1xuICByZXR1cm4gKHBvaW50KSA9PiB7XG4gICAgY29uc3QgeCA9ICgocG9pbnRbMF0gLSBtaW5bMF0pIC8gcmFuZ2VYKSAqIHdpZHRoO1xuICAgIGNvbnN0IHkgPSBoZWlnaHQgLSAocG9pbnRbMV0gLyByYW5nZVkpICogaGVpZ2h0O1xuICAgIHJldHVybiBbeCwgeV07XG4gIH07XG59XG4vKipcbiAqIEdldCB0aGUgbWluIGFuZCBtYXggdmFsdWVzIGZyb20gdGhlIGRhdGFzZXRcbiAqXG4gKiBAcGFyYW0gZGF0YVxuICovXG5mdW5jdGlvbiByYW5nZShkYXRhKSB7XG4gIGNvbnN0IFtzdGFydFgsIHN0YXJ0WV0gPSBkYXRhWzBdO1xuICBjb25zdCBtaW4gPSBbc3RhcnRYLCBzdGFydFldO1xuICBjb25zdCBtYXggPSBbc3RhcnRYLCBzdGFydFldO1xuICByZXR1cm4gZGF0YS5yZWR1Y2UoKHsgbWluLCBtYXggfSwgW3gsIHldKSA9PiAoe1xuICAgIG1pbjogW01hdGgubWluKG1pblswXSwgeCksIE1hdGgubWluKG1pblsxXSwgeSldLFxuICAgIG1heDogW01hdGgubWF4KG1heFswXSwgeCksIE1hdGgubWF4KG1heFsxXSwgeSldLFxuICB9KSwgeyBtaW4sIG1heCB9KTtcbn1cbi8qKlxuICogR2VuZXJhdGUgZHJhd2luZyBjb21tYW5kcyBmb3IgYW4gYXJlYSBncmFwaFxuICogcmV0dXJucyBhIHN0cmluZyBjYW4gY2FuIGJlIHBhc3NlZCBkaXJlY3RseSB0byBhIHBhdGggZWxlbWVudCdzIGBkYCBhdHRyaWJ1dGVcbiAqXG4gKiBAcGFyYW0gcm9vdDBcbiAqIEBwYXJhbSByb290MC5kYXRhXG4gKiBAcGFyYW0gcm9vdDAubWluXG4gKiBAcGFyYW0gcm9vdDAubWF4XG4gKiBAcGFyYW0gcm9vdDAudFxuICovXG5mdW5jdGlvbiBhcmVhKHsgZGF0YSwgbWluLCBtYXgsIHQgfSkge1xuICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICAvLyBpbXBvcnRhbnQgcG9pbnRzIGZvciBiZWdpbm5pbmcgYW5kIGVuZGluZyB0aGUgcGF0aFxuICBjb25zdCBbc3RhcnRYLCBzdGFydFldID0gdChkYXRhWzBdKTtcbiAgY29uc3QgW21pblgsIG1pblldID0gdChtaW4pO1xuICBjb25zdCBbbWF4WF0gPSB0KG1heCk7XG4gIC8vIGtlZXAgdHJhY2sgb2YgcHJldmlvdXMgc2xvcGUvcG9pbnRzXG4gIGxldCBtO1xuICBsZXQgcDA7XG4gIGxldCBwMTtcbiAgLy8gaXRlcmF0ZSBvdmVyIGRhdGEgcG9pbnRzLCBjYWxjdWxhdGluZyBjb21tYW5kIGZvciBlYWNoXG4gIGNvbnN0IGNvbW1hbmRzID0gZGF0YS5yZWR1Y2UoKGFjYywgcG9pbnQsIGkpID0+IHtcbiAgICBwMCA9IGRhdGFbaSAtIDJdO1xuICAgIHAxID0gZGF0YVtpIC0gMV07XG4gICAgaWYgKGkgPiAxKSB7XG4gICAgICBjb25zdCBtMSA9IHNsb3BlKHAwLCBwMSwgcG9pbnQpO1xuICAgICAgY29uc3QgbTAgPSBtID09PSB1bmRlZmluZWQgPyBzbG9wZVNpbmdsZShwMCwgcDEsIG0xKSA6IG07XG4gICAgICBjb25zdCBjb21tYW5kID0gYmV6aWVyKHAwLCBwMSwgbTAsIG0xLCB0KTtcbiAgICAgIG0gPSBtMTtcbiAgICAgIHJldHVybiBgJHthY2N9ICR7Y29tbWFuZH1gO1xuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCBgTSAke21pblh9LCR7bWluWX0gTCAke21pblh9LCR7c3RhcnRZfSBMICR7c3RhcnRYfSwke3N0YXJ0WX1gKTtcbiAgLy8gY2xvc2UgdGhlIHBhdGhcbiAgY29uc3QgbGFzdCA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXTtcbiAgY29uc3QgZW5kID0gYmV6aWVyKHAxLCBsYXN0LCBtLCBzbG9wZVNpbmdsZShwMSwgbGFzdCwgbSksIHQpO1xuICByZXR1cm4gYCR7Y29tbWFuZHN9ICR7ZW5kfSBMICR7bWF4WH0sJHttaW5ZfSBaYDtcbn1cblxuY29uc3QgZ3JhcGhDc3MgPSBcIjpob3N0e2Rpc3BsYXk6YmxvY2s7YmxvY2stc2l6ZToxMDAlfS5zdmd7ZmlsbDpjdXJyZW50Q29sb3I7c3Ryb2tlOnRyYW5zcGFyZW50O21hcmdpbjowcHg7ZGlzcGxheTpibG9jaztibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTtwYWRkaW5nOjBweH0uc3ZnIC5ncmFwaC1wYXRoLS1oaWdobGlnaHR7ZmlsbDp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtvcGFjaXR5OjAuNX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgR3JhcGggPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuZ3JhcGhJZCA9IGBjYWxjaXRlLWdyYXBoLSR7Z3VpZCgpfWA7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwicmVzaXplXCIsICgpID0+IGZvcmNlVXBkYXRlKHRoaXMpKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLmNvbG9yU3RvcHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oaWdobGlnaHRNaW4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oaWdobGlnaHRNYXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tYXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmVsKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSwgY29sb3JTdG9wcywgZWwsIGhpZ2hsaWdodE1heCwgaGlnaGxpZ2h0TWluLCBtaW4sIG1heCB9ID0gdGhpcztcbiAgICBjb25zdCBpZCA9IHRoaXMuZ3JhcGhJZDtcbiAgICBjb25zdCB7IGNsaWVudEhlaWdodDogaGVpZ2h0LCBjbGllbnRXaWR0aDogd2lkdGggfSA9IGVsO1xuICAgIC8vIGlmIHdlIGhhdmUgbm8gZGF0YSwgcmV0dXJuIGVtcHR5IHN2Z1xuICAgIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIChoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IFwic3ZnXCIsIGhlaWdodDogaGVpZ2h0LCBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBcIm5vbmVcIiwgdmlld0JveDogYDAgMCAke3dpZHRofSAke2hlaWdodH1gLCB3aWR0aDogd2lkdGggfSkpO1xuICAgIH1cbiAgICBjb25zdCB7IG1pbjogcmFuZ2VNaW4sIG1heDogcmFuZ2VNYXggfSA9IHJhbmdlKGRhdGEpO1xuICAgIGxldCBjdXJyZW50TWluID0gcmFuZ2VNaW47XG4gICAgbGV0IGN1cnJlbnRNYXggPSByYW5nZU1heDtcbiAgICBpZiAobWluIDwgcmFuZ2VNaW5bMF0gfHwgbWluID4gcmFuZ2VNaW5bMF0pIHtcbiAgICAgIGN1cnJlbnRNaW4gPSBbbWluLCAwXTtcbiAgICB9XG4gICAgaWYgKG1heCA+IHJhbmdlTWF4WzBdIHx8IG1heCA8IHJhbmdlTWF4WzBdKSB7XG4gICAgICBjdXJyZW50TWF4ID0gW21heCwgcmFuZ2VNYXhbMV1dO1xuICAgIH1cbiAgICBjb25zdCB0ID0gdHJhbnNsYXRlKHsgbWluOiBjdXJyZW50TWluLCBtYXg6IGN1cnJlbnRNYXgsIHdpZHRoLCBoZWlnaHQgfSk7XG4gICAgY29uc3QgW2hNaW5YXSA9IHQoW2hpZ2hsaWdodE1pbiwgY3VycmVudE1heFsxXV0pO1xuICAgIGNvbnN0IFtoTWF4WF0gPSB0KFtoaWdobGlnaHRNYXgsIGN1cnJlbnRNYXhbMV1dKTtcbiAgICBjb25zdCBhcmVhUGF0aCA9IGFyZWEoeyBkYXRhLCBtaW46IHJhbmdlTWluLCBtYXg6IHJhbmdlTWF4LCB0IH0pO1xuICAgIGNvbnN0IGZpbGwgPSBjb2xvclN0b3BzID8gYHVybCgjbGluZWFyLWdyYWRpZW50LSR7aWR9KWAgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIChoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IFwic3ZnXCIsIGhlaWdodDogaGVpZ2h0LCBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBcIm5vbmVcIiwgdmlld0JveDogYDAgMCAke3dpZHRofSAke2hlaWdodH1gLCB3aWR0aDogd2lkdGggfSwgY29sb3JTdG9wcyA/IChoKFwiZGVmc1wiLCBudWxsLCBoKFwibGluZWFyR3JhZGllbnRcIiwgeyBpZDogYGxpbmVhci1ncmFkaWVudC0ke2lkfWAsIHgxOiBcIjBcIiwgeDI6IFwiMVwiLCB5MTogXCIwXCIsIHkyOiBcIjBcIiB9LCBjb2xvclN0b3BzLm1hcCgoeyBvZmZzZXQsIGNvbG9yLCBvcGFjaXR5IH0pID0+IChoKFwic3RvcFwiLCB7IG9mZnNldDogYCR7b2Zmc2V0ICogMTAwfSVgLCBcInN0b3AtY29sb3JcIjogY29sb3IsIFwic3RvcC1vcGFjaXR5XCI6IG9wYWNpdHkgfSkpKSkpKSA6IG51bGwsIGhpZ2hsaWdodE1pbiAhPT0gdW5kZWZpbmVkID8gKFtcbiAgICAgIGgoXCJtYXNrXCIsIHsgaGVpZ2h0OiBcIjEwMCVcIiwgaWQ6IGAke2lkfTFgLCB3aWR0aDogXCIxMDAlXCIsIHg6IFwiMCVcIiwgeTogXCIwJVwiIH0sIGgoXCJwYXRoXCIsIHsgZDogYFxuICAgICAgICAgICAgTSAwLDBcbiAgICAgICAgICAgIEwgJHtoTWluWCAtIDF9LDBcbiAgICAgICAgICAgIEwgJHtoTWluWCAtIDF9LCR7aGVpZ2h0fVxuICAgICAgICAgICAgTCAwLCR7aGVpZ2h0fVxuICAgICAgICAgICAgWlxuICAgICAgICAgIGAsIGZpbGw6IFwid2hpdGVcIiB9KSksXG4gICAgICBoKFwibWFza1wiLCB7IGhlaWdodDogXCIxMDAlXCIsIGlkOiBgJHtpZH0yYCwgd2lkdGg6IFwiMTAwJVwiLCB4OiBcIjAlXCIsIHk6IFwiMCVcIiB9LCBoKFwicGF0aFwiLCB7IGQ6IGBcbiAgICAgICAgICAgIE0gJHtoTWluWCArIDF9LDBcbiAgICAgICAgICAgIEwgJHtoTWF4WCAtIDF9LDBcbiAgICAgICAgICAgIEwgJHtoTWF4WCAtIDF9LCR7aGVpZ2h0fVxuICAgICAgICAgICAgTCAke2hNaW5YICsgMX0sICR7aGVpZ2h0fVxuICAgICAgICAgICAgWlxuICAgICAgICAgIGAsIGZpbGw6IFwid2hpdGVcIiB9KSksXG4gICAgICBoKFwibWFza1wiLCB7IGhlaWdodDogXCIxMDAlXCIsIGlkOiBgJHtpZH0zYCwgd2lkdGg6IFwiMTAwJVwiLCB4OiBcIjAlXCIsIHk6IFwiMCVcIiB9LCBoKFwicGF0aFwiLCB7IGQ6IGBcbiAgICAgICAgICAgICAgICBNICR7aE1heFggKyAxfSwwXG4gICAgICAgICAgICAgICAgTCAke3dpZHRofSwwXG4gICAgICAgICAgICAgICAgTCAke3dpZHRofSwke2hlaWdodH1cbiAgICAgICAgICAgICAgICBMICR7aE1heFggKyAxfSwgJHtoZWlnaHR9XG4gICAgICAgICAgICAgICAgWlxuICAgICAgICAgICAgICBgLCBmaWxsOiBcIndoaXRlXCIgfSkpLFxuICAgICAgaChcInBhdGhcIiwgeyBjbGFzczogXCJncmFwaC1wYXRoXCIsIGQ6IGFyZWFQYXRoLCBmaWxsOiBmaWxsLCBtYXNrOiBgdXJsKCMke2lkfTEpYCB9KSxcbiAgICAgIGgoXCJwYXRoXCIsIHsgY2xhc3M6IFwiZ3JhcGgtcGF0aC0taGlnaGxpZ2h0XCIsIGQ6IGFyZWFQYXRoLCBmaWxsOiBmaWxsLCBtYXNrOiBgdXJsKCMke2lkfTIpYCB9KSxcbiAgICAgIGgoXCJwYXRoXCIsIHsgY2xhc3M6IFwiZ3JhcGgtcGF0aFwiLCBkOiBhcmVhUGF0aCwgZmlsbDogZmlsbCwgbWFzazogYHVybCgjJHtpZH0zKWAgfSksXG4gICAgXSkgOiAoaChcInBhdGhcIiwgeyBjbGFzczogXCJncmFwaC1wYXRoXCIsIGQ6IGFyZWFQYXRoLCBmaWxsOiBmaWxsIH0pKSkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGdyYXBoQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWdyYXBoXCIsIHtcbiAgICBcImRhdGFcIjogWzE2XSxcbiAgICBcImNvbG9yU3RvcHNcIjogWzE2XSxcbiAgICBcImhpZ2hsaWdodE1pblwiOiBbMiwgXCJoaWdobGlnaHQtbWluXCJdLFxuICAgIFwiaGlnaGxpZ2h0TWF4XCI6IFsyLCBcImhpZ2hsaWdodC1tYXhcIl0sXG4gICAgXCJtaW5cIjogWzUxNF0sXG4gICAgXCJtYXhcIjogWzUxNF1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1ncmFwaFwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1ncmFwaFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEdyYXBoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBHcmFwaCBhcyBHLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmZ1bmN0aW9uIGdlbihjb3VudHMpIHtcbiAgcmV0dXJuIGNvdW50c1xuICAgIC5tYXAoKGNvdW50KSA9PiB7XG4gICAgbGV0IG91dCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBvdXQgKz0gKCgoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkgfCAwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9KVxuICAgIC5qb2luKFwiLVwiKTtcbn1cbmNvbnN0IGd1aWQgPSAoKSA9PiBnZW4oWzIsIDEsIDEsIDEsIDNdKTtcblxuZXhwb3J0IHsgZ3VpZCBhcyBnIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgZW5zdXJlcyBvYnNlcnZlcnMgYXJlIGNyZWF0ZWQgb25seSBmb3IgYnJvd3NlciBjb250ZXh0cy5cbiAqXG4gKiBAcGFyYW0gdHlwZSAtIHRoZSB0eXBlIG9mIG9ic2VydmVyIHRvIGNyZWF0ZVxuICogQHBhcmFtIGNhbGxiYWNrIC0gdGhlIG9ic2VydmVyIGNhbGxiYWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIHRoZSBvYnNlcnZlciBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCBPYnNlcnZlciA9IGdldE9ic2VydmVyKHR5cGUpO1xuICByZXR1cm4gbmV3IE9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGdldE9ic2VydmVyKHR5cGUpIHtcbiAgLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNiNpc3N1ZWNvbW1lbnQtMTA0OTgxNDk0OFxuICBjbGFzcyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXIgZXh0ZW5kcyB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcbiAgICAgIHN1cGVyKGNhbGxiYWNrKTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICBvYnNlcnZlKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5LnB1c2goeyB0YXJnZXQsIG9wdGlvbnMgfSk7XG4gICAgICByZXR1cm4gc3VwZXIub2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICB1bm9ic2VydmUodGFyZ2V0KSB7XG4gICAgICBjb25zdCBuZXdPYnNlcnZlZEVudHJpZXMgPSB0aGlzLm9ic2VydmVkRW50cnkuZmlsdGVyKChvYnNlcnZlZCkgPT4gb2JzZXJ2ZWQudGFyZ2V0ICE9PSB0YXJnZXQpO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrKHN1cGVyLnRha2VSZWNvcmRzKCksIHRoaXMpO1xuICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICBuZXdPYnNlcnZlZEVudHJpZXMuZm9yRWFjaCgob2JzZXJ2ZWQpID0+IHRoaXMub2JzZXJ2ZShvYnNlcnZlZC50YXJnZXQsIG9ic2VydmVkLm9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0eXBlID09PSBcImludGVyc2VjdGlvblwiXG4gICAgICA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlclxuICAgICAgOiB0eXBlID09PSBcIm11dGF0aW9uXCJcbiAgICAgICAgPyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXJcbiAgICAgICAgOiB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIpO1xuICB9KSgpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVPYnNlcnZlciBhcyBjIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=