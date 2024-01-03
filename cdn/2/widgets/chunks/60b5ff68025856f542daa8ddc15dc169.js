"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-tile-select_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-tile-select.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-tile-select.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteTileSelect: () => (/* binding */ CalciteTileSelect),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./link.js */ "./node_modules/@esri/calcite-components/dist/components/link.js");
/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tile.js */ "./node_modules/@esri/calcite-components/dist/components/tile.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */








const CSS = {
  checked: "checked",
  description: "description",
  descriptionOnly: "description-only",
  disabled: "disabled",
  heading: "heading",
  headingOnly: "heading-only",
  icon: "icon",
  iconOnly: "icon-only",
  inputAlignmentEnd: "input-alignment-end",
  inputAlignmentStart: "input-alignment-start",
  inputEnabled: "input-enabled",
  largeVisual: "large-visual",
  widthAuto: "width-auto",
  widthFull: "width-full",
};

const tileSelectCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host .container{background-color:var(--calcite-ui-foreground-1);box-shadow:0 0 0 1px var(--calcite-ui-border-2);box-sizing:border-box;cursor:pointer;display:inline-block;block-size:100%;max-inline-size:300px;padding:0.75rem;position:relative;vertical-align:top;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host .container.checked{z-index:var(--calcite-app-z-index);box-shadow:0 0 0 1px var(--calcite-ui-brand)}:host .container.heading-only{align-items:center}:host .container:not(.input-enabled) ::slotted(calcite-checkbox),:host .container:not(.input-enabled) ::slotted(calcite-radio-button){position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host .container.focused{outline-color:transparent}:host .container.focused:not(.disabled):not(.input-enabled){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );outline-offset:-4px;box-shadow:0 0 0 1px var(--calcite-ui-brand), inset 0 0 0 2px var(--calcite-ui-foreground-1)}:host .container.input-enabled.input-alignment-start.width-auto.heading-only,:host .container.input-enabled.input-alignment-start.width-auto.icon-only,:host .container.input-enabled.input-alignment-start.width-auto.description-only,:host .container.input-enabled.input-alignment-start.width-auto.heading.description,:host .container.input-enabled.input-alignment-start.width-auto.icon.description,:host .container.input-enabled.input-alignment-start.width-auto.heading.icon.description{display:inline-grid;grid-template-columns:max-content 1fr}:host .container.input-enabled.input-alignment-start.heading-only,:host .container.input-enabled.input-alignment-start.icon-only,:host .container.input-enabled.input-alignment-start.description-only,:host .container.input-enabled.input-alignment-start.heading.description,:host .container.input-enabled.input-alignment-start.icon.description,:host .container.input-enabled.input-alignment-start.heading.icon.description{gap:0.75rem}:host .container.input-enabled.input-alignment-start calcite-tile{order:1}:host .container.input-enabled.input-alignment-start.large-visual ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-start.large-visual ::slotted(calcite-radio-button){position:absolute;inset-block-start:0.75rem;inset-inline-start:0.75rem}:host .container.input-enabled.input-alignment-end.width-auto.heading-only,:host .container.input-enabled.input-alignment-end.width-auto.icon-only{display:inline-grid;grid-gap:0.75rem;grid-template-columns:max-content 1fr}:host .container.input-enabled.input-alignment-end.heading-only,:host .container.input-enabled.input-alignment-end.icon-only{gap:0.75rem}:host .container.input-enabled.input-alignment-end.description-only ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.description-only ::slotted(calcite-radio-button),:host .container.input-enabled.input-alignment-end.heading.description ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.heading.description ::slotted(calcite-radio-button),:host .container.input-enabled.input-alignment-end.icon.description ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.icon.description ::slotted(calcite-radio-button),:host .container.input-enabled.input-alignment-end.heading.icon.description ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.heading.icon.description ::slotted(calcite-radio-button){position:absolute;inset-block-start:0.75rem;inset-inline-end:0.75rem}:host .container.input-enabled.input-alignment-end.large-visual ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.large-visual ::slotted(calcite-radio-button){position:absolute;inset-block-start:0.75rem;inset-inline-end:0.75rem}:host .container.width-full{display:flex;max-inline-size:none}:host .container.width-full calcite-tile{flex:1 1 auto}:host(:hover) .container:not(.input-enabled){box-shadow:0 0 0 1px var(--calcite-ui-brand)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}";

const TileSelect = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTileSelectChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.createEvent)(this, "calciteTileSelectChange", 6);
    this.guid = `calcite-tile-select-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_0__.g)()}`;
    this.checked = false;
    this.description = undefined;
    this.disabled = false;
    this.heading = undefined;
    this.hidden = false;
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.name = undefined;
    this.inputEnabled = false;
    this.inputAlignment = "start";
    this.type = "radio";
    this.value = undefined;
    this.width = "auto";
    this.focused = false;
  }
  checkedChanged(newChecked) {
    this.input.checked = newChecked;
  }
  nameChanged(newName) {
    this.input.name = newName;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    return this.input?.setFocus();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  checkboxChangeHandler(event) {
    const checkbox = event.target;
    if (checkbox === this.input) {
      this.checked = checkbox.checked;
    }
    event.stopPropagation();
    this.calciteTileSelectChange.emit();
  }
  checkboxFocusBlurHandler(event) {
    const checkbox = event.target;
    if (checkbox === this.input) {
      this.focused = event.detail;
    }
    event.stopPropagation();
  }
  radioButtonChangeHandler(event) {
    const radioButton = event.target;
    if (radioButton === this.input) {
      this.checked = radioButton.checked;
    }
    event.stopPropagation();
    this.calciteTileSelectChange.emit();
  }
  radioButtonCheckedChangeHandler(event) {
    const radioButton = event.target;
    if (radioButton === this.input) {
      this.checked = radioButton.checked;
    }
    event.stopPropagation();
  }
  radioButtonFocusBlurHandler(event) {
    const radioButton = event.target;
    if (radioButton === this.input) {
      this.focused = radioButton.focused;
    }
    event.stopPropagation();
  }
  clickHandler(event) {
    if (this.disabled) {
      return;
    }
    const target = event.target;
    const targets = ["calcite-tile", "calcite-tile-select"];
    if (targets.includes(target.localName)) {
      this.input.click();
    }
  }
  pointerEnterHandler() {
    if (this.disabled) {
      return;
    }
    const { localName } = this.input;
    if (localName === "calcite-radio-button" || localName === "calcite-checkbox") {
      this.input.hovered = true;
    }
  }
  pointerLeaveHandler() {
    if (this.disabled) {
      return;
    }
    const { localName } = this.input;
    if (localName === "calcite-radio-button" || localName === "calcite-checkbox") {
      this.input.hovered = false;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.renderInput();
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  disconnectedCallback() {
    this.input.parentNode.removeChild(this.input);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderInput() {
    this.input = document.createElement(this.type === "radio" ? "calcite-radio-button" : "calcite-checkbox");
    this.input.checked = this.checked;
    this.input.disabled = this.disabled;
    this.input.hidden = this.hidden;
    this.input.id = this.guid;
    this.input.label = this.heading || this.name || "";
    if (this.name) {
      this.input.name = this.name;
    }
    if (this.value) {
      this.input.value = this.value != null ? this.value.toString() : "";
    }
    this.el.insertAdjacentElement("beforeend", this.input);
  }
  render() {
    const { checked, description, disabled, focused, heading, icon, inputAlignment, inputEnabled, width, iconFlipRtl, } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("div", { class: {
        checked,
        container: true,
        [CSS.description]: Boolean(description),
        [CSS.descriptionOnly]: Boolean(!heading && !icon && description),
        disabled,
        focused,
        [CSS.heading]: Boolean(heading),
        [CSS.headingOnly]: heading && !icon && !description,
        [CSS.icon]: Boolean(icon),
        [CSS.iconOnly]: !heading && icon && !description,
        [CSS.inputAlignmentEnd]: inputAlignment === "end",
        [CSS.inputAlignmentStart]: inputAlignment === "start",
        [CSS.inputEnabled]: inputEnabled,
        [CSS.largeVisual]: heading && icon && !description,
        [CSS.widthAuto]: width === "auto",
        [CSS.widthFull]: width === "full",
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("calcite-tile", { active: checked, description: description, embed: true, heading: heading, icon: icon, iconFlipRtl: iconFlipRtl }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("slot", null)));
  }
  get el() { return this; }
  static get watchers() { return {
    "checked": ["checkedChanged"],
    "name": ["nameChanged"]
  }; }
  static get style() { return tileSelectCss; }
}, [1, "calcite-tile-select", {
    "checked": [1540],
    "description": [513],
    "disabled": [516],
    "heading": [513],
    "hidden": [516],
    "icon": [513],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "name": [520],
    "inputEnabled": [516, "input-enabled"],
    "inputAlignment": [513, "input-alignment"],
    "type": [513],
    "value": [8],
    "width": [513],
    "focused": [32],
    "setFocus": [64]
  }, [[0, "calciteCheckboxChange", "checkboxChangeHandler"], [0, "calciteInternalCheckboxFocus", "checkboxFocusBlurHandler"], [0, "calciteInternalCheckboxBlur", "checkboxFocusBlurHandler"], [0, "calciteRadioButtonChange", "radioButtonChangeHandler"], [0, "calciteInternalRadioButtonCheckedChange", "radioButtonCheckedChangeHandler"], [0, "calciteInternalRadioButtonFocus", "radioButtonFocusBlurHandler"], [0, "calciteInternalRadioButtonBlur", "radioButtonFocusBlurHandler"], [0, "click", "clickHandler"], [1, "pointerenter", "pointerEnterHandler"], [1, "pointerleave", "pointerLeaveHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tile-select", "calcite-icon", "calcite-link", "calcite-tile"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tile-select":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TileSelect);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_3__.d)();
      }
      break;
    case "calcite-link":
      if (!customElements.get(tagName)) {
        (0,_link_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
    case "calcite-tile":
      if (!customElements.get(tagName)) {
        (0,_tile_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteTileSelect = TileSelect;
const defineCustomElement = defineCustomElement$1;




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

/***/ "./node_modules/@esri/calcite-components/dist/components/tile.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/tile.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ Tile),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./link.js */ "./node_modules/@esri/calcite-components/dist/components/link.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */







const SLOTS = {
  contentStart: "content-start",
  contentEnd: "content-end",
};

const tileCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{box-sizing:border-box;display:inline-block;-webkit-user-select:none;user-select:none;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .container{pointer-events:none;display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));gap:0.5rem}:host .content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;gap:0.5rem;inline-size:10%}:host .content-container{display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;padding:0px;color:var(--calcite-ui-text-2);outline-color:transparent}:host .content-slot-container{display:flex;align-items:center;background-color:var(--calcite-ui-foreground-1)}:host .content-slot-container:first-child{padding-inline:0 0.75rem}:host .content-slot-container:last-child{padding-inline:0.75rem 0}:host .heading{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .large-visual{align-items:center;text-align:center;min-block-size:12rem}:host .large-visual .icon{display:flex;justify-content:center;align-self:flex-end}:host .large-visual .content-container{align-self:center}:host .description{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([href]) .heading,:host([href]:hover) .heading{text-decoration-line:underline;color:var(--calcite-ui-text-link)}:host(:not([embed])){padding:0.75rem;box-shadow:0 0 0 1px var(--calcite-ui-border-2)}:host(:not([embed])[href]:hover){cursor:pointer;box-shadow:0 0 0 2px var(--calcite-ui-brand)}:host(:not([embed])[href]:active){box-shadow:0 0 0 3px var(--calcite-ui-brand)}:host([icon][heading]:not([description]):not([embed])){padding:0px}:host([icon][heading]:not([description])) .icon{display:flex;justify-content:center}:host([icon][heading]:not([description])) .large-visual{text-align:center}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host(:hover) .heading,:host([active]) .heading{color:var(--calcite-ui-text-1)}:host(:hover) .description,:host([active]) .description{color:var(--calcite-ui-text-2)}:host([hidden]){display:none}[hidden]{display:none}";

const Tile = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.active = false;
    this.description = undefined;
    this.disabled = false;
    this.embed = false;
    this.focused = false;
    this.heading = undefined;
    this.hidden = false;
    this.href = undefined;
    this.icon = undefined;
    this.iconFlipRtl = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderTile() {
    const { icon, el, heading, description, iconFlipRtl } = this;
    const isLargeVisual = heading && icon && !description;
    const iconStyle = isLargeVisual
      ? {
        height: "64px",
        width: "64px",
      }
      : undefined;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: { container: true, "large-visual": isLargeVisual } }, icon && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: "icon" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("calcite-icon", { flipRtl: iconFlipRtl, icon: icon, scale: "l", style: iconStyle }))), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: "content-container" }, (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.contentStart) ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: "content-slot-container" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { name: SLOTS.contentStart }))) : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: "content" }, heading && (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: "heading" }, heading), description && (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: "description" }, description)), (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.contentEnd) ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: "content-slot-container" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { name: SLOTS.contentEnd }))) : null)));
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, this.href ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("calcite-link", { disabled: this.disabled, href: this.href }, this.renderTile())) : (this.renderTile())));
  }
  get el() { return this; }
  static get style() { return tileCss; }
}, [1, "calcite-tile", {
    "active": [516],
    "description": [513],
    "disabled": [516],
    "embed": [516],
    "focused": [516],
    "heading": [513],
    "hidden": [516],
    "href": [513],
    "icon": [513],
    "iconFlipRtl": [516, "icon-flip-rtl"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tile", "calcite-icon", "calcite-link"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tile":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tile);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_3__.d)();
      }
      break;
    case "calcite-link":
      if (!customElements.get(tagName)) {
        (0,_link_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNjBiNWZmNjgwMjU4NTZmNTQyZGFhOGRkYzE1ZGMxNjkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RztBQUNuRTtBQUM2RTtBQUNMO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGNBQWMsaUJBQWlCLGdEQUFnRCxnREFBZ0Qsc0JBQXNCLGVBQWUscUJBQXFCLGdCQUFnQixzQkFBc0IsZ0JBQWdCLGtCQUFrQixtQkFBbUIsNkZBQTZGLHlCQUF5QixtQ0FBbUMsNkNBQTZDLDhCQUE4QixtQkFBbUIsc0lBQXNJLGtCQUFrQixnQkFBZ0IsZUFBZSxVQUFVLFlBQVksZ0JBQWdCLHNCQUFzQixtQkFBbUIsZUFBZSx5QkFBeUIsMEJBQTBCLDREQUE0RCx5RUFBeUUscVBBQXFQLG9CQUFvQiw2RkFBNkYsc2VBQXNlLG9CQUFvQixzQ0FBc0Msb2FBQW9hLFlBQVksa0VBQWtFLFFBQVEsZ01BQWdNLGtCQUFrQiwwQkFBMEIsMkJBQTJCLG1KQUFtSixvQkFBb0IsaUJBQWlCLHNDQUFzQyw2SEFBNkgsWUFBWSxzeUJBQXN5QixrQkFBa0IsMEJBQTBCLHlCQUF5Qiw0TEFBNEwsa0JBQWtCLDBCQUEwQix5QkFBeUIsNEJBQTRCLGFBQWEscUJBQXFCLHlDQUF5QyxjQUFjLDZDQUE2Qyw2Q0FBNkMseUdBQXlHLFVBQVUsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUVqb0osaUNBQWlDLDBGQUFrQixlQUFlLCtFQUFXO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1GQUFXO0FBQzlDLHVDQUF1QywyQ0FBSSxHQUFHO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrQ0FBa0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBa0I7QUFDdEI7QUFDQTtBQUNBLElBQUksK0NBQXNCO0FBQzFCO0FBQ0E7QUFDQSxJQUFJLCtDQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QjtBQUNBO0FBQ0EsSUFBSSxrREFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDRHQUE0RztBQUN4SCxZQUFZLHlFQUFDLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUUseUVBQUMsbUJBQW1CLGdIQUFnSCxHQUFHLHlFQUFDO0FBQ25KO0FBQ0EsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJDQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQXFCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblFsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FFO0FBQ2hCOztBQUVyRDtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdFQUF3RTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnREFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3RUFBd0U7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLElBQUksbUZBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRXlGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdER6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NHO0FBQ2U7QUFDMUU7QUFDd0U7QUFDNUQ7QUFDQTs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLHNCQUFzQixxQkFBcUIseUJBQXlCLGlCQUFpQixnREFBZ0QsK0JBQStCLDBCQUEwQix3REFBd0QsaUJBQWlCLG9CQUFvQixhQUFhLGdEQUFnRCxXQUFXLGVBQWUsYUFBYSxjQUFjLHNCQUFzQix1QkFBdUIsV0FBVyxnQkFBZ0IseUJBQXlCLGFBQWEsaUJBQWlCLGNBQWMsb0JBQW9CLFlBQVksK0JBQStCLDBCQUEwQiw4QkFBOEIsYUFBYSxtQkFBbUIsZ0RBQWdELDBDQUEwQyx5QkFBeUIseUNBQXlDLHlCQUF5QixlQUFlLG9CQUFvQix5QkFBeUIsc0NBQXNDLGtCQUFrQiw4Q0FBOEMsK0JBQStCLDBCQUEwQix3REFBd0Qsb0JBQW9CLG1CQUFtQixrQkFBa0IscUJBQXFCLDBCQUEwQixhQUFhLHVCQUF1QixvQkFBb0IsdUNBQXVDLGtCQUFrQixtQkFBbUIsb0JBQW9CLHlCQUF5QixzQ0FBc0Msa0JBQWtCLCtCQUErQiwwQkFBMEIsd0RBQXdELG9EQUFvRCwrQkFBK0Isa0NBQWtDLHFCQUFxQixnQkFBZ0IsZ0RBQWdELGlDQUFpQyxlQUFlLDZDQUE2QyxrQ0FBa0MsNkNBQTZDLHVEQUF1RCxZQUFZLGdEQUFnRCxhQUFhLHVCQUF1Qix3REFBd0Qsa0JBQWtCLHlHQUF5RyxVQUFVLGdEQUFnRCwrQkFBK0Isd0RBQXdELCtCQUErQixnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRWxyRiwyQkFBMkIsMEZBQWtCLGVBQWUsK0VBQVc7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBK0I7QUFDbkMsSUFBSSxrREFBa0I7QUFDdEI7QUFDQTtBQUNBLElBQUksc0RBQWtDO0FBQ3RDLElBQUksa0RBQXFCO0FBQ3pCO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOENBQThDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5RUFBQyxVQUFVLFNBQVMsa0RBQWtELFdBQVcseUVBQUMsVUFBVSxlQUFlLEVBQUUseUVBQUMsbUJBQW1CLGdFQUFnRSxLQUFLLHlFQUFDLFVBQVUsNEJBQTRCLEVBQUUsMENBQVUsNEJBQTRCLHlFQUFDLFVBQVUsaUNBQWlDLEVBQUUseUVBQUMsV0FBVywwQkFBMEIsWUFBWSx5RUFBQyxVQUFVLGtCQUFrQixhQUFhLHlFQUFDLFVBQVUsa0JBQWtCLDJCQUEyQix5RUFBQyxVQUFVLHNCQUFzQixpQkFBaUIsMENBQVUsMEJBQTBCLHlFQUFDLFVBQVUsaUNBQWlDLEVBQUUseUVBQUMsV0FBVyx3QkFBd0I7QUFDM29CO0FBQ0E7QUFDQSxZQUFZLHlFQUFDLENBQUMsNEVBQVEscUJBQXFCLHlFQUFDLG1CQUFtQiwwQ0FBMEM7QUFDekc7QUFDQSxhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJDQUFxQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRStDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtdGlsZS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NvbmRpdGlvbmFsU2xvdC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvdGlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSwgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDQgfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDMgfSBmcm9tICcuL2xpbmsuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL3RpbGUuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNoZWNrZWQ6IFwiY2hlY2tlZFwiLFxuICBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvblwiLFxuICBkZXNjcmlwdGlvbk9ubHk6IFwiZGVzY3JpcHRpb24tb25seVwiLFxuICBkaXNhYmxlZDogXCJkaXNhYmxlZFwiLFxuICBoZWFkaW5nOiBcImhlYWRpbmdcIixcbiAgaGVhZGluZ09ubHk6IFwiaGVhZGluZy1vbmx5XCIsXG4gIGljb246IFwiaWNvblwiLFxuICBpY29uT25seTogXCJpY29uLW9ubHlcIixcbiAgaW5wdXRBbGlnbm1lbnRFbmQ6IFwiaW5wdXQtYWxpZ25tZW50LWVuZFwiLFxuICBpbnB1dEFsaWdubWVudFN0YXJ0OiBcImlucHV0LWFsaWdubWVudC1zdGFydFwiLFxuICBpbnB1dEVuYWJsZWQ6IFwiaW5wdXQtZW5hYmxlZFwiLFxuICBsYXJnZVZpc3VhbDogXCJsYXJnZS12aXN1YWxcIixcbiAgd2lkdGhBdXRvOiBcIndpZHRoLWF1dG9cIixcbiAgd2lkdGhGdWxsOiBcIndpZHRoLWZ1bGxcIixcbn07XG5cbmNvbnN0IHRpbGVTZWxlY3RDc3MgPSBcIjpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6YmxvY2t9Omhvc3QgLmNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtib3gtc2hhZG93OjAgMCAwIDFweCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0yKTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2s7YmxvY2stc2l6ZToxMDAlO21heC1pbmxpbmUtc2l6ZTozMDBweDtwYWRkaW5nOjAuNzVyZW07cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246dG9wO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfTpob3N0IC5jb250YWluZXIuY2hlY2tlZHt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0IC5jb250YWluZXIuaGVhZGluZy1vbmx5e2FsaWduLWl0ZW1zOmNlbnRlcn06aG9zdCAuY29udGFpbmVyOm5vdCguaW5wdXQtZW5hYmxlZCkgOjpzbG90dGVkKGNhbGNpdGUtY2hlY2tib3gpLDpob3N0IC5jb250YWluZXI6bm90KC5pbnB1dC1lbmFibGVkKSA6OnNsb3R0ZWQoY2FsY2l0ZS1yYWRpby1idXR0b24pe3Bvc2l0aW9uOmFic29sdXRlO2lubGluZS1zaXplOjFweDtibG9jay1zaXplOjFweDtwYWRkaW5nOjA7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwLCAwLCAwLCAwKTt3aGl0ZS1zcGFjZTpub3dyYXA7Ym9yZGVyLXdpZHRoOjB9Omhvc3QgLmNvbnRhaW5lci5mb2N1c2Vke291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QgLmNvbnRhaW5lci5mb2N1c2VkOm5vdCguZGlzYWJsZWQpOm5vdCguaW5wdXQtZW5hYmxlZCl7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApO291dGxpbmUtb2Zmc2V0Oi00cHg7Ym94LXNoYWRvdzowIDAgMCAxcHggdmFyKC0tY2FsY2l0ZS11aS1icmFuZCksIGluc2V0IDAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QgLmNvbnRhaW5lci5pbnB1dC1lbmFibGVkLmlucHV0LWFsaWdubWVudC1zdGFydC53aWR0aC1hdXRvLmhlYWRpbmctb25seSw6aG9zdCAuY29udGFpbmVyLmlucHV0LWVuYWJsZWQuaW5wdXQtYWxpZ25tZW50LXN0YXJ0LndpZHRoLWF1dG8uaWNvbi1vbmx5LDpob3N0IC5jb250YWluZXIuaW5wdXQtZW5hYmxlZC5pbnB1dC1hbGlnbm1lbnQtc3RhcnQud2lkdGgtYXV0by5kZXNjcmlwdGlvbi1vbmx5LDpob3N0IC5jb250YWluZXIuaW5wdXQtZW5hYmxlZC5pbnB1dC1hbGlnbm1lbnQtc3RhcnQud2lkdGgtYXV0by5oZWFkaW5nLmRlc2NyaXB0aW9uLDpob3N0IC5jb250YWluZXIuaW5wdXQtZW5hYmxlZC5pbnB1dC1hbGlnbm1lbnQtc3RhcnQud2lkdGgtYXV0by5pY29uLmRlc2NyaXB0aW9uLDpob3N0IC5jb250YWluZXIuaW5wdXQtZW5hYmxlZC5pbnB1dC1hbGlnbm1lbnQtc3RhcnQud2lkdGgtYXV0by5oZWFkaW5nLmljb24uZGVzY3JpcHRpb257ZGlzcGxheTppbmxpbmUtZ3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWF4LWNvbnRlbnQgMWZyfTpob3N0IC5jb250YWluZXIuaW5wdXQtZW5hYmxlZC5pbnB1dC1hbGlnbm1lbnQtc3RhcnQuaGVhZGluZy1vbmx5LDpob3N0IC5jb250YWluZXIuaW5wdXQtZW5hYmxlZC5pbnB1dC1hbGlnbm1lbnQtc3RhcnQuaWNvbi1vbmx5LDpob3N0IC5jb250YWluZXIuaW5wdXQtZW5hYmxlZC5pbnB1dC1hbGlnbm1lbnQtc3RhcnQuZGVzY3JpcHRpb24tb25seSw6aG9zdCAuY29udGFpbmVyLmlucHV0LWVuYWJsZWQuaW5wdXQtYWxpZ25tZW50LXN0YXJ0LmhlYWRpbmcuZGVzY3JpcHRpb24sOmhvc3QgLmNvbnRhaW5lci5pbnB1dC1lbmFibGVkLmlucHV0LWFsaWdubWVudC1zdGFydC5pY29uLmRlc2NyaXB0aW9uLDpob3N0IC5jb250YWluZXIuaW5wdXQtZW5hYmxlZC5pbnB1dC1hbGlnbm1lbnQtc3RhcnQuaGVhZGluZy5pY29uLmRlc2NyaXB0aW9ue2dhcDowLjc1cmVtfTpob3N0IC5jb250YWluZXIuaW5wdXQtZW5hYmxlZC5pbnB1dC1hbGlnbm1lbnQtc3RhcnQgY2FsY2l0ZS10aWxle29yZGVyOjF9Omhvc3QgLmNvbnRhaW5lci5pbnB1dC1lbmFibGVkLmlucHV0LWFsaWdubWVudC1zdGFydC5sYXJnZS12aXN1YWwgOjpzbG90dGVkKGNhbGNpdGUtY2hlY2tib3gpLDpob3N0IC5jb250YWluZXIuaW5wdXQtZW5hYmxlZC5pbnB1dC1hbGlnbm1lbnQtc3RhcnQubGFyZ2UtdmlzdWFsIDo6c2xvdHRlZChjYWxjaXRlLXJhZGlvLWJ1dHRvbil7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtYmxvY2stc3RhcnQ6MC43NXJlbTtpbnNldC1pbmxpbmUtc3RhcnQ6MC43NXJlbX06aG9zdCAuY29udGFpbmVyLmlucHV0LWVuYWJsZWQuaW5wdXQtYWxpZ25tZW50LWVuZC53aWR0aC1hdXRvLmhlYWRpbmctb25seSw6aG9zdCAuY29udGFpbmVyLmlucHV0LWVuYWJsZWQuaW5wdXQtYWxpZ25tZW50LWVuZC53aWR0aC1hdXRvLmljb24tb25seXtkaXNwbGF5OmlubGluZS1ncmlkO2dyaWQtZ2FwOjAuNzVyZW07Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1heC1jb250ZW50IDFmcn06aG9zdCAuY29udGFpbmVyLmlucHV0LWVuYWJsZWQuaW5wdXQtYWxpZ25tZW50LWVuZC5oZWFkaW5nLW9ubHksOmhvc3QgLmNvbnRhaW5lci5pbnB1dC1lbmFibGVkLmlucHV0LWFsaWdubWVudC1lbmQuaWNvbi1vbmx5e2dhcDowLjc1cmVtfTpob3N0IC5jb250YWluZXIuaW5wdXQtZW5hYmxlZC5pbnB1dC1hbGlnbm1lbnQtZW5kLmRlc2NyaXB0aW9uLW9ubHkgOjpzbG90dGVkKGNhbGNpdGUtY2hlY2tib3gpLDpob3N0IC5jb250YWluZXIuaW5wdXQtZW5hYmxlZC5pbnB1dC1hbGlnbm1lbnQtZW5kLmRlc2NyaXB0aW9uLW9ubHkgOjpzbG90dGVkKGNhbGNpdGUtcmFkaW8tYnV0dG9uKSw6aG9zdCAuY29udGFpbmVyLmlucHV0LWVuYWJsZWQuaW5wdXQtYWxpZ25tZW50LWVuZC5oZWFkaW5nLmRlc2NyaXB0aW9uIDo6c2xvdHRlZChjYWxjaXRlLWNoZWNrYm94KSw6aG9zdCAuY29udGFpbmVyLmlucHV0LWVuYWJsZWQuaW5wdXQtYWxpZ25tZW50LWVuZC5oZWFkaW5nLmRlc2NyaXB0aW9uIDo6c2xvdHRlZChjYWxjaXRlLXJhZGlvLWJ1dHRvbiksOmhvc3QgLmNvbnRhaW5lci5pbnB1dC1lbmFibGVkLmlucHV0LWFsaWdubWVudC1lbmQuaWNvbi5kZXNjcmlwdGlvbiA6OnNsb3R0ZWQoY2FsY2l0ZS1jaGVja2JveCksOmhvc3QgLmNvbnRhaW5lci5pbnB1dC1lbmFibGVkLmlucHV0LWFsaWdubWVudC1lbmQuaWNvbi5kZXNjcmlwdGlvbiA6OnNsb3R0ZWQoY2FsY2l0ZS1yYWRpby1idXR0b24pLDpob3N0IC5jb250YWluZXIuaW5wdXQtZW5hYmxlZC5pbnB1dC1hbGlnbm1lbnQtZW5kLmhlYWRpbmcuaWNvbi5kZXNjcmlwdGlvbiA6OnNsb3R0ZWQoY2FsY2l0ZS1jaGVja2JveCksOmhvc3QgLmNvbnRhaW5lci5pbnB1dC1lbmFibGVkLmlucHV0LWFsaWdubWVudC1lbmQuaGVhZGluZy5pY29uLmRlc2NyaXB0aW9uIDo6c2xvdHRlZChjYWxjaXRlLXJhZGlvLWJ1dHRvbil7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtYmxvY2stc3RhcnQ6MC43NXJlbTtpbnNldC1pbmxpbmUtZW5kOjAuNzVyZW19Omhvc3QgLmNvbnRhaW5lci5pbnB1dC1lbmFibGVkLmlucHV0LWFsaWdubWVudC1lbmQubGFyZ2UtdmlzdWFsIDo6c2xvdHRlZChjYWxjaXRlLWNoZWNrYm94KSw6aG9zdCAuY29udGFpbmVyLmlucHV0LWVuYWJsZWQuaW5wdXQtYWxpZ25tZW50LWVuZC5sYXJnZS12aXN1YWwgOjpzbG90dGVkKGNhbGNpdGUtcmFkaW8tYnV0dG9uKXtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1ibG9jay1zdGFydDowLjc1cmVtO2luc2V0LWlubGluZS1lbmQ6MC43NXJlbX06aG9zdCAuY29udGFpbmVyLndpZHRoLWZ1bGx7ZGlzcGxheTpmbGV4O21heC1pbmxpbmUtc2l6ZTpub25lfTpob3N0IC5jb250YWluZXIud2lkdGgtZnVsbCBjYWxjaXRlLXRpbGV7ZmxleDoxIDEgYXV0b306aG9zdCg6aG92ZXIpIC5jb250YWluZXI6bm90KC5pbnB1dC1lbmFibGVkKXtib3gtc2hhZG93OjAgMCAwIDFweCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IFRpbGVTZWxlY3QgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZVRpbGVTZWxlY3RDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVUaWxlU2VsZWN0Q2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuZ3VpZCA9IGBjYWxjaXRlLXRpbGUtc2VsZWN0LSR7Z3VpZCgpfWA7XG4gICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5oZWFkaW5nID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5pY29uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlucHV0QWxpZ25tZW50ID0gXCJzdGFydFwiO1xuICAgIHRoaXMudHlwZSA9IFwicmFkaW9cIjtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMud2lkdGggPSBcImF1dG9cIjtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgfVxuICBjaGVja2VkQ2hhbmdlZChuZXdDaGVja2VkKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gbmV3Q2hlY2tlZDtcbiAgfVxuICBuYW1lQ2hhbmdlZChuZXdOYW1lKSB7XG4gICAgdGhpcy5pbnB1dC5uYW1lID0gbmV3TmFtZTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5pbnB1dD8uc2V0Rm9jdXMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjaGVja2JveENoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoY2hlY2tib3ggPT09IHRoaXMuaW5wdXQpIHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9IGNoZWNrYm94LmNoZWNrZWQ7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuY2FsY2l0ZVRpbGVTZWxlY3RDaGFuZ2UuZW1pdCgpO1xuICB9XG4gIGNoZWNrYm94Rm9jdXNCbHVySGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChjaGVja2JveCA9PT0gdGhpcy5pbnB1dCkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gZXZlbnQuZGV0YWlsO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICByYWRpb0J1dHRvbkNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCByYWRpb0J1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAocmFkaW9CdXR0b24gPT09IHRoaXMuaW5wdXQpIHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9IHJhZGlvQnV0dG9uLmNoZWNrZWQ7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuY2FsY2l0ZVRpbGVTZWxlY3RDaGFuZ2UuZW1pdCgpO1xuICB9XG4gIHJhZGlvQnV0dG9uQ2hlY2tlZENoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCByYWRpb0J1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAocmFkaW9CdXR0b24gPT09IHRoaXMuaW5wdXQpIHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9IHJhZGlvQnV0dG9uLmNoZWNrZWQ7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIHJhZGlvQnV0dG9uRm9jdXNCbHVySGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHJhZGlvQnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChyYWRpb0J1dHRvbiA9PT0gdGhpcy5pbnB1dCkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gcmFkaW9CdXR0b24uZm9jdXNlZDtcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgY2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHRhcmdldHMgPSBbXCJjYWxjaXRlLXRpbGVcIiwgXCJjYWxjaXRlLXRpbGUtc2VsZWN0XCJdO1xuICAgIGlmICh0YXJnZXRzLmluY2x1ZGVzKHRhcmdldC5sb2NhbE5hbWUpKSB7XG4gICAgICB0aGlzLmlucHV0LmNsaWNrKCk7XG4gICAgfVxuICB9XG4gIHBvaW50ZXJFbnRlckhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBsb2NhbE5hbWUgfSA9IHRoaXMuaW5wdXQ7XG4gICAgaWYgKGxvY2FsTmFtZSA9PT0gXCJjYWxjaXRlLXJhZGlvLWJ1dHRvblwiIHx8IGxvY2FsTmFtZSA9PT0gXCJjYWxjaXRlLWNoZWNrYm94XCIpIHtcbiAgICAgIHRoaXMuaW5wdXQuaG92ZXJlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHBvaW50ZXJMZWF2ZUhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBsb2NhbE5hbWUgfSA9IHRoaXMuaW5wdXQ7XG4gICAgaWYgKGxvY2FsTmFtZSA9PT0gXCJjYWxjaXRlLXJhZGlvLWJ1dHRvblwiIHx8IGxvY2FsTmFtZSA9PT0gXCJjYWxjaXRlLWNoZWNrYm94XCIpIHtcbiAgICAgIHRoaXMuaW5wdXQuaG92ZXJlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnJlbmRlcklucHV0KCk7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuaW5wdXQpO1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJJbnB1dCgpIHtcbiAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnR5cGUgPT09IFwicmFkaW9cIiA/IFwiY2FsY2l0ZS1yYWRpby1idXR0b25cIiA6IFwiY2FsY2l0ZS1jaGVja2JveFwiKTtcbiAgICB0aGlzLmlucHV0LmNoZWNrZWQgPSB0aGlzLmNoZWNrZWQ7XG4gICAgdGhpcy5pbnB1dC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgdGhpcy5pbnB1dC5oaWRkZW4gPSB0aGlzLmhpZGRlbjtcbiAgICB0aGlzLmlucHV0LmlkID0gdGhpcy5ndWlkO1xuICAgIHRoaXMuaW5wdXQubGFiZWwgPSB0aGlzLmhlYWRpbmcgfHwgdGhpcy5uYW1lIHx8IFwiXCI7XG4gICAgaWYgKHRoaXMubmFtZSkge1xuICAgICAgdGhpcy5pbnB1dC5uYW1lID0gdGhpcy5uYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMudmFsdWUgIT0gbnVsbCA/IHRoaXMudmFsdWUudG9TdHJpbmcoKSA6IFwiXCI7XG4gICAgfVxuICAgIHRoaXMuZWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHRoaXMuaW5wdXQpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoZWNrZWQsIGRlc2NyaXB0aW9uLCBkaXNhYmxlZCwgZm9jdXNlZCwgaGVhZGluZywgaWNvbiwgaW5wdXRBbGlnbm1lbnQsIGlucHV0RW5hYmxlZCwgd2lkdGgsIGljb25GbGlwUnRsLCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBjaGVja2VkLFxuICAgICAgICBjb250YWluZXI6IHRydWUsXG4gICAgICAgIFtDU1MuZGVzY3JpcHRpb25dOiBCb29sZWFuKGRlc2NyaXB0aW9uKSxcbiAgICAgICAgW0NTUy5kZXNjcmlwdGlvbk9ubHldOiBCb29sZWFuKCFoZWFkaW5nICYmICFpY29uICYmIGRlc2NyaXB0aW9uKSxcbiAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgIGZvY3VzZWQsXG4gICAgICAgIFtDU1MuaGVhZGluZ106IEJvb2xlYW4oaGVhZGluZyksXG4gICAgICAgIFtDU1MuaGVhZGluZ09ubHldOiBoZWFkaW5nICYmICFpY29uICYmICFkZXNjcmlwdGlvbixcbiAgICAgICAgW0NTUy5pY29uXTogQm9vbGVhbihpY29uKSxcbiAgICAgICAgW0NTUy5pY29uT25seV06ICFoZWFkaW5nICYmIGljb24gJiYgIWRlc2NyaXB0aW9uLFxuICAgICAgICBbQ1NTLmlucHV0QWxpZ25tZW50RW5kXTogaW5wdXRBbGlnbm1lbnQgPT09IFwiZW5kXCIsXG4gICAgICAgIFtDU1MuaW5wdXRBbGlnbm1lbnRTdGFydF06IGlucHV0QWxpZ25tZW50ID09PSBcInN0YXJ0XCIsXG4gICAgICAgIFtDU1MuaW5wdXRFbmFibGVkXTogaW5wdXRFbmFibGVkLFxuICAgICAgICBbQ1NTLmxhcmdlVmlzdWFsXTogaGVhZGluZyAmJiBpY29uICYmICFkZXNjcmlwdGlvbixcbiAgICAgICAgW0NTUy53aWR0aEF1dG9dOiB3aWR0aCA9PT0gXCJhdXRvXCIsXG4gICAgICAgIFtDU1Mud2lkdGhGdWxsXTogd2lkdGggPT09IFwiZnVsbFwiLFxuICAgICAgfSB9LCBoKFwiY2FsY2l0ZS10aWxlXCIsIHsgYWN0aXZlOiBjaGVja2VkLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIGVtYmVkOiB0cnVlLCBoZWFkaW5nOiBoZWFkaW5nLCBpY29uOiBpY29uLCBpY29uRmxpcFJ0bDogaWNvbkZsaXBSdGwgfSksIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiY2hlY2tlZFwiOiBbXCJjaGVja2VkQ2hhbmdlZFwiXSxcbiAgICBcIm5hbWVcIjogW1wibmFtZUNoYW5nZWRcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gdGlsZVNlbGVjdENzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS10aWxlLXNlbGVjdFwiLCB7XG4gICAgXCJjaGVja2VkXCI6IFsxNTQwXSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFs1MTNdLFxuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJoZWFkaW5nXCI6IFs1MTNdLFxuICAgIFwiaGlkZGVuXCI6IFs1MTZdLFxuICAgIFwiaWNvblwiOiBbNTEzXSxcbiAgICBcImljb25GbGlwUnRsXCI6IFs1MTYsIFwiaWNvbi1mbGlwLXJ0bFwiXSxcbiAgICBcIm5hbWVcIjogWzUyMF0sXG4gICAgXCJpbnB1dEVuYWJsZWRcIjogWzUxNiwgXCJpbnB1dC1lbmFibGVkXCJdLFxuICAgIFwiaW5wdXRBbGlnbm1lbnRcIjogWzUxMywgXCJpbnB1dC1hbGlnbm1lbnRcIl0sXG4gICAgXCJ0eXBlXCI6IFs1MTNdLFxuICAgIFwidmFsdWVcIjogWzhdLFxuICAgIFwid2lkdGhcIjogWzUxM10sXG4gICAgXCJmb2N1c2VkXCI6IFszMl0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdXG4gIH0sIFtbMCwgXCJjYWxjaXRlQ2hlY2tib3hDaGFuZ2VcIiwgXCJjaGVja2JveENoYW5nZUhhbmRsZXJcIl0sIFswLCBcImNhbGNpdGVJbnRlcm5hbENoZWNrYm94Rm9jdXNcIiwgXCJjaGVja2JveEZvY3VzQmx1ckhhbmRsZXJcIl0sIFswLCBcImNhbGNpdGVJbnRlcm5hbENoZWNrYm94Qmx1clwiLCBcImNoZWNrYm94Rm9jdXNCbHVySGFuZGxlclwiXSwgWzAsIFwiY2FsY2l0ZVJhZGlvQnV0dG9uQ2hhbmdlXCIsIFwicmFkaW9CdXR0b25DaGFuZ2VIYW5kbGVyXCJdLCBbMCwgXCJjYWxjaXRlSW50ZXJuYWxSYWRpb0J1dHRvbkNoZWNrZWRDaGFuZ2VcIiwgXCJyYWRpb0J1dHRvbkNoZWNrZWRDaGFuZ2VIYW5kbGVyXCJdLCBbMCwgXCJjYWxjaXRlSW50ZXJuYWxSYWRpb0J1dHRvbkZvY3VzXCIsIFwicmFkaW9CdXR0b25Gb2N1c0JsdXJIYW5kbGVyXCJdLCBbMCwgXCJjYWxjaXRlSW50ZXJuYWxSYWRpb0J1dHRvbkJsdXJcIiwgXCJyYWRpb0J1dHRvbkZvY3VzQmx1ckhhbmRsZXJcIl0sIFswLCBcImNsaWNrXCIsIFwiY2xpY2tIYW5kbGVyXCJdLCBbMSwgXCJwb2ludGVyZW50ZXJcIiwgXCJwb2ludGVyRW50ZXJIYW5kbGVyXCJdLCBbMSwgXCJwb2ludGVybGVhdmVcIiwgXCJwb2ludGVyTGVhdmVIYW5kbGVyXCJdXV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXRpbGUtc2VsZWN0XCIsIFwiY2FsY2l0ZS1pY29uXCIsIFwiY2FsY2l0ZS1saW5rXCIsIFwiY2FsY2l0ZS10aWxlXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXRpbGUtc2VsZWN0XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgVGlsZVNlbGVjdCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDQoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWxpbmtcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtdGlsZVwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlVGlsZVNlbGVjdCA9IFRpbGVTZWxlY3Q7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlVGlsZVNlbGVjdCwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZm9yY2VVcGRhdGUgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuXG5jb25zdCBvYnNlcnZlZCA9IG5ldyBTZXQoKTtcbmxldCBtdXRhdGlvbk9ic2VydmVyO1xuY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0geyBjaGlsZExpc3Q6IHRydWUgfTtcbi8qKlxuICogSGVscGVyIHRvIHNldCB1cCBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGNvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBpZiAoIW11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCBwcm9jZXNzTXV0YXRpb25zKTtcbiAgfVxuICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoY29tcG9uZW50LmVsLCBvYnNlcnZlck9wdGlvbnMpO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gdGVhciBkb3duIGEgY29uZGl0aW9uYWwgc2xvdCBjb21wb25lbnQgb24gZGlzY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQGRlcHJlY2F0ZWQgVXNlIGBvblNsb3RjaGFuZ2VgIGV2ZW50IHdpdGggYHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnRgIERPTSB1dGlsaXR5IGluc3RlYWQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNFbGVtZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCl9IC8+fVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIG9ic2VydmVkLmRlbGV0ZShjb21wb25lbnQuZWwpO1xuICAvLyB3ZSBleHBsaWNpdGx5IHByb2Nlc3MgcXVldWVkIG11dGF0aW9ucyBhbmQgZGlzY29ubmVjdCBhbmQgcmVjb25uZWN0XG4gIC8vIHRoZSBvYnNlcnZlciB1bnRpbCBNdXRhdGlvbk9ic2VydmVyIGdldHMgYW4gYHVub2JzZXJ2ZWAgbWV0aG9kXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMTI2XG4gIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25PYnNlcnZlci50YWtlUmVjb3JkcygpKTtcbiAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIGZvciAoY29uc3QgW2VsZW1lbnRdIG9mIG9ic2VydmVkLmVudHJpZXMoKSkge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCBvYnNlcnZlck9wdGlvbnMpO1xuICB9XG59XG5mdW5jdGlvbiBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9ucykge1xuICBtdXRhdGlvbnMuZm9yRWFjaCgoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGZvcmNlVXBkYXRlKHRhcmdldCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGMsIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgRnJhZ21lbnQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQsIGQgYXMgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCB9IGZyb20gJy4vY29uZGl0aW9uYWxTbG90LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U2xvdHRlZCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi9saW5rLmpzJztcblxuY29uc3QgU0xPVFMgPSB7XG4gIGNvbnRlbnRTdGFydDogXCJjb250ZW50LXN0YXJ0XCIsXG4gIGNvbnRlbnRFbmQ6IFwiY29udGVudC1lbmRcIixcbn07XG5cbmNvbnN0IHRpbGVDc3MgPSBcIjpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmlubGluZS1ibG9jazstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7dHJhbnNpdGlvbi1kdXJhdGlvbjoxNTBtczt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpfTpob3N0IC5jb250YWluZXJ7cG9pbnRlci1ldmVudHM6bm9uZTtkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7Z2FwOjAuNXJlbX06aG9zdCAuY29udGVudHtkaXNwbGF5OmZsZXg7ZmxleDoxIDEgYXV0bztmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmNlbnRlcjtnYXA6MC41cmVtO2lubGluZS1zaXplOjEwJX06aG9zdCAuY29udGVudC1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7ZmxleDoxIDEgYXV0bzthbGlnbi1pdGVtczpzdHJldGNoO3BhZGRpbmc6MHB4O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0IC5jb250ZW50LXNsb3QtY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QgLmNvbnRlbnQtc2xvdC1jb250YWluZXI6Zmlyc3QtY2hpbGR7cGFkZGluZy1pbmxpbmU6MCAwLjc1cmVtfTpob3N0IC5jb250ZW50LXNsb3QtY29udGFpbmVyOmxhc3QtY2hpbGR7cGFkZGluZy1pbmxpbmU6MC43NXJlbSAwfTpob3N0IC5oZWFkaW5ne3BvaW50ZXItZXZlbnRzOm5vbmU7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MS4zNzU7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSl9Omhvc3QgLmxhcmdlLXZpc3VhbHthbGlnbi1pdGVtczpjZW50ZXI7dGV4dC1hbGlnbjpjZW50ZXI7bWluLWJsb2NrLXNpemU6MTJyZW19Omhvc3QgLmxhcmdlLXZpc3VhbCAuaWNvbntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1zZWxmOmZsZXgtZW5kfTpob3N0IC5sYXJnZS12aXN1YWwgLmNvbnRlbnQtY29udGFpbmVye2FsaWduLXNlbGY6Y2VudGVyfTpob3N0IC5kZXNjcmlwdGlvbntwb2ludGVyLWV2ZW50czpub25lO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjEuMzc1O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSl9Omhvc3QoW2hyZWZdKSAuaGVhZGluZyw6aG9zdChbaHJlZl06aG92ZXIpIC5oZWFkaW5ne3RleHQtZGVjb3JhdGlvbi1saW5lOnVuZGVybGluZTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtbGluayl9Omhvc3QoOm5vdChbZW1iZWRdKSl7cGFkZGluZzowLjc1cmVtO2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTIpfTpob3N0KDpub3QoW2VtYmVkXSlbaHJlZl06aG92ZXIpe2N1cnNvcjpwb2ludGVyO2JveC1zaGFkb3c6MCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KDpub3QoW2VtYmVkXSlbaHJlZl06YWN0aXZlKXtib3gtc2hhZG93OjAgMCAwIDNweCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbaWNvbl1baGVhZGluZ106bm90KFtkZXNjcmlwdGlvbl0pOm5vdChbZW1iZWRdKSl7cGFkZGluZzowcHh9Omhvc3QoW2ljb25dW2hlYWRpbmddOm5vdChbZGVzY3JpcHRpb25dKSkgLmljb257ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXJ9Omhvc3QoW2ljb25dW2hlYWRpbmddOm5vdChbZGVzY3JpcHRpb25dKSkgLmxhcmdlLXZpc3VhbHt0ZXh0LWFsaWduOmNlbnRlcn06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QoOmhvdmVyKSAuaGVhZGluZyw6aG9zdChbYWN0aXZlXSkgLmhlYWRpbmd7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KDpob3ZlcikgLmRlc2NyaXB0aW9uLDpob3N0KFthY3RpdmVdKSAuZGVzY3JpcHRpb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBUaWxlID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZW1iZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhlYWRpbmcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgICB0aGlzLmhyZWYgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSBmYWxzZTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlclRpbGUoKSB7XG4gICAgY29uc3QgeyBpY29uLCBlbCwgaGVhZGluZywgZGVzY3JpcHRpb24sIGljb25GbGlwUnRsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGlzTGFyZ2VWaXN1YWwgPSBoZWFkaW5nICYmIGljb24gJiYgIWRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGljb25TdHlsZSA9IGlzTGFyZ2VWaXN1YWxcbiAgICAgID8ge1xuICAgICAgICBoZWlnaHQ6IFwiNjRweFwiLFxuICAgICAgICB3aWR0aDogXCI2NHB4XCIsXG4gICAgICB9XG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogeyBjb250YWluZXI6IHRydWUsIFwibGFyZ2UtdmlzdWFsXCI6IGlzTGFyZ2VWaXN1YWwgfSB9LCBpY29uICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaWNvblwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBmbGlwUnRsOiBpY29uRmxpcFJ0bCwgaWNvbjogaWNvbiwgc2NhbGU6IFwibFwiLCBzdHlsZTogaWNvblN0eWxlIH0pKSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJjb250ZW50LWNvbnRhaW5lclwiIH0sIGdldFNsb3R0ZWQoZWwsIFNMT1RTLmNvbnRlbnRTdGFydCkgPyAoaChcImRpdlwiLCB7IGNsYXNzOiBcImNvbnRlbnQtc2xvdC1jb250YWluZXJcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmNvbnRlbnRTdGFydCB9KSkpIDogbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBcImNvbnRlbnRcIiB9LCBoZWFkaW5nICYmIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoZWFkaW5nXCIgfSwgaGVhZGluZyksIGRlc2NyaXB0aW9uICYmIGgoXCJkaXZcIiwgeyBjbGFzczogXCJkZXNjcmlwdGlvblwiIH0sIGRlc2NyaXB0aW9uKSksIGdldFNsb3R0ZWQoZWwsIFNMT1RTLmNvbnRlbnRFbmQpID8gKGgoXCJkaXZcIiwgeyBjbGFzczogXCJjb250ZW50LXNsb3QtY29udGFpbmVyXCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5jb250ZW50RW5kIH0pKSkgOiBudWxsKSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoRnJhZ21lbnQsIG51bGwsIHRoaXMuaHJlZiA/IChoKFwiY2FsY2l0ZS1saW5rXCIsIHsgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIGhyZWY6IHRoaXMuaHJlZiB9LCB0aGlzLnJlbmRlclRpbGUoKSkpIDogKHRoaXMucmVuZGVyVGlsZSgpKSkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHRpbGVDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtdGlsZVwiLCB7XG4gICAgXCJhY3RpdmVcIjogWzUxNl0sXG4gICAgXCJkZXNjcmlwdGlvblwiOiBbNTEzXSxcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwiZW1iZWRcIjogWzUxNl0sXG4gICAgXCJmb2N1c2VkXCI6IFs1MTZdLFxuICAgIFwiaGVhZGluZ1wiOiBbNTEzXSxcbiAgICBcImhpZGRlblwiOiBbNTE2XSxcbiAgICBcImhyZWZcIjogWzUxM10sXG4gICAgXCJpY29uXCI6IFs1MTNdLFxuICAgIFwiaWNvbkZsaXBSdGxcIjogWzUxNiwgXCJpY29uLWZsaXAtcnRsXCJdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtdGlsZVwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtbGlua1wiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS10aWxlXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgVGlsZSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWxpbmtcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IFRpbGUgYXMgVCwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=