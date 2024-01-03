"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_pick-list-item_js"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/pick-list-item.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/pick-list-item.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CSS),
/* harmony export */   P: () => (/* binding */ PickListItem),
/* harmony export */   S: () => (/* binding */ SLOTS),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _resources3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources3.js */ "./node_modules/@esri/calcite-components/dist/components/resources3.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */












const CSS = {
  actions: "actions",
  actionsEnd: "actions--end",
  actionsStart: "actions--start",
  description: "description",
  handle: "handle",
  handleActivated: "handle--activated",
  highlight: "highlight",
  icon: "icon",
  iconDot: "icon-dot",
  label: "label",
  remove: "remove",
  title: "title",
  textContainer: "text-container",
};
const ICONS = {
  checked: "check",
  remove: "x",
};
const SLOTS = {
  actionsEnd: "actions-end",
  actionsStart: "actions-start",
};

const pickListItemCss = "@charset \"UTF-8\";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{margin:0px;margin-block-end:1px;box-sizing:border-box;display:flex;align-items:stretch;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition:background-color var(--calcite-animation-timing);animation:calcite-fade-in var(--calcite-animation-timing)}:host *{box-sizing:border-box}.label{display:flex;flex:1 1 auto;cursor:pointer;align-items:center;background-color:transparent;outline-color:transparent}.label:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.label:hover{background-color:var(--calcite-ui-foreground-2)}:host([non-interactive]:hover){background-color:var(--calcite-ui-foreground-1)}:host([non-interactive]) .label,:host([non-interactive]) .icon{pointer-events:none}.icon{margin-block:0px;display:flex;cursor:pointer;align-items:center;padding:0.25rem;color:var(--calcite-ui-brand);flex:0 0 auto;line-height:0}.icon:hover{background-color:var(--calcite-ui-foreground-2)}.icon-dot{display:flex;inline-size:1.5rem;align-items:center;padding:0.5rem}.icon-dot:before{opacity:0;content:\"•\"}.icon calcite-icon{opacity:0}:host([selected]) .icon-dot:before,:host([selected]) .icon calcite-icon{transition:opacity var(--calcite-animation-timing);opacity:1}.text-container{pointer-events:none;display:flex;flex-direction:column;flex-wrap:nowrap;overflow:hidden;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;word-wrap:break-word;word-break:break-word}.title{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}.actions{margin:0px;display:flex;flex:0 1 auto;align-items:stretch;justify-content:flex-end}.actions--start~.label{padding-inline-start:0.25rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}";

