"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-dropdown-item_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-dropdown-item.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-dropdown-item.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteDropdownItem: () => (/* binding */ CalciteDropdownItem),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _resources2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources2.js */ "./node_modules/@esri/calcite-components/dist/components/resources2.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */







const dropdownItemCss = ".container--s{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}.container--s.container--none-selection{padding-inline-start:0.25rem}.container--s.container--none-selection .dropdown-link{padding-inline-start:0px}.container--m.container--none-selection{padding-inline-start:0.5rem}.container--m.container--none-selection .dropdown-link{padding-inline-start:0px}.container--l.container--none-selection{padding-inline-start:0.75rem}.container--l.container--none-selection .dropdown-link{padding-inline-start:0px}:host{position:relative;display:flex;flex-grow:1;align-items:center}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);text-align:start}.dropdown-item-content{flex:1 1 auto;padding-block:0.125rem;padding-inline-end:auto;padding-inline-start:0.25rem}:host,.container--link a{outline-color:transparent}:host(:focus){outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.container--link{padding:0px}.container--link a{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.container--s .dropdown-link{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m .dropdown-link{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l .dropdown-link{padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}:host(:hover) .container,:host(:active) .container{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration-line:none}:host(:hover) .container--link .dropdown-link,:host(:active) .container--link .dropdown-link{color:var(--calcite-ui-text-1)}:host(:focus) .container{color:var(--calcite-ui-text-1);text-decoration-line:none}:host(:active) .container{background-color:var(--calcite-ui-foreground-3)}:host(:hover) .container:before,:host(:active) .container:before,:host(:focus) .container:before{opacity:1}:host([selected]) .container:not(.container--none-selection),:host([selected]) .container--link .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selected]) .container:not(.container--none-selection):before,:host([selected]) .container--link .dropdown-link:before{opacity:1;color:var(--calcite-ui-brand)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .container--link .dropdown-link calcite-icon{color:var(--calcite-ui-brand)}.container--multi-selection:before,.container--none-selection:before{display:none}.container--s:before{inset-inline-start:0.5rem}.container--m:before{inset-inline-start:0.75rem}.container--l:before{inset-inline-start:1rem}.dropdown-item-icon{position:absolute;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(0.9)}.container--s .dropdown-item-icon{inset-inline-start:0.25rem}.container--m .dropdown-item-icon{inset-inline-start:0.5rem}.container--l .dropdown-item-icon{inset-inline-start:0.75rem}:host(:hover) .dropdown-item-icon{color:var(--calcite-ui-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-ui-brand);opacity:1}.container--s .dropdown-item-icon-start{margin-inline-end:0.5rem;margin-inline-start:0.25rem}.container--s .dropdown-item-icon-end{margin-inline-start:0.5rem}.container--m .dropdown-item-icon-start{margin-inline-end:0.75rem;margin-inline-start:0.25rem}.container--m .dropdown-item-icon-end{margin-inline-start:0.75rem}.container--l .dropdown-item-icon-start{margin-inline-end:1rem;margin-inline-start:0.25rem}.container--l .dropdown-item-icon-end{margin-inline-start:1rem}:host([hidden]){display:none}[hidden]{display:none}";

const DropdownItem = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteDropdownItemSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteDropdownItemSelect", 6);
    this.calciteInternalDropdownItemSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteInternalDropdownItemSelect", 6);
    this.calciteInternalDropdownItemKeyEvent = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteInternalDropdownItemKeyEvent", 6);
    this.calciteInternalDropdownCloseRequest = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteInternalDropdownCloseRequest", 6);
    this.selected = false;
    this.iconFlipRtl = undefined;
    this.iconStart = undefined;
    this.iconEnd = undefined;
    this.href = undefined;
    this.label = undefined;
    this.rel = undefined;
    this.target = undefined;
    this.selectionMode = "single";
    this.scale = "m";
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.el?.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    this.initialize();
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  connectedCallback() {
    this.initialize();
  }
  render() {
    const { href, selectionMode, label, iconFlipRtl, scale } = this;
    const iconStartEl = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("calcite-icon", { class: _resources2_js__WEBPACK_IMPORTED_MODULE_1__.C.iconStart, flipRtl: iconFlipRtl === "start" || iconFlipRtl === "both", icon: this.iconStart, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.scale) }));
    const contentNode = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", { class: _resources2_js__WEBPACK_IMPORTED_MODULE_1__.C.itemContent }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", null)));
    const iconEndEl = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("calcite-icon", { class: _resources2_js__WEBPACK_IMPORTED_MODULE_1__.C.iconEnd, flipRtl: iconFlipRtl === "end" || iconFlipRtl === "both", icon: this.iconEnd, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.scale) }));
    const slottedContent = this.iconStart && this.iconEnd
      ? [iconStartEl, contentNode, iconEndEl]
      : this.iconStart
        ? [iconStartEl, contentNode]
        : this.iconEnd
          ? [contentNode, iconEndEl]
          : contentNode;
    const contentEl = !href ? (slottedContent) : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("a", { "aria-label": label, class: _resources2_js__WEBPACK_IMPORTED_MODULE_1__.C.link, href: href, rel: this.rel, tabIndex: -1, target: this.target,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.childLink = el) }, slottedContent));
    const itemRole = href
      ? null
      : selectionMode === "single"
        ? "menuitemradio"
        : selectionMode === "multiple"
          ? "menuitemcheckbox"
          : "menuitem";
    const itemAria = selectionMode !== "none" ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.selected) : null;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.Host, { "aria-checked": itemAria, "aria-label": !href ? label : "", role: itemRole, tabindex: "0" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: {
        [_resources2_js__WEBPACK_IMPORTED_MODULE_1__.C.container]: true,
        [_resources2_js__WEBPACK_IMPORTED_MODULE_1__.C.containerLink]: !!href,
        [`${_resources2_js__WEBPACK_IMPORTED_MODULE_1__.C.container}--${scale}`]: true,
        [_resources2_js__WEBPACK_IMPORTED_MODULE_1__.C.containerMulti]: selectionMode === "multiple",
        [_resources2_js__WEBPACK_IMPORTED_MODULE_1__.C.containerSingle]: selectionMode === "single",
        [_resources2_js__WEBPACK_IMPORTED_MODULE_1__.C.containerNone]: selectionMode === "none",
      } }, selectionMode !== "none" ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("calcite-icon", { class: _resources2_js__WEBPACK_IMPORTED_MODULE_1__.C.icon, icon: selectionMode === "multiple" ? "check" : "bullet-point", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.scale) })) : null, contentEl)));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick() {
    this.emitRequestedItem();
  }
  keyDownHandler(event) {
    switch (event.key) {
      case " ":
      case "Enter":
        this.emitRequestedItem();
        if (this.href) {
          this.childLink.click();
        }
        event.preventDefault();
        break;
      case "Escape":
        this.calciteInternalDropdownCloseRequest.emit();
        event.preventDefault();
        break;
      case "Tab":
        this.calciteInternalDropdownItemKeyEvent.emit({ keyboardEvent: event });
        break;
      case "ArrowUp":
      case "ArrowDown":
      case "Home":
      case "End":
        event.preventDefault();
        this.calciteInternalDropdownItemKeyEvent.emit({ keyboardEvent: event });
        break;
    }
  }
  updateActiveItemOnChange(event) {
    const parentEmittedChange = event.composedPath().includes(this.parentDropdownGroupEl);
    if (parentEmittedChange) {
      this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
      this.requestedDropdownItem = event.detail.requestedDropdownItem;
      this.determineActiveItem();
    }
    event.stopPropagation();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  initialize() {
    this.parentDropdownGroupEl = this.el.closest("calcite-dropdown-group");
    if (this.selectionMode === "none") {
      this.selected = false;
    }
  }
  determineActiveItem() {
    switch (this.selectionMode) {
      case "multiple":
        if (this.el === this.requestedDropdownItem) {
          this.selected = !this.selected;
        }
        break;
      case "single":
        if (this.el === this.requestedDropdownItem) {
          this.selected = true;
        }
        else if (this.requestedDropdownGroup === this.parentDropdownGroupEl) {
          this.selected = false;
        }
        break;
      case "none":
        this.selected = false;
        break;
    }
  }
  emitRequestedItem() {
    this.calciteDropdownItemSelect.emit();
    this.calciteInternalDropdownItemSelect.emit({
      requestedDropdownItem: this.el,
      requestedDropdownGroup: this.parentDropdownGroupEl,
    });
  }
  get el() { return this; }
  static get style() { return dropdownItemCss; }
}, [1, "calcite-dropdown-item", {
    "selected": [1540],
    "iconFlipRtl": [513, "icon-flip-rtl"],
    "iconStart": [513, "icon-start"],
    "iconEnd": [513, "icon-end"],
    "href": [513],
    "label": [1],
    "rel": [513],
    "target": [513],
    "selectionMode": [1, "selection-mode"],
    "scale": [1],
    "setFocus": [64]
  }, [[0, "click", "onClick"], [0, "keydown", "keyDownHandler"], [16, "calciteInternalDropdownItemChange", "updateActiveItemOnChange"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-dropdown-item", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-dropdown-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DropdownItem);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteDropdownItem = DropdownItem;
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

/***/ "./node_modules/@esri/calcite-components/dist/components/loadable.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/loadable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ setUpLoadableComponent),
/* harmony export */   b: () => (/* binding */ componentLoaded),
/* harmony export */   c: () => (/* binding */ componentFocusable),
/* harmony export */   s: () => (/* binding */ setComponentLoaded)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const resolveMap = new WeakMap();
const promiseMap = new WeakMap();
/**
 * This helper util sets up the component for the ability to know when the component has been loaded.
 *
 * This should be used in the `componentWillLoad` lifecycle hook.
 *
 * ```
 * componentWillLoad(): void {
 *   setUpLoadableComponent(this);
 * }
 * ```
 *
 * @param component
 */
function setUpLoadableComponent(component) {
  promiseMap.set(component, new Promise((resolve) => resolveMap.set(component, resolve)));
}
/**
 * This helper util lets the loadable component know that it is now loaded.
 *
 * This should be used in the `componentDidLoad` lifecycle hook.
 *
 * ```
 * componentDidLoad(): void {
 *   setComponentLoaded(this);
 * }
 * ```
 *
 * @param component
 */
function setComponentLoaded(component) {
  resolveMap.get(component)();
}
/**
 * This helper util can be used to ensure a component has been loaded (The "componentDidLoad" Stencil lifecycle method has been called).
 *
 * Requires requires `LoadableComponent` to be implemented.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first.
 *
 * ```
 * async myMethod(): Promise<void> {
 *   await componentLoaded(this);
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
function componentLoaded(component) {
  return promiseMap.get(component);
}
/**
 * This helper util can be used to ensuring the component is loaded and rendered by the browser (The "componentDidLoad" Stencil lifecycle method has been called and any internal elements are focusable).
 *
 * Requires requires `LoadableComponent` to be implemented.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first and then an internal element be focused.
 *
 * ```
 * async setFocus(): Promise<void> {
 *   await componentFocusable(this);
 *   this.internalElement?.focus();
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
async function componentFocusable(component) {
  await componentLoaded(component);
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return;
  }
  (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.forceUpdate)(component);
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
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

/***/ "./node_modules/@esri/calcite-components/dist/components/resources2.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/resources2.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CSS)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const CSS = {
  container: "container",
  containerLink: "container--link",
  containerMulti: "container--multi-selection",
  containerSingle: "container--single-selection",
  containerNone: "container--none-selection",
  icon: "dropdown-item-icon",
  iconEnd: "dropdown-item-icon-end",
  iconStart: "dropdown-item-icon-start",
  itemContent: "dropdown-item-content",
  link: "dropdown-link",
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNDc3NjQ5MzU4ODgzZTRiYTA3YjdhY2E3MzMwZjIwY2MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytHO0FBQ2pFO0FBQ0g7QUFDbUU7QUFDM0Q7QUFDSTs7QUFFdkQsdUNBQXVDLHNCQUFzQixzQ0FBc0MsaUJBQWlCLDBCQUEwQiw0QkFBNEIsY0FBYyxxQkFBcUIsc0NBQXNDLGlCQUFpQiwyQkFBMkIsMEJBQTBCLGNBQWMsdUJBQXVCLHFDQUFxQyxvQkFBb0Isd0JBQXdCLDRCQUE0Qix3Q0FBd0MsNkJBQTZCLHVEQUF1RCx5QkFBeUIsd0NBQXdDLDRCQUE0Qix1REFBdUQseUJBQXlCLHdDQUF3Qyw2QkFBNkIsdURBQXVELHlCQUF5QixNQUFNLGtCQUFrQixhQUFhLFlBQVksbUJBQW1CLFdBQVcsa0JBQWtCLGFBQWEsWUFBWSxlQUFlLG1CQUFtQiwrQkFBK0IsMEJBQTBCLDBCQUEwQix3REFBd0QsaUJBQWlCLHVCQUF1QixjQUFjLHVCQUF1Qix3QkFBd0IsNkJBQTZCLHlCQUF5QiwwQkFBMEIsY0FBYyw4QkFBOEIsbUJBQW1CLHlFQUF5RSxxUEFBcVAsaUJBQWlCLFlBQVksbUJBQW1CLGtCQUFrQixhQUFhLFlBQVksZUFBZSxtQkFBbUIsK0JBQStCLDBCQUEwQiwwQkFBMEIsd0RBQXdELDZCQUE2QixzQkFBc0Isc0NBQXNDLGlCQUFpQiwwQkFBMEIsNEJBQTRCLDZCQUE2QixxQkFBcUIsc0NBQXNDLGlCQUFpQiwyQkFBMkIsMEJBQTBCLDZCQUE2QixzQkFBc0IscUNBQXFDLG9CQUFvQix3QkFBd0IsNEJBQTRCLG1EQUFtRCxnREFBZ0QsK0JBQStCLDBCQUEwQiw2RkFBNkYsK0JBQStCLHlCQUF5QiwrQkFBK0IsMEJBQTBCLDBCQUEwQixnREFBZ0QsaUdBQWlHLFVBQVUsK0dBQStHLDhDQUE4QywrQkFBK0IsNkhBQTZILFVBQVUsOEJBQThCLHlJQUF5SSw4QkFBOEIs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQSxFQUFFLG1GQUFXO0FBQ2I7QUFDQTs7QUFFK0c7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Ri9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlFQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRStCOzs7Ozs7Ozs7Ozs7Ozs7QUNsRC9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtZHJvcGRvd24taXRlbS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9pY29uLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sb2FkYWJsZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvb2JzZXJ2ZXJzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9yZXNvdXJjZXMyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgQyBhcyBDU1MgfSBmcm9tICcuL3Jlc291cmNlczIuanMnO1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRGb2N1c2FibGUsIGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0SWNvblNjYWxlIH0gZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL2ljb24uanMnO1xuXG5jb25zdCBkcm9wZG93bkl0ZW1Dc3MgPSBcIi5jb250YWluZXItLXN7cGFkZGluZy1ibG9jazowLjI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTtwYWRkaW5nLWlubGluZS1lbmQ6MC41cmVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OjEuNXJlbX0uY29udGFpbmVyLS1te3BhZGRpbmctYmxvY2s6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbTtwYWRkaW5nLWlubGluZS1lbmQ6MC43NXJlbTtwYWRkaW5nLWlubGluZS1zdGFydDoycmVtfS5jb250YWluZXItLWx7cGFkZGluZy1ibG9jazowLjYyNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbTtwYWRkaW5nLWlubGluZS1lbmQ6MXJlbTtwYWRkaW5nLWlubGluZS1zdGFydDoyLjVyZW19LmNvbnRhaW5lci0tcy5jb250YWluZXItLW5vbmUtc2VsZWN0aW9ue3BhZGRpbmctaW5saW5lLXN0YXJ0OjAuMjVyZW19LmNvbnRhaW5lci0tcy5jb250YWluZXItLW5vbmUtc2VsZWN0aW9uIC5kcm9wZG93bi1saW5re3BhZGRpbmctaW5saW5lLXN0YXJ0OjBweH0uY29udGFpbmVyLS1tLmNvbnRhaW5lci0tbm9uZS1zZWxlY3Rpb257cGFkZGluZy1pbmxpbmUtc3RhcnQ6MC41cmVtfS5jb250YWluZXItLW0uY29udGFpbmVyLS1ub25lLXNlbGVjdGlvbiAuZHJvcGRvd24tbGlua3twYWRkaW5nLWlubGluZS1zdGFydDowcHh9LmNvbnRhaW5lci0tbC5jb250YWluZXItLW5vbmUtc2VsZWN0aW9ue3BhZGRpbmctaW5saW5lLXN0YXJ0OjAuNzVyZW19LmNvbnRhaW5lci0tbC5jb250YWluZXItLW5vbmUtc2VsZWN0aW9uIC5kcm9wZG93bi1saW5re3BhZGRpbmctaW5saW5lLXN0YXJ0OjBweH06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjE7YWxpZ24taXRlbXM6Y2VudGVyfS5jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzoxO2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dGV4dC1hbGlnbjpzdGFydH0uZHJvcGRvd24taXRlbS1jb250ZW50e2ZsZXg6MSAxIGF1dG87cGFkZGluZy1ibG9jazowLjEyNXJlbTtwYWRkaW5nLWlubGluZS1lbmQ6YXV0bztwYWRkaW5nLWlubGluZS1zdGFydDowLjI1cmVtfTpob3N0LC5jb250YWluZXItLWxpbmsgYXtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0KDpmb2N1cyl7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0uY29udGFpbmVyLS1saW5re3BhZGRpbmc6MHB4fS5jb250YWluZXItLWxpbmsgYXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjE7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKX0uY29udGFpbmVyLS1zIC5kcm9wZG93bi1saW5re3BhZGRpbmctYmxvY2s6MC4yNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07cGFkZGluZy1pbmxpbmUtZW5kOjAuNXJlbTtwYWRkaW5nLWlubGluZS1zdGFydDoxLjVyZW19LmNvbnRhaW5lci0tbSAuZHJvcGRvd24tbGlua3twYWRkaW5nLWJsb2NrOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW07cGFkZGluZy1pbmxpbmUtZW5kOjAuNzVyZW07cGFkZGluZy1pbmxpbmUtc3RhcnQ6MnJlbX0uY29udGFpbmVyLS1sIC5kcm9wZG93bi1saW5re3BhZGRpbmctYmxvY2s6MC43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbTtwYWRkaW5nLWlubGluZS1lbmQ6MXJlbTtwYWRkaW5nLWlubGluZS1zdGFydDoyLjVyZW19Omhvc3QoOmhvdmVyKSAuY29udGFpbmVyLDpob3N0KDphY3RpdmUpIC5jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmV9Omhvc3QoOmhvdmVyKSAuY29udGFpbmVyLS1saW5rIC5kcm9wZG93bi1saW5rLDpob3N0KDphY3RpdmUpIC5jb250YWluZXItLWxpbmsgLmRyb3Bkb3duLWxpbmt7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KDpmb2N1cykgLmNvbnRhaW5lcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZX06aG9zdCg6YWN0aXZlKSAuY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfTpob3N0KDpob3ZlcikgLmNvbnRhaW5lcjpiZWZvcmUsOmhvc3QoOmFjdGl2ZSkgLmNvbnRhaW5lcjpiZWZvcmUsOmhvc3QoOmZvY3VzKSAuY29udGFpbmVyOmJlZm9yZXtvcGFjaXR5OjF9Omhvc3QoW3NlbGVjdGVkXSkgLmNvbnRhaW5lcjpub3QoLmNvbnRhaW5lci0tbm9uZS1zZWxlY3Rpb24pLDpob3N0KFtzZWxlY3RlZF0pIC5jb250YWluZXItLWxpbmsgLmRyb3Bkb3duLWxpbmt7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbc2VsZWN0ZWRdKSAuY29udGFpbmVyOm5vdCguY29udGFpbmVyLS1ub25lLXNlbGVjdGlvbik6YmVmb3JlLDpob3N0KFtzZWxlY3RlZF0pIC5jb250YWluZXItLWxpbmsgLmRyb3Bkb3duLWxpbms6YmVmb3Jle29wYWNpdHk6MTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbc2VsZWN0ZWRdKSAuY29udGFpbmVyOm5vdCguY29udGFpbmVyLS1ub25lLXNlbGVjdGlvbikgY2FsY2l0ZS1pY29uLDpob3N0KFtzZWxlY3RlZF0pIC5jb250YWluZXItLWxpbmsgLmRyb3Bkb3duLWxpbmsgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS5jb250YWluZXItLW11bHRpLXNlbGVjdGlvbjpiZWZvcmUsLmNvbnRhaW5lci0tbm9uZS1zZWxlY3Rpb246YmVmb3Jle2Rpc3BsYXk6bm9uZX0uY29udGFpbmVyLS1zOmJlZm9yZXtpbnNldC1pbmxpbmUtc3RhcnQ6MC41cmVtfS5jb250YWluZXItLW06YmVmb3Jle2luc2V0LWlubGluZS1zdGFydDowLjc1cmVtfS5jb250YWluZXItLWw6YmVmb3Jle2luc2V0LWlubGluZS1zdGFydDoxcmVtfS5kcm9wZG93bi1pdGVtLWljb257cG9zaXRpb246YWJzb2x1dGU7b3BhY2l0eTowO3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2Zvcm06c2NhbGUoMC45KX0uY29udGFpbmVyLS1zIC5kcm9wZG93bi1pdGVtLWljb257aW5zZXQtaW5saW5lLXN0YXJ0OjAuMjVyZW19LmNvbnRhaW5lci0tbSAuZHJvcGRvd24taXRlbS1pY29ue2luc2V0LWlubGluZS1zdGFydDowLjVyZW19LmNvbnRhaW5lci0tbCAuZHJvcGRvd24taXRlbS1pY29ue2luc2V0LWlubGluZS1zdGFydDowLjc1cmVtfTpob3N0KDpob3ZlcikgLmRyb3Bkb3duLWl0ZW0taWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKTtvcGFjaXR5OjF9Omhvc3QoW3NlbGVjdGVkXSkgLmRyb3Bkb3duLWl0ZW0taWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtvcGFjaXR5OjF9LmNvbnRhaW5lci0tcyAuZHJvcGRvd24taXRlbS1pY29uLXN0YXJ0e21hcmdpbi1pbmxpbmUtZW5kOjAuNXJlbTttYXJnaW4taW5saW5lLXN0YXJ0OjAuMjVyZW19LmNvbnRhaW5lci0tcyAuZHJvcGRvd24taXRlbS1pY29uLWVuZHttYXJnaW4taW5saW5lLXN0YXJ0OjAuNXJlbX0uY29udGFpbmVyLS1tIC5kcm9wZG93bi1pdGVtLWljb24tc3RhcnR7bWFyZ2luLWlubGluZS1lbmQ6MC43NXJlbTttYXJnaW4taW5saW5lLXN0YXJ0OjAuMjVyZW19LmNvbnRhaW5lci0tbSAuZHJvcGRvd24taXRlbS1pY29uLWVuZHttYXJnaW4taW5saW5lLXN0YXJ0OjAuNzVyZW19LmNvbnRhaW5lci0tbCAuZHJvcGRvd24taXRlbS1pY29uLXN0YXJ0e21hcmdpbi1pbmxpbmUtZW5kOjFyZW07bWFyZ2luLWlubGluZS1zdGFydDowLjI1cmVtfS5jb250YWluZXItLWwgLmRyb3Bkb3duLWl0ZW0taWNvbi1lbmR7bWFyZ2luLWlubGluZS1zdGFydDoxcmVtfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBEcm9wZG93bkl0ZW0gPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZURyb3Bkb3duSXRlbVNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZURyb3Bkb3duSXRlbVNlbGVjdFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbVNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsRHJvcGRvd25JdGVtU2VsZWN0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRHJvcGRvd25JdGVtS2V5RXZlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbUtleUV2ZW50XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRHJvcGRvd25DbG9zZVJlcXVlc3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbERyb3Bkb3duQ2xvc2VSZXF1ZXN0XCIsIDYpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvblN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbkVuZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhyZWYgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPSBcInNpbmdsZVwiO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICB0aGlzLmVsPy5mb2N1cygpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaHJlZiwgc2VsZWN0aW9uTW9kZSwgbGFiZWwsIGljb25GbGlwUnRsLCBzY2FsZSB9ID0gdGhpcztcbiAgICBjb25zdCBpY29uU3RhcnRFbCA9IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IENTUy5pY29uU3RhcnQsIGZsaXBSdGw6IGljb25GbGlwUnRsID09PSBcInN0YXJ0XCIgfHwgaWNvbkZsaXBSdGwgPT09IFwiYm90aFwiLCBpY29uOiB0aGlzLmljb25TdGFydCwgc2NhbGU6IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKSB9KSk7XG4gICAgY29uc3QgY29udGVudE5vZGUgPSAoaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLml0ZW1Db250ZW50IH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgY29uc3QgaWNvbkVuZEVsID0gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogQ1NTLmljb25FbmQsIGZsaXBSdGw6IGljb25GbGlwUnRsID09PSBcImVuZFwiIHx8IGljb25GbGlwUnRsID09PSBcImJvdGhcIiwgaWNvbjogdGhpcy5pY29uRW5kLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKTtcbiAgICBjb25zdCBzbG90dGVkQ29udGVudCA9IHRoaXMuaWNvblN0YXJ0ICYmIHRoaXMuaWNvbkVuZFxuICAgICAgPyBbaWNvblN0YXJ0RWwsIGNvbnRlbnROb2RlLCBpY29uRW5kRWxdXG4gICAgICA6IHRoaXMuaWNvblN0YXJ0XG4gICAgICAgID8gW2ljb25TdGFydEVsLCBjb250ZW50Tm9kZV1cbiAgICAgICAgOiB0aGlzLmljb25FbmRcbiAgICAgICAgICA/IFtjb250ZW50Tm9kZSwgaWNvbkVuZEVsXVxuICAgICAgICAgIDogY29udGVudE5vZGU7XG4gICAgY29uc3QgY29udGVudEVsID0gIWhyZWYgPyAoc2xvdHRlZENvbnRlbnQpIDogKGgoXCJhXCIsIHsgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLCBjbGFzczogQ1NTLmxpbmssIGhyZWY6IGhyZWYsIHJlbDogdGhpcy5yZWwsIHRhYkluZGV4OiAtMSwgdGFyZ2V0OiB0aGlzLnRhcmdldCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuY2hpbGRMaW5rID0gZWwpIH0sIHNsb3R0ZWRDb250ZW50KSk7XG4gICAgY29uc3QgaXRlbVJvbGUgPSBocmVmXG4gICAgICA/IG51bGxcbiAgICAgIDogc2VsZWN0aW9uTW9kZSA9PT0gXCJzaW5nbGVcIlxuICAgICAgICA/IFwibWVudWl0ZW1yYWRpb1wiXG4gICAgICAgIDogc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aXBsZVwiXG4gICAgICAgICAgPyBcIm1lbnVpdGVtY2hlY2tib3hcIlxuICAgICAgICAgIDogXCJtZW51aXRlbVwiO1xuICAgIGNvbnN0IGl0ZW1BcmlhID0gc2VsZWN0aW9uTW9kZSAhPT0gXCJub25lXCIgPyB0b0FyaWFCb29sZWFuKHRoaXMuc2VsZWN0ZWQpIDogbnVsbDtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtY2hlY2tlZFwiOiBpdGVtQXJpYSwgXCJhcmlhLWxhYmVsXCI6ICFocmVmID8gbGFiZWwgOiBcIlwiLCByb2xlOiBpdGVtUm9sZSwgdGFiaW5kZXg6IFwiMFwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmNvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1MuY29udGFpbmVyTGlua106ICEhaHJlZixcbiAgICAgICAgW2Ake0NTUy5jb250YWluZXJ9LS0ke3NjYWxlfWBdOiB0cnVlLFxuICAgICAgICBbQ1NTLmNvbnRhaW5lck11bHRpXTogc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aXBsZVwiLFxuICAgICAgICBbQ1NTLmNvbnRhaW5lclNpbmdsZV06IHNlbGVjdGlvbk1vZGUgPT09IFwic2luZ2xlXCIsXG4gICAgICAgIFtDU1MuY29udGFpbmVyTm9uZV06IHNlbGVjdGlvbk1vZGUgPT09IFwibm9uZVwiLFxuICAgICAgfSB9LCBzZWxlY3Rpb25Nb2RlICE9PSBcIm5vbmVcIiA/IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IENTUy5pY29uLCBpY29uOiBzZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpcGxlXCIgPyBcImNoZWNrXCIgOiBcImJ1bGxldC1wb2ludFwiLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSA6IG51bGwsIGNvbnRlbnRFbCkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuZW1pdFJlcXVlc3RlZEl0ZW0oKTtcbiAgfVxuICBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlIFwiIFwiOlxuICAgICAgY2FzZSBcIkVudGVyXCI6XG4gICAgICAgIHRoaXMuZW1pdFJlcXVlc3RlZEl0ZW0oKTtcbiAgICAgICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgICAgIHRoaXMuY2hpbGRMaW5rLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRHJvcGRvd25DbG9zZVJlcXVlc3QuZW1pdCgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJUYWJcIjpcbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEcm9wZG93bkl0ZW1LZXlFdmVudC5lbWl0KHsga2V5Ym9hcmRFdmVudDogZXZlbnQgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICBjYXNlIFwiRW5kXCI6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRHJvcGRvd25JdGVtS2V5RXZlbnQuZW1pdCh7IGtleWJvYXJkRXZlbnQ6IGV2ZW50IH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgdXBkYXRlQWN0aXZlSXRlbU9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgcGFyZW50RW1pdHRlZENoYW5nZSA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKHRoaXMucGFyZW50RHJvcGRvd25Hcm91cEVsKTtcbiAgICBpZiAocGFyZW50RW1pdHRlZENoYW5nZSkge1xuICAgICAgdGhpcy5yZXF1ZXN0ZWREcm9wZG93bkdyb3VwID0gZXZlbnQuZGV0YWlsLnJlcXVlc3RlZERyb3Bkb3duR3JvdXA7XG4gICAgICB0aGlzLnJlcXVlc3RlZERyb3Bkb3duSXRlbSA9IGV2ZW50LmRldGFpbC5yZXF1ZXN0ZWREcm9wZG93bkl0ZW07XG4gICAgICB0aGlzLmRldGVybWluZUFjdGl2ZUl0ZW0oKTtcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLnBhcmVudERyb3Bkb3duR3JvdXBFbCA9IHRoaXMuZWwuY2xvc2VzdChcImNhbGNpdGUtZHJvcGRvd24tZ3JvdXBcIik7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJub25lXCIpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZGV0ZXJtaW5lQWN0aXZlSXRlbSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0aW9uTW9kZSkge1xuICAgICAgY2FzZSBcIm11bHRpcGxlXCI6XG4gICAgICAgIGlmICh0aGlzLmVsID09PSB0aGlzLnJlcXVlc3RlZERyb3Bkb3duSXRlbSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzaW5nbGVcIjpcbiAgICAgICAgaWYgKHRoaXMuZWwgPT09IHRoaXMucmVxdWVzdGVkRHJvcGRvd25JdGVtKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5yZXF1ZXN0ZWREcm9wZG93bkdyb3VwID09PSB0aGlzLnBhcmVudERyb3Bkb3duR3JvdXBFbCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJub25lXCI6XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGVtaXRSZXF1ZXN0ZWRJdGVtKCkge1xuICAgIHRoaXMuY2FsY2l0ZURyb3Bkb3duSXRlbVNlbGVjdC5lbWl0KCk7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEcm9wZG93bkl0ZW1TZWxlY3QuZW1pdCh7XG4gICAgICByZXF1ZXN0ZWREcm9wZG93bkl0ZW06IHRoaXMuZWwsXG4gICAgICByZXF1ZXN0ZWREcm9wZG93bkdyb3VwOiB0aGlzLnBhcmVudERyb3Bkb3duR3JvdXBFbCxcbiAgICB9KTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBkcm9wZG93bkl0ZW1Dc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtZHJvcGRvd24taXRlbVwiLCB7XG4gICAgXCJzZWxlY3RlZFwiOiBbMTU0MF0sXG4gICAgXCJpY29uRmxpcFJ0bFwiOiBbNTEzLCBcImljb24tZmxpcC1ydGxcIl0sXG4gICAgXCJpY29uU3RhcnRcIjogWzUxMywgXCJpY29uLXN0YXJ0XCJdLFxuICAgIFwiaWNvbkVuZFwiOiBbNTEzLCBcImljb24tZW5kXCJdLFxuICAgIFwiaHJlZlwiOiBbNTEzXSxcbiAgICBcImxhYmVsXCI6IFsxXSxcbiAgICBcInJlbFwiOiBbNTEzXSxcbiAgICBcInRhcmdldFwiOiBbNTEzXSxcbiAgICBcInNlbGVjdGlvbk1vZGVcIjogWzEsIFwic2VsZWN0aW9uLW1vZGVcIl0sXG4gICAgXCJzY2FsZVwiOiBbMV0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdXG4gIH0sIFtbMCwgXCJjbGlja1wiLCBcIm9uQ2xpY2tcIl0sIFswLCBcImtleWRvd25cIiwgXCJrZXlEb3duSGFuZGxlclwiXSwgWzE2LCBcImNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbUNoYW5nZVwiLCBcInVwZGF0ZUFjdGl2ZUl0ZW1PbkNoYW5nZVwiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1kcm9wZG93bi1pdGVtXCIsIFwiY2FsY2l0ZS1pY29uXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWRyb3Bkb3duLWl0ZW1cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBEcm9wZG93bkl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlRHJvcGRvd25JdGVtID0gRHJvcGRvd25JdGVtO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZURyb3Bkb3duSXRlbSwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuZnVuY3Rpb24gZ2V0SWNvblNjYWxlKGNvbXBvbmVudFNjYWxlKSB7XG4gIHJldHVybiBjb21wb25lbnRTY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiO1xufVxuXG5leHBvcnQgeyBnZXRJY29uU2NhbGUgYXMgZyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZ2V0QXNzZXRQYXRoLCBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBoLCBIb3N0LCBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0RWxlbWVudERpciwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBpY29uOiBcImljb25cIixcbiAgZmxpcFJ0bDogXCJmbGlwLXJ0bFwiLFxufTtcblxuLyoqXG4gKiBJY29uIGRhdGEgY2FjaGUuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBpY29uQ2FjaGUgPSB7fTtcbi8qKlxuICogSWNvbiByZXF1ZXN0IGNhY2hlLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgcmVxdWVzdENhY2hlID0ge307XG5jb25zdCBzY2FsZVRvUHggPSB7XG4gIHM6IDE2LFxuICBtOiAyNCxcbiAgbDogMzIsXG59O1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hJY29uKHsgaWNvbiwgc2NhbGUgfSkge1xuICBjb25zdCBzaXplID0gc2NhbGVUb1B4W3NjYWxlXTtcbiAgY29uc3QgbmFtZSA9IG5vcm1hbGl6ZUljb25OYW1lKGljb24pO1xuICBjb25zdCBmaWxsZWQgPSBuYW1lLmNoYXJBdChuYW1lLmxlbmd0aCAtIDEpID09PSBcIkZcIjtcbiAgY29uc3QgaWNvbk5hbWUgPSBmaWxsZWQgPyBuYW1lLnN1YnN0cmluZygwLCBuYW1lLmxlbmd0aCAtIDEpIDogbmFtZTtcbiAgY29uc3QgaWQgPSBgJHtpY29uTmFtZX0ke3NpemV9JHtmaWxsZWQgPyBcIkZcIiA6IFwiXCJ9YDtcbiAgaWYgKGljb25DYWNoZVtpZF0pIHtcbiAgICByZXR1cm4gaWNvbkNhY2hlW2lkXTtcbiAgfVxuICBpZiAoIXJlcXVlc3RDYWNoZVtpZF0pIHtcbiAgICByZXF1ZXN0Q2FjaGVbaWRdID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy9pY29uLyR7aWR9Lmpzb25gKSlcbiAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGBcIiR7aWR9XCIgaXMgbm90IGEgdmFsaWQgY2FsY2l0ZS11aS1pY29uIG5hbWVgKTtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHBhdGggPSBhd2FpdCByZXF1ZXN0Q2FjaGVbaWRdO1xuICBpY29uQ2FjaGVbaWRdID0gcGF0aDtcbiAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgaWNvbiBuYW1lIHRvIG1hdGNoIHRoZSBwYXRoIGRhdGEgbW9kdWxlIGV4cG9ydHMuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcGFyYW0gbmFtZSDigJMgYW4gaWNvbiBuYW1lIHRoYXQgY2FuIGJlIGVpdGhlciBrZWJhYiBvciBjYW1lbC1jYXNlZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplSWNvbk5hbWUobmFtZSkge1xuICBjb25zdCBudW1iZXJMZWFkaW5nTmFtZSA9ICFpc05hTihOdW1iZXIobmFtZS5jaGFyQXQoMCkpKTtcbiAgY29uc3QgcGFydHMgPSBuYW1lLnNwbGl0KFwiLVwiKTtcbiAgY29uc3Qga2ViYWJDYXNlZCA9IHBhcnRzLmxlbmd0aCA+IDA7XG4gIGlmIChrZWJhYkNhc2VkKSB7XG4gICAgY29uc3QgZmlyc3ROb25EaWdpdEluUGFydFBhdHRlcm4gPSAvW2Etel0vaTtcbiAgICBuYW1lID0gcGFydHNcbiAgICAgIC5tYXAoKHBhcnQsIHBhcnRJbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHBhcnQucmVwbGFjZShmaXJzdE5vbkRpZ2l0SW5QYXJ0UGF0dGVybiwgZnVuY3Rpb24gcmVwbGFjZXIobWF0Y2gsIG9mZnNldCkge1xuICAgICAgICBjb25zdCBpc0ZpcnN0Q2hhckluTmFtZSA9IHBhcnRJbmRleCA9PT0gMCAmJiBvZmZzZXQgPT09IDA7XG4gICAgICAgIGlmIChpc0ZpcnN0Q2hhckluTmFtZSkge1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2gudG9VcHBlckNhc2UoKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgICAuam9pbihcIlwiKTtcbiAgfVxuICByZXR1cm4gbnVtYmVyTGVhZGluZ05hbWUgPyBgaSR7bmFtZX1gIDogbmFtZTtcbn1cblxuY29uc3QgaWNvbkNzcyA9IFwiOmhvc3R7ZGlzcGxheTppbmxpbmUtZmxleDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWljb24tY29sb3IpfTpob3N0KFtzY2FsZT1zXSl7aW5saW5lLXNpemU6MTZweDtibG9jay1zaXplOjE2cHg7bWluLWlubGluZS1zaXplOjE2cHg7bWluLWJsb2NrLXNpemU6MTZweH06aG9zdChbc2NhbGU9bV0pe2lubGluZS1zaXplOjI0cHg7YmxvY2stc2l6ZToyNHB4O21pbi1pbmxpbmUtc2l6ZToyNHB4O21pbi1ibG9jay1zaXplOjI0cHh9Omhvc3QoW3NjYWxlPWxdKXtpbmxpbmUtc2l6ZTozMnB4O2Jsb2NrLXNpemU6MzJweDttaW4taW5saW5lLXNpemU6MzJweDttaW4tYmxvY2stc2l6ZTozMnB4fS5mbGlwLXJ0bHt0cmFuc2Zvcm06c2NhbGVYKC0xKX0uc3Zne2Rpc3BsYXk6YmxvY2t9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IEljb24gPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuaWNvbiA9IG51bGw7XG4gICAgdGhpcy5mbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudGV4dExhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGF0aERhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy53YWl0VW50aWxWaXNpYmxlKCgpID0+IHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmxvYWRJY29uUGF0aERhdGEoKTtcbiAgICB9KTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5sb2FkSWNvblBhdGhEYXRhKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWwsIGZsaXBSdGwsIHBhdGhEYXRhLCBzY2FsZSwgdGV4dExhYmVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIoZWwpO1xuICAgIGNvbnN0IHNpemUgPSBzY2FsZVRvUHhbc2NhbGVdO1xuICAgIGNvbnN0IHNlbWFudGljID0gISF0ZXh0TGFiZWw7XG4gICAgY29uc3QgcGF0aHMgPSBbXS5jb25jYXQocGF0aERhdGEgfHwgXCJcIik7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWhpZGRlblwiOiB0b0FyaWFCb29sZWFuKCFzZW1hbnRpYyksIFwiYXJpYS1sYWJlbFwiOiBzZW1hbnRpYyA/IHRleHRMYWJlbCA6IG51bGwsIHJvbGU6IHNlbWFudGljID8gXCJpbWdcIiA6IG51bGwgfSwgaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuZmxpcFJ0bF06IGRpciA9PT0gXCJydGxcIiAmJiBmbGlwUnRsLFxuICAgICAgICBzdmc6IHRydWUsXG4gICAgICB9LCBmaWxsOiBcImN1cnJlbnRDb2xvclwiLCBoZWlnaHQ6IFwiMTAwJVwiLCB2aWV3Qm94OiBgMCAwICR7c2l6ZX0gJHtzaXplfWAsIHdpZHRoOiBcIjEwMCVcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LCBwYXRocy5tYXAoKHBhdGgpID0+IHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiID8gKGgoXCJwYXRoXCIsIHsgZDogcGF0aCB9KSkgOiAoaChcInBhdGhcIiwgeyBkOiBwYXRoLmQsIG9wYWNpdHk6IFwib3BhY2l0eVwiIGluIHBhdGggPyBwYXRoLm9wYWNpdHkgOiAxIH0pKSkpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmMgbG9hZEljb25QYXRoRGF0YSgpIHtcbiAgICBjb25zdCB7IGljb24sIHNjYWxlLCB2aXNpYmxlIH0gPSB0aGlzO1xuICAgIGlmICghQnVpbGQuaXNCcm93c2VyIHx8ICFpY29uIHx8ICF2aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhdGhEYXRhID0gYXdhaXQgZmV0Y2hJY29uKHsgaWNvbiwgc2NhbGUgfSk7XG4gICAgLy8gV2hpbGUgdGhlIGZldGNoSWNvbiBtZXRob2QgaXMgYXdhaXRpbmcgcmVzcG9uc2UsIHRoZSBpY29uIHJlcXVlc3RlZCBjYW4gY2hhbmdlLiBUaGlzIGNoZWNrIGlzIHRvIHZlcmlmeSB0aGUgcmVzcG9uc2UgcmVjZWl2ZWQgYmVsb25ncyB0byB0aGUgY3VycmVudCBpY29uLlxuICAgIGlmIChpY29uICE9PSB0aGlzLmljb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wYXRoRGF0YSA9IHBhdGhEYXRhO1xuICB9XG4gIHdhaXRVbnRpbFZpc2libGUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJpbnRlcnNlY3Rpb25cIiwgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgeyByb290TWFyZ2luOiBcIjUwcHhcIiB9KTtcbiAgICBpZiAoIXRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiaWNvblwiOiBbXCJsb2FkSWNvblBhdGhEYXRhXCJdLFxuICAgIFwic2NhbGVcIjogW1wibG9hZEljb25QYXRoRGF0YVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBpY29uQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWljb25cIiwge1xuICAgIFwiaWNvblwiOiBbNTEzXSxcbiAgICBcImZsaXBSdGxcIjogWzUxNiwgXCJmbGlwLXJ0bFwiXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwidGV4dExhYmVsXCI6IFsxLCBcInRleHQtbGFiZWxcIl0sXG4gICAgXCJwYXRoRGF0YVwiOiBbMzJdLFxuICAgIFwidmlzaWJsZVwiOiBbMzJdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtaWNvblwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgSWNvbik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgSWNvbiBhcyBJLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkLCBmb3JjZVVwZGF0ZSB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuY29uc3QgcmVzb2x2ZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBwcm9taXNlTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBzZXRzIHVwIHRoZSBjb21wb25lbnQgZm9yIHRoZSBhYmlsaXR5IHRvIGtub3cgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50V2lsbExvYWQoKTogdm9pZCB7XG4gKiAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldFVwTG9hZGFibGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHByb21pc2VNYXAuc2V0KGNvbXBvbmVudCwgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmVNYXAuc2V0KGNvbXBvbmVudCwgcmVzb2x2ZSkpKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBsZXRzIHRoZSBsb2FkYWJsZSBjb21wb25lbnQga25vdyB0aGF0IGl0IGlzIG5vdyBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50RGlkTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRDb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJlc29sdmVNYXAuZ2V0KGNvbXBvbmVudCkoKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmUgYSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgU3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCkuXG4gKlxuICogUmVxdWlyZXMgcmVxdWlyZXMgYExvYWRhYmxlQ29tcG9uZW50YCB0byBiZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0LlxuICpcbiAqIGBgYFxuICogYXN5bmMgbXlNZXRob2QoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXR1cm4gcHJvbWlzZU1hcC5nZXQoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmluZyB0aGUgY29tcG9uZW50IGlzIGxvYWRlZCBhbmQgcmVuZGVyZWQgYnkgdGhlIGJyb3dzZXIgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBTdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkIGFuZCBhbnkgaW50ZXJuYWwgZWxlbWVudHMgYXJlIGZvY3VzYWJsZSkuXG4gKlxuICogUmVxdWlyZXMgcmVxdWlyZXMgYExvYWRhYmxlQ29tcG9uZW50YCB0byBiZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0IGFuZCB0aGVuIGFuIGludGVybmFsIGVsZW1lbnQgYmUgZm9jdXNlZC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIHNldEZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gKiAgIHRoaXMuaW50ZXJuYWxFbGVtZW50Py5mb2N1cygpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5hc3luYyBmdW5jdGlvbiBjb21wb25lbnRGb2N1c2FibGUoY29tcG9uZW50KSB7XG4gIGF3YWl0IGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpO1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybjtcbiAgfVxuICBmb3JjZVVwZGF0ZShjb21wb25lbnQpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpKTtcbn1cblxuZXhwb3J0IHsgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCBhcyBhLCBjb21wb25lbnRMb2FkZWQgYXMgYiwgY29tcG9uZW50Rm9jdXNhYmxlIGFzIGMsIHNldENvbXBvbmVudExvYWRlZCBhcyBzIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgZW5zdXJlcyBvYnNlcnZlcnMgYXJlIGNyZWF0ZWQgb25seSBmb3IgYnJvd3NlciBjb250ZXh0cy5cbiAqXG4gKiBAcGFyYW0gdHlwZSAtIHRoZSB0eXBlIG9mIG9ic2VydmVyIHRvIGNyZWF0ZVxuICogQHBhcmFtIGNhbGxiYWNrIC0gdGhlIG9ic2VydmVyIGNhbGxiYWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIHRoZSBvYnNlcnZlciBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCBPYnNlcnZlciA9IGdldE9ic2VydmVyKHR5cGUpO1xuICByZXR1cm4gbmV3IE9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGdldE9ic2VydmVyKHR5cGUpIHtcbiAgLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNiNpc3N1ZWNvbW1lbnQtMTA0OTgxNDk0OFxuICBjbGFzcyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXIgZXh0ZW5kcyB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcbiAgICAgIHN1cGVyKGNhbGxiYWNrKTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICBvYnNlcnZlKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5LnB1c2goeyB0YXJnZXQsIG9wdGlvbnMgfSk7XG4gICAgICByZXR1cm4gc3VwZXIub2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICB1bm9ic2VydmUodGFyZ2V0KSB7XG4gICAgICBjb25zdCBuZXdPYnNlcnZlZEVudHJpZXMgPSB0aGlzLm9ic2VydmVkRW50cnkuZmlsdGVyKChvYnNlcnZlZCkgPT4gb2JzZXJ2ZWQudGFyZ2V0ICE9PSB0YXJnZXQpO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrKHN1cGVyLnRha2VSZWNvcmRzKCksIHRoaXMpO1xuICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICBuZXdPYnNlcnZlZEVudHJpZXMuZm9yRWFjaCgob2JzZXJ2ZWQpID0+IHRoaXMub2JzZXJ2ZShvYnNlcnZlZC50YXJnZXQsIG9ic2VydmVkLm9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0eXBlID09PSBcImludGVyc2VjdGlvblwiXG4gICAgICA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlclxuICAgICAgOiB0eXBlID09PSBcIm11dGF0aW9uXCJcbiAgICAgICAgPyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXJcbiAgICAgICAgOiB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIpO1xuICB9KSgpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVPYnNlcnZlciBhcyBjIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgY29udGFpbmVyTGluazogXCJjb250YWluZXItLWxpbmtcIixcbiAgY29udGFpbmVyTXVsdGk6IFwiY29udGFpbmVyLS1tdWx0aS1zZWxlY3Rpb25cIixcbiAgY29udGFpbmVyU2luZ2xlOiBcImNvbnRhaW5lci0tc2luZ2xlLXNlbGVjdGlvblwiLFxuICBjb250YWluZXJOb25lOiBcImNvbnRhaW5lci0tbm9uZS1zZWxlY3Rpb25cIixcbiAgaWNvbjogXCJkcm9wZG93bi1pdGVtLWljb25cIixcbiAgaWNvbkVuZDogXCJkcm9wZG93bi1pdGVtLWljb24tZW5kXCIsXG4gIGljb25TdGFydDogXCJkcm9wZG93bi1pdGVtLWljb24tc3RhcnRcIixcbiAgaXRlbUNvbnRlbnQ6IFwiZHJvcGRvd24taXRlbS1jb250ZW50XCIsXG4gIGxpbms6IFwiZHJvcGRvd24tbGlua1wiLFxufTtcblxuZXhwb3J0IHsgQ1NTIGFzIEMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==