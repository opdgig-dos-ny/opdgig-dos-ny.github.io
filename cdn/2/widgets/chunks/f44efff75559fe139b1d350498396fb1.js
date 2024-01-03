"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_menu_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/globalAttributes.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/globalAttributes.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ unwatchGlobalAttributes),
/* harmony export */   w: () => (/* binding */ watchGlobalAttributes)
/* harmony export */ });
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const allowedGlobalAttributes = ["lang", "role", "aria-expanded"];
const elementToComponentAndObserverOptionsMap = new Map();
let mutationObserver;
function updateGlobalAttributes(component, attributeFilter, reuseAttributes = false) {
  const { el } = component;
  const updatedAttributes = reuseAttributes ? component.globalAttributes : {};
  attributeFilter
    .filter((attr) => !!allowedGlobalAttributes.includes(attr) && !!el.hasAttribute(attr))
    .forEach((attr) => {
    const value = el.getAttribute(attr);
    if (value !== null) {
      updatedAttributes[attr] = value;
    }
  });
  component.globalAttributes = updatedAttributes;
}
function processMutations(mutations) {
  mutations.forEach(({ target }) => {
    const [component, options] = elementToComponentAndObserverOptionsMap.get(target);
    updateGlobalAttributes(component, options.attributeFilter);
  });
}
/**
 * Helper to set up listening for changes to global attributes.
 *
 * render(): VNode {
 * return (<Host>
 * <ul {...this.globalAttributes}></div>
 * </Host>);
 * }
 *
 * @param component
 * @param attributeFilter
 */
function watchGlobalAttributes(component, attributeFilter) {
  const { el } = component;
  const observerOptions = { attributeFilter };
  elementToComponentAndObserverOptionsMap.set(el, [component, observerOptions]);
  updateGlobalAttributes(component, attributeFilter, true);
  if (!mutationObserver) {
    mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_0__.c)("mutation", processMutations);
  }
  mutationObserver.observe(el, observerOptions);
}
/**
 * Helper remove listening for changes to inherited attributes.
 *
 * @param component
 */
function unwatchGlobalAttributes(component) {
  elementToComponentAndObserverOptionsMap.delete(component.el);
  // we explicitly process queued mutations and disconnect and reconnect
  // the observer until MutationObserver gets an `unobserve` method
  // see https://github.com/whatwg/dom/issues/126
  processMutations(mutationObserver.takeRecords());
  mutationObserver.disconnect();
  for (const [element, [, observerOptions]] of elementToComponentAndObserverOptionsMap.entries()) {
    mutationObserver.observe(element, observerOptions);
  }
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

/***/ "./node_modules/@esri/calcite-components/dist/components/menu.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/menu.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CalciteMenu),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _globalAttributes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globalAttributes.js */ "./node_modules/@esri/calcite-components/dist/components/globalAttributes.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */







const menuCss = ":host{display:flex}ul{margin:0px;display:inline-flex;block-size:100%;align-items:center;padding:0px}:host([layout=vertical]) ul{display:flex;inline-size:100%;flex-direction:column}:host([hidden]){display:none}[hidden]{display:none}";

const CalciteMenu = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.menuItems = [];
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.handleMenuSlotChange = (event) => {
      this.menuItems = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.s)(event);
      this.setMenuItemLayout(this.menuItems, this.layout);
    };
    this.label = undefined;
    this.layout = "horizontal";
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.globalAttributes = {
      role: "menubar",
    };
  }
  handleLayoutChange(value) {
    this.setMenuItemLayout(this.menuItems, value);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_globalAttributes_js__WEBPACK_IMPORTED_MODULE_4__.w)(this, ["role"]);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_globalAttributes_js__WEBPACK_IMPORTED_MODULE_4__.u)(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  calciteInternalNavMenuItemKeyEvent(event) {
    const target = event.target;
    const submenuItems = event.detail.children;
    const key = event.detail.event.key;
    event.stopPropagation();
    if (key === "ArrowDown") {
      if (target.layout === "vertical") {
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(this.menuItems, target, "next", false);
      }
      else {
        if (event.detail.isSubmenuOpen) {
          submenuItems[0].setFocus();
        }
      }
    }
    else if (key === "ArrowUp") {
      if (this.layout === "vertical") {
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(this.menuItems, target, "previous", false);
      }
      else {
        if (event.detail.isSubmenuOpen) {
          submenuItems[submenuItems.length - 1].setFocus();
        }
      }
    }
    else if (key === "ArrowRight") {
      if (this.layout === "horizontal") {
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(this.menuItems, target, "next", false);
      }
      else {
        if (event.detail.isSubmenuOpen) {
          submenuItems[0].setFocus();
        }
      }
    }
    else if (key === "ArrowLeft") {
      if (this.layout === "horizontal") {
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(this.menuItems, target, "previous", false);
      }
      else {
        if (event.detail.isSubmenuOpen) {
          this.focusParentElement(event.target);
        }
      }
    }
    else if (key === "Escape") {
      this.focusParentElement(event.target);
    }
    event.preventDefault();
  }
  focusParentElement(el) {
    const parentEl = el.parentElement;
    if (parentEl) {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.k)(parentEl);
      parentEl.open = false;
    }
  }
  setMenuItemLayout(items, layout) {
    items.forEach((item) => {
      item.layout = layout;
      if (this.globalAttributes.role === "menubar") {
        item.isTopLevelItem = true;
        item.topLevelMenuLayout = this.layout;
      }
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("ul", { "aria-label": this.label, ...this.globalAttributes }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { onSlotchange: this.handleMenuSlotChange }))));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "layout": ["handleLayoutChange"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return menuCss; }
}, [17, "calcite-menu", {
    "label": [1],
    "layout": [513],
    "messageOverrides": [1040],
    "messages": [1040],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "globalAttributes": [32],
    "setFocus": [64]
  }, [[0, "calciteInternalMenuItemKeyEvent", "calciteInternalNavMenuItemKeyEvent"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-menu"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalciteMenu);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZjQ0ZWZmZjc1NTU5ZmUxMzliMWQzNTA0OTgzOTZmYjEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5QkFBeUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdEQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVvRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0RTs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQSxFQUFFLG1GQUFXO0FBQ2I7QUFDQTs7QUFFK0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Ri9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0c7QUFDUztBQUNHO0FBQ2hDO0FBQ29DO0FBQ2pCOztBQUVqRyx1QkFBdUIsYUFBYSxHQUFHLFdBQVcsb0JBQW9CLGdCQUFnQixtQkFBbUIsWUFBWSw0QkFBNEIsYUFBYSxpQkFBaUIsc0JBQXNCLGdCQUFnQixhQUFhLFNBQVMsYUFBYTs7QUFFeFAsa0NBQWtDLDBGQUFrQixlQUFlLCtFQUFXO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMENBQTZCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwQ0FBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQWdCO0FBQ3BCLElBQUksMENBQWU7QUFDbkIsSUFBSSx1REFBcUI7QUFDekI7QUFDQTtBQUNBLElBQUksK0NBQXNCO0FBQzFCLFVBQVUsMENBQWE7QUFDdkI7QUFDQTtBQUNBLElBQUksK0NBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLDZDQUFtQjtBQUN2QixJQUFJLDBDQUFrQjtBQUN0QixJQUFJLHVEQUF1QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrQ0FBa0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMENBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMENBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMENBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMENBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMENBQVk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlFQUFDLENBQUMsd0VBQUksUUFBUSx5RUFBQyxTQUFTLG9EQUFvRCxFQUFFLHlFQUFDLFdBQVcseUNBQXlDO0FBQy9JO0FBQ0EsZ0NBQWdDO0FBQ2hDLDRCQUE0QjtBQUM1QixhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVzRCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9nbG9iYWxBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sb2FkYWJsZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuXG5jb25zdCBhbGxvd2VkR2xvYmFsQXR0cmlidXRlcyA9IFtcImxhbmdcIiwgXCJyb2xlXCIsIFwiYXJpYS1leHBhbmRlZFwiXTtcbmNvbnN0IGVsZW1lbnRUb0NvbXBvbmVudEFuZE9ic2VydmVyT3B0aW9uc01hcCA9IG5ldyBNYXAoKTtcbmxldCBtdXRhdGlvbk9ic2VydmVyO1xuZnVuY3Rpb24gdXBkYXRlR2xvYmFsQXR0cmlidXRlcyhjb21wb25lbnQsIGF0dHJpYnV0ZUZpbHRlciwgcmV1c2VBdHRyaWJ1dGVzID0gZmFsc2UpIHtcbiAgY29uc3QgeyBlbCB9ID0gY29tcG9uZW50O1xuICBjb25zdCB1cGRhdGVkQXR0cmlidXRlcyA9IHJldXNlQXR0cmlidXRlcyA/IGNvbXBvbmVudC5nbG9iYWxBdHRyaWJ1dGVzIDoge307XG4gIGF0dHJpYnV0ZUZpbHRlclxuICAgIC5maWx0ZXIoKGF0dHIpID0+ICEhYWxsb3dlZEdsb2JhbEF0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0cikgJiYgISFlbC5oYXNBdHRyaWJ1dGUoYXR0cikpXG4gICAgLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGVsLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHVwZGF0ZWRBdHRyaWJ1dGVzW2F0dHJdID0gdmFsdWU7XG4gICAgfVxuICB9KTtcbiAgY29tcG9uZW50Lmdsb2JhbEF0dHJpYnV0ZXMgPSB1cGRhdGVkQXR0cmlidXRlcztcbn1cbmZ1bmN0aW9uIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gIG11dGF0aW9ucy5mb3JFYWNoKCh7IHRhcmdldCB9KSA9PiB7XG4gICAgY29uc3QgW2NvbXBvbmVudCwgb3B0aW9uc10gPSBlbGVtZW50VG9Db21wb25lbnRBbmRPYnNlcnZlck9wdGlvbnNNYXAuZ2V0KHRhcmdldCk7XG4gICAgdXBkYXRlR2xvYmFsQXR0cmlidXRlcyhjb21wb25lbnQsIG9wdGlvbnMuYXR0cmlidXRlRmlsdGVyKTtcbiAgfSk7XG59XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgbGlzdGVuaW5nIGZvciBjaGFuZ2VzIHRvIGdsb2JhbCBhdHRyaWJ1dGVzLlxuICpcbiAqIHJlbmRlcigpOiBWTm9kZSB7XG4gKiByZXR1cm4gKDxIb3N0PlxuICogPHVsIHsuLi50aGlzLmdsb2JhbEF0dHJpYnV0ZXN9PjwvZGl2PlxuICogPC9Ib3N0Pik7XG4gKiB9XG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGF0dHJpYnV0ZUZpbHRlclxuICovXG5mdW5jdGlvbiB3YXRjaEdsb2JhbEF0dHJpYnV0ZXMoY29tcG9uZW50LCBhdHRyaWJ1dGVGaWx0ZXIpIHtcbiAgY29uc3QgeyBlbCB9ID0gY29tcG9uZW50O1xuICBjb25zdCBvYnNlcnZlck9wdGlvbnMgPSB7IGF0dHJpYnV0ZUZpbHRlciB9O1xuICBlbGVtZW50VG9Db21wb25lbnRBbmRPYnNlcnZlck9wdGlvbnNNYXAuc2V0KGVsLCBbY29tcG9uZW50LCBvYnNlcnZlck9wdGlvbnNdKTtcbiAgdXBkYXRlR2xvYmFsQXR0cmlidXRlcyhjb21wb25lbnQsIGF0dHJpYnV0ZUZpbHRlciwgdHJ1ZSk7XG4gIGlmICghbXV0YXRpb25PYnNlcnZlcikge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsIHByb2Nlc3NNdXRhdGlvbnMpO1xuICB9XG4gIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShlbCwgb2JzZXJ2ZXJPcHRpb25zKTtcbn1cbi8qKlxuICogSGVscGVyIHJlbW92ZSBsaXN0ZW5pbmcgZm9yIGNoYW5nZXMgdG8gaW5oZXJpdGVkIGF0dHJpYnV0ZXMuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiB1bndhdGNoR2xvYmFsQXR0cmlidXRlcyhjb21wb25lbnQpIHtcbiAgZWxlbWVudFRvQ29tcG9uZW50QW5kT2JzZXJ2ZXJPcHRpb25zTWFwLmRlbGV0ZShjb21wb25lbnQuZWwpO1xuICAvLyB3ZSBleHBsaWNpdGx5IHByb2Nlc3MgcXVldWVkIG11dGF0aW9ucyBhbmQgZGlzY29ubmVjdCBhbmQgcmVjb25uZWN0XG4gIC8vIHRoZSBvYnNlcnZlciB1bnRpbCBNdXRhdGlvbk9ic2VydmVyIGdldHMgYW4gYHVub2JzZXJ2ZWAgbWV0aG9kXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMTI2XG4gIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25PYnNlcnZlci50YWtlUmVjb3JkcygpKTtcbiAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIGZvciAoY29uc3QgW2VsZW1lbnQsIFssIG9ic2VydmVyT3B0aW9uc11dIG9mIGVsZW1lbnRUb0NvbXBvbmVudEFuZE9ic2VydmVyT3B0aW9uc01hcC5lbnRyaWVzKCkpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgeyB1bndhdGNoR2xvYmFsQXR0cmlidXRlcyBhcyB1LCB3YXRjaEdsb2JhbEF0dHJpYnV0ZXMgYXMgdyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQsIGZvcmNlVXBkYXRlIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBTdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyByZXF1aXJlcyBgTG9hZGFibGVDb21wb25lbnRgIHRvIGJlIGltcGxlbWVudGVkLlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QuXG4gKlxuICogYGBgXG4gKiBhc3luYyBteU1ldGhvZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5mdW5jdGlvbiBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBwcm9taXNlTWFwLmdldChjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyaW5nIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkIGFuZCByZW5kZXJlZCBieSB0aGUgYnJvd3NlciAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIFN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQgYW5kIGFueSBpbnRlcm5hbCBlbGVtZW50cyBhcmUgZm9jdXNhYmxlKS5cbiAqXG4gKiBSZXF1aXJlcyByZXF1aXJlcyBgTG9hZGFibGVDb21wb25lbnRgIHRvIGJlIGltcGxlbWVudGVkLlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QgYW5kIHRoZW4gYW4gaW50ZXJuYWwgZWxlbWVudCBiZSBmb2N1c2VkLlxuICpcbiAqIGBgYFxuICogYXN5bmMgc2V0Rm9jdXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAqICAgdGhpcy5pbnRlcm5hbEVsZW1lbnQ/LmZvY3VzKCk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvbXBvbmVudEZvY3VzYWJsZShjb21wb25lbnQpIHtcbiAgYXdhaXQgY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCk7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvcmNlVXBkYXRlKGNvbXBvbmVudCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJlc29sdmUoKSkpO1xufVxuXG5leHBvcnQgeyBzZXRVcExvYWRhYmxlQ29tcG9uZW50IGFzIGEsIGNvbXBvbmVudExvYWRlZCBhcyBiLCBjb21wb25lbnRGb2N1c2FibGUgYXMgYywgc2V0Q29tcG9uZW50TG9hZGVkIGFzIHMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBzIGFzIHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzLCBpIGFzIGZvY3VzRWxlbWVudEluR3JvdXAsIGsgYXMgZm9jdXNFbGVtZW50IH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRGb2N1c2FibGUgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyB3IGFzIHdhdGNoR2xvYmFsQXR0cmlidXRlcywgdSBhcyB1bndhdGNoR2xvYmFsQXR0cmlidXRlcyB9IGZyb20gJy4vZ2xvYmFsQXR0cmlidXRlcy5qcyc7XG5cbmNvbnN0IG1lbnVDc3MgPSBcIjpob3N0e2Rpc3BsYXk6ZmxleH11bHttYXJnaW46MHB4O2Rpc3BsYXk6aW5saW5lLWZsZXg7YmxvY2stc2l6ZToxMDAlO2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nOjBweH06aG9zdChbbGF5b3V0PXZlcnRpY2FsXSkgdWx7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7ZmxleC1kaXJlY3Rpb246Y29sdW1ufTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBDYWxjaXRlTWVudSA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5tZW51SXRlbXMgPSBbXTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5oYW5kbGVNZW51U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5tZW51SXRlbXMgPSBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cyhldmVudCk7XG4gICAgICB0aGlzLnNldE1lbnVJdGVtTGF5b3V0KHRoaXMubWVudUl0ZW1zLCB0aGlzLmxheW91dCk7XG4gICAgfTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGF5b3V0ID0gXCJob3Jpem9udGFsXCI7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuZ2xvYmFsQXR0cmlidXRlcyA9IHtcbiAgICAgIHJvbGU6IFwibWVudWJhclwiLFxuICAgIH07XG4gIH1cbiAgaGFuZGxlTGF5b3V0Q2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRNZW51SXRlbUxheW91dCh0aGlzLm1lbnVJdGVtcywgdmFsdWUpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHdhdGNoR2xvYmFsQXR0cmlidXRlcyh0aGlzLCBbXCJyb2xlXCJdKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdW53YXRjaEdsb2JhbEF0dHJpYnV0ZXModGhpcyk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50J3MgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY2FsY2l0ZUludGVybmFsTmF2TWVudUl0ZW1LZXlFdmVudChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBzdWJtZW51SXRlbXMgPSBldmVudC5kZXRhaWwuY2hpbGRyZW47XG4gICAgY29uc3Qga2V5ID0gZXZlbnQuZGV0YWlsLmV2ZW50LmtleTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoa2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICBpZiAodGFyZ2V0LmxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGZvY3VzRWxlbWVudEluR3JvdXAodGhpcy5tZW51SXRlbXMsIHRhcmdldCwgXCJuZXh0XCIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoZXZlbnQuZGV0YWlsLmlzU3VibWVudU9wZW4pIHtcbiAgICAgICAgICBzdWJtZW51SXRlbXNbMF0uc2V0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChrZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICBpZiAodGhpcy5sYXlvdXQgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBmb2N1c0VsZW1lbnRJbkdyb3VwKHRoaXMubWVudUl0ZW1zLCB0YXJnZXQsIFwicHJldmlvdXNcIiwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChldmVudC5kZXRhaWwuaXNTdWJtZW51T3Blbikge1xuICAgICAgICAgIHN1Ym1lbnVJdGVtc1tzdWJtZW51SXRlbXMubGVuZ3RoIC0gMV0uc2V0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChrZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICBpZiAodGhpcy5sYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGZvY3VzRWxlbWVudEluR3JvdXAodGhpcy5tZW51SXRlbXMsIHRhcmdldCwgXCJuZXh0XCIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoZXZlbnQuZGV0YWlsLmlzU3VibWVudU9wZW4pIHtcbiAgICAgICAgICBzdWJtZW51SXRlbXNbMF0uc2V0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChrZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgIGlmICh0aGlzLmxheW91dCA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgZm9jdXNFbGVtZW50SW5Hcm91cCh0aGlzLm1lbnVJdGVtcywgdGFyZ2V0LCBcInByZXZpb3VzXCIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoZXZlbnQuZGV0YWlsLmlzU3VibWVudU9wZW4pIHtcbiAgICAgICAgICB0aGlzLmZvY3VzUGFyZW50RWxlbWVudChldmVudC50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5mb2N1c1BhcmVudEVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBmb2N1c1BhcmVudEVsZW1lbnQoZWwpIHtcbiAgICBjb25zdCBwYXJlbnRFbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKHBhcmVudEVsKSB7XG4gICAgICBmb2N1c0VsZW1lbnQocGFyZW50RWwpO1xuICAgICAgcGFyZW50RWwub3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzZXRNZW51SXRlbUxheW91dChpdGVtcywgbGF5b3V0KSB7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5sYXlvdXQgPSBsYXlvdXQ7XG4gICAgICBpZiAodGhpcy5nbG9iYWxBdHRyaWJ1dGVzLnJvbGUgPT09IFwibWVudWJhclwiKSB7XG4gICAgICAgIGl0ZW0uaXNUb3BMZXZlbEl0ZW0gPSB0cnVlO1xuICAgICAgICBpdGVtLnRvcExldmVsTWVudUxheW91dCA9IHRoaXMubGF5b3V0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJ1bFwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVsLCAuLi50aGlzLmdsb2JhbEF0dHJpYnV0ZXMgfSwgaChcInNsb3RcIiwgeyBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlTWVudVNsb3RDaGFuZ2UgfSkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImxheW91dFwiOiBbXCJoYW5kbGVMYXlvdXRDaGFuZ2VcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIG1lbnVDc3M7IH1cbn0sIFsxNywgXCJjYWxjaXRlLW1lbnVcIiwge1xuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwibGF5b3V0XCI6IFs1MTNdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwiZ2xvYmFsQXR0cmlidXRlc1wiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XVxuICB9LCBbWzAsIFwiY2FsY2l0ZUludGVybmFsTWVudUl0ZW1LZXlFdmVudFwiLCBcImNhbGNpdGVJbnRlcm5hbE5hdk1lbnVJdGVtS2V5RXZlbnRcIl1dXSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLW1lbnVcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtbWVudVwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIENhbGNpdGVNZW51KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBDYWxjaXRlTWVudSBhcyBDLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==