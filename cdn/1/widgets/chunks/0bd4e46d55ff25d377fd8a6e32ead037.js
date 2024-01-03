"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-block_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-block.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-block.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteBlock: () => (/* binding */ CalciteBlock),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _Heading_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Heading.js */ "./node_modules/@esri/calcite-components/dist/components/Heading.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _openCloseComponent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./openCloseComponent.js */ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _action_menu_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./action-menu.js */ "./node_modules/@esri/calcite-components/dist/components/action-menu.js");
/* harmony import */ var _handle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./handle.js */ "./node_modules/@esri/calcite-components/dist/components/handle.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _popover_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./popover.js */ "./node_modules/@esri/calcite-components/dist/components/popover.js");
/* harmony import */ var _scrim_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scrim.js */ "./node_modules/@esri/calcite-components/dist/components/scrim.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */

















const IDS = {
  content: "content",
  toggle: "toggle",
  header: "header",
};
const CSS = {
  button: "button",
  container: "container",
  content: "content",
  controlContainer: "control-container",
  description: "description",
  header: "header",
  headerContainer: "header-container",
  heading: "heading",
  icon: "icon",
  invalid: "invalid",
  statusIcon: "status-icon",
  summary: "summary",
  title: "title",
  toggle: "toggle",
  toggleIcon: "toggle-icon",
  valid: "valid",
};
const SLOTS = {
  icon: "icon",
  control: "control",
  headerMenuActions: "header-menu-actions",
};
const ICONS = {
  opened: "chevron-up",
  closed: "chevron-down",
  valid: "check-circle",
  invalid: "exclamation-mark-triangle",
};

const blockCss = ":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding:0px;transition-property:margin;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);flex-basis:auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{justify-content:flex-start;padding:0px}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:\"handle header control menu\";grid-column:header-start/menu-end;grid-row:1/2}.toggle{margin:0px;display:flex;cursor:pointer;flex-wrap:nowrap;align-items:center;justify-content:space-between;border-style:none;padding:0px;font-family:inherit;outline-color:transparent;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px;padding:0.75rem}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-2);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.description{margin-block-start:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3);word-wrap:break-word;word-break:break-word}.icon{display:flex;margin-inline-start:0.75rem;margin-inline-end:0px}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}@keyframes spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.toggle-icon{margin-block:0.75rem;align-self:center;justify-self:end;color:var(--calcite-ui-text-3);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:0.75rem;margin-inline-start:auto}.toggle:hover .toggle-icon{color:var(--calcite-ui-text-1)}.container{position:relative;display:flex;block-size:100%;flex-direction:column}.content{position:relative;min-block-size:0px;flex:1 1 0%}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-block:var(--calcite-block-padding, 0.5rem);padding-inline:var(--calcite-block-padding, 0.625rem)}.control-container{margin:0px;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}:host([open]){margin-block:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}:host([hidden]){display:none}[hidden]{display:none}";

