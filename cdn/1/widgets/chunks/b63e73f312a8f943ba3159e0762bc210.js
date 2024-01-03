"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_ExpandToggle_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/ExpandToggle.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/ExpandToggle.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ ExpandToggle),
/* harmony export */   a: () => (/* binding */ overflowActions),
/* harmony export */   b: () => (/* binding */ getOverflowCount),
/* harmony export */   g: () => (/* binding */ geActionDimensions),
/* harmony export */   o: () => (/* binding */ overflowActionsDebounceInMs),
/* harmony export */   q: () => (/* binding */ queryActions),
/* harmony export */   t: () => (/* binding */ toggleChildActionText)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _action_group_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-group.js */ "./node_modules/@esri/calcite-components/dist/components/action-group.js");
/* harmony import */ var _action_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-menu.js */ "./node_modules/@esri/calcite-components/dist/components/action-menu.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */





const overflowActionsDebounceInMs = 150;
const groupBufferPx = 2;
const getAverage = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
const geActionDimensions = (actions) => {
  const actionsNotSlotted = actions.filter((action) => action.slot !== _action_group_js__WEBPACK_IMPORTED_MODULE_1__.S.menuActions);
  const actionLen = actionsNotSlotted?.length;
  return {
    actionWidth: actionLen ? getAverage(actionsNotSlotted.map((action) => action.clientWidth || 0)) : 0,
    actionHeight: actionLen ? getAverage(actionsNotSlotted.map((action) => action.clientHeight || 0)) : 0,
  };
};
const getMaxActionCount = ({ width, actionWidth, layout, height, actionHeight, groupCount, }) => {
  const maxContainerPx = layout === "horizontal" ? width : height;
  const avgItemPx = layout === "horizontal" ? actionWidth : actionHeight;
  return Math.floor((maxContainerPx - groupCount * groupBufferPx) / avgItemPx);
};
const getOverflowCount = ({ layout, actionCount, actionWidth, width, actionHeight, height, groupCount, }) => {
  return Math.max(actionCount - getMaxActionCount({ width, actionWidth, layout, height, actionHeight, groupCount }), 0);
};
const queryActions = (el) => {
  return Array.from(el.querySelectorAll("calcite-action")).filter((action) => action.closest("calcite-action-menu") ? action.slot === _action_menu_js__WEBPACK_IMPORTED_MODULE_2__.S.trigger : true);
};
const overflowActions = ({ actionGroups, expanded, overflowCount, }) => {
  let needToSlotCount = overflowCount;
  actionGroups.reverse().forEach((group) => {
    let slottedWithinGroupCount = 0;
    const groupActions = queryActions(group).reverse();
    groupActions.forEach((groupAction) => {
      if (groupAction.slot === _action_group_js__WEBPACK_IMPORTED_MODULE_1__.S.menuActions) {
        groupAction.removeAttribute("slot");
        groupAction.textEnabled = expanded;
      }
    });
    if (needToSlotCount > 0) {
      groupActions.some((groupAction) => {
        const unslottedActions = groupActions.filter((action) => !action.slot);
        if (unslottedActions.length > 1 && groupActions.length > 2 && !groupAction.closest("calcite-action-menu")) {
          groupAction.textEnabled = true;
          groupAction.setAttribute("slot", _action_group_js__WEBPACK_IMPORTED_MODULE_1__.S.menuActions);
          slottedWithinGroupCount++;
          if (slottedWithinGroupCount > 1) {
            needToSlotCount--;
          }
        }
        return needToSlotCount < 1;
      });
    }
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.forceUpdate)(group);
  });
};

