"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-select_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-select.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-select.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteSelect: () => (/* binding */ CalciteSelect),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./node_modules/@esri/calcite-components/dist/components/form.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */










const CSS = {
  icon: "icon",
  iconContainer: "icon-container",
  select: "select",
};

const selectCss = ":host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;align-items:stretch;inline-size:var(--select-width)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){block-size:1.5rem;--calcite-select-font-size:var(--calcite-font-size--2);--calcite-select-spacing-inline:0.5rem 2rem}:host([scale=s]) .icon-container{padding-inline:0.5rem}:host([scale=m]){block-size:2rem;--calcite-select-font-size:var(--calcite-font-size--1);--calcite-select-spacing-inline:0.75rem 2.5rem}:host([scale=m]) .icon-container{padding-inline:0.75rem}:host([scale=l]){block-size:44px;--calcite-select-font-size:var(--calcite-font-size-0);--calcite-select-spacing-inline:1rem 3rem}:host([scale=l]) .icon-container{padding-inline:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}.select{margin:0px;box-sizing:border-box;inline-size:100%;cursor:pointer;appearance:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);font-family:inherit;color:var(--calcite-ui-text-2);outline-color:transparent;font-size:var(--calcite-select-font-size);padding-inline:var(--calcite-select-spacing-inline);border-inline-end-width:0px}.select:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.select:hover{background-color:var(--calcite-ui-foreground-2)}select:disabled{border-color:var(--calcite-ui-border-input);--tw-bg-opacity:1}.icon-container{pointer-events:none;position:absolute;inset-block:0px;display:flex;align-items:center;border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:transparent;color:var(--calcite-ui-text-2);inset-inline-end:0px;border-inline-width:0px 1px}.select:focus~.icon-container{border-color:transparent}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";

function isOption(optionOrGroup) {
  return optionOrGroup.tagName === "CALCITE-OPTION";
}
function isOptionGroup(optionOrGroup) {
  return optionOrGroup.tagName === "CALCITE-OPTION-GROUP";
}
const Select = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteSelectChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteSelectChange", 6);
    this.componentToNativeEl = new Map();
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_5__.c)("mutation", () => this.populateInternalSelect());
    this.handleInternalSelectChange = () => {
      const selected = this.selectEl.selectedOptions[0];
      this.selectFromNativeOption(selected);
      requestAnimationFrame(() => this.emitChangeEvent());
    };
    this.populateInternalSelect = () => {
      const optionsAndGroups = Array.from(this.el.children).filter((child) => child.tagName === "CALCITE-OPTION" || child.tagName === "CALCITE-OPTION-GROUP");
      this.clearInternalSelect();
      optionsAndGroups.forEach((optionOrGroup) => this.selectEl?.append(this.toNativeElement(optionOrGroup)));
    };
    this.storeSelectRef = (node) => {
      this.selectEl = node;
      this.populateInternalSelect();
      const selected = this.selectEl.selectedOptions[0];
      this.selectFromNativeOption(selected);
    };
    this.emitChangeEvent = () => {
      this.calciteSelectChange.emit();
    };
    this.disabled = false;
    this.form = undefined;
    this.label = undefined;
    this.name = undefined;
    this.required = false;
    this.scale = "m";
    this.value = null;
    this.selectedOption = undefined;
    this.width = "auto";
  }
  valueHandler(value) {
    const items = this.el.querySelectorAll("calcite-option");
    items.forEach((item) => (item.selected = item.value === value));
  }
  selectedOptionHandler(selectedOption) {
    this.value = selectedOption?.value;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    const { el } = this;
    this.mutationObserver?.observe(el, {
      subtree: true,
      childList: true,
    });
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.a)(this, this.selectedOption?.value ?? "");
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.k)(this.selectEl);
  }
  handleOptionOrGroupChange(event) {
    event.stopPropagation();
    const optionOrGroup = event.target;
    const nativeEl = this.componentToNativeEl.get(optionOrGroup);
    if (!nativeEl) {
      return;
    }
    this.updateNativeElement(optionOrGroup, nativeEl);
    if (isOption(optionOrGroup) && optionOrGroup.selected) {
      this.deselectAllExcept(optionOrGroup);
      this.selectedOption = optionOrGroup;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  updateNativeElement(optionOrGroup, nativeOptionOrGroup) {
    nativeOptionOrGroup.disabled = optionOrGroup.disabled;
    nativeOptionOrGroup.label = optionOrGroup.label;
    if (isOption(optionOrGroup)) {
      const option = nativeOptionOrGroup;
      option.selected = optionOrGroup.selected;
      option.value = optionOrGroup.value;
      // need to set innerText for mobile
      // see https://stackoverflow.com/questions/35021620/ios-safari-not-showing-all-options-for-select-menu/41749701
      option.innerText = optionOrGroup.label;
    }
  }
  clearInternalSelect() {
    this.componentToNativeEl.forEach((value) => value.remove());
    this.componentToNativeEl.clear();
  }
  selectFromNativeOption(nativeOption) {
    if (!nativeOption) {
      return;
    }
    let futureSelected;
    this.componentToNativeEl.forEach((nativeOptionOrGroup, optionOrGroup) => {
      if (isOption(optionOrGroup) && nativeOptionOrGroup === nativeOption) {
        optionOrGroup.selected = true;
        futureSelected = optionOrGroup;
        this.deselectAllExcept(optionOrGroup);
      }
    });
    if (futureSelected) {
      this.selectedOption = futureSelected;
    }
  }
  toNativeElement(optionOrGroup) {
    if (isOption(optionOrGroup)) {
      const option = document.createElement("option");
      this.updateNativeElement(optionOrGroup, option);
      this.componentToNativeEl.set(optionOrGroup, option);
      return option;
    }
    if (isOptionGroup(optionOrGroup)) {
      const group = document.createElement("optgroup");
      this.updateNativeElement(optionOrGroup, group);
      Array.from(optionOrGroup.children).forEach((option) => {
        const nativeOption = this.toNativeElement(option);
        group.append(nativeOption);
        this.componentToNativeEl.set(optionOrGroup, nativeOption);
      });
      this.componentToNativeEl.set(optionOrGroup, group);
      return group;
    }
    throw new Error("unsupported element child provided");
  }
  deselectAllExcept(except) {
    this.el.querySelectorAll("calcite-option").forEach((option) => {
      if (option === except) {
        return;
      }
      option.selected = false;
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderChevron() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { class: CSS.iconContainer }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-icon", { class: CSS.icon, icon: "chevron-down", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.scale) })));
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("select", { "aria-label": (0,_label2_js__WEBPACK_IMPORTED_MODULE_3__.g)(this), class: CSS.select, disabled: this.disabled, onChange: this.handleInternalSelectChange,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeSelectRef }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot", null)), this.renderChevron(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)(_form_js__WEBPACK_IMPORTED_MODULE_1__.H, { component: this })));
  }
  get el() { return this; }
  static get watchers() { return {
    "value": ["valueHandler"],
    "selectedOption": ["selectedOptionHandler"]
  }; }
  static get style() { return selectCss; }
}, [1, "calcite-select", {
    "disabled": [516],
    "form": [513],
    "label": [1],
    "name": [513],
    "required": [516],
    "scale": [513],
    "value": [1025],
    "selectedOption": [1040],
    "width": [513],
    "setFocus": [64]
  }, [[0, "calciteInternalOptionChange", "handleOptionOrGroupChange"], [0, "calciteInternalOptionGroupChange", "handleOptionOrGroupChange"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-select", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-select":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Select);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteSelect = Select;
const defineCustomElement = defineCustomElement$1;




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

/***/ "./node_modules/@esri/calcite-components/dist/components/label2.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/label2.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ labelDisconnectedEvent),
/* harmony export */   c: () => (/* binding */ connectLabel),
/* harmony export */   d: () => (/* binding */ disconnectLabel),
/* harmony export */   g: () => (/* binding */ getLabelText),
/* harmony export */   l: () => (/* binding */ labelConnectedEvent)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


/**
 * Exported for testing purposes only
 *
 * @internal
 */
const labelClickEvent = "calciteInternalLabelClick";
const labelConnectedEvent = "calciteInternalLabelConnected";
const labelDisconnectedEvent = "calciteInternalLabelDisconnected";
const labelTagName = "calcite-label";
const labelToLabelables = new WeakMap();
const onLabelClickMap = new WeakMap();
const onLabelConnectedMap = new WeakMap();
const onLabelDisconnectedMap = new WeakMap();
const unlabeledComponents = new WeakSet();
const findLabelForComponent = (componentEl) => {
  const { id } = componentEl;
  const forLabel = id && (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.q)(componentEl, { selector: `${labelTagName}[for="${id}"]` });
  if (forLabel) {
    return forLabel;
  }
  const parentLabel = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(componentEl, labelTagName);
  if (!parentLabel ||
    // labelable components within other custom elements are not considered labelable
    hasAncestorCustomElements(parentLabel, componentEl)) {
    return null;
  }
  return parentLabel;
};
function hasAncestorCustomElements(label, componentEl) {
  let traversedElements;
  const customElementAncestorCheckEventType = "custom-element-ancestor-check";
  const listener = (event) => {
    event.stopImmediatePropagation();
    const composedPath = event.composedPath();
    traversedElements = composedPath.slice(composedPath.indexOf(componentEl), composedPath.indexOf(label));
  };
  label.addEventListener(customElementAncestorCheckEventType, listener, { once: true });
  componentEl.dispatchEvent(new CustomEvent(customElementAncestorCheckEventType, { composed: true, bubbles: true }));
  label.removeEventListener(customElementAncestorCheckEventType, listener);
  const ancestorCustomElements = traversedElements
    .filter((el) => el !== componentEl && el !== label)
    .filter((el) => el.tagName?.includes("-"));
  return ancestorCustomElements.length > 0;
}
/**
 * Helper to set up label interactions on connectedCallback.
 *
 * @param component
 */
function connectLabel(component) {
  const labelEl = findLabelForComponent(component.el);
  if ((onLabelClickMap.has(labelEl) && labelEl === component.labelEl) ||
    (!labelEl && unlabeledComponents.has(component))) {
    return;
  }
  const boundOnLabelDisconnected = onLabelDisconnected.bind(component);
  if (labelEl) {
    component.labelEl = labelEl;
    const labelables = labelToLabelables.get(labelEl) || [];
    labelables.push(component);
    labelToLabelables.set(labelEl, labelables.sort(sortByDOMOrder));
    if (!onLabelClickMap.has(component.labelEl)) {
      onLabelClickMap.set(component.labelEl, onLabelClick);
      component.labelEl.addEventListener(labelClickEvent, onLabelClick);
    }
    unlabeledComponents.delete(component);
    document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
    onLabelDisconnectedMap.set(component, boundOnLabelDisconnected);
    document.addEventListener(labelDisconnectedEvent, boundOnLabelDisconnected);
  }
  else if (!unlabeledComponents.has(component)) {
    boundOnLabelDisconnected();
    document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  }
}
/**
 * Helper to tear down label interactions on disconnectedCallback on labelable components.
 *
 * @param component
 */
function disconnectLabel(component) {
  unlabeledComponents.delete(component);
  document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
  document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  onLabelConnectedMap.delete(component);
  onLabelDisconnectedMap.delete(component);
  if (!component.labelEl) {
    return;
  }
  const labelables = labelToLabelables.get(component.labelEl);
  if (labelables.length === 1) {
    component.labelEl.removeEventListener(labelClickEvent, onLabelClickMap.get(component.labelEl));
    onLabelClickMap.delete(component.labelEl);
  }
  labelToLabelables.set(component.labelEl, labelables.filter((labelable) => labelable !== component).sort(sortByDOMOrder));
  component.labelEl = null;
}
function sortByDOMOrder(a, b) {
  return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.y)(a.el, b.el) ? -1 : 1;
}
/**
 * Helper to get the label text from a component.
 *
 * @param component
 */
function getLabelText(component) {
  return component.label || component.labelEl?.textContent?.trim() || "";
}
function onLabelClick(event) {
  const labelClickTarget = event.detail.sourceEvent.target;
  const labelables = labelToLabelables.get(this);
  const clickedLabelable = labelables.find((labelable) => labelable.el === labelClickTarget);
  const labelableChildClicked = labelables.includes(clickedLabelable);
  if (labelableChildClicked) {
    // no need to forward click as labelable will receive focus
    return;
  }
  const firstLabelable = labelables[0];
  if (firstLabelable.disabled) {
    return;
  }
  firstLabelable.onLabelClick(event);
}
function onLabelConnected() {
  if (unlabeledComponents.has(this)) {
    connectLabel(this);
  }
}
function onLabelDisconnected() {
  unlabeledComponents.add(this);
  const boundOnLabelConnected = onLabelConnectedMap.get(this) || onLabelConnected.bind(this);
  onLabelConnectedMap.set(this, boundOnLabelConnected);
  document.addEventListener(labelConnectedEvent, boundOnLabelConnected);
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvODNkODA4ODM0NzQ1YmExNjg2ZjA0Mzg5MWJjMGMyNDYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21IO0FBQ3RFO0FBQ2lGO0FBQ1g7QUFDMUI7QUFDcUI7QUFDekQ7QUFDRjtBQUNJOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qix5QkFBeUIsa0NBQWtDLGtDQUFrQyw4QkFBOEIseUNBQXlDLHVCQUF1Qix1Q0FBdUMsbUNBQW1DLDhCQUE4QiwrQkFBK0IsaUNBQWlDLGlDQUFpQyxrQkFBa0IsZUFBZSx5QkFBeUIsaUJBQWlCLDJDQUEyQyxtREFBbUQsb0JBQW9CLE1BQU0sa0JBQWtCLGFBQWEsb0JBQW9CLGdDQUFnQyx5R0FBeUcsVUFBVSxpQkFBaUIsa0JBQWtCLHVEQUF1RCw0Q0FBNEMsaUNBQWlDLHNCQUFzQixpQkFBaUIsZ0JBQWdCLHVEQUF1RCwrQ0FBK0MsaUNBQWlDLHVCQUF1QixpQkFBaUIsZ0JBQWdCLHNEQUFzRCwwQ0FBMEMsaUNBQWlDLG9CQUFvQixvQkFBb0IsaUJBQWlCLG9CQUFvQixnQkFBZ0Isb0JBQW9CLGlCQUFpQixRQUFRLFdBQVcsc0JBQXNCLGlCQUFpQixlQUFlLGdCQUFnQixnQkFBZ0IsdUJBQXVCLG1CQUFtQixrQkFBa0IsaUJBQWlCLG1CQUFtQiw0Q0FBNEMsZ0RBQWdELG9CQUFvQiwrQkFBK0IsMEJBQTBCLDBDQUEwQyxvREFBb0QsNEJBQTRCLGNBQWMseUVBQXlFLHFQQUFxUCxjQUFjLGdEQUFnRCxnQkFBZ0IsNENBQTRDLGtCQUFrQixnQkFBZ0Isb0JBQW9CLGtCQUFrQixnQkFBZ0IsYUFBYSxtQkFBbUIsaUJBQWlCLG1CQUFtQiw0Q0FBNEMsNkJBQTZCLCtCQUErQixxQkFBcUIsNEJBQTRCLDhCQUE4Qix5QkFBeUIseUNBQXlDLG9CQUFvQixxQkFBcUIsd0JBQXdCLHFCQUFxQiw2QkFBNkIsbUJB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDBDQUFRO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZIOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUk3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9pY29uLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9pbnRlcmFjdGl2ZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvbGFiZWwyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9vYnNlcnZlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEZyYWdtZW50IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgayBhcyBmb2N1c0VsZW1lbnQgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RGb3JtLCBkIGFzIGRpc2Nvbm5lY3RGb3JtLCBhIGFzIGFmdGVyQ29ubmVjdERlZmF1bHRWYWx1ZVNldCwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCwgZyBhcyBnZXRMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsMi5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0SWNvblNjYWxlIH0gZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL2ljb24uanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGljb246IFwiaWNvblwiLFxuICBpY29uQ29udGFpbmVyOiBcImljb24tY29udGFpbmVyXCIsXG4gIHNlbGVjdDogXCJzZWxlY3RcIixcbn07XG5cbmNvbnN0IHNlbGVjdENzcyA9IFwiOmhvc3R7LS1jYWxjaXRlLWljb24tc2l6ZToxcmVtOy0tY2FsY2l0ZS1zcGFjaW5nLWVpZ2h0aDowLjEyNXJlbTstLWNhbGNpdGUtc3BhY2luZy1xdWFydGVyOjAuMjVyZW07LS1jYWxjaXRlLXNwYWNpbmctaGFsZjowLjVyZW07LS1jYWxjaXRlLXNwYWNpbmctdGhyZWUtcXVhcnRlcnM6MC43NXJlbTstLWNhbGNpdGUtc3BhY2luZzoxcmVtOy0tY2FsY2l0ZS1zcGFjaW5nLXBsdXMtcXVhcnRlcjoxLjI1cmVtOy0tY2FsY2l0ZS1zcGFjaW5nLXBsdXMtaGFsZjoxLjVyZW07LS1jYWxjaXRlLXNwYWNpbmctZG91YmxlOjJyZW07LS1jYWxjaXRlLW1lbnUtbWluLXdpZHRoOjEwcmVtOy0tY2FsY2l0ZS1oZWFkZXItbWluLWhlaWdodDozcmVtOy0tY2FsY2l0ZS1mb290ZXItbWluLWhlaWdodDozcmVtfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpzdHJldGNoO2lubGluZS1zaXplOnZhcigtLXNlbGVjdC13aWR0aCl9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0KFtzY2FsZT1zXSl7YmxvY2stc2l6ZToxLjVyZW07LS1jYWxjaXRlLXNlbGVjdC1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpOy0tY2FsY2l0ZS1zZWxlY3Qtc3BhY2luZy1pbmxpbmU6MC41cmVtIDJyZW19Omhvc3QoW3NjYWxlPXNdKSAuaWNvbi1jb250YWluZXJ7cGFkZGluZy1pbmxpbmU6MC41cmVtfTpob3N0KFtzY2FsZT1tXSl7YmxvY2stc2l6ZToycmVtOy0tY2FsY2l0ZS1zZWxlY3QtZm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTstLWNhbGNpdGUtc2VsZWN0LXNwYWNpbmctaW5saW5lOjAuNzVyZW0gMi41cmVtfTpob3N0KFtzY2FsZT1tXSkgLmljb24tY29udGFpbmVye3BhZGRpbmctaW5saW5lOjAuNzVyZW19Omhvc3QoW3NjYWxlPWxdKXtibG9jay1zaXplOjQ0cHg7LS1jYWxjaXRlLXNlbGVjdC1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7LS1jYWxjaXRlLXNlbGVjdC1zcGFjaW5nLWlubGluZToxcmVtIDNyZW19Omhvc3QoW3NjYWxlPWxdKSAuaWNvbi1jb250YWluZXJ7cGFkZGluZy1pbmxpbmU6MXJlbX06aG9zdChbd2lkdGg9YXV0b10pe2lubGluZS1zaXplOmF1dG99Omhvc3QoW3dpZHRoPWhhbGZdKXtpbmxpbmUtc2l6ZTo1MCV9Omhvc3QoW3dpZHRoPWZ1bGxdKXtpbmxpbmUtc2l6ZToxMDAlfS5zZWxlY3R7bWFyZ2luOjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7aW5saW5lLXNpemU6MTAwJTtjdXJzb3I6cG9pbnRlcjthcHBlYXJhbmNlOm5vbmU7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO2JvcmRlci1yYWRpdXM6MHB4O2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1zZWxlY3QtZm9udC1zaXplKTtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLXNlbGVjdC1zcGFjaW5nLWlubGluZSk7Ym9yZGVyLWlubGluZS1lbmQtd2lkdGg6MHB4fS5zZWxlY3Q6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5zZWxlY3Q6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9c2VsZWN0OmRpc2FibGVke2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7LS10dy1iZy1vcGFjaXR5OjF9Lmljb24tY29udGFpbmVye3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtYmxvY2s6MHB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Ym9yZGVyLXdpZHRoOjBweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtpbnNldC1pbmxpbmUtZW5kOjBweDtib3JkZXItaW5saW5lLXdpZHRoOjBweCAxcHh9LnNlbGVjdDpmb2N1c34uaWNvbi1jb250YWluZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fTo6c2xvdHRlZChpbnB1dFtzbG90PWhpZGRlbi1mb3JtLWlucHV0XSl7bWFyZ2luOjAgIWltcG9ydGFudDtvcGFjaXR5OjAgIWltcG9ydGFudDtvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtwYWRkaW5nOjAgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O2luc2V0OjAgIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lICFpbXBvcnRhbnQ7ei1pbmRleDotMSAhaW1wb3J0YW50fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5mdW5jdGlvbiBpc09wdGlvbihvcHRpb25Pckdyb3VwKSB7XG4gIHJldHVybiBvcHRpb25Pckdyb3VwLnRhZ05hbWUgPT09IFwiQ0FMQ0lURS1PUFRJT05cIjtcbn1cbmZ1bmN0aW9uIGlzT3B0aW9uR3JvdXAob3B0aW9uT3JHcm91cCkge1xuICByZXR1cm4gb3B0aW9uT3JHcm91cC50YWdOYW1lID09PSBcIkNBTENJVEUtT1BUSU9OLUdST1VQXCI7XG59XG5jb25zdCBTZWxlY3QgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZVNlbGVjdENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVNlbGVjdENoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNvbXBvbmVudFRvTmF0aXZlRWwgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAoKSA9PiB0aGlzLnBvcHVsYXRlSW50ZXJuYWxTZWxlY3QoKSk7XG4gICAgdGhpcy5oYW5kbGVJbnRlcm5hbFNlbGVjdENoYW5nZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RFbC5zZWxlY3RlZE9wdGlvbnNbMF07XG4gICAgICB0aGlzLnNlbGVjdEZyb21OYXRpdmVPcHRpb24oc2VsZWN0ZWQpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZW1pdENoYW5nZUV2ZW50KCkpO1xuICAgIH07XG4gICAgdGhpcy5wb3B1bGF0ZUludGVybmFsU2VsZWN0ID0gKCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uc0FuZEdyb3VwcyA9IEFycmF5LmZyb20odGhpcy5lbC5jaGlsZHJlbikuZmlsdGVyKChjaGlsZCkgPT4gY2hpbGQudGFnTmFtZSA9PT0gXCJDQUxDSVRFLU9QVElPTlwiIHx8IGNoaWxkLnRhZ05hbWUgPT09IFwiQ0FMQ0lURS1PUFRJT04tR1JPVVBcIik7XG4gICAgICB0aGlzLmNsZWFySW50ZXJuYWxTZWxlY3QoKTtcbiAgICAgIG9wdGlvbnNBbmRHcm91cHMuZm9yRWFjaCgob3B0aW9uT3JHcm91cCkgPT4gdGhpcy5zZWxlY3RFbD8uYXBwZW5kKHRoaXMudG9OYXRpdmVFbGVtZW50KG9wdGlvbk9yR3JvdXApKSk7XG4gICAgfTtcbiAgICB0aGlzLnN0b3JlU2VsZWN0UmVmID0gKG5vZGUpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RWwgPSBub2RlO1xuICAgICAgdGhpcy5wb3B1bGF0ZUludGVybmFsU2VsZWN0KCk7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuc2VsZWN0RWwuc2VsZWN0ZWRPcHRpb25zWzBdO1xuICAgICAgdGhpcy5zZWxlY3RGcm9tTmF0aXZlT3B0aW9uKHNlbGVjdGVkKTtcbiAgICB9O1xuICAgIHRoaXMuZW1pdENoYW5nZUV2ZW50ID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlU2VsZWN0Q2hhbmdlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMud2lkdGggPSBcImF1dG9cIjtcbiAgfVxuICB2YWx1ZUhhbmRsZXIodmFsdWUpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtb3B0aW9uXCIpO1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IChpdGVtLnNlbGVjdGVkID0gaXRlbS52YWx1ZSA9PT0gdmFsdWUpKTtcbiAgfVxuICBzZWxlY3RlZE9wdGlvbkhhbmRsZXIoc2VsZWN0ZWRPcHRpb24pIHtcbiAgICB0aGlzLnZhbHVlID0gc2VsZWN0ZWRPcHRpb24/LnZhbHVlO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbnN0IHsgZWwgfSA9IHRoaXM7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKGVsLCB7XG4gICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBkaXNjb25uZWN0Rm9ybSh0aGlzKTtcbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGFmdGVyQ29ubmVjdERlZmF1bHRWYWx1ZVNldCh0aGlzLCB0aGlzLnNlbGVjdGVkT3B0aW9uPy52YWx1ZSA/PyBcIlwiKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIGZvY3VzRWxlbWVudCh0aGlzLnNlbGVjdEVsKTtcbiAgfVxuICBoYW5kbGVPcHRpb25Pckdyb3VwQ2hhbmdlKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3Qgb3B0aW9uT3JHcm91cCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBuYXRpdmVFbCA9IHRoaXMuY29tcG9uZW50VG9OYXRpdmVFbC5nZXQob3B0aW9uT3JHcm91cCk7XG4gICAgaWYgKCFuYXRpdmVFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZU5hdGl2ZUVsZW1lbnQob3B0aW9uT3JHcm91cCwgbmF0aXZlRWwpO1xuICAgIGlmIChpc09wdGlvbihvcHRpb25Pckdyb3VwKSAmJiBvcHRpb25Pckdyb3VwLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmRlc2VsZWN0QWxsRXhjZXB0KG9wdGlvbk9yR3JvdXApO1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IG9wdGlvbk9yR3JvdXA7XG4gICAgfVxuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG9uTGFiZWxDbGljaygpIHtcbiAgICB0aGlzLnNldEZvY3VzKCk7XG4gIH1cbiAgdXBkYXRlTmF0aXZlRWxlbWVudChvcHRpb25Pckdyb3VwLCBuYXRpdmVPcHRpb25Pckdyb3VwKSB7XG4gICAgbmF0aXZlT3B0aW9uT3JHcm91cC5kaXNhYmxlZCA9IG9wdGlvbk9yR3JvdXAuZGlzYWJsZWQ7XG4gICAgbmF0aXZlT3B0aW9uT3JHcm91cC5sYWJlbCA9IG9wdGlvbk9yR3JvdXAubGFiZWw7XG4gICAgaWYgKGlzT3B0aW9uKG9wdGlvbk9yR3JvdXApKSB7XG4gICAgICBjb25zdCBvcHRpb24gPSBuYXRpdmVPcHRpb25Pckdyb3VwO1xuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uT3JHcm91cC5zZWxlY3RlZDtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvbk9yR3JvdXAudmFsdWU7XG4gICAgICAvLyBuZWVkIHRvIHNldCBpbm5lclRleHQgZm9yIG1vYmlsZVxuICAgICAgLy8gc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1MDIxNjIwL2lvcy1zYWZhcmktbm90LXNob3dpbmctYWxsLW9wdGlvbnMtZm9yLXNlbGVjdC1tZW51LzQxNzQ5NzAxXG4gICAgICBvcHRpb24uaW5uZXJUZXh0ID0gb3B0aW9uT3JHcm91cC5sYWJlbDtcbiAgICB9XG4gIH1cbiAgY2xlYXJJbnRlcm5hbFNlbGVjdCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudFRvTmF0aXZlRWwuZm9yRWFjaCgodmFsdWUpID0+IHZhbHVlLnJlbW92ZSgpKTtcbiAgICB0aGlzLmNvbXBvbmVudFRvTmF0aXZlRWwuY2xlYXIoKTtcbiAgfVxuICBzZWxlY3RGcm9tTmF0aXZlT3B0aW9uKG5hdGl2ZU9wdGlvbikge1xuICAgIGlmICghbmF0aXZlT3B0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBmdXR1cmVTZWxlY3RlZDtcbiAgICB0aGlzLmNvbXBvbmVudFRvTmF0aXZlRWwuZm9yRWFjaCgobmF0aXZlT3B0aW9uT3JHcm91cCwgb3B0aW9uT3JHcm91cCkgPT4ge1xuICAgICAgaWYgKGlzT3B0aW9uKG9wdGlvbk9yR3JvdXApICYmIG5hdGl2ZU9wdGlvbk9yR3JvdXAgPT09IG5hdGl2ZU9wdGlvbikge1xuICAgICAgICBvcHRpb25Pckdyb3VwLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgZnV0dXJlU2VsZWN0ZWQgPSBvcHRpb25Pckdyb3VwO1xuICAgICAgICB0aGlzLmRlc2VsZWN0QWxsRXhjZXB0KG9wdGlvbk9yR3JvdXApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChmdXR1cmVTZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IGZ1dHVyZVNlbGVjdGVkO1xuICAgIH1cbiAgfVxuICB0b05hdGl2ZUVsZW1lbnQob3B0aW9uT3JHcm91cCkge1xuICAgIGlmIChpc09wdGlvbihvcHRpb25Pckdyb3VwKSkge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIHRoaXMudXBkYXRlTmF0aXZlRWxlbWVudChvcHRpb25Pckdyb3VwLCBvcHRpb24pO1xuICAgICAgdGhpcy5jb21wb25lbnRUb05hdGl2ZUVsLnNldChvcHRpb25Pckdyb3VwLCBvcHRpb24pO1xuICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9XG4gICAgaWYgKGlzT3B0aW9uR3JvdXAob3B0aW9uT3JHcm91cCkpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpO1xuICAgICAgdGhpcy51cGRhdGVOYXRpdmVFbGVtZW50KG9wdGlvbk9yR3JvdXAsIGdyb3VwKTtcbiAgICAgIEFycmF5LmZyb20ob3B0aW9uT3JHcm91cC5jaGlsZHJlbikuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZU9wdGlvbiA9IHRoaXMudG9OYXRpdmVFbGVtZW50KG9wdGlvbik7XG4gICAgICAgIGdyb3VwLmFwcGVuZChuYXRpdmVPcHRpb24pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFRvTmF0aXZlRWwuc2V0KG9wdGlvbk9yR3JvdXAsIG5hdGl2ZU9wdGlvbik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29tcG9uZW50VG9OYXRpdmVFbC5zZXQob3B0aW9uT3JHcm91cCwgZ3JvdXApO1xuICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnN1cHBvcnRlZCBlbGVtZW50IGNoaWxkIHByb3ZpZGVkXCIpO1xuICB9XG4gIGRlc2VsZWN0QWxsRXhjZXB0KGV4Y2VwdCkge1xuICAgIHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtb3B0aW9uXCIpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgaWYgKG9wdGlvbiA9PT0gZXhjZXB0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyQ2hldnJvbigpIHtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmljb25Db250YWluZXIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBDU1MuaWNvbiwgaWNvbjogXCJjaGV2cm9uLWRvd25cIiwgc2NhbGU6IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKSB9KSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoRnJhZ21lbnQsIG51bGwsIGgoXCJzZWxlY3RcIiwgeyBcImFyaWEtbGFiZWxcIjogZ2V0TGFiZWxUZXh0KHRoaXMpLCBjbGFzczogQ1NTLnNlbGVjdCwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUludGVybmFsU2VsZWN0Q2hhbmdlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zdG9yZVNlbGVjdFJlZiB9LCBoKFwic2xvdFwiLCBudWxsKSksIHRoaXMucmVuZGVyQ2hldnJvbigpLCBoKEhpZGRlbkZvcm1JbnB1dFNsb3QsIHsgY29tcG9uZW50OiB0aGlzIH0pKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwidmFsdWVcIjogW1widmFsdWVIYW5kbGVyXCJdLFxuICAgIFwic2VsZWN0ZWRPcHRpb25cIjogW1wic2VsZWN0ZWRPcHRpb25IYW5kbGVyXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHNlbGVjdENzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1zZWxlY3RcIiwge1xuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJmb3JtXCI6IFs1MTNdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwibmFtZVwiOiBbNTEzXSxcbiAgICBcInJlcXVpcmVkXCI6IFs1MTZdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJ2YWx1ZVwiOiBbMTAyNV0sXG4gICAgXCJzZWxlY3RlZE9wdGlvblwiOiBbMTA0MF0sXG4gICAgXCJ3aWR0aFwiOiBbNTEzXSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF1cbiAgfSwgW1swLCBcImNhbGNpdGVJbnRlcm5hbE9wdGlvbkNoYW5nZVwiLCBcImhhbmRsZU9wdGlvbk9yR3JvdXBDaGFuZ2VcIl0sIFswLCBcImNhbGNpdGVJbnRlcm5hbE9wdGlvbkdyb3VwQ2hhbmdlXCIsIFwiaGFuZGxlT3B0aW9uT3JHcm91cENoYW5nZVwiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1zZWxlY3RcIiwgXCJjYWxjaXRlLWljb25cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtc2VsZWN0XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgU2VsZWN0KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZVNlbGVjdCA9IFNlbGVjdDtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVTZWxlY3QsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmZ1bmN0aW9uIGdldEljb25TY2FsZShjb21wb25lbnRTY2FsZSkge1xuICByZXR1cm4gY29tcG9uZW50U2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIjtcbn1cblxuZXhwb3J0IHsgZ2V0SWNvblNjYWxlIGFzIGcgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGdldEFzc2V0UGF0aCwgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgSG9zdCwgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldEVsZW1lbnREaXIsIHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgaWNvbjogXCJpY29uXCIsXG4gIGZsaXBSdGw6IFwiZmxpcC1ydGxcIixcbn07XG5cbi8qKlxuICogSWNvbiBkYXRhIGNhY2hlLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgaWNvbkNhY2hlID0ge307XG4vKipcbiAqIEljb24gcmVxdWVzdCBjYWNoZS5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHJlcXVlc3RDYWNoZSA9IHt9O1xuY29uc3Qgc2NhbGVUb1B4ID0ge1xuICBzOiAxNixcbiAgbTogMjQsXG4gIGw6IDMyLFxufTtcbmFzeW5jIGZ1bmN0aW9uIGZldGNoSWNvbih7IGljb24sIHNjYWxlIH0pIHtcbiAgY29uc3Qgc2l6ZSA9IHNjYWxlVG9QeFtzY2FsZV07XG4gIGNvbnN0IG5hbWUgPSBub3JtYWxpemVJY29uTmFtZShpY29uKTtcbiAgY29uc3QgZmlsbGVkID0gbmFtZS5jaGFyQXQobmFtZS5sZW5ndGggLSAxKSA9PT0gXCJGXCI7XG4gIGNvbnN0IGljb25OYW1lID0gZmlsbGVkID8gbmFtZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggLSAxKSA6IG5hbWU7XG4gIGNvbnN0IGlkID0gYCR7aWNvbk5hbWV9JHtzaXplfSR7ZmlsbGVkID8gXCJGXCIgOiBcIlwifWA7XG4gIGlmIChpY29uQ2FjaGVbaWRdKSB7XG4gICAgcmV0dXJuIGljb25DYWNoZVtpZF07XG4gIH1cbiAgaWYgKCFyZXF1ZXN0Q2FjaGVbaWRdKSB7XG4gICAgcmVxdWVzdENhY2hlW2lkXSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvaWNvbi8ke2lkfS5qc29uYCkpXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihgXCIke2lkfVwiIGlzIG5vdCBhIHZhbGlkIGNhbGNpdGUtdWktaWNvbiBuYW1lYCk7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBwYXRoID0gYXdhaXQgcmVxdWVzdENhY2hlW2lkXTtcbiAgaWNvbkNhY2hlW2lkXSA9IHBhdGg7XG4gIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGljb24gbmFtZSB0byBtYXRjaCB0aGUgcGF0aCBkYXRhIG1vZHVsZSBleHBvcnRzLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHBhcmFtIG5hbWUg4oCTIGFuIGljb24gbmFtZSB0aGF0IGNhbiBiZSBlaXRoZXIga2ViYWIgb3IgY2FtZWwtY2FzZWRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUljb25OYW1lKG5hbWUpIHtcbiAgY29uc3QgbnVtYmVyTGVhZGluZ05hbWUgPSAhaXNOYU4oTnVtYmVyKG5hbWUuY2hhckF0KDApKSk7XG4gIGNvbnN0IHBhcnRzID0gbmFtZS5zcGxpdChcIi1cIik7XG4gIGNvbnN0IGtlYmFiQ2FzZWQgPSBwYXJ0cy5sZW5ndGggPiAwO1xuICBpZiAoa2ViYWJDYXNlZCkge1xuICAgIGNvbnN0IGZpcnN0Tm9uRGlnaXRJblBhcnRQYXR0ZXJuID0gL1thLXpdL2k7XG4gICAgbmFtZSA9IHBhcnRzXG4gICAgICAubWFwKChwYXJ0LCBwYXJ0SW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBwYXJ0LnJlcGxhY2UoZmlyc3ROb25EaWdpdEluUGFydFBhdHRlcm4sIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoLCBvZmZzZXQpIHtcbiAgICAgICAgY29uc3QgaXNGaXJzdENoYXJJbk5hbWUgPSBwYXJ0SW5kZXggPT09IDAgJiYgb2Zmc2V0ID09PSAwO1xuICAgICAgICBpZiAoaXNGaXJzdENoYXJJbk5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIG51bWJlckxlYWRpbmdOYW1lID8gYGkke25hbWV9YCA6IG5hbWU7XG59XG5cbmNvbnN0IGljb25Dc3MgPSBcIjpob3N0e2Rpc3BsYXk6aW5saW5lLWZsZXg7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1pY29uLWNvbG9yKX06aG9zdChbc2NhbGU9c10pe2lubGluZS1zaXplOjE2cHg7YmxvY2stc2l6ZToxNnB4O21pbi1pbmxpbmUtc2l6ZToxNnB4O21pbi1ibG9jay1zaXplOjE2cHh9Omhvc3QoW3NjYWxlPW1dKXtpbmxpbmUtc2l6ZToyNHB4O2Jsb2NrLXNpemU6MjRweDttaW4taW5saW5lLXNpemU6MjRweDttaW4tYmxvY2stc2l6ZToyNHB4fTpob3N0KFtzY2FsZT1sXSl7aW5saW5lLXNpemU6MzJweDtibG9jay1zaXplOjMycHg7bWluLWlubGluZS1zaXplOjMycHg7bWluLWJsb2NrLXNpemU6MzJweH0uZmxpcC1ydGx7dHJhbnNmb3JtOnNjYWxlWCgtMSl9LnN2Z3tkaXNwbGF5OmJsb2NrfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBJY29uID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmljb24gPSBudWxsO1xuICAgIHRoaXMuZmxpcFJ0bCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnRleHRMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBhdGhEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMud2FpdFVudGlsVmlzaWJsZSgoKSA9PiB7XG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5sb2FkSWNvblBhdGhEYXRhKCk7XG4gICAgfSk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMubG9hZEljb25QYXRoRGF0YSgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsLCBmbGlwUnRsLCBwYXRoRGF0YSwgc2NhbGUsIHRleHRMYWJlbCB9ID0gdGhpcztcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKGVsKTtcbiAgICBjb25zdCBzaXplID0gc2NhbGVUb1B4W3NjYWxlXTtcbiAgICBjb25zdCBzZW1hbnRpYyA9ICEhdGV4dExhYmVsO1xuICAgIGNvbnN0IHBhdGhzID0gW10uY29uY2F0KHBhdGhEYXRhIHx8IFwiXCIpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1oaWRkZW5cIjogdG9BcmlhQm9vbGVhbighc2VtYW50aWMpLCBcImFyaWEtbGFiZWxcIjogc2VtYW50aWMgPyB0ZXh0TGFiZWwgOiBudWxsLCByb2xlOiBzZW1hbnRpYyA/IFwiaW1nXCIgOiBudWxsIH0sIGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmZsaXBSdGxdOiBkaXIgPT09IFwicnRsXCIgJiYgZmxpcFJ0bCxcbiAgICAgICAgc3ZnOiB0cnVlLFxuICAgICAgfSwgZmlsbDogXCJjdXJyZW50Q29sb3JcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgdmlld0JveDogYDAgMCAke3NpemV9ICR7c2l6ZX1gLCB3aWR0aDogXCIxMDAlXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSwgcGF0aHMubWFwKChwYXRoKSA9PiB0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIiA/IChoKFwicGF0aFwiLCB7IGQ6IHBhdGggfSkpIDogKGgoXCJwYXRoXCIsIHsgZDogcGF0aC5kLCBvcGFjaXR5OiBcIm9wYWNpdHlcIiBpbiBwYXRoID8gcGF0aC5vcGFjaXR5IDogMSB9KSkpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFzeW5jIGxvYWRJY29uUGF0aERhdGEoKSB7XG4gICAgY29uc3QgeyBpY29uLCBzY2FsZSwgdmlzaWJsZSB9ID0gdGhpcztcbiAgICBpZiAoIUJ1aWxkLmlzQnJvd3NlciB8fCAhaWNvbiB8fCAhdmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXRoRGF0YSA9IGF3YWl0IGZldGNoSWNvbih7IGljb24sIHNjYWxlIH0pO1xuICAgIC8vIFdoaWxlIHRoZSBmZXRjaEljb24gbWV0aG9kIGlzIGF3YWl0aW5nIHJlc3BvbnNlLCB0aGUgaWNvbiByZXF1ZXN0ZWQgY2FuIGNoYW5nZS4gVGhpcyBjaGVjayBpcyB0byB2ZXJpZnkgdGhlIHJlc3BvbnNlIHJlY2VpdmVkIGJlbG9uZ3MgdG8gdGhlIGN1cnJlbnQgaWNvbi5cbiAgICBpZiAoaWNvbiAhPT0gdGhpcy5pY29uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGF0aERhdGEgPSBwYXRoRGF0YTtcbiAgfVxuICB3YWl0VW50aWxWaXNpYmxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwiaW50ZXJzZWN0aW9uXCIsIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIHsgcm9vdE1hcmdpbjogXCI1MHB4XCIgfSk7XG4gICAgaWYgKCF0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbCk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImljb25cIjogW1wibG9hZEljb25QYXRoRGF0YVwiXSxcbiAgICBcInNjYWxlXCI6IFtcImxvYWRJY29uUGF0aERhdGFcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gaWNvbkNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1pY29uXCIsIHtcbiAgICBcImljb25cIjogWzUxM10sXG4gICAgXCJmbGlwUnRsXCI6IFs1MTYsIFwiZmxpcC1ydGxcIl0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInRleHRMYWJlbFwiOiBbMSwgXCJ0ZXh0LWxhYmVsXCJdLFxuICAgIFwicGF0aERhdGFcIjogWzMyXSxcbiAgICBcInZpc2libGVcIjogWzMyXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWljb25cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEljb24pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IEljb24gYXMgSSwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuZnVuY3Rpb24gZ2V0VXNlckFnZW50RGF0YSgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xufVxuZnVuY3Rpb24gZ2V0VXNlckFnZW50U3RyaW5nKCkge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGNvbnN0IHVhRGF0YSA9IGdldFVzZXJBZ2VudERhdGEoKTtcbiAgcmV0dXJuIHVhRGF0YT8uYnJhbmRzXG4gICAgPyB1YURhdGEuYnJhbmRzLm1hcCgoeyBicmFuZCwgdmVyc2lvbiB9KSA9PiBgJHticmFuZH0vJHt2ZXJzaW9ufWApLmpvaW4oXCIgXCIpXG4gICAgOiBuYXZpZ2F0b3IudXNlckFnZW50O1xufVxuXG4vLyDimqDvuI8gYnJvd3Nlci1zbmlmZmluZyBpcyBub3QgYSBiZXN0IHByYWN0aWNlIGFuZCBzaG91bGQgYmUgYXZvaWRlZCDimqDvuI9cbmNvbnN0IGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVc2VyQWdlbnRTdHJpbmcoKSk7XG5jb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudCA9IGlzRmlyZWZveFxuICA/IG5ldyBXZWFrTWFwKClcbiAgOiBudWxsO1xuZnVuY3Rpb24gaW50ZXJjZXB0ZWRDbGljaygpIHtcbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcztcbiAgaWYgKCFkaXNhYmxlZCkge1xuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljay5jYWxsKHRoaXMpO1xuICB9XG59XG5mdW5jdGlvbiBvblBvaW50ZXJEb3duKGV2ZW50KSB7XG4gIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgaWYgKGlzRmlyZWZveCAmJiAhaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGludGVyYWN0aXZlRWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gaW50ZXJhY3RpdmVFbGVtZW50O1xuICBpZiAoZGlzYWJsZWQpIHtcbiAgICAvLyBwcmV2ZW50IGNsaWNrIGZyb20gbW92aW5nIGZvY3VzIG9uIGhvc3RcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzID0gW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdO1xuZnVuY3Rpb24gb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQoZXZlbnQpIHtcbiAgaWYgKGlzRmlyZWZveCAmJiAhaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGV2ZW50LnRhcmdldCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAvLyBwcmV2ZW50IGRpc2FsbG93ZWQgbW91c2UgZXZlbnRzIGZyb20gYmVpbmcgZW1pdHRlZCBvbiB0aGUgZGlzYWJsZWQgaG9zdCAocGVyIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvaHRtbC9pc3N1ZXMvNTg4NilcbiAgLy/imqAgd2UgZ2VuZXJhbGx5IGF2b2lkIHN0b3BwaW5nIHByb3BhZ2F0aW9uIG9mIGV2ZW50cywgYnV0IHRoaXMgaXMgbmVlZGVkIHRvIGFkaGVyZSB0byB0aGUgaW50ZW5kZWQgc3BlYyBjaGFuZ2VzIGFib3ZlIOKaoFxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBjYXB0dXJlT25seU9wdGlvbnMgPSB7IGNhcHR1cmU6IHRydWUgfTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXBkYXRlcyB0aGUgaG9zdCBlbGVtZW50IHRvIHByZXZlbnQga2V5Ym9hcmQgaW50ZXJhY3Rpb24gb24gaXRzIHN1YnRyZWUgYW5kIHNldHMgdGhlIGFwcHJvcHJpYXRlIGFyaWEgYXR0cmlidXRlIGZvciBhY2Nlc3NpYmlsaXR5LlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRSZW5kZXJgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqICoqTm90ZXMqKlxuICpcbiAqIHRoaXMgdXRpbCBpcyBub3QgbmVlZGVkIGZvciBzaW1wbGUgY29tcG9uZW50cyB3aG9zZSByb290IGVsZW1lbnQgb3IgZWxlbWVudHMgYXJlIGFuIGludGVyYWN0aXZlIGNvbXBvbmVudCAoY3VzdG9tIGVsZW1lbnQgb3IgbmF0aXZlIGNvbnRyb2wpLiBGb3IgdGhvc2UgY2FzZXMsIHNldCB0aGUgYGRpc2FibGVkYCBwcm9wcyBvbiB0aGUgcm9vdCBjb21wb25lbnRzIGluc3RlYWQuXG4gKiB0ZWNobmljYWxseSwgdXNlcnMgY2FuIG92ZXJyaWRlIGB0YWJpbmRleGAgYW5kIHJlc3RvcmUga2V5Ym9hcmQgbmF2aWdhdGlvbiwgYnV0IHRoaXMgd2lsbCBiZSBjb25zaWRlcmVkIHVzZXIgZXJyb3JcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gaG9zdElzVGFiYmFibGUg4oCTIHdoZW4gc2V0IHRvIHRydWUgb3IgaXRzIHByZWRpY2F0ZSByZXR1cm5zIHRydWUsIHRoZSBob3N0IGlzIHRhYmJhYmxlIGFuZCB3aWxsIGJlIG1hbmFnZWQgYnkgdGhlIGhlbHBlci4gU2V0IHRvIFwibWFuYWdlZFwiIGZvciBjYXNlcyB3aGVyZSBhIGNvbXBvbmVudCdzIHBhcmVudCBkZXRlcm1pbmVzIHdoaWNoIGl0ZW0gaXMgdGFiYmFibGUgKGkuZS4sIHNldHMgYHRhYmluZGV4YCB0byBhbGxvdyB0YWJiaW5nKS5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlSG9zdEludGVyYWN0aW9uKGNvbXBvbmVudCwgaG9zdElzVGFiYmFibGUgPSBmYWxzZSkge1xuICBpZiAoY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIGlmIChjb21wb25lbnQuZWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpO1xuICBpZiAodHlwZW9mIGhvc3RJc1RhYmJhYmxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgaG9zdElzVGFiYmFibGUuY2FsbChjb21wb25lbnQpID8gXCIwXCIgOiBcIi0xXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSB0cnVlKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gZmFsc2UpIHtcbiAgICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cbiAgZWxzZSA7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpO1xufVxuZnVuY3Rpb24gYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmVsLmNsaWNrID0gaW50ZXJjZXB0ZWRDbGljaztcbiAgYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoaXNGaXJlZm94ID8gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIGFkZEludGVyYWN0aW9uTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gdGhpcyBwYXRoIGlzIG9ubHkgYXBwbGljYWJsZSB0byBGaXJlZm94XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIHtcbiAgcmV0dXJuIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBkZWxldGUgY29tcG9uZW50LmVsLmNsaWNrOyAvLyBmYWxsYmFjayBvbiBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2tcbiAgcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoaXNGaXJlZm94ID8gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUludGVyYWN0aW9uTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gdGhpcyBwYXRoIGlzIG9ubHkgYXBwbGljYWJsZSB0byBGaXJlZm94XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgaGVscHMgZGlzYWJsZSBjb21wb25lbnRzIGNvbnNpc3RlbnRseSBpbiBGaXJlZm94LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBpcyBvbmx5IG5lZWRlZCBmb3IgRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBjYWxsIGNhcHR1cmUgZXZlbnQgbGlzdGVuZXJzIGJlZm9yZSBub24tY2FwdHVyZSBvbmVzIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTczMTUwNCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0SW50ZXJhY3RpdmUoY29tcG9uZW50KSB7XG4gIGlmICghY29tcG9uZW50LmRpc2FibGVkIHx8ICFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcGFyZW50ID0gY29tcG9uZW50LmVsLnBhcmVudEVsZW1lbnQgfHwgY29tcG9uZW50LmVsOyAvKiBhc3N1bWUgZWxlbWVudCBpcyBob3N0IGlmIGl0IGhhcyBubyBwYXJlbnQgd2hlbiBjb25uZWN0ZWQgKi9cbiAgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuc2V0KGNvbXBvbmVudC5lbCwgcGFyZW50KTtcbiAgYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgcmVzdG9yZXMgaW50ZXJhY3Rpdml0eSB0byBkaXNhYmxlZCBjb21wb25lbnRzIGNvbnNpc3RlbnRseSBpbiBGaXJlZm94LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBpcyBvbmx5IG5lZWRlZCBmb3IgRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBjYWxsIGNhcHR1cmUgZXZlbnQgbGlzdGVuZXJzIGJlZm9yZSBub24tY2FwdHVyZSBvbmVzIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTczMTUwNCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0SW50ZXJhY3RpdmUoY29tcG9uZW50KSB7XG4gIGlmICghaXNGaXJlZm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFsd2F5cyByZW1vdmUgb24gZGlzY29ubmVjdCBhcyByZW5kZXIgb3IgY29ubmVjdCB3aWxsIHJlc3RvcmUgaXRcbiAgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0SW50ZXJhY3RpdmUgYXMgYywgZGlzY29ubmVjdEludGVyYWN0aXZlIGFzIGQsIGdldFVzZXJBZ2VudFN0cmluZyBhcyBnLCB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgeSBhcyBpc0JlZm9yZSwgcSBhcyBxdWVyeUVsZW1lbnRSb290cywgYyBhcyBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkgfSBmcm9tICcuL2RvbS5qcyc7XG5cbi8qKlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBsYWJlbENsaWNrRXZlbnQgPSBcImNhbGNpdGVJbnRlcm5hbExhYmVsQ2xpY2tcIjtcbmNvbnN0IGxhYmVsQ29ubmVjdGVkRXZlbnQgPSBcImNhbGNpdGVJbnRlcm5hbExhYmVsQ29ubmVjdGVkXCI7XG5jb25zdCBsYWJlbERpc2Nvbm5lY3RlZEV2ZW50ID0gXCJjYWxjaXRlSW50ZXJuYWxMYWJlbERpc2Nvbm5lY3RlZFwiO1xuY29uc3QgbGFiZWxUYWdOYW1lID0gXCJjYWxjaXRlLWxhYmVsXCI7XG5jb25zdCBsYWJlbFRvTGFiZWxhYmxlcyA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBvbkxhYmVsQ2xpY2tNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgb25MYWJlbENvbm5lY3RlZE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBvbkxhYmVsRGlzY29ubmVjdGVkTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHVubGFiZWxlZENvbXBvbmVudHMgPSBuZXcgV2Vha1NldCgpO1xuY29uc3QgZmluZExhYmVsRm9yQ29tcG9uZW50ID0gKGNvbXBvbmVudEVsKSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbXBvbmVudEVsO1xuICBjb25zdCBmb3JMYWJlbCA9IGlkICYmIHF1ZXJ5RWxlbWVudFJvb3RzKGNvbXBvbmVudEVsLCB7IHNlbGVjdG9yOiBgJHtsYWJlbFRhZ05hbWV9W2Zvcj1cIiR7aWR9XCJdYCB9KTtcbiAgaWYgKGZvckxhYmVsKSB7XG4gICAgcmV0dXJuIGZvckxhYmVsO1xuICB9XG4gIGNvbnN0IHBhcmVudExhYmVsID0gY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5KGNvbXBvbmVudEVsLCBsYWJlbFRhZ05hbWUpO1xuICBpZiAoIXBhcmVudExhYmVsIHx8XG4gICAgLy8gbGFiZWxhYmxlIGNvbXBvbmVudHMgd2l0aGluIG90aGVyIGN1c3RvbSBlbGVtZW50cyBhcmUgbm90IGNvbnNpZGVyZWQgbGFiZWxhYmxlXG4gICAgaGFzQW5jZXN0b3JDdXN0b21FbGVtZW50cyhwYXJlbnRMYWJlbCwgY29tcG9uZW50RWwpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHBhcmVudExhYmVsO1xufTtcbmZ1bmN0aW9uIGhhc0FuY2VzdG9yQ3VzdG9tRWxlbWVudHMobGFiZWwsIGNvbXBvbmVudEVsKSB7XG4gIGxldCB0cmF2ZXJzZWRFbGVtZW50cztcbiAgY29uc3QgY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUgPSBcImN1c3RvbS1lbGVtZW50LWFuY2VzdG9yLWNoZWNrXCI7XG4gIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgdHJhdmVyc2VkRWxlbWVudHMgPSBjb21wb3NlZFBhdGguc2xpY2UoY29tcG9zZWRQYXRoLmluZGV4T2YoY29tcG9uZW50RWwpLCBjb21wb3NlZFBhdGguaW5kZXhPZihsYWJlbCkpO1xuICB9O1xuICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlLCBsaXN0ZW5lciwgeyBvbmNlOiB0cnVlIH0pO1xuICBjb21wb25lbnRFbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChjdXN0b21FbGVtZW50QW5jZXN0b3JDaGVja0V2ZW50VHlwZSwgeyBjb21wb3NlZDogdHJ1ZSwgYnViYmxlczogdHJ1ZSB9KSk7XG4gIGxhYmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUsIGxpc3RlbmVyKTtcbiAgY29uc3QgYW5jZXN0b3JDdXN0b21FbGVtZW50cyA9IHRyYXZlcnNlZEVsZW1lbnRzXG4gICAgLmZpbHRlcigoZWwpID0+IGVsICE9PSBjb21wb25lbnRFbCAmJiBlbCAhPT0gbGFiZWwpXG4gICAgLmZpbHRlcigoZWwpID0+IGVsLnRhZ05hbWU/LmluY2x1ZGVzKFwiLVwiKSk7XG4gIHJldHVybiBhbmNlc3RvckN1c3RvbUVsZW1lbnRzLmxlbmd0aCA+IDA7XG59XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgbGFiZWwgaW50ZXJhY3Rpb25zIG9uIGNvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdExhYmVsKGNvbXBvbmVudCkge1xuICBjb25zdCBsYWJlbEVsID0gZmluZExhYmVsRm9yQ29tcG9uZW50KGNvbXBvbmVudC5lbCk7XG4gIGlmICgob25MYWJlbENsaWNrTWFwLmhhcyhsYWJlbEVsKSAmJiBsYWJlbEVsID09PSBjb21wb25lbnQubGFiZWxFbCkgfHxcbiAgICAoIWxhYmVsRWwgJiYgdW5sYWJlbGVkQ29tcG9uZW50cy5oYXMoY29tcG9uZW50KSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkID0gb25MYWJlbERpc2Nvbm5lY3RlZC5iaW5kKGNvbXBvbmVudCk7XG4gIGlmIChsYWJlbEVsKSB7XG4gICAgY29tcG9uZW50LmxhYmVsRWwgPSBsYWJlbEVsO1xuICAgIGNvbnN0IGxhYmVsYWJsZXMgPSBsYWJlbFRvTGFiZWxhYmxlcy5nZXQobGFiZWxFbCkgfHwgW107XG4gICAgbGFiZWxhYmxlcy5wdXNoKGNvbXBvbmVudCk7XG4gICAgbGFiZWxUb0xhYmVsYWJsZXMuc2V0KGxhYmVsRWwsIGxhYmVsYWJsZXMuc29ydChzb3J0QnlET01PcmRlcikpO1xuICAgIGlmICghb25MYWJlbENsaWNrTWFwLmhhcyhjb21wb25lbnQubGFiZWxFbCkpIHtcbiAgICAgIG9uTGFiZWxDbGlja01hcC5zZXQoY29tcG9uZW50LmxhYmVsRWwsIG9uTGFiZWxDbGljayk7XG4gICAgICBjb21wb25lbnQubGFiZWxFbC5hZGRFdmVudExpc3RlbmVyKGxhYmVsQ2xpY2tFdmVudCwgb25MYWJlbENsaWNrKTtcbiAgICB9XG4gICAgdW5sYWJlbGVkQ29tcG9uZW50cy5kZWxldGUoY29tcG9uZW50KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICAgIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuc2V0KGNvbXBvbmVudCwgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCk7XG4gIH1cbiAgZWxzZSBpZiAoIXVubGFiZWxlZENvbXBvbmVudHMuaGFzKGNvbXBvbmVudCkpIHtcbiAgICBib3VuZE9uTGFiZWxEaXNjb25uZWN0ZWQoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICB9XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gbGFiZWwgaW50ZXJhY3Rpb25zIG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrIG9uIGxhYmVsYWJsZSBjb21wb25lbnRzLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdExhYmVsKGNvbXBvbmVudCkge1xuICB1bmxhYmVsZWRDb21wb25lbnRzLmRlbGV0ZShjb21wb25lbnQpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICBvbkxhYmVsQ29ubmVjdGVkTWFwLmRlbGV0ZShjb21wb25lbnQpO1xuICBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLmRlbGV0ZShjb21wb25lbnQpO1xuICBpZiAoIWNvbXBvbmVudC5sYWJlbEVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGxhYmVsYWJsZXMgPSBsYWJlbFRvTGFiZWxhYmxlcy5nZXQoY29tcG9uZW50LmxhYmVsRWwpO1xuICBpZiAobGFiZWxhYmxlcy5sZW5ndGggPT09IDEpIHtcbiAgICBjb21wb25lbnQubGFiZWxFbC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ2xpY2tFdmVudCwgb25MYWJlbENsaWNrTWFwLmdldChjb21wb25lbnQubGFiZWxFbCkpO1xuICAgIG9uTGFiZWxDbGlja01hcC5kZWxldGUoY29tcG9uZW50LmxhYmVsRWwpO1xuICB9XG4gIGxhYmVsVG9MYWJlbGFibGVzLnNldChjb21wb25lbnQubGFiZWxFbCwgbGFiZWxhYmxlcy5maWx0ZXIoKGxhYmVsYWJsZSkgPT4gbGFiZWxhYmxlICE9PSBjb21wb25lbnQpLnNvcnQoc29ydEJ5RE9NT3JkZXIpKTtcbiAgY29tcG9uZW50LmxhYmVsRWwgPSBudWxsO1xufVxuZnVuY3Rpb24gc29ydEJ5RE9NT3JkZXIoYSwgYikge1xuICByZXR1cm4gaXNCZWZvcmUoYS5lbCwgYi5lbCkgPyAtMSA6IDE7XG59XG4vKipcbiAqIEhlbHBlciB0byBnZXQgdGhlIGxhYmVsIHRleHQgZnJvbSBhIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGdldExhYmVsVGV4dChjb21wb25lbnQpIHtcbiAgcmV0dXJuIGNvbXBvbmVudC5sYWJlbCB8fCBjb21wb25lbnQubGFiZWxFbD8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBcIlwiO1xufVxuZnVuY3Rpb24gb25MYWJlbENsaWNrKGV2ZW50KSB7XG4gIGNvbnN0IGxhYmVsQ2xpY2tUYXJnZXQgPSBldmVudC5kZXRhaWwuc291cmNlRXZlbnQudGFyZ2V0O1xuICBjb25zdCBsYWJlbGFibGVzID0gbGFiZWxUb0xhYmVsYWJsZXMuZ2V0KHRoaXMpO1xuICBjb25zdCBjbGlja2VkTGFiZWxhYmxlID0gbGFiZWxhYmxlcy5maW5kKChsYWJlbGFibGUpID0+IGxhYmVsYWJsZS5lbCA9PT0gbGFiZWxDbGlja1RhcmdldCk7XG4gIGNvbnN0IGxhYmVsYWJsZUNoaWxkQ2xpY2tlZCA9IGxhYmVsYWJsZXMuaW5jbHVkZXMoY2xpY2tlZExhYmVsYWJsZSk7XG4gIGlmIChsYWJlbGFibGVDaGlsZENsaWNrZWQpIHtcbiAgICAvLyBubyBuZWVkIHRvIGZvcndhcmQgY2xpY2sgYXMgbGFiZWxhYmxlIHdpbGwgcmVjZWl2ZSBmb2N1c1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBmaXJzdExhYmVsYWJsZSA9IGxhYmVsYWJsZXNbMF07XG4gIGlmIChmaXJzdExhYmVsYWJsZS5kaXNhYmxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBmaXJzdExhYmVsYWJsZS5vbkxhYmVsQ2xpY2soZXZlbnQpO1xufVxuZnVuY3Rpb24gb25MYWJlbENvbm5lY3RlZCgpIHtcbiAgaWYgKHVubGFiZWxlZENvbXBvbmVudHMuaGFzKHRoaXMpKSB7XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICB9XG59XG5mdW5jdGlvbiBvbkxhYmVsRGlzY29ubmVjdGVkKCkge1xuICB1bmxhYmVsZWRDb21wb25lbnRzLmFkZCh0aGlzKTtcbiAgY29uc3QgYm91bmRPbkxhYmVsQ29ubmVjdGVkID0gb25MYWJlbENvbm5lY3RlZE1hcC5nZXQodGhpcykgfHwgb25MYWJlbENvbm5lY3RlZC5iaW5kKHRoaXMpO1xuICBvbkxhYmVsQ29ubmVjdGVkTWFwLnNldCh0aGlzLCBib3VuZE9uTGFiZWxDb25uZWN0ZWQpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIGJvdW5kT25MYWJlbENvbm5lY3RlZCk7XG59XG5cbmV4cG9ydCB7IGxhYmVsRGlzY29ubmVjdGVkRXZlbnQgYXMgYSwgY29ubmVjdExhYmVsIGFzIGMsIGRpc2Nvbm5lY3RMYWJlbCBhcyBkLCBnZXRMYWJlbFRleHQgYXMgZywgbGFiZWxDb25uZWN0ZWRFdmVudCBhcyBsIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgZW5zdXJlcyBvYnNlcnZlcnMgYXJlIGNyZWF0ZWQgb25seSBmb3IgYnJvd3NlciBjb250ZXh0cy5cbiAqXG4gKiBAcGFyYW0gdHlwZSAtIHRoZSB0eXBlIG9mIG9ic2VydmVyIHRvIGNyZWF0ZVxuICogQHBhcmFtIGNhbGxiYWNrIC0gdGhlIG9ic2VydmVyIGNhbGxiYWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIHRoZSBvYnNlcnZlciBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCBPYnNlcnZlciA9IGdldE9ic2VydmVyKHR5cGUpO1xuICByZXR1cm4gbmV3IE9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGdldE9ic2VydmVyKHR5cGUpIHtcbiAgLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNiNpc3N1ZWNvbW1lbnQtMTA0OTgxNDk0OFxuICBjbGFzcyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXIgZXh0ZW5kcyB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcbiAgICAgIHN1cGVyKGNhbGxiYWNrKTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICBvYnNlcnZlKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5LnB1c2goeyB0YXJnZXQsIG9wdGlvbnMgfSk7XG4gICAgICByZXR1cm4gc3VwZXIub2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICB1bm9ic2VydmUodGFyZ2V0KSB7XG4gICAgICBjb25zdCBuZXdPYnNlcnZlZEVudHJpZXMgPSB0aGlzLm9ic2VydmVkRW50cnkuZmlsdGVyKChvYnNlcnZlZCkgPT4gb2JzZXJ2ZWQudGFyZ2V0ICE9PSB0YXJnZXQpO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrKHN1cGVyLnRha2VSZWNvcmRzKCksIHRoaXMpO1xuICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICBuZXdPYnNlcnZlZEVudHJpZXMuZm9yRWFjaCgob2JzZXJ2ZWQpID0+IHRoaXMub2JzZXJ2ZShvYnNlcnZlZC50YXJnZXQsIG9ic2VydmVkLm9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0eXBlID09PSBcImludGVyc2VjdGlvblwiXG4gICAgICA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlclxuICAgICAgOiB0eXBlID09PSBcIm11dGF0aW9uXCJcbiAgICAgICAgPyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXJcbiAgICAgICAgOiB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIpO1xuICB9KSgpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVPYnNlcnZlciBhcyBjIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=