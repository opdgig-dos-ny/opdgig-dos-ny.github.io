"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-notice_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-notice.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-notice.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteNotice: () => (/* binding */ CalciteNotice),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _resources_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources.js */ "./node_modules/@esri/calcite-components/dist/components/resources.js");
/* harmony import */ var _openCloseComponent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./openCloseComponent.js */ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */











const SLOTS = {
  title: "title",
  message: "message",
  link: "link",
  actionsEnd: "actions-end",
};
const CSS = {
  actionsEnd: "actions-end",
  close: "notice-close",
  container: "container",
  content: "notice-content",
  icon: "notice-icon",
};

const noticeCss = ":host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:none;inline-size:100%;background-color:var(--calcite-ui-foreground-1);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;max-block-size:0;text-align:start;border-inline-start:0px solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host{display:flex}:host([open]) .container{pointer-events:auto;display:flex;max-block-size:100%;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-color:var(--calcite-ui-brand)}:host([kind=brand]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([kind=info]) .container{border-color:var(--calcite-ui-info)}:host([kind=info]) .container .notice-icon{color:var(--calcite-ui-info)}:host([kind=danger]) .container{border-color:var(--calcite-ui-danger)}:host([kind=danger]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([kind=success]) .container{border-color:var(--calcite-ui-success)}:host([kind=success]) .container .notice-icon{color:var(--calcite-ui-success)}:host([kind=warning]) .container{border-color:var(--calcite-ui-warning)}:host([kind=warning]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([hidden]){display:none}[hidden]{display:none}";

