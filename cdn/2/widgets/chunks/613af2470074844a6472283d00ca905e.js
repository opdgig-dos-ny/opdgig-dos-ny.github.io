"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-tip_js-node_modules_esri-827979"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/Heading.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/Heading.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ Heading),
/* harmony export */   c: () => (/* binding */ constrainHeadingLevel)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


function constrainHeadingLevel(level) {
  return Math.min(Math.max(Math.ceil(level), 1), 6);
}
const Heading = (props, children) => {
  const HeadingTag = props.level ? `h${props.level}` : "div";
  delete props.level;
  return (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.h)(HeadingTag, { ...props }, children);
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-tip.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-tip.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteTip: () => (/* binding */ CalciteTip),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _Heading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Heading.js */ "./node_modules/@esri/calcite-components/dist/components/Heading.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */










const CSS = {
  container: "container",
  header: "header",
  heading: "heading",
  close: "close",
  imageFrame: "image-frame",
  content: "content",
  info: "info",
};
const ICONS = {
  close: "x",
};
const SLOTS = {
  thumbnail: "thumbnail",
};

const tipCss = ":host{position:relative;margin:1rem;box-sizing:border-box;display:flex;flex-direction:row;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}.container{inline-size:100%;padding:1rem}:host([closed]),:host([closed]) .container{display:none}:host([selected]) .container{margin:0px;border-style:none;padding:0px}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{margin-block-end:0.5rem}.header .heading{padding:0px;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-1)}.container[hidden]{display:none}.content{display:flex}.info{padding-block:0px;padding-inline:1rem;inline-size:70%}.info:only-child{inline-size:100%;padding-inline:0px}::slotted(p){margin-block-start:0px}::slotted(a){outline-color:transparent;color:var(--calcite-ui-brand)}::slotted(a:focus){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.image-frame{inline-size:25%}.image-frame img{max-inline-size:100%}::slotted(img){max-inline-size:100%}:host([hidden]){display:none}[hidden]{display:none}";

const Tip = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTipDismiss = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteTipDismiss", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.hideTip = () => {
      this.closed = true;
      this.calciteTipDismiss.emit();
    };
    this.closed = false;
    this.closeDisabled = false;
    this.heading = undefined;
    this.headingLevel = undefined;
    this.selected = false;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
  }
  onMessagesChange() {
    /* wired up by t9n util */
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
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHeader() {
    const { heading, headingLevel, el } = this;
    const parentLevel = el.closest("calcite-tip-manager")?.headingLevel;
    const relativeLevel = parentLevel ? (0,_Heading_js__WEBPACK_IMPORTED_MODULE_4__.c)(parentLevel + 1) : null;
    const level = headingLevel || relativeLevel;
    return heading ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("header", { class: CSS.header }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)(_Heading_js__WEBPACK_IMPORTED_MODULE_4__.H, { class: CSS.heading, level: level }, heading))) : null;
  }
  renderDismissButton() {
    const { closeDisabled, hideTip } = this;
    return !closeDisabled ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-action", { class: CSS.close, icon: ICONS.close, onClick: hideTip, scale: "l", text: this.messages.close })) : null;
  }
  renderImageFrame() {
    const { el } = this;
    return (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.thumbnail) ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { class: CSS.imageFrame, key: "thumbnail" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot", { name: SLOTS.thumbnail }))) : null;
  }
  renderInfoNode() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { class: CSS.info }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot", null)));
  }
  renderContent() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { class: CSS.content }, this.renderImageFrame(), this.renderInfoNode()));
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("article", { class: CSS.container }, this.renderHeader(), this.renderContent()), this.renderDismissButton()));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return tipCss; }
}, [1, "calcite-tip", {
    "closed": [1540],
    "closeDisabled": [516, "close-disabled"],
    "heading": [1],
    "headingLevel": [514, "heading-level"],
    "selected": [516],
    "messages": [1040],
    "messageOverrides": [1040],
    "defaultMessages": [32],
    "effectiveLocale": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tip", "calcite-action", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tip);
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

const CalciteTip = Tip;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNjEzYWYyNDcwMDc0ODQ0YTY0NzIyODNkMDBjYTkwNWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMyRDs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBLFNBQVMseUVBQUMsZUFBZSxVQUFVO0FBQ25DOztBQUVvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtSDtBQUNFO0FBQzFFO0FBQ21DO0FBQ29DO0FBQzFDO0FBQ2Y7QUFDRjtBQUNFOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLGtCQUFrQixZQUFZLHNCQUFzQixhQUFhLG1CQUFtQixpQkFBaUIsbUJBQW1CLHdDQUF3QyxnREFBZ0Qsc0NBQXNDLGlCQUFpQiwrQkFBK0IsUUFBUSxzQkFBc0IsV0FBVyxpQkFBaUIsYUFBYSwyQ0FBMkMsYUFBYSw2QkFBNkIsV0FBVyxrQkFBa0IsWUFBWSxRQUFRLFdBQVcsYUFBYSw0QkFBNEIsbUJBQW1CLDhCQUE4QiwrQkFBK0IsU0FBUyxXQUFXLFlBQVksOENBQThDLGlCQUFpQixjQUFjLGVBQWUsUUFBUSx3QkFBd0IsaUJBQWlCLFlBQVkscUNBQXFDLG9CQUFvQiwrQkFBK0IsbUJBQW1CLGFBQWEsU0FBUyxhQUFhLE1BQU0sa0JBQWtCLG9CQUFvQixnQkFBZ0IsaUJBQWlCLGlCQUFpQixtQkFBbUIsYUFBYSx1QkFBdUIsYUFBYSwwQkFBMEIsOEJBQThCLG1CQUFtQix5RUFBeUUsb1BBQW9QLGFBQWEsZ0JBQWdCLGlCQUFpQixxQkFBcUIsZUFBZSxxQkFBcUIsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUV4cEQsMEJBQTBCLDBGQUFrQixlQUFlLCtFQUFXO0FBQ3RFO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlFQUFLO0FBQ1o7QUFDQTtBQUNBLEVBQUUsbUZBQVc7QUFDYjtBQUNBOztBQUUrRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9IZWFkaW5nLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLXRpcC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29uZGl0aW9uYWxTbG90LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sb2FkYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5mdW5jdGlvbiBjb25zdHJhaW5IZWFkaW5nTGV2ZWwobGV2ZWwpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KE1hdGguY2VpbChsZXZlbCksIDEpLCA2KTtcbn1cbmNvbnN0IEhlYWRpbmcgPSAocHJvcHMsIGNoaWxkcmVuKSA9PiB7XG4gIGNvbnN0IEhlYWRpbmdUYWcgPSBwcm9wcy5sZXZlbCA/IGBoJHtwcm9wcy5sZXZlbH1gIDogXCJkaXZcIjtcbiAgZGVsZXRlIHByb3BzLmxldmVsO1xuICByZXR1cm4gaChIZWFkaW5nVGFnLCB7IC4uLnByb3BzIH0sIGNoaWxkcmVuKTtcbn07XG5cbmV4cG9ydCB7IEhlYWRpbmcgYXMgSCwgY29uc3RyYWluSGVhZGluZ0xldmVsIGFzIGMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoLCBGcmFnbWVudCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IH0gZnJvbSAnLi9jb25kaXRpb25hbFNsb3QuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTbG90dGVkIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IEggYXMgSGVhZGluZywgYyBhcyBjb25zdHJhaW5IZWFkaW5nTGV2ZWwgfSBmcm9tICcuL0hlYWRpbmcuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDQgfSBmcm9tICcuL2FjdGlvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMiB9IGZyb20gJy4vbG9hZGVyLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGhlYWRlcjogXCJoZWFkZXJcIixcbiAgaGVhZGluZzogXCJoZWFkaW5nXCIsXG4gIGNsb3NlOiBcImNsb3NlXCIsXG4gIGltYWdlRnJhbWU6IFwiaW1hZ2UtZnJhbWVcIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG4gIGluZm86IFwiaW5mb1wiLFxufTtcbmNvbnN0IElDT05TID0ge1xuICBjbG9zZTogXCJ4XCIsXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIHRodW1ibmFpbDogXCJ0aHVtYm5haWxcIixcbn07XG5cbmNvbnN0IHRpcENzcyA9IFwiOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjFyZW07Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTIpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9Omhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9LmNvbnRhaW5lcntpbmxpbmUtc2l6ZToxMDAlO3BhZGRpbmc6MXJlbX06aG9zdChbY2xvc2VkXSksOmhvc3QoW2Nsb3NlZF0pIC5jb250YWluZXJ7ZGlzcGxheTpub25lfTpob3N0KFtzZWxlY3RlZF0pIC5jb250YWluZXJ7bWFyZ2luOjBweDtib3JkZXItc3R5bGU6bm9uZTtwYWRkaW5nOjBweH0uaGVhZGVye21hcmdpbjowcHg7ZGlzcGxheTpmbGV4O2FsaWduLWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7ZmlsbDp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5oZWFkaW5ne21hcmdpbjowcHg7cGFkZGluZzowcHg7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pfS5oZWFkZXIgLmhlYWRpbmd7ZmxleDoxIDEgYXV0bztwYWRkaW5nOjAuNXJlbX0uaGVhZGVye21hcmdpbi1ibG9jay1lbmQ6MC41cmVtfS5oZWFkZXIgLmhlYWRpbmd7cGFkZGluZzowcHg7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW07Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5jb250YWluZXJbaGlkZGVuXXtkaXNwbGF5Om5vbmV9LmNvbnRlbnR7ZGlzcGxheTpmbGV4fS5pbmZve3BhZGRpbmctYmxvY2s6MHB4O3BhZGRpbmctaW5saW5lOjFyZW07aW5saW5lLXNpemU6NzAlfS5pbmZvOm9ubHktY2hpbGR7aW5saW5lLXNpemU6MTAwJTtwYWRkaW5nLWlubGluZTowcHh9OjpzbG90dGVkKHApe21hcmdpbi1ibG9jay1zdGFydDowcHh9OjpzbG90dGVkKGEpe291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9OjpzbG90dGVkKGE6Zm9jdXMpe291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIDJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5pbWFnZS1mcmFtZXtpbmxpbmUtc2l6ZToyNSV9LmltYWdlLWZyYW1lIGltZ3ttYXgtaW5saW5lLXNpemU6MTAwJX06OnNsb3R0ZWQoaW1nKXttYXgtaW5saW5lLXNpemU6MTAwJX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgVGlwID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVUaXBEaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlVGlwRGlzbWlzc1wiLCA2KTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmhpZGVUaXAgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICB0aGlzLmNhbGNpdGVUaXBEaXNtaXNzLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zZURpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5oZWFkaW5nID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGVhZGluZ0xldmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVySGVhZGVyKCkge1xuICAgIGNvbnN0IHsgaGVhZGluZywgaGVhZGluZ0xldmVsLCBlbCB9ID0gdGhpcztcbiAgICBjb25zdCBwYXJlbnRMZXZlbCA9IGVsLmNsb3Nlc3QoXCJjYWxjaXRlLXRpcC1tYW5hZ2VyXCIpPy5oZWFkaW5nTGV2ZWw7XG4gICAgY29uc3QgcmVsYXRpdmVMZXZlbCA9IHBhcmVudExldmVsID8gY29uc3RyYWluSGVhZGluZ0xldmVsKHBhcmVudExldmVsICsgMSkgOiBudWxsO1xuICAgIGNvbnN0IGxldmVsID0gaGVhZGluZ0xldmVsIHx8IHJlbGF0aXZlTGV2ZWw7XG4gICAgcmV0dXJuIGhlYWRpbmcgPyAoaChcImhlYWRlclwiLCB7IGNsYXNzOiBDU1MuaGVhZGVyIH0sIGgoSGVhZGluZywgeyBjbGFzczogQ1NTLmhlYWRpbmcsIGxldmVsOiBsZXZlbCB9LCBoZWFkaW5nKSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXJEaXNtaXNzQnV0dG9uKCkge1xuICAgIGNvbnN0IHsgY2xvc2VEaXNhYmxlZCwgaGlkZVRpcCB9ID0gdGhpcztcbiAgICByZXR1cm4gIWNsb3NlRGlzYWJsZWQgPyAoaChcImNhbGNpdGUtYWN0aW9uXCIsIHsgY2xhc3M6IENTUy5jbG9zZSwgaWNvbjogSUNPTlMuY2xvc2UsIG9uQ2xpY2s6IGhpZGVUaXAsIHNjYWxlOiBcImxcIiwgdGV4dDogdGhpcy5tZXNzYWdlcy5jbG9zZSB9KSkgOiBudWxsO1xuICB9XG4gIHJlbmRlckltYWdlRnJhbWUoKSB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICByZXR1cm4gZ2V0U2xvdHRlZChlbCwgU0xPVFMudGh1bWJuYWlsKSA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5pbWFnZUZyYW1lLCBrZXk6IFwidGh1bWJuYWlsXCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy50aHVtYm5haWwgfSkpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVySW5mb05vZGUoKSB7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5pbmZvIH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gIH1cbiAgcmVuZGVyQ29udGVudCgpIHtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRlbnQgfSwgdGhpcy5yZW5kZXJJbWFnZUZyYW1lKCksIHRoaXMucmVuZGVySW5mb05vZGUoKSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoRnJhZ21lbnQsIG51bGwsIGgoXCJhcnRpY2xlXCIsIHsgY2xhc3M6IENTUy5jb250YWluZXIgfSwgdGhpcy5yZW5kZXJIZWFkZXIoKSwgdGhpcy5yZW5kZXJDb250ZW50KCkpLCB0aGlzLnJlbmRlckRpc21pc3NCdXR0b24oKSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHRpcENzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS10aXBcIiwge1xuICAgIFwiY2xvc2VkXCI6IFsxNTQwXSxcbiAgICBcImNsb3NlRGlzYWJsZWRcIjogWzUxNiwgXCJjbG9zZS1kaXNhYmxlZFwiXSxcbiAgICBcImhlYWRpbmdcIjogWzFdLFxuICAgIFwiaGVhZGluZ0xldmVsXCI6IFs1MTQsIFwiaGVhZGluZy1sZXZlbFwiXSxcbiAgICBcInNlbGVjdGVkXCI6IFs1MTZdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS10aXBcIiwgXCJjYWxjaXRlLWFjdGlvblwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtbG9hZGVyXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXRpcFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIFRpcCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1hY3Rpb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZVRpcCA9IFRpcDtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVUaXAsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGZvcmNlVXBkYXRlIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcblxuY29uc3Qgb2JzZXJ2ZWQgPSBuZXcgU2V0KCk7XG5sZXQgbXV0YXRpb25PYnNlcnZlcjtcbmNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgcHJvY2Vzc011dGF0aW9ucyk7XG4gIH1cbiAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudC5lbCwgb2JzZXJ2ZXJPcHRpb25zKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBvYnNlcnZlZC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgLy8gd2UgZXhwbGljaXRseSBwcm9jZXNzIHF1ZXVlZCBtdXRhdGlvbnMgYW5kIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdFxuICAvLyB0aGUgb2JzZXJ2ZXIgdW50aWwgTXV0YXRpb25PYnNlcnZlciBnZXRzIGFuIGB1bm9ic2VydmVgIG1ldGhvZFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNlxuICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBmb3IgKGNvbnN0IFtlbGVtZW50XSBvZiBvYnNlcnZlZC5lbnRyaWVzKCkpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBmb3JjZVVwZGF0ZSh0YXJnZXQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBjLCBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkLCBmb3JjZVVwZGF0ZSB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuY29uc3QgcmVzb2x2ZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBwcm9taXNlTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBzZXRzIHVwIHRoZSBjb21wb25lbnQgZm9yIHRoZSBhYmlsaXR5IHRvIGtub3cgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50V2lsbExvYWQoKTogdm9pZCB7XG4gKiAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldFVwTG9hZGFibGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHByb21pc2VNYXAuc2V0KGNvbXBvbmVudCwgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmVNYXAuc2V0KGNvbXBvbmVudCwgcmVzb2x2ZSkpKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBsZXRzIHRoZSBsb2FkYWJsZSBjb21wb25lbnQga25vdyB0aGF0IGl0IGlzIG5vdyBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50RGlkTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRDb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJlc29sdmVNYXAuZ2V0KGNvbXBvbmVudCkoKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmUgYSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgU3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCkuXG4gKlxuICogUmVxdWlyZXMgcmVxdWlyZXMgYExvYWRhYmxlQ29tcG9uZW50YCB0byBiZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0LlxuICpcbiAqIGBgYFxuICogYXN5bmMgbXlNZXRob2QoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXR1cm4gcHJvbWlzZU1hcC5nZXQoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmluZyB0aGUgY29tcG9uZW50IGlzIGxvYWRlZCBhbmQgcmVuZGVyZWQgYnkgdGhlIGJyb3dzZXIgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBTdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkIGFuZCBhbnkgaW50ZXJuYWwgZWxlbWVudHMgYXJlIGZvY3VzYWJsZSkuXG4gKlxuICogUmVxdWlyZXMgcmVxdWlyZXMgYExvYWRhYmxlQ29tcG9uZW50YCB0byBiZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0IGFuZCB0aGVuIGFuIGludGVybmFsIGVsZW1lbnQgYmUgZm9jdXNlZC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIHNldEZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gKiAgIHRoaXMuaW50ZXJuYWxFbGVtZW50Py5mb2N1cygpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5hc3luYyBmdW5jdGlvbiBjb21wb25lbnRGb2N1c2FibGUoY29tcG9uZW50KSB7XG4gIGF3YWl0IGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpO1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybjtcbiAgfVxuICBmb3JjZVVwZGF0ZShjb21wb25lbnQpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpKTtcbn1cblxuZXhwb3J0IHsgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCBhcyBhLCBjb21wb25lbnRMb2FkZWQgYXMgYiwgY29tcG9uZW50Rm9jdXNhYmxlIGFzIGMsIHNldENvbXBvbmVudExvYWRlZCBhcyBzIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=