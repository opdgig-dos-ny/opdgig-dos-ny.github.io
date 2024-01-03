"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_filter_js-node_modules_esri_calc-8ddb03"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/array.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/array.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getRoundRobinIndex)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
function getRoundRobinIndex(index, total) {
  return (index + total) % total;
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/filter.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/filter.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ Filter),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _filter2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter2.js */ "./node_modules/@esri/calcite-components/dist/components/filter2.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input.js */ "./node_modules/@esri/calcite-components/dist/components/input.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progress.js */ "./node_modules/@esri/calcite-components/dist/components/progress.js");
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/@esri/calcite-components/dist/components/debounce.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */











const CSS = {
  container: "container",
  searchIcon: "search-icon",
};
const ICONS = {
  search: "search",
  close: "x",
};
const DEBOUNCE_TIMEOUT = 250;

const filterCss = ":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:flex;inline-size:100%;padding:0.5rem}label{position:relative;margin-inline:0.25rem;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type=text]{margin-block-end:0.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:0.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);padding-inline-end:0.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-ui-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing), inset-inline-end var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-ui-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}:host([hidden]){display:none}[hidden]{display:none}";

const Filter = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteFilterChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteFilterChange", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.filterDebounced = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_8__.d)((value, emit = false, onFilter) => this.updateFiltered((0,_filter2_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.items, value), emit, onFilter), DEBOUNCE_TIMEOUT);
    this.inputHandler = (event) => {
      const target = event.target;
      this.value = target.value;
      this.filterDebounced(target.value, true);
    };
    this.keyDownHandler = (event) => {
      if (event.key === "Escape") {
        this.clear();
        event.preventDefault();
      }
      if (event.key === "Enter") {
        event.preventDefault();
      }
    };
    this.clear = () => {
      this.value = "";
      this.filterDebounced("", true);
      this.setFocus();
    };
    this.items = [];
    this.disabled = false;
    this.filteredItems = [];
    this.placeholder = undefined;
    this.scale = "m";
    this.value = "";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  watchItemsHandler() {
    this.filterDebounced(this.value);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  valueHandler(value) {
    this.filterDebounced(value);
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    this.updateFiltered((0,_filter2_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.items, this.value));
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    this.filterDebounced.cancel();
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Performs a filter on the component.
   *
   * This method can be useful because filtering is delayed and asynchronous.
   *
   * @param {string} value - The filter text value.
   * @returns {Promise<void>}
   */
  async filter(value = this.value) {
    return new Promise((resolve) => {
      this.value = value;
      this.filterDebounced(value, false, resolve);
    });
  }
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.el?.focus();
  }
  updateFiltered(filtered, emit = false, callback) {
    this.filteredItems = filtered;
    if (emit) {
      this.calciteFilterChange.emit();
    }
    callback?.();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { disabled, scale } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.Fragment, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: CSS.container }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("label", null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-input", { clearable: true, disabled: disabled, icon: ICONS.search, label: this.messages.label, messageOverrides: { clear: this.messages.clear }, onCalciteInputInput: this.inputHandler, onKeyDown: this.keyDownHandler, placeholder: this.placeholder, scale: scale, type: "text", value: this.value,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => {
        this.textInput = el;
      } })))));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "items": ["watchItemsHandler"],
    "messageOverrides": ["onMessagesChange"],
    "value": ["valueHandler"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return filterCss; }
}, [17, "calcite-filter", {
    "items": [16],
    "disabled": [516],
    "filteredItems": [1040],
    "placeholder": [1],
    "scale": [513],
    "value": [1025],
    "messages": [1040],
    "messageOverrides": [1040],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "filter": [64],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-filter", "calcite-icon", "calcite-input", "calcite-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-filter":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Filter);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-input":
      if (!customElements.get(tagName)) {
        (0,_input_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        (0,_progress_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
  } });
}
defineCustomElement();




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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/resources3.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/resources3.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CSS),
/* harmony export */   I: () => (/* binding */ ICON_TYPES),
/* harmony export */   S: () => (/* binding */ SLOTS)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const CSS = {
  sticky: "sticky-pos",
};
var ICON_TYPES;
(function (ICON_TYPES) {
  ICON_TYPES["circle"] = "circle";
  ICON_TYPES["square"] = "square";
  ICON_TYPES["grip"] = "grip";
})(ICON_TYPES || (ICON_TYPES = {}));
const SLOTS = {
  menuActions: "menu-actions",
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/resources4.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/resources4.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CSS),
/* harmony export */   S: () => (/* binding */ SLOTS)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const CSS = {
  heading: "heading",
  container: "container",
  indented: "container--indented",
};
const SLOTS = {
  parentItem: "parent-item",
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/scrim.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/scrim.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Scrim),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */







const CSS = {
  scrim: "scrim",
  content: "content",
};
const BREAKPOINTS = {
  s: 72,
  // medium is assumed default.
  l: 480, // Greater than or equal to 480px.
};

const scrimCss = ":host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-scrim-background-internal))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}";

const Scrim = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_2__.c)("resize", () => this.handleResize());
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleDefaultSlotChange = (event) => {
      this.hasContent = (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.w)(event);
    };
    this.storeLoaderEl = (el) => {
      this.loaderEl = el;
      this.handleResize();
    };
    this.loading = false;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.loaderScale = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.hasContent = false;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.resizeObserver?.observe(this.el);
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    this.resizeObserver?.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Method
  //
  // --------------------------------------------------------------------------
  render() {
    const { hasContent, loading, messages } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: CSS.scrim }, loading ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("calcite-loader", { label: messages.loading, scale: this.loaderScale,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeLoaderEl })) : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: CSS.content, hidden: !hasContent }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }))));
  }
  getScale(size) {
    if (size < BREAKPOINTS.s) {
      return "s";
    }
    else if (size >= BREAKPOINTS.l) {
      return "l";
    }
    else {
      return "m";
    }
  }
  handleResize() {
    const { loaderEl, el } = this;
    if (!loaderEl) {
      return;
    }
    this.loaderScale = this.getScale(Math.min(el.clientHeight, el.clientWidth) ?? 0);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return scrimCss; }
}, [1, "calcite-scrim", {
    "loading": [516],
    "messages": [1040],
    "messageOverrides": [1040],
    "loaderScale": [32],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "hasContent": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-scrim", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Scrim);
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/shared-list-render.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/shared-list-render.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ List),
/* harmony export */   a: () => (/* binding */ deselectSiblingItems),
/* harmony export */   b: () => (/* binding */ handleFilterEvent),
/* harmony export */   c: () => (/* binding */ initializeObserver),
/* harmony export */   d: () => (/* binding */ deselectRemovedItems),
/* harmony export */   e: () => (/* binding */ cleanUpObserver),
/* harmony export */   f: () => (/* binding */ handleInitialFilter),
/* harmony export */   g: () => (/* binding */ getItemData),
/* harmony export */   h: () => (/* binding */ handleFilter),
/* harmony export */   i: () => (/* binding */ initialize),
/* harmony export */   j: () => (/* binding */ calciteListItemChangeHandler),
/* harmony export */   k: () => (/* binding */ keyDownHandler),
/* harmony export */   l: () => (/* binding */ calciteInternalListItemValueChangeHandler),
/* harmony export */   m: () => (/* binding */ mutationObserverCallback),
/* harmony export */   n: () => (/* binding */ calciteListFocusOutHandler),
/* harmony export */   o: () => (/* binding */ setUpItems),
/* harmony export */   p: () => (/* binding */ setFocus),
/* harmony export */   q: () => (/* binding */ getItemIndex),
/* harmony export */   r: () => (/* binding */ removeItem),
/* harmony export */   s: () => (/* binding */ selectSiblings),
/* harmony export */   t: () => (/* binding */ moveItemIndex)
/* harmony export */ });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/@esri/calcite-components/dist/components/array.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _resources4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources4.js */ "./node_modules/@esri/calcite-components/dist/components/resources4.js");
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/@esri/calcite-components/dist/components/debounce.js");
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _resources3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources3.js */ "./node_modules/@esri/calcite-components/dist/components/resources3.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */







function mutationObserverCallback() {
  this.setUpItems();
  this.setUpFilter();
  this.deselectRemovedItems();
}
const SUPPORTED_ARROW_KEYS = ["ArrowUp", "ArrowDown"];
// --------------------------------------------------------------------------
//
//  Lifecycle
//
// --------------------------------------------------------------------------
function initialize() {
  this.setUpItems();
  this.setUpFilter();
  this.emitCalciteListChange = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_3__.d)(internalCalciteListChangeEvent.bind(this), 0);
  this.emitCalciteListFilter = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_3__.d)(internalCalciteListFilterEvent.bind(this), 0);
}
function initializeObserver() {
  this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
}
function cleanUpObserver() {
  this.mutationObserver?.disconnect();
}
// --------------------------------------------------------------------------
//
//  Listeners
//
// --------------------------------------------------------------------------
function calciteListItemChangeHandler(event) {
  const { selectedValues } = this;
  const { item, value, selected, shiftPressed } = event.detail;
  if (selected) {
    if (this.multiple && shiftPressed) {
      this.selectSiblings(item);
    }
    if (!this.multiple) {
      this.deselectSiblingItems(item);
    }
    selectedValues.set(value, item);
  }
  else {
    selectedValues.delete(value);
    if (this.multiple && shiftPressed) {
      this.selectSiblings(item, true);
    }
  }
  if (!this.multiple) {
    toggleSingleSelectItemTabbing(item, selected);
    if (selected) {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.k)(item);
    }
  }
  this.lastSelectedItem = item;
  this.emitCalciteListChange();
}
function calciteInternalListItemValueChangeHandler(event) {
  const oldValue = event.detail.oldValue;
  const selectedValues = this.selectedValues;
  if (selectedValues.has(oldValue)) {
    const item = selectedValues.get(oldValue);
    selectedValues.delete(oldValue);
    selectedValues.set(event.detail.newValue, item);
  }
  event.stopPropagation();
}
// --------------------------------------------------------------------------
//
//  Private Methods
//
// --------------------------------------------------------------------------
function isValidNavigationKey(key) {
  return !!SUPPORTED_ARROW_KEYS.find((k) => k === key);
}
function calciteListFocusOutHandler(event) {
  const { el, items, multiple, selectedValues } = this;
  if (multiple) {
    return;
  }
  const focusedInside = el.contains(event.relatedTarget);
  if (focusedInside) {
    return;
  }
  filterOutDisabled(items).forEach((item) => {
    toggleSingleSelectItemTabbing(item, selectedValues.size === 0 ? item.contains(event.target) || event.target === item : item.selected);
  });
}
function keyDownHandler(event) {
  const { key, target } = event;
  if (!isValidNavigationKey(key)) {
    return;
  }
  const { items, multiple, selectionFollowsFocus } = this;
  const { length: totalItems } = items;
  const currentIndex = items.indexOf(target);
  if (!totalItems || currentIndex === -1) {
    return;
  }
  event.preventDefault();
  const index = moveItemIndex(this, target, key === "ArrowUp" ? "up" : "down");
  const item = items[index];
  items.forEach((i) => toggleSingleSelectItemTabbing(i, i === item));
  if (!multiple && selectionFollowsFocus) {
    item.selected = true;
  }
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.k)(item);
}
function moveItemIndex(list, item, direction) {
  const { items } = list;
  const { length: totalItems } = items;
  const currentIndex = items.indexOf(item);
  const directionFactor = direction === "up" ? -1 : 1;
  let moveOffset = 1;
  let index = (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.g)(currentIndex + directionFactor * moveOffset++, totalItems);
  const firstMovedIndex = index;
  while (items[index].disabled) {
    index = (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.g)(currentIndex + directionFactor * moveOffset++, totalItems);
    if (index === firstMovedIndex) {
      break;
    }
  }
  return index;
}
function getItemIndex(list, item) {
  const { items } = list;
  return items.indexOf(item);
}
function filterOutDisabled(items) {
  return items.filter((item) => !item.disabled);
}
function internalCalciteListFilterEvent() {
  this.calciteListFilter.emit();
}
function internalCalciteListChangeEvent() {
  this.calciteListChange.emit(this.selectedValues);
}
function removeItem(event) {
  if (event.defaultPrevented) {
    return;
  }
  const item = event.target;
  const selectedValues = this.selectedValues;
  if (item.parentElement.tagName === "CALCITE-PICK-LIST-GROUP" && item.slot === _resources4_js__WEBPACK_IMPORTED_MODULE_2__.S.parentItem) {
    item.parentElement.remove();
    Array.from(item.parentElement.children).forEach((item) => selectedValues.delete(item.value));
  }
  else {
    item.remove();
    selectedValues.delete(item.value);
  }
  this.emitCalciteListChange();
}
function toggleSingleSelectItemTabbing(item, selectable) {
  if (item.disabled) {
    return;
  }
  // using attribute intentionally
  if (selectable) {
    item.removeAttribute("tabindex");
  }
  else {
    item.setAttribute("tabindex", "-1");
  }
}
async function setFocus(focusId) {
  if (this.filterEnabled && focusId === "filter") {
    await (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.k)(this.filterEl);
    return;
  }
  const { items, multiple, selectionFollowsFocus } = this;
  if (items.length === 0) {
    return;
  }
  if (multiple) {
    return filterOutDisabled(items)[0]?.setFocus();
  }
  const filtered = filterOutDisabled(items);
  const focusTarget = filtered.find((item) => item.selected) || filtered[0];
  if (selectionFollowsFocus && focusTarget) {
    focusTarget.selected = true;
  }
  return focusTarget.setFocus();
}
function setUpItems(tagName) {
  this.items = Array.from(this.el.querySelectorAll(tagName));
  let hasSelected = false;
  const { items } = this;
  items.forEach((item) => {
    item.icon = this.getIconType();
    if (!this.multiple) {
      item.deselectDisabled = true;
      toggleSingleSelectItemTabbing(item, false);
    }
    if (item.selected) {
      hasSelected = true;
      toggleSingleSelectItemTabbing(item, true);
      this.selectedValues.set(item.value, item);
    }
  });
  const [first] = items;
  if (!hasSelected && first && !first.disabled) {
    toggleSingleSelectItemTabbing(first, true);
  }
}
function deselectRemovedItems() {
  const selectedValues = this.selectedValues;
  const itemValues = this.items.map(({ value }) => value);
  selectedValues.forEach((selectedItem) => {
    if (!itemValues.includes(selectedItem.value)) {
      this.selectedValues.delete(selectedItem.value);
    }
  });
}
function deselectSiblingItems(item) {
  this.items.forEach((currentItem) => {
    if (currentItem.value !== item.value) {
      currentItem.toggleSelected(false);
      if (this.selectedValues.has(currentItem.value)) {
        this.selectedValues.delete(currentItem.value);
      }
    }
  });
}
function selectSiblings(item, deselect = false) {
  if (!this.lastSelectedItem) {
    return;
  }
  const { items } = this;
  const start = items.findIndex((currentItem) => {
    return currentItem.value === this.lastSelectedItem.value;
  });
  const end = items.findIndex((currentItem) => {
    return currentItem.value === item.value;
  });
  items.slice(Math.min(start, end), Math.max(start, end)).forEach((currentItem) => {
    currentItem.toggleSelected(!deselect);
    if (!deselect) {
      this.selectedValues.set(currentItem.value, currentItem);
    }
    else {
      this.selectedValues.delete(currentItem.value);
    }
  });
}
let groups;
function handleFilter(emit = false) {
  const { filteredData, filterText } = this;
  const values = filteredData.map((item) => item.value);
  let hasSelectedMatch = false;
  if (!groups) {
    groups = new Set();
  }
  const matchedItems = this.items?.filter((item) => {
    const parent = item.parentElement;
    const grouped = parent.matches("calcite-pick-list-group");
    if (grouped) {
      groups.add(parent);
    }
    const matches = filterText ? values.includes(item.value) : true;
    item.hidden = !matches;
    if (!hasSelectedMatch) {
      hasSelectedMatch = matches && item.selected;
    }
    return matches;
  }) || [];
  groups.forEach((group) => {
    const hasAtLeastOneMatch = matchedItems.some((item) => group.contains(item));
    group.hidden = !hasAtLeastOneMatch;
    if (!hasAtLeastOneMatch) {
      return;
    }
    const parentItem = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(group, "parent-item");
    if (parentItem) {
      parentItem.hidden = false;
      if (matchedItems.includes(parentItem)) {
        Array.from(group.children).forEach((child) => (child.hidden = false));
      }
    }
  });
  groups.clear();
  if (matchedItems.length > 0 && !hasSelectedMatch && !this.multiple) {
    toggleSingleSelectItemTabbing(matchedItems[0], true);
  }
  this.setFilteredItems(matchedItems);
  if (emit) {
    this.emitCalciteListFilter();
  }
}
function handleInitialFilter() {
  const filteredItems = this.filterEl?.filteredItems;
  if (filteredItems) {
    this.filteredData = filteredItems;
  }
  this.handleFilter();
}
function handleFilterEvent(event) {
  event.stopPropagation();
  const { filteredItems, value } = event.currentTarget;
  this.filterText = value;
  this.filteredData = filteredItems;
  this.handleFilter(true);
}
function getItemData() {
  return this.items.map((item) => ({
    label: item.label,
    description: item.description,
    metadata: item.metadata,
    value: item.value,
  }));
}

const List = ({ props: { disabled, loading, filterEnabled, dataForFilter, handleFilterEvent, filterPlaceholder, filterText, setFilterEl, dragEnabled, storeAssistiveEl, }, ...rest }) => {
  const defaultSlot = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", null);
  return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.Host, { "aria-busy": (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(loading), role: "menu", ...rest },
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("section", null,
      dragEnabled ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", { "aria-live": "assertive", class: "assistive-text", 
        // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
        ref: storeAssistiveEl })) : null,
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("header", { class: { [_resources3_js__WEBPACK_IMPORTED_MODULE_4__.C.sticky]: true } },
        filterEnabled ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("calcite-filter", { "aria-label": filterPlaceholder, disabled: loading || disabled, items: dataForFilter, onCalciteFilterChange: handleFilterEvent, placeholder: filterPlaceholder, value: filterText, 
          // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
          ref: setFilterEl })) : null,
        (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { name: _resources3_js__WEBPACK_IMPORTED_MODULE_4__.S.menuActions })),
      loading ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("calcite-scrim", { loading: loading }) : null,
      defaultSlot)));
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOTk2ZmVmYWIyZWVmN2Q5MDMxMGM2MWVhYTM3NjA2OGEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21IO0FBQ3hFO0FBQ3dFO0FBQ0w7QUFDaEM7QUFDb0M7QUFDM0Q7QUFDQztBQUNHO0FBQ2I7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsc0JBQXNCLGdEQUFnRCwrQkFBK0Isc0NBQXNDLFFBQVEsc0JBQXNCLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxhQUFhLGlCQUFpQix5R0FBeUcsVUFBVSxXQUFXLGFBQWEsaUJBQWlCLGVBQWUsTUFBTSxrQkFBa0Isc0JBQXNCLGlCQUFpQixhQUFhLGlCQUFpQixtQkFBbUIsZ0JBQWdCLGlCQUFpQix5QkFBeUIsaUJBQWlCLGtCQUFrQiw2QkFBNkIsc0JBQXNCLG9CQUFvQixzQ0FBc0MsaUJBQWlCLCtCQUErQiwyQkFBMkIsNEJBQTRCLCtGQUErRiw0QkFBNEIsYUFBYSxjQUFjLGlCQUFpQixhQUFhLGtCQUFrQixhQUFhLCtCQUErQixxQkFBcUIseUpBQXlKLHVCQUF1QixxQ0FBcUMsOEJBQThCLG1CQUFtQix1QkFBdUIsb0NBQW9DLG1DQUFtQyxVQUFVLGNBQWMsYUFBYSxlQUFlLG1CQUFtQixpQkFBaUIsNkJBQTZCLCtCQUErQix3Q0FBd0MsK0JBQStCLGdCQUFnQixhQUFhLFNBQVMsYUFBYTs7QUFFeDJELDZCQUE2QiwwRkFBa0IsZUFBZSwrRUFBVztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtRkFBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLCtD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L2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9hcnJheS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvZmlsdGVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3Jlc291cmNlczMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3Jlc291cmNlczQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3NjcmltLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9zaGFyZWQtbGlzdC1yZW5kZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuZnVuY3Rpb24gZ2V0Um91bmRSb2JpbkluZGV4KGluZGV4LCB0b3RhbCkge1xuICByZXR1cm4gKGluZGV4ICsgdG90YWwpICUgdG90YWw7XG59XG5cbmV4cG9ydCB7IGdldFJvdW5kUm9iaW5JbmRleCBhcyBnIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgRnJhZ21lbnQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBmIGFzIGZpbHRlciB9IGZyb20gJy4vZmlsdGVyMi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24sIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9pbnB1dC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vcHJvZ3Jlc3MuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWJvdW5jZSB9IGZyb20gJy4vZGVib3VuY2UuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgc2VhcmNoSWNvbjogXCJzZWFyY2gtaWNvblwiLFxufTtcbmNvbnN0IElDT05TID0ge1xuICBzZWFyY2g6IFwic2VhcmNoXCIsXG4gIGNsb3NlOiBcInhcIixcbn07XG5jb25zdCBERUJPVU5DRV9USU1FT1VUID0gMjUwO1xuXG5jb25zdCBmaWx0ZXJDc3MgPSBcIjpob3N0e2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKX06aG9zdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9LmNvbnRhaW5lcntkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtwYWRkaW5nOjAuNXJlbX1sYWJlbHtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4taW5saW5lOjAuMjVyZW07bWFyZ2luLWJsb2NrOjBweDtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTthbGlnbi1pdGVtczpjZW50ZXI7b3ZlcmZsb3c6aGlkZGVufWlucHV0W3R5cGU9dGV4dF17bWFyZ2luLWJsb2NrLWVuZDowLjI1cmVtO2lubGluZS1zaXplOjEwMCU7Ym9yZGVyLXN0eWxlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtwYWRkaW5nLWJsb2NrOjAuMjVyZW07Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3BhZGRpbmctaW5saW5lLWVuZDowLjI1cmVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OjEuNXJlbTt0cmFuc2l0aW9uOnBhZGRpbmcgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSwgYm94LXNoYWRvdyB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfWlucHV0W3R5cGU9dGV4dF06Oi1tcy1jbGVhcntkaXNwbGF5Om5vbmV9Y2FsY2l0ZS1pbnB1dHtpbmxpbmUtc2l6ZToxMDAlfS5zZWFyY2gtaWNvbntwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmZsZXg7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2luc2V0LWlubGluZS1zdGFydDowO3RyYW5zaXRpb246aW5zZXQtaW5saW5lLXN0YXJ0IHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyksIGluc2V0LWlubGluZS1lbmQgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSwgb3BhY2l0eSB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfWlucHV0W3R5cGU9dGV4dF06Zm9jdXN7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweDtwYWRkaW5nLWlubGluZTowLjI1cmVtfWlucHV0W3R5cGU9dGV4dF06Zm9jdXN+LnNlYXJjaC1pY29ue2luc2V0LWlubGluZS1zdGFydDpjYWxjKDFyZW0gKiAtMSk7b3BhY2l0eTowfS5jbGVhci1idXR0b257ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXItd2lkdGg6MHB4O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5jbGVhci1idXR0b246aG92ZXIsLmNsZWFyLWJ1dHRvbjpmb2N1c3tjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IEZpbHRlciA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlRmlsdGVyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRmlsdGVyQ2hhbmdlXCIsIDYpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuZmlsdGVyRGVib3VuY2VkID0gZGVib3VuY2UoKHZhbHVlLCBlbWl0ID0gZmFsc2UsIG9uRmlsdGVyKSA9PiB0aGlzLnVwZGF0ZUZpbHRlcmVkKGZpbHRlcih0aGlzLml0ZW1zLCB2YWx1ZSksIGVtaXQsIG9uRmlsdGVyKSwgREVCT1VOQ0VfVElNRU9VVCk7XG4gICAgdGhpcy5pbnB1dEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHRoaXMudmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLmZpbHRlckRlYm91bmNlZCh0YXJnZXQudmFsdWUsIHRydWUpO1xuICAgIH07XG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2xlYXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICAgIHRoaXMuZmlsdGVyRGVib3VuY2VkKFwiXCIsIHRydWUpO1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH07XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBbXTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICB3YXRjaEl0ZW1zSGFuZGxlcigpIHtcbiAgICB0aGlzLmZpbHRlckRlYm91bmNlZCh0aGlzLnZhbHVlKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgdmFsdWVIYW5kbGVyKHZhbHVlKSB7XG4gICAgdGhpcy5maWx0ZXJEZWJvdW5jZWQodmFsdWUpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcmVkKGZpbHRlcih0aGlzLml0ZW1zLCB0aGlzLnZhbHVlKSk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5maWx0ZXJEZWJvdW5jZWQuY2FuY2VsKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGZpbHRlciBvbiB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZnVsIGJlY2F1c2UgZmlsdGVyaW5nIGlzIGRlbGF5ZWQgYW5kIGFzeW5jaHJvbm91cy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIGZpbHRlciB0ZXh0IHZhbHVlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIGFzeW5jIGZpbHRlcih2YWx1ZSA9IHRoaXMudmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZmlsdGVyRGVib3VuY2VkKHZhbHVlLCBmYWxzZSwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIHRoaXMuZWw/LmZvY3VzKCk7XG4gIH1cbiAgdXBkYXRlRmlsdGVyZWQoZmlsdGVyZWQsIGVtaXQgPSBmYWxzZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJlZDtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5jYWxjaXRlRmlsdGVyQ2hhbmdlLmVtaXQoKTtcbiAgICB9XG4gICAgY2FsbGJhY2s/LigpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCwgc2NhbGUgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKEZyYWdtZW50LCBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250YWluZXIgfSwgaChcImxhYmVsXCIsIG51bGwsIGgoXCJjYWxjaXRlLWlucHV0XCIsIHsgY2xlYXJhYmxlOiB0cnVlLCBkaXNhYmxlZDogZGlzYWJsZWQsIGljb246IElDT05TLnNlYXJjaCwgbGFiZWw6IHRoaXMubWVzc2FnZXMubGFiZWwsIG1lc3NhZ2VPdmVycmlkZXM6IHsgY2xlYXI6IHRoaXMubWVzc2FnZXMuY2xlYXIgfSwgb25DYWxjaXRlSW5wdXRJbnB1dDogdGhpcy5pbnB1dEhhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciwgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsIHNjYWxlOiBzY2FsZSwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogKGVsKSA9PiB7XG4gICAgICAgIHRoaXMudGV4dElucHV0ID0gZWw7XG4gICAgICB9IH0pKSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGRlbGVnYXRlc0ZvY3VzKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiaXRlbXNcIjogW1wid2F0Y2hJdGVtc0hhbmRsZXJcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZUhhbmRsZXJcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGZpbHRlckNzczsgfVxufSwgWzE3LCBcImNhbGNpdGUtZmlsdGVyXCIsIHtcbiAgICBcIml0ZW1zXCI6IFsxNl0sXG4gICAgXCJkaXNhYmxlZFwiOiBbNTE2XSxcbiAgICBcImZpbHRlcmVkSXRlbXNcIjogWzEwNDBdLFxuICAgIFwicGxhY2Vob2xkZXJcIjogWzFdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJ2YWx1ZVwiOiBbMTAyNV0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFsxMDQwXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJmaWx0ZXJcIjogWzY0XSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1maWx0ZXJcIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWlucHV0XCIsIFwiY2FsY2l0ZS1wcm9ncmVzc1wiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1maWx0ZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBGaWx0ZXIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pbnB1dFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1wcm9ncmVzc1wiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgRmlsdGVyIGFzIEYsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC5qcyc7XG5cbmNvbnN0IGxvYWRlckNzcyA9IFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowfX06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4taW5saW5lOmF1dG87ZGlzcGxheTpub25lO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO29wYWNpdHk6MTttaW4tYmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItZm9udC1zaXplKTtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7c3Ryb2tlLXdpZHRoOjM7ZmlsbDpub25lO3RyYW5zZm9ybTpzY2FsZSgxLCAxKTthbmltYXRpb246bG9hZGVyLWNvbG9yLXNoaWZ0IGNhbGModmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpICogMiAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSkgYWx0ZXJuYXRlLXJldmVyc2UgaW5maW5pdGUgbGluZWFyO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1sb2FkZXItcGFkZGluZywgNHJlbSl9Omhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtbG9hZGVyLWZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7LS1jYWxjaXRlLWxvYWRlci1zaXplOjJyZW07LS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZTowLjc1cmVtfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLWxvYWRlci1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7LS1jYWxjaXRlLWxvYWRlci1zaXplOjRyZW07LS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZToxcmVtfTpob3N0KFtzY2FsZT1sXSl7LS1jYWxjaXRlLWxvYWRlci1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMik7LS1jYWxjaXRlLWxvYWRlci1zaXplOjZyZW07LS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZToxLjVyZW19Omhvc3QoW25vLXBhZGRpbmddKXtwYWRkaW5nLWJsb2NrOjBweH06aG9zdHtkaXNwbGF5OmZsZXh9LmxvYWRlcl9fdGV4dHtkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7bWFyZ2luLWJsb2NrLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSkgKyAxLjVyZW0pfS5sb2FkZXJfX3BlcmNlbnRhZ2V7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLWZvbnQtc2l6ZSk7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7aW5zZXQtaW5saW5lLXN0YXJ0OjUwJTttYXJnaW4taW5saW5lLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSkgLyAyICogLTEpO2xpbmUtaGVpZ2h0OjAuMjU7dHJhbnNmb3JtOnNjYWxlKDEsIDEpfS5sb2FkZXJfX3N2Z3N7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6dmlzaWJsZTtvcGFjaXR5OjE7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtpbnNldC1pbmxpbmUtc3RhcnQ6NTAlO21hcmdpbi1pbmxpbmUtc3RhcnQ6Y2FsYyh2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKSAvIDIgKiAtMSk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikgKiA2LjY2IC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTthbmltYXRpb24tbmFtZTpsb2FkZXItY2xvY2t3aXNlfS5sb2FkZXJfX3N2Z3twb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1ibG9jay1zdGFydDowcHg7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7b3ZlcmZsb3c6dmlzaWJsZTtpbnNldC1pbmxpbmUtc3RhcnQ6MDtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXJ9QHN1cHBvcnRzIChkaXNwbGF5OiBncmlkKXsubG9hZGVyX19zdmctLTF7YW5pbWF0aW9uLW5hbWU6bG9hZGVyLW9mZnNldC0xfS5sb2FkZXJfX3N2Zy0tMnthbmltYXRpb24tbmFtZTpsb2FkZXItb2Zmc2V0LTJ9LmxvYWRlcl9fc3ZnLS0ze2FuaW1hdGlvbi1uYW1lOmxvYWRlci1vZmZzZXQtM319Omhvc3QoW3R5cGU9ZGV0ZXJtaW5hdGVdKXthbmltYXRpb246bm9uZTtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9Omhvc3QoW3R5cGU9ZGV0ZXJtaW5hdGVdKSAubG9hZGVyX19zdmdze2FuaW1hdGlvbjpub25lfTpob3N0KFt0eXBlPWRldGVybWluYXRlXSkgLmxvYWRlcl9fc3ZnLS0ze2FuaW1hdGlvbjpub25lO3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtzdHJva2UtZGFzaGFycmF5OjE1MC43OTYzMjt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyk7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3QpIGxpbmVhcn06aG9zdChbaW5saW5lXSl7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjBweDthbmltYXRpb246bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDoyO3BhZGRpbmctYmxvY2s6MHB4O2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpO21pbi1ibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSk7bWFyZ2luLWlubGluZS1lbmQ6Y2FsYyh2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSkgKiAwLjUpO3ZlcnRpY2FsLWFsaWduOmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpICogLTEgKiAwLjIpfTpob3N0KFtpbmxpbmVdKSAubG9hZGVyX19zdmdze2luc2V0LWJsb2NrLXN0YXJ0OjBweDttYXJnaW46MHB4O2luc2V0LWlubGluZS1zdGFydDowO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKX06aG9zdChbaW5saW5lXSkgLmxvYWRlcl9fc3Zne2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKX06aG9zdChbY29tcGxldGVdKXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKDAuNzUsIDAuNzUpO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zaXRpb246b3BhY2l0eSB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBsaW5lYXIgMTAwMG1zLCB0cmFuc2Zvcm0gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgbGluZWFyIDEwMDBtc306aG9zdChbY29tcGxldGVdKSAubG9hZGVyX19zdmdze29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUoMC43NSwgMC43NSk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNpdGlvbjpvcGFjaXR5IGNhbGMoMTgwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpIGxpbmVhciA4MDBtcywgdHJhbnNmb3JtIGNhbGMoMTgwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpIGxpbmVhciA4MDBtc306aG9zdChbY29tcGxldGVdKSAubG9hZGVyX19wZXJjZW50YWdle2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO3RyYW5zZm9ybTpzY2FsZSgxLjA1LCAxLjA1KTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2l0aW9uOmNvbG9yIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGxpbmVhciwgdHJhbnNmb3JtIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGxpbmVhcn0ubG9hZGVyX19zdmctLTF7c3Ryb2tlLWRhc2hhcnJheToyNy45MjUyNDQ0NDQ0IDEzOS42MjYyMjIyMjIyO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDQuOCAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9QGtleWZyYW1lcyBsb2FkZXItb2Zmc2V0LTF7MCV7c3Ryb2tlLWRhc2hhcnJheToyNy45MjUyNDQ0NDQ0IDI1MS4zMjcyO3N0cm9rZS1kYXNob2Zmc2V0OjB9NTAle3N0cm9rZS1kYXNoYXJyYXk6MTM5LjYyNjIyMjIyMjIgMTM5LjYyNjIyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTgzLjc3NTczMzMzMzN9MTAwJXtzdHJva2UtZGFzaGFycmF5OjI3LjkyNTI0NDQ0NDQgMjUxLjMyNzI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTI3OS4yNTI0NDQ0NDQ0fX0ubG9hZGVyX19zdmctLTJ7c3Ryb2tlLWRhc2hhcnJheTo1NS44NTA0ODg4ODg5IDEzOS42MjYyMjIyMjIyO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDYuNCAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9QGtleWZyYW1lcyBsb2FkZXItb2Zmc2V0LTJ7MCV7c3Ryb2tlLWRhc2hhcnJheTo1NS44NTA0ODg4ODg5IDIyMy40MDE5NTU1NTU2O3N0cm9rZS1kYXNob2Zmc2V0OjB9NTAle3N0cm9rZS1kYXNoYXJyYXk6MTM5LjYyNjIyMjIyMjIgMTM5LjYyNjIyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTk3LjczODM1NTU1NTZ9MTAwJXtzdHJva2UtZGFzaGFycmF5OjU1Ljg1MDQ4ODg4ODkgMjIzLjQwMTk1NTU1NTY7c3Ryb2tlLWRhc2hvZmZzZXQ6LTI3OS4yNTI0NDQ0NDQ0fX0ubG9hZGVyX19zdmctLTN7c3Ryb2tlLWRhc2hhcnJheToxMy45NjI2MjIyMjIyIDEzOS42MjYyMjIyMjIyO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDcuNzM0IC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX1Aa2V5ZnJhbWVzIGxvYWRlci1vZmZzZXQtM3swJXtzdHJva2UtZGFzaGFycmF5OjEzLjk2MjYyMjIyMjIgMjY1LjI4OTgyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6MH01MCV7c3Ryb2tlLWRhc2hhcnJheToxMzkuNjI2MjIyMjIyMiAxMzkuNjI2MjIyMjIyMjtzdHJva2UtZGFzaG9mZnNldDotNzYuNzk0NDIyMjIyMn0xMDAle3N0cm9rZS1kYXNoYXJyYXk6MTMuOTYyNjIyMjIyMiAyNjUuMjg5ODIyMjIyMjtzdHJva2UtZGFzaG9mZnNldDotMjc5LjI1MjQ0NDQ0NDR9fUBrZXlmcmFtZXMgbG9hZGVyLWNvbG9yLXNoaWZ0ezAle3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0zMyV7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYnJhbmQtcHJlc3MpfTY2JXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZC1ob3Zlcil9MTAwJXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9fUBrZXlmcmFtZXMgbG9hZGVyLWNsb2Nrd2lzZXsxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IExvYWRlciA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5pbmxpbmUgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnR5cGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgdGhpcy50ZXh0ID0gXCJcIjtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgaW5saW5lLCBsYWJlbCwgc2NhbGUsIHRleHQsIHR5cGUsIHZhbHVlIH0gPSB0aGlzO1xuICAgIGNvbnN0IGlkID0gZWwuaWQgfHwgZ3VpZCgpO1xuICAgIGNvbnN0IHJhZGl1c1JhdGlvID0gMC40NTtcbiAgICBjb25zdCBzaXplID0gaW5saW5lID8gdGhpcy5nZXRJbmxpbmVTaXplKHNjYWxlKSA6IHRoaXMuZ2V0U2l6ZShzY2FsZSk7XG4gICAgY29uc3QgcmFkaXVzID0gc2l6ZSAqIHJhZGl1c1JhdGlvO1xuICAgIGNvbnN0IHZpZXdib3ggPSBgMCAwICR7c2l6ZX0gJHtzaXplfWA7XG4gICAgY29uc3QgaXNEZXRlcm1pbmF0ZSA9IHR5cGUgPT09IFwiZGV0ZXJtaW5hdGVcIjtcbiAgICBjb25zdCBjaXJjdW1mZXJlbmNlID0gMiAqIHJhZGl1cyAqIE1hdGguUEk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSAodmFsdWUgLyAxMDApICogY2lyY3VtZmVyZW5jZTtcbiAgICBjb25zdCByZW1haW5pbmcgPSBjaXJjdW1mZXJlbmNlIC0gcHJvZ3Jlc3M7XG4gICAgY29uc3QgdmFsdWVOb3cgPSBNYXRoLmZsb29yKHZhbHVlKTtcbiAgICBjb25zdCBob3N0QXR0cmlidXRlcyA9IHtcbiAgICAgIFwiYXJpYS12YWx1ZW5vd1wiOiB2YWx1ZU5vdyxcbiAgICAgIFwiYXJpYS12YWx1ZW1pblwiOiAwLFxuICAgICAgXCJhcmlhLXZhbHVlbWF4XCI6IDEwMCxcbiAgICAgIGNvbXBsZXRlOiB2YWx1ZU5vdyA9PT0gMTAwLFxuICAgIH07XG4gICAgY29uc3Qgc3ZnQXR0cmlidXRlcyA9IHsgcjogcmFkaXVzLCBjeDogc2l6ZSAvIDIsIGN5OiBzaXplIC8gMiB9O1xuICAgIGNvbnN0IGRldGVybWluYXRlU3R5bGUgPSB7IFwic3Ryb2tlLWRhc2hhcnJheVwiOiBgJHtwcm9ncmVzc30gJHtyZW1haW5pbmd9YCB9O1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1sYWJlbFwiOiBsYWJlbCwgaWQ6IGlkLCByb2xlOiBcInByb2dyZXNzYmFyXCIsIC4uLihpc0RldGVybWluYXRlID8gaG9zdEF0dHJpYnV0ZXMgOiB7fSkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImxvYWRlcl9fc3Znc1wiIH0sIGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogXCJsb2FkZXJfX3N2ZyBsb2FkZXJfX3N2Zy0tMVwiLCB2aWV3Qm94OiB2aWV3Ym94IH0sIGgoXCJjaXJjbGVcIiwgeyAuLi5zdmdBdHRyaWJ1dGVzIH0pKSwgaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBcImxvYWRlcl9fc3ZnIGxvYWRlcl9fc3ZnLS0yXCIsIHZpZXdCb3g6IHZpZXdib3ggfSwgaChcImNpcmNsZVwiLCB7IC4uLnN2Z0F0dHJpYnV0ZXMgfSkpLCBoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IFwibG9hZGVyX19zdmcgbG9hZGVyX19zdmctLTNcIiwgdmlld0JveDogdmlld2JveCwgLi4uKGlzRGV0ZXJtaW5hdGUgPyB7IHN0eWxlOiBkZXRlcm1pbmF0ZVN0eWxlIH0gOiB7fSkgfSwgaChcImNpcmNsZVwiLCB7IC4uLnN2Z0F0dHJpYnV0ZXMgfSkpKSwgdGV4dCAmJiBoKFwiZGl2XCIsIHsgY2xhc3M6IFwibG9hZGVyX190ZXh0XCIgfSwgdGV4dCksIGlzRGV0ZXJtaW5hdGUgJiYgaChcImRpdlwiLCB7IGNsYXNzOiBcImxvYWRlcl9fcGVyY2VudGFnZVwiIH0sIHZhbHVlKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHByb3BlciBzaXplcyBiYXNlZCBvbiB0aGUgc2NhbGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHNjYWxlXG4gICAqL1xuICBnZXRTaXplKHNjYWxlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHM6IDMyLFxuICAgICAgbTogNTYsXG4gICAgICBsOiA4MCxcbiAgICB9W3NjYWxlXTtcbiAgfVxuICBnZXRJbmxpbmVTaXplKHNjYWxlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHM6IDEyLFxuICAgICAgbTogMTYsXG4gICAgICBsOiAyMCxcbiAgICB9W3NjYWxlXTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBsb2FkZXJDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtbG9hZGVyXCIsIHtcbiAgICBcImlubGluZVwiOiBbNTE2XSxcbiAgICBcImxhYmVsXCI6IFsxXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwidHlwZVwiOiBbNTEzXSxcbiAgICBcInZhbHVlXCI6IFsyXSxcbiAgICBcInRleHRcIjogWzFdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtbG9hZGVyXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIExvYWRlcik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgTG9hZGVyIGFzIEwsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuY29uc3QgQ1NTID0ge1xuICBzdGlja3k6IFwic3RpY2t5LXBvc1wiLFxufTtcbnZhciBJQ09OX1RZUEVTO1xuKGZ1bmN0aW9uIChJQ09OX1RZUEVTKSB7XG4gIElDT05fVFlQRVNbXCJjaXJjbGVcIl0gPSBcImNpcmNsZVwiO1xuICBJQ09OX1RZUEVTW1wic3F1YXJlXCJdID0gXCJzcXVhcmVcIjtcbiAgSUNPTl9UWVBFU1tcImdyaXBcIl0gPSBcImdyaXBcIjtcbn0pKElDT05fVFlQRVMgfHwgKElDT05fVFlQRVMgPSB7fSkpO1xuY29uc3QgU0xPVFMgPSB7XG4gIG1lbnVBY3Rpb25zOiBcIm1lbnUtYWN0aW9uc1wiLFxufTtcblxuZXhwb3J0IHsgQ1NTIGFzIEMsIElDT05fVFlQRVMgYXMgSSwgU0xPVFMgYXMgUyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuY29uc3QgQ1NTID0ge1xuICBoZWFkaW5nOiBcImhlYWRpbmdcIixcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBpbmRlbnRlZDogXCJjb250YWluZXItLWluZGVudGVkXCIsXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIHBhcmVudEl0ZW06IFwicGFyZW50LWl0ZW1cIixcbn07XG5cbmV4cG9ydCB7IENTUyBhcyBDLCBTTE9UUyBhcyBTIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5pbXBvcnQgeyB3IGFzIHNsb3RDaGFuZ2VIYXNDb250ZW50IH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgc2NyaW06IFwic2NyaW1cIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG59O1xuY29uc3QgQlJFQUtQT0lOVFMgPSB7XG4gIHM6IDcyLFxuICAvLyBtZWRpdW0gaXMgYXNzdW1lZCBkZWZhdWx0LlxuICBsOiA0ODAsIC8vIEdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byA0ODBweC5cbn07XG5cbmNvbnN0IHNjcmltQ3NzID0gXCI6aG9zdHtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldDowcHg7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LW92ZXJsYXkpO2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6c3RyZXRjaH1Aa2V5ZnJhbWVzIGNhbGNpdGUtc2NyaW0tZmFkZS1pbnswJXstLXR3LWJnLW9wYWNpdHk6MH0xMDAley0tdHctdGV4dC1vcGFjaXR5OjF9fS5zY3JpbXtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldDowcHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtvdmVyZmxvdzpoaWRkZW47YW5pbWF0aW9uOmNhbGNpdGUtc2NyaW0tZmFkZS1pbiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBlYXNlLWluLW91dDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtc2NyaW0tYmFja2dyb3VuZCwgdmFyKC0tY2FsY2l0ZS1zY3JpbS1iYWNrZ3JvdW5kLWludGVybmFsKSl9LmNvbnRlbnR7cGFkZGluZzoxcmVtfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBTY3JpbSA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwicmVzaXplXCIsICgpID0+IHRoaXMuaGFuZGxlUmVzaXplKCkpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuaGFuZGxlRGVmYXVsdFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzQ29udGVudCA9IHNsb3RDaGFuZ2VIYXNDb250ZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuc3RvcmVMb2FkZXJFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5sb2FkZXJFbCA9IGVsO1xuICAgICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcbiAgICB9O1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9hZGVyU2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuaGFzQ29udGVudCA9IGZhbHNlO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGFzQ29udGVudCwgbG9hZGluZywgbWVzc2FnZXMgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5zY3JpbSB9LCBsb2FkaW5nID8gKGgoXCJjYWxjaXRlLWxvYWRlclwiLCB7IGxhYmVsOiBtZXNzYWdlcy5sb2FkaW5nLCBzY2FsZTogdGhpcy5sb2FkZXJTY2FsZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc3RvcmVMb2FkZXJFbCB9KSkgOiBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250ZW50LCBoaWRkZW46ICFoYXNDb250ZW50IH0sIGgoXCJzbG90XCIsIHsgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlIH0pKSkpO1xuICB9XG4gIGdldFNjYWxlKHNpemUpIHtcbiAgICBpZiAoc2l6ZSA8IEJSRUFLUE9JTlRTLnMpIHtcbiAgICAgIHJldHVybiBcInNcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2l6ZSA+PSBCUkVBS1BPSU5UUy5sKSB7XG4gICAgICByZXR1cm4gXCJsXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIFwibVwiO1xuICAgIH1cbiAgfVxuICBoYW5kbGVSZXNpemUoKSB7XG4gICAgY29uc3QgeyBsb2FkZXJFbCwgZWwgfSA9IHRoaXM7XG4gICAgaWYgKCFsb2FkZXJFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmxvYWRlclNjYWxlID0gdGhpcy5nZXRTY2FsZShNYXRoLm1pbihlbC5jbGllbnRIZWlnaHQsIGVsLmNsaWVudFdpZHRoKSA/PyAwKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBzY3JpbUNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1zY3JpbVwiLCB7XG4gICAgXCJsb2FkaW5nXCI6IFs1MTZdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJsb2FkZXJTY2FsZVwiOiBbMzJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcImhhc0NvbnRlbnRcIjogWzMyXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXNjcmltXCIsIFwiY2FsY2l0ZS1sb2FkZXJcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtc2NyaW1cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBTY3JpbSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IFNjcmltIGFzIFMsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZyBhcyBnZXRSb3VuZFJvYmluSW5kZXggfSBmcm9tICcuL2FycmF5LmpzJztcbmltcG9ydCB7IGsgYXMgZm9jdXNFbGVtZW50LCBnIGFzIGdldFNsb3R0ZWQsIHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IFMgYXMgU0xPVFMgfSBmcm9tICcuL3Jlc291cmNlczQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWJvdW5jZSB9IGZyb20gJy4vZGVib3VuY2UuanMnO1xuaW1wb3J0IHsgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IEMgYXMgQ1NTLCBTIGFzIFNMT1RTJDEgfSBmcm9tICcuL3Jlc291cmNlczMuanMnO1xuXG5mdW5jdGlvbiBtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2soKSB7XG4gIHRoaXMuc2V0VXBJdGVtcygpO1xuICB0aGlzLnNldFVwRmlsdGVyKCk7XG4gIHRoaXMuZGVzZWxlY3RSZW1vdmVkSXRlbXMoKTtcbn1cbmNvbnN0IFNVUFBPUlRFRF9BUlJPV19LRVlTID0gW1wiQXJyb3dVcFwiLCBcIkFycm93RG93blwiXTtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIExpZmVjeWNsZVxuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICB0aGlzLnNldFVwSXRlbXMoKTtcbiAgdGhpcy5zZXRVcEZpbHRlcigpO1xuICB0aGlzLmVtaXRDYWxjaXRlTGlzdENoYW5nZSA9IGRlYm91bmNlKGludGVybmFsQ2FsY2l0ZUxpc3RDaGFuZ2VFdmVudC5iaW5kKHRoaXMpLCAwKTtcbiAgdGhpcy5lbWl0Q2FsY2l0ZUxpc3RGaWx0ZXIgPSBkZWJvdW5jZShpbnRlcm5hbENhbGNpdGVMaXN0RmlsdGVyRXZlbnQuYmluZCh0aGlzKSwgMCk7XG59XG5mdW5jdGlvbiBpbml0aWFsaXplT2JzZXJ2ZXIoKSB7XG4gIHRoaXMubXV0YXRpb25PYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmVsLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbn1cbmZ1bmN0aW9uIGNsZWFuVXBPYnNlcnZlcigpIHtcbiAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBMaXN0ZW5lcnNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICBjb25zdCB7IHNlbGVjdGVkVmFsdWVzIH0gPSB0aGlzO1xuICBjb25zdCB7IGl0ZW0sIHZhbHVlLCBzZWxlY3RlZCwgc2hpZnRQcmVzc2VkIH0gPSBldmVudC5kZXRhaWw7XG4gIGlmIChzZWxlY3RlZCkge1xuICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHNoaWZ0UHJlc3NlZCkge1xuICAgICAgdGhpcy5zZWxlY3RTaWJsaW5ncyhpdGVtKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICB0aGlzLmRlc2VsZWN0U2libGluZ0l0ZW1zKGl0ZW0pO1xuICAgIH1cbiAgICBzZWxlY3RlZFZhbHVlcy5zZXQodmFsdWUsIGl0ZW0pO1xuICB9XG4gIGVsc2Uge1xuICAgIHNlbGVjdGVkVmFsdWVzLmRlbGV0ZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgc2hpZnRQcmVzc2VkKSB7XG4gICAgICB0aGlzLnNlbGVjdFNpYmxpbmdzKGl0ZW0sIHRydWUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICB0b2dnbGVTaW5nbGVTZWxlY3RJdGVtVGFiYmluZyhpdGVtLCBzZWxlY3RlZCk7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICBmb2N1c0VsZW1lbnQoaXRlbSk7XG4gICAgfVxuICB9XG4gIHRoaXMubGFzdFNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gIHRoaXMuZW1pdENhbGNpdGVMaXN0Q2hhbmdlKCk7XG59XG5mdW5jdGlvbiBjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVZhbHVlQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICBjb25zdCBvbGRWYWx1ZSA9IGV2ZW50LmRldGFpbC5vbGRWYWx1ZTtcbiAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLnNlbGVjdGVkVmFsdWVzO1xuICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaGFzKG9sZFZhbHVlKSkge1xuICAgIGNvbnN0IGl0ZW0gPSBzZWxlY3RlZFZhbHVlcy5nZXQob2xkVmFsdWUpO1xuICAgIHNlbGVjdGVkVmFsdWVzLmRlbGV0ZShvbGRWYWx1ZSk7XG4gICAgc2VsZWN0ZWRWYWx1ZXMuc2V0KGV2ZW50LmRldGFpbC5uZXdWYWx1ZSwgaXRlbSk7XG4gIH1cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBQcml2YXRlIE1ldGhvZHNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gaXNWYWxpZE5hdmlnYXRpb25LZXkoa2V5KSB7XG4gIHJldHVybiAhIVNVUFBPUlRFRF9BUlJPV19LRVlTLmZpbmQoKGspID0+IGsgPT09IGtleSk7XG59XG5mdW5jdGlvbiBjYWxjaXRlTGlzdEZvY3VzT3V0SGFuZGxlcihldmVudCkge1xuICBjb25zdCB7IGVsLCBpdGVtcywgbXVsdGlwbGUsIHNlbGVjdGVkVmFsdWVzIH0gPSB0aGlzO1xuICBpZiAobXVsdGlwbGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZm9jdXNlZEluc2lkZSA9IGVsLmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpO1xuICBpZiAoZm9jdXNlZEluc2lkZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBmaWx0ZXJPdXREaXNhYmxlZChpdGVtcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIHRvZ2dsZVNpbmdsZVNlbGVjdEl0ZW1UYWJiaW5nKGl0ZW0sIHNlbGVjdGVkVmFsdWVzLnNpemUgPT09IDAgPyBpdGVtLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgfHwgZXZlbnQudGFyZ2V0ID09PSBpdGVtIDogaXRlbS5zZWxlY3RlZCk7XG4gIH0pO1xufVxuZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgeyBrZXksIHRhcmdldCB9ID0gZXZlbnQ7XG4gIGlmICghaXNWYWxpZE5hdmlnYXRpb25LZXkoa2V5KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGl0ZW1zLCBtdWx0aXBsZSwgc2VsZWN0aW9uRm9sbG93c0ZvY3VzIH0gPSB0aGlzO1xuICBjb25zdCB7IGxlbmd0aDogdG90YWxJdGVtcyB9ID0gaXRlbXM7XG4gIGNvbnN0IGN1cnJlbnRJbmRleCA9IGl0ZW1zLmluZGV4T2YodGFyZ2V0KTtcbiAgaWYgKCF0b3RhbEl0ZW1zIHx8IGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5kZXggPSBtb3ZlSXRlbUluZGV4KHRoaXMsIHRhcmdldCwga2V5ID09PSBcIkFycm93VXBcIiA/IFwidXBcIiA6IFwiZG93blwiKTtcbiAgY29uc3QgaXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgaXRlbXMuZm9yRWFjaCgoaSkgPT4gdG9nZ2xlU2luZ2xlU2VsZWN0SXRlbVRhYmJpbmcoaSwgaSA9PT0gaXRlbSkpO1xuICBpZiAoIW11bHRpcGxlICYmIHNlbGVjdGlvbkZvbGxvd3NGb2N1cykge1xuICAgIGl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG4gIGZvY3VzRWxlbWVudChpdGVtKTtcbn1cbmZ1bmN0aW9uIG1vdmVJdGVtSW5kZXgobGlzdCwgaXRlbSwgZGlyZWN0aW9uKSB7XG4gIGNvbnN0IHsgaXRlbXMgfSA9IGxpc3Q7XG4gIGNvbnN0IHsgbGVuZ3RoOiB0b3RhbEl0ZW1zIH0gPSBpdGVtcztcbiAgY29uc3QgY3VycmVudEluZGV4ID0gaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgY29uc3QgZGlyZWN0aW9uRmFjdG9yID0gZGlyZWN0aW9uID09PSBcInVwXCIgPyAtMSA6IDE7XG4gIGxldCBtb3ZlT2Zmc2V0ID0gMTtcbiAgbGV0IGluZGV4ID0gZ2V0Um91bmRSb2JpbkluZGV4KGN1cnJlbnRJbmRleCArIGRpcmVjdGlvbkZhY3RvciAqIG1vdmVPZmZzZXQrKywgdG90YWxJdGVtcyk7XG4gIGNvbnN0IGZpcnN0TW92ZWRJbmRleCA9IGluZGV4O1xuICB3aGlsZSAoaXRlbXNbaW5kZXhdLmRpc2FibGVkKSB7XG4gICAgaW5kZXggPSBnZXRSb3VuZFJvYmluSW5kZXgoY3VycmVudEluZGV4ICsgZGlyZWN0aW9uRmFjdG9yICogbW92ZU9mZnNldCsrLCB0b3RhbEl0ZW1zKTtcbiAgICBpZiAoaW5kZXggPT09IGZpcnN0TW92ZWRJbmRleCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmRleDtcbn1cbmZ1bmN0aW9uIGdldEl0ZW1JbmRleChsaXN0LCBpdGVtKSB7XG4gIGNvbnN0IHsgaXRlbXMgfSA9IGxpc3Q7XG4gIHJldHVybiBpdGVtcy5pbmRleE9mKGl0ZW0pO1xufVxuZnVuY3Rpb24gZmlsdGVyT3V0RGlzYWJsZWQoaXRlbXMpIHtcbiAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gIWl0ZW0uZGlzYWJsZWQpO1xufVxuZnVuY3Rpb24gaW50ZXJuYWxDYWxjaXRlTGlzdEZpbHRlckV2ZW50KCkge1xuICB0aGlzLmNhbGNpdGVMaXN0RmlsdGVyLmVtaXQoKTtcbn1cbmZ1bmN0aW9uIGludGVybmFsQ2FsY2l0ZUxpc3RDaGFuZ2VFdmVudCgpIHtcbiAgdGhpcy5jYWxjaXRlTGlzdENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZXMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlSXRlbShldmVudCkge1xuICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBpdGVtID0gZXZlbnQudGFyZ2V0O1xuICBjb25zdCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMuc2VsZWN0ZWRWYWx1ZXM7XG4gIGlmIChpdGVtLnBhcmVudEVsZW1lbnQudGFnTmFtZSA9PT0gXCJDQUxDSVRFLVBJQ0stTElTVC1HUk9VUFwiICYmIGl0ZW0uc2xvdCA9PT0gU0xPVFMucGFyZW50SXRlbSkge1xuICAgIGl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICBBcnJheS5mcm9tKGl0ZW0ucGFyZW50RWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaCgoaXRlbSkgPT4gc2VsZWN0ZWRWYWx1ZXMuZGVsZXRlKGl0ZW0udmFsdWUpKTtcbiAgfVxuICBlbHNlIHtcbiAgICBpdGVtLnJlbW92ZSgpO1xuICAgIHNlbGVjdGVkVmFsdWVzLmRlbGV0ZShpdGVtLnZhbHVlKTtcbiAgfVxuICB0aGlzLmVtaXRDYWxjaXRlTGlzdENoYW5nZSgpO1xufVxuZnVuY3Rpb24gdG9nZ2xlU2luZ2xlU2VsZWN0SXRlbVRhYmJpbmcoaXRlbSwgc2VsZWN0YWJsZSkge1xuICBpZiAoaXRlbS5kaXNhYmxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyB1c2luZyBhdHRyaWJ1dGUgaW50ZW50aW9uYWxseVxuICBpZiAoc2VsZWN0YWJsZSkge1xuICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cbiAgZWxzZSB7XG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICB9XG59XG5hc3luYyBmdW5jdGlvbiBzZXRGb2N1cyhmb2N1c0lkKSB7XG4gIGlmICh0aGlzLmZpbHRlckVuYWJsZWQgJiYgZm9jdXNJZCA9PT0gXCJmaWx0ZXJcIikge1xuICAgIGF3YWl0IGZvY3VzRWxlbWVudCh0aGlzLmZpbHRlckVsKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBpdGVtcywgbXVsdGlwbGUsIHNlbGVjdGlvbkZvbGxvd3NGb2N1cyB9ID0gdGhpcztcbiAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobXVsdGlwbGUpIHtcbiAgICByZXR1cm4gZmlsdGVyT3V0RGlzYWJsZWQoaXRlbXMpWzBdPy5zZXRGb2N1cygpO1xuICB9XG4gIGNvbnN0IGZpbHRlcmVkID0gZmlsdGVyT3V0RGlzYWJsZWQoaXRlbXMpO1xuICBjb25zdCBmb2N1c1RhcmdldCA9IGZpbHRlcmVkLmZpbmQoKGl0ZW0pID0+IGl0ZW0uc2VsZWN0ZWQpIHx8IGZpbHRlcmVkWzBdO1xuICBpZiAoc2VsZWN0aW9uRm9sbG93c0ZvY3VzICYmIGZvY3VzVGFyZ2V0KSB7XG4gICAgZm9jdXNUYXJnZXQuc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiBmb2N1c1RhcmdldC5zZXRGb2N1cygpO1xufVxuZnVuY3Rpb24gc2V0VXBJdGVtcyh0YWdOYW1lKSB7XG4gIHRoaXMuaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCh0YWdOYW1lKSk7XG4gIGxldCBoYXNTZWxlY3RlZCA9IGZhbHNlO1xuICBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzO1xuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5pY29uID0gdGhpcy5nZXRJY29uVHlwZSgpO1xuICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xuICAgICAgaXRlbS5kZXNlbGVjdERpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRvZ2dsZVNpbmdsZVNlbGVjdEl0ZW1UYWJiaW5nKGl0ZW0sIGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgIGhhc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHRvZ2dsZVNpbmdsZVNlbGVjdEl0ZW1UYWJiaW5nKGl0ZW0sIHRydWUpO1xuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcy5zZXQoaXRlbS52YWx1ZSwgaXRlbSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgW2ZpcnN0XSA9IGl0ZW1zO1xuICBpZiAoIWhhc1NlbGVjdGVkICYmIGZpcnN0ICYmICFmaXJzdC5kaXNhYmxlZCkge1xuICAgIHRvZ2dsZVNpbmdsZVNlbGVjdEl0ZW1UYWJiaW5nKGZpcnN0LCB0cnVlKTtcbiAgfVxufVxuZnVuY3Rpb24gZGVzZWxlY3RSZW1vdmVkSXRlbXMoKSB7XG4gIGNvbnN0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy5zZWxlY3RlZFZhbHVlcztcbiAgY29uc3QgaXRlbVZhbHVlcyA9IHRoaXMuaXRlbXMubWFwKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcbiAgc2VsZWN0ZWRWYWx1ZXMuZm9yRWFjaCgoc2VsZWN0ZWRJdGVtKSA9PiB7XG4gICAgaWYgKCFpdGVtVmFsdWVzLmluY2x1ZGVzKHNlbGVjdGVkSXRlbS52YWx1ZSkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMuZGVsZXRlKHNlbGVjdGVkSXRlbS52YWx1ZSk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGRlc2VsZWN0U2libGluZ0l0ZW1zKGl0ZW0pIHtcbiAgdGhpcy5pdGVtcy5mb3JFYWNoKChjdXJyZW50SXRlbSkgPT4ge1xuICAgIGlmIChjdXJyZW50SXRlbS52YWx1ZSAhPT0gaXRlbS52YWx1ZSkge1xuICAgICAgY3VycmVudEl0ZW0udG9nZ2xlU2VsZWN0ZWQoZmFsc2UpO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRWYWx1ZXMuaGFzKGN1cnJlbnRJdGVtLnZhbHVlKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzLmRlbGV0ZShjdXJyZW50SXRlbS52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHNlbGVjdFNpYmxpbmdzKGl0ZW0sIGRlc2VsZWN0ID0gZmFsc2UpIHtcbiAgaWYgKCF0aGlzLmxhc3RTZWxlY3RlZEl0ZW0pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcztcbiAgY29uc3Qgc3RhcnQgPSBpdGVtcy5maW5kSW5kZXgoKGN1cnJlbnRJdGVtKSA9PiB7XG4gICAgcmV0dXJuIGN1cnJlbnRJdGVtLnZhbHVlID09PSB0aGlzLmxhc3RTZWxlY3RlZEl0ZW0udmFsdWU7XG4gIH0pO1xuICBjb25zdCBlbmQgPSBpdGVtcy5maW5kSW5kZXgoKGN1cnJlbnRJdGVtKSA9PiB7XG4gICAgcmV0dXJuIGN1cnJlbnRJdGVtLnZhbHVlID09PSBpdGVtLnZhbHVlO1xuICB9KTtcbiAgaXRlbXMuc2xpY2UoTWF0aC5taW4oc3RhcnQsIGVuZCksIE1hdGgubWF4KHN0YXJ0LCBlbmQpKS5mb3JFYWNoKChjdXJyZW50SXRlbSkgPT4ge1xuICAgIGN1cnJlbnRJdGVtLnRvZ2dsZVNlbGVjdGVkKCFkZXNlbGVjdCk7XG4gICAgaWYgKCFkZXNlbGVjdCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcy5zZXQoY3VycmVudEl0ZW0udmFsdWUsIGN1cnJlbnRJdGVtKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzLmRlbGV0ZShjdXJyZW50SXRlbS52YWx1ZSk7XG4gICAgfVxuICB9KTtcbn1cbmxldCBncm91cHM7XG5mdW5jdGlvbiBoYW5kbGVGaWx0ZXIoZW1pdCA9IGZhbHNlKSB7XG4gIGNvbnN0IHsgZmlsdGVyZWREYXRhLCBmaWx0ZXJUZXh0IH0gPSB0aGlzO1xuICBjb25zdCB2YWx1ZXMgPSBmaWx0ZXJlZERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKTtcbiAgbGV0IGhhc1NlbGVjdGVkTWF0Y2ggPSBmYWxzZTtcbiAgaWYgKCFncm91cHMpIHtcbiAgICBncm91cHMgPSBuZXcgU2V0KCk7XG4gIH1cbiAgY29uc3QgbWF0Y2hlZEl0ZW1zID0gdGhpcy5pdGVtcz8uZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IGdyb3VwZWQgPSBwYXJlbnQubWF0Y2hlcyhcImNhbGNpdGUtcGljay1saXN0LWdyb3VwXCIpO1xuICAgIGlmIChncm91cGVkKSB7XG4gICAgICBncm91cHMuYWRkKHBhcmVudCk7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoZXMgPSBmaWx0ZXJUZXh0ID8gdmFsdWVzLmluY2x1ZGVzKGl0ZW0udmFsdWUpIDogdHJ1ZTtcbiAgICBpdGVtLmhpZGRlbiA9ICFtYXRjaGVzO1xuICAgIGlmICghaGFzU2VsZWN0ZWRNYXRjaCkge1xuICAgICAgaGFzU2VsZWN0ZWRNYXRjaCA9IG1hdGNoZXMgJiYgaXRlbS5zZWxlY3RlZDtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH0pIHx8IFtdO1xuICBncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICBjb25zdCBoYXNBdExlYXN0T25lTWF0Y2ggPSBtYXRjaGVkSXRlbXMuc29tZSgoaXRlbSkgPT4gZ3JvdXAuY29udGFpbnMoaXRlbSkpO1xuICAgIGdyb3VwLmhpZGRlbiA9ICFoYXNBdExlYXN0T25lTWF0Y2g7XG4gICAgaWYgKCFoYXNBdExlYXN0T25lTWF0Y2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50SXRlbSA9IGdldFNsb3R0ZWQoZ3JvdXAsIFwicGFyZW50LWl0ZW1cIik7XG4gICAgaWYgKHBhcmVudEl0ZW0pIHtcbiAgICAgIHBhcmVudEl0ZW0uaGlkZGVuID0gZmFsc2U7XG4gICAgICBpZiAobWF0Y2hlZEl0ZW1zLmluY2x1ZGVzKHBhcmVudEl0ZW0pKSB7XG4gICAgICAgIEFycmF5LmZyb20oZ3JvdXAuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiAoY2hpbGQuaGlkZGVuID0gZmFsc2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBncm91cHMuY2xlYXIoKTtcbiAgaWYgKG1hdGNoZWRJdGVtcy5sZW5ndGggPiAwICYmICFoYXNTZWxlY3RlZE1hdGNoICYmICF0aGlzLm11bHRpcGxlKSB7XG4gICAgdG9nZ2xlU2luZ2xlU2VsZWN0SXRlbVRhYmJpbmcobWF0Y2hlZEl0ZW1zWzBdLCB0cnVlKTtcbiAgfVxuICB0aGlzLnNldEZpbHRlcmVkSXRlbXMobWF0Y2hlZEl0ZW1zKTtcbiAgaWYgKGVtaXQpIHtcbiAgICB0aGlzLmVtaXRDYWxjaXRlTGlzdEZpbHRlcigpO1xuICB9XG59XG5mdW5jdGlvbiBoYW5kbGVJbml0aWFsRmlsdGVyKCkge1xuICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5maWx0ZXJFbD8uZmlsdGVyZWRJdGVtcztcbiAgaWYgKGZpbHRlcmVkSXRlbXMpIHtcbiAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkSXRlbXM7XG4gIH1cbiAgdGhpcy5oYW5kbGVGaWx0ZXIoKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUZpbHRlckV2ZW50KGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICBjb25zdCB7IGZpbHRlcmVkSXRlbXMsIHZhbHVlIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICB0aGlzLmZpbHRlclRleHQgPSB2YWx1ZTtcbiAgdGhpcy5maWx0ZXJlZERhdGEgPSBmaWx0ZXJlZEl0ZW1zO1xuICB0aGlzLmhhbmRsZUZpbHRlcih0cnVlKTtcbn1cbmZ1bmN0aW9uIGdldEl0ZW1EYXRhKCkge1xuICByZXR1cm4gdGhpcy5pdGVtcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXG4gICAgbWV0YWRhdGE6IGl0ZW0ubWV0YWRhdGEsXG4gICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gIH0pKTtcbn1cblxuY29uc3QgTGlzdCA9ICh7IHByb3BzOiB7IGRpc2FibGVkLCBsb2FkaW5nLCBmaWx0ZXJFbmFibGVkLCBkYXRhRm9yRmlsdGVyLCBoYW5kbGVGaWx0ZXJFdmVudCwgZmlsdGVyUGxhY2Vob2xkZXIsIGZpbHRlclRleHQsIHNldEZpbHRlckVsLCBkcmFnRW5hYmxlZCwgc3RvcmVBc3Npc3RpdmVFbCwgfSwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRTbG90ID0gaChcInNsb3RcIiwgbnVsbCk7XG4gIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1idXN5XCI6IHRvQXJpYUJvb2xlYW4obG9hZGluZyksIHJvbGU6IFwibWVudVwiLCAuLi5yZXN0IH0sXG4gICAgaChcInNlY3Rpb25cIiwgbnVsbCxcbiAgICAgIGRyYWdFbmFibGVkID8gKGgoXCJzcGFuXCIsIHsgXCJhcmlhLWxpdmVcIjogXCJhc3NlcnRpdmVcIiwgY2xhc3M6IFwiYXNzaXN0aXZlLXRleHRcIiwgXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICAgIHJlZjogc3RvcmVBc3Npc3RpdmVFbCB9KSkgOiBudWxsLFxuICAgICAgaChcImhlYWRlclwiLCB7IGNsYXNzOiB7IFtDU1Muc3RpY2t5XTogdHJ1ZSB9IH0sXG4gICAgICAgIGZpbHRlckVuYWJsZWQgPyAoaChcImNhbGNpdGUtZmlsdGVyXCIsIHsgXCJhcmlhLWxhYmVsXCI6IGZpbHRlclBsYWNlaG9sZGVyLCBkaXNhYmxlZDogbG9hZGluZyB8fCBkaXNhYmxlZCwgaXRlbXM6IGRhdGFGb3JGaWx0ZXIsIG9uQ2FsY2l0ZUZpbHRlckNoYW5nZTogaGFuZGxlRmlsdGVyRXZlbnQsIHBsYWNlaG9sZGVyOiBmaWx0ZXJQbGFjZWhvbGRlciwgdmFsdWU6IGZpbHRlclRleHQsIFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICAgICAgcmVmOiBzZXRGaWx0ZXJFbCB9KSkgOiBudWxsLFxuICAgICAgICBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTJDEubWVudUFjdGlvbnMgfSkpLFxuICAgICAgbG9hZGluZyA/IGgoXCJjYWxjaXRlLXNjcmltXCIsIHsgbG9hZGluZzogbG9hZGluZyB9KSA6IG51bGwsXG4gICAgICBkZWZhdWx0U2xvdCkpKTtcbn07XG5cbmV4cG9ydCB7IExpc3QgYXMgTCwgZGVzZWxlY3RTaWJsaW5nSXRlbXMgYXMgYSwgaGFuZGxlRmlsdGVyRXZlbnQgYXMgYiwgaW5pdGlhbGl6ZU9ic2VydmVyIGFzIGMsIGRlc2VsZWN0UmVtb3ZlZEl0ZW1zIGFzIGQsIGNsZWFuVXBPYnNlcnZlciBhcyBlLCBoYW5kbGVJbml0aWFsRmlsdGVyIGFzIGYsIGdldEl0ZW1EYXRhIGFzIGcsIGhhbmRsZUZpbHRlciBhcyBoLCBpbml0aWFsaXplIGFzIGksIGNhbGNpdGVMaXN0SXRlbUNoYW5nZUhhbmRsZXIgYXMgaiwga2V5RG93bkhhbmRsZXIgYXMgaywgY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1WYWx1ZUNoYW5nZUhhbmRsZXIgYXMgbCwgbXV0YXRpb25PYnNlcnZlckNhbGxiYWNrIGFzIG0sIGNhbGNpdGVMaXN0Rm9jdXNPdXRIYW5kbGVyIGFzIG4sIHNldFVwSXRlbXMgYXMgbywgc2V0Rm9jdXMgYXMgcCwgZ2V0SXRlbUluZGV4IGFzIHEsIHJlbW92ZUl0ZW0gYXMgciwgc2VsZWN0U2libGluZ3MgYXMgcywgbW92ZUl0ZW1JbmRleCBhcyB0IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=