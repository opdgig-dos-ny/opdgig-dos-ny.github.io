"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-stepper_js-node_modules_-e1813f"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-stepper.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-stepper.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteStepper: () => (/* binding */ CalciteStepper),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */










const CSS$1 = {
  stepBar: "step-bar",
  stepBarActive: "step-bar--active",
  stepBarComplete: "step-bar--complete",
  stepBarDisabled: "step-bar--disabled",
  stepBarError: "step-bar--error",
  stepBarInActive: "step-bar--inactive",
};
const StepBar = ({ disabled, active, complete, error, key, }) => ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("svg", { class: {
    [CSS$1.stepBar]: true,
  }, key: key },
  (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("rect", { class: {
      [CSS$1.stepBarActive]: active,
      [CSS$1.stepBarComplete]: complete,
      [CSS$1.stepBarDisabled]: disabled,
      [CSS$1.stepBarError]: error,
      [CSS$1.stepBarInActive]: true,
    }, width: "100%", x: "0", y: "0" })));

const ITEM_MIN_WIDTH = {
  s: 120,
  m: 180,
  l: 200,
};
const CSS = {
  actionIcon: "action-icon",
  actionIconStart: "action-icon--start",
  actionIconEnd: "action-icon--end",
  actionContainer: "action-container",
  stepBarContainer: "step-bar-container",
  singleView: "single-view",
};

const stepperCss = ":host([scale=s]){--calcite-internal-stepper-item-spacing-unit-s:0.25rem;--calcite-internal-stepper-action-block-size:2.75rem;--calcite-internal-stepper-action-inline-size:2rem;--calcite-internal-step-bar-gap:0.25rem}:host([scale=m]){--calcite-internal-stepper-item-spacing-unit-s:0.5rem;--calcite-internal-stepper-action-block-size:3.25rem;--calcite-internal-stepper-action-inline-size:2.5rem}:host([scale=l]){--calcite-internal-stepper-item-spacing-unit-s:0.75rem;--calcite-internal-stepper-action-block-size:4rem;--calcite-internal-stepper-action-inline-size:3rem;--calcite-internal-step-bar-gap:0.75rem}:host{display:flex}.container{position:relative;display:flex;inline-size:100%;min-inline-size:-moz-fit-content;min-inline-size:fit-content;flex-direction:row;flex-wrap:wrap;align-items:stretch;justify-content:space-between}:host([layout=vertical]) .container{flex:1 1 auto;flex-direction:column}:host([layout=horizontal]) .container{display:grid;grid-template-areas:\"items\" \"content\";gap:0.5rem var(--calcite-internal-stepper-item-spacing-unit-s)}:host([layout=horizontal][scale=s]) .container{gap:0.25rem var(--calcite-internal-stepper-item-spacing-unit-s)}:host([layout=horizontal][scale=l]) .container{gap:0.75rem var(--calcite-internal-stepper-item-spacing-unit-s)}:host([layout=horizontal]) .container.single-view{display:flex;grid-template-columns:none}.action-icon{position:relative;display:flex;flex-grow:0;block-size:var(--calcite-internal-stepper-action-block-size);inline-size:var(--calcite-internal-stepper-action-inline-size)}.action-container{position:absolute;display:flex;justify-content:space-between;padding-block:0.25rem;inline-size:100%}.step-bar{display:flex;block-size:100%;inline-size:100%}.step-bar-container{position:absolute;display:flex;align-items:flex-start;justify-content:space-between;block-size:0.125rem;inline-size:100%;gap:var(--calcite-internal-step-bar-gap, 0.5rem)}.step-bar--inactive{fill:var(--light-ui-border-3, #dfdfdf);fill-opacity:1;block-size:100%}.step-bar--active{fill:var(--calcite-ui-brand)}.step-bar--complete{fill:var(--calcite-ui-brand);fill-opacity:0.5}.step-bar--error{fill:var(--calcite-ui-danger)}.step-bar--disabled{opacity:0.5}:host([hidden]){display:none}[hidden]{display:none}";