const PickListItem = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteListItemChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteListItemChange", 6);
    this.calciteListItemRemove = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteListItemRemove", 7);
    this.calciteInternalListItemPropsChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteInternalListItemPropsChange", 6);
    this.calciteInternalListItemValueChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteInternalListItemValueChange", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.pickListClickHandler = (event) => {
      if (this.disabled || (this.deselectDisabled && this.selected) || this.nonInteractive) {
        return;
      }
      this.shiftPressed = event.shiftKey;
      this.selected = !this.selected;
    };
    this.pickListKeyDownHandler = (event) => {
      if (event.key === " ") {
        event.preventDefault();
        if ((this.deselectDisabled && this.selected) || this.nonInteractive) {
          return;
        }
        this.selected = !this.selected;
      }
    };
    this.removeClickHandler = () => {
      this.calciteListItemRemove.emit();
    };
    this.description = undefined;
    this.disabled = false;
    this.deselectDisabled = false;
    this.nonInteractive = false;
    this.icon = null;
    this.iconFlipRtl = false;
    this.label = undefined;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.metadata = undefined;
    this.removable = false;
    this.selected = false;
    this.value = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
  }
  descriptionWatchHandler() {
    this.calciteInternalListItemPropsChange.emit();
  }
  labelWatchHandler() {
    this.calciteInternalListItemPropsChange.emit();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  metadataWatchHandler() {
    this.calciteInternalListItemPropsChange.emit();
  }
  selectedWatchHandler() {
    this.calciteListItemChange.emit({
      item: this.el,
      value: this.value,
      selected: this.selected,
      shiftPressed: this.shiftPressed,
    });
    this.shiftPressed = false;
  }
  valueWatchHandler(newValue, oldValue) {
    this.calciteInternalListItemValueChange.emit({ oldValue, newValue });
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_5__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this, this.el.closest("calcite-pick-list") ? "managed" : false);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Toggles the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   *
   * @param coerce
   */
  async toggleSelected(coerce) {
    this.selected = typeof coerce === "boolean" ? coerce : !this.selected;
  }
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    this.focusEl?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderIcon() {
    const { icon, iconFlipRtl } = this;
    if (!icon) {
      return null;
    }
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { class: {
        [CSS.icon]: true,
        [CSS.iconDot]: icon === _resources3_js__WEBPACK_IMPORTED_MODULE_6__.I.circle,
      }, onClick: this.pickListClickHandler }, icon === _resources3_js__WEBPACK_IMPORTED_MODULE_6__.I.square ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-icon", { flipRtl: iconFlipRtl, icon: ICONS.checked, scale: "s" })) : null));
  }
  renderRemoveAction() {
    return this.removable ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-action", { class: CSS.remove, icon: ICONS.remove, onClick: this.removeClickHandler, slot: SLOTS.actionsEnd, text: this.messages.remove })) : null;
  }
  renderActionsStart() {
    const { el } = this;
    const hasActionsStart = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.actionsStart);
    return hasActionsStart ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: { [CSS.actions]: true, [CSS.actionsStart]: true } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { name: SLOTS.actionsStart }))) : null;
  }
  renderActionsEnd() {
    const { el, removable } = this;
    const hasActionsEnd = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.actionsEnd);
    return hasActionsEnd || removable ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: { [CSS.actions]: true, [CSS.actionsEnd]: true } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { name: SLOTS.actionsEnd }), this.renderRemoveAction())) : null;
  }
  render() {
    const { description, label } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.Fragment, null, this.renderIcon(), this.renderActionsStart(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("label", { "aria-label": label, class: CSS.label, onClick: this.pickListClickHandler, onKeyDown: this.pickListKeyDownHandler, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (focusEl) => (this.focusEl = focusEl) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-checked": (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.selected), class: CSS.textContainer, role: "menuitemcheckbox" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { class: CSS.title }, label), description ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { class: CSS.description }, description) : null)), this.renderActionsEnd()));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "description": ["descriptionWatchHandler"],
    "label": ["labelWatchHandler"],
    "defaultMessages": ["onMessagesChange"],
    "messageOverrides": ["onMessagesChange"],
    "metadata": ["metadataWatchHandler"],
    "selected": ["selectedWatchHandler"],
    "value": ["valueWatchHandler"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return pickListItemCss; }
}, [1, "calcite-pick-list-item", {
    "description": [513],
    "disabled": [516],
    "deselectDisabled": [516, "deselect-disabled"],
    "nonInteractive": [516, "non-interactive"],
    "icon": [513],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "label": [513],
    "messageOverrides": [1040],
    "messages": [1040],
    "metadata": [16],
    "removable": [516],
    "selected": [1540],
    "value": [8],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "toggleSelected": [64],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-pick-list-item", "calcite-action", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-pick-list-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PickListItem);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_9__.d)();
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNjI0NGJkMjY3ZWY0MTA1ZjRiOWY1NGQ2YzkyMDM0MGYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUU7QUFDaEI7O0FBRXJEO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0VBQXdFO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdEQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdFQUF3RTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IsSUFBSSxtRkFBVztBQUNmLEdBQUc7QUFDSDs7QUFFeUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RHpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEU7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUVBQUs7QUFDWjtBQUNBO0FBQ0EsRUFB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QzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2Q0FBcUI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUU2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyUTdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQ0FBZ0M7QUFDakM7QUFDQTtBQUNBOztBQUVpRCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jb25kaXRpb25hbFNsb3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2xvYWRhYmxlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9waWNrLWxpc3QtaXRlbS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvcmVzb3VyY2VzMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBmb3JjZVVwZGF0ZSB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5cbmNvbnN0IG9ic2VydmVkID0gbmV3IFNldCgpO1xubGV0IG11dGF0aW9uT2JzZXJ2ZXI7XG5jb25zdCBvYnNlcnZlck9wdGlvbnMgPSB7IGNoaWxkTGlzdDogdHJ1ZSB9O1xuLyoqXG4gKiBIZWxwZXIgdG8gc2V0IHVwIGEgY29uZGl0aW9uYWwgc2xvdCBjb21wb25lbnQgb24gY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQGRlcHJlY2F0ZWQgVXNlIGBvblNsb3RjaGFuZ2VgIGV2ZW50IHdpdGggYHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnRgIERPTSB1dGlsaXR5IGluc3RlYWQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNFbGVtZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCl9IC8+fVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGlmICghbXV0YXRpb25PYnNlcnZlcikge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsIHByb2Nlc3NNdXRhdGlvbnMpO1xuICB9XG4gIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShjb21wb25lbnQuZWwsIG9ic2VydmVyT3B0aW9ucyk7XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgb2JzZXJ2ZWQuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIC8vIHdlIGV4cGxpY2l0bHkgcHJvY2VzcyBxdWV1ZWQgbXV0YXRpb25zIGFuZCBkaXNjb25uZWN0IGFuZCByZWNvbm5lY3RcbiAgLy8gdGhlIG9ic2VydmVyIHVudGlsIE11dGF0aW9uT2JzZXJ2ZXIgZ2V0cyBhbiBgdW5vYnNlcnZlYCBtZXRob2RcbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZG9tL2lzc3Vlcy8xMjZcbiAgcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgZm9yIChjb25zdCBbZWxlbWVudF0gb2Ygb2JzZXJ2ZWQuZW50cmllcygpKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XG4gIH1cbn1cbmZ1bmN0aW9uIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gIG11dGF0aW9ucy5mb3JFYWNoKCh7IHRhcmdldCB9KSA9PiB7XG4gICAgZm9yY2VVcGRhdGUodGFyZ2V0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgYXMgYywgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCwgZm9yY2VVcGRhdGUgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbmNvbnN0IHJlc29sdmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcHJvbWlzZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgc2V0cyB1cCB0aGUgY29tcG9uZW50IGZvciB0aGUgYWJpbGl0eSB0byBrbm93IHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudFdpbGxMb2FkKCk6IHZvaWQge1xuICogICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRVcExvYWRhYmxlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBwcm9taXNlTWFwLnNldChjb21wb25lbnQsIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlTWFwLnNldChjb21wb25lbnQsIHJlc29sdmUpKSk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgbGV0cyB0aGUgbG9hZGFibGUgY29tcG9uZW50IGtub3cgdGhhdCBpdCBpcyBub3cgbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudERpZExvYWQoKTogdm9pZCB7XG4gKiAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXNvbHZlTWFwLmdldChjb21wb25lbnQpKCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgY2FuIGJlIHVzZWQgdG8gZW5zdXJlIGEgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZCAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIFN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQpLlxuICpcbiAqIFJlcXVpcmVzIHJlcXVpcmVzIGBMb2FkYWJsZUNvbXBvbmVudGAgdG8gYmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIG15TWV0aG9kKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmV0dXJuIHByb21pc2VNYXAuZ2V0KGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgY2FuIGJlIHVzZWQgdG8gZW5zdXJpbmcgdGhlIGNvbXBvbmVudCBpcyBsb2FkZWQgYW5kIHJlbmRlcmVkIGJ5IHRoZSBicm93c2VyIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgU3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCBhbmQgYW55IGludGVybmFsIGVsZW1lbnRzIGFyZSBmb2N1c2FibGUpLlxuICpcbiAqIFJlcXVpcmVzIHJlcXVpcmVzIGBMb2FkYWJsZUNvbXBvbmVudGAgdG8gYmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdCBhbmQgdGhlbiBhbiBpbnRlcm5hbCBlbGVtZW50IGJlIGZvY3VzZWQuXG4gKlxuICogYGBgXG4gKiBhc3luYyBzZXRGb2N1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICogICB0aGlzLmludGVybmFsRWxlbWVudD8uZm9jdXMoKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY29tcG9uZW50Rm9jdXNhYmxlKGNvbXBvbmVudCkge1xuICBhd2FpdCBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KTtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yY2VVcGRhdGUoY29tcG9uZW50KTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKSk7XG59XG5cbmV4cG9ydCB7IHNldFVwTG9hZGFibGVDb21wb25lbnQgYXMgYSwgY29tcG9uZW50TG9hZGVkIGFzIGIsIGNvbXBvbmVudEZvY3VzYWJsZSBhcyBjLCBzZXRDb21wb25lbnRMb2FkZWQgYXMgcyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEZyYWdtZW50IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmRpdGlvbmFsU2xvdC5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFNsb3R0ZWQsIHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgSSBhcyBJQ09OX1RZUEVTIH0gZnJvbSAnLi9yZXNvdXJjZXMzLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9hY3Rpb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgYWN0aW9uczogXCJhY3Rpb25zXCIsXG4gIGFjdGlvbnNFbmQ6IFwiYWN0aW9ucy0tZW5kXCIsXG4gIGFjdGlvbnNTdGFydDogXCJhY3Rpb25zLS1zdGFydFwiLFxuICBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvblwiLFxuICBoYW5kbGU6IFwiaGFuZGxlXCIsXG4gIGhhbmRsZUFjdGl2YXRlZDogXCJoYW5kbGUtLWFjdGl2YXRlZFwiLFxuICBoaWdobGlnaHQ6IFwiaGlnaGxpZ2h0XCIsXG4gIGljb246IFwiaWNvblwiLFxuICBpY29uRG90OiBcImljb24tZG90XCIsXG4gIGxhYmVsOiBcImxhYmVsXCIsXG4gIHJlbW92ZTogXCJyZW1vdmVcIixcbiAgdGl0bGU6IFwidGl0bGVcIixcbiAgdGV4dENvbnRhaW5lcjogXCJ0ZXh0LWNvbnRhaW5lclwiLFxufTtcbmNvbnN0IElDT05TID0ge1xuICBjaGVja2VkOiBcImNoZWNrXCIsXG4gIHJlbW92ZTogXCJ4XCIsXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIGFjdGlvbnNFbmQ6IFwiYWN0aW9ucy1lbmRcIixcbiAgYWN0aW9uc1N0YXJ0OiBcImFjdGlvbnMtc3RhcnRcIixcbn07XG5cbmNvbnN0IHBpY2tMaXN0SXRlbUNzcyA9IFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjs6aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHttYXJnaW46MHB4O21hcmdpbi1ibG9jay1lbmQ6MXB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6c3RyZXRjaDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW07Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpOy0tdHctc2hhZG93OjAgMXB4IDAgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7LS10dy1zaGFkb3ctY29sb3JlZDowIDFweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpO2FuaW1hdGlvbjpjYWxjaXRlLWZhZGUtaW4gdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX06aG9zdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGFiZWx7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH0ubGFiZWw6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5sYWJlbDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX06aG9zdChbbm9uLWludGVyYWN0aXZlXTpob3Zlcil7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW25vbi1pbnRlcmFjdGl2ZV0pIC5sYWJlbCw6aG9zdChbbm9uLWludGVyYWN0aXZlXSkgLmljb257cG9pbnRlci1ldmVudHM6bm9uZX0uaWNvbnttYXJnaW4tYmxvY2s6MHB4O2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzowLjI1cmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO2ZsZXg6MCAwIGF1dG87bGluZS1oZWlnaHQ6MH0uaWNvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0uaWNvbi1kb3R7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEuNXJlbTthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzowLjVyZW19Lmljb24tZG90OmJlZm9yZXtvcGFjaXR5OjA7Y29udGVudDpcXFwi4oCiXFxcIn0uaWNvbiBjYWxjaXRlLWljb257b3BhY2l0eTowfTpob3N0KFtzZWxlY3RlZF0pIC5pY29uLWRvdDpiZWZvcmUsOmhvc3QoW3NlbGVjdGVkXSkgLmljb24gY2FsY2l0ZS1pY29ue3RyYW5zaXRpb246b3BhY2l0eSB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpO29wYWNpdHk6MX0udGV4dC1jb250YWluZXJ7cG9pbnRlci1ldmVudHM6bm9uZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtd3JhcDpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmctYmxvY2s6MC41cmVtO3BhZGRpbmctaW5saW5lOjAuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxLjM3NTt3b3JkLXdyYXA6YnJlYWstd29yZDt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9LnRpdGxle2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmRlc2NyaXB0aW9ue21hcmdpbi1ibG9jay1zdGFydDowLjEyNXJlbTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfS5hY3Rpb25ze21hcmdpbjowcHg7ZGlzcGxheTpmbGV4O2ZsZXg6MCAxIGF1dG87YWxpZ24taXRlbXM6c3RyZXRjaDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LmFjdGlvbnMtLXN0YXJ0fi5sYWJlbHtwYWRkaW5nLWlubGluZS1zdGFydDowLjI1cmVtfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgUGlja0xpc3RJdGVtID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVMaXN0SXRlbUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RJdGVtUmVtb3ZlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTGlzdEl0ZW1SZW1vdmVcIiwgNyk7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVByb3BzQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVByb3BzQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1WYWx1ZUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1WYWx1ZUNoYW5nZVwiLCA2KTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnBpY2tMaXN0Q2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAodGhpcy5kZXNlbGVjdERpc2FibGVkICYmIHRoaXMuc2VsZWN0ZWQpIHx8IHRoaXMubm9uSW50ZXJhY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zaGlmdFByZXNzZWQgPSBldmVudC5zaGlmdEtleTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcbiAgICB9O1xuICAgIHRoaXMucGlja0xpc3RLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCh0aGlzLmRlc2VsZWN0RGlzYWJsZWQgJiYgdGhpcy5zZWxlY3RlZCkgfHwgdGhpcy5ub25JbnRlcmFjdGl2ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnJlbW92ZUNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZUxpc3RJdGVtUmVtb3ZlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVzZWxlY3REaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubm9uSW50ZXJhY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmljb24gPSBudWxsO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWV0YWRhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZW1vdmFibGUgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gIH1cbiAgZGVzY3JpcHRpb25XYXRjaEhhbmRsZXIoKSB7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVByb3BzQ2hhbmdlLmVtaXQoKTtcbiAgfVxuICBsYWJlbFdhdGNoSGFuZGxlcigpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbExpc3RJdGVtUHJvcHNDaGFuZ2UuZW1pdCgpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBtZXRhZGF0YVdhdGNoSGFuZGxlcigpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbExpc3RJdGVtUHJvcHNDaGFuZ2UuZW1pdCgpO1xuICB9XG4gIHNlbGVjdGVkV2F0Y2hIYW5kbGVyKCkge1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlLmVtaXQoe1xuICAgICAgaXRlbTogdGhpcy5lbCxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICBzaGlmdFByZXNzZWQ6IHRoaXMuc2hpZnRQcmVzc2VkLFxuICAgIH0pO1xuICAgIHRoaXMuc2hpZnRQcmVzc2VkID0gZmFsc2U7XG4gIH1cbiAgdmFsdWVXYXRjaEhhbmRsZXIobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVZhbHVlQ2hhbmdlLmVtaXQoeyBvbGRWYWx1ZSwgbmV3VmFsdWUgfSk7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMsIHRoaXMuZWwuY2xvc2VzdChcImNhbGNpdGUtcGljay1saXN0XCIpID8gXCJtYW5hZ2VkXCIgOiBmYWxzZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBzZWxlY3Rpb24gc3RhdGUuIEJ5IGRlZmF1bHQgdGhpcyB3b24ndCB0cmlnZ2VyIGFuIGV2ZW50LlxuICAgKiBUaGUgZmlyc3QgYXJndW1lbnQgYWxsb3dzIHRoZSB2YWx1ZSB0byBiZSBjb2VyY2VkLCByYXRoZXIgdGhhbiBzd2FwcGluZyB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSBjb2VyY2VcbiAgICovXG4gIGFzeW5jIHRvZ2dsZVNlbGVjdGVkKGNvZXJjZSkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0eXBlb2YgY29lcmNlID09PSBcImJvb2xlYW5cIiA/IGNvZXJjZSA6ICF0aGlzLnNlbGVjdGVkO1xuICB9XG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICB0aGlzLmZvY3VzRWw/LmZvY3VzKCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckljb24oKSB7XG4gICAgY29uc3QgeyBpY29uLCBpY29uRmxpcFJ0bCB9ID0gdGhpcztcbiAgICBpZiAoIWljb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5pY29uXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5pY29uRG90XTogaWNvbiA9PT0gSUNPTl9UWVBFUy5jaXJjbGUsXG4gICAgICB9LCBvbkNsaWNrOiB0aGlzLnBpY2tMaXN0Q2xpY2tIYW5kbGVyIH0sIGljb24gPT09IElDT05fVFlQRVMuc3F1YXJlID8gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBmbGlwUnRsOiBpY29uRmxpcFJ0bCwgaWNvbjogSUNPTlMuY2hlY2tlZCwgc2NhbGU6IFwic1wiIH0pKSA6IG51bGwpKTtcbiAgfVxuICByZW5kZXJSZW1vdmVBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZhYmxlID8gKGgoXCJjYWxjaXRlLWFjdGlvblwiLCB7IGNsYXNzOiBDU1MucmVtb3ZlLCBpY29uOiBJQ09OUy5yZW1vdmUsIG9uQ2xpY2s6IHRoaXMucmVtb3ZlQ2xpY2tIYW5kbGVyLCBzbG90OiBTTE9UUy5hY3Rpb25zRW5kLCB0ZXh0OiB0aGlzLm1lc3NhZ2VzLnJlbW92ZSB9KSkgOiBudWxsO1xuICB9XG4gIHJlbmRlckFjdGlvbnNTdGFydCgpIHtcbiAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGhhc0FjdGlvbnNTdGFydCA9IGdldFNsb3R0ZWQoZWwsIFNMT1RTLmFjdGlvbnNTdGFydCk7XG4gICAgcmV0dXJuIGhhc0FjdGlvbnNTdGFydCA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5hY3Rpb25zXTogdHJ1ZSwgW0NTUy5hY3Rpb25zU3RhcnRdOiB0cnVlIH0gfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb25zU3RhcnQgfSkpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyQWN0aW9uc0VuZCgpIHtcbiAgICBjb25zdCB7IGVsLCByZW1vdmFibGUgfSA9IHRoaXM7XG4gICAgY29uc3QgaGFzQWN0aW9uc0VuZCA9IGdldFNsb3R0ZWQoZWwsIFNMT1RTLmFjdGlvbnNFbmQpO1xuICAgIHJldHVybiBoYXNBY3Rpb25zRW5kIHx8IHJlbW92YWJsZSA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5hY3Rpb25zXTogdHJ1ZSwgW0NTUy5hY3Rpb25zRW5kXTogdHJ1ZSB9IH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuYWN0aW9uc0VuZCB9KSwgdGhpcy5yZW5kZXJSZW1vdmVBY3Rpb24oKSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgbGFiZWwgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKEZyYWdtZW50LCBudWxsLCB0aGlzLnJlbmRlckljb24oKSwgdGhpcy5yZW5kZXJBY3Rpb25zU3RhcnQoKSwgaChcImxhYmVsXCIsIHsgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLCBjbGFzczogQ1NTLmxhYmVsLCBvbkNsaWNrOiB0aGlzLnBpY2tMaXN0Q2xpY2tIYW5kbGVyLCBvbktleURvd246IHRoaXMucGlja0xpc3RLZXlEb3duSGFuZGxlciwgdGFiSW5kZXg6IDAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiAoZm9jdXNFbCkgPT4gKHRoaXMuZm9jdXNFbCA9IGZvY3VzRWwpIH0sIGgoXCJkaXZcIiwgeyBcImFyaWEtY2hlY2tlZFwiOiB0b0FyaWFCb29sZWFuKHRoaXMuc2VsZWN0ZWQpLCBjbGFzczogQ1NTLnRleHRDb250YWluZXIsIHJvbGU6IFwibWVudWl0ZW1jaGVja2JveFwiIH0sIGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy50aXRsZSB9LCBsYWJlbCksIGRlc2NyaXB0aW9uID8gaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLmRlc2NyaXB0aW9uIH0sIGRlc2NyaXB0aW9uKSA6IG51bGwpKSwgdGhpcy5yZW5kZXJBY3Rpb25zRW5kKCkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiZGVzY3JpcHRpb25cIjogW1wiZGVzY3JpcHRpb25XYXRjaEhhbmRsZXJcIl0sXG4gICAgXCJsYWJlbFwiOiBbXCJsYWJlbFdhdGNoSGFuZGxlclwiXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwibWV0YWRhdGFcIjogW1wibWV0YWRhdGFXYXRjaEhhbmRsZXJcIl0sXG4gICAgXCJzZWxlY3RlZFwiOiBbXCJzZWxlY3RlZFdhdGNoSGFuZGxlclwiXSxcbiAgICBcInZhbHVlXCI6IFtcInZhbHVlV2F0Y2hIYW5kbGVyXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBwaWNrTGlzdEl0ZW1Dc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtcGljay1saXN0LWl0ZW1cIiwge1xuICAgIFwiZGVzY3JpcHRpb25cIjogWzUxM10sXG4gICAgXCJkaXNhYmxlZFwiOiBbNTE2XSxcbiAgICBcImRlc2VsZWN0RGlzYWJsZWRcIjogWzUxNiwgXCJkZXNlbGVjdC1kaXNhYmxlZFwiXSxcbiAgICBcIm5vbkludGVyYWN0aXZlXCI6IFs1MTYsIFwibm9uLWludGVyYWN0aXZlXCJdLFxuICAgIFwiaWNvblwiOiBbNTEzXSxcbiAgICBcImljb25GbGlwUnRsXCI6IFs1MTYsIFwiaWNvbi1mbGlwLXJ0bFwiXSxcbiAgICBcImxhYmVsXCI6IFs1MTNdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXRhZGF0YVwiOiBbMTZdLFxuICAgIFwicmVtb3ZhYmxlXCI6IFs1MTZdLFxuICAgIFwic2VsZWN0ZWRcIjogWzE1NDBdLFxuICAgIFwidmFsdWVcIjogWzhdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcInRvZ2dsZVNlbGVjdGVkXCI6IFs2NF0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtcGljay1saXN0LWl0ZW1cIiwgXCJjYWxjaXRlLWFjdGlvblwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtbG9hZGVyXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXBpY2stbGlzdC1pdGVtXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgUGlja0xpc3RJdGVtKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWFjdGlvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgQ1NTIGFzIEMsIFBpY2tMaXN0SXRlbSBhcyBQLCBTTE9UUyBhcyBTLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmNvbnN0IENTUyA9IHtcbiAgc3RpY2t5OiBcInN0aWNreS1wb3NcIixcbn07XG52YXIgSUNPTl9UWVBFUztcbihmdW5jdGlvbiAoSUNPTl9UWVBFUykge1xuICBJQ09OX1RZUEVTW1wiY2lyY2xlXCJdID0gXCJjaXJjbGVcIjtcbiAgSUNPTl9UWVBFU1tcInNxdWFyZVwiXSA9IFwic3F1YXJlXCI7XG4gIElDT05fVFlQRVNbXCJncmlwXCJdID0gXCJncmlwXCI7XG59KShJQ09OX1RZUEVTIHx8IChJQ09OX1RZUEVTID0ge30pKTtcbmNvbnN0IFNMT1RTID0ge1xuICBtZW51QWN0aW9uczogXCJtZW51LWFjdGlvbnNcIixcbn07XG5cbmV4cG9ydCB7IENTUyBhcyBDLCBJQ09OX1RZUEVTIGFzIEksIFNMT1RTIGFzIFMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==