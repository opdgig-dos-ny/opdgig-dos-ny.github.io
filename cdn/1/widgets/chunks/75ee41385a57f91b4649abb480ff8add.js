"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-combobox-item_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-combobox-item.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-combobox-item.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteComboboxItem: () => (/* binding */ CalciteComboboxItem),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _combobox_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combobox-item.js */ "./node_modules/@esri/calcite-components/dist/components/combobox-item.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const CalciteComboboxItem = _combobox_item_js__WEBPACK_IMPORTED_MODULE_0__.C;
const defineCustomElement = _combobox_item_js__WEBPACK_IMPORTED_MODULE_0__.d;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/combobox-item.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/combobox-item.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ComboboxItem),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _utils2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils2.js */ "./node_modules/@esri/calcite-components/dist/components/utils2.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */









const CSS = {
  icon: "icon",
  iconActive: "icon--active",
  iconIndent: "icon--indent",
  custom: "icon--custom",
  dot: "icon--dot",
  single: "label--single",
  label: "label",
  active: "label--active",
  selected: "label--selected",
  title: "title",
  textContainer: "text-container",
};

const comboboxItemCss = "@charset \"UTF-8\";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([hidden]){display:none}[hidden]{display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.625rem;--calcite-combobox-item-spacing-indent:1rem;--calcite-combobox-item-selector-icon-size:1.5rem}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  )}:host(:focus){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host,ul{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),ul:focus{outline:2px solid transparent;outline-offset:2px}.label{position:relative;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:100%;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent;word-wrap:break-word;word-break:break-word;padding-block:var(--calcite-combobox-item-spacing-unit-s);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.label--active{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.label:hover,.label:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration-line:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.title{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon{display:inline-flex;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}.icon--indent{padding-inline-start:var(--calcite-combobox-item-indent-value)}.icon--custom{margin-block-start:-1px;padding-inline-start:var(--calcite-combobox-item-spacing-unit-l);color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:flex;justify-content:center;min-inline-size:var(--calcite-combobox-item-selector-icon-size)}.icon--dot:before{text-align:start;content:\"•\"}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}";