const Stepper = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteStepperItemChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteStepperItemChange", 6);
    this.calciteInternalStepperItemChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteInternalStepperItemChange", 6);
    this.enabledItems = [];
    this.itemMap = new Map();
    this.items = [];
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_1__.c)("mutation", () => this.updateItems());
    /** Specifies if the user is viewing one `stepper-item` at a time when the page width is less than sum of min-width of each item. */
    this.multipleViewMode = false;
    this.guid = `calcite-stepper-action-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_1__.c)("resize", (entries) => (this.elWidth = entries[0].contentRect.width));
    this.handleActionClick = (event) => {
      const currentActivePosition = this.currentActivePosition;
      const target = event.target;
      if (target.getAttribute("data-position") === "start") {
        this.prevStep();
      }
      else {
        this.nextStep();
      }
      if (this.currentActivePosition &&
        currentActivePosition !== this.currentActivePosition &&
        !this.items[this.currentActivePosition].disabled) {
        this.calciteStepperItemChange.emit();
      }
    };
    this.setContainerEl = (el) => {
      this.containerEl = el;
    };
    this.handleDefaultSlotChange = (event) => {
      const items = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.s)(event).filter((el) => el?.tagName === "CALCITE-STEPPER-ITEM");
      this.items = items;
      this.setGridTemplateColumns(items);
      this.setStepperItemNumberingSystem();
    };
    this.icon = false;
    this.layout = "horizontal";
    this.numbered = false;
    this.scale = "m";
    this.messages = undefined;
    this.numberingSystem = undefined;
    this.selectedItem = null;
    this.messageOverrides = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.currentActivePosition = undefined;
    this.elWidth = undefined;
  }
  handleItemPropChange() {
    this.updateItems();
  }
  numberingSystemChange() {
    this.setStepperItemNumberingSystem();
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
    this.mutationObserver?.observe(this.el, { childList: true });
    this.updateItems();
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  componentDidLoad() {
    this.resizeObserver?.observe(this.containerEl);
    // if no stepper items are set as active, default to the first one
    if (typeof this.currentActivePosition !== "number") {
      const enabledStepIndex = this.getFirstEnabledStepperPosition();
      if (enabledStepIndex === 0) {
        this.currentActivePosition = enabledStepIndex;
      }
      this.calciteInternalStepperItemChange.emit({
        position: enabledStepIndex,
      });
    }
  }
  disconnectedCallback() {
    this.resizeObserver?.disconnect();
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    this.mutationObserver?.disconnect();
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.Host, { "aria-label": this.messages.label, role: "region" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { class: { container: true, [CSS.singleView]: !this.multipleViewMode }, ref: this.setContainerEl }, !this.multipleViewMode && this.layout === "horizontal" && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { class: { [CSS.stepBarContainer]: true } }, this.items.map((item, index) => ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)(StepBar, { active: index === this.currentActivePosition, complete: item.complete && index !== this.currentActivePosition && !item.error, disabled: item.disabled && index !== this.currentActivePosition, error: item.error && index !== this.currentActivePosition, key: index }))))), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { class: { [CSS.actionContainer]: true } }, this.renderAction("start"), this.renderAction("end")), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  calciteInternalStepperItemKeyEvent(event) {
    const item = event.detail.item;
    const itemToFocus = event.target;
    switch (item.key) {
      case "ArrowDown":
      case "ArrowRight":
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(this.enabledItems, itemToFocus, "next");
        break;
      case "ArrowUp":
      case "ArrowLeft":
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(this.enabledItems, itemToFocus, "previous");
        break;
      case "Home":
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(this.enabledItems, itemToFocus, "first");
        break;
      case "End":
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(this.enabledItems, itemToFocus, "last");
        break;
    }
    event.stopPropagation();
  }
  registerItem(event) {
    const item = event.target;
    const { content, position } = event.detail;
    this.itemMap.set(item, { position, content });
    this.enabledItems = this.filterItems();
    event.stopPropagation();
  }
  updateItem(event) {
    const { position } = event.detail;
    if (typeof position === "number") {
      this.currentActivePosition = position;
      this.selectedItem = event.target;
    }
    this.calciteInternalStepperItemChange.emit({
      position,
    });
  }
  handleUserRequestedStepperItemSelect() {
    this.calciteStepperItemChange.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Set the next `calcite-stepper-item` as active. */
  async nextStep() {
    const enabledStepIndex = this.getEnabledStepIndex(this.currentActivePosition + 1, "next");
    if (typeof enabledStepIndex !== "number") {
      return;
    }
    this.updateStep(enabledStepIndex);
  }
  /** Set the previous `calcite-stepper-item` as active. */
  async prevStep() {
    const enabledStepIndex = this.getEnabledStepIndex(this.currentActivePosition - 1, "previous");
    if (typeof enabledStepIndex !== "number") {
      return;
    }
    this.updateStep(enabledStepIndex);
  }
  /**
   * Set a specified `calcite-stepper-item` as active.
   *
   * @param step
   */
  async goToStep(step) {
    const position = step - 1;
    if (this.currentActivePosition !== position) {
      this.updateStep(position);
    }
  }
  /** Set the first `calcite-stepper-item` as active. */
  async startStep() {
    const enabledStepIndex = this.getEnabledStepIndex(0, "next");
    if (typeof enabledStepIndex !== "number") {
      return;
    }
    this.updateStep(enabledStepIndex);
  }
  /** Set the last `calcite-stepper-item` as active. */
  async endStep() {
    const enabledStepIndex = this.getEnabledStepIndex(this.items.length - 1, "previous");
    if (typeof enabledStepIndex !== "number") {
      return;
    }
    this.updateStep(enabledStepIndex);
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  handlePositionChange() {
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.readTask)(() => {
      this.determineActiveStepper(true);
    });
  }
  handleElWidthChange() {
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.readTask)(() => {
      this.determineActiveStepper();
    });
  }
  updateItems() {
    this.el.querySelectorAll("calcite-stepper-item").forEach((item) => {
      item.icon = this.icon;
      item.numbered = this.numbered;
      item.layout = this.layout;
      item.scale = this.scale;
    });
  }
  determineActiveStepper(currentActivePositionChanged = false) {
    const totalItems = this.items.length;
    if (!this.elWidth || !totalItems || this.layout !== "horizontal" || totalItems === 1) {
      return;
    }
    const activePosition = this.currentActivePosition || 0;
    const totalMinWidthOfItems = totalItems * this.getMinWidthOfStepperItem();
    const totalRowGap = (totalItems - 1) * (parseInt(window.getComputedStyle(this.containerEl).rowGap) || 0);
    if (this.elWidth <= totalMinWidthOfItems + totalRowGap) {
      this.multipleViewMode = false;
      this.items.forEach((item, index) => {
        if (index !== activePosition) {
          item.hidden = true;
        }
        else {
          item.hidden = false;
          item.multipleViewMode = false;
        }
      });
    }
    else if (this.elWidth > totalMinWidthOfItems + totalRowGap) {
      if (this.multipleViewMode && !currentActivePositionChanged) {
        return;
      }
      this.multipleViewMode = true;
      this.setGridTemplateColumns(this.items);
      this.items.forEach((item) => {
        item.hidden = false;
        item.multipleViewMode = true;
      });
    }
  }
  getEnabledStepIndex(startIndex, direction = "next") {
    const { items, currentActivePosition } = this;
    let newIndex = startIndex;
    while (items[newIndex]?.disabled && this.multipleViewMode) {
      newIndex = newIndex + (direction === "previous" ? -1 : 1);
    }
    return newIndex !== currentActivePosition && newIndex < items.length && newIndex >= 0
      ? newIndex
      : null;
  }
  updateStep(position) {
    this.currentActivePosition = position;
    this.calciteInternalStepperItemChange.emit({
      position,
    });
  }
  filterItems() {
    return this.items.filter((item) => !item.disabled);
  }
  setStepperItemNumberingSystem() {
    this.items.forEach((item) => {
      item.numberingSystem = this.numberingSystem;
    });
  }
  renderAction(position) {
    const isPositionStart = position === "start";
    const path = isPositionStart ? "chevron-left" : "chevron-right";
    const { currentActivePosition, multipleViewMode, layout } = this;
    const totalItems = this.items.length;
    const id = `${this.guid}-${isPositionStart ? "start" : "end"}`;
    return layout === "horizontal" && !multipleViewMode ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-action", { alignment: "center", appearance: "transparent", class: {
        [CSS.actionIcon]: true,
      }, compact: true, "data-position": position, disabled: (currentActivePosition === 0 && isPositionStart) ||
        (currentActivePosition === totalItems - 1 && !isPositionStart), icon: path, iconFlipRtl: true, id: id, onClick: this.handleActionClick, scale: this.scale, text: isPositionStart ? this.messages.previousStep : this.messages.nextStep })) : null;
  }
  getFirstEnabledStepperPosition() {
    const enabledStepIndex = this.items.findIndex((item) => !item.disabled);
    if (enabledStepIndex > -1) {
      return enabledStepIndex;
    }
    return 0;
  }
  setGridTemplateColumns(items) {
    const minWidth = this.getMinWidthOfStepperItem();
    const spacing = Array(items.length).fill(`minmax(${minWidth}px, 1fr)`).join(" ");
    this.containerEl.style.gridTemplateAreas = spacing;
    this.containerEl.style.gridTemplateColumns = spacing;
  }
  getMinWidthOfStepperItem() {
    return ITEM_MIN_WIDTH[this.scale];
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "icon": ["handleItemPropChange"],
    "layout": ["handleItemPropChange"],
    "numbered": ["handleItemPropChange"],
    "scale": ["handleItemPropChange"],
    "numberingSystem": ["numberingSystemChange"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"],
    "currentActivePosition": ["handlePositionChange"],
    "elWidth": ["handleElWidthChange"]
  }; }
  static get style() { return stepperCss; }
}, [1, "calcite-stepper", {
    "icon": [516],
    "layout": [513],
    "numbered": [516],
    "scale": [513],
    "messages": [1040],
    "numberingSystem": [513, "numbering-system"],
    "selectedItem": [1040],
    "messageOverrides": [1040],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "currentActivePosition": [32],
    "elWidth": [32],
    "nextStep": [64],
    "prevStep": [64],
    "goToStep": [64],
    "startStep": [64],
    "endStep": [64]
  }, [[0, "calciteInternalStepperItemKeyEvent", "calciteInternalStepperItemKeyEvent"], [0, "calciteInternalStepperItemRegister", "registerItem"], [0, "calciteInternalStepperItemSelect", "updateItem"], [0, "calciteInternalUserRequestedStepperItemSelect", "handleUserRequestedStepperItemSelect"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-stepper", "calcite-action", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-stepper":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Stepper);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteStepper = Stepper;
const defineCustomElement = defineCustomElement$1;




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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvY2Y4MDJkYWJjODMwZDIzODc3YzgwODYwNjU5YmZhMDMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lIO0FBQ2pDO0FBQ25DO0FBQ2Y7QUFDd0M7QUFDb0M7QUFDekQ7QUFDRjtBQUNFOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlDQUF5QyxNQUFNLHlFQUFDLFVBQVU7QUFDN0U7QUFDQSxHQUFHLFlBQVk7QUFDZixFQUFFLHlFQUFDLFdBQVc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxpQ0FBaUM7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyx1REFBdUQscURBQXFELG1EQUFtRCx3Q0FBd0MsaUJBQWlCLHNEQUFzRCxxREFBcUQscURBQXFELGlCQUFpQix1REFBdUQsa0RBQWtELG1EQUFtRCx3Q0FBd0MsTUFBTSxhQUFhLFdBQVcsa0JBQWtCLGFBQWEsaUJBQWlCLGlDQUFpQyw0QkFBNEIsbUJBQW1CLGVBQWUsb0JBQW9CLDhCQUE4QixvQ0FBb0MsY0FBYyxzQkFBc0Isc0NBQXNDLGFBQWEsMENBQTBDLCtEQUErRCwrQ0FBK0MsZ0VBQWdFLCtDQUErQyxnRUFBZ0Usa0RBQWtELGFBQWEsMkJBQTJCLGFBQWEsa0JBQWtCLGFBQWEsWUFBWSw2REFBNkQsK0RBQStELGtCQUFrQixrQkFBa0IsYUFBYSw4QkFBOEIsc0JBQXNCLGlCQUFpQixVQUFVLGFBQWEsZ0JBQWdCLGlCQUFpQixvQkFBb0Isa0JBQWtCLGFBQWEsdUJBQXVCLDhCQUE4QixvQkFBb0IsaUJBQWlCLGlEQUFpRCxvQkFBb0IsdUNBQXVDLGVBQWUsZ0JBQWdCLGtCQUFrQiw2QkFBNkIsb0JBQW9CLDZCQUE2QixpQkFBaUIsaUJB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlFQUFLO0FBQ1o7QUFDQTtBQUNBLEVBQUUsbUZBQVc7QUFDYjtBQUNBOztBQUUrRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLXN0ZXBwZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2xvYWRhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGgsIHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBIb3N0LCByZWFkVGFzayB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IHMgYXMgc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMsIGkgYXMgZm9jdXNFbGVtZW50SW5Hcm91cCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgdSBhcyB1cGRhdGVNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0IH0gZnJvbSAnLi9hY3Rpb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDMgfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5cbmNvbnN0IENTUyQxID0ge1xuICBzdGVwQmFyOiBcInN0ZXAtYmFyXCIsXG4gIHN0ZXBCYXJBY3RpdmU6IFwic3RlcC1iYXItLWFjdGl2ZVwiLFxuICBzdGVwQmFyQ29tcGxldGU6IFwic3RlcC1iYXItLWNvbXBsZXRlXCIsXG4gIHN0ZXBCYXJEaXNhYmxlZDogXCJzdGVwLWJhci0tZGlzYWJsZWRcIixcbiAgc3RlcEJhckVycm9yOiBcInN0ZXAtYmFyLS1lcnJvclwiLFxuICBzdGVwQmFySW5BY3RpdmU6IFwic3RlcC1iYXItLWluYWN0aXZlXCIsXG59O1xuY29uc3QgU3RlcEJhciA9ICh7IGRpc2FibGVkLCBhY3RpdmUsIGNvbXBsZXRlLCBlcnJvciwga2V5LCB9KSA9PiAoaChcInN2Z1wiLCB7IGNsYXNzOiB7XG4gICAgW0NTUyQxLnN0ZXBCYXJdOiB0cnVlLFxuICB9LCBrZXk6IGtleSB9LFxuICBoKFwicmVjdFwiLCB7IGNsYXNzOiB7XG4gICAgICBbQ1NTJDEuc3RlcEJhckFjdGl2ZV06IGFjdGl2ZSxcbiAgICAgIFtDU1MkMS5zdGVwQmFyQ29tcGxldGVdOiBjb21wbGV0ZSxcbiAgICAgIFtDU1MkMS5zdGVwQmFyRGlzYWJsZWRdOiBkaXNhYmxlZCxcbiAgICAgIFtDU1MkMS5zdGVwQmFyRXJyb3JdOiBlcnJvcixcbiAgICAgIFtDU1MkMS5zdGVwQmFySW5BY3RpdmVdOiB0cnVlLFxuICAgIH0sIHdpZHRoOiBcIjEwMCVcIiwgeDogXCIwXCIsIHk6IFwiMFwiIH0pKSk7XG5cbmNvbnN0IElURU1fTUlOX1dJRFRIID0ge1xuICBzOiAxMjAsXG4gIG06IDE4MCxcbiAgbDogMjAwLFxufTtcbmNvbnN0IENTUyA9IHtcbiAgYWN0aW9uSWNvbjogXCJhY3Rpb24taWNvblwiLFxuICBhY3Rpb25JY29uU3RhcnQ6IFwiYWN0aW9uLWljb24tLXN0YXJ0XCIsXG4gIGFjdGlvbkljb25FbmQ6IFwiYWN0aW9uLWljb24tLWVuZFwiLFxuICBhY3Rpb25Db250YWluZXI6IFwiYWN0aW9uLWNvbnRhaW5lclwiLFxuICBzdGVwQmFyQ29udGFpbmVyOiBcInN0ZXAtYmFyLWNvbnRhaW5lclwiLFxuICBzaW5nbGVWaWV3OiBcInNpbmdsZS12aWV3XCIsXG59O1xuXG5jb25zdCBzdGVwcGVyQ3NzID0gXCI6aG9zdChbc2NhbGU9c10pey0tY2FsY2l0ZS1pbnRlcm5hbC1zdGVwcGVyLWl0ZW0tc3BhY2luZy11bml0LXM6MC4yNXJlbTstLWNhbGNpdGUtaW50ZXJuYWwtc3RlcHBlci1hY3Rpb24tYmxvY2stc2l6ZToyLjc1cmVtOy0tY2FsY2l0ZS1pbnRlcm5hbC1zdGVwcGVyLWFjdGlvbi1pbmxpbmUtc2l6ZToycmVtOy0tY2FsY2l0ZS1pbnRlcm5hbC1zdGVwLWJhci1nYXA6MC4yNXJlbX06aG9zdChbc2NhbGU9bV0pey0tY2FsY2l0ZS1pbnRlcm5hbC1zdGVwcGVyLWl0ZW0tc3BhY2luZy11bml0LXM6MC41cmVtOy0tY2FsY2l0ZS1pbnRlcm5hbC1zdGVwcGVyLWFjdGlvbi1ibG9jay1zaXplOjMuMjVyZW07LS1jYWxjaXRlLWludGVybmFsLXN0ZXBwZXItYWN0aW9uLWlubGluZS1zaXplOjIuNXJlbX06aG9zdChbc2NhbGU9bF0pey0tY2FsY2l0ZS1pbnRlcm5hbC1zdGVwcGVyLWl0ZW0tc3BhY2luZy11bml0LXM6MC43NXJlbTstLWNhbGNpdGUtaW50ZXJuYWwtc3RlcHBlci1hY3Rpb24tYmxvY2stc2l6ZTo0cmVtOy0tY2FsY2l0ZS1pbnRlcm5hbC1zdGVwcGVyLWFjdGlvbi1pbmxpbmUtc2l6ZTozcmVtOy0tY2FsY2l0ZS1pbnRlcm5hbC1zdGVwLWJhci1nYXA6MC43NXJlbX06aG9zdHtkaXNwbGF5OmZsZXh9LmNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTttaW4taW5saW5lLXNpemU6LW1vei1maXQtY29udGVudDttaW4taW5saW5lLXNpemU6Zml0LWNvbnRlbnQ7ZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOnN0cmV0Y2g7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Omhvc3QoW2xheW91dD12ZXJ0aWNhbF0pIC5jb250YWluZXJ7ZmxleDoxIDEgYXV0bztmbGV4LWRpcmVjdGlvbjpjb2x1bW59Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXSkgLmNvbnRhaW5lcntkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXFwiaXRlbXNcXFwiIFxcXCJjb250ZW50XFxcIjtnYXA6MC41cmVtIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtc3RlcHBlci1pdGVtLXNwYWNpbmctdW5pdC1zKX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdW3NjYWxlPXNdKSAuY29udGFpbmVye2dhcDowLjI1cmVtIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtc3RlcHBlci1pdGVtLXNwYWNpbmctdW5pdC1zKX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdW3NjYWxlPWxdKSAuY29udGFpbmVye2dhcDowLjc1cmVtIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtc3RlcHBlci1pdGVtLXNwYWNpbmctdW5pdC1zKX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSAuY29udGFpbmVyLnNpbmdsZS12aWV3e2Rpc3BsYXk6ZmxleDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bm9uZX0uYWN0aW9uLWljb257cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzowO2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1zdGVwcGVyLWFjdGlvbi1ibG9jay1zaXplKTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWludGVybmFsLXN0ZXBwZXItYWN0aW9uLWlubGluZS1zaXplKX0uYWN0aW9uLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cGFkZGluZy1ibG9jazowLjI1cmVtO2lubGluZS1zaXplOjEwMCV9LnN0ZXAtYmFye2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJX0uc3RlcC1iYXItY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2Jsb2NrLXNpemU6MC4xMjVyZW07aW5saW5lLXNpemU6MTAwJTtnYXA6dmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1zdGVwLWJhci1nYXAsIDAuNXJlbSl9LnN0ZXAtYmFyLS1pbmFjdGl2ZXtmaWxsOnZhcigtLWxpZ2h0LXVpLWJvcmRlci0zLCAjZGZkZmRmKTtmaWxsLW9wYWNpdHk6MTtibG9jay1zaXplOjEwMCV9LnN0ZXAtYmFyLS1hY3RpdmV7ZmlsbDp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0uc3RlcC1iYXItLWNvbXBsZXRle2ZpbGw6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7ZmlsbC1vcGFjaXR5OjAuNX0uc3RlcC1iYXItLWVycm9ye2ZpbGw6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfS5zdGVwLWJhci0tZGlzYWJsZWR7b3BhY2l0eTowLjV9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IFN0ZXBwZXIgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZVN0ZXBwZXJJdGVtQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlU3RlcHBlckl0ZW1DaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxTdGVwcGVySXRlbUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsU3RlcHBlckl0ZW1DaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5lbmFibGVkSXRlbXMgPSBbXTtcbiAgICB0aGlzLml0ZW1NYXAgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gdGhpcy51cGRhdGVJdGVtcygpKTtcbiAgICAvKiogU3BlY2lmaWVzIGlmIHRoZSB1c2VyIGlzIHZpZXdpbmcgb25lIGBzdGVwcGVyLWl0ZW1gIGF0IGEgdGltZSB3aGVuIHRoZSBwYWdlIHdpZHRoIGlzIGxlc3MgdGhhbiBzdW0gb2YgbWluLXdpZHRoIG9mIGVhY2ggaXRlbS4gKi9cbiAgICB0aGlzLm11bHRpcGxlVmlld01vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmd1aWQgPSBgY2FsY2l0ZS1zdGVwcGVyLWFjdGlvbi0ke2d1aWQoKX1gO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgKGVudHJpZXMpID0+ICh0aGlzLmVsV2lkdGggPSBlbnRyaWVzWzBdLmNvbnRlbnRSZWN0LndpZHRoKSk7XG4gICAgdGhpcy5oYW5kbGVBY3Rpb25DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEFjdGl2ZVBvc2l0aW9uID0gdGhpcy5jdXJyZW50QWN0aXZlUG9zaXRpb247XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcG9zaXRpb25cIikgPT09IFwic3RhcnRcIikge1xuICAgICAgICB0aGlzLnByZXZTdGVwKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5uZXh0U3RlcCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VycmVudEFjdGl2ZVBvc2l0aW9uICYmXG4gICAgICAgIGN1cnJlbnRBY3RpdmVQb3NpdGlvbiAhPT0gdGhpcy5jdXJyZW50QWN0aXZlUG9zaXRpb24gJiZcbiAgICAgICAgIXRoaXMuaXRlbXNbdGhpcy5jdXJyZW50QWN0aXZlUG9zaXRpb25dLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuY2FsY2l0ZVN0ZXBwZXJJdGVtQ2hhbmdlLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0Q29udGFpbmVyRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyRWwgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRGVmYXVsdFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMoZXZlbnQpLmZpbHRlcigoZWwpID0+IGVsPy50YWdOYW1lID09PSBcIkNBTENJVEUtU1RFUFBFUi1JVEVNXCIpO1xuICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgICAgdGhpcy5zZXRHcmlkVGVtcGxhdGVDb2x1bW5zKGl0ZW1zKTtcbiAgICAgIHRoaXMuc2V0U3RlcHBlckl0ZW1OdW1iZXJpbmdTeXN0ZW0oKTtcbiAgICB9O1xuICAgIHRoaXMuaWNvbiA9IGZhbHNlO1xuICAgIHRoaXMubGF5b3V0ID0gXCJob3Jpem9udGFsXCI7XG4gICAgdGhpcy5udW1iZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuY3VycmVudEFjdGl2ZVBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWxXaWR0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICBoYW5kbGVJdGVtUHJvcENoYW5nZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XG4gIH1cbiAgbnVtYmVyaW5nU3lzdGVtQ2hhbmdlKCkge1xuICAgIHRoaXMuc2V0U3RlcHBlckl0ZW1OdW1iZXJpbmdTeXN0ZW0oKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmNvbnRhaW5lckVsKTtcbiAgICAvLyBpZiBubyBzdGVwcGVyIGl0ZW1zIGFyZSBzZXQgYXMgYWN0aXZlLCBkZWZhdWx0IHRvIHRoZSBmaXJzdCBvbmVcbiAgICBpZiAodHlwZW9mIHRoaXMuY3VycmVudEFjdGl2ZVBvc2l0aW9uICE9PSBcIm51bWJlclwiKSB7XG4gICAgICBjb25zdCBlbmFibGVkU3RlcEluZGV4ID0gdGhpcy5nZXRGaXJzdEVuYWJsZWRTdGVwcGVyUG9zaXRpb24oKTtcbiAgICAgIGlmIChlbmFibGVkU3RlcEluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZVBvc2l0aW9uID0gZW5hYmxlZFN0ZXBJbmRleDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsU3RlcHBlckl0ZW1DaGFuZ2UuZW1pdCh7XG4gICAgICAgIHBvc2l0aW9uOiBlbmFibGVkU3RlcEluZGV4LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMubGFiZWwsIHJvbGU6IFwicmVnaW9uXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7IGNvbnRhaW5lcjogdHJ1ZSwgW0NTUy5zaW5nbGVWaWV3XTogIXRoaXMubXVsdGlwbGVWaWV3TW9kZSB9LCByZWY6IHRoaXMuc2V0Q29udGFpbmVyRWwgfSwgIXRoaXMubXVsdGlwbGVWaWV3TW9kZSAmJiB0aGlzLmxheW91dCA9PT0gXCJob3Jpem9udGFsXCIgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLnN0ZXBCYXJDb250YWluZXJdOiB0cnVlIH0gfSwgdGhpcy5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoaChTdGVwQmFyLCB7IGFjdGl2ZTogaW5kZXggPT09IHRoaXMuY3VycmVudEFjdGl2ZVBvc2l0aW9uLCBjb21wbGV0ZTogaXRlbS5jb21wbGV0ZSAmJiBpbmRleCAhPT0gdGhpcy5jdXJyZW50QWN0aXZlUG9zaXRpb24gJiYgIWl0ZW0uZXJyb3IsIGRpc2FibGVkOiBpdGVtLmRpc2FibGVkICYmIGluZGV4ICE9PSB0aGlzLmN1cnJlbnRBY3RpdmVQb3NpdGlvbiwgZXJyb3I6IGl0ZW0uZXJyb3IgJiYgaW5kZXggIT09IHRoaXMuY3VycmVudEFjdGl2ZVBvc2l0aW9uLCBrZXk6IGluZGV4IH0pKSkpKSwgaChcImRpdlwiLCB7IGNsYXNzOiB7IFtDU1MuYWN0aW9uQ29udGFpbmVyXTogdHJ1ZSB9IH0sIHRoaXMucmVuZGVyQWN0aW9uKFwic3RhcnRcIiksIHRoaXMucmVuZGVyQWN0aW9uKFwiZW5kXCIpKSwgaChcInNsb3RcIiwgeyBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlRGVmYXVsdFNsb3RDaGFuZ2UgfSkpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY2FsY2l0ZUludGVybmFsU3RlcHBlckl0ZW1LZXlFdmVudChldmVudCkge1xuICAgIGNvbnN0IGl0ZW0gPSBldmVudC5kZXRhaWwuaXRlbTtcbiAgICBjb25zdCBpdGVtVG9Gb2N1cyA9IGV2ZW50LnRhcmdldDtcbiAgICBzd2l0Y2ggKGl0ZW0ua2V5KSB7XG4gICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICBmb2N1c0VsZW1lbnRJbkdyb3VwKHRoaXMuZW5hYmxlZEl0ZW1zLCBpdGVtVG9Gb2N1cywgXCJuZXh0XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgIGZvY3VzRWxlbWVudEluR3JvdXAodGhpcy5lbmFibGVkSXRlbXMsIGl0ZW1Ub0ZvY3VzLCBcInByZXZpb3VzXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgIGZvY3VzRWxlbWVudEluR3JvdXAodGhpcy5lbmFibGVkSXRlbXMsIGl0ZW1Ub0ZvY3VzLCBcImZpcnN0XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJFbmRcIjpcbiAgICAgICAgZm9jdXNFbGVtZW50SW5Hcm91cCh0aGlzLmVuYWJsZWRJdGVtcywgaXRlbVRvRm9jdXMsIFwibGFzdFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIHJlZ2lzdGVySXRlbShldmVudCkge1xuICAgIGNvbnN0IGl0ZW0gPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgeyBjb250ZW50LCBwb3NpdGlvbiB9ID0gZXZlbnQuZGV0YWlsO1xuICAgIHRoaXMuaXRlbU1hcC5zZXQoaXRlbSwgeyBwb3NpdGlvbiwgY29udGVudCB9KTtcbiAgICB0aGlzLmVuYWJsZWRJdGVtcyA9IHRoaXMuZmlsdGVySXRlbXMoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICB1cGRhdGVJdGVtKGV2ZW50KSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiB9ID0gZXZlbnQuZGV0YWlsO1xuICAgIGlmICh0eXBlb2YgcG9zaXRpb24gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHRoaXMuY3VycmVudEFjdGl2ZVBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGV2ZW50LnRhcmdldDtcbiAgICB9XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxTdGVwcGVySXRlbUNoYW5nZS5lbWl0KHtcbiAgICAgIHBvc2l0aW9uLFxuICAgIH0pO1xuICB9XG4gIGhhbmRsZVVzZXJSZXF1ZXN0ZWRTdGVwcGVySXRlbVNlbGVjdCgpIHtcbiAgICB0aGlzLmNhbGNpdGVTdGVwcGVySXRlbUNoYW5nZS5lbWl0KCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0IHRoZSBuZXh0IGBjYWxjaXRlLXN0ZXBwZXItaXRlbWAgYXMgYWN0aXZlLiAqL1xuICBhc3luYyBuZXh0U3RlcCgpIHtcbiAgICBjb25zdCBlbmFibGVkU3RlcEluZGV4ID0gdGhpcy5nZXRFbmFibGVkU3RlcEluZGV4KHRoaXMuY3VycmVudEFjdGl2ZVBvc2l0aW9uICsgMSwgXCJuZXh0XCIpO1xuICAgIGlmICh0eXBlb2YgZW5hYmxlZFN0ZXBJbmRleCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0ZXAoZW5hYmxlZFN0ZXBJbmRleCk7XG4gIH1cbiAgLyoqIFNldCB0aGUgcHJldmlvdXMgYGNhbGNpdGUtc3RlcHBlci1pdGVtYCBhcyBhY3RpdmUuICovXG4gIGFzeW5jIHByZXZTdGVwKCkge1xuICAgIGNvbnN0IGVuYWJsZWRTdGVwSW5kZXggPSB0aGlzLmdldEVuYWJsZWRTdGVwSW5kZXgodGhpcy5jdXJyZW50QWN0aXZlUG9zaXRpb24gLSAxLCBcInByZXZpb3VzXCIpO1xuICAgIGlmICh0eXBlb2YgZW5hYmxlZFN0ZXBJbmRleCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0ZXAoZW5hYmxlZFN0ZXBJbmRleCk7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBhIHNwZWNpZmllZCBgY2FsY2l0ZS1zdGVwcGVyLWl0ZW1gIGFzIGFjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHN0ZXBcbiAgICovXG4gIGFzeW5jIGdvVG9TdGVwKHN0ZXApIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHN0ZXAgLSAxO1xuICAgIGlmICh0aGlzLmN1cnJlbnRBY3RpdmVQb3NpdGlvbiAhPT0gcG9zaXRpb24pIHtcbiAgICAgIHRoaXMudXBkYXRlU3RlcChwb3NpdGlvbik7XG4gICAgfVxuICB9XG4gIC8qKiBTZXQgdGhlIGZpcnN0IGBjYWxjaXRlLXN0ZXBwZXItaXRlbWAgYXMgYWN0aXZlLiAqL1xuICBhc3luYyBzdGFydFN0ZXAoKSB7XG4gICAgY29uc3QgZW5hYmxlZFN0ZXBJbmRleCA9IHRoaXMuZ2V0RW5hYmxlZFN0ZXBJbmRleCgwLCBcIm5leHRcIik7XG4gICAgaWYgKHR5cGVvZiBlbmFibGVkU3RlcEluZGV4ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudXBkYXRlU3RlcChlbmFibGVkU3RlcEluZGV4KTtcbiAgfVxuICAvKiogU2V0IHRoZSBsYXN0IGBjYWxjaXRlLXN0ZXBwZXItaXRlbWAgYXMgYWN0aXZlLiAqL1xuICBhc3luYyBlbmRTdGVwKCkge1xuICAgIGNvbnN0IGVuYWJsZWRTdGVwSW5kZXggPSB0aGlzLmdldEVuYWJsZWRTdGVwSW5kZXgodGhpcy5pdGVtcy5sZW5ndGggLSAxLCBcInByZXZpb3VzXCIpO1xuICAgIGlmICh0eXBlb2YgZW5hYmxlZFN0ZXBJbmRleCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0ZXAoZW5hYmxlZFN0ZXBJbmRleCk7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICBoYW5kbGVQb3NpdGlvbkNoYW5nZSgpIHtcbiAgICByZWFkVGFzaygoKSA9PiB7XG4gICAgICB0aGlzLmRldGVybWluZUFjdGl2ZVN0ZXBwZXIodHJ1ZSk7XG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlRWxXaWR0aENoYW5nZSgpIHtcbiAgICByZWFkVGFzaygoKSA9PiB7XG4gICAgICB0aGlzLmRldGVybWluZUFjdGl2ZVN0ZXBwZXIoKTtcbiAgICB9KTtcbiAgfVxuICB1cGRhdGVJdGVtcygpIHtcbiAgICB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLXN0ZXBwZXItaXRlbVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmljb24gPSB0aGlzLmljb247XG4gICAgICBpdGVtLm51bWJlcmVkID0gdGhpcy5udW1iZXJlZDtcbiAgICAgIGl0ZW0ubGF5b3V0ID0gdGhpcy5sYXlvdXQ7XG4gICAgICBpdGVtLnNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICB9KTtcbiAgfVxuICBkZXRlcm1pbmVBY3RpdmVTdGVwcGVyKGN1cnJlbnRBY3RpdmVQb3NpdGlvbkNoYW5nZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRvdGFsSXRlbXMgPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICBpZiAoIXRoaXMuZWxXaWR0aCB8fCAhdG90YWxJdGVtcyB8fCB0aGlzLmxheW91dCAhPT0gXCJob3Jpem9udGFsXCIgfHwgdG90YWxJdGVtcyA9PT0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmVQb3NpdGlvbiA9IHRoaXMuY3VycmVudEFjdGl2ZVBvc2l0aW9uIHx8IDA7XG4gICAgY29uc3QgdG90YWxNaW5XaWR0aE9mSXRlbXMgPSB0b3RhbEl0ZW1zICogdGhpcy5nZXRNaW5XaWR0aE9mU3RlcHBlckl0ZW0oKTtcbiAgICBjb25zdCB0b3RhbFJvd0dhcCA9ICh0b3RhbEl0ZW1zIC0gMSkgKiAocGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jb250YWluZXJFbCkucm93R2FwKSB8fCAwKTtcbiAgICBpZiAodGhpcy5lbFdpZHRoIDw9IHRvdGFsTWluV2lkdGhPZkl0ZW1zICsgdG90YWxSb3dHYXApIHtcbiAgICAgIHRoaXMubXVsdGlwbGVWaWV3TW9kZSA9IGZhbHNlO1xuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggIT09IGFjdGl2ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgaXRlbS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGl0ZW0uaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgaXRlbS5tdWx0aXBsZVZpZXdNb2RlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmVsV2lkdGggPiB0b3RhbE1pbldpZHRoT2ZJdGVtcyArIHRvdGFsUm93R2FwKSB7XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZVZpZXdNb2RlICYmICFjdXJyZW50QWN0aXZlUG9zaXRpb25DaGFuZ2VkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMubXVsdGlwbGVWaWV3TW9kZSA9IHRydWU7XG4gICAgICB0aGlzLnNldEdyaWRUZW1wbGF0ZUNvbHVtbnModGhpcy5pdGVtcyk7XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgaXRlbS5tdWx0aXBsZVZpZXdNb2RlID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBnZXRFbmFibGVkU3RlcEluZGV4KHN0YXJ0SW5kZXgsIGRpcmVjdGlvbiA9IFwibmV4dFwiKSB7XG4gICAgY29uc3QgeyBpdGVtcywgY3VycmVudEFjdGl2ZVBvc2l0aW9uIH0gPSB0aGlzO1xuICAgIGxldCBuZXdJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgd2hpbGUgKGl0ZW1zW25ld0luZGV4XT8uZGlzYWJsZWQgJiYgdGhpcy5tdWx0aXBsZVZpZXdNb2RlKSB7XG4gICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgKGRpcmVjdGlvbiA9PT0gXCJwcmV2aW91c1wiID8gLTEgOiAxKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0luZGV4ICE9PSBjdXJyZW50QWN0aXZlUG9zaXRpb24gJiYgbmV3SW5kZXggPCBpdGVtcy5sZW5ndGggJiYgbmV3SW5kZXggPj0gMFxuICAgICAgPyBuZXdJbmRleFxuICAgICAgOiBudWxsO1xuICB9XG4gIHVwZGF0ZVN0ZXAocG9zaXRpb24pIHtcbiAgICB0aGlzLmN1cnJlbnRBY3RpdmVQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsU3RlcHBlckl0ZW1DaGFuZ2UuZW1pdCh7XG4gICAgICBwb3NpdGlvbixcbiAgICB9KTtcbiAgfVxuICBmaWx0ZXJJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmRpc2FibGVkKTtcbiAgfVxuICBzZXRTdGVwcGVySXRlbU51bWJlcmluZ1N5c3RlbSgpIHtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0ubnVtYmVyaW5nU3lzdGVtID0gdGhpcy5udW1iZXJpbmdTeXN0ZW07XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyQWN0aW9uKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgaXNQb3NpdGlvblN0YXJ0ID0gcG9zaXRpb24gPT09IFwic3RhcnRcIjtcbiAgICBjb25zdCBwYXRoID0gaXNQb3NpdGlvblN0YXJ0ID8gXCJjaGV2cm9uLWxlZnRcIiA6IFwiY2hldnJvbi1yaWdodFwiO1xuICAgIGNvbnN0IHsgY3VycmVudEFjdGl2ZVBvc2l0aW9uLCBtdWx0aXBsZVZpZXdNb2RlLCBsYXlvdXQgfSA9IHRoaXM7XG4gICAgY29uc3QgdG90YWxJdGVtcyA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgIGNvbnN0IGlkID0gYCR7dGhpcy5ndWlkfS0ke2lzUG9zaXRpb25TdGFydCA/IFwic3RhcnRcIiA6IFwiZW5kXCJ9YDtcbiAgICByZXR1cm4gbGF5b3V0ID09PSBcImhvcml6b250YWxcIiAmJiAhbXVsdGlwbGVWaWV3TW9kZSA/IChoKFwiY2FsY2l0ZS1hY3Rpb25cIiwgeyBhbGlnbm1lbnQ6IFwiY2VudGVyXCIsIGFwcGVhcmFuY2U6IFwidHJhbnNwYXJlbnRcIiwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5hY3Rpb25JY29uXTogdHJ1ZSxcbiAgICAgIH0sIGNvbXBhY3Q6IHRydWUsIFwiZGF0YS1wb3NpdGlvblwiOiBwb3NpdGlvbiwgZGlzYWJsZWQ6IChjdXJyZW50QWN0aXZlUG9zaXRpb24gPT09IDAgJiYgaXNQb3NpdGlvblN0YXJ0KSB8fFxuICAgICAgICAoY3VycmVudEFjdGl2ZVBvc2l0aW9uID09PSB0b3RhbEl0ZW1zIC0gMSAmJiAhaXNQb3NpdGlvblN0YXJ0KSwgaWNvbjogcGF0aCwgaWNvbkZsaXBSdGw6IHRydWUsIGlkOiBpZCwgb25DbGljazogdGhpcy5oYW5kbGVBY3Rpb25DbGljaywgc2NhbGU6IHRoaXMuc2NhbGUsIHRleHQ6IGlzUG9zaXRpb25TdGFydCA/IHRoaXMubWVzc2FnZXMucHJldmlvdXNTdGVwIDogdGhpcy5tZXNzYWdlcy5uZXh0U3RlcCB9KSkgOiBudWxsO1xuICB9XG4gIGdldEZpcnN0RW5hYmxlZFN0ZXBwZXJQb3NpdGlvbigpIHtcbiAgICBjb25zdCBlbmFibGVkU3RlcEluZGV4ID0gdGhpcy5pdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+ICFpdGVtLmRpc2FibGVkKTtcbiAgICBpZiAoZW5hYmxlZFN0ZXBJbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gZW5hYmxlZFN0ZXBJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgc2V0R3JpZFRlbXBsYXRlQ29sdW1ucyhpdGVtcykge1xuICAgIGNvbnN0IG1pbldpZHRoID0gdGhpcy5nZXRNaW5XaWR0aE9mU3RlcHBlckl0ZW0oKTtcbiAgICBjb25zdCBzcGFjaW5nID0gQXJyYXkoaXRlbXMubGVuZ3RoKS5maWxsKGBtaW5tYXgoJHttaW5XaWR0aH1weCwgMWZyKWApLmpvaW4oXCIgXCIpO1xuICAgIHRoaXMuY29udGFpbmVyRWwuc3R5bGUuZ3JpZFRlbXBsYXRlQXJlYXMgPSBzcGFjaW5nO1xuICAgIHRoaXMuY29udGFpbmVyRWwuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IHNwYWNpbmc7XG4gIH1cbiAgZ2V0TWluV2lkdGhPZlN0ZXBwZXJJdGVtKCkge1xuICAgIHJldHVybiBJVEVNX01JTl9XSURUSFt0aGlzLnNjYWxlXTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiaWNvblwiOiBbXCJoYW5kbGVJdGVtUHJvcENoYW5nZVwiXSxcbiAgICBcImxheW91dFwiOiBbXCJoYW5kbGVJdGVtUHJvcENoYW5nZVwiXSxcbiAgICBcIm51bWJlcmVkXCI6IFtcImhhbmRsZUl0ZW1Qcm9wQ2hhbmdlXCJdLFxuICAgIFwic2NhbGVcIjogW1wiaGFuZGxlSXRlbVByb3BDaGFuZ2VcIl0sXG4gICAgXCJudW1iZXJpbmdTeXN0ZW1cIjogW1wibnVtYmVyaW5nU3lzdGVtQ2hhbmdlXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXSxcbiAgICBcImN1cnJlbnRBY3RpdmVQb3NpdGlvblwiOiBbXCJoYW5kbGVQb3NpdGlvbkNoYW5nZVwiXSxcbiAgICBcImVsV2lkdGhcIjogW1wiaGFuZGxlRWxXaWR0aENoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBzdGVwcGVyQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXN0ZXBwZXJcIiwge1xuICAgIFwiaWNvblwiOiBbNTE2XSxcbiAgICBcImxheW91dFwiOiBbNTEzXSxcbiAgICBcIm51bWJlcmVkXCI6IFs1MTZdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJudW1iZXJpbmdTeXN0ZW1cIjogWzUxMywgXCJudW1iZXJpbmctc3lzdGVtXCJdLFxuICAgIFwic2VsZWN0ZWRJdGVtXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcImN1cnJlbnRBY3RpdmVQb3NpdGlvblwiOiBbMzJdLFxuICAgIFwiZWxXaWR0aFwiOiBbMzJdLFxuICAgIFwibmV4dFN0ZXBcIjogWzY0XSxcbiAgICBcInByZXZTdGVwXCI6IFs2NF0sXG4gICAgXCJnb1RvU3RlcFwiOiBbNjRdLFxuICAgIFwic3RhcnRTdGVwXCI6IFs2NF0sXG4gICAgXCJlbmRTdGVwXCI6IFs2NF1cbiAgfSwgW1swLCBcImNhbGNpdGVJbnRlcm5hbFN0ZXBwZXJJdGVtS2V5RXZlbnRcIiwgXCJjYWxjaXRlSW50ZXJuYWxTdGVwcGVySXRlbUtleUV2ZW50XCJdLCBbMCwgXCJjYWxjaXRlSW50ZXJuYWxTdGVwcGVySXRlbVJlZ2lzdGVyXCIsIFwicmVnaXN0ZXJJdGVtXCJdLCBbMCwgXCJjYWxjaXRlSW50ZXJuYWxTdGVwcGVySXRlbVNlbGVjdFwiLCBcInVwZGF0ZUl0ZW1cIl0sIFswLCBcImNhbGNpdGVJbnRlcm5hbFVzZXJSZXF1ZXN0ZWRTdGVwcGVySXRlbVNlbGVjdFwiLCBcImhhbmRsZVVzZXJSZXF1ZXN0ZWRTdGVwcGVySXRlbVNlbGVjdFwiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1zdGVwcGVyXCIsIFwiY2FsY2l0ZS1hY3Rpb25cIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWxvYWRlclwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1zdGVwcGVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgU3RlcHBlcik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1hY3Rpb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZVN0ZXBwZXIgPSBTdGVwcGVyO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZVN0ZXBwZXIsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkLCBmb3JjZVVwZGF0ZSB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuY29uc3QgcmVzb2x2ZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBwcm9taXNlTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBzZXRzIHVwIHRoZSBjb21wb25lbnQgZm9yIHRoZSBhYmlsaXR5IHRvIGtub3cgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50V2lsbExvYWQoKTogdm9pZCB7XG4gKiAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldFVwTG9hZGFibGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHByb21pc2VNYXAuc2V0KGNvbXBvbmVudCwgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmVNYXAuc2V0KGNvbXBvbmVudCwgcmVzb2x2ZSkpKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBsZXRzIHRoZSBsb2FkYWJsZSBjb21wb25lbnQga25vdyB0aGF0IGl0IGlzIG5vdyBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50RGlkTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRDb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJlc29sdmVNYXAuZ2V0KGNvbXBvbmVudCkoKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmUgYSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgU3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCkuXG4gKlxuICogUmVxdWlyZXMgcmVxdWlyZXMgYExvYWRhYmxlQ29tcG9uZW50YCB0byBiZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0LlxuICpcbiAqIGBgYFxuICogYXN5bmMgbXlNZXRob2QoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXR1cm4gcHJvbWlzZU1hcC5nZXQoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmluZyB0aGUgY29tcG9uZW50IGlzIGxvYWRlZCBhbmQgcmVuZGVyZWQgYnkgdGhlIGJyb3dzZXIgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBTdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkIGFuZCBhbnkgaW50ZXJuYWwgZWxlbWVudHMgYXJlIGZvY3VzYWJsZSkuXG4gKlxuICogUmVxdWlyZXMgcmVxdWlyZXMgYExvYWRhYmxlQ29tcG9uZW50YCB0byBiZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0IGFuZCB0aGVuIGFuIGludGVybmFsIGVsZW1lbnQgYmUgZm9jdXNlZC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIHNldEZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gKiAgIHRoaXMuaW50ZXJuYWxFbGVtZW50Py5mb2N1cygpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5hc3luYyBmdW5jdGlvbiBjb21wb25lbnRGb2N1c2FibGUoY29tcG9uZW50KSB7XG4gIGF3YWl0IGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpO1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybjtcbiAgfVxuICBmb3JjZVVwZGF0ZShjb21wb25lbnQpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpKTtcbn1cblxuZXhwb3J0IHsgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCBhcyBhLCBjb21wb25lbnRMb2FkZWQgYXMgYiwgY29tcG9uZW50Rm9jdXNhYmxlIGFzIGMsIHNldENvbXBvbmVudExvYWRlZCBhcyBzIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=