const Notice = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteNoticeBeforeClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteNoticeBeforeClose", 6);
    this.calciteNoticeBeforeOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteNoticeBeforeOpen", 6);
    this.calciteNoticeClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteNoticeClose", 6);
    this.calciteNoticeOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteNoticeOpen", 6);
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.close = () => {
      this.open = false;
    };
    this.openTransitionProp = "opacity";
    this.open = false;
    this.kind = "brand";
    this.closable = false;
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.scale = "m";
    this.width = "auto";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  openHandler() {
    (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_6__.o)(this);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  updateRequestedIcon() {
    this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.h)(_resources_js__WEBPACK_IMPORTED_MODULE_5__.K, this.icon, this.kind);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.h)(_resources_js__WEBPACK_IMPORTED_MODULE_5__.K, this.icon, this.kind);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
    if (this.open) {
      (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_6__.o)(this);
    }
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  render() {
    const { el } = this;
    const closeButton = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("button", { "aria-label": this.messages.close, class: CSS.close, onClick: this.close,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.closeButton = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-icon", { icon: "x", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_7__.g)(this.scale) })));
    const hasActionEnd = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.actionsEnd);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: CSS.container,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setTransitionEl }, this.requestedIcon ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: CSS.icon }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-icon", { flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_7__.g)(this.scale) }))) : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: CSS.content }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.title }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.message }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.link })), hasActionEnd ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: CSS.actionsEnd }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.actionsEnd }))) : null, this.closable ? closeButton : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    const noticeLinkEl = this.el.querySelector("calcite-link");
    if (!this.closeButton && !noticeLinkEl) {
      return;
    }
    if (noticeLinkEl) {
      return noticeLinkEl.setFocus();
    }
    else if (this.closeButton) {
      this.closeButton.focus();
    }
  }
  onBeforeClose() {
    this.calciteNoticeBeforeClose.emit();
  }
  onBeforeOpen() {
    this.calciteNoticeBeforeOpen.emit();
  }
  onClose() {
    this.calciteNoticeClose.emit();
  }
  onOpen() {
    this.calciteNoticeOpen.emit();
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "open": ["openHandler"],
    "messageOverrides": ["onMessagesChange"],
    "icon": ["updateRequestedIcon"],
    "kind": ["updateRequestedIcon"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return noticeCss; }
}, [1, "calcite-notice", {
    "open": [1540],
    "kind": [513],
    "closable": [516],
    "icon": [520],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "scale": [513],
    "width": [513],
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
  const components = ["calcite-notice", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-notice":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Notice);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteNotice = Notice;
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvM2JhN2EyMTBhZWQzZTY0MGFjZDkyMWFkNDE3NmU4YzguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RztBQUNZO0FBQ25EO0FBQzRDO0FBQ2hDO0FBQ29DO0FBQ2xFO0FBQzBCO0FBQ3ZCO0FBQ0k7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyw0Q0FBNEMsNkNBQTZDLDhHQUE4RyxzQkFBc0Isc0NBQXNDLGtCQUFrQixrSEFBa0gsc0JBQXNCLHNDQUFzQyxrQkFBa0IseUNBQXlDLHNCQUFzQixzQ0FBc0Msa0JBQWtCLCtCQUErQixlQUFlLGlCQUFpQiw2Q0FBNkMsMENBQTBDLDhHQUE4RyxzQkFBc0IscUNBQXFDLGtCQUFrQixrSEFBa0gsc0JBQXNCLHNDQUFzQyxrQkFBa0IseUNBQXlDLHNCQUFzQixzQ0FBc0Msa0JBQWtCLGlCQUFpQiwwQ0FBMEMsNkNBQTZDLDhHQUE4RyxzQkFBc0IscUNBQXFDLGtCQUFrQixrSEFBa0gsc0JBQXNCLHFDQUFxQyxrQkFBa0IseUNBQXlDLHNCQUFzQixxQ0FBcUMsa0JBQWtCLG9CQUFvQiw0QkFBNEIsb0JBQW9CLDJCQUEyQixvQkFBb0IsNEJBQTRCLE1BQU0sbUJBQW1CLGFBQWEscUJBQXFCLG1CQUFtQix3Q0FBd0MsV0FBVyxvQkFBb0IsaUJBQWlCLHNCQUFzQixhQUFhLGlCQUFpQixnREFBZ0QsVUFBVSw2RkFBNkYsaUJBQWlCLGlCQUFpQiw4QkFBOEIsK0JBQStCLGNBQWMsMEJBQTBCLG9CQUFvQix5RUFBeUUscVBBQXFQLE1BQU0sYUFBYSx5QkFBeUIsb0JBQW9CLGFBQWEsb0JBQW9CLG1CQUFtQixpQkFBaUIsVUFBVSxtRkFBbUYsaUdBQWlHLHVHQUF1Ryw0RUFBNEUsV0FBVyw4Q0FBOEMsK0JBQStCLGdGQUFnRixX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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJDQUFxQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFOEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9MOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxRTtBQUNoQjs7QUFFckQ7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3RUFBd0U7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0VBQXdFO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQixJQUFJLG1GQUFXO0FBQ2YsR0FBRztBQUNIOztBQUV5RiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLW5vdGljZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29uZGl0aW9uYWxTbG90LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmRpdGlvbmFsU2xvdC5qcyc7XG5pbXBvcnQgeyBoIGFzIHNldFJlcXVlc3RlZEljb24sIGcgYXMgZ2V0U2xvdHRlZCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCB1IGFzIHVwZGF0ZU1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgSyBhcyBLaW5kSWNvbnMgfSBmcm9tICcuL3Jlc291cmNlcy5qcyc7XG5pbXBvcnQgeyBvIGFzIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuQ2xvc2VDb21wb25lbnQuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRJY29uU2NhbGUgfSBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMiB9IGZyb20gJy4vaWNvbi5qcyc7XG5cbmNvbnN0IFNMT1RTID0ge1xuICB0aXRsZTogXCJ0aXRsZVwiLFxuICBtZXNzYWdlOiBcIm1lc3NhZ2VcIixcbiAgbGluazogXCJsaW5rXCIsXG4gIGFjdGlvbnNFbmQ6IFwiYWN0aW9ucy1lbmRcIixcbn07XG5jb25zdCBDU1MgPSB7XG4gIGFjdGlvbnNFbmQ6IFwiYWN0aW9ucy1lbmRcIixcbiAgY2xvc2U6IFwibm90aWNlLWNsb3NlXCIsXG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgY29udGVudDogXCJub3RpY2UtY29udGVudFwiLFxuICBpY29uOiBcIm5vdGljZS1pY29uXCIsXG59O1xuXG5jb25zdCBub3RpY2VDc3MgPSBcIjpob3N0KFtzY2FsZT1zXSl7LS1jYWxjaXRlLW5vdGljZS1zcGFjaW5nLXRva2VuLXNtYWxsOjAuNXJlbTstLWNhbGNpdGUtbm90aWNlLXNwYWNpbmctdG9rZW4tbGFyZ2U6MC43NXJlbX06aG9zdChbc2NhbGU9c10pIC5jb250YWluZXIgc2xvdFtuYW1lPXRpdGxlXTo6c2xvdHRlZCgqKSw6aG9zdChbc2NhbGU9c10pIC5jb250YWluZXIgKjo6c2xvdHRlZChbc2xvdD10aXRsZV0pe21hcmdpbi1ibG9jazowLjEyNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1zXSkgLmNvbnRhaW5lciBzbG90W25hbWU9bWVzc2FnZV06OnNsb3R0ZWQoKiksOmhvc3QoW3NjYWxlPXNdKSAuY29udGFpbmVyICo6OnNsb3R0ZWQoW3Nsb3Q9bWVzc2FnZV0pe21hcmdpbi1ibG9jazowLjEyNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1zXSkgOjpzbG90dGVkKGNhbGNpdGUtbGluayl7bWFyZ2luLWJsb2NrOjAuMTI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPXNdKSAubm90aWNlLWNsb3Nle3BhZGRpbmc6MC41cmVtfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLW5vdGljZS1zcGFjaW5nLXRva2VuLXNtYWxsOjAuNzVyZW07LS1jYWxjaXRlLW5vdGljZS1zcGFjaW5nLXRva2VuLWxhcmdlOjFyZW19Omhvc3QoW3NjYWxlPW1dKSAuY29udGFpbmVyIHNsb3RbbmFtZT10aXRsZV06OnNsb3R0ZWQoKiksOmhvc3QoW3NjYWxlPW1dKSAuY29udGFpbmVyICo6OnNsb3R0ZWQoW3Nsb3Q9dGl0bGVdKXttYXJnaW4tYmxvY2s6MC4xMjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1tXSkgLmNvbnRhaW5lciBzbG90W25hbWU9bWVzc2FnZV06OnNsb3R0ZWQoKiksOmhvc3QoW3NjYWxlPW1dKSAuY29udGFpbmVyICo6OnNsb3R0ZWQoW3Nsb3Q9bWVzc2FnZV0pe21hcmdpbi1ibG9jazowLjEyNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1tXSkgOjpzbG90dGVkKGNhbGNpdGUtbGluayl7bWFyZ2luLWJsb2NrOjAuMTI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPWxdKXstLWNhbGNpdGUtbm90aWNlLXNwYWNpbmctdG9rZW4tc21hbGw6MXJlbTstLWNhbGNpdGUtbm90aWNlLXNwYWNpbmctdG9rZW4tbGFyZ2U6MS4yNXJlbX06aG9zdChbc2NhbGU9bF0pIC5jb250YWluZXIgc2xvdFtuYW1lPXRpdGxlXTo6c2xvdHRlZCgqKSw6aG9zdChbc2NhbGU9bF0pIC5jb250YWluZXIgKjo6c2xvdHRlZChbc2xvdD10aXRsZV0pe21hcmdpbi1ibG9jazowLjEyNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMSk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPWxdKSAuY29udGFpbmVyIHNsb3RbbmFtZT1tZXNzYWdlXTo6c2xvdHRlZCgqKSw6aG9zdChbc2NhbGU9bF0pIC5jb250YWluZXIgKjo6c2xvdHRlZChbc2xvdD1tZXNzYWdlXSl7bWFyZ2luLWJsb2NrOjAuMTI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjM3NX06aG9zdChbc2NhbGU9bF0pIDo6c2xvdHRlZChjYWxjaXRlLWxpbmspe21hcmdpbi1ibG9jazowLjEyNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3dpZHRoPWF1dG9dKXstLWNhbGNpdGUtbm90aWNlLXdpZHRoOmF1dG99Omhvc3QoW3dpZHRoPWhhbGZdKXstLWNhbGNpdGUtbm90aWNlLXdpZHRoOjUwJX06aG9zdChbd2lkdGg9ZnVsbF0pey0tY2FsY2l0ZS1ub3RpY2Utd2lkdGg6MTAwJX06aG9zdHttYXJnaW4taW5saW5lOmF1dG87ZGlzcGxheTpub25lO21heC1pbmxpbmUtc2l6ZToxMDAlO2FsaWduLWl0ZW1zOmNlbnRlcjtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLW5vdGljZS13aWR0aCl9LmNvbnRhaW5lcntwb2ludGVyLWV2ZW50czpub25lO21hcmdpbi1ibG9jazowcHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6bm9uZTtpbmxpbmUtc2l6ZToxMDAlO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO29wYWNpdHk6MDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwczttYXgtYmxvY2stc2l6ZTowO3RleHQtYWxpZ246c3RhcnQ7Ym9yZGVyLWlubGluZS1zdGFydDowcHggc29saWQ7Ym94LXNoYWRvdzowIDAgMCAwIHRyYW5zcGFyZW50fS5ub3RpY2UtY2xvc2V7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH0ubm90aWNlLWNsb3NlOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX06aG9zdHtkaXNwbGF5OmZsZXh9Omhvc3QoW29wZW5dKSAuY29udGFpbmVye3BvaW50ZXItZXZlbnRzOmF1dG87ZGlzcGxheTpmbGV4O21heC1ibG9jay1zaXplOjEwMCU7YWxpZ24taXRlbXM6Y2VudGVyO2JvcmRlci13aWR0aDoycHg7b3BhY2l0eToxOy0tdHctc2hhZG93OjAgNHB4IDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7LS10dy1zaGFkb3ctY29sb3JlZDowIDRweCA4cHggLTFweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDJweCA0cHggLTFweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX0uY29udGFpbmVyIHNsb3RbbmFtZT10aXRsZV06OnNsb3R0ZWQoKiksLmNvbnRhaW5lciAqOjpzbG90dGVkKFtzbG90PXRpdGxlXSl7bWFyZ2luOjBweDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5jb250YWluZXIgc2xvdFtuYW1lPW1lc3NhZ2VdOjpzbG90dGVkKCopLC5jb250YWluZXIgKjo6c2xvdHRlZChbc2xvdD1tZXNzYWdlXSl7bWFyZ2luOjBweDtkaXNwbGF5OmlubGluZTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLWNhbGNpdGUtbm90aWNlLXNwYWNpbmctdG9rZW4tc21hbGwpfS5ub3RpY2UtY29udGVudHtib3gtc2l6aW5nOmJvcmRlci1ib3g7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS1ub3RpY2Utc3BhY2luZy10b2tlbi1sYXJnZSk7ZmxleDowIDAgYXV0bztkaXNwbGF5OmZsZXg7bWluLWlubGluZS1zaXplOjBweDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkO2ZsZXg6MSAxIDA7cGFkZGluZy1ibG9jazp2YXIoLS1jYWxjaXRlLW5vdGljZS1zcGFjaW5nLXRva2VuLXNtYWxsKTtwYWRkaW5nLWlubGluZTowIHZhcigtLWNhbGNpdGUtbm90aWNlLXNwYWNpbmctdG9rZW4tc21hbGwpfS5ub3RpY2UtY29udGVudDpmaXJzdC1vZi10eXBlOm5vdCg6b25seS1jaGlsZCl7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tY2FsY2l0ZS1ub3RpY2Utc3BhY2luZy10b2tlbi1sYXJnZSl9Lm5vdGljZS1jb250ZW50Om9ubHktb2YtdHlwZXtwYWRkaW5nLWJsb2NrOnZhcigtLWNhbGNpdGUtbm90aWNlLXNwYWNpbmctdG9rZW4tc21hbGwpO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtbm90aWNlLXNwYWNpbmctdG9rZW4tbGFyZ2UpfS5ub3RpY2UtaWNvbntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwcztwYWRkaW5nLWJsb2NrOnZhcigtLWNhbGNpdGUtbm90aWNlLXNwYWNpbmctdG9rZW4tc21hbGwpO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtbm90aWNlLXNwYWNpbmctdG9rZW4tbGFyZ2UpO2ZsZXg6MCAwIGF1dG99Lm5vdGljZS1jbG9zZXtkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaDtib3JkZXItc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHg7Ym94LXNpemluZzpib3JkZXItYm94O3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1ub3RpY2Utc3BhY2luZy10b2tlbi1zbWFsbCk7cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS1ub3RpY2Utc3BhY2luZy10b2tlbi1sYXJnZSk7ZmxleDowIDAgYXV0bzstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX0ubm90aWNlLWNsb3NlOmhvdmVyLC5ub3RpY2UtY2xvc2U6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5ub3RpY2UtY2xvc2U6YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS5hY3Rpb25zLWVuZHtkaXNwbGF5OmZsZXg7YWxpZ24tc2VsZjpzdHJldGNofTpob3N0KFtraW5kPWJyYW5kXSkgLmNvbnRhaW5lcntib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW2tpbmQ9YnJhbmRdKSAuY29udGFpbmVyIC5ub3RpY2UtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChba2luZD1pbmZvXSkgLmNvbnRhaW5lcntib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1pbmZvKX06aG9zdChba2luZD1pbmZvXSkgLmNvbnRhaW5lciAubm90aWNlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1pbmZvKX06aG9zdChba2luZD1kYW5nZXJdKSAuY29udGFpbmVye2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9Omhvc3QoW2tpbmQ9ZGFuZ2VyXSkgLmNvbnRhaW5lciAubm90aWNlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFtraW5kPXN1Y2Nlc3NdKSAuY29udGFpbmVye2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXN1Y2Nlc3MpfTpob3N0KFtraW5kPXN1Y2Nlc3NdKSAuY29udGFpbmVyIC5ub3RpY2UtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXN1Y2Nlc3MpfTpob3N0KFtraW5kPXdhcm5pbmddKSAuY29udGFpbmVye2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXdhcm5pbmcpfTpob3N0KFtraW5kPXdhcm5pbmddKSAuY29udGFpbmVyIC5ub3RpY2UtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXdhcm5pbmcpfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBOb3RpY2UgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZU5vdGljZUJlZm9yZUNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTm90aWNlQmVmb3JlQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlTm90aWNlQmVmb3JlT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZU5vdGljZUJlZm9yZU9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlTm90aWNlQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVOb3RpY2VDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVOb3RpY2VPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTm90aWNlT3BlblwiLCA2KTtcbiAgICB0aGlzLnNldFRyYW5zaXRpb25FbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy50cmFuc2l0aW9uRWwgPSBlbDtcbiAgICB9O1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgfTtcbiAgICB0aGlzLm9wZW5UcmFuc2l0aW9uUHJvcCA9IFwib3BhY2l0eVwiO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMua2luZCA9IFwiYnJhbmRcIjtcbiAgICB0aGlzLmNsb3NhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5pY29uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy53aWR0aCA9IFwiYXV0b1wiO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIG9wZW5IYW5kbGVyKCkge1xuICAgIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICB1cGRhdGVSZXF1ZXN0ZWRJY29uKCkge1xuICAgIHRoaXMucmVxdWVzdGVkSWNvbiA9IHNldFJlcXVlc3RlZEljb24oS2luZEljb25zLCB0aGlzLmljb24sIHRoaXMua2luZCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgdGhpcy5yZXF1ZXN0ZWRJY29uID0gc2V0UmVxdWVzdGVkSWNvbihLaW5kSWNvbnMsIHRoaXMuaWNvbiwgdGhpcy5raW5kKTtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMuY2xvc2UsIGNsYXNzOiBDU1MuY2xvc2UsIG9uQ2xpY2s6IHRoaXMuY2xvc2UsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmNsb3NlQnV0dG9uID0gZWwpIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcInhcIiwgc2NhbGU6IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKSB9KSkpO1xuICAgIGNvbnN0IGhhc0FjdGlvbkVuZCA9IGdldFNsb3R0ZWQoZWwsIFNMT1RTLmFjdGlvbnNFbmQpO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGFpbmVyLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRUcmFuc2l0aW9uRWwgfSwgdGhpcy5yZXF1ZXN0ZWRJY29uID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmljb24gfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGZsaXBSdGw6IHRoaXMuaWNvbkZsaXBSdGwsIGljb246IHRoaXMucmVxdWVzdGVkSWNvbiwgc2NhbGU6IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKSB9KSkpIDogbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudCB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLnRpdGxlIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLm1lc3NhZ2UgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMubGluayB9KSksIGhhc0FjdGlvbkVuZCA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5hY3Rpb25zRW5kIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuYWN0aW9uc0VuZCB9KSkpIDogbnVsbCwgdGhpcy5jbG9zYWJsZSA/IGNsb3NlQnV0dG9uIDogbnVsbCkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gICAgY29uc3Qgbm90aWNlTGlua0VsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKFwiY2FsY2l0ZS1saW5rXCIpO1xuICAgIGlmICghdGhpcy5jbG9zZUJ1dHRvbiAmJiAhbm90aWNlTGlua0VsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub3RpY2VMaW5rRWwpIHtcbiAgICAgIHJldHVybiBub3RpY2VMaW5rRWwuc2V0Rm9jdXMoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5jbG9zZUJ1dHRvbikge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5mb2N1cygpO1xuICAgIH1cbiAgfVxuICBvbkJlZm9yZUNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZU5vdGljZUJlZm9yZUNsb3NlLmVtaXQoKTtcbiAgfVxuICBvbkJlZm9yZU9wZW4oKSB7XG4gICAgdGhpcy5jYWxjaXRlTm90aWNlQmVmb3JlT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVOb3RpY2VDbG9zZS5lbWl0KCk7XG4gIH1cbiAgb25PcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZU5vdGljZU9wZW4uZW1pdCgpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm9wZW5cIjogW1wib3BlbkhhbmRsZXJcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJpY29uXCI6IFtcInVwZGF0ZVJlcXVlc3RlZEljb25cIl0sXG4gICAgXCJraW5kXCI6IFtcInVwZGF0ZVJlcXVlc3RlZEljb25cIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIG5vdGljZUNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1ub3RpY2VcIiwge1xuICAgIFwib3BlblwiOiBbMTU0MF0sXG4gICAgXCJraW5kXCI6IFs1MTNdLFxuICAgIFwiY2xvc2FibGVcIjogWzUxNl0sXG4gICAgXCJpY29uXCI6IFs1MjBdLFxuICAgIFwiaWNvbkZsaXBSdGxcIjogWzUxNiwgXCJpY29uLWZsaXAtcnRsXCJdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJ3aWR0aFwiOiBbNTEzXSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLW5vdGljZVwiLCBcImNhbGNpdGUtaWNvblwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1ub3RpY2VcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBOb3RpY2UpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlTm90aWNlID0gTm90aWNlO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZU5vdGljZSwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZm9yY2VVcGRhdGUgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuXG5jb25zdCBvYnNlcnZlZCA9IG5ldyBTZXQoKTtcbmxldCBtdXRhdGlvbk9ic2VydmVyO1xuY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0geyBjaGlsZExpc3Q6IHRydWUgfTtcbi8qKlxuICogSGVscGVyIHRvIHNldCB1cCBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGNvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBpZiAoIW11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCBwcm9jZXNzTXV0YXRpb25zKTtcbiAgfVxuICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoY29tcG9uZW50LmVsLCBvYnNlcnZlck9wdGlvbnMpO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gdGVhciBkb3duIGEgY29uZGl0aW9uYWwgc2xvdCBjb21wb25lbnQgb24gZGlzY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQGRlcHJlY2F0ZWQgVXNlIGBvblNsb3RjaGFuZ2VgIGV2ZW50IHdpdGggYHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnRgIERPTSB1dGlsaXR5IGluc3RlYWQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNFbGVtZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCl9IC8+fVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIG9ic2VydmVkLmRlbGV0ZShjb21wb25lbnQuZWwpO1xuICAvLyB3ZSBleHBsaWNpdGx5IHByb2Nlc3MgcXVldWVkIG11dGF0aW9ucyBhbmQgZGlzY29ubmVjdCBhbmQgcmVjb25uZWN0XG4gIC8vIHRoZSBvYnNlcnZlciB1bnRpbCBNdXRhdGlvbk9ic2VydmVyIGdldHMgYW4gYHVub2JzZXJ2ZWAgbWV0aG9kXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMTI2XG4gIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25PYnNlcnZlci50YWtlUmVjb3JkcygpKTtcbiAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIGZvciAoY29uc3QgW2VsZW1lbnRdIG9mIG9ic2VydmVkLmVudHJpZXMoKSkge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCBvYnNlcnZlck9wdGlvbnMpO1xuICB9XG59XG5mdW5jdGlvbiBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9ucykge1xuICBtdXRhdGlvbnMuZm9yRWFjaCgoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGZvcmNlVXBkYXRlKHRhcmdldCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGMsIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgYXMgZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9