const ICONS = {
  chevronsLeft: "chevrons-left",
  chevronsRight: "chevrons-right",
};
function getCalcitePosition(position, el) {
  return position || el.closest("calcite-shell-panel")?.position || "start";
}
function toggleChildActionText({ el, expanded, }) {
  queryActions(el)
    .filter((el) => el.slot !== _action_group_js__WEBPACK_IMPORTED_MODULE_1__.S.menuActions)
    .forEach((action) => (action.textEnabled = expanded));
  el.querySelectorAll("calcite-action-group, calcite-action-menu").forEach((el) => (el.expanded = expanded));
}
const setTooltipReference = ({ tooltip, referenceElement, expanded, ref, }) => {
  if (tooltip) {
    tooltip.referenceElement = !expanded && referenceElement ? referenceElement : null;
  }
  if (ref) {
    ref(referenceElement);
  }
  return referenceElement;
};
const ExpandToggle = ({ expanded, expandText, collapseText, toggle, el, position, tooltip, ref, scale, }) => {
  const rtl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(el) === "rtl";
  const text = expanded ? collapseText : expandText;
  const icons = [ICONS.chevronsLeft, ICONS.chevronsRight];
  if (rtl) {
    icons.reverse();
  }
  const end = getCalcitePosition(position, el) === "end";
  const expandIcon = end ? icons[1] : icons[0];
  const collapseIcon = end ? icons[0] : icons[1];
  const actionNode = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("calcite-action", { icon: expanded ? expandIcon : collapseIcon, onClick: toggle, scale: scale, text: text, textEnabled: expanded, title: !expanded && !tooltip ? text : null, 
    // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
    ref: (referenceElement) => setTooltipReference({ tooltip, referenceElement, expanded, ref }) }));
  return actionNode;
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/action-group.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/action-group.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ActionGroup),
/* harmony export */   S: () => (/* binding */ SLOTS),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _action_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-menu.js */ "./node_modules/@esri/calcite-components/dist/components/action-menu.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _popover_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popover.js */ "./node_modules/@esri/calcite-components/dist/components/popover.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */












const SLOTS = {
  menuActions: "menu-actions",
  menuTooltip: "menu-tooltip",
};
const ICONS = {
  menu: "ellipsis",
};
const CSS = {
  container: "container",
};

const actionGroupCss = ":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;--calcite-action-group-columns:3;--calcite-action-group-gap:1px;--calcite-action-group-padding:1px}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns=\"1\"]){--calcite-action-group-columns:1}:host([columns=\"2\"]){--calcite-action-group-columns:2}:host([columns=\"3\"]){--calcite-action-group-columns:3}:host([columns=\"4\"]){--calcite-action-group-columns:4}:host([columns=\"5\"]){--calcite-action-group-columns:5}:host([columns=\"6\"]){--calcite-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:var(--calcite-ui-background);gap:var(--calcite-action-group-gap);padding:var(--calcite-action-group-gap);grid-template-columns:repeat(var(--calcite-action-group-columns), auto)}:host([hidden]){display:none}[hidden]{display:none}";