const Block = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteBlockBeforeClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.createEvent)(this, "calciteBlockBeforeClose", 6);
    this.calciteBlockBeforeOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.createEvent)(this, "calciteBlockBeforeOpen", 6);
    this.calciteBlockClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.createEvent)(this, "calciteBlockClose", 6);
    this.calciteBlockOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.createEvent)(this, "calciteBlockOpen", 6);
    this.calciteBlockToggle = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.createEvent)(this, "calciteBlockToggle", 6);
    this.openTransitionProp = "opacity";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.onHeaderClick = () => {
      this.open = !this.open;
      this.calciteBlockToggle.emit();
    };
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
    };
    this.collapsible = false;
    this.disabled = false;
    this.dragHandle = false;
    this.heading = undefined;
    this.headingLevel = undefined;
    this.loading = false;
    this.open = false;
    this.status = undefined;
    this.description = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  openHandler() {
    (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_7__.o)(this);
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
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.el);
  }
  onBeforeOpen() {
    this.calciteBlockBeforeOpen.emit();
  }
  onOpen() {
    this.calciteBlockOpen.emit();
  }
  onBeforeClose() {
    this.calciteBlockBeforeClose.emit();
  }
  onClose() {
    this.calciteBlockClose.emit();
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
    if (this.open) {
      (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_7__.o)(this);
    }
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderScrim() {
    const { loading } = this;
    const defaultSlot = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("slot", null);
    return [loading ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("calcite-scrim", { loading: loading }) : null, defaultSlot];
  }
  renderIcon() {
    const { loading, messages, status } = this;
    const hasSlottedIcon = !!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el, SLOTS.icon);
    return loading ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("div", { class: CSS.icon, key: "loader" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("calcite-loader", { inline: true, label: messages.loading }))) : !!status ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("div", { class: CSS.icon, key: "status-icon" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("calcite-icon", { class: {
        [CSS.statusIcon]: true,
        [CSS.valid]: status == "valid",
        [CSS.invalid]: status == "invalid",
      }, icon: ICONS[status], scale: "s" }))) : hasSlottedIcon ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("div", { class: CSS.icon, key: "icon-slot" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("slot", { key: "icon-slot", name: SLOTS.icon }))) : null;
  }
  renderTitle() {
    const { heading, headingLevel, description } = this;
    return heading || description ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("div", { class: CSS.title }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)(_Heading_js__WEBPACK_IMPORTED_MODULE_5__.H, { class: CSS.heading, level: headingLevel }, heading), description ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("div", { class: CSS.description }, description) : null)) : null;
  }
  render() {
    const { collapsible, el, loading, open, messages } = this;
    const toggleLabel = open ? messages.collapse : messages.expand;
    const headerContent = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("header", { class: CSS.header, id: IDS.header }, this.renderIcon(), this.renderTitle()));
    const hasControl = !!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.control);
    const hasMenuActions = !!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.headerMenuActions);
    const collapseIcon = open ? ICONS.opened : ICONS.closed;
    const headerNode = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("div", { class: CSS.headerContainer }, this.dragHandle ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("calcite-handle", null) : null, collapsible ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("button", { "aria-controls": IDS.content, "aria-describedby": IDS.header, "aria-expanded": collapsible ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(open) : null, class: CSS.toggle, id: IDS.toggle, onClick: this.onHeaderClick, title: toggleLabel }, headerContent, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("calcite-icon", { "aria-hidden": "true", class: CSS.toggleIcon, icon: collapseIcon, scale: "s" }))) : (headerContent), hasControl ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("div", { class: CSS.controlContainer }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("slot", { name: SLOTS.control }))) : null, hasMenuActions ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("calcite-action-menu", { label: messages.options }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("slot", { name: SLOTS.headerMenuActions }))) : null));
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("article", { "aria-busy": (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(loading), class: {
        [CSS.container]: true,
      } }, headerNode, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("section", { "aria-labelledby": IDS.toggle, class: CSS.content, hidden: !open, id: IDS.content,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setTransitionEl }, this.renderScrim()))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "open": ["openHandler"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return blockCss; }
}, [1, "calcite-block", {
    "collapsible": [516],
    "disabled": [516],
    "dragHandle": [516, "drag-handle"],
    "heading": [1],
    "headingLevel": [514, "heading-level"],
    "loading": [516],
    "open": [1540],
    "status": [513],
    "description": [1],
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
  const components = ["calcite-block", "calcite-action", "calcite-action-menu", "calcite-handle", "calcite-icon", "calcite-loader", "calcite-popover", "calcite-scrim"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-block":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Block);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
    case "calcite-action-menu":
      if (!customElements.get(tagName)) {
        (0,_action_menu_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
    case "calcite-handle":
      if (!customElements.get(tagName)) {
        (0,_handle_js__WEBPACK_IMPORTED_MODULE_10__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_11__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_12__.d)();
      }
      break;
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        (0,_popover_js__WEBPACK_IMPORTED_MODULE_13__.d)();
      }
      break;
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        (0,_scrim_js__WEBPACK_IMPORTED_MODULE_14__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteBlock = Block;
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

/***/ "./node_modules/@esri/calcite-components/dist/components/handle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/handle.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ Handle),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */







const CSS = {
  handle: "handle",
  handleActivated: "handle--activated",
};
const ICONS = {
  drag: "drag",
};

const handleCss = ":host{display:flex}.handle{display:flex;cursor:move;align-items:center;justify-content:center;align-self:stretch;border-style:none;background-color:transparent;outline-color:transparent;color:var(--calcite-ui-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}:host([hidden]){display:none}[hidden]{display:none}";

const Handle = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteHandleNudge = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteHandleNudge", 6);
    this.calciteInternalHandleChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteInternalHandleChange", 6);
    this.handleKeyDown = (event) => {
      switch (event.key) {
        case " ":
          this.activated = !this.activated;
          event.preventDefault();
          break;
        case "ArrowUp":
          if (!this.activated) {
            return;
          }
          event.preventDefault();
          this.calciteHandleNudge.emit({ direction: "up" });
          break;
        case "ArrowDown":
          if (!this.activated) {
            return;
          }
          event.preventDefault();
          this.calciteHandleNudge.emit({ direction: "down" });
          break;
      }
    };
    this.handleBlur = () => {
      this.activated = false;
    };
    this.activated = false;
    this.dragHandle = undefined;
    this.messages = undefined;
    this.setPosition = undefined;
    this.setSize = undefined;
    this.label = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  handleAriaTextChange() {
    const message = this.getAriaText("live");
    if (message) {
      this.calciteInternalHandleChange.emit({
        message,
      });
    }
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
  }
  disconnectedCallback() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.handleButton?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  getAriaText(type) {
    const { setPosition, setSize, label, messages, activated } = this;
    if (!messages || !label || typeof setSize !== "number" || typeof setPosition !== "number") {
      return null;
    }
    const text = type === "label"
      ? activated
        ? messages.dragHandleChange
        : messages.dragHandleIdle
      : activated
        ? messages.dragHandleActive
        : messages.dragHandleCommit;
    const replacePosition = text.replace("{position}", setPosition.toString());
    const replaceLabel = replacePosition.replace("{itemLabel}", label);
    return replaceLabel.replace("{total}", setSize.toString());
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (
    // Needs to be a span because of https://github.com/SortableJS/Sortable/issues/1486
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", { "aria-label": this.getAriaText("label"), "aria-pressed": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.activated), class: { [CSS.handle]: true, [CSS.handleActivated]: this.activated }, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, role: "button", tabindex: "0", title: this.messages?.dragHandle,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => {
        this.handleButton = el;
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("calcite-icon", { icon: ICONS.drag, scale: "s" })));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messages": ["handleAriaTextChange"],
    "label": ["handleAriaTextChange"],
    "activated": ["handleAriaTextChange"],
    "setPosition": ["handleAriaTextChange"],
    "setSize": ["handleAriaTextChange"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return handleCss; }
}, [1, "calcite-handle", {
    "activated": [1540],
    "dragHandle": [513, "drag-handle"],
    "messages": [16],
    "setPosition": [2, "set-position"],
    "setSize": [2, "set-size"],
    "label": [1],
    "messageOverrides": [16],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-handle", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-handle":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Handle);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
  } });
}
defineCustomElement();




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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMGJkNGU0NmQ1NWZmMjVkMzc3ZmQ4YTZlMzJlYWQwMzcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRztBQUNNO0FBQzdCO0FBQzJCO0FBQ3JDO0FBQ29DO0FBQ3RFO0FBQ2tFO0FBQ3BDO0FBQ2pCO0FBQ0s7QUFDTDtBQUNGO0FBQ0U7QUFDQztBQUNGOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isc0JBQXNCLGdEQUFnRCwrQkFBK0Isc0NBQXNDLFFBQVEsc0JBQXNCLE1BQU0seUJBQXlCLGtDQUFrQyxrQ0FBa0MsOEJBQThCLHlDQUF5Qyx1QkFBdUIsdUNBQXVDLG1DQUFtQyw4QkFBOEIsK0JBQStCLGlDQUFpQyxpQ0FBaUMsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGFBQWEsY0FBYyxZQUFZLHNCQUFzQixpQkFBaUIsMkJBQTJCLG1CQUFtQix3Q0FBd0MsWUFBWSwyQkFBMkIsd0RBQXdELDBCQUEwQixvRUFBb0UsZ0JBQWdCLHlHQUF5RyxVQUFVLFFBQVEsV0FBVyxhQUFhLDRCQUE0QixtQkFBbUIsOEJBQThCLCtCQUErQixTQUFTLFdBQVcsWUFBWSw4Q0FBOEMsaUJBQWlCLGNBQWMsZUFBZSxRQUFRLDJCQUEyQixZQUFZLGdCQUFnQixpQkFBaUIsa0JBQWtCLGFBQWEsb0JBQW9CLHNDQUFzQyxtREFBbUQsa0NBQWtDLGFBQWEsUUFBUSxXQUFXLGFBQWEsZUFBZSxpQkFBaUIsbUJBQW1CLDhCQUE4QixrQkFB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Q3ZCO0FBQ0E7QUFDQSxJQUFJLDZDQUFtQjtBQUN2QixJQUFJLDBDQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQ0FBZ0M7QUFDNUMsWUFBWSx5RUFBQyxVQUFVLGtCQUFrQixhQUFhLHlFQUFDLHFCQUFxQjtBQUM1RTtBQUNBLCtCQUErQixXQUFXLHlFQUFDLFVBQVUseUNBQXlDLEVBQUUseUVBQUMsV0FBVyw0Q0FBNEM7QUFDeEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkNBQXFCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS1ibG9jay5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29uZGl0aW9uYWxTbG90LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9oYW5kbGUuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3NjcmltLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmRpdGlvbmFsU2xvdC5qcyc7XG5pbXBvcnQgeyBmIGFzIGZvY3VzRmlyc3RUYWJiYWJsZSwgZyBhcyBnZXRTbG90dGVkLCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgSCBhcyBIZWFkaW5nIH0gZnJvbSAnLi9IZWFkaW5nLmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlLCBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBvIGFzIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuQ2xvc2VDb21wb25lbnQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDggfSBmcm9tICcuL2FjdGlvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNyB9IGZyb20gJy4vYWN0aW9uLW1lbnUuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDYgfSBmcm9tICcuL2hhbmRsZS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNSB9IGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNCB9IGZyb20gJy4vbG9hZGVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9wb3BvdmVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9zY3JpbS5qcyc7XG5cbmNvbnN0IElEUyA9IHtcbiAgY29udGVudDogXCJjb250ZW50XCIsXG4gIHRvZ2dsZTogXCJ0b2dnbGVcIixcbiAgaGVhZGVyOiBcImhlYWRlclwiLFxufTtcbmNvbnN0IENTUyA9IHtcbiAgYnV0dG9uOiBcImJ1dHRvblwiLFxuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxuICBjb250cm9sQ29udGFpbmVyOiBcImNvbnRyb2wtY29udGFpbmVyXCIsXG4gIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uXCIsXG4gIGhlYWRlcjogXCJoZWFkZXJcIixcbiAgaGVhZGVyQ29udGFpbmVyOiBcImhlYWRlci1jb250YWluZXJcIixcbiAgaGVhZGluZzogXCJoZWFkaW5nXCIsXG4gIGljb246IFwiaWNvblwiLFxuICBpbnZhbGlkOiBcImludmFsaWRcIixcbiAgc3RhdHVzSWNvbjogXCJzdGF0dXMtaWNvblwiLFxuICBzdW1tYXJ5OiBcInN1bW1hcnlcIixcbiAgdGl0bGU6IFwidGl0bGVcIixcbiAgdG9nZ2xlOiBcInRvZ2dsZVwiLFxuICB0b2dnbGVJY29uOiBcInRvZ2dsZS1pY29uXCIsXG4gIHZhbGlkOiBcInZhbGlkXCIsXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIGljb246IFwiaWNvblwiLFxuICBjb250cm9sOiBcImNvbnRyb2xcIixcbiAgaGVhZGVyTWVudUFjdGlvbnM6IFwiaGVhZGVyLW1lbnUtYWN0aW9uc1wiLFxufTtcbmNvbnN0IElDT05TID0ge1xuICBvcGVuZWQ6IFwiY2hldnJvbi11cFwiLFxuICBjbG9zZWQ6IFwiY2hldnJvbi1kb3duXCIsXG4gIHZhbGlkOiBcImNoZWNrLWNpcmNsZVwiLFxuICBpbnZhbGlkOiBcImV4Y2xhbWF0aW9uLW1hcmstdHJpYW5nbGVcIixcbn07XG5cbmNvbnN0IGJsb2NrQ3NzID0gXCI6aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9Omhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3R7LS1jYWxjaXRlLWljb24tc2l6ZToxcmVtOy0tY2FsY2l0ZS1zcGFjaW5nLWVpZ2h0aDowLjEyNXJlbTstLWNhbGNpdGUtc3BhY2luZy1xdWFydGVyOjAuMjVyZW07LS1jYWxjaXRlLXNwYWNpbmctaGFsZjowLjVyZW07LS1jYWxjaXRlLXNwYWNpbmctdGhyZWUtcXVhcnRlcnM6MC43NXJlbTstLWNhbGNpdGUtc3BhY2luZzoxcmVtOy0tY2FsY2l0ZS1zcGFjaW5nLXBsdXMtcXVhcnRlcjoxLjI1cmVtOy0tY2FsY2l0ZS1zcGFjaW5nLXBsdXMtaGFsZjoxLjVyZW07LS1jYWxjaXRlLXNwYWNpbmctZG91YmxlOjJyZW07LS1jYWxjaXRlLW1lbnUtbWluLXdpZHRoOjEwcmVtOy0tY2FsY2l0ZS1oZWFkZXItbWluLWhlaWdodDozcmVtOy0tY2FsY2l0ZS1mb290ZXItbWluLWhlaWdodDozcmVtfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6ZmxleDtmbGV4LXNocmluazowO2ZsZXgtZ3JvdzowO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtib3JkZXItd2lkdGg6MHB4O2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7cGFkZGluZzowcHg7dHJhbnNpdGlvbi1wcm9wZXJ0eTptYXJnaW47dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjIxNSwgMC40NDAsIDAuNDIwLCAwLjg4MCk7ZmxleC1iYXNpczphdXRvfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX0uaGVhZGVye21hcmdpbjowcHg7ZGlzcGxheTpmbGV4O2FsaWduLWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7ZmlsbDp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5oZWFkaW5ne21hcmdpbjowcHg7cGFkZGluZzowcHg7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pfS5oZWFkZXIgLmhlYWRpbmd7ZmxleDoxIDEgYXV0bztwYWRkaW5nOjAuNXJlbX0uaGVhZGVye2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3BhZGRpbmc6MHB4fS5oZWFkZXIsLnRvZ2dsZXtncmlkLWFyZWE6aGVhZGVyfS5oZWFkZXItY29udGFpbmVye2Rpc3BsYXk6Z3JpZDthbGlnbi1pdGVtczpzdHJldGNoO2dyaWQtdGVtcGxhdGU6YXV0by9hdXRvIDFmciBhdXRvIGF1dG87Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXFwiaGFuZGxlIGhlYWRlciBjb250cm9sIG1lbnVcXFwiO2dyaWQtY29sdW1uOmhlYWRlci1zdGFydC9tZW51LWVuZDtncmlkLXJvdzoxLzJ9LnRvZ2dsZXttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjtmbGV4LXdyYXA6bm93cmFwO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtib3JkZXItc3R5bGU6bm9uZTtwYWRkaW5nOjBweDtmb250LWZhbWlseTppbmhlcml0O291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7dGV4dC1hbGlnbjppbml0aWFsO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnRvZ2dsZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0udG9nZ2xlOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX1jYWxjaXRlLWxvYWRlcltpbmxpbmVde2dyaWQtYXJlYTpjb250cm9sO2FsaWduLXNlbGY6Y2VudGVyfWNhbGNpdGUtaGFuZGxle2dyaWQtYXJlYTpoYW5kbGV9LnRpdGxle21hcmdpbjowcHg7cGFkZGluZzowLjc1cmVtfS5oZWFkZXIgLnRpdGxlIC5oZWFkaW5ne3BhZGRpbmc6MHB4O2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2xpbmUtaGVpZ2h0OjEuMjU7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO3RyYW5zaXRpb24tcHJvcGVydHk6Y29sb3I7dHJhbnNpdGlvbi1kdXJhdGlvbjoxNTBtczt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3dvcmQtd3JhcDpicmVhay13b3JkO3dvcmQtYnJlYWs6YnJlYWstd29yZH0uZGVzY3JpcHRpb257bWFyZ2luLWJsb2NrLXN0YXJ0OjAuMTI1cmVtO3BhZGRpbmc6MHB4O2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MS4zNzU7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO3dvcmQtd3JhcDpicmVhay13b3JkO3dvcmQtYnJlYWs6YnJlYWstd29yZH0uaWNvbntkaXNwbGF5OmZsZXg7bWFyZ2luLWlubGluZS1zdGFydDowLjc1cmVtO21hcmdpbi1pbmxpbmUtZW5kOjBweH0uc3RhdHVzLWljb24udmFsaWR7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1zdWNjZXNzKX0uc3RhdHVzLWljb24uaW52YWxpZHtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9QGtleWZyYW1lcyBzcGluezAle3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9NTAle3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0xMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19LnRvZ2dsZS1pY29ue21hcmdpbi1ibG9jazowLjc1cmVtO2FsaWduLXNlbGY6Y2VudGVyO2p1c3RpZnktc2VsZjplbmQ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO3RyYW5zaXRpb24tcHJvcGVydHk6Y29sb3I7dHJhbnNpdGlvbi1kdXJhdGlvbjoxNTBtczt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO21hcmdpbi1pbmxpbmUtZW5kOjAuNzVyZW07bWFyZ2luLWlubGluZS1zdGFydDphdXRvfS50b2dnbGU6aG92ZXIgLnRvZ2dsZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0uY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5jb250ZW50e3Bvc2l0aW9uOnJlbGF0aXZlO21pbi1ibG9jay1zaXplOjBweDtmbGV4OjEgMSAwJX1Aa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19LmNvbnRlbnR7YW5pbWF0aW9uOmluIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSBlYXNlLWluLW91dDtwYWRkaW5nLWJsb2NrOnZhcigtLWNhbGNpdGUtYmxvY2stcGFkZGluZywgMC41cmVtKTtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLWJsb2NrLXBhZGRpbmcsIDAuNjI1cmVtKX0uY29udHJvbC1jb250YWluZXJ7bWFyZ2luOjBweDtkaXNwbGF5OmZsZXg7Z3JpZC1hcmVhOmNvbnRyb2x9Y2FsY2l0ZS1hY3Rpb24tbWVudXtncmlkLWFyZWE6bWVudX06aG9zdChbb3Blbl0pe21hcmdpbi1ibG9jazowLjVyZW19Omhvc3QoW29wZW5dKSAuaGVhZGVyIC50aXRsZSAuaGVhZGluZ3tjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IEJsb2NrID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVCbG9ja0JlZm9yZUNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQmxvY2tCZWZvcmVDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVCbG9ja0JlZm9yZU9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVCbG9ja0JlZm9yZU9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlQmxvY2tDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUJsb2NrQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlQmxvY2tPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQmxvY2tPcGVuXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUJsb2NrVG9nZ2xlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQmxvY2tUb2dnbGVcIiwgNik7XG4gICAgdGhpcy5vcGVuVHJhbnNpdGlvblByb3AgPSBcIm9wYWNpdHlcIjtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLm9uSGVhZGVyQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgdGhpcy5jYWxjaXRlQmxvY2tUb2dnbGUuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLmNvbGxhcHNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZHJhZ0hhbmRsZSA9IGZhbHNlO1xuICAgIHRoaXMuaGVhZGluZyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhlYWRpbmdMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLnN0YXR1cyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIG9wZW5IYW5kbGVyKCkge1xuICAgIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCB0YWJiYWJsZSBlbGVtZW50LlxuICAgKlxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIGZvY3VzRmlyc3RUYWJiYWJsZSh0aGlzLmVsKTtcbiAgfVxuICBvbkJlZm9yZU9wZW4oKSB7XG4gICAgdGhpcy5jYWxjaXRlQmxvY2tCZWZvcmVPcGVuLmVtaXQoKTtcbiAgfVxuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5jYWxjaXRlQmxvY2tPcGVuLmVtaXQoKTtcbiAgfVxuICBvbkJlZm9yZUNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZUJsb2NrQmVmb3JlQ2xvc2UuZW1pdCgpO1xuICB9XG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlQmxvY2tDbG9zZS5lbWl0KCk7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyU2NyaW0oKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB0aGlzO1xuICAgIGNvbnN0IGRlZmF1bHRTbG90ID0gaChcInNsb3RcIiwgbnVsbCk7XG4gICAgcmV0dXJuIFtsb2FkaW5nID8gaChcImNhbGNpdGUtc2NyaW1cIiwgeyBsb2FkaW5nOiBsb2FkaW5nIH0pIDogbnVsbCwgZGVmYXVsdFNsb3RdO1xuICB9XG4gIHJlbmRlckljb24oKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBtZXNzYWdlcywgc3RhdHVzIH0gPSB0aGlzO1xuICAgIGNvbnN0IGhhc1Nsb3R0ZWRJY29uID0gISFnZXRTbG90dGVkKHRoaXMuZWwsIFNMT1RTLmljb24pO1xuICAgIHJldHVybiBsb2FkaW5nID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmljb24sIGtleTogXCJsb2FkZXJcIiB9LCBoKFwiY2FsY2l0ZS1sb2FkZXJcIiwgeyBpbmxpbmU6IHRydWUsIGxhYmVsOiBtZXNzYWdlcy5sb2FkaW5nIH0pKSkgOiAhIXN0YXR1cyA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5pY29uLCBrZXk6IFwic3RhdHVzLWljb25cIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5zdGF0dXNJY29uXTogdHJ1ZSxcbiAgICAgICAgW0NTUy52YWxpZF06IHN0YXR1cyA9PSBcInZhbGlkXCIsXG4gICAgICAgIFtDU1MuaW52YWxpZF06IHN0YXR1cyA9PSBcImludmFsaWRcIixcbiAgICAgIH0sIGljb246IElDT05TW3N0YXR1c10sIHNjYWxlOiBcInNcIiB9KSkpIDogaGFzU2xvdHRlZEljb24gPyAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuaWNvbiwga2V5OiBcImljb24tc2xvdFwiIH0sIGgoXCJzbG90XCIsIHsga2V5OiBcImljb24tc2xvdFwiLCBuYW1lOiBTTE9UUy5pY29uIH0pKSkgOiBudWxsO1xuICB9XG4gIHJlbmRlclRpdGxlKCkge1xuICAgIGNvbnN0IHsgaGVhZGluZywgaGVhZGluZ0xldmVsLCBkZXNjcmlwdGlvbiB9ID0gdGhpcztcbiAgICByZXR1cm4gaGVhZGluZyB8fCBkZXNjcmlwdGlvbiA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy50aXRsZSB9LCBoKEhlYWRpbmcsIHsgY2xhc3M6IENTUy5oZWFkaW5nLCBsZXZlbDogaGVhZGluZ0xldmVsIH0sIGhlYWRpbmcpLCBkZXNjcmlwdGlvbiA/IGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmRlc2NyaXB0aW9uIH0sIGRlc2NyaXB0aW9uKSA6IG51bGwpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29sbGFwc2libGUsIGVsLCBsb2FkaW5nLCBvcGVuLCBtZXNzYWdlcyB9ID0gdGhpcztcbiAgICBjb25zdCB0b2dnbGVMYWJlbCA9IG9wZW4gPyBtZXNzYWdlcy5jb2xsYXBzZSA6IG1lc3NhZ2VzLmV4cGFuZDtcbiAgICBjb25zdCBoZWFkZXJDb250ZW50ID0gKGgoXCJoZWFkZXJcIiwgeyBjbGFzczogQ1NTLmhlYWRlciwgaWQ6IElEUy5oZWFkZXIgfSwgdGhpcy5yZW5kZXJJY29uKCksIHRoaXMucmVuZGVyVGl0bGUoKSkpO1xuICAgIGNvbnN0IGhhc0NvbnRyb2wgPSAhIWdldFNsb3R0ZWQoZWwsIFNMT1RTLmNvbnRyb2wpO1xuICAgIGNvbnN0IGhhc01lbnVBY3Rpb25zID0gISFnZXRTbG90dGVkKGVsLCBTTE9UUy5oZWFkZXJNZW51QWN0aW9ucyk7XG4gICAgY29uc3QgY29sbGFwc2VJY29uID0gb3BlbiA/IElDT05TLm9wZW5lZCA6IElDT05TLmNsb3NlZDtcbiAgICBjb25zdCBoZWFkZXJOb2RlID0gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmhlYWRlckNvbnRhaW5lciB9LCB0aGlzLmRyYWdIYW5kbGUgPyBoKFwiY2FsY2l0ZS1oYW5kbGVcIiwgbnVsbCkgOiBudWxsLCBjb2xsYXBzaWJsZSA/IChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWNvbnRyb2xzXCI6IElEUy5jb250ZW50LCBcImFyaWEtZGVzY3JpYmVkYnlcIjogSURTLmhlYWRlciwgXCJhcmlhLWV4cGFuZGVkXCI6IGNvbGxhcHNpYmxlID8gdG9BcmlhQm9vbGVhbihvcGVuKSA6IG51bGwsIGNsYXNzOiBDU1MudG9nZ2xlLCBpZDogSURTLnRvZ2dsZSwgb25DbGljazogdGhpcy5vbkhlYWRlckNsaWNrLCB0aXRsZTogdG9nZ2xlTGFiZWwgfSwgaGVhZGVyQ29udGVudCwgaChcImNhbGNpdGUtaWNvblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBDU1MudG9nZ2xlSWNvbiwgaWNvbjogY29sbGFwc2VJY29uLCBzY2FsZTogXCJzXCIgfSkpKSA6IChoZWFkZXJDb250ZW50KSwgaGFzQ29udHJvbCA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250cm9sQ29udGFpbmVyIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuY29udHJvbCB9KSkpIDogbnVsbCwgaGFzTWVudUFjdGlvbnMgPyAoaChcImNhbGNpdGUtYWN0aW9uLW1lbnVcIiwgeyBsYWJlbDogbWVzc2FnZXMub3B0aW9ucyB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmhlYWRlck1lbnVBY3Rpb25zIH0pKSkgOiBudWxsKSk7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJhcnRpY2xlXCIsIHsgXCJhcmlhLWJ1c3lcIjogdG9BcmlhQm9vbGVhbihsb2FkaW5nKSwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jb250YWluZXJdOiB0cnVlLFxuICAgICAgfSB9LCBoZWFkZXJOb2RlLCBoKFwic2VjdGlvblwiLCB7IFwiYXJpYS1sYWJlbGxlZGJ5XCI6IElEUy50b2dnbGUsIGNsYXNzOiBDU1MuY29udGVudCwgaGlkZGVuOiAhb3BlbiwgaWQ6IElEUy5jb250ZW50LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRUcmFuc2l0aW9uRWwgfSwgdGhpcy5yZW5kZXJTY3JpbSgpKSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwib3BlblwiOiBbXCJvcGVuSGFuZGxlclwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gYmxvY2tDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtYmxvY2tcIiwge1xuICAgIFwiY29sbGFwc2libGVcIjogWzUxNl0sXG4gICAgXCJkaXNhYmxlZFwiOiBbNTE2XSxcbiAgICBcImRyYWdIYW5kbGVcIjogWzUxNiwgXCJkcmFnLWhhbmRsZVwiXSxcbiAgICBcImhlYWRpbmdcIjogWzFdLFxuICAgIFwiaGVhZGluZ0xldmVsXCI6IFs1MTQsIFwiaGVhZGluZy1sZXZlbFwiXSxcbiAgICBcImxvYWRpbmdcIjogWzUxNl0sXG4gICAgXCJvcGVuXCI6IFsxNTQwXSxcbiAgICBcInN0YXR1c1wiOiBbNTEzXSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFsxXSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWJsb2NrXCIsIFwiY2FsY2l0ZS1hY3Rpb25cIiwgXCJjYWxjaXRlLWFjdGlvbi1tZW51XCIsIFwiY2FsY2l0ZS1oYW5kbGVcIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWxvYWRlclwiLCBcImNhbGNpdGUtcG9wb3ZlclwiLCBcImNhbGNpdGUtc2NyaW1cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtYmxvY2tcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBCbG9jayk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1hY3Rpb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkOCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtYWN0aW9uLW1lbnVcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaGFuZGxlXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDYoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtbG9hZGVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDQoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXBvcG92ZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtc2NyaW1cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZUJsb2NrID0gQmxvY2s7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlQmxvY2ssIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGZvcmNlVXBkYXRlIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcblxuY29uc3Qgb2JzZXJ2ZWQgPSBuZXcgU2V0KCk7XG5sZXQgbXV0YXRpb25PYnNlcnZlcjtcbmNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgcHJvY2Vzc011dGF0aW9ucyk7XG4gIH1cbiAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudC5lbCwgb2JzZXJ2ZXJPcHRpb25zKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBvYnNlcnZlZC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgLy8gd2UgZXhwbGljaXRseSBwcm9jZXNzIHF1ZXVlZCBtdXRhdGlvbnMgYW5kIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdFxuICAvLyB0aGUgb2JzZXJ2ZXIgdW50aWwgTXV0YXRpb25PYnNlcnZlciBnZXRzIGFuIGB1bm9ic2VydmVgIG1ldGhvZFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNlxuICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBmb3IgKGNvbnN0IFtlbGVtZW50XSBvZiBvYnNlcnZlZC5lbnRyaWVzKCkpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBmb3JjZVVwZGF0ZSh0YXJnZXQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBjLCBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRGb2N1c2FibGUgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHUgYXMgdXBkYXRlTWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vaWNvbi5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgaGFuZGxlOiBcImhhbmRsZVwiLFxuICBoYW5kbGVBY3RpdmF0ZWQ6IFwiaGFuZGxlLS1hY3RpdmF0ZWRcIixcbn07XG5jb25zdCBJQ09OUyA9IHtcbiAgZHJhZzogXCJkcmFnXCIsXG59O1xuXG5jb25zdCBoYW5kbGVDc3MgPSBcIjpob3N0e2Rpc3BsYXk6ZmxleH0uaGFuZGxle2Rpc3BsYXk6ZmxleDtjdXJzb3I6bW92ZTthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1zZWxmOnN0cmV0Y2g7Ym9yZGVyLXN0eWxlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtwYWRkaW5nLWJsb2NrOjAuNzVyZW07cGFkZGluZy1pbmxpbmU6MC4yNXJlbTtsaW5lLWhlaWdodDowfS5oYW5kbGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5oYW5kbGU6Zm9jdXN7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0uaGFuZGxlLS1hY3RpdmF0ZWR7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5oYW5kbGUgY2FsY2l0ZS1pY29ue2NvbG9yOmluaGVyaXR9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IEhhbmRsZSA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlSGFuZGxlTnVkZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVIYW5kbGVOdWRnZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEhhbmRsZUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsSGFuZGxlQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlZCA9ICF0aGlzLmFjdGl2YXRlZDtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgIGlmICghdGhpcy5hY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmNhbGNpdGVIYW5kbGVOdWRnZS5lbWl0KHsgZGlyZWN0aW9uOiBcInVwXCIgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICBpZiAoIXRoaXMuYWN0aXZhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5jYWxjaXRlSGFuZGxlTnVkZ2UuZW1pdCh7IGRpcmVjdGlvbjogXCJkb3duXCIgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2YXRlZCA9IGZhbHNlO1xuICAgIH07XG4gICAgdGhpcy5hY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRyYWdIYW5kbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNldFBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2V0U2l6ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICBoYW5kbGVBcmlhVGV4dENoYW5nZSgpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5nZXRBcmlhVGV4dChcImxpdmVcIik7XG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSGFuZGxlQ2hhbmdlLmVtaXQoe1xuICAgICAgICBtZXNzYWdlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVCdXR0b24/LmZvY3VzKCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRBcmlhVGV4dCh0eXBlKSB7XG4gICAgY29uc3QgeyBzZXRQb3NpdGlvbiwgc2V0U2l6ZSwgbGFiZWwsIG1lc3NhZ2VzLCBhY3RpdmF0ZWQgfSA9IHRoaXM7XG4gICAgaWYgKCFtZXNzYWdlcyB8fCAhbGFiZWwgfHwgdHlwZW9mIHNldFNpemUgIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIHNldFBvc2l0aW9uICE9PSBcIm51bWJlclwiKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdGV4dCA9IHR5cGUgPT09IFwibGFiZWxcIlxuICAgICAgPyBhY3RpdmF0ZWRcbiAgICAgICAgPyBtZXNzYWdlcy5kcmFnSGFuZGxlQ2hhbmdlXG4gICAgICAgIDogbWVzc2FnZXMuZHJhZ0hhbmRsZUlkbGVcbiAgICAgIDogYWN0aXZhdGVkXG4gICAgICAgID8gbWVzc2FnZXMuZHJhZ0hhbmRsZUFjdGl2ZVxuICAgICAgICA6IG1lc3NhZ2VzLmRyYWdIYW5kbGVDb21taXQ7XG4gICAgY29uc3QgcmVwbGFjZVBvc2l0aW9uID0gdGV4dC5yZXBsYWNlKFwie3Bvc2l0aW9ufVwiLCBzZXRQb3NpdGlvbi50b1N0cmluZygpKTtcbiAgICBjb25zdCByZXBsYWNlTGFiZWwgPSByZXBsYWNlUG9zaXRpb24ucmVwbGFjZShcIntpdGVtTGFiZWx9XCIsIGxhYmVsKTtcbiAgICByZXR1cm4gcmVwbGFjZUxhYmVsLnJlcGxhY2UoXCJ7dG90YWx9XCIsIHNldFNpemUudG9TdHJpbmcoKSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIC8vIE5lZWRzIHRvIGJlIGEgc3BhbiBiZWNhdXNlIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9Tb3J0YWJsZUpTL1NvcnRhYmxlL2lzc3Vlcy8xNDg2XG4gICAgaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5nZXRBcmlhVGV4dChcImxhYmVsXCIpLCBcImFyaWEtcHJlc3NlZFwiOiB0b0FyaWFCb29sZWFuKHRoaXMuYWN0aXZhdGVkKSwgY2xhc3M6IHsgW0NTUy5oYW5kbGVdOiB0cnVlLCBbQ1NTLmhhbmRsZUFjdGl2YXRlZF06IHRoaXMuYWN0aXZhdGVkIH0sIG9uQmx1cjogdGhpcy5oYW5kbGVCbHVyLCBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93biwgcm9sZTogXCJidXR0b25cIiwgdGFiaW5kZXg6IFwiMFwiLCB0aXRsZTogdGhpcy5tZXNzYWdlcz8uZHJhZ0hhbmRsZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChlbCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUJ1dHRvbiA9IGVsO1xuICAgICAgfSB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogSUNPTlMuZHJhZywgc2NhbGU6IFwic1wiIH0pKSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm1lc3NhZ2VzXCI6IFtcImhhbmRsZUFyaWFUZXh0Q2hhbmdlXCJdLFxuICAgIFwibGFiZWxcIjogW1wiaGFuZGxlQXJpYVRleHRDaGFuZ2VcIl0sXG4gICAgXCJhY3RpdmF0ZWRcIjogW1wiaGFuZGxlQXJpYVRleHRDaGFuZ2VcIl0sXG4gICAgXCJzZXRQb3NpdGlvblwiOiBbXCJoYW5kbGVBcmlhVGV4dENoYW5nZVwiXSxcbiAgICBcInNldFNpemVcIjogW1wiaGFuZGxlQXJpYVRleHRDaGFuZ2VcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGhhbmRsZUNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1oYW5kbGVcIiwge1xuICAgIFwiYWN0aXZhdGVkXCI6IFsxNTQwXSxcbiAgICBcImRyYWdIYW5kbGVcIjogWzUxMywgXCJkcmFnLWhhbmRsZVwiXSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxNl0sXG4gICAgXCJzZXRQb3NpdGlvblwiOiBbMiwgXCJzZXQtcG9zaXRpb25cIl0sXG4gICAgXCJzZXRTaXplXCI6IFsyLCBcInNldC1zaXplXCJdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTZdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1oYW5kbGVcIiwgXCJjYWxjaXRlLWljb25cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtaGFuZGxlXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgSGFuZGxlKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IEhhbmRsZSBhcyBILCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IHcgYXMgc2xvdENoYW5nZUhhc0NvbnRlbnQgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vbG9hZGVyLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBzY3JpbTogXCJzY3JpbVwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbn07XG5jb25zdCBCUkVBS1BPSU5UUyA9IHtcbiAgczogNzIsXG4gIC8vIG1lZGl1bSBpcyBhc3N1bWVkIGRlZmF1bHQuXG4gIGw6IDQ4MCwgLy8gR3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDQ4MHB4LlxufTtcblxuY29uc3Qgc2NyaW1Dc3MgPSBcIjpob3N0e3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjBweDt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtb3ZlcmxheSk7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpzdHJldGNofUBrZXlmcmFtZXMgY2FsY2l0ZS1zY3JpbS1mYWRlLWluezAley0tdHctYmctb3BhY2l0eTowfTEwMCV7LS10dy10ZXh0LW9wYWNpdHk6MX19LnNjcmlte3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjBweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO292ZXJmbG93OmhpZGRlbjthbmltYXRpb246Y2FsY2l0ZS1zY3JpbS1mYWRlLWluIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGVhc2UtaW4tb3V0O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS1zY3JpbS1iYWNrZ3JvdW5kLCB2YXIoLS1jYWxjaXRlLXNjcmltLWJhY2tncm91bmQtaW50ZXJuYWwpKX0uY29udGVudHtwYWRkaW5nOjFyZW19Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IFNjcmltID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgKCkgPT4gdGhpcy5oYW5kbGVSZXNpemUoKSk7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNDb250ZW50ID0gc2xvdENoYW5nZUhhc0NvbnRlbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5zdG9yZUxvYWRlckVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmxvYWRlckVsID0gZWw7XG4gICAgICB0aGlzLmhhbmRsZVJlc2l6ZSgpO1xuICAgIH07XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2FkZXJTY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5oYXNDb250ZW50ID0gZmFsc2U7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmVsKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoYXNDb250ZW50LCBsb2FkaW5nLCBtZXNzYWdlcyB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnNjcmltIH0sIGxvYWRpbmcgPyAoaChcImNhbGNpdGUtbG9hZGVyXCIsIHsgbGFiZWw6IG1lc3NhZ2VzLmxvYWRpbmcsIHNjYWxlOiB0aGlzLmxvYWRlclNjYWxlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zdG9yZUxvYWRlckVsIH0pKSA6IG51bGwsIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRlbnQsIGhpZGRlbjogIWhhc0NvbnRlbnQgfSwgaChcInNsb3RcIiwgeyBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlRGVmYXVsdFNsb3RDaGFuZ2UgfSkpKSk7XG4gIH1cbiAgZ2V0U2NhbGUoc2l6ZSkge1xuICAgIGlmIChzaXplIDwgQlJFQUtQT0lOVFMucykge1xuICAgICAgcmV0dXJuIFwic1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChzaXplID49IEJSRUFLUE9JTlRTLmwpIHtcbiAgICAgIHJldHVybiBcImxcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gXCJtXCI7XG4gICAgfVxuICB9XG4gIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICBjb25zdCB7IGxvYWRlckVsLCBlbCB9ID0gdGhpcztcbiAgICBpZiAoIWxvYWRlckVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubG9hZGVyU2NhbGUgPSB0aGlzLmdldFNjYWxlKE1hdGgubWluKGVsLmNsaWVudEhlaWdodCwgZWwuY2xpZW50V2lkdGgpID8/IDApO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHNjcmltQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXNjcmltXCIsIHtcbiAgICBcImxvYWRpbmdcIjogWzUxNl0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFsxMDQwXSxcbiAgICBcImxvYWRlclNjYWxlXCI6IFszMl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwiaGFzQ29udGVudFwiOiBbMzJdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtc2NyaW1cIiwgXCJjYWxjaXRlLWxvYWRlclwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1zY3JpbVwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIFNjcmltKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgU2NyaW0gYXMgUywgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=