"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-navigation_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-navigation.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-navigation.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteNavigation: () => (/* binding */ CalciteNavigation),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */







const CSS = {
  container: "container",
  containerContent: "container-content",
  hasProgress: "progress-bar",
  hide: "hide",
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
};
const SLOTS = {
  logo: "logo",
  user: "user",
  progress: "progress",
  navigationAction: "navigation-action",
  contentStart: "content-start",
  contentEnd: "content-end",
  contentCenter: "content-center",
  navSecondary: "navigation-secondary",
  navTertiary: "navigation-tertiary",
};
const ICONS = {
  hamburger: "hamburger",
};

const navigationCss = ":host([hidden]){display:none}[hidden]{display:none}.container{margin-inline:auto;display:flex;inline-size:100%;flex-direction:column;margin-block:0;margin-inline:auto;background-color:var(--calcite-navigation-background, var(--calcite-ui-foreground-1))}.container.primary,.container.secondary,.container.tertiary{border-block-end:1px solid;border-block-end-color:var(--calcite-navigation-border-color, var(--calcite-ui-border-3))}.user,.logo{display:flex}.hide{display:none}.primary{block-size:4rem}.secondary{block-size:3rem}.tertiary{block-size:3rem}.container-content{margin-inline:auto;display:flex;block-size:100%;inline-size:100%;margin-block:0;inline-size:var(--calcite-navigation-width, 100%);max-inline-size:100%}.container-content.progress-bar{margin-block-start:0.125rem}slot[name]{display:flex;flex-direction:row}slot[name=navigation-secondary]::slotted(calcite-navigation),slot[name=navigation-tertiary]::slotted(calcite-navigation){inline-size:100%}slot[name=content-start]::slotted(*),slot[name=content-center]::slotted(*),slot[name=content-end]::slotted(*){display:flex;flex-direction:row;align-items:center}slot[name=progress],slot[name=progress] calcite-progress{inset-block-start:0;inset-inline:0}slot[name=content-end]{margin-inline-start:auto}slot[name=content-start]{margin-inline-end:auto}slot[name=content-end],slot[name=logo]~slot[name=user],slot[name=user]:only-child{margin-inline-start:auto}slot[name=content-center]{margin-inline-start:auto;margin-inline-end:auto}slot[name=content-start]~slot[name=content-center]{margin-inline-start:0px}slot[name=content-start]~slot[name=content-end],slot[name=content-center]~slot[name=content-end],slot[name=content-center]~slot[name=user],slot[name=content-end]~slot[name=user]{margin:0px}";

const CalciteNavigation$1 = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteNavigationActionSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteNavigationActionSelect", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.actionClickHandler = () => {
      this.calciteNavigationActionSelect.emit();
    };
    this.handleUserSlotChange = (event) => {
      if (this.isPrimaryLevel()) {
        this.userSlotHasElements = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
      }
    };
    this.handleLogoSlotChange = (event) => {
      if (this.isPrimaryLevel()) {
        this.logoSlotHasElements = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
      }
    };
    this.handleContentStartSlotChange = (event) => {
      if (this.isPrimaryLevel()) {
        this.primaryContentStartSlotHasElements = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
      }
    };
    this.handleContentEndSlotChange = (event) => {
      if (this.isPrimaryLevel()) {
        this.primaryContentEndSlotHasElements = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
      }
    };
    this.handleContentCenterSlotChange = (event) => {
      if (this.isPrimaryLevel()) {
        this.primaryContentCenterSlotHasElements = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
      }
    };
    this.handleSecondarySlotChange = (event) => {
      this.secondarySlotHasElements = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleTertiarySlotChange = (event) => {
      this.tertiarySlotHasElements = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleMenuActionSlotChange = (event) => {
      if (this.isPrimaryLevel()) {
        this.navigationActionSlotHasElements = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
        if (this.navigationActionSlotHasElements) {
          this.navigationAction = false;
        }
      }
    };
    this.handleProgressSlotChange = (event) => {
      if (this.isPrimaryLevel()) {
        this.progressSlotHasElement = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
      }
    };
    this.label = undefined;
    this.navigationAction = false;
    this.logoSlotHasElements = undefined;
    this.navigationActionSlotHasElements = undefined;
    this.primaryContentCenterSlotHasElements = undefined;
    this.primaryContentEndSlotHasElements = undefined;
    this.primaryContentStartSlotHasElements = undefined;
    this.progressSlotHasElement = undefined;
    this.secondarySlotHasElements = undefined;
    this.tertiarySlotHasElements = undefined;
    this.userSlotHasElements = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** When `navigation-action` is `true`, sets focus on the component's action element. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    return this.navigationActionEl?.setFocus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
  }
  isPrimaryLevel() {
    return this.el.slot !== SLOTS.navSecondary && this.el.slot !== SLOTS.navTertiary;
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderMenuAction() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { name: SLOTS.navigationAction, onSlotchange: this.handleMenuActionSlotChange }, this.navigationAction && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("calcite-action", { icon: ICONS.hamburger, onClick: this.actionClickHandler, text: this.label,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.navigationActionEl = el) }))));
  }
  render() {
    const primaryLevelHasElements = this.logoSlotHasElements ||
      this.userSlotHasElements ||
      this.navigationActionSlotHasElements ||
      this.primaryContentCenterSlotHasElements ||
      this.primaryContentEndSlotHasElements ||
      this.primaryContentStartSlotHasElements ||
      this.navigationAction;
    const slotName = this.el.slot;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: {
        [CSS.container]: true,
        [CSS.secondary]: slotName === SLOTS.navSecondary,
        [CSS.tertiary]: slotName === SLOTS.navTertiary,
        [CSS.primary]: primaryLevelHasElements,
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: { [CSS.hide]: !this.progressSlotHasElement, [SLOTS.progress]: true } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { name: SLOTS.progress, onSlotchange: this.handleProgressSlotChange })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: { [CSS.containerContent]: true, [CSS.hasProgress]: this.progressSlotHasElement } }, this.renderMenuAction(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: { [CSS.hide]: !this.logoSlotHasElements, [SLOTS.logo]: true } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { name: SLOTS.logo, onSlotchange: this.handleLogoSlotChange })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { name: SLOTS.contentStart, onSlotchange: this.handleContentStartSlotChange }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { name: SLOTS.contentCenter, onSlotchange: this.handleContentCenterSlotChange }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { name: SLOTS.contentEnd, onSlotchange: this.handleContentEndSlotChange }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: { [CSS.hide]: !this.userSlotHasElements, [SLOTS.user]: true } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { name: SLOTS.user, onSlotchange: this.handleUserSlotChange })))), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { name: SLOTS.navSecondary, onSlotchange: this.handleSecondarySlotChange }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { name: SLOTS.navTertiary, onSlotchange: this.handleTertiarySlotChange }))));
  }
  get el() { return this; }
  static get style() { return navigationCss; }
}, [1, "calcite-navigation", {
    "label": [1],
    "navigationAction": [516, "navigation-action"],
    "logoSlotHasElements": [32],
    "navigationActionSlotHasElements": [32],
    "primaryContentCenterSlotHasElements": [32],
    "primaryContentEndSlotHasElements": [32],
    "primaryContentStartSlotHasElements": [32],
    "progressSlotHasElement": [32],
    "secondarySlotHasElements": [32],
    "tertiarySlotHasElements": [32],
    "userSlotHasElements": [32],
    "setFocus": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-navigation", "calcite-action", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-navigation":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalciteNavigation$1);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_2__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_3__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteNavigation = CalciteNavigation$1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZTI1ODQ0MTM3YTNlOTVlYmIxYTg3Y2FjMTMxYmZjOWIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lIO0FBQzVEO0FBQ2lEO0FBQ3JEO0FBQ0Y7QUFDRTs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsYUFBYSxTQUFTLGFBQWEsV0FBVyxtQkFBbUIsYUFBYSxpQkFBaUIsc0JBQXNCLGVBQWUsbUJBQW1CLHNGQUFzRiw0REFBNEQsMkJBQTJCLDBGQUEwRixZQUFZLGFBQWEsTUFBTSxhQUFhLFNBQVMsZ0JBQWdCLFdBQVcsZ0JBQWdCLFVBQVUsZ0JBQWdCLG1CQUFtQixtQkFBbUIsYUFBYSxnQkFBZ0IsaUJBQWlCLGVBQWUsa0RBQWtELHFCQUFxQixnQ0FBZ0MsNEJBQTRCLFdBQVcsYUFBYSxtQkFBbUIseUhBQXlILGlCQUFpQiw4R0FBOEcsYUFBYSxtQkFBbUIsbUJBQW1CLHlEQUF5RCxvQkFBb0IsZUFBZSx1QkFBdUIseUJBQXlCLHlCQUF5Qix1QkFBdUIsa0ZBQWtGLHlCQUF5QiwwQkFBMEIseUJBQXlCLHVCQUF1QixtREFBbUQsd0JBQXdCLGtMQUFrTCxXQUFXOztBQUVwdkQsMENBQTBDLDBGQUFrQixlQUFlLCtFQUFXO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLG1GQUFXO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBDQUE0QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQ0FBNEI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsMENBQTRCO0FBQzlFO0FBQ0E7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cyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvbG9hZGFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEhvc3QsIEZyYWdtZW50IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgZSBhcyBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50IH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRGb2N1c2FibGUsIGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0IH0gZnJvbSAnLi9hY3Rpb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDMgfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBjb250YWluZXJDb250ZW50OiBcImNvbnRhaW5lci1jb250ZW50XCIsXG4gIGhhc1Byb2dyZXNzOiBcInByb2dyZXNzLWJhclwiLFxuICBoaWRlOiBcImhpZGVcIixcbiAgcHJpbWFyeTogXCJwcmltYXJ5XCIsXG4gIHNlY29uZGFyeTogXCJzZWNvbmRhcnlcIixcbiAgdGVydGlhcnk6IFwidGVydGlhcnlcIixcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgbG9nbzogXCJsb2dvXCIsXG4gIHVzZXI6IFwidXNlclwiLFxuICBwcm9ncmVzczogXCJwcm9ncmVzc1wiLFxuICBuYXZpZ2F0aW9uQWN0aW9uOiBcIm5hdmlnYXRpb24tYWN0aW9uXCIsXG4gIGNvbnRlbnRTdGFydDogXCJjb250ZW50LXN0YXJ0XCIsXG4gIGNvbnRlbnRFbmQ6IFwiY29udGVudC1lbmRcIixcbiAgY29udGVudENlbnRlcjogXCJjb250ZW50LWNlbnRlclwiLFxuICBuYXZTZWNvbmRhcnk6IFwibmF2aWdhdGlvbi1zZWNvbmRhcnlcIixcbiAgbmF2VGVydGlhcnk6IFwibmF2aWdhdGlvbi10ZXJ0aWFyeVwiLFxufTtcbmNvbnN0IElDT05TID0ge1xuICBoYW1idXJnZXI6IFwiaGFtYnVyZ2VyXCIsXG59O1xuXG5jb25zdCBuYXZpZ2F0aW9uQ3NzID0gXCI6aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX0uY29udGFpbmVye21hcmdpbi1pbmxpbmU6YXV0bztkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWFyZ2luLWJsb2NrOjA7bWFyZ2luLWlubGluZTphdXRvO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS1uYXZpZ2F0aW9uLWJhY2tncm91bmQsIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKSl9LmNvbnRhaW5lci5wcmltYXJ5LC5jb250YWluZXIuc2Vjb25kYXJ5LC5jb250YWluZXIudGVydGlhcnl7Ym9yZGVyLWJsb2NrLWVuZDoxcHggc29saWQ7Ym9yZGVyLWJsb2NrLWVuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLW5hdmlnYXRpb24tYm9yZGVyLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKSl9LnVzZXIsLmxvZ297ZGlzcGxheTpmbGV4fS5oaWRle2Rpc3BsYXk6bm9uZX0ucHJpbWFyeXtibG9jay1zaXplOjRyZW19LnNlY29uZGFyeXtibG9jay1zaXplOjNyZW19LnRlcnRpYXJ5e2Jsb2NrLXNpemU6M3JlbX0uY29udGFpbmVyLWNvbnRlbnR7bWFyZ2luLWlubGluZTphdXRvO2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTttYXJnaW4tYmxvY2s6MDtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLW5hdmlnYXRpb24td2lkdGgsIDEwMCUpO21heC1pbmxpbmUtc2l6ZToxMDAlfS5jb250YWluZXItY29udGVudC5wcm9ncmVzcy1iYXJ7bWFyZ2luLWJsb2NrLXN0YXJ0OjAuMTI1cmVtfXNsb3RbbmFtZV17ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvd31zbG90W25hbWU9bmF2aWdhdGlvbi1zZWNvbmRhcnldOjpzbG90dGVkKGNhbGNpdGUtbmF2aWdhdGlvbiksc2xvdFtuYW1lPW5hdmlnYXRpb24tdGVydGlhcnldOjpzbG90dGVkKGNhbGNpdGUtbmF2aWdhdGlvbil7aW5saW5lLXNpemU6MTAwJX1zbG90W25hbWU9Y29udGVudC1zdGFydF06OnNsb3R0ZWQoKiksc2xvdFtuYW1lPWNvbnRlbnQtY2VudGVyXTo6c2xvdHRlZCgqKSxzbG90W25hbWU9Y29udGVudC1lbmRdOjpzbG90dGVkKCope2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyfXNsb3RbbmFtZT1wcm9ncmVzc10sc2xvdFtuYW1lPXByb2dyZXNzXSBjYWxjaXRlLXByb2dyZXNze2luc2V0LWJsb2NrLXN0YXJ0OjA7aW5zZXQtaW5saW5lOjB9c2xvdFtuYW1lPWNvbnRlbnQtZW5kXXttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG99c2xvdFtuYW1lPWNvbnRlbnQtc3RhcnRde21hcmdpbi1pbmxpbmUtZW5kOmF1dG99c2xvdFtuYW1lPWNvbnRlbnQtZW5kXSxzbG90W25hbWU9bG9nb11+c2xvdFtuYW1lPXVzZXJdLHNsb3RbbmFtZT11c2VyXTpvbmx5LWNoaWxke21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0b31zbG90W25hbWU9Y29udGVudC1jZW50ZXJde21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLWVuZDphdXRvfXNsb3RbbmFtZT1jb250ZW50LXN0YXJ0XX5zbG90W25hbWU9Y29udGVudC1jZW50ZXJde21hcmdpbi1pbmxpbmUtc3RhcnQ6MHB4fXNsb3RbbmFtZT1jb250ZW50LXN0YXJ0XX5zbG90W25hbWU9Y29udGVudC1lbmRdLHNsb3RbbmFtZT1jb250ZW50LWNlbnRlcl1+c2xvdFtuYW1lPWNvbnRlbnQtZW5kXSxzbG90W25hbWU9Y29udGVudC1jZW50ZXJdfnNsb3RbbmFtZT11c2VyXSxzbG90W25hbWU9Y29udGVudC1lbmRdfnNsb3RbbmFtZT11c2VyXXttYXJnaW46MHB4fVwiO1xuXG5jb25zdCBDYWxjaXRlTmF2aWdhdGlvbiQxID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVOYXZpZ2F0aW9uQWN0aW9uU2VsZWN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTmF2aWdhdGlvbkFjdGlvblNlbGVjdFwiLCA2KTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5hY3Rpb25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVOYXZpZ2F0aW9uQWN0aW9uU2VsZWN0LmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlVXNlclNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzUHJpbWFyeUxldmVsKCkpIHtcbiAgICAgICAgdGhpcy51c2VyU2xvdEhhc0VsZW1lbnRzID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUxvZ29TbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ByaW1hcnlMZXZlbCgpKSB7XG4gICAgICAgIHRoaXMubG9nb1Nsb3RIYXNFbGVtZW50cyA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDb250ZW50U3RhcnRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ByaW1hcnlMZXZlbCgpKSB7XG4gICAgICAgIHRoaXMucHJpbWFyeUNvbnRlbnRTdGFydFNsb3RIYXNFbGVtZW50cyA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDb250ZW50RW5kU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNQcmltYXJ5TGV2ZWwoKSkge1xuICAgICAgICB0aGlzLnByaW1hcnlDb250ZW50RW5kU2xvdEhhc0VsZW1lbnRzID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNvbnRlbnRDZW50ZXJTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ByaW1hcnlMZXZlbCgpKSB7XG4gICAgICAgIHRoaXMucHJpbWFyeUNvbnRlbnRDZW50ZXJTbG90SGFzRWxlbWVudHMgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU2Vjb25kYXJ5U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5zZWNvbmRhcnlTbG90SGFzRWxlbWVudHMgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlVGVydGlhcnlTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnRlcnRpYXJ5U2xvdEhhc0VsZW1lbnRzID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZU1lbnVBY3Rpb25TbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ByaW1hcnlMZXZlbCgpKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkFjdGlvblNsb3RIYXNFbGVtZW50cyA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgICAgICBpZiAodGhpcy5uYXZpZ2F0aW9uQWN0aW9uU2xvdEhhc0VsZW1lbnRzKSB7XG4gICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uQWN0aW9uID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlUHJvZ3Jlc3NTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ByaW1hcnlMZXZlbCgpKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5hdmlnYXRpb25BY3Rpb24gPSBmYWxzZTtcbiAgICB0aGlzLmxvZ29TbG90SGFzRWxlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5uYXZpZ2F0aW9uQWN0aW9uU2xvdEhhc0VsZW1lbnRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHJpbWFyeUNvbnRlbnRDZW50ZXJTbG90SGFzRWxlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wcmltYXJ5Q29udGVudEVuZFNsb3RIYXNFbGVtZW50cyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnByaW1hcnlDb250ZW50U3RhcnRTbG90SGFzRWxlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wcm9ncmVzc1Nsb3RIYXNFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2Vjb25kYXJ5U2xvdEhhc0VsZW1lbnRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGVydGlhcnlTbG90SGFzRWxlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51c2VyU2xvdEhhc0VsZW1lbnRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFdoZW4gYG5hdmlnYXRpb24tYWN0aW9uYCBpcyBgdHJ1ZWAsIHNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGFjdGlvbiBlbGVtZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvbkFjdGlvbkVsPy5zZXRGb2N1cygpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgaXNQcmltYXJ5TGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwuc2xvdCAhPT0gU0xPVFMubmF2U2Vjb25kYXJ5ICYmIHRoaXMuZWwuc2xvdCAhPT0gU0xPVFMubmF2VGVydGlhcnk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJNZW51QWN0aW9uKCkge1xuICAgIHJldHVybiAoaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5uYXZpZ2F0aW9uQWN0aW9uLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlTWVudUFjdGlvblNsb3RDaGFuZ2UgfSwgdGhpcy5uYXZpZ2F0aW9uQWN0aW9uICYmIChoKFwiY2FsY2l0ZS1hY3Rpb25cIiwgeyBpY29uOiBJQ09OUy5oYW1idXJnZXIsIG9uQ2xpY2s6IHRoaXMuYWN0aW9uQ2xpY2tIYW5kbGVyLCB0ZXh0OiB0aGlzLmxhYmVsLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5uYXZpZ2F0aW9uQWN0aW9uRWwgPSBlbCkgfSkpKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHByaW1hcnlMZXZlbEhhc0VsZW1lbnRzID0gdGhpcy5sb2dvU2xvdEhhc0VsZW1lbnRzIHx8XG4gICAgICB0aGlzLnVzZXJTbG90SGFzRWxlbWVudHMgfHxcbiAgICAgIHRoaXMubmF2aWdhdGlvbkFjdGlvblNsb3RIYXNFbGVtZW50cyB8fFxuICAgICAgdGhpcy5wcmltYXJ5Q29udGVudENlbnRlclNsb3RIYXNFbGVtZW50cyB8fFxuICAgICAgdGhpcy5wcmltYXJ5Q29udGVudEVuZFNsb3RIYXNFbGVtZW50cyB8fFxuICAgICAgdGhpcy5wcmltYXJ5Q29udGVudFN0YXJ0U2xvdEhhc0VsZW1lbnRzIHx8XG4gICAgICB0aGlzLm5hdmlnYXRpb25BY3Rpb247XG4gICAgY29uc3Qgc2xvdE5hbWUgPSB0aGlzLmVsLnNsb3Q7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmNvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1Muc2Vjb25kYXJ5XTogc2xvdE5hbWUgPT09IFNMT1RTLm5hdlNlY29uZGFyeSxcbiAgICAgICAgW0NTUy50ZXJ0aWFyeV06IHNsb3ROYW1lID09PSBTTE9UUy5uYXZUZXJ0aWFyeSxcbiAgICAgICAgW0NTUy5wcmltYXJ5XTogcHJpbWFyeUxldmVsSGFzRWxlbWVudHMsXG4gICAgICB9IH0sIGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmhpZGVdOiAhdGhpcy5wcm9ncmVzc1Nsb3RIYXNFbGVtZW50LCBbU0xPVFMucHJvZ3Jlc3NdOiB0cnVlIH0gfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5wcm9ncmVzcywgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZVByb2dyZXNzU2xvdENoYW5nZSB9KSksIGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmNvbnRhaW5lckNvbnRlbnRdOiB0cnVlLCBbQ1NTLmhhc1Byb2dyZXNzXTogdGhpcy5wcm9ncmVzc1Nsb3RIYXNFbGVtZW50IH0gfSwgdGhpcy5yZW5kZXJNZW51QWN0aW9uKCksIGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmhpZGVdOiAhdGhpcy5sb2dvU2xvdEhhc0VsZW1lbnRzLCBbU0xPVFMubG9nb106IHRydWUgfSB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmxvZ28sIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVMb2dvU2xvdENoYW5nZSB9KSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuY29udGVudFN0YXJ0LCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlQ29udGVudFN0YXJ0U2xvdENoYW5nZSB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5jb250ZW50Q2VudGVyLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlQ29udGVudENlbnRlclNsb3RDaGFuZ2UgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuY29udGVudEVuZCwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUNvbnRlbnRFbmRTbG90Q2hhbmdlIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5oaWRlXTogIXRoaXMudXNlclNsb3RIYXNFbGVtZW50cywgW1NMT1RTLnVzZXJdOiB0cnVlIH0gfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy51c2VyLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlVXNlclNsb3RDaGFuZ2UgfSkpKSksIGgoRnJhZ21lbnQsIG51bGwsIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMubmF2U2Vjb25kYXJ5LCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlU2Vjb25kYXJ5U2xvdENoYW5nZSB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5uYXZUZXJ0aWFyeSwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZVRlcnRpYXJ5U2xvdENoYW5nZSB9KSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBuYXZpZ2F0aW9uQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLW5hdmlnYXRpb25cIiwge1xuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwibmF2aWdhdGlvbkFjdGlvblwiOiBbNTE2LCBcIm5hdmlnYXRpb24tYWN0aW9uXCJdLFxuICAgIFwibG9nb1Nsb3RIYXNFbGVtZW50c1wiOiBbMzJdLFxuICAgIFwibmF2aWdhdGlvbkFjdGlvblNsb3RIYXNFbGVtZW50c1wiOiBbMzJdLFxuICAgIFwicHJpbWFyeUNvbnRlbnRDZW50ZXJTbG90SGFzRWxlbWVudHNcIjogWzMyXSxcbiAgICBcInByaW1hcnlDb250ZW50RW5kU2xvdEhhc0VsZW1lbnRzXCI6IFszMl0sXG4gICAgXCJwcmltYXJ5Q29udGVudFN0YXJ0U2xvdEhhc0VsZW1lbnRzXCI6IFszMl0sXG4gICAgXCJwcm9ncmVzc1Nsb3RIYXNFbGVtZW50XCI6IFszMl0sXG4gICAgXCJzZWNvbmRhcnlTbG90SGFzRWxlbWVudHNcIjogWzMyXSxcbiAgICBcInRlcnRpYXJ5U2xvdEhhc0VsZW1lbnRzXCI6IFszMl0sXG4gICAgXCJ1c2VyU2xvdEhhc0VsZW1lbnRzXCI6IFszMl0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1uYXZpZ2F0aW9uXCIsIFwiY2FsY2l0ZS1hY3Rpb25cIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWxvYWRlclwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1uYXZpZ2F0aW9uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgQ2FsY2l0ZU5hdmlnYXRpb24kMSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1hY3Rpb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZU5hdmlnYXRpb24gPSBDYWxjaXRlTmF2aWdhdGlvbiQxO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZU5hdmlnYXRpb24sIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkLCBmb3JjZVVwZGF0ZSB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuY29uc3QgcmVzb2x2ZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBwcm9taXNlTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBzZXRzIHVwIHRoZSBjb21wb25lbnQgZm9yIHRoZSBhYmlsaXR5IHRvIGtub3cgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50V2lsbExvYWQoKTogdm9pZCB7XG4gKiAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldFVwTG9hZGFibGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHByb21pc2VNYXAuc2V0KGNvbXBvbmVudCwgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmVNYXAuc2V0KGNvbXBvbmVudCwgcmVzb2x2ZSkpKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBsZXRzIHRoZSBsb2FkYWJsZSBjb21wb25lbnQga25vdyB0aGF0IGl0IGlzIG5vdyBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50RGlkTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRDb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJlc29sdmVNYXAuZ2V0KGNvbXBvbmVudCkoKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmUgYSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgU3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCkuXG4gKlxuICogUmVxdWlyZXMgcmVxdWlyZXMgYExvYWRhYmxlQ29tcG9uZW50YCB0byBiZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0LlxuICpcbiAqIGBgYFxuICogYXN5bmMgbXlNZXRob2QoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXR1cm4gcHJvbWlzZU1hcC5nZXQoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmluZyB0aGUgY29tcG9uZW50IGlzIGxvYWRlZCBhbmQgcmVuZGVyZWQgYnkgdGhlIGJyb3dzZXIgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBTdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkIGFuZCBhbnkgaW50ZXJuYWwgZWxlbWVudHMgYXJlIGZvY3VzYWJsZSkuXG4gKlxuICogUmVxdWlyZXMgcmVxdWlyZXMgYExvYWRhYmxlQ29tcG9uZW50YCB0byBiZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0IGFuZCB0aGVuIGFuIGludGVybmFsIGVsZW1lbnQgYmUgZm9jdXNlZC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIHNldEZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gKiAgIHRoaXMuaW50ZXJuYWxFbGVtZW50Py5mb2N1cygpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5hc3luYyBmdW5jdGlvbiBjb21wb25lbnRGb2N1c2FibGUoY29tcG9uZW50KSB7XG4gIGF3YWl0IGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpO1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybjtcbiAgfVxuICBmb3JjZVVwZGF0ZShjb21wb25lbnQpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpKTtcbn1cblxuZXhwb3J0IHsgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCBhcyBhLCBjb21wb25lbnRMb2FkZWQgYXMgYiwgY29tcG9uZW50Rm9jdXNhYmxlIGFzIGMsIHNldENvbXBvbmVudExvYWRlZCBhcyBzIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=