const ActionGroup = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setMenuOpen = (event) => {
      this.menuOpen = !!event.target.open;
    };
    this.handleMenuActionsSlotChange = (event) => {
      this.hasMenuActions = (0,_dom_js__WEBPACK_IMPORTED_MODULE_5__.e)(event);
    };
    this.expanded = false;
    this.label = undefined;
    this.layout = "vertical";
    this.columns = undefined;
    this.menuOpen = false;
    this.overlayPositioning = "absolute";
    this.scale = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
    this.hasMenuActions = false;
  }
  expandedHandler() {
    this.menuOpen = false;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.u)(this, this.effectiveLocale);
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
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------
  renderMenu() {
    const { expanded, menuOpen, scale, layout, messages, overlayPositioning, hasMenuActions } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-action-menu", { expanded: expanded, flipPlacements: ["left", "right"], hidden: !hasMenuActions, label: messages.more, onCalciteActionMenuOpen: this.setMenuOpen, open: menuOpen, overlayPositioning: overlayPositioning, placement: layout === "horizontal" ? "bottom-start" : "leading-start", scale: scale }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-action", { icon: ICONS.menu, scale: scale, slot: _action_menu_js__WEBPACK_IMPORTED_MODULE_4__.S.trigger, text: messages.more, textEnabled: expanded }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { name: SLOTS.menuActions, onSlotchange: this.handleMenuActionsSlotChange }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { name: SLOTS.menuTooltip, slot: _action_menu_js__WEBPACK_IMPORTED_MODULE_4__.S.tooltip })));
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-label": this.label, class: CSS.container, role: "group" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", null), this.renderMenu()));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return actionGroupCss; }
}, [17, "calcite-action-group", {
    "expanded": [516],
    "label": [1],
    "layout": [513],
    "columns": [514],
    "menuOpen": [1540, "menu-open"],
    "overlayPositioning": [513, "overlay-positioning"],
    "scale": [513],
    "messages": [1040],
    "messageOverrides": [1040],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "hasMenuActions": [32],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-action-group", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-action-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionGroup);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-action-menu":
      if (!customElements.get(tagName)) {
        (0,_action_menu_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        (0,_popover_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
  } });
}
defineCustomElement();




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYjYzZTczZjMxMmE4Zjk0M2JhMzE1OWUwNzYyYmMyMTAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dFO0FBQzFCO0FBQ0c7QUFDSDs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsK0NBQU87QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLCtEQUErRDtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0RUFBNEU7QUFDeEcsb0RBQW9ELDhEQUE4RDtBQUNsSDtBQUNBO0FBQ0Esc0lBQXNJLDhDQUFLO0FBQzNJO0FBQ0EsMkJBQTJCLHdDQUF3QztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtDQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtDQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLElBQUksbUZBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZUFBZTtBQUNoRDtBQUNBLGdDQUFnQywrQ0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMkNBQTJDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0ZBQWdGO0FBQ3hHLGNBQWMsMENBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix5RUFBQyxxQkFBcUI7QUFDNUM7QUFDQSxxREFBcUQsMENBQTBDLEdBQUc7QUFDbEc7QUFDQTs7QUFFb0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR3BMO0FBQ0E7QUFDQTtBQUNB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LHVCQUF1QixnREFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3RUFBd0U7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLElBQUksbUZBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRXlGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL0V4cGFuZFRvZ2dsZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvYWN0aW9uLWdyb3VwLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jb25kaXRpb25hbFNsb3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZm9yY2VVcGRhdGUsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldEVsZW1lbnREaXIgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBTIGFzIFNMT1RTJDEgfSBmcm9tICcuL2FjdGlvbi1ncm91cC5qcyc7XG5pbXBvcnQgeyBTIGFzIFNMT1RTIH0gZnJvbSAnLi9hY3Rpb24tbWVudS5qcyc7XG5cbmNvbnN0IG92ZXJmbG93QWN0aW9uc0RlYm91bmNlSW5NcyA9IDE1MDtcbmNvbnN0IGdyb3VwQnVmZmVyUHggPSAyO1xuY29uc3QgZ2V0QXZlcmFnZSA9IChhcnIpID0+IGFyci5yZWR1Y2UoKHAsIGMpID0+IHAgKyBjLCAwKSAvIGFyci5sZW5ndGg7XG5jb25zdCBnZUFjdGlvbkRpbWVuc2lvbnMgPSAoYWN0aW9ucykgPT4ge1xuICBjb25zdCBhY3Rpb25zTm90U2xvdHRlZCA9IGFjdGlvbnMuZmlsdGVyKChhY3Rpb24pID0+IGFjdGlvbi5zbG90ICE9PSBTTE9UUyQxLm1lbnVBY3Rpb25zKTtcbiAgY29uc3QgYWN0aW9uTGVuID0gYWN0aW9uc05vdFNsb3R0ZWQ/Lmxlbmd0aDtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25XaWR0aDogYWN0aW9uTGVuID8gZ2V0QXZlcmFnZShhY3Rpb25zTm90U2xvdHRlZC5tYXAoKGFjdGlvbikgPT4gYWN0aW9uLmNsaWVudFdpZHRoIHx8IDApKSA6IDAsXG4gICAgYWN0aW9uSGVpZ2h0OiBhY3Rpb25MZW4gPyBnZXRBdmVyYWdlKGFjdGlvbnNOb3RTbG90dGVkLm1hcCgoYWN0aW9uKSA9PiBhY3Rpb24uY2xpZW50SGVpZ2h0IHx8IDApKSA6IDAsXG4gIH07XG59O1xuY29uc3QgZ2V0TWF4QWN0aW9uQ291bnQgPSAoeyB3aWR0aCwgYWN0aW9uV2lkdGgsIGxheW91dCwgaGVpZ2h0LCBhY3Rpb25IZWlnaHQsIGdyb3VwQ291bnQsIH0pID0+IHtcbiAgY29uc3QgbWF4Q29udGFpbmVyUHggPSBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiID8gd2lkdGggOiBoZWlnaHQ7XG4gIGNvbnN0IGF2Z0l0ZW1QeCA9IGxheW91dCA9PT0gXCJob3Jpem9udGFsXCIgPyBhY3Rpb25XaWR0aCA6IGFjdGlvbkhlaWdodDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoKG1heENvbnRhaW5lclB4IC0gZ3JvdXBDb3VudCAqIGdyb3VwQnVmZmVyUHgpIC8gYXZnSXRlbVB4KTtcbn07XG5jb25zdCBnZXRPdmVyZmxvd0NvdW50ID0gKHsgbGF5b3V0LCBhY3Rpb25Db3VudCwgYWN0aW9uV2lkdGgsIHdpZHRoLCBhY3Rpb25IZWlnaHQsIGhlaWdodCwgZ3JvdXBDb3VudCwgfSkgPT4ge1xuICByZXR1cm4gTWF0aC5tYXgoYWN0aW9uQ291bnQgLSBnZXRNYXhBY3Rpb25Db3VudCh7IHdpZHRoLCBhY3Rpb25XaWR0aCwgbGF5b3V0LCBoZWlnaHQsIGFjdGlvbkhlaWdodCwgZ3JvdXBDb3VudCB9KSwgMCk7XG59O1xuY29uc3QgcXVlcnlBY3Rpb25zID0gKGVsKSA9PiB7XG4gIHJldHVybiBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWFjdGlvblwiKSkuZmlsdGVyKChhY3Rpb24pID0+IGFjdGlvbi5jbG9zZXN0KFwiY2FsY2l0ZS1hY3Rpb24tbWVudVwiKSA/IGFjdGlvbi5zbG90ID09PSBTTE9UUy50cmlnZ2VyIDogdHJ1ZSk7XG59O1xuY29uc3Qgb3ZlcmZsb3dBY3Rpb25zID0gKHsgYWN0aW9uR3JvdXBzLCBleHBhbmRlZCwgb3ZlcmZsb3dDb3VudCwgfSkgPT4ge1xuICBsZXQgbmVlZFRvU2xvdENvdW50ID0gb3ZlcmZsb3dDb3VudDtcbiAgYWN0aW9uR3JvdXBzLnJldmVyc2UoKS5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgIGxldCBzbG90dGVkV2l0aGluR3JvdXBDb3VudCA9IDA7XG4gICAgY29uc3QgZ3JvdXBBY3Rpb25zID0gcXVlcnlBY3Rpb25zKGdyb3VwKS5yZXZlcnNlKCk7XG4gICAgZ3JvdXBBY3Rpb25zLmZvckVhY2goKGdyb3VwQWN0aW9uKSA9PiB7XG4gICAgICBpZiAoZ3JvdXBBY3Rpb24uc2xvdCA9PT0gU0xPVFMkMS5tZW51QWN0aW9ucykge1xuICAgICAgICBncm91cEFjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoXCJzbG90XCIpO1xuICAgICAgICBncm91cEFjdGlvbi50ZXh0RW5hYmxlZCA9IGV4cGFuZGVkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChuZWVkVG9TbG90Q291bnQgPiAwKSB7XG4gICAgICBncm91cEFjdGlvbnMuc29tZSgoZ3JvdXBBY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgdW5zbG90dGVkQWN0aW9ucyA9IGdyb3VwQWN0aW9ucy5maWx0ZXIoKGFjdGlvbikgPT4gIWFjdGlvbi5zbG90KTtcbiAgICAgICAgaWYgKHVuc2xvdHRlZEFjdGlvbnMubGVuZ3RoID4gMSAmJiBncm91cEFjdGlvbnMubGVuZ3RoID4gMiAmJiAhZ3JvdXBBY3Rpb24uY2xvc2VzdChcImNhbGNpdGUtYWN0aW9uLW1lbnVcIikpIHtcbiAgICAgICAgICBncm91cEFjdGlvbi50ZXh0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgZ3JvdXBBY3Rpb24uc2V0QXR0cmlidXRlKFwic2xvdFwiLCBTTE9UUyQxLm1lbnVBY3Rpb25zKTtcbiAgICAgICAgICBzbG90dGVkV2l0aGluR3JvdXBDb3VudCsrO1xuICAgICAgICAgIGlmIChzbG90dGVkV2l0aGluR3JvdXBDb3VudCA+IDEpIHtcbiAgICAgICAgICAgIG5lZWRUb1Nsb3RDb3VudC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmVlZFRvU2xvdENvdW50IDwgMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmb3JjZVVwZGF0ZShncm91cCk7XG4gIH0pO1xufTtcblxuY29uc3QgSUNPTlMgPSB7XG4gIGNoZXZyb25zTGVmdDogXCJjaGV2cm9ucy1sZWZ0XCIsXG4gIGNoZXZyb25zUmlnaHQ6IFwiY2hldnJvbnMtcmlnaHRcIixcbn07XG5mdW5jdGlvbiBnZXRDYWxjaXRlUG9zaXRpb24ocG9zaXRpb24sIGVsKSB7XG4gIHJldHVybiBwb3NpdGlvbiB8fCBlbC5jbG9zZXN0KFwiY2FsY2l0ZS1zaGVsbC1wYW5lbFwiKT8ucG9zaXRpb24gfHwgXCJzdGFydFwiO1xufVxuZnVuY3Rpb24gdG9nZ2xlQ2hpbGRBY3Rpb25UZXh0KHsgZWwsIGV4cGFuZGVkLCB9KSB7XG4gIHF1ZXJ5QWN0aW9ucyhlbClcbiAgICAuZmlsdGVyKChlbCkgPT4gZWwuc2xvdCAhPT0gU0xPVFMkMS5tZW51QWN0aW9ucylcbiAgICAuZm9yRWFjaCgoYWN0aW9uKSA9PiAoYWN0aW9uLnRleHRFbmFibGVkID0gZXhwYW5kZWQpKTtcbiAgZWwucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtYWN0aW9uLWdyb3VwLCBjYWxjaXRlLWFjdGlvbi1tZW51XCIpLmZvckVhY2goKGVsKSA9PiAoZWwuZXhwYW5kZWQgPSBleHBhbmRlZCkpO1xufVxuY29uc3Qgc2V0VG9vbHRpcFJlZmVyZW5jZSA9ICh7IHRvb2x0aXAsIHJlZmVyZW5jZUVsZW1lbnQsIGV4cGFuZGVkLCByZWYsIH0pID0+IHtcbiAgaWYgKHRvb2x0aXApIHtcbiAgICB0b29sdGlwLnJlZmVyZW5jZUVsZW1lbnQgPSAhZXhwYW5kZWQgJiYgcmVmZXJlbmNlRWxlbWVudCA/IHJlZmVyZW5jZUVsZW1lbnQgOiBudWxsO1xuICB9XG4gIGlmIChyZWYpIHtcbiAgICByZWYocmVmZXJlbmNlRWxlbWVudCk7XG4gIH1cbiAgcmV0dXJuIHJlZmVyZW5jZUVsZW1lbnQ7XG59O1xuY29uc3QgRXhwYW5kVG9nZ2xlID0gKHsgZXhwYW5kZWQsIGV4cGFuZFRleHQsIGNvbGxhcHNlVGV4dCwgdG9nZ2xlLCBlbCwgcG9zaXRpb24sIHRvb2x0aXAsIHJlZiwgc2NhbGUsIH0pID0+IHtcbiAgY29uc3QgcnRsID0gZ2V0RWxlbWVudERpcihlbCkgPT09IFwicnRsXCI7XG4gIGNvbnN0IHRleHQgPSBleHBhbmRlZCA/IGNvbGxhcHNlVGV4dCA6IGV4cGFuZFRleHQ7XG4gIGNvbnN0IGljb25zID0gW0lDT05TLmNoZXZyb25zTGVmdCwgSUNPTlMuY2hldnJvbnNSaWdodF07XG4gIGlmIChydGwpIHtcbiAgICBpY29ucy5yZXZlcnNlKCk7XG4gIH1cbiAgY29uc3QgZW5kID0gZ2V0Q2FsY2l0ZVBvc2l0aW9uKHBvc2l0aW9uLCBlbCkgPT09IFwiZW5kXCI7XG4gIGNvbnN0IGV4cGFuZEljb24gPSBlbmQgPyBpY29uc1sxXSA6IGljb25zWzBdO1xuICBjb25zdCBjb2xsYXBzZUljb24gPSBlbmQgPyBpY29uc1swXSA6IGljb25zWzFdO1xuICBjb25zdCBhY3Rpb25Ob2RlID0gKGgoXCJjYWxjaXRlLWFjdGlvblwiLCB7IGljb246IGV4cGFuZGVkID8gZXhwYW5kSWNvbiA6IGNvbGxhcHNlSWNvbiwgb25DbGljazogdG9nZ2xlLCBzY2FsZTogc2NhbGUsIHRleHQ6IHRleHQsIHRleHRFbmFibGVkOiBleHBhbmRlZCwgdGl0bGU6ICFleHBhbmRlZCAmJiAhdG9vbHRpcCA/IHRleHQgOiBudWxsLCBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgIHJlZjogKHJlZmVyZW5jZUVsZW1lbnQpID0+IHNldFRvb2x0aXBSZWZlcmVuY2UoeyB0b29sdGlwLCByZWZlcmVuY2VFbGVtZW50LCBleHBhbmRlZCwgcmVmIH0pIH0pKTtcbiAgcmV0dXJuIGFjdGlvbk5vZGU7XG59O1xuXG5leHBvcnQgeyBFeHBhbmRUb2dnbGUgYXMgRSwgb3ZlcmZsb3dBY3Rpb25zIGFzIGEsIGdldE92ZXJmbG93Q291bnQgYXMgYiwgZ2VBY3Rpb25EaW1lbnNpb25zIGFzIGcsIG92ZXJmbG93QWN0aW9uc0RlYm91bmNlSW5NcyBhcyBvLCBxdWVyeUFjdGlvbnMgYXMgcSwgdG9nZ2xlQ2hpbGRBY3Rpb25UZXh0IGFzIHQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQsIGQgYXMgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCB9IGZyb20gJy4vY29uZGl0aW9uYWxTbG90LmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlLCBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgUyBhcyBTTE9UUyQxLCBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNCB9IGZyb20gJy4vYWN0aW9uLW1lbnUuanMnO1xuaW1wb3J0IHsgZSBhcyBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50IH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDUgfSBmcm9tICcuL2FjdGlvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMiB9IGZyb20gJy4vbG9hZGVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi9wb3BvdmVyLmpzJztcblxuY29uc3QgU0xPVFMgPSB7XG4gIG1lbnVBY3Rpb25zOiBcIm1lbnUtYWN0aW9uc1wiLFxuICBtZW51VG9vbHRpcDogXCJtZW51LXRvb2x0aXBcIixcbn07XG5jb25zdCBJQ09OUyA9IHtcbiAgbWVudTogXCJlbGxpcHNpc1wiLFxufTtcbmNvbnN0IENTUyA9IHtcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxufTtcblxuY29uc3QgYWN0aW9uR3JvdXBDc3MgPSBcIjpob3N0e2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKX06aG9zdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6MHB4Oy0tY2FsY2l0ZS1hY3Rpb24tZ3JvdXAtY29sdW1uczozOy0tY2FsY2l0ZS1hY3Rpb24tZ3JvdXAtZ2FwOjFweDstLWNhbGNpdGUtYWN0aW9uLWdyb3VwLXBhZGRpbmc6MXB4fS5jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzoxO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn06aG9zdChbY29sdW1ucz1cXFwiMVxcXCJdKXstLWNhbGNpdGUtYWN0aW9uLWdyb3VwLWNvbHVtbnM6MX06aG9zdChbY29sdW1ucz1cXFwiMlxcXCJdKXstLWNhbGNpdGUtYWN0aW9uLWdyb3VwLWNvbHVtbnM6Mn06aG9zdChbY29sdW1ucz1cXFwiM1xcXCJdKXstLWNhbGNpdGUtYWN0aW9uLWdyb3VwLWNvbHVtbnM6M306aG9zdChbY29sdW1ucz1cXFwiNFxcXCJdKXstLWNhbGNpdGUtYWN0aW9uLWdyb3VwLWNvbHVtbnM6NH06aG9zdChbY29sdW1ucz1cXFwiNVxcXCJdKXstLWNhbGNpdGUtYWN0aW9uLWdyb3VwLWNvbHVtbnM6NX06aG9zdChbY29sdW1ucz1cXFwiNlxcXCJdKXstLWNhbGNpdGUtYWN0aW9uLWdyb3VwLWNvbHVtbnM6Nn06aG9zdCg6Zmlyc3QtY2hpbGQpe3BhZGRpbmctYmxvY2stc3RhcnQ6MHB4fTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF0pLDpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF0pIC5jb250YWluZXJ7ZmxleC1kaXJlY3Rpb246cm93fTpob3N0KFtsYXlvdXQ9Z3JpZF0pe2Rpc3BsYXk6Z3JpZH06aG9zdChbbGF5b3V0PWdyaWRdKSAuY29udGFpbmVye2Rpc3BsYXk6Z3JpZDtwbGFjZS1jb250ZW50OnN0cmV0Y2g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJhY2tncm91bmQpO2dhcDp2YXIoLS1jYWxjaXRlLWFjdGlvbi1ncm91cC1nYXApO3BhZGRpbmc6dmFyKC0tY2FsY2l0ZS1hY3Rpb24tZ3JvdXAtZ2FwKTtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KHZhcigtLWNhbGNpdGUtYWN0aW9uLWdyb3VwLWNvbHVtbnMpLCBhdXRvKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgQWN0aW9uR3JvdXAgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuc2V0TWVudU9wZW4gPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMubWVudU9wZW4gPSAhIWV2ZW50LnRhcmdldC5vcGVuO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVNZW51QWN0aW9uc1Nsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzTWVudUFjdGlvbnMgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGF5b3V0ID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIHRoaXMuY29sdW1ucyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lbnVPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5vdmVybGF5UG9zaXRpb25pbmcgPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5zY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oYXNNZW51QWN0aW9ucyA9IGZhbHNlO1xuICB9XG4gIGV4cGFuZGVkSGFuZGxlcigpIHtcbiAgICB0aGlzLm1lbnVPcGVuID0gZmFsc2U7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50J3MgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBDb21wb25lbnQgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJNZW51KCkge1xuICAgIGNvbnN0IHsgZXhwYW5kZWQsIG1lbnVPcGVuLCBzY2FsZSwgbGF5b3V0LCBtZXNzYWdlcywgb3ZlcmxheVBvc2l0aW9uaW5nLCBoYXNNZW51QWN0aW9ucyB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJjYWxjaXRlLWFjdGlvbi1tZW51XCIsIHsgZXhwYW5kZWQ6IGV4cGFuZGVkLCBmbGlwUGxhY2VtZW50czogW1wibGVmdFwiLCBcInJpZ2h0XCJdLCBoaWRkZW46ICFoYXNNZW51QWN0aW9ucywgbGFiZWw6IG1lc3NhZ2VzLm1vcmUsIG9uQ2FsY2l0ZUFjdGlvbk1lbnVPcGVuOiB0aGlzLnNldE1lbnVPcGVuLCBvcGVuOiBtZW51T3Blbiwgb3ZlcmxheVBvc2l0aW9uaW5nOiBvdmVybGF5UG9zaXRpb25pbmcsIHBsYWNlbWVudDogbGF5b3V0ID09PSBcImhvcml6b250YWxcIiA/IFwiYm90dG9tLXN0YXJ0XCIgOiBcImxlYWRpbmctc3RhcnRcIiwgc2NhbGU6IHNjYWxlIH0sIGgoXCJjYWxjaXRlLWFjdGlvblwiLCB7IGljb246IElDT05TLm1lbnUsIHNjYWxlOiBzY2FsZSwgc2xvdDogU0xPVFMkMS50cmlnZ2VyLCB0ZXh0OiBtZXNzYWdlcy5tb3JlLCB0ZXh0RW5hYmxlZDogZXhwYW5kZWQgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMubWVudUFjdGlvbnMsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVNZW51QWN0aW9uc1Nsb3RDaGFuZ2UgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMubWVudVRvb2x0aXAsIHNsb3Q6IFNMT1RTJDEudG9vbHRpcCB9KSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5sYWJlbCwgY2xhc3M6IENTUy5jb250YWluZXIsIHJvbGU6IFwiZ3JvdXBcIiB9LCBoKFwic2xvdFwiLCBudWxsKSwgdGhpcy5yZW5kZXJNZW51KCkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGRlbGVnYXRlc0ZvY3VzKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiZXhwYW5kZWRcIjogW1wiZXhwYW5kZWRIYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBhY3Rpb25Hcm91cENzczsgfVxufSwgWzE3LCBcImNhbGNpdGUtYWN0aW9uLWdyb3VwXCIsIHtcbiAgICBcImV4cGFuZGVkXCI6IFs1MTZdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwibGF5b3V0XCI6IFs1MTNdLFxuICAgIFwiY29sdW1uc1wiOiBbNTE0XSxcbiAgICBcIm1lbnVPcGVuXCI6IFsxNTQwLCBcIm1lbnUtb3BlblwiXSxcbiAgICBcIm92ZXJsYXlQb3NpdGlvbmluZ1wiOiBbNTEzLCBcIm92ZXJsYXktcG9zaXRpb25pbmdcIl0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcImhhc01lbnVBY3Rpb25zXCI6IFszMl0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtYWN0aW9uLWdyb3VwXCIsIFwiY2FsY2l0ZS1hY3Rpb25cIiwgXCJjYWxjaXRlLWFjdGlvbi1tZW51XCIsIFwiY2FsY2l0ZS1pY29uXCIsIFwiY2FsY2l0ZS1sb2FkZXJcIiwgXCJjYWxjaXRlLXBvcG92ZXJcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtYWN0aW9uLWdyb3VwXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgQWN0aW9uR3JvdXApO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtYWN0aW9uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDUoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWFjdGlvbi1tZW51XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDQoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtbG9hZGVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXBvcG92ZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IEFjdGlvbkdyb3VwIGFzIEEsIFNMT1RTIGFzIFMsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZm9yY2VVcGRhdGUgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuXG5jb25zdCBvYnNlcnZlZCA9IG5ldyBTZXQoKTtcbmxldCBtdXRhdGlvbk9ic2VydmVyO1xuY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0geyBjaGlsZExpc3Q6IHRydWUgfTtcbi8qKlxuICogSGVscGVyIHRvIHNldCB1cCBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGNvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBpZiAoIW11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCBwcm9jZXNzTXV0YXRpb25zKTtcbiAgfVxuICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoY29tcG9uZW50LmVsLCBvYnNlcnZlck9wdGlvbnMpO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gdGVhciBkb3duIGEgY29uZGl0aW9uYWwgc2xvdCBjb21wb25lbnQgb24gZGlzY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQGRlcHJlY2F0ZWQgVXNlIGBvblNsb3RjaGFuZ2VgIGV2ZW50IHdpdGggYHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnRgIERPTSB1dGlsaXR5IGluc3RlYWQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNFbGVtZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCl9IC8+fVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIG9ic2VydmVkLmRlbGV0ZShjb21wb25lbnQuZWwpO1xuICAvLyB3ZSBleHBsaWNpdGx5IHByb2Nlc3MgcXVldWVkIG11dGF0aW9ucyBhbmQgZGlzY29ubmVjdCBhbmQgcmVjb25uZWN0XG4gIC8vIHRoZSBvYnNlcnZlciB1bnRpbCBNdXRhdGlvbk9ic2VydmVyIGdldHMgYW4gYHVub2JzZXJ2ZWAgbWV0aG9kXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMTI2XG4gIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25PYnNlcnZlci50YWtlUmVjb3JkcygpKTtcbiAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIGZvciAoY29uc3QgW2VsZW1lbnRdIG9mIG9ic2VydmVkLmVudHJpZXMoKSkge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCBvYnNlcnZlck9wdGlvbnMpO1xuICB9XG59XG5mdW5jdGlvbiBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9ucykge1xuICBtdXRhdGlvbnMuZm9yRWFjaCgoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGZvcmNlVXBkYXRlKHRhcmdldCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGMsIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgYXMgZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9