const ComboboxItem = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteComboboxItemChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteComboboxItemChange", 6);
    this.itemClickHandler = () => {
      this.toggleSelected();
    };
    this.disabled = false;
    this.selected = false;
    this.active = false;
    this.ancestors = undefined;
    this.guid = (0,_guid_js__WEBPACK_IMPORTED_MODULE_2__.g)();
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.textLabel = undefined;
    this.value = undefined;
    this.filterDisabled = undefined;
    this.selectionMode = "multiple";
    this.scale = "m";
  }
  selectedWatchHandler() {
    this.calciteComboboxItemChange.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.ancestors = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_4__.g)(this.el);
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  toggleSelected() {
    const isSinglePersistSelect = this.selectionMode === "single-persist";
    if (this.disabled || (isSinglePersistSelect && this.selected)) {
      return;
    }
    this.selected = !this.selected;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderIcon(iconPath) {
    return this.icon ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { class: {
        [CSS.custom]: !!this.icon,
        [CSS.iconActive]: this.icon && this.selected,
        [CSS.iconIndent]: true,
      }, flipRtl: this.iconFlipRtl, icon: this.icon || iconPath, key: "icon", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.scale) })) : null;
  }
  renderSelectIndicator(showDot, iconPath) {
    return showDot ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { class: {
        [CSS.icon]: true,
        [CSS.dot]: true,
        [CSS.iconIndent]: true,
      } })) : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { class: {
        [CSS.icon]: true,
        [CSS.iconActive]: this.selected,
        [CSS.iconIndent]: true,
      }, flipRtl: this.iconFlipRtl, icon: iconPath, key: "indicator", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.scale) }));
  }
  renderChildren() {
    if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el)) {
      return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("ul", { key: "default-slot-container" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot", null)));
    }
    return null;
  }
  render() {
    const isSingleSelect = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_4__.i)(this.selectionMode);
    const showDot = isSingleSelect && !this.disabled;
    const defaultIcon = isSingleSelect ? "dot" : "check";
    const iconPath = this.disabled ? "" : defaultIcon;
    const classes = {
      [CSS.label]: true,
      [CSS.selected]: this.selected,
      [CSS.active]: this.active,
      [CSS.single]: isSingleSelect,
    };
    const depth = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_4__.a)(this.el);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.Host, { "aria-hidden": "true" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: `container scale--${this.scale}`, style: { "--calcite-combobox-item-spacing-indent-multiplier": `${depth}` } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("li", { class: classes, id: this.guid, onClick: this.itemClickHandler }, this.renderSelectIndicator(showDot, iconPath), this.renderIcon(iconPath), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { class: "title" }, this.textLabel)), this.renderChildren())));
  }
  get el() { return this; }
  static get watchers() { return {
    "selected": ["selectedWatchHandler"]
  }; }
  static get style() { return comboboxItemCss; }
}, [1, "calcite-combobox-item", {
    "disabled": [516],
    "selected": [1540],
    "active": [516],
    "ancestors": [1040],
    "guid": [513],
    "icon": [513],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "textLabel": [513, "text-label"],
    "value": [8],
    "filterDisabled": [516, "filter-disabled"],
    "selectionMode": [513, "selection-mode"],
    "scale": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-combobox-item", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-combobox-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ComboboxItem);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/component.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/component.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getIconScale)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
function getIconScale(componentScale) {
  return componentScale === "l" ? "m" : "s";
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectConditionalSlotComponent),
/* harmony export */   d: () => (/* binding */ disconnectConditionalSlotComponent)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const observed = new Set();
let mutationObserver;
const observerOptions = { childList: true };
/**
 * Helper to set up a conditional slot component on connectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function connectConditionalSlotComponent(component) {
  if (!mutationObserver) {
    mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_0__.c)("mutation", processMutations);
  }
  mutationObserver.observe(component.el, observerOptions);
}
/**
 * Helper to tear down a conditional slot component on disconnectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function disconnectConditionalSlotComponent(component) {
  observed.delete(component.el);
  // we explicitly process queued mutations and disconnect and reconnect
  // the observer until MutationObserver gets an `unobserve` method
  // see https://github.com/whatwg/dom/issues/126
  processMutations(mutationObserver.takeRecords());
  mutationObserver.disconnect();
  for (const [element] of observed.entries()) {
    mutationObserver.observe(element, observerOptions);
  }
}
function processMutations(mutations) {
  mutations.forEach(({ target }) => {
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.forceUpdate)(target);
  });
}




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

/***/ "./node_modules/@esri/calcite-components/dist/components/interactive.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/interactive.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectInteractive),
/* harmony export */   d: () => (/* binding */ disconnectInteractive),
/* harmony export */   g: () => (/* binding */ getUserAgentString),
/* harmony export */   u: () => (/* binding */ updateHostInteraction)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


function getUserAgentData() {
  return navigator.userAgentData;
}
function getUserAgentString() {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return "";
  }
  const uaData = getUserAgentData();
  return uaData?.brands
    ? uaData.brands.map(({ brand, version }) => `${brand}/${version}`).join(" ")
    : navigator.userAgent;
}

// ⚠️ browser-sniffing is not a best practice and should be avoided ⚠️
const isFirefox = /firefox/i.test(getUserAgentString());
const interactiveElementToParent = isFirefox
  ? new WeakMap()
  : null;
function interceptedClick() {
  const { disabled } = this;
  if (!disabled) {
    HTMLElement.prototype.click.call(this);
  }
}
function onPointerDown(event) {
  const interactiveElement = event.target;
  if (isFirefox && !interactiveElementToParent.get(interactiveElement)) {
    return;
  }
  const { disabled } = interactiveElement;
  if (disabled) {
    // prevent click from moving focus on host
    event.preventDefault();
  }
}
const nonBubblingWhenDisabledMouseEvents = ["mousedown", "mouseup", "click"];
function onNonBubblingWhenDisabledMouseEvent(event) {
  if (isFirefox && !interactiveElementToParent.get(event.target)) {
    return;
  }
  const { disabled } = event.target;
  // prevent disallowed mouse events from being emitted on the disabled host (per https://github.com/whatwg/html/issues/5886)
  //⚠ we generally avoid stopping propagation of events, but this is needed to adhere to the intended spec changes above ⚠
  if (disabled) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
}
const captureOnlyOptions = { capture: true };
/**
 * This helper updates the host element to prevent keyboard interaction on its subtree and sets the appropriate aria attribute for accessibility.
 *
 * This should be used in the `componentDidRender` lifecycle hook.
 *
 * **Notes**
 *
 * this util is not needed for simple components whose root element or elements are an interactive component (custom element or native control). For those cases, set the `disabled` props on the root components instead.
 * technically, users can override `tabindex` and restore keyboard navigation, but this will be considered user error
 *
 * @param component
 * @param hostIsTabbable – when set to true or its predicate returns true, the host is tabbable and will be managed by the helper. Set to "managed" for cases where a component's parent determines which item is tabbable (i.e., sets `tabindex` to allow tabbing).
 */
function updateHostInteraction(component, hostIsTabbable = false) {
  if (component.disabled) {
    component.el.setAttribute("tabindex", "-1");
    component.el.setAttribute("aria-disabled", "true");
    if (component.el.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    blockInteraction(component);
    return;
  }
  restoreInteraction(component);
  if (typeof hostIsTabbable === "function") {
    component.el.setAttribute("tabindex", hostIsTabbable.call(component) ? "0" : "-1");
  }
  else if (hostIsTabbable === true) {
    component.el.setAttribute("tabindex", "0");
  }
  else if (hostIsTabbable === false) {
    component.el.removeAttribute("tabindex");
  }
  else ;
  component.el.removeAttribute("aria-disabled");
}
function blockInteraction(component) {
  component.el.click = interceptedClick;
  addInteractionListeners(isFirefox ? getParentElement(component) : component.el);
}
function addInteractionListeners(element) {
  if (!element) {
    // this path is only applicable to Firefox
    return;
  }
  element.addEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.addEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
function getParentElement(component) {
  return interactiveElementToParent.get(component.el);
}
function restoreInteraction(component) {
  delete component.el.click; // fallback on HTMLElement.prototype.click
  removeInteractionListeners(isFirefox ? getParentElement(component) : component.el);
}
function removeInteractionListeners(element) {
  if (!element) {
    // this path is only applicable to Firefox
    return;
  }
  element.removeEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.removeEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
/**
 * This utility helps disable components consistently in Firefox.
 *
 * It needs to be called in `connectedCallback` and is only needed for Firefox as it does not call capture event listeners before non-capture ones (see https://bugzilla.mozilla.org/show_bug.cgi?id=1731504).
 *
 * @param component
 */
function connectInteractive(component) {
  if (!component.disabled || !isFirefox) {
    return;
  }
  const parent = component.el.parentElement || component.el; /* assume element is host if it has no parent when connected */
  interactiveElementToParent.set(component.el, parent);
  blockInteraction(component);
}
/**
 * This utility restores interactivity to disabled components consistently in Firefox.
 *
 * It needs to be called in `disconnectedCallback` and is only needed for Firefox as it does not call capture event listeners before non-capture ones (see https://bugzilla.mozilla.org/show_bug.cgi?id=1731504).
 *
 * @param component
 */
function disconnectInteractive(component) {
  if (!isFirefox) {
    return;
  }
  // always remove on disconnect as render or connect will restore it
  interactiveElementToParent.delete(component.el);
  restoreInteraction(component);
}




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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/utils2.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/utils2.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNzVlZTQxMzg1YTU3ZjkxYjQ2NDlhYmI0ODBmZjhhZGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtRjs7QUFFbkYsNEJBQTRCLGdEQUFZO0FBQ3hDLDRCQUE0QixnREFBcUI7O0FBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytHO0FBQ007QUFDMUU7QUFDTDtBQUM2RTtBQUNqQztBQUMvQjtBQUNJOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixnQkFBZ0IsYUFBYSxTQUFTLGFBQWEsVUFBVSxzQ0FBc0MsaUJBQWlCLDhDQUE4QywrQ0FBK0MsOENBQThDLGdEQUFnRCxVQUFVLHNDQUFzQyxpQkFBaUIsK0NBQStDLDhDQUE4QywrQ0FBK0MsZ0RBQWdELFVBQVUscUNBQXFDLG9CQUFvQiw0Q0FBNEMsZ0RBQWdELDRDQUE0QyxrREFBa0QsV0FBVywwSkFBMEosY0FBYyxzQkFBc0IsOEJBQThCLHVHQUF1Ryx5R0FBeUcsVUFBVSxTQUFTLFdBQVcsYUFBYSxzQkFBc0IsWUFBWSx1QkFBdUIsOEJBQThCLG1CQUFtQixPQUFPLGtCQUFrQixzQkFBc0IsYUFBYSxpQkFBaUIscUJBQXFCLGVBQWUsbUJBQW1CLCtCQUErQiwwQkFBMEIsMEJBQTBCLHdEQUF3RCwwQkFBMEIscUJBQXFCLHNCQUFzQiwwREFBMEQsMkRBQTJELHlCQUF5QixlQUFlLGlCQUFpQiw4Q0FBOEMsK0JBQStCLGVBQWUseUVBQXlFLHFQQUFxUCwyQkFBMkIsZ0RBQWdELCtCQUErQiwwQkFBMEIsc0JBQXNCLDhCQUE4Qix1R0FBdUcsT0FBTyxnQkFBZ0IsMkRBQTJELE1BQU0sb0JBQW9CLFVBQVUsMEJBQTBCLHdEQUF3RCxpQ0FBaUMsY0FBYywrREFBK0QsY0FBYyx3QkFBd0IsaUVBQWlFLCtCQUErQixjQUFjLCtCQUErQixXQUFXLGFBQWEsdUJBQXVCLGdFQUFnRSxrQkFBa0IsaUJBQWlCLGNBQWMscUJBQXFCLFVBQVUsdUJBQXVCLFVBQVUsOEJBQThCLDhCQUE4QixVQUFVOztBQUV4aUgsbUNBQW1DLDBGQUFrQixlQUFlLCtFQUFXO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLG1GQUFXO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkNBQVk7QUFDakMsSUFBSSxzREFBK0I7QUFDbkMsSUFBSSxrREFBa0I7QUFDdEI7QUFDQTtBQUNBLElBQUksc0RBQWtDO0FBQ3RDLElBQUksa0RBQXFCO0FBQ3pCO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5RUFBQyxtQkFBbUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsT0FBTyw4RUFBOEUsZ0RBQVksY0FBYztBQUMvRztBQUNBO0FBQ0Esc0JBQXNCLHlFQUFDLFdBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLHlFQUFDLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxPQUFPLHNFQUFzRSxnREFBWSxjQUFjO0FBQ3ZHO0FBQ0E7QUFDQSxRQUFRLDBDQUFVO0FBQ2xCLGNBQWMseUVBQUMsU0FBUywrQkFBK0IsRUFBRSx5RUFBQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2Q0FBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQVE7QUFDMUIsWUFBWSx5RUFBQyxDQUFDLHdFQUFJLElBQUksdUJBQXVCLEVBQUUseUVBQUMsVUFBVSwyQkFBMkIsV0FBVyxZQUFZLHdEQUF3RCxNQUFNLEtBQUssRUFBRSx5RUFBQyxTQUFTLCtEQUErRCw0RUFBNEUseUVBQUMsV0FBVyxnQkFBZ0I7QUFDbFc7QUFDQSxhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBcUI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUV1RDs7Ozs7Ozs7Ozs7Ozs7O0FDdEt2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUU7QUFDaEI7O0FBRXJEO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0VBQXdFO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdEQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdFQUF3RTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IsSUFBSSxtRkFBVztBQUNmLEdBQUc7QUFDSDs7QUFFeUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RHpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUg7QUFDckQ7QUFDYjs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTLEVBQUUsS0FBSyxFQUFFLGtCQUFrQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvRkFBWSxrQkFBa0IsR0FBRztBQUM5RDtBQUNBO0FBQ0Esd0JBQXdCLEdBQUc7QUFDM0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlDQUFpQyxLQUFLO0FBQ3RDOztBQUVBLHVCQUF1QixvQkFBb0IsbUNBQW1DLGlCQUFpQixpQkFBaUIsZ0JBQWdCLHFCQUFxQixvQkFBb0IsaUJBQWlCLGlCQUFpQixnQkFBZ0IscUJBQXFCLG9CQUFvQixpQkFBaUIsaUJBQWlCLGdCQUFnQixxQkFBcUIsb0JBQW9CLFVBQVUscUJBQXFCLEtBQUssY0FBYyxnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRXBjLDJCQUEyQiwwRkFBa0IsZUFBZSwrRUFBVztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMENBQTBDO0FBQ3RELGdCQUFnQiwwQ0FBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlFQUFDLENBQUMsd0VBQUksSUFBSSxlQUFlLDBDQUFhLHVGQUF1RixFQUFFLHlFQUFDLFVBQVU7QUFDdEo7QUFDQTtBQUNBLE9BQU8sd0RBQXdELE1BQU0sRUFBRSxLQUFLLHVEQUF1RCxrREFBa0QseUVBQUMsV0FBVyxTQUFTLE1BQU0seUVBQUMsV0FBVywwREFBMEQ7QUFDdFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVCQUF1QjtBQUNuQyxTQUFTLHlFQUFLO0FBQ2Q7QUFDQTtBQUNBLHVDQUF1QyxhQUFhO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdEQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLLElBQUksb0JBQW9CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUUrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVML0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlFQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0JBQWdCLFFBQVEsTUFBTSxHQUFHLFFBQVE7QUFDcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9IOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEpwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRC9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0Q7QUFDZTs7QUFFL0Q7QUFDQTtBQUNBLGlDQUFpQyxhQUFhLElBQUksa0JBQWtCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDBDQUFlO0FBQ3hCO0FBQ0E7QUFDQSxnQkFBZ0IsMENBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtY29tYm9ib3gtaXRlbS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29tYm9ib3gtaXRlbS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jb25kaXRpb25hbFNsb3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2ljb24uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2ludGVyYWN0aXZlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9vYnNlcnZlcnMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3V0aWxzMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBDIGFzIENvbWJvYm94SXRlbSwgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL2NvbWJvYm94LWl0ZW0uanMnO1xuXG5jb25zdCBDYWxjaXRlQ29tYm9ib3hJdGVtID0gQ29tYm9ib3hJdGVtO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZUNvbWJvYm94SXRlbSwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQsIGQgYXMgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCB9IGZyb20gJy4vY29uZGl0aW9uYWxTbG90LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U2xvdHRlZCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldEFuY2VzdG9ycywgaSBhcyBpc1NpbmdsZUxpa2UsIGEgYXMgZ2V0RGVwdGggfSBmcm9tICcuL3V0aWxzMi5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldEljb25TY2FsZSB9IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi9pY29uLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBpY29uOiBcImljb25cIixcbiAgaWNvbkFjdGl2ZTogXCJpY29uLS1hY3RpdmVcIixcbiAgaWNvbkluZGVudDogXCJpY29uLS1pbmRlbnRcIixcbiAgY3VzdG9tOiBcImljb24tLWN1c3RvbVwiLFxuICBkb3Q6IFwiaWNvbi0tZG90XCIsXG4gIHNpbmdsZTogXCJsYWJlbC0tc2luZ2xlXCIsXG4gIGxhYmVsOiBcImxhYmVsXCIsXG4gIGFjdGl2ZTogXCJsYWJlbC0tYWN0aXZlXCIsXG4gIHNlbGVjdGVkOiBcImxhYmVsLS1zZWxlY3RlZFwiLFxuICB0aXRsZTogXCJ0aXRsZVwiLFxuICB0ZXh0Q29udGFpbmVyOiBcInRleHQtY29udGFpbmVyXCIsXG59O1xuXG5jb25zdCBjb21ib2JveEl0ZW1Dc3MgPSBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9LnNjYWxlLS1ze2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbDowLjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LXM6MC4yNXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLWluZGVudDowLjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc2VsZWN0b3ItaWNvbi1zaXplOjFyZW19LnNjYWxlLS1te2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbDowLjc1cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zOjAuNXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLWluZGVudDowLjc1cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNlbGVjdG9yLWljb24tc2l6ZToxcmVtfS5zY2FsZS0tbHtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbDoxcmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zOjAuNjI1cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctaW5kZW50OjFyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc2VsZWN0b3ItaWNvbi1zaXplOjEuNXJlbX0uY29udGFpbmVyey0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLWluZGVudC12YWx1ZTpjYWxjKFxcbiAgICB2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQpICogdmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctaW5kZW50LW11bHRpcGxpZXIpXFxuICApfTpob3N0KDpmb2N1cyl7LS10dy1zaGFkb3c6MCAwICMwMDAwOy0tdHctc2hhZG93LWNvbG9yZWQ6MCAwICMwMDAwO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QsdWx7bWFyZ2luOjBweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6MHB4fTpob3N0KDpmb2N1cyksdWw6Zm9jdXN7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4fS5sYWJlbHtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7bWluLWlubGluZS1zaXplOjEwMCU7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O3dvcmQtd3JhcDpicmVhay13b3JkO3dvcmQtYnJlYWs6YnJlYWstd29yZDtwYWRkaW5nLWJsb2NrOnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtcyk7cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1sKX06aG9zdChbZGlzYWJsZWRdKSAubGFiZWx7Y3Vyc29yOmRlZmF1bHR9LmxhYmVsLS1zZWxlY3RlZHtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5sYWJlbC0tYWN0aXZle291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0ubGFiZWw6aG92ZXIsLmxhYmVsOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfS50aXRsZXtwYWRkaW5nLWJsb2NrOjA7cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1sKX0uaWNvbntkaXNwbGF5OmlubGluZS1mbGV4O29wYWNpdHk6MDt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSl9Lmljb24tLWluZGVudHtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0taW5kZW50LXZhbHVlKX0uaWNvbi0tY3VzdG9te21hcmdpbi1ibG9jay1zdGFydDotMXB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfS5pY29uLS1hY3RpdmV7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5pY29uLS1kb3R7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7bWluLWlubGluZS1zaXplOnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zZWxlY3Rvci1pY29uLXNpemUpfS5pY29uLS1kb3Q6YmVmb3Jle3RleHQtYWxpZ246c3RhcnQ7Y29udGVudDpcXFwi4oCiXFxcIn0ubGFiZWwtLWFjdGl2ZSAuaWNvbntvcGFjaXR5OjF9LmxhYmVsLS1zZWxlY3RlZCAuaWNvbntvcGFjaXR5OjE7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoOmhvdmVyW2Rpc2FibGVkXSkgLmljb257b3BhY2l0eToxfVwiO1xuXG5jb25zdCBDb21ib2JveEl0ZW0gPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUNvbWJvYm94SXRlbUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUNvbWJvYm94SXRlbUNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLml0ZW1DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdGVkKCk7XG4gICAgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5hbmNlc3RvcnMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ndWlkID0gZ3VpZCgpO1xuICAgIHRoaXMuaWNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy50ZXh0TGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbHRlckRpc2FibGVkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9IFwibXVsdGlwbGVcIjtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gIH1cbiAgc2VsZWN0ZWRXYXRjaEhhbmRsZXIoKSB7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hJdGVtQ2hhbmdlLmVtaXQoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuYW5jZXN0b3JzID0gZ2V0QW5jZXN0b3JzKHRoaXMuZWwpO1xuICAgIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0b2dnbGVTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBpc1NpbmdsZVBlcnNpc3RTZWxlY3QgPSB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwic2luZ2xlLXBlcnNpc3RcIjtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAoaXNTaW5nbGVQZXJzaXN0U2VsZWN0ICYmIHRoaXMuc2VsZWN0ZWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVySWNvbihpY29uUGF0aCkge1xuICAgIHJldHVybiB0aGlzLmljb24gPyAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY3VzdG9tXTogISF0aGlzLmljb24sXG4gICAgICAgIFtDU1MuaWNvbkFjdGl2ZV06IHRoaXMuaWNvbiAmJiB0aGlzLnNlbGVjdGVkLFxuICAgICAgICBbQ1NTLmljb25JbmRlbnRdOiB0cnVlLFxuICAgICAgfSwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCwgaWNvbjogdGhpcy5pY29uIHx8IGljb25QYXRoLCBrZXk6IFwiaWNvblwiLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyU2VsZWN0SW5kaWNhdG9yKHNob3dEb3QsIGljb25QYXRoKSB7XG4gICAgcmV0dXJuIHNob3dEb3QgPyAoaChcInNwYW5cIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmljb25dOiB0cnVlLFxuICAgICAgICBbQ1NTLmRvdF06IHRydWUsXG4gICAgICAgIFtDU1MuaWNvbkluZGVudF06IHRydWUsXG4gICAgICB9IH0pKSA6IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5pY29uXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5pY29uQWN0aXZlXTogdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgW0NTUy5pY29uSW5kZW50XTogdHJ1ZSxcbiAgICAgIH0sIGZsaXBSdGw6IHRoaXMuaWNvbkZsaXBSdGwsIGljb246IGljb25QYXRoLCBrZXk6IFwiaW5kaWNhdG9yXCIsIHNjYWxlOiBnZXRJY29uU2NhbGUodGhpcy5zY2FsZSkgfSkpO1xuICB9XG4gIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIGlmIChnZXRTbG90dGVkKHRoaXMuZWwpKSB7XG4gICAgICByZXR1cm4gKGgoXCJ1bFwiLCB7IGtleTogXCJkZWZhdWx0LXNsb3QtY29udGFpbmVyXCIgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlzU2luZ2xlU2VsZWN0ID0gaXNTaW5nbGVMaWtlKHRoaXMuc2VsZWN0aW9uTW9kZSk7XG4gICAgY29uc3Qgc2hvd0RvdCA9IGlzU2luZ2xlU2VsZWN0ICYmICF0aGlzLmRpc2FibGVkO1xuICAgIGNvbnN0IGRlZmF1bHRJY29uID0gaXNTaW5nbGVTZWxlY3QgPyBcImRvdFwiIDogXCJjaGVja1wiO1xuICAgIGNvbnN0IGljb25QYXRoID0gdGhpcy5kaXNhYmxlZCA/IFwiXCIgOiBkZWZhdWx0SWNvbjtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgW0NTUy5sYWJlbF06IHRydWUsXG4gICAgICBbQ1NTLnNlbGVjdGVkXTogdGhpcy5zZWxlY3RlZCxcbiAgICAgIFtDU1MuYWN0aXZlXTogdGhpcy5hY3RpdmUsXG4gICAgICBbQ1NTLnNpbmdsZV06IGlzU2luZ2xlU2VsZWN0LFxuICAgIH07XG4gICAgY29uc3QgZGVwdGggPSBnZXREZXB0aCh0aGlzLmVsKTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogYGNvbnRhaW5lciBzY2FsZS0tJHt0aGlzLnNjYWxlfWAsIHN0eWxlOiB7IFwiLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQtbXVsdGlwbGllclwiOiBgJHtkZXB0aH1gIH0gfSwgaChcImxpXCIsIHsgY2xhc3M6IGNsYXNzZXMsIGlkOiB0aGlzLmd1aWQsIG9uQ2xpY2s6IHRoaXMuaXRlbUNsaWNrSGFuZGxlciB9LCB0aGlzLnJlbmRlclNlbGVjdEluZGljYXRvcihzaG93RG90LCBpY29uUGF0aCksIHRoaXMucmVuZGVySWNvbihpY29uUGF0aCksIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwidGl0bGVcIiB9LCB0aGlzLnRleHRMYWJlbCkpLCB0aGlzLnJlbmRlckNoaWxkcmVuKCkpKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwic2VsZWN0ZWRcIjogW1wic2VsZWN0ZWRXYXRjaEhhbmRsZXJcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gY29tYm9ib3hJdGVtQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWNvbWJvYm94LWl0ZW1cIiwge1xuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJzZWxlY3RlZFwiOiBbMTU0MF0sXG4gICAgXCJhY3RpdmVcIjogWzUxNl0sXG4gICAgXCJhbmNlc3RvcnNcIjogWzEwNDBdLFxuICAgIFwiZ3VpZFwiOiBbNTEzXSxcbiAgICBcImljb25cIjogWzUxM10sXG4gICAgXCJpY29uRmxpcFJ0bFwiOiBbNTE2LCBcImljb24tZmxpcC1ydGxcIl0sXG4gICAgXCJ0ZXh0TGFiZWxcIjogWzUxMywgXCJ0ZXh0LWxhYmVsXCJdLFxuICAgIFwidmFsdWVcIjogWzhdLFxuICAgIFwiZmlsdGVyRGlzYWJsZWRcIjogWzUxNiwgXCJmaWx0ZXItZGlzYWJsZWRcIl0sXG4gICAgXCJzZWxlY3Rpb25Nb2RlXCI6IFs1MTMsIFwic2VsZWN0aW9uLW1vZGVcIl0sXG4gICAgXCJzY2FsZVwiOiBbMV1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1jb21ib2JveC1pdGVtXCIsIFwiY2FsY2l0ZS1pY29uXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWNvbWJvYm94LWl0ZW1cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBDb21ib2JveEl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgQ29tYm9ib3hJdGVtIGFzIEMsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuZnVuY3Rpb24gZ2V0SWNvblNjYWxlKGNvbXBvbmVudFNjYWxlKSB7XG4gIHJldHVybiBjb21wb25lbnRTY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiO1xufVxuXG5leHBvcnQgeyBnZXRJY29uU2NhbGUgYXMgZyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZm9yY2VVcGRhdGUgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuXG5jb25zdCBvYnNlcnZlZCA9IG5ldyBTZXQoKTtcbmxldCBtdXRhdGlvbk9ic2VydmVyO1xuY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0geyBjaGlsZExpc3Q6IHRydWUgfTtcbi8qKlxuICogSGVscGVyIHRvIHNldCB1cCBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGNvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBpZiAoIW11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCBwcm9jZXNzTXV0YXRpb25zKTtcbiAgfVxuICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoY29tcG9uZW50LmVsLCBvYnNlcnZlck9wdGlvbnMpO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gdGVhciBkb3duIGEgY29uZGl0aW9uYWwgc2xvdCBjb21wb25lbnQgb24gZGlzY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQGRlcHJlY2F0ZWQgVXNlIGBvblNsb3RjaGFuZ2VgIGV2ZW50IHdpdGggYHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnRgIERPTSB1dGlsaXR5IGluc3RlYWQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNFbGVtZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCl9IC8+fVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIG9ic2VydmVkLmRlbGV0ZShjb21wb25lbnQuZWwpO1xuICAvLyB3ZSBleHBsaWNpdGx5IHByb2Nlc3MgcXVldWVkIG11dGF0aW9ucyBhbmQgZGlzY29ubmVjdCBhbmQgcmVjb25uZWN0XG4gIC8vIHRoZSBvYnNlcnZlciB1bnRpbCBNdXRhdGlvbk9ic2VydmVyIGdldHMgYW4gYHVub2JzZXJ2ZWAgbWV0aG9kXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMTI2XG4gIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25PYnNlcnZlci50YWtlUmVjb3JkcygpKTtcbiAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIGZvciAoY29uc3QgW2VsZW1lbnRdIG9mIG9ic2VydmVkLmVudHJpZXMoKSkge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCBvYnNlcnZlck9wdGlvbnMpO1xuICB9XG59XG5mdW5jdGlvbiBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9ucykge1xuICBtdXRhdGlvbnMuZm9yRWFjaCgoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGZvcmNlVXBkYXRlKHRhcmdldCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGMsIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZ2V0QXNzZXRQYXRoLCBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBoLCBIb3N0LCBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0RWxlbWVudERpciwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBpY29uOiBcImljb25cIixcbiAgZmxpcFJ0bDogXCJmbGlwLXJ0bFwiLFxufTtcblxuLyoqXG4gKiBJY29uIGRhdGEgY2FjaGUuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBpY29uQ2FjaGUgPSB7fTtcbi8qKlxuICogSWNvbiByZXF1ZXN0IGNhY2hlLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgcmVxdWVzdENhY2hlID0ge307XG5jb25zdCBzY2FsZVRvUHggPSB7XG4gIHM6IDE2LFxuICBtOiAyNCxcbiAgbDogMzIsXG59O1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hJY29uKHsgaWNvbiwgc2NhbGUgfSkge1xuICBjb25zdCBzaXplID0gc2NhbGVUb1B4W3NjYWxlXTtcbiAgY29uc3QgbmFtZSA9IG5vcm1hbGl6ZUljb25OYW1lKGljb24pO1xuICBjb25zdCBmaWxsZWQgPSBuYW1lLmNoYXJBdChuYW1lLmxlbmd0aCAtIDEpID09PSBcIkZcIjtcbiAgY29uc3QgaWNvbk5hbWUgPSBmaWxsZWQgPyBuYW1lLnN1YnN0cmluZygwLCBuYW1lLmxlbmd0aCAtIDEpIDogbmFtZTtcbiAgY29uc3QgaWQgPSBgJHtpY29uTmFtZX0ke3NpemV9JHtmaWxsZWQgPyBcIkZcIiA6IFwiXCJ9YDtcbiAgaWYgKGljb25DYWNoZVtpZF0pIHtcbiAgICByZXR1cm4gaWNvbkNhY2hlW2lkXTtcbiAgfVxuICBpZiAoIXJlcXVlc3RDYWNoZVtpZF0pIHtcbiAgICByZXF1ZXN0Q2FjaGVbaWRdID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy9pY29uLyR7aWR9Lmpzb25gKSlcbiAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGBcIiR7aWR9XCIgaXMgbm90IGEgdmFsaWQgY2FsY2l0ZS11aS1pY29uIG5hbWVgKTtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHBhdGggPSBhd2FpdCByZXF1ZXN0Q2FjaGVbaWRdO1xuICBpY29uQ2FjaGVbaWRdID0gcGF0aDtcbiAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgaWNvbiBuYW1lIHRvIG1hdGNoIHRoZSBwYXRoIGRhdGEgbW9kdWxlIGV4cG9ydHMuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcGFyYW0gbmFtZSDigJMgYW4gaWNvbiBuYW1lIHRoYXQgY2FuIGJlIGVpdGhlciBrZWJhYiBvciBjYW1lbC1jYXNlZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplSWNvbk5hbWUobmFtZSkge1xuICBjb25zdCBudW1iZXJMZWFkaW5nTmFtZSA9ICFpc05hTihOdW1iZXIobmFtZS5jaGFyQXQoMCkpKTtcbiAgY29uc3QgcGFydHMgPSBuYW1lLnNwbGl0KFwiLVwiKTtcbiAgY29uc3Qga2ViYWJDYXNlZCA9IHBhcnRzLmxlbmd0aCA+IDA7XG4gIGlmIChrZWJhYkNhc2VkKSB7XG4gICAgY29uc3QgZmlyc3ROb25EaWdpdEluUGFydFBhdHRlcm4gPSAvW2Etel0vaTtcbiAgICBuYW1lID0gcGFydHNcbiAgICAgIC5tYXAoKHBhcnQsIHBhcnRJbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHBhcnQucmVwbGFjZShmaXJzdE5vbkRpZ2l0SW5QYXJ0UGF0dGVybiwgZnVuY3Rpb24gcmVwbGFjZXIobWF0Y2gsIG9mZnNldCkge1xuICAgICAgICBjb25zdCBpc0ZpcnN0Q2hhckluTmFtZSA9IHBhcnRJbmRleCA9PT0gMCAmJiBvZmZzZXQgPT09IDA7XG4gICAgICAgIGlmIChpc0ZpcnN0Q2hhckluTmFtZSkge1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2gudG9VcHBlckNhc2UoKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgICAuam9pbihcIlwiKTtcbiAgfVxuICByZXR1cm4gbnVtYmVyTGVhZGluZ05hbWUgPyBgaSR7bmFtZX1gIDogbmFtZTtcbn1cblxuY29uc3QgaWNvbkNzcyA9IFwiOmhvc3R7ZGlzcGxheTppbmxpbmUtZmxleDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWljb24tY29sb3IpfTpob3N0KFtzY2FsZT1zXSl7aW5saW5lLXNpemU6MTZweDtibG9jay1zaXplOjE2cHg7bWluLWlubGluZS1zaXplOjE2cHg7bWluLWJsb2NrLXNpemU6MTZweH06aG9zdChbc2NhbGU9bV0pe2lubGluZS1zaXplOjI0cHg7YmxvY2stc2l6ZToyNHB4O21pbi1pbmxpbmUtc2l6ZToyNHB4O21pbi1ibG9jay1zaXplOjI0cHh9Omhvc3QoW3NjYWxlPWxdKXtpbmxpbmUtc2l6ZTozMnB4O2Jsb2NrLXNpemU6MzJweDttaW4taW5saW5lLXNpemU6MzJweDttaW4tYmxvY2stc2l6ZTozMnB4fS5mbGlwLXJ0bHt0cmFuc2Zvcm06c2NhbGVYKC0xKX0uc3Zne2Rpc3BsYXk6YmxvY2t9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IEljb24gPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuaWNvbiA9IG51bGw7XG4gICAgdGhpcy5mbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudGV4dExhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGF0aERhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy53YWl0VW50aWxWaXNpYmxlKCgpID0+IHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmxvYWRJY29uUGF0aERhdGEoKTtcbiAgICB9KTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5sb2FkSWNvblBhdGhEYXRhKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWwsIGZsaXBSdGwsIHBhdGhEYXRhLCBzY2FsZSwgdGV4dExhYmVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIoZWwpO1xuICAgIGNvbnN0IHNpemUgPSBzY2FsZVRvUHhbc2NhbGVdO1xuICAgIGNvbnN0IHNlbWFudGljID0gISF0ZXh0TGFiZWw7XG4gICAgY29uc3QgcGF0aHMgPSBbXS5jb25jYXQocGF0aERhdGEgfHwgXCJcIik7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWhpZGRlblwiOiB0b0FyaWFCb29sZWFuKCFzZW1hbnRpYyksIFwiYXJpYS1sYWJlbFwiOiBzZW1hbnRpYyA/IHRleHRMYWJlbCA6IG51bGwsIHJvbGU6IHNlbWFudGljID8gXCJpbWdcIiA6IG51bGwgfSwgaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuZmxpcFJ0bF06IGRpciA9PT0gXCJydGxcIiAmJiBmbGlwUnRsLFxuICAgICAgICBzdmc6IHRydWUsXG4gICAgICB9LCBmaWxsOiBcImN1cnJlbnRDb2xvclwiLCBoZWlnaHQ6IFwiMTAwJVwiLCB2aWV3Qm94OiBgMCAwICR7c2l6ZX0gJHtzaXplfWAsIHdpZHRoOiBcIjEwMCVcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LCBwYXRocy5tYXAoKHBhdGgpID0+IHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiID8gKGgoXCJwYXRoXCIsIHsgZDogcGF0aCB9KSkgOiAoaChcInBhdGhcIiwgeyBkOiBwYXRoLmQsIG9wYWNpdHk6IFwib3BhY2l0eVwiIGluIHBhdGggPyBwYXRoLm9wYWNpdHkgOiAxIH0pKSkpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmMgbG9hZEljb25QYXRoRGF0YSgpIHtcbiAgICBjb25zdCB7IGljb24sIHNjYWxlLCB2aXNpYmxlIH0gPSB0aGlzO1xuICAgIGlmICghQnVpbGQuaXNCcm93c2VyIHx8ICFpY29uIHx8ICF2aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhdGhEYXRhID0gYXdhaXQgZmV0Y2hJY29uKHsgaWNvbiwgc2NhbGUgfSk7XG4gICAgLy8gV2hpbGUgdGhlIGZldGNoSWNvbiBtZXRob2QgaXMgYXdhaXRpbmcgcmVzcG9uc2UsIHRoZSBpY29uIHJlcXVlc3RlZCBjYW4gY2hhbmdlLiBUaGlzIGNoZWNrIGlzIHRvIHZlcmlmeSB0aGUgcmVzcG9uc2UgcmVjZWl2ZWQgYmVsb25ncyB0byB0aGUgY3VycmVudCBpY29uLlxuICAgIGlmIChpY29uICE9PSB0aGlzLmljb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wYXRoRGF0YSA9IHBhdGhEYXRhO1xuICB9XG4gIHdhaXRVbnRpbFZpc2libGUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJpbnRlcnNlY3Rpb25cIiwgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgeyByb290TWFyZ2luOiBcIjUwcHhcIiB9KTtcbiAgICBpZiAoIXRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiaWNvblwiOiBbXCJsb2FkSWNvblBhdGhEYXRhXCJdLFxuICAgIFwic2NhbGVcIjogW1wibG9hZEljb25QYXRoRGF0YVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBpY29uQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWljb25cIiwge1xuICAgIFwiaWNvblwiOiBbNTEzXSxcbiAgICBcImZsaXBSdGxcIjogWzUxNiwgXCJmbGlwLXJ0bFwiXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwidGV4dExhYmVsXCI6IFsxLCBcInRleHQtbGFiZWxcIl0sXG4gICAgXCJwYXRoRGF0YVwiOiBbMzJdLFxuICAgIFwidmlzaWJsZVwiOiBbMzJdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtaWNvblwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgSWNvbik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgSWNvbiBhcyBJLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5mdW5jdGlvbiBnZXRVc2VyQWdlbnREYXRhKCkge1xuICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7XG59XG5mdW5jdGlvbiBnZXRVc2VyQWdlbnRTdHJpbmcoKSB7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgY29uc3QgdWFEYXRhID0gZ2V0VXNlckFnZW50RGF0YSgpO1xuICByZXR1cm4gdWFEYXRhPy5icmFuZHNcbiAgICA/IHVhRGF0YS5icmFuZHMubWFwKCh7IGJyYW5kLCB2ZXJzaW9uIH0pID0+IGAke2JyYW5kfS8ke3ZlcnNpb259YCkuam9pbihcIiBcIilcbiAgICA6IG5hdmlnYXRvci51c2VyQWdlbnQ7XG59XG5cbi8vIOKaoO+4jyBicm93c2VyLXNuaWZmaW5nIGlzIG5vdCBhIGJlc3QgcHJhY3RpY2UgYW5kIHNob3VsZCBiZSBhdm9pZGVkIOKaoO+4j1xuY29uc3QgaXNGaXJlZm94ID0gL2ZpcmVmb3gvaS50ZXN0KGdldFVzZXJBZ2VudFN0cmluZygpKTtcbmNvbnN0IGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50ID0gaXNGaXJlZm94XG4gID8gbmV3IFdlYWtNYXAoKVxuICA6IG51bGw7XG5mdW5jdGlvbiBpbnRlcmNlcHRlZENsaWNrKCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzO1xuICBpZiAoIWRpc2FibGVkKSB7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrLmNhbGwodGhpcyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZXZlbnQpIHtcbiAgY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoaW50ZXJhY3RpdmVFbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBpbnRlcmFjdGl2ZUVsZW1lbnQ7XG4gIGlmIChkaXNhYmxlZCkge1xuICAgIC8vIHByZXZlbnQgY2xpY2sgZnJvbSBtb3ZpbmcgZm9jdXMgb24gaG9zdFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl07XG5mdW5jdGlvbiBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudChldmVudCkge1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoZXZlbnQudGFyZ2V0KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBldmVudC50YXJnZXQ7XG4gIC8vIHByZXZlbnQgZGlzYWxsb3dlZCBtb3VzZSBldmVudHMgZnJvbSBiZWluZyBlbWl0dGVkIG9uIHRoZSBkaXNhYmxlZCBob3N0IChwZXIgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy81ODg2KVxuICAvL+KaoCB3ZSBnZW5lcmFsbHkgYXZvaWQgc3RvcHBpbmcgcHJvcGFnYXRpb24gb2YgZXZlbnRzLCBidXQgdGhpcyBpcyBuZWVkZWQgdG8gYWRoZXJlIHRvIHRoZSBpbnRlbmRlZCBzcGVjIGNoYW5nZXMgYWJvdmUg4pqgXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IGNhcHR1cmVPbmx5T3B0aW9ucyA9IHsgY2FwdHVyZTogdHJ1ZSB9O1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1cGRhdGVzIHRoZSBob3N0IGVsZW1lbnQgdG8gcHJldmVudCBrZXlib2FyZCBpbnRlcmFjdGlvbiBvbiBpdHMgc3VidHJlZSBhbmQgc2V0cyB0aGUgYXBwcm9wcmlhdGUgYXJpYSBhdHRyaWJ1dGUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZFJlbmRlcmAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogKipOb3RlcyoqXG4gKlxuICogdGhpcyB1dGlsIGlzIG5vdCBuZWVkZWQgZm9yIHNpbXBsZSBjb21wb25lbnRzIHdob3NlIHJvb3QgZWxlbWVudCBvciBlbGVtZW50cyBhcmUgYW4gaW50ZXJhY3RpdmUgY29tcG9uZW50IChjdXN0b20gZWxlbWVudCBvciBuYXRpdmUgY29udHJvbCkuIEZvciB0aG9zZSBjYXNlcywgc2V0IHRoZSBgZGlzYWJsZWRgIHByb3BzIG9uIHRoZSByb290IGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIHRlY2huaWNhbGx5LCB1c2VycyBjYW4gb3ZlcnJpZGUgYHRhYmluZGV4YCBhbmQgcmVzdG9yZSBrZXlib2FyZCBuYXZpZ2F0aW9uLCBidXQgdGhpcyB3aWxsIGJlIGNvbnNpZGVyZWQgdXNlciBlcnJvclxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBob3N0SXNUYWJiYWJsZSDigJMgd2hlbiBzZXQgdG8gdHJ1ZSBvciBpdHMgcHJlZGljYXRlIHJldHVybnMgdHJ1ZSwgdGhlIGhvc3QgaXMgdGFiYmFibGUgYW5kIHdpbGwgYmUgbWFuYWdlZCBieSB0aGUgaGVscGVyLiBTZXQgdG8gXCJtYW5hZ2VkXCIgZm9yIGNhc2VzIHdoZXJlIGEgY29tcG9uZW50J3MgcGFyZW50IGRldGVybWluZXMgd2hpY2ggaXRlbSBpcyB0YWJiYWJsZSAoaS5lLiwgc2V0cyBgdGFiaW5kZXhgIHRvIGFsbG93IHRhYmJpbmcpLlxuICovXG5mdW5jdGlvbiB1cGRhdGVIb3N0SW50ZXJhY3Rpb24oY29tcG9uZW50LCBob3N0SXNUYWJiYWJsZSA9IGZhbHNlKSB7XG4gIGlmIChjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgaWYgKGNvbXBvbmVudC5lbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gIGlmICh0eXBlb2YgaG9zdElzVGFiYmFibGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBob3N0SXNUYWJiYWJsZS5jYWxsKGNvbXBvbmVudCkgPyBcIjBcIiA6IFwiLTFcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IHRydWUpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSBmYWxzZSkge1xuICAgIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgfVxuICBlbHNlIDtcbiAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIik7XG59XG5mdW5jdGlvbiBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZWwuY2xpY2sgPSBpbnRlcmNlcHRlZENsaWNrO1xuICBhZGRJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkge1xuICByZXR1cm4gaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KSB7XG4gIGRlbGV0ZSBjb21wb25lbnQuZWwuY2xpY2s7IC8vIGZhbGxiYWNrIG9uIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGlja1xuICByZW1vdmVJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBoZWxwcyBkaXNhYmxlIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFjb21wb25lbnQuZGlzYWJsZWQgfHwgIWlzRmlyZWZveCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwYXJlbnQgPSBjb21wb25lbnQuZWwucGFyZW50RWxlbWVudCB8fCBjb21wb25lbnQuZWw7IC8qIGFzc3VtZSBlbGVtZW50IGlzIGhvc3QgaWYgaXQgaGFzIG5vIHBhcmVudCB3aGVuIGNvbm5lY3RlZCAqL1xuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5zZXQoY29tcG9uZW50LmVsLCBwYXJlbnQpO1xuICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSByZXN0b3JlcyBpbnRlcmFjdGl2aXR5IHRvIGRpc2FibGVkIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWx3YXlzIHJlbW92ZSBvbiBkaXNjb25uZWN0IGFzIHJlbmRlciBvciBjb25uZWN0IHdpbGwgcmVzdG9yZSBpdFxuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RJbnRlcmFjdGl2ZSBhcyBjLCBkaXNjb25uZWN0SW50ZXJhY3RpdmUgYXMgZCwgZ2V0VXNlckFnZW50U3RyaW5nIGFzIGcsIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiBhcyB1IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgZW5zdXJlcyBvYnNlcnZlcnMgYXJlIGNyZWF0ZWQgb25seSBmb3IgYnJvd3NlciBjb250ZXh0cy5cbiAqXG4gKiBAcGFyYW0gdHlwZSAtIHRoZSB0eXBlIG9mIG9ic2VydmVyIHRvIGNyZWF0ZVxuICogQHBhcmFtIGNhbGxiYWNrIC0gdGhlIG9ic2VydmVyIGNhbGxiYWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIHRoZSBvYnNlcnZlciBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCBPYnNlcnZlciA9IGdldE9ic2VydmVyKHR5cGUpO1xuICByZXR1cm4gbmV3IE9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGdldE9ic2VydmVyKHR5cGUpIHtcbiAgLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNiNpc3N1ZWNvbW1lbnQtMTA0OTgxNDk0OFxuICBjbGFzcyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXIgZXh0ZW5kcyB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcbiAgICAgIHN1cGVyKGNhbGxiYWNrKTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICBvYnNlcnZlKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5LnB1c2goeyB0YXJnZXQsIG9wdGlvbnMgfSk7XG4gICAgICByZXR1cm4gc3VwZXIub2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICB1bm9ic2VydmUodGFyZ2V0KSB7XG4gICAgICBjb25zdCBuZXdPYnNlcnZlZEVudHJpZXMgPSB0aGlzLm9ic2VydmVkRW50cnkuZmlsdGVyKChvYnNlcnZlZCkgPT4gb2JzZXJ2ZWQudGFyZ2V0ICE9PSB0YXJnZXQpO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrKHN1cGVyLnRha2VSZWNvcmRzKCksIHRoaXMpO1xuICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICBuZXdPYnNlcnZlZEVudHJpZXMuZm9yRWFjaCgob2JzZXJ2ZWQpID0+IHRoaXMub2JzZXJ2ZShvYnNlcnZlZC50YXJnZXQsIG9ic2VydmVkLm9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0eXBlID09PSBcImludGVyc2VjdGlvblwiXG4gICAgICA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlclxuICAgICAgOiB0eXBlID09PSBcIm11dGF0aW9uXCJcbiAgICAgICAgPyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXJcbiAgICAgICAgOiB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIpO1xuICB9KSgpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVPYnNlcnZlciBhcyBjIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBvIGFzIG5vZGVMaXN0VG9BcnJheSB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5jb25zdCBDb21ib2JveEl0ZW0gPSBcIkNBTENJVEUtQ09NQk9CT1gtSVRFTVwiO1xuY29uc3QgQ29tYm9ib3hJdGVtR3JvdXAgPSBcIkNBTENJVEUtQ09NQk9CT1gtSVRFTS1HUk9VUFwiO1xuY29uc3QgQ29tYm9ib3hDaGlsZFNlbGVjdG9yID0gYCR7Q29tYm9ib3hJdGVtfSwgJHtDb21ib2JveEl0ZW1Hcm91cH1gO1xuY29uc3QgQ1NTID0ge1xuICBjaGlwSW52aXNpYmxlOiBcImNoaXAtLWludmlzaWJsZVwiLFxuICBzZWxlY3Rpb25EaXNwbGF5Rml0OiBcInNlbGVjdGlvbi1kaXNwbGF5LWZpdFwiLFxuICBzZWxlY3Rpb25EaXNwbGF5U2luZ2xlOiBcInNlbGVjdGlvbi1kaXNwbGF5LXNpbmdsZVwiLFxuICBsaXN0Q29udGFpbmVyOiBcImxpc3QtY29udGFpbmVyXCIsXG59O1xuXG5mdW5jdGlvbiBnZXRBbmNlc3RvcnMoZWxlbWVudCkge1xuICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoQ29tYm9ib3hDaGlsZFNlbGVjdG9yKTtcbiAgY29uc3QgZ3JhbmRwYXJlbnQgPSBwYXJlbnQ/LnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoQ29tYm9ib3hDaGlsZFNlbGVjdG9yKTtcbiAgcmV0dXJuIFtwYXJlbnQsIGdyYW5kcGFyZW50XS5maWx0ZXIoKGVsKSA9PiBlbCk7XG59XG5mdW5jdGlvbiBnZXRJdGVtQW5jZXN0b3JzKGl0ZW0pIHtcbiAgcmV0dXJuIChpdGVtLmFuY2VzdG9ycz8uZmlsdGVyKChlbCkgPT4gZWwubm9kZU5hbWUgPT09IFwiQ0FMQ0lURS1DT01CT0JPWC1JVEVNXCIpIHx8IFtdKTtcbn1cbmZ1bmN0aW9uIGdldEl0ZW1DaGlsZHJlbihpdGVtKSB7XG4gIHJldHVybiBub2RlTGlzdFRvQXJyYXkoaXRlbS5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1jb21ib2JveC1pdGVtXCIpKTtcbn1cbmZ1bmN0aW9uIGhhc0FjdGl2ZUNoaWxkcmVuKG5vZGUpIHtcbiAgY29uc3QgaXRlbXMgPSBub2RlTGlzdFRvQXJyYXkobm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1jb21ib2JveC1pdGVtXCIpKTtcbiAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zZWxlY3RlZCkubGVuZ3RoID4gMDtcbn1cbmZ1bmN0aW9uIGdldERlcHRoKGVsZW1lbnQpIHtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5ldmFsdWF0ZShcImFuY2VzdG9yOjpjYWxjaXRlLWNvbWJvYm94LWl0ZW0gfCBhbmNlc3Rvcjo6Y2FsY2l0ZS1jb21ib2JveC1pdGVtLWdyb3VwXCIsIGVsZW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0LlVOT1JERVJFRF9OT0RFX1NOQVBTSE9UX1RZUEUsIG51bGwpO1xuICByZXR1cm4gcmVzdWx0LnNuYXBzaG90TGVuZ3RoO1xufVxuZnVuY3Rpb24gaXNTaW5nbGVMaWtlKHNlbGVjdGlvbk1vZGUpIHtcbiAgcmV0dXJuIHNlbGVjdGlvbk1vZGUuaW5jbHVkZXMoXCJzaW5nbGVcIik7XG59XG5cbmV4cG9ydCB7IENTUyBhcyBDLCBnZXREZXB0aCBhcyBhLCBDb21ib2JveENoaWxkU2VsZWN0b3IgYXMgYiwgZ2V0SXRlbUFuY2VzdG9ycyBhcyBjLCBnZXRJdGVtQ2hpbGRyZW4gYXMgZCwgQ29tYm9ib3hJdGVtIGFzIGUsIENvbWJvYm94SXRlbUdyb3VwIGFzIGYsIGdldEFuY2VzdG9ycyBhcyBnLCBoYXNBY3RpdmVDaGlsZHJlbiBhcyBoLCBpc1NpbmdsZUxpa2UgYXMgaSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9