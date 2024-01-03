"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-tip-manager_js-node_modu-096945"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-tip-manager.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-tip-manager.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteTipManager: () => (/* binding */ CalciteTipManager),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
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
  header: "header",
  heading: "heading",
  close: "close",
  container: "container",
  tipContainer: "tip-container",
  tipContainerAdvancing: "tip-container--advancing",
  tipContainerRetreating: "tip-container--retreating",
  pagination: "pagination",
  pagePosition: "page-position",
  pageNext: "page-next",
  pagePrevious: "page-previous",
};
const ICONS = {
  chevronLeft: "chevron-left",
  chevronRight: "chevron-right",
  close: "x",
};

const tipManagerCss = ":host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2);--calcite-tip-manager-height:19vh}:host *{box-sizing:border-box}:host([closed]){display:none}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px;padding-inline-end:0px;padding-inline-start:1rem}.header .heading{padding:0px;font-size:var(--calcite-font-size-1);line-height:1.5rem;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-1)}.container{position:relative;overflow:hidden;outline-color:transparent;min-block-size:150px}.container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.tip-container{margin-block-start:1px;display:flex;align-items:flex-start;justify-content:center;overflow:auto;padding:1rem;outline-color:transparent;animation-name:none;animation-duration:var(--calcite-animation-timing);block-size:var(--calcite-tip-manager-height)}.tip-container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}::slotted(calcite-tip){margin:0px;border-style:none;max-inline-size:var(--calcite-tip-max-width)}.tip-container--advancing{animation-name:tip-advance}.tip-container--retreating{animation-name:tip-retreat}.pagination{display:flex;align-items:center;justify-content:center;padding-inline:0px;padding-block:0.75rem 0.5rem}.page-position{margin-block:0px;margin-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}@keyframes tip-advance{0%{opacity:0;transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1;transform:translate3d(0, 0, 0) scale(1)}}@keyframes tip-retreat{0%{opacity:0;transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1;transform:translate3d(0, 0, 0) scale(1)}}:host([hidden]){display:none}[hidden]{display:none}";

const TipManager = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTipManagerClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteTipManagerClose", 6);
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_2__.c)("mutation", () => this.setUpTips());
    this.hideTipManager = () => {
      this.closed = true;
      this.calciteTipManagerClose.emit();
    };
    this.previousClicked = () => {
      this.previousTip();
    };
    this.nextClicked = () => {
      this.nextTip();
    };
    this.tipManagerKeyDownHandler = (event) => {
      if (event.target !== this.container) {
        return;
      }
      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          this.nextTip();
          break;
        case "ArrowLeft":
          event.preventDefault();
          this.previousTip();
          break;
        case "Home":
          event.preventDefault();
          this.selectedIndex = 0;
          break;
        case "End":
          event.preventDefault();
          this.selectedIndex = this.total - 1;
          break;
      }
    };
    this.storeContainerRef = (el) => {
      this.container = el;
    };
    this.closed = false;
    this.headingLevel = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.selectedIndex = undefined;
    this.tips = undefined;
    this.total = undefined;
    this.direction = undefined;
    this.groupTitle = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
  }
  closedChangeHandler() {
    this.direction = null;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  selectedChangeHandler() {
    this.showSelectedTip();
    this.updateGroupTitle();
  }
  async effectiveLocaleChange() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.u)(this, this.effectiveLocale);
    this.updateGroupTitle();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    this.setUpTips();
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
    this.updateGroupTitle();
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Selects the next `calcite-tip` to display. */
  async nextTip() {
    this.direction = "advancing";
    const nextIndex = this.selectedIndex + 1;
    this.selectedIndex = (nextIndex + this.total) % this.total;
  }
  /** Selects the previous `calcite-tip` to display. */
  async previousTip() {
    this.direction = "retreating";
    const previousIndex = this.selectedIndex - 1;
    this.selectedIndex = (previousIndex + this.total) % this.total;
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  setUpTips() {
    const tips = Array.from(this.el.querySelectorAll("calcite-tip"));
    this.total = tips.length;
    if (this.total === 0) {
      return;
    }
    const selectedTip = this.el.querySelector("calcite-tip[selected]");
    this.tips = tips;
    this.selectedIndex = selectedTip ? tips.indexOf(selectedTip) : 0;
    tips.forEach((tip) => {
      tip.closeDisabled = true;
    });
    this.showSelectedTip();
  }
  showSelectedTip() {
    this.tips.forEach((tip, index) => {
      const isSelected = this.selectedIndex === index;
      tip.selected = isSelected;
      tip.hidden = !isSelected;
    });
  }
  updateGroupTitle() {
    if (this.tips) {
      const selectedTip = this.tips[this.selectedIndex];
      const tipParent = selectedTip.closest("calcite-tip-group");
      this.groupTitle = tipParent?.groupTitle || this.messages?.defaultGroupTitle;
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderPagination() {
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.el);
    const { selectedIndex, tips, total, messages } = this;
    const nextLabel = messages.next;
    const previousLabel = messages.previous;
    const paginationLabel = messages.defaultPaginationLabel;
    return tips.length > 1 ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("footer", { class: CSS.pagination }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-action", { class: CSS.pagePrevious, icon: dir === "ltr" ? ICONS.chevronLeft : ICONS.chevronRight, onClick: this.previousClicked, scale: "m", text: previousLabel }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("span", { class: CSS.pagePosition }, `${paginationLabel} ${selectedIndex + 1}/${total}`), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-action", { class: CSS.pageNext, icon: dir === "ltr" ? ICONS.chevronRight : ICONS.chevronLeft, onClick: this.nextClicked, scale: "m", text: nextLabel }))) : null;
  }
  render() {
    const { closed, direction, headingLevel, groupTitle, selectedIndex, messages, total } = this;
    const closeLabel = messages.close;
    if (total === 0) {
      return null;
    }
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("section", { "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(closed), class: CSS.container, hidden: closed, onKeyDown: this.tipManagerKeyDownHandler, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeContainerRef }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("header", { class: CSS.header }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)(_Heading_js__WEBPACK_IMPORTED_MODULE_4__.H, { class: CSS.heading, level: headingLevel }, groupTitle), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-action", { class: CSS.close, onClick: this.hideTipManager, scale: "m", text: closeLabel }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-icon", { icon: ICONS.close, scale: "m" }))), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { class: {
        [CSS.tipContainer]: true,
        [CSS.tipContainerAdvancing]: !closed && direction === "advancing",
        [CSS.tipContainerRetreating]: !closed && direction === "retreating",
      }, key: selectedIndex, tabIndex: 0 }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot", null)), this.renderPagination()));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "closed": ["closedChangeHandler"],
    "messageOverrides": ["onMessagesChange"],
    "selectedIndex": ["selectedChangeHandler"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return tipManagerCss; }
}, [1, "calcite-tip-manager", {
    "closed": [1540],
    "headingLevel": [514, "heading-level"],
    "messages": [1040],
    "messageOverrides": [1040],
    "selectedIndex": [32],
    "tips": [32],
    "total": [32],
    "direction": [32],
    "groupTitle": [32],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "nextTip": [64],
    "previousTip": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tip-manager", "calcite-action", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tip-manager":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TipManager);
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

const CalciteTipManager = TipManager;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZWM0OGQ0YTNkODhhNDc1YmQzNjYwNzhjMzhmYWM0ZmMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMyRDs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBLFNBQVMseUVBQUMsZUFBZSxVQUFVO0FBQ25DOztBQUVvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RztBQUN2QztBQUNZO0FBQ3pCO0FBQzZEO0FBQ3RFO0FBQ2E7QUFDRjtBQUNFOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLHNCQUFzQixjQUFjLGdEQUFnRCxzQ0FBc0MsaUJBQWlCLCtCQUErQixrQ0FBa0MsUUFBUSxzQkFBc0IsZ0JBQWdCLGFBQWEsUUFBUSxXQUFXLGFBQWEsNEJBQTRCLG1CQUFtQiw4QkFBOEIsK0JBQStCLFNBQVMsV0FBVyxZQUFZLDhDQUE4QyxpQkFBaUIsY0FBYyxlQUFlLFFBQVEsaUJBQWlCLDJCQUEyQixtQkFBbUIsd0NBQXdDLGtCQUFrQix1QkFBdUIsMEJBQTBCLGlCQUFpQixZQUFZLHFDQUFxQyxtQkFBbUIsNENBQTRDLCtCQUErQixXQUFXLGtCQUFrQixnQkFBZ0IsMEJBQTBCLHFCQUFxQixpQkFBaUIseUVBQXlFLG9QQUFvUCxlQUFlLHVCQUF1QixhQUFhLHVCQUF1Qix1QkFBdUIsY0FBYyxhQUFhLDBCQUEwQixvQkFBb0IsbURBQW1ELDZDQUE2QyxxQkFBcUIseUVBQXlFLG9QQUFvUCx1QkFBdUIsV0FBVyxrQkFBa0IsNkNBQTZDLDBCQUEwQiwyQkFBMkIsMkJBQTJCLDJCQUEyQixZQUFZLGFBQWEsbUJBQW1CLHVCQUF1QixtQkFBbUIsNkJB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USw2Q0FBcUI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRWtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblFsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRFOztBQUU1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlFQUFLO0FBQ1o7QUFDQTtBQUNBLEVBQUUsbUZBQVc7QUFDYjtBQUNBOztBQUUrRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9IZWFkaW5nLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLXRpcC1tYW5hZ2VyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sb2FkYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5mdW5jdGlvbiBjb25zdHJhaW5IZWFkaW5nTGV2ZWwobGV2ZWwpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KE1hdGguY2VpbChsZXZlbCksIDEpLCA2KTtcbn1cbmNvbnN0IEhlYWRpbmcgPSAocHJvcHMsIGNoaWxkcmVuKSA9PiB7XG4gIGNvbnN0IEhlYWRpbmdUYWcgPSBwcm9wcy5sZXZlbCA/IGBoJHtwcm9wcy5sZXZlbH1gIDogXCJkaXZcIjtcbiAgZGVsZXRlIHByb3BzLmxldmVsO1xuICByZXR1cm4gaChIZWFkaW5nVGFnLCB7IC4uLnByb3BzIH0sIGNoaWxkcmVuKTtcbn07XG5cbmV4cG9ydCB7IEhlYWRpbmcgYXMgSCwgY29uc3RyYWluSGVhZGluZ0xldmVsIGFzIGMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRFbGVtZW50RGlyLCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IEggYXMgSGVhZGluZyB9IGZyb20gJy4vSGVhZGluZy5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNCB9IGZyb20gJy4vYWN0aW9uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9sb2FkZXIuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGhlYWRlcjogXCJoZWFkZXJcIixcbiAgaGVhZGluZzogXCJoZWFkaW5nXCIsXG4gIGNsb3NlOiBcImNsb3NlXCIsXG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgdGlwQ29udGFpbmVyOiBcInRpcC1jb250YWluZXJcIixcbiAgdGlwQ29udGFpbmVyQWR2YW5jaW5nOiBcInRpcC1jb250YWluZXItLWFkdmFuY2luZ1wiLFxuICB0aXBDb250YWluZXJSZXRyZWF0aW5nOiBcInRpcC1jb250YWluZXItLXJldHJlYXRpbmdcIixcbiAgcGFnaW5hdGlvbjogXCJwYWdpbmF0aW9uXCIsXG4gIHBhZ2VQb3NpdGlvbjogXCJwYWdlLXBvc2l0aW9uXCIsXG4gIHBhZ2VOZXh0OiBcInBhZ2UtbmV4dFwiLFxuICBwYWdlUHJldmlvdXM6IFwicGFnZS1wcmV2aW91c1wiLFxufTtcbmNvbnN0IElDT05TID0ge1xuICBjaGV2cm9uTGVmdDogXCJjaGV2cm9uLWxlZnRcIixcbiAgY2hldnJvblJpZ2h0OiBcImNoZXZyb24tcmlnaHRcIixcbiAgY2xvc2U6IFwieFwiLFxufTtcblxuY29uc3QgdGlwTWFuYWdlckNzcyA9IFwiOmhvc3R7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTstLWNhbGNpdGUtdGlwLW1hbmFnZXItaGVpZ2h0OjE5dmh9Omhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QoW2Nsb3NlZF0pe2Rpc3BsYXk6bm9uZX0uaGVhZGVye21hcmdpbjowcHg7ZGlzcGxheTpmbGV4O2FsaWduLWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7ZmlsbDp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5oZWFkaW5ne21hcmdpbjowcHg7cGFkZGluZzowcHg7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pfS5oZWFkZXIgLmhlYWRpbmd7ZmxleDoxIDEgYXV0bztwYWRkaW5nOjAuNXJlbX0uaGVhZGVye2JvcmRlci13aWR0aDowcHg7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtwYWRkaW5nLWJsb2NrOjBweDtwYWRkaW5nLWlubGluZS1lbmQ6MHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjFyZW19LmhlYWRlciAuaGVhZGluZ3twYWRkaW5nOjBweDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMSk7bGluZS1oZWlnaHQ6MS41cmVtO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtYm9sZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7bWluLWJsb2NrLXNpemU6MTUwcHh9LmNvbnRhaW5lcjpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0udGlwLWNvbnRhaW5lcnttYXJnaW4tYmxvY2stc3RhcnQ6MXB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2p1c3RpZnktY29udGVudDpjZW50ZXI7b3ZlcmZsb3c6YXV0bztwYWRkaW5nOjFyZW07b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudDthbmltYXRpb24tbmFtZTpub25lO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpO2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS10aXAtbWFuYWdlci1oZWlnaHQpfS50aXAtY29udGFpbmVyOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIDJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTo6c2xvdHRlZChjYWxjaXRlLXRpcCl7bWFyZ2luOjBweDtib3JkZXItc3R5bGU6bm9uZTttYXgtaW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS10aXAtbWF4LXdpZHRoKX0udGlwLWNvbnRhaW5lci0tYWR2YW5jaW5ne2FuaW1hdGlvbi1uYW1lOnRpcC1hZHZhbmNlfS50aXAtY29udGFpbmVyLS1yZXRyZWF0aW5ne2FuaW1hdGlvbi1uYW1lOnRpcC1yZXRyZWF0fS5wYWdpbmF0aW9ue2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nLWlubGluZTowcHg7cGFkZGluZy1ibG9jazowLjc1cmVtIDAuNXJlbX0ucGFnZS1wb3NpdGlvbnttYXJnaW4tYmxvY2s6MHB4O21hcmdpbi1pbmxpbmU6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbX1Aa2V5ZnJhbWVzIHRpcC1hZHZhbmNlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNTBweCwgMCwgMCkgc2NhbGUoMC45OSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHRpcC1yZXRyZWF0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTUwcHgsIDAsIDApIHNjYWxlKDAuOTkpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKX19Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IFRpcE1hbmFnZXIgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZVRpcE1hbmFnZXJDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVRpcE1hbmFnZXJDbG9zZVwiLCA2KTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHRoaXMuc2V0VXBUaXBzKCkpO1xuICAgIHRoaXMuaGlkZVRpcE1hbmFnZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICB0aGlzLmNhbGNpdGVUaXBNYW5hZ2VyQ2xvc2UuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5wcmV2aW91c0NsaWNrZWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByZXZpb3VzVGlwKCk7XG4gICAgfTtcbiAgICB0aGlzLm5leHRDbGlja2VkID0gKCkgPT4ge1xuICAgICAgdGhpcy5uZXh0VGlwKCk7XG4gICAgfTtcbiAgICB0aGlzLnRpcE1hbmFnZXJLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMubmV4dFRpcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnByZXZpb3VzVGlwKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiRW5kXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLnRvdGFsIC0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc3RvcmVDb250YWluZXJSZWYgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuaGVhZGluZ0xldmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRpcHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50b3RhbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmdyb3VwVGl0bGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICB9XG4gIGNsb3NlZENoYW5nZUhhbmRsZXIoKSB7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBudWxsO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBzZWxlY3RlZENoYW5nZUhhbmRsZXIoKSB7XG4gICAgdGhpcy5zaG93U2VsZWN0ZWRUaXAoKTtcbiAgICB0aGlzLnVwZGF0ZUdyb3VwVGl0bGUoKTtcbiAgfVxuICBhc3luYyBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgYXdhaXQgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICAgIHRoaXMudXBkYXRlR3JvdXBUaXRsZSgpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5zZXRVcFRpcHMoKTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUdyb3VwVGl0bGUoKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNlbGVjdHMgdGhlIG5leHQgYGNhbGNpdGUtdGlwYCB0byBkaXNwbGF5LiAqL1xuICBhc3luYyBuZXh0VGlwKCkge1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJhZHZhbmNpbmdcIjtcbiAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXggKyAxO1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IChuZXh0SW5kZXggKyB0aGlzLnRvdGFsKSAlIHRoaXMudG90YWw7XG4gIH1cbiAgLyoqIFNlbGVjdHMgdGhlIHByZXZpb3VzIGBjYWxjaXRlLXRpcGAgdG8gZGlzcGxheS4gKi9cbiAgYXN5bmMgcHJldmlvdXNUaXAoKSB7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBcInJldHJlYXRpbmdcIjtcbiAgICBjb25zdCBwcmV2aW91c0luZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAocHJldmlvdXNJbmRleCArIHRoaXMudG90YWwpICUgdGhpcy50b3RhbDtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldFVwVGlwcygpIHtcbiAgICBjb25zdCB0aXBzID0gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLXRpcFwiKSk7XG4gICAgdGhpcy50b3RhbCA9IHRpcHMubGVuZ3RoO1xuICAgIGlmICh0aGlzLnRvdGFsID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdGVkVGlwID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKFwiY2FsY2l0ZS10aXBbc2VsZWN0ZWRdXCIpO1xuICAgIHRoaXMudGlwcyA9IHRpcHM7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRUaXAgPyB0aXBzLmluZGV4T2Yoc2VsZWN0ZWRUaXApIDogMDtcbiAgICB0aXBzLmZvckVhY2goKHRpcCkgPT4ge1xuICAgICAgdGlwLmNsb3NlRGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIHRoaXMuc2hvd1NlbGVjdGVkVGlwKCk7XG4gIH1cbiAgc2hvd1NlbGVjdGVkVGlwKCkge1xuICAgIHRoaXMudGlwcy5mb3JFYWNoKCh0aXAsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpc1NlbGVjdGVkID0gdGhpcy5zZWxlY3RlZEluZGV4ID09PSBpbmRleDtcbiAgICAgIHRpcC5zZWxlY3RlZCA9IGlzU2VsZWN0ZWQ7XG4gICAgICB0aXAuaGlkZGVuID0gIWlzU2VsZWN0ZWQ7XG4gICAgfSk7XG4gIH1cbiAgdXBkYXRlR3JvdXBUaXRsZSgpIHtcbiAgICBpZiAodGhpcy50aXBzKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFRpcCA9IHRoaXMudGlwc1t0aGlzLnNlbGVjdGVkSW5kZXhdO1xuICAgICAgY29uc3QgdGlwUGFyZW50ID0gc2VsZWN0ZWRUaXAuY2xvc2VzdChcImNhbGNpdGUtdGlwLWdyb3VwXCIpO1xuICAgICAgdGhpcy5ncm91cFRpdGxlID0gdGlwUGFyZW50Py5ncm91cFRpdGxlIHx8IHRoaXMubWVzc2FnZXM/LmRlZmF1bHRHcm91cFRpdGxlO1xuICAgIH1cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyUGFnaW5hdGlvbigpIHtcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKHRoaXMuZWwpO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRJbmRleCwgdGlwcywgdG90YWwsIG1lc3NhZ2VzIH0gPSB0aGlzO1xuICAgIGNvbnN0IG5leHRMYWJlbCA9IG1lc3NhZ2VzLm5leHQ7XG4gICAgY29uc3QgcHJldmlvdXNMYWJlbCA9IG1lc3NhZ2VzLnByZXZpb3VzO1xuICAgIGNvbnN0IHBhZ2luYXRpb25MYWJlbCA9IG1lc3NhZ2VzLmRlZmF1bHRQYWdpbmF0aW9uTGFiZWw7XG4gICAgcmV0dXJuIHRpcHMubGVuZ3RoID4gMSA/IChoKFwiZm9vdGVyXCIsIHsgY2xhc3M6IENTUy5wYWdpbmF0aW9uIH0sIGgoXCJjYWxjaXRlLWFjdGlvblwiLCB7IGNsYXNzOiBDU1MucGFnZVByZXZpb3VzLCBpY29uOiBkaXIgPT09IFwibHRyXCIgPyBJQ09OUy5jaGV2cm9uTGVmdCA6IElDT05TLmNoZXZyb25SaWdodCwgb25DbGljazogdGhpcy5wcmV2aW91c0NsaWNrZWQsIHNjYWxlOiBcIm1cIiwgdGV4dDogcHJldmlvdXNMYWJlbCB9KSwgaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLnBhZ2VQb3NpdGlvbiB9LCBgJHtwYWdpbmF0aW9uTGFiZWx9ICR7c2VsZWN0ZWRJbmRleCArIDF9LyR7dG90YWx9YCksIGgoXCJjYWxjaXRlLWFjdGlvblwiLCB7IGNsYXNzOiBDU1MucGFnZU5leHQsIGljb246IGRpciA9PT0gXCJsdHJcIiA/IElDT05TLmNoZXZyb25SaWdodCA6IElDT05TLmNoZXZyb25MZWZ0LCBvbkNsaWNrOiB0aGlzLm5leHRDbGlja2VkLCBzY2FsZTogXCJtXCIsIHRleHQ6IG5leHRMYWJlbCB9KSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbG9zZWQsIGRpcmVjdGlvbiwgaGVhZGluZ0xldmVsLCBncm91cFRpdGxlLCBzZWxlY3RlZEluZGV4LCBtZXNzYWdlcywgdG90YWwgfSA9IHRoaXM7XG4gICAgY29uc3QgY2xvc2VMYWJlbCA9IG1lc3NhZ2VzLmNsb3NlO1xuICAgIGlmICh0b3RhbCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoaChcInNlY3Rpb25cIiwgeyBcImFyaWEtaGlkZGVuXCI6IHRvQXJpYUJvb2xlYW4oY2xvc2VkKSwgY2xhc3M6IENTUy5jb250YWluZXIsIGhpZGRlbjogY2xvc2VkLCBvbktleURvd246IHRoaXMudGlwTWFuYWdlcktleURvd25IYW5kbGVyLCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc3RvcmVDb250YWluZXJSZWYgfSwgaChcImhlYWRlclwiLCB7IGNsYXNzOiBDU1MuaGVhZGVyIH0sIGgoSGVhZGluZywgeyBjbGFzczogQ1NTLmhlYWRpbmcsIGxldmVsOiBoZWFkaW5nTGV2ZWwgfSwgZ3JvdXBUaXRsZSksIGgoXCJjYWxjaXRlLWFjdGlvblwiLCB7IGNsYXNzOiBDU1MuY2xvc2UsIG9uQ2xpY2s6IHRoaXMuaGlkZVRpcE1hbmFnZXIsIHNjYWxlOiBcIm1cIiwgdGV4dDogY2xvc2VMYWJlbCB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogSUNPTlMuY2xvc2UsIHNjYWxlOiBcIm1cIiB9KSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy50aXBDb250YWluZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTLnRpcENvbnRhaW5lckFkdmFuY2luZ106ICFjbG9zZWQgJiYgZGlyZWN0aW9uID09PSBcImFkdmFuY2luZ1wiLFxuICAgICAgICBbQ1NTLnRpcENvbnRhaW5lclJldHJlYXRpbmddOiAhY2xvc2VkICYmIGRpcmVjdGlvbiA9PT0gXCJyZXRyZWF0aW5nXCIsXG4gICAgICB9LCBrZXk6IHNlbGVjdGVkSW5kZXgsIHRhYkluZGV4OiAwIH0sIGgoXCJzbG90XCIsIG51bGwpKSwgdGhpcy5yZW5kZXJQYWdpbmF0aW9uKCkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiY2xvc2VkXCI6IFtcImNsb3NlZENoYW5nZUhhbmRsZXJcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJzZWxlY3RlZEluZGV4XCI6IFtcInNlbGVjdGVkQ2hhbmdlSGFuZGxlclwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gdGlwTWFuYWdlckNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS10aXAtbWFuYWdlclwiLCB7XG4gICAgXCJjbG9zZWRcIjogWzE1NDBdLFxuICAgIFwiaGVhZGluZ0xldmVsXCI6IFs1MTQsIFwiaGVhZGluZy1sZXZlbFwiXSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwic2VsZWN0ZWRJbmRleFwiOiBbMzJdLFxuICAgIFwidGlwc1wiOiBbMzJdLFxuICAgIFwidG90YWxcIjogWzMyXSxcbiAgICBcImRpcmVjdGlvblwiOiBbMzJdLFxuICAgIFwiZ3JvdXBUaXRsZVwiOiBbMzJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcIm5leHRUaXBcIjogWzY0XSxcbiAgICBcInByZXZpb3VzVGlwXCI6IFs2NF1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXRpcC1tYW5hZ2VyXCIsIFwiY2FsY2l0ZS1hY3Rpb25cIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWxvYWRlclwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS10aXAtbWFuYWdlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIFRpcE1hbmFnZXIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtYWN0aW9uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDQoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtbG9hZGVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG5cbmNvbnN0IENhbGNpdGVUaXBNYW5hZ2VyID0gVGlwTWFuYWdlcjtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVUaXBNYW5hZ2VyLCBkZWZpbmVDdXN0b21FbGVtZW50IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCwgZm9yY2VVcGRhdGUgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbmNvbnN0IHJlc29sdmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcHJvbWlzZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgc2V0cyB1cCB0aGUgY29tcG9uZW50IGZvciB0aGUgYWJpbGl0eSB0byBrbm93IHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudFdpbGxMb2FkKCk6IHZvaWQge1xuICogICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRVcExvYWRhYmxlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBwcm9taXNlTWFwLnNldChjb21wb25lbnQsIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlTWFwLnNldChjb21wb25lbnQsIHJlc29sdmUpKSk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgbGV0cyB0aGUgbG9hZGFibGUgY29tcG9uZW50IGtub3cgdGhhdCBpdCBpcyBub3cgbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudERpZExvYWQoKTogdm9pZCB7XG4gKiAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXNvbHZlTWFwLmdldChjb21wb25lbnQpKCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgY2FuIGJlIHVzZWQgdG8gZW5zdXJlIGEgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZCAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIFN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQpLlxuICpcbiAqIFJlcXVpcmVzIHJlcXVpcmVzIGBMb2FkYWJsZUNvbXBvbmVudGAgdG8gYmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIG15TWV0aG9kKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmV0dXJuIHByb21pc2VNYXAuZ2V0KGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgY2FuIGJlIHVzZWQgdG8gZW5zdXJpbmcgdGhlIGNvbXBvbmVudCBpcyBsb2FkZWQgYW5kIHJlbmRlcmVkIGJ5IHRoZSBicm93c2VyIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgU3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCBhbmQgYW55IGludGVybmFsIGVsZW1lbnRzIGFyZSBmb2N1c2FibGUpLlxuICpcbiAqIFJlcXVpcmVzIHJlcXVpcmVzIGBMb2FkYWJsZUNvbXBvbmVudGAgdG8gYmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdCBhbmQgdGhlbiBhbiBpbnRlcm5hbCBlbGVtZW50IGJlIGZvY3VzZWQuXG4gKlxuICogYGBgXG4gKiBhc3luYyBzZXRGb2N1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICogICB0aGlzLmludGVybmFsRWxlbWVudD8uZm9jdXMoKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY29tcG9uZW50Rm9jdXNhYmxlKGNvbXBvbmVudCkge1xuICBhd2FpdCBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KTtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yY2VVcGRhdGUoY29tcG9uZW50KTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKSk7XG59XG5cbmV4cG9ydCB7IHNldFVwTG9hZGFibGVDb21wb25lbnQgYXMgYSwgY29tcG9uZW50TG9hZGVkIGFzIGIsIGNvbXBvbmVudEZvY3VzYWJsZSBhcyBjLCBzZXRDb21wb25lbnRMb2FkZWQgYXMgcyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9