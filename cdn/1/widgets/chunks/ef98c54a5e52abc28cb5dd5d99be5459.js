"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-shell_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-shell.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-shell.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteShell: () => (/* binding */ CalciteShell),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const CSS = {
  main: "main",
  content: "content",
  contentBehind: "content--behind",
  footer: "footer",
  positionedSlotWrapper: "positioned-slot-wrapper",
  container: "container",
  contentBehindCenterContent: "center-content",
};
const SLOTS = {
  centerRow: "center-row",
  panelStart: "panel-start",
  panelEnd: "panel-end",
  panelTop: "panel-top",
  panelBottom: "panel-bottom",
  header: "header",
  footer: "footer",
  alerts: "alerts",
  sheets: "sheets",
  modals: "modals",
};

const shellCss = ":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:absolute;inset:0px;display:flex;block-size:100%;inline-size:100%;flex-direction:column;overflow:hidden;--calcite-shell-tip-spacing:26vw}.main{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;flex-direction:row;justify-content:space-between;overflow:hidden}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;overflow:auto}.content ::slotted(calcite-shell-center-row),.content ::slotted(calcite-panel),.content ::slotted(calcite-flow){flex:1 1 auto;align-self:stretch;max-block-size:unset}.content--behind{position:absolute;inset:0px;border-width:0px;z-index:calc(var(--calcite-app-z-index) - 1);display:initial}::slotted(calcite-shell-center-row){inline-size:unset}::slotted(.header .heading){font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal)}slot[name=panel-end]::slotted(calcite-shell-panel){margin-inline-start:auto}::slotted(calcite-panel),::slotted(calcite-flow){border-width:1px;border-inline-start-width:0px;border-inline-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3)}slot[name=center-row]::slotted(calcite-shell-center-row:not([detached])),slot[name=panel-top]::slotted(calcite-shell-center-row:not([detached])),slot[name=panel-bottom]::slotted(calcite-shell-center-row:not([detached])){border-inline-start-width:1px;border-inline-end-width:1px;border-color:var(--calcite-ui-border-3)}.center-content{display:flex;flex-direction:column;justify-content:space-between;block-size:100%;inline-size:100%;min-inline-size:0}::slotted(calcite-shell-center-row){flex:none;align-self:stretch}::slotted(calcite-tip-manager){position:absolute;z-index:var(--calcite-app-z-index-toast);box-sizing:border-box}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}::slotted(calcite-tip-manager){animation:in-up var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.25rem;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);inset-block-end:0.5rem;inset-inline:var(--calcite-shell-tip-spacing)}slot[name=center-row]::slotted(calcite-shell-center-row),slot[name=panel-bottom]::slotted(calcite-shell-center-row){margin-block-start:auto}slot[name=panel-top]::slotted(calcite-shell-center-row){margin-block-end:auto}.position-wrapper{position:absolute;pointer-events:none;inset:0}:host([hidden]){display:none}[hidden]{display:none}";

const Shell = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleHeaderSlotChange = (event) => {
      this.hasHeader = !!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.e)(event);
    };
    this.handleFooterSlotChange = (event) => {
      this.hasFooter = !!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.e)(event);
    };
    this.handleAlertsSlotChange = (event) => {
      this.hasAlerts = !!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.e)(event);
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.s)(event)?.map((el) => {
        if (el.nodeName === "CALCITE-ALERT") {
          el.slottedInShell = true;
        }
      });
    };
    this.handleSheetsSlotChange = (event) => {
      this.hasSheets = !!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.e)(event);
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.s)(event)?.map((el) => {
        if (el.nodeName === "CALCITE-SHEET") {
          el.slottedInShell = true;
        }
      });
    };
    this.handleModalsSlotChange = (event) => {
      this.hasModals = !!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.e)(event);
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.s)(event)?.map((el) => {
        if (el.nodeName === "CALCITE-MODAL") {
          el.slottedInShell = true;
        }
      });
    };
    this.contentBehind = false;
    this.hasHeader = false;
    this.hasFooter = false;
    this.hasAlerts = false;
    this.hasModals = false;
    this.hasSheets = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHeader() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { hidden: !this.hasHeader }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", { key: "header", name: SLOTS.header, onSlotchange: this.handleHeaderSlotChange })));
  }
  renderFooter() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: CSS.footer, hidden: !this.hasFooter, key: "footer" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", { name: SLOTS.footer, onSlotchange: this.handleFooterSlotChange })));
  }
  renderAlerts() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { hidden: !this.hasAlerts }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", { key: "alerts", name: SLOTS.alerts, onSlotchange: this.handleAlertsSlotChange })));
  }
  renderSheets() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { hidden: !this.hasSheets }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", { key: "sheets", name: SLOTS.sheets, onSlotchange: this.handleSheetsSlotChange })));
  }
  renderModals() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { hidden: !this.hasModals }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", { key: "modals", name: SLOTS.modals, onSlotchange: this.handleModalsSlotChange })));
  }
  renderContent() {
    const defaultSlotNode = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", { key: "default-slot" });
    const deprecatedCenterRowSlotNode = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", { key: "center-row-slot", name: SLOTS.centerRow }));
    const panelBottomSlotNode = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", { key: "panel-bottom-slot", name: SLOTS.panelBottom });
    const panelTopSlotNode = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", { key: "panel-top-slot", name: SLOTS.panelTop });
    const contentContainerKey = "content-container";
    const content = !!this.contentBehind
      ? [
        (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: {
            [CSS.content]: true,
            [CSS.contentBehind]: true,
          }, key: contentContainerKey }, defaultSlotNode),
        (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: CSS.contentBehindCenterContent }, panelTopSlotNode, panelBottomSlotNode, deprecatedCenterRowSlotNode),
      ]
      : [
        (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: CSS.content, key: contentContainerKey }, panelTopSlotNode, defaultSlotNode, panelBottomSlotNode, deprecatedCenterRowSlotNode),
      ];
    return content;
  }
  renderMain() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: CSS.main }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", { name: SLOTS.panelStart }), this.renderContent(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", { name: SLOTS.panelEnd })));
  }
  renderPositionedSlots() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: CSS.positionedSlotWrapper }, this.renderAlerts(), this.renderModals(), this.renderSheets()));
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, this.renderHeader(), this.renderMain(), this.renderFooter(), this.renderPositionedSlots()));
  }
  get el() { return this; }
  static get style() { return shellCss; }
}, [1, "calcite-shell", {
    "contentBehind": [516, "content-behind"],
    "hasHeader": [32],
    "hasFooter": [32],
    "hasAlerts": [32],
    "hasModals": [32],
    "hasSheets": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-shell"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-shell":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Shell);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteShell = Shell;
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZWY5OGM1NGE1ZTUyYWJjMjhjYjVkZDVkOTliZTU0NTkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NHO0FBQ2U7QUFDcEI7O0FBRWpHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isc0JBQXNCLGdEQUFnRCwrQkFBK0Isc0NBQXNDLFFBQVEsc0JBQXNCLE1BQU0sa0JBQWtCLFVBQVUsYUFBYSxnQkFBZ0IsaUJBQWlCLHNCQUFzQixnQkFBZ0IsaUNBQWlDLE1BQU0sa0JBQWtCLGFBQWEsZ0JBQWdCLGlCQUFpQixjQUFjLG1CQUFtQiw4QkFBOEIsZ0JBQWdCLFNBQVMsYUFBYSxnQkFBZ0IsaUJBQWlCLHNCQUFzQixpQkFBaUIsY0FBYyxnSEFBZ0gsY0FBYyxtQkFBbUIscUJBQXFCLGlCQUFpQixrQkFBa0IsVUFBVSxpQkFBaUIsNkNBQTZDLGdCQUFnQixvQ0FBb0Msa0JBQWtCLDRCQUE0QixzQ0FBc0Msa0JBQWtCLDhDQUE4QyxtREFBbUQseUJBQXlCLGlEQUFpRCxpQkFBaUIsOEJBQThCLDRCQUE0QixtQkFBbUIsd0NBQXdDLDROQUE0Tiw4QkFBOEIsNEJBQTRCLHdDQUF3QyxnQkFBZ0IsYUFBYSxzQkFBc0IsOEJBQThCLGdCQUFnQixpQkFBaUIsa0JBQWtCLG9DQUFvQyxVQUFVLG1CQUFtQiwrQkFBK0Isa0JBQWtCLHlDQUF5QyxzQkFBc0IsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQywrQkFBK0IsMEVBQTBFLHNCQUFzQixvRkFBb0YsbUdBQW1HLHVHQUF1Ryx1QkFBdUIsOENBQThDLG9IQUFvSCx3QkFBd0Isd0RBQXdELHNCQUFzQixrQkFBa0Isa0JBQWtCLG9CQUFvQixRQUFRLGdC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QUc7QUFDSDs7QUFFeUY7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RHpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlFQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtc2hlbGwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NvbmRpdGlvbmFsU2xvdC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvb2JzZXJ2ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGgsIEZyYWdtZW50IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmRpdGlvbmFsU2xvdC5qcyc7XG5pbXBvcnQgeyBlIGFzIHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQsIHMgYXMgc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMgfSBmcm9tICcuL2RvbS5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgbWFpbjogXCJtYWluXCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxuICBjb250ZW50QmVoaW5kOiBcImNvbnRlbnQtLWJlaGluZFwiLFxuICBmb290ZXI6IFwiZm9vdGVyXCIsXG4gIHBvc2l0aW9uZWRTbG90V3JhcHBlcjogXCJwb3NpdGlvbmVkLXNsb3Qtd3JhcHBlclwiLFxuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGNvbnRlbnRCZWhpbmRDZW50ZXJDb250ZW50OiBcImNlbnRlci1jb250ZW50XCIsXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIGNlbnRlclJvdzogXCJjZW50ZXItcm93XCIsXG4gIHBhbmVsU3RhcnQ6IFwicGFuZWwtc3RhcnRcIixcbiAgcGFuZWxFbmQ6IFwicGFuZWwtZW5kXCIsXG4gIHBhbmVsVG9wOiBcInBhbmVsLXRvcFwiLFxuICBwYW5lbEJvdHRvbTogXCJwYW5lbC1ib3R0b21cIixcbiAgaGVhZGVyOiBcImhlYWRlclwiLFxuICBmb290ZXI6IFwiZm9vdGVyXCIsXG4gIGFsZXJ0czogXCJhbGVydHNcIixcbiAgc2hlZXRzOiBcInNoZWV0c1wiLFxuICBtb2RhbHM6IFwibW9kYWxzXCIsXG59O1xuXG5jb25zdCBzaGVsbENzcyA9IFwiOmhvc3R7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpfTpob3N0ICp7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0e3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjBweDtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93OmhpZGRlbjstLWNhbGNpdGUtc2hlbGwtdGlwLXNwYWNpbmc6MjZ2d30ubWFpbntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7ZmxleDoxIDEgYXV0bztmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47b3ZlcmZsb3c6aGlkZGVufS5jb250ZW50e2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC13cmFwOm5vd3JhcDtvdmVyZmxvdzphdXRvfS5jb250ZW50IDo6c2xvdHRlZChjYWxjaXRlLXNoZWxsLWNlbnRlci1yb3cpLC5jb250ZW50IDo6c2xvdHRlZChjYWxjaXRlLXBhbmVsKSwuY29udGVudCA6OnNsb3R0ZWQoY2FsY2l0ZS1mbG93KXtmbGV4OjEgMSBhdXRvO2FsaWduLXNlbGY6c3RyZXRjaDttYXgtYmxvY2stc2l6ZTp1bnNldH0uY29udGVudC0tYmVoaW5ke3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjBweDtib3JkZXItd2lkdGg6MHB4O3otaW5kZXg6Y2FsYyh2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KSAtIDEpO2Rpc3BsYXk6aW5pdGlhbH06OnNsb3R0ZWQoY2FsY2l0ZS1zaGVsbC1jZW50ZXItcm93KXtpbmxpbmUtc2l6ZTp1bnNldH06OnNsb3R0ZWQoLmhlYWRlciAuaGVhZGluZyl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxLjM3NTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCl9c2xvdFtuYW1lPXBhbmVsLWVuZF06OnNsb3R0ZWQoY2FsY2l0ZS1zaGVsbC1wYW5lbCl7bWFyZ2luLWlubGluZS1zdGFydDphdXRvfTo6c2xvdHRlZChjYWxjaXRlLXBhbmVsKSw6OnNsb3R0ZWQoY2FsY2l0ZS1mbG93KXtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4O2JvcmRlci1pbmxpbmUtZW5kLXdpZHRoOjBweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfXNsb3RbbmFtZT1jZW50ZXItcm93XTo6c2xvdHRlZChjYWxjaXRlLXNoZWxsLWNlbnRlci1yb3c6bm90KFtkZXRhY2hlZF0pKSxzbG90W25hbWU9cGFuZWwtdG9wXTo6c2xvdHRlZChjYWxjaXRlLXNoZWxsLWNlbnRlci1yb3c6bm90KFtkZXRhY2hlZF0pKSxzbG90W25hbWU9cGFuZWwtYm90dG9tXTo6c2xvdHRlZChjYWxjaXRlLXNoZWxsLWNlbnRlci1yb3c6bm90KFtkZXRhY2hlZF0pKXtib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOjFweDtib3JkZXItaW5saW5lLWVuZC13aWR0aDoxcHg7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5jZW50ZXItY29udGVudHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO21pbi1pbmxpbmUtc2l6ZTowfTo6c2xvdHRlZChjYWxjaXRlLXNoZWxsLWNlbnRlci1yb3cpe2ZsZXg6bm9uZTthbGlnbi1zZWxmOnN0cmV0Y2h9OjpzbG90dGVkKGNhbGNpdGUtdGlwLW1hbmFnZXIpe3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC10b2FzdCk7Ym94LXNpemluZzpib3JkZXItYm94fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19OjpzbG90dGVkKGNhbGNpdGUtdGlwLW1hbmFnZXIpe2FuaW1hdGlvbjppbi11cCB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgZWFzZS1pbi1vdXQ7Ym9yZGVyLXJhZGl1czowLjI1cmVtOy0tdHctc2hhZG93OjAgNnB4IDIwcHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDEycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpOy0tdHctc2hhZG93LWNvbG9yZWQ6MCA2cHggMjBweCAtNHB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgNHB4IDEycHggLTJweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtpbnNldC1ibG9jay1lbmQ6MC41cmVtO2luc2V0LWlubGluZTp2YXIoLS1jYWxjaXRlLXNoZWxsLXRpcC1zcGFjaW5nKX1zbG90W25hbWU9Y2VudGVyLXJvd106OnNsb3R0ZWQoY2FsY2l0ZS1zaGVsbC1jZW50ZXItcm93KSxzbG90W25hbWU9cGFuZWwtYm90dG9tXTo6c2xvdHRlZChjYWxjaXRlLXNoZWxsLWNlbnRlci1yb3cpe21hcmdpbi1ibG9jay1zdGFydDphdXRvfXNsb3RbbmFtZT1wYW5lbC10b3BdOjpzbG90dGVkKGNhbGNpdGUtc2hlbGwtY2VudGVyLXJvdyl7bWFyZ2luLWJsb2NrLWVuZDphdXRvfS5wb3NpdGlvbi13cmFwcGVye3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7aW5zZXQ6MH06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgU2hlbGwgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuaGFuZGxlSGVhZGVyU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNIZWFkZXIgPSAhIXNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVGb290ZXJTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0Zvb3RlciA9ICEhc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUFsZXJ0c1Nsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzQWxlcnRzID0gISFzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICAgIHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzKGV2ZW50KT8ubWFwKChlbCkgPT4ge1xuICAgICAgICBpZiAoZWwubm9kZU5hbWUgPT09IFwiQ0FMQ0lURS1BTEVSVFwiKSB7XG4gICAgICAgICAgZWwuc2xvdHRlZEluU2hlbGwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU2hlZXRzU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNTaGVldHMgPSAhIXNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgICAgc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMoZXZlbnQpPy5tYXAoKGVsKSA9PiB7XG4gICAgICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gXCJDQUxDSVRFLVNIRUVUXCIpIHtcbiAgICAgICAgICBlbC5zbG90dGVkSW5TaGVsbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVNb2RhbHNTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc01vZGFscyA9ICEhc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgICBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cyhldmVudCk/Lm1hcCgoZWwpID0+IHtcbiAgICAgICAgaWYgKGVsLm5vZGVOYW1lID09PSBcIkNBTENJVEUtTU9EQUxcIikge1xuICAgICAgICAgIGVsLnNsb3R0ZWRJblNoZWxsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmNvbnRlbnRCZWhpbmQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0hlYWRlciA9IGZhbHNlO1xuICAgIHRoaXMuaGFzRm9vdGVyID0gZmFsc2U7XG4gICAgdGhpcy5oYXNBbGVydHMgPSBmYWxzZTtcbiAgICB0aGlzLmhhc01vZGFscyA9IGZhbHNlO1xuICAgIHRoaXMuaGFzU2hlZXRzID0gZmFsc2U7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckhlYWRlcigpIHtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBoaWRkZW46ICF0aGlzLmhhc0hlYWRlciB9LCBoKFwic2xvdFwiLCB7IGtleTogXCJoZWFkZXJcIiwgbmFtZTogU0xPVFMuaGVhZGVyLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlSGVhZGVyU2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckZvb3RlcigpIHtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmZvb3RlciwgaGlkZGVuOiAhdGhpcy5oYXNGb290ZXIsIGtleTogXCJmb290ZXJcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmZvb3Rlciwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUZvb3RlclNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJBbGVydHMoKSB7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgaGlkZGVuOiAhdGhpcy5oYXNBbGVydHMgfSwgaChcInNsb3RcIiwgeyBrZXk6IFwiYWxlcnRzXCIsIG5hbWU6IFNMT1RTLmFsZXJ0cywgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUFsZXJ0c1Nsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJTaGVldHMoKSB7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgaGlkZGVuOiAhdGhpcy5oYXNTaGVldHMgfSwgaChcInNsb3RcIiwgeyBrZXk6IFwic2hlZXRzXCIsIG5hbWU6IFNMT1RTLnNoZWV0cywgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZVNoZWV0c1Nsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJNb2RhbHMoKSB7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgaGlkZGVuOiAhdGhpcy5oYXNNb2RhbHMgfSwgaChcInNsb3RcIiwgeyBrZXk6IFwibW9kYWxzXCIsIG5hbWU6IFNMT1RTLm1vZGFscywgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZU1vZGFsc1Nsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGRlZmF1bHRTbG90Tm9kZSA9IGgoXCJzbG90XCIsIHsga2V5OiBcImRlZmF1bHQtc2xvdFwiIH0pO1xuICAgIGNvbnN0IGRlcHJlY2F0ZWRDZW50ZXJSb3dTbG90Tm9kZSA9IChoKFwic2xvdFwiLCB7IGtleTogXCJjZW50ZXItcm93LXNsb3RcIiwgbmFtZTogU0xPVFMuY2VudGVyUm93IH0pKTtcbiAgICBjb25zdCBwYW5lbEJvdHRvbVNsb3ROb2RlID0gaChcInNsb3RcIiwgeyBrZXk6IFwicGFuZWwtYm90dG9tLXNsb3RcIiwgbmFtZTogU0xPVFMucGFuZWxCb3R0b20gfSk7XG4gICAgY29uc3QgcGFuZWxUb3BTbG90Tm9kZSA9IGgoXCJzbG90XCIsIHsga2V5OiBcInBhbmVsLXRvcC1zbG90XCIsIG5hbWU6IFNMT1RTLnBhbmVsVG9wIH0pO1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJLZXkgPSBcImNvbnRlbnQtY29udGFpbmVyXCI7XG4gICAgY29uc3QgY29udGVudCA9ICEhdGhpcy5jb250ZW50QmVoaW5kXG4gICAgICA/IFtcbiAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgICAgICBbQ1NTLmNvbnRlbnRdOiB0cnVlLFxuICAgICAgICAgICAgW0NTUy5jb250ZW50QmVoaW5kXTogdHJ1ZSxcbiAgICAgICAgICB9LCBrZXk6IGNvbnRlbnRDb250YWluZXJLZXkgfSwgZGVmYXVsdFNsb3ROb2RlKSxcbiAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudEJlaGluZENlbnRlckNvbnRlbnQgfSwgcGFuZWxUb3BTbG90Tm9kZSwgcGFuZWxCb3R0b21TbG90Tm9kZSwgZGVwcmVjYXRlZENlbnRlclJvd1Nsb3ROb2RlKSxcbiAgICAgIF1cbiAgICAgIDogW1xuICAgICAgICBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250ZW50LCBrZXk6IGNvbnRlbnRDb250YWluZXJLZXkgfSwgcGFuZWxUb3BTbG90Tm9kZSwgZGVmYXVsdFNsb3ROb2RlLCBwYW5lbEJvdHRvbVNsb3ROb2RlLCBkZXByZWNhdGVkQ2VudGVyUm93U2xvdE5vZGUpLFxuICAgICAgXTtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICByZW5kZXJNYWluKCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MubWFpbiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLnBhbmVsU3RhcnQgfSksIHRoaXMucmVuZGVyQ29udGVudCgpLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLnBhbmVsRW5kIH0pKSk7XG4gIH1cbiAgcmVuZGVyUG9zaXRpb25lZFNsb3RzKCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MucG9zaXRpb25lZFNsb3RXcmFwcGVyIH0sIHRoaXMucmVuZGVyQWxlcnRzKCksIHRoaXMucmVuZGVyTW9kYWxzKCksIHRoaXMucmVuZGVyU2hlZXRzKCkpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEZyYWdtZW50LCBudWxsLCB0aGlzLnJlbmRlckhlYWRlcigpLCB0aGlzLnJlbmRlck1haW4oKSwgdGhpcy5yZW5kZXJGb290ZXIoKSwgdGhpcy5yZW5kZXJQb3NpdGlvbmVkU2xvdHMoKSkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHNoZWxsQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXNoZWxsXCIsIHtcbiAgICBcImNvbnRlbnRCZWhpbmRcIjogWzUxNiwgXCJjb250ZW50LWJlaGluZFwiXSxcbiAgICBcImhhc0hlYWRlclwiOiBbMzJdLFxuICAgIFwiaGFzRm9vdGVyXCI6IFszMl0sXG4gICAgXCJoYXNBbGVydHNcIjogWzMyXSxcbiAgICBcImhhc01vZGFsc1wiOiBbMzJdLFxuICAgIFwiaGFzU2hlZXRzXCI6IFszMl1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXNoZWxsXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXNoZWxsXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgU2hlbGwpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZVNoZWxsID0gU2hlbGw7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlU2hlbGwsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGZvcmNlVXBkYXRlIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcblxuY29uc3Qgb2JzZXJ2ZWQgPSBuZXcgU2V0KCk7XG5sZXQgbXV0YXRpb25PYnNlcnZlcjtcbmNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgcHJvY2Vzc011dGF0aW9ucyk7XG4gIH1cbiAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudC5lbCwgb2JzZXJ2ZXJPcHRpb25zKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBvYnNlcnZlZC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgLy8gd2UgZXhwbGljaXRseSBwcm9jZXNzIHF1ZXVlZCBtdXRhdGlvbnMgYW5kIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdFxuICAvLyB0aGUgb2JzZXJ2ZXIgdW50aWwgTXV0YXRpb25PYnNlcnZlciBnZXRzIGFuIGB1bm9ic2VydmVgIG1ldGhvZFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNlxuICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBmb3IgKGNvbnN0IFtlbGVtZW50XSBvZiBvYnNlcnZlZC5lbnRyaWVzKCkpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBmb3JjZVVwZGF0ZSh0YXJnZXQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBjLCBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG4vKipcbiAqIFRoaXMgdXRpbGl0eSBlbnN1cmVzIG9ic2VydmVycyBhcmUgY3JlYXRlZCBvbmx5IGZvciBicm93c2VyIGNvbnRleHRzLlxuICpcbiAqIEBwYXJhbSB0eXBlIC0gdGhlIHR5cGUgb2Ygb2JzZXJ2ZXIgdG8gY3JlYXRlXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSB0aGUgb2JzZXJ2ZXIgY2FsbGJhY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gdGhlIG9ic2VydmVyIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IE9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIodHlwZSk7XG4gIHJldHVybiBuZXcgT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIodHlwZSkge1xuICAvLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMTI2I2lzc3VlY29tbWVudC0xMDQ5ODE0OTQ4XG4gIGNsYXNzIEV4dGVuZGVkTXV0YXRpb25PYnNlcnZlciBleHRlbmRzIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaykge1xuICAgICAgc3VwZXIoY2FsbGJhY2spO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIG9ic2VydmUodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkucHVzaCh7IHRhcmdldCwgb3B0aW9ucyB9KTtcbiAgICAgIHJldHVybiBzdXBlci5vYnNlcnZlKHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHVub2JzZXJ2ZSh0YXJnZXQpIHtcbiAgICAgIGNvbnN0IG5ld09ic2VydmVkRW50cmllcyA9IHRoaXMub2JzZXJ2ZWRFbnRyeS5maWx0ZXIoKG9ic2VydmVkKSA9PiBvYnNlcnZlZC50YXJnZXQgIT09IHRhcmdldCk7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkgPSBbXTtcbiAgICAgIHRoaXMuY2FsbGJhY2soc3VwZXIudGFrZVJlY29yZHMoKSwgdGhpcyk7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgIG5ld09ic2VydmVkRW50cmllcy5mb3JFYWNoKChvYnNlcnZlZCkgPT4gdGhpcy5vYnNlcnZlKG9ic2VydmVkLnRhcmdldCwgb2JzZXJ2ZWQub3B0aW9ucykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHR5cGUgPT09IFwiaW50ZXJzZWN0aW9uXCJcbiAgICAgID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyXG4gICAgICA6IHR5cGUgPT09IFwibXV0YXRpb25cIlxuICAgICAgICA/IEV4dGVuZGVkTXV0YXRpb25PYnNlcnZlclxuICAgICAgICA6IHdpbmRvdy5SZXNpemVPYnNlcnZlcik7XG4gIH0pKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU9ic2VydmVyIGFzIGMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==