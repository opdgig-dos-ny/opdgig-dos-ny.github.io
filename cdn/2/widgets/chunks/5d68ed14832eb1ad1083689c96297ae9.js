"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-segmented-control-item_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-segmented-control-item.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-segmented-control-item.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteSegmentedControlItem: () => (/* binding */ CalciteSegmentedControlItem),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const SLOTS = {
  input: "input",
};
const CSS = {
  segmentedControlItemIcon: "segmented-control-item-icon",
};

const segmentedControlItemCss = ":host{display:flex;cursor:pointer;align-self:stretch;font-weight:var(--calcite-font-weight-normal);transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-animation-timing) ease-in-out}:host label{pointer-events:none;margin:0.125rem;box-sizing:border-box;display:flex;flex:1 1 0%;align-items:center;color:var(--calcite-ui-text-3);transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-internal-animation-timing-fast) ease-in-out, color var(--calcite-internal-animation-timing-fast) ease-in-out}.label--horizontal{justify-content:center}:host{outline-color:transparent}:host(:focus){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );outline-offset:-1px}.label--scale-s{padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-block:0.125rem}.label--scale-m{padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-block:0.375rem}.label--scale-l{padding-inline:1rem;padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host(:hover) label{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:active) label{background-color:var(--calcite-ui-foreground-3)}:host([checked]) label{cursor:default;border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-inverse)}:host([checked]) .label--outline,:host([checked]) .label--outline-fill{border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-foreground-1);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);color:var(--calcite-ui-brand)}:host([checked]) .label--outline{background-color:transparent}::slotted(input){display:none}@media (forced-colors: active){:host([checked]) label{background-color:highlight}:host([checked]) .label--outline,:host([checked]) .label--outline-fill{outline:2px solid transparent;outline-offset:2px}:host([checked]) label:not([class~=label--outline]) .segmented-control-item-icon{color:highlightText}}.segmented-control-item-icon{position:relative;margin:0px;display:inline-flex;line-height:inherit}:host([icon-start]) .label--scale-s .segmented-control-item-icon{margin-inline-end:0.5rem}:host([icon-end]) .label--scale-s .segmented-control-item-icon{margin-inline-start:0.5rem}:host([icon-start]) .label--scale-m .segmented-control-item-icon{margin-inline-end:0.75rem}:host([icon-end]) .label--scale-m .segmented-control-item-icon{margin-inline-start:0.75rem}:host([icon-start]) .label--scale-l .segmented-control-item-icon{margin-inline-end:1rem}:host([icon-end]) .label--scale-l .segmented-control-item-icon{margin-inline-start:1rem}:host([hidden]){display:none}[hidden]{display:none}";

const SegmentedControlItem = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalSegmentedControlItemChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.createEvent)(this, "calciteInternalSegmentedControlItemChange", 6);
    this.checked = false;
    this.iconFlipRtl = false;
    this.iconStart = undefined;
    this.iconEnd = undefined;
    this.value = undefined;
    this.appearance = "solid";
    this.layout = "horizontal";
    this.scale = "m";
  }
  handleCheckedChange() {
    this.calciteInternalSegmentedControlItemChange.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const { appearance, checked, layout, scale, value } = this;
    const iconStartEl = this.iconStart ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("calcite-icon", { class: CSS.segmentedControlItemIcon, flipRtl: this.iconFlipRtl, icon: this.iconStart, key: "icon-start", scale: "s" })) : null;
    const iconEndEl = this.iconEnd ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("calcite-icon", { class: CSS.segmentedControlItemIcon, flipRtl: this.iconFlipRtl, icon: this.iconEnd, key: "icon-end", scale: "s" })) : null;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Host, { "aria-checked": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(checked), "aria-label": value, role: "radio" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("label", { class: {
        "label--scale-s": scale === "s",
        "label--scale-m": scale === "m",
        "label--scale-l": scale === "l",
        "label--horizontal": layout === "horizontal",
        "label--outline": appearance === "outline",
        "label--outline-fill": appearance === "outline-fill",
      } }, this.iconStart ? iconStartEl : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", null, value), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", { name: SLOTS.input }), this.iconEnd ? iconEndEl : null)));
  }
  get el() { return this; }
  static get watchers() { return {
    "checked": ["handleCheckedChange"]
  }; }
  static get style() { return segmentedControlItemCss; }
}, [1, "calcite-segmented-control-item", {
    "checked": [1540],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "iconStart": [513, "icon-start"],
    "iconEnd": [513, "icon-end"],
    "value": [1032],
    "appearance": [1],
    "layout": [1],
    "scale": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-segmented-control-item", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-segmented-control-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SegmentedControlItem);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_1__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteSegmentedControlItem = SegmentedControlItem;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/icon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/icon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ Icon),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const CSS = {
  icon: "icon",
  flipRtl: "flip-rtl",
};

/**
 * Icon data cache.
 * Exported for testing purposes.
 *
 * @private
 */
const iconCache = {};
/**
 * Icon request cache.
 * Exported for testing purposes.
 *
 * @private
 */
const requestCache = {};
const scaleToPx = {
  s: 16,
  m: 24,
  l: 32,
};
async function fetchIcon({ icon, scale }) {
  const size = scaleToPx[scale];
  const name = normalizeIconName(icon);
  const filled = name.charAt(name.length - 1) === "F";
  const iconName = filled ? name.substring(0, name.length - 1) : name;
  const id = `${iconName}${size}${filled ? "F" : ""}`;
  if (iconCache[id]) {
    return iconCache[id];
  }
  if (!requestCache[id]) {
    requestCache[id] = fetch((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.getAssetPath)(`./assets/icon/${id}.json`))
      .then((resp) => resp.json())
      .catch(() => {
      console.error(`"${id}" is not a valid calcite-ui-icon name`);
      return "";
    });
  }
  const path = await requestCache[id];
  iconCache[id] = path;
  return path;
}
/**
 * Normalize the icon name to match the path data module exports.
 * Exported for testing purposes.
 *
 * @param name – an icon name that can be either kebab or camel-cased
 * @private
 */
function normalizeIconName(name) {
  const numberLeadingName = !isNaN(Number(name.charAt(0)));
  const parts = name.split("-");
  const kebabCased = parts.length > 0;
  if (kebabCased) {
    const firstNonDigitInPartPattern = /[a-z]/i;
    name = parts
      .map((part, partIndex) => {
      return part.replace(firstNonDigitInPartPattern, function replacer(match, offset) {
        const isFirstCharInName = partIndex === 0 && offset === 0;
        if (isFirstCharInName) {
          return match;
        }
        return match.toUpperCase();
      });
    })
      .join("");
  }
  return numberLeadingName ? `i${name}` : name;
}

const iconCss = ":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}";

const Icon = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.icon = null;
    this.flipRtl = false;
    this.scale = "m";
    this.textLabel = undefined;
    this.pathData = undefined;
    this.visible = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.waitUntilVisible(() => {
      this.visible = true;
      this.loadIconPathData();
    });
  }
  disconnectedCallback() {
    this.intersectionObserver?.disconnect();
    this.intersectionObserver = null;
  }
  async componentWillLoad() {
    this.loadIconPathData();
  }
  render() {
    const { el, flipRtl, pathData, scale, textLabel } = this;
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(el);
    const size = scaleToPx[scale];
    const semantic = !!textLabel;
    const paths = [].concat(pathData || "");
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Host, { "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(!semantic), "aria-label": semantic ? textLabel : null, role: semantic ? "img" : null }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("svg", { "aria-hidden": "true", class: {
        [CSS.flipRtl]: dir === "rtl" && flipRtl,
        svg: true,
      }, fill: "currentColor", height: "100%", viewBox: `0 0 ${size} ${size}`, width: "100%", xmlns: "http://www.w3.org/2000/svg" }, paths.map((path) => typeof path === "string" ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: path })) : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: path.d, opacity: "opacity" in path ? path.opacity : 1 }))))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  async loadIconPathData() {
    const { icon, scale, visible } = this;
    if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Build.isBrowser || !icon || !visible) {
      return;
    }
    const pathData = await fetchIcon({ icon, scale });
    // While the fetchIcon method is awaiting response, the icon requested can change. This check is to verify the response received belongs to the current icon.
    if (icon !== this.icon) {
      return;
    }
    this.pathData = pathData;
  }
  waitUntilVisible(callback) {
    this.intersectionObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_1__.c)("intersection", (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.intersectionObserver.disconnect();
          this.intersectionObserver = null;
          callback();
        }
      });
    }, { rootMargin: "50px" });
    if (!this.intersectionObserver) {
      callback();
      return;
    }
    this.intersectionObserver.observe(this.el);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "icon": ["loadIconPathData"],
    "scale": ["loadIconPathData"]
  }; }
  static get style() { return iconCss; }
}, [1, "calcite-icon", {
    "icon": [513],
    "flipRtl": [516, "flip-rtl"],
    "scale": [513],
    "textLabel": [1, "text-label"],
    "pathData": [32],
    "visible": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Icon);
      }
      break;
  } });
}
defineCustomElement();




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNWQ2OGVkMTQ4MzJlYjFhZDEwODM2ODljOTYyOTdhZTkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytHO0FBQ2pFO0FBQ1M7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsYUFBYSxlQUFlLG1CQUFtQiw4Q0FBOEMsZ0pBQWdKLFlBQVksb0JBQW9CLGdCQUFnQixzQkFBc0IsYUFBYSxZQUFZLG1CQUFtQiwrQkFBK0IsK05BQStOLG1CQUFtQix1QkFBdUIsTUFBTSwwQkFBMEIsY0FBYyx5RUFBeUUscVBBQXFQLG9CQUFvQixnQkFBZ0Isc0JBQXNCLHNDQUFzQyxpQkFBaUIsdUJBQXVCLGdCQUFnQix1QkFBdUIsc0NBQXNDLGlCQUFpQix1QkFBdUIsZ0JBQWdCLG9CQUFvQix1QkFBdUIscUNBQXFDLG9CQUFvQixvQkFBb0IsZ0RBQWdELCtCQUErQixxQkFBcUIsZ0RBQWdELHVCQUF1QixlQUFlLHFDQUFxQyx5Q0FBeUMscUNBQXFDLHVFQUF1RSxxQ0FBcUMsZ0RBQWdELG1EQUFtRCw4QkFBOEIsaUNBQWlDLDZCQUE2QixpQkFBaUIsYUFBYSwrQkFBK0IsdUJBQXVCLDJCQUEyQix1RUFBdUUsOEJBQThCLG1CQUFtQixpRkFBaUYscUJBQXFCLDZCQUE2QixrQkFBa0IsV0FBVyxvQkFBb0Isb0JBQW9CLGlFQUFpRSx5QkFBeUIsK0RBQStELDJCQUEyQixpRUFBaUUsMEJBQTBCLCtEQUErRCw0QkFBNEIsaUVBQWlFLHVCQUF1QiwrREFBK0QseUJBQXlCLGdCQUFnQixhQUFhLFNBQVMsYUFBYTs7QUFFbi9GLDJDQUEyQywwRkFBa0IsZUFBZSwrRUFBVztBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxtRkFBVztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0EsT0FBTztBQUNQLEtBQUssSUFBSSxvQkFBb0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLGFBQWE7QUFDYiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRStDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUwvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLXNlZ21lbnRlZC1jb250cm9sLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2ljb24uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL29ic2VydmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9pY29uLmpzJztcblxuY29uc3QgU0xPVFMgPSB7XG4gIGlucHV0OiBcImlucHV0XCIsXG59O1xuY29uc3QgQ1NTID0ge1xuICBzZWdtZW50ZWRDb250cm9sSXRlbUljb246IFwic2VnbWVudGVkLWNvbnRyb2wtaXRlbS1pY29uXCIsXG59O1xuXG5jb25zdCBzZWdtZW50ZWRDb250cm9sSXRlbUNzcyA9IFwiOmhvc3R7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO2FsaWduLXNlbGY6c3RyZXRjaDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0KSBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXR9Omhvc3QgbGFiZWx7cG9pbnRlci1ldmVudHM6bm9uZTttYXJnaW46MC4xMjVyZW07Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSAwJTthbGlnbi1pdGVtczpjZW50ZXI7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdCkgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdCkgZWFzZS1pbi1vdXQsIGNvbG9yIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0KSBlYXNlLWluLW91dH0ubGFiZWwtLWhvcml6b250YWx7anVzdGlmeS1jb250ZW50OmNlbnRlcn06aG9zdHtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0KDpmb2N1cyl7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApO291dGxpbmUtb2Zmc2V0Oi0xcHh9LmxhYmVsLS1zY2FsZS1ze3BhZGRpbmctaW5saW5lOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07cGFkZGluZy1ibG9jazowLjEyNXJlbX0ubGFiZWwtLXNjYWxlLW17cGFkZGluZy1pbmxpbmU6MC43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW07cGFkZGluZy1ibG9jazowLjM3NXJlbX0ubGFiZWwtLXNjYWxlLWx7cGFkZGluZy1pbmxpbmU6MXJlbTtwYWRkaW5nLWJsb2NrOjAuNjI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtfTpob3N0KDpob3ZlcikgbGFiZWx7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KDphY3RpdmUpIGxhYmVse2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfTpob3N0KFtjaGVja2VkXSkgbGFiZWx7Y3Vyc29yOmRlZmF1bHQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LWludmVyc2UpfTpob3N0KFtjaGVja2VkXSkgLmxhYmVsLS1vdXRsaW5lLDpob3N0KFtjaGVja2VkXSkgLmxhYmVsLS1vdXRsaW5lLWZpbGx7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtjaGVja2VkXSkgLmxhYmVsLS1vdXRsaW5le2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9OjpzbG90dGVkKGlucHV0KXtkaXNwbGF5Om5vbmV9QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpezpob3N0KFtjaGVja2VkXSkgbGFiZWx7YmFja2dyb3VuZC1jb2xvcjpoaWdobGlnaHR9Omhvc3QoW2NoZWNrZWRdKSAubGFiZWwtLW91dGxpbmUsOmhvc3QoW2NoZWNrZWRdKSAubGFiZWwtLW91dGxpbmUtZmlsbHtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHh9Omhvc3QoW2NoZWNrZWRdKSBsYWJlbDpub3QoW2NsYXNzfj1sYWJlbC0tb3V0bGluZV0pIC5zZWdtZW50ZWQtY29udHJvbC1pdGVtLWljb257Y29sb3I6aGlnaGxpZ2h0VGV4dH19LnNlZ21lbnRlZC1jb250cm9sLWl0ZW0taWNvbntwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MHB4O2Rpc3BsYXk6aW5saW5lLWZsZXg7bGluZS1oZWlnaHQ6aW5oZXJpdH06aG9zdChbaWNvbi1zdGFydF0pIC5sYWJlbC0tc2NhbGUtcyAuc2VnbWVudGVkLWNvbnRyb2wtaXRlbS1pY29ue21hcmdpbi1pbmxpbmUtZW5kOjAuNXJlbX06aG9zdChbaWNvbi1lbmRdKSAubGFiZWwtLXNjYWxlLXMgLnNlZ21lbnRlZC1jb250cm9sLWl0ZW0taWNvbnttYXJnaW4taW5saW5lLXN0YXJ0OjAuNXJlbX06aG9zdChbaWNvbi1zdGFydF0pIC5sYWJlbC0tc2NhbGUtbSAuc2VnbWVudGVkLWNvbnRyb2wtaXRlbS1pY29ue21hcmdpbi1pbmxpbmUtZW5kOjAuNzVyZW19Omhvc3QoW2ljb24tZW5kXSkgLmxhYmVsLS1zY2FsZS1tIC5zZWdtZW50ZWQtY29udHJvbC1pdGVtLWljb257bWFyZ2luLWlubGluZS1zdGFydDowLjc1cmVtfTpob3N0KFtpY29uLXN0YXJ0XSkgLmxhYmVsLS1zY2FsZS1sIC5zZWdtZW50ZWQtY29udHJvbC1pdGVtLWljb257bWFyZ2luLWlubGluZS1lbmQ6MXJlbX06aG9zdChbaWNvbi1lbmRdKSAubGFiZWwtLXNjYWxlLWwgLnNlZ21lbnRlZC1jb250cm9sLWl0ZW0taWNvbnttYXJnaW4taW5saW5lLXN0YXJ0OjFyZW19Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IFNlZ21lbnRlZENvbnRyb2xJdGVtID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFNlZ21lbnRlZENvbnRyb2xJdGVtQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxTZWdtZW50ZWRDb250cm9sSXRlbUNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5pY29uU3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uRW5kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hcHBlYXJhbmNlID0gXCJzb2xpZFwiO1xuICAgIHRoaXMubGF5b3V0ID0gXCJob3Jpem9udGFsXCI7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICB9XG4gIGhhbmRsZUNoZWNrZWRDaGFuZ2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxTZWdtZW50ZWRDb250cm9sSXRlbUNoYW5nZS5lbWl0KCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYXBwZWFyYW5jZSwgY2hlY2tlZCwgbGF5b3V0LCBzY2FsZSwgdmFsdWUgfSA9IHRoaXM7XG4gICAgY29uc3QgaWNvblN0YXJ0RWwgPSB0aGlzLmljb25TdGFydCA/IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IENTUy5zZWdtZW50ZWRDb250cm9sSXRlbUljb24sIGZsaXBSdGw6IHRoaXMuaWNvbkZsaXBSdGwsIGljb246IHRoaXMuaWNvblN0YXJ0LCBrZXk6IFwiaWNvbi1zdGFydFwiLCBzY2FsZTogXCJzXCIgfSkpIDogbnVsbDtcbiAgICBjb25zdCBpY29uRW5kRWwgPSB0aGlzLmljb25FbmQgPyAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBDU1Muc2VnbWVudGVkQ29udHJvbEl0ZW1JY29uLCBmbGlwUnRsOiB0aGlzLmljb25GbGlwUnRsLCBpY29uOiB0aGlzLmljb25FbmQsIGtleTogXCJpY29uLWVuZFwiLCBzY2FsZTogXCJzXCIgfSkpIDogbnVsbDtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtY2hlY2tlZFwiOiB0b0FyaWFCb29sZWFuKGNoZWNrZWQpLCBcImFyaWEtbGFiZWxcIjogdmFsdWUsIHJvbGU6IFwicmFkaW9cIiB9LCBoKFwibGFiZWxcIiwgeyBjbGFzczoge1xuICAgICAgICBcImxhYmVsLS1zY2FsZS1zXCI6IHNjYWxlID09PSBcInNcIixcbiAgICAgICAgXCJsYWJlbC0tc2NhbGUtbVwiOiBzY2FsZSA9PT0gXCJtXCIsXG4gICAgICAgIFwibGFiZWwtLXNjYWxlLWxcIjogc2NhbGUgPT09IFwibFwiLFxuICAgICAgICBcImxhYmVsLS1ob3Jpem9udGFsXCI6IGxheW91dCA9PT0gXCJob3Jpem9udGFsXCIsXG4gICAgICAgIFwibGFiZWwtLW91dGxpbmVcIjogYXBwZWFyYW5jZSA9PT0gXCJvdXRsaW5lXCIsXG4gICAgICAgIFwibGFiZWwtLW91dGxpbmUtZmlsbFwiOiBhcHBlYXJhbmNlID09PSBcIm91dGxpbmUtZmlsbFwiLFxuICAgICAgfSB9LCB0aGlzLmljb25TdGFydCA/IGljb25TdGFydEVsIDogbnVsbCwgaChcInNsb3RcIiwgbnVsbCwgdmFsdWUpLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmlucHV0IH0pLCB0aGlzLmljb25FbmQgPyBpY29uRW5kRWwgOiBudWxsKSkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImNoZWNrZWRcIjogW1wiaGFuZGxlQ2hlY2tlZENoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBzZWdtZW50ZWRDb250cm9sSXRlbUNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1zZWdtZW50ZWQtY29udHJvbC1pdGVtXCIsIHtcbiAgICBcImNoZWNrZWRcIjogWzE1NDBdLFxuICAgIFwiaWNvbkZsaXBSdGxcIjogWzUxNiwgXCJpY29uLWZsaXAtcnRsXCJdLFxuICAgIFwiaWNvblN0YXJ0XCI6IFs1MTMsIFwiaWNvbi1zdGFydFwiXSxcbiAgICBcImljb25FbmRcIjogWzUxMywgXCJpY29uLWVuZFwiXSxcbiAgICBcInZhbHVlXCI6IFsxMDMyXSxcbiAgICBcImFwcGVhcmFuY2VcIjogWzFdLFxuICAgIFwibGF5b3V0XCI6IFsxXSxcbiAgICBcInNjYWxlXCI6IFsxXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtc2VnbWVudGVkLWNvbnRyb2wtaXRlbVwiLCBcImNhbGNpdGUtaWNvblwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1zZWdtZW50ZWQtY29udHJvbC1pdGVtXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgU2VnbWVudGVkQ29udHJvbEl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlU2VnbWVudGVkQ29udHJvbEl0ZW0gPSBTZWdtZW50ZWRDb250cm9sSXRlbTtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVTZWdtZW50ZWRDb250cm9sSXRlbSwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZ2V0QXNzZXRQYXRoLCBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBoLCBIb3N0LCBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0RWxlbWVudERpciwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBpY29uOiBcImljb25cIixcbiAgZmxpcFJ0bDogXCJmbGlwLXJ0bFwiLFxufTtcblxuLyoqXG4gKiBJY29uIGRhdGEgY2FjaGUuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBpY29uQ2FjaGUgPSB7fTtcbi8qKlxuICogSWNvbiByZXF1ZXN0IGNhY2hlLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgcmVxdWVzdENhY2hlID0ge307XG5jb25zdCBzY2FsZVRvUHggPSB7XG4gIHM6IDE2LFxuICBtOiAyNCxcbiAgbDogMzIsXG59O1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hJY29uKHsgaWNvbiwgc2NhbGUgfSkge1xuICBjb25zdCBzaXplID0gc2NhbGVUb1B4W3NjYWxlXTtcbiAgY29uc3QgbmFtZSA9IG5vcm1hbGl6ZUljb25OYW1lKGljb24pO1xuICBjb25zdCBmaWxsZWQgPSBuYW1lLmNoYXJBdChuYW1lLmxlbmd0aCAtIDEpID09PSBcIkZcIjtcbiAgY29uc3QgaWNvbk5hbWUgPSBmaWxsZWQgPyBuYW1lLnN1YnN0cmluZygwLCBuYW1lLmxlbmd0aCAtIDEpIDogbmFtZTtcbiAgY29uc3QgaWQgPSBgJHtpY29uTmFtZX0ke3NpemV9JHtmaWxsZWQgPyBcIkZcIiA6IFwiXCJ9YDtcbiAgaWYgKGljb25DYWNoZVtpZF0pIHtcbiAgICByZXR1cm4gaWNvbkNhY2hlW2lkXTtcbiAgfVxuICBpZiAoIXJlcXVlc3RDYWNoZVtpZF0pIHtcbiAgICByZXF1ZXN0Q2FjaGVbaWRdID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy9pY29uLyR7aWR9Lmpzb25gKSlcbiAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGBcIiR7aWR9XCIgaXMgbm90IGEgdmFsaWQgY2FsY2l0ZS11aS1pY29uIG5hbWVgKTtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHBhdGggPSBhd2FpdCByZXF1ZXN0Q2FjaGVbaWRdO1xuICBpY29uQ2FjaGVbaWRdID0gcGF0aDtcbiAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgaWNvbiBuYW1lIHRvIG1hdGNoIHRoZSBwYXRoIGRhdGEgbW9kdWxlIGV4cG9ydHMuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcGFyYW0gbmFtZSDigJMgYW4gaWNvbiBuYW1lIHRoYXQgY2FuIGJlIGVpdGhlciBrZWJhYiBvciBjYW1lbC1jYXNlZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplSWNvbk5hbWUobmFtZSkge1xuICBjb25zdCBudW1iZXJMZWFkaW5nTmFtZSA9ICFpc05hTihOdW1iZXIobmFtZS5jaGFyQXQoMCkpKTtcbiAgY29uc3QgcGFydHMgPSBuYW1lLnNwbGl0KFwiLVwiKTtcbiAgY29uc3Qga2ViYWJDYXNlZCA9IHBhcnRzLmxlbmd0aCA+IDA7XG4gIGlmIChrZWJhYkNhc2VkKSB7XG4gICAgY29uc3QgZmlyc3ROb25EaWdpdEluUGFydFBhdHRlcm4gPSAvW2Etel0vaTtcbiAgICBuYW1lID0gcGFydHNcbiAgICAgIC5tYXAoKHBhcnQsIHBhcnRJbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHBhcnQucmVwbGFjZShmaXJzdE5vbkRpZ2l0SW5QYXJ0UGF0dGVybiwgZnVuY3Rpb24gcmVwbGFjZXIobWF0Y2gsIG9mZnNldCkge1xuICAgICAgICBjb25zdCBpc0ZpcnN0Q2hhckluTmFtZSA9IHBhcnRJbmRleCA9PT0gMCAmJiBvZmZzZXQgPT09IDA7XG4gICAgICAgIGlmIChpc0ZpcnN0Q2hhckluTmFtZSkge1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2gudG9VcHBlckNhc2UoKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgICAuam9pbihcIlwiKTtcbiAgfVxuICByZXR1cm4gbnVtYmVyTGVhZGluZ05hbWUgPyBgaSR7bmFtZX1gIDogbmFtZTtcbn1cblxuY29uc3QgaWNvbkNzcyA9IFwiOmhvc3R7ZGlzcGxheTppbmxpbmUtZmxleDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWljb24tY29sb3IpfTpob3N0KFtzY2FsZT1zXSl7aW5saW5lLXNpemU6MTZweDtibG9jay1zaXplOjE2cHg7bWluLWlubGluZS1zaXplOjE2cHg7bWluLWJsb2NrLXNpemU6MTZweH06aG9zdChbc2NhbGU9bV0pe2lubGluZS1zaXplOjI0cHg7YmxvY2stc2l6ZToyNHB4O21pbi1pbmxpbmUtc2l6ZToyNHB4O21pbi1ibG9jay1zaXplOjI0cHh9Omhvc3QoW3NjYWxlPWxdKXtpbmxpbmUtc2l6ZTozMnB4O2Jsb2NrLXNpemU6MzJweDttaW4taW5saW5lLXNpemU6MzJweDttaW4tYmxvY2stc2l6ZTozMnB4fS5mbGlwLXJ0bHt0cmFuc2Zvcm06c2NhbGVYKC0xKX0uc3Zne2Rpc3BsYXk6YmxvY2t9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IEljb24gPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuaWNvbiA9IG51bGw7XG4gICAgdGhpcy5mbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudGV4dExhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGF0aERhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy53YWl0VW50aWxWaXNpYmxlKCgpID0+IHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmxvYWRJY29uUGF0aERhdGEoKTtcbiAgICB9KTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5sb2FkSWNvblBhdGhEYXRhKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWwsIGZsaXBSdGwsIHBhdGhEYXRhLCBzY2FsZSwgdGV4dExhYmVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIoZWwpO1xuICAgIGNvbnN0IHNpemUgPSBzY2FsZVRvUHhbc2NhbGVdO1xuICAgIGNvbnN0IHNlbWFudGljID0gISF0ZXh0TGFiZWw7XG4gICAgY29uc3QgcGF0aHMgPSBbXS5jb25jYXQocGF0aERhdGEgfHwgXCJcIik7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWhpZGRlblwiOiB0b0FyaWFCb29sZWFuKCFzZW1hbnRpYyksIFwiYXJpYS1sYWJlbFwiOiBzZW1hbnRpYyA/IHRleHRMYWJlbCA6IG51bGwsIHJvbGU6IHNlbWFudGljID8gXCJpbWdcIiA6IG51bGwgfSwgaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuZmxpcFJ0bF06IGRpciA9PT0gXCJydGxcIiAmJiBmbGlwUnRsLFxuICAgICAgICBzdmc6IHRydWUsXG4gICAgICB9LCBmaWxsOiBcImN1cnJlbnRDb2xvclwiLCBoZWlnaHQ6IFwiMTAwJVwiLCB2aWV3Qm94OiBgMCAwICR7c2l6ZX0gJHtzaXplfWAsIHdpZHRoOiBcIjEwMCVcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LCBwYXRocy5tYXAoKHBhdGgpID0+IHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiID8gKGgoXCJwYXRoXCIsIHsgZDogcGF0aCB9KSkgOiAoaChcInBhdGhcIiwgeyBkOiBwYXRoLmQsIG9wYWNpdHk6IFwib3BhY2l0eVwiIGluIHBhdGggPyBwYXRoLm9wYWNpdHkgOiAxIH0pKSkpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmMgbG9hZEljb25QYXRoRGF0YSgpIHtcbiAgICBjb25zdCB7IGljb24sIHNjYWxlLCB2aXNpYmxlIH0gPSB0aGlzO1xuICAgIGlmICghQnVpbGQuaXNCcm93c2VyIHx8ICFpY29uIHx8ICF2aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhdGhEYXRhID0gYXdhaXQgZmV0Y2hJY29uKHsgaWNvbiwgc2NhbGUgfSk7XG4gICAgLy8gV2hpbGUgdGhlIGZldGNoSWNvbiBtZXRob2QgaXMgYXdhaXRpbmcgcmVzcG9uc2UsIHRoZSBpY29uIHJlcXVlc3RlZCBjYW4gY2hhbmdlLiBUaGlzIGNoZWNrIGlzIHRvIHZlcmlmeSB0aGUgcmVzcG9uc2UgcmVjZWl2ZWQgYmVsb25ncyB0byB0aGUgY3VycmVudCBpY29uLlxuICAgIGlmIChpY29uICE9PSB0aGlzLmljb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wYXRoRGF0YSA9IHBhdGhEYXRhO1xuICB9XG4gIHdhaXRVbnRpbFZpc2libGUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJpbnRlcnNlY3Rpb25cIiwgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgeyByb290TWFyZ2luOiBcIjUwcHhcIiB9KTtcbiAgICBpZiAoIXRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiaWNvblwiOiBbXCJsb2FkSWNvblBhdGhEYXRhXCJdLFxuICAgIFwic2NhbGVcIjogW1wibG9hZEljb25QYXRoRGF0YVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBpY29uQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWljb25cIiwge1xuICAgIFwiaWNvblwiOiBbNTEzXSxcbiAgICBcImZsaXBSdGxcIjogWzUxNiwgXCJmbGlwLXJ0bFwiXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwidGV4dExhYmVsXCI6IFsxLCBcInRleHQtbGFiZWxcIl0sXG4gICAgXCJwYXRoRGF0YVwiOiBbMzJdLFxuICAgIFwidmlzaWJsZVwiOiBbMzJdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtaWNvblwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgSWNvbik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgSWNvbiBhcyBJLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG4vKipcbiAqIFRoaXMgdXRpbGl0eSBlbnN1cmVzIG9ic2VydmVycyBhcmUgY3JlYXRlZCBvbmx5IGZvciBicm93c2VyIGNvbnRleHRzLlxuICpcbiAqIEBwYXJhbSB0eXBlIC0gdGhlIHR5cGUgb2Ygb2JzZXJ2ZXIgdG8gY3JlYXRlXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSB0aGUgb2JzZXJ2ZXIgY2FsbGJhY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gdGhlIG9ic2VydmVyIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IE9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIodHlwZSk7XG4gIHJldHVybiBuZXcgT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIodHlwZSkge1xuICAvLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMTI2I2lzc3VlY29tbWVudC0xMDQ5ODE0OTQ4XG4gIGNsYXNzIEV4dGVuZGVkTXV0YXRpb25PYnNlcnZlciBleHRlbmRzIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaykge1xuICAgICAgc3VwZXIoY2FsbGJhY2spO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIG9ic2VydmUodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkucHVzaCh7IHRhcmdldCwgb3B0aW9ucyB9KTtcbiAgICAgIHJldHVybiBzdXBlci5vYnNlcnZlKHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHVub2JzZXJ2ZSh0YXJnZXQpIHtcbiAgICAgIGNvbnN0IG5ld09ic2VydmVkRW50cmllcyA9IHRoaXMub2JzZXJ2ZWRFbnRyeS5maWx0ZXIoKG9ic2VydmVkKSA9PiBvYnNlcnZlZC50YXJnZXQgIT09IHRhcmdldCk7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkgPSBbXTtcbiAgICAgIHRoaXMuY2FsbGJhY2soc3VwZXIudGFrZVJlY29yZHMoKSwgdGhpcyk7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgIG5ld09ic2VydmVkRW50cmllcy5mb3JFYWNoKChvYnNlcnZlZCkgPT4gdGhpcy5vYnNlcnZlKG9ic2VydmVkLnRhcmdldCwgb2JzZXJ2ZWQub3B0aW9ucykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHR5cGUgPT09IFwiaW50ZXJzZWN0aW9uXCJcbiAgICAgID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyXG4gICAgICA6IHR5cGUgPT09IFwibXV0YXRpb25cIlxuICAgICAgICA/IEV4dGVuZGVkTXV0YXRpb25PYnNlcnZlclxuICAgICAgICA6IHdpbmRvdy5SZXNpemVPYnNlcnZlcik7XG4gIH0pKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU9ic2VydmVyIGFzIGMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==