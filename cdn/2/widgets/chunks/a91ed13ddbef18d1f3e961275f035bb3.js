"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-block-section_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-block-section.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-block-section.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteBlockSection: () => (/* binding */ CalciteBlockSection),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _label_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./label.js */ "./node_modules/@esri/calcite-components/dist/components/label.js");
/* harmony import */ var _switch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./switch.js */ "./node_modules/@esri/calcite-components/dist/components/switch.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */










const IDS = {
  content: "content",
  toggle: "toggle",
};
const CSS = {
  content: "content",
  focusGuard: "focus-guard",
  invalid: "invalid",
  sectionHeader: "section-header",
  sectionHeaderText: "section-header__text",
  statusIcon: "status-icon",
  toggle: "toggle",
  toggleSwitch: "toggle--switch",
  toggleSwitchContainer: "toggle--switch-container",
  toggleSwitchContent: "toggle--switch__content",
  toggleSwitchText: "toggle--switch__text",
  valid: "valid",
};
const ICONS = {
  menuOpen: "chevron-down",
  menuClosedLeft: "chevron-left",
  menuClosedRight: "chevron-right",
  valid: "check-circle",
  invalid: "exclamation-mark-triangle",
};

const blockSectionCss = ":host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host([open]){border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}:host(:last-child){border-block-end-width:0px}.toggle{inline-size:100%;border-width:0px;background-color:transparent;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}.toggle--switch,.section-header{margin-inline:0px;margin-block:0.25rem;display:flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;padding-inline:0px;padding-block:0.5rem;font-size:var(--calcite-font-size--1);outline-color:transparent}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{align-self:flex-end}.section-header__text{margin-inline:0.75rem;margin-block:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle--switch-container{position:relative;display:flex;inline-size:100%;align-items:center;background-color:transparent;word-break:break-word}.toggle--switch-container .focus-guard{--calcite-label-margin-bottom:0;pointer-events:none;position:absolute;inset-inline-end:0;margin-inline-start:0.25rem}.toggle--switch .status-icon{margin-inline-start:0.5rem}.toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}:host([toggle-display=switch]) .toggle .toggle--switch__content{margin-inline-end:1.75rem}:host([hidden]){display:none}[hidden]{display:none}";

const BlockSection = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteBlockSectionToggle = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteBlockSectionToggle", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleHeaderKeyDown = (event) => {
      if ((0,_key_js__WEBPACK_IMPORTED_MODULE_1__.i)(event.key)) {
        this.toggleSection();
        event.preventDefault();
        event.stopPropagation();
      }
    };
    this.toggleSection = () => {
      this.open = !this.open;
      this.calciteBlockSectionToggle.emit();
    };
    this.open = false;
    this.status = undefined;
    this.text = undefined;
    this.toggleDisplay = "button";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Sets focus on the component's first tabbable element.
   *
   */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.el);
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderStatusIcon() {
    const { status } = this;
    const statusIcon = ICONS[status] ?? false;
    const statusIconClasses = {
      [CSS.statusIcon]: true,
      [CSS.valid]: status == "valid",
      [CSS.invalid]: status == "invalid",
    };
    return !!statusIcon ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-icon", { class: statusIconClasses, icon: statusIcon, scale: "s" })) : null;
  }
  render() {
    const { el, messages, open, text, toggleDisplay } = this;
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(el);
    const arrowIcon = open
      ? ICONS.menuOpen
      : dir === "rtl"
        ? ICONS.menuClosedLeft
        : ICONS.menuClosedRight;
    const toggleLabel = open ? messages.collapse : messages.expand;
    const headerNode = toggleDisplay === "switch" ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { class: {
        [CSS.toggleSwitchContainer]: true,
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { "aria-controls": IDS.content, "aria-expanded": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(open), class: {
        [CSS.toggle]: true,
        [CSS.toggleSwitch]: true,
      }, id: IDS.toggle, onClick: this.toggleSection, onKeyDown: this.handleHeaderKeyDown, role: "button", tabIndex: 0, title: toggleLabel }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { class: CSS.toggleSwitchContent }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("span", { class: CSS.toggleSwitchText }, text)), this.renderStatusIcon()), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-label", { class: CSS.focusGuard, layout: "inline", tabIndex: -1 }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-switch", { checked: open, label: toggleLabel, scale: "s" })))) : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("button", { "aria-controls": IDS.content, "aria-expanded": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(open), class: {
        [CSS.sectionHeader]: true,
        [CSS.toggle]: true,
      }, id: IDS.toggle, onClick: this.toggleSection }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-icon", { icon: arrowIcon, scale: "s" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("span", { class: CSS.sectionHeaderText }, text), this.renderStatusIcon()));
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.Host, null, headerNode, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("section", { "aria-labelledby": IDS.toggle, class: CSS.content, hidden: !open, id: IDS.content }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot", null))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return blockSectionCss; }
}, [1, "calcite-block-section", {
    "open": [1540],
    "status": [513],
    "text": [1],
    "toggleDisplay": [513, "toggle-display"],
    "messages": [1040],
    "messageOverrides": [1040],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "setFocus": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-block-section", "calcite-icon", "calcite-label", "calcite-switch"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-block-section":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, BlockSection);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-label":
      if (!customElements.get(tagName)) {
        (0,_label_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-switch":
      if (!customElements.get(tagName)) {
        (0,_switch_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteBlockSection = BlockSection;
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

/***/ "./node_modules/@esri/calcite-components/dist/components/label.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/label.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ Label),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const CSS = {
  container: "container",
};

const labelCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale=m]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale=l]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-ui-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}";

const Label = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalLabelClick = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.createEvent)(this, "calciteInternalLabelClick", 2);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.labelClickHandler = (event) => {
      this.calciteInternalLabelClick.emit({
        sourceEvent: event,
      });
    };
    this.alignment = "start";
    this.for = undefined;
    this.scale = "m";
    this.layout = "default";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    document.dispatchEvent(new CustomEvent(_label2_js__WEBPACK_IMPORTED_MODULE_0__.l));
  }
  disconnectedCallback() {
    document.dispatchEvent(new CustomEvent(_label2_js__WEBPACK_IMPORTED_MODULE_0__.a));
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Host, { onClick: this.labelClickHandler }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: CSS.container }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null))));
  }
  get el() { return this; }
  static get style() { return labelCss; }
}, [1, "calcite-label", {
    "alignment": [513],
    "for": [513],
    "scale": [513],
    "layout": [513]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-label"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-label":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Label);
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/t9n.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/t9n.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectMessages),
/* harmony export */   d: () => (/* binding */ disconnectMessages),
/* harmony export */   s: () => (/* binding */ setUpMessages),
/* harmony export */   u: () => (/* binding */ updateMessages)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
  const key = `${component}_${lang}`;
  if (componentLangToMessageBundleCache[key]) {
    return componentLangToMessageBundleCache[key];
  }
  componentLangToMessageBundleCache[key] = fetch((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.getAssetPath)(`./assets/${component}/t9n/messages_${lang}.json`))
    .then((resp) => {
    if (!resp.ok) {
      throwMessageFetchError();
    }
    return resp.json();
  })
    .catch(() => throwMessageFetchError());
  return componentLangToMessageBundleCache[key];
}
function throwMessageFetchError() {
  throw new Error("could not fetch component message bundle");
}
function mergeMessages(component) {
  component.messages = {
    ...component.defaultMessages,
    ...component.messageOverrides,
  };
}
/**
 * This utility sets up the messages used by the component. It should be awaited in the `componentWillLoad` lifecycle hook.
 *
 * @param component
 */
async function setUpMessages(component) {
  component.defaultMessages = await fetchMessages(component, component.effectiveLocale);
  mergeMessages(component);
}
async function fetchMessages(component, lang) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Build.isBrowser) {
    return {};
  }
  const { el } = component;
  const tag = el.tagName.toLowerCase();
  const componentName = tag.replace("calcite-", "");
  return getMessageBundle((0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.g)(lang, "t9n"), componentName);
}
/**
 * This utility must be set up for the component to update its default message bundle if the locale changes.
 *
 * It can be set up in **either** of the following ways:
 *
 * 1. called from `LocalizedComponent`'s `onLocaleChange` method or
 * 2. called from a watcher configured to watch `LocalizedComponent`'s `effectiveLocale` prop
 *
 * @param component
 * @param lang
 */
async function updateMessages(component, lang) {
  component.defaultMessages = await fetchMessages(component, lang);
  mergeMessages(component);
}
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback`
 *
 * **Note**: this must be called after `LocalizedComponent`'s `connectLocalized` method.
 *
 * @param component
 */
function connectMessages(component) {
  component.onMessagesChange = defaultOnMessagesChange;
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectMessages(component) {
  component.onMessagesChange = undefined;
}
function defaultOnMessagesChange() {
  mergeMessages(this);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYTkxZWQxM2RkYmVmMThkMWYzZTk2MTI3NWYwMzViYjMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytHO0FBQ3BCO0FBQzNDO0FBQzhCO0FBQ29DO0FBQ0o7QUFDdkQ7QUFDQztBQUNDOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0Isc0JBQXNCLGNBQWMsZ0RBQWdELHNDQUFzQywrQkFBK0IsY0FBYyxpQkFBaUIsMkJBQTJCLG1CQUFtQixrREFBa0QsbUJBQW1CLDJCQUEyQixRQUFRLGlCQUFpQixpQkFBaUIsNkJBQTZCLHVDQUF1Qyw4Q0FBOEMsK0JBQStCLGdDQUFnQyxrQkFBa0IscUJBQXFCLGFBQWEsZUFBZSx5QkFBeUIsaUJBQWlCLG1CQUFtQixtQkFBbUIscUJBQXFCLHNDQUFzQywwQkFBMEIsNENBQTRDLHlFQUF5RSxvUEFBb1AsNENBQTRDLCtCQUErQiw2QkFBNkIsb0JBQW9CLHNCQUFzQixzQkFBc0IsaUJBQWlCLGNBQWMsbUJBQW1CLG1CQUFtQiwwQkFBMEIsa0JBQWtCLGFBQWEsaUJBQWlCLG1CQUFtQiw2QkFBNkIsc0JBQXNCLHVDQUF1QyxnQ0FBZ0Msb0JBQW9CLGtCQUFrQixtQkFBbUIsNEJBQTRCLDZCQUE2QiwyQkFBMkIseUJBQXlCLGFBQWEsY0FBYyxtQkFBbUIsbUJBQW1CLGdDQUFnQyxxQkFBcUIsK0JBQStCLGdFQUFnRSwwQkFBMEIsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUU3aEUsbUNBQW1DLDBGQUFrQixlQUFlLCtFQUFXO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLG1GQUFXO0FBQ2hEO0FBQ0E7QUFDQTtB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QUFzQjtBQUNqRTtBQUNBO0FBQ0EsWUFBWSx5RUFBQyxDQUFDLHdFQUFJLElBQUksaUNBQWlDLEVBQUUseUVBQUMsVUFBVSxzQkFBc0IsRUFBRSx5RUFBQztBQUM3RjtBQUNBLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkU7QUFDdkI7O0FBRXREO0FBQ0E7QUFDQSxpQkFBaUIsVUFBVSxHQUFHLEtBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG9GQUFZLGFBQWEsVUFBVSxnQkFBZ0IsS0FBSztBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLWJsb2NrLXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2ljb24uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2xhYmVsLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy90OW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBmIGFzIGZvY3VzRmlyc3RUYWJiYWJsZSwgYiBhcyBnZXRFbGVtZW50RGlyLCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzQWN0aXZhdGlvbktleSB9IGZyb20gJy4va2V5LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSwgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDQgfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDMgfSBmcm9tICcuL2xhYmVsLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9zd2l0Y2guanMnO1xuXG5jb25zdCBJRFMgPSB7XG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxuICB0b2dnbGU6IFwidG9nZ2xlXCIsXG59O1xuY29uc3QgQ1NTID0ge1xuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgZm9jdXNHdWFyZDogXCJmb2N1cy1ndWFyZFwiLFxuICBpbnZhbGlkOiBcImludmFsaWRcIixcbiAgc2VjdGlvbkhlYWRlcjogXCJzZWN0aW9uLWhlYWRlclwiLFxuICBzZWN0aW9uSGVhZGVyVGV4dDogXCJzZWN0aW9uLWhlYWRlcl9fdGV4dFwiLFxuICBzdGF0dXNJY29uOiBcInN0YXR1cy1pY29uXCIsXG4gIHRvZ2dsZTogXCJ0b2dnbGVcIixcbiAgdG9nZ2xlU3dpdGNoOiBcInRvZ2dsZS0tc3dpdGNoXCIsXG4gIHRvZ2dsZVN3aXRjaENvbnRhaW5lcjogXCJ0b2dnbGUtLXN3aXRjaC1jb250YWluZXJcIixcbiAgdG9nZ2xlU3dpdGNoQ29udGVudDogXCJ0b2dnbGUtLXN3aXRjaF9fY29udGVudFwiLFxuICB0b2dnbGVTd2l0Y2hUZXh0OiBcInRvZ2dsZS0tc3dpdGNoX190ZXh0XCIsXG4gIHZhbGlkOiBcInZhbGlkXCIsXG59O1xuY29uc3QgSUNPTlMgPSB7XG4gIG1lbnVPcGVuOiBcImNoZXZyb24tZG93blwiLFxuICBtZW51Q2xvc2VkTGVmdDogXCJjaGV2cm9uLWxlZnRcIixcbiAgbWVudUNsb3NlZFJpZ2h0OiBcImNoZXZyb24tcmlnaHRcIixcbiAgdmFsaWQ6IFwiY2hlY2stY2lyY2xlXCIsXG4gIGludmFsaWQ6IFwiZXhjbGFtYXRpb24tbWFyay10cmlhbmdsZVwiLFxufTtcblxuY29uc3QgYmxvY2tTZWN0aW9uQ3NzID0gXCI6aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX06aG9zdChbb3Blbl0pe2JvcmRlci13aWR0aDowcHg7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1ibG9jay1lbmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9Omhvc3QoOmxhc3QtY2hpbGQpe2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MHB4fS50b2dnbGV7aW5saW5lLXNpemU6MTAwJTtib3JkZXItd2lkdGg6MHB4O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC1mYW1pbHk6dmFyKC0tY2FsY2l0ZS1zYW5zLWZhbWlseSk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX0udG9nZ2xlLS1zd2l0Y2gsLnNlY3Rpb24taGVhZGVye21hcmdpbi1pbmxpbmU6MHB4O21hcmdpbi1ibG9jazowLjI1cmVtO2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1pbmxpbmU6MHB4O3BhZGRpbmctYmxvY2s6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH0udG9nZ2xlLS1zd2l0Y2g6Zm9jdXMsLnNlY3Rpb24taGVhZGVyOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIDJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS50b2dnbGUtLXN3aXRjaDpob3Zlciwuc2VjdGlvbi1oZWFkZXI6aG92ZXJ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5zZWN0aW9uLWhlYWRlciAuc3RhdHVzLWljb257YWxpZ24tc2VsZjpmbGV4LWVuZH0uc2VjdGlvbi1oZWFkZXJfX3RleHR7bWFyZ2luLWlubGluZTowLjc1cmVtO21hcmdpbi1ibG9jazowcHg7ZmxleDoxIDEgYXV0bzt0ZXh0LWFsaWduOmluaXRpYWw7d29yZC13cmFwOmFueXdoZXJlfS50b2dnbGUtLXN3aXRjaC1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7d29yZC1icmVhazpicmVhay13b3JkfS50b2dnbGUtLXN3aXRjaC1jb250YWluZXIgLmZvY3VzLWd1YXJkey0tY2FsY2l0ZS1sYWJlbC1tYXJnaW4tYm90dG9tOjA7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1pbmxpbmUtZW5kOjA7bWFyZ2luLWlubGluZS1zdGFydDowLjI1cmVtfS50b2dnbGUtLXN3aXRjaCAuc3RhdHVzLWljb257bWFyZ2luLWlubGluZS1zdGFydDowLjVyZW19LnRvZ2dsZS0tc3dpdGNoX19jb250ZW50e2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvO2FsaWduLWl0ZW1zOmNlbnRlcn0uc3RhdHVzLWljb24udmFsaWR7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1zdWNjZXNzKX0uc3RhdHVzLWljb24uaW52YWxpZHtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9Omhvc3QoW3RvZ2dsZS1kaXNwbGF5PXN3aXRjaF0pIC50b2dnbGUgLnRvZ2dsZS0tc3dpdGNoX19jb250ZW50e21hcmdpbi1pbmxpbmUtZW5kOjEuNzVyZW19Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IEJsb2NrU2VjdGlvbiA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlQmxvY2tTZWN0aW9uVG9nZ2xlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQmxvY2tTZWN0aW9uVG9nZ2xlXCIsIDYpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuaGFuZGxlSGVhZGVyS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGlzQWN0aXZhdGlvbktleShldmVudC5rZXkpKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VjdGlvbigpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgICB0aGlzLmNhbGNpdGVCbG9ja1NlY3Rpb25Ub2dnbGUuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0dXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50ZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudG9nZ2xlRGlzcGxheSA9IFwiYnV0dG9uXCI7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IHRhYmJhYmxlIGVsZW1lbnQuXG4gICAqXG4gICAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gICAgZm9jdXNGaXJzdFRhYmJhYmxlKHRoaXMuZWwpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlclN0YXR1c0ljb24oKSB7XG4gICAgY29uc3QgeyBzdGF0dXMgfSA9IHRoaXM7XG4gICAgY29uc3Qgc3RhdHVzSWNvbiA9IElDT05TW3N0YXR1c10gPz8gZmFsc2U7XG4gICAgY29uc3Qgc3RhdHVzSWNvbkNsYXNzZXMgPSB7XG4gICAgICBbQ1NTLnN0YXR1c0ljb25dOiB0cnVlLFxuICAgICAgW0NTUy52YWxpZF06IHN0YXR1cyA9PSBcInZhbGlkXCIsXG4gICAgICBbQ1NTLmludmFsaWRdOiBzdGF0dXMgPT0gXCJpbnZhbGlkXCIsXG4gICAgfTtcbiAgICByZXR1cm4gISFzdGF0dXNJY29uID8gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogc3RhdHVzSWNvbkNsYXNzZXMsIGljb246IHN0YXR1c0ljb24sIHNjYWxlOiBcInNcIiB9KSkgOiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsLCBtZXNzYWdlcywgb3BlbiwgdGV4dCwgdG9nZ2xlRGlzcGxheSB9ID0gdGhpcztcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKGVsKTtcbiAgICBjb25zdCBhcnJvd0ljb24gPSBvcGVuXG4gICAgICA/IElDT05TLm1lbnVPcGVuXG4gICAgICA6IGRpciA9PT0gXCJydGxcIlxuICAgICAgICA/IElDT05TLm1lbnVDbG9zZWRMZWZ0XG4gICAgICAgIDogSUNPTlMubWVudUNsb3NlZFJpZ2h0O1xuICAgIGNvbnN0IHRvZ2dsZUxhYmVsID0gb3BlbiA/IG1lc3NhZ2VzLmNvbGxhcHNlIDogbWVzc2FnZXMuZXhwYW5kO1xuICAgIGNvbnN0IGhlYWRlck5vZGUgPSB0b2dnbGVEaXNwbGF5ID09PSBcInN3aXRjaFwiID8gKGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLnRvZ2dsZVN3aXRjaENvbnRhaW5lcl06IHRydWUsXG4gICAgICB9IH0sIGgoXCJkaXZcIiwgeyBcImFyaWEtY29udHJvbHNcIjogSURTLmNvbnRlbnQsIFwiYXJpYS1leHBhbmRlZFwiOiB0b0FyaWFCb29sZWFuKG9wZW4pLCBjbGFzczoge1xuICAgICAgICBbQ1NTLnRvZ2dsZV06IHRydWUsXG4gICAgICAgIFtDU1MudG9nZ2xlU3dpdGNoXTogdHJ1ZSxcbiAgICAgIH0sIGlkOiBJRFMudG9nZ2xlLCBvbkNsaWNrOiB0aGlzLnRvZ2dsZVNlY3Rpb24sIG9uS2V5RG93bjogdGhpcy5oYW5kbGVIZWFkZXJLZXlEb3duLCByb2xlOiBcImJ1dHRvblwiLCB0YWJJbmRleDogMCwgdGl0bGU6IHRvZ2dsZUxhYmVsIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnRvZ2dsZVN3aXRjaENvbnRlbnQgfSwgaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLnRvZ2dsZVN3aXRjaFRleHQgfSwgdGV4dCkpLCB0aGlzLnJlbmRlclN0YXR1c0ljb24oKSksIGgoXCJjYWxjaXRlLWxhYmVsXCIsIHsgY2xhc3M6IENTUy5mb2N1c0d1YXJkLCBsYXlvdXQ6IFwiaW5saW5lXCIsIHRhYkluZGV4OiAtMSB9LCBoKFwiY2FsY2l0ZS1zd2l0Y2hcIiwgeyBjaGVja2VkOiBvcGVuLCBsYWJlbDogdG9nZ2xlTGFiZWwsIHNjYWxlOiBcInNcIiB9KSkpKSA6IChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWNvbnRyb2xzXCI6IElEUy5jb250ZW50LCBcImFyaWEtZXhwYW5kZWRcIjogdG9BcmlhQm9vbGVhbihvcGVuKSwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5zZWN0aW9uSGVhZGVyXTogdHJ1ZSxcbiAgICAgICAgW0NTUy50b2dnbGVdOiB0cnVlLFxuICAgICAgfSwgaWQ6IElEUy50b2dnbGUsIG9uQ2xpY2s6IHRoaXMudG9nZ2xlU2VjdGlvbiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogYXJyb3dJY29uLCBzY2FsZTogXCJzXCIgfSksIGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy5zZWN0aW9uSGVhZGVyVGV4dCB9LCB0ZXh0KSwgdGhpcy5yZW5kZXJTdGF0dXNJY29uKCkpKTtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaGVhZGVyTm9kZSwgaChcInNlY3Rpb25cIiwgeyBcImFyaWEtbGFiZWxsZWRieVwiOiBJRFMudG9nZ2xlLCBjbGFzczogQ1NTLmNvbnRlbnQsIGhpZGRlbjogIW9wZW4sIGlkOiBJRFMuY29udGVudCB9LCBoKFwic2xvdFwiLCBudWxsKSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBibG9ja1NlY3Rpb25Dc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtYmxvY2stc2VjdGlvblwiLCB7XG4gICAgXCJvcGVuXCI6IFsxNTQwXSxcbiAgICBcInN0YXR1c1wiOiBbNTEzXSxcbiAgICBcInRleHRcIjogWzFdLFxuICAgIFwidG9nZ2xlRGlzcGxheVwiOiBbNTEzLCBcInRvZ2dsZS1kaXNwbGF5XCJdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtYmxvY2stc2VjdGlvblwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtbGFiZWxcIiwgXCJjYWxjaXRlLXN3aXRjaFwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1ibG9jay1zZWN0aW9uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgQmxvY2tTZWN0aW9uKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtbGFiZWxcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtc3dpdGNoXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG5cbmNvbnN0IENhbGNpdGVCbG9ja1NlY3Rpb24gPSBCbG9ja1NlY3Rpb247XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlQmxvY2tTZWN0aW9uLCBkZWZpbmVDdXN0b21FbGVtZW50IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBnZXRBc3NldFBhdGgsIHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGgsIEhvc3QsIEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRFbGVtZW50RGlyLCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGljb246IFwiaWNvblwiLFxuICBmbGlwUnRsOiBcImZsaXAtcnRsXCIsXG59O1xuXG4vKipcbiAqIEljb24gZGF0YSBjYWNoZS5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGljb25DYWNoZSA9IHt9O1xuLyoqXG4gKiBJY29uIHJlcXVlc3QgY2FjaGUuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCByZXF1ZXN0Q2FjaGUgPSB7fTtcbmNvbnN0IHNjYWxlVG9QeCA9IHtcbiAgczogMTYsXG4gIG06IDI0LFxuICBsOiAzMixcbn07XG5hc3luYyBmdW5jdGlvbiBmZXRjaEljb24oeyBpY29uLCBzY2FsZSB9KSB7XG4gIGNvbnN0IHNpemUgPSBzY2FsZVRvUHhbc2NhbGVdO1xuICBjb25zdCBuYW1lID0gbm9ybWFsaXplSWNvbk5hbWUoaWNvbik7XG4gIGNvbnN0IGZpbGxlZCA9IG5hbWUuY2hhckF0KG5hbWUubGVuZ3RoIC0gMSkgPT09IFwiRlwiO1xuICBjb25zdCBpY29uTmFtZSA9IGZpbGxlZCA/IG5hbWUuc3Vic3RyaW5nKDAsIG5hbWUubGVuZ3RoIC0gMSkgOiBuYW1lO1xuICBjb25zdCBpZCA9IGAke2ljb25OYW1lfSR7c2l6ZX0ke2ZpbGxlZCA/IFwiRlwiIDogXCJcIn1gO1xuICBpZiAoaWNvbkNhY2hlW2lkXSkge1xuICAgIHJldHVybiBpY29uQ2FjaGVbaWRdO1xuICB9XG4gIGlmICghcmVxdWVzdENhY2hlW2lkXSkge1xuICAgIHJlcXVlc3RDYWNoZVtpZF0gPSBmZXRjaChnZXRBc3NldFBhdGgoYC4vYXNzZXRzL2ljb24vJHtpZH0uanNvbmApKVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFwiJHtpZH1cIiBpcyBub3QgYSB2YWxpZCBjYWxjaXRlLXVpLWljb24gbmFtZWApO1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgcGF0aCA9IGF3YWl0IHJlcXVlc3RDYWNoZVtpZF07XG4gIGljb25DYWNoZVtpZF0gPSBwYXRoO1xuICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogTm9ybWFsaXplIHRoZSBpY29uIG5hbWUgdG8gbWF0Y2ggdGhlIHBhdGggZGF0YSBtb2R1bGUgZXhwb3J0cy5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwYXJhbSBuYW1lIOKAkyBhbiBpY29uIG5hbWUgdGhhdCBjYW4gYmUgZWl0aGVyIGtlYmFiIG9yIGNhbWVsLWNhc2VkXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVJY29uTmFtZShuYW1lKSB7XG4gIGNvbnN0IG51bWJlckxlYWRpbmdOYW1lID0gIWlzTmFOKE51bWJlcihuYW1lLmNoYXJBdCgwKSkpO1xuICBjb25zdCBwYXJ0cyA9IG5hbWUuc3BsaXQoXCItXCIpO1xuICBjb25zdCBrZWJhYkNhc2VkID0gcGFydHMubGVuZ3RoID4gMDtcbiAgaWYgKGtlYmFiQ2FzZWQpIHtcbiAgICBjb25zdCBmaXJzdE5vbkRpZ2l0SW5QYXJ0UGF0dGVybiA9IC9bYS16XS9pO1xuICAgIG5hbWUgPSBwYXJ0c1xuICAgICAgLm1hcCgocGFydCwgcGFydEluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gcGFydC5yZXBsYWNlKGZpcnN0Tm9uRGlnaXRJblBhcnRQYXR0ZXJuLCBmdW5jdGlvbiByZXBsYWNlcihtYXRjaCwgb2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IGlzRmlyc3RDaGFySW5OYW1lID0gcGFydEluZGV4ID09PSAwICYmIG9mZnNldCA9PT0gMDtcbiAgICAgICAgaWYgKGlzRmlyc3RDaGFySW5OYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaC50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAgIC5qb2luKFwiXCIpO1xuICB9XG4gIHJldHVybiBudW1iZXJMZWFkaW5nTmFtZSA/IGBpJHtuYW1lfWAgOiBuYW1lO1xufVxuXG5jb25zdCBpY29uQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmlubGluZS1mbGV4O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktaWNvbi1jb2xvcil9Omhvc3QoW3NjYWxlPXNdKXtpbmxpbmUtc2l6ZToxNnB4O2Jsb2NrLXNpemU6MTZweDttaW4taW5saW5lLXNpemU6MTZweDttaW4tYmxvY2stc2l6ZToxNnB4fTpob3N0KFtzY2FsZT1tXSl7aW5saW5lLXNpemU6MjRweDtibG9jay1zaXplOjI0cHg7bWluLWlubGluZS1zaXplOjI0cHg7bWluLWJsb2NrLXNpemU6MjRweH06aG9zdChbc2NhbGU9bF0pe2lubGluZS1zaXplOjMycHg7YmxvY2stc2l6ZTozMnB4O21pbi1pbmxpbmUtc2l6ZTozMnB4O21pbi1ibG9jay1zaXplOjMycHh9LmZsaXAtcnRse3RyYW5zZm9ybTpzY2FsZVgoLTEpfS5zdmd7ZGlzcGxheTpibG9ja306aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgSWNvbiA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5pY29uID0gbnVsbDtcbiAgICB0aGlzLmZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy50ZXh0TGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYXRoRGF0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLndhaXRVbnRpbFZpc2libGUoKCkgPT4ge1xuICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9hZEljb25QYXRoRGF0YSgpO1xuICAgIH0pO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbnVsbDtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLmxvYWRJY29uUGF0aERhdGEoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgZmxpcFJ0bCwgcGF0aERhdGEsIHNjYWxlLCB0ZXh0TGFiZWwgfSA9IHRoaXM7XG4gICAgY29uc3QgZGlyID0gZ2V0RWxlbWVudERpcihlbCk7XG4gICAgY29uc3Qgc2l6ZSA9IHNjYWxlVG9QeFtzY2FsZV07XG4gICAgY29uc3Qgc2VtYW50aWMgPSAhIXRleHRMYWJlbDtcbiAgICBjb25zdCBwYXRocyA9IFtdLmNvbmNhdChwYXRoRGF0YSB8fCBcIlwiKTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtaGlkZGVuXCI6IHRvQXJpYUJvb2xlYW4oIXNlbWFudGljKSwgXCJhcmlhLWxhYmVsXCI6IHNlbWFudGljID8gdGV4dExhYmVsIDogbnVsbCwgcm9sZTogc2VtYW50aWMgPyBcImltZ1wiIDogbnVsbCB9LCBoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5mbGlwUnRsXTogZGlyID09PSBcInJ0bFwiICYmIGZsaXBSdGwsXG4gICAgICAgIHN2ZzogdHJ1ZSxcbiAgICAgIH0sIGZpbGw6IFwiY3VycmVudENvbG9yXCIsIGhlaWdodDogXCIxMDAlXCIsIHZpZXdCb3g6IGAwIDAgJHtzaXplfSAke3NpemV9YCwgd2lkdGg6IFwiMTAwJVwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sIHBhdGhzLm1hcCgocGF0aCkgPT4gdHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIgPyAoaChcInBhdGhcIiwgeyBkOiBwYXRoIH0pKSA6IChoKFwicGF0aFwiLCB7IGQ6IHBhdGguZCwgb3BhY2l0eTogXCJvcGFjaXR5XCIgaW4gcGF0aCA/IHBhdGgub3BhY2l0eSA6IDEgfSkpKSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhc3luYyBsb2FkSWNvblBhdGhEYXRhKCkge1xuICAgIGNvbnN0IHsgaWNvbiwgc2NhbGUsIHZpc2libGUgfSA9IHRoaXM7XG4gICAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIgfHwgIWljb24gfHwgIXZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGF0aERhdGEgPSBhd2FpdCBmZXRjaEljb24oeyBpY29uLCBzY2FsZSB9KTtcbiAgICAvLyBXaGlsZSB0aGUgZmV0Y2hJY29uIG1ldGhvZCBpcyBhd2FpdGluZyByZXNwb25zZSwgdGhlIGljb24gcmVxdWVzdGVkIGNhbiBjaGFuZ2UuIFRoaXMgY2hlY2sgaXMgdG8gdmVyaWZ5IHRoZSByZXNwb25zZSByZWNlaXZlZCBiZWxvbmdzIHRvIHRoZSBjdXJyZW50IGljb24uXG4gICAgaWYgKGljb24gIT09IHRoaXMuaWNvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhdGhEYXRhID0gcGF0aERhdGE7XG4gIH1cbiAgd2FpdFVudGlsVmlzaWJsZShjYWxsYmFjaykge1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcImludGVyc2VjdGlvblwiLCAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCB7IHJvb3RNYXJnaW46IFwiNTBweFwiIH0pO1xuICAgIGlmICghdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJpY29uXCI6IFtcImxvYWRJY29uUGF0aERhdGFcIl0sXG4gICAgXCJzY2FsZVwiOiBbXCJsb2FkSWNvblBhdGhEYXRhXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGljb25Dc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtaWNvblwiLCB7XG4gICAgXCJpY29uXCI6IFs1MTNdLFxuICAgIFwiZmxpcFJ0bFwiOiBbNTE2LCBcImZsaXAtcnRsXCJdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJ0ZXh0TGFiZWxcIjogWzEsIFwidGV4dC1sYWJlbFwiXSxcbiAgICBcInBhdGhEYXRhXCI6IFszMl0sXG4gICAgXCJ2aXNpYmxlXCI6IFszMl1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1pY29uXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBJY29uKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBJY29uIGFzIEksIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBsIGFzIGxhYmVsQ29ubmVjdGVkRXZlbnQsIGEgYXMgbGFiZWxEaXNjb25uZWN0ZWRFdmVudCB9IGZyb20gJy4vbGFiZWwyLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG59O1xuXG5jb25zdCBsYWJlbENzcyA9IFwiOmhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpmbGV4fTpob3N0KFthbGlnbm1lbnQ9c3RhcnRdKXt0ZXh0LWFsaWduOnN0YXJ0fTpob3N0KFthbGlnbm1lbnQ9ZW5kXSl7dGV4dC1hbGlnbjplbmR9Omhvc3QoW2FsaWdubWVudD1jZW50ZXJdKXt0ZXh0LWFsaWduOmNlbnRlcn06aG9zdChbc2NhbGU9c10pIC5jb250YWluZXJ7Z2FwOjAuMjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtO21hcmdpbi1ibG9jay1lbmQ6dmFyKC0tY2FsY2l0ZS1sYWJlbC1tYXJnaW4tYm90dG9tLCAwLjVyZW0pfTpob3N0KFtzY2FsZT1tXSkgLmNvbnRhaW5lcntnYXA6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbTttYXJnaW4tYmxvY2stZW5kOnZhcigtLWNhbGNpdGUtbGFiZWwtbWFyZ2luLWJvdHRvbSwgMC43NXJlbSl9Omhvc3QoW3NjYWxlPWxdKSAuY29udGFpbmVye2dhcDowLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW07bWFyZ2luLWJsb2NrLWVuZDp2YXIoLS1jYWxjaXRlLWxhYmVsLW1hcmdpbi1ib3R0b20sIDFyZW0pfTpob3N0IC5jb250YWluZXJ7bWFyZ2luLWlubGluZTowcHg7bWFyZ2luLWJsb2NrLXN0YXJ0OjBweDtpbmxpbmUtc2l6ZToxMDAlO2xpbmUtaGVpZ2h0OjEuMzc1O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbbGF5b3V0PWRlZmF1bHRdKSAuY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Omhvc3QoW2xheW91dD1pbmxpbmVdKSAuY29udGFpbmVyLDpob3N0KFtsYXlvdXQ9aW5saW5lLXNwYWNlLWJldHdlZW5dKSAuY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDowLjVyZW19Omhvc3QoW2xheW91dD1pbmxpbmVdW3NjYWxlPWxdKSAuY29udGFpbmVye2dhcDowLjc1cmVtfTpob3N0KFtsYXlvdXQ9aW5saW5lLXNwYWNlLWJldHdlZW5dKSAuY29udGFpbmVye2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufTpob3N0KFtkaXNhYmxlZF0pPi5jb250YWluZXJ7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCpbZGlzYWJsZWRdICopey0tdHctYmctb3BhY2l0eToxfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChjYWxjaXRlLWlucHV0LW1lc3NhZ2U6bm90KFthY3RpdmVdKSl7LS10dy1iZy1vcGFjaXR5OjB9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBMYWJlbCA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxMYWJlbENsaWNrID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxMYWJlbENsaWNrXCIsIDIpO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmxhYmVsQ2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbExhYmVsQ2xpY2suZW1pdCh7XG4gICAgICAgIHNvdXJjZUV2ZW50OiBldmVudCxcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5hbGlnbm1lbnQgPSBcInN0YXJ0XCI7XG4gICAgdGhpcy5mb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMubGF5b3V0ID0gXCJkZWZhdWx0XCI7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQobGFiZWxDb25uZWN0ZWRFdmVudCkpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGxhYmVsRGlzY29ubmVjdGVkRXZlbnQpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5sYWJlbENsaWNrSGFuZGxlciB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250YWluZXIgfSwgaChcInNsb3RcIiwgbnVsbCkpKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gbGFiZWxDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtbGFiZWxcIiwge1xuICAgIFwiYWxpZ25tZW50XCI6IFs1MTNdLFxuICAgIFwiZm9yXCI6IFs1MTNdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJsYXlvdXRcIjogWzUxM11cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1sYWJlbFwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1sYWJlbFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIExhYmVsKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBMYWJlbCBhcyBMLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkLCBnZXRBc3NldFBhdGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFN1cHBvcnRlZExvY2FsZSB9IGZyb20gJy4vbG9jYWxlLmpzJztcblxuY29uc3QgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlID0ge307XG5hc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlQnVuZGxlKGxhbmcsIGNvbXBvbmVudCkge1xuICBjb25zdCBrZXkgPSBgJHtjb21wb25lbnR9XyR7bGFuZ31gO1xuICBpZiAoY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0pIHtcbiAgICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG4gIH1cbiAgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0gPSBmZXRjaChnZXRBc3NldFBhdGgoYC4vYXNzZXRzLyR7Y29tcG9uZW50fS90OW4vbWVzc2FnZXNfJHtsYW5nfS5qc29uYCkpXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3AuanNvbigpO1xuICB9KVxuICAgIC5jYXRjaCgoKSA9PiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkpO1xuICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG59XG5mdW5jdGlvbiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgZmV0Y2ggY29tcG9uZW50IG1lc3NhZ2UgYnVuZGxlXCIpO1xufVxuZnVuY3Rpb24gbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm1lc3NhZ2VzID0ge1xuICAgIC4uLmNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMsXG4gICAgLi4uY29tcG9uZW50Lm1lc3NhZ2VPdmVycmlkZXMsXG4gIH07XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIHRoZSBtZXNzYWdlcyB1c2VkIGJ5IHRoZSBjb21wb25lbnQuIEl0IHNob3VsZCBiZSBhd2FpdGVkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2V0VXBNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBjb21wb25lbnQuZWZmZWN0aXZlTG9jYWxlKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgY29uc3QgeyBlbCB9ID0gY29tcG9uZW50O1xuICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSB0YWcucmVwbGFjZShcImNhbGNpdGUtXCIsIFwiXCIpO1xuICByZXR1cm4gZ2V0TWVzc2FnZUJ1bmRsZShnZXRTdXBwb3J0ZWRMb2NhbGUobGFuZywgXCJ0OW5cIiksIGNvbXBvbmVudE5hbWUpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgbXVzdCBiZSBzZXQgdXAgZm9yIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBkZWZhdWx0IG1lc3NhZ2UgYnVuZGxlIGlmIHRoZSBsb2NhbGUgY2hhbmdlcy5cbiAqXG4gKiBJdCBjYW4gYmUgc2V0IHVwIGluICoqZWl0aGVyKiogb2YgdGhlIGZvbGxvd2luZyB3YXlzOlxuICpcbiAqIDEuIGNhbGxlZCBmcm9tIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYG9uTG9jYWxlQ2hhbmdlYCBtZXRob2Qgb3JcbiAqIDIuIGNhbGxlZCBmcm9tIGEgd2F0Y2hlciBjb25maWd1cmVkIHRvIHdhdGNoIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGVmZmVjdGl2ZUxvY2FsZWAgcHJvcFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBsYW5nXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqICoqTm90ZSoqOiB0aGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGNvbm5lY3RMb2NhbGl6ZWRgIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHRlYXJzIGRvd24gaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gIG1lcmdlTWVzc2FnZXModGhpcyk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RNZXNzYWdlcyBhcyBjLCBkaXNjb25uZWN0TWVzc2FnZXMgYXMgZCwgc2V0VXBNZXNzYWdlcyBhcyBzLCB1cGRhdGVNZXNzYWdlcyBhcyB